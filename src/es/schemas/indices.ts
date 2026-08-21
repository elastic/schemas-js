/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsStringified, SpecUtilsWithNullValue } from './_spec_utils.js'
import { ByteSize, DFIIndependenceMeasure, DFRAfterEffect, DFRBasicModel, DataStreamName, DateTime, Duration, EpochTime, Field, Fields, IBDistribution, IBLambda, IndexName, Metadata, Name, Names, Normalization, PipelineName, Script, ScriptSource, Uuid, VersionNumber, VersionString, double, integer, long } from './_types.js'
import type { ScriptSourceShape } from './_types.js'
import { AnalysisAnalyzer, AnalysisCharFilter, AnalysisNormalizer, AnalysisTokenFilter, AnalysisTokenizer } from './_types.analysis.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { IndicesIndexTemplateDataStreamConfiguration } from './indices.get_index_template.js'
import { IndicesDownsamplingRound, IndicesSamplingMethod } from './indices.put_data_lifecycle.js'
import { IndicesDataStreamFailureStore } from './indices.put_data_stream_options.js'
import { IndicesIndexRouting } from './nodes.info.js'

export const IndicesRetentionLease = z.object({
  period: z.lazy(() => Duration)
}).meta({ id: 'IndicesRetentionLease' })
export type IndicesRetentionLease = z.infer<typeof IndicesRetentionLease>

export const IndicesSoftDeletes = z.object({
  enabled: z.boolean().describe('Indicates whether soft deletes are enabled on the index.').optional(),
  retention_lease: IndicesRetentionLease.describe('The maximum period to retain a shard history retention lease before it is considered expired. Shard history retention leases ensure that soft deletes are retained during merges on the Lucene index. If a soft delete is merged away before it can be replicated to a follower the following process will fail due to incomplete history on the leader.').optional()
}).meta({ id: 'IndicesSoftDeletes' })
export type IndicesSoftDeletes = z.infer<typeof IndicesSoftDeletes>

export const IndicesSegmentSortOrder = z.enum(['asc', 'ASC', 'desc', 'DESC']).meta({ id: 'IndicesSegmentSortOrder' })
export type IndicesSegmentSortOrder = z.infer<typeof IndicesSegmentSortOrder>

export const IndicesSegmentSortMode = z.enum(['min', 'MIN', 'max', 'MAX']).meta({ id: 'IndicesSegmentSortMode' })
export type IndicesSegmentSortMode = z.infer<typeof IndicesSegmentSortMode>

export const IndicesSegmentSortMissing = z.enum(['_last', '_first']).meta({ id: 'IndicesSegmentSortMissing' })
export type IndicesSegmentSortMissing = z.infer<typeof IndicesSegmentSortMissing>

export const IndicesIndexSegmentSort = z.object({
  field: z.lazy(() => Fields).optional(),
  order: z.union([IndicesSegmentSortOrder, z.array(IndicesSegmentSortOrder)]).optional(),
  mode: z.union([IndicesSegmentSortMode, z.array(IndicesSegmentSortMode)]).optional(),
  missing: z.union([IndicesSegmentSortMissing, z.array(IndicesSegmentSortMissing)]).optional()
}).meta({ id: 'IndicesIndexSegmentSort' })
export type IndicesIndexSegmentSort = z.infer<typeof IndicesIndexSegmentSort>

export const IndicesIndexCheckOnStartup = z.union([z.boolean(), z.enum(['true', 'false', 'checksum'])]).meta({ id: 'IndicesIndexCheckOnStartup' })
export type IndicesIndexCheckOnStartup = z.infer<typeof IndicesIndexCheckOnStartup>

export const IndicesMergeScheduler = z.object({
  max_thread_count: z.lazy(() => SpecUtilsStringified).optional(),
  max_merge_count: z.lazy(() => SpecUtilsStringified).optional()
}).meta({ id: 'IndicesMergeScheduler' })
export type IndicesMergeScheduler = z.infer<typeof IndicesMergeScheduler>

export const IndicesMerge = z.object({
  scheduler: IndicesMergeScheduler.optional()
}).meta({ id: 'IndicesMerge' })
export type IndicesMerge = z.infer<typeof IndicesMerge>

export const IndicesSearchIdle = z.object({
  after: z.lazy(() => Duration).optional()
}).meta({ id: 'IndicesSearchIdle' })
export type IndicesSearchIdle = z.infer<typeof IndicesSearchIdle>

export const IndicesSlowlogTresholdLevels = z.object({
  warn: z.lazy(() => Duration).optional(),
  info: z.lazy(() => Duration).optional(),
  debug: z.lazy(() => Duration).optional(),
  trace: z.lazy(() => Duration).optional()
}).meta({ id: 'IndicesSlowlogTresholdLevels' })
export type IndicesSlowlogTresholdLevels = z.infer<typeof IndicesSlowlogTresholdLevels>

export const IndicesSlowlogTresholds = z.object({
  query: IndicesSlowlogTresholdLevels.optional(),
  fetch: IndicesSlowlogTresholdLevels.optional()
}).meta({ id: 'IndicesSlowlogTresholds' })
export type IndicesSlowlogTresholds = z.infer<typeof IndicesSlowlogTresholds>

export const IndicesSlowlogSettings = z.object({
  level: z.string().optional(),
  source: z.lazy(() => integer).optional(),
  reformat: z.boolean().optional(),
  threshold: IndicesSlowlogTresholds.optional()
}).meta({ id: 'IndicesSlowlogSettings' })
export type IndicesSlowlogSettings = z.infer<typeof IndicesSlowlogSettings>

export const IndicesSettingsSearch = z.object({
  idle: IndicesSearchIdle.optional(),
  slowlog: IndicesSlowlogSettings.optional()
}).meta({ id: 'IndicesSettingsSearch' })
export type IndicesSettingsSearch = z.infer<typeof IndicesSettingsSearch>

export const IndicesIndexSettingBlocks = z.object({
  read_only: z.lazy(() => SpecUtilsStringified).optional(),
  read_only_allow_delete: z.lazy(() => SpecUtilsStringified).optional(),
  read: z.lazy(() => SpecUtilsStringified).optional(),
  write: z.lazy(() => SpecUtilsStringified).optional(),
  metadata: z.lazy(() => SpecUtilsStringified).optional()
}).meta({ id: 'IndicesIndexSettingBlocks' })
export type IndicesIndexSettingBlocks = z.infer<typeof IndicesIndexSettingBlocks>

export const IndicesSettingsAnalyze = z.object({
  max_token_count: z.lazy(() => SpecUtilsStringified).optional()
}).meta({ id: 'IndicesSettingsAnalyze' })
export type IndicesSettingsAnalyze = z.infer<typeof IndicesSettingsAnalyze>

export const IndicesSettingsHighlight = z.object({
  max_analyzed_offset: z.lazy(() => integer).optional()
}).meta({ id: 'IndicesSettingsHighlight' })
export type IndicesSettingsHighlight = z.infer<typeof IndicesSettingsHighlight>

export const IndicesIndexSettingsUnassignedNodeLeft = z.object({
  delayed_timeout: z.lazy(() => Duration).describe('The amount of time to wait for a node that has left before assuming its shards are permanently missing and starting to allocate replacement replicas.').optional()
}).meta({ id: 'IndicesIndexSettingsUnassignedNodeLeft' })
export type IndicesIndexSettingsUnassignedNodeLeft = z.infer<typeof IndicesIndexSettingsUnassignedNodeLeft>

export const IndicesIndexSettingsUnassigned = z.object({
  node_left: IndicesIndexSettingsUnassignedNodeLeft.optional()
}).meta({ id: 'IndicesIndexSettingsUnassigned' })
export type IndicesIndexSettingsUnassigned = z.infer<typeof IndicesIndexSettingsUnassigned>

export const IndicesIndexSettingsLifecycleStep = z.object({
  wait_time_threshold: z.lazy(() => Duration).describe('Time to wait for the cluster to resolve allocation issues during an ILM shrink action. Must be greater than 1h (1 hour). See Shard allocation for shrink.').optional()
}).meta({ id: 'IndicesIndexSettingsLifecycleStep' })
export type IndicesIndexSettingsLifecycleStep = z.infer<typeof IndicesIndexSettingsLifecycleStep>

export const IndicesIndexSettingsLifecycle = z.object({
  name: z.lazy(() => Name).describe('The name of the policy to use to manage the index. For information about how Elasticsearch applies policy changes, see Policy updates.').optional(),
  indexing_complete: z.lazy(() => SpecUtilsStringified).describe('Indicates whether or not the index has been rolled over. Automatically set to true when ILM completes the rollover action. You can explicitly set it to skip rollover.').optional(),
  origination_date: z.lazy(() => long).describe('If specified, this is the timestamp used to calculate the index age for its phase transitions. Use this setting if you create a new index that contains old data and want to use the original creation date to calculate the index age. Specified as a Unix epoch value in milliseconds.').optional(),
  parse_origination_date: z.boolean().describe('Set to true to parse the origination date from the index name. This origination date is used to calculate the index age for its phase transitions. The index name must match the pattern ^.*-{date_format}-d+, where the date_format is yyyy.MM.dd and the trailing digits are optional. An index that was rolled over would normally match the full format, for example logs-2016.10.31-000002). If the index name doesn’t match the pattern, index creation fails.').optional(),
  step: IndicesIndexSettingsLifecycleStep.optional(),
  rollover_alias: z.string().describe('The index alias to update when the index rolls over. Specify when using a policy that contains a rollover action. When the index rolls over, the alias is updated to reflect that the index is no longer the write index. For more information about rolling indices, see Rollover.').optional(),
  prefer_ilm: z.union([z.boolean(), z.string()]).describe('Preference for the system that manages a data stream backing index (preferring ILM when both ILM and DLM are applicable for an index).').optional()
}).meta({ id: 'IndicesIndexSettingsLifecycle' })
export type IndicesIndexSettingsLifecycle = z.infer<typeof IndicesIndexSettingsLifecycle>

export const IndicesIndexVersioning = z.object({
  created: z.lazy(() => VersionString).optional(),
  created_string: z.string().optional()
}).meta({ id: 'IndicesIndexVersioning' })
export type IndicesIndexVersioning = z.infer<typeof IndicesIndexVersioning>

export const IndicesTranslogDurability = z.enum(['request', 'REQUEST', 'async', 'ASYNC']).meta({ id: 'IndicesTranslogDurability' })
export type IndicesTranslogDurability = z.infer<typeof IndicesTranslogDurability>

export const IndicesTranslogRetention = z.object({
  size: z.lazy(() => ByteSize).describe('This controls the total size of translog files to keep for each shard. Keeping more translog files increases the chance of performing an operation based sync when recovering a replica. If the translog files are not sufficient, replica recovery will fall back to a file based sync. This setting is ignored, and should not be set, if soft deletes are enabled. Soft deletes are enabled by default in indices created in Elasticsearch versions 7.0.0 and later.').optional(),
  age: z.lazy(() => Duration).describe('This controls the maximum duration for which translog files are kept by each shard. Keeping more translog files increases the chance of performing an operation based sync when recovering replicas. If the translog files are not sufficient, replica recovery will fall back to a file based sync. This setting is ignored, and should not be set, if soft deletes are enabled. Soft deletes are enabled by default in indices created in Elasticsearch versions 7.0.0 and later.').optional()
}).meta({ id: 'IndicesTranslogRetention' })
export type IndicesTranslogRetention = z.infer<typeof IndicesTranslogRetention>

export const IndicesTranslog = z.object({
  sync_interval: z.lazy(() => Duration).describe('How often the translog is fsynced to disk and committed, regardless of write operations. Values less than 100ms are not allowed.').optional(),
  durability: IndicesTranslogDurability.describe('Whether or not to `fsync` and commit the translog after every index, delete, update, or bulk request.').optional(),
  flush_threshold_size: z.lazy(() => ByteSize).describe('The translog stores all operations that are not yet safely persisted in Lucene (i.e., are not part of a Lucene commit point). Although these operations are available for reads, they will need to be replayed if the shard was stopped and had to be recovered. This setting controls the maximum total size of these operations, to prevent recoveries from taking too long. Once the maximum size has been reached a flush will happen, generating a new Lucene commit point.').optional(),
  retention: IndicesTranslogRetention.optional()
}).meta({ id: 'IndicesTranslog' })
export type IndicesTranslog = z.infer<typeof IndicesTranslog>

export const IndicesSettingsQueryString = z.object({
  lenient: z.lazy(() => SpecUtilsStringified)
}).meta({ id: 'IndicesSettingsQueryString' })
export type IndicesSettingsQueryString = z.infer<typeof IndicesSettingsQueryString>

export const IndicesIndexSettingsAnalysis = z.object({
  analyzer: z.record(z.string(), z.lazy(() => AnalysisAnalyzer)).optional(),
  char_filter: z.record(z.string(), z.lazy(() => AnalysisCharFilter)).optional(),
  filter: z.record(z.string(), z.lazy(() => AnalysisTokenFilter)).optional(),
  normalizer: z.record(z.string(), z.lazy(() => AnalysisNormalizer)).optional(),
  tokenizer: z.record(z.string(), z.lazy(() => AnalysisTokenizer)).optional()
}).meta({ id: 'IndicesIndexSettingsAnalysis' })
export type IndicesIndexSettingsAnalysis = z.infer<typeof IndicesIndexSettingsAnalysis>

export const IndicesIndexSettingsTimeSeries = z.object({
  end_time: z.lazy(() => DateTime).optional(),
  start_time: z.lazy(() => DateTime).optional(),
  temporality_field: z.lazy(() => Field).describe('The name of the field that stores the temporality of a metric. The referenced field must be a `keyword` dimension field; if the setting is unset or the field is missing or invalid, the metric temporality resolves to null.').optional()
}).meta({ id: 'IndicesIndexSettingsTimeSeries' })
export type IndicesIndexSettingsTimeSeries = z.infer<typeof IndicesIndexSettingsTimeSeries>

export const IndicesCacheQueries = z.object({
  enabled: z.boolean()
}).meta({ id: 'IndicesCacheQueries' })
export type IndicesCacheQueries = z.infer<typeof IndicesCacheQueries>

export const IndicesQueries = z.object({
  cache: IndicesCacheQueries.optional()
}).meta({ id: 'IndicesQueries' })
export type IndicesQueries = z.infer<typeof IndicesQueries>

export const IndicesSettingsSimilarityBm25 = z.object({
  type: z.literal('BM25'),
  b: z.lazy(() => double).optional(),
  discount_overlaps: z.boolean().optional(),
  k1: z.lazy(() => double).optional()
}).meta({ id: 'IndicesSettingsSimilarityBm25' })
export type IndicesSettingsSimilarityBm25 = z.infer<typeof IndicesSettingsSimilarityBm25>

export const IndicesSettingsSimilarityBoolean = z.object({
  type: z.literal('boolean')
}).meta({ id: 'IndicesSettingsSimilarityBoolean' })
export type IndicesSettingsSimilarityBoolean = z.infer<typeof IndicesSettingsSimilarityBoolean>

export const IndicesSettingsSimilarityDfi = z.object({
  type: z.literal('DFI'),
  independence_measure: z.lazy(() => DFIIndependenceMeasure)
}).meta({ id: 'IndicesSettingsSimilarityDfi' })
export type IndicesSettingsSimilarityDfi = z.infer<typeof IndicesSettingsSimilarityDfi>

export const IndicesSettingsSimilarityDfr = z.object({
  type: z.literal('DFR'),
  after_effect: z.lazy(() => DFRAfterEffect),
  basic_model: z.lazy(() => DFRBasicModel),
  normalization: z.lazy(() => Normalization)
}).meta({ id: 'IndicesSettingsSimilarityDfr' })
export type IndicesSettingsSimilarityDfr = z.infer<typeof IndicesSettingsSimilarityDfr>

export const IndicesSettingsSimilarityIb = z.object({
  type: z.literal('IB'),
  distribution: z.lazy(() => IBDistribution),
  lambda: z.lazy(() => IBLambda),
  normalization: z.lazy(() => Normalization)
}).meta({ id: 'IndicesSettingsSimilarityIb' })
export type IndicesSettingsSimilarityIb = z.infer<typeof IndicesSettingsSimilarityIb>

export const IndicesSettingsSimilarityLmd = z.object({
  type: z.literal('LMDirichlet'),
  mu: z.lazy(() => double).optional()
}).meta({ id: 'IndicesSettingsSimilarityLmd' })
export type IndicesSettingsSimilarityLmd = z.infer<typeof IndicesSettingsSimilarityLmd>

export const IndicesSettingsSimilarityLmj = z.object({
  type: z.literal('LMJelinekMercer'),
  lambda: z.lazy(() => double).optional()
}).meta({ id: 'IndicesSettingsSimilarityLmj' })
export type IndicesSettingsSimilarityLmj = z.infer<typeof IndicesSettingsSimilarityLmj>

export const IndicesSettingsSimilarityScripted = z.object({
  type: z.literal('scripted'),
  script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]),
  weight_script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]).optional()
}).meta({ id: 'IndicesSettingsSimilarityScripted' })
export type IndicesSettingsSimilarityScripted = z.infer<typeof IndicesSettingsSimilarityScripted>

export const IndicesSettingsSimilarity = z.union([IndicesSettingsSimilarityBm25, IndicesSettingsSimilarityBoolean, IndicesSettingsSimilarityDfi, IndicesSettingsSimilarityDfr, IndicesSettingsSimilarityIb, IndicesSettingsSimilarityLmd, IndicesSettingsSimilarityLmj, IndicesSettingsSimilarityScripted]).meta({ id: 'IndicesSettingsSimilarity' })
export type IndicesSettingsSimilarity = z.infer<typeof IndicesSettingsSimilarity>

export const IndicesMappingLimitSettingsTotalFields = z.object({
  limit: z.union([z.lazy(() => long), z.string()]).describe('The maximum number of fields in an index. Field and object mappings, as well as field aliases count towards this limit. The limit is in place to prevent mappings and searches from becoming too large. Higher values can lead to performance degradations and memory issues, especially in clusters with a high load or few resources.').optional(),
  ignore_dynamic_beyond_limit: z.union([z.boolean(), z.string()]).describe('This setting determines what happens when a dynamically mapped field would exceed the total fields limit. When set to false (the default), the index request of the document that tries to add a dynamic field to the mapping will fail with the message Limit of total fields [X] has been exceeded. When set to true, the index request will not fail. Instead, fields that would exceed the limit are not added to the mapping, similar to dynamic: false. The fields that were not added to the mapping will be added to the _ignored field.').optional()
}).meta({ id: 'IndicesMappingLimitSettingsTotalFields' })
export type IndicesMappingLimitSettingsTotalFields = z.infer<typeof IndicesMappingLimitSettingsTotalFields>

export const IndicesMappingLimitSettingsDepth = z.object({
  limit: z.lazy(() => long).describe('The maximum depth for a field, which is measured as the number of inner objects. For instance, if all fields are defined at the root object level, then the depth is 1. If there is one object mapping, then the depth is 2, etc.').optional()
}).meta({ id: 'IndicesMappingLimitSettingsDepth' })
export type IndicesMappingLimitSettingsDepth = z.infer<typeof IndicesMappingLimitSettingsDepth>

export const IndicesMappingLimitSettingsNestedFields = z.object({
  limit: z.lazy(() => long).describe('The maximum number of distinct nested mappings in an index. The nested type should only be used in special cases, when arrays of objects need to be queried independently of each other. To safeguard against poorly designed mappings, this setting limits the number of unique nested types per index.').optional()
}).meta({ id: 'IndicesMappingLimitSettingsNestedFields' })
export type IndicesMappingLimitSettingsNestedFields = z.infer<typeof IndicesMappingLimitSettingsNestedFields>

export const IndicesMappingLimitSettingsNestedObjects = z.object({
  limit: z.lazy(() => long).describe('The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects.').optional()
}).meta({ id: 'IndicesMappingLimitSettingsNestedObjects' })
export type IndicesMappingLimitSettingsNestedObjects = z.infer<typeof IndicesMappingLimitSettingsNestedObjects>

export const IndicesMappingLimitSettingsFieldNameLength = z.object({
  limit: z.lazy(() => long).describe('Setting for the maximum length of a field name. This setting isn’t really something that addresses mappings explosion but might still be useful if you want to limit the field length. It usually shouldn’t be necessary to set this setting. The default is okay unless a user starts to add a huge number of fields with really long names. Default is `Long.MAX_VALUE` (no limit).').optional()
}).meta({ id: 'IndicesMappingLimitSettingsFieldNameLength' })
export type IndicesMappingLimitSettingsFieldNameLength = z.infer<typeof IndicesMappingLimitSettingsFieldNameLength>

export const IndicesMappingLimitSettingsDimensionFields = z.object({
  limit: z.lazy(() => long).describe('[preview] This functionality is in technical preview and may be changed or removed in a future release. Elastic will work to fix any issues, but features in technical preview are not subject to the support SLA of official GA features.').optional()
}).meta({ id: 'IndicesMappingLimitSettingsDimensionFields' })
export type IndicesMappingLimitSettingsDimensionFields = z.infer<typeof IndicesMappingLimitSettingsDimensionFields>

export const IndicesSourceMode = z.enum(['disabled', 'stored', 'synthetic']).meta({ id: 'IndicesSourceMode' })
export type IndicesSourceMode = z.infer<typeof IndicesSourceMode>

export const IndicesMappingLimitSettingsSourceFields = z.object({
  mode: IndicesSourceMode
}).meta({ id: 'IndicesMappingLimitSettingsSourceFields' })
export type IndicesMappingLimitSettingsSourceFields = z.infer<typeof IndicesMappingLimitSettingsSourceFields>

/** Mapping Limit Settings */
export const IndicesMappingLimitSettings = z.object({
  coerce: z.boolean().optional(),
  total_fields: IndicesMappingLimitSettingsTotalFields.optional(),
  depth: IndicesMappingLimitSettingsDepth.optional(),
  nested_fields: IndicesMappingLimitSettingsNestedFields.optional(),
  nested_objects: IndicesMappingLimitSettingsNestedObjects.optional(),
  field_name_length: IndicesMappingLimitSettingsFieldNameLength.optional(),
  dimension_fields: IndicesMappingLimitSettingsDimensionFields.optional(),
  source: IndicesMappingLimitSettingsSourceFields.optional(),
  ignore_malformed: z.union([z.boolean(), z.string()]).optional()
}).meta({ id: 'IndicesMappingLimitSettings' })
export type IndicesMappingLimitSettings = z.infer<typeof IndicesMappingLimitSettings>

export const IndicesIndexingSlowlogTresholds = z.object({
  index: IndicesSlowlogTresholdLevels.describe('The indexing slow log, similar in functionality to the search slow log. The log file name ends with `_index_indexing_slowlog.json`. Log and the thresholds are configured in the same way as the search slowlog.').optional()
}).meta({ id: 'IndicesIndexingSlowlogTresholds' })
export type IndicesIndexingSlowlogTresholds = z.infer<typeof IndicesIndexingSlowlogTresholds>

export const IndicesIndexingSlowlogSettings = z.object({
  level: z.string().optional(),
  source: z.lazy(() => integer).optional(),
  reformat: z.boolean().optional(),
  threshold: IndicesIndexingSlowlogTresholds.optional()
}).meta({ id: 'IndicesIndexingSlowlogSettings' })
export type IndicesIndexingSlowlogSettings = z.infer<typeof IndicesIndexingSlowlogSettings>

export const IndicesIndexingPressureMemory = z.object({
  limit: z.lazy(() => integer).describe('Number of outstanding bytes that may be consumed by indexing requests. When this limit is reached or exceeded, the node will reject new coordinating and primary operations. When replica operations consume 1.5x this limit, the node will reject new replica operations. Defaults to 10% of the heap.').optional()
}).meta({ id: 'IndicesIndexingPressureMemory' })
export type IndicesIndexingPressureMemory = z.infer<typeof IndicesIndexingPressureMemory>

export const IndicesIndexingPressure = z.object({
  memory: IndicesIndexingPressureMemory
}).meta({ id: 'IndicesIndexingPressure' })
export type IndicesIndexingPressure = z.infer<typeof IndicesIndexingPressure>

export const IndicesStorageType = z.union([z.enum(['fs', 'niofs', 'mmapfs', 'hybridfs']), z.string()]).meta({ id: 'IndicesStorageType' })
export type IndicesStorageType = z.infer<typeof IndicesStorageType>

export const IndicesStorage = z.object({
  type: IndicesStorageType,
  allow_mmap: z.boolean().describe('You can restrict the use of the mmapfs and the related hybridfs store type via the setting node.store.allow_mmap. This is a boolean setting indicating whether or not memory-mapping is allowed. The default is to allow it. This setting is useful, for example, if you are in an environment where you can not control the ability to create a lot of memory maps so you need disable the ability to use memory-mapping.').optional(),
  stats_refresh_interval: z.lazy(() => Duration).describe('How often store statistics are refreshed').optional()
}).meta({ id: 'IndicesStorage' })
export type IndicesStorage = z.infer<typeof IndicesStorage>

export interface IndicesIndexSettingsShape {
  index?: IndicesIndexSettingsShape | undefined
  mode?: string | undefined
  routing_path?: string | string[] | undefined
  soft_deletes?: IndicesSoftDeletes | undefined
  sort?: IndicesIndexSegmentSort | undefined
  number_of_routing_shards?: integer | undefined
  check_on_startup?: IndicesIndexCheckOnStartup | undefined
  codec?: string | undefined
  routing_partition_size?: SpecUtilsStringified | undefined
  load_fixed_bitset_filters_eagerly?: boolean | undefined
  hidden?: boolean | string | undefined
  auto_expand_replicas?: SpecUtilsWithNullValue | undefined
  merge?: IndicesMerge | undefined
  search?: IndicesSettingsSearch | undefined
  refresh_interval?: Duration | undefined
  max_result_window?: integer | undefined
  max_inner_result_window?: integer | undefined
  max_rescore_window?: integer | undefined
  max_docvalue_fields_search?: integer | undefined
  max_script_fields?: integer | undefined
  max_ngram_diff?: integer | undefined
  max_shingle_diff?: integer | undefined
  blocks?: IndicesIndexSettingBlocks | undefined
  max_refresh_listeners?: integer | undefined
  analyze?: IndicesSettingsAnalyze | undefined
  highlight?: IndicesSettingsHighlight | undefined
  max_terms_count?: integer | undefined
  max_regex_length?: integer | undefined
  routing?: IndicesIndexRouting | undefined
  unassigned?: IndicesIndexSettingsUnassigned | undefined
  gc_deletes?: Duration | undefined
  default_pipeline?: PipelineName | undefined
  final_pipeline?: PipelineName | undefined
  lifecycle?: IndicesIndexSettingsLifecycle | undefined
  provided_name?: Name | undefined
  creation_date?: SpecUtilsStringified | undefined
  creation_date_string?: DateTime | undefined
  uuid?: Uuid | undefined
  version?: IndicesIndexVersioning | undefined
  verified_before_close?: boolean | string | undefined
  format?: string | integer | undefined
  max_slices_per_scroll?: integer | undefined
  translog?: IndicesTranslog | undefined
  query_string?: IndicesSettingsQueryString | undefined
  priority?: integer | string | undefined
  top_metrics_max_size?: integer | undefined
  analysis?: IndicesIndexSettingsAnalysis | undefined
  settings?: IndicesIndexSettingsShape | undefined
  time_series?: IndicesIndexSettingsTimeSeries | undefined
  queries?: IndicesQueries | undefined
  similarity?: Record<string, IndicesSettingsSimilarity> | undefined
  mapping?: IndicesMappingLimitSettings | undefined
  'indexing.slowlog'?: IndicesIndexingSlowlogSettings | undefined
  indexing_pressure?: IndicesIndexingPressure | undefined
  store?: IndicesStorage | undefined
}
export const IndicesIndexSettings = z.looseObject({
  get index () { return IndicesIndexSettings.optional() },
  mode: z.string().optional(),
  routing_path: z.union([z.string(), z.array(z.string())]).optional(),
  soft_deletes: IndicesSoftDeletes.optional(),
  sort: IndicesIndexSegmentSort.optional(),
  number_of_routing_shards: z.lazy(() => integer).optional(),
  check_on_startup: IndicesIndexCheckOnStartup.optional(),
  codec: z.string().optional(),
  routing_partition_size: z.lazy(() => SpecUtilsStringified).optional(),
  load_fixed_bitset_filters_eagerly: z.boolean().optional(),
  hidden: z.union([z.boolean(), z.string()]).optional(),
  auto_expand_replicas: z.lazy(() => SpecUtilsWithNullValue).optional(),
  merge: IndicesMerge.optional(),
  search: IndicesSettingsSearch.optional(),
  refresh_interval: z.lazy(() => Duration).optional(),
  max_result_window: z.lazy(() => integer).optional(),
  max_inner_result_window: z.lazy(() => integer).optional(),
  max_rescore_window: z.lazy(() => integer).optional(),
  max_docvalue_fields_search: z.lazy(() => integer).optional(),
  max_script_fields: z.lazy(() => integer).optional(),
  max_ngram_diff: z.lazy(() => integer).optional(),
  max_shingle_diff: z.lazy(() => integer).optional(),
  blocks: IndicesIndexSettingBlocks.optional(),
  max_refresh_listeners: z.lazy(() => integer).optional(),
  analyze: IndicesSettingsAnalyze.describe('Settings to define analyzers, tokenizers, token filters and character filters. Refer to the linked documentation for step-by-step examples of updating analyzers on existing indices.').optional(),
  highlight: IndicesSettingsHighlight.optional(),
  max_terms_count: z.lazy(() => integer).optional(),
  max_regex_length: z.lazy(() => integer).optional(),
  routing: z.lazy(() => IndicesIndexRouting).optional(),
  unassigned: IndicesIndexSettingsUnassigned.optional(),
  gc_deletes: z.lazy(() => Duration).optional(),
  default_pipeline: z.lazy(() => PipelineName).optional(),
  final_pipeline: z.lazy(() => PipelineName).optional(),
  lifecycle: IndicesIndexSettingsLifecycle.optional(),
  provided_name: z.lazy(() => Name).optional(),
  creation_date: z.lazy(() => SpecUtilsStringified).optional(),
  creation_date_string: z.lazy(() => DateTime).optional(),
  uuid: z.lazy(() => Uuid).optional(),
  version: IndicesIndexVersioning.optional(),
  verified_before_close: z.union([z.boolean(), z.string()]).optional(),
  format: z.union([z.string(), z.lazy(() => integer)]).optional(),
  max_slices_per_scroll: z.lazy(() => integer).optional(),
  translog: IndicesTranslog.optional(),
  query_string: IndicesSettingsQueryString.optional(),
  priority: z.union([z.lazy(() => integer), z.string()]).optional(),
  top_metrics_max_size: z.lazy(() => integer).optional(),
  analysis: IndicesIndexSettingsAnalysis.optional(),
  get settings () { return IndicesIndexSettings.optional() },
  time_series: IndicesIndexSettingsTimeSeries.optional(),
  queries: IndicesQueries.optional(),
  similarity: z.record(z.string(), IndicesSettingsSimilarity).describe('Configure custom similarity settings to customize how search results are scored.').optional(),
  mapping: IndicesMappingLimitSettings.describe('Enable or disable dynamic mapping for an index.').optional(),
  'indexing.slowlog': IndicesIndexingSlowlogSettings.optional(),
  indexing_pressure: IndicesIndexingPressure.describe('Configure indexing back pressure limits.').optional(),
  store: IndicesStorage.describe('The store module allows you to control how index data is stored and accessed on disk.').optional()
}).meta({ id: 'IndicesIndexSettings' })
export type IndicesIndexSettings = z.infer<typeof IndicesIndexSettings>

export const IndicesRetentionSource = z.enum(['data_stream_configuration', 'default_global_retention', 'max_global_retention', 'default_failures_retention']).meta({ id: 'IndicesRetentionSource' })
export type IndicesRetentionSource = z.infer<typeof IndicesRetentionSource>

/** Data stream lifecycle denotes that a data stream is managed by the data stream lifecycle and contains the configuration. */
export const IndicesDataStreamLifecycle = z.object({
  data_retention: z.lazy(() => Duration).describe('If defined, every document added to this data stream will be stored at least for this time frame. Any time after this duration the document could be deleted. When empty, every document in this data stream will be stored indefinitely.').optional(),
  effective_retention: z.lazy(() => Duration).describe('The least amount of time data should be kept by elasticsearch.').optional(),
  retention_determined_by: IndicesRetentionSource.describe('Configuration source that can influence the retention of a data stream.').optional(),
  downsampling: z.array(z.lazy(() => IndicesDownsamplingRound)).describe('The list of downsampling rounds to execute as part of this downsampling configuration').optional(),
  downsampling_method: z.lazy(() => IndicesSamplingMethod).describe('The method used to downsample the data. There are two options `aggregate` and `last_value`. It requires `downsampling` to be defined. Defaults to `aggregate`.').optional(),
  enabled: z.boolean().describe('If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle that\'s disabled (enabled: `false`) will have no effect on the data stream.').optional()
}).meta({ id: 'IndicesDataStreamLifecycle' })
export type IndicesDataStreamLifecycle = z.infer<typeof IndicesDataStreamLifecycle>

export const IndicesDataStreamLifecycleRolloverConditions = z.object({
  min_age: z.lazy(() => Duration).optional(),
  max_age: z.string().optional(),
  min_docs: z.lazy(() => long).optional(),
  max_docs: z.lazy(() => long).optional(),
  min_size: z.lazy(() => ByteSize).optional(),
  max_size: z.lazy(() => ByteSize).optional(),
  min_primary_shard_size: z.lazy(() => ByteSize).optional(),
  max_primary_shard_size: z.lazy(() => ByteSize).optional(),
  min_primary_shard_docs: z.lazy(() => long).optional(),
  max_primary_shard_docs: z.lazy(() => long).optional()
}).meta({ id: 'IndicesDataStreamLifecycleRolloverConditions' })
export type IndicesDataStreamLifecycleRolloverConditions = z.infer<typeof IndicesDataStreamLifecycleRolloverConditions>

/**
 * Data stream lifecycle with rollover can be used to display the configuration including the default rollover conditions,
 * if asked.
 */
export const IndicesDataStreamLifecycleWithRollover = z.object({
  ...IndicesDataStreamLifecycle.shape,
  rollover: IndicesDataStreamLifecycleRolloverConditions.describe('The conditions which will trigger the rollover of a backing index as configured by the cluster setting `cluster.lifecycle.default.rollover`. This property is an implementation detail and it will only be retrieved when the query param `include_defaults` is set to true. The contents of this field are subject to change.').optional()
}).meta({ id: 'IndicesDataStreamLifecycleWithRollover' })
export type IndicesDataStreamLifecycleWithRollover = z.infer<typeof IndicesDataStreamLifecycleWithRollover>

export const IndicesAliasDefinition = z.object({
  filter: z.lazy(() => QueryDslQueryContainer).describe('Query used to limit documents the alias can access.').optional(),
  index_routing: z.string().describe('Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations.').optional(),
  is_write_index: z.boolean().describe('If `true`, the index is the write index for the alias.').optional(),
  routing: z.string().describe('Value used to route indexing and search operations to a specific shard.').optional(),
  search_routing: z.string().describe('Value used to route search operations to a specific shard. If specified, this overwrites the `routing` value for search operations.').optional(),
  is_hidden: z.boolean().describe('If `true`, the alias is hidden. All indices for the alias must have the same `is_hidden` value.').optional()
}).meta({ id: 'IndicesAliasDefinition' })
export type IndicesAliasDefinition = z.infer<typeof IndicesAliasDefinition>

/**
 * Data stream options contain the configuration of data stream level features for a given data stream, for example,
 * the failure store configuration.
 */
export const IndicesDataStreamOptions = z.object({
  failure_store: z.lazy(() => IndicesDataStreamFailureStore).describe('If defined, it specifies configuration for the failure store of this data stream.').optional()
}).meta({ id: 'IndicesDataStreamOptions' })
export type IndicesDataStreamOptions = z.infer<typeof IndicesDataStreamOptions>

export const IndicesAlias = z.object({
  filter: z.lazy(() => QueryDslQueryContainer).describe('Query used to limit documents the alias can access.').optional(),
  index_routing: z.string().describe('Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations.').optional(),
  is_hidden: z.boolean().describe('If `true`, the alias is hidden. All indices for the alias must have the same `is_hidden` value.').optional(),
  is_write_index: z.boolean().describe('If `true`, the index is the write index for the alias.').optional(),
  routing: z.string().describe('Value used to route indexing and search operations to a specific shard.').optional(),
  search_routing: z.string().describe('Value used to route search operations to a specific shard. If specified, this overwrites the `routing` value for search operations.').optional()
}).meta({ id: 'IndicesAlias' })
export type IndicesAlias = z.infer<typeof IndicesAlias>

export const IndicesDataStreamVisibility = z.object({
  hidden: z.boolean().optional(),
  allow_custom_routing: z.boolean().optional(),
  failure_store: z.boolean().optional()
}).meta({ id: 'IndicesDataStreamVisibility' })
export type IndicesDataStreamVisibility = z.infer<typeof IndicesDataStreamVisibility>

export const IndicesIndexState = z.object({
  aliases: z.record(z.lazy(() => IndexName), z.lazy(() => IndicesAlias)).optional(),
  mappings: z.lazy(() => MappingTypeMapping).optional(),
  settings: z.lazy(() => IndicesIndexSettings).optional(),
  defaults: z.lazy(() => IndicesIndexSettings).describe('Default settings, included when the request\'s `include_default` is `true`.').optional(),
  data_stream: z.lazy(() => DataStreamName).optional(),
  lifecycle: IndicesDataStreamLifecycle.describe('Data stream lifecycle applicable if this is a data stream.').optional()
}).meta({ id: 'IndicesIndexState' })
export type IndicesIndexState = z.infer<typeof IndicesIndexState>

export const IndicesIndexTemplateSummary = z.object({
  aliases: z.record(z.lazy(() => IndexName), z.lazy(() => IndicesAlias)).describe('Aliases to add. If the index template includes a `data_stream` object, these are data stream aliases. Otherwise, these are index aliases. Data stream aliases ignore the `index_routing`, `routing`, and `search_routing` options.').optional(),
  mappings: z.lazy(() => MappingTypeMapping).describe('Mapping for fields in the index. If specified, this mapping can include field names, field data types, and mapping parameters.').optional(),
  settings: z.lazy(() => IndicesIndexSettings).describe('Configuration options for the index.').optional(),
  lifecycle: IndicesDataStreamLifecycle.optional(),
  data_stream_options: z.lazy(() => IndicesDataStreamOptions).optional()
}).meta({ id: 'IndicesIndexTemplateSummary' })
export type IndicesIndexTemplateSummary = z.infer<typeof IndicesIndexTemplateSummary>

export const IndicesIndexTemplate = z.object({
  index_patterns: z.lazy(() => Names).describe('Array of wildcard (`*`) expressions used to match the names of data streams and indices during creation.'),
  composed_of: z.array(z.lazy(() => Name)).describe('An ordered list of component template names. Component templates are merged in the order specified, meaning that the last component template specified has the highest precedence.'),
  template: IndicesIndexTemplateSummary.describe('Template to be applied. It may optionally include an `aliases`, `mappings`, or `settings` configuration.').optional(),
  version: z.lazy(() => VersionNumber).describe('Version number used to manage index templates externally. This number is not automatically generated by Elasticsearch.').optional(),
  priority: z.lazy(() => long).describe('Priority to determine index template precedence when a new data stream or index is created. The index template with the highest priority is chosen. If no priority is specified the template is treated as though it is of priority 0 (lowest priority). This number is not automatically generated by Elasticsearch.').optional(),
  _meta: z.lazy(() => Metadata).describe('Optional user metadata about the index template. May have any contents. This map is not automatically generated by Elasticsearch.').optional(),
  allow_auto_create: z.boolean().optional(),
  data_stream: z.lazy(() => IndicesIndexTemplateDataStreamConfiguration).describe('If this object is included, the template is used to create data streams and their backing indices. Supports an empty object. Data streams require a matching index template with a `data_stream` object.').optional(),
  deprecated: z.boolean().describe('Marks this index template as deprecated. When creating or updating a non-deprecated index template that uses deprecated components, Elasticsearch will emit a deprecation warning.').optional(),
  ignore_missing_component_templates: z.lazy(() => Names).describe('A list of component template names that are allowed to be absent.').optional(),
  created_date: z.lazy(() => DateTime).describe('Date and time when the index template was created. Only returned if the `human` query parameter is `true`.').optional(),
  created_date_millis: z.lazy(() => EpochTime).describe('Date and time when the index template was created, in milliseconds since the epoch.').optional(),
  modified_date: z.lazy(() => DateTime).describe('Date and time when the index template was last modified. Only returned if the `human` query parameter is `true`.').optional(),
  modified_date_millis: z.lazy(() => EpochTime).describe('Date and time when the index template was last modified, in milliseconds since the epoch.').optional()
}).meta({ id: 'IndicesIndexTemplate' })
export type IndicesIndexTemplate = z.infer<typeof IndicesIndexTemplate>

export const IndicesIndicesBlockOptions = z.enum(['metadata', 'read', 'read_only', 'write']).meta({ id: 'IndicesIndicesBlockOptions' })
export type IndicesIndicesBlockOptions = z.infer<typeof IndicesIndicesBlockOptions>
