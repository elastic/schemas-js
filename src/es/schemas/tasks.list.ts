/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, NodeIds } from './_types.js'
import { TasksTaskListResponseBase } from './tasks.js'

export const TasksGroupBy = z.enum(['nodes', 'parents', 'none']).meta({ id: 'TasksGroupBy' })
export type TasksGroupBy = z.infer<typeof TasksGroupBy>

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
export const TasksListRequest = z.object({
  actions: z.union([z.string(), z.array(z.string())]).describe('A comma-separated list or wildcard expression of actions used to limit the request. For example, you can use `cluser:*` to retrieve all cluster-related tasks.').optional().meta({ found_in: 'query' }),
  detailed: z.boolean().describe('If `true`, the response includes detailed information about the running tasks. This information is useful to distinguish tasks from each other but is more costly to run.').optional().meta({ found_in: 'query' }),
  group_by: TasksGroupBy.describe('A key that is used to group tasks in the response. The task lists can be grouped either by nodes or by parent tasks.').optional().meta({ found_in: 'query' }),
  nodes: z.lazy(() => NodeIds).describe('A comma-separated list of node IDs or names that is used to limit the returned information.').optional().meta({ found_in: 'query' }),
  parent_task_id: z.lazy(() => Id).describe('A parent task identifier that is used to limit returned information. To return all tasks, omit this parameter or use a value of `-1`. If the parent task is not found, the API does not return a 404 response code.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for each node to respond. If a node does not respond before its timeout expires, the response does not include its information. However, timed out nodes are included in the `node_failures` property.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request blocks until the operation is complete.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TasksListRequest' })
export type TasksListRequest = z.infer<typeof TasksListRequest>

export const TasksListResponse = TasksTaskListResponseBase.meta({ id: 'TasksListResponse' })
export type TasksListResponse = z.infer<typeof TasksListResponse>
