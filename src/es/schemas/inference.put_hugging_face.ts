/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceHuggingFaceServiceSettings = z.object({
  api_key: z.string().describe('A valid access token for your HuggingFace account. You can create or find your access tokens on the HuggingFace settings page. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Hugging Face. By default, the `hugging_face` service sets the number of requests allowed per minute to 3000 for all supported tasks. Hugging Face does not publish a universal rate limit — actual limits may vary. It is recommended to adjust this value based on the capacity and limits of your specific deployment environment.').optional(),
  url: z.string().describe('The URL endpoint to use for the requests. For `completion` and `chat_completion` tasks, the deployed model must be compatible with the Hugging Face Chat Completion interface (see the linked external documentation for details). The endpoint URL for the request must include `/v1/chat/completions`. If the model supports the OpenAI Chat Completion schema, a toggle should appear in the interface. Enabling this toggle doesn\'t change any model behavior, it reveals the full endpoint URL needed (which should include `/v1/chat/completions`) when configuring the inference endpoint in Elasticsearch. If the model doesn\'t support this schema, the toggle may not be shown.'),
  model_id: z.string().describe('The name of the HuggingFace model to use for the inference task. For `completion` and `chat_completion` tasks, this field is optional but may be required for certain models — particularly when using serverless inference endpoints. For the `text_embedding` task, this field should not be included. Otherwise, the request will fail.').optional()
}).meta({ id: 'InferenceHuggingFaceServiceSettings' })
export type InferenceHuggingFaceServiceSettings = z.infer<typeof InferenceHuggingFaceServiceSettings>

export const InferenceHuggingFaceServiceType = z.enum(['hugging_face']).meta({ id: 'InferenceHuggingFaceServiceType' })
export type InferenceHuggingFaceServiceType = z.infer<typeof InferenceHuggingFaceServiceType>

export const InferenceHuggingFaceTaskSettings = z.object({
  return_documents: z.boolean().describe('For a `rerank` task, return doc text within the results.').optional(),
  top_n: z.lazy(() => integer).describe('For a `rerank` task, the number of most relevant documents to return. It defaults to the number of the documents.').optional()
}).meta({ id: 'InferenceHuggingFaceTaskSettings' })
export type InferenceHuggingFaceTaskSettings = z.infer<typeof InferenceHuggingFaceTaskSettings>

export const InferenceHuggingFaceTaskType = z.enum(['chat_completion', 'completion', 'rerank', 'text_embedding']).meta({ id: 'InferenceHuggingFaceTaskType' })
export type InferenceHuggingFaceTaskType = z.infer<typeof InferenceHuggingFaceTaskType>

export const InferenceTaskTypeHuggingFace = z.enum(['chat_completion', 'completion', 'rerank', 'text_embedding']).meta({ id: 'InferenceTaskTypeHuggingFace' })
export type InferenceTaskTypeHuggingFace = z.infer<typeof InferenceTaskTypeHuggingFace>

export const InferenceInferenceEndpointInfoHuggingFace = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeHuggingFace.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoHuggingFace' })
export type InferenceInferenceEndpointInfoHuggingFace = z.infer<typeof InferenceInferenceEndpointInfoHuggingFace>

/**
 * Create a Hugging Face inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `hugging_face` service.
 * Supported tasks include: `text_embedding`, `completion`, and `chat_completion`.
 *
 * To configure the endpoint, first visit the Hugging Face Inference Endpoints page and create a new endpoint.
 * Select a model that supports the task you intend to use.
 *
 * For Elastic's `text_embedding` task:
 * The selected model must support the `Sentence Embeddings` task. On the new endpoint creation page, select the `Sentence Embeddings` task under the `Advanced Configuration` section.
 * After the endpoint has initialized, copy the generated endpoint URL.
 * Recommended models for `text_embedding` task:
 *
 * * `all-MiniLM-L6-v2`
 * * `all-MiniLM-L12-v2`
 * * `all-mpnet-base-v2`
 * * `e5-base-v2`
 * * `e5-small-v2`
 * * `multilingual-e5-base`
 * * `multilingual-e5-small`
 *
 * For Elastic's `chat_completion` and `completion` tasks:
 * The selected model must support the `Text Generation` task and expose OpenAI API. HuggingFace supports both serverless and dedicated endpoints for `Text Generation`. When creating dedicated endpoint select the `Text Generation` task.
 * After the endpoint is initialized (for dedicated) or ready (for serverless), ensure it supports the OpenAI API and includes `/v1/chat/completions` part in URL. Then, copy the full endpoint URL for use.
 * Recommended models for `chat_completion` and `completion` tasks:
 *
 * * `Mistral-7B-Instruct-v0.2`
 * * `QwQ-32B`
 * * `Phi-3-mini-128k-instruct`
 *
 * For Elastic's `rerank` task:
 * The selected model must support the `sentence-ranking` task and expose OpenAI API.
 * HuggingFace supports only dedicated (not serverless) endpoints for `Rerank` so far.
 * After the endpoint is initialized, copy the full endpoint URL for use.
 * Tested models for `rerank` task:
 *
 * * `bge-reranker-base`
 * * `jina-reranker-v1-turbo-en-GGUF`
 */
export const InferencePutHuggingFaceRequest = z.object({
  task_type: InferenceHuggingFaceTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  huggingface_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceHuggingFaceServiceType.describe('The type of service supported for the specified task type. In this case, `hugging_face`.').meta({ found_in: 'body' }),
  service_settings: InferenceHuggingFaceServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `hugging_face` service.').meta({ found_in: 'body' }),
  task_settings: InferenceHuggingFaceTaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutHuggingFaceRequest' })
export type InferencePutHuggingFaceRequest = z.infer<typeof InferencePutHuggingFaceRequest>

export const InferencePutHuggingFaceResponse = InferenceInferenceEndpointInfoHuggingFace.meta({ id: 'InferencePutHuggingFaceResponse' })
export type InferencePutHuggingFaceResponse = z.infer<typeof InferencePutHuggingFaceResponse>
