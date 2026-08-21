/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer, long } from './_types.js'
import { ConnectorConnectorSyncJob, ConnectorSyncJobType, ConnectorSyncStatus } from './connector.js'

/**
 * Get all connector sync jobs.
 *
 * Get information about all stored connector sync jobs listed by their creation date in ascending order.
 */
export const ConnectorSyncJobListRequest = z.object({
  from: z.lazy(() => integer).describe('Starting offset').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies a max number of results to get').optional().meta({ found_in: 'query' }),
  status: ConnectorSyncStatus.describe('A sync job status to fetch connector sync jobs for').optional().meta({ found_in: 'query' }),
  connector_id: z.lazy(() => Id).describe('A connector id to fetch connector sync jobs for').optional().meta({ found_in: 'query' }),
  job_type: z.union([z.lazy(() => ConnectorSyncJobType), z.array(z.lazy(() => ConnectorSyncJobType))]).describe('A comma-separated list of job types to fetch the sync jobs for').optional().meta({ found_in: 'query' })
}).meta({ id: 'ConnectorSyncJobListRequest' })
export type ConnectorSyncJobListRequest = z.infer<typeof ConnectorSyncJobListRequest>

export const ConnectorSyncJobListResponse = z.object({
  count: z.lazy(() => long),
  results: z.array(ConnectorConnectorSyncJob)
}).meta({ id: 'ConnectorSyncJobListResponse' })
export type ConnectorSyncJobListResponse = z.infer<typeof ConnectorSyncJobListResponse>
