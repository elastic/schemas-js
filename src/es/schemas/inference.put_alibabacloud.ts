/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceAlibabaCloudServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for the AlibabaCloud AI Search API.'),
  host: z.string().describe('The name of the host address used for the inference task. You can find the host address in the API keys section of the documentation.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from AlibabaCloud AI Search. By default, the `alibabacloud-ai-search` service sets the number of requests allowed per minute to `1000`.').optional(),
  service_id: z.string().describe('The name of the model service to use for the inference task. The following service IDs are available for the `completion` task: * `ops-qwen-turbo` * `qwen-turbo` * `qwen-plus` * `qwen-max ÷ qwen-max-longcontext` The following service ID is available for the `rerank` task: * `ops-bge-reranker-larger` The following service ID is available for the `sparse_embedding` task: * `ops-text-sparse-embedding-001` The following service IDs are available for the `text_embedding` task: `ops-text-embedding-001` `ops-text-embedding-zh-001` `ops-text-embedding-en-001` `ops-text-embedding-002`'),
  workspace: z.string().describe('The name of the workspace used for the inference task.')
}).meta({ id: 'InferenceAlibabaCloudServiceSettings' })
export type InferenceAlibabaCloudServiceSettings = z.infer<typeof InferenceAlibabaCloudServiceSettings>

export const InferenceAlibabaCloudServiceType = z.enum(['alibabacloud-ai-search']).meta({ id: 'InferenceAlibabaCloudServiceType' })
export type InferenceAlibabaCloudServiceType = z.infer<typeof InferenceAlibabaCloudServiceType>

export const InferenceAlibabaCloudTaskSettings = z.object({
  input_type: z.string().describe('For a `sparse_embedding` or `text_embedding` task, specify the type of input passed to the model. Valid values are: * `ingest` for storing document embeddings in a vector database. * `search` for storing embeddings of search queries run against a vector database to find relevant documents.').optional(),
  return_token: z.boolean().describe('For a `sparse_embedding` task, it affects whether the token name will be returned in the response. It defaults to `false`, which means only the token ID will be returned in the response.').optional()
}).meta({ id: 'InferenceAlibabaCloudTaskSettings' })
export type InferenceAlibabaCloudTaskSettings = z.infer<typeof InferenceAlibabaCloudTaskSettings>

export const InferenceAlibabaCloudTaskType = z.enum(['completion', 'rerank', 'sparse_embedding', 'text_embedding']).meta({ id: 'InferenceAlibabaCloudTaskType' })
export type InferenceAlibabaCloudTaskType = z.infer<typeof InferenceAlibabaCloudTaskType>

export const InferenceTaskTypeAlibabaCloudAI = z.enum(['text_embedding', 'rerank', 'completion', 'sparse_embedding']).meta({ id: 'InferenceTaskTypeAlibabaCloudAI' })
export type InferenceTaskTypeAlibabaCloudAI = z.infer<typeof InferenceTaskTypeAlibabaCloudAI>

export const InferenceInferenceEndpointInfoAlibabaCloudAI = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeAlibabaCloudAI.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoAlibabaCloudAI' })
export type InferenceInferenceEndpointInfoAlibabaCloudAI = z.infer<typeof InferenceInferenceEndpointInfoAlibabaCloudAI>

/**
 * Create an AlibabaCloud AI Search inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `alibabacloud-ai-search` service.
 */
export const InferencePutAlibabacloudRequest = z.object({
  task_type: InferenceAlibabaCloudTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  alibabacloud_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `sparse_embedding` or `text_embedding` task types. Not applicable to the `rerank` or `completion` task types.').optional().meta({ found_in: 'body' }),
  service: InferenceAlibabaCloudServiceType.describe('The type of service supported for the specified task type. In this case, `alibabacloud-ai-search`.').meta({ found_in: 'body' }),
  service_settings: InferenceAlibabaCloudServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `alibabacloud-ai-search` service.').meta({ found_in: 'body' }),
  task_settings: InferenceAlibabaCloudTaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutAlibabacloudRequest' })
export type InferencePutAlibabacloudRequest = z.infer<typeof InferencePutAlibabacloudRequest>

export const InferencePutAlibabacloudResponse = InferenceInferenceEndpointInfoAlibabaCloudAI.meta({ id: 'InferencePutAlibabacloudResponse' })
export type InferencePutAlibabacloudResponse = z.infer<typeof InferencePutAlibabacloudResponse>
