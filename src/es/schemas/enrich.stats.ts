/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, Id, Name, integer, long } from './_types.js'
import { TasksTaskInfo } from './tasks.js'

export const EnrichStatsCacheStats = z.object({
  node_id: z.lazy(() => Id),
  count: z.lazy(() => integer),
  hits: z.lazy(() => integer),
  hits_time_in_millis: z.lazy(() => DurationValue),
  misses: z.lazy(() => integer),
  misses_time_in_millis: z.lazy(() => DurationValue),
  evictions: z.lazy(() => integer),
  size_in_bytes: z.lazy(() => long)
}).meta({ id: 'EnrichStatsCacheStats' })
export type EnrichStatsCacheStats = z.infer<typeof EnrichStatsCacheStats>

export const EnrichStatsCoordinatorStats = z.object({
  executed_searches_total: z.lazy(() => long),
  node_id: z.lazy(() => Id),
  queue_size: z.lazy(() => integer),
  remote_requests_current: z.lazy(() => integer),
  remote_requests_total: z.lazy(() => long)
}).meta({ id: 'EnrichStatsCoordinatorStats' })
export type EnrichStatsCoordinatorStats = z.infer<typeof EnrichStatsCoordinatorStats>

export const EnrichStatsExecutingPolicy = z.object({
  name: z.lazy(() => Name),
  task: TasksTaskInfo
}).meta({ id: 'EnrichStatsExecutingPolicy' })
export type EnrichStatsExecutingPolicy = z.infer<typeof EnrichStatsExecutingPolicy>

/**
 * Get enrich stats.
 *
 * Returns enrich coordinator statistics and information about enrich policies that are currently executing.
 */
export const EnrichStatsRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EnrichStatsRequest' })
export type EnrichStatsRequest = z.infer<typeof EnrichStatsRequest>

export const EnrichStatsResponse = z.object({
  coordinator_stats: z.array(EnrichStatsCoordinatorStats).describe('Objects containing information about each coordinating ingest node for configured enrich processors.'),
  executing_policies: z.array(EnrichStatsExecutingPolicy).describe('Objects containing information about each enrich policy that is currently executing.'),
  cache_stats: z.array(EnrichStatsCacheStats).describe('Objects containing information about the enrich cache stats on each ingest node.').optional()
}).meta({ id: 'EnrichStatsResponse' })
export type EnrichStatsResponse = z.infer<typeof EnrichStatsResponse>
