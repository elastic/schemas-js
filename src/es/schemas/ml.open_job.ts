/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, NodeId } from './_types.js'

/**
 * Open anomaly detection jobs.
 *
 * An anomaly detection job must be opened to be ready to receive and analyze
 * data. It can be opened and closed multiple times throughout its lifecycle.
 * When you open a new job, it starts with an empty model.
 * When you open an existing job, the most recent model state is automatically
 * loaded. The job is ready to resume its analysis from where it left off, once
 * new data is received.
 */
export const MlOpenJobRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Refer to the description for the `timeout` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlOpenJobRequest' })
export type MlOpenJobRequest = z.infer<typeof MlOpenJobRequest>

export const MlOpenJobResponse = z.object({
  opened: z.boolean(),
  node: z.lazy(() => NodeId).describe('The ID of the node that the job was started on. In serverless this will be the "serverless". If the job is allowed to open lazily and has not yet been assigned to a node, this value is an empty string.')
}).meta({ id: 'MlOpenJobResponse' })
export type MlOpenJobResponse = z.infer<typeof MlOpenJobResponse>
