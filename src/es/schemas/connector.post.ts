/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, IndexName, Result } from './_types.js'

/**
 * Create a connector.
 *
 * Connectors are Elasticsearch integrations that bring content from third-party data sources, which can be deployed on Elastic Cloud or hosted on your own infrastructure.
 * Elastic managed connectors (Native connectors) are a managed service on Elastic Cloud.
 * Self-managed connectors (Connector clients) are self-managed on your infrastructure.
 */
export const ConnectorPostRequest = z.object({
  description: z.string().optional().meta({ found_in: 'body' }),
  index_name: z.lazy(() => IndexName).optional().meta({ found_in: 'body' }),
  is_native: z.boolean().optional().meta({ found_in: 'body' }),
  language: z.string().optional().meta({ found_in: 'body' }),
  name: z.string().optional().meta({ found_in: 'body' }),
  service_type: z.string().optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorPostRequest' })
export type ConnectorPostRequest = z.infer<typeof ConnectorPostRequest>

export const ConnectorPostResponse = z.object({
  result: z.lazy(() => Result),
  id: z.lazy(() => Id)
}).meta({ id: 'ConnectorPostResponse' })
export type ConnectorPostResponse = z.infer<typeof ConnectorPostResponse>
