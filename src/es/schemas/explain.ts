/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Fields, Id, IndexName, InlineGet, Routing, float } from './_types.js'
import { QueryDslOperator, QueryDslQueryContainer } from './_types.query_dsl.js'
import { SearchSourceConfigParam } from './search.js'

export interface ExplainExplanationDetailShape {
  description: string
  details?: ExplainExplanationDetailShape[] | undefined
  value: float
}
export const ExplainExplanationDetail = z.object({
  description: z.string(),
  get details () { return ExplainExplanationDetail.array().optional() },
  value: z.lazy(() => float)
}).meta({ id: 'ExplainExplanationDetail' })
export type ExplainExplanationDetail = z.infer<typeof ExplainExplanationDetail>

export const ExplainExplanation = z.object({
  description: z.string(),
  details: z.array(z.lazy(() => ExplainExplanationDetail)),
  value: z.lazy(() => float)
}).meta({ id: 'ExplainExplanation' })
export type ExplainExplanation = z.infer<typeof ExplainExplanation>

/**
 * Explain a document match result.
 *
 * Get information about why a specific document matches, or doesn't match, a query.
 * It computes a score explanation for a query and a specific document.
 */
export const ExplainRequest = z.object({
  id: z.lazy(() => Id).describe('The document identifier.').meta({ found_in: 'path' }),
  index: z.lazy(() => IndexName).describe('Index names that are used to limit the request. Only a single index name can be provided to this parameter.').meta({ found_in: 'path' }),
  analyzer: z.string().describe('The analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  analyze_wildcard: z.boolean().describe('If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  default_operator: z.lazy(() => QueryDslOperator).describe('The default operator for query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  df: z.string().describe('The field to use as default where no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  lenient: z.boolean().describe('If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified.').optional().meta({ found_in: 'query' }),
  preference: z.string().describe('The node or shard the operation should be performed on. It is random by default.').optional().meta({ found_in: 'query' }),
  routing: z.lazy(() => Routing).describe('A custom value used to route operations to a specific shard. Not allowed when `index.slice.enabled` is `true` for the target index; use `_slice` instead.').optional().meta({ found_in: 'query' }),
  _source: z.lazy(() => SearchSourceConfigParam).describe('`True` or `false` to return the `_source` field or not or a list of fields to return.').optional().meta({ found_in: 'query' }),
  _source_excludes: z.lazy(() => Fields).describe('A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored.').optional().meta({ found_in: 'query' }),
  _source_includes: z.lazy(() => Fields).describe('A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored.').optional().meta({ found_in: 'query' }),
  stored_fields: z.lazy(() => Fields).describe('A comma-separated list of stored fields to return in the response.').optional().meta({ found_in: 'query' }),
  q: z.string().describe('The query in the Lucene query string syntax.').optional().meta({ found_in: 'query' }),
  query: z.lazy(() => QueryDslQueryContainer).describe('Defines the search definition using the Query DSL.').optional().meta({ found_in: 'body' })
}).meta({ id: 'ExplainRequest' })
export type ExplainRequest = z.infer<typeof ExplainRequest>

export const ExplainResponse = z.object({
  _index: z.lazy(() => IndexName),
  _id: z.lazy(() => Id),
  matched: z.boolean(),
  explanation: z.lazy(() => ExplainExplanationDetail).optional(),
  get: z.lazy(() => InlineGet).optional()
}).meta({ id: 'ExplainResponse' })
export type ExplainResponse = z.infer<typeof ExplainResponse>
