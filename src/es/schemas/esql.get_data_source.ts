/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name, Names } from './_types.js'

/**
 * Represents a data source definition stored in cluster state. A data source holds
 * connection settings (credentials, endpoints, auth) for an external data provider.
 */
export const EsqlESQLDataSource = z.object({
  name: z.lazy(() => Name).describe('The data source name.'),
  type: z.string().describe('The data source type. Currently, `s3` is supported.'),
  description: z.string().describe('A free-text description.').optional(),
  settings: z.record(z.string(), z.any()).describe('Type-specific connection and authentication settings.')
}).meta({ id: 'EsqlESQLDataSource' })
export type EsqlESQLDataSource = z.infer<typeof EsqlESQLDataSource>

/**
 * Get ES|QL data sources.
 *
 * Returns one or more data sources used in ES|QL data federation.
 * A concrete-name miss returns `404`; a wildcard pattern or list-all request with no match
 * returns `200` with an empty array.
 */
export const EsqlGetDataSourceRequest = z.object({
  name: z.lazy(() => Names).describe('A comma-separated list of data source names or wildcard patterns. Omit to return all data sources.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlGetDataSourceRequest' })
export type EsqlGetDataSourceRequest = z.infer<typeof EsqlGetDataSourceRequest>

export const EsqlGetDataSourceResponse = z.object({
  data_sources: z.array(EsqlESQLDataSource).describe('The matching data sources. Credential values in each data source\'s settings are redacted as `::es_redacted::` in the response.')
}).meta({ id: 'EsqlGetDataSourceResponse' })
export type EsqlGetDataSourceResponse = z.infer<typeof EsqlGetDataSourceResponse>
