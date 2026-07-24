/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import { esRegistry } from '../src/es/tools/index.ts'
import { cloudRegistry } from '../src/cloud/tools/index.ts'
import { kibanaRegistry } from '../src/kibana/tools/index.ts'
import type { ApiRegistry } from '../src/registry.ts'

describe('spot-check known destructive classifications', () => {
  const cases: Array<[ApiRegistry, string, boolean]> = [
    // es: DELETE and mutating writes are destructive; reads are not.
    [esRegistry, 'indices.delete', true],
    [esRegistry, 'create', false], // pure-create write, non-destructive override
    [esRegistry, 'search', false],
    [esRegistry, 'get', false],
    // cloud: PATCH partial update is destructive; list is not.
    [cloudRegistry, 'accounts.patch-current-account', true],
    [cloudRegistry, 'deployments.list-deployments', false],
    // kibana: PATCH rule/list updates are destructive; reads are not.
    [kibanaRegistry, 'security-detections-api.patch-rule', true],
    [kibanaRegistry, 'security-lists-api.patch-list', true],
    [kibanaRegistry, 'maintenance-window.patch-maintenance-window-id', true],
    [kibanaRegistry, 'security-detections-api.read-rule', false],
  ]

  for (const [registry, id, expected] of cases) {
    it(`${id} → destructive: ${expected}`, async () => {
      const { definition } = await registry.loadApi(id)
      expect((definition as { destructive?: boolean }).destructive).toBe(expected)
    }, 30_000)
  }
})
