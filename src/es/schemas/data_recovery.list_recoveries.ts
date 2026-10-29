/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, SortOrder, integer } from './_types.js'
import { DataRecoveryRecovery } from './data_recovery.js'

export const DataRecoveryRecoveryRunStatus = z.enum(['running', 'completed', 'failed']).meta({ id: 'DataRecoveryRecoveryRunStatus' })
export type DataRecoveryRecoveryRunStatus = z.infer<typeof DataRecoveryRecoveryRunStatus>

/**
 * List recoveries.
 *
 * List the recoveries that were started with the start recovery API, including those that have finished.
 * This API is intended for internal operator use.
 * Recoveries are ordered by start time, and the most recent are returned first by default.
 * To retrieve further pages, pass the start time and identifier of the last recovery of a page as `search_after_started_at` and `search_after_recovery_id`.
 */
export const DataRecoveryListRecoveriesRequest = z.object({
  size: z.lazy(() => integer).describe('The maximum number of recoveries to return. The value must be between 1 and 1000.').optional().meta({ found_in: 'query' }),
  started_at_gte: z.lazy(() => DateTime).describe('Return only recoveries that started at or after this time, as an ISO-8601 timestamp.').optional().meta({ found_in: 'query' }),
  started_at_lt: z.lazy(() => DateTime).describe('Return only recoveries that started before this time, as an ISO-8601 timestamp. It must not be earlier than `started_at_gte`.').optional().meta({ found_in: 'query' }),
  order: z.lazy(() => SortOrder).describe('The order of the recoveries by start time.').optional().meta({ found_in: 'query' }),
  search_after_started_at: z.lazy(() => DateTime).describe('Return only recoveries after this start time in the sort order, to retrieve the next page. It must be provided together with `search_after_recovery_id`.').optional().meta({ found_in: 'query' }),
  search_after_recovery_id: z.lazy(() => Id).describe('Return only recoveries after this identifier in the sort order for recoveries with the same start time, to retrieve the next page. It must be provided together with `search_after_started_at`.').optional().meta({ found_in: 'query' }),
  status: z.union([z.lazy(() => DataRecoveryRecoveryRunStatus), z.array(z.lazy(() => DataRecoveryRecoveryRunStatus))]).describe('A comma-separated list of statuses. Return only recoveries with one of these statuses. By default, recoveries with any status are returned.').optional().meta({ found_in: 'query' })
}).meta({ id: 'DataRecoveryListRecoveriesRequest' })
export type DataRecoveryListRecoveriesRequest = z.infer<typeof DataRecoveryListRecoveriesRequest>

export const DataRecoveryListRecoveriesResponse = z.object({
  recoveries: z.array(z.lazy(() => DataRecoveryRecovery)).describe('The recoveries, in the requested order.'),
  has_more: z.boolean().describe('Whether there are more recoveries after the last one in this page.')
}).meta({ id: 'DataRecoveryListRecoveriesResponse' })
export type DataRecoveryListRecoveriesResponse = z.infer<typeof DataRecoveryListRecoveriesResponse>
