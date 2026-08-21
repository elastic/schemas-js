/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, integer } from './_types.js'

export const ClusterPendingTasksPendingTask = z.object({
  executing: z.boolean().describe('Indicates whether the pending tasks are currently executing or not.'),
  insert_order: z.lazy(() => integer).describe('The number that represents when the task has been inserted into the task queue.'),
  priority: z.string().describe('The priority of the pending task. The valid priorities in descending priority order are: `IMMEDIATE` > `URGENT` > `HIGH` > `NORMAL` > `LOW` > `LANGUID`.'),
  source: z.string().describe('A general description of the cluster task that may include a reason and origin.'),
  time_in_queue: z.lazy(() => Duration).describe('The time since the task is waiting for being performed.').optional(),
  time_in_queue_millis: z.lazy(() => DurationValue).describe('The time expressed in milliseconds since the task is waiting for being performed.')
}).meta({ id: 'ClusterPendingTasksPendingTask' })
export type ClusterPendingTasksPendingTask = z.infer<typeof ClusterPendingTasksPendingTask>

/**
 * Get the pending cluster tasks.
 *
 * Get information about cluster-level changes (such as create index, update mapping, allocate or fail shard) that have not yet taken effect.
 *
 * NOTE: This API returns a list of any pending updates to the cluster state.
 * These are distinct from the tasks reported by the task management API which include periodic tasks and tasks initiated by the user, such as node stats, search queries, or create index requests.
 * However, if a user-initiated task such as a create index command causes a cluster state update, the activity of this task might be reported by both task api and pending cluster tasks API.
 */
export const ClusterPendingTasksRequest = z.object({
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only. If `false`, information is retrieved from the master node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterPendingTasksRequest' })
export type ClusterPendingTasksRequest = z.infer<typeof ClusterPendingTasksRequest>

export const ClusterPendingTasksResponse = z.object({
  tasks: z.array(ClusterPendingTasksPendingTask)
}).meta({ id: 'ClusterPendingTasksResponse' })
export type ClusterPendingTasksResponse = z.infer<typeof ClusterPendingTasksResponse>
