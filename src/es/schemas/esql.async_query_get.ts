/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { EsqlAsyncEsqlResult, EsqlEsqlFormat } from './esql.js'

/**
 * Get async ES|QL query results.
 *
 * Get the current status and available results or stored results for an ES|QL asynchronous query.
 * If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can retrieve the results using this API.
 */
export const EsqlAsyncQueryGetRequest = z.object({
  id: z.lazy(() => Id).describe('The unique identifier of the query. A query ID is provided in the ES|QL async query API response for a query that does not complete in the designated time. A query ID is also provided when the request was submitted with the `keep_on_completion` parameter set to `true`.').meta({ found_in: 'path' }),
  drop_null_columns: z.boolean().describe('Indicates whether columns that are entirely `null` will be removed from the `columns` and `values` portion of the results. If `true`, the response will include an extra section under the name `all_columns` which has the name of all the columns.').optional().meta({ found_in: 'query' }),
  format: EsqlEsqlFormat.describe('A short version of the Accept header, for example `json` or `yaml`.').optional().meta({ found_in: 'query' }),
  keep_alive: z.lazy(() => Duration).describe('The period for which the query and its results are stored in the cluster. When this period expires, the query and its results are deleted, even if the query is still ongoing.').optional().meta({ found_in: 'query' }),
  wait_for_completion_timeout: z.lazy(() => Duration).describe('The period to wait for the request to finish. By default, the request waits for complete query results. If the request completes during the period specified in this parameter, complete query results are returned. Otherwise, the response returns an `is_running` value of `true` and no results.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlAsyncQueryGetRequest' })
export type EsqlAsyncQueryGetRequest = z.infer<typeof EsqlAsyncQueryGetRequest>

export const EsqlAsyncQueryGetResponse = EsqlAsyncEsqlResult.meta({ id: 'EsqlAsyncQueryGetResponse' })
export type EsqlAsyncQueryGetResponse = z.infer<typeof EsqlAsyncQueryGetResponse>
