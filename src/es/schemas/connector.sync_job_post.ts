/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { ConnectorSyncJobType } from './connector.js'

export const ConnectorSyncJobTriggerMethod = z.enum(['on_demand', 'scheduled']).meta({ id: 'ConnectorSyncJobTriggerMethod' })
export type ConnectorSyncJobTriggerMethod = z.infer<typeof ConnectorSyncJobTriggerMethod>

/**
 * Create a connector sync job.
 *
 * Create a connector sync job document in the internal index and initialize its counters and timestamps with default values.
 */
export const ConnectorSyncJobPostRequest = z.object({
  id: z.lazy(() => Id).describe('The id of the associated connector').meta({ found_in: 'body' }),
  job_type: z.lazy(() => ConnectorSyncJobType).optional().meta({ found_in: 'body' }),
  trigger_method: z.lazy(() => ConnectorSyncJobTriggerMethod).optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSyncJobPostRequest' })
export type ConnectorSyncJobPostRequest = z.infer<typeof ConnectorSyncJobPostRequest>

export const ConnectorSyncJobPostResponse = z.object({
  id: z.lazy(() => Id)
}).meta({ id: 'ConnectorSyncJobPostResponse' })
export type ConnectorSyncJobPostResponse = z.infer<typeof ConnectorSyncJobPostResponse>
