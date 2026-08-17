/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Clone a snapshot.
 *
 * Clone part of all of a snapshot into another snapshot in the same repository.
 */
export const SnapshotCloneRequest = z.object({
  repository: z.lazy(() => Name).describe('The name of the snapshot repository that both source and target snapshot belong to.').meta({ found_in: 'path' }),
  snapshot: z.lazy(() => Name).describe('The source snapshot name.').meta({ found_in: 'path' }),
  target_snapshot: z.lazy(() => Name).describe('The target snapshot name.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  indices: z.string().describe('A comma-separated list of indices to include in the snapshot. Multi-target syntax is supported.').meta({ found_in: 'body' })
}).meta({ id: 'SnapshotCloneRequest' })
export type SnapshotCloneRequest = z.infer<typeof SnapshotCloneRequest>

export const SnapshotCloneResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SnapshotCloneResponse' })
export type SnapshotCloneResponse = z.infer<typeof SnapshotCloneResponse>
