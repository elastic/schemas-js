/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceAi21ServiceSettings = z.object({
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the AI21 models documentation for the list of supported models and versions. Service has been tested and confirmed to be working for `completion` and `chat_completion` tasks with the following models: * `jamba-mini` * `jamba-large`'),
  api_key: z.string().describe('A valid API key for accessing AI21 API. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the AI21 API. By default, the `ai21` service sets the number of requests allowed per minute to 200. Please refer to AI21 documentation for more details.').optional()
}).meta({ id: 'InferenceAi21ServiceSettings' })
export type InferenceAi21ServiceSettings = z.infer<typeof InferenceAi21ServiceSettings>

export const InferenceAi21ServiceType = z.enum(['ai21']).meta({ id: 'InferenceAi21ServiceType' })
export type InferenceAi21ServiceType = z.infer<typeof InferenceAi21ServiceType>

export const InferenceAi21TaskType = z.enum(['completion', 'chat_completion']).meta({ id: 'InferenceAi21TaskType' })
export type InferenceAi21TaskType = z.infer<typeof InferenceAi21TaskType>

export const InferenceTaskTypeAi21 = z.enum(['completion', 'chat_completion']).meta({ id: 'InferenceTaskTypeAi21' })
export type InferenceTaskTypeAi21 = z.infer<typeof InferenceTaskTypeAi21>

export const InferenceInferenceEndpointInfoAi21 = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeAi21.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoAi21' })
export type InferenceInferenceEndpointInfoAi21 = z.infer<typeof InferenceInferenceEndpointInfoAi21>

/**
 * Create a AI21 inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `ai21` service.
 */
export const InferencePutAi21Request = z.object({
  task_type: InferenceAi21TaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  ai21_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  service: InferenceAi21ServiceType.describe('The type of service supported for the specified task type. In this case, `ai21`.').meta({ found_in: 'body' }),
  service_settings: InferenceAi21ServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `ai21` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutAi21Request' })
export type InferencePutAi21Request = z.infer<typeof InferencePutAi21Request>

export const InferencePutAi21Response = InferenceInferenceEndpointInfoAi21.meta({ id: 'InferencePutAi21Response' })
export type InferencePutAi21Response = z.infer<typeof InferencePutAi21Response>
