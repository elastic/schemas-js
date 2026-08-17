/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, IndexName, Indices, Routing, ShardStatistics, integer } from './_types.js'
import { QueryDslOperator, QueryDslQueryContainer } from './_types.query_dsl.js'

export const IndicesValidateQueryIndicesValidationExplanation = z.object({
  error: z.string().optional(),
  explanation: z.string().optional(),
  index: z.lazy(() => IndexName).optional(),
  shard: z.lazy(() => integer).optional(),
  valid: z.boolean()
}).meta({ id: 'IndicesValidateQueryIndicesValidationExplanation' })
export type IndicesValidateQueryIndicesValidationExplanation = z.infer<typeof IndicesValidateQueryIndicesValidationExplanation>

/**
 * Validate a query.
 *
 * Validates a query without running it.
 */
export const IndicesValidateQueryRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases to search. Supports wildcards (`*`). To search all data streams or indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  all_shards: z.boolean().describe('If `true`, the validation is executed on all shards instead of one random shard per index.').optional().meta({ found_in: 'query' }),
  analyzer: z.string().describe('Analyzer to use for the query string. This parameter can only be used when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  analyze_wildcard: z.boolean().describe('If `true`, wildcard and prefix queries are analyzed.').optional().meta({ found_in: 'query' }),
  default_operator: z.lazy(() => QueryDslOperator).describe('The default operator for query string query: `and` or `or`.').optional().meta({ found_in: 'query' }),
  df: z.string().describe('Field to use as default where no field prefix is given in the query string. This parameter can only be used when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  explain: z.boolean().describe('If `true`, the response returns detailed information if an error has occurred.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  lenient: z.boolean().describe('If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.').optional().meta({ found_in: 'query' }),
  rewrite: z.boolean().describe('If `true`, returns a more detailed explanation showing the actual Lucene query that will be executed.').optional().meta({ found_in: 'query' }),
  q: z.string().describe('Query in the Lucene query string syntax.').optional().meta({ found_in: 'query' }),
  routing: z.lazy(() => Routing).describe('A custom value used to route operations to a specific shard. Not allowed when `index.slice.enabled` is `true` for the target index; use `_slice` instead.').optional().meta({ found_in: 'query' }),
  query: z.lazy(() => QueryDslQueryContainer).describe('Query in the Lucene query string syntax.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesValidateQueryRequest' })
export type IndicesValidateQueryRequest = z.infer<typeof IndicesValidateQueryRequest>

export const IndicesValidateQueryResponse = z.object({
  explanations: z.array(IndicesValidateQueryIndicesValidationExplanation).optional(),
  _shards: z.lazy(() => ShardStatistics).optional(),
  valid: z.boolean(),
  error: z.string().optional()
}).meta({ id: 'IndicesValidateQueryResponse' })
export type IndicesValidateQueryResponse = z.infer<typeof IndicesValidateQueryResponse>
