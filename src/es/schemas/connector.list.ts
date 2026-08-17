/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Indices, Names, integer, long } from './_types.js'
import { ConnectorConnector } from './connector.js'

/**
 * Get all connectors.
 *
 * Get information about all connectors.
 */
export const ConnectorListRequest = z.object({
  from: z.lazy(() => integer).describe('Starting offset').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies a max number of results to get').optional().meta({ found_in: 'query' }),
  index_name: z.lazy(() => Indices).describe('A comma-separated list of connector index names to fetch connector documents for').optional().meta({ found_in: 'query' }),
  connector_name: z.lazy(() => Names).describe('A comma-separated list of connector names to fetch connector documents for').optional().meta({ found_in: 'query' }),
  service_type: z.lazy(() => Names).describe('A comma-separated list of connector service types to fetch connector documents for').optional().meta({ found_in: 'query' }),
  include_deleted: z.boolean().describe('A flag to indicate if the desired connector should be fetched, even if it was soft-deleted.').optional().meta({ found_in: 'query' }),
  query: z.string().describe('A wildcard query string that filters connectors with matching name, description or index name').optional().meta({ found_in: 'query' })
}).meta({ id: 'ConnectorListRequest' })
export type ConnectorListRequest = z.infer<typeof ConnectorListRequest>

export const ConnectorListResponse = z.object({
  count: z.lazy(() => long),
  results: z.array(ConnectorConnector)
}).meta({ id: 'ConnectorListResponse' })
export type ConnectorListResponse = z.infer<typeof ConnectorListResponse>
