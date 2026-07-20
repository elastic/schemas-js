/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-nocheck

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any())
export type TODO = z.infer<typeof TODO>

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const Id = z.string().meta({ id: 'Id' })
export type Id = z.infer<typeof Id>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

export const float = z.number().meta({ id: 'float' })
export type float = z.infer<typeof float>

export const integer = z.number().meta({ id: 'integer' })
export type integer = z.infer<typeof integer>

/**
 * The rerank result object representing a single ranked document
 * id: the original index of the document in the request
 * relevance_score: the relevance_score of the document relative to the query
 * text: Optional, the text of the document, if requested
 */
export const InferenceRankedDocument = z.object({
  index: integer,
  relevance_score: float,
  text: z.string().optional()
}).meta({ id: 'InferenceRankedDocument' })
export type InferenceRankedDocument = z.infer<typeof InferenceRankedDocument>

/** Defines the response for a rerank request. */
export const InferenceRerankedInferenceResult = z.object({
  rerank: z.array(InferenceRankedDocument)
}).meta({ id: 'InferenceRerankedInferenceResult' })
export type InferenceRerankedInferenceResult = z.infer<typeof InferenceRerankedInferenceResult>

export const InferenceTaskSettings = z.any().meta({ id: 'InferenceTaskSettings' })
export type InferenceTaskSettings = z.infer<typeof InferenceTaskSettings>

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
  ...RequestBase.shape,
  inference_id: Id.describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
  timeout: Duration.describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  query: InferenceRerankRerankQuery.describe('Query input. The query can be specified as a single string, or as an object. The object form additionally allows specifying non-text inputs, such as images. > info > Only the `elastic` service currently supports non-text queries for the `rerank` task. For all other services, the query must be a string. string example: ``` "query": "some query text" ``` object example: ``` "query": {   "type": "image",   "format": "base64",   "value": "data:image/jpeg;base64,..." } ```').meta({ found_in: 'body' }),
  input: InferenceRerankRerankInput.describe('The documents to rank. The input can be specified as a single string or an array of strings, or as an object or an array of objects. The object form additionally allows specifying non-text inputs, such as images. > info > Only the `elastic` service currently supports non-text inputs for the `rerank` task. For all other services, the input must be a string or an array of strings. string example: ``` "input": "some document text" ``` string array example: ``` "input": ["some document text", "some more document text"] ``` object example: ``` "input": {   "type": "image",   "format": "base64",   "value": "data:image/jpeg;base64,..." } ``` object array example: ``` "input": [   {     "type": "text",     "format": "text",     "value": "some document text"   },   {     "type": "image",     "format": "base64",     "value": "data:image/jpeg;base64,..."   } ] ```').meta({ found_in: 'body' }),
  return_documents: z.boolean().describe('Include the document text in the response.').optional().meta({ found_in: 'body' }),
  top_n: integer.describe('Limit the response to the top N documents.').optional().meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceRerankRequest' })
export type InferenceRerankRequest = z.infer<typeof InferenceRerankRequest>

export const InferenceRerankResponse = InferenceRerankedInferenceResult.meta({ id: 'InferenceRerankResponse' })
export type InferenceRerankResponse = z.infer<typeof InferenceRerankResponse>
