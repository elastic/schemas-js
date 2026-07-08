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
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const ShardFailure: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    _node: z.ZodOptional<z.ZodString>;
    reason: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    shard: z.ZodOptional<z.ZodNumber>;
    _shard: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ShardFailure = z.infer<typeof ShardFailure>;
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
export declare const ShardStatistics: z.ZodObject<{
    failed: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
        _node: z.ZodOptional<z.ZodString>;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        shard: z.ZodOptional<z.ZodNumber>;
        _shard: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    skipped: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ShardStatistics = z.infer<typeof ShardStatistics>;
export declare const IndicesDataStreamsStatsDataStreamsStatsItem: z.ZodObject<{
    backing_indices: z.ZodNumber;
    data_stream: z.ZodString;
    maximum_timestamp: z.ZodAny;
    store_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    store_size_bytes: z.ZodNumber;
}, z.core.$strip>;
export type IndicesDataStreamsStatsDataStreamsStatsItem = z.infer<typeof IndicesDataStreamsStatsDataStreamsStatsItem>;
/**
 * Get data stream stats.
 *
 * Get statistics for one or more data streams.
 */
export declare const IndicesDataStreamsStatsRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
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
}, z.core.$strip>;
export type IndicesDataStreamsStatsRequest = z.infer<typeof IndicesDataStreamsStatsRequest>;
export declare const IndicesDataStreamsStatsResponse: z.ZodObject<{
    _shards: z.ZodObject<{
        failed: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            reason: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            shard: z.ZodOptional<z.ZodNumber>;
            _shard: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        skipped: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    backing_indices: z.ZodNumber;
    data_stream_count: z.ZodNumber;
    data_streams: z.ZodArray<z.ZodObject<{
        backing_indices: z.ZodNumber;
        data_stream: z.ZodString;
        maximum_timestamp: z.ZodAny;
        store_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        store_size_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    total_store_sizes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_store_size_bytes: z.ZodNumber;
}, z.core.$strip>;
export type IndicesDataStreamsStatsResponse = z.infer<typeof IndicesDataStreamsStatsResponse>;
//# sourceMappingURL=indices_data_streams_stats.d.ts.map