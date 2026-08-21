/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, DurationValue, Field, Id, Name, double, integer, long, uint, ulong } from './_types.js'

export const MlJobStatistics = z.object({
  avg: z.lazy(() => double),
  max: z.lazy(() => double),
  min: z.lazy(() => double),
  total: z.lazy(() => double)
}).meta({ id: 'MlJobStatistics' })
export type MlJobStatistics = z.infer<typeof MlJobStatistics>

export const XpackUsageSecurityRolesDlsBitSetCache = z.object({
  count: z.lazy(() => integer).describe('Number of entries in the cache.'),
  memory: z.lazy(() => ByteSize).describe('Human-readable amount of memory taken up by the cache.').optional(),
  memory_in_bytes: z.lazy(() => ulong).describe('Memory taken up by the cache in bytes.'),
  hits: z.lazy(() => long).describe('Total number of cache hits.'),
  misses: z.lazy(() => long).describe('Total number of cache misses.'),
  evictions: z.lazy(() => long).describe('Total number of cache evictions.'),
  hits_time_in_millis: z.lazy(() => DurationValue).describe('Total combined time spent in cache for hits in milliseconds.'),
  misses_time_in_millis: z.lazy(() => DurationValue).describe('Total combined time spent in cache for misses in milliseconds.')
}).meta({ id: 'XpackUsageSecurityRolesDlsBitSetCache' })
export type XpackUsageSecurityRolesDlsBitSetCache = z.infer<typeof XpackUsageSecurityRolesDlsBitSetCache>

export const XpackUsageSecurityRolesDls = z.object({
  bit_set_cache: XpackUsageSecurityRolesDlsBitSetCache
}).meta({ id: 'XpackUsageSecurityRolesDls' })
export type XpackUsageSecurityRolesDls = z.infer<typeof XpackUsageSecurityRolesDls>

export const SlmStatistics = z.object({
  retention_deletion_time: z.lazy(() => Duration).optional(),
  retention_deletion_time_millis: z.lazy(() => DurationValue).optional(),
  retention_failed: z.lazy(() => long).optional(),
  retention_runs: z.lazy(() => long).optional(),
  retention_timed_out: z.lazy(() => long).optional(),
  policy: z.lazy(() => Id).optional(),
  total_snapshots_deleted: z.lazy(() => long).optional(),
  snapshots_deleted: z.lazy(() => long).optional(),
  total_snapshot_deletion_failures: z.lazy(() => long).optional(),
  snapshot_deletion_failures: z.lazy(() => long).optional(),
  total_snapshots_failed: z.lazy(() => long).optional(),
  snapshots_failed: z.lazy(() => long).optional(),
  total_snapshots_taken: z.lazy(() => long).optional(),
  snapshots_taken: z.lazy(() => long).optional()
}).meta({ id: 'SlmStatistics' })
export type SlmStatistics = z.infer<typeof SlmStatistics>

export const XpackUsageBase = z.object({
  available: z.boolean(),
  enabled: z.boolean()
}).meta({ id: 'XpackUsageBase' })
export type XpackUsageBase = z.infer<typeof XpackUsageBase>

export const XpackUsageAnalyticsStatistics = z.object({
  boxplot_usage: z.lazy(() => long),
  cumulative_cardinality_usage: z.lazy(() => long),
  string_stats_usage: z.lazy(() => long),
  top_metrics_usage: z.lazy(() => long),
  t_test_usage: z.lazy(() => long),
  moving_percentiles_usage: z.lazy(() => long),
  normalize_usage: z.lazy(() => long),
  rate_usage: z.lazy(() => long),
  multi_terms_usage: z.lazy(() => long).optional()
}).meta({ id: 'XpackUsageAnalyticsStatistics' })
export type XpackUsageAnalyticsStatistics = z.infer<typeof XpackUsageAnalyticsStatistics>

export const XpackUsageAnalytics = z.object({
  ...XpackUsageBase.shape,
  stats: XpackUsageAnalyticsStatistics
}).meta({ id: 'XpackUsageAnalytics' })
export type XpackUsageAnalytics = z.infer<typeof XpackUsageAnalytics>

export const XpackUsageArchive = z.object({
  ...XpackUsageBase.shape,
  indices_count: z.lazy(() => long)
}).meta({ id: 'XpackUsageArchive' })
export type XpackUsageArchive = z.infer<typeof XpackUsageArchive>

export const XpackUsageFeatureToggle = z.object({
  enabled: z.boolean()
}).meta({ id: 'XpackUsageFeatureToggle' })
export type XpackUsageFeatureToggle = z.infer<typeof XpackUsageFeatureToggle>

