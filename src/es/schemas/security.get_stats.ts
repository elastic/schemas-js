/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { XpackUsageSecurityRolesDls } from './xpack.usage.js'

export const SecurityRolesStats = z.object({
  dls: XpackUsageSecurityRolesDls.describe('Document-level security (DLS) statistics.')
}).meta({ id: 'SecurityRolesStats' })
export type SecurityRolesStats = z.infer<typeof SecurityRolesStats>

export const SecurityNodeSecurityStats = z.object({
  roles: SecurityRolesStats.describe('Role statistics.')
}).meta({ id: 'SecurityNodeSecurityStats' })
export type SecurityNodeSecurityStats = z.infer<typeof SecurityNodeSecurityStats>

/**
 * Get security stats.
 *
 * Gather security usage statistics from all node(s) within the cluster.
 */
export const SecurityGetStatsRequest = z.object({
}).meta({ id: 'SecurityGetStatsRequest' })
export type SecurityGetStatsRequest = z.infer<typeof SecurityGetStatsRequest>

export const SecurityGetStatsResponse = z.object({
  nodes: z.record(z.string(), SecurityNodeSecurityStats).describe('A map of node IDs to security statistics for that node.')
}).meta({ id: 'SecurityGetStatsResponse' })
export type SecurityGetStatsResponse = z.infer<typeof SecurityGetStatsResponse>
