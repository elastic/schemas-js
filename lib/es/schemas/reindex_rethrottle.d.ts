import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
export declare const ReindexRethrottleParentReindexStatus: z.ZodObject<{
    slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
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
export type ReindexRethrottleParentReindexStatus = z.infer<typeof ReindexRethrottleParentReindexStatus>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const HttpHeaders: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
export type HttpHeaders = z.infer<typeof HttpHeaders>;
export declare const ReindexRethrottleReindexTask: z.ZodObject<{
    action: z.ZodString;
    cancellable: z.ZodBoolean;
    cancelled: z.ZodBoolean;
    description: z.ZodString;
    id: z.ZodNumber;
    node: z.ZodString;
    running_time_in_nanos: z.ZodAny;
    start_time_in_millis: z.ZodAny;
    status: z.ZodObject<{
        slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
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
    type: z.ZodString;
    headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type ReindexRethrottleReindexTask = z.infer<typeof ReindexRethrottleReindexTask>;
export declare const ReindexRethrottleParentReindexTask: z.ZodObject<{
    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action: z.ZodString;
        cancellable: z.ZodBoolean;
        cancelled: z.ZodBoolean;
        description: z.ZodString;
        id: z.ZodNumber;
        node: z.ZodString;
        running_time_in_nanos: z.ZodAny;
        start_time_in_millis: z.ZodAny;
        status: z.ZodObject<{
            slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>>;
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
        type: z.ZodString;
        headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    action: z.ZodString;
    cancellable: z.ZodBoolean;
    cancelled: z.ZodBoolean;
    description: z.ZodString;
    id: z.ZodNumber;
    node: z.ZodString;
    running_time_in_nanos: z.ZodAny;
    start_time_in_millis: z.ZodAny;
    status: z.ZodObject<{
        slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
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
    type: z.ZodString;
    headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type ReindexRethrottleParentReindexTask = z.infer<typeof ReindexRethrottleParentReindexTask>;
export declare const ReindexRethrottleReindexTasks: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
    action: z.ZodString;
    cancellable: z.ZodBoolean;
    cancelled: z.ZodBoolean;
    description: z.ZodString;
    id: z.ZodNumber;
    node: z.ZodString;
    running_time_in_nanos: z.ZodAny;
    start_time_in_millis: z.ZodAny;
    status: z.ZodObject<{
        slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
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
    type: z.ZodString;
    headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
        action: z.ZodString;
        cancellable: z.ZodBoolean;
        cancelled: z.ZodBoolean;
        description: z.ZodString;
        id: z.ZodNumber;
        node: z.ZodString;
        running_time_in_nanos: z.ZodAny;
        start_time_in_millis: z.ZodAny;
        status: z.ZodObject<{
            slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>>;
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
        type: z.ZodString;
        headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>>;
    action: z.ZodString;
    cancellable: z.ZodBoolean;
    cancelled: z.ZodBoolean;
    description: z.ZodString;
    id: z.ZodNumber;
    node: z.ZodString;
    running_time_in_nanos: z.ZodAny;
    start_time_in_millis: z.ZodAny;
    status: z.ZodObject<{
        slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
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
    type: z.ZodString;
    headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>>]>;
export type ReindexRethrottleReindexTasks = z.infer<typeof ReindexRethrottleReindexTasks>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
/**
 * Throttle a reindex operation.
 *
 * Change the maximum number of documents to index per second for a particular reindex operation.
 * For example, to unthrottle to unlimited documents per second:
 *
 * ```
 * POST _reindex/r1A2WoRbTwKZ516z6NEs5A:36619/_rethrottle?requests_per_second=-1
 * ```
 *
 * Rethrottling that speeds up the query takes effect immediately.
 * Rethrottling that slows down the query will take effect after completing the current batch of documents.
 * This behavior prevents scroll timeouts.
 *
 * This API follows reindex tasks across node-shutdown relocations, so callers can keep using
 * the original task ID throughout the lifetime of the operation.
 * The relocated task ID is also accepted and is followed transparently.
 * In either case, returned task IDs and timings reflect the original task, not its relocated successor.
 *
 * The rethrottle may not have been applied to any tasks if either `node_failures` or `task_failures` are non-empty, or if the response contains
 * no successfully rethrottled tasks — that is, no entries under `nodes` (returned with the default
 * `group_by=nodes` in stack) or under `tasks` (returned in serverless, or in stack with
 * `group_by=none` or `group_by=parents`).
 */
export declare const ReindexRethrottleRequest: z.ZodObject<{
    task_id: z.ZodString;
    requests_per_second: z.ZodNumber;
}, z.core.$strip>;
export type ReindexRethrottleRequest = z.infer<typeof ReindexRethrottleRequest>;
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
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
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
export declare const ReindexRethrottleResponse: z.ZodObject<{
    node_failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
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
    tasks: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
        action: z.ZodString;
        cancellable: z.ZodBoolean;
        cancelled: z.ZodBoolean;
        description: z.ZodString;
        id: z.ZodNumber;
        node: z.ZodString;
        running_time_in_nanos: z.ZodAny;
        start_time_in_millis: z.ZodAny;
        status: z.ZodObject<{
            slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>>;
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
        type: z.ZodString;
        headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
        children: z.ZodOptional<z.ZodArray<z.ZodObject<{
            action: z.ZodString;
            cancellable: z.ZodBoolean;
            cancelled: z.ZodBoolean;
            description: z.ZodString;
            id: z.ZodNumber;
            node: z.ZodString;
            running_time_in_nanos: z.ZodAny;
            start_time_in_millis: z.ZodAny;
            status: z.ZodObject<{
                slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                }, z.core.$strip>>>;
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
            type: z.ZodString;
            headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>>;
        action: z.ZodString;
        cancellable: z.ZodBoolean;
        cancelled: z.ZodBoolean;
        description: z.ZodString;
        id: z.ZodNumber;
        node: z.ZodString;
        running_time_in_nanos: z.ZodAny;
        start_time_in_millis: z.ZodAny;
        status: z.ZodObject<{
            slices: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>>;
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
        type: z.ZodString;
        headers: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>]>>;
}, z.core.$strip>;
export type ReindexRethrottleResponse = z.infer<typeof ReindexRethrottleResponse>;
//# sourceMappingURL=reindex_rethrottle.d.ts.map