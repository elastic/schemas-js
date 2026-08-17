/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { InferenceDenseEmbeddingByteResult, InferenceDenseEmbeddingResult, InferenceEmbeddingContentFormat, InferenceEmbeddingContentType, InferenceTaskSettings } from './inference.js'

/** An object containing the input data for a single item for the model to embed. */
export const InferenceEmbeddingContentObjectItem = z.object({
  type: z.lazy(() => InferenceEmbeddingContentType).describe('The type of input to embed. Not all models support all input types. The `audio`, `video`, and `pdf` types are available in Elasticsearch 9.5.0 and later.'),
  format: z.lazy(() => InferenceEmbeddingContentFormat).describe('The format of the input. For the `text` type this must be `text`. For all other types, this must be `base64`. If not specified, this will default to `text` for the `text` type and `base64` for all other types.').optional(),
  value: z.string().describe('The value of the input to embed. For images, this must be a base64-encoded data URI, i.e. "data:content/type;base64,..."')
}).meta({ id: 'InferenceEmbeddingContentObjectItem' })
export type InferenceEmbeddingContentObjectItem = z.infer<typeof InferenceEmbeddingContentObjectItem>

/**
 * Allows specifying one or multiple items for the `embedding` task, which should result in a single embedding vector.
 * Support for multiple items is available in Elasticsearch 9.5.0 and later.
 */
export const InferenceEmbeddingContentObjectGroup = z.union([InferenceEmbeddingContentObjectItem, z.array(InferenceEmbeddingContentObjectItem)]).meta({ id: 'InferenceEmbeddingContentObjectGroup' })
export type InferenceEmbeddingContentObjectGroup = z.infer<typeof InferenceEmbeddingContentObjectGroup>

/** A wrapper object which contains the fields required to specify multimodal inputs */
export const InferenceEmbeddingContentObject = z.object({
  content: InferenceEmbeddingContentObjectGroup.describe('An object or an array of objects containing the input data for the model to embed')
}).meta({ id: 'InferenceEmbeddingContentObject' })
export type InferenceEmbeddingContentObject = z.infer<typeof InferenceEmbeddingContentObject>

/** Allows specifying multimodal inputs for the `embedding` task. */
export const InferenceEmbeddingContentInput = z.union([InferenceEmbeddingContentObject, z.array(InferenceEmbeddingContentObject)]).meta({ id: 'InferenceEmbeddingContentInput' })
export type InferenceEmbeddingContentInput = z.infer<typeof InferenceEmbeddingContentInput>

const InferenceEmbeddingInferenceResultExclusiveProps = z.union([z.object({ embeddings_bytes: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ embeddings_bits: z.array(InferenceDenseEmbeddingByteResult) }), z.object({ embeddings: z.array(InferenceDenseEmbeddingResult) })])

/** EmbeddingInferenceResult is an aggregation of mutually exclusive embeddings variants */
export const InferenceEmbeddingInferenceResult = InferenceEmbeddingInferenceResultExclusiveProps.meta({ id: 'InferenceEmbeddingInferenceResult' })
export type InferenceEmbeddingInferenceResult = z.infer<typeof InferenceEmbeddingInferenceResult>

/** Allows specifying text-only inputs for the `embedding` task. */
export const InferenceEmbeddingStringInput = z.union([z.string(), z.array(z.string())]).meta({ id: 'InferenceEmbeddingStringInput' })
export type InferenceEmbeddingStringInput = z.infer<typeof InferenceEmbeddingStringInput>

/**
 * Inference input.
 * Either a string, an array of strings, a `content` object, or an array of `content` objects.
 */
export const InferenceEmbeddingInput = z.union([InferenceEmbeddingStringInput, InferenceEmbeddingContentInput]).meta({ id: 'InferenceEmbeddingInput' })
export type InferenceEmbeddingInput = z.infer<typeof InferenceEmbeddingInput>

export const InferenceRequestEmbedding = z.object({
  input: InferenceEmbeddingInput.describe('Inference input. Either a string, an array of strings, a `content` object, or an array of `content` objects. `content` objects may contain a single item or an array of items. Models that support multiple items per `content` object will return a single embedding for each `content` object, regardless of how many items it contains. Support for multiple items in a single `content` object is available in Elasticsearch 9.5.0 and later. string example: ``` "input": "Some text" ``` string array example: ``` "input": ["Some text", "Some more text"] ``` `content` object example: ``` "input": {     "content": {       "type": "image",       "format": "base64",       "value": "data:image/jpeg;base64,..."     }   } ``` `content` object array example: ``` "input": [   {     "content": {       "type": "text",       "format": "text",       "value": "Some text to generate an embedding"     }   },   {     "content": {       "type": "image",       "format": "base64",       "value": "data:image/jpeg;base64,..."     }   } ] ``` Multiple items in one `content` object example (available in Elasticsearch 9.5.0 and later): ``` "input": [   {     "content": [       {         "type": "image",         "format": "base64",         "value": "data:image/jpeg;base64,..."       },       {         "type": "text",         "value": "Some text to create an embedding"       }     ]   } ] ```'),
  input_type: z.string().describe('The input data type for the embedding model. Possible values include: * `SEARCH` * `INGEST` * `CLASSIFICATION` * `CLUSTERING` Not all models support all values. Unsupported values will trigger a validation exception. Accepted values depend on the configured inference service, refer to the relevant service-specific documentation for more info. > info > The `input_type` parameter specified on the root level of the request body will take precedence over the `input_type` parameter specified in `task_settings`.').optional(),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service.').optional()
}).meta({ id: 'InferenceRequestEmbedding' })
export type InferenceRequestEmbedding = z.infer<typeof InferenceRequestEmbedding>

/** Perform dense embedding inference on the service. */
export const InferenceEmbeddingRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The inference Id').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Specifies the amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  embedding: InferenceRequestEmbedding.optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceEmbeddingRequest' })
export type InferenceEmbeddingRequest = z.infer<typeof InferenceEmbeddingRequest>

export const InferenceEmbeddingResponse = InferenceEmbeddingInferenceResult.meta({ id: 'InferenceEmbeddingResponse' })
export type InferenceEmbeddingResponse = z.infer<typeof InferenceEmbeddingResponse>
