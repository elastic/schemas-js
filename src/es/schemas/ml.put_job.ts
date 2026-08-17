/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, ExpandWildcards, Id, IndexName, long } from './_types.js'
import { MlAnalysisConfig, MlAnalysisConfigRead, MlAnalysisLimits, MlDataDescription, MlDatafeed, MlDatafeedConfig, MlModelPlotConfig } from './ml.js'

/** Custom metadata about the job */
export const MlCustomSettings = z.any().meta({ id: 'MlCustomSettings' })
export type MlCustomSettings = z.infer<typeof MlCustomSettings>

/**
 * Create an anomaly detection job.
 *
 * If you include a `datafeed_config`, you must have read index privileges on the source index.
 * If you include a `datafeed_config` but do not provide a query, the datafeed uses `{"match_all": {"boost": 1}}`.
 */
export const MlPutJobRequest = z.object({
  job_id: z.lazy(() => Id).describe('The identifier for the anomaly detection job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values.').optional().meta({ found_in: 'query' }),
  ignore_throttled: z.boolean().describe('If `true`, concrete, expanded or aliased indices are ignored when frozen.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  allow_lazy_open: z.boolean().describe('Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node. By default, if a machine learning node with capacity to run the job cannot immediately be found, the open anomaly detection jobs API returns an error. However, this is also subject to the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. If this option is set to true, the open anomaly detection jobs API does not return an error and the job waits in the opening state until sufficient machine learning node capacity is available.').optional().meta({ found_in: 'body' }),
  analysis_config: MlAnalysisConfig.describe('Specifies how to analyze the data. After you create a job, you cannot change the analysis configuration; all the properties are informational.').meta({ found_in: 'body' }),
  analysis_limits: z.lazy(() => MlAnalysisLimits).describe('Limits can be applied for the resources required to hold the mathematical models in memory. These limits are approximate and can be set per job. They do not control the memory used by other processes, for example the Elasticsearch Java processes.').optional().meta({ found_in: 'body' }),
  background_persist_interval: z.lazy(() => Duration).describe('Advanced configuration option. The time between each periodic persistence of the model. The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time. The smallest allowed value is 1 hour. For very large models (several GB), persistence could take 10-20 minutes, so do not set the `background_persist_interval` value too low.').optional().meta({ found_in: 'body' }),
  custom_settings: MlCustomSettings.describe('Advanced configuration option. Contains custom meta data about the job.').optional().meta({ found_in: 'body' }),
  daily_model_snapshot_retention_after_days: z.lazy(() => long).describe('Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies a period of time (in days) after which only the first snapshot per day is retained. This period is relative to the timestamp of the most recent snapshot for this job. Valid values range from 0 to `model_snapshot_retention_days`.').optional().meta({ found_in: 'body' }),
  data_description: z.lazy(() => MlDataDescription).describe('Defines the format of the input data when you send data to the job by using the post data API. Note that when configure a datafeed, these properties are automatically set. When data is received via the post data API, it is not stored in Elasticsearch. Only the results for anomaly detection are retained.').meta({ found_in: 'body' }),
  datafeed_config: MlDatafeedConfig.describe('Defines a datafeed for the anomaly detection job. If Elasticsearch security features are enabled, your datafeed remembers which roles the user who created it had at the time of creation and runs the query using those same roles. If you provide secondary authorization headers, those credentials are used instead.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('A description of the job.').optional().meta({ found_in: 'body' }),
  groups: z.array(z.string()).describe('A list of job groups. A job can belong to no groups or many.').optional().meta({ found_in: 'body' }),
  model_plot_config: z.lazy(() => MlModelPlotConfig).describe('This advanced configuration option stores model information along with the results. It provides a more detailed view into anomaly detection. If you enable model plot it can add considerable overhead to the performance of the system; it is not feasible for jobs with many entities. Model plot provides a simplified and indicative view of the model and its bounds. It does not display complex features such as multivariate correlations or multimodal data. As such, anomalies may occasionally be reported which cannot be seen in the model plot. Model plot config can be configured when the job is created or updated later. It must be disabled if performance issues are experienced.').optional().meta({ found_in: 'body' }),
  model_snapshot_retention_days: z.lazy(() => long).describe('Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job. By default, snapshots ten days older than the newest snapshot are deleted.').optional().meta({ found_in: 'body' }),
  renormalization_window_days: z.lazy(() => long).describe('Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen. The default value is the longer of 30 days or 100 bucket spans.').optional().meta({ found_in: 'body' }),
  results_index_name: z.lazy(() => IndexName).describe('A text string that affects the name of the machine learning results index. By default, the job generates an index named `.ml-anomalies-shared`.').optional().meta({ found_in: 'body' }),
  results_retention_days: z.lazy(() => long).describe('Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained. Annotations generated by the system also count as results for retention purposes; they are deleted after the same number of days as results. Annotations added by users are retained forever.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPutJobRequest' })
export type MlPutJobRequest = z.infer<typeof MlPutJobRequest>

export const MlPutJobResponse = z.object({
  allow_lazy_open: z.boolean(),
  analysis_config: z.lazy(() => MlAnalysisConfigRead),
  analysis_limits: z.lazy(() => MlAnalysisLimits),
  background_persist_interval: z.lazy(() => Duration).optional(),
  create_time: z.lazy(() => DateTime),
  custom_settings: MlCustomSettings.optional(),
  daily_model_snapshot_retention_after_days: z.lazy(() => long),
  data_description: z.lazy(() => MlDataDescription),
  datafeed_config: z.lazy(() => MlDatafeed).optional(),
  description: z.string().optional(),
  groups: z.array(z.string()).optional(),
  job_id: z.lazy(() => Id),
  job_type: z.string(),
  job_version: z.string(),
  model_plot_config: z.lazy(() => MlModelPlotConfig).optional(),
  model_snapshot_id: z.lazy(() => Id).optional(),
  model_snapshot_retention_days: z.lazy(() => long),
  renormalization_window_days: z.lazy(() => long).optional(),
  results_index_name: z.string(),
  results_retention_days: z.lazy(() => long).optional()
}).meta({ id: 'MlPutJobResponse' })
export type MlPutJobResponse = z.infer<typeof MlPutJobResponse>
