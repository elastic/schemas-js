/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/**
 * Check in a connector.
 *
 * Update the `last_seen` field in the connector and set it to the current timestamp.
 */
export const ConnectorCheckInRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be checked in').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorCheckInRequest' })
export type ConnectorCheckInRequest = z.infer<typeof ConnectorCheckInRequest>

export const ConnectorCheckInResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorCheckInResponse' })
export type ConnectorCheckInResponse = z.infer<typeof ConnectorCheckInResponse>
