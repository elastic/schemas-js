/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, NodeId } from './_types.js'

export const ShutdownType = z.enum(['restart', 'remove', 'replace']).meta({ id: 'ShutdownType' })
export type ShutdownType = z.infer<typeof ShutdownType>

/**
 * Prepare a node to be shut down.
 *
 * NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * If you specify a node that is offline, it will be prepared for shut down when it rejoins the cluster.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 *
 * The API migrates ongoing tasks and index shards to other nodes as needed to prepare a node to be restarted or shut down and removed from the cluster.
 * This ensures that Elasticsearch can be stopped safely with minimal disruption to the cluster.
 *
 * You must specify the type of shutdown: `restart`, `remove`, or `replace`.
 * If a node is already being prepared for shutdown, you can use this API to change the shutdown type.
 *
 * IMPORTANT: This API does NOT terminate the Elasticsearch process.
 * Monitor the node shutdown status to determine when it is safe to stop Elasticsearch.
 */
export const ShutdownPutNodeRequest = z.object({
  node_id: z.lazy(() => NodeId).describe('The node identifier. This parameter is not validated against the cluster\'s active nodes. This enables you to register a node for shut down while it is offline. No error is thrown if you specify an invalid node ID.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  type: ShutdownType.describe('Valid values are restart, remove, or replace. Use restart when you need to temporarily shut down a node to perform an upgrade, make configuration changes, or perform other maintenance. Because the node is expected to rejoin the cluster, data is not migrated off of the node. Use remove when you need to permanently remove a node from the cluster. The node is not marked ready for shutdown until data is migrated off of the node Use replace to do a 1:1 replacement of a node with another node. Certain allocation decisions will be ignored (such as disk watermarks) in the interest of true replacement of the source node with the target node. During a replace-type shutdown, rollover and index creation may result in unassigned shards, and shrink may fail until the replacement is complete.').meta({ found_in: 'body' }),
  reason: z.string().describe('A human-readable reason that the node is being shut down. This field provides information for other cluster operators; it does not affect the shut down process.').meta({ found_in: 'body' }),
  allocation_delay: z.string().describe('Only valid if type is restart. Controls how long Elasticsearch will wait for the node to restart and join the cluster before reassigning its shards to other nodes. This works the same as delaying allocation with the index.unassigned.node_left.delayed_timeout setting. If you don\'t specify a restart allocation delay, a default value of 5 minutes will be used. If both a restart allocation delay and an index-level allocation delay are configured, the longer of the two is used.').optional().meta({ found_in: 'body' }),
  target_node_name: z.string().describe('Only valid if type is replace. Specifies the name of the node that is replacing the node being shut down. Shards from the shut down node are only allowed to be allocated to the target node, and no other data will be allocated to the target node. During relocation of data certain allocation rules are ignored, such as disk watermarks or user attribute filtering rules.').optional().meta({ found_in: 'body' })
}).meta({ id: 'ShutdownPutNodeRequest' })
export type ShutdownPutNodeRequest = z.infer<typeof ShutdownPutNodeRequest>

export const ShutdownPutNodeResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ShutdownPutNodeResponse' })
export type ShutdownPutNodeResponse = z.infer<typeof ShutdownPutNodeResponse>
