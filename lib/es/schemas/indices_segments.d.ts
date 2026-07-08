import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const IndicesSegmentsShardSegmentRouting: z.ZodObject<{
    node: z.ZodString;
    primary: z.ZodBoolean;
    state: z.ZodString;
}, z.core.$strip>;
export type IndicesSegmentsShardSegmentRouting = z.infer<typeof IndicesSegmentsShardSegmentRouting>;
export declare const IndicesSegmentsSegment: z.ZodObject<{
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    committed: z.ZodBoolean;
    compound: z.ZodBoolean;
    deleted_docs: z.ZodNumber;
    generation: z.ZodNumber;
    search: z.ZodBoolean;
    size_in_bytes: z.ZodNumber;
    num_docs: z.ZodNumber;
    version: z.ZodString;
}, z.core.$strip>;
export type IndicesSegmentsSegment = z.infer<typeof IndicesSegmentsSegment>;
export declare const IndicesSegmentsShardsSegment: z.ZodObject<{
    num_committed_segments: z.ZodNumber;
    routing: z.ZodObject<{
        node: z.ZodString;
        primary: z.ZodBoolean;
        state: z.ZodString;
    }, z.core.$strip>;
    num_search_segments: z.ZodNumber;
    segments: z.ZodRecord<z.ZodString, z.ZodObject<{
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        committed: z.ZodBoolean;
        compound: z.ZodBoolean;
        deleted_docs: z.ZodNumber;
        generation: z.ZodNumber;
        search: z.ZodBoolean;
        size_in_bytes: z.ZodNumber;
        num_docs: z.ZodNumber;
        version: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesSegmentsShardsSegment = z.infer<typeof IndicesSegmentsShardsSegment>;
export declare const IndicesSegmentsIndexSegment: z.ZodObject<{
    shards: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        num_committed_segments: z.ZodNumber;
        routing: z.ZodObject<{
            node: z.ZodString;
            primary: z.ZodBoolean;
            state: z.ZodString;
        }, z.core.$strip>;
        num_search_segments: z.ZodNumber;
        segments: z.ZodRecord<z.ZodString, z.ZodObject<{
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            committed: z.ZodBoolean;
            compound: z.ZodBoolean;
            deleted_docs: z.ZodNumber;
            generation: z.ZodNumber;
            search: z.ZodBoolean;
            size_in_bytes: z.ZodNumber;
            num_docs: z.ZodNumber;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        num_committed_segments: z.ZodNumber;
        routing: z.ZodObject<{
            node: z.ZodString;
            primary: z.ZodBoolean;
            state: z.ZodString;
        }, z.core.$strip>;
        num_search_segments: z.ZodNumber;
        segments: z.ZodRecord<z.ZodString, z.ZodObject<{
            attributes: z.ZodRecord<z.ZodString, z.ZodString>;
            committed: z.ZodBoolean;
            compound: z.ZodBoolean;
            deleted_docs: z.ZodNumber;
            generation: z.ZodNumber;
            search: z.ZodBoolean;
            size_in_bytes: z.ZodNumber;
            num_docs: z.ZodNumber;
            version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>]>>;
}, z.core.$strip>;
export type IndicesSegmentsIndexSegment = z.infer<typeof IndicesSegmentsIndexSegment>;
/**
 * Get index segments.
 *
 * Get low-level information about the Lucene segments in index shards.
 * For data streams, the API returns information about the stream's backing indices.
 */
export declare const IndicesSegmentsRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
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
}, z.core.$strip>;
export type IndicesSegmentsRequest = z.infer<typeof IndicesSegmentsRequest>;
export declare const IndicesSegmentsResponse: z.ZodObject<{
    indices: z.ZodRecord<z.ZodString, z.ZodObject<{
        shards: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            num_committed_segments: z.ZodNumber;
            routing: z.ZodObject<{
                node: z.ZodString;
                primary: z.ZodBoolean;
                state: z.ZodString;
            }, z.core.$strip>;
            num_search_segments: z.ZodNumber;
            segments: z.ZodRecord<z.ZodString, z.ZodObject<{
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                committed: z.ZodBoolean;
                compound: z.ZodBoolean;
                deleted_docs: z.ZodNumber;
                generation: z.ZodNumber;
                search: z.ZodBoolean;
                size_in_bytes: z.ZodNumber;
                num_docs: z.ZodNumber;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            num_committed_segments: z.ZodNumber;
            routing: z.ZodObject<{
                node: z.ZodString;
                primary: z.ZodBoolean;
                state: z.ZodString;
            }, z.core.$strip>;
            num_search_segments: z.ZodNumber;
            segments: z.ZodRecord<z.ZodString, z.ZodObject<{
                attributes: z.ZodRecord<z.ZodString, z.ZodString>;
                committed: z.ZodBoolean;
                compound: z.ZodBoolean;
                deleted_docs: z.ZodNumber;
                generation: z.ZodNumber;
                search: z.ZodBoolean;
                size_in_bytes: z.ZodNumber;
                num_docs: z.ZodNumber;
                version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>]>>;
    }, z.core.$strip>>;
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
}, z.core.$strip>;
export type IndicesSegmentsResponse = z.infer<typeof IndicesSegmentsResponse>;
//# sourceMappingURL=indices_segments.d.ts.map