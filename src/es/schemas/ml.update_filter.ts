/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Update a filter.
 *
 * Updates the description of a filter, adds items, or removes items from the list.
 */
export const MlUpdateFilterRequest = z.object({
  filter_id: z.lazy(() => Id).describe('A string that uniquely identifies a filter.').meta({ found_in: 'path' }),
  add_items: z.array(z.string()).describe('The items to add to the filter.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('A description for the filter.').optional().meta({ found_in: 'body' }),
  remove_items: z.array(z.string()).describe('The items to remove from the filter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlUpdateFilterRequest' })
export type MlUpdateFilterRequest = z.infer<typeof MlUpdateFilterRequest>

export const MlUpdateFilterResponse = z.object({
  description: z.string(),
  filter_id: z.lazy(() => Id),
  items: z.array(z.string())
}).meta({ id: 'MlUpdateFilterResponse' })
export type MlUpdateFilterResponse = z.infer<typeof MlUpdateFilterResponse>
