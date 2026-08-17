/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ClusterStatistics, DateTime, EpochTime, ErrorCause, Id, ScrollId, ShardStatistics, SuggestionName, double, long } from './_types.js'
import { AsyncSearchAsyncSearchResponseBase } from './async_search.status.js'
import { SearchHitsMetadata, SearchProfile, SearchSuggest } from './search.js'

export const AsyncSearchAsyncSearch = z.object({
  aggregations: z.any().describe('Partial aggregations results, coming from the shards that have already completed running the query.').optional(),
  _clusters: z.lazy(() => ClusterStatistics).optional(),
  fields: z.record(z.string(), z.any()).optional(),
  hits: z.lazy(() => SearchHitsMetadata),
  max_score: z.lazy(() => double).optional(),
  num_reduce_phases: z.lazy(() => long).describe('Indicates how many reductions of the results have been performed. If this number increases compared to the last retrieved results for a get asynch search request, you can expect additional results included in the search response.').optional(),
  profile: SearchProfile.optional(),
  pit_id: z.lazy(() => Id).optional(),
  _scroll_id: z.lazy(() => ScrollId).optional(),
  _shards: z.lazy(() => ShardStatistics).describe('Indicates how many shards have run the query. Note that in order for shard results to be included in the search response, they need to be reduced first.'),
  suggest: z.record(z.lazy(() => SuggestionName), z.array(SearchSuggest)).optional(),
  terminated_early: z.boolean().optional(),
  timed_out: z.boolean(),
  took: z.lazy(() => long)
}).meta({ id: 'AsyncSearchAsyncSearch' })
export type AsyncSearchAsyncSearch = z.infer<typeof AsyncSearchAsyncSearch>

export const AsyncSearchAsyncSearchDocumentResponseBase = z.object({
  ...AsyncSearchAsyncSearchResponseBase.shape,
  response: AsyncSearchAsyncSearch
}).meta({ id: 'AsyncSearchAsyncSearchDocumentResponseBase' })
export type AsyncSearchAsyncSearchDocumentResponseBase = z.infer<typeof AsyncSearchAsyncSearchDocumentResponseBase>

export const AsyncSearchAsyncSearchResponseException = z.object({
  is_partial: z.boolean(),
  is_running: z.boolean(),
  expiration_time: z.lazy(() => DateTime).optional(),
  expiration_time_in_millis: z.lazy(() => EpochTime),
  start_time: z.lazy(() => DateTime).optional(),
  start_time_in_millis: z.lazy(() => EpochTime),
  completion_time: z.lazy(() => DateTime).optional(),
  completion_time_in_millis: z.lazy(() => EpochTime).optional(),
  error: z.lazy(() => ErrorCause).optional(),
  response: AsyncSearchAsyncSearch.optional()
}).meta({ id: 'AsyncSearchAsyncSearchResponseException' })
export type AsyncSearchAsyncSearchResponseException = z.infer<typeof AsyncSearchAsyncSearchResponseException>
