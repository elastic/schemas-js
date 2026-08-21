/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names, NodeStatistics } from './_types.js'
import { SecurityClusterNode } from './security.js'

/**
 * Clear the privileges cache.
 *
 * Evict privileges from the native application privilege cache.
 * The cache is also automatically cleared for applications that have their privileges updated.
 */
export const SecurityClearCachedPrivilegesRequest = z.object({
  application: z.lazy(() => Names).describe('A comma-separated list of applications. To clear all applications, use an asterism (`*`). It does not support other wildcard patterns.').meta({ found_in: 'path' })
}).meta({ id: 'SecurityClearCachedPrivilegesRequest' })
export type SecurityClearCachedPrivilegesRequest = z.infer<typeof SecurityClearCachedPrivilegesRequest>

export const SecurityClearCachedPrivilegesResponse = z.object({
  node_stats: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), SecurityClusterNode)
}).meta({ id: 'SecurityClearCachedPrivilegesResponse' })
export type SecurityClearCachedPrivilegesResponse = z.infer<typeof SecurityClearCachedPrivilegesResponse>
