/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, Names, NodeId } from './_types.js'

export const CatCatCircuitBreakerColumn = z.union([z.enum(['node_id', 'id', 'node_name', 'nn', 'breaker', 'br', 'limit', 'l', 'limit_bytes', 'lb', 'estimated', 'e', 'estimated_bytes', 'eb', 'tripped', 't', 'overhead', 'o']), z.string()]).meta({ id: 'CatCatCircuitBreakerColumn' })
export type CatCatCircuitBreakerColumn = z.infer<typeof CatCatCircuitBreakerColumn>

export const CatCatCircuitBreakerColumns = z.union([CatCatCircuitBreakerColumn, z.array(CatCatCircuitBreakerColumn)]).meta({ id: 'CatCatCircuitBreakerColumns' })
export type CatCatCircuitBreakerColumns = z.infer<typeof CatCatCircuitBreakerColumns>

export const CatCircuitBreakerCircuitBreakerRecord = z.object({
  node_id: z.lazy(() => NodeId).describe('Persistent node ID').optional(),
  id: z.lazy(() => NodeId).describe('Persistent node ID').optional(),
  node_name: z.string().describe('Node name').optional(),
  nn: z.string().describe('Node name').optional(),
  breaker: z.string().describe('Breaker name').optional(),
  br: z.string().describe('Breaker name').optional(),
  limit: z.string().describe('Limit size').optional(),
  l: z.string().describe('Limit size').optional(),
  limit_bytes: z.lazy(() => ByteSize).describe('Limit size in bytes').optional(),
  lb: z.lazy(() => ByteSize).describe('Limit size in bytes').optional(),
  estimated: z.string().describe('Estimated size').optional(),
  e: z.string().describe('Estimated size').optional(),
  estimated_bytes: z.lazy(() => ByteSize).describe('Estimated size in bytes').optional(),
  eb: z.lazy(() => ByteSize).describe('Estimated size in bytes').optional(),
  tripped: z.string().describe('Tripped count').optional(),
  t: z.string().describe('Tripped count').optional(),
  overhead: z.string().describe('Overhead').optional(),
  o: z.string().describe('Overhead').optional()
}).meta({ id: 'CatCircuitBreakerCircuitBreakerRecord' })
export type CatCircuitBreakerCircuitBreakerRecord = z.infer<typeof CatCircuitBreakerCircuitBreakerRecord>

/**
 * Get circuit breakers statistics.
 *
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications.
 */
export const CatCircuitBreakerRequest = z.object({
  circuit_breaker_patterns: z.union([z.string(), z.array(z.string())]).describe('A comma-separated list of regular-expressions to filter the circuit breakers in the output').optional().meta({ found_in: 'path' }),
  h: CatCatCircuitBreakerColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatCircuitBreakerRequest' })
export type CatCircuitBreakerRequest = z.infer<typeof CatCircuitBreakerRequest>

export const CatCircuitBreakerResponse = z.array(CatCircuitBreakerCircuitBreakerRecord).meta({ id: 'CatCircuitBreakerResponse' })
export type CatCircuitBreakerResponse = z.infer<typeof CatCircuitBreakerResponse>
