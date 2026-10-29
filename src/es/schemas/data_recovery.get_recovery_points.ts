/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, integer } from './_types.js'
import { DataRecoveryPoint } from './data_recovery.js'

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
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The maximum number of recovery points to return. The value must be between 1 and 1000.').optional().meta({ found_in: 'query' })
}).meta({ id: 'DataRecoveryGetRecoveryPointsRequest' })
export type DataRecoveryGetRecoveryPointsRequest = z.infer<typeof DataRecoveryGetRecoveryPointsRequest>

export const DataRecoveryGetRecoveryPointsResponse = z.object({
  recovery_points: z.array(z.lazy(() => DataRecoveryPoint)).describe('Recovery points in descending order by end time.')
}).meta({ id: 'DataRecoveryGetRecoveryPointsResponse' })
export type DataRecoveryGetRecoveryPointsResponse = z.infer<typeof DataRecoveryGetRecoveryPointsResponse>
