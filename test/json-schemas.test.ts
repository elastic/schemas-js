/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv from 'ajv/dist/2020.js'

const ajv = new Ajv({ strict: false })

const srcDir = join(fileURLToPath(import.meta.url), '..', '..', 'src')
const jsonDirs = ['es/json', 'kibana/json', 'cloud/json', 'auto-ops/json']

for (const dir of jsonDirs) {
  const fullDir = join(srcDir, dir)
  let files: string[]
  try {
    files = readdirSync(fullDir).filter(f => f.endsWith('.json') && f !== 'manifest.json')
  } catch {
    // dir not generated yet — skip
    continue
  }

  describe(`JSON Schema validity: ${dir}`, () => {
    for (const file of files) {
      it(file, () => {
        const schema = JSON.parse(readFileSync(join(fullDir, file), 'utf8'))
        const valid = ajv.validateSchema(schema)
        expect(valid, `Invalid schema in ${file}: ${JSON.stringify(ajv.errors)}`).toBe(true)
      })
    }
  })
}

describe('AutoOps insight request schemas', () => {
  const dir = join(srcDir, 'auto-ops/json')
  const search = JSON.parse(readFileSync(join(dir, 'insights.search-insights.request.json'), 'utf8'))
  const get = JSON.parse(readFileSync(join(dir, 'insights.get-insight-by-id.request.json'), 'utf8'))

  it('search is a read-only POST with the insight filters', () => {
    expect(search['x-method']).toBe('POST')
    expect(search['x-read-only']).toBe(true)
    expect(search['x-destructive']).toBe(false)
    expect(search.required).toEqual(['resourceType', 'resourceId'])
    expect(search.properties.resourceType.enum).toEqual(['deployments', 'projects', 'clusters'])
    expect(search.properties.rules.type).toBe('array')
    expect(search.properties.modified_only.type).toBe('boolean')
    expect(search.properties.body).toBeUndefined()
  })

  it('get is a read-only GET by insight id', () => {
    expect(get['x-method']).toBe('GET')
    expect(get['x-read-only']).toBe(true)
    expect(get['x-destructive']).toBe(false)
    expect(get.required).toEqual(['resourceType', 'resourceId', 'insightId'])
  })
})
