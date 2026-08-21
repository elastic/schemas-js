/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, TimeZone, integer } from './_types.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { SqlColumn, SqlRow } from './sql.js'

export const SqlQuerySqlFormat = z.enum(['csv', 'json', 'tsv', 'txt', 'yaml', 'cbor', 'smile']).meta({ id: 'SqlQuerySqlFormat' })
export type SqlQuerySqlFormat = z.infer<typeof SqlQuerySqlFormat>

/**
 * Get SQL search results.
 *
 * Run an SQL request.
 */
export const SqlQueryRequest = z.object({
  format: SqlQuerySqlFormat.describe('The format for the response. You can also specify a format using the `Accept` HTTP header. If you specify both this parameter and the `Accept` HTTP header, this parameter takes precedence.').optional().meta({ found_in: 'query' }),
  allow_partial_search_results: z.boolean().describe('If `true`, the response has partial results when there are shard request timeouts or shard failures. If `false`, the API returns an error with no partial results.').optional().meta({ found_in: 'body' }),
  catalog: z.string().describe('The default catalog (cluster) for queries. If unspecified, the queries execute on the data in the local cluster only.').optional().meta({ found_in: 'body' }),
  columnar: z.boolean().describe('If `true`, the results are in a columnar fashion: one row represents all the values of a certain column from the current page of results. The API supports this parameter only for CBOR, JSON, SMILE, and YAML responses.').optional().meta({ found_in: 'body' }),
  cursor: z.string().describe('The cursor used to retrieve a set of paginated results. If you specify a cursor, the API only uses the `columnar` and `time_zone` request body parameters. It ignores other request body parameters.').optional().meta({ found_in: 'body' }),
  fetch_size: z.lazy(() => integer).describe('The maximum number of rows (or entries) to return in one response.').optional().meta({ found_in: 'body' }),
  field_multi_value_leniency: z.boolean().describe('If `false`, the API returns an exception when encountering multiple values for a field. If `true`, the API is lenient and returns the first value from the array with no guarantee of consistent results.').optional().meta({ found_in: 'body' }),
  filter: z.lazy(() => QueryDslQueryContainer).describe('The Elasticsearch query DSL for additional filtering.').optional().meta({ found_in: 'body' }),
  index_using_frozen: z.boolean().describe('If `true`, the search can run on frozen indices.').optional().meta({ found_in: 'body' }),
  keep_alive: z.lazy(() => Duration).describe('The retention period for an async or saved synchronous search.').optional().meta({ found_in: 'body' }),
  keep_on_completion: z.boolean().describe('If `true`, Elasticsearch stores synchronous searches if you also specify the `wait_for_completion_timeout` parameter. If `false`, Elasticsearch only stores async searches that don\'t finish before the `wait_for_completion_timeout`.').optional().meta({ found_in: 'body' }),
  page_timeout: z.lazy(() => Duration).describe('The minimum retention period for the scroll cursor. After this time period, a pagination request might fail because the scroll cursor is no longer available. Subsequent scroll requests prolong the lifetime of the scroll cursor by the duration of `page_timeout` in the scroll request.').optional().meta({ found_in: 'body' }),
  params: z.array(z.any()).describe('The values for parameters in the query.').optional().meta({ found_in: 'body' }),
  query: z.string().describe('The SQL query to run.').optional().meta({ found_in: 'body' }),
  request_timeout: z.lazy(() => Duration).describe('The timeout before the request fails.').optional().meta({ found_in: 'body' }),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).describe('One or more runtime fields for the search request. These fields take precedence over mapped fields with the same name.').optional().meta({ found_in: 'body' }),
  time_zone: z.lazy(() => TimeZone).describe('The ISO-8601 time zone ID for the search.').optional().meta({ found_in: 'body' }),
  wait_for_completion_timeout: z.lazy(() => Duration).describe('The period to wait for complete results. It defaults to no timeout, meaning the request waits for complete search results. If the search doesn\'t finish within this period, the search becomes async. To save a synchronous search, you must specify this parameter and the `keep_on_completion` parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SqlQueryRequest' })
export type SqlQueryRequest = z.infer<typeof SqlQueryRequest>

export const SqlQueryResponse = z.object({
  columns: z.array(SqlColumn).describe('Column headings for the search results. Each object is a column.').optional(),
  cursor: z.string().describe('The cursor for the next set of paginated results. For CSV, TSV, and TXT responses, this value is returned in the `Cursor` HTTP header.').optional(),
  id: z.lazy(() => Id).describe('The identifier for the search. This value is returned only for async and saved synchronous searches. For CSV, TSV, and TXT responses, this value is returned in the `Async-ID` HTTP header.').optional(),
  is_running: z.boolean().describe('If `true`, the search is still running. If `false`, the search has finished. This value is returned only for async and saved synchronous searches. For CSV, TSV, and TXT responses, this value is returned in the `Async-partial` HTTP header.').optional(),
  is_partial: z.boolean().describe('If `true`, the response does not contain complete search results. If `is_partial` is `true` and `is_running` is `true`, the search is still running. If `is_partial` is `true` but `is_running` is `false`, the results are partial due to a failure or timeout. This value is returned only for async and saved synchronous searches. For CSV, TSV, and TXT responses, this value is returned in the `Async-partial` HTTP header.').optional(),
  rows: z.array(SqlRow).describe('The values for the search results.')
}).meta({ id: 'SqlQueryResponse' })
export type SqlQueryResponse = z.infer<typeof SqlQueryResponse>
