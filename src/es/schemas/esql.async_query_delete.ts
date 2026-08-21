/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete an async ES|QL query.
 *
 * If the query is still running, it is cancelled.
 * Otherwise, the stored results are deleted.
 *
 * If the Elasticsearch security features are enabled, only the following users can use this API to delete a query:
 *
 * * The authenticated user that submitted the original query request
 * * Users with the `cancel_task` cluster privilege
 */
export const EsqlAsyncQueryDeleteRequest = z.object({
  id: z.lazy(() => Id).describe('The unique identifier of the query. A query ID is provided in the ES|QL async query API response for a query that does not complete in the designated time. A query ID is also provided when the request was submitted with the `keep_on_completion` parameter set to `true`.').meta({ found_in: 'path' })
}).meta({ id: 'EsqlAsyncQueryDeleteRequest' })
export type EsqlAsyncQueryDeleteRequest = z.infer<typeof EsqlAsyncQueryDeleteRequest>

export const EsqlAsyncQueryDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlAsyncQueryDeleteResponse' })
export type EsqlAsyncQueryDeleteResponse = z.infer<typeof EsqlAsyncQueryDeleteResponse>
