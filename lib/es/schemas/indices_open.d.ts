import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const ExpandWildcard: z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>;
export type ExpandWildcard = z.infer<typeof ExpandWildcard>;
export declare const ExpandWildcards: z.ZodUnion<readonly [z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>, z.ZodArray<z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>>]>;
export type ExpandWildcards = z.infer<typeof ExpandWildcards>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const WaitForActiveShardOptions: z.ZodEnum<{
    all: "all";
    "index-setting": "index-setting";
}>;
export type WaitForActiveShardOptions = z.infer<typeof WaitForActiveShardOptions>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const WaitForActiveShards: z.ZodUnion<readonly [z.ZodNumber, z.ZodEnum<{
    all: "all";
    "index-setting": "index-setting";
}>]>;
export type WaitForActiveShards = z.infer<typeof WaitForActiveShards>;
/**
 * Open a closed index.
 *
 * For data streams, the API opens any closed backing indices.
 *
 * A closed index is blocked for read/write operations and does not allow all operations that opened indices allow.
 * It is not possible to index documents or to search for documents in a closed index.
 * This allows closed indices to not have to maintain internal data structures for indexing or searching documents, resulting in a smaller overhead on the cluster.
 *
 * When opening or closing an index, the master is responsible for restarting the index shards to reflect the new state of the index.
 * The shards will then go through the normal recovery process.
 * The data of opened or closed indices is automatically replicated by the cluster to ensure that enough shard copies are safely kept around at all times.
 *
 * You can open and close multiple indices.
 * An error is thrown if the request explicitly refers to a missing index.
 * This behavior can be turned off by using the `ignore_unavailable=true` parameter.
 *
 * By default, you must explicitly name the indices you are opening or closing.
 * To open or close indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`.
 * This setting can also be changed with the cluster update settings API.
 *
 * Closed indices consume a significant amount of disk-space which can cause problems in managed environments.
 * Closing indices can be turned off with the cluster settings API by setting `cluster.indices.close.enable` to `false`.
 *
 * Because opening or closing an index allocates its shards, the `wait_for_active_shards` setting on index creation applies to the `_open` and `_close` index actions as well.
 */
export declare const IndicesOpenRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
    expand_wildcards: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>, z.ZodArray<z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>>]>>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_active_shards: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodEnum<{
        all: "all";
        "index-setting": "index-setting";
    }>]>>;
}, z.core.$strip>;
export type IndicesOpenRequest = z.infer<typeof IndicesOpenRequest>;
export declare const IndicesOpenResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    shards_acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesOpenResponse = z.infer<typeof IndicesOpenResponse>;
//# sourceMappingURL=indices_open.d.ts.map