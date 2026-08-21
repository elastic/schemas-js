/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Field, Id, integer, long } from './_types.js'
import { MlModelSnapshot, MlPage } from './ml.js'

/** Get model snapshots info. */
export const MlGetModelSnapshotsRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  snapshot_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the model snapshot. You can get information for multiple snapshots by using a comma-separated list or a wildcard expression. You can get all snapshots by using `_all`, by specifying `*` as the snapshot ID, or by omitting the snapshot ID.').optional().meta({ found_in: 'path' }),
  from: z.lazy(() => integer).describe('Skips the specified number of snapshots.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of snapshots to obtain.').optional().meta({ found_in: 'query' }),
  desc: z.boolean().describe('Refer to the description for the `desc` query parameter.').optional().meta({ found_in: 'body' }),
  end: z.lazy(() => DateTime).describe('Refer to the description for the `end` query parameter.').optional().meta({ found_in: 'body' }),
  page: MlPage.optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Field).describe('Refer to the description for the `sort` query parameter.').optional().meta({ found_in: 'body' }),
  start: z.lazy(() => DateTime).describe('Refer to the description for the `start` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlGetModelSnapshotsRequest' })
export type MlGetModelSnapshotsRequest = z.infer<typeof MlGetModelSnapshotsRequest>

export const MlGetModelSnapshotsResponse = z.object({
  count: z.lazy(() => long),
  model_snapshots: z.array(MlModelSnapshot)
}).meta({ id: 'MlGetModelSnapshotsResponse' })
export type MlGetModelSnapshotsResponse = z.infer<typeof MlGetModelSnapshotsResponse>
