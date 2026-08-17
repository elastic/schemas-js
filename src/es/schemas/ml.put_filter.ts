/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Create a filter.
 *
 * A filter contains a list of strings. It can be used by one or more anomaly detection jobs.
 * Specifically, filters are referenced in the `custom_rules` property of detector configuration objects.
 */
export const MlPutFilterRequest = z.object({
  filter_id: z.lazy(() => Id).describe('A string that uniquely identifies a filter.').meta({ found_in: 'path' }),
  description: z.string().describe('A description of the filter.').optional().meta({ found_in: 'body' }),
  items: z.array(z.string()).describe('The items of the filter. A wildcard `*` can be used at the beginning or the end of an item. Up to 10000 items are allowed in each filter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPutFilterRequest' })
export type MlPutFilterRequest = z.infer<typeof MlPutFilterRequest>

export const MlPutFilterResponse = z.object({
  description: z.string(),
  filter_id: z.lazy(() => Id),
  items: z.array(z.string())
}).meta({ id: 'MlPutFilterResponse' })
export type MlPutFilterResponse = z.infer<typeof MlPutFilterResponse>
