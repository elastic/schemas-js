import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const TasksTaskInfo: z.ZodObject<{
    action: z.ZodString;
    cancelled: z.ZodOptional<z.ZodBoolean>;
    cancellable: z.ZodBoolean;
    description: z.ZodOptional<z.ZodString>;
    headers: z.ZodRecord<z.ZodString, z.ZodString>;
    id: z.ZodNumber;
    node: z.ZodString;
    running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    running_time_in_nanos: z.ZodAny;
    start_time_in_millis: z.ZodAny;
    status: z.ZodOptional<z.ZodAny>;
    type: z.ZodString;
    parent_task_id: z.ZodOptional<z.ZodString>;
    original_task_id: z.ZodOptional<z.ZodString>;
    original_start_time_in_millis: z.ZodOptional<z.ZodAny>;
    original_start_time: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type TasksTaskInfo = z.infer<typeof TasksTaskInfo>;
/**
 * Get task information.
 *
 * Get information about a task currently running in the cluster.
 *
 * WARNING: The task management API is new and should still be considered a beta feature.
 * The API may change in ways that are not backwards compatible.
 *
 * If the task identifier is not found, a 404 response code indicates that there are no resources that match the request.
 *
 * For relocatable tasks, this API transparently follows the task across graceful shutdown relocations,
 * so callers can keep using the original task ID. The returned task reports its `original_task_id` and `original_start_time_in_millis`
 * if it is continuing work from an earlier task.
 */
export declare const TasksGetRequest: z.ZodObject<{
    task_id: z.ZodString;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type TasksGetRequest = z.infer<typeof TasksGetRequest>;
export declare const TasksGetResponse: z.ZodObject<{
    completed: z.ZodBoolean;
    task: z.ZodObject<{
        action: z.ZodString;
        cancelled: z.ZodOptional<z.ZodBoolean>;
        cancellable: z.ZodBoolean;
        description: z.ZodOptional<z.ZodString>;
        headers: z.ZodRecord<z.ZodString, z.ZodString>;
        id: z.ZodNumber;
        node: z.ZodString;
        running_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        running_time_in_nanos: z.ZodAny;
        start_time_in_millis: z.ZodAny;
        status: z.ZodOptional<z.ZodAny>;
        type: z.ZodString;
        parent_task_id: z.ZodOptional<z.ZodString>;
        original_task_id: z.ZodOptional<z.ZodString>;
        original_start_time_in_millis: z.ZodOptional<z.ZodAny>;
        original_start_time: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    response: z.ZodOptional<z.ZodAny>;
    error: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type TasksGetResponse = z.infer<typeof TasksGetResponse>;
//# sourceMappingURL=tasks_get.d.ts.map