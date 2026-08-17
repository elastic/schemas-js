/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'

export const SearchApplicationEventType = z.enum(['page_view', 'search', 'search_click']).meta({ id: 'SearchApplicationEventType' })
export type SearchApplicationEventType = z.infer<typeof SearchApplicationEventType>

/**
 * Create a behavioral analytics collection event.
 * @deprecated
 */
export const SearchApplicationPostBehavioralAnalyticsEventRequest = z.object({
  collection_name: z.lazy(() => Name).describe('The name of the behavioral analytics collection.').meta({ found_in: 'path' }),
  event_type: SearchApplicationEventType.describe('The analytics event type.').meta({ found_in: 'path' }),
  debug: z.boolean().describe('Whether the response type has to include more details').optional().meta({ found_in: 'query' }),
  payload: z.any().optional().meta({ found_in: 'body' })
}).meta({ id: 'SearchApplicationPostBehavioralAnalyticsEventRequest' })
export type SearchApplicationPostBehavioralAnalyticsEventRequest = z.infer<typeof SearchApplicationPostBehavioralAnalyticsEventRequest>

export const SearchApplicationPostBehavioralAnalyticsEventResponse = z.object({
  accepted: z.boolean(),
  event: z.any().optional()
}).meta({ id: 'SearchApplicationPostBehavioralAnalyticsEventResponse' })
export type SearchApplicationPostBehavioralAnalyticsEventResponse = z.infer<typeof SearchApplicationPostBehavioralAnalyticsEventResponse>
