/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-nocheck

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any())
export type TODO = z.infer<typeof TODO>

export const integer = z.number().meta({ id: 'integer' })
export type integer = z.infer<typeof integer>

export const long = z.number().meta({ id: 'long' })
export type long = z.infer<typeof long>

export const float = z.number().meta({ id: 'float' })
export type float = z.infer<typeof float>

export const Retries = z.object({
  bulk: long.describe('The number of bulk actions retried.'),
  search: long.describe('The number of search actions retried.')
}).meta({ id: 'Retries' })
export type Retries = z.infer<typeof Retries>

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const DurationValue = z.any().meta({ id: 'DurationValue' })
export type DurationValue = z.infer<typeof DurationValue>

export const ReindexStatus = z.object({
  slice_id: integer.describe('The slice ID').optional(),
  batches: long.describe('The number of scroll responses pulled back by the reindex.'),
  created: long.describe('The number of documents that were successfully created.').optional(),
  deleted: long.describe('The number of documents that were successfully deleted.'),
  noops: long.describe('The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.'),
  requests_per_second: float.describe('The number of requests per second effectively executed during the reindex.'),
  retries: Retries.describe('The number of retries attempted by reindex. `bulk` is the number of bulk actions retried and `search` is the number of search actions retried.'),
  throttled: Duration.optional(),
  throttled_millis: DurationValue.describe('Number of milliseconds the request slept to conform to `requests_per_second`.'),
  throttled_until: Duration.optional(),
  throttled_until_millis: DurationValue.describe('This field should always be equal to zero in a `_reindex` response. It only has meaning when using the Task API, where it indicates the next time (in milliseconds since epoch) a throttled request will be executed again in order to conform to `requests_per_second`.'),
  total: long.describe('The number of documents that were successfully processed.'),
  updated: long.describe('The number of documents that were successfully updated, for example, a document with same ID already existed prior to reindex updating it.').optional(),
  version_conflicts: long.describe('The number of version conflicts that reindex hits.'),
  cancelled: z.string().describe('The reason for cancellation if the slice was canceled').optional()
}).meta({ id: 'ReindexStatus' })
export type ReindexStatus = z.infer<typeof ReindexStatus>

export const ReindexRethrottleParentReindexStatus = z.object({
  slices: z.array(ReindexStatus).optional(),
  slice_id: integer.describe('The slice ID').optional(),
  batches: long.describe('The number of scroll responses pulled back by the reindex.'),
  created: long.describe('The number of documents that were successfully created.').optional(),
  deleted: long.describe('The number of documents that were successfully deleted.'),
  noops: long.describe('The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.'),
  requests_per_second: float.describe('The number of requests per second effectively executed during the reindex.'),
  retries: Retries.describe('The number of retries attempted by reindex. `bulk` is the number of bulk actions retried and `search` is the number of search actions retried.'),
  throttled: Duration.optional(),
  throttled_millis: DurationValue.describe('Number of milliseconds the request slept to conform to `requests_per_second`.'),
  throttled_until: Duration.optional(),
  throttled_until_millis: DurationValue.describe('This field should always be equal to zero in a `_reindex` response. It only has meaning when using the Task API, where it indicates the next time (in milliseconds since epoch) a throttled request will be executed again in order to conform to `requests_per_second`.'),
  total: long.describe('The number of documents that were successfully processed.'),
  updated: long.describe('The number of documents that were successfully updated, for example, a document with same ID already existed prior to reindex updating it.').optional(),
  version_conflicts: long.describe('The number of version conflicts that reindex hits.'),
  cancelled: z.string().describe('The reason for cancellation if the slice was canceled').optional()
}).meta({ id: 'ReindexRethrottleParentReindexStatus' })
export type ReindexRethrottleParentReindexStatus = z.infer<typeof ReindexRethrottleParentReindexStatus>

export const Name = z.string().meta({ id: 'Name' })
export type Name = z.infer<typeof Name>

