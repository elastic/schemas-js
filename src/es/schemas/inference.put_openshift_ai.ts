/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeOpenShiftAi = z.enum(['text_embedding', 'chat_completion', 'completion', 'rerank']).meta({ id: 'InferenceTaskTypeOpenShiftAi' })
export type InferenceTaskTypeOpenShiftAi = z.infer<typeof InferenceTaskTypeOpenShiftAi>

export const InferenceInferenceEndpointInfoOpenShiftAi = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeOpenShiftAi.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoOpenShiftAi' })
export type InferenceInferenceEndpointInfoOpenShiftAi = z.infer<typeof InferenceInferenceEndpointInfoOpenShiftAi>

export const InferenceOpenShiftAiSimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceOpenShiftAiSimilarityType' })
export type InferenceOpenShiftAiSimilarityType = z.infer<typeof InferenceOpenShiftAiSimilarityType>

export const InferenceOpenShiftAiServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your OpenShift AI endpoint. Can be found in `Token authentication` section of model related information.'),
  url: z.string().describe('The URL of the OpenShift AI hosted model endpoint.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the hosted model\'s documentation for the name if needed. Service has been tested and confirmed to be working with the following models: * For `text_embedding` task - `gritlm-7b`. * For `completion` and `chat_completion` tasks - `llama-31-8b-instruct`. * For `rerank` task - `bge-reranker-v2-m3`.').optional(),
  max_input_tokens: z.lazy(() => integer).describe('For a `text_embedding` task, the maximum number of tokens per input before chunking occurs.').optional(),
  similarity: InferenceOpenShiftAiSimilarityType.describe('For a `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm. If not specified, the default dot_product value is used.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the OpenShift AI API. By default, the `openshift_ai` service sets the number of requests allowed per minute to 3000.').optional()
}).meta({ id: 'InferenceOpenShiftAiServiceSettings' })
export type InferenceOpenShiftAiServiceSettings = z.infer<typeof InferenceOpenShiftAiServiceSettings>

export const InferenceOpenShiftAiServiceType = z.enum(['openshift_ai']).meta({ id: 'InferenceOpenShiftAiServiceType' })
export type InferenceOpenShiftAiServiceType = z.infer<typeof InferenceOpenShiftAiServiceType>

export const InferenceOpenShiftAiTaskSettings = z.object({
  return_documents: z.boolean().describe('For a `rerank` task, whether to return the source documents in the response.').optional(),
  top_n: z.lazy(() => integer).describe('For a `rerank` task, the number of most relevant documents to return.').optional()
}).meta({ id: 'InferenceOpenShiftAiTaskSettings' })
export type InferenceOpenShiftAiTaskSettings = z.infer<typeof InferenceOpenShiftAiTaskSettings>

export const InferenceOpenShiftAiTaskType = z.enum(['text_embedding', 'completion', 'chat_completion', 'rerank']).meta({ id: 'InferenceOpenShiftAiTaskType' })
export type InferenceOpenShiftAiTaskType = z.infer<typeof InferenceOpenShiftAiTaskType>

/**
 * Create an OpenShift AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `openshift_ai` service.
 */
export const InferencePutOpenshiftAiRequest = z.object({
  task_type: InferenceOpenShiftAiTaskType.describe('The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.').meta({ found_in: 'path' }),
  openshiftai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceOpenShiftAiServiceType.describe('The type of service supported for the specified task type. In this case, `openshift_ai`.').meta({ found_in: 'body' }),
  service_settings: InferenceOpenShiftAiServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `openshift_ai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceOpenShiftAiTaskSettings.describe('Settings to configure the inference task. Applies only to the `rerank` task type. Not applicable to the `text_embedding`, `completion`, or `chat_completion` task types. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutOpenshiftAiRequest' })
export type InferencePutOpenshiftAiRequest = z.infer<typeof InferencePutOpenshiftAiRequest>

export const InferencePutOpenshiftAiResponse = InferenceInferenceEndpointInfoOpenShiftAi.meta({ id: 'InferencePutOpenshiftAiResponse' })
export type InferencePutOpenshiftAiResponse = z.infer<typeof InferencePutOpenshiftAiResponse>
