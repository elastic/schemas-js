import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Get information about all currently running reindex tasks.
 *
 * Reindex tasks that are mid-relocation between nodes are reported once,
 * under their original task ID, so callers do not see duplicates across the relocation chain.
 *
 * If the API returns a HTTP status of `200 OK`, but `node_failures` or `task_failures` are non-empty in the body, the listing is not a complete authoritative listing and may be missing tasks.
 */
export declare const ListReindexRequest: z.ZodObject<{
    detailed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ListReindexRequest = z.infer<typeof ListReindexRequest>;
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const Retries: z.ZodObject<{
    bulk: z.ZodNumber;
    search: z.ZodNumber;
}, z.core.$strip>;
export type Retries = z.infer<typeof Retries>;
export declare const ReindexStatus: z.ZodObject<{
    slice_id: z.ZodOptional<z.ZodNumber>;
    batches: z.ZodNumber;
    created: z.ZodOptional<z.ZodNumber>;
    deleted: z.ZodNumber;
    noops: z.ZodNumber;
    requests_per_second: z.ZodNumber;
    retries: z.ZodObject<{
        bulk: z.ZodNumber;
        search: z.ZodNumber;
    }, z.core.$strip>;
    throttled: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    throttled_millis: z.ZodAny;
    throttled_until: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    throttled_until_millis: z.ZodAny;
    total: z.ZodNumber;
    updated: z.ZodOptional<z.ZodNumber>;
    version_conflicts: z.ZodNumber;
    cancelled: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReindexStatus = z.infer<typeof ReindexStatus>;
/** Information about a single parent reindex task, as returned by the reindex management APIs. */
export declare const ReindexTaskInfo: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    start_time_in_millis: z.ZodAny;
    start_time: z.ZodOptional<z.ZodString>;
    running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    running_time_in_nanos: z.ZodAny;
    cancelled: z.ZodBoolean;
    status: z.ZodOptional<z.ZodObject<{
        slice_id: z.ZodOptional<z.ZodNumber>;
        batches: z.ZodNumber;
        created: z.ZodOptional<z.ZodNumber>;
        deleted: z.ZodNumber;
        noops: z.ZodNumber;
        requests_per_second: z.ZodNumber;
        retries: z.ZodObject<{
            bulk: z.ZodNumber;
            search: z.ZodNumber;
        }, z.core.$strip>;
        throttled: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        throttled_millis: z.ZodAny;
        throttled_until: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        throttled_until_millis: z.ZodAny;
        total: z.ZodNumber;
        updated: z.ZodOptional<z.ZodNumber>;
        version_conflicts: z.ZodNumber;
        cancelled: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ReindexTaskInfo = z.infer<typeof ReindexTaskInfo>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
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
export declare const TaskFailure: z.ZodObject<{
    task_id: z.ZodNumber;
    node_id: z.ZodString;
    status: z.ZodString;
    reason: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
}, z.core.$strip>;
export type TaskFailure = z.infer<typeof TaskFailure>;
export declare const ListReindexResponse: z.ZodObject<{
    reindex: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        start_time_in_millis: z.ZodAny;
        start_time: z.ZodOptional<z.ZodString>;
        running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        running_time_in_nanos: z.ZodAny;
        cancelled: z.ZodBoolean;
        status: z.ZodOptional<z.ZodObject<{
            slice_id: z.ZodOptional<z.ZodNumber>;
            batches: z.ZodNumber;
            created: z.ZodOptional<z.ZodNumber>;
            deleted: z.ZodNumber;
            noops: z.ZodNumber;
            requests_per_second: z.ZodNumber;
            retries: z.ZodObject<{
                bulk: z.ZodNumber;
                search: z.ZodNumber;
            }, z.core.$strip>;
            throttled: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            throttled_millis: z.ZodAny;
            throttled_until: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            throttled_until_millis: z.ZodAny;
            total: z.ZodNumber;
            updated: z.ZodOptional<z.ZodNumber>;
            version_conflicts: z.ZodNumber;
            cancelled: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    task_failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        task_id: z.ZodNumber;
        node_id: z.ZodString;
        status: z.ZodString;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
    }, z.core.$strip>>>;
    node_failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
}, z.core.$strip>;
export type ListReindexResponse = z.infer<typeof ListReindexResponse>;
//# sourceMappingURL=list_reindex.d.ts.map