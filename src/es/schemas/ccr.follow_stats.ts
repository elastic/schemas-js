/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Indices } from './_types.js'
import { CcrFollowIndexStats } from './ccr.js'

/**
 * Get follower stats.
 *
 * Get cross-cluster replication follower stats.
 * The API returns shard-level stats about the "following tasks" associated with each shard for the specified indices.
 */
export const CcrFollowStatsRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-delimited list of index patterns.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrFollowStatsRequest' })
export type CcrFollowStatsRequest = z.infer<typeof CcrFollowStatsRequest>

export const CcrFollowStatsResponse = z.object({
  indices: z.array(CcrFollowIndexStats).describe('An array of follower index statistics.')
}).meta({ id: 'CcrFollowStatsResponse' })
export type CcrFollowStatsResponse = z.infer<typeof CcrFollowStatsResponse>
