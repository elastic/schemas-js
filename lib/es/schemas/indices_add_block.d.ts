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
export declare const IndicesIndicesBlockOptions: z.ZodEnum<{
    read_only: "read_only";
    read: "read";
    write: "write";
    metadata: "metadata";
}>;
export type IndicesIndicesBlockOptions = z.infer<typeof IndicesIndicesBlockOptions>;
export declare const IndicesAddBlockAddIndicesBlockStatus: z.ZodObject<{
    name: z.ZodString;
    blocked: z.ZodBoolean;
}, z.core.$strip>;
export type IndicesAddBlockAddIndicesBlockStatus = z.infer<typeof IndicesAddBlockAddIndicesBlockStatus>;
/**
 * Add an index block.
 *
 * Add an index block to an index.
 * Index blocks limit the operations allowed on an index by blocking specific operation types.
 */
export declare const IndicesAddBlockRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    block: z.ZodEnum<{
        read_only: "read_only";
        read: "read";
        write: "write";
        metadata: "metadata";
    }>;
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
}, z.core.$strip>;
export type IndicesAddBlockRequest = z.infer<typeof IndicesAddBlockRequest>;
export declare const IndicesAddBlockResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
    shards_acknowledged: z.ZodBoolean;
    indices: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        blocked: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesAddBlockResponse = z.infer<typeof IndicesAddBlockResponse>;
//# sourceMappingURL=indices_add_block.d.ts.map