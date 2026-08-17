/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceInferenceChunkingSettings, InferenceInferenceEndpoint, InferenceRateLimitSetting } from './inference.js'

export const InferenceTaskTypeJinaAi = z.enum(['embedding', 'text_embedding', 'rerank']).meta({ id: 'InferenceTaskTypeJinaAi' })
export type InferenceTaskTypeJinaAi = z.infer<typeof InferenceTaskTypeJinaAi>

export const InferenceInferenceEndpointInfoJinaAi = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskTypeJinaAi.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfoJinaAi' })
export type InferenceInferenceEndpointInfoJinaAi = z.infer<typeof InferenceInferenceEndpointInfoJinaAi>

export const InferenceJinaAIElementType = z.enum(['binary', 'bit', 'float']).meta({ id: 'InferenceJinaAIElementType' })
export type InferenceJinaAIElementType = z.infer<typeof InferenceJinaAIElementType>

export const InferenceJinaAISimilarityType = z.enum(['cosine', 'dot_product', 'l2_norm']).meta({ id: 'InferenceJinaAISimilarityType' })
export type InferenceJinaAISimilarityType = z.infer<typeof InferenceJinaAISimilarityType>

export const InferenceJinaAIServiceSettings = z.object({
  api_key: z.string().describe('A valid API key of your JinaAI account. IMPORTANT: You need to provide the API key only once, during the inference model creation. The get inference endpoint API does not retrieve your API key.'),
  model_id: z.string().describe('The name of the model to use for the inference task.'),
  rate_limit: InferenceRateLimitSetting.describe('This setting helps to minimize the number of rate limit errors returned from JinaAI. By default, the `jinaai` service sets the number of requests allowed per minute to 2000 for all task types.').optional(),
  similarity: InferenceJinaAISimilarityType.describe('For an `embedding` or `text_embedding` task, the similarity measure. One of cosine, dot_product, l2_norm. The default values varies with the embedding type. For example, a float embedding type uses a `dot_product` similarity measure by default.').optional(),
  dimensions: z.lazy(() => integer).describe('For an `embedding` or `text_embedding` task, the number of dimensions the resulting output embeddings should have. By default, the model\'s standard output dimension is used. Refer to the Jina documentation for more information.').optional(),
  embedding_type: InferenceJinaAIElementType.describe('For an `embedding` or `text_embedding` task, the data type returned by the model. Use `bit` for binary embeddings, which are encoded as bytes with signed int8 precision. Use `binary` for binary embeddings, which are encoded as bytes with signed int8 precision (this is a synonym of `bit`). Use `float` for the default float embeddings.').optional(),
  multimodal_model: z.boolean().describe('For the `embedding` task, whether the model supports multimodal inputs. If true, requests sent to the Jina model will use the multimodal request format (a list of objects). If false, requests sent to the model will use the same format as the `text_embedding` task (a list of strings). Setting this to `false` allows the `embedding` task to be used with models that do not support multimodal requests.').optional()
}).meta({ id: 'InferenceJinaAIServiceSettings' })
export type InferenceJinaAIServiceSettings = z.infer<typeof InferenceJinaAIServiceSettings>

export const InferenceJinaAIServiceType = z.enum(['jinaai']).meta({ id: 'InferenceJinaAIServiceType' })
export type InferenceJinaAIServiceType = z.infer<typeof InferenceJinaAIServiceType>

export const InferenceJinaAITextEmbeddingTask = z.enum(['classification', 'clustering', 'ingest', 'search']).meta({ id: 'InferenceJinaAITextEmbeddingTask' })
export type InferenceJinaAITextEmbeddingTask = z.infer<typeof InferenceJinaAITextEmbeddingTask>

export const InferenceJinaAITaskSettings = z.object({
  return_documents: z.boolean().describe('For a `rerank` task, return the doc text within the results.').optional(),
  input_type: InferenceJinaAITextEmbeddingTask.describe('For an `embedding` or `text_embedding` task, the task passed to the model. Valid values are: * `classification`: Use it for embeddings passed through a classifier. * `clustering`: Use it for the embeddings run through a clustering algorithm. * `ingest`: Use it for storing document embeddings in a vector database. * `search`: Use it for storing embeddings of search queries run against a vector database to find relevant documents.').optional(),
  late_chunking: z.boolean().describe('For an `embedding` or `text_embedding` task, controls when text is split into chunks. When set to `true`, a request from Elasticsearch contains only chunks related to a single document. Instead of batching chunks across documents, Elasticsearch sends them in separate requests. This ensures that chunk embeddings retain context from the entire document, improving semantic quality. If a document exceeds the model\'s context limits, or if the document contains non-text inputs (relevant when using the multimodal `embedding` task), late chunking is automatically disabled for that document only and standard chunking is used instead. If not specified, defaults to `false`.').optional(),
  top_n: z.lazy(() => integer).describe('For a `rerank` task, the number of most relevant documents to return. It defaults to the number of the documents. If this inference endpoint is used in a `text_similarity_reranker` retriever query and `top_n` is set, it must be greater than or equal to `rank_window_size` in the query.').optional()
}).meta({ id: 'InferenceJinaAITaskSettings' })
export type InferenceJinaAITaskSettings = z.infer<typeof InferenceJinaAITaskSettings>

export const InferenceJinaAITaskType = z.enum(['embedding', 'rerank', 'text_embedding']).meta({ id: 'InferenceJinaAITaskType' })
export type InferenceJinaAITaskType = z.infer<typeof InferenceJinaAITaskType>

/**
 * Create an JinaAI inference endpoint.
 *
 * Create an inference endpoint to perform an inference task with the `jinaai` service.
 *
 * To review the available `rerank` models, refer to <https://jina.ai/reranker>.
 * To review the available `embedding` and `text_embedding` models, refer to <https://jina.ai/embeddings/>.
 */
export const InferencePutJinaaiRequest = z.object({
  task_type: InferenceJinaAITaskType.describe('The type of the inference task that the model will perform.').meta({ found_in: 'path' }),
  jinaai_inference_id: z.lazy(() => Id).describe('The unique identifier of the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference endpoint to be created.').optional().meta({ found_in: 'query' }),
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `embedding` and text_embedding` task types. Not applicable to the `rerank` task type.').optional().meta({ found_in: 'body' }),
  service: InferenceJinaAIServiceType.describe('The type of service supported for the specified task type. In this case, `jinaai`.').meta({ found_in: 'body' }),
  service_settings: InferenceJinaAIServiceSettings.describe('Settings used to install the inference model. These settings are specific to the `jinaai` service.').meta({ found_in: 'body' }),
  task_settings: InferenceJinaAITaskSettings.describe('Settings to configure the inference task. These settings are specific to the task type you specified.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferencePutJinaaiRequest' })
export type InferencePutJinaaiRequest = z.infer<typeof InferencePutJinaaiRequest>

export const InferencePutJinaaiResponse = InferenceInferenceEndpointInfoJinaAi.meta({ id: 'InferencePutJinaaiResponse' })
export type InferencePutJinaaiResponse = z.infer<typeof InferencePutJinaaiResponse>
