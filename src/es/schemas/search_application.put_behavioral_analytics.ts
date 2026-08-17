/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'

export const SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.'),
  name: z.lazy(() => Name).describe('The name of the analytics collection created or updated')
}).meta({ id: 'SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase' })
export type SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase = z.infer<typeof SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase>

/**
 * Create a behavioral analytics collection.
 * @deprecated
 */
export const SearchApplicationPutBehavioralAnalyticsRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the analytics collection to be created or updated.').meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationPutBehavioralAnalyticsRequest' })
export type SearchApplicationPutBehavioralAnalyticsRequest = z.infer<typeof SearchApplicationPutBehavioralAnalyticsRequest>

export const SearchApplicationPutBehavioralAnalyticsResponse = SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase.meta({ id: 'SearchApplicationPutBehavioralAnalyticsResponse' })
export type SearchApplicationPutBehavioralAnalyticsResponse = z.infer<typeof SearchApplicationPutBehavioralAnalyticsResponse>
