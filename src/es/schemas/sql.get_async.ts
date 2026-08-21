/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { SqlColumn, SqlRow } from './sql.js'

/**
 * Get async SQL search results.
 *
 * Get the current status and available results for an async SQL search or stored synchronous SQL search.
 *
 * If the Elasticsearch security features are enabled, only the user who first submitted the SQL search can retrieve the search using this API.
 */
export const SqlGetAsyncRequest = z.object({
  id: z.lazy(() => Id).describe('The identifier for the search.').meta({ found_in: 'path' }),
  delimiter: z.string().describe('The separator for CSV results. The API supports this parameter only for CSV responses.').optional().meta({ found_in: 'query' }),
  format: z.string().describe('The format for the response. You must specify a format using this parameter or the `Accept` HTTP header. If you specify both, the API uses this parameter.').optional().meta({ found_in: 'query' }),
  keep_alive: z.lazy(() => Duration).describe('The retention period for the search and its results. It defaults to the `keep_alive` period for the original SQL search.').optional().meta({ found_in: 'query' }),
  wait_for_completion_timeout: z.lazy(() => Duration).describe('The period to wait for complete results. It defaults to no timeout, meaning the request waits for complete search results.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SqlGetAsyncRequest' })
export type SqlGetAsyncRequest = z.infer<typeof SqlGetAsyncRequest>

export const SqlGetAsyncResponse = z.object({
  id: z.lazy(() => Id).describe('Identifier for the search. This value is returned only for async and saved synchronous searches. For CSV, TSV, and TXT responses, this value is returned in the `Async-ID` HTTP header.'),
  is_running: z.boolean().describe('If `true`, the search is still running. If `false`, the search has finished. This value is returned only for async and saved synchronous searches. For CSV, TSV, and TXT responses, this value is returned in the `Async-partial` HTTP header.'),
  is_partial: z.boolean().describe('If `true`, the response does not contain complete search results. If `is_partial` is `true` and `is_running` is `true`, the search is still running. If `is_partial` is `true` but `is_running` is `false`, the results are partial due to a failure or timeout. This value is returned only for async and saved synchronous searches. For CSV, TSV, and TXT responses, this value is returned in the `Async-partial` HTTP header.'),
  columns: z.array(SqlColumn).describe('Column headings for the search results. Each object is a column.').optional(),
  cursor: z.string().describe('The cursor for the next set of paginated results. For CSV, TSV, and TXT responses, this value is returned in the `Cursor` HTTP header.').optional(),
  rows: z.array(SqlRow).describe('The values for the search results.')
}).meta({ id: 'SqlGetAsyncResponse' })
export type SqlGetAsyncResponse = z.infer<typeof SqlGetAsyncResponse>
