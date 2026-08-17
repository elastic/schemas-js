/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, EpochTime, Id, IndexName, VersionString, integer, long } from './_types.js'
import { MlAnalysisConfigRead, MlAnalysisLimits, MlDataDescription, MlDatafeed, MlDetectionRule, MlModelPlotConfig } from './ml.js'

export const MlPerPartitionCategorization = z.object({
  enabled: z.boolean().describe('To enable this setting, you must also set the `partition_field_name` property to the same value in every detector that uses the keyword `mlcategory`. Otherwise, job creation fails.').optional(),
  stop_on_warn: z.boolean().describe('This setting can be set to true only if per-partition categorization is enabled. If true, both categorization and subsequent anomaly detection stops for partitions where the categorization status changes to warn. This setting makes it viable to have a job where it is expected that categorization works well for some partitions but not others; you do not pay the cost of bad categorization forever in the partitions where it works badly.').optional()
}).meta({ id: 'MlPerPartitionCategorization' })
export type MlPerPartitionCategorization = z.infer<typeof MlPerPartitionCategorization>

export const MlAnalysisMemoryLimit = z.object({
  model_memory_limit: z.string().describe('Limits can be applied for the resources required to hold the mathematical models in memory. These limits are approximate and can be set per job. They do not control the memory used by other processes, for example the Elasticsearch Java processes.')
}).meta({ id: 'MlAnalysisMemoryLimit' })
export type MlAnalysisMemoryLimit = z.infer<typeof MlAnalysisMemoryLimit>

export const MlDetectorUpdate = z.object({
  detector_index: z.lazy(() => integer).describe('A unique identifier for the detector. This identifier is based on the order of the detectors in the `analysis_config`, starting at zero.'),
  description: z.string().describe('A description of the detector.').optional(),
  custom_rules: z.array(z.lazy(() => MlDetectionRule)).describe('An array of custom rule objects, which enable you to customize the way detectors operate. For example, a rule may dictate to the detector conditions under which results should be skipped. Kibana refers to custom rules as job rules.').optional()
}).meta({ id: 'MlDetectorUpdate' })
export type MlDetectorUpdate = z.infer<typeof MlDetectorUpdate>

/**
 * Update an anomaly detection job.
 *
 * Updates certain properties of an anomaly detection job.
 */
export const MlUpdateJobRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the job.').meta({ found_in: 'path' }),
  allow_lazy_open: z.boolean().describe('Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node. If `false` and a machine learning node with capacity to run the job cannot immediately be found, the open anomaly detection jobs API returns an error. However, this is also subject to the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. If this option is set to `true`, the open anomaly detection jobs API does not return an error and the job waits in the opening state until sufficient machine learning node capacity is available.').optional().meta({ found_in: 'body' }),
  analysis_limits: MlAnalysisMemoryLimit.optional().meta({ found_in: 'body' }),
  background_persist_interval: z.lazy(() => Duration).describe('Advanced configuration option. The time between each periodic persistence of the model. The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time. The smallest allowed value is 1 hour. For very large models (several GB), persistence could take 10-20 minutes, so do not set the value too low. If the job is open when you make the update, you must stop the datafeed, close the job, then reopen the job and restart the datafeed for the changes to take effect.').optional().meta({ found_in: 'body' }),
  custom_settings: z.record(z.string(), z.any()).describe('Advanced configuration option. Contains custom meta data about the job. For example, it can contain custom URL information as shown in Adding custom URLs to machine learning results.').optional().meta({ found_in: 'body' }),
  categorization_filters: z.array(z.string()).optional().meta({ found_in: 'body' }),
  description: z.string().describe('A description of the job.').optional().meta({ found_in: 'body' }),
  model_plot_config: z.lazy(() => MlModelPlotConfig).optional().meta({ found_in: 'body' }),
  model_prune_window: z.lazy(() => Duration).optional().meta({ found_in: 'body' }),
  daily_model_snapshot_retention_after_days: z.lazy(() => long).describe('Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies a period of time (in days) after which only the first snapshot per day is retained. This period is relative to the timestamp of the most recent snapshot for this job. Valid values range from 0 to `model_snapshot_retention_days`. For jobs created before version 7.8.0, the default value matches `model_snapshot_retention_days`.').optional().meta({ found_in: 'body' }),
  model_snapshot_retention_days: z.lazy(() => long).describe('Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job.').optional().meta({ found_in: 'body' }),
  renormalization_window_days: z.lazy(() => long).describe('Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen.').optional().meta({ found_in: 'body' }),
  results_retention_days: z.lazy(() => long).describe('Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained.').optional().meta({ found_in: 'body' }),
  groups: z.array(z.string()).describe('A list of job groups. A job can belong to no groups or many.').optional().meta({ found_in: 'body' }),
  detectors: z.array(MlDetectorUpdate).describe('An array of detector update objects.').optional().meta({ found_in: 'body' }),
  per_partition_categorization: z.lazy(() => MlPerPartitionCategorization).describe('Settings related to how categorization interacts with partition fields.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlUpdateJobRequest' })
export type MlUpdateJobRequest = z.infer<typeof MlUpdateJobRequest>

export const MlUpdateJobResponse = z.object({
  allow_lazy_open: z.boolean(),
  analysis_config: z.lazy(() => MlAnalysisConfigRead),
  analysis_limits: z.lazy(() => MlAnalysisLimits),
  background_persist_interval: z.lazy(() => Duration).optional(),
  create_time: z.lazy(() => EpochTime),
  finished_time: z.lazy(() => EpochTime).optional(),
  custom_settings: z.record(z.string(), z.string()).optional(),
  daily_model_snapshot_retention_after_days: z.lazy(() => long),
  data_description: z.lazy(() => MlDataDescription),
  datafeed_config: z.lazy(() => MlDatafeed).optional(),
  description: z.string().optional(),
  groups: z.array(z.string()).optional(),
  job_id: z.lazy(() => Id),
  job_type: z.string(),
  job_version: z.lazy(() => VersionString),
  model_plot_config: z.lazy(() => MlModelPlotConfig).optional(),
  model_snapshot_id: z.lazy(() => Id).optional(),
  model_snapshot_retention_days: z.lazy(() => long),
  renormalization_window_days: z.lazy(() => long).optional(),
  results_index_name: z.lazy(() => IndexName),
  results_retention_days: z.lazy(() => long).optional()
}).meta({ id: 'MlUpdateJobResponse' })
export type MlUpdateJobResponse = z.infer<typeof MlUpdateJobResponse>
