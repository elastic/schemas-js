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
/**
 * Delete an unreferenced trained model.
 *
 * The request deletes a trained inference model that is not referenced by an ingest pipeline.
 */
export const MlDeleteTrainedModelRequest = z.object({
    ...RequestBase.shape,
    model_id: Id.describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
    force: z.boolean().describe('Forcefully deletes a trained model that is referenced by ingest pipelines or has a started deployment.').optional().meta({ found_in: 'query' }),
    timeout: Duration.describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteTrainedModelRequest' });
export const MlDeleteTrainedModelResponse = AcknowledgedResponseBase.meta({ id: 'MlDeleteTrainedModelResponse' });
//# sourceMappingURL=ml_delete_trained_model.js.map