/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ErrorCause, Id } from './_types.js'
import { TasksTaskInfo } from './tasks.js'

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
export const TasksGetRequest = z.object({
  task_id: z.lazy(() => Id).describe('The task identifier.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request blocks until the task has completed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TasksGetRequest' })
export type TasksGetRequest = z.infer<typeof TasksGetRequest>

export const TasksGetResponse = z.object({
  completed: z.boolean(),
  task: TasksTaskInfo,
  response: z.any().optional(),
  error: z.lazy(() => ErrorCause).optional()
}).meta({ id: 'TasksGetResponse' })
export type TasksGetResponse = z.infer<typeof TasksGetResponse>
