/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a model snapshot.
 *
 * You cannot delete the active model snapshot. To delete that snapshot, first
 * revert to a different one. To identify the active model snapshot, refer to
 * the `model_snapshot_id` in the results from the get jobs API.
 */
export const MlDeleteModelSnapshotRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  snapshot_id: z.lazy(() => Id).describe('Identifier for the model snapshot.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteModelSnapshotRequest' })
export type MlDeleteModelSnapshotRequest = z.infer<typeof MlDeleteModelSnapshotRequest>

export const MlDeleteModelSnapshotResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteModelSnapshotResponse' })
export type MlDeleteModelSnapshotResponse = z.infer<typeof MlDeleteModelSnapshotResponse>
