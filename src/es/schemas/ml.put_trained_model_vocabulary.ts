/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id, double } from './_types.js'

/**
 * Create a trained model vocabulary.
 *
 * This API is supported only for natural language processing (NLP) models.
 * The vocabulary is stored in the index as described in `inference_config.*.vocabulary` of the trained model definition.
 */
export const MlPutTrainedModelVocabularyRequest = z.object({
  model_id: z.lazy(() => Id).describe('The unique identifier of the trained model.').meta({ found_in: 'path' }),
  vocabulary: z.array(z.string()).describe('The model vocabulary, which must not be empty.').meta({ found_in: 'body' }),
  merges: z.array(z.string()).describe('The optional model merges if required by the tokenizer.').optional().meta({ found_in: 'body' }),
  scores: z.array(z.lazy(() => double)).describe('The optional vocabulary value scores if required by the tokenizer.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPutTrainedModelVocabularyRequest' })
export type MlPutTrainedModelVocabularyRequest = z.infer<typeof MlPutTrainedModelVocabularyRequest>

export const MlPutTrainedModelVocabularyResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlPutTrainedModelVocabularyResponse' })
export type MlPutTrainedModelVocabularyResponse = z.infer<typeof MlPutTrainedModelVocabularyResponse>
