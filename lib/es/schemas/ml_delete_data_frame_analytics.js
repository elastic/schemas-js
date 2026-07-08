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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/** Delete a data frame analytics job. */
export const MlDeleteDataFrameAnalyticsRequest = z.object({
    ...RequestBase.shape,
    id: Id.describe('Identifier for the data frame analytics job.').meta({ found_in: 'path' }),
    force: z.boolean().describe('If `true`, it deletes a job that is not stopped; this method is quicker than stopping and deleting the job.').optional().meta({ found_in: 'query' }),
    timeout: Duration.describe('The time to wait for the job to be deleted.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteDataFrameAnalyticsRequest' });
export const MlDeleteDataFrameAnalyticsResponse = AcknowledgedResponseBase.meta({ id: 'MlDeleteDataFrameAnalyticsResponse' });
//# sourceMappingURL=ml_delete_data_frame_analytics.js.map