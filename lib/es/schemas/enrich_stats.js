/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const DurationValue = z.any().meta({ id: 'DurationValue' });
export const EpochTime = z.any().meta({ id: 'EpochTime' });
export const Id = z.string().meta({ id: 'Id' });
export const Name = z.string().meta({ id: 'Name' });
export const NodeId = z.string().meta({ id: 'NodeId' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const TaskId = z.string().meta({ id: 'TaskId' });
export const integer = z.number().meta({ id: 'integer' });
export const long = z.number().meta({ id: 'long' });
export const EnrichStatsCacheStats = z.object({
    node_id: Id,
    count: integer,
    hits: integer,
    hits_time_in_millis: DurationValue,
    misses: integer,
    misses_time_in_millis: DurationValue,
    evictions: integer,
    size_in_bytes: long
}).meta({ id: 'EnrichStatsCacheStats' });
export const EnrichStatsCoordinatorStats = z.object({
    executed_searches_total: long,
    node_id: Id,
    queue_size: integer,
    remote_requests_current: integer,
    remote_requests_total: long
}).meta({ id: 'EnrichStatsCoordinatorStats' });
export const TasksTaskInfo = z.object({
    action: z.string(),
    cancelled: z.boolean().optional(),
    cancellable: z.boolean(),
    description: z.string().describe('Human readable text that identifies the particular request that the task is performing. For example, it might identify the search request being performed by a search task. Other kinds of tasks have different descriptions, like `_reindex` which has the source and the destination, or `_bulk` which just has the number of requests and the destination indices. Many requests will have only an empty description because more detailed information about the request is not easily available or particularly helpful in identifying the request.').optional(),
    headers: z.record(z.string(), z.string()),
    id: long,
    node: NodeId,
    running_time: Duration.optional(),
    running_time_in_nanos: DurationValue,
    start_time_in_millis: EpochTime,
    status: z.any().describe('The internal status of the task, which varies from task to task. The format also varies. While the goal is to keep the status for a particular task consistent from version to version, this is not always possible because sometimes the implementation changes. Fields might be removed from the status for a particular request so any parsing you do of the status might break in minor releases.').optional(),
    type: z.string(),
    parent_task_id: TaskId.optional(),
    original_task_id: TaskId.describe('The task ID of the original task. Only present when the task is continuing the work of an earlier task that was running on a node which has since shut down (i.e. a relocatable task). For tasks that have not been relocated this is always equal to the task\'s own ID and is omitted from the response.').optional(),
    original_start_time_in_millis: EpochTime.describe('The time at which the original task started, in milliseconds since the Unix epoch. Only present together with `original_task_id`.').optional(),
    original_start_time: z.string().describe('The time at which the original task started, as an ISO 8601 formatted string. Only present together with `original_task_id` and when the request includes the `?human=true` query parameter.').optional()
}).meta({ id: 'TasksTaskInfo' });
export const EnrichStatsExecutingPolicy = z.object({
    name: Name,
    task: TasksTaskInfo
}).meta({ id: 'EnrichStatsExecutingPolicy' });
/**
 * Get enrich stats.
 *
 * Returns enrich coordinator statistics and information about enrich policies that are currently executing.
 */
export const EnrichStatsRequest = z.object({
    ...RequestBase.shape,
    master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EnrichStatsRequest' });
export const EnrichStatsResponse = z.object({
    coordinator_stats: z.array(EnrichStatsCoordinatorStats).describe('Objects containing information about each coordinating ingest node for configured enrich processors.'),
    executing_policies: z.array(EnrichStatsExecutingPolicy).describe('Objects containing information about each enrich policy that is currently executing.'),
    cache_stats: z.array(EnrichStatsCacheStats).describe('Objects containing information about the enrich cache stats on each ingest node.').optional()
}).meta({ id: 'EnrichStatsResponse' });
//# sourceMappingURL=enrich_stats.js.map