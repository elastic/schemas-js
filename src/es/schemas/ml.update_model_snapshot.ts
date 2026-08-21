/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { MlModelSnapshot } from './ml.js'

/**
 * Update a snapshot.
 *
 * Updates certain properties of a snapshot.
 */
export const MlUpdateModelSnapshotRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  snapshot_id: z.lazy(() => Id).describe('Identifier for the model snapshot.').meta({ found_in: 'path' }),
  description: z.string().describe('A description of the model snapshot.').optional().meta({ found_in: 'body' }),
  retain: z.boolean().describe('If `true`, this snapshot will not be deleted during automatic cleanup of snapshots older than `model_snapshot_retention_days`. However, this snapshot will be deleted when the job is deleted.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlUpdateModelSnapshotRequest' })
export type MlUpdateModelSnapshotRequest = z.infer<typeof MlUpdateModelSnapshotRequest>

export const MlUpdateModelSnapshotResponse = z.object({
  acknowledged: z.boolean(),
  model: MlModelSnapshot
}).meta({ id: 'MlUpdateModelSnapshotResponse' })
export type MlUpdateModelSnapshotResponse = z.infer<typeof MlUpdateModelSnapshotResponse>
