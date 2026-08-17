/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, IndexName } from './_types.js'

export const IndicesMigrateReindexModeEnum = z.enum(['upgrade']).meta({ id: 'IndicesMigrateReindexModeEnum' })
export type IndicesMigrateReindexModeEnum = z.infer<typeof IndicesMigrateReindexModeEnum>

export const IndicesMigrateReindexSourceIndex = z.object({
  index: z.lazy(() => IndexName)
}).meta({ id: 'IndicesMigrateReindexSourceIndex' })
export type IndicesMigrateReindexSourceIndex = z.infer<typeof IndicesMigrateReindexSourceIndex>

export const IndicesMigrateReindexMigrateReindex = z.object({
  mode: IndicesMigrateReindexModeEnum.describe('Reindex mode. Currently only \'upgrade\' is supported.'),
  source: IndicesMigrateReindexSourceIndex.describe('The source index or data stream (only data streams are currently supported).')
}).meta({ id: 'IndicesMigrateReindexMigrateReindex' })
export type IndicesMigrateReindexMigrateReindex = z.infer<typeof IndicesMigrateReindexMigrateReindex>

/**
 * Reindex legacy backing indices.
 *
 * Reindex all legacy backing indices for a data stream.
 * This operation occurs in a persistent task.
 * The persistent task ID is returned immediately and the reindexing work is completed in that task.
 */
export const IndicesMigrateReindexRequest = z.object({
  reindex: IndicesMigrateReindexMigrateReindex.optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesMigrateReindexRequest' })
export type IndicesMigrateReindexRequest = z.infer<typeof IndicesMigrateReindexRequest>

export const IndicesMigrateReindexResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesMigrateReindexResponse' })
export type IndicesMigrateReindexResponse = z.infer<typeof IndicesMigrateReindexResponse>
