/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, EpochTime, Name, NodeIds, NodeStatistics, integer } from './_types.js'

export const NodesUsageNodeUsage = z.object({
  rest_actions: z.record(z.string(), z.lazy(() => integer)).describe('The total number of times each REST endpoint has been called on this node since the last restart.  Note that the REST endpoint names are not considered stable.'),
  since: z.lazy(() => EpochTime).describe('The timestamp for when the collection of these statistics started.'),
  timestamp: z.lazy(() => EpochTime).describe('The timestamp for when these statistics were collected.'),
  aggregations: z.record(z.string(), z.any()).describe('The total number of times search aggregations have been called on this node since the last restart.')
}).meta({ id: 'NodesUsageNodeUsage' })
export type NodesUsageNodeUsage = z.infer<typeof NodesUsageNodeUsage>

export const NodesUsageNodesUsageMetric = z.enum(['_all', 'rest_actions', 'aggregations']).meta({ id: 'NodesUsageNodesUsageMetric' })
export type NodesUsageNodesUsageMetric = z.infer<typeof NodesUsageNodesUsageMetric>

export const NodesUsageNodesUsageMetrics = z.union([NodesUsageNodesUsageMetric, z.array(NodesUsageNodesUsageMetric)]).meta({ id: 'NodesUsageNodesUsageMetrics' })
export type NodesUsageNodesUsageMetrics = z.infer<typeof NodesUsageNodesUsageMetrics>

/** Get feature usage information. */
export const NodesUsageRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('A comma-separated list of node IDs or names to limit the returned information. Use `_local` to return information from the node you\'re connecting to, leave empty to get information from all nodes.').optional().meta({ found_in: 'path' }),
  metric: NodesUsageNodesUsageMetrics.describe('Limits the information returned to the specific metrics. A comma-separated list of the following options: `_all`, `rest_actions`, `aggregations`.').optional().meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'NodesUsageRequest' })
export type NodesUsageRequest = z.infer<typeof NodesUsageRequest>

export const NodesUsageResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), NodesUsageNodeUsage)
}).meta({ id: 'NodesUsageResponseBase' })
export type NodesUsageResponseBase = z.infer<typeof NodesUsageResponseBase>

export const NodesUsageResponse = NodesUsageResponseBase.meta({ id: 'NodesUsageResponse' })
export type NodesUsageResponse = z.infer<typeof NodesUsageResponse>
