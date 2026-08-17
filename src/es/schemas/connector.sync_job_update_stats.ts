/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata, integer, long } from './_types.js'

/**
 * Set the connector sync job stats.
 *
 * Stats include: `deleted_document_count`, `indexed_document_count`, `indexed_document_volume`, and `total_document_count`.
 * You can also update `last_seen`.
 * This API is mainly used by the connector service for updating sync job information.
 *
 * To sync data using self-managed connectors, you need to deploy the Elastic connector service on your own infrastructure.
 * This service runs automatically on Elastic Cloud for Elastic managed connectors.
 */
export const ConnectorSyncJobUpdateStatsRequest = z.object({
  connector_sync_job_id: z.lazy(() => Id).describe('The unique identifier of the connector sync job.').meta({ found_in: 'path' }),
  deleted_document_count: z.lazy(() => long).describe('The number of documents the sync job deleted.').meta({ found_in: 'body' }),
  indexed_document_count: z.lazy(() => long).describe('The number of documents the sync job indexed.').meta({ found_in: 'body' }),
  indexed_document_volume: z.lazy(() => long).describe('The total size of the data (in MiB) the sync job indexed.').meta({ found_in: 'body' }),
  last_seen: z.lazy(() => Duration).describe('The timestamp to use in the `last_seen` property for the connector sync job.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('The connector-specific metadata.').optional().meta({ found_in: 'body' }),
  total_document_count: z.lazy(() => integer).describe('The total number of documents in the target index after the sync job finished.').optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSyncJobUpdateStatsRequest' })
export type ConnectorSyncJobUpdateStatsRequest = z.infer<typeof ConnectorSyncJobUpdateStatsRequest>

export const ConnectorSyncJobUpdateStatsResponse = z.object({
}).meta({ id: 'ConnectorSyncJobUpdateStatsResponse' })
export type ConnectorSyncJobUpdateStatsResponse = z.infer<typeof ConnectorSyncJobUpdateStatsResponse>
