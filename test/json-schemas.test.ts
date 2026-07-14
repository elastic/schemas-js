/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import Ajv from 'ajv/dist/2020.js'

const ajv = new Ajv({ strict: false })

const srcDir = join(import.meta.dirname, '..', 'src')
const jsonDirs = ['es/json', 'kibana/json', 'cloud/json']

for (const dir of jsonDirs) {
  const fullDir = join(srcDir, dir)
  let files: string[]
  try {
    files = readdirSync(fullDir).filter(f => f.endsWith('.json'))
  } catch {
    // dir not generated yet — skip
    continue
  }

  describe(`JSON Schema validity: ${dir}`, () => {
    for (const file of files) {
      it(file, () => {
        const schema = JSON.parse(readFileSync(join(fullDir, file), 'utf8'))
        const valid = ajv.validateSchema(schema)
        assert.ok(valid, `Invalid schema in ${file}: ${JSON.stringify(ajv.errors)}`)
      })
    }
  })
}
