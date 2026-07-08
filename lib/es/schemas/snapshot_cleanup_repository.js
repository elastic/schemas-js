/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const long = z.number().meta({ id: 'long' });
export const SnapshotCleanupRepositoryCleanupRepositoryResults = z.object({
    deleted_blobs: long.describe('The number of binary large objects (blobs) removed from the snapshot repository during cleanup operations. A non-zero value indicates that unreferenced blobs were found and subsequently cleaned up.'),
    deleted_bytes: long.describe('The number of bytes freed by cleanup operations.')
}).meta({ id: 'SnapshotCleanupRepositoryCleanupRepositoryResults' });
/**
 * Clean up the snapshot repository.
 *
 * Trigger the review of the contents of a snapshot repository and delete any stale data not referenced by existing snapshots.
 */
export const SnapshotCleanupRepositoryRequest = z.object({
    ...RequestBase.shape,
    name: Name.describe('The name of the snapshot repository to clean up.').meta({ found_in: 'path' }),
    master_timeout: Duration.describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`').optional().meta({ found_in: 'query' }),
    timeout: Duration.describe('The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SnapshotCleanupRepositoryRequest' });
export const SnapshotCleanupRepositoryResponse = z.object({
    results: SnapshotCleanupRepositoryCleanupRepositoryResults.describe('Statistics for cleanup operations.')
}).meta({ id: 'SnapshotCleanupRepositoryResponse' });
//# sourceMappingURL=snapshot_cleanup_repository.js.map