/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, Indices, Name, ShardStatistics } from './_types.js'

export const SearchableSnapshotsMountMountedSnapshot = z.object({
  snapshot: z.lazy(() => Name),
  indices: z.lazy(() => Indices),
  shards: z.lazy(() => ShardStatistics)
}).meta({ id: 'SearchableSnapshotsMountMountedSnapshot' })
export type SearchableSnapshotsMountMountedSnapshot = z.infer<typeof SearchableSnapshotsMountMountedSnapshot>

export const SearchableSnapshotsMountStorageOption = z.enum(['full_copy', 'shared_cache']).meta({ id: 'SearchableSnapshotsMountStorageOption' })
export type SearchableSnapshotsMountStorageOption = z.infer<typeof SearchableSnapshotsMountStorageOption>

/**
 * Mount a snapshot.
 *
 * Mount a snapshot as a searchable snapshot index.
 * Do not use this API for snapshots managed by index lifecycle management (ILM).
 * Manually mounting ILM-managed snapshots can interfere with ILM processes.
 */
export const SearchableSnapshotsMountRequest = z.object({
  repository: z.lazy(() => Name).describe('The name of the repository containing the snapshot of the index to mount.').meta({ found_in: 'path' }),
  snapshot: z.lazy(() => Name).describe('The name of the snapshot of the index to mount.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If true, the request blocks until the operation is complete.').optional().meta({ found_in: 'query' }),
  storage: SearchableSnapshotsMountStorageOption.describe('The mount option for the searchable snapshot index. For further information on mount options, refer to: [Mount options](https://www.elastic.co/docs/deploy-manage/tools/snapshot-and-restore/searchable-snapshots#searchable-snapshot-mount-storage-options)').optional().meta({ found_in: 'query' }),
  index: z.lazy(() => IndexName).describe('The name of the index contained in the snapshot whose data is to be mounted. If no `renamed_index` is specified, this name will also be used to create the new index.').meta({ found_in: 'body' }),
  renamed_index: z.lazy(() => IndexName).describe('The name of the index that will be created.').optional().meta({ found_in: 'body' }),
  index_settings: z.record(z.string(), z.any()).describe('The settings that should be added to the index when it is mounted.').optional().meta({ found_in: 'body' }),
  ignore_index_settings: z.array(z.string()).describe('The names of settings that should be removed from the index when it is mounted.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SearchableSnapshotsMountRequest' })
export type SearchableSnapshotsMountRequest = z.infer<typeof SearchableSnapshotsMountRequest>

export const SearchableSnapshotsMountResponse = z.object({
  snapshot: SearchableSnapshotsMountMountedSnapshot
}).meta({ id: 'SearchableSnapshotsMountResponse' })
export type SearchableSnapshotsMountResponse = z.infer<typeof SearchableSnapshotsMountResponse>
