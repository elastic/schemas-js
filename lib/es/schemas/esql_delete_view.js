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
export const Ids = z.union([Id, z.array(Id)]).meta({ id: 'Ids' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Delete an ES|QL view.
 *
 * Deletes a stored ES|QL view.
 */
export const EsqlDeleteViewRequest = z.object({
    ...RequestBase.shape,
    name: Ids.describe('The view name to remove.').meta({ found_in: 'path' })
}).meta({ id: 'EsqlDeleteViewRequest' });
export const EsqlDeleteViewResponse = AcknowledgedResponseBase.meta({ id: 'EsqlDeleteViewResponse' });
//# sourceMappingURL=esql_delete_view.js.map