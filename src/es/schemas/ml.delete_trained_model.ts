/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/**
 * Delete an unreferenced trained model.
 *
 * The request deletes a trained inference model that is not referenced by an ingest pipeline.
 */
export const MlDeleteTrainedModelRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
  force: z.boolean().describe('Forcefully deletes a trained model that is referenced by ingest pipelines or has a started deployment.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteTrainedModelRequest' })
export type MlDeleteTrainedModelRequest = z.infer<typeof MlDeleteTrainedModelRequest>

export const MlDeleteTrainedModelResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteTrainedModelResponse' })
export type MlDeleteTrainedModelResponse = z.infer<typeof MlDeleteTrainedModelResponse>
