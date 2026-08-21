/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, IndexAlias, IndexName, SearchType, integer, long } from './_types.js'
import { FleetCheckpoint } from './fleet.js'
import { MsearchRequestItem, MsearchResponseItem } from './msearch.js'

/**
 * Run multiple Fleet searches.
 *
 * Run several Fleet searches with a single API request.
 * The API follows the same structure as the multi search API.
 * However, similar to the Fleet search API, it supports the `wait_for_checkpoints` parameter.
 */
export const FleetMsearchRequest = z.object({
  index: z.union([z.lazy(() => IndexName), IndexAlias]).describe('A single target to search. If the target is an index alias, it must resolve to a single index.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  ccs_minimize_roundtrips: z.boolean().describe('If true, network roundtrips between the coordinating node and remote clusters are minimized for cross-cluster search requests.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams.').optional().meta({ found_in: 'query' }),
  ignore_throttled: z.boolean().describe('If true, concrete, expanded or aliased indices are ignored when frozen.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  max_concurrent_searches: z.lazy(() => integer).describe('Maximum number of concurrent searches the multi search API can execute.').optional().meta({ found_in: 'query' }),
  max_concurrent_shard_requests: z.lazy(() => integer).describe('Maximum number of concurrent shard requests that each sub-search request executes per node.').optional().meta({ found_in: 'query' }),
  pre_filter_shard_size: z.lazy(() => long).describe('Defines a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method i.e., if date filters are mandatory to match but the shard bounds and the query are disjoint.').optional().meta({ found_in: 'query' }),
  search_type: z.lazy(() => SearchType).describe('Indicates whether global term and document frequencies should be used when scoring returned documents.').optional().meta({ found_in: 'query' }),
  rest_total_hits_as_int: z.boolean().describe('If true, hits.total are returned as an integer in the response. Defaults to false, which returns an object.').optional().meta({ found_in: 'query' }),
  typed_keys: z.boolean().describe('Specifies whether aggregation and suggester names should be prefixed by their respective types in the response.').optional().meta({ found_in: 'query' }),
  wait_for_checkpoints: z.array(FleetCheckpoint).describe('A comma separated list of checkpoints. When configured, the search API will only be executed on a shard after the relevant checkpoint has become visible for search. Defaults to an empty list which will cause Elasticsearch to immediately execute the search.').optional().meta({ found_in: 'query' }),
  allow_partial_search_results: z.boolean().describe('If true, returns partial results if there are shard request timeouts or shard failures. If false, returns an error with no partial results. Defaults to the configured cluster setting `search.default_allow_partial_results`, which is true by default.').optional().meta({ found_in: 'query' }),
  searches: z.array(MsearchRequestItem).optional().meta({ found_in: 'body' })
}).meta({ id: 'FleetMsearchRequest' })
export type FleetMsearchRequest = z.infer<typeof FleetMsearchRequest>

export const FleetMsearchResponse = z.object({
  docs: z.array(MsearchResponseItem)
}).meta({ id: 'FleetMsearchResponse' })
export type FleetMsearchResponse = z.infer<typeof FleetMsearchResponse>
