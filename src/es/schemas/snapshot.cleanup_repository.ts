/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name, long } from './_types.js'

export const SnapshotCleanupRepositoryCleanupRepositoryResults = z.object({
  deleted_blobs: z.lazy(() => long).describe('The number of binary large objects (blobs) removed from the snapshot repository during cleanup operations. A non-zero value indicates that unreferenced blobs were found and subsequently cleaned up.'),
  deleted_bytes: z.lazy(() => long).describe('The number of bytes freed by cleanup operations.')
}).meta({ id: 'SnapshotCleanupRepositoryCleanupRepositoryResults' })
export type SnapshotCleanupRepositoryCleanupRepositoryResults = z.infer<typeof SnapshotCleanupRepositoryCleanupRepositoryResults>

/**
 * Clean up the snapshot repository.
 *
 * Trigger the review of the contents of a snapshot repository and delete any stale data not referenced by existing snapshots.
 */
export const SnapshotCleanupRepositoryRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the snapshot repository to clean up.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SnapshotCleanupRepositoryRequest' })
export type SnapshotCleanupRepositoryRequest = z.infer<typeof SnapshotCleanupRepositoryRequest>

export const SnapshotCleanupRepositoryResponse = z.object({
  results: SnapshotCleanupRepositoryCleanupRepositoryResults.describe('Statistics for cleanup operations.')
}).meta({ id: 'SnapshotCleanupRepositoryResponse' })
export type SnapshotCleanupRepositoryResponse = z.infer<typeof SnapshotCleanupRepositoryResponse>
