/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from 'vitest'
import type { CloudApiDefinition } from '../src/cloud/tools/types.ts'

describe('CloudApiDefinition', () => {
  const getDeploymentDef: CloudApiDefinition = {
    name: 'get',
    namespace: 'deployments',
    description: 'Get a deployment by ID.',
    method: 'GET',
    path: '/api/v1/deployments/{deploymentId}',
    input: {
      type: 'object',
      properties: {
        deploymentId: { type: 'string', 'x-found-in': 'path' },
        show_hidden: { type: 'boolean', 'x-found-in': 'query' },
      },
    },
  }

  it('accepts a GET definition with path and query input', () => {
    expect(getDeploymentDef.method).toBe('GET')
    expect(getDeploymentDef.input?.properties).toHaveProperty('deploymentId')
  })

  it('responseType is optional', () => {
    const def: CloudApiDefinition = { ...getDeploymentDef, responseType: 'ndjson' }
    expect(def.responseType).toBe('ndjson')

    const plain: CloudApiDefinition = { ...getDeploymentDef }
    expect(plain.responseType).toBeUndefined()
  })
})
