/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeMistral = z.enum(['text_embedding', 'chat_completion', 'completion']).meta({ id: 'InferenceTaskTypeMistral' })
export type InferenceTaskTypeMistral = z.infer<typeof InferenceTaskTypeMistral>

export const InferenceInferenceEndpointInfoMistral = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeMistral.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoMistral' })
export type InferenceInferenceEndpointInfoMistral = z.infer<typeof InferenceInferenceEndpointInfoMistral>

export const InferenceMistralServiceSettings = z.object({
  api_key: z.string().describe('A valid API key of your Mistral account. You can find your Mistral API keys or you can create a new one on the API Keys page. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  max_input_tokens: z.lazy(() => integer).describe('The maximum number of tokens per input before chunking occurs.').optional(),
  model: z.string().describe('The name of the model to use for the inference task. Refer to the Mistral models documentation for the list of available models.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from the Mistral API. By default, the `mistral` service sets the number of requests allowed per minute to 240.').optional()
}).meta({ id: 'InferenceMistralServiceSettings' })
export type InferenceMistralServiceSettings = z.infer<typeof InferenceMistralServiceSettings>

export const InferenceMistralServiceType = z.enum(['mistral']).meta({ id: 'InferenceMistralServiceType' })
export type InferenceMistralServiceType = z.infer<typeof InferenceMistralServiceType>

export const InferenceMistralTaskType = z.enum(['text_embedding', 'completion', 'chat_completion']).meta({ id: 'InferenceMistralTaskType' })
export type InferenceMistralTaskType = z.infer<typeof InferenceMistralTaskType>

/**
 * Create a Mistral inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `mistral` service.
 */
export const InferencePutMistralRequest = z.object({
  task_type: InferenceMistralTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  mistral_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceMistralServiceType.describe('The type of service supported for the specified task type. In this case, `mistral`.').meta({ found_in: 'body' }),
  service_settings: InferenceMistralServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `mistral` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutMistralRequest' })
export type InferencePutMistralRequest = z.infer<typeof InferencePutMistralRequest>

export const InferencePutMistralResponse = InferenceInferenceEndpointInfoMistral.meta({ id: 'InferencePutMistralResponse' })
export type InferencePutMistralResponse = z.infer<typeof InferencePutMistralResponse>