export const EpochTime = z.any().meta({ id: 'EpochTime' })
export type EpochTime = z.infer<typeof EpochTime>

export const HttpHeaders = z.record(z.string(), z.union([z.string(), z.array(z.string())])).meta({ id: 'HttpHeaders' })
export type HttpHeaders = z.infer<typeof HttpHeaders>

export const ReindexRethrottleReindexTask = z.object({
  action: z.string(),
  cancellable: z.boolean(),
  cancelled: z.boolean(),
  description: z.string(),
  id: long,
  node: Name,
  running_time_in_nanos: DurationValue,
  start_time_in_millis: EpochTime,
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

export const ReindexRethrottleReindexTasks = z.union([z.array(ReindexRethrottleReindexTask), z.record(z.string(), ReindexRethrottleParentReindexTask)]).meta({ id: 'ReindexRethrottleReindexTasks' })
export type ReindexRethrottleReindexTasks = z.infer<typeof ReindexRethrottleReindexTasks>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

export const Id = z.string().meta({ id: 'Id' })
export type Id = z.infer<typeof Id>

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
  ...RequestBase.shape,
  task_id: Id.describe('The task identifier, returned when creating a reindex task, or by listing tasks via `GET /_reindex` or `GET /_tasks`. In stack, can be either the original task ID or the task ID of the relocated task.').meta({ found_in: 'path' }),
  requests_per_second: float.describe('The maximum number of documents to index per second, across the entire reindex operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').meta({ found_in: 'query' })
}).meta({ id: 'ReindexRethrottleRequest' })
export type ReindexRethrottleRequest = z.infer<typeof ReindexRethrottleRequest>

export interface ErrorCauseShape {
  type: string
  reason?: string | null | undefined
  stack_trace?: string | undefined
  caused_by?: ErrorCauseShape | undefined
  root_cause?: ErrorCauseShape[] | undefined
  suppressed?: ErrorCauseShape[] | undefined
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export const ErrorCause = z.looseObject({
  type: z.string().describe('The type of error'),
  reason: z.union([z.string(), z.null()]).describe('A human-readable explanation of the error, in English.').optional(),
  stack_trace: z.string().describe('The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.').optional(),
  get caused_by () { return ErrorCause.optional() },
  get root_cause () { return ErrorCause.array().optional() },
  get suppressed () { return ErrorCause.array().optional() }
}).meta({ id: 'ErrorCause' })
export type ErrorCause = z.infer<typeof ErrorCause>

export const NodeId = z.string().meta({ id: 'NodeId' })
export type NodeId = z.infer<typeof NodeId>

export const TaskFailure = z.object({
  task_id: long,
  node_id: NodeId,
  status: z.string(),
  reason: z.lazy(() => ErrorCause)
}).meta({ id: 'TaskFailure' })
export type TaskFailure = z.infer<typeof TaskFailure>

export const ReindexRethrottleResponse = z.object({
  node_failures: z.array(z.lazy(() => ErrorCause)).describe('Node-level failures encountered while applying the rethrottle request. Will return a `failed_node_exception` wrapping a `no_such_node_exception`, if a node handling the task either never existed, or has left the cluster, and one of the following is true: 1. The task has completed. 2. The task cannot be found. Note: Rethrottle handles relocations, so it should succeed if the task can be found and has not completed.').optional(),
  task_failures: z.array(TaskFailure).describe('Per-task failures encountered while applying the rethrottle. If a rethrottle is attempted during a relocation handoff, the failure object reports `status: SERVICE_UNAVAILABLE` (the HTTP response itself is still `200 OK`). In this case, the request can be retried until success.').optional(),
  tasks: ReindexRethrottleReindexTasks.describe('The tasks that were successfully rethrottled. Always returned in serverless. Returned with `group_by=none` or `group_by=parents` in stack.').optional()
}).meta({ id: 'ReindexRethrottleResponse' })
export type ReindexRethrottleResponse = z.infer<typeof ReindexRethrottleResponse>
