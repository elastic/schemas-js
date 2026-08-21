/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, Name, NodeStatistics, long } from './_types.js'

export const WatcherExecutionPhase = z.enum(['awaits_execution', 'started', 'input', 'condition', 'actions', 'watch_transform', 'aborted', 'finished']).meta({ id: 'WatcherExecutionPhase' })
export type WatcherExecutionPhase = z.infer<typeof WatcherExecutionPhase>

export const WatcherExecutionThreadPool = z.object({
  max_size: z.lazy(() => long).describe('The largest size of the execution thread pool, which indicates the largest number of concurrent running watches.'),
  queue_size: z.lazy(() => long).describe('The number of watches that were triggered and are currently queued.')
}).meta({ id: 'WatcherExecutionThreadPool' })
export type WatcherExecutionThreadPool = z.infer<typeof WatcherExecutionThreadPool>

export const WatcherStatsWatcherMetric = z.enum(['_all', 'all', 'queued_watches', 'current_watches', 'pending_watches']).meta({ id: 'WatcherStatsWatcherMetric' })
export type WatcherStatsWatcherMetric = z.infer<typeof WatcherStatsWatcherMetric>

/**
 * Get Watcher statistics.
 *
 * This API always returns basic metrics.
 * You retrieve more metrics by using the metric parameter.
 */
export const WatcherStatsRequest = z.object({
  metric: z.union([WatcherStatsWatcherMetric, z.array(WatcherStatsWatcherMetric)]).describe('Defines which additional metrics are included in the response.').optional().meta({ found_in: 'path' }),
  emit_stacktraces: z.boolean().describe('Defines whether stack traces are generated for each watch that is running.').optional().meta({ found_in: 'query' })
}).meta({ id: 'WatcherStatsRequest' })
export type WatcherStatsRequest = z.infer<typeof WatcherStatsRequest>

export const WatcherStatsWatchRecordQueuedStats = z.object({
  execution_time: z.lazy(() => DateTime).describe('The time the watch was run. This is just before the input is being run.')
}).meta({ id: 'WatcherStatsWatchRecordQueuedStats' })
export type WatcherStatsWatchRecordQueuedStats = z.infer<typeof WatcherStatsWatchRecordQueuedStats>

export const WatcherStatsWatchRecordStats = z.object({
  ...WatcherStatsWatchRecordQueuedStats.shape,
  execution_phase: WatcherExecutionPhase.describe('The current watch execution phase.'),
  triggered_time: z.lazy(() => DateTime).describe('The time the watch was triggered by the trigger engine.'),
  executed_actions: z.array(z.string()).optional(),
  watch_id: z.lazy(() => Id),
  watch_record_id: z.lazy(() => Id).describe('The watch record identifier.')
}).meta({ id: 'WatcherStatsWatchRecordStats' })
export type WatcherStatsWatchRecordStats = z.infer<typeof WatcherStatsWatchRecordStats>

export const WatcherStatsWatcherState = z.enum(['stopped', 'starting', 'started', 'stopping']).meta({ id: 'WatcherStatsWatcherState' })
export type WatcherStatsWatcherState = z.infer<typeof WatcherStatsWatcherState>

export const WatcherStatsWatcherNodeStats = z.object({
  current_watches: z.array(WatcherStatsWatchRecordStats).describe('The current executing watches metric gives insight into the watches that are currently being executed by Watcher. Additional information is shared per watch that is currently executing. This information includes the `watch_id`, the time its execution started and its current execution phase. To include this metric, the `metric` option should be set to `current_watches` or `_all`. In addition you can also specify the `emit_stacktraces=true` parameter, which adds stack traces for each watch that is being run. These stack traces can give you more insight into an execution of a watch.').optional(),
  execution_thread_pool: WatcherExecutionThreadPool,
  queued_watches: z.array(WatcherStatsWatchRecordQueuedStats).describe('Watcher moderates the execution of watches such that their execution won\'t put too much pressure on the node and its resources. If too many watches trigger concurrently and there isn\'t enough capacity to run them all, some of the watches are queued, waiting for the current running watches to finish.s The queued watches metric gives insight on these queued watches. To include this metric, the `metric` option should include `queued_watches` or `_all`.').optional(),
  watch_count: z.lazy(() => long).describe('The number of watches currently registered.'),
  watcher_state: WatcherStatsWatcherState.describe('The current state of Watcher.'),
  node_id: z.lazy(() => Id)
}).meta({ id: 'WatcherStatsWatcherNodeStats' })
export type WatcherStatsWatcherNodeStats = z.infer<typeof WatcherStatsWatcherNodeStats>

export const WatcherStatsResponse = z.object({
  node_stats: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  manually_stopped: z.boolean(),
  stats: z.array(WatcherStatsWatcherNodeStats)
}).meta({ id: 'WatcherStatsResponse' })
export type WatcherStatsResponse = z.infer<typeof WatcherStatsResponse>
