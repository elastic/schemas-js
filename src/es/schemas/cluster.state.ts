/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Indices, VersionNumber } from './_types.js'

export const ClusterStateClusterStateMetric = z.enum(['_all', 'version', 'master_node', 'blocks', 'nodes', 'metadata', 'routing_table', 'routing_nodes', 'customs']).meta({ id: 'ClusterStateClusterStateMetric' })
export type ClusterStateClusterStateMetric = z.infer<typeof ClusterStateClusterStateMetric>

export const ClusterStateClusterStateMetrics = z.union([ClusterStateClusterStateMetric, z.array(ClusterStateClusterStateMetric)]).meta({ id: 'ClusterStateClusterStateMetrics' })
export type ClusterStateClusterStateMetrics = z.infer<typeof ClusterStateClusterStateMetrics>

/**
 * Get the cluster state.
 *
 * Get comprehensive information about the state of the cluster.
 *
 * The cluster state is an internal data structure which keeps track of a variety of information needed by every node, including the identity and attributes of the other nodes in the cluster; cluster-wide settings; index metadata, including the mapping and settings for each index; the location and status of every shard copy in the cluster.
 *
 * The elected master node ensures that every node in the cluster has a copy of the same cluster state.
 * This API lets you retrieve a representation of this internal state for debugging or diagnostic purposes.
 * You may need to consult the Elasticsearch source code to determine the precise meaning of the response.
 *
 * By default the API will route requests to the elected master node since this node is the authoritative source of cluster states.
 * You can also retrieve the cluster state held on the node handling the API request by adding the `?local=true` query parameter.
 *
 * Elasticsearch may need to expend significant effort to compute a response to this API in larger clusters, and the response may comprise a very large quantity of data.
 * If you use this API repeatedly, your cluster may become unstable.
 *
 * WARNING: The response is a representation of an internal data structure.
 * Its format is not subject to the same compatibility guarantees as other more stable APIs and may change from version to version.
 * Do not query this API using external monitoring tools.
 * Instead, obtain the information you require using other more stable cluster APIs.
 */
export const ClusterStateRequest = z.object({
  metric: ClusterStateClusterStateMetrics.describe('Limit the information returned to the specified metrics.').optional().meta({ found_in: 'path' }),
  index: z.lazy(() => Indices).describe('A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether to expand wildcard expression to concrete indices that are open, closed or both').optional().meta({ found_in: 'query' }),
  flat_settings: z.boolean().describe('Return settings in flat format').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('Return local information, do not retrieve the state from master node').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Timeout for waiting for new cluster state in case it is blocked').optional().meta({ found_in: 'query' }),
  wait_for_metadata_version: z.lazy(() => VersionNumber).describe('Wait for the metadata version to be equal or greater than the specified metadata version').optional().meta({ found_in: 'query' }),
  wait_for_timeout: z.lazy(() => Duration).describe('The maximum time to wait for wait_for_metadata_version before timing out').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterStateRequest' })
export type ClusterStateRequest = z.infer<typeof ClusterStateRequest>

export const ClusterStateResponse = z.any().meta({ id: 'ClusterStateResponse' })
export type ClusterStateResponse = z.infer<typeof ClusterStateResponse>
