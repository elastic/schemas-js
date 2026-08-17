/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, Id, Ids, IndexName, TaskId, VersionString, long } from './_types.js'
import { MlAnalysisConfig, MlAnalysisLimits, MlDataDescription, MlDatafeed, MlModelPlotConfig } from './ml.js'
import { MlCustomSettings } from './ml.put_job.js'

export const MlJobBlockedReason = z.enum(['delete', 'reset', 'revert']).meta({ id: 'MlJobBlockedReason' })
export type MlJobBlockedReason = z.infer<typeof MlJobBlockedReason>

export const MlJobBlocked = z.object({
  reason: MlJobBlockedReason,
  task_id: TaskId.optional()
}).meta({ id: 'MlJobBlocked' })
export type MlJobBlocked = z.infer<typeof MlJobBlocked>

export const MlJob = z.object({
  allow_lazy_open: z.boolean().describe('Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node.'),
  analysis_config: MlAnalysisConfig.describe('The analysis configuration, which specifies how to analyze the data. After you create a job, you cannot change the analysis configuration; all the properties are informational.'),
  analysis_limits: z.lazy(() => MlAnalysisLimits).describe('Limits can be applied for the resources required to hold the mathematical models in memory. These limits are approximate and can be set per job. They do not control the memory used by other processes, for example the Elasticsearch Java processes.').optional(),
  background_persist_interval: z.lazy(() => Duration).describe('Advanced configuration option. The time between each periodic persistence of the model. The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time. The smallest allowed value is 1 hour.').optional(),
  blocked: MlJobBlocked.optional(),
  create_time: z.lazy(() => DateTime).optional(),
  custom_settings: MlCustomSettings.describe('Advanced configuration option. Contains custom metadata about the job.').optional(),
  daily_model_snapshot_retention_after_days: z.lazy(() => long).describe('Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies a period of time (in days) after which only the first snapshot per day is retained. This period is relative to the timestamp of the most recent snapshot for this job. Valid values range from 0 to `model_snapshot_retention_days`.').optional(),
  data_description: z.lazy(() => MlDataDescription).describe('The data description defines the format of the input data when you send data to the job by using the post data API. Note that when configuring a datafeed, these properties are automatically set. When data is received via the post data API, it is not stored in Elasticsearch. Only the results for anomaly detection are retained.'),
  datafeed_config: z.lazy(() => MlDatafeed).describe('The datafeed, which retrieves data from Elasticsearch for analysis by the job. You can associate only one datafeed with each anomaly detection job.').optional(),
  deleting: z.boolean().describe('Indicates that the process of deleting the job is in progress but not yet completed. It is only reported when `true`.').optional(),
  description: z.string().describe('A description of the job.').optional(),
  finished_time: z.lazy(() => DateTime).describe('If the job closed or failed, this is the time the job finished, otherwise it is `null`. This property is informational; you cannot change its value.').optional(),
  groups: z.array(z.string()).describe('A list of job groups. A job can belong to no groups or many.').optional(),
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.'),
  job_type: z.string().describe('Reserved for future use, currently set to `anomaly_detector`.').optional(),
  job_version: z.lazy(() => VersionString).describe('The machine learning configuration version number at which the the job was created.').optional(),
  model_plot_config: z.lazy(() => MlModelPlotConfig).describe('This advanced configuration option stores model information along with the results. It provides a more detailed view into anomaly detection. Model plot provides a simplified and indicative view of the model and its bounds.').optional(),
  model_snapshot_id: z.lazy(() => Id).optional(),
  model_snapshot_retention_days: z.lazy(() => long).describe('Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job. By default, snapshots ten days older than the newest snapshot are deleted.'),
  renormalization_window_days: z.lazy(() => long).describe('Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen. The default value is the longer of 30 days or 100 `bucket_spans`.').optional(),
  results_index_name: z.lazy(() => IndexName).describe('A text string that affects the name of the machine learning results index. The default value is `shared`, which generates an index named `.ml-anomalies-shared`.'),
  results_retention_days: z.lazy(() => long).describe('Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained. Annotations generated by the system also count as results for retention purposes; they are deleted after the same number of days as results. Annotations added by users are retained forever.').optional()
}).meta({ id: 'MlJob' })
export type MlJob = z.infer<typeof MlJob>

/**
 * Get anomaly detection jobs configuration info.
 *
 * You can get information for multiple anomaly detection jobs in a single API
 * request by using a group name, a comma-separated list of jobs, or a wildcard
 * expression. You can get information for all anomaly detection jobs by using
 * `_all`, by specifying `*` as the `<job_id>`, or by omitting the `<job_id>`.
 */
export const MlGetJobsRequest = z.object({
  job_id: z.lazy(() => Ids).describe('Identifier for the anomaly detection job. It can be a job identifier, a group name, or a wildcard expression. If you do not specify one of these options, the API returns information for all anomaly detection jobs.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no jobs that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is `true`, which returns an empty `jobs` array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a `404` status code when there are no matches or only partial matches.').optional().meta({ found_in: 'query' }),
  exclude_generated: z.boolean().describe('Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetJobsRequest' })
export type MlGetJobsRequest = z.infer<typeof MlGetJobsRequest>

export const MlGetJobsResponse = z.object({
  count: z.lazy(() => long),
  jobs: z.array(MlJob)
}).meta({ id: 'MlGetJobsResponse' })
export type MlGetJobsResponse = z.infer<typeof MlGetJobsResponse>
