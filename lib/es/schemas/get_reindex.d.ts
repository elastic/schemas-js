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
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
/**
 * Get the status and progress of a specific reindex task.
 *
 * This API follows reindex tasks across node-shutdown relocations, so callers can
 * keep using the original task ID throughout the lifetime of the operation.
 * Returned task IDs and timings reflect the original task, not its relocated successor.
 * Relocated task IDs are also supported. They are followed transparently and return the task ID and timings of the original task.
 *
 * When the task ID cannot be resolved, the API returns the response below with a 404 status code.
 * This response is used whether the ID is unknown, refers to a non-reindex task, refers to a sliced child subtask, or refers to a task whose node left the cluster with no stored result (e.g. a non-graceful shutdown).
 * ```
 * {
 *   "error": {
 *     "type": "resource_not_found_exception",
 *     "reason": "Reindex operation [r1A2WoRbTwKZ516z6NEs5A:36619] not found"
 *   },
 *   "status": 404
 * }
 * ```
 */
export declare const GetReindexRequest: z.ZodObject<{
    task_id: z.ZodString;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type GetReindexRequest = z.infer<typeof GetReindexRequest>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const BulkIndexByScrollFailure: z.ZodObject<{
    cause: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    id: z.ZodString;
    index: z.ZodString;
    status: z.ZodNumber;
}, z.core.$strip>;
export type BulkIndexByScrollFailure = z.infer<typeof BulkIndexByScrollFailure>;
/**
 * The final result of a completed reindex operation, as stored in the task result.
 * This is the serialized form of `BulkByScrollResponse`.
 */
export declare const ReindexTaskResult: z.ZodObject<{
    batches: z.ZodOptional<z.ZodNumber>;
    created: z.ZodOptional<z.ZodNumber>;
    deleted: z.ZodOptional<z.ZodNumber>;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        cause: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        id: z.ZodString;
        index: z.ZodString;
        status: z.ZodNumber;
    }, z.core.$strip>>>;
    noops: z.ZodOptional<z.ZodNumber>;
    requests_per_second: z.ZodOptional<z.ZodNumber>;
    retries: z.ZodOptional<z.ZodObject<{
        bulk: z.ZodNumber;
        search: z.ZodNumber;
    }, z.core.$strip>>;
    throttled_millis: z.ZodOptional<z.ZodAny>;
    throttled_until_millis: z.ZodOptional<z.ZodAny>;
    timed_out: z.ZodOptional<z.ZodBoolean>;
    took: z.ZodOptional<z.ZodAny>;
    total: z.ZodOptional<z.ZodNumber>;
    updated: z.ZodOptional<z.ZodNumber>;
    version_conflicts: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ReindexTaskResult = z.infer<typeof ReindexTaskResult>;
export declare const GetReindexResponse: z.ZodObject<{
    completed: z.ZodBoolean;
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
    error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
    response: z.ZodOptional<z.ZodObject<{
        batches: z.ZodOptional<z.ZodNumber>;
        created: z.ZodOptional<z.ZodNumber>;
        deleted: z.ZodOptional<z.ZodNumber>;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            cause: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            id: z.ZodString;
            index: z.ZodString;
            status: z.ZodNumber;
        }, z.core.$strip>>>;
        noops: z.ZodOptional<z.ZodNumber>;
        requests_per_second: z.ZodOptional<z.ZodNumber>;
        retries: z.ZodOptional<z.ZodObject<{
            bulk: z.ZodNumber;
            search: z.ZodNumber;
        }, z.core.$strip>>;
        throttled_millis: z.ZodOptional<z.ZodAny>;
        throttled_until_millis: z.ZodOptional<z.ZodAny>;
        timed_out: z.ZodOptional<z.ZodBoolean>;
        took: z.ZodOptional<z.ZodAny>;
        total: z.ZodOptional<z.ZodNumber>;
        updated: z.ZodOptional<z.ZodNumber>;
        version_conflicts: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type GetReindexResponse = z.infer<typeof GetReindexResponse>;
//# sourceMappingURL=get_reindex.d.ts.map