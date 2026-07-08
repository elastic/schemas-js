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
/** Create or update an ES|QL view. */
export const EsqlPutViewRequest = z.object({
    ...RequestBase.shape,
    name: Id.describe('The view name to create or update.').meta({ found_in: 'path' }),
    query: z.string().describe('The ES|QL query string from which to create a view.').meta({ found_in: 'body' })
}).meta({ id: 'EsqlPutViewRequest' });
export const EsqlPutViewResponse = AcknowledgedResponseBase.meta({ id: 'EsqlPutViewResponse' });
//# sourceMappingURL=esql_put_view.js.map