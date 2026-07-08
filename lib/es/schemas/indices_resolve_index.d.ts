import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const DataStreamName: z.ZodString;
export type DataStreamName = z.infer<typeof DataStreamName>;
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
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesIndexMode: z.ZodEnum<{
    lookup: "lookup";
    standard: "standard";
    time_series: "time_series";
    logsdb: "logsdb";
}>;
export type IndicesIndexMode = z.infer<typeof IndicesIndexMode>;
/**
 * Resolve indices.
 *
 * Resolve the names and/or index patterns for indices, aliases, and data streams.
 * Multiple patterns and remote clusters are supported.
 */
export declare const IndicesResolveIndexRequest: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
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
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        lookup: "lookup";
        standard: "standard";
        time_series: "time_series";
        logsdb: "logsdb";
    }>, z.ZodArray<z.ZodEnum<{
        lookup: "lookup";
        standard: "standard";
        time_series: "time_series";
        logsdb: "logsdb";
    }>>]>>;
}, z.core.$strip>;
export type IndicesResolveIndexRequest = z.infer<typeof IndicesResolveIndexRequest>;
export declare const IndicesResolveIndexResolveIndexAliasItem: z.ZodObject<{
    name: z.ZodString;
    indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type IndicesResolveIndexResolveIndexAliasItem = z.infer<typeof IndicesResolveIndexResolveIndexAliasItem>;
export declare const IndicesResolveIndexResolveIndexDataStreamsItem: z.ZodObject<{
    name: z.ZodString;
    timestamp_field: z.ZodString;
    backing_indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type IndicesResolveIndexResolveIndexDataStreamsItem = z.infer<typeof IndicesResolveIndexResolveIndexDataStreamsItem>;
export declare const IndicesResolveIndexResolveIndexItem: z.ZodObject<{
    name: z.ZodString;
    aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
    attributes: z.ZodArray<z.ZodString>;
    data_stream: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        lookup: "lookup";
        standard: "standard";
        time_series: "time_series";
        logsdb: "logsdb";
    }>>;
}, z.core.$strip>;
export type IndicesResolveIndexResolveIndexItem = z.infer<typeof IndicesResolveIndexResolveIndexItem>;
export declare const IndicesResolveIndexResponse: z.ZodObject<{
    indices: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        attributes: z.ZodArray<z.ZodString>;
        data_stream: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            lookup: "lookup";
            standard: "standard";
            time_series: "time_series";
            logsdb: "logsdb";
        }>>;
    }, z.core.$strip>>;
    aliases: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>;
    data_streams: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        timestamp_field: z.ZodString;
        backing_indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesResolveIndexResponse = z.infer<typeof IndicesResolveIndexResponse>;
//# sourceMappingURL=indices_resolve_index.d.ts.map