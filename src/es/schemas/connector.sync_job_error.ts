/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Set a connector sync job error.
 *
 * Set the `error` field for a connector sync job and set its `status` to `error`.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export const ConnectorSyncJobErrorRequest = z.object({
  connector_sync_job_id: z.lazy(() => Id).describe('The unique identifier for the connector sync job.').meta({ found_in: 'path' }),
  error: z.string().describe('The error for the connector sync job error field.').meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSyncJobErrorRequest' })
export type ConnectorSyncJobErrorRequest = z.infer<typeof ConnectorSyncJobErrorRequest>

export const ConnectorSyncJobErrorResponse = z.object({
}).meta({ id: 'ConnectorSyncJobErrorResponse' })
export type ConnectorSyncJobErrorResponse = z.infer<typeof ConnectorSyncJobErrorResponse>
