/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Names } from './_types.js'

/**
 * Delete ES|QL data sources.
 *
 * Deletes one or more data sources used in ES|QL data federation.
 * Fails with `409` if any dataset references one of the named data sources;
 * delete the dependent datasets first.
 */
export const EsqlDeleteDataSourceRequest = z.object({
  name: z.lazy(() => Names).describe('A comma-separated list of data source names to delete.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlDeleteDataSourceRequest' })
export type EsqlDeleteDataSourceRequest = z.infer<typeof EsqlDeleteDataSourceRequest>

export const EsqlDeleteDataSourceResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlDeleteDataSourceResponse' })
export type EsqlDeleteDataSourceResponse = z.infer<typeof EsqlDeleteDataSourceResponse>
