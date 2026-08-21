/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceCompletionResult, InferenceDenseEmbeddingByteResult, InferenceDenseEmbeddingResult, InferenceRankedDocument, InferenceSparseEmbeddingResult, InferenceTaskSettings, InferenceTaskType } from './inference.js'

const InferenceInferenceResultExclusiveProps = z.union([z.object({ embeddings_bytes: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ embeddings_bits: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ embeddings: z.array(InferenceDenseEmbeddingResult) }), z.object({ text_embedding_bytes: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ text_embedding_bits: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ text_embedding: z.array(InferenceDenseEmbeddingResult) }), z.object({ sparse_embedding: z.array(InferenceSparseEmbeddingResult) }), z.object({ completion: z.array(InferenceCompletionResult) }), z.object({ rerank: z.array(InferenceRankedDocument) })])

/** InferenceResult is an aggregation of mutually exclusive variants */
export const InferenceInferenceResult = InferenceInferenceResultExclusiveProps.meta({ id: 'InferenceInferenceResult' })
export type InferenceInferenceResult = z.infer<typeof InferenceInferenceResult>

/**
 * Perform inference on the service.
 *
 * This API enables you to use machine learning models to perform specific tasks on data that you provide as an input.
 * It returns a response with the results of the tasks.
 * The inference endpoint you use can perform one specific task that has been defined when the endpoint was created with the create inference API.
 *
 * For details about using this API with a service, such as Amazon Bedrock, Anthropic, or HuggingFace, refer to the service-specific documentation.
 *
 * > info
 * > The inference APIs enable you to use certain services, such as built-in machine learning models (ELSER, E5), models uploaded through Eland, Cohere, OpenAI, Azure, Google AI Studio, Google Vertex AI, Anthropic, Watsonx.ai, or Hugging Face. For built-in models and models uploaded through Eland, the inference APIs offer an alternative way to use and manage trained models. However, if you do not plan to use the inference APIs to use these models or if you want to use non-NLP models, use the machine learning trained model APIs.
 */
export const InferenceInferenceRequest = z.object({
  task_type: InferenceTaskType.describe('The type of inference task that the model performs.').optional().meta({ found_in: 'path' }),
  inference_id: z.lazy(() => Id).describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  query: z.string().describe('The query input, which is required only for the `rerank` task. It is not required for other tasks.').optional().meta({ found_in: 'body' }),
  input: z.union([z.string(), z.array(z.string())]).describe('The text on which you want to perform the inference task. It can be a single string or an array. > info > Inference endpoints for the `completion` task type currently only support a single string as input.').meta({ found_in: 'body' }),
  input_type: z.string().describe('Specifies the input data type for the embedding model. The `input_type` parameter only applies to Inference Endpoints with the `embedding` or `text_embedding` task type. Possible values include: * `SEARCH` * `INGEST` * `CLASSIFICATION` * `CLUSTERING` Not all services support all values. Unsupported values will trigger a validation exception. Accepted values depend on the configured inference service, refer to the relevant service-specific documentation for more info. > info > The `input_type` parameter specified on the root level of the request body will take precedence over the `input_type` parameter specified in `task_settings`.').optional().meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceInferenceRequest' })
export type InferenceInferenceRequest = z.infer<typeof InferenceInferenceRequest>

export const InferenceInferenceResponse = InferenceInferenceResult.meta({ id: 'InferenceInferenceResponse' })
export type InferenceInferenceResponse = z.infer<typeof InferenceInferenceResponse>
