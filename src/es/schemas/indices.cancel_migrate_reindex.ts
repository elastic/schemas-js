/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Indices } from './_types.js'

/**
 * Cancel a migration reindex operation.
 *
 * Cancel a migration reindex attempt for a data stream or index.
 */
export const IndicesCancelMigrateReindexRequest = z.object({
  index: z.lazy(() => Indices).describe('The index or data stream name').meta({ found_in: 'path' })
}).meta({ id: 'IndicesCancelMigrateReindexRequest' })
export type IndicesCancelMigrateReindexRequest = z.infer<typeof IndicesCancelMigrateReindexRequest>

export const IndicesCancelMigrateReindexResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesCancelMigrateReindexResponse' })
export type IndicesCancelMigrateReindexResponse = z.infer<typeof IndicesCancelMigrateReindexResponse>
