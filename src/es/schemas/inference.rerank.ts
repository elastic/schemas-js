/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, integer } from './_types.js'
import { InferenceRankedDocument, InferenceTaskSettings } from './inference.js'

/** Defines the response for a rerank request. */
export const InferenceRerankedInferenceResult = z.object({
  rerank: z.array(InferenceRankedDocument)
}).meta({ id: 'InferenceRerankedInferenceResult' })
export type InferenceRerankedInferenceResult = z.infer<typeof InferenceRerankedInferenceResult>

export const InferenceRerankRerankInputType = z.enum(['text', 'image']).meta({ id: 'InferenceRerankRerankInputType' })
export type InferenceRerankRerankInputType = z.infer<typeof InferenceRerankRerankInputType>

export const InferenceRerankRerankInputFormat = z.enum(['text', 'base64']).meta({ id: 'InferenceRerankRerankInputFormat' })
export type InferenceRerankRerankInputFormat = z.infer<typeof InferenceRerankRerankInputFormat>

/** An object describing a single input for the `rerank` task, which additionally allows specifying non-text inputs, such as images. */
export const InferenceRerankRerankInputObject = z.object({
  type: InferenceRerankRerankInputType.describe('The type of input. Not all services and models support all input types.'),
  format: InferenceRerankRerankInputFormat.describe('The format of the input. For the `text` type this must be `text`. For the `image` type this must be `base64`. If not specified, this defaults to `text` for the `text` type and `base64` for the `image` type.').optional(),
  value: z.string().describe('The value of the input. For images, this must be a base64-encoded data URI, that is, "data:content/type;base64,...".')
}).meta({ id: 'InferenceRerankRerankInputObject' })
export type InferenceRerankRerankInputObject = z.infer<typeof InferenceRerankRerankInputObject>

/**
 * Query input for the `rerank` task.
 * Either a string, or an object. The object form additionally allows specifying non-text inputs, such as images.
 *
 * > info
 * > Only the `elastic` service currently supports non-text queries for the `rerank` task.
 */
export const InferenceRerankRerankQuery = z.union([z.string(), InferenceRerankRerankInputObject]).meta({ id: 'InferenceRerankRerankQuery' })
export type InferenceRerankRerankQuery = z.infer<typeof InferenceRerankRerankQuery>

/** Allows specifying text-only documents to rank for the `rerank` task. */
export const InferenceRerankRerankStringInput = z.union([z.string(), z.array(z.string())]).meta({ id: 'InferenceRerankRerankStringInput' })
export type InferenceRerankRerankStringInput = z.infer<typeof InferenceRerankRerankStringInput>

/** Allows specifying documents to rank as objects, which additionally supports non-text inputs, such as images. */
export const InferenceRerankRerankObjectInput = z.union([InferenceRerankRerankInputObject, z.array(InferenceRerankRerankInputObject)]).meta({ id: 'InferenceRerankRerankObjectInput' })
export type InferenceRerankRerankObjectInput = z.infer<typeof InferenceRerankRerankObjectInput>

/**
 * The documents to rank for the `rerank` task.
 * Either a string, an array of strings, an object, or an array of objects.
 * The object form additionally allows specifying non-text inputs, such as images.
 *
 * > info
 * > Only the `elastic` service currently supports non-text inputs for the `rerank` task.
 */
export const InferenceRerankRerankInput = z.union([InferenceRerankRerankStringInput, InferenceRerankRerankObjectInput]).meta({ id: 'InferenceRerankRerankInput' })
export type InferenceRerankRerankInput = z.infer<typeof InferenceRerankRerankInput>

/** Perform reranking inference on the service. */
export const InferenceRerankRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  query: InferenceRerankRerankQuery.describe('Query input. The query can be specified as a single string, or as an object. The object form additionally allows specifying non-text inputs, such as images. > info > Only the `elastic` service currently supports non-text queries for the `rerank` task. For all other services, the query must be a string. string example: ``` "query": "some query text" ``` object example: ``` "query": {   "type": "image",   "format": "base64",   "value": "data:image/jpeg;base64,..." } ```').meta({ found_in: 'body' }),
  input: InferenceRerankRerankInput.describe('The documents to rank. The input can be specified as a single string or an array of strings, or as an object or an array of objects. The object form additionally allows specifying non-text inputs, such as images. > info > Only the `elastic` service currently supports non-text inputs for the `rerank` task. For all other services, the input must be a string or an array of strings. string example: ``` "input": "some document text" ``` string array example: ``` "input": ["some document text", "some more document text"] ``` object example: ``` "input": {   "type": "image",   "format": "base64",   "value": "data:image/jpeg;base64,..." } ``` object array example: ``` "input": [   {     "type": "text",     "format": "text",     "value": "some document text"   },   {     "type": "image",     "format": "base64",     "value": "data:image/jpeg;base64,..."   } ] ```').meta({ found_in: 'body' }),
  return_documents: z.boolean().describe('Include the document text in the response.').optional().meta({ found_in: 'body' }),
  top_n: z.lazy(() => integer).describe('Limit the response to the top N documents.').optional().meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceRerankRequest' })
export type InferenceRerankRequest = z.infer<typeof InferenceRerankRequest>

export const InferenceRerankResponse = InferenceRerankedInferenceResult.meta({ id: 'InferenceRerankResponse' })
export type InferenceRerankResponse = z.infer<typeof InferenceRerankResponse>
