/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ScrollId, integer } from './_types.js'

export const ScrollIds = z.union([z.lazy(() => ScrollId), z.array(z.lazy(() => ScrollId))]).meta({ id: 'ScrollIds' })
export type ScrollIds = z.infer<typeof ScrollIds>

/**
 * Clear a scrolling search.
 *
 * Clear the search context and results for a scrolling search.
 */
export const ClearScrollRequest = z.object({
  scroll_id: ScrollIds.describe('The scroll IDs to clear. To clear all scroll IDs, use `_all`.').optional().meta({ found_in: 'body' })
}).meta({ id: 'ClearScrollRequest' })
export type ClearScrollRequest = z.infer<typeof ClearScrollRequest>

export const ClearScrollResponse = z.object({
  succeeded: z.boolean().describe('If `true`, the request succeeded. This does not indicate whether any scrolling search requests were cleared.'),
  num_freed: z.lazy(() => integer).describe('The number of scrolling search requests cleared.')
}).meta({ id: 'ClearScrollResponse' })
export type ClearScrollResponse = z.infer<typeof ClearScrollResponse>
