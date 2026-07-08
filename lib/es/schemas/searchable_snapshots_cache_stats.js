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
export const long = z.number().meta({ id: 'long' });
export const ByteSize = z.union([long, z.string()]).meta({ id: 'ByteSize' });
export const NodeId = z.string().meta({ id: 'NodeId' });
export const NodeIds = z.union([NodeId, z.array(NodeId)]).meta({ id: 'NodeIds' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
export const SearchableSnapshotsCacheStatsShared = z.object({
    reads: long,
    bytes_read_in_bytes: ByteSize,
    writes: long,
    bytes_written_in_bytes: ByteSize,
    evictions: long,
    num_regions: integer,
    size_in_bytes: ByteSize,
    region_size_in_bytes: ByteSize
}).meta({ id: 'SearchableSnapshotsCacheStatsShared' });
export const SearchableSnapshotsCacheStatsNode = z.object({
    shared_cache: SearchableSnapshotsCacheStatsShared
}).meta({ id: 'SearchableSnapshotsCacheStatsNode' });
/**
 * Get cache statistics.
 *
 * Get statistics about the shared cache for partially mounted indices.
 */
export const SearchableSnapshotsCacheStatsRequest = z.object({
    ...RequestBase.shape,
    node_id: NodeIds.describe('The names of the nodes in the cluster to target.').optional().meta({ found_in: 'path' })
}).meta({ id: 'SearchableSnapshotsCacheStatsRequest' });
export const SearchableSnapshotsCacheStatsResponse = z.object({
    nodes: z.record(z.string(), SearchableSnapshotsCacheStatsNode)
}).meta({ id: 'SearchableSnapshotsCacheStatsResponse' });
//# sourceMappingURL=searchable_snapshots_cache_stats.js.map