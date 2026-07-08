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
export const Id = z.string().meta({ id: 'Id' });
export const float = z.number().meta({ id: 'float' });
/**
 * Throttle an update by query operation.
 *
 * Change the number of requests per second for a particular update by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 */
export const UpdateByQueryRethrottleRequest = z.object({
    ...RequestBase.shape,
    task_id: Id.describe('The ID for the task.').meta({ found_in: 'path' }),
    requests_per_second: float.describe('The maximum number of documents to update per second, across the entire update_by_query operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').meta({ found_in: 'query' })
}).meta({ id: 'UpdateByQueryRethrottleRequest' });
export const Host = z.string().meta({ id: 'Host' });
export const Ip = z.string().meta({ id: 'Ip' });
export const Name = z.string().meta({ id: 'Name' });
export const NodeRole = z.enum(['master', 'data', 'data_cold', 'data_content', 'data_frozen', 'data_hot', 'data_warm', 'client', 'ingest', 'ml', 'voting_only', 'transform', 'remote_cluster_client', 'coordinating_only']).meta({ id: 'NodeRole' });
export const NodeRoles = z.array(NodeRole).meta({ id: 'NodeRoles' });
export const TransportAddress = z.string().meta({ id: 'TransportAddress' });
export const SpecUtilsBaseNode = z.object({
    attributes: z.record(z.string(), z.string()),
    host: Host,
    ip: Ip,
    name: Name,
    roles: NodeRoles.optional(),
    transport_address: TransportAddress
}).meta({ id: 'SpecUtilsBaseNode' });
export const TaskId = z.string().meta({ id: 'TaskId' });
export const long = z.number().meta({ id: 'long' });
export const NodeId = z.string().meta({ id: 'NodeId' });
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
export const UpdateByQueryRethrottleUpdateByQueryRethrottleNode = z.object({
    ...SpecUtilsBaseNode.shape,
    tasks: z.record(TaskId, TasksTaskInfo)
}).meta({ id: 'UpdateByQueryRethrottleUpdateByQueryRethrottleNode' });
export const UpdateByQueryRethrottleResponse = z.object({
    nodes: z.record(z.string(), UpdateByQueryRethrottleUpdateByQueryRethrottleNode)
}).meta({ id: 'UpdateByQueryRethrottleResponse' });
//# sourceMappingURL=update_by_query_rethrottle.js.map