/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, IndexName, Result } from './_types.js'

/** Create or update a connector. */
export const ConnectorPutRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be created or updated. ID is auto-generated if not provided.').optional().meta({ found_in: 'path' }),
  description: z.string().optional().meta({ found_in: 'body' }),
  index_name: z.lazy(() => IndexName).optional().meta({ found_in: 'body' }),
  is_native: z.boolean().optional().meta({ found_in: 'body' }),
  language: z.string().optional().meta({ found_in: 'body' }),
  name: z.string().optional().meta({ found_in: 'body' }),
  service_type: z.string().optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorPutRequest' })
export type ConnectorPutRequest = z.infer<typeof ConnectorPutRequest>

export const ConnectorPutResponse = z.object({
  result: z.lazy(() => Result),
  id: z.lazy(() => Id)
}).meta({ id: 'ConnectorPutResponse' })
export type ConnectorPutResponse = z.infer<typeof ConnectorPutResponse>
