/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const EsqlTestDataSourceConnectionDataSourceTestStatus = z.enum(['success', 'failure', 'untestable']).meta({ id: 'EsqlTestDataSourceConnectionDataSourceTestStatus' })
export type EsqlTestDataSourceConnectionDataSourceTestStatus = z.infer<typeof EsqlTestDataSourceConnectionDataSourceTestStatus>

/**
 * Test an ES|QL data source connection.
 *
 * Tests whether the supplied data source configuration can establish a live connection.
 * The data source does not need to exist in cluster state: this endpoint is intended for
 * validating a new configuration before saving it.
 * The request body accepts the same `type` and `settings` fields as the create or update data
 * source API.
 */
export const EsqlTestDataSourceConnectionRequest = z.object({
  type: z.string().describe('The data source type to test. Must be a known, registered type such as `s3`, `gcs`, or `azure`. Unknown types return a `400` error.').meta({ found_in: 'body' }),
  settings: z.record(z.string(), z.any()).describe('Type-specific connection and authentication settings to test. Uses the same structure as the `settings` field in the create or update data source API.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlTestDataSourceConnectionRequest' })
export type EsqlTestDataSourceConnectionRequest = z.infer<typeof EsqlTestDataSourceConnectionRequest>

export const EsqlTestDataSourceConnectionResponse = z.object({
  status: EsqlTestDataSourceConnectionDataSourceTestStatus.describe('The outcome of the connection test.'),
  error: z.string().describe('A human-readable description of why the connection failed. Present only when `status` is `failure`.').optional(),
  message: z.string().describe('Optional user-visible guidance explaining why the connection could not be tested. Present only when `status` is `untestable` and additional context is available.').optional()
}).meta({ id: 'EsqlTestDataSourceConnectionResponse' })
export type EsqlTestDataSourceConnectionResponse = z.infer<typeof EsqlTestDataSourceConnectionResponse>
