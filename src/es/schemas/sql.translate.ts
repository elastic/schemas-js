/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, Sort, TimeZone, integer, long } from './_types.js'
import { AggregationsAggregationContainer } from './_types.aggregations.js'
import { QueryDslFieldAndFormat, QueryDslQueryContainer } from './_types.query_dsl.js'
import { SearchSourceConfig, SearchTrackHits } from './search.js'

/**
 * Translate SQL into Elasticsearch queries.
 *
 * Translate an SQL search into a search API request containing Query DSL.
 * It accepts the same request body parameters as the SQL search API, excluding `cursor`.
 */
export const SqlTranslateRequest = z.object({
  fetch_size: z.lazy(() => integer).describe('The maximum number of rows (or entries) to return in one response.').optional().meta({ found_in: 'body' }),
  filter: z.lazy(() => QueryDslQueryContainer).describe('The Elasticsearch query DSL for additional filtering.').optional().meta({ found_in: 'body' }),
  query: z.string().describe('The SQL query to run.').meta({ found_in: 'body' }),
  time_zone: z.lazy(() => TimeZone).describe('The ISO-8601 time zone ID for the search.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SqlTranslateRequest' })
export type SqlTranslateRequest = z.infer<typeof SqlTranslateRequest>

export const SqlTranslateResponse = z.object({
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).optional(),
  size: z.lazy(() => long).optional(),
  _source: z.lazy(() => SearchSourceConfig).optional(),
  fields: z.array(z.union([z.lazy(() => QueryDslFieldAndFormat), z.lazy(() => Field)])).optional(),
  query: z.lazy(() => QueryDslQueryContainer).optional(),
  sort: z.lazy(() => Sort).optional(),
  track_total_hits: SearchTrackHits.optional()
}).meta({ id: 'SqlTranslateResponse' })
export type SqlTranslateResponse = z.infer<typeof SqlTranslateResponse>
