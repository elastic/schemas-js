/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsBaseNode } from './_spec_utils.js'
import { Duration, DurationValue, EpochTime, ErrorCause, HttpHeaders, Id, Name, ReindexStatus, Retries, TaskFailure, TaskId, float, integer, long } from './_types.js'

export const ReindexRethrottleParentReindexStatus = z.object({
  slices: z.array(ReindexStatus).optional(),
  slice_id: z.lazy(() => integer).describe('The slice ID').optional(),
  batches: z.lazy(() => long).describe('The number of scroll responses pulled back by the reindex.'),
  created: z.lazy(() => long).describe('The number of documents that were successfully created.').optional(),
  deleted: z.lazy(() => long).describe('The number of documents that were successfully deleted.'),
  noops: z.lazy(() => long).describe('The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.'),
  requests_per_second: z.lazy(() => float).describe('The number of requests per second effectively executed during the reindex.'),
  retries: Retries.describe('The number of retries attempted by reindex. `bulk` is the number of bulk actions retried and `search` is the number of search actions retried.'),
  throttled: z.lazy(() => Duration).optional(),
  throttled_millis: z.lazy(() => DurationValue).describe('Number of milliseconds the request slept to conform to `requests_per_second`.'),
  throttled_until: z.lazy(() => Duration).optional(),
  throttled_until_millis: z.lazy(() => DurationValue).describe('This field should always be equal to zero in a `_reindex` response. It only has meaning when using the Task API, where it indicates the next time (in milliseconds since epoch) a throttled request will be executed again in order to conform to `requests_per_second`.'),
  total: z.lazy(() => long).describe('The number of documents that were successfully processed.'),
  updated: z.lazy(() => long).describe('The number of documents that were successfully updated, for example, a document with same ID already existed prior to reindex updating it.').optional(),
  version_conflicts: z.lazy(() => long).describe('The number of version conflicts that reindex hits.'),
  cancelled: z.string().describe('The reason for cancellation if the slice was canceled').optional()
}).meta({ id: 'ReindexRethrottleParentReindexStatus' })
export type ReindexRethrottleParentReindexStatus = z.infer<typeof ReindexRethrottleParentReindexStatus>

export const ReindexRethrottleReindexTask = z.object({
  action: z.string(),
  cancellable: z.boolean(),
  cancelled: z.boolean(),
  description: z.string(),
  id: z.lazy(() => long),
  node: z.lazy(() => Name),
  running_time_in_nanos: z.lazy(() => DurationValue),
  start_time_in_millis: z.lazy(() => EpochTime),
  status: ReindexRethrottleParentReindexStatus,
  type: z.string(),
  headers: HttpHeaders
}).meta({ id: 'ReindexRethrottleReindexTask' })
export type ReindexRethrottleReindexTask = z.infer<typeof ReindexRethrottleReindexTask>

export const ReindexRethrottleParentReindexTask = z.object({
  ...ReindexRethrottleReindexTask.shape,
  children: z.array(ReindexRethrottleReindexTask).optional()
}).meta({ id: 'ReindexRethrottleParentReindexTask' })
export type ReindexRethrottleParentReindexTask = z.infer<typeof ReindexRethrottleParentReindexTask>

export const ReindexRethrottleReindexNode = z.object({
  ...SpecUtilsBaseNode.shape,
  tasks: z.record(TaskId, ReindexRethrottleReindexTask)
}).meta({ id: 'ReindexRethrottleReindexNode' })
export type ReindexRethrottleReindexNode = z.infer<typeof ReindexRethrottleReindexNode>

export const ReindexRethrottleReindexTasks = z.union([z.array(ReindexRethrottleReindexTask), z.record(z.string(), ReindexRethrottleParentReindexTask)]).meta({ id: 'ReindexRethrottleReindexTasks' })
export type ReindexRethrottleReindexTasks = z.infer<typeof ReindexRethrottleReindexTasks>

/**
 * Throttle a reindex operation.
 *
 * Change the maximum number of documents to index per second for a particular reindex operation.
 * For example, to unthrottle to unlimited documents per second:
 *
 * ```
 * POST _reindex/r1A2WoRbTwKZ516z6NEs5A:36619/_rethrottle?requests_per_second=-1
 * ```
 *
 * Rethrottling that speeds up the query takes effect immediately.
 * Rethrottling that slows down the query will take effect after completing the current batch of documents.
 * This behavior prevents scroll timeouts.
 *
 * This API follows reindex tasks across node-shutdown relocations, so callers can keep using
 * the original task ID throughout the lifetime of the operation.
 * The relocated task ID is also accepted and is followed transparently.
 * In either case, returned task IDs and timings reflect the original task, not its relocated successor.
 *
 * The rethrottle may not have been applied to any tasks if either `node_failures` or `task_failures` are non-empty, or if the response contains
 * no successfully rethrottled tasks — that is, no entries under `nodes` (returned with the default
 * `group_by=nodes` in stack) or under `tasks` (returned in serverless, or in stack with
 * `group_by=none` or `group_by=parents`).
 */
export const ReindexRethrottleRequest = z.object({
  task_id: z.lazy(() => Id).describe('The task identifier, returned when creating a reindex task, or by listing tasks via `GET /_reindex` or `GET /_tasks`. In stack, can be either the original task ID or the task ID of the relocated task.').meta({ found_in: 'path' }),
  requests_per_second: z.lazy(() => float).describe('The maximum number of documents to index per second, across the entire reindex operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').meta({ found_in: 'query' })
}).meta({ id: 'ReindexRethrottleRequest' })
export type ReindexRethrottleRequest = z.infer<typeof ReindexRethrottleRequest>

export const ReindexRethrottleResponse = z.object({
  node_failures: z.array(z.lazy(() => ErrorCause)).describe('Node-level failures encountered while applying the rethrottle request. Will return a `failed_node_exception` wrapping a `no_such_node_exception`, if a node handling the task either never existed, or has left the cluster, and one of the following is true: 1. The task has completed. 2. The task cannot be found. Note: Rethrottle handles relocations, so it should succeed if the task can be found and has not completed.').optional(),
  task_failures: z.array(TaskFailure).describe('Per-task failures encountered while applying the rethrottle. If a rethrottle is attempted during a relocation handoff, the failure object reports `status: SERVICE_UNAVAILABLE` (the HTTP response itself is still `200 OK`). In this case, the request can be retried until success.').optional(),
  tasks: ReindexRethrottleReindexTasks.describe('The tasks that were successfully rethrottled. Always returned in serverless. Returned with `group_by=none` or `group_by=parents` in stack.').optional()
}).meta({ id: 'ReindexRethrottleResponse' })
export type ReindexRethrottleResponse = z.infer<typeof ReindexRethrottleResponse>
