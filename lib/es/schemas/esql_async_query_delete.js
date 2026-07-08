/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
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
    ...RequestBase.shape,
    id: Id.describe('The unique identifier of the query. A query ID is provided in the ES|QL async query API response for a query that does not complete in the designated time. A query ID is also provided when the request was submitted with the `keep_on_completion` parameter set to `true`.').meta({ found_in: 'path' })
}).meta({ id: 'EsqlAsyncQueryDeleteRequest' });
export const EsqlAsyncQueryDeleteResponse = AcknowledgedResponseBase.meta({ id: 'EsqlAsyncQueryDeleteResponse' });
//# sourceMappingURL=esql_async_query_delete.js.map