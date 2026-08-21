/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name, Names } from './_types.js'

/** Delete snapshots. */
export const SnapshotDeleteRequest = z.object({
  repository: z.lazy(() => Name).describe('The name of the repository to delete a snapshot from.').meta({ found_in: 'path' }),
  snapshot: z.lazy(() => Names).describe('A comma-separated list of snapshot names to delete. It also accepts wildcards (`*`).').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request returns a response when the matching snapshots are all deleted. If `false`, the request returns a response as soon as the deletes are scheduled.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SnapshotDeleteRequest' })
export type SnapshotDeleteRequest = z.infer<typeof SnapshotDeleteRequest>

export const SnapshotDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SnapshotDeleteResponse' })
export type SnapshotDeleteResponse = z.infer<typeof SnapshotDeleteResponse>
