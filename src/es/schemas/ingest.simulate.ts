/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsStringified } from './_spec_utils.js'
import { DateTime, ErrorCause, Id, IndexName, Name, VersionType } from './_types.js'
import { IngestDocument, IngestPipeline } from './ingest.js'

export const IngestRedact = z.object({
  _is_redacted: z.boolean().describe('indicates if document has been redacted')
}).meta({ id: 'IngestRedact' })
export type IngestRedact = z.infer<typeof IngestRedact>

export const IngestIngest = z.object({
  _redact: IngestRedact.optional(),
  timestamp: z.lazy(() => DateTime),
  pipeline: z.lazy(() => Name).optional()
}).meta({ id: 'IngestIngest' })
export type IngestIngest = z.infer<typeof IngestIngest>

/** The simulated document, with optional metadata. */
export const IngestDocumentSimulation = z.object({
  _id: z.lazy(() => Id).describe('Unique identifier for the document. This ID must be unique within the `_index`.'),
  _index: z.lazy(() => IndexName).describe('Name of the index containing the document.'),
  _ingest: IngestIngest,
  _routing: z.string().describe('Value used to send the document to a specific primary shard.').optional(),
  _source: z.record(z.string(), z.any()).describe('JSON body for the document.'),
  _version: z.lazy(() => SpecUtilsStringified).describe('').optional(),
  _version_type: z.lazy(() => VersionType).optional()
}).catchall(z.any()).meta({ id: 'IngestDocumentSimulation' })
export type IngestDocumentSimulation = z.infer<typeof IngestDocumentSimulation>

export const IngestPipelineSimulationStatusOptions = z.enum(['success', 'error', 'error_ignored', 'skipped', 'dropped']).meta({ id: 'IngestPipelineSimulationStatusOptions' })
export type IngestPipelineSimulationStatusOptions = z.infer<typeof IngestPipelineSimulationStatusOptions>

export const IngestPipelineProcessorResult = z.object({
  doc: IngestDocumentSimulation.optional(),
  tag: z.string().optional(),
  processor_type: z.string().optional(),
  status: IngestPipelineSimulationStatusOptions.optional(),
  description: z.string().optional(),
  ignored_error: z.lazy(() => ErrorCause).optional(),
  error: z.lazy(() => ErrorCause).optional()
}).meta({ id: 'IngestPipelineProcessorResult' })
export type IngestPipelineProcessorResult = z.infer<typeof IngestPipelineProcessorResult>

export const IngestSimulateDocumentResult = z.object({
  doc: IngestDocumentSimulation.optional(),
  error: z.lazy(() => ErrorCause).optional(),
  processor_results: z.array(IngestPipelineProcessorResult).optional()
}).meta({ id: 'IngestSimulateDocumentResult' })
export type IngestSimulateDocumentResult = z.infer<typeof IngestSimulateDocumentResult>

/**
 * Simulate a pipeline.
 *
 * Run an ingest pipeline against a set of provided documents.
 * You can either specify an existing pipeline to use with the provided documents or supply a pipeline definition in the body of the request.
 */
export const IngestSimulateRequest = z.object({
  id: z.lazy(() => Id).describe('The pipeline to test. If you don\'t specify a `pipeline` in the request body, this parameter is required.').optional().meta({ found_in: 'path' }),
  verbose: z.boolean().describe('If `true`, the response includes output data for each processor in the executed pipeline.').optional().meta({ found_in: 'query' }),
  docs: z.array(IngestDocument).describe('Sample documents to test in the pipeline.').meta({ found_in: 'body' }),
  pipeline: IngestPipeline.describe('The pipeline to test. If you don\'t specify the `pipeline` request path parameter, this parameter is required. If you specify both this and the request path parameter, the API only uses the request path parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IngestSimulateRequest' })
export type IngestSimulateRequest = z.infer<typeof IngestSimulateRequest>

export const IngestSimulateResponse = z.object({
  docs: z.array(IngestSimulateDocumentResult)
}).meta({ id: 'IngestSimulateResponse' })
export type IngestSimulateResponse = z.infer<typeof IngestSimulateResponse>
