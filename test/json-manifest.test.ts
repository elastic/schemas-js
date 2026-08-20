/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { esJsonManifest } from '../src/es/tools/json-manifest.ts'
import { kibanaJsonManifest } from '../src/kibana/tools/json-manifest.ts'
import { cloudJsonManifest } from '../src/cloud/tools/json-manifest.ts'
import { serverlessJsonManifest } from '../src/serverless/tools/json-manifest.ts'

const srcDir = join(fileURLToPath(import.meta.url), '..', '..', 'src')

const manifests: Record<string, readonly string[]> = {
  es: esJsonManifest,
  kibana: kibanaJsonManifest,
  cloud: cloudJsonManifest,
  serverless: serverlessJsonManifest,
}

describe('JSON schema manifests', () => {
  for (const [category, manifest] of Object.entries(manifests)) {
    it(`${category}JsonManifest lists exactly the files in src/${category}/json/`, () => {
      const actual = readdirSync(join(srcDir, category, 'json')).filter(f => f.endsWith('.json')).sort()
      expect([...manifest].sort()).toEqual(actual)
    })

    it(`${category}JsonManifest has no duplicate or empty entries`, () => {
      expect(manifest.length).toBeGreaterThan(0)
      expect(new Set(manifest).size).toBe(manifest.length)
      expect(manifest.every(f => f.length > 0)).toBe(true)
    })
  }
})
