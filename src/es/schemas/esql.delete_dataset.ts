/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Names } from './_types.js'

/**
 * Delete ES|QL datasets.
 *
 * Deletes one or more datasets used in ES|QL data federation.
 * If any specified dataset does not exist, the request fails and no datasets are deleted.
 */
export const EsqlDeleteDatasetRequest = z.object({
  name: z.lazy(() => Names).describe('A comma-separated list of dataset names to delete.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlDeleteDatasetRequest' })
export type EsqlDeleteDatasetRequest = z.infer<typeof EsqlDeleteDatasetRequest>

export const EsqlDeleteDatasetResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlDeleteDatasetResponse' })
export type EsqlDeleteDatasetResponse = z.infer<typeof EsqlDeleteDatasetResponse>
