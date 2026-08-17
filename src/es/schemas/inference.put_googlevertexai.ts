/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceGoogleModelGardenProvider = z.enum(['google', 'anthropic', 'meta', 'hugging_face', 'mistral', 'ai21']).meta({ id: 'InferenceGoogleModelGardenProvider' })
export type InferenceGoogleModelGardenProvider = z.infer<typeof InferenceGoogleModelGardenProvider>

export const InferenceGoogleVertexAIServiceSettings = z.object({
  provider: InferenceGoogleModelGardenProvider.describe('The name of the Google Model Garden Provider for `completion` and `chat_completion` tasks. In order for a Google Model Garden endpoint to be used `provider` must be defined and be other than `google`. Modes: - Google Model Garden (third-party models): set `provider` to a supported non-`google` value and provide `url` and/or `streaming_url`. - Google Vertex AI: omit `provider` or set it to `google`. In this mode, do not set `url` or `streaming_url` and Elastic will construct the endpoint url from `location`, `model_id`, and `project_id` parameters.').optional(),
  url: z.string().describe('The URL for non-streaming `completion` requests to a Google Model Garden provider endpoint. If both `url` and `streaming_url` are provided, each is used for its respective mode. If `streaming_url` is not provided, `url` is also used for streaming `completion` and `chat_completion`. If `provider` is not provided or set to `google` (Google Vertex AI), do not set `url` (or `streaming_url`). At least one of `url` or `streaming_url` must be provided for Google Model Garden endpoint usage. Certain providers require separate URLs for streaming and non-streaming operations (e.g., Anthropic, Mistral, AI21). Others support both operation types through a single URL (e.g., Meta, Hugging Face). Information on constructing the URL for various providers can be found in the Google Model Garden documentation for the model, or on the endpoint’s `Sample request` page. The request examples also illustrate the proper formatting for the `url`.').optional(),
  streaming_url: z.string().describe('The URL for streaming `completion` and `chat_completion` requests to a Google Model Garden provider endpoint. If both `streaming_url` and `url` are provided, each is used for its respective mode. If `url` is not provided, `streaming_url` is also used for non-streaming `completion` requests. If `provider` is not provided or set to `google` (Google Vertex AI), do not set `streaming_url` (or `url`). At least one of `streaming_url` or `url` must be provided for Google Model Garden endpoint usage. Certain providers require separate URLs for streaming and non-streaming operations (e.g., Anthropic, Mistral, AI21). Others support both operation types through a single URL (e.g., Meta, Hugging Face). Information on constructing the URL for various providers can be found in the Google Model Garden documentation for the model, or on the endpoint’s `Sample request` page. The request examples also illustrate the proper formatting for the `streaming_url`.').optional(),
  location: z.string().describe('The name of the location to use for the inference task for the Google Vertex AI inference task. For Google Vertex AI, when `provider` is omitted or `google`, `location` is optional. When `location` is omitted, the request targets the Google Vertex AI global endpoint (`https://aiplatform.googleapis.com`); when it is provided, the corresponding regional endpoint (`https://<location>-aiplatform.googleapis.com`) is used. The field must be omitted to select the global endpoint; an empty string is not a valid `location`. For Google Model Garden\'s `completion` and `chat_completion` tasks, when `provider` is a supported non-`google` value - `location` is ignored. Refer to the Google documentation for the list of supported locations.').optional(),
  model_id: z.string().describe('The name of the model to use for the inference task. For Google Vertex AI `model_id` is mandatory. For Google Model Garden\'s `completion` and `chat_completion` tasks, when `provider` is a supported non-`google` value - `model_id` will be used for some providers that require it, otherwise - ignored. Refer to the Google documentation for the list of supported models for Google Vertex AI.').optional(),
  project_id: z.string().describe('The name of the project to use for the Google Vertex AI inference task. For Google Vertex AI `project_id` is mandatory. For Google Model Garden\'s `completion` and `chat_completion` tasks, when `provider` is a supported non-`google` value - `project_id` is ignored.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Google Vertex AI. By default, the `googlevertexai` service sets the number of requests allowed per minute to 30.000.').optional(),
  service_account_json: z.string().describe('A valid service account in JSON format for the Google Vertex AI API.'),
  dimensions: z.lazy(() => integer).describe('For a `text_embedding` task, the number of dimensions the resulting output embeddings should have. By default, the model\'s standard output dimension is used. Refer to the Google documentation for more information.').optional(),
  max_batch_size: z.lazy(() => integer).describe('Only applicable for the `text_embedding` task type. Controls the batch size of chunked inference requests sent to Google Vertex AI. Setting this parameter lower reduces the risk of exceeding token limits but may result in more API calls. Setting it higher increases throughput but may risk hitting token limits. To estimate a safe `max_batch_size` value, you can use it together with the `max_chunk_size` parameter using the following formula: `max_batch_size ≈ max_chunk_size × 1.3 × 512 ÷ 20000` Where: - `1.3` is an approximate tokens-per-word ratio - `512` is the maximum number of chunks that can be generated per document - `20000` is the Google Vertex AI token limit per request This estimate assumes the worst-case scenario with a document generating the maximum 512 chunks.').optional()
}).meta({ id: 'InferenceGoogleVertexAIServiceSettings' })
export type InferenceGoogleVertexAIServiceSettings = z.infer<typeof InferenceGoogleVertexAIServiceSettings>

