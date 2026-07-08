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
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
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
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const SnapshotIndexDetails: z.ZodObject<{
    shard_count: z.ZodNumber;
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    size_in_bytes: z.ZodNumber;
    max_segments_per_shard: z.ZodNumber;
}, z.core.$strip>;
export type SnapshotIndexDetails = z.infer<typeof SnapshotIndexDetails>;
export declare const SnapshotInfoFeatureState: z.ZodObject<{
    feature_name: z.ZodString;
    indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type SnapshotInfoFeatureState = z.infer<typeof SnapshotInfoFeatureState>;
export declare const SnapshotSnapshotShardFailure: z.ZodObject<{
    index: z.ZodString;
    node_id: z.ZodOptional<z.ZodString>;
    reason: z.ZodString;
    shard_id: z.ZodNumber;
    index_uuid: z.ZodString;
    status: z.ZodString;
}, z.core.$strip>;
export type SnapshotSnapshotShardFailure = z.infer<typeof SnapshotSnapshotShardFailure>;
export declare const SnapshotSnapshotInfo: z.ZodObject<{
    data_streams: z.ZodArray<z.ZodString>;
    duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    duration_in_millis: z.ZodOptional<z.ZodAny>;
    end_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    end_time_in_millis: z.ZodOptional<z.ZodAny>;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        node_id: z.ZodOptional<z.ZodString>;
        reason: z.ZodString;
        shard_id: z.ZodNumber;
        index_uuid: z.ZodString;
        status: z.ZodString;
    }, z.core.$strip>>>;
    include_global_state: z.ZodOptional<z.ZodBoolean>;
    indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
    index_details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        shard_count: z.ZodNumber;
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        size_in_bytes: z.ZodNumber;
        max_segments_per_shard: z.ZodNumber;
    }, z.core.$strip>>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    reason: z.ZodOptional<z.ZodString>;
    repository: z.ZodOptional<z.ZodString>;
    snapshot: z.ZodString;
    shards: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start_time_in_millis: z.ZodOptional<z.ZodAny>;
    state: z.ZodOptional<z.ZodString>;
    uuid: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    version_id: z.ZodOptional<z.ZodNumber>;
    feature_states: z.ZodOptional<z.ZodArray<z.ZodObject<{
        feature_name: z.ZodString;
        indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SnapshotSnapshotInfo = z.infer<typeof SnapshotSnapshotInfo>;
/**
 * Create a snapshot.
 *
 * Take a snapshot of a cluster or of data streams and indices.
 */
export declare const SnapshotCreateRequest: z.ZodObject<{
    repository: z.ZodString;
    snapshot: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
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
    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    include_global_state: z.ZodOptional<z.ZodBoolean>;
    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    partial: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SnapshotCreateRequest = z.infer<typeof SnapshotCreateRequest>;
export declare const SnapshotCreateResponse: z.ZodObject<{
    accepted: z.ZodOptional<z.ZodBoolean>;
    snapshot: z.ZodOptional<z.ZodObject<{
        data_streams: z.ZodArray<z.ZodString>;
        duration: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        duration_in_millis: z.ZodOptional<z.ZodAny>;
        end_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        end_time_in_millis: z.ZodOptional<z.ZodAny>;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodString;
            node_id: z.ZodOptional<z.ZodString>;
            reason: z.ZodString;
            shard_id: z.ZodNumber;
            index_uuid: z.ZodString;
            status: z.ZodString;
        }, z.core.$strip>>>;
        include_global_state: z.ZodOptional<z.ZodBoolean>;
        indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
        index_details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            shard_count: z.ZodNumber;
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
            max_segments_per_shard: z.ZodNumber;
        }, z.core.$strip>>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        reason: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodString>;
        snapshot: z.ZodString;
        shards: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        start_time_in_millis: z.ZodOptional<z.ZodAny>;
        state: z.ZodOptional<z.ZodString>;
        uuid: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        version_id: z.ZodOptional<z.ZodNumber>;
        feature_states: z.ZodOptional<z.ZodArray<z.ZodObject<{
            feature_name: z.ZodString;
            indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SnapshotCreateResponse = z.infer<typeof SnapshotCreateResponse>;
//# sourceMappingURL=snapshot_create.d.ts.map