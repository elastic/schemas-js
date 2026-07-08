import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const SearchableSnapshotsCacheStatsShared: z.ZodObject<{
    reads: z.ZodNumber;
    bytes_read_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    writes: z.ZodNumber;
    bytes_written_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    evictions: z.ZodNumber;
    num_regions: z.ZodNumber;
    size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    region_size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
}, z.core.$strip>;
export type SearchableSnapshotsCacheStatsShared = z.infer<typeof SearchableSnapshotsCacheStatsShared>;
export declare const SearchableSnapshotsCacheStatsNode: z.ZodObject<{
    shared_cache: z.ZodObject<{
        reads: z.ZodNumber;
        bytes_read_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        writes: z.ZodNumber;
        bytes_written_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        evictions: z.ZodNumber;
        num_regions: z.ZodNumber;
        size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        region_size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SearchableSnapshotsCacheStatsNode = z.infer<typeof SearchableSnapshotsCacheStatsNode>;
/**
 * Get cache statistics.
 *
 * Get statistics about the shared cache for partially mounted indices.
 */
export declare const SearchableSnapshotsCacheStatsRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type SearchableSnapshotsCacheStatsRequest = z.infer<typeof SearchableSnapshotsCacheStatsRequest>;
export declare const SearchableSnapshotsCacheStatsResponse: z.ZodObject<{
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        shared_cache: z.ZodObject<{
            reads: z.ZodNumber;
            bytes_read_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            writes: z.ZodNumber;
            bytes_written_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            evictions: z.ZodNumber;
            num_regions: z.ZodNumber;
            size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            region_size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SearchableSnapshotsCacheStatsResponse = z.infer<typeof SearchableSnapshotsCacheStatsResponse>;
//# sourceMappingURL=searchable_snapshots_cache_stats.d.ts.map