/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceContextualAIServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your Contexutual AI account. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the Contextual AI documentation for the list of available rerank models.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Contextual AI. The `contextualai` service sets a default number of requests allowed per minute depending on the task type. For `rerank`, it is set to `1000`.').optional()
}).meta({ id: 'InferenceContextualAIServiceSettings' })
export type InferenceContextualAIServiceSettings = z.infer<typeof InferenceContextualAIServiceSettings>

export const InferenceContextualAIServiceType = z.enum(['contextualai']).meta({ id: 'InferenceContextualAIServiceType' })
export type InferenceContextualAIServiceType = z.infer<typeof InferenceContextualAIServiceType>

export const InferenceContextualAITaskSettings = z.object({
  instruction: z.string().describe('Instructions for the reranking model. Refer to <https://docs.contextual.ai/api-reference/rerank/rerank#body-instruction> Only for the `rerank` task type.').optional(),
  top_k: z.lazy(() => integer).describe('The number of most relevant documents to return. If not specified, the reranking results of all documents will be returned. Only for the `rerank` task type.').optional()
}).meta({ id: 'InferenceContextualAITaskSettings' })
export type InferenceContextualAITaskSettings = z.infer<typeof InferenceContextualAITaskSettings>

export const InferenceTaskTypeContextualAI = z.enum(['rerank']).meta({ id: 'InferenceTaskTypeContextualAI' })
export type InferenceTaskTypeContextualAI = z.infer<typeof InferenceTaskTypeContextualAI>

export const InferenceInferenceEndpointInfoContextualAi = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeContextualAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoContextualAi' })
export type InferenceInferenceEndpointInfoContextualAi = z.infer<typeof InferenceInferenceEndpointInfoContextualAi>

/**
 * Create an Contextual AI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `contexualai` service.
 *
 * To review the available `rerank` models, refer to <https://docs.contextual.ai/api-reference/rerank/rerank#body-model>.
 */
export const InferencePutContextualaiRequest = z.object({
  task_type: InferenceTaskTypeContextualAI.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  contextualai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  service: InferenceContextualAIServiceType.describe('The type of service supported for the specified task type. In this case, `contextualai`.').meta({ found_in: 'body' }),
  service_settings: InferenceContextualAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `contextualai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceContextualAITaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutContextualaiRequest' })
export type InferencePutContextualaiRequest = z.infer<typeof InferencePutContextualaiRequest>

export const InferencePutContextualaiResponse = InferenceInferenceEndpointInfoContextualAi.meta({ id: 'InferencePutContextualaiResponse' })
export type InferencePutContextualaiResponse = z.infer<typeof InferencePutContextualaiResponse>
