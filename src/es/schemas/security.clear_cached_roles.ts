/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names, NodeStatistics } from './_types.js'
import { SecurityClusterNode } from './security.js'

/**
 * Clear the roles cache.
 *
 * Evict roles from the native role cache.
 */
export const SecurityClearCachedRolesRequest = z.object({
  name: z.lazy(() => Names).describe('A comma-separated list of roles to evict from the role cache. To evict all roles, use an asterisk (`*`). It does not support other wildcard patterns.').meta({ found_in: 'path' })
}).meta({ id: 'SecurityClearCachedRolesRequest' })
export type SecurityClearCachedRolesRequest = z.infer<typeof SecurityClearCachedRolesRequest>

export const SecurityClearCachedRolesResponse = z.object({
  node_stats: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), SecurityClusterNode)
}).meta({ id: 'SecurityClearCachedRolesResponse' })
export type SecurityClearCachedRolesResponse = z.infer<typeof SecurityClearCachedRolesResponse>
