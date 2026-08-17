/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, DurationValue, EpochTime, HealthStatus, Id, Names, double, integer, long } from './_types.js'

export const TransformGetTransformStatsTransformProgress = z.object({
  docs_indexed: z.lazy(() => long),
  docs_processed: z.lazy(() => long),
  docs_remaining: z.lazy(() => long).optional(),
  percent_complete: z.lazy(() => double).optional(),
  total_docs: z.lazy(() => long).optional()
}).meta({ id: 'TransformGetTransformStatsTransformProgress' })
export type TransformGetTransformStatsTransformProgress = z.infer<typeof TransformGetTransformStatsTransformProgress>

export const TransformGetTransformStatsCheckpointStats = z.object({
  checkpoint: z.lazy(() => long),
  checkpoint_progress: TransformGetTransformStatsTransformProgress.optional(),
  timestamp: z.lazy(() => DateTime).optional(),
  timestamp_millis: z.lazy(() => EpochTime).optional(),
  time_upper_bound: z.lazy(() => DateTime).optional(),
  time_upper_bound_millis: z.lazy(() => EpochTime).optional()
}).meta({ id: 'TransformGetTransformStatsCheckpointStats' })
export type TransformGetTransformStatsCheckpointStats = z.infer<typeof TransformGetTransformStatsCheckpointStats>

export const TransformGetTransformStatsCheckpointing = z.object({
  changes_last_detected_at: z.lazy(() => long).optional(),
  changes_last_detected_at_string: z.lazy(() => DateTime).optional(),
  last: TransformGetTransformStatsCheckpointStats,
  next: TransformGetTransformStatsCheckpointStats.optional(),
  operations_behind: z.lazy(() => long).optional(),
  last_search_time: z.lazy(() => long).optional(),
  last_search_time_string: z.lazy(() => DateTime).optional()
}).meta({ id: 'TransformGetTransformStatsCheckpointing' })
export type TransformGetTransformStatsCheckpointing = z.infer<typeof TransformGetTransformStatsCheckpointing>

/**
 * Get transform stats.
 *
 * Get usage information for transforms.
 */
export const TransformGetTransformStatsRequest = z.object({
  transform_id: z.lazy(() => Names).describe('Identifier for the transform. It can be a transform identifier or a wildcard expression. You can get information for all transforms by using `_all`, by specifying `*` as the `<transform_id>`, or by omitting the `<transform_id>`.').meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no transforms that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. If this parameter is false, the request returns a 404 status code when there are no matches or only partial matches.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => long).describe('Skips the specified number of transforms.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => long).describe('Specifies the maximum number of transforms to obtain.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Controls the time to wait for the stats').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformGetTransformStatsRequest' })
export type TransformGetTransformStatsRequest = z.infer<typeof TransformGetTransformStatsRequest>

export const TransformGetTransformStatsTransformHealthIssue = z.object({
  type: z.string().describe('The type of the issue'),
  issue: z.string().describe('A description of the issue'),
  details: z.string().describe('Details about the issue').optional(),
  count: z.lazy(() => integer).describe('Number of times this issue has occurred since it started'),
  first_occurrence: z.lazy(() => EpochTime).describe('The timestamp this issue occurred for for the first time').optional(),
  first_occurence_string: z.lazy(() => DateTime).optional()
}).meta({ id: 'TransformGetTransformStatsTransformHealthIssue' })
export type TransformGetTransformStatsTransformHealthIssue = z.infer<typeof TransformGetTransformStatsTransformHealthIssue>

export const TransformGetTransformStatsTransformStatsHealth = z.object({
  status: z.lazy(() => HealthStatus),
  issues: z.array(TransformGetTransformStatsTransformHealthIssue).describe('If a non-healthy status is returned, contains a list of issues of the transform.').optional()
}).meta({ id: 'TransformGetTransformStatsTransformStatsHealth' })
export type TransformGetTransformStatsTransformStatsHealth = z.infer<typeof TransformGetTransformStatsTransformStatsHealth>

export const TransformGetTransformStatsTransformIndexerStats = z.object({
  delete_time_in_ms: z.lazy(() => EpochTime).optional(),
  documents_indexed: z.lazy(() => long),
  documents_deleted: z.lazy(() => long).optional(),
  documents_processed: z.lazy(() => long),
  exponential_avg_checkpoint_duration_ms: z.lazy(() => DurationValue),
  exponential_avg_documents_indexed: z.lazy(() => double),
  exponential_avg_documents_processed: z.lazy(() => double),
  index_failures: z.lazy(() => long),
  index_time_in_ms: z.lazy(() => DurationValue),
  index_total: z.lazy(() => long),
  pages_processed: z.lazy(() => long),
  processing_time_in_ms: z.lazy(() => DurationValue),
  processing_total: z.lazy(() => long),
  search_failures: z.lazy(() => long),
  search_time_in_ms: z.lazy(() => DurationValue),
  search_total: z.lazy(() => long),
  trigger_count: z.lazy(() => long)
}).meta({ id: 'TransformGetTransformStatsTransformIndexerStats' })
export type TransformGetTransformStatsTransformIndexerStats = z.infer<typeof TransformGetTransformStatsTransformIndexerStats>

export const TransformGetTransformStatsTransformStats = z.object({
  checkpointing: TransformGetTransformStatsCheckpointing,
  health: TransformGetTransformStatsTransformStatsHealth.optional(),
  id: z.lazy(() => Id),
  reason: z.string().optional(),
  state: z.string(),
  stats: TransformGetTransformStatsTransformIndexerStats
}).meta({ id: 'TransformGetTransformStatsTransformStats' })
export type TransformGetTransformStatsTransformStats = z.infer<typeof TransformGetTransformStatsTransformStats>

export const TransformGetTransformStatsResponse = z.object({
  count: z.lazy(() => long),
  transforms: z.array(TransformGetTransformStatsTransformStats)
}).meta({ id: 'TransformGetTransformStatsResponse' })
export type TransformGetTransformStatsResponse = z.infer<typeof TransformGetTransformStatsResponse>
