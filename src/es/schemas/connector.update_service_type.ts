/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/** Update the connector service type. */
export const ConnectorUpdateServiceTypeRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  service_type: z.string().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateServiceTypeRequest' })
export type ConnectorUpdateServiceTypeRequest = z.infer<typeof ConnectorUpdateServiceTypeRequest>

export const ConnectorUpdateServiceTypeResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateServiceTypeResponse' })
export type ConnectorUpdateServiceTypeResponse = z.infer<typeof ConnectorUpdateServiceTypeResponse>
