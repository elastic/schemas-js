/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { IngestPipeline } from './ingest.js'

/**
 * Get pipelines.
 *
 * Get information about one or more ingest pipelines.
 * This API returns a local reference of the pipeline.
 */
export const IngestGetPipelineRequest = z.object({
  id: z.lazy(() => Id).describe('Comma-separated list of pipeline IDs to retrieve. Wildcard (`*`) expressions are supported. To get all ingest pipelines, omit this parameter or use `*`.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  summary: z.boolean().describe('Return pipelines without their definitions').optional().meta({ found_in: 'query' })
}).meta({ id: 'IngestGetPipelineRequest' })
export type IngestGetPipelineRequest = z.infer<typeof IngestGetPipelineRequest>

export const IngestGetPipelineResponse = z.record(z.string(), IngestPipeline).meta({ id: 'IngestGetPipelineResponse' })
export type IngestGetPipelineResponse = z.infer<typeof IngestGetPipelineResponse>
