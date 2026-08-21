/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/**
 * Activate the connector draft filter.
 *
 * Activates the valid draft filtering for a connector.
 */
export const ConnectorUpdateActiveFilteringRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorUpdateActiveFilteringRequest' })
export type ConnectorUpdateActiveFilteringRequest = z.infer<typeof ConnectorUpdateActiveFilteringRequest>

export const ConnectorUpdateActiveFilteringResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateActiveFilteringResponse' })
export type ConnectorUpdateActiveFilteringResponse = z.infer<typeof ConnectorUpdateActiveFilteringResponse>
