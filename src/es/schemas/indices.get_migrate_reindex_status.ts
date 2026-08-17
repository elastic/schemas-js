/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, EpochTime, Indices, integer, long } from './_types.js'

/**
 * Get the migration reindexing status.
 *
 * Get the status of a migration reindex attempt for a data stream or index.
 */
export const IndicesGetMigrateReindexStatusRequest = z.object({
  index: z.lazy(() => Indices).describe('The index or data stream name.').meta({ found_in: 'path' })
}).meta({ id: 'IndicesGetMigrateReindexStatusRequest' })
export type IndicesGetMigrateReindexStatusRequest = z.infer<typeof IndicesGetMigrateReindexStatusRequest>

export const IndicesGetMigrateReindexStatusStatusInProgress = z.object({
  index: z.string(),
  total_doc_count: z.lazy(() => long),
  reindexed_doc_count: z.lazy(() => long)
}).meta({ id: 'IndicesGetMigrateReindexStatusStatusInProgress' })
export type IndicesGetMigrateReindexStatusStatusInProgress = z.infer<typeof IndicesGetMigrateReindexStatusStatusInProgress>

export const IndicesGetMigrateReindexStatusStatusError = z.object({
  index: z.string(),
  message: z.string()
}).meta({ id: 'IndicesGetMigrateReindexStatusStatusError' })
export type IndicesGetMigrateReindexStatusStatusError = z.infer<typeof IndicesGetMigrateReindexStatusStatusError>

export const IndicesGetMigrateReindexStatusResponse = z.object({
  start_time: z.lazy(() => DateTime).optional(),
  start_time_millis: z.lazy(() => EpochTime),
  complete: z.boolean(),
  total_indices_in_data_stream: z.lazy(() => integer),
  total_indices_requiring_upgrade: z.lazy(() => integer),
  successes: z.lazy(() => integer),
  in_progress: z.array(IndicesGetMigrateReindexStatusStatusInProgress),
  pending: z.lazy(() => integer),
  errors: z.array(IndicesGetMigrateReindexStatusStatusError),
  exception: z.string().optional()
}).meta({ id: 'IndicesGetMigrateReindexStatusResponse' })
export type IndicesGetMigrateReindexStatusResponse = z.infer<typeof IndicesGetMigrateReindexStatusResponse>
