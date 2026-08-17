/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { ConnectorConnectorSyncJob } from './connector.js'

/** Get a connector sync job. */
export const ConnectorSyncJobGetRequest = z.object({
  connector_sync_job_id: z.lazy(() => Id).describe('The unique identifier of the connector sync job').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorSyncJobGetRequest' })
export type ConnectorSyncJobGetRequest = z.infer<typeof ConnectorSyncJobGetRequest>

export const ConnectorSyncJobGetResponse = ConnectorConnectorSyncJob.meta({ id: 'ConnectorSyncJobGetResponse' })
export type ConnectorSyncJobGetResponse = z.infer<typeof ConnectorSyncJobGetResponse>
