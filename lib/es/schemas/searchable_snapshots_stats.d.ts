import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SearchableSnapshotsStatsLevel: z.ZodEnum<{
    indices: "indices";
    shards: "shards";
    cluster: "cluster";
}>;
export type SearchableSnapshotsStatsLevel = z.infer<typeof SearchableSnapshotsStatsLevel>;
/** Get searchable snapshot statistics. */
export declare const SearchableSnapshotsStatsRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    level: z.ZodOptional<z.ZodEnum<{
        indices: "indices";
        shards: "shards";
        cluster: "cluster";
    }>>;
}, z.core.$strip>;
export type SearchableSnapshotsStatsRequest = z.infer<typeof SearchableSnapshotsStatsRequest>;
export declare const SearchableSnapshotsStatsResponse: z.ZodObject<{
    stats: z.ZodAny;
    total: z.ZodAny;
}, z.core.$strip>;
export type SearchableSnapshotsStatsResponse = z.infer<typeof SearchableSnapshotsStatsResponse>;
//# sourceMappingURL=searchable_snapshots_stats.d.ts.map