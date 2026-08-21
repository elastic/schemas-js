/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Ids, integer, long } from './_types.js'

export const MlFilter = z.object({
  description: z.string().describe('A description of the filter.').optional(),
  filter_id: z.lazy(() => Id).describe('A string that uniquely identifies a filter.'),
  items: z.array(z.string()).describe('An array of strings which is the filter item list.')
}).meta({ id: 'MlFilter' })
export type MlFilter = z.infer<typeof MlFilter>

/**
 * Get filters.
 *
 * You can get a single filter or all filters.
 */
export const MlGetFiltersRequest = z.object({
  filter_id: z.lazy(() => Ids).describe('A string that uniquely identifies a filter.').optional().meta({ found_in: 'path' }),
  from: z.lazy(() => integer).describe('Skips the specified number of filters.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of filters to obtain.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetFiltersRequest' })
export type MlGetFiltersRequest = z.infer<typeof MlGetFiltersRequest>

export const MlGetFiltersResponse = z.object({
  count: z.lazy(() => long),
  filters: z.array(MlFilter)
}).meta({ id: 'MlGetFiltersResponse' })
export type MlGetFiltersResponse = z.infer<typeof MlGetFiltersResponse>