export const XpackUsageAudit = z.object({
  ...XpackUsageFeatureToggle.shape,
  outputs: z.array(z.string()).optional()
}).meta({ id: 'XpackUsageAudit' })
export type XpackUsageAudit = z.infer<typeof XpackUsageAudit>

export const XpackUsageCcr = z.object({
  ...XpackUsageBase.shape,
  auto_follow_patterns_count: z.lazy(() => integer),
  follower_indices_count: z.lazy(() => integer)
}).meta({ id: 'XpackUsageCcr' })
export type XpackUsageCcr = z.infer<typeof XpackUsageCcr>

export const XpackUsageCounter = z.object({
  active: z.lazy(() => long),
  total: z.lazy(() => long)
}).meta({ id: 'XpackUsageCounter' })
export type XpackUsageCounter = z.infer<typeof XpackUsageCounter>

/** The `minimum_millis`, `maximum_millis`, and `average_millis` fields are only present when at least one data stream contributes to these statistics. */
export const XpackUsageDataStreamLifecycleThresholdStats = z.object({
  minimum_millis: z.lazy(() => long).describe('The smallest configured value in milliseconds.').optional(),
  maximum_millis: z.lazy(() => long).describe('The largest configured value in milliseconds.').optional(),
  average_millis: z.lazy(() => double).describe('The average configured value in milliseconds.').optional()
}).meta({ id: 'XpackUsageDataStreamLifecycleThresholdStats' })
export type XpackUsageDataStreamLifecycleThresholdStats = z.infer<typeof XpackUsageDataStreamLifecycleThresholdStats>

export const XpackUsageDataStreamLifecycleEffectiveRetentionStats = z.object({
  ...XpackUsageDataStreamLifecycleThresholdStats.shape,
  retained_data_streams: z.lazy(() => long).describe('The number of data streams for which an effective retention applies.')
}).meta({ id: 'XpackUsageDataStreamLifecycleEffectiveRetentionStats' })
export type XpackUsageDataStreamLifecycleEffectiveRetentionStats = z.infer<typeof XpackUsageDataStreamLifecycleEffectiveRetentionStats>

/** The `affected_data_streams` and `retention_millis` fields are only present when this global retention is defined. */
export const XpackUsageDataStreamLifecycleGlobalRetentionStats = z.object({
  defined: z.boolean().describe('Whether this global retention is defined for the cluster.'),
  affected_data_streams: z.lazy(() => long).describe('The number of data streams affected by this global retention.').optional(),
  retention_millis: z.lazy(() => long).describe('The global retention period in milliseconds.').optional()
}).meta({ id: 'XpackUsageDataStreamLifecycleGlobalRetentionStats' })
export type XpackUsageDataStreamLifecycleGlobalRetentionStats = z.infer<typeof XpackUsageDataStreamLifecycleGlobalRetentionStats>

export const XpackUsageDataStreamLifecycleGlobalRetention = z.object({
  default: XpackUsageDataStreamLifecycleGlobalRetentionStats.describe('Statistics about the cluster\'s default global retention.'),
  max: XpackUsageDataStreamLifecycleGlobalRetentionStats.describe('Statistics about the cluster\'s maximum global retention.')
}).meta({ id: 'XpackUsageDataStreamLifecycleGlobalRetention' })
export type XpackUsageDataStreamLifecycleGlobalRetention = z.infer<typeof XpackUsageDataStreamLifecycleGlobalRetention>

export const XpackUsageDataStreamLifecycleRetentionStats = z.object({
  ...XpackUsageDataStreamLifecycleThresholdStats.shape,
  configured_data_streams: z.lazy(() => long).describe('The number of data streams for which this value is configured.')
}).meta({ id: 'XpackUsageDataStreamLifecycleRetentionStats' })
export type XpackUsageDataStreamLifecycleRetentionStats = z.infer<typeof XpackUsageDataStreamLifecycleRetentionStats>

/**
 * Usage statistics for data stream lifecycle (DLM), reported by `_xpack/usage` under `data_lifecycle`.
 * Besides `available` and `enabled`, all the following statistics are only present when the feature is enabled.
 */
export const XpackUsageDataStreamLifecycleUsage = z.object({
  ...XpackUsageBase.shape,
  count: z.lazy(() => long).describe('The number of data streams that have a lifecycle configured.').optional(),
  default_rollover_used: z.boolean().describe('Whether the default rollover configuration is used by at least one data stream.').optional(),
  data_retention: XpackUsageDataStreamLifecycleRetentionStats.describe('Statistics about the explicitly configured data retention across data streams.').optional(),
  effective_retention: XpackUsageDataStreamLifecycleEffectiveRetentionStats.describe('Statistics about the effective retention (configured or derived from global retention) across data streams.').optional(),
  global_retention: XpackUsageDataStreamLifecycleGlobalRetention.describe('Statistics about the cluster\'s global default and maximum retention settings.').optional()
}).meta({ id: 'XpackUsageDataStreamLifecycleUsage' })
export type XpackUsageDataStreamLifecycleUsage = z.infer<typeof XpackUsageDataStreamLifecycleUsage>

export const XpackUsageDataStreams = z.object({
  ...XpackUsageBase.shape,
  data_streams: z.lazy(() => long),
  indices_count: z.lazy(() => long)
}).meta({ id: 'XpackUsageDataStreams' })
export type XpackUsageDataStreams = z.infer<typeof XpackUsageDataStreams>

export const XpackUsageDataTierPhaseStatistics = z.object({
  node_count: z.lazy(() => long),
  index_count: z.lazy(() => long),
  total_shard_count: z.lazy(() => long),
  primary_shard_count: z.lazy(() => long),
  doc_count: z.lazy(() => long),
  total_size_bytes: z.lazy(() => long),
  primary_size_bytes: z.lazy(() => long),
  primary_shard_size_avg_bytes: z.lazy(() => long),
  primary_shard_size_median_bytes: z.lazy(() => long),
  primary_shard_size_mad_bytes: z.lazy(() => long)
}).meta({ id: 'XpackUsageDataTierPhaseStatistics' })
export type XpackUsageDataTierPhaseStatistics = z.infer<typeof XpackUsageDataTierPhaseStatistics>

export const XpackUsageDataTiers = z.object({
  ...XpackUsageBase.shape,
  data_warm: XpackUsageDataTierPhaseStatistics,
  data_frozen: XpackUsageDataTierPhaseStatistics.optional(),
  data_cold: XpackUsageDataTierPhaseStatistics,
  data_content: XpackUsageDataTierPhaseStatistics,
  data_hot: XpackUsageDataTierPhaseStatistics
}).meta({ id: 'XpackUsageDataTiers' })
export type XpackUsageDataTiers = z.infer<typeof XpackUsageDataTiers>

export const XpackUsageDatafeed = z.object({
  count: z.lazy(() => long)
}).meta({ id: 'XpackUsageDatafeed' })
export type XpackUsageDatafeed = z.infer<typeof XpackUsageDatafeed>

export const XpackUsageEqlFeaturesJoin = z.object({
  join_queries_two: z.lazy(() => uint),
  join_queries_three: z.lazy(() => uint),
  join_until: z.lazy(() => uint),
  join_queries_five_or_more: z.lazy(() => uint),
  join_queries_four: z.lazy(() => uint)
}).meta({ id: 'XpackUsageEqlFeaturesJoin' })
export type XpackUsageEqlFeaturesJoin = z.infer<typeof XpackUsageEqlFeaturesJoin>

export const XpackUsageEqlFeaturesKeys = z.object({
  join_keys_two: z.lazy(() => uint),
  join_keys_one: z.lazy(() => uint),
  join_keys_three: z.lazy(() => uint),
  join_keys_five_or_more: z.lazy(() => uint),
  join_keys_four: z.lazy(() => uint)
}).meta({ id: 'XpackUsageEqlFeaturesKeys' })
export type XpackUsageEqlFeaturesKeys = z.infer<typeof XpackUsageEqlFeaturesKeys>

export const XpackUsageEqlFeaturesPipes = z.object({
  pipe_tail: z.lazy(() => uint),
  pipe_head: z.lazy(() => uint)
}).meta({ id: 'XpackUsageEqlFeaturesPipes' })
export type XpackUsageEqlFeaturesPipes = z.infer<typeof XpackUsageEqlFeaturesPipes>

export const XpackUsageEqlFeaturesSequences = z.object({
  sequence_queries_three: z.lazy(() => uint),
  sequence_queries_four: z.lazy(() => uint),
  sequence_queries_two: z.lazy(() => uint),
  sequence_until: z.lazy(() => uint),
  sequence_queries_five_or_more: z.lazy(() => uint),
  sequence_maxspan: z.lazy(() => uint)
}).meta({ id: 'XpackUsageEqlFeaturesSequences' })
export type XpackUsageEqlFeaturesSequences = z.infer<typeof XpackUsageEqlFeaturesSequences>

export const XpackUsageEqlFeatures = z.object({
  join: z.lazy(() => uint),
  joins: XpackUsageEqlFeaturesJoin,
  keys: XpackUsageEqlFeaturesKeys,
  event: z.lazy(() => uint),
  pipes: XpackUsageEqlFeaturesPipes,
  sequence: z.lazy(() => uint),
  sequences: XpackUsageEqlFeaturesSequences
}).meta({ id: 'XpackUsageEqlFeatures' })
export type XpackUsageEqlFeatures = z.infer<typeof XpackUsageEqlFeatures>

export const XpackUsageQuery = z.object({
  count: z.lazy(() => integer).optional(),
  failed: z.lazy(() => integer).optional(),
  paging: z.lazy(() => integer).optional(),
  total: z.lazy(() => integer).optional()
}).meta({ id: 'XpackUsageQuery' })
export type XpackUsageQuery = z.infer<typeof XpackUsageQuery>

export const XpackUsageEql = z.object({
  ...XpackUsageBase.shape,
  features: XpackUsageEqlFeatures,
  queries: z.record(z.string(), XpackUsageQuery)
}).meta({ id: 'XpackUsageEql' })
export type XpackUsageEql = z.infer<typeof XpackUsageEql>

export const XpackUsageEsqlLoggingConfig = z.object({
  enabled: z.boolean().describe('Whether ES|QL query logging is enabled.'),
  user: z.boolean().describe('Whether user information is included in the ES|QL query log.'),
  thresholds: z.record(z.string(), z.lazy(() => Duration)).describe('The configured logging thresholds, keyed by threshold name, if any.').optional()
}).meta({ id: 'XpackUsageEsqlLoggingConfig' })
export type XpackUsageEsqlLoggingConfig = z.infer<typeof XpackUsageEsqlLoggingConfig>

export const XpackUsageFlattened = z.object({
  ...XpackUsageBase.shape,
  field_count: z.lazy(() => integer)
}).meta({ id: 'XpackUsageFlattened' })
export type XpackUsageFlattened = z.infer<typeof XpackUsageFlattened>

/** Per-node GPU statistics for vector indexing. */
export const XpackUsageGpuNodeStats = z.object({
  type: z.string().describe('GPU device type (e.g., "NVIDIA L4", "NVIDIA A100").'),
  memory_in_bytes: z.lazy(() => long).describe('GPU memory in bytes.'),
  enabled: z.boolean().describe('Whether GPU vector indexing is enabled on this node.'),
  index_build_count: z.lazy(() => long).describe('Number of GPU index builds performed on this node.')
}).meta({ id: 'XpackUsageGpuNodeStats' })
export type XpackUsageGpuNodeStats = z.infer<typeof XpackUsageGpuNodeStats>

/** GPU vector indexing usage statistics. */
export const XpackUsageGpuVectorIndexing = z.object({
  ...XpackUsageBase.shape,
  index_build_count: z.lazy(() => long).describe('Total GPU index builds across the cluster.'),
  nodes_with_gpu: z.lazy(() => integer).describe('Count of data nodes with GPU support.'),
  nodes: z.array(XpackUsageGpuNodeStats).describe('Per-node GPU details including type, memory, enabled status, and build count.')
}).meta({ id: 'XpackUsageGpuVectorIndexing' })
export type XpackUsageGpuVectorIndexing = z.infer<typeof XpackUsageGpuVectorIndexing>

export const XpackUsageInvocations = z.object({
  total: z.lazy(() => long)
}).meta({ id: 'XpackUsageInvocations' })
export type XpackUsageInvocations = z.infer<typeof XpackUsageInvocations>

export const XpackUsageHealthStatistics = z.object({
  ...XpackUsageBase.shape,
  invocations: XpackUsageInvocations
}).meta({ id: 'XpackUsageHealthStatistics' })
export type XpackUsageHealthStatistics = z.infer<typeof XpackUsageHealthStatistics>

export const XpackUsagePhase = z.object({
  actions: z.array(z.string()),
  min_age: z.lazy(() => DurationValue)
}).meta({ id: 'XpackUsagePhase' })
export type XpackUsagePhase = z.infer<typeof XpackUsagePhase>

export const XpackUsagePhases = z.object({
  cold: XpackUsagePhase.optional(),
  delete: XpackUsagePhase.optional(),
  frozen: XpackUsagePhase.optional(),
  hot: XpackUsagePhase.optional(),
  warm: XpackUsagePhase.optional()
}).meta({ id: 'XpackUsagePhases' })
export type XpackUsagePhases = z.infer<typeof XpackUsagePhases>

export const XpackUsageIlmPolicyStatistics = z.object({
  indices_managed: z.lazy(() => integer),
  phases: XpackUsagePhases
}).meta({ id: 'XpackUsageIlmPolicyStatistics' })
export type XpackUsageIlmPolicyStatistics = z.infer<typeof XpackUsageIlmPolicyStatistics>

export const XpackUsageIlm = z.object({
  policy_count: z.lazy(() => integer),
  policy_stats: z.array(XpackUsageIlmPolicyStatistics)
}).meta({ id: 'XpackUsageIlm' })
export type XpackUsageIlm = z.infer<typeof XpackUsageIlm>

export const XpackUsageIpFilter = z.object({
  http: z.boolean(),
  transport: z.boolean()
}).meta({ id: 'XpackUsageIpFilter' })
export type XpackUsageIpFilter = z.infer<typeof XpackUsageIpFilter>

export const XpackUsageMlJobForecasts = z.object({
  total: z.lazy(() => long),
  forecasted_jobs: z.lazy(() => long)
}).meta({ id: 'XpackUsageMlJobForecasts' })
export type XpackUsageMlJobForecasts = z.infer<typeof XpackUsageMlJobForecasts>

export const XpackUsageJobUsage = z.object({
  count: z.lazy(() => integer),
  created_by: z.record(z.string(), z.lazy(() => long)),
  detectors: z.lazy(() => MlJobStatistics),
  forecasts: XpackUsageMlJobForecasts,
  model_size: z.lazy(() => MlJobStatistics)
}).meta({ id: 'XpackUsageJobUsage' })
export type XpackUsageJobUsage = z.infer<typeof XpackUsageJobUsage>

export const XpackUsageQueryLoggingConfig = z.object({
  enabled: z.boolean().describe('Whether query logging is enabled.'),
  user: z.boolean().describe('Whether user information is included in the query log.'),
  system: z.boolean().describe('Whether system queries are included in the query log.'),
  threshold: z.lazy(() => Duration).describe('The configured logging threshold, if any.').optional()
}).meta({ id: 'XpackUsageQueryLoggingConfig' })
export type XpackUsageQueryLoggingConfig = z.infer<typeof XpackUsageQueryLoggingConfig>

/** Usage statistics about logging configuration reported by `_xpack/usage`. */
export const XpackUsageLogging = z.object({
  querylog: XpackUsageQueryLoggingConfig.describe('Search query log configuration.'),
  esql: XpackUsageEsqlLoggingConfig.describe('ES|QL query log configuration.')
}).meta({ id: 'XpackUsageLogging' })
export type XpackUsageLogging = z.infer<typeof XpackUsageLogging>

export const XpackUsageMlDataFrameAnalyticsJobsMemory = z.object({
  peak_usage_bytes: z.lazy(() => MlJobStatistics)
}).meta({ id: 'XpackUsageMlDataFrameAnalyticsJobsMemory' })
export type XpackUsageMlDataFrameAnalyticsJobsMemory = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobsMemory>

export const XpackUsageMlDataFrameAnalyticsJobsCount = z.object({
  count: z.lazy(() => long)
}).meta({ id: 'XpackUsageMlDataFrameAnalyticsJobsCount' })
export type XpackUsageMlDataFrameAnalyticsJobsCount = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobsCount>

export const XpackUsageMlDataFrameAnalyticsJobsAnalysis = z.object({
  classification: z.lazy(() => integer).optional(),
  outlier_detection: z.lazy(() => integer).optional(),
  regression: z.lazy(() => integer).optional()
}).meta({ id: 'XpackUsageMlDataFrameAnalyticsJobsAnalysis' })
export type XpackUsageMlDataFrameAnalyticsJobsAnalysis = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobsAnalysis>

export const XpackUsageMlDataFrameAnalyticsJobs = z.object({
  memory_usage: XpackUsageMlDataFrameAnalyticsJobsMemory.optional(),
  _all: XpackUsageMlDataFrameAnalyticsJobsCount,
  analysis_counts: XpackUsageMlDataFrameAnalyticsJobsAnalysis.optional(),
  stopped: XpackUsageMlDataFrameAnalyticsJobsCount.optional()
}).meta({ id: 'XpackUsageMlDataFrameAnalyticsJobs' })
export type XpackUsageMlDataFrameAnalyticsJobs = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobs>

export const XpackUsageMlInferenceIngestProcessorCount = z.object({
  max: z.lazy(() => long),
  sum: z.lazy(() => long),
  min: z.lazy(() => long)
}).meta({ id: 'XpackUsageMlInferenceIngestProcessorCount' })
export type XpackUsageMlInferenceIngestProcessorCount = z.infer<typeof XpackUsageMlInferenceIngestProcessorCount>

export const XpackUsageMlCounter = z.object({
  count: z.lazy(() => long)
}).meta({ id: 'XpackUsageMlCounter' })
export type XpackUsageMlCounter = z.infer<typeof XpackUsageMlCounter>

export const XpackUsageMlInferenceIngestProcessor = z.object({
  num_docs_processed: XpackUsageMlInferenceIngestProcessorCount,
  pipelines: XpackUsageMlCounter,
  num_failures: XpackUsageMlInferenceIngestProcessorCount,
  time_ms: XpackUsageMlInferenceIngestProcessorCount
}).meta({ id: 'XpackUsageMlInferenceIngestProcessor' })
export type XpackUsageMlInferenceIngestProcessor = z.infer<typeof XpackUsageMlInferenceIngestProcessor>

export const XpackUsageMlInferenceTrainedModelsCount = z.object({
  total: z.lazy(() => long),
  prepackaged: z.lazy(() => long),
  other: z.lazy(() => long),
  pass_through: z.lazy(() => long).optional(),
  regression: z.lazy(() => long).optional(),
  classification: z.lazy(() => long).optional(),
  ner: z.lazy(() => long).optional(),
  text_embedding: z.lazy(() => long).optional()
}).meta({ id: 'XpackUsageMlInferenceTrainedModelsCount' })
export type XpackUsageMlInferenceTrainedModelsCount = z.infer<typeof XpackUsageMlInferenceTrainedModelsCount>

export const XpackUsageMlInferenceTrainedModels = z.object({
  estimated_operations: z.lazy(() => MlJobStatistics).optional(),
  estimated_heap_memory_usage_bytes: z.lazy(() => MlJobStatistics).optional(),
  count: XpackUsageMlInferenceTrainedModelsCount.optional(),
  _all: XpackUsageMlCounter,
  model_size_bytes: z.lazy(() => MlJobStatistics).optional()
}).meta({ id: 'XpackUsageMlInferenceTrainedModels' })
export type XpackUsageMlInferenceTrainedModels = z.infer<typeof XpackUsageMlInferenceTrainedModels>

export const XpackUsageMlInferenceDeploymentsTimeMs = z.object({
  avg: z.lazy(() => double)
}).meta({ id: 'XpackUsageMlInferenceDeploymentsTimeMs' })
export type XpackUsageMlInferenceDeploymentsTimeMs = z.infer<typeof XpackUsageMlInferenceDeploymentsTimeMs>

export const XpackUsageMlInferenceDeployments = z.object({
  count: z.lazy(() => integer),
  inference_counts: z.lazy(() => MlJobStatistics),
  model_sizes_bytes: z.lazy(() => MlJobStatistics),
  time_ms: XpackUsageMlInferenceDeploymentsTimeMs
}).meta({ id: 'XpackUsageMlInferenceDeployments' })
export type XpackUsageMlInferenceDeployments = z.infer<typeof XpackUsageMlInferenceDeployments>

export const XpackUsageMlInference = z.object({
  ingest_processors: z.record(z.string(), XpackUsageMlInferenceIngestProcessor),
  trained_models: XpackUsageMlInferenceTrainedModels,
  deployments: XpackUsageMlInferenceDeployments.optional()
}).meta({ id: 'XpackUsageMlInference' })
export type XpackUsageMlInference = z.infer<typeof XpackUsageMlInference>

export const XpackUsageMachineLearning = z.object({
  ...XpackUsageBase.shape,
  datafeeds: z.record(z.string(), XpackUsageDatafeed),
  jobs: z.record(z.string(), XpackUsageJobUsage).describe('Job usage statistics. The `_all` entry is always present and gathers statistics for all jobs.'),
  node_count: z.lazy(() => integer),
  data_frame_analytics_jobs: XpackUsageMlDataFrameAnalyticsJobs,
  inference: XpackUsageMlInference
}).meta({ id: 'XpackUsageMachineLearning' })
export type XpackUsageMachineLearning = z.infer<typeof XpackUsageMachineLearning>

export const XpackUsageMonitoring = z.object({
  ...XpackUsageBase.shape,
  collection_enabled: z.boolean(),
  enabled_exporters: z.record(z.string(), z.lazy(() => long))
}).meta({ id: 'XpackUsageMonitoring' })
export type XpackUsageMonitoring = z.infer<typeof XpackUsageMonitoring>

export const XpackUsageRealmCache = z.object({
  size: z.lazy(() => long)
}).meta({ id: 'XpackUsageRealmCache' })
export type XpackUsageRealmCache = z.infer<typeof XpackUsageRealmCache>

export const XpackUsageRealm = z.object({
  ...XpackUsageBase.shape,
  name: z.array(z.string()).optional(),
  order: z.array(z.lazy(() => long)).optional(),
  size: z.array(z.lazy(() => long)).optional(),
  cache: z.array(XpackUsageRealmCache).optional(),
  has_authorization_realms: z.array(z.boolean()).optional(),
  has_default_username_pattern: z.array(z.boolean()).optional(),
  has_truststore: z.array(z.boolean()).optional(),
  is_authentication_delegated: z.array(z.boolean()).optional()
}).meta({ id: 'XpackUsageRealm' })
export type XpackUsageRealm = z.infer<typeof XpackUsageRealm>

/**
 * Get usage information.
 *
 * Get information about the features that are currently enabled and available under the current license.
 * The API also provides some usage statistics.
 */
export const XpackUsageRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'XpackUsageRequest' })
export type XpackUsageRequest = z.infer<typeof XpackUsageRequest>

export const XpackUsageWatcherActionTotals = z.object({
  total: z.lazy(() => Duration),
  total_time_in_ms: z.lazy(() => DurationValue)
}).meta({ id: 'XpackUsageWatcherActionTotals' })
export type XpackUsageWatcherActionTotals = z.infer<typeof XpackUsageWatcherActionTotals>

export const XpackUsageWatcherActions = z.object({
  actions: z.record(z.lazy(() => Name), XpackUsageWatcherActionTotals)
}).meta({ id: 'XpackUsageWatcherActions' })
export type XpackUsageWatcherActions = z.infer<typeof XpackUsageWatcherActions>

export const XpackUsageWatcherWatchTriggerSchedule = z.object({
  ...XpackUsageCounter.shape,
  cron: XpackUsageCounter,
  _all: XpackUsageCounter
}).meta({ id: 'XpackUsageWatcherWatchTriggerSchedule' })
export type XpackUsageWatcherWatchTriggerSchedule = z.infer<typeof XpackUsageWatcherWatchTriggerSchedule>

export const XpackUsageWatcherWatchTrigger = z.object({
  schedule: XpackUsageWatcherWatchTriggerSchedule.optional(),
  _all: XpackUsageCounter
}).meta({ id: 'XpackUsageWatcherWatchTrigger' })
export type XpackUsageWatcherWatchTrigger = z.infer<typeof XpackUsageWatcherWatchTrigger>

export const XpackUsageWatcherWatch = z.object({
  input: z.record(z.lazy(() => Name), XpackUsageCounter),
  condition: z.record(z.lazy(() => Name), XpackUsageCounter).optional(),
  action: z.record(z.lazy(() => Name), XpackUsageCounter).optional(),
  trigger: XpackUsageWatcherWatchTrigger
}).meta({ id: 'XpackUsageWatcherWatch' })
export type XpackUsageWatcherWatch = z.infer<typeof XpackUsageWatcherWatch>

export const XpackUsageWatcher = z.object({
  ...XpackUsageBase.shape,
  execution: XpackUsageWatcherActions,
  watch: XpackUsageWatcherWatch,
  count: XpackUsageCounter
}).meta({ id: 'XpackUsageWatcher' })
export type XpackUsageWatcher = z.infer<typeof XpackUsageWatcher>

export const XpackUsageRuntimeFieldsType = z.object({
  chars_max: z.lazy(() => long),
  chars_total: z.lazy(() => long),
  count: z.lazy(() => long),
  doc_max: z.lazy(() => long),
  doc_total: z.lazy(() => long),
  index_count: z.lazy(() => long),
  lang: z.array(z.string()),
  lines_max: z.lazy(() => long),
  lines_total: z.lazy(() => long),
  name: z.lazy(() => Field),
  scriptless_count: z.lazy(() => long),
  shadowed_count: z.lazy(() => long),
  source_max: z.lazy(() => long),
  source_total: z.lazy(() => long)
}).meta({ id: 'XpackUsageRuntimeFieldsType' })
export type XpackUsageRuntimeFieldsType = z.infer<typeof XpackUsageRuntimeFieldsType>

export const XpackUsageRuntimeFieldTypes = z.object({
  ...XpackUsageBase.shape,
  field_types: z.array(XpackUsageRuntimeFieldsType)
}).meta({ id: 'XpackUsageRuntimeFieldTypes' })
export type XpackUsageRuntimeFieldTypes = z.infer<typeof XpackUsageRuntimeFieldTypes>

export const XpackUsageSearchableSnapshots = z.object({
  ...XpackUsageBase.shape,
  indices_count: z.lazy(() => integer),
  full_copy_indices_count: z.lazy(() => integer).optional(),
  shared_cache_indices_count: z.lazy(() => integer).optional()
}).meta({ id: 'XpackUsageSearchableSnapshots' })
export type XpackUsageSearchableSnapshots = z.infer<typeof XpackUsageSearchableSnapshots>

export const XpackUsageRoleMapping = z.object({
  enabled: z.lazy(() => integer),
  size: z.lazy(() => integer)
}).meta({ id: 'XpackUsageRoleMapping' })
export type XpackUsageRoleMapping = z.infer<typeof XpackUsageRoleMapping>

export const XpackUsageSecurityRolesNative = z.object({
  dls: z.boolean(),
  fls: z.boolean(),
  size: z.lazy(() => long)
}).meta({ id: 'XpackUsageSecurityRolesNative' })
export type XpackUsageSecurityRolesNative = z.infer<typeof XpackUsageSecurityRolesNative>

export const XpackUsageSecurityRolesFile = z.object({
  dls: z.boolean(),
  fls: z.boolean(),
  size: z.lazy(() => long)
}).meta({ id: 'XpackUsageSecurityRolesFile' })
export type XpackUsageSecurityRolesFile = z.infer<typeof XpackUsageSecurityRolesFile>

