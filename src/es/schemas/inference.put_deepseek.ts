/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceEndpoint } from './inference.js'

export const InferenceDeepSeekServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your DeepSeek account. You can find or create your DeepSeek API keys on the DeepSeek API key page. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  model_id: z.string().describe('For a `completion` or `chat_completion` task, the name of the model to use for the inference task. For the available `completion` and `chat_completion` models, refer to the [DeepSeek Models & Pricing docs](https://api-docs.deepseek.com/quick_start/pricing).'),
  url: z.string().describe('The URL endpoint to use for the requests. Defaults to `https://api.deepseek.com/chat/completions`.').optional()
}).meta({ id: 'InferenceDeepSeekServiceSettings' })
export type InferenceDeepSeekServiceSettings = z.infer<typeof InferenceDeepSeekServiceSettings>

export const InferenceDeepSeekServiceType = z.enum(['deepseek']).meta({ id: 'InferenceDeepSeekServiceType' })
export type InferenceDeepSeekServiceType = z.infer<typeof InferenceDeepSeekServiceType>

export const InferenceTaskTypeDeepSeek = z.enum(['completion', 'chat_completion']).meta({ id: 'InferenceTaskTypeDeepSeek' })
export type InferenceTaskTypeDeepSeek = z.infer<typeof InferenceTaskTypeDeepSeek>

export const InferenceInferenceEndpointInfoDeepSeek = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeDeepSeek.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoDeepSeek' })
export type InferenceInferenceEndpointInfoDeepSeek = z.infer<typeof InferenceInferenceEndpointInfoDeepSeek>

/**
 * Create a DeepSeek inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `deepseek` service.
 */
export const InferencePutDeepseekRequest = z.object({
  task_type: InferenceTaskTypeDeepSeek.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  deepseek_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  service: InferenceDeepSeekServiceType.describe('The type of service supported for the specified task type. In this case, `deepseek`.').meta({ found_in: 'body' }),
  service_settings: InferenceDeepSeekServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `deepseek` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutDeepseekRequest' })
export type InferencePutDeepseekRequest = z.infer<typeof InferencePutDeepseekRequest>

export const InferencePutDeepseekResponse = InferenceInferenceEndpointInfoDeepSeek.meta({ id: 'InferencePutDeepseekResponse' })
export type InferencePutDeepseekResponse = z.infer<typeof InferencePutDeepseekResponse>
