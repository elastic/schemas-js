/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a connector sync job.
 *
 * Remove a connector sync job and its associated data.
 * This is a destructive action that is not recoverable.
 */
export const ConnectorSyncJobDeleteRequest = z.object({
  connector_sync_job_id: z.lazy(() => Id).describe('The unique identifier of the connector sync job to be deleted').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorSyncJobDeleteRequest' })
export type ConnectorSyncJobDeleteRequest = z.infer<typeof ConnectorSyncJobDeleteRequest>

export const ConnectorSyncJobDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ConnectorSyncJobDeleteResponse' })
export type ConnectorSyncJobDeleteResponse = z.infer<typeof ConnectorSyncJobDeleteResponse>
