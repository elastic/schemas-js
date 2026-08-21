/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Ids, Name, NodeStatistics } from './_types.js'
import { SecurityClusterNode } from './security.js'

/**
 * Clear the API key cache.
 *
 * Evict a subset of all entries from the API key cache.
 * The cache is also automatically cleared on state changes of the security index.
 */
export const SecurityClearApiKeyCacheRequest = z.object({
  ids: z.lazy(() => Ids).describe('Comma-separated list of API key IDs to evict from the API key cache. To evict all API keys, use `*`. Does not support other wildcard patterns.').meta({ found_in: 'path' })
}).meta({ id: 'SecurityClearApiKeyCacheRequest' })
export type SecurityClearApiKeyCacheRequest = z.infer<typeof SecurityClearApiKeyCacheRequest>

export const SecurityClearApiKeyCacheResponse = z.object({
  node_stats: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), SecurityClusterNode)
}).meta({ id: 'SecurityClearApiKeyCacheResponse' })
export type SecurityClearApiKeyCacheResponse = z.infer<typeof SecurityClearApiKeyCacheResponse>
