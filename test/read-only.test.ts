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

describe('spot-check known read-only classifications', () => {
  const cases: Array<[ApiRegistry, string, boolean]> = [
    // es: GET/HEAD reads and search-style POSTs are read-only; writes, enrollment and
    // point-in-time allocation are not.
    [esRegistry, 'search', true],
    [esRegistry, 'indices.exists', true],
    [esRegistry, 'count', true],
    [esRegistry, 'sql.translate', true],
    [esRegistry, 'security.enroll_node', false],
    [esRegistry, 'open_point_in_time', false],
    [esRegistry, 'bulk', false],
    [esRegistry, 'indices.delete', false],
    // cloud: list and search are read-only; partial update is not.
    [cloudRegistry, 'deployments.list-deployments', true],
    [cloudRegistry, 'deployments.search-deployments', true],
    [cloudRegistry, 'accounts.patch-current-account', false],
    // kibana: reads, bulk gets and exports are read-only; the ML saved-object sync GET and
    // rule updates are not.
    [kibanaRegistry, 'security-detections-api.read-rule', true],
    [kibanaRegistry, 'alerting-v2.post-alerting-v2-rules-bulk-get', true],
    [kibanaRegistry, 'saved-objects.post-saved-objects-export', true],
    [kibanaRegistry, 'ml.ml-sync', false],
    [kibanaRegistry, 'security-detections-api.patch-rule', false],
    // serverless: GET is read-only; create is not.
    [serverlessRegistry, 'elasticsearch-projects.list-elasticsearch-projects', true],
    [serverlessRegistry, 'elasticsearch-projects.create-elasticsearch-project', false],
  ]

  for (const [registry, id, expected] of cases) {
    it(`${id} → readOnly: ${expected}`, async () => {
      const { definition } = await registry.loadApi(id)
      expect(definition.readOnly).toBe(expected)
    }, 30_000)
  }
})

describe('read-only and destructive flags are consistent across every definition', () => {
  const registries: Array<[string, ApiRegistry]> = [
    ['cloud', cloudRegistry],
    ['es', esRegistry],
    ['kibana', kibanaRegistry],
    ['serverless', serverlessRegistry],
  ]

  for (const [product, registry] of registries) {
    it(`${product}: every definition carries a boolean readOnly and is never both read-only and destructive`, async () => {
      for (const meta of registry.manifest) {
        const { definition } = await registry.loadApi(meta.id)
        expect(typeof definition.readOnly, `${meta.id} readOnly`).toBe('boolean')
        expect(definition.readOnly && definition.destructive, `${meta.id} read-only but destructive`).toBe(false)
      }
    }, 120_000)
  }
})
