/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexPattern, IndexPatterns, Name, integer } from './_types.js'

export const CcrGetAutoFollowPatternAutoFollowPatternSummary = z.object({
  active: z.boolean(),
  remote_cluster: z.string().describe('The remote cluster containing the leader indices to match against.'),
  follow_index_pattern: IndexPattern.describe('The name of follower index.').optional(),
  leader_index_patterns: IndexPatterns.describe('An array of simple index patterns to match against indices in the remote cluster specified by the remote_cluster field.'),
  leader_index_exclusion_patterns: IndexPatterns.describe('An array of simple index patterns that can be used to exclude indices from being auto-followed.'),
  max_outstanding_read_requests: z.lazy(() => integer).describe('The maximum number of outstanding reads requests from the remote cluster.')
}).meta({ id: 'CcrGetAutoFollowPatternAutoFollowPatternSummary' })
export type CcrGetAutoFollowPatternAutoFollowPatternSummary = z.infer<typeof CcrGetAutoFollowPatternAutoFollowPatternSummary>

export const CcrGetAutoFollowPatternAutoFollowPattern = z.object({
  name: z.lazy(() => Name),
  pattern: CcrGetAutoFollowPatternAutoFollowPatternSummary
}).meta({ id: 'CcrGetAutoFollowPatternAutoFollowPattern' })
export type CcrGetAutoFollowPatternAutoFollowPattern = z.infer<typeof CcrGetAutoFollowPatternAutoFollowPattern>

/**
 * Get auto-follow patterns.
 *
 * Get cross-cluster replication auto-follow patterns.
 */
export const CcrGetAutoFollowPatternRequest = z.object({
  name: z.lazy(() => Name).describe('The auto-follow pattern collection that you want to retrieve. If you do not specify a name, the API returns information for all collections.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrGetAutoFollowPatternRequest' })
export type CcrGetAutoFollowPatternRequest = z.infer<typeof CcrGetAutoFollowPatternRequest>

export const CcrGetAutoFollowPatternResponse = z.object({
  patterns: z.array(CcrGetAutoFollowPatternAutoFollowPattern)
}).meta({ id: 'CcrGetAutoFollowPatternResponse' })
export type CcrGetAutoFollowPatternResponse = z.infer<typeof CcrGetAutoFollowPatternResponse>
