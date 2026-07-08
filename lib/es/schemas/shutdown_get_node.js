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
export const EpochTime = z.any().meta({ id: 'EpochTime' });
export const NodeId = z.string().meta({ id: 'NodeId' });
export const NodeIds = z.union([NodeId, z.array(NodeId)]).meta({ id: 'NodeIds' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const ShutdownGetNodeShutdownType = z.enum(['remove', 'restart']).meta({ id: 'ShutdownGetNodeShutdownType' });
export const ShutdownGetNodeShutdownStatus = z.enum(['not_started', 'in_progress', 'stalled', 'complete']).meta({ id: 'ShutdownGetNodeShutdownStatus' });
export const ShutdownGetNodeShardMigrationStatus = z.object({
    status: ShutdownGetNodeShutdownStatus
}).meta({ id: 'ShutdownGetNodeShardMigrationStatus' });
export const ShutdownGetNodePersistentTaskStatus = z.object({
    status: ShutdownGetNodeShutdownStatus
}).meta({ id: 'ShutdownGetNodePersistentTaskStatus' });
export const ShutdownGetNodePluginsStatus = z.object({
    status: ShutdownGetNodeShutdownStatus
}).meta({ id: 'ShutdownGetNodePluginsStatus' });
export const ShutdownGetNodeNodeShutdownStatus = z.object({
    node_id: NodeId,
    type: ShutdownGetNodeShutdownType,
    reason: z.string(),
    shutdown_startedmillis: EpochTime,
    status: ShutdownGetNodeShutdownStatus,
    shard_migration: ShutdownGetNodeShardMigrationStatus,
    persistent_tasks: ShutdownGetNodePersistentTaskStatus,
    plugins: ShutdownGetNodePluginsStatus
}).meta({ id: 'ShutdownGetNodeNodeShutdownStatus' });
/**
 * Get the shutdown status.
 *
 * Get information about nodes that are ready to be shut down, have shut down preparations still in progress, or have stalled.
 * The API returns status information for each part of the shut down process.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 */
export const ShutdownGetNodeRequest = z.object({
    ...RequestBase.shape,
    node_id: NodeIds.describe('Comma-separated list of nodes for which to retrieve the shutdown status').optional().meta({ found_in: 'path' }),
    master_timeout: Duration.describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ShutdownGetNodeRequest' });
export const ShutdownGetNodeResponse = z.object({
    nodes: z.array(ShutdownGetNodeNodeShutdownStatus)
}).meta({ id: 'ShutdownGetNodeResponse' });
//# sourceMappingURL=shutdown_get_node.js.map