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
/**
 * Delete a filter.
 *
 * If an anomaly detection job references the filter, you cannot delete the
 * filter. You must update or delete the job before you can delete the filter.
 */
export const MlDeleteFilterRequest = z.object({
    ...RequestBase.shape,
    filter_id: Id.describe('A string that uniquely identifies a filter.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteFilterRequest' });
export const MlDeleteFilterResponse = AcknowledgedResponseBase.meta({ id: 'MlDeleteFilterResponse' });
//# sourceMappingURL=ml_delete_filter.js.map