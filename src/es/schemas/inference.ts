/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, byte, float, integer } from './_types.js'
import { InferenceRegionPolicy } from './inference.put_region_policy.js'

export const InferenceEmbeddingContentType = z.enum(['text', 'image', 'audio', 'video', 'pdf']).meta({ id: 'InferenceEmbeddingContentType' })
export type InferenceEmbeddingContentType = z.infer<typeof InferenceEmbeddingContentType>

export const InferenceEmbeddingContentFormat = z.enum(['text', 'base64']).meta({ id: 'InferenceEmbeddingContentFormat' })
export type InferenceEmbeddingContentFormat = z.infer<typeof InferenceEmbeddingContentFormat>

export const InferenceAdaptiveAllocations = z.object({
  enabled: z.boolean().describe('Turn on `adaptive_allocations`.').optional(),
  max_number_of_allocations: z.lazy(() => integer).describe('The maximum number of allocations to scale to. If set, it must be greater than or equal to `min_number_of_allocations`.').optional(),
  min_number_of_allocations: z.lazy(() => integer).describe('The minimum number of allocations to scale to. If set, it must be greater than or equal to 0. If not defined, the deployment scales to 0.').optional()
}).meta({ id: 'InferenceAdaptiveAllocations' })
export type InferenceAdaptiveAllocations = z.infer<typeof InferenceAdaptiveAllocations>

/** This setting helps to minimize the number of rate limit errors returned from the service. */
export const InferenceRateLimitSetting = z.object({
  requests_per_minute: z.lazy(() => integer).describe('The number of requests allowed per minute. By default, the number of requests allowed per minute is set by each service as follows: * `alibabacloud-ai-search` service: `1000` * `amazonbedrock` service: `240` * `anthropic` service: `50` * `azureaistudio` service: `240` * `azureopenai` service and task type `text_embedding`: `1440` * `azureopenai` service and task types `completion` or `chat_completion`: `120` * `cohere` service: `10000` * `contextualai` service: `1000` * `elastic` service and task type `chat_completion`: `240` * `fireworksai` service: `6000` * `googleaistudio` service: `360` * `googlevertexai` service: `30000` * `hugging_face` service: `3000` * `jinaai` service: `2000` * `llama` service: `3000` * `mistral` service: `240` * `openai` service and task type `text_embedding`: `3000` * `openai` service and task type `completion`: `500` * `openshift_ai` service: `3000` * `voyageai` service: `2000` * `watsonxai` service: `120`').optional()
}).meta({ id: 'InferenceRateLimitSetting' })
export type InferenceRateLimitSetting = z.infer<typeof InferenceRateLimitSetting>

export const InferenceCohereTruncateType = z.enum(['END', 'NONE', 'START']).meta({ id: 'InferenceCohereTruncateType' })
export type InferenceCohereTruncateType = z.infer<typeof InferenceCohereTruncateType>

/** The completion result object */
export const InferenceCompletionResult = z.object({
  result: z.string()
}).meta({ id: 'InferenceCompletionResult' })
export type InferenceCompletionResult = z.infer<typeof InferenceCompletionResult>

/**
 * Dense Embedding results containing bytes are represented as Dense
 * Vectors of bytes.
 */
export const InferenceDenseByteVector = z.array(z.lazy(() => byte)).meta({ id: 'InferenceDenseByteVector' })
export type InferenceDenseByteVector = z.infer<typeof InferenceDenseByteVector>

/** The dense embedding result object for byte representation */
export const InferenceDenseEmbeddingByteResult = z.object({
  embedding: InferenceDenseByteVector
}).meta({ id: 'InferenceDenseEmbeddingByteResult' })
export type InferenceDenseEmbeddingByteResult = z.infer<typeof InferenceDenseEmbeddingByteResult>

/**
 * Dense Embedding results are represented as Dense Vectors
 * of floats.
 */
export const InferenceDenseVector = z.array(z.lazy(() => float)).meta({ id: 'InferenceDenseVector' })
export type InferenceDenseVector = z.infer<typeof InferenceDenseVector>

/** The dense embedding result object for float representation */
export const InferenceDenseEmbeddingResult = z.object({
  embedding: InferenceDenseVector
}).meta({ id: 'InferenceDenseEmbeddingResult' })
export type InferenceDenseEmbeddingResult = z.infer<typeof InferenceDenseEmbeddingResult>

/** Chunking configuration object */
export const InferenceInferenceChunkingSettings = z.object({
  max_chunk_size: z.lazy(() => integer).describe('The maximum size of a chunk in words. This value cannot be lower than `20` (for `sentence` strategy) or `10` (for `word` strategy). This value should not exceed the window size for the associated model.').optional(),
  overlap: z.lazy(() => integer).describe('The number of overlapping words for chunks. It is applicable only to a `word` chunking strategy. This value cannot be higher than half the `max_chunk_size` value.').optional(),
  sentence_overlap: z.lazy(() => integer).describe('The number of overlapping sentences for chunks. It is applicable only for a `sentence` chunking strategy. It can be either `1` or `0`.').optional(),
  separator_group: z.string().describe('Only applicable to the `recursive` strategy and required when using it. Sets a predefined list of separators in the saved chunking settings based on the selected text type. Values can be `markdown` or `plaintext`. Using this parameter is an alternative to manually specifying a custom `separators` list.').optional(),
  separators: z.array(z.string()).describe('Only applicable to the `recursive` strategy and required when using it. A list of strings used as possible split points when chunking text. Each string can be a plain string or a regular expression (regex) pattern. The system tries each separator in order to split the text, starting from the first item in the list. After splitting, it attempts to recombine smaller pieces into larger chunks that stay within the `max_chunk_size` limit, to reduce the total number of chunks generated.').optional(),
  strategy: z.string().describe('The chunking strategy: `sentence`, `word`, `none` or `recursive`.  * If `strategy` is set to `recursive`, you must also specify: - `max_chunk_size` - either `separators` or`separator_group` Learn more about different chunking strategies in the linked documentation.').optional()
}).meta({ id: 'InferenceInferenceChunkingSettings' })
export type InferenceInferenceChunkingSettings = z.infer<typeof InferenceInferenceChunkingSettings>

export const InferenceServiceSettings = z.any().meta({ id: 'InferenceServiceSettings' })
export type InferenceServiceSettings = z.infer<typeof InferenceServiceSettings>

export const InferenceTaskSettings = z.any().meta({ id: 'InferenceTaskSettings' })
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>

/** Configuration options when storing the inference endpoint */
export const InferenceInferenceEndpoint = z.object({
  chunking_settings: InferenceInferenceChunkingSettings.describe('The chunking configuration object. Applies only to the `embedding`, `sparse_embedding` and `text_embedding` task types. Not applicable to the `rerank`, `completion`, or `chat_completion` task types.').optional(),
  service: z.string().describe('The service type'),
  service_settings: InferenceServiceSettings.describe('Settings specific to the service'),
  task_settings: InferenceTaskSettings.describe('Task settings specific to the service and task type').optional()
}).meta({ id: 'InferenceInferenceEndpoint' })
export type InferenceInferenceEndpoint = z.infer<typeof InferenceInferenceEndpoint>

export const InferenceTaskType = z.enum(['sparse_embedding', 'text_embedding', 'rerank', 'completion', 'chat_completion', 'embedding']).meta({ id: 'InferenceTaskType' })
export type InferenceTaskType = z.infer<typeof InferenceTaskType>

/** Represents an inference endpoint as returned by the GET API */
export const InferenceInferenceEndpointInfo = z.object({
  ...InferenceInferenceEndpoint.shape,
  inference_id: z.string().describe('The inference Id'),
  task_type: InferenceTaskType.describe('The task type')
}).meta({ id: 'InferenceInferenceEndpointInfo' })
export type InferenceInferenceEndpointInfo = z.infer<typeof InferenceInferenceEndpointInfo>

/**
 * Sparse Embedding tokens are represented as a dictionary
 * of string to double.
 */
export const InferenceSparseVector = z.record(z.string(), z.lazy(() => float)).meta({ id: 'InferenceSparseVector' })
export type InferenceSparseVector = z.infer<typeof InferenceSparseVector>

export const InferenceSparseEmbeddingResult = z.object({
  is_truncated: z.boolean().describe('Indicates if the text input was truncated in the request sent to the service'),
  embedding: InferenceSparseVector
}).meta({ id: 'InferenceSparseEmbeddingResult' })
export type InferenceSparseEmbeddingResult = z.infer<typeof InferenceSparseEmbeddingResult>

/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export const InferenceRankedDocument = z.object({
  index: z.lazy(() => integer),
  relevance_score: z.lazy(() => float),
  text: z.string().optional()
}).meta({ id: 'InferenceRankedDocument' })
export type InferenceRankedDocument = z.infer<typeof InferenceRankedDocument>

/** The stored region policy document. */
export const InferenceRegionPolicyDoc = z.object({
  region_policy: z.lazy(() => InferenceRegionPolicy),
  created_at: z.lazy(() => DateTime).describe('The date and time the region policy was created.'),
  created_by: z.string().describe('The user who created the region policy.').optional(),
  updated_at: z.lazy(() => DateTime).describe('The date and time the region policy was last updated.').optional(),
  updated_by: z.string().describe('The user who last updated the region policy.').optional()
}).meta({ id: 'InferenceRegionPolicyDoc' })
export type InferenceRegionPolicyDoc = z.infer<typeof InferenceRegionPolicyDoc>
