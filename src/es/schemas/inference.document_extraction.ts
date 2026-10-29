/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata } from './_types.js'
import { InferenceTaskSettings } from './inference.js'

/** The document extraction result object representing the content extracted from a single document. */
export const InferenceDocumentExtractionResult = z.object({
  content: z.string().describe('The content extracted from the document.'),
  format: z.string().describe('The format of the extracted content, for example `markdown`.'),
  metadata: z.lazy(() => Metadata).describe('Additional information about the document, such as its title. The available fields depend on the service and model.').optional()
}).meta({ id: 'InferenceDocumentExtractionResult' })
export type InferenceDocumentExtractionResult = z.infer<typeof InferenceDocumentExtractionResult>

/**
 * Defines the response for a document extraction request.
 * The results are returned in the same order as the documents in the request.
 */
export const InferenceDocumentExtractionInferenceResult = z.object({
  document_extraction: z.array(InferenceDocumentExtractionResult)
}).meta({ id: 'InferenceDocumentExtractionInferenceResult' })
export type InferenceDocumentExtractionInferenceResult = z.infer<typeof InferenceDocumentExtractionInferenceResult>

export const InferenceDocumentExtractionDocumentExtractionContentFormat = z.enum(['base64', 'url']).meta({ id: 'InferenceDocumentExtractionDocumentExtractionContentFormat' })
export type InferenceDocumentExtractionDocumentExtractionContentFormat = z.infer<typeof InferenceDocumentExtractionDocumentExtractionContentFormat>

export const InferenceDocumentExtractionDocumentExtractionContentType = z.enum(['image', 'pdf']).meta({ id: 'InferenceDocumentExtractionDocumentExtractionContentType' })
export type InferenceDocumentExtractionDocumentExtractionContentType = z.infer<typeof InferenceDocumentExtractionDocumentExtractionContentType>

/** An object describing a single document to extract the content from. */
export const InferenceDocumentExtractionDocumentExtractionContentObjectItem = z.object({
  type: InferenceDocumentExtractionDocumentExtractionContentType.describe('The type of the document. Not all services and models support all types.'),
  format: InferenceDocumentExtractionDocumentExtractionContentFormat.describe('The format of the document. If not specified, this defaults to `base64`. Not all services and models support all formats.').optional(),
  value: z.string().describe('The value of the document. For the `base64` format, this must be a base64-encoded data URI, that is, "data:content/type;base64,...". For the `url` format, this must be a URL that points to the document, that is, "https://example.com/document.pdf".')
}).meta({ id: 'InferenceDocumentExtractionDocumentExtractionContentObjectItem' })
export type InferenceDocumentExtractionDocumentExtractionContentObjectItem = z.infer<typeof InferenceDocumentExtractionDocumentExtractionContentObjectItem>

/** A wrapper object which contains a single document to extract the content from. */
export const InferenceDocumentExtractionDocumentExtractionContentObject = z.object({
  content: InferenceDocumentExtractionDocumentExtractionContentObjectItem.describe('The document to extract the content from.')
}).meta({ id: 'InferenceDocumentExtractionDocumentExtractionContentObject' })
export type InferenceDocumentExtractionDocumentExtractionContentObject = z.infer<typeof InferenceDocumentExtractionDocumentExtractionContentObject>

/**
 * The documents to extract the content from for the `document_extraction` task.
 * Either a `content` object or an array of `content` objects.
 */
export const InferenceDocumentExtractionDocumentExtractionInput = z.union([InferenceDocumentExtractionDocumentExtractionContentObject, z.array(InferenceDocumentExtractionDocumentExtractionContentObject)]).meta({ id: 'InferenceDocumentExtractionDocumentExtractionInput' })
export type InferenceDocumentExtractionDocumentExtractionInput = z.infer<typeof InferenceDocumentExtractionDocumentExtractionInput>

/**
 * Perform document extraction inference on the service.
 *
 * Extract the content of documents, such as PDFs or images of documents, into a textual format.
 */
export const InferenceDocumentExtractionRequest = z.object({
  inference_id: z.lazy(() => Id).describe('The unique identifier for the inference endpoint.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The amount of time to wait for the inference request to complete.').optional().meta({ found_in: 'query' }),
  input: InferenceDocumentExtractionDocumentExtractionInput.describe('The documents to extract the content from. Either a `content` object or an array of `content` objects. `content` object example: ``` "input": {   "content": {     "type": "pdf",     "format": "base64",     "value": "data:application/pdf;base64,..."   } } ``` `content` object array example: ``` "input": [   {     "content": {       "type": "pdf",       "format": "base64",       "value": "data:application/pdf;base64,..."     }   },   {     "content": {       "type": "image",       "format": "url",       "value": "https://example.com/scanned-page.png"     }   } ] ```').meta({ found_in: 'body' }),
  task_settings: InferenceTaskSettings.describe('Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service.').optional().meta({ found_in: 'body' })
}).meta({ id: 'InferenceDocumentExtractionRequest' })
export type InferenceDocumentExtractionRequest = z.infer<typeof InferenceDocumentExtractionRequest>

export const InferenceDocumentExtractionResponse = InferenceDocumentExtractionInferenceResult.meta({ id: 'InferenceDocumentExtractionResponse' })
export type InferenceDocumentExtractionResponse = z.infer<typeof InferenceDocumentExtractionResponse>
