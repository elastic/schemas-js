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
 * Delete an async SQL search.
 *
 * Delete an async SQL search or a stored synchronous SQL search.
 * If the search is still running, the API cancels it.
 *
 * If the Elasticsearch security features are enabled, only the following users can use this API to delete a search:
 *
 * * Users with the `cancel_task` cluster privilege.
 * * The user who first submitted the search.
 */
export const SqlDeleteAsyncRequest = z.object({
    ...RequestBase.shape,
    id: Id.describe('The identifier for the search.').meta({ found_in: 'path' })
}).meta({ id: 'SqlDeleteAsyncRequest' });
export const SqlDeleteAsyncResponse = AcknowledgedResponseBase.meta({ id: 'SqlDeleteAsyncResponse' });
//# sourceMappingURL=sql_delete_async.js.map