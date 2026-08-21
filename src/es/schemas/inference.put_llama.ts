/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeLlama = z.enum(['text_embedding', 'chat_completion', 'completion']).meta({ id: 'InferenceTaskTypeLlama' })
export type InferenceTaskTypeLlama = z.infer<typeof InferenceTaskTypeLlama>

export const InferenceInferenceEndpointInfoLlama = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeLlama.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoLlama' })
export type InferenceInferenceEndpointInfoLlama = z.infer<typeof InferenceInferenceEndpointInfoLlama>

export const InferenceLlamaSimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceLlamaSimilarityType' })
export type InferenceLlamaSimilarityType = z.infer<typeof InferenceLlamaSimilarityType>

export const InferenceLlamaServiceSettings = z.object({
  url: z.string().describe('The URL endpoint of the Llama stack endpoint. URL must contain: * For `text_embedding` task - `/v1/inference/embeddings`. * For `completion` and `chat_completion` tasks - `/v1/openai/v1/chat/completions`.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the Llama downloading models documentation for different ways of getting a list of available models and downloading them. Service has been tested and confirmed to be working with the following models: * For `text_embedding` task - `all-MiniLM-L6-v2`. * For `completion` and `chat_completion` tasks - `llama3.2:3b`.'),
  max_input_tokens: z.lazy(() => integer).describe('For a `text_embedding` task, the maximum number of tokens per input before chunking occurs.').optional(),
  similarity: InferenceLlamaSimilarityType.describe('For a `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the Llama API. By default, the `llama` service sets the number of requests allowed per minute to 3000.').optional()
}).meta({ id: 'InferenceLlamaServiceSettings' })
export type InferenceLlamaServiceSettings = z.infer<typeof InferenceLlamaServiceSettings>

export const InferenceLlamaServiceType = z.enum(['llama']).meta({ id: 'InferenceLlamaServiceType' })
export type InferenceLlamaServiceType = z.infer<typeof InferenceLlamaServiceType>

export const InferenceLlamaTaskType = z.enum(['text_embedding', 'completion', 'chat_completion']).meta({ id: 'InferenceLlamaTaskType' })
export type InferenceLlamaTaskType = z.infer<typeof InferenceLlamaTaskType>

/**
 * Create a Llama inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `llama` service.
 */
export const InferencePutLlamaRequest = z.object({
  task_type: InferenceLlamaTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  llama_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceLlamaServiceType.describe('The type of service supported for the specified task type. In this case, `llama`.').meta({ found_in: 'body' }),
  service_settings: InferenceLlamaServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `llama` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutLlamaRequest' })
export type InferencePutLlamaRequest = z.infer<typeof InferencePutLlamaRequest>

export const InferencePutLlamaResponse = InferenceInferenceEndpointInfoLlama.meta({ id: 'InferencePutLlamaResponse' })
export type InferencePutLlamaResponse = z.infer<typeof InferencePutLlamaResponse>
