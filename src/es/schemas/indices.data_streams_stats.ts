/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, EpochTime, ExpandWildcards, Indices, Name, ShardStatistics, integer, long } from './_types.js'

export const IndicesDataStreamsStatsDataStreamsStatsItem = z.object({
  backing_indices: z.lazy(() => integer).describe('Current number of backing indices for the data stream.'),
  data_stream: z.lazy(() => Name).describe('Name of the data stream.'),
  maximum_timestamp: z.lazy(() => EpochTime).describe('The data stream’s highest `@timestamp` value, converted to milliseconds since the Unix epoch. NOTE: This timestamp is provided as a best effort. The data stream may contain `@timestamp` values higher than this if one or more of the following conditions are met: The stream contains closed backing indices; Backing indices with a lower generation contain higher `@timestamp` values.'),
  store_size: z.lazy(() => ByteSize).describe('Total size of all shards for the data stream’s backing indices. This parameter is only returned if the `human` query parameter is `true`.').optional(),
  store_size_bytes: z.lazy(() => long).describe('Total size, in bytes, of all shards for the data stream’s backing indices.')
}).meta({ id: 'IndicesDataStreamsStatsDataStreamsStatsItem' })
export type IndicesDataStreamsStatsDataStreamsStatsItem = z.infer<typeof IndicesDataStreamsStatsDataStreamsStatsItem>

/**
 * Get data stream stats.
 *
 * Get statistics for one or more data streams.
 */
export const IndicesDataStreamsStatsRequest = z.object({
  name: z.lazy(() => Indices).describe('Comma-separated list of data streams used to limit the request. Wildcard expressions (`*`) are supported. To target all data streams in a cluster, omit this parameter or use `*`.').optional().meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDataStreamsStatsRequest' })
export type IndicesDataStreamsStatsRequest = z.infer<typeof IndicesDataStreamsStatsRequest>

export const IndicesDataStreamsStatsResponse = z.object({
  _shards: z.lazy(() => ShardStatistics).describe('Contains information about shards that attempted to execute the request.'),
  backing_indices: z.lazy(() => integer).describe('Total number of backing indices for the selected data streams.'),
  data_stream_count: z.lazy(() => integer).describe('Total number of selected data streams.'),
  data_streams: z.array(IndicesDataStreamsStatsDataStreamsStatsItem).describe('Contains statistics for the selected data streams.'),
  total_store_sizes: z.lazy(() => ByteSize).describe('Total size of all shards for the selected data streams. This property is included only if the `human` query parameter is `true`').optional(),
  total_store_size_bytes: z.lazy(() => long).describe('Total size, in bytes, of all shards for the selected data streams.')
}).meta({ id: 'IndicesDataStreamsStatsResponse' })
export type IndicesDataStreamsStatsResponse = z.infer<typeof IndicesDataStreamsStatsResponse>
