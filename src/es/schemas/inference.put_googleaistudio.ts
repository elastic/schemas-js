/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceGoogleAiServiceType = z.enum(['googleaistudio']).meta({ id: 'InferenceGoogleAiServiceType' })
export type InferenceGoogleAiServiceType = z.infer<typeof InferenceGoogleAiServiceType>

export const InferenceGoogleAiStudioServiceSettings = z.object({
  api_key: z.string().describe('A valid API key of your Google Gemini account.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the Google documentation for the list of supported models.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Google AI Studio. By default, the `googleaistudio` service sets the number of requests allowed per minute to 360.').optional()
}).meta({ id: 'InferenceGoogleAiStudioServiceSettings' })
export type InferenceGoogleAiStudioServiceSettings = z.infer<typeof InferenceGoogleAiStudioServiceSettings>

export const InferenceGoogleAiStudioTaskType = z.enum(['completion', 'text_embedding']).meta({ id: 'InferenceGoogleAiStudioTaskType' })
export type InferenceGoogleAiStudioTaskType = z.infer<typeof InferenceGoogleAiStudioTaskType>

export const InferenceTaskTypeGoogleAIStudio = z.enum(['text_embedding', 'completion']).meta({ id: 'InferenceTaskTypeGoogleAIStudio' })
export type InferenceTaskTypeGoogleAIStudio = z.infer<typeof InferenceTaskTypeGoogleAIStudio>

export const InferenceInferenceEndpointInfoGoogleAIStudio = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeGoogleAIStudio.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoGoogleAIStudio' })
export type InferenceInferenceEndpointInfoGoogleAIStudio = z.infer<typeof InferenceInferenceEndpointInfoGoogleAIStudio>

/**
 * Create an Google AI Studio inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `googleaistudio` service.
 */
export const InferencePutGoogleaistudioRequest = z.object({
  task_type: InferenceGoogleAiStudioTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  googleaistudio_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` task type.').optional().meta({ found_in: 'body' }),
  service: InferenceGoogleAiServiceType.describe('The type of service supported for the specified task type. In this case, `googleaistudio`.').meta({ found_in: 'body' }),
  service_settings: InferenceGoogleAiStudioServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `googleaistudio` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutGoogleaistudioRequest' })
export type InferencePutGoogleaistudioRequest = z.infer<typeof InferencePutGoogleaistudioRequest>

export const InferencePutGoogleaistudioResponse = InferenceInferenceEndpointInfoGoogleAIStudio.meta({ id: 'InferencePutGoogleaistudioResponse' })
export type InferencePutGoogleaistudioResponse = z.infer<typeof InferencePutGoogleaistudioResponse>
