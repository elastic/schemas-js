/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, integer } from './_types.js'

export const DataRecoveryGetRecoveryPointsRecoveryPoint = z.object({
  start_time: z.lazy(() => DateTime).describe('The time when creation of the recovery point started.'),
  end_time: z.lazy(() => DateTime).describe('The time when creation of the recovery point completed.')
}).meta({ id: 'DataRecoveryGetRecoveryPointsRecoveryPoint' })
export type DataRecoveryGetRecoveryPointsRecoveryPoint = z.infer<typeof DataRecoveryGetRecoveryPointsRecoveryPoint>

/**
 * Get recovery points.
 *
 * Get recovery points from the platform-managed data recovery repository.
 * This API is intended for internal operator use.
 * Recovery points are returned in descending order by end time. Repository,
 * snapshot, and policy identifiers are not exposed.
 */
export const DataRecoveryGetRecoveryPointsRequest = z.object({
  end_time_before: z.lazy(() => DateTime).describe('Return only recovery points whose end time is earlier than this value. The boundary is exclusive and can be set to the last recovery point\'s end time to retrieve the next page.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The maximum number of recovery points to return. The value must be between 1 and 1000.').optional().meta({ found_in: 'query' })
}).meta({ id: 'DataRecoveryGetRecoveryPointsRequest' })
export type DataRecoveryGetRecoveryPointsRequest = z.infer<typeof DataRecoveryGetRecoveryPointsRequest>

export const DataRecoveryGetRecoveryPointsResponse = z.object({
  recovery_points: z.array(DataRecoveryGetRecoveryPointsRecoveryPoint).describe('Recovery points in descending order by end time.')
}).meta({ id: 'DataRecoveryGetRecoveryPointsResponse' })
export type DataRecoveryGetRecoveryPointsResponse = z.infer<typeof DataRecoveryGetRecoveryPointsResponse>
