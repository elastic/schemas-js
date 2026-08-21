/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Name, NodeStatistics } from './_types.js'

export const CapabilitiesFailedNodeException = z.object({
  node_id: z.lazy(() => Id)
}).meta({ id: 'CapabilitiesFailedNodeException' })
export type CapabilitiesFailedNodeException = z.infer<typeof CapabilitiesFailedNodeException>

export const CapabilitiesRestMethod = z.enum(['GET', 'HEAD', 'POST', 'PUT', 'DELETE']).meta({ id: 'CapabilitiesRestMethod' })
export type CapabilitiesRestMethod = z.infer<typeof CapabilitiesRestMethod>

/** Checks if the specified combination of method, API, parameters, and arbitrary capabilities are supported. */
export const CapabilitiesRequest = z.object({
  method: CapabilitiesRestMethod.describe('REST method to check').optional().meta({ found_in: 'query' }),
  path: z.string().describe('API path to check').optional().meta({ found_in: 'query' }),
  parameters: z.union([z.string(), z.array(z.string())]).describe('Comma-separated list of API parameters to check').optional().meta({ found_in: 'query' }),
  capabilities: z.union([z.string(), z.array(z.string())]).describe('Comma-separated list of arbitrary API capabilities to check').optional().meta({ found_in: 'query' }),
  local_only: z.boolean().describe('True if only the node being called should be considered').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CapabilitiesRequest' })
export type CapabilitiesRequest = z.infer<typeof CapabilitiesRequest>

export const CapabilitiesResponse = z.object({
  _nodes: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  supported: z.union([z.boolean(), z.null()]),
  failures: z.array(CapabilitiesFailedNodeException).optional()
}).meta({ id: 'CapabilitiesResponse' })
export type CapabilitiesResponse = z.infer<typeof CapabilitiesResponse>
