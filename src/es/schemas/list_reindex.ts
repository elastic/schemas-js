/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, EpochTime, ErrorCause, ReindexStatus, TaskFailure, TaskId } from './_types.js'

/**
 * Get information about all currently running reindex tasks.
 *
 * Reindex tasks that are mid-relocation between nodes are reported once,
 * under their original task ID, so callers do not see duplicates across the relocation chain.
 *
 * If the API returns a HTTP status of `200 OK`, but `node_failures` or `task_failures` are non-empty in the body, the listing is not a complete authoritative listing and may be missing tasks.
 */
export const ListReindexRequest = z.object({
  detailed: z.boolean().describe('If `true`, include detailed task status information in the response.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ListReindexRequest' })
export type ListReindexRequest = z.infer<typeof ListReindexRequest>

/** Information about a single parent reindex task, as returned by the reindex management APIs. */
export const ReindexTaskInfo = z.object({
  id: TaskId.describe('The ID of the reindex task. The ID is assigned when the task was first created and remains the same across graceful shutdown relocations.'),
  description: z.string().describe('A sanitized description of the reindex operation (source and destination indices, and optionally remote host info).').optional(),
  start_time_in_millis: z.lazy(() => EpochTime).describe('The time at which the reindex task started, in milliseconds since the Unix epoch. Remains the same across graceful shutdown relocations.'),
  start_time: z.string().describe('The time at which the reindex task started, as an ISO-8601 formatted string. Remains the same across graceful shutdown relocations. Only present when the request includes the `?human=true` query parameter.').optional(),
  running_time: z.lazy(() => Duration).describe('The elapsed running time of the reindex task, including relocations, in a human-readable format. Only present when the request includes the `?human=true` query parameter.').optional(),
  running_time_in_nanos: z.lazy(() => DurationValue).describe('The elapsed running time of the reindex task, including relocations, in nanoseconds.'),
  cancelled: z.boolean().describe('Whether the reindex task has been cancelled.'),
  status: ReindexStatus.describe('The current progress of the reindex operation.').optional()
}).meta({ id: 'ReindexTaskInfo' })
export type ReindexTaskInfo = z.infer<typeof ReindexTaskInfo>

export const ListReindexResponse = z.object({
  reindex: z.array(ReindexTaskInfo).describe('The list of currently running reindex tasks.'),
  task_failures: z.array(TaskFailure).describe('Per-task failures encountered while listing reindex tasks. Tasks that failed are not included in the `reindex` array.').optional(),
  node_failures: z.array(z.lazy(() => ErrorCause)).describe('Node-level failures encountered while listing reindex tasks. Typically populated when a node disconnects or stops responding mid-request, reindex tasks running on such nodes will be missing from the `reindex` array for the duration of the disruption.').optional()
}).meta({ id: 'ListReindexResponse' })
export type ListReindexResponse = z.infer<typeof ListReindexResponse>
