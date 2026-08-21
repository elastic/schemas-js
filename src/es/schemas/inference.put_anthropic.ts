/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, float, integer } from './_types.js'
import { InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceAnthropicServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for the Anthropic API.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the Anthropic documentation for the list of supported models.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Anthropic. By default, the `anthropic` service sets the number of requests allowed per minute to 50.').optional()
}).meta({ id: 'InferenceAnthropicServiceSettings' })
export type InferenceAnthropicServiceSettings = z.infer<typeof InferenceAnthropicServiceSettings>

export const InferenceAnthropicServiceType = z.enum(['anthropic']).meta({ id: 'InferenceAnthropicServiceType' })
export type InferenceAnthropicServiceType = z.infer<typeof InferenceAnthropicServiceType>

export const InferenceAnthropicTaskSettings = z.object({
  max_tokens: z.lazy(() => integer).describe('For a `completion` or `chat_completion` task, it is the maximum number of tokens to generate before stopping.'),
  temperature: z.lazy(() => float).describe('For a `completion` or `chat_completion` task, it is the amount of randomness injected into the response. For more details about the supported range, refer to Anthropic documentation.').optional(),
  top_k: z.lazy(() => integer).describe('For a `completion` or `chat_completion` task, it specifies to only sample from the top K options for each subsequent token. It is recommended for advanced use cases only. You usually only need to use `temperature`.').optional(),
  top_p: z.lazy(() => float).describe('For a `completion` or `chat_completion` task, it specifies to use Anthropic\'s nucleus sampling. In nucleus sampling, Anthropic computes the cumulative distribution over all the options for each subsequent token in decreasing probability order and cuts it off once it reaches the specified probability. You should either alter `temperature` or `top_p`, but not both. It is recommended for advanced use cases only. You usually only need to use `temperature`.').optional()
}).meta({ id: 'InferenceAnthropicTaskSettings' })
export type InferenceAnthropicTaskSettings = z.infer<typeof InferenceAnthropicTaskSettings>

export const InferenceAnthropicTaskType = z.enum(['completion', 'chat_completion']).meta({ id: 'InferenceAnthropicTaskType' })
export type InferenceAnthropicTaskType = z.infer<typeof InferenceAnthropicTaskType>

export const InferenceTaskTypeAnthropic = z.enum(['completion', 'chat_completion']).meta({ id: 'InferenceTaskTypeAnthropic' })
export type InferenceTaskTypeAnthropic = z.infer<typeof InferenceTaskTypeAnthropic>

export const InferenceInferenceEndpointInfoAnthropic = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeAnthropic.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoAnthropic' })
export type InferenceInferenceEndpointInfoAnthropic = z.infer<typeof InferenceInferenceEndpointInfoAnthropic>

/**
 * Create an Anthropic inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `anthropic` service.
 */
export const InferencePutAnthropicRequest = z.object({
  task_type: InferenceAnthropicTaskType.describe('The task type. The valid task types for the model to perform are `completion` and `chat_completion`. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.').meta({ found_in: 'path' }),
  anthropic_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  service: InferenceAnthropicServiceType.describe('The type of service supported for the specified task type. In this case, `anthropic`.').meta({ found_in: 'body' }),
  service_settings: InferenceAnthropicServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `anthropic` service.').meta({ found_in: 'body' }),
  task_settings: InferenceAnthropicTaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutAnthropicRequest' })
export type InferencePutAnthropicRequest = z.infer<typeof InferencePutAnthropicRequest>

export const InferencePutAnthropicResponse = InferenceInferenceEndpointInfoAnthropic.meta({ id: 'InferencePutAnthropicResponse' })
export type InferencePutAnthropicResponse = z.infer<typeof InferencePutAnthropicResponse>
