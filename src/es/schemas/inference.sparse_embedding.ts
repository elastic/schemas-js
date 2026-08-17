/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceSparseEmbeddingResult, InferenceTaskSettings } from './inference.js'

/** The response format for the sparse embedding request. */
export const InferenceSparseEmbeddingInferenceResult = z.object({
  sparse_embedding: z.array(InferenceSparseEmbeddingResult)
}).meta({ id: 'InferenceSparseEmbeddingInferenceResult' })
export type InferenceSparseEmbeddingInferenceResult = z.infer<typeof InferenceSparseEmbeddingInferenceResult>

/** Perform sparse embedding inference on the service. */
export const InferenceSparseEmbeddingRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The inference Id').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  input: z.union([z.string(), z.array(z.string())]).describe('Inference input. Either a string or an array of strings.').meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceSparseEmbeddingRequest' })
export type InferenceSparseEmbeddingRequest = z.infer<typeof InferenceSparseEmbeddingRequest>

export const InferenceSparseEmbeddingResponse = InferenceSparseEmbeddingInferenceResult.meta({ id: 'InferenceSparseEmbeddingResponse' })
export type InferenceSparseEmbeddingResponse = z.infer<typeof InferenceSparseEmbeddingResponse>
