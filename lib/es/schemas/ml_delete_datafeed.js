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
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/** Delete a datafeed. */
export const MlDeleteDatafeedRequest = z.object({
    ...RequestBase.shape,
    datafeed_id: Id.describe('A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
    force: z.boolean().describe('Use to forcefully delete a started datafeed; this method is quicker than stopping and deleting the datafeed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteDatafeedRequest' });
export const MlDeleteDatafeedResponse = AcknowledgedResponseBase.meta({ id: 'MlDeleteDatafeedResponse' });
//# sourceMappingURL=ml_delete_datafeed.js.map