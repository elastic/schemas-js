/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, EpochTime, NodeId, NodeIds } from './_types.js'

export const ShutdownGetNodeShutdownType = z.enum(['remove', 'restart']).meta({ id: 'ShutdownGetNodeShutdownType' })
export type ShutdownGetNodeShutdownType = z.infer<typeof ShutdownGetNodeShutdownType>

export const ShutdownGetNodeShutdownStatus = z.enum(['not_started', 'in_progress', 'stalled', 'complete']).meta({ id: 'ShutdownGetNodeShutdownStatus' })
export type ShutdownGetNodeShutdownStatus = z.infer<typeof ShutdownGetNodeShutdownStatus>

export const ShutdownGetNodeShardMigrationStatus = z.object({
  status: ShutdownGetNodeShutdownStatus
}).meta({ id: 'ShutdownGetNodeShardMigrationStatus' })
export type ShutdownGetNodeShardMigrationStatus = z.infer<typeof ShutdownGetNodeShardMigrationStatus>

export const ShutdownGetNodePersistentTaskStatus = z.object({
  status: ShutdownGetNodeShutdownStatus
}).meta({ id: 'ShutdownGetNodePersistentTaskStatus' })
export type ShutdownGetNodePersistentTaskStatus = z.infer<typeof ShutdownGetNodePersistentTaskStatus>

export const ShutdownGetNodePluginsStatus = z.object({
  status: ShutdownGetNodeShutdownStatus
}).meta({ id: 'ShutdownGetNodePluginsStatus' })
export type ShutdownGetNodePluginsStatus = z.infer<typeof ShutdownGetNodePluginsStatus>

export const ShutdownGetNodeNodeShutdownStatus = z.object({
  node_id: z.lazy(() => NodeId),
  type: ShutdownGetNodeShutdownType,
  reason: z.string(),
  shutdown_startedmillis: z.lazy(() => EpochTime),
  status: ShutdownGetNodeShutdownStatus,
  shard_migration: ShutdownGetNodeShardMigrationStatus,
  persistent_tasks: ShutdownGetNodePersistentTaskStatus,
  plugins: ShutdownGetNodePluginsStatus
}).meta({ id: 'ShutdownGetNodeNodeShutdownStatus' })
export type ShutdownGetNodeNodeShutdownStatus = z.infer<typeof ShutdownGetNodeNodeShutdownStatus>

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
  node_id: z.lazy(() => NodeIds).describe('Comma-separated list of nodes for which to retrieve the shutdown status').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ShutdownGetNodeRequest' })
export type ShutdownGetNodeRequest = z.infer<typeof ShutdownGetNodeRequest>

export const ShutdownGetNodeResponse = z.object({
  nodes: z.array(ShutdownGetNodeNodeShutdownStatus)
}).meta({ id: 'ShutdownGetNodeResponse' })
export type ShutdownGetNodeResponse = z.infer<typeof ShutdownGetNodeResponse>
