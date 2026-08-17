/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Id, IndexName, Indices, Name, NodeId, NodeName, NodeRoles, Routing, TransportAddress, VersionString, integer } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { ClusterAllocationExplainUnassignedInformation } from './cluster.allocation_explain.js'
import { IndicesStatsShardRoutingState } from './indices.stats.js'

/**
 * Get the search shards.
 *
 * Get the indices and shards that a search request would be run against.
 * This information can be useful for working out issues or planning optimizations with routing and shard preferences.
 * When filtered aliases are used, the filter is returned as part of the `indices` section.
 *
 * If the Elasticsearch security features are enabled, you must have the `view_index_metadata` or `manage` index privilege for the target data stream, index, or alias.
 */
export const SearchShardsRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. IT can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' }),
  preference: z.string().describe('The node or shard the operation should be performed on. It is random by default.').optional().meta({ found_in: 'query' }),
  routing: z.lazy(() => Routing).describe('A custom value used to route operations to a specific shard. Not allowed when `index.slice.enabled` is `true` for the target index; use `_slice` instead.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SearchShardsRequest' })
export type SearchShardsRequest = z.infer<typeof SearchShardsRequest>

export const SearchShardsSearchShardsNodeAttributes = z.object({
  name: NodeName.describe('The human-readable identifier of the node.'),
  ephemeral_id: z.lazy(() => Id).describe('The ephemeral ID of the node.'),
  transport_address: z.lazy(() => TransportAddress).describe('The host and port where transport HTTP connections are accepted.'),
  external_id: z.string(),
  attributes: z.record(z.string(), z.string()).describe('Lists node attributes.'),
  roles: z.lazy(() => NodeRoles),
  version: z.lazy(() => VersionString),
  min_index_version: z.lazy(() => integer),
  max_index_version: z.lazy(() => integer)
}).meta({ id: 'SearchShardsSearchShardsNodeAttributes' })
export type SearchShardsSearchShardsNodeAttributes = z.infer<typeof SearchShardsSearchShardsNodeAttributes>

export const RelocationFailureInfo = z.object({
  failed_attempts: z.lazy(() => integer)
}).meta({ id: 'RelocationFailureInfo' })
export type RelocationFailureInfo = z.infer<typeof RelocationFailureInfo>

export const NodeShard = z.object({
  state: IndicesStatsShardRoutingState,
  primary: z.boolean(),
  node: NodeName.optional(),
  shard: z.lazy(() => integer),
  index: z.lazy(() => IndexName),
  allocation_id: z.record(z.string(), z.lazy(() => Id)).optional(),
  recovery_source: z.record(z.string(), z.lazy(() => Id)).optional(),
  unassigned_info: ClusterAllocationExplainUnassignedInformation.optional(),
  relocating_node: z.union([z.lazy(() => NodeId), z.null()]).optional(),
  relocation_failure_info: RelocationFailureInfo.optional()
}).meta({ id: 'NodeShard' })
export type NodeShard = z.infer<typeof NodeShard>

export const SearchShardsShardStoreIndex = z.object({
  aliases: z.array(z.lazy(() => Name)).optional(),
  filter: z.lazy(() => QueryDslQueryContainer).optional()
}).meta({ id: 'SearchShardsShardStoreIndex' })
export type SearchShardsShardStoreIndex = z.infer<typeof SearchShardsShardStoreIndex>

export const SearchShardsResponse = z.object({
  nodes: z.record(z.lazy(() => NodeId), SearchShardsSearchShardsNodeAttributes),
  shards: z.array(z.array(NodeShard)),
  indices: z.record(z.lazy(() => IndexName), SearchShardsShardStoreIndex)
}).meta({ id: 'SearchShardsResponse' })
export type SearchShardsResponse = z.infer<typeof SearchShardsResponse>
