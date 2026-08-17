/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Names } from './_types.js'

/**
 * Delete snapshot repositories.
 *
 * When a repository is unregistered, Elasticsearch removes only the reference to the location where the repository is storing the snapshots.
 * The snapshots themselves are left untouched and in place.
 */
export const SnapshotDeleteRepositoryRequest = z.object({
  name: z.lazy(() => Names).describe('The ame of the snapshot repositories to unregister. Wildcard (`*`) patterns are supported.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SnapshotDeleteRepositoryRequest' })
export type SnapshotDeleteRepositoryRequest = z.infer<typeof SnapshotDeleteRepositoryRequest>

export const SnapshotDeleteRepositoryResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SnapshotDeleteRepositoryResponse' })
export type SnapshotDeleteRepositoryResponse = z.infer<typeof SnapshotDeleteRepositoryResponse>
