/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, ExpandWildcards, Field, Fields, Indices, ShardStatistics, uint } from './_types.js'
import { IndicesStatsShardRouting } from './indices.stats.js'

export const IndicesFieldUsageStatsInvertedIndex = z.object({
  terms: z.lazy(() => uint),
  postings: z.lazy(() => uint),
  proximity: z.lazy(() => uint),
  positions: z.lazy(() => uint),
  term_frequencies: z.lazy(() => uint),
  offsets: z.lazy(() => uint),
  payloads: z.lazy(() => uint)
}).meta({ id: 'IndicesFieldUsageStatsInvertedIndex' })
export type IndicesFieldUsageStatsInvertedIndex = z.infer<typeof IndicesFieldUsageStatsInvertedIndex>

export const IndicesFieldUsageStatsFieldSummary = z.object({
  any: z.lazy(() => uint),
  stored_fields: z.lazy(() => uint),
  doc_values: z.lazy(() => uint),
  points: z.lazy(() => uint),
  norms: z.lazy(() => uint),
  term_vectors: z.lazy(() => uint),
  knn_vectors: z.lazy(() => uint),
  inverted_index: IndicesFieldUsageStatsInvertedIndex
}).meta({ id: 'IndicesFieldUsageStatsFieldSummary' })
export type IndicesFieldUsageStatsFieldSummary = z.infer<typeof IndicesFieldUsageStatsFieldSummary>

export const IndicesFieldUsageStatsFieldsUsageBody = z.object({
  _shards: z.lazy(() => ShardStatistics)
}).catchall(z.any()).meta({ id: 'IndicesFieldUsageStatsFieldsUsageBody' })
export type IndicesFieldUsageStatsFieldsUsageBody = z.infer<typeof IndicesFieldUsageStatsFieldsUsageBody>

/**
 * Get field usage stats.
 *
 * Get field usage information for each shard and field of an index.
 * Field usage statistics are automatically captured when queries are running on a cluster.
 * A shard-level search request that accesses a given field, even if multiple times during that request, is counted as a single use.
 *
 * The response body reports the per-shard usage count of the data structures that back the fields in the index.
 * A given request will increment each count by a maximum value of 1, even if the request accesses the same field multiple times.
 */
export const IndicesFieldUsageStatsRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list or wildcard expression of index names used to limit the request.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in the statistics.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesFieldUsageStatsRequest' })
export type IndicesFieldUsageStatsRequest = z.infer<typeof IndicesFieldUsageStatsRequest>

export const IndicesFieldUsageStatsResponse = IndicesFieldUsageStatsFieldsUsageBody.meta({ id: 'IndicesFieldUsageStatsResponse' })
export type IndicesFieldUsageStatsResponse = z.infer<typeof IndicesFieldUsageStatsResponse>

export const IndicesFieldUsageStatsShardsStats = z.object({
  all_fields: IndicesFieldUsageStatsFieldSummary,
  fields: z.record(z.lazy(() => Field), IndicesFieldUsageStatsFieldSummary)
}).meta({ id: 'IndicesFieldUsageStatsShardsStats' })
export type IndicesFieldUsageStatsShardsStats = z.infer<typeof IndicesFieldUsageStatsShardsStats>

export const IndicesFieldUsageStatsUsageStatsShards = z.object({
  routing: IndicesStatsShardRouting,
  stats: IndicesFieldUsageStatsShardsStats,
  tracking_id: z.string(),
  tracking_started_at_millis: z.lazy(() => EpochTime)
}).meta({ id: 'IndicesFieldUsageStatsUsageStatsShards' })
export type IndicesFieldUsageStatsUsageStatsShards = z.infer<typeof IndicesFieldUsageStatsUsageStatsShards>

export const IndicesFieldUsageStatsUsageStatsIndex = z.object({
  shards: z.array(IndicesFieldUsageStatsUsageStatsShards)
}).meta({ id: 'IndicesFieldUsageStatsUsageStatsIndex' })
export type IndicesFieldUsageStatsUsageStatsIndex = z.infer<typeof IndicesFieldUsageStatsUsageStatsIndex>
