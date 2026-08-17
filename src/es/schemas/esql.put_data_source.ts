/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Create or update an ES|QL data source.
 *
 * Creates or replaces a named, type-specific data source configuration for ES|QL data federation.
 * Datasets reference data source configurations to access external data. Names must be lowercase
 * and follow index or alias naming rules.
 */
export const EsqlPutDataSourceRequest = z.object({
  name: z.lazy(() => Name).describe('The data source name to create or update.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' }),
  type: z.string().describe('The data source type. Currently, `s3` is supported. The value must be lowercase and contain no whitespace.').meta({ found_in: 'body' }),
  description: z.string().describe('A free-text description of the data source.').optional().meta({ found_in: 'body' }),
  settings: z.record(z.string(), z.any()).describe('Type-specific connection and authentication settings. For `s3`, connection settings include `region` and `endpoint`. Authentication settings include `auth` and the credentials required by the selected authentication method.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlPutDataSourceRequest' })
export type EsqlPutDataSourceRequest = z.infer<typeof EsqlPutDataSourceRequest>

export const EsqlPutDataSourceResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlPutDataSourceResponse' })
export type EsqlPutDataSourceResponse = z.infer<typeof EsqlPutDataSourceResponse>
