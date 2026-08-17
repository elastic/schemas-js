/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, long } from './_types.js'

export const SlmSnapshotPolicyStats = z.object({
  policy: z.string(),
  snapshots_taken: z.lazy(() => long),
  snapshots_failed: z.lazy(() => long),
  snapshots_deleted: z.lazy(() => long),
  snapshot_deletion_failures: z.lazy(() => long)
}).meta({ id: 'SlmSnapshotPolicyStats' })
export type SlmSnapshotPolicyStats = z.infer<typeof SlmSnapshotPolicyStats>

/**
 * Get snapshot lifecycle management statistics.
 *
 * Get global and policy-level statistics about actions taken by snapshot lifecycle management.
 */
export const SlmGetStatsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmGetStatsRequest' })
export type SlmGetStatsRequest = z.infer<typeof SlmGetStatsRequest>

export const SlmGetStatsResponse = z.object({
  retention_deletion_time: z.lazy(() => Duration),
  retention_deletion_time_millis: z.lazy(() => DurationValue),
  retention_failed: z.lazy(() => long),
  retention_runs: z.lazy(() => long),
  retention_timed_out: z.lazy(() => long),
  total_snapshots_deleted: z.lazy(() => long),
  total_snapshot_deletion_failures: z.lazy(() => long),
  total_snapshots_failed: z.lazy(() => long),
  total_snapshots_taken: z.lazy(() => long),
  policy_stats: z.array(SlmSnapshotPolicyStats)
}).meta({ id: 'SlmGetStatsResponse' })
export type SlmGetStatsResponse = z.infer<typeof SlmGetStatsResponse>
