/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceFireworksAISimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceFireworksAISimilarityType' })
export type InferenceFireworksAISimilarityType = z.infer<typeof InferenceFireworksAISimilarityType>

export const InferenceFireworksAIServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your Fireworks AI account. You can find or create your API keys in the Fireworks AI dashboard. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the Fireworks AI documentation for the list of available models for chat completion, completion, and text embedding. For text embedding, supported models include the Qwen3 embedding family (e.g. `fireworks/qwen3-embedding-8b`) and other models in the Fireworks model library.'),
  url: z.string().describe('The URL endpoint to use for the requests. If not provided, the default Fireworks AI API endpoint is used.').optional(),
  dimensions: z.lazy(() => integer).describe('For a `text_embedding` task, the number of dimensions the resulting output embeddings should have. Variable-length embeddings are supported via this parameter.').optional(),
  similarity: InferenceFireworksAISimilarityType.describe('For a `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the Fireworks AI API. Rate limit grouping is per API key only. By default, the `fireworksai` service sets the number of requests allowed per minute to 6000.').optional()
}).meta({ id: 'InferenceFireworksAIServiceSettings' })
export type InferenceFireworksAIServiceSettings = z.infer<typeof InferenceFireworksAIServiceSettings>

export const InferenceFireworksAIServiceType = z.enum(['fireworksai']).meta({ id: 'InferenceFireworksAIServiceType' })
export type InferenceFireworksAIServiceType = z.infer<typeof InferenceFireworksAIServiceType>

export const InferenceFireworksAITaskSettings = z.object({
  user: z.string().describe('For a `completion` or`chat_completion` task, specify the user issuing the request. This information can be used for abuse detection.').optional(),
  headers: z.record(z.string(), z.string()).describe('For a `completion` or`chat_completion` task. Specifies custom HTTP header parameters. For example: ``` "headers": {   "Custom-Header": "Some-Value",   "Another-Custom-Header": "Another-Value" } ```').optional()
}).meta({ id: 'InferenceFireworksAITaskSettings' })
export type InferenceFireworksAITaskSettings = z.infer<typeof InferenceFireworksAITaskSettings>

export const InferenceFireworksAITaskType = z.enum(['chat_completion', 'completion', 'text_embedding']).meta({ id: 'InferenceFireworksAITaskType' })
export type InferenceFireworksAITaskType = z.infer<typeof InferenceFireworksAITaskType>

export const InferenceTaskTypeFireworksAI = z.enum(['chat_completion', 'completion', 'text_embedding']).meta({ id: 'InferenceTaskTypeFireworksAI' })
export type InferenceTaskTypeFireworksAI = z.infer<typeof InferenceTaskTypeFireworksAI>

export const InferenceInferenceEndpointInfoFireworksAI = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeFireworksAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoFireworksAI' })
export type InferenceInferenceEndpointInfoFireworksAI = z.infer<typeof InferenceInferenceEndpointInfoFireworksAI>

/**
 * Create a Fireworks AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `fireworksai` service.
 */
export const InferencePutFireworksaiRequest = z.object({
  task_type: InferenceFireworksAITaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  fireworksai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceFireworksAIServiceType.describe('The type of service supported for the specified task type. In this case, `fireworksai`.').meta({ found_in: 'body' }),
  service_settings: InferenceFireworksAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `fireworksai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceFireworksAITaskSettings.describe('Settings to configure the inference task. Applies only to the `completion` or `chat_completion` task types. Not applicable to the `text_embedding` task type. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutFireworksaiRequest' })
export type InferencePutFireworksaiRequest = z.infer<typeof InferencePutFireworksaiRequest>

export const InferencePutFireworksaiResponse = InferenceInferenceEndpointInfoFireworksAI.meta({ id: 'InferencePutFireworksaiResponse' })
export type InferencePutFireworksaiResponse = z.infer<typeof InferencePutFireworksaiResponse>
