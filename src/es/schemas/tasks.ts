/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, EpochTime, ErrorCause, Host, Ip, NodeId, TaskFailure, TaskId, TransportAddress, long } from './_types.js'

export const TasksTaskInfo = z.object({
  action: z.string(),
  cancelled: z.boolean().optional(),
  cancellable: z.boolean(),
  description: z.string().describe('Human readable text that identifies the particular request that the task is performing. For example, it might identify the search request being performed by a search task. Other kinds of tasks have different descriptions, like `_reindex` which has the source and the destination, or `_bulk` which just has the number of requests and the destination indices. Many requests will have only an empty description because more detailed information about the request is not easily available or particularly helpful in identifying the request.').optional(),
  headers: z.record(z.string(), z.string()),
  id: z.lazy(() => long),
  node: z.lazy(() => NodeId),
  running_time: z.lazy(() => Duration).optional(),
  running_time_in_nanos: z.lazy(() => DurationValue),
  start_time_in_millis: z.lazy(() => EpochTime),
  status: z.any().describe('The internal status of the task, which varies from task to task. The format also varies. While the goal is to keep the status for a particular task consistent from version to version, this is not always possible because sometimes the implementation changes. Fields might be removed from the status for a particular request so any parsing you do of the status might break in minor releases.').optional(),
  type: z.string(),
  parent_task_id: TaskId.optional(),
  original_task_id: TaskId.describe('The task ID of the original task. Only present when the task is continuing the work of an earlier task that was running on a node which has since shut down (i.e. a relocatable task). For tasks that have not been relocated this is always equal to the task\'s own ID and is omitted from the response.').optional(),
  original_start_time_in_millis: z.lazy(() => EpochTime).describe('The time at which the original task started, in milliseconds since the Unix epoch. Only present together with `original_task_id`.').optional(),
  original_start_time: z.string().describe('The time at which the original task started, as an ISO 8601 formatted string. Only present together with `original_task_id` and when the request includes the `?human=true` query parameter.').optional()
}).meta({ id: 'TasksTaskInfo' })
export type TasksTaskInfo = z.infer<typeof TasksTaskInfo>

export const TasksNodeTasks = z.object({
  name: z.lazy(() => NodeId).optional(),
  transport_address: z.lazy(() => TransportAddress).optional(),
  host: z.lazy(() => Host).optional(),
  ip: z.lazy(() => Ip).optional(),
  roles: z.array(z.string()).optional(),
  attributes: z.record(z.string(), z.string()).optional(),
  tasks: z.record(TaskId, TasksTaskInfo)
}).meta({ id: 'TasksNodeTasks' })
export type TasksNodeTasks = z.infer<typeof TasksNodeTasks>

export const TasksParentTaskInfo = z.object({
  ...TasksTaskInfo.shape,
  children: z.array(TasksTaskInfo).optional()
}).meta({ id: 'TasksParentTaskInfo' })
export type TasksParentTaskInfo = z.infer<typeof TasksParentTaskInfo>

export const TasksTaskInfos = z.union([z.array(TasksTaskInfo), z.record(z.string(), TasksParentTaskInfo)]).meta({ id: 'TasksTaskInfos' })
export type TasksTaskInfos = z.infer<typeof TasksTaskInfos>

export const TasksTaskListResponseBase = z.object({
  node_failures: z.array(z.lazy(() => ErrorCause)).optional(),
  task_failures: z.array(TaskFailure).optional(),
  nodes: z.record(z.string(), TasksNodeTasks).describe('Task information grouped by node, if `group_by` was set to `node` (the default).').optional(),
  tasks: TasksTaskInfos.describe('Either a flat list of tasks if `group_by` was set to `none`, or grouped by parents if `group_by` was set to `parents`.').optional()
}).meta({ id: 'TasksTaskListResponseBase' })
export type TasksTaskListResponseBase = z.infer<typeof TasksTaskListResponseBase>
