/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, float, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeVoyageAI = z.enum(['text_embedding', 'rerank']).meta({ id: 'InferenceTaskTypeVoyageAI' })
export type InferenceTaskTypeVoyageAI = z.infer<typeof InferenceTaskTypeVoyageAI>

export const InferenceInferenceEndpointInfoVoyageAI = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeVoyageAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoVoyageAI' })
export type InferenceInferenceEndpointInfoVoyageAI = z.infer<typeof InferenceInferenceEndpointInfoVoyageAI>

export const InferenceVoyageAIServiceSettings = z.object({
  dimensions: z.lazy(() => integer).describe('The number of dimensions for resulting output embeddings. This setting maps to `output_dimension` in the VoyageAI documentation. Only for the `text_embedding` task type.').optional(),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the VoyageAI documentation for the list of available text embedding and rerank models.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from VoyageAI. The `voyageai` service sets a default number of requests allowed per minute depending on the task type. For both `text_embedding` and `rerank`, it is set to `2000`.').optional(),
  embedding_type: z.lazy(() => float).describe('The data type for the embeddings to be returned. This setting maps to `output_dtype` in the VoyageAI documentation. Permitted values: float, int8, bit. `int8` is a synonym of `byte` in the VoyageAI documentation. `bit` is a synonym of `binary` in the VoyageAI documentation. Only for the `text_embedding` task type.').optional()
}).meta({ id: 'InferenceVoyageAIServiceSettings' })
export type InferenceVoyageAIServiceSettings = z.infer<typeof InferenceVoyageAIServiceSettings>

export const InferenceVoyageAIServiceType = z.enum(['voyageai']).meta({ id: 'InferenceVoyageAIServiceType' })
export type InferenceVoyageAIServiceType = z.infer<typeof InferenceVoyageAIServiceType>

export const InferenceVoyageAITaskSettings = z.object({
  input_type: z.string().describe('Type of the input text. Permitted values: `ingest` (maps to `document` in the VoyageAI documentation), `search` (maps to `query` in the VoyageAI documentation). Only for the `text_embedding` task type.').optional(),
  return_documents: z.boolean().describe('Whether to return the source documents in the response. Only for the `rerank` task type.').optional(),
  top_k: z.lazy(() => integer).describe('The number of most relevant documents to return. If not specified, the reranking results of all documents will be returned. Only for the `rerank` task type.').optional(),
  truncation: z.boolean().describe('Whether to truncate the input texts to fit within the context length.').optional()
}).meta({ id: 'InferenceVoyageAITaskSettings' })
export type InferenceVoyageAITaskSettings = z.infer<typeof InferenceVoyageAITaskSettings>

export const InferenceVoyageAITaskType = z.enum(['text_embedding', 'rerank']).meta({ id: 'InferenceVoyageAITaskType' })
export type InferenceVoyageAITaskType = z.infer<typeof InferenceVoyageAITaskType>

/**
 * Create a VoyageAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `voyageai` service.
 *
 * Avoid creating multiple endpoints for the same model unless required, as each endpoint consumes significant resources.
 */
export const InferencePutVoyageaiRequest = z.object({
  task_type: InferenceVoyageAITaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  voyageai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank` task type.').optional().meta({ found_in: 'body' }),
  service: InferenceVoyageAIServiceType.describe('The type of service supported for the specified task type. In this case, `voyageai`.').meta({ found_in: 'body' }),
  service_settings: InferenceVoyageAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `voyageai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceVoyageAITaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutVoyageaiRequest' })
export type InferencePutVoyageaiRequest = z.infer<typeof InferencePutVoyageaiRequest>

export const InferencePutVoyageaiResponse = InferenceInferenceEndpointInfoVoyageAI.meta({ id: 'InferencePutVoyageaiResponse' })
export type InferencePutVoyageaiResponse = z.infer<typeof InferencePutVoyageaiResponse>
