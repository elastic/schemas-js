/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Name } from './_types.js'

/**
 * Delete a behavioral analytics collection.
 *
 * The associated data stream is also deleted.
 * @deprecated
 */
export const SearchApplicationDeleteBehavioralAnalyticsRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the analytics collection to be deleted').meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationDeleteBehavioralAnalyticsRequest' })
export type SearchApplicationDeleteBehavioralAnalyticsRequest = z.infer<typeof SearchApplicationDeleteBehavioralAnalyticsRequest>

export const SearchApplicationDeleteBehavioralAnalyticsResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SearchApplicationDeleteBehavioralAnalyticsResponse' })
export type SearchApplicationDeleteBehavioralAnalyticsResponse = z.infer<typeof SearchApplicationDeleteBehavioralAnalyticsResponse>
