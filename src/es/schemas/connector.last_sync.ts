/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, Result, long } from './_types.js'
import { ConnectorSyncStatus } from './connector.js'

/**
 * Update the connector last sync stats.
 *
 * Update the fields related to the last sync of a connector.
 * This action is used for analytics and monitoring.
 */
export const ConnectorLastSyncRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  last_access_control_sync_error: z.string().optional().meta({ found_in: 'body' }),
  last_access_control_sync_scheduled_at: z.lazy(() => DateTime).optional().meta({ found_in: 'body' }),
  last_access_control_sync_status: ConnectorSyncStatus.optional().meta({ found_in: 'body' }),
  last_deleted_document_count: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  last_incremental_sync_scheduled_at: z.lazy(() => DateTime).optional().meta({ found_in: 'body' }),
  last_indexed_document_count: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  last_seen: z.lazy(() => DateTime).optional().meta({ found_in: 'body' }),
  last_sync_error: z.string().optional().meta({ found_in: 'body' }),
  last_sync_scheduled_at: z.lazy(() => DateTime).optional().meta({ found_in: 'body' }),
  last_sync_status: ConnectorSyncStatus.optional().meta({ found_in: 'body' }),
  last_synced: z.lazy(() => DateTime).optional().meta({ found_in: 'body' }),
  sync_cursor: z.any().optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorLastSyncRequest' })
export type ConnectorLastSyncRequest = z.infer<typeof ConnectorLastSyncRequest>

export const ConnectorLastSyncResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorLastSyncResponse' })
export type ConnectorLastSyncResponse = z.infer<typeof ConnectorLastSyncResponse>
