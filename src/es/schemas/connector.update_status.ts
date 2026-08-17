/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

export const ConnectorConnectorStatus = z.enum(['created', 'needs_configuration', 'configured', 'connected', 'error']).meta({ id: 'ConnectorConnectorStatus' })
export type ConnectorConnectorStatus = z.infer<typeof ConnectorConnectorStatus>

/** Update the connector status. */
export const ConnectorUpdateStatusRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  status: ConnectorConnectorStatus.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateStatusRequest' })
export type ConnectorUpdateStatusRequest = z.infer<typeof ConnectorUpdateStatusRequest>

export const ConnectorUpdateStatusResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateStatusResponse' })
export type ConnectorUpdateStatusResponse = z.infer<typeof ConnectorUpdateStatusResponse>
