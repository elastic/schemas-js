/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceGroqServiceSettings = z.object({
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the Groq model documentation for the list of supported models and versions. Service has been tested and confirmed to be working for `completion` and `chat_completion` tasks with the following models: * `llama-3.3-70b-versatile`'),
  api_key: z.string().describe('A valid API key for accessing Groq API. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the Groq API. By default, the `groq` service sets the number of requests allowed per minute to 1000. Refer to Groq documentation for more details.').optional()
}).meta({ id: 'InferenceGroqServiceSettings' })
export type InferenceGroqServiceSettings = z.infer<typeof InferenceGroqServiceSettings>

export const InferenceGroqServiceType = z.enum(['groq']).meta({ id: 'InferenceGroqServiceType' })
export type InferenceGroqServiceType = z.infer<typeof InferenceGroqServiceType>

export const InferenceGroqTaskType = z.enum(['chat_completion']).meta({ id: 'InferenceGroqTaskType' })
export type InferenceGroqTaskType = z.infer<typeof InferenceGroqTaskType>

export const InferenceTaskTypeGroq = z.enum(['chat_completion']).meta({ id: 'InferenceTaskTypeGroq' })
export type InferenceTaskTypeGroq = z.infer<typeof InferenceTaskTypeGroq>

export const InferenceInferenceEndpointInfoGroq = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeGroq.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoGroq' })
export type InferenceInferenceEndpointInfoGroq = z.infer<typeof InferenceInferenceEndpointInfoGroq>

/**
 * Create a Groq inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `groq` service.
 */
export const InferencePutGroqRequest = z.object({
  task_type: InferenceGroqTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  groq_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  service: InferenceGroqServiceType.describe('The type of service supported for the specified task type. In this case, `groq`.').meta({ found_in: 'body' }),
  service_settings: InferenceGroqServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `groq` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutGroqRequest' })
export type InferencePutGroqRequest = z.infer<typeof InferencePutGroqRequest>

export const InferencePutGroqResponse = InferenceInferenceEndpointInfoGroq.meta({ id: 'InferencePutGroqResponse' })
export type InferencePutGroqResponse = z.infer<typeof InferencePutGroqResponse>
