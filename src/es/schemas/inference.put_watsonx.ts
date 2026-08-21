/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeWatsonx = z.enum(['text_embedding', 'chat_completion', 'completion']).meta({ id: 'InferenceTaskTypeWatsonx' })
export type InferenceTaskTypeWatsonx = z.infer<typeof InferenceTaskTypeWatsonx>

export const InferenceInferenceEndpointInfoWatsonx = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeWatsonx.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoWatsonx' })
export type InferenceInferenceEndpointInfoWatsonx = z.infer<typeof InferenceInferenceEndpointInfoWatsonx>

export const InferenceWatsonxServiceSettings = z.object({
  api_key: z.string().describe('A valid API key of your Watsonx account. You can find your Watsonx API keys or you can create a new one on the API keys page. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  api_version: z.string().describe('A version parameter that takes a version date in the format of `YYYY-MM-DD`. For the active version data parameters, refer to the Wastonx documentation.'),
  model_id: z.string().describe('The name of the model to use for the inference task. Refer to the IBM Embedding Models section in the Watsonx documentation for the list of available text embedding models. Refer to the IBM library - Foundation models in Watsonx.ai.'),
  project_id: z.string().describe('The identifier of the IBM Cloud project to use for the inference task.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Watsonx. By default, the `watsonxai` service sets the number of requests allowed per minute to 120.').optional(),
  url: z.string().describe('The URL of the inference endpoint that you created on Watsonx.')
}).meta({ id: 'InferenceWatsonxServiceSettings' })
export type InferenceWatsonxServiceSettings = z.infer<typeof InferenceWatsonxServiceSettings>

export const InferenceWatsonxServiceType = z.enum(['watsonxai']).meta({ id: 'InferenceWatsonxServiceType' })
export type InferenceWatsonxServiceType = z.infer<typeof InferenceWatsonxServiceType>

export const InferenceWatsonxTaskType = z.enum(['text_embedding', 'rerank', 'chat_completion', 'completion']).meta({ id: 'InferenceWatsonxTaskType' })
export type InferenceWatsonxTaskType = z.infer<typeof InferenceWatsonxTaskType>

/**
 * Create a Watsonx inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `watsonxai` service.
 * You need an IBM Cloud Databases for Elasticsearch deployment to use the `watsonxai` inference service.
 * You can provision one through the IBM catalog, the Cloud Databases CLI plug-in, the Cloud Databases API, or Terraform.
 */
export const InferencePutWatsonxRequest = z.object({
  task_type: InferenceWatsonxTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  watsonx_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion` or `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceWatsonxServiceType.describe('The type of service supported for the specified task type. In this case, `watsonxai`.').meta({ found_in: 'body' }),
  service_settings: InferenceWatsonxServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `watsonxai` service.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutWatsonxRequest' })
export type InferencePutWatsonxRequest = z.infer<typeof InferencePutWatsonxRequest>

export const InferencePutWatsonxResponse = InferenceInferenceEndpointInfoWatsonx.meta({ id: 'InferencePutWatsonxResponse' })
export type InferencePutWatsonxResponse = z.infer<typeof InferencePutWatsonxResponse>
