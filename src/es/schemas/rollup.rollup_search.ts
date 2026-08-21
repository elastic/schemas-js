/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Indices, ShardStatistics, integer, long } from './_types.js'
import { AggregationsAggregationContainer } from './_types.aggregations.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { SearchHitsMetadata } from './search.js'

/**
 * Search rolled-up data.
 *
 * The rollup search endpoint is needed because, internally, rolled-up documents utilize a different document structure than the original data.
 * It rewrites standard Query DSL into a format that matches the rollup documents then takes the response and rewrites it back to what a client would expect given the original query.
 *
 * The request body supports a subset of features from the regular search API.
 * The following functionality is not available:
 *
 * `size`: Because rollups work on pre-aggregated data, no search hits can be returned and so size must be set to zero or omitted entirely.
 * `highlighter`, `suggestors`, `post_filter`, `profile`, `explain`: These are similarly disallowed.
 *
 * For more detailed examples of using the rollup search API, including querying rolled-up data only or combining rolled-up and live data, refer to the External documentation.
 * @deprecated
 */
export const RollupRollupSearchRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams and indices used to limit the request. This parameter has the following rules: * At least one data stream, index, or wildcard expression must be specified. This target can include a rollup or non-rollup index. For data streams, the stream\'s backing indices can only serve as non-rollup indices. Omitting the parameter or using `_all` are not permitted. * Multiple non-rollup indices may be specified. * Only one rollup index may be specified. If more than one are supplied, an exception occurs. * Wildcard expressions (`*`) may be used. If they match more than one rollup index, an exception occurs. However, you can use an expression to match multiple non-rollup indices or data streams.').meta({ found_in: 'path' }),
  rest_total_hits_as_int: z.boolean().describe('Indicates whether hits.total should be rendered as an integer or an object in the rest search response').optional().meta({ found_in: 'query' }),
  typed_keys: z.boolean().describe('Specify whether aggregation and suggester names should be prefixed by their respective types in the response').optional().meta({ found_in: 'query' }),
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Specifies aggregations.').optional().meta({ found_in: 'body' }),
  aggs: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Specifies aggregations.').optional(),
  query: z.lazy(() => QueryDslQueryContainer).describe('Specifies a DSL query that is subject to some limitations.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('Must be zero if set, as rollups work on pre-aggregated data.').optional().meta({ found_in: 'body' })
}).meta({ id: 'RollupRollupSearchRequest' })
export type RollupRollupSearchRequest = z.infer<typeof RollupRollupSearchRequest>

export const RollupRollupSearchResponse = z.object({
  took: z.lazy(() => long),
  timed_out: z.boolean(),
  terminated_early: z.boolean().optional(),
  _shards: z.lazy(() => ShardStatistics),
  hits: z.lazy(() => SearchHitsMetadata),
  aggregations: z.any().optional()
}).meta({ id: 'RollupRollupSearchResponse' })
export type RollupRollupSearchResponse = z.infer<typeof RollupRollupSearchResponse>
