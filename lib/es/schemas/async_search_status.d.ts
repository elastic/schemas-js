import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const ClusterAlias: z.ZodString;
export type ClusterAlias = z.infer<typeof ClusterAlias>;
export declare const ClusterSearchStatus: z.ZodEnum<{
    partial: "partial";
    successful: "successful";
    failed: "failed";
    running: "running";
    skipped: "skipped";
}>;
export type ClusterSearchStatus = z.infer<typeof ClusterSearchStatus>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
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
export declare const ClusterDetails: z.ZodObject<{
    status: z.ZodEnum<{
        partial: "partial";
        successful: "successful";
        failed: "failed";
        running: "running";
        skipped: "skipped";
    }>;
    indices: z.ZodString;
    took: z.ZodOptional<z.ZodAny>;
    timed_out: z.ZodBoolean;
    _shards: z.ZodOptional<z.ZodObject<{
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
}, z.core.$strip>;
export type ClusterDetails = z.infer<typeof ClusterDetails>;
export declare const ClusterStatistics: z.ZodObject<{
    skipped: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
    running: z.ZodNumber;
    partial: z.ZodNumber;
    failed: z.ZodNumber;
    details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        status: z.ZodEnum<{
            partial: "partial";
            successful: "successful";
            failed: "failed";
            running: "running";
            skipped: "skipped";
        }>;
        indices: z.ZodString;
        took: z.ZodOptional<z.ZodAny>;
        timed_out: z.ZodBoolean;
        _shards: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ClusterStatistics = z.infer<typeof ClusterStatistics>;
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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const AsyncSearchAsyncSearchResponseBase: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    is_partial: z.ZodBoolean;
    is_running: z.ZodBoolean;
    expiration_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    expiration_time_in_millis: z.ZodAny;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start_time_in_millis: z.ZodAny;
    completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    completion_time_in_millis: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type AsyncSearchAsyncSearchResponseBase = z.infer<typeof AsyncSearchAsyncSearchResponseBase>;
/**
 * Get the async search status.
 *
 * Get the status of a previously submitted async search request given its identifier, without retrieving search results.
 * If the Elasticsearch security features are enabled, the access to the status of a specific async search is restricted to:
 *
 * * The user or API key that submitted the original async search request.
 * * Users that have the `monitor` cluster privilege or greater privileges.
 */
export declare const AsyncSearchStatusRequest: z.ZodObject<{
    id: z.ZodString;
    keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type AsyncSearchStatusRequest = z.infer<typeof AsyncSearchStatusRequest>;
export declare const AsyncSearchStatusStatusResponseBase: z.ZodObject<{
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
    _clusters: z.ZodOptional<z.ZodObject<{
        skipped: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        running: z.ZodNumber;
        partial: z.ZodNumber;
        failed: z.ZodNumber;
        details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            status: z.ZodEnum<{
                partial: "partial";
                successful: "successful";
                failed: "failed";
                running: "running";
                skipped: "skipped";
            }>;
            indices: z.ZodString;
            took: z.ZodOptional<z.ZodAny>;
            timed_out: z.ZodBoolean;
            _shards: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    completion_status: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodString>;
    is_partial: z.ZodBoolean;
    is_running: z.ZodBoolean;
    expiration_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    expiration_time_in_millis: z.ZodAny;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start_time_in_millis: z.ZodAny;
    completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    completion_time_in_millis: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type AsyncSearchStatusStatusResponseBase = z.infer<typeof AsyncSearchStatusStatusResponseBase>;
export declare const AsyncSearchStatusResponse: z.ZodObject<{
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
    _clusters: z.ZodOptional<z.ZodObject<{
        skipped: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        running: z.ZodNumber;
        partial: z.ZodNumber;
        failed: z.ZodNumber;
        details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            status: z.ZodEnum<{
                partial: "partial";
                successful: "successful";
                failed: "failed";
                running: "running";
                skipped: "skipped";
            }>;
            indices: z.ZodString;
            took: z.ZodOptional<z.ZodAny>;
            timed_out: z.ZodBoolean;
            _shards: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    completion_status: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodString>;
    is_partial: z.ZodBoolean;
    is_running: z.ZodBoolean;
    expiration_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    expiration_time_in_millis: z.ZodAny;
    start_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    start_time_in_millis: z.ZodAny;
    completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    completion_time_in_millis: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type AsyncSearchStatusResponse = z.infer<typeof AsyncSearchStatusResponse>;
//# sourceMappingURL=async_search_status.d.ts.map