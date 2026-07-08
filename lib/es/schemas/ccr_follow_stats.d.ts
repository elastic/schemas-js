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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SequenceNumber: z.ZodNumber;
export type SequenceNumber = z.infer<typeof SequenceNumber>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const CcrReadException: z.ZodObject<{
    exception: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    from_seq_no: z.ZodNumber;
    retries: z.ZodNumber;
}, z.core.$strip>;
export type CcrReadException = z.infer<typeof CcrReadException>;
export declare const CcrShardStats: z.ZodObject<{
    bytes_read: z.ZodNumber;
    failed_read_requests: z.ZodNumber;
    failed_write_requests: z.ZodNumber;
    fatal_exception: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
    follower_aliases_version: z.ZodNumber;
    follower_global_checkpoint: z.ZodNumber;
    follower_index: z.ZodString;
    follower_mapping_version: z.ZodNumber;
    follower_max_seq_no: z.ZodNumber;
    follower_settings_version: z.ZodNumber;
    last_requested_seq_no: z.ZodNumber;
    leader_global_checkpoint: z.ZodNumber;
    leader_index: z.ZodString;
    leader_max_seq_no: z.ZodNumber;
    operations_read: z.ZodNumber;
    operations_written: z.ZodNumber;
    outstanding_read_requests: z.ZodNumber;
    outstanding_write_requests: z.ZodNumber;
    read_exceptions: z.ZodArray<z.ZodObject<{
        exception: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        from_seq_no: z.ZodNumber;
        retries: z.ZodNumber;
    }, z.core.$strip>>;
    remote_cluster: z.ZodString;
    shard_id: z.ZodNumber;
    successful_read_requests: z.ZodNumber;
    successful_write_requests: z.ZodNumber;
    time_since_last_read: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_since_last_read_millis: z.ZodAny;
    total_read_remote_exec_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_read_remote_exec_time_millis: z.ZodAny;
    total_read_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_read_time_millis: z.ZodAny;
    total_write_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_write_time_millis: z.ZodAny;
    write_buffer_operation_count: z.ZodNumber;
    write_buffer_size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
}, z.core.$strip>;
export type CcrShardStats = z.infer<typeof CcrShardStats>;
export declare const CcrFollowIndexStats: z.ZodObject<{
    index: z.ZodString;
    shards: z.ZodArray<z.ZodObject<{
        bytes_read: z.ZodNumber;
        failed_read_requests: z.ZodNumber;
        failed_write_requests: z.ZodNumber;
        fatal_exception: z.ZodOptional<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>;
        follower_aliases_version: z.ZodNumber;
        follower_global_checkpoint: z.ZodNumber;
        follower_index: z.ZodString;
        follower_mapping_version: z.ZodNumber;
        follower_max_seq_no: z.ZodNumber;
        follower_settings_version: z.ZodNumber;
        last_requested_seq_no: z.ZodNumber;
        leader_global_checkpoint: z.ZodNumber;
        leader_index: z.ZodString;
        leader_max_seq_no: z.ZodNumber;
        operations_read: z.ZodNumber;
        operations_written: z.ZodNumber;
        outstanding_read_requests: z.ZodNumber;
        outstanding_write_requests: z.ZodNumber;
        read_exceptions: z.ZodArray<z.ZodObject<{
            exception: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            from_seq_no: z.ZodNumber;
            retries: z.ZodNumber;
        }, z.core.$strip>>;
        remote_cluster: z.ZodString;
        shard_id: z.ZodNumber;
        successful_read_requests: z.ZodNumber;
        successful_write_requests: z.ZodNumber;
        time_since_last_read: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_since_last_read_millis: z.ZodAny;
        total_read_remote_exec_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_read_remote_exec_time_millis: z.ZodAny;
        total_read_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_read_time_millis: z.ZodAny;
        total_write_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_write_time_millis: z.ZodAny;
        write_buffer_operation_count: z.ZodNumber;
        write_buffer_size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CcrFollowIndexStats = z.infer<typeof CcrFollowIndexStats>;
/**
 * Get follower stats.
 *
 * Get cross-cluster replication follower stats.
 * The API returns shard-level stats about the "following tasks" associated with each shard for the specified indices.
 */
export declare const CcrFollowStatsRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CcrFollowStatsRequest = z.infer<typeof CcrFollowStatsRequest>;
export declare const CcrFollowStatsResponse: z.ZodObject<{
    indices: z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        shards: z.ZodArray<z.ZodObject<{
            bytes_read: z.ZodNumber;
            failed_read_requests: z.ZodNumber;
            failed_write_requests: z.ZodNumber;
            fatal_exception: z.ZodOptional<z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>>;
            follower_aliases_version: z.ZodNumber;
            follower_global_checkpoint: z.ZodNumber;
            follower_index: z.ZodString;
            follower_mapping_version: z.ZodNumber;
            follower_max_seq_no: z.ZodNumber;
            follower_settings_version: z.ZodNumber;
            last_requested_seq_no: z.ZodNumber;
            leader_global_checkpoint: z.ZodNumber;
            leader_index: z.ZodString;
            leader_max_seq_no: z.ZodNumber;
            operations_read: z.ZodNumber;
            operations_written: z.ZodNumber;
            outstanding_read_requests: z.ZodNumber;
            outstanding_write_requests: z.ZodNumber;
            read_exceptions: z.ZodArray<z.ZodObject<{
                exception: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
                from_seq_no: z.ZodNumber;
                retries: z.ZodNumber;
            }, z.core.$strip>>;
            remote_cluster: z.ZodString;
            shard_id: z.ZodNumber;
            successful_read_requests: z.ZodNumber;
            successful_write_requests: z.ZodNumber;
            time_since_last_read: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_since_last_read_millis: z.ZodAny;
            total_read_remote_exec_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_read_remote_exec_time_millis: z.ZodAny;
            total_read_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_read_time_millis: z.ZodAny;
            total_write_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_write_time_millis: z.ZodAny;
            write_buffer_operation_count: z.ZodNumber;
            write_buffer_size_in_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CcrFollowStatsResponse = z.infer<typeof CcrFollowStatsResponse>;
//# sourceMappingURL=ccr_follow_stats.d.ts.map