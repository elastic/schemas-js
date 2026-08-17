/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { ConnectorConnector } from './connector.js'

/**
 * Get a connector.
 *
 * Get the details about a connector.
 */
export const ConnectorGetRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector').meta({ found_in: 'path' }),
  include_deleted: z.boolean().describe('A flag to indicate if the desired connector should be fetched, even if it was soft-deleted.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ConnectorGetRequest' })
export type ConnectorGetRequest = z.infer<typeof ConnectorGetRequest>

export const ConnectorGetResponse = ConnectorConnector.meta({ id: 'ConnectorGetResponse' })
export type ConnectorGetResponse = z.infer<typeof ConnectorGetResponse>
