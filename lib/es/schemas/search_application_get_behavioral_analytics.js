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
export const IndexName = z.string().meta({ id: 'IndexName' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const SearchApplicationEventDataStream = z.object({
    name: IndexName
}).meta({ id: 'SearchApplicationEventDataStream' });
export const SearchApplicationAnalyticsCollection = z.object({
    event_data_stream: SearchApplicationEventDataStream.describe('Data stream for the collection.')
}).meta({ id: 'SearchApplicationAnalyticsCollection' });
/**
 * Get behavioral analytics collections.
 * @deprecated
 */
export const SearchApplicationGetBehavioralAnalyticsRequest = z.object({
    ...RequestBase.shape,
    name: z.array(Name).describe('A list of analytics collections to limit the returned information').optional().meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationGetBehavioralAnalyticsRequest' });
export const SearchApplicationGetBehavioralAnalyticsResponse = z.record(Name, SearchApplicationAnalyticsCollection).meta({ id: 'SearchApplicationGetBehavioralAnalyticsResponse' });
//# sourceMappingURL=search_application_get_behavioral_analytics.js.map