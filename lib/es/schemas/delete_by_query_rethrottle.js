/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const TaskId = z.string().meta({ id: 'TaskId' });
export const float = z.number().meta({ id: 'float' });
/**
 * Throttle a delete by query operation.
 *
 * Change the number of requests per second for a particular delete by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 */
export const DeleteByQueryRethrottleRequest = z.object({
    ...RequestBase.shape,
    task_id: TaskId.describe('The ID for the task.').meta({ found_in: 'path' }),
    requests_per_second: float.describe('The maximum number of documents to delete per second, across the entire delete-by-query operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').meta({ found_in: 'query' })
}).meta({ id: 'DeleteByQueryRethrottleRequest' });
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export const ErrorCause = z.looseObject({
    type: z.string().describe('The type of error'),
    reason: z.union([z.string(), z.null()]).describe('A human-readable explanation of the error, in English.').optional(),
    stack_trace: z.string().describe('The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.').optional(),
    get caused_by() { return ErrorCause.optional(); },
    get root_cause() { return ErrorCause.array().optional(); },
    get suppressed() { return ErrorCause.array().optional(); }
}).meta({ id: 'ErrorCause' });
export const long = z.number().meta({ id: 'long' });
export const NodeId = z.string().meta({ id: 'NodeId' });
export const TaskFailure = z.object({
    task_id: long,
    node_id: NodeId,
    status: z.string(),
    reason: z.lazy(() => ErrorCause)
}).meta({ id: 'TaskFailure' });
export const TransportAddress = z.string().meta({ id: 'TransportAddress' });
export const Host = z.string().meta({ id: 'Host' });
export const Ip = z.string().meta({ id: 'Ip' });
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const DurationValue = z.any().meta({ id: 'DurationValue' });
export const EpochTime = z.any().meta({ id: 'EpochTime' });
export const TasksTaskInfo = z.object({
    action: z.string(),
    cancelled: z.boolean().optional(),
    cancellable: z.boolean(),
    description: z.string().describe('Human readable text that identifies the particular request that the task is performing. For example, it might identify the search request being performed by a search task. Other kinds of tasks have different descriptions, like `_reindex` which has the source and the destination, or `_bulk` which just has the number of requests and the destination indices. Many requests will have only an empty description because more detailed information about the request is not easily available or particularly helpful in identifying the request.').optional(),
    headers: z.record(z.string(), z.string()),
    id: long,
    node: NodeId,
    running_time: Duration.optional(),
    running_time_in_nanos: DurationValue,
    start_time_in_millis: EpochTime,
    status: z.any().describe('The internal status of the task, which varies from task to task. The format also varies. While the goal is to keep the status for a particular task consistent from version to version, this is not always possible because sometimes the implementation changes. Fields might be removed from the status for a particular request so any parsing you do of the status might break in minor releases.').optional(),
    type: z.string(),
    parent_task_id: TaskId.optional(),
    original_task_id: TaskId.describe('The task ID of the original task. Only present when the task is continuing the work of an earlier task that was running on a node which has since shut down (i.e. a relocatable task). For tasks that have not been relocated this is always equal to the task\'s own ID and is omitted from the response.').optional(),
    original_start_time_in_millis: EpochTime.describe('The time at which the original task started, in milliseconds since the Unix epoch. Only present together with `original_task_id`.').optional(),
    original_start_time: z.string().describe('The time at which the original task started, as an ISO 8601 formatted string. Only present together with `original_task_id` and when the request includes the `?human=true` query parameter.').optional()
}).meta({ id: 'TasksTaskInfo' });
export const TasksNodeTasks = z.object({
    name: NodeId.optional(),
    transport_address: TransportAddress.optional(),
    host: Host.optional(),
    ip: Ip.optional(),
    roles: z.array(z.string()).optional(),
    attributes: z.record(z.string(), z.string()).optional(),
    tasks: z.record(TaskId, TasksTaskInfo)
}).meta({ id: 'TasksNodeTasks' });
export const TasksParentTaskInfo = z.object({
    ...TasksTaskInfo.shape,
    children: z.array(TasksTaskInfo).optional()
}).meta({ id: 'TasksParentTaskInfo' });
export const TasksTaskInfos = z.union([z.array(TasksTaskInfo), z.record(z.string(), TasksParentTaskInfo)]).meta({ id: 'TasksTaskInfos' });
export const TasksTaskListResponseBase = z.object({
    node_failures: z.array(z.lazy(() => ErrorCause)).optional(),
    task_failures: z.array(TaskFailure).optional(),
    nodes: z.record(z.string(), TasksNodeTasks).describe('Task information grouped by node, if `group_by` was set to `node` (the default).').optional(),
    tasks: TasksTaskInfos.describe('Either a flat list of tasks if `group_by` was set to `none`, or grouped by parents if `group_by` was set to `parents`.').optional()
}).meta({ id: 'TasksTaskListResponseBase' });
export const DeleteByQueryRethrottleResponse = TasksTaskListResponseBase.meta({ id: 'DeleteByQueryRethrottleResponse' });
//# sourceMappingURL=delete_by_query_rethrottle.js.map