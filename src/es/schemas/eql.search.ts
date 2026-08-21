/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Field, Indices, integer, uint } from './_types.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import { QueryDslFieldAndFormat, QueryDslQueryContainer } from './_types.query_dsl.js'
import { EqlEqlSearchResponseBase } from './eql.js'

export const EqlSearchResultPosition = z.enum(['tail', 'head']).meta({ id: 'EqlSearchResultPosition' })
export type EqlSearchResultPosition = z.infer<typeof EqlSearchResultPosition>

/**
 * Get EQL search results.
 *
 * Returns search results for an Event Query Language (EQL) query.
 * EQL assumes each document in a data stream or index corresponds to an event.
 */
export const EqlSearchRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of index names to scope the operation').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether to expand wildcard expression to concrete indices that are open, closed or both.').optional().meta({ found_in: 'query' }),
  ccs_minimize_roundtrips: z.boolean().describe('Indicates whether network round-trips should be minimized as part of cross-cluster search requests execution').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  query: z.string().describe('EQL query you wish to run.').meta({ found_in: 'body' }),
  case_sensitive: z.boolean().optional().meta({ found_in: 'body' }),
  event_category_field: z.lazy(() => Field).describe('Field containing the event classification, such as process, file, or network.').optional().meta({ found_in: 'body' }),
  tiebreaker_field: z.lazy(() => Field).describe('Field used to sort hits with the same timestamp in ascending order').optional().meta({ found_in: 'body' }),
  timestamp_field: z.lazy(() => Field).describe('Field containing event timestamp.').optional().meta({ found_in: 'body' }),
  fetch_size: z.lazy(() => uint).describe('Maximum number of events to search at a time for sequence queries.').optional().meta({ found_in: 'body' }),
  filter: z.union([z.lazy(() => QueryDslQueryContainer), z.array(z.lazy(() => QueryDslQueryContainer))]).describe('Query, written in Query DSL, used to filter the events on which the EQL query runs.').optional().meta({ found_in: 'body' }),
  keep_alive: z.lazy(() => Duration).optional().meta({ found_in: 'body' }),
  keep_on_completion: z.boolean().optional().meta({ found_in: 'body' }),
  wait_for_completion_timeout: z.lazy(() => Duration).optional().meta({ found_in: 'body' }),
  allow_partial_search_results: z.boolean().describe('Allow query execution also in case of shard failures. If true, the query will keep running and will return results based on the available shards. For sequences, the behavior can be further refined using allow_partial_sequence_results').optional().meta({ found_in: 'body' }),
  allow_partial_sequence_results: z.boolean().describe('This flag applies only to sequences and has effect only if allow_partial_search_results=true. If true, the sequence query will return results based on the available shards, ignoring the others. If false, the sequence query will return successfully, but will always have empty results.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => uint).describe('For basic queries, the maximum number of matching events to return. Defaults to 10').optional().meta({ found_in: 'body' }),
  fields: z.union([z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)]), z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)]))]).describe('Array of wildcard (*) patterns. The response returns values for field names matching these patterns in the fields property of each hit.').optional().meta({ found_in: 'body' }),
  result_position: EqlSearchResultPosition.optional().meta({ found_in: 'body' }),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).optional().meta({ found_in: 'body' }),
  max_samples_per_key: z.lazy(() => integer).describe('By default, the response of a sample query contains up to `10` samples, with one sample per unique set of join keys. Use the `size` parameter to get a smaller or larger set of samples. To retrieve more than one sample per set of join keys, use the `max_samples_per_key` parameter. Pipes are not supported for sample queries.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EqlSearchRequest' })
export type EqlSearchRequest = z.infer<typeof EqlSearchRequest>

export const EqlSearchResponse = EqlEqlSearchResponseBase.meta({ id: 'EqlSearchResponse' })
export type EqlSearchResponse = z.infer<typeof EqlSearchResponse>
