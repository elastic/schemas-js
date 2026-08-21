/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

export const ConnectorIngestPipelineParams = z.object({
  extract_binary_content: z.boolean(),
  name: z.string(),
  reduce_whitespace: z.boolean(),
  run_ml_inference: z.boolean()
}).meta({ id: 'ConnectorIngestPipelineParams' })
export type ConnectorIngestPipelineParams = z.infer<typeof ConnectorIngestPipelineParams>

/**
 * Update the connector pipeline.
 *
 * When you create a new connector, the configuration of an ingest pipeline is populated with default settings.
 */
export const ConnectorUpdatePipelineRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  pipeline: ConnectorIngestPipelineParams.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdatePipelineRequest' })
export type ConnectorUpdatePipelineRequest = z.infer<typeof ConnectorUpdatePipelineRequest>

export const ConnectorUpdatePipelineResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdatePipelineResponse' })
export type ConnectorUpdatePipelineResponse = z.infer<typeof ConnectorUpdatePipelineResponse>
