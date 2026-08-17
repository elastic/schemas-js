/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsBaseNode } from './_spec_utils.js'
import { Id, TaskId, float } from './_types.js'
import { TasksTaskInfo } from './tasks.js'

/**
 * Throttle an update by query operation.
 *
 * Change the number of requests per second for a particular update by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 */
export const UpdateByQueryRethrottleRequest = z.object({
  task_id: z.lazy(() => Id).describe('The ID for the task.').meta({ found_in: 'path' }),
  requests_per_second: z.lazy(() => float).describe('The maximum number of documents to update per second, across the entire update_by_query operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').meta({ found_in: 'query' })
}).meta({ id: 'UpdateByQueryRethrottleRequest' })
export type UpdateByQueryRethrottleRequest = z.infer<typeof UpdateByQueryRethrottleRequest>

export const UpdateByQueryRethrottleUpdateByQueryRethrottleNode = z.object({
  ...SpecUtilsBaseNode.shape,
  tasks: z.record(TaskId, TasksTaskInfo)
}).meta({ id: 'UpdateByQueryRethrottleUpdateByQueryRethrottleNode' })
export type UpdateByQueryRethrottleUpdateByQueryRethrottleNode = z.infer<typeof UpdateByQueryRethrottleUpdateByQueryRethrottleNode>

export const UpdateByQueryRethrottleResponse = z.object({
  nodes: z.record(z.string(), UpdateByQueryRethrottleUpdateByQueryRethrottleNode)
}).meta({ id: 'UpdateByQueryRethrottleResponse' })
export type UpdateByQueryRethrottleResponse = z.infer<typeof UpdateByQueryRethrottleResponse>
