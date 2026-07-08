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
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
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
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const TasksGroupBy: z.ZodEnum<{
    nodes: "nodes";
    none: "none";
    parents: "parents";
}>;
export type TasksGroupBy = z.infer<typeof TasksGroupBy>;
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
/**
 * Get all tasks.
 *
 * Get information about the tasks currently running on one or more nodes in the cluster.
 *
 * WARNING: The task management API is new and should still be considered a beta feature.
 * The API may change in ways that are not backwards compatible.
 *
 * For relocatable tasks, this API transparently follows the task across graceful shutdown relocations,
 * so callers can keep using the original task ID. The returned task reports its `original_task_id` and `original_start_time_in_millis`
 * if it is continuing work from an earlier task.
 *
 * **Identifying running tasks**
 *
 * The `X-Opaque-Id header`, when provided on the HTTP request header, is going to be returned as a header in the response as well as in the headers field for in the task information.
 * This enables you to track certain calls or associate certain tasks with the client that started them.
 * For example:
 *
 * ```
 * curl -i -H "X-Opaque-Id: 123456" "http://localhost:9200/_tasks?group_by=parents"
 * ```
 *
 * The API returns the following result:
 *
 * ```
 * HTTP/1.1 200 OK
 * X-Opaque-Id: 123456
 * content-type: application/json; charset=UTF-8
 * content-length: 831
 *
 * {
 *   "tasks" : {
 *     "u5lcZHqcQhu-rUoFaqDphA:45" : {
 *       "node" : "u5lcZHqcQhu-rUoFaqDphA",
 *       "id" : 45,
 *       "type" : "transport",
 *       "action" : "cluster:monitor/tasks/lists",
 *       "start_time_in_millis" : 1513823752749,
 *       "running_time_in_nanos" : 293139,
 *       "cancellable" : false,
 *       "headers" : {
 *         "X-Opaque-Id" : "123456"
 *       },
 *       "children" : [
 *         {
 *           "node" : "u5lcZHqcQhu-rUoFaqDphA",
 *           "id" : 46,
 *           "type" : "direct",
 *           "action" : "cluster:monitor/tasks/lists[n]",
 *           "start_time_in_millis" : 1513823752750,
 *           "running_time_in_nanos" : 92133,
 *           "cancellable" : false,
 *           "parent_task_id" : "u5lcZHqcQhu-rUoFaqDphA:45",
 *           "headers" : {
 *             "X-Opaque-Id" : "123456"
 *           }
 *         }
 *       ]
 *     }
 *   }
 *  }
 * ```
 * In this example, `X-Opaque-Id: 123456` is the ID as a part of the response header.
 * The `X-Opaque-Id` in the task `headers` is the ID for the task that was initiated by the REST request.
 * The `X-Opaque-Id` in the children `headers` is the child task of the task that was initiated by the REST request.
 */
export declare const TasksListRequest: z.ZodObject<{
    actions: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    detailed: z.ZodOptional<z.ZodBoolean>;
    group_by: z.ZodOptional<z.ZodEnum<{
        nodes: "nodes";
        none: "none";
        parents: "parents";
    }>>;
    nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    parent_task_id: z.ZodOptional<z.ZodString>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type TasksListRequest = z.infer<typeof TasksListRequest>;
export declare const TasksListResponse: z.ZodObject<{
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
export type TasksListResponse = z.infer<typeof TasksListResponse>;
//# sourceMappingURL=tasks_list.d.ts.map