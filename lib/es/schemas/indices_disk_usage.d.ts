import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
/**
 * Analyze the index disk usage.
 *
 * Analyze the disk usage of each field of an index or data stream.
 * This API might not support indices created in previous Elasticsearch versions.
 * The result of a small index can be inaccurate as some parts of an index might not be analyzed by the API.
 *
 * NOTE: The total size of fields of the analyzed shards of the index in the response is usually smaller than the index `store_size` value because some small metadata files are ignored and some parts of data files might not be scanned by the API.
 * Since stored fields are stored together in a compressed format, the sizes of stored fields are also estimates and can be inaccurate.
 * The stored size of the `_id` field is likely underestimated while the `_source` field is overestimated.
 *
 * For usage examples see the External documentation or refer to [Analyze the index disk usage example](https://www.elastic.co/docs/reference/elasticsearch/rest-apis/index-disk-usage) for an example.
 */
export declare const IndicesDiskUsageRequest: z.ZodObject<{
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
    flush: z.ZodOptional<z.ZodBoolean>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    run_expensive_tasks: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IndicesDiskUsageRequest = z.infer<typeof IndicesDiskUsageRequest>;
export declare const IndicesDiskUsageResponse: z.ZodAny;
export type IndicesDiskUsageResponse = z.infer<typeof IndicesDiskUsageResponse>;
//# sourceMappingURL=indices_disk_usage.d.ts.map