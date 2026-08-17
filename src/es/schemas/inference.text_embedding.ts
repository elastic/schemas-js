/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceDenseEmbeddingByteResult, InferenceDenseEmbeddingResult, InferenceTaskSettings } from './inference.js'

const InferenceTextEmbeddingInferenceResultExclusiveProps = z.union([z.object({ text_embedding_bytes: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ text_embedding_bits: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ text_embedding: z.array(InferenceDenseEmbeddingResult) })])

/** TextEmbeddingInferenceResult is an aggregation of mutually exclusive text_embedding variants */
export const InferenceTextEmbeddingInferenceResult = InferenceTextEmbeddingInferenceResultExclusiveProps.meta({ id: 'InferenceTextEmbeddingInferenceResult' })
export type InferenceTextEmbeddingInferenceResult = z.infer<typeof InferenceTextEmbeddingInferenceResult>

/** Perform text embedding inference on the service. */
export const InferenceTextEmbeddingRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The inference Id').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  input: z.union([z.string(), z.array(z.string())]).describe('Inference input. Either a string or an array of strings.').meta({ found_in: 'body' }),
  input_type: z.string().describe('The input data type for the text embedding model. Possible values include: * `SEARCH` * `INGEST` * `CLASSIFICATION` * `CLUSTERING` Not all services support all values. Unsupported values will trigger a validation exception. Accepted values depend on the configured inference service, refer to the relevant service-specific documentation for more info. > info > The `input_type` parameter specified on the root level of the request body will take precedence over the `input_type` parameter specified in `task_settings`.').optional().meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceTextEmbeddingRequest' })
export type InferenceTextEmbeddingRequest = z.infer<typeof InferenceTextEmbeddingRequest>

export const InferenceTextEmbeddingResponse = InferenceTextEmbeddingInferenceResult.meta({ id: 'InferenceTextEmbeddingResponse' })
export type InferenceTextEmbeddingResponse = z.infer<typeof InferenceTextEmbeddingResponse>
