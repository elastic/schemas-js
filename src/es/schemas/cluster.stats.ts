/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, CompletionStats, DateFormat, DocStats, Duration, DurationValue, FielddataStats, HealthStatus, Name, NodeIds, NodeStatistics, PluginStats, QueryCacheStats, SegmentsStats, StoreStats, Uuid, VersionString, double, integer, long } from './_types.js'

/** Time unit for milliseconds */
export const UnitMillis = z.lazy(() => long).meta({ id: 'UnitMillis' })
export type UnitMillis = z.infer<typeof UnitMillis>

export const ClusterStatsRemoteClusterInfo = z.object({
  cluster_uuid: z.string().describe('The UUID of the remote cluster.'),
  mode: z.string().describe('The connection mode used to communicate with the remote cluster.'),
  skip_unavailable: z.boolean().describe('The `skip_unavailable` setting used for this remote cluster.'),
  'transport.compress': z.string().describe('Transport compression setting used for this remote cluster.'),
  status: z.lazy(() => HealthStatus).describe('Health status of the cluster, based on the state of its primary and replica shards.'),
  version: z.array(z.lazy(() => VersionString)).describe('The list of Elasticsearch versions used by the nodes on the remote cluster.'),
  nodes_count: z.lazy(() => integer).describe('The total count of nodes in the remote cluster.'),
  shards_count: z.lazy(() => integer).describe('The total number of shards in the remote cluster.'),
  indices_count: z.lazy(() => integer).describe('The total number of indices in the remote cluster.'),
  indices_total_size_in_bytes: z.lazy(() => long).describe('Total data set size, in bytes, of all shards assigned to selected nodes.'),
  indices_total_size: z.string().describe('Total data set size of all shards assigned to selected nodes, as a human-readable string.').optional(),
  max_heap_in_bytes: z.lazy(() => long).describe('Maximum amount of memory, in bytes, available for use by the heap across the nodes of the remote cluster.'),
  max_heap: z.string().describe('Maximum amount of memory available for use by the heap across the nodes of the remote cluster, as a human-readable string.').optional(),
  mem_total_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of physical memory across the nodes of the remote cluster.'),
  mem_total: z.string().describe('Total amount of physical memory across the nodes of the remote cluster, as a human-readable string.').optional()
}).meta({ id: 'ClusterStatsRemoteClusterInfo' })
export type ClusterStatsRemoteClusterInfo = z.infer<typeof ClusterStatsRemoteClusterInfo>

export const ClusterStatsCCSUsageTimeValue = z.object({
  max: z.lazy(() => DurationValue).describe('The maximum time taken to execute a request, in milliseconds.'),
  avg: z.lazy(() => DurationValue).describe('The average time taken to execute a request, in milliseconds.'),
  p90: z.lazy(() => DurationValue).describe('The 90th percentile of the time taken to execute requests, in milliseconds.')
}).meta({ id: 'ClusterStatsCCSUsageTimeValue' })
export type ClusterStatsCCSUsageTimeValue = z.infer<typeof ClusterStatsCCSUsageTimeValue>

export const ClusterStatsCCSUsageClusterStats = z.object({
  total: z.lazy(() => integer).describe('The total number of successful (not skipped) cross-cluster search requests that were executed against this cluster. This may include requests where partial results were returned, but not requests in which the cluster has been skipped entirely.'),
  skipped: z.lazy(() => integer).describe('The total number of cross-cluster search requests for which this cluster was skipped.'),
  took: ClusterStatsCCSUsageTimeValue.describe('Statistics about the time taken to execute requests against this cluster.')
}).meta({ id: 'ClusterStatsCCSUsageClusterStats' })
export type ClusterStatsCCSUsageClusterStats = z.infer<typeof ClusterStatsCCSUsageClusterStats>

export const ClusterStatsCCSUsageStats = z.object({
  total: z.lazy(() => integer).describe('The total number of cross-cluster search requests that have been executed by the cluster.'),
  success: z.lazy(() => integer).describe('The total number of cross-cluster search requests that have been successfully executed by the cluster.'),
  skipped: z.lazy(() => integer).describe('The total number of cross-cluster search requests (successful or failed) that had at least one remote cluster skipped.'),
  took: ClusterStatsCCSUsageTimeValue.describe('Statistics about the time taken to execute cross-cluster search requests.'),
  took_mrt_true: ClusterStatsCCSUsageTimeValue.describe('Statistics about the time taken to execute cross-cluster search requests for which the `ccs_minimize_roundtrips` setting was set to `true`.').optional(),
  took_mrt_false: ClusterStatsCCSUsageTimeValue.describe('Statistics about the time taken to execute cross-cluster search requests for which the `ccs_minimize_roundtrips` setting was set to `false`.').optional(),
  remotes_per_search_max: z.lazy(() => integer).describe('The maximum number of remote clusters that were queried in a single cross-cluster search request.'),
  remotes_per_search_avg: z.lazy(() => double).describe('The average number of remote clusters that were queried in a single cross-cluster search request.'),
  failure_reasons: z.record(z.string(), z.lazy(() => integer)).describe('Statistics about the reasons for cross-cluster search request failures. The keys are the failure reason names and the values are the number of requests that failed for that reason.'),
  features: z.record(z.string(), z.lazy(() => integer)).describe('The keys are the names of the search feature, and the values are the number of requests that used that feature. Single request can use more than one feature (e.g. both `async` and `wildcard`).'),
  clients: z.record(z.string(), z.lazy(() => integer)).describe('Statistics about the clients that executed cross-cluster search requests. The keys are the names of the clients, and the values are the number of requests that were executed by that client. Only known clients (such as `kibana` or `elasticsearch`) are counted.'),
  clusters: z.record(z.string(), ClusterStatsCCSUsageClusterStats).describe('Statistics about the clusters that were queried in cross-cluster search requests. The keys are cluster names, and the values are per-cluster telemetry data. This also includes the local cluster itself, which uses the name `(local)`.')
}).meta({ id: 'ClusterStatsCCSUsageStats' })
export type ClusterStatsCCSUsageStats = z.infer<typeof ClusterStatsCCSUsageStats>

export const ClusterStatsCCSStats = z.object({
  clusters: z.record(z.string(), ClusterStatsRemoteClusterInfo).describe('Contains remote cluster settings and metrics collected from them. The keys are cluster names, and the values are per-cluster data. Only present if `include_remotes` option is set to true.').optional(),
  _search: ClusterStatsCCSUsageStats.describe('Information about cross-cluster search usage.'),
  _esql: ClusterStatsCCSUsageStats.describe('Information about ES|QL cross-cluster query usage.').optional()
}).meta({ id: 'ClusterStatsCCSStats' })
export type ClusterStatsCCSStats = z.infer<typeof ClusterStatsCCSStats>

export const ClusterStatsFieldTypes = z.object({
  name: z.lazy(() => Name).describe('The name for the field type in selected nodes.'),
  count: z.lazy(() => integer).describe('The number of occurrences of the field type in selected nodes.'),
  index_count: z.lazy(() => integer).describe('The number of indices containing the field type in selected nodes.'),
  indexed_vector_count: z.lazy(() => integer).describe('For dense_vector field types, number of indexed vector types in selected nodes.').optional(),
  indexed_vector_dim_max: z.lazy(() => integer).describe('For dense_vector field types, the maximum dimension of all indexed vector types in selected nodes.').optional(),
  indexed_vector_dim_min: z.lazy(() => integer).describe('For dense_vector field types, the minimum dimension of all indexed vector types in selected nodes.').optional(),
  script_count: z.lazy(() => integer).describe('The number of fields that declare a script.').optional(),
  vector_index_type_count: z.record(z.lazy(() => Name), z.lazy(() => integer)).describe('For dense_vector field types, count of mappings by index type').optional(),
  vector_similarity_type_count: z.record(z.lazy(() => Name), z.lazy(() => integer)).describe('For dense_vector field types, count of mappings by similarity').optional(),
  vector_element_type_count: z.record(z.lazy(() => Name), z.lazy(() => integer)).describe('For dense_vector field types, count of mappings by element type').optional()
}).meta({ id: 'ClusterStatsFieldTypes' })
export type ClusterStatsFieldTypes = z.infer<typeof ClusterStatsFieldTypes>

export const ClusterStatsMultipleSynonymGraphFilter = z.object({
  analyzer_count: z.lazy(() => integer).describe('Number of analyzers across the cluster whose filter chain contains more than one synonym_graph filter.').optional(),
  index_count: z.lazy(() => integer).describe('Number of indices that contain at least one analyzer with more than one synonym_graph filter.').optional()
}).meta({ id: 'ClusterStatsMultipleSynonymGraphFilter' })
export type ClusterStatsMultipleSynonymGraphFilter = z.infer<typeof ClusterStatsMultipleSynonymGraphFilter>

export const ClusterStatsSynonymsStats = z.object({
  count: z.lazy(() => integer),
  index_count: z.lazy(() => integer)
}).meta({ id: 'ClusterStatsSynonymsStats' })
export type ClusterStatsSynonymsStats = z.infer<typeof ClusterStatsSynonymsStats>

export const ClusterStatsCharFilterTypes = z.object({
  analyzer_types: z.array(ClusterStatsFieldTypes).describe('Contains statistics about analyzer types used in selected nodes.'),
  built_in_analyzers: z.array(ClusterStatsFieldTypes).describe('Contains statistics about built-in analyzers used in selected nodes.'),
  built_in_char_filters: z.array(ClusterStatsFieldTypes).describe('Contains statistics about built-in character filters used in selected nodes.'),
  built_in_filters: z.array(ClusterStatsFieldTypes).describe('Contains statistics about built-in token filters used in selected nodes.'),
  built_in_tokenizers: z.array(ClusterStatsFieldTypes).describe('Contains statistics about built-in tokenizers used in selected nodes.'),
  char_filter_types: z.array(ClusterStatsFieldTypes).describe('Contains statistics about character filter types used in selected nodes.'),
  multiple_synonym_graph_filters: ClusterStatsMultipleSynonymGraphFilter.optional(),
  filter_types: z.array(ClusterStatsFieldTypes).describe('Contains statistics about token filter types used in selected nodes.'),
  tokenizer_types: z.array(ClusterStatsFieldTypes).describe('Contains statistics about tokenizer types used in selected nodes.'),
  synonyms: z.record(z.lazy(() => Name), ClusterStatsSynonymsStats).describe('Contains statistics about synonyms types used in selected nodes.')
}).meta({ id: 'ClusterStatsCharFilterTypes' })
export type ClusterStatsCharFilterTypes = z.infer<typeof ClusterStatsCharFilterTypes>

export const ClusterStatsClusterFileSystem = z.object({
  path: z.string().optional(),
  mount: z.string().optional(),
  type: z.string().optional(),
  available_in_bytes: z.lazy(() => long).describe('Total number of bytes available to JVM in file stores across all selected nodes. Depending on operating system or process-level restrictions, this number may be less than `nodes.fs.free_in_byes`. This is the actual amount of free disk space the selected Elasticsearch nodes can use.').optional(),
  available: z.lazy(() => ByteSize).describe('Total number of bytes available to JVM in file stores across all selected nodes. Depending on operating system or process-level restrictions, this number may be less than `nodes.fs.free_in_byes`. This is the actual amount of free disk space the selected Elasticsearch nodes can use.').optional(),
  free_in_bytes: z.lazy(() => long).describe('Total number, in bytes, of unallocated bytes in file stores across all selected nodes.').optional(),
  free: z.lazy(() => ByteSize).describe('Total number of unallocated bytes in file stores across all selected nodes.').optional(),
  total_in_bytes: z.lazy(() => long).describe('Total size, in bytes, of all file stores across all selected nodes.').optional(),
  total: z.lazy(() => ByteSize).describe('Total size of all file stores across all selected nodes.').optional(),
  low_watermark_free_space: z.lazy(() => ByteSize).optional(),
  low_watermark_free_space_in_bytes: z.lazy(() => long).optional(),
  high_watermark_free_space: z.lazy(() => ByteSize).optional(),
  high_watermark_free_space_in_bytes: z.lazy(() => long).optional(),
  flood_stage_free_space: z.lazy(() => ByteSize).optional(),
  flood_stage_free_space_in_bytes: z.lazy(() => long).optional(),
  frozen_flood_stage_free_space: z.lazy(() => ByteSize).optional(),
  frozen_flood_stage_free_space_in_bytes: z.lazy(() => long).optional()
}).meta({ id: 'ClusterStatsClusterFileSystem' })
export type ClusterStatsClusterFileSystem = z.infer<typeof ClusterStatsClusterFileSystem>

export const ClusterStatsExtendedTextSimilarityRetrieverUsage = z.object({
  chunk_rescorer: z.lazy(() => long).optional()
}).meta({ id: 'ClusterStatsExtendedTextSimilarityRetrieverUsage' })
export type ClusterStatsExtendedTextSimilarityRetrieverUsage = z.infer<typeof ClusterStatsExtendedTextSimilarityRetrieverUsage>

export const ClusterStatsExtendedRetrieversSearchUsage = z.object({
  text_similarity_reranker: ClusterStatsExtendedTextSimilarityRetrieverUsage.optional()
}).meta({ id: 'ClusterStatsExtendedRetrieversSearchUsage' })
export type ClusterStatsExtendedRetrieversSearchUsage = z.infer<typeof ClusterStatsExtendedRetrieversSearchUsage>

export const ClusterStatsSortType = z.enum(['_doc', '_geo_distance', '_score', '_script', 'field_sort']).meta({ id: 'ClusterStatsSortType' })
export type ClusterStatsSortType = z.infer<typeof ClusterStatsSortType>

export const ClusterStatsExtendedSectionSearchUsage = z.object({
  sort: z.record(ClusterStatsSortType, z.lazy(() => long)).optional()
}).meta({ id: 'ClusterStatsExtendedSectionSearchUsage' })
export type ClusterStatsExtendedSectionSearchUsage = z.infer<typeof ClusterStatsExtendedSectionSearchUsage>

export const ClusterStatsExtendedSearchUsage = z.object({
  retrievers: ClusterStatsExtendedRetrieversSearchUsage.optional(),
  section: ClusterStatsExtendedSectionSearchUsage.optional()
}).meta({ id: 'ClusterStatsExtendedSearchUsage' })
export type ClusterStatsExtendedSearchUsage = z.infer<typeof ClusterStatsExtendedSearchUsage>

export const ClusterStatsSearchUsageStats = z.object({
  total: z.lazy(() => long),
  queries: z.record(z.lazy(() => Name), z.lazy(() => long)),
  rescorers: z.record(z.lazy(() => Name), z.lazy(() => long)),
  sections: z.record(z.lazy(() => Name), z.lazy(() => long)),
  retrievers: z.record(z.lazy(() => Name), z.lazy(() => long)),
  extended: ClusterStatsExtendedSearchUsage
}).meta({ id: 'ClusterStatsSearchUsageStats' })
export type ClusterStatsSearchUsageStats = z.infer<typeof ClusterStatsSearchUsageStats>

export const ClusterStatsClusterShardMetrics = z.object({
  avg: z.lazy(() => double).describe('Mean number of shards in an index, counting only shards assigned to selected nodes.'),
  max: z.lazy(() => double).describe('Maximum number of shards in an index, counting only shards assigned to selected nodes.'),
  min: z.lazy(() => double).describe('Minimum number of shards in an index, counting only shards assigned to selected nodes.')
}).meta({ id: 'ClusterStatsClusterShardMetrics' })
export type ClusterStatsClusterShardMetrics = z.infer<typeof ClusterStatsClusterShardMetrics>

export const ClusterStatsClusterIndicesShardsIndex = z.object({
  primaries: ClusterStatsClusterShardMetrics.describe('Contains statistics about the number of primary shards assigned to selected nodes.'),
  replication: ClusterStatsClusterShardMetrics.describe('Contains statistics about the number of replication shards assigned to selected nodes.'),
  shards: ClusterStatsClusterShardMetrics.describe('Contains statistics about the number of shards assigned to selected nodes.')
}).meta({ id: 'ClusterStatsClusterIndicesShardsIndex' })
export type ClusterStatsClusterIndicesShardsIndex = z.infer<typeof ClusterStatsClusterIndicesShardsIndex>

/** Contains statistics about shards assigned to selected nodes. */
export const ClusterStatsClusterIndicesShards = z.object({
  index: ClusterStatsClusterIndicesShardsIndex.describe('Contains statistics about shards assigned to selected nodes.').optional(),
  primaries: z.lazy(() => double).describe('Number of primary shards assigned to selected nodes.').optional(),
  replication: z.lazy(() => double).describe('Ratio of replica shards to primary shards across all selected nodes.').optional(),
  total: z.lazy(() => double).describe('Total number of shards assigned to selected nodes.').optional()
}).meta({ id: 'ClusterStatsClusterIndicesShards' })
export type ClusterStatsClusterIndicesShards = z.infer<typeof ClusterStatsClusterIndicesShards>

export const ClusterStatsRuntimeFieldTypes = z.object({
  chars_max: z.lazy(() => integer).describe('Maximum number of characters for a single runtime field script.'),
  chars_total: z.lazy(() => integer).describe('Total number of characters for the scripts that define the current runtime field data type.'),
  count: z.lazy(() => integer).describe('Number of runtime fields mapped to the field data type in selected nodes.'),
  doc_max: z.lazy(() => integer).describe('Maximum number of accesses to doc_values for a single runtime field script'),
  doc_total: z.lazy(() => integer).describe('Total number of accesses to doc_values for the scripts that define the current runtime field data type.'),
  index_count: z.lazy(() => integer).describe('Number of indices containing a mapping of the runtime field data type in selected nodes.'),
  lang: z.array(z.string()).describe('Script languages used for the runtime fields scripts.'),
  lines_max: z.lazy(() => integer).describe('Maximum number of lines for a single runtime field script.'),
  lines_total: z.lazy(() => integer).describe('Total number of lines for the scripts that define the current runtime field data type.'),
  name: z.lazy(() => Name).describe('Field data type used in selected nodes.'),
  scriptless_count: z.lazy(() => integer).describe('Number of runtime fields that don’t declare a script.'),
  shadowed_count: z.lazy(() => integer).describe('Number of runtime fields that shadow an indexed field.'),
  source_max: z.lazy(() => integer).describe('Maximum number of accesses to _source for a single runtime field script.'),
  source_total: z.lazy(() => integer).describe('Total number of accesses to _source for the scripts that define the current runtime field data type.')
}).meta({ id: 'ClusterStatsRuntimeFieldTypes' })
export type ClusterStatsRuntimeFieldTypes = z.infer<typeof ClusterStatsRuntimeFieldTypes>

export const ClusterStatsFieldTypesMappings = z.object({
  field_types: z.array(ClusterStatsFieldTypes).describe('Contains statistics about field data types used in selected nodes.'),
  runtime_field_types: z.array(ClusterStatsRuntimeFieldTypes).describe('Contains statistics about runtime field data types used in selected nodes.'),
  total_field_count: z.lazy(() => long).describe('Total number of fields in all non-system indices.').optional(),
  total_deduplicated_field_count: z.lazy(() => long).describe('Total number of fields in all non-system indices, accounting for mapping deduplication.').optional(),
  total_deduplicated_mapping_size: z.lazy(() => ByteSize).describe('Total size of all mappings after deduplication and compression.').optional(),
  total_deduplicated_mapping_size_in_bytes: z.lazy(() => long).describe('Total size of all mappings, in bytes, after deduplication and compression.').optional(),
  source_modes: z.record(z.lazy(() => Name), z.lazy(() => integer)).describe('Source mode usage count.')
}).meta({ id: 'ClusterStatsFieldTypesMappings' })
export type ClusterStatsFieldTypesMappings = z.infer<typeof ClusterStatsFieldTypesMappings>

export const ClusterStatsIndicesVersions = z.object({
  index_count: z.lazy(() => integer),
  primary_shard_count: z.lazy(() => integer),
  total_primary_bytes: z.lazy(() => long),
  total_primary_size: z.lazy(() => ByteSize).optional(),
  version: z.lazy(() => VersionString)
}).meta({ id: 'ClusterStatsIndicesVersions' })
export type ClusterStatsIndicesVersions = z.infer<typeof ClusterStatsIndicesVersions>

export const ClusterStatsDenseVectorOffHeapStats = z.object({
  total_size_bytes: z.lazy(() => long),
  total_size: z.lazy(() => ByteSize).optional(),
  total_veb_size_bytes: z.lazy(() => long),
  total_veb_size: z.lazy(() => ByteSize).optional(),
  total_vec_size_bytes: z.lazy(() => long),
  total_vec_size: z.lazy(() => ByteSize).optional(),
  total_veq_size_bytes: z.lazy(() => long),
  total_veq_size: z.lazy(() => ByteSize).optional(),
  total_vex_size_bytes: z.lazy(() => long),
  total_vex_size: z.lazy(() => ByteSize).optional(),
  total_cenivf_size_bytes: z.lazy(() => long),
  total_cenivf_size: z.lazy(() => ByteSize).optional(),
  total_clivf_size_bytes: z.lazy(() => long),
  total_clivf_size: z.lazy(() => ByteSize).optional(),
  fielddata: z.record(z.string(), z.record(z.string(), z.lazy(() => long))).optional()
}).meta({ id: 'ClusterStatsDenseVectorOffHeapStats' })
export type ClusterStatsDenseVectorOffHeapStats = z.infer<typeof ClusterStatsDenseVectorOffHeapStats>

export const ClusterStatsDenseVectorStats = z.object({
  value_count: z.lazy(() => long),
  off_heap: ClusterStatsDenseVectorOffHeapStats.optional()
}).meta({ id: 'ClusterStatsDenseVectorStats' })
export type ClusterStatsDenseVectorStats = z.infer<typeof ClusterStatsDenseVectorStats>

export const ClusterStatsSparseVectorStats = z.object({
  value_count: z.lazy(() => long)
}).meta({ id: 'ClusterStatsSparseVectorStats' })
export type ClusterStatsSparseVectorStats = z.infer<typeof ClusterStatsSparseVectorStats>

export const ClusterStatsClusterIndices = z.object({
  analysis: ClusterStatsCharFilterTypes.describe('Contains statistics about analyzers and analyzer components used in selected nodes.').optional(),
  completion: z.lazy(() => CompletionStats).describe('Contains statistics about memory used for completion in selected nodes.'),
  count: z.lazy(() => long).describe('Total number of indices with shards assigned to selected nodes.'),
  docs: z.lazy(() => DocStats).describe('Contains counts for documents in selected nodes.'),
  fielddata: z.lazy(() => FielddataStats).describe('Contains statistics about the field data cache of selected nodes.'),
  query_cache: z.lazy(() => QueryCacheStats).describe('Contains statistics about the query cache of selected nodes.'),
  search: ClusterStatsSearchUsageStats.describe('Holds a snapshot of the search usage statistics. Used to hold the stats for a single node that\'s part of a ClusterStatsNodeResponse, as well as to accumulate stats for the entire cluster and return them as part of the ClusterStatsResponse.'),
  segments: z.lazy(() => SegmentsStats).describe('Contains statistics about segments in selected nodes.'),
  shards: ClusterStatsClusterIndicesShards.describe('Contains statistics about indices with shards assigned to selected nodes.'),
  store: z.lazy(() => StoreStats).describe('Contains statistics about the size of shards assigned to selected nodes.'),
  mappings: ClusterStatsFieldTypesMappings.describe('Contains statistics about field mappings in selected nodes.').optional(),
  versions: z.array(ClusterStatsIndicesVersions).describe('Contains statistics about analyzers and analyzer components used in selected nodes.').optional(),
  dense_vector: z.lazy(() => ClusterStatsDenseVectorStats).describe('Contains statistics about indexed dense vector'),
  sparse_vector: z.lazy(() => ClusterStatsSparseVectorStats).describe('Contains statistics about indexed sparse vector')
}).meta({ id: 'ClusterStatsClusterIndices' })
export type ClusterStatsClusterIndices = z.infer<typeof ClusterStatsClusterIndices>

export const ClusterStatsClusterProcessor = z.object({
  count: z.lazy(() => long),
  current: z.lazy(() => long),
  failed: z.lazy(() => long),
  time: z.lazy(() => Duration).optional(),
  time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'ClusterStatsClusterProcessor' })
export type ClusterStatsClusterProcessor = z.infer<typeof ClusterStatsClusterProcessor>

export const ClusterStatsClusterIngest = z.object({
  number_of_pipelines: z.lazy(() => integer),
  processor_stats: z.record(z.string(), ClusterStatsClusterProcessor)
}).meta({ id: 'ClusterStatsClusterIngest' })
export type ClusterStatsClusterIngest = z.infer<typeof ClusterStatsClusterIngest>

export const ClusterStatsClusterJvmMemory = z.object({
  heap_max_in_bytes: z.lazy(() => long).describe('Maximum amount of memory, in bytes, available for use by the heap across all selected nodes.'),
  heap_max: z.lazy(() => ByteSize).describe('Maximum amount of memory available for use by the heap across all selected nodes.').optional(),
  heap_used_in_bytes: z.lazy(() => long).describe('Memory, in bytes, currently in use by the heap across all selected nodes.'),
  heap_used: z.lazy(() => ByteSize).describe('Memory currently in use by the heap across all selected nodes.').optional()
}).meta({ id: 'ClusterStatsClusterJvmMemory' })
export type ClusterStatsClusterJvmMemory = z.infer<typeof ClusterStatsClusterJvmMemory>

export const ClusterStatsClusterJvmVersion = z.object({
  bundled_jdk: z.boolean().describe('Always `true`. All distributions come with a bundled Java Development Kit (JDK).'),
  count: z.lazy(() => integer).describe('Total number of selected nodes using JVM.'),
  using_bundled_jdk: z.boolean().describe('If `true`, a bundled JDK is in use by JVM.'),
  version: z.lazy(() => VersionString).describe('Version of JVM used by one or more selected nodes.'),
  vm_name: z.string().describe('Name of the JVM.'),
  vm_vendor: z.string().describe('Vendor of the JVM.'),
  vm_version: z.lazy(() => VersionString).describe('Full version number of JVM. The full version number includes a plus sign (+) followed by the build number.')
}).meta({ id: 'ClusterStatsClusterJvmVersion' })
export type ClusterStatsClusterJvmVersion = z.infer<typeof ClusterStatsClusterJvmVersion>

export const ClusterStatsClusterJvm = z.object({
  max_uptime_in_millis: z.lazy(() => DurationValue).describe('Uptime duration, in milliseconds, since JVM last started.'),
  max_uptime: z.lazy(() => Duration).describe('Uptime duration since JVM last started.').optional(),
  mem: ClusterStatsClusterJvmMemory.describe('Contains statistics about memory used by selected nodes.'),
  threads: z.lazy(() => long).describe('Number of active threads in use by JVM across all selected nodes.'),
  versions: z.array(ClusterStatsClusterJvmVersion).describe('Contains statistics about the JVM versions used by selected nodes.')
}).meta({ id: 'ClusterStatsClusterJvm' })
export type ClusterStatsClusterJvm = z.infer<typeof ClusterStatsClusterJvm>

export const ClusterStatsClusterNetworkTypes = z.object({
  http_types: z.record(z.string(), z.lazy(() => integer)).describe('Contains statistics about the HTTP network types used by selected nodes.'),
  transport_types: z.record(z.string(), z.lazy(() => integer)).describe('Contains statistics about the transport network types used by selected nodes.')
}).meta({ id: 'ClusterStatsClusterNetworkTypes' })
export type ClusterStatsClusterNetworkTypes = z.infer<typeof ClusterStatsClusterNetworkTypes>

export const ClusterStatsClusterNodeCount = z.object({
  total: z.lazy(() => integer),
  coordinating_only: z.lazy(() => integer).optional(),
  data: z.lazy(() => integer).optional(),
  data_cold: z.lazy(() => integer).optional(),
  data_content: z.lazy(() => integer).optional(),
  data_frozen: z.lazy(() => integer).optional(),
  data_hot: z.lazy(() => integer).optional(),
  data_warm: z.lazy(() => integer).optional(),
  index: z.lazy(() => integer).optional(),
  ingest: z.lazy(() => integer).optional(),
  master: z.lazy(() => integer).optional(),
  ml: z.lazy(() => integer).optional(),
  remote_cluster_client: z.lazy(() => integer).optional(),
  search: z.lazy(() => integer).optional(),
  transform: z.lazy(() => integer).optional(),
  voting_only: z.lazy(() => integer).optional()
}).meta({ id: 'ClusterStatsClusterNodeCount' })
export type ClusterStatsClusterNodeCount = z.infer<typeof ClusterStatsClusterNodeCount>

export const NodesPressureMemory = z.object({
  all: z.lazy(() => ByteSize).describe('Memory consumed by indexing requests in the coordinating, primary, or replica stage.').optional(),
  all_in_bytes: z.lazy(() => long).describe('Memory consumed, in bytes, by indexing requests in the coordinating, primary, or replica stage.').optional(),
  combined_coordinating_and_primary: z.lazy(() => ByteSize).describe('Memory consumed by indexing requests in the coordinating or primary stage. This value is not the sum of coordinating and primary as a node can reuse the coordinating memory if the primary stage is executed locally.').optional(),
  combined_coordinating_and_primary_in_bytes: z.lazy(() => long).describe('Memory consumed, in bytes, by indexing requests in the coordinating or primary stage. This value is not the sum of coordinating and primary as a node can reuse the coordinating memory if the primary stage is executed locally.').optional(),
  coordinating: z.lazy(() => ByteSize).describe('Memory consumed by indexing requests in the coordinating stage.').optional(),
  coordinating_in_bytes: z.lazy(() => long).describe('Memory consumed, in bytes, by indexing requests in the coordinating stage.').optional(),
  primary: z.lazy(() => ByteSize).describe('Memory consumed by indexing requests in the primary stage.').optional(),
  primary_in_bytes: z.lazy(() => long).describe('Memory consumed, in bytes, by indexing requests in the primary stage.').optional(),
  replica: z.lazy(() => ByteSize).describe('Memory consumed by indexing requests in the replica stage.').optional(),
  replica_in_bytes: z.lazy(() => long).describe('Memory consumed, in bytes, by indexing requests in the replica stage.').optional(),
  coordinating_rejections: z.lazy(() => long).describe('Number of indexing requests rejected in the coordinating stage.').optional(),
  primary_rejections: z.lazy(() => long).describe('Number of indexing requests rejected in the primary stage.').optional(),
  replica_rejections: z.lazy(() => long).describe('Number of indexing requests rejected in the replica stage.').optional(),
  primary_document_rejections: z.lazy(() => long).optional(),
  large_operation_rejections: z.lazy(() => long).optional()
}).meta({ id: 'NodesPressureMemory' })
export type NodesPressureMemory = z.infer<typeof NodesPressureMemory>

export const NodesIndexingPressureMemory = z.object({
  limit: z.lazy(() => ByteSize).describe('Configured memory limit for the indexing requests. Replica requests have an automatic limit that is 1.5x this value.').optional(),
  limit_in_bytes: z.lazy(() => long).describe('Configured memory limit, in bytes, for the indexing requests. Replica requests have an automatic limit that is 1.5x this value.').optional(),
  current: NodesPressureMemory.describe('Contains statistics for current indexing load.').optional(),
  total: NodesPressureMemory.describe('Contains statistics for the cumulative indexing load since the node started.').optional()
}).meta({ id: 'NodesIndexingPressureMemory' })
export type NodesIndexingPressureMemory = z.infer<typeof NodesIndexingPressureMemory>

export const ClusterStatsIndexingPressure = z.object({
  memory: NodesIndexingPressureMemory
}).meta({ id: 'ClusterStatsIndexingPressure' })
export type ClusterStatsIndexingPressure = z.infer<typeof ClusterStatsIndexingPressure>

export const ClusterStatsClusterOperatingSystemArchitecture = z.object({
  arch: z.string().describe('Name of an architecture used by one or more selected nodes.'),
  count: z.lazy(() => integer).describe('Number of selected nodes using the architecture.')
}).meta({ id: 'ClusterStatsClusterOperatingSystemArchitecture' })
export type ClusterStatsClusterOperatingSystemArchitecture = z.infer<typeof ClusterStatsClusterOperatingSystemArchitecture>

export const ClusterStatsOperatingSystemMemoryInfo = z.object({
  adjusted_total_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of memory across all selected nodes, but using the value specified using the `es.total_memory_bytes` system property instead of measured total memory for those nodes where that system property was set.').optional(),
  adjusted_total: z.lazy(() => ByteSize).describe('Total amount of memory across all selected nodes, but using the value specified using the `es.total_memory_bytes` system property instead of measured total memory for those nodes where that system property was set.').optional(),
  free_in_bytes: z.lazy(() => long).describe('Amount, in bytes, of free physical memory across all selected nodes.'),
  free: z.lazy(() => ByteSize).describe('Amount of free physical memory across all selected nodes.').optional(),
  free_percent: z.lazy(() => integer).describe('Percentage of free physical memory across all selected nodes.'),
  total_in_bytes: z.lazy(() => long).describe('Total amount, in bytes, of physical memory across all selected nodes.'),
  total: z.lazy(() => ByteSize).describe('Total amount of physical memory across all selected nodes.').optional(),
  used_in_bytes: z.lazy(() => long).describe('Amount, in bytes, of physical memory in use across all selected nodes.'),
  used: z.lazy(() => ByteSize).describe('Amount of physical memory in use across all selected nodes.').optional(),
  used_percent: z.lazy(() => integer).describe('Percentage of physical memory in use across all selected nodes.')
}).meta({ id: 'ClusterStatsOperatingSystemMemoryInfo' })
export type ClusterStatsOperatingSystemMemoryInfo = z.infer<typeof ClusterStatsOperatingSystemMemoryInfo>

export const ClusterStatsClusterOperatingSystemName = z.object({
  count: z.lazy(() => integer).describe('Number of selected nodes using the operating system.'),
  name: z.lazy(() => Name).describe('Name of an operating system used by one or more selected nodes.')
}).meta({ id: 'ClusterStatsClusterOperatingSystemName' })
export type ClusterStatsClusterOperatingSystemName = z.infer<typeof ClusterStatsClusterOperatingSystemName>

export const ClusterStatsClusterOperatingSystemPrettyName = z.object({
  count: z.lazy(() => integer).describe('Number of selected nodes using the operating system.'),
  pretty_name: z.lazy(() => Name).describe('Human-readable name of an operating system used by one or more selected nodes.')
}).meta({ id: 'ClusterStatsClusterOperatingSystemPrettyName' })
export type ClusterStatsClusterOperatingSystemPrettyName = z.infer<typeof ClusterStatsClusterOperatingSystemPrettyName>

export const ClusterStatsClusterOperatingSystem = z.object({
  allocated_processors: z.lazy(() => integer).describe('Number of processors used to calculate thread pool size across all selected nodes. This number can be set with the processors setting of a node and defaults to the number of processors reported by the operating system. In both cases, this number will never be larger than 32.'),
  architectures: z.array(ClusterStatsClusterOperatingSystemArchitecture).describe('Contains statistics about processor architectures (for example, x86_64 or aarch64) used by selected nodes.').optional(),
  available_processors: z.lazy(() => integer).describe('Number of processors available to JVM across all selected nodes.'),
  mem: ClusterStatsOperatingSystemMemoryInfo.describe('Contains statistics about memory used by selected nodes.'),
  names: z.array(ClusterStatsClusterOperatingSystemName).describe('Contains statistics about operating systems used by selected nodes.'),
  pretty_names: z.array(ClusterStatsClusterOperatingSystemPrettyName).describe('Contains statistics about operating systems used by selected nodes.')
}).meta({ id: 'ClusterStatsClusterOperatingSystem' })
export type ClusterStatsClusterOperatingSystem = z.infer<typeof ClusterStatsClusterOperatingSystem>

export const ClusterStatsNodePackagingType = z.object({
  count: z.lazy(() => integer).describe('Number of selected nodes using the distribution flavor and file type.'),
  flavor: z.string().describe('Type of Elasticsearch distribution. This is always `default`.'),
  type: z.string().describe('File type (such as `tar` or `zip`) used for the distribution package.')
}).meta({ id: 'ClusterStatsNodePackagingType' })
export type ClusterStatsNodePackagingType = z.infer<typeof ClusterStatsNodePackagingType>

export const ClusterStatsClusterProcessCpu = z.object({
  percent: z.lazy(() => integer).describe('Percentage of CPU used across all selected nodes. Returns `-1` if not supported.')
}).meta({ id: 'ClusterStatsClusterProcessCpu' })
export type ClusterStatsClusterProcessCpu = z.infer<typeof ClusterStatsClusterProcessCpu>

export const ClusterStatsClusterProcessOpenFileDescriptors = z.object({
  avg: z.lazy(() => long).describe('Average number of concurrently open file descriptors. Returns `-1` if not supported.'),
  max: z.lazy(() => long).describe('Maximum number of concurrently open file descriptors allowed across all selected nodes. Returns `-1` if not supported.'),
  min: z.lazy(() => long).describe('Minimum number of concurrently open file descriptors across all selected nodes. Returns -1 if not supported.')
}).meta({ id: 'ClusterStatsClusterProcessOpenFileDescriptors' })
export type ClusterStatsClusterProcessOpenFileDescriptors = z.infer<typeof ClusterStatsClusterProcessOpenFileDescriptors>

export const ClusterStatsClusterProcess = z.object({
  cpu: ClusterStatsClusterProcessCpu.describe('Contains statistics about CPU used by selected nodes.'),
  open_file_descriptors: ClusterStatsClusterProcessOpenFileDescriptors.describe('Contains statistics about open file descriptors in selected nodes.')
}).meta({ id: 'ClusterStatsClusterProcess' })
export type ClusterStatsClusterProcess = z.infer<typeof ClusterStatsClusterProcess>

export const ClusterStatsClusterNodes = z.object({
  count: ClusterStatsClusterNodeCount.describe('Contains counts for nodes selected by the request’s node filters.'),
  discovery_types: z.record(z.string(), z.lazy(() => integer)).describe('Contains statistics about the discovery types used by selected nodes.'),
  fs: ClusterStatsClusterFileSystem.describe('Contains statistics about file stores by selected nodes.'),
  indexing_pressure: ClusterStatsIndexingPressure,
  ingest: ClusterStatsClusterIngest,
  jvm: ClusterStatsClusterJvm.describe('Contains statistics about the Java Virtual Machines (JVMs) used by selected nodes.'),
  network_types: ClusterStatsClusterNetworkTypes.describe('Contains statistics about the transport and HTTP networks used by selected nodes.'),
  os: ClusterStatsClusterOperatingSystem.describe('Contains statistics about the operating systems used by selected nodes.'),
  packaging_types: z.array(ClusterStatsNodePackagingType).describe('Contains statistics about Elasticsearch distributions installed on selected nodes.'),
  plugins: z.array(z.lazy(() => PluginStats)).describe('Contains statistics about installed plugins and modules by selected nodes. If no plugins or modules are installed, this array is empty.'),
  process: ClusterStatsClusterProcess.describe('Contains statistics about processes used by selected nodes.'),
  versions: z.array(z.lazy(() => VersionString)).describe('Array of Elasticsearch versions used on selected nodes.')
}).meta({ id: 'ClusterStatsClusterNodes' })
export type ClusterStatsClusterNodes = z.infer<typeof ClusterStatsClusterNodes>

export const ClusterStatsSnapshotCurrentCounts = z.object({
  snapshots: z.lazy(() => integer).describe('Snapshots currently in progress'),
  shard_snapshots: z.lazy(() => integer).describe('Incomplete shard snapshots'),
  snapshot_deletions: z.lazy(() => integer).describe('Snapshots deletions in progress'),
  concurrent_operations: z.lazy(() => integer).describe('Sum of snapshots and snapshot_deletions'),
  cleanups: z.lazy(() => integer).describe('Cleanups in progress, not counted in concurrent_operations as they are not concurrent')
}).meta({ id: 'ClusterStatsSnapshotCurrentCounts' })
export type ClusterStatsSnapshotCurrentCounts = z.infer<typeof ClusterStatsSnapshotCurrentCounts>

export const ClusterStatsShardState = z.enum(['INIT', 'SUCCESS', 'FAILED', 'ABORTED', 'MISSING', 'WAITING', 'QUEUED', 'PAUSED_FOR_NODE_REMOVAL']).meta({ id: 'ClusterStatsShardState' })
export type ClusterStatsShardState = z.infer<typeof ClusterStatsShardState>

export const ClusterStatsRepositoryStatsShards = z.object({
  total: z.lazy(() => integer),
  complete: z.lazy(() => integer),
  incomplete: z.lazy(() => integer),
  states: z.record(ClusterStatsShardState, z.lazy(() => integer))
}).meta({ id: 'ClusterStatsRepositoryStatsShards' })
export type ClusterStatsRepositoryStatsShards = z.infer<typeof ClusterStatsRepositoryStatsShards>

export const ClusterStatsRepositoryStatsCurrentCounts = z.object({
  snapshots: z.lazy(() => integer),
  clones: z.lazy(() => integer),
  finalizations: z.lazy(() => integer),
  deletions: z.lazy(() => integer),
  snapshot_deletions: z.lazy(() => integer),
  active_deletions: z.lazy(() => integer),
  shards: ClusterStatsRepositoryStatsShards
}).meta({ id: 'ClusterStatsRepositoryStatsCurrentCounts' })
export type ClusterStatsRepositoryStatsCurrentCounts = z.infer<typeof ClusterStatsRepositoryStatsCurrentCounts>

export const ClusterStatsPerRepositoryStats = z.object({
  type: z.string(),
  oldest_start_time_millis: z.lazy(() => UnitMillis),
  oldest_start_time: z.lazy(() => DateFormat).optional(),
  current_counts: ClusterStatsRepositoryStatsCurrentCounts
}).meta({ id: 'ClusterStatsPerRepositoryStats' })
export type ClusterStatsPerRepositoryStats = z.infer<typeof ClusterStatsPerRepositoryStats>

export const ClusterStatsClusterSnapshotStats = z.object({
  current_counts: ClusterStatsSnapshotCurrentCounts,
  repositories: z.record(z.lazy(() => Name), ClusterStatsPerRepositoryStats)
}).meta({ id: 'ClusterStatsClusterSnapshotStats' })
export type ClusterStatsClusterSnapshotStats = z.infer<typeof ClusterStatsClusterSnapshotStats>

/**
 * Get cluster statistics.
 *
 * Get basic index metrics (shard numbers, store size, memory usage) and information about the current nodes that form the cluster (number, roles, os, jvm versions, memory usage, cpu and installed plugins).
 */
export const ClusterStatsRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('Comma-separated list of node filters used to limit returned information. Defaults to all nodes in the cluster.').optional().meta({ found_in: 'path' }),
  include_remotes: z.boolean().describe('Include remote cluster data into the response').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for each node to respond. If a node does not respond before its timeout expires, the response does not include its stats. However, timed out nodes are included in the response’s `_nodes.failed` property. Defaults to no timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterStatsRequest' })
export type ClusterStatsRequest = z.infer<typeof ClusterStatsRequest>

export const ClusterStatsStatsResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name).describe('Name of the cluster, based on the cluster name setting.'),
  cluster_uuid: z.lazy(() => Uuid).describe('Unique identifier for the cluster.'),
  indices: ClusterStatsClusterIndices.describe('Contains statistics about indices with shards assigned to selected nodes.'),
  nodes: ClusterStatsClusterNodes.describe('Contains statistics about nodes selected by the request’s node filters.'),
  repositories: z.record(z.lazy(() => Name), z.record(z.lazy(() => Name), z.lazy(() => long))).describe('Contains stats on repository feature usage exposed in cluster stats for telemetry.'),
  snapshots: ClusterStatsClusterSnapshotStats.describe('Contains stats cluster snapshots.'),
  status: z.lazy(() => HealthStatus).describe('Health status of the cluster, based on the state of its primary and replica shards.').optional(),
  timestamp: z.lazy(() => long).describe('Unix timestamp, in milliseconds, for the last time the cluster statistics were refreshed.'),
  ccs: ClusterStatsCCSStats.describe('Cross-cluster stats')
}).meta({ id: 'ClusterStatsStatsResponseBase' })
export type ClusterStatsStatsResponseBase = z.infer<typeof ClusterStatsStatsResponseBase>

export const ClusterStatsResponse = ClusterStatsStatsResponseBase.meta({ id: 'ClusterStatsResponse' })
export type ClusterStatsResponse = z.infer<typeof ClusterStatsResponse>
