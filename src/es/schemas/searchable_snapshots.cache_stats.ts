/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, NodeIds, integer, long } from './_types.js'

export const SearchableSnapshotsCacheStatsShared = z.object({
  reads: z.lazy(() => long),
  bytes_read_in_bytes: z.lazy(() => ByteSize),
  writes: z.lazy(() => long),
  bytes_written_in_bytes: z.lazy(() => ByteSize),
  evictions: z.lazy(() => long),
  num_regions: z.lazy(() => integer),
  size_in_bytes: z.lazy(() => ByteSize),
  region_size_in_bytes: z.lazy(() => ByteSize)
}).meta({ id: 'SearchableSnapshotsCacheStatsShared' })
export type SearchableSnapshotsCacheStatsShared = z.infer<typeof SearchableSnapshotsCacheStatsShared>

export const SearchableSnapshotsCacheStatsNode = z.object({
  shared_cache: SearchableSnapshotsCacheStatsShared
}).meta({ id: 'SearchableSnapshotsCacheStatsNode' })
export type SearchableSnapshotsCacheStatsNode = z.infer<typeof SearchableSnapshotsCacheStatsNode>

/**
 * Get cache statistics.
 *
 * Get statistics about the shared cache for partially mounted indices.
 */
export const SearchableSnapshotsCacheStatsRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('The names of the nodes in the cluster to target.').optional().meta({ found_in: 'path' })
}).meta({ id: 'SearchableSnapshotsCacheStatsRequest' })
export type SearchableSnapshotsCacheStatsRequest = z.infer<typeof SearchableSnapshotsCacheStatsRequest>

export const SearchableSnapshotsCacheStatsResponse = z.object({
  nodes: z.record(z.string(), SearchableSnapshotsCacheStatsNode)
}).meta({ id: 'SearchableSnapshotsCacheStatsResponse' })
export type SearchableSnapshotsCacheStatsResponse = z.infer<typeof SearchableSnapshotsCacheStatsResponse>
