/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, float, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceAzureAiStudioServiceSettings = z.object({
  api_key: z.string().describe('A valid API key of your Azure AI Studio model deployment. This key can be found on the overview page for your deployment in the management section of your Azure AI Studio account. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  endpoint_type: z.string().describe('The type of endpoint that is available for deployment through Azure AI Studio: `token` or `realtime`. The `token` endpoint type is for "pay as you go" endpoints that are billed per token. The `realtime` endpoint type is for "real-time" endpoints that are billed per hour of usage.'),
  target: z.string().describe('The target URL of your Azure AI Studio model deployment. This can be found on the overview page for your deployment in the management section of your Azure AI Studio account.'),
  provider: z.string().describe('The model provider for your deployment. Note that some providers may support only certain task types. Supported providers include: * `cohere` - available for `text_embedding`, `rerank` and `completion` task types * `databricks` - available for `completion` task type only * `meta` - available for `completion` task type only * `microsoft_phi` - available for `completion` task type only * `mistral` - available for `completion` task type only * `openai` - available for `text_embedding` and `completion` task types'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Azure AI Studio. By default, the `azureaistudio` service sets the number of requests allowed per minute to 240.').optional()
}).meta({ id: 'InferenceAzureAiStudioServiceSettings' })
export type InferenceAzureAiStudioServiceSettings = z.infer<typeof InferenceAzureAiStudioServiceSettings>

export const InferenceAzureAiStudioServiceType = z.enum(['azureaistudio']).meta({ id: 'InferenceAzureAiStudioServiceType' })
export type InferenceAzureAiStudioServiceType = z.infer<typeof InferenceAzureAiStudioServiceType>

export const InferenceAzureAiStudioTaskSettings = z.object({
  do_sample: z.lazy(() => float).describe('For a `completion` task, instruct the inference process to perform sampling. It has no effect unless `temperature` or `top_p` is specified.').optional(),
  max_new_tokens: z.lazy(() => integer).describe('For a `completion` task, provide a hint for the maximum number of output tokens to be generated.').optional(),
  temperature: z.lazy(() => float).describe('For a `completion` task, control the apparent creativity of generated completions with a sampling temperature. It must be a number in the range of 0.0 to 2.0. It should not be used if `top_p` is specified.').optional(),
  top_p: z.lazy(() => float).describe('For a `completion` task, make the model consider the results of the tokens with nucleus sampling probability. It is an alternative value to `temperature` and must be a number in the range of 0.0 to 2.0. It should not be used if `temperature` is specified.').optional(),
  user: z.string().describe('For a `text_embedding` task, specify the user issuing the request. This information can be used for abuse detection.').optional(),
  return_documents: z.boolean().describe('For a `rerank` task, return doc text within the results.').optional(),
  top_n: z.lazy(() => integer).describe('For a `rerank` task, the number of most relevant documents to return. It defaults to the number of the documents.').optional()
}).meta({ id: 'InferenceAzureAiStudioTaskSettings' })
export type InferenceAzureAiStudioTaskSettings = z.infer<typeof InferenceAzureAiStudioTaskSettings>

export const InferenceAzureAiStudioTaskType = z.enum(['completion', 'rerank', 'text_embedding']).meta({ id: 'InferenceAzureAiStudioTaskType' })
export type InferenceAzureAiStudioTaskType = z.infer<typeof InferenceAzureAiStudioTaskType>

export const InferenceTaskTypeAzureAIStudio = z.enum(['text_embedding', 'completion', 'rerank']).meta({ id: 'InferenceTaskTypeAzureAIStudio' })
export type InferenceTaskTypeAzureAIStudio = z.infer<typeof InferenceTaskTypeAzureAIStudio>

export const InferenceInferenceEndpointInfoAzureAIStudio = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeAzureAIStudio.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoAzureAIStudio' })
export type InferenceInferenceEndpointInfoAzureAIStudio = z.infer<typeof InferenceInferenceEndpointInfoAzureAIStudio>

/**
 * Create an Azure AI studio inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `azureaistudio` service.
 */
export const InferencePutAzureaistudioRequest = z.object({
  task_type: InferenceAzureAiStudioTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  azureaistudio_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank` or `completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceAzureAiStudioServiceType.describe('The type of service supported for the specified task type. In this case, `azureaistudio`.').meta({ found_in: 'body' }),
  service_settings: InferenceAzureAiStudioServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `azureaistudio` service.').meta({ found_in: 'body' }),
  task_settings: InferenceAzureAiStudioTaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutAzureaistudioRequest' })
export type InferencePutAzureaistudioRequest = z.infer<typeof InferencePutAzureaistudioRequest>

export const InferencePutAzureaistudioResponse = InferenceInferenceEndpointInfoAzureAIStudio.meta({ id: 'InferencePutAzureaistudioResponse' })
export type InferencePutAzureaistudioResponse = z.infer<typeof InferencePutAzureaistudioResponse>
