/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const srcDir = join(fileURLToPath(import.meta.url), '..', '..', 'src')
const categories = ['es', 'kibana', 'cloud', 'serverless']

for (const category of categories) {
  const manifestPath = join(srcDir, category, 'json', 'manifest.json')
  const manifest: unknown = JSON.parse(readFileSync(manifestPath, 'utf8'))
  const schemaFiles = new Set(
    readdirSync(join(srcDir, category, 'json')).filter(f => f.endsWith('.json') && f !== 'manifest.json')
  )

  describe(`${category}/json/manifest.json`, () => {
    it('is a non-empty array', () => {
      expect(Array.isArray(manifest)).toBe(true)
      expect((manifest as unknown[]).length).toBeGreaterThan(0)
    })

    it('has no duplicate ids', () => {
      const ids = (manifest as Array<{ id: string }>).map(e => e.id)
      expect(new Set(ids).size).toBe(ids.length)
    })

    for (const [i, entry] of (manifest as unknown[]).entries()) {
      const e = entry as Record<string, unknown>
      const label = typeof e.id === 'string' ? e.id : `entry[${i}]`

      it(`${label}: required string fields are non-empty strings`, () => {
        for (const field of ['id', 'name', 'namespaceFile'] as const) {
          expect(typeof e[field], `${field} should be a string`).toBe('string')
          expect((e[field] as string).length, `${field} should be non-empty`).toBeGreaterThan(0)
        }
        expect(typeof e.description, 'description should be a string').toBe('string')
      })

      it(`${label}: namespace is a string or null`, () => {
        expect(e.namespace === null || typeof e.namespace === 'string').toBe(true)
      })

      it(`${label}: namespaceFile references at least one schema file`, () => {
        const base = e.namespaceFile as string
        const referenced = [...schemaFiles].filter(f => f.startsWith(base + '.') || f === base + '.json')
        expect(referenced.length, `no schema files found matching namespaceFile "${base}"`).toBeGreaterThan(0)
      })
    }
  })
}
