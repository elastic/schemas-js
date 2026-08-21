/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'

export const CatCatPendingTasksColumn = z.union([z.enum(['insertOrder', 'o', 'timeInQueue', 't', 'priority', 'p', 'source', 's']), z.string()]).meta({ id: 'CatCatPendingTasksColumn' })
export type CatCatPendingTasksColumn = z.infer<typeof CatCatPendingTasksColumn>

export const CatCatPendingTasksColumns = z.union([CatCatPendingTasksColumn, z.array(CatCatPendingTasksColumn)]).meta({ id: 'CatCatPendingTasksColumns' })
export type CatCatPendingTasksColumns = z.infer<typeof CatCatPendingTasksColumns>

export const CatPendingTasksPendingTasksRecord = z.object({
  insertOrder: z.string().describe('The task insertion order.').optional(),
  o: z.string().describe('The task insertion order.').optional(),
  timeInQueue: z.string().describe('Indicates how long the task has been in queue.').optional(),
  t: z.string().describe('Indicates how long the task has been in queue.').optional(),
  priority: z.string().describe('The task priority.').optional(),
  p: z.string().describe('The task priority.').optional(),
  source: z.string().describe('The task source.').optional(),
  s: z.string().describe('The task source.').optional()
}).meta({ id: 'CatPendingTasksPendingTasksRecord' })
export type CatPendingTasksPendingTasksRecord = z.infer<typeof CatPendingTasksPendingTasksRecord>

/**
 * Get pending task information.
 *
 * Get information about cluster-level changes that have not yet taken effect.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the pending cluster tasks API.
 */
export const CatPendingTasksRequest = z.object({
  h: CatCatPendingTasksColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatPendingTasksRequest' })
export type CatPendingTasksRequest = z.infer<typeof CatPendingTasksRequest>

export const CatPendingTasksResponse = z.array(CatPendingTasksPendingTasksRecord).meta({ id: 'CatPendingTasksResponse' })
export type CatPendingTasksResponse = z.infer<typeof CatPendingTasksResponse>
