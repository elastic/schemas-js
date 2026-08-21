/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceCohereTruncateType, InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeNvidia = z.enum(['chat_completion', 'completion', 'rerank', 'text_embedding']).meta({ id: 'InferenceTaskTypeNvidia' })
export type InferenceTaskTypeNvidia = z.infer<typeof InferenceTaskTypeNvidia>

export const InferenceInferenceEndpointInfoNvidia = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference ID'),
  task_type: InferenceTaskTypeNvidia.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoNvidia' })
export type InferenceInferenceEndpointInfoNvidia = z.infer<typeof InferenceInferenceEndpointInfoNvidia>

export const InferenceNvidiaInputType = z.enum(['ingest', 'search']).meta({ id: 'InferenceNvidiaInputType' })
export type InferenceNvidiaInputType = z.infer<typeof InferenceNvidiaInputType>

export const InferenceNvidiaSimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceNvidiaSimilarityType' })
export type InferenceNvidiaSimilarityType = z.infer<typeof InferenceNvidiaSimilarityType>

export const InferenceNvidiaServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your Nvidia endpoint. Can be found in `API Keys` section of Nvidia account settings.'),
  url: z.string().describe('The URL of the Nvidia model endpoint. If not provided, the default endpoint URL is used depending on the task type: * For `text_embedding` task - `https://integrate.api.nvidia.com/v1/embeddings`. * For `completion` and `chat_completion` tasks - `https://integrate.api.nvidia.com/v1/chat/completions`. * For `rerank` task - `https://ai.api.nvidia.com/v1/retrieval/nvidia/reranking`.').optional(),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the model\'s documentation for the name if needed. Service has been tested and confirmed to be working with the following models: * For `text_embedding` task - `nvidia/llama-3.2-nv-embedqa-1b-v2`. * For `completion` and `chat_completion` tasks - `microsoft/phi-3-mini-128k-instruct`. * For `rerank` task - `nv-rerank-qa-mistral-4b:1`. Service doesn\'t support `text_embedding` task `baai/bge-m3` and `nvidia/nvclip` models due to them not recognizing the `input_type` parameter.'),
  max_input_tokens: z.lazy(() => integer).describe('For a `text_embedding` task, the maximum number of tokens per input. Inputs exceeding this value are truncated prior to sending to the Nvidia API.').optional(),
  similarity: InferenceNvidiaSimilarityType.describe('For a `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the Nvidia API. By default, the `nvidia` service sets the number of requests allowed per minute to 3000.').optional()
}).meta({ id: 'InferenceNvidiaServiceSettings' })
export type InferenceNvidiaServiceSettings = z.infer<typeof InferenceNvidiaServiceSettings>

export const InferenceNvidiaServiceType = z.enum(['nvidia']).meta({ id: 'InferenceNvidiaServiceType' })
export type InferenceNvidiaServiceType = z.infer<typeof InferenceNvidiaServiceType>

export const InferenceNvidiaTaskSettings = z.object({
  input_type: InferenceNvidiaInputType.describe('For a `text_embedding` task, type of input sent to the Nvidia endpoint. Valid values are: * `ingest`: Mapped to Nvidia\'s `passage` value in request. Used when generating embeddings during indexing. * `search`: Mapped to Nvidia\'s `query` value in request. Used when generating embeddings during querying. IMPORTANT: For Nvidia endpoints, if the `input_type` field is not specified, it defaults to `query`.').optional(),
  truncate: InferenceCohereTruncateType.describe('For a `text_embedding` task, the method used by the Nvidia model to handle inputs longer than the maximum token length. Valid values are: * `END`: When the input exceeds the maximum input token length, the end of the input is discarded. * `NONE`: When the input exceeds the maximum input token length, an error is returned. * `START`: When the input exceeds the maximum input token length, the start of the input is discarded.').optional()
}).meta({ id: 'InferenceNvidiaTaskSettings' })
export type InferenceNvidiaTaskSettings = z.infer<typeof InferenceNvidiaTaskSettings>

export const InferenceNvidiaTaskType = z.enum(['chat_completion', 'completion', 'rerank', 'text_embedding']).meta({ id: 'InferenceNvidiaTaskType' })
export type InferenceNvidiaTaskType = z.infer<typeof InferenceNvidiaTaskType>

/**
 * Create an Nvidia inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `nvidia` service.
 */
export const InferencePutNvidiaRequest = z.object({
  task_type: InferenceNvidiaTaskType.describe('The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.').meta({ found_in: 'path' }),
  nvidia_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceNvidiaServiceType.describe('The type of service supported for the specified task type. In this case, `nvidia`.').meta({ found_in: 'body' }),
  service_settings: InferenceNvidiaServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `nvidia` service.').meta({ found_in: 'body' }),
  task_settings: InferenceNvidiaTaskSettings.describe('Settings to configure the inference task. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutNvidiaRequest' })
export type InferencePutNvidiaRequest = z.infer<typeof InferencePutNvidiaRequest>

export const InferencePutNvidiaResponse = InferenceInferenceEndpointInfoNvidia.meta({ id: 'InferencePutNvidiaResponse' })
export type InferencePutNvidiaResponse = z.infer<typeof InferencePutNvidiaResponse>