export const InferenceGoogleVertexAIServiceType = z.enum(['googlevertexai']).meta({ id: 'InferenceGoogleVertexAIServiceType' })
export type InferenceGoogleVertexAIServiceType = z.infer<typeof InferenceGoogleVertexAIServiceType>

export const InferenceThinkingConfig = z.object({
  thinking_budget: z.lazy(() => integer).describe('Indicates the desired thinking budget in tokens.').optional()
}).meta({ id: 'InferenceThinkingConfig' })
export type InferenceThinkingConfig = z.infer<typeof InferenceThinkingConfig>

export const InferenceGoogleVertexAITaskSettings = z.object({
  auto_truncate: z.boolean().describe('For a `text_embedding` task, truncate inputs longer than the maximum token length automatically.').optional(),
  top_n: z.lazy(() => integer).describe('For a `rerank` task, the number of the top N documents that should be returned.').optional(),
  thinking_config: InferenceThinkingConfig.describe('For a `completion` or `chat_completion` task, allows configuration of the thinking features for the model. Refer to the Google documentation for the allowable configurations for each model type.').optional(),
  max_tokens: z.lazy(() => integer).describe('For `completion` and `chat_completion` tasks, specifies the `max_tokens` value for requests sent to the Google Model Garden `anthropic` provider. If `provider` is not set to `anthropic`, this field is ignored. If `max_tokens` is specified - it must be a positive integer. If not specified, the default value of 1024 is used. Anthropic models require `max_tokens` to be set for each request. Please refer to the Anthropic documentation for more information.').optional()
}).meta({ id: 'InferenceGoogleVertexAITaskSettings' })
export type InferenceGoogleVertexAITaskSettings = z.infer<typeof InferenceGoogleVertexAITaskSettings>

export const InferenceGoogleVertexAITaskType = z.enum(['rerank', 'text_embedding', 'completion', 'chat_completion']).meta({ id: 'InferenceGoogleVertexAITaskType' })
export type InferenceGoogleVertexAITaskType = z.infer<typeof InferenceGoogleVertexAITaskType>

export const InferenceTaskTypeGoogleVertexAI = z.enum(['chat_completion', 'completion', 'text_embedding', 'rerank']).meta({ id: 'InferenceTaskTypeGoogleVertexAI' })
export type InferenceTaskTypeGoogleVertexAI = z.infer<typeof InferenceTaskTypeGoogleVertexAI>

export const InferenceInferenceEndpointInfoGoogleVertexAI = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeGoogleVertexAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoGoogleVertexAI' })
export type InferenceInferenceEndpointInfoGoogleVertexAI = z.infer<typeof InferenceInferenceEndpointInfoGoogleVertexAI>

/**
 * Create a Google Vertex AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `googlevertexai` service.
 */
export const InferencePutGooglevertexaiRequest = z.object({
  task_type: InferenceGoogleVertexAITaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  googlevertexai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceGoogleVertexAIServiceType.describe('The type of service supported for the specified task type. In this case, `googlevertexai`.').meta({ found_in: 'body' }),
  service_settings: InferenceGoogleVertexAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `googlevertexai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceGoogleVertexAITaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutGooglevertexaiRequest' })
export type InferencePutGooglevertexaiRequest = z.infer<typeof InferencePutGooglevertexaiRequest>

export const InferencePutGooglevertexaiResponse = InferenceInferenceEndpointInfoGoogleVertexAI.meta({ id: 'InferencePutGooglevertexaiResponse' })
export type InferencePutGooglevertexaiResponse = z.infer<typeof InferencePutGooglevertexaiResponse>
