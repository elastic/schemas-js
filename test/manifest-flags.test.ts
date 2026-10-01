/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { esRegistry } from '../src/es/tools/index.ts'
import { cloudRegistry } from '../src/cloud/tools/index.ts'
import { kibanaRegistry } from '../src/kibana/tools/index.ts'
import { serverlessRegistry } from '../src/serverless/tools/index.ts'
import type { ApiRegistry } from '../src/registry.ts'

describe('manifest classification flags match the loaded definitions', () => {
  const registries: Array<[string, ApiRegistry]> = [
    ['cloud', cloudRegistry],
    ['es', esRegistry],
    ['kibana', kibanaRegistry],
    ['serverless', serverlessRegistry],
  ]

  for (const [product, registry] of registries) {
    it(`${product}: every manifest entry carries its definition's destructive and readOnly flags`, async () => {
      for (const meta of registry.manifest) {
        const { definition } = await registry.loadApi(meta.id)
        expect(meta.destructive, `${meta.id} destructive`).toBe(definition.destructive)
        expect(meta.readOnly, `${meta.id} readOnly`).toBe(definition.readOnly)
      }
    }, 120_000)
  }
})
