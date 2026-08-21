/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { TaskId } from './_types.js'
import { TasksTaskListResponseBase } from './tasks.js'

/**
 * Cancel a task.
 *
 * WARNING: The task management API is new and should still be considered a beta feature.
 * The API may change in ways that are not backwards compatible.
 *
 * A task may continue to run for some time after it has been cancelled because it may not be able to safely stop its current activity straight away.
 * It is also possible that Elasticsearch must complete its work on other tasks before it can process the cancellation.
 * The get task information API will continue to list these cancelled tasks until they complete.
 * The cancelled flag in the response indicates that the cancellation command has been processed and the task will stop as soon as possible.
 *
 * To troubleshoot why a cancelled task does not complete promptly, use the get task information API with the `?detailed` parameter to identify the other tasks the system is running.
 * You can also use the node hot threads API to obtain detailed information about the work the system is doing instead of completing the cancelled task.
 *
 * For relocatable tasks, this API transparently follows the task across graceful shutdown relocations,
 * so callers can keep using the original task ID. The returned task reports its `original_task_id` and `original_start_time_in_millis`
 * if it is continuing work from an earlier task.
 */
export const TasksCancelRequest = z.object({
  task_id: TaskId.describe('The task identifier.').optional().meta({ found_in: 'path' }),
  actions: z.union([z.string(), z.array(z.string())]).describe('A comma-separated list or wildcard expression of actions that is used to limit the request.').optional().meta({ found_in: 'query' }),
  nodes: z.array(z.string()).describe('A comma-separated list of node IDs or names that is used to limit the request.').optional().meta({ found_in: 'query' }),
  parent_task_id: z.string().describe('A parent task ID that is used to limit the tasks.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If true, the request blocks until all found tasks are complete.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TasksCancelRequest' })
export type TasksCancelRequest = z.infer<typeof TasksCancelRequest>

export const TasksCancelResponse = TasksTaskListResponseBase.meta({ id: 'TasksCancelResponse' })
export type TasksCancelResponse = z.infer<typeof TasksCancelResponse>
