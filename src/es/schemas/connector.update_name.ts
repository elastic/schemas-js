/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/** Update the connector name and description. */
export const ConnectorUpdateNameRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  name: z.string().optional().meta({ found_in: 'body' }),
  description: z.string().optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateNameRequest' })
export type ConnectorUpdateNameRequest = z.infer<typeof ConnectorUpdateNameRequest>

export const ConnectorUpdateNameResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateNameResponse' })
export type ConnectorUpdateNameResponse = z.infer<typeof ConnectorUpdateNameResponse>
