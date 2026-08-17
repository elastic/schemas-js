/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { TaskId, float } from './_types.js'
import { TasksTaskListResponseBase } from './tasks.js'

/**
 * Throttle a delete by query operation.
 *
 * Change the number of requests per second for a particular delete by query operation.
 * Rethrottling that speeds up the query takes effect immediately but rethrotting that slows down the query takes effect after completing the current batch to prevent scroll timeouts.
 */
export const DeleteByQueryRethrottleRequest = z.object({
  task_id: TaskId.describe('The ID for the task.').meta({ found_in: 'path' }),
  requests_per_second: z.lazy(() => float).describe('The maximum number of documents to delete per second, across the entire delete-by-query operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').meta({ found_in: 'query' })
}).meta({ id: 'DeleteByQueryRethrottleRequest' })
export type DeleteByQueryRethrottleRequest = z.infer<typeof DeleteByQueryRethrottleRequest>

export const DeleteByQueryRethrottleResponse = TasksTaskListResponseBase.meta({ id: 'DeleteByQueryRethrottleResponse' })
export type DeleteByQueryRethrottleResponse = z.infer<typeof DeleteByQueryRethrottleResponse>
