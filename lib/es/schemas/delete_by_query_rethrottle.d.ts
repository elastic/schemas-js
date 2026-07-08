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
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
/**
 * Throttle a delete by query operation.
 *
 * Change the number of requests per second for a particular delete by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 */
export declare const DeleteByQueryRethrottleRequest: z.ZodObject<{
    task_id: z.ZodString;
    requests_per_second: z.ZodNumber;
}, z.core.$strip>;
export type DeleteByQueryRethrottleRequest = z.infer<typeof DeleteByQueryRethrottleRequest>;
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
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
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
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
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
export declare const TasksNodeTasks: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    transport_address: z.ZodOptional<z.ZodString>;
    host: z.ZodOptional<z.ZodString>;
    ip: z.ZodOptional<z.ZodString>;
    roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    tasks: z.ZodRecord<z.ZodString, z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TasksNodeTasks = z.infer<typeof TasksNodeTasks>;
export declare const TasksParentTaskInfo: z.ZodObject<{
    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
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
export type TasksParentTaskInfo = z.infer<typeof TasksParentTaskInfo>;
export declare const TasksTaskInfos: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
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
}, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
    children: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>;
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
}, z.core.$strip>>]>;
export type TasksTaskInfos = z.infer<typeof TasksTaskInfos>;
export declare const TasksTaskListResponseBase: z.ZodObject<{
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
    nodes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        transport_address: z.ZodOptional<z.ZodString>;
        host: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
        attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        tasks: z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    tasks: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
        children: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
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
    }, z.core.$strip>>]>>;
}, z.core.$strip>;
export type TasksTaskListResponseBase = z.infer<typeof TasksTaskListResponseBase>;
export declare const DeleteByQueryRethrottleResponse: z.ZodObject<{
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
    nodes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        transport_address: z.ZodOptional<z.ZodString>;
        host: z.ZodOptional<z.ZodString>;
        ip: z.ZodOptional<z.ZodString>;
        roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
        attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        tasks: z.ZodRecord<z.ZodString, z.ZodObject<{
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
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    tasks: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
        children: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
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
    }, z.core.$strip>>]>>;
}, z.core.$strip>;
export type DeleteByQueryRethrottleResponse = z.infer<typeof DeleteByQueryRethrottleResponse>;
//# sourceMappingURL=delete_by_query_rethrottle.d.ts.map