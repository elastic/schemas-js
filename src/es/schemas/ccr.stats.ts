/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, ErrorCause, Name, VersionNumber, long } from './_types.js'
import { CcrFollowIndexStats } from './ccr.js'

export const CcrStatsAutoFollowedCluster = z.object({
  cluster_name: z.lazy(() => Name),
  last_seen_metadata_version: z.lazy(() => VersionNumber),
  time_since_last_check_millis: z.lazy(() => DurationValue)
}).meta({ id: 'CcrStatsAutoFollowedCluster' })
export type CcrStatsAutoFollowedCluster = z.infer<typeof CcrStatsAutoFollowedCluster>

export const CcrStatsAutoFollowStats = z.object({
  auto_followed_clusters: z.array(CcrStatsAutoFollowedCluster),
  number_of_failed_follow_indices: z.lazy(() => long).describe('The number of indices that the auto-follow coordinator failed to automatically follow. The causes of recent failures are captured in the logs of the elected master node and in the `auto_follow_stats.recent_auto_follow_errors` field.'),
  number_of_failed_remote_cluster_state_requests: z.lazy(() => long).describe('The number of times that the auto-follow coordinator failed to retrieve the cluster state from a remote cluster registered in a collection of auto-follow patterns.'),
  number_of_successful_follow_indices: z.lazy(() => long).describe('The number of indices that the auto-follow coordinator successfully followed.'),
  recent_auto_follow_errors: z.array(z.lazy(() => ErrorCause)).describe('An array of objects representing failures by the auto-follow coordinator.')
}).meta({ id: 'CcrStatsAutoFollowStats' })
export type CcrStatsAutoFollowStats = z.infer<typeof CcrStatsAutoFollowStats>

export const CcrStatsFollowStats = z.object({
  indices: z.array(CcrFollowIndexStats)
}).meta({ id: 'CcrStatsFollowStats' })
export type CcrStatsFollowStats = z.infer<typeof CcrStatsFollowStats>

/**
 * Get cross-cluster replication stats.
 *
 * This API returns stats about auto-following and the same shard-level stats as the get follower stats API.
 */
export const CcrStatsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrStatsRequest' })
export type CcrStatsRequest = z.infer<typeof CcrStatsRequest>

export const CcrStatsResponse = z.object({
  auto_follow_stats: CcrStatsAutoFollowStats.describe('Statistics for the auto-follow coordinator.'),
  follow_stats: CcrStatsFollowStats.describe('Shard-level statistics for follower indices.')
}).meta({ id: 'CcrStatsResponse' })
export type CcrStatsResponse = z.infer<typeof CcrStatsResponse>
