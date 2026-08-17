/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ErrorCause, long } from './_types.js'
import { BulkOperationContainer, BulkUpdateAction } from './bulk.js'

/**
 * Send monitoring data.
 *
 * This API is used by the monitoring features to send monitoring data.
 */
export const MonitoringBulkRequest = z.object({
  system_id: z.string().describe('Identifier of the monitored system').meta({ found_in: 'query' }),
  system_api_version: z.string().describe('').meta({ found_in: 'query' }),
  interval: z.lazy(() => Duration).describe('Collection interval (e.g., \'10s\' or \'10000ms\') of the payload').meta({ found_in: 'query' }),
  operations: z.array(z.union([BulkOperationContainer, BulkUpdateAction, z.any()])).optional().meta({ found_in: 'body' })
}).meta({ id: 'MonitoringBulkRequest' })
export type MonitoringBulkRequest = z.infer<typeof MonitoringBulkRequest>

export const MonitoringBulkResponse = z.object({
  error: z.lazy(() => ErrorCause).optional(),
  errors: z.boolean().describe('True if there is was an error'),
  ignored: z.boolean().describe('Was collection disabled?'),
  took: z.lazy(() => long)
}).meta({ id: 'MonitoringBulkResponse' })
export type MonitoringBulkResponse = z.infer<typeof MonitoringBulkResponse>
