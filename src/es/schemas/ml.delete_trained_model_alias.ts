/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id, Name } from './_types.js'

/**
 * Delete a trained model alias.
 *
 * This API deletes an existing model alias that refers to a trained model. If
 * the model alias is missing or refers to a model other than the one identified
 * by the `model_id`, this API returns an error.
 */
export const MlDeleteTrainedModelAliasRequest = z.object({
  model_alias: z.lazy(() => Name).describe('The model alias to delete.').meta({ found_in: 'path' }),
  model_id: z.lazy(() => Id).describe('The trained model ID to which the model alias refers.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteTrainedModelAliasRequest' })
export type MlDeleteTrainedModelAliasRequest = z.infer<typeof MlDeleteTrainedModelAliasRequest>

export const MlDeleteTrainedModelAliasResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteTrainedModelAliasResponse' })
export type MlDeleteTrainedModelAliasResponse = z.infer<typeof MlDeleteTrainedModelAliasResponse>
