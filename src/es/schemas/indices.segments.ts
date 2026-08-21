/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices, ShardStatistics, VersionString, double, integer, long } from './_types.js'

export const IndicesSegmentsShardSegmentRouting = z.object({
  node: z.string().describe('The node ID of the node that holds the shard.'),
  primary: z.boolean().describe('If `true`, the shard is a primary shard.'),
  state: z.string().describe('The state of the shard, such as `STARTED` or `RELOCATING`.')
}).meta({ id: 'IndicesSegmentsShardSegmentRouting' })
export type IndicesSegmentsShardSegmentRouting = z.infer<typeof IndicesSegmentsShardSegmentRouting>

export const IndicesSegmentsSegment = z.object({
  attributes: z.record(z.string(), z.string()).describe('Contains information about whether high compression was enabled and per-field vector formats.'),
  committed: z.boolean().describe('If `true`, the segment is synced to disk. Segments that are synced can survive a hard reboot. If `false`, the data from uncommitted segments is also stored in the transaction log so that Elasticsearch is able to replay changes on the next start.'),
  compound: z.boolean().describe('If `true`, Lucene merged all files from the segment into a single file to save file descriptors.'),
  deleted_docs: z.lazy(() => long).describe('The number of deleted documents as reported by Lucene, which may be higher or lower than the number of delete operations you have performed. This number excludes deletes that were performed recently and do not yet belong to a segment. Deleted documents are cleaned up by the automatic merge process if it makes sense to do so. Also, Elasticsearch creates extra deleted documents to internally track the recent history of operations on a shard.'),
  generation: z.lazy(() => integer).describe('Generation number, such as `0`. Elasticsearch increments this generation number for each segment written then uses this number to derive the segment name.'),
  search: z.boolean().describe('If `true`, the segment is searchable. If `false`, the segment has most likely been written to disk but needs a refresh to be searchable.'),
  size_in_bytes: z.lazy(() => double).describe('Disk space used by the segment, in bytes.'),
  num_docs: z.lazy(() => long).describe('The number of documents as reported by Lucene. This excludes deleted documents and counts any nested documents separately from their parents. It also excludes documents which were indexed recently and do not yet belong to a segment.'),
  version: z.lazy(() => VersionString).describe('Version of Lucene used to write the segment.')
}).meta({ id: 'IndicesSegmentsSegment' })
export type IndicesSegmentsSegment = z.infer<typeof IndicesSegmentsSegment>

export const IndicesSegmentsShardsSegment = z.object({
  num_committed_segments: z.lazy(() => integer),
  routing: IndicesSegmentsShardSegmentRouting,
  num_search_segments: z.lazy(() => integer),
  segments: z.record(z.string(), IndicesSegmentsSegment)
}).meta({ id: 'IndicesSegmentsShardsSegment' })
export type IndicesSegmentsShardsSegment = z.infer<typeof IndicesSegmentsShardsSegment>

export const IndicesSegmentsIndexSegment = z.object({
  shards: z.record(z.string(), z.union([IndicesSegmentsShardsSegment, z.array(IndicesSegmentsShardsSegment)]))
}).meta({ id: 'IndicesSegmentsIndexSegment' })
export type IndicesSegmentsIndexSegment = z.infer<typeof IndicesSegmentsIndexSegment>

/**
 * Get index segments.
 *
 * Get low-level information about the Lucene segments in index shards.
 * For data streams, the API returns information about the stream's backing indices.
 */
export const IndicesSegmentsRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesSegmentsRequest' })
export type IndicesSegmentsRequest = z.infer<typeof IndicesSegmentsRequest>

export const IndicesSegmentsResponse = z.object({
  indices: z.record(z.string(), IndicesSegmentsIndexSegment),
  _shards: z.lazy(() => ShardStatistics)
}).meta({ id: 'IndicesSegmentsResponse' })
export type IndicesSegmentsResponse = z.infer<typeof IndicesSegmentsResponse>
