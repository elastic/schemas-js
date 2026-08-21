/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, EpochTime, ErrorCause, ReindexStatus, ReindexTaskResult, TaskId } from './_types.js'

/**
 * Get the status and progress of a specific reindex task.
 *
 * This API follows reindex tasks across node-shutdown relocations, so callers can
 * keep using the original task ID throughout the lifetime of the operation.
 * Returned task IDs and timings reflect the original task, not its relocated successor.
 * Relocated task IDs are also supported. They are followed transparently and return the task ID and timings of the original task.
 *
 * When the task ID cannot be resolved, the API returns the response below with a 404 status code.
 * This response is used whether the ID is unknown, refers to a non-reindex task, refers to a sliced child subtask, or refers to a task whose node left the cluster with no stored result (e.g. a non-graceful shutdown).
 * ```
 * {
 *   "error": {
 *     "type": "resource_not_found_exception",
 *     "reason": "Reindex operation [r1A2WoRbTwKZ516z6NEs5A:36619] not found"
 *   },
 *   "status": 404
 * }
 * ```
 */
export const GetReindexRequest = z.object({
  task_id: TaskId.describe('The ID of the reindex task to retrieve.').meta({ found_in: 'path' }),
  wait_for_completion: z.boolean().describe('If `true`, the request blocks until the reindex task completes, then returns the result.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for the reindex task to complete when `wait_for_completion` is `true`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'GetReindexRequest' })
export type GetReindexRequest = z.infer<typeof GetReindexRequest>

export const GetReindexResponse = z.object({
  completed: z.boolean().describe('Whether the reindex task has completed.'),
  id: TaskId.describe('The ID of the reindex task. The value is the ID assigned when the task was first created and remains stable across node-shutdown relocations.'),
  description: z.string().describe('A sanitized description of the reindex operation (source and destination indices, and optionally remote host info).').optional(),
  start_time_in_millis: z.lazy(() => EpochTime).describe('The time at which the reindex task started, in milliseconds since the Unix epoch.'),
  start_time: z.string().describe('The time at which the reindex task started, as an ISO 8601 formatted string. Only present when the request includes the `?human=true` query parameter.').optional(),
  running_time: z.lazy(() => Duration).describe('The elapsed running time of the reindex task, in a human-readable format. Only present when the request includes the `?human=true` query parameter.').optional(),
  running_time_in_nanos: z.lazy(() => DurationValue).describe('The elapsed running time of the reindex task, in nanoseconds.'),
  cancelled: z.boolean().describe('Whether the reindex task has been cancelled.'),
  status: ReindexStatus.describe('The current progress of the reindex operation.').optional(),
  error: z.lazy(() => ErrorCause).describe('The error that caused the reindex task to fail, if any.').optional(),
  response: ReindexTaskResult.describe('The final result of the completed reindex operation, if the task has finished successfully.').optional()
}).meta({ id: 'GetReindexResponse' })
export type GetReindexResponse = z.infer<typeof GetReindexResponse>
