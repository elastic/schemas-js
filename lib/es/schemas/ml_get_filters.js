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
export const Id = z.string().meta({ id: 'Id' });
export const Ids = z.union([Id, z.array(Id)]).meta({ id: 'Ids' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
export const long = z.number().meta({ id: 'long' });
export const MlFilter = z.object({
    description: z.string().describe('A description of the filter.').optional(),
    filter_id: Id.describe('A string that uniquely identifies a filter.'),
    items: z.array(z.string()).describe('An array of strings which is the filter item list.')
}).meta({ id: 'MlFilter' });
/**
 * Get filters.
 *
 * You can get a single filter or all filters.
 */
export const MlGetFiltersRequest = z.object({
    ...RequestBase.shape,
    filter_id: Ids.describe('A string that uniquely identifies a filter.').optional().meta({ found_in: 'path' }),
    from: integer.describe('Skips the specified number of filters.').optional().meta({ found_in: 'query' }),
    size: integer.describe('Specifies the maximum number of filters to obtain.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetFiltersRequest' });
export const MlGetFiltersResponse = z.object({
    count: long,
    filters: z.array(MlFilter)
}).meta({ id: 'MlGetFiltersResponse' });
//# sourceMappingURL=ml_get_filters.js.map