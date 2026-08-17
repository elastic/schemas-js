/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/**
 * Delete pipelines.
 *
 * Delete one or more ingest pipelines.
 */
export const IngestDeletePipelineRequest = z.object({
  id: z.lazy(() => Id).describe('Pipeline ID or wildcard expression of pipeline IDs used to limit the request. To delete all ingest pipelines in a cluster, use a value of `*`.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IngestDeletePipelineRequest' })
export type IngestDeletePipelineRequest = z.infer<typeof IngestDeletePipelineRequest>

export const IngestDeletePipelineResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IngestDeletePipelineResponse' })
export type IngestDeletePipelineResponse = z.infer<typeof IngestDeletePipelineResponse>
