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
 * Delete an async EQL search.
 *
 * Delete an async EQL search or a stored synchronous EQL search.
 * The API also deletes results for the search.
 */
export const EqlDeleteRequest = z.object({
    ...RequestBase.shape,
    id: Id.describe('Identifier for the search to delete. A search ID is provided in the EQL search API\'s response for an async search. A search ID is also provided if the request’s `keep_on_completion` parameter is `true`.').meta({ found_in: 'path' })
}).meta({ id: 'EqlDeleteRequest' });
export const EqlDeleteResponse = AcknowledgedResponseBase.meta({ id: 'EqlDeleteResponse' });
//# sourceMappingURL=eql_delete.js.map