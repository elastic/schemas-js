/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, CommonStatsFlags, CompletionStats, DocStats, Duration, DurationValue, ExpandWildcards, FielddataStats, Fields, HealthStatus, Id, IndexName, Indices, Level, QueryCacheStats, SegmentsStats, SequenceNumber, ShardStatistics, StoreStats, Uuid, VersionNumber, double, integer, long } from './_types.js'
import { ClusterStatsDenseVectorStats, ClusterStatsSparseVectorStats } from './cluster.stats.js'

export const IndicesStatsShardRoutingState = z.enum(['UNASSIGNED', 'INITIALIZING', 'STARTED', 'RELOCATING']).meta({ id: 'IndicesStatsShardRoutingState' })
export type IndicesStatsShardRoutingState = z.infer<typeof IndicesStatsShardRoutingState>

export const BulkStats = z.object({
  total_operations: z.lazy(() => long),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue),
  total_size: z.lazy(() => ByteSize).optional(),
  total_size_in_bytes: z.lazy(() => long),
  avg_time: z.lazy(() => Duration).optional(),
  avg_time_in_millis: z.lazy(() => DurationValue),
  avg_size: z.lazy(() => ByteSize).optional(),
  avg_size_in_bytes: z.lazy(() => long)
}).meta({ id: 'BulkStats' })
export type BulkStats = z.infer<typeof BulkStats>

export const FlushStats = z.object({
  periodic: z.lazy(() => long),
  total: z.lazy(() => long),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue),
  total_time_excluding_waiting: z.lazy(() => Duration).optional(),
  total_time_excluding_waiting_on_lock_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'FlushStats' })
export type FlushStats = z.infer<typeof FlushStats>

export const GetStats = z.object({
  current: z.lazy(() => long),
  exists_time: z.lazy(() => Duration).optional(),
  exists_time_in_millis: z.lazy(() => DurationValue),
  exists_total: z.lazy(() => long),
  missing_time: z.lazy(() => Duration).optional(),
  missing_time_in_millis: z.lazy(() => DurationValue),
  missing_total: z.lazy(() => long),
  getTime: z.lazy(() => Duration).optional(),
  time_in_millis: z.lazy(() => DurationValue),
  total: z.lazy(() => long)
}).meta({ id: 'GetStats' })
export type GetStats = z.infer<typeof GetStats>

export interface IndexingStatsShape {
  index_current: long
  delete_current: long
  delete_time?: Duration | undefined
  delete_time_in_millis: DurationValue
  delete_total: long
  is_throttled: boolean
  noop_update_total: long
  throttle_time?: Duration | undefined
  throttle_time_in_millis: DurationValue
  index_time?: Duration | undefined
  index_time_in_millis: DurationValue
  index_total: long
  index_failed: long
  index_failed_due_to_version_conflict: long
  types?: Record<string, IndexingStatsShape> | undefined
  write_load?: double | undefined
  recent_write_load?: double | undefined
  peak_write_load?: double | undefined
}
export const IndexingStats = z.object({
  index_current: z.lazy(() => long),
  delete_current: z.lazy(() => long),
  delete_time: z.lazy(() => Duration).optional(),
  delete_time_in_millis: z.lazy(() => DurationValue),
  delete_total: z.lazy(() => long),
  is_throttled: z.boolean(),
  noop_update_total: z.lazy(() => long),
  throttle_time: z.lazy(() => Duration).optional(),
  throttle_time_in_millis: z.lazy(() => DurationValue),
  index_time: z.lazy(() => Duration).optional(),
  index_time_in_millis: z.lazy(() => DurationValue),
  index_total: z.lazy(() => long),
  index_failed: z.lazy(() => long),
  index_failed_due_to_version_conflict: z.lazy(() => long),
  get types (): z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>> { return z.record(z.string(), IndexingStats).optional() },
  write_load: z.lazy(() => double).optional(),
  recent_write_load: z.lazy(() => double).optional(),
  peak_write_load: z.lazy(() => double).optional()
}).meta({ id: 'IndexingStats' })
export type IndexingStats = z.infer<typeof IndexingStats>

export const MergesStats = z.object({
  current: z.lazy(() => long),
  current_docs: z.lazy(() => long),
  current_size: z.string().optional(),
  current_size_in_bytes: z.lazy(() => long),
  total: z.lazy(() => long),
  total_auto_throttle: z.string().optional(),
  total_auto_throttle_in_bytes: z.lazy(() => long),
  total_docs: z.lazy(() => long),
  total_size: z.string().optional(),
  total_size_in_bytes: z.lazy(() => long),
  total_stopped_time: z.lazy(() => Duration).optional(),
  total_stopped_time_in_millis: z.lazy(() => DurationValue),
  total_throttled_time: z.lazy(() => Duration).optional(),
  total_throttled_time_in_millis: z.lazy(() => DurationValue),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'MergesStats' })
export type MergesStats = z.infer<typeof MergesStats>

export const RecoveryStats = z.object({
  current_as_source: z.lazy(() => long),
  current_as_target: z.lazy(() => long),
  throttle_time: z.lazy(() => Duration).optional(),
  throttle_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'RecoveryStats' })
export type RecoveryStats = z.infer<typeof RecoveryStats>

export const RefreshStats = z.object({
  external_total: z.lazy(() => long),
  external_total_time: z.lazy(() => Duration).optional(),
  external_total_time_in_millis: z.lazy(() => DurationValue),
  listeners: z.lazy(() => long),
  total: z.lazy(() => long),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'RefreshStats' })
export type RefreshStats = z.infer<typeof RefreshStats>

export const RequestCacheStats = z.object({
  evictions: z.lazy(() => long),
  hit_count: z.lazy(() => long),
  memory_size: z.string().optional(),
  memory_size_in_bytes: z.lazy(() => long),
  miss_count: z.lazy(() => long)
}).meta({ id: 'RequestCacheStats' })
export type RequestCacheStats = z.infer<typeof RequestCacheStats>

export interface SearchStatsShape {
  fetch_current: long
  fetch_time?: Duration | undefined
  fetch_time_in_millis: DurationValue
  fetch_total: long
  fetch_failure: long
  open_contexts?: long | undefined
  query_current: long
  query_time?: Duration | undefined
  query_time_in_millis: DurationValue
  query_total: long
  query_failure: long
  scroll_current: long
  scroll_time?: Duration | undefined
  scroll_time_in_millis: DurationValue
  scroll_total: long
  suggest_current: long
  suggest_time?: Duration | undefined
  suggest_time_in_millis: DurationValue
  suggest_total: long
  recent_search_load?: double | undefined
  groups?: Record<string, SearchStatsShape> | undefined
}
export const SearchStats = z.object({
  fetch_current: z.lazy(() => long),
  fetch_time: z.lazy(() => Duration).optional(),
  fetch_time_in_millis: z.lazy(() => DurationValue),
  fetch_total: z.lazy(() => long),
  fetch_failure: z.lazy(() => long),
  open_contexts: z.lazy(() => long).optional(),
  query_current: z.lazy(() => long),
  query_time: z.lazy(() => Duration).optional(),
  query_time_in_millis: z.lazy(() => DurationValue),
  query_total: z.lazy(() => long),
  query_failure: z.lazy(() => long),
  scroll_current: z.lazy(() => long),
  scroll_time: z.lazy(() => Duration).optional(),
  scroll_time_in_millis: z.lazy(() => DurationValue),
  scroll_total: z.lazy(() => long),
  suggest_current: z.lazy(() => long),
  suggest_time: z.lazy(() => Duration).optional(),
  suggest_time_in_millis: z.lazy(() => DurationValue),
  suggest_total: z.lazy(() => long),
  recent_search_load: z.lazy(() => double).optional(),
  get groups (): z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>> { return z.record(z.string(), SearchStats).optional() }
}).meta({ id: 'SearchStats' })
export type SearchStats = z.infer<typeof SearchStats>

export const IndicesStatsShardFileSizeInfo = z.object({
  description: z.string(),
  size_in_bytes: z.lazy(() => long),
  min_size_in_bytes: z.lazy(() => long).optional(),
  max_size_in_bytes: z.lazy(() => long).optional(),
  average_size_in_bytes: z.lazy(() => long).optional(),
  count: z.lazy(() => long).optional()
}).meta({ id: 'IndicesStatsShardFileSizeInfo' })
export type IndicesStatsShardFileSizeInfo = z.infer<typeof IndicesStatsShardFileSizeInfo>

export const TranslogStats = z.object({
  earliest_last_modified_age: z.lazy(() => long),
  operations: z.lazy(() => long),
  size: z.string().optional(),
  size_in_bytes: z.lazy(() => long),
  uncommitted_operations: z.lazy(() => integer),
  uncommitted_size: z.string().optional(),
  uncommitted_size_in_bytes: z.lazy(() => long)
}).meta({ id: 'TranslogStats' })
export type TranslogStats = z.infer<typeof TranslogStats>

export const WarmerStats = z.object({
  current: z.lazy(() => long),
  total: z.lazy(() => long),
  total_time: z.lazy(() => Duration).optional(),
  total_time_in_millis: z.lazy(() => DurationValue)
}).meta({ id: 'WarmerStats' })
export type WarmerStats = z.infer<typeof WarmerStats>

export const IndicesStatsShardRouting = z.object({
  node: z.string(),
  primary: z.boolean(),
  relocating_node: z.union([z.string(), z.null()]).optional(),
  state: IndicesStatsShardRoutingState
}).meta({ id: 'IndicesStatsShardRouting' })
export type IndicesStatsShardRouting = z.infer<typeof IndicesStatsShardRouting>

export const IndicesStatsIndexMetadataState = z.enum(['open', 'close']).meta({ id: 'IndicesStatsIndexMetadataState' })
export type IndicesStatsIndexMetadataState = z.infer<typeof IndicesStatsIndexMetadataState>

export const IndicesStatsShardCommit = z.object({
  generation: z.lazy(() => integer),
  id: z.lazy(() => Id),
  num_docs: z.lazy(() => long),
  user_data: z.record(z.string(), z.string())
}).meta({ id: 'IndicesStatsShardCommit' })
export type IndicesStatsShardCommit = z.infer<typeof IndicesStatsShardCommit>

export const IndicesStatsMappingStats = z.object({
  total_count: z.lazy(() => long),
  total_estimated_overhead: z.lazy(() => ByteSize).optional(),
  total_estimated_overhead_in_bytes: z.lazy(() => long),
  total_segments: z.lazy(() => long),
  total_segment_fields: z.lazy(() => long),
  average_fields_per_segment: z.lazy(() => long)
}).meta({ id: 'IndicesStatsMappingStats' })
export type IndicesStatsMappingStats = z.infer<typeof IndicesStatsMappingStats>

export const IndicesStatsShardPath = z.object({
  data_path: z.string(),
  is_custom_data_path: z.boolean(),
  state_path: z.string()
}).meta({ id: 'IndicesStatsShardPath' })
export type IndicesStatsShardPath = z.infer<typeof IndicesStatsShardPath>

export const IndicesStatsShardQueryCache = z.object({
  cache_count: z.lazy(() => long),
  cache_size: z.lazy(() => long),
  evictions: z.lazy(() => long),
  hit_count: z.lazy(() => long),
  memory_size: z.lazy(() => ByteSize).optional(),
  memory_size_in_bytes: z.lazy(() => long),
  miss_count: z.lazy(() => long),
  total_count: z.lazy(() => long)
}).meta({ id: 'IndicesStatsShardQueryCache' })
export type IndicesStatsShardQueryCache = z.infer<typeof IndicesStatsShardQueryCache>

export const IndicesStatsShardLease = z.object({
  id: z.lazy(() => Id),
  retaining_seq_no: z.lazy(() => SequenceNumber),
  timestamp: z.lazy(() => long),
  source: z.string()
}).meta({ id: 'IndicesStatsShardLease' })
export type IndicesStatsShardLease = z.infer<typeof IndicesStatsShardLease>

export const IndicesStatsShardRetentionLeases = z.object({
  primary_term: z.lazy(() => long),
  version: z.lazy(() => VersionNumber),
  leases: z.array(IndicesStatsShardLease)
}).meta({ id: 'IndicesStatsShardRetentionLeases' })
export type IndicesStatsShardRetentionLeases = z.infer<typeof IndicesStatsShardRetentionLeases>

export const IndicesStatsShardSequenceNumber = z.object({
  global_checkpoint: z.lazy(() => long),
  local_checkpoint: z.lazy(() => long),
  max_seq_no: z.lazy(() => SequenceNumber)
}).meta({ id: 'IndicesStatsShardSequenceNumber' })
export type IndicesStatsShardSequenceNumber = z.infer<typeof IndicesStatsShardSequenceNumber>

export const IndicesStatsShardsTotalStats = z.object({
  total_count: z.lazy(() => long)
}).meta({ id: 'IndicesStatsShardsTotalStats' })
export type IndicesStatsShardsTotalStats = z.infer<typeof IndicesStatsShardsTotalStats>

export interface IndicesStatsShardStatsShape {
  commit?: IndicesStatsShardCommit | undefined
  completion?: CompletionStats | undefined
  dense_vector?: ClusterStatsDenseVectorStats | undefined
  docs?: DocStats | undefined
  fielddata?: FielddataStats | undefined
  flush?: FlushStats | undefined
  get?: GetStats | undefined
  indexing?: IndexingStatsShape | undefined
  mappings?: IndicesStatsMappingStats | undefined
  merges?: MergesStats | undefined
  shard_path?: IndicesStatsShardPath | undefined
  query_cache?: IndicesStatsShardQueryCache | undefined
  recovery?: RecoveryStats | undefined
  refresh?: RefreshStats | undefined
  request_cache?: RequestCacheStats | undefined
  retention_leases?: IndicesStatsShardRetentionLeases | undefined
  routing?: IndicesStatsShardRouting | undefined
  search?: SearchStatsShape | undefined
  segments?: SegmentsStats | undefined
  seq_no?: IndicesStatsShardSequenceNumber | undefined
  sparse_vector?: ClusterStatsSparseVectorStats | undefined
  store?: StoreStats | undefined
  translog?: TranslogStats | undefined
  warmer?: WarmerStats | undefined
  bulk?: BulkStats | undefined
  shards?: Record<IndexName, unknown> | undefined
  shard_stats?: IndicesStatsShardsTotalStats | undefined
  indices?: Record<IndexName, IndicesStatsShardStatsShape> | undefined
}
export const IndicesStatsShardStats = z.object({
  commit: IndicesStatsShardCommit.optional(),
  completion: z.lazy(() => CompletionStats).optional(),
  dense_vector: z.lazy(() => ClusterStatsDenseVectorStats).optional(),
  docs: z.lazy(() => DocStats).optional(),
  fielddata: z.lazy(() => FielddataStats).optional(),
  flush: FlushStats.optional(),
  get: GetStats.optional(),
  get indexing () { return IndexingStats.optional() },
  mappings: IndicesStatsMappingStats.optional(),
  merges: MergesStats.optional(),
  shard_path: IndicesStatsShardPath.optional(),
  query_cache: IndicesStatsShardQueryCache.optional(),
  recovery: RecoveryStats.optional(),
  refresh: RefreshStats.optional(),
  request_cache: RequestCacheStats.optional(),
  retention_leases: IndicesStatsShardRetentionLeases.optional(),
  routing: IndicesStatsShardRouting.optional(),
  get search () { return SearchStats.optional() },
  segments: z.lazy(() => SegmentsStats).optional(),
  seq_no: IndicesStatsShardSequenceNumber.optional(),
  sparse_vector: z.lazy(() => ClusterStatsSparseVectorStats).optional(),
  store: z.lazy(() => StoreStats).optional(),
  translog: TranslogStats.optional(),
  warmer: WarmerStats.optional(),
  bulk: BulkStats.optional(),
  shards: z.record(z.lazy(() => IndexName), z.any()).optional(),
  shard_stats: IndicesStatsShardsTotalStats.optional(),
  get indices (): z.ZodOptional<z.ZodRecord<typeof IndexName, typeof IndicesStatsShardStats>> { return z.record(IndexName, IndicesStatsShardStats).optional() }
}).meta({ id: 'IndicesStatsShardStats' })
export type IndicesStatsShardStats = z.infer<typeof IndicesStatsShardStats>

export interface IndicesStatsIndicesStatsShape {
  primaries?: IndicesStatsIndexStatsShape | undefined
  shards?: Record<string, IndicesStatsShardStatsShape[]> | undefined
  total?: IndicesStatsIndexStatsShape | undefined
  uuid?: Uuid | undefined
  health?: HealthStatus | undefined
  status?: IndicesStatsIndexMetadataState | undefined
}
export const IndicesStatsIndicesStats = z.object({
  get primaries () { return IndicesStatsIndexStats.optional() },
  get shards (): z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<typeof IndicesStatsShardStats>>> { return z.record(z.string(), IndicesStatsShardStats.array()).optional() },
  get total () { return IndicesStatsIndexStats.optional() },
  uuid: z.lazy(() => Uuid).optional(),
  health: z.lazy(() => HealthStatus).optional(),
  status: IndicesStatsIndexMetadataState.optional()
}).meta({ id: 'IndicesStatsIndicesStats' })
export type IndicesStatsIndicesStats = z.infer<typeof IndicesStatsIndicesStats>

export interface IndicesStatsIndexStatsShape {
  completion?: CompletionStats | undefined
  docs?: DocStats | undefined
  fielddata?: FielddataStats | undefined
  flush?: FlushStats | undefined
  get?: GetStats | undefined
  indexing?: IndexingStatsShape | undefined
  indices?: IndicesStatsIndicesStatsShape | undefined
  merges?: MergesStats | undefined
  query_cache?: QueryCacheStats | undefined
  recovery?: RecoveryStats | undefined
  refresh?: RefreshStats | undefined
  request_cache?: RequestCacheStats | undefined
  search?: SearchStatsShape | undefined
  segments?: SegmentsStats | undefined
  store?: StoreStats | undefined
  translog?: TranslogStats | undefined
  warmer?: WarmerStats | undefined
  bulk?: BulkStats | undefined
  shard_stats?: IndicesStatsShardsTotalStats | undefined
}
export const IndicesStatsIndexStats = z.object({
  completion: z.lazy(() => CompletionStats).describe('Contains statistics about completions across all shards assigned to the node.').optional(),
  docs: z.lazy(() => DocStats).describe('Contains statistics about documents across all primary shards assigned to the node.').optional(),
  fielddata: z.lazy(() => FielddataStats).describe('Contains statistics about the field data cache across all shards assigned to the node.').optional(),
  flush: FlushStats.describe('Contains statistics about flush operations for the node.').optional(),
  get: GetStats.describe('Contains statistics about get operations for the node.').optional(),
  get indexing () { return IndexingStats.describe('Contains statistics about indexing operations for the node.').optional() },
  get indices () { return IndicesStatsIndicesStats.describe('Contains statistics about indices operations for the node.').optional() },
  merges: MergesStats.describe('Contains statistics about merge operations for the node.').optional(),
  query_cache: z.lazy(() => QueryCacheStats).describe('Contains statistics about the query cache across all shards assigned to the node.').optional(),
  recovery: RecoveryStats.describe('Contains statistics about recovery operations for the node.').optional(),
  refresh: RefreshStats.describe('Contains statistics about refresh operations for the node.').optional(),
  request_cache: RequestCacheStats.describe('Contains statistics about the request cache across all shards assigned to the node.').optional(),
  get search () { return SearchStats.describe('Contains statistics about search operations for the node.').optional() },
  segments: z.lazy(() => SegmentsStats).describe('Contains statistics about segments across all shards assigned to the node.').optional(),
  store: z.lazy(() => StoreStats).describe('Contains statistics about the size of shards assigned to the node.').optional(),
  translog: TranslogStats.describe('Contains statistics about transaction log operations for the node.').optional(),
  warmer: WarmerStats.describe('Contains statistics about index warming operations for the node.').optional(),
  bulk: BulkStats.optional(),
  shard_stats: IndicesStatsShardsTotalStats.optional()
}).meta({ id: 'IndicesStatsIndexStats' })
export type IndicesStatsIndexStats = z.infer<typeof IndicesStatsIndexStats>

/**
 * Get index statistics.
 *
 * For data streams, the API retrieves statistics for the stream's backing indices.
 *
 * By default, the returned statistics are index-level with `primaries` and `total` aggregations.
 * `primaries` are the values for only the primary shards.
 * `total` are the accumulated values for both primary and replica shards.
 *
 * To get shard-level statistics, set the `level` parameter to `shards`.
 *
 * NOTE: When moving to another node, the shard-level statistics for a shard are cleared.
 * Although the shard is no longer part of the node, that node retains any node-level statistics to which the shard contributed.
 */
export const IndicesStatsRequest = z.object({
  metric: z.lazy(() => CommonStatsFlags).describe('Comma-separated list of metrics used to limit the request.').optional().meta({ found_in: 'path' }),
  index: z.lazy(() => Indices).describe('A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices').optional().meta({ found_in: 'path' }),
  completion_fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  fielddata_fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in fielddata statistics.').optional().meta({ found_in: 'query' }),
  fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in the statistics.').optional().meta({ found_in: 'query' }),
  forbid_closed_indices: z.boolean().describe('If true, statistics are not collected from closed indices.').optional().meta({ found_in: 'query' }),
  groups: z.union([z.string(), z.array(z.string())]).describe('Comma-separated list of search groups to include in the search statistics.').optional().meta({ found_in: 'query' }),
  include_segment_file_sizes: z.boolean().describe('If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested).').optional().meta({ found_in: 'query' }),
  include_unloaded_segments: z.boolean().describe('If true, the response includes information from segments that are not loaded into memory.').optional().meta({ found_in: 'query' }),
  level: z.lazy(() => Level).describe('Indicates whether statistics are aggregated at the cluster, indices, or shards level.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesStatsRequest' })
export type IndicesStatsRequest = z.infer<typeof IndicesStatsRequest>

export const IndicesStatsResponse = z.object({
  indices: z.record(z.string(), z.lazy(() => IndicesStatsIndicesStats)).optional(),
  _shards: z.lazy(() => ShardStatistics),
  _all: z.lazy(() => IndicesStatsIndicesStats)
}).meta({ id: 'IndicesStatsResponse' })
export type IndicesStatsResponse = z.infer<typeof IndicesStatsResponse>
