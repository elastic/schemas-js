/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names, Namespace, NodeStatistics, Service } from './_types.js'
import { SecurityClusterNode } from './security.js'

/**
 * Clear service account token caches.
 *
 * Evict a subset of all entries from the service account token caches.
 * Two separate caches exist for service account tokens: one cache for tokens backed by the `service_tokens` file, and another for tokens backed by the `.security` index.
 * This API clears matching entries from both caches.
 *
 * The cache for service account tokens backed by the `.security` index is cleared automatically on state changes of the security index.
 * The cache for tokens backed by the `service_tokens` file is cleared automatically on file changes.
 */
export const SecurityClearCachedServiceTokensRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The namespace, which is a top-level grouping of service accounts.').meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The name of the service, which must be unique within its namespace.').meta({ found_in: 'path' }),
  name: z.lazy(() => Names).describe('A comma-separated list of token names to evict from the service account token caches. Use a wildcard (`*`) to evict all tokens that belong to a service account. It does not support other wildcard patterns.').meta({ found_in: 'path' })
}).meta({ id: 'SecurityClearCachedServiceTokensRequest' })
export type SecurityClearCachedServiceTokensRequest = z.infer<typeof SecurityClearCachedServiceTokensRequest>

export const SecurityClearCachedServiceTokensResponse = z.object({
  node_stats: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), SecurityClusterNode)
}).meta({ id: 'SecurityClearCachedServiceTokensResponse' })
export type SecurityClearCachedServiceTokensResponse = z.infer<typeof SecurityClearCachedServiceTokensResponse>
