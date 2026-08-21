/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { MlModelSnapshot } from './ml.js'

/**
 * Revert to a snapshot.
 *
 * The machine learning features react quickly to anomalous input, learning new
 * behaviors in data. Highly anomalous input increases the variance in the
 * models whilst the system learns whether this is a new step-change in behavior
 * or a one-off event. In the case where this anomalous input is known to be a
 * one-off, then it might be appropriate to reset the model state to a time
 * before this event. For example, you might consider reverting to a saved
 * snapshot after Black Friday or a critical system failure.
 */
export const MlRevertModelSnapshotRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  snapshot_id: z.lazy(() => Id).describe('You can specify `empty` as the <snapshot_id>. Reverting to the empty snapshot means the anomaly detection job starts learning a new model from scratch when it is started.').meta({ found_in: 'path' }),
  delete_intervening_results: z.boolean().describe('Refer to the description for the `delete_intervening_results` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlRevertModelSnapshotRequest' })
export type MlRevertModelSnapshotRequest = z.infer<typeof MlRevertModelSnapshotRequest>

export const MlRevertModelSnapshotResponse = z.object({
  model: MlModelSnapshot
}).meta({ id: 'MlRevertModelSnapshotResponse' })
export type MlRevertModelSnapshotResponse = z.infer<typeof MlRevertModelSnapshotResponse>