export const XpackUsageSecurityRoles = z.object({
  native: XpackUsageSecurityRolesNative,
  dls: XpackUsageSecurityRolesDls,
  file: XpackUsageSecurityRolesFile
}).meta({ id: 'XpackUsageSecurityRoles' })
export type XpackUsageSecurityRoles = z.infer<typeof XpackUsageSecurityRoles>

export const XpackUsageSsl = z.object({
  http: XpackUsageFeatureToggle,
  transport: XpackUsageFeatureToggle
}).meta({ id: 'XpackUsageSsl' })
export type XpackUsageSsl = z.infer<typeof XpackUsageSsl>

export const XpackUsageSecurity = z.object({
  ...XpackUsageBase.shape,
  api_key_service: XpackUsageFeatureToggle,
  anonymous: XpackUsageFeatureToggle,
  audit: XpackUsageAudit,
  fips_140: XpackUsageFeatureToggle,
  ipfilter: XpackUsageIpFilter,
  realms: z.record(z.string(), XpackUsageRealm),
  role_mapping: z.record(z.string(), XpackUsageRoleMapping),
  roles: XpackUsageSecurityRoles,
  ssl: XpackUsageSsl,
  system_key: XpackUsageFeatureToggle.optional(),
  token_service: XpackUsageFeatureToggle,
  operator_privileges: XpackUsageBase
}).meta({ id: 'XpackUsageSecurity' })
export type XpackUsageSecurity = z.infer<typeof XpackUsageSecurity>

export const XpackUsageSlm = z.object({
  ...XpackUsageBase.shape,
  policy_count: z.lazy(() => integer).optional(),
  policy_stats: SlmStatistics.optional()
}).meta({ id: 'XpackUsageSlm' })
export type XpackUsageSlm = z.infer<typeof XpackUsageSlm>

export const XpackUsageSql = z.object({
  ...XpackUsageBase.shape,
  features: z.record(z.string(), z.lazy(() => integer)),
  queries: z.record(z.string(), XpackUsageQuery)
}).meta({ id: 'XpackUsageSql' })
export type XpackUsageSql = z.infer<typeof XpackUsageSql>

export const XpackUsageVector = z.object({
  ...XpackUsageBase.shape,
  dense_vector_dims_avg_count: z.lazy(() => integer),
  dense_vector_fields_count: z.lazy(() => integer),
  sparse_vector_fields_count: z.lazy(() => integer).optional()
}).meta({ id: 'XpackUsageVector' })
export type XpackUsageVector = z.infer<typeof XpackUsageVector>

/** Usage statistics for indices using the `vectordb_document` index mode. */
export const XpackUsageVectorDbDocument = z.object({
  ...XpackUsageBase.shape,
  indices_count: z.lazy(() => integer).describe('The number of indices using the `vectordb_document` index mode.'),
  num_docs: z.lazy(() => long).describe('The total number of documents held across all `vectordb_document` indices.')
}).meta({ id: 'XpackUsageVectorDbDocument' })
export type XpackUsageVectorDbDocument = z.infer<typeof XpackUsageVectorDbDocument>

export const XpackUsageResponse = z.object({
  aggregate_metric: XpackUsageBase,
  analytics: XpackUsageAnalytics,
  archive: XpackUsageArchive,
  watcher: XpackUsageWatcher,
  ccr: XpackUsageCcr,
  data_frame: XpackUsageBase.optional(),
  data_science: XpackUsageBase.optional(),
  data_lifecycle: XpackUsageDataStreamLifecycleUsage.optional(),
  data_streams: XpackUsageDataStreams.optional(),
  data_tiers: XpackUsageDataTiers,
  enrich: XpackUsageBase.optional(),
  eql: XpackUsageEql,
  flattened: XpackUsageFlattened.optional(),
  graph: XpackUsageBase,
  health_api: XpackUsageHealthStatistics.optional(),
  ilm: XpackUsageIlm,
  logstash: XpackUsageBase,
  ml: XpackUsageMachineLearning,
  monitoring: XpackUsageMonitoring,
  rollup: XpackUsageBase,
  runtime_fields: XpackUsageRuntimeFieldTypes.optional(),
  spatial: XpackUsageBase,
  searchable_snapshots: XpackUsageSearchableSnapshots,
  security: XpackUsageSecurity,
  slm: XpackUsageSlm,
  sql: XpackUsageSql,
  transform: XpackUsageBase,
  vectors: XpackUsageVector.optional(),
  voting_only: XpackUsageBase
}).meta({ id: 'XpackUsageResponse' })
export type XpackUsageResponse = z.infer<typeof XpackUsageResponse>
