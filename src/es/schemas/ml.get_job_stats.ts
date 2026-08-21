/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, DateTime, DurationValue, Id, integer, long } from './_types.js'
import { MlCategorizationStatus, MlJobState, MlMemoryStatus } from './cat.ml_jobs.js'
import { MlJobStatistics } from './xpack.usage.js'

export const MlDataCounts = z.object({
  bucket_count: z.lazy(() => long),
  earliest_record_timestamp: z.lazy(() => long).optional(),
  empty_bucket_count: z.lazy(() => long),
  input_bytes: z.lazy(() => long),
  input_field_count: z.lazy(() => long),
  input_record_count: z.lazy(() => long),
  invalid_date_count: z.lazy(() => long),
  job_id: z.lazy(() => Id),
  last_data_time: z.lazy(() => long).optional(),
  latest_empty_bucket_timestamp: z.lazy(() => long).optional(),
  latest_record_timestamp: z.lazy(() => long).optional(),
  latest_sparse_bucket_timestamp: z.lazy(() => long).optional(),
  latest_bucket_timestamp: z.lazy(() => long).optional(),
  log_time: z.lazy(() => long).optional(),
  missing_field_count: z.lazy(() => long),
  out_of_order_timestamp_count: z.lazy(() => long),
  processed_field_count: z.lazy(() => long),
  processed_record_count: z.lazy(() => long),
  sparse_bucket_count: z.lazy(() => long)
}).meta({ id: 'MlDataCounts' })
export type MlDataCounts = z.infer<typeof MlDataCounts>

export const MlJobForecastStatistics = z.object({
  memory_bytes: z.lazy(() => MlJobStatistics).optional(),
  processing_time_ms: z.lazy(() => MlJobStatistics).optional(),
  records: z.lazy(() => MlJobStatistics).optional(),
  status: z.record(z.string(), z.lazy(() => long)).optional(),
  total: z.lazy(() => long),
  forecasted_jobs: z.lazy(() => integer)
}).meta({ id: 'MlJobForecastStatistics' })
export type MlJobForecastStatistics = z.infer<typeof MlJobForecastStatistics>

export const MlModelSizeStats = z.object({
  bucket_allocation_failures_count: z.lazy(() => long),
  job_id: z.lazy(() => Id),
  log_time: z.lazy(() => DateTime),
  memory_status: z.lazy(() => MlMemoryStatus),
  model_bytes: z.lazy(() => ByteSize),
  model_bytes_exceeded: z.lazy(() => ByteSize).optional(),
  model_bytes_memory_limit: z.lazy(() => ByteSize).optional(),
  output_memory_allocator_bytes: z.lazy(() => ByteSize).optional(),
  peak_model_bytes: z.lazy(() => ByteSize).optional(),
  assignment_memory_basis: z.string().optional(),
  result_type: z.string(),
  total_by_field_count: z.lazy(() => long),
  total_over_field_count: z.lazy(() => long),
  total_partition_field_count: z.lazy(() => long),
  categorization_status: z.lazy(() => MlCategorizationStatus),
  categorized_doc_count: z.lazy(() => integer),
  dead_category_count: z.lazy(() => integer),
  failed_category_count: z.lazy(() => integer),
  frequent_category_count: z.lazy(() => integer),
  rare_category_count: z.lazy(() => integer),
  total_category_count: z.lazy(() => integer),
  timestamp: z.lazy(() => long).optional()
}).meta({ id: 'MlModelSizeStats' })
export type MlModelSizeStats = z.infer<typeof MlModelSizeStats>

export const MlJobTimingStats = z.object({
  average_bucket_processing_time_ms: z.lazy(() => DurationValue).optional(),
  bucket_count: z.lazy(() => long),
  exponential_average_bucket_processing_time_ms: z.lazy(() => DurationValue).optional(),
  exponential_average_bucket_processing_time_per_hour_ms: z.lazy(() => DurationValue),
  job_id: z.lazy(() => Id),
  total_bucket_processing_time_ms: z.lazy(() => DurationValue),
  maximum_bucket_processing_time_ms: z.lazy(() => DurationValue).optional(),
  minimum_bucket_processing_time_ms: z.lazy(() => DurationValue).optional()
}).meta({ id: 'MlJobTimingStats' })
export type MlJobTimingStats = z.infer<typeof MlJobTimingStats>

export const MlJobStats = z.object({
  assignment_explanation: z.string().describe('For open anomaly detection jobs only, contains messages relating to the selection of a node to run the job.').optional(),
  data_counts: MlDataCounts.describe('An object that describes the quantity of input to the job and any related error counts. The `data_count` values are cumulative for the lifetime of a job. If a model snapshot is reverted or old results are deleted, the job counts are not reset.'),
  forecasts_stats: MlJobForecastStatistics.describe('An object that provides statistical information about forecasts belonging to this job. Some statistics are omitted if no forecasts have been made.'),
  job_id: z.string().describe('Identifier for the anomaly detection job.'),
  model_size_stats: z.lazy(() => MlModelSizeStats).describe('An object that provides information about the size and contents of the model.'),
  open_time: z.lazy(() => DateTime).describe('For open jobs only, the elapsed time for which the job has been open.').optional(),
  state: z.lazy(() => MlJobState).describe('The status of the anomaly detection job, which can be one of the following values: `closed`, `closing`, `failed`, `opened`, `opening`.'),
  timing_stats: MlJobTimingStats.describe('An object that provides statistical information about timing aspect of this job.'),
  deleting: z.boolean().describe('Indicates that the process of deleting the job is in progress but not yet completed. It is only reported when `true`.').optional()
}).meta({ id: 'MlJobStats' })
export type MlJobStats = z.infer<typeof MlJobStats>

/** Get anomaly detection job stats. */
export const MlGetJobStatsRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job. It can be a job identifier, a group name, a comma-separated list of jobs, or a wildcard expression. If you do not specify one of these options, the API returns information for all anomaly detection jobs.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no jobs that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. If `true`, the API returns an empty `jobs` array when there are no matches and the subset of results when there are partial matches. If `false`, the API returns a `404` status code when there are no matches or only partial matches.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetJobStatsRequest' })
export type MlGetJobStatsRequest = z.infer<typeof MlGetJobStatsRequest>

export const MlGetJobStatsResponse = z.object({
  count: z.lazy(() => long),
  jobs: z.array(MlJobStats)
}).meta({ id: 'MlGetJobStatsResponse' })
export type MlGetJobStatsResponse = z.infer<typeof MlGetJobStatsResponse>
