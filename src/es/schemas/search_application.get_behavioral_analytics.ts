/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName, Name } from './_types.js'

export const SearchApplicationEventDataStream = z.object({
  name: z.lazy(() => IndexName)
}).meta({ id: 'SearchApplicationEventDataStream' })
export type SearchApplicationEventDataStream = z.infer<typeof SearchApplicationEventDataStream>

export const SearchApplicationAnalyticsCollection = z.object({
  event_data_stream: SearchApplicationEventDataStream.describe('Data stream for the collection.')
}).meta({ id: 'SearchApplicationAnalyticsCollection' })
export type SearchApplicationAnalyticsCollection = z.infer<typeof SearchApplicationAnalyticsCollection>

/**
 * Get behavioral analytics collections.
 * @deprecated
 */
export const SearchApplicationGetBehavioralAnalyticsRequest = z.object({
  name: z.array(z.lazy(() => Name)).describe('A list of analytics collections to limit the returned information').optional().meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationGetBehavioralAnalyticsRequest' })
export type SearchApplicationGetBehavioralAnalyticsRequest = z.infer<typeof SearchApplicationGetBehavioralAnalyticsRequest>

export const SearchApplicationGetBehavioralAnalyticsResponse = z.record(z.lazy(() => Name), SearchApplicationAnalyticsCollection).meta({ id: 'SearchApplicationGetBehavioralAnalyticsResponse' })
export type SearchApplicationGetBehavioralAnalyticsResponse = z.infer<typeof SearchApplicationGetBehavioralAnalyticsResponse>
