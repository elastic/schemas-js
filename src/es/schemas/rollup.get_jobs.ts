/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, Id, IndexName, long } from './_types.js'
import { RollupFieldMetric, RollupGroupings } from './rollup.js'

export const RollupGetJobsIndexingJobState = z.enum(['started', 'indexing', 'stopping', 'stopped', 'aborting']).meta({ id: 'RollupGetJobsIndexingJobState' })
export type RollupGetJobsIndexingJobState = z.infer<typeof RollupGetJobsIndexingJobState>

/**
 * Get rollup job information.
 *
 * Get the configuration, stats, and status of rollup jobs.
 *
 * NOTE: This API returns only active (both `STARTED` and `STOPPED`) jobs.
 * If a job was created, ran for a while, then was deleted, the API does not return any details about it.
 * For details about a historical rollup job, the rollup capabilities API may be more useful.
 * @deprecated
 */
export const RollupGetJobsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the rollup job. If it is `_all` or omitted, the API returns all rollup jobs.').optional().meta({ found_in: 'path' })
}).meta({ id: 'RollupGetJobsRequest' })
export type RollupGetJobsRequest = z.infer<typeof RollupGetJobsRequest>

export const RollupGetJobsRollupJobConfiguration = z.object({
  cron: z.string(),
  groups: RollupGroupings,
  id: z.lazy(() => Id),
  index_pattern: z.string(),
  metrics: z.array(RollupFieldMetric),
  page_size: z.lazy(() => long),
  rollup_index: z.lazy(() => IndexName),
  timeout: z.lazy(() => Duration)
}).meta({ id: 'RollupGetJobsRollupJobConfiguration' })
export type RollupGetJobsRollupJobConfiguration = z.infer<typeof RollupGetJobsRollupJobConfiguration>

export const RollupGetJobsRollupJobStats = z.object({
  documents_processed: z.lazy(() => long),
  index_failures: z.lazy(() => long),
  index_time_in_ms: z.lazy(() => DurationValue),
  index_total: z.lazy(() => long),
  pages_processed: z.lazy(() => long),
  rollups_indexed: z.lazy(() => long),
  search_failures: z.lazy(() => long),
  search_time_in_ms: z.lazy(() => DurationValue),
  search_total: z.lazy(() => long),
  trigger_count: z.lazy(() => long),
  processing_time_in_ms: z.lazy(() => DurationValue),
  processing_total: z.lazy(() => long)
}).meta({ id: 'RollupGetJobsRollupJobStats' })
export type RollupGetJobsRollupJobStats = z.infer<typeof RollupGetJobsRollupJobStats>

export const RollupGetJobsRollupJobStatus = z.object({
  current_position: z.record(z.string(), z.any()).optional(),
  job_state: RollupGetJobsIndexingJobState,
  upgraded_doc_id: z.boolean().optional()
}).meta({ id: 'RollupGetJobsRollupJobStatus' })
export type RollupGetJobsRollupJobStatus = z.infer<typeof RollupGetJobsRollupJobStatus>

export const RollupGetJobsRollupJob = z.object({
  config: RollupGetJobsRollupJobConfiguration.describe('The rollup job configuration.'),
  stats: RollupGetJobsRollupJobStats.describe('Transient statistics about the rollup job, such as how many documents have been processed and how many rollup summary docs have been indexed. These stats are not persisted. If a node is restarted, these stats are reset.'),
  status: RollupGetJobsRollupJobStatus.describe('The current status of the indexer for the rollup job.')
}).meta({ id: 'RollupGetJobsRollupJob' })
export type RollupGetJobsRollupJob = z.infer<typeof RollupGetJobsRollupJob>

export const RollupGetJobsResponse = z.object({
  jobs: z.array(RollupGetJobsRollupJob)
}).meta({ id: 'RollupGetJobsResponse' })
export type RollupGetJobsResponse = z.infer<typeof RollupGetJobsResponse>
