/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id, integer, long } from './_types.js'

/** Create part of a trained model definition. */
export const MlPutTrainedModelDefinitionPartRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
  part: z.lazy(() => integer).describe('The definition part number. When the definition is loaded for inference the definition parts are streamed in the order of their part number. The first part must be `0` and the final part must be `total_parts - 1`.').meta({ found_in: 'path' }),
  definition: z.string().describe('The definition part for the model. Must be a base64 encoded string.').meta({ found_in: 'body' }),
  total_definition_length: z.lazy(() => long).describe('The total uncompressed definition length in bytes. Not base64 encoded.').meta({ found_in: 'body' }),
  total_parts: z.lazy(() => integer).describe('The total number of parts that will be uploaded. Must be greater than 0.').meta({ found_in: 'body' })
}).meta({ id: 'MlPutTrainedModelDefinitionPartRequest' })
export type MlPutTrainedModelDefinitionPartRequest = z.infer<typeof MlPutTrainedModelDefinitionPartRequest>

export const MlPutTrainedModelDefinitionPartResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlPutTrainedModelDefinitionPartResponse' })
export type MlPutTrainedModelDefinitionPartResponse = z.infer<typeof MlPutTrainedModelDefinitionPartResponse>
