/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

export const ConnectorConnectorScheduling = z.object({
  enabled: z.boolean(),
  interval: z.string().describe('The interval is expressed using the crontab syntax')
}).meta({ id: 'ConnectorConnectorScheduling' })
export type ConnectorConnectorScheduling = z.infer<typeof ConnectorConnectorScheduling>

export const ConnectorSchedulingConfiguration = z.object({
  access_control: ConnectorConnectorScheduling.optional(),
  full: ConnectorConnectorScheduling.optional(),
  incremental: ConnectorConnectorScheduling.optional()
}).meta({ id: 'ConnectorSchedulingConfiguration' })
export type ConnectorSchedulingConfiguration = z.infer<typeof ConnectorSchedulingConfiguration>

/** Update the connector scheduling. */
export const ConnectorUpdateSchedulingRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  scheduling: ConnectorSchedulingConfiguration.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateSchedulingRequest' })
export type ConnectorUpdateSchedulingRequest = z.infer<typeof ConnectorUpdateSchedulingRequest>

export const ConnectorUpdateSchedulingResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateSchedulingResponse' })
export type ConnectorUpdateSchedulingResponse = z.infer<typeof ConnectorUpdateSchedulingResponse>
