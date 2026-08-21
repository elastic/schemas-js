/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { EsqlEsqlResult } from './esql.js'

/**
 * Stop async ES|QL query.
 *
 * This API interrupts the query execution and returns the results so far.
 * If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can stop it.
 */
export const EsqlAsyncQueryStopRequest = z.object({
  id: z.lazy(() => Id).describe('The unique identifier of the query. A query ID is provided in the ES|QL async query API response for a query that does not complete in the designated time. A query ID is also provided when the request was submitted with the `keep_on_completion` parameter set to `true`.').meta({ found_in: 'path' }),
  drop_null_columns: z.boolean().describe('Indicates whether columns that are entirely `null` will be removed from the `columns` and `values` portion of the results. If `true`, the response will include an extra section under the name `all_columns` which has the name of all the columns.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlAsyncQueryStopRequest' })
export type EsqlAsyncQueryStopRequest = z.infer<typeof EsqlAsyncQueryStopRequest>

export const EsqlAsyncQueryStopResponse = EsqlEsqlResult.meta({ id: 'EsqlAsyncQueryStopResponse' })
export type EsqlAsyncQueryStopResponse = z.infer<typeof EsqlAsyncQueryStopResponse>
