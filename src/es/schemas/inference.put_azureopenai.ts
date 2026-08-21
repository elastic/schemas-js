/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceAzureOpenAIServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your Azure OpenAI account. IMPORTANT: You must specify either `api_key`, `entra_id`, or `client_secret`. If you do not provide one or you provide more than one of them, you will receive an error when you try to create your endpoint.').optional(),
  api_version: z.string().describe('The Azure API version ID to use. It is recommended to use the latest supported non-preview version.'),
  client_id: z.string().describe('For OAuth 2.0 authorization using the client credentials grant flow. The application ID that\'s assigned to your app. IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `tenant_id`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  client_secret: z.string().describe('For OAuth 2.0 authorization using the client credentials grant flow. The application secret that you created in the Microsoft app registration portal for your app. IMPORTANT: You must specify either `api_key`, `entra_id`, or `client_secret`. If you do not provide one or you provide more than one of them, you will receive an error when you try to create your endpoint. IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `tenant_id`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  deployment_id: z.string().describe('The deployment name of your deployed models. Your Azure OpenAI deployments can be found though the Azure OpenAI Studio portal that is linked to your subscription.'),
  entra_id: z.string().describe('A valid Microsoft Entra token. IMPORTANT: You must specify either `api_key`, `entra_id`, or `client_secret`. If you do not provide one or you provide more than one of them, you will receive an error when you try to create your endpoint.').optional(),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Azure. The `azureopenai` service sets a default number of requests allowed per minute depending on the task type. For `text_embedding`, it is set to `1440`. For `completion` and `chat_completion`, it is set to `120`.').optional(),
  resource_name: z.string().describe('The name of your Azure OpenAI resource. You can find this from the list of resources in the Azure Portal for your subscription.'),
  scopes: z.array(z.string()).describe('For OAuth 2.0 authorization using the client credentials grant flow. The resource identifier (application ID URI) of the resource you want, suffixed with .default For example: ``` "scopes": [   "https://cognitiveservices.azure.com/.default" ] ``` IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `tenant_id`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional(),
  tenant_id: z.string().describe('For OAuth 2.0 authorization using the client credentials grant flow. The directory tenant the application plans to operate against. IMPORTANT: To configure OAuth 2.0, you must specify `client_id`, `scopes`, `tenant_id`, and `client_secret` together. If one of the fields is missing, you will receive an error when you try to create your endpoint.').optional()
}).meta({ id: 'InferenceAzureOpenAIServiceSettings' })
export type InferenceAzureOpenAIServiceSettings = z.infer<typeof InferenceAzureOpenAIServiceSettings>

export const InferenceAzureOpenAIServiceType = z.enum(['azureopenai']).meta({ id: 'InferenceAzureOpenAIServiceType' })
export type InferenceAzureOpenAIServiceType = z.infer<typeof InferenceAzureOpenAIServiceType>

export const InferenceAzureOpenAITaskSettings = z.object({
  user: z.string().describe('Specifies the user issuing the request. This information can be used for abuse detection.').optional(),
  headers: z.record(z.string(), z.string()).describe('Specifies custom HTTP header parameters. For example: ``` "headers": {   "Custom-Header": "Some-Value",   "Another-Custom-Header": "Another-Value" } ```').optional()
}).meta({ id: 'InferenceAzureOpenAITaskSettings' })
export type InferenceAzureOpenAITaskSettings = z.infer<typeof InferenceAzureOpenAITaskSettings>

export const InferenceAzureOpenAITaskType = z.enum(['completion', 'chat_completion', 'text_embedding']).meta({ id: 'InferenceAzureOpenAITaskType' })
export type InferenceAzureOpenAITaskType = z.infer<typeof InferenceAzureOpenAITaskType>

export const InferenceTaskTypeAzureOpenAI = z.enum(['text_embedding', 'completion', 'chat_completion']).meta({ id: 'InferenceTaskTypeAzureOpenAI' })
export type InferenceTaskTypeAzureOpenAI = z.infer<typeof InferenceTaskTypeAzureOpenAI>

export const InferenceInferenceEndpointInfoAzureOpenAI = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeAzureOpenAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoAzureOpenAI' })
export type InferenceInferenceEndpointInfoAzureOpenAI = z.infer<typeof InferenceInferenceEndpointInfoAzureOpenAI>

/**
 * Create an Azure OpenAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `azureopenai` service.
 *
 * The list of chat completion models that you can choose from in your Azure OpenAI deployment include:
 *
 * * [GPT-4 and GPT-4 Turbo models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#gpt-4-and-gpt-4-turbo-models)
 * * [GPT-3.5](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#gpt-35)
 *
 * The list of embeddings models that you can choose from in your deployment can be found in the [Azure models documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models?tabs=global-standard%2Cstandard-chat-completions#embeddings).
 */
export const InferencePutAzureopenaiRequest = z.object({
  task_type: InferenceAzureOpenAITaskType.describe('The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API.').meta({ found_in: 'path' }),
  azureopenai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` and `chat_completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceAzureOpenAIServiceType.describe('The type of service supported for the specified task type. In this case, `azureopenai`.').meta({ found_in: 'body' }),
  service_settings: InferenceAzureOpenAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `azureopenai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceAzureOpenAITaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutAzureopenaiRequest' })
export type InferencePutAzureopenaiRequest = z.infer<typeof InferencePutAzureopenaiRequest>

export const InferencePutAzureopenaiResponse = InferenceInferenceEndpointInfoAzureOpenAI.meta({ id: 'InferencePutAzureopenaiResponse' })
export type InferencePutAzureopenaiResponse = z.infer<typeof InferencePutAzureopenaiResponse>
