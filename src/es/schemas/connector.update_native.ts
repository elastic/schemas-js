/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/** Update the connector is_native flag. */
export const ConnectorUpdateNativeRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  is_native: z.boolean().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateNativeRequest' })
export type ConnectorUpdateNativeRequest = z.infer<typeof ConnectorUpdateNativeRequest>

export const ConnectorUpdateNativeResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateNativeResponse' })
export type ConnectorUpdateNativeResponse = z.infer<typeof ConnectorUpdateNativeResponse>
