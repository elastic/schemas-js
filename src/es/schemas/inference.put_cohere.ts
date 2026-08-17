/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceCohereTruncateType, InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceCohereEmbeddingType = z.enum(['binary', 'bit', 'byte', 'float', 'int8']).meta({ id: 'InferenceCohereEmbeddingType' })
export type InferenceCohereEmbeddingType = z.infer<typeof InferenceCohereEmbeddingType>

export const InferenceCohereInputType = z.enum(['classification', 'clustering', 'ingest', 'search']).meta({ id: 'InferenceCohereInputType' })
export type InferenceCohereInputType = z.infer<typeof InferenceCohereInputType>

export const InferenceCohereSimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceCohereSimilarityType' })
export type InferenceCohereSimilarityType = z.infer<typeof InferenceCohereSimilarityType>

export const InferenceCohereServiceSettings = z.object({
  api_key: z.string().describe('A valid API key for your Cohere account. You can find or create your Cohere API keys on the Cohere API key settings page. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  embedding_type: InferenceCohereEmbeddingType.describe('For a `text_embedding` task, the types of embeddings you want to get back. Use `binary` for binary embeddings, which are encoded as bytes with signed int8 precision. Use `bit` for binary embeddings, which are encoded as bytes with signed int8 precision (this is a synonym of `binary`). Use `byte` for signed int8 embeddings (this is a synonym of `int8`). Use `float` for the default float embeddings. Use `int8` for signed int8 embeddings.').optional(),
  model_id: z.string().describe('For a `completion`, `rerank`, or `text_embedding` task, the name of the model to use for the inference task. * For the available `completion` models, refer to the [Cohere command docs](https://docs.cohere.com/docs/models#command). * For the available `rerank` models, refer to the [Cohere rerank docs](https://docs.cohere.com/reference/rerank-1). * For the available `text_embedding` models, refer to [Cohere embed docs](https://docs.cohere.com/reference/embed).'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from Cohere. By default, the `cohere` service sets the number of requests allowed per minute to 10000.').optional(),
  similarity: InferenceCohereSimilarityType.describe('The similarity measure. If the `embedding_type` is `float`, the default value is `dot_product`. If the `embedding_type` is `int8` or `byte`, the default value is `cosine`.').optional()
}).meta({ id: 'InferenceCohereServiceSettings' })
export type InferenceCohereServiceSettings = z.infer<typeof InferenceCohereServiceSettings>

export const InferenceCohereServiceType = z.enum(['cohere']).meta({ id: 'InferenceCohereServiceType' })
export type InferenceCohereServiceType = z.infer<typeof InferenceCohereServiceType>

export const InferenceCohereTaskSettings = z.object({
  input_type: InferenceCohereInputType.describe('For a `text_embedding` task, the type of input passed to the model. Valid values are: * `classification`: Use it for embeddings passed through a text classifier. * `clustering`: Use it for the embeddings run through a clustering algorithm. * `ingest`: Use it for storing document embeddings in a vector database. * `search`: Use it for storing embeddings of search queries run against a vector database to find relevant documents. IMPORTANT: The `input_type` field is required when using embedding models `v3` and higher.'),
  return_documents: z.boolean().describe('For a `rerank` task, return doc text within the results.').optional(),
  top_n: z.lazy(() => integer).describe('For a `rerank` task, the number of most relevant documents to return. It defaults to the number of the documents. If this inference endpoint is used in a `text_similarity_reranker` retriever query and `top_n` is set, it must be greater than or equal to `rank_window_size` in the query.').optional(),
  truncate: InferenceCohereTruncateType.describe('For a `text_embedding` task, the method to handle inputs longer than the maximum token length. Valid values are: * `END`: When the input exceeds the maximum input token length, the end of the input is discarded. * `NONE`: When the input exceeds the maximum input token length, an error is returned. * `START`: When the input exceeds the maximum input token length, the start of the input is discarded.').optional()
}).meta({ id: 'InferenceCohereTaskSettings' })
export type InferenceCohereTaskSettings = z.infer<typeof InferenceCohereTaskSettings>

export const InferenceCohereTaskType = z.enum(['completion', 'rerank', 'text_embedding']).meta({ id: 'InferenceCohereTaskType' })
export type InferenceCohereTaskType = z.infer<typeof InferenceCohereTaskType>

export const InferenceTaskTypeCohere = z.enum(['text_embedding', 'rerank', 'completion']).meta({ id: 'InferenceTaskTypeCohere' })
export type InferenceTaskTypeCohere = z.infer<typeof InferenceTaskTypeCohere>

export const InferenceInferenceEndpointInfoCohere = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeCohere.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoCohere' })
export type InferenceInferenceEndpointInfoCohere = z.infer<typeof InferenceInferenceEndpointInfoCohere>

/**
 * Create a Cohere inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `cohere` service.
 */
export const InferencePutCohereRequest = z.object({
  task_type: InferenceCohereTaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  cohere_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank` or `completion` task type.').optional().meta({ found_in: 'body' }),
  service: InferenceCohereServiceType.describe('The type of service supported for the specified task type. In this case, `cohere`.').meta({ found_in: 'body' }),
  service_settings: InferenceCohereServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `cohere` service.').meta({ found_in: 'body' }),
  task_settings: InferenceCohereTaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutCohereRequest' })
export type InferencePutCohereRequest = z.infer<typeof InferencePutCohereRequest>

export const InferencePutCohereResponse = InferenceInferenceEndpointInfoCohere.meta({ id: 'InferencePutCohereResponse' })
export type InferencePutCohereResponse = z.infer<typeof InferencePutCohereResponse>
