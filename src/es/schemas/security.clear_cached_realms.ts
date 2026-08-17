/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names, NodeStatistics } from './_types.js'
import { SecurityClusterNode } from './security.js'

/**
 * Clear the user cache.
 *
 * Evict users from the user cache.
 * You can completely clear the cache or evict specific users.
 *
 * User credentials are cached in memory on each node to avoid connecting to a remote authentication service or hitting the disk for every incoming request.
 * There are realm settings that you can use to configure the user cache.
 * For more information, refer to the documentation about controlling the user cache.
 */
export const SecurityClearCachedRealmsRequest = z.object({
  realms: z.lazy(() => Names).describe('A comma-separated list of realms. To clear all realms, use an asterisk (`*`). It does not support other wildcard patterns.').meta({ found_in: 'path' }),
  usernames: z.array(z.string()).describe('A comma-separated list of the users to clear from the cache. If you do not specify this parameter, the API evicts all users from the user cache.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityClearCachedRealmsRequest' })
export type SecurityClearCachedRealmsRequest = z.infer<typeof SecurityClearCachedRealmsRequest>

export const SecurityClearCachedRealmsResponse = z.object({
  node_stats: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), SecurityClusterNode)
}).meta({ id: 'SecurityClearCachedRealmsResponse' })
export type SecurityClearCachedRealmsResponse = z.infer<typeof SecurityClearCachedRealmsResponse>
