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
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase = z.object({
    ...AcknowledgedResponseBase.shape,
    name: Name.describe('The name of the analytics collection created or updated')
}).meta({ id: 'SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase' });
/**
 * Create a behavioral analytics collection.
 * @deprecated
 */
export const SearchApplicationPutBehavioralAnalyticsRequest = z.object({
    ...RequestBase.shape,
    name: Name.describe('The name of the analytics collection to be created or updated.').meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationPutBehavioralAnalyticsRequest' });
export const SearchApplicationPutBehavioralAnalyticsResponse = SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase.meta({ id: 'SearchApplicationPutBehavioralAnalyticsResponse' });
//# sourceMappingURL=search_application_put_behavioral_analytics.js.map