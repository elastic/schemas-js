/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, integer } from './_types.js'
import { DataRecoveryPoint } from './data_recovery.js'

export const DataRecoverySourceType = z.enum(['index', 'data_stream']).meta({ id: 'DataRecoverySourceType' })
export type DataRecoverySourceType = z.infer<typeof DataRecoverySourceType>

export const DataRecoveryGetRecoverySourcesRecoverySource = z.object({
  complete: z.boolean().describe('Whether the logical source was completely captured in the recovery point. For a data stream, this includes its backing and failure-store indices.'),
  name: z.string().describe('The name of the index or data stream.'),
  type: z.lazy(() => DataRecoverySourceType).describe('The type of logical source.')
}).meta({ id: 'DataRecoveryGetRecoverySourcesRecoverySource' })
export type DataRecoveryGetRecoverySourcesRecoverySource = z.infer<typeof DataRecoveryGetRecoverySourcesRecoverySource>

/**
 * Get recovery sources.
 *
 * Get the logical sources captured at an exact recovery point in the platform-managed data recovery repository.
 * This API is intended for internal operator use. Repository, snapshot, and policy identifiers are not exposed.
 */
export const DataRecoveryGetRecoverySourcesRequest = z.object({
  expression: z.union([z.string(), z.array(z.string())]).describe('A comma-separated list of source expressions to match. Wildcards and exclusions prefixed with `-` are supported.').meta({ found_in: 'query' }),
  include_incomplete_sources: z.boolean().describe('If `true`, include logical sources that were not completely captured in the recovery point.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  recovery_point_end_time: z.lazy(() => DateTime).describe('The exact end time of the recovery point.').meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The maximum number of matching sources to return. The value must be between 1 and 1000.').optional().meta({ found_in: 'query' })
}).meta({ id: 'DataRecoveryGetRecoverySourcesRequest' })
export type DataRecoveryGetRecoverySourcesRequest = z.infer<typeof DataRecoveryGetRecoverySourcesRequest>

export const DataRecoveryGetRecoverySourcesResponse = z.object({
  has_more: z.boolean().describe('Whether more matching sources are available than were returned.'),
  recovery_point: z.lazy(() => DataRecoveryPoint).describe('The selected recovery point.'),
  sources: z.array(DataRecoveryGetRecoverySourcesRecoverySource).describe('Matching logical recovery sources ordered by name.')
}).meta({ id: 'DataRecoveryGetRecoverySourcesResponse' })
export type DataRecoveryGetRecoverySourcesResponse = z.infer<typeof DataRecoveryGetRecoverySourcesResponse>
