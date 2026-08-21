/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/**
 * Cancel a connector sync job.
 *
 * Cancel a connector sync job, which sets the status to cancelling and updates `cancellation_requested_at` to the current time.
 * The connector service is then responsible for setting the status of connector sync jobs to cancelled.
 */
export const ConnectorSyncJobCancelRequest = z.object({
  connector_sync_job_id: z.lazy(() => Id).describe('The unique identifier of the connector sync job').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorSyncJobCancelRequest' })
export type ConnectorSyncJobCancelRequest = z.infer<typeof ConnectorSyncJobCancelRequest>

export const ConnectorSyncJobCancelResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorSyncJobCancelResponse' })
export type ConnectorSyncJobCancelResponse = z.infer<typeof ConnectorSyncJobCancelResponse>
