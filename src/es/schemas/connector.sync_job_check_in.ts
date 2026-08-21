/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Check in a connector sync job.
 *
 * Check in a connector sync job and set the `last_seen` field to the current time before updating it in the internal index.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export const ConnectorSyncJobCheckInRequest = z.object({
  connector_sync_job_id: z.lazy(() => Id).describe('The unique identifier of the connector sync job to be checked in.').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorSyncJobCheckInRequest' })
export type ConnectorSyncJobCheckInRequest = z.infer<typeof ConnectorSyncJobCheckInRequest>

export const ConnectorSyncJobCheckInResponse = z.object({
}).meta({ id: 'ConnectorSyncJobCheckInResponse' })
export type ConnectorSyncJobCheckInResponse = z.infer<typeof ConnectorSyncJobCheckInResponse>
