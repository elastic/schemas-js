/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeOpenAI = z.enum(['text_embedding', 'chat_completion', 'completion', 'embedding']).meta({ id: 'InferenceTaskTypeOpenAI' })
export type InferenceTaskTypeOpenAI = z.infer<typeof InferenceTaskTypeOpenAI>

export const InferenceInferenceEndpointInfoOpenAI = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeOpenAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoOpenAI' })
export type InferenceInferenceEndpointInfoOpenAI = z.infer<typeof InferenceInferenceEndpointInfoOpenAI>

export const InferenceOpenAISimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceOpenAISimilarityType' })
export type InferenceOpenAISimilarityType = z.infer<typeof InferenceOpenAISimilarityType>

export const InferenceOpenAIServiceSettings = z.object({
  api_key: z.string().describe('A valid API key of your OpenAI account. You can find your OpenAI API keys in your OpenAI account under the API keys section. IMPORTANT: You must specify either `api_key` or `client_secret`. If you do not provide one or you provide more than one of them, you will receive an error when you try to create your endpoint.').optional(),
  client_id: z.string().describe('For OAuth 2.0 authorization using the client credentials grant flow. The application ID that\'s assigned to your app. IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `token_url`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  client_secret: z.string().describe('For OAuth 2.0 authorization using the client credentials grant flow. The application secret that you created for your app. IMPORTANT: You must specify either `api_key` or `client_secret`. If you do not provide one or you provide more than one of them, you will receive an error when you try to create your endpoint. IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `token_url`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  dimensions: z.lazy(() => integer).describe('For a `text_embedding` or `embedding` task, the number of dimensions the resulting output embeddings should have. It is supported only in `text-embedding-3` and later models. If it is not set, the OpenAI defined default for the model is used.').optional(),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the OpenAI documentation for the list of available text embedding models.'),
  organization_id: z.string().describe('The unique identifier for your organization. You can find the Organization ID in your OpenAI account under *Settings > Organizations*.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from OpenAI. The `openai` service sets a default number of requests allowed per minute depending on the task type. For `text_embedding` and `embedding`, it is set to `3000`. For `completion` and `chat_completion`, it is set to `500`.').optional(),
  scopes: z.array(z.string()).describe('For OAuth 2.0 authorization using the client credentials grant flow. The resource identifier of the resource you want. For example: ``` "scopes": [   "scope1",   "scope2" ] ``` IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `token_url`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  similarity: InferenceOpenAISimilarityType.describe('For a `text_embedding` or `embedding` task, the similarity measure. One of `cosine`, `dot_product`, `l2_norm`. Defaults to `dot_product`.').optional(),
  token_url: z.string().describe('For OAuth 2.0 authorization using the client credentials grant flow. An OAuth2 token endpoint where Elasticsearch sends a request to exchange client credentials for an access token. IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `token_url`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  url: z.string().describe('The URL endpoint to use for the requests. It can be changed for testing purposes. Default value is `https://api.openai.com/v1/embeddings` for a `text_embedding` or `embedding` task, `https://api.openai.com/v1/chat/completions` for a `completion` or `chat_completion` task.').optional()
}).meta({ id: 'InferenceOpenAIServiceSettings' })
export type InferenceOpenAIServiceSettings = z.infer<typeof InferenceOpenAIServiceSettings>

export const InferenceOpenAIServiceType = z.enum(['openai']).meta({ id: 'InferenceOpenAIServiceType' })
export type InferenceOpenAIServiceType = z.infer<typeof InferenceOpenAIServiceType>

export const InferenceOpenAITaskSettings = z.object({
  user: z.string().describe('Specifies the user issuing the request. This information can be used for abuse detection.').optional(),
  headers: z.record(z.string(), z.string()).describe('Specifies custom HTTP header parameters. For example: ``` "headers": {   "Custom-Header": "Some-Value",   "Another-Custom-Header": "Another-Value" } ```').optional()
}).meta({ id: 'InferenceOpenAITaskSettings' })
export type InferenceOpenAITaskSettings = z.infer<typeof InferenceOpenAITaskSettings>

export const InferenceOpenAITaskType = z.enum(['chat_completion', 'completion', 'text_embedding', 'embedding']).meta({ id: 'InferenceOpenAITaskType' })
export type InferenceOpenAITaskType = z.infer<typeof InferenceOpenAITaskType>

/**
 * Create an OpenAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `openai` service or `openai` compatible APIs.
 */
export const InferencePutOpenaiRequest = z.object({
  task_type: InferenceOpenAITaskType.describe('The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.').meta({ found_in: 'path' }),
  openai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceOpenAIServiceType.describe('The type of service supported for the specified task type. In this case, `openai`.').meta({ found_in: 'body' }),
  service_settings: InferenceOpenAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `openai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceOpenAITaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutOpenaiRequest' })
export type InferencePutOpenaiRequest = z.infer<typeof InferencePutOpenaiRequest>

export const InferencePutOpenaiResponse = InferenceInferenceEndpointInfoOpenAI.meta({ id: 'InferencePutOpenaiResponse' })
export type InferencePutOpenaiResponse = z.infer<typeof InferencePutOpenaiResponse>
