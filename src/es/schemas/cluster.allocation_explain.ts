/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, DurationValue, Id, IndexName, Name, NodeId, NodeRoles, TransportAddress, double, integer, long } from './_types.js'

export const ClusterAllocationExplainUnassignedInformationReason = z.enum(['INDEX_CREATED', 'CLUSTER_RECOVERED', 'INDEX_REOPENED', 'DANGLING_INDEX_IMPORTED', 'NEW_INDEX_RESTORED', 'EXISTING_INDEX_RESTORED', 'REPLICA_ADDED', 'ALLOCATION_FAILED', 'NODE_LEFT', 'REROUTE_CANCELLED', 'REINITIALIZED', 'REALLOCATED_REPLICA', 'PRIMARY_FAILED', 'FORCED_EMPTY_PRIMARY', 'MANUAL_ALLOCATION']).meta({ id: 'ClusterAllocationExplainUnassignedInformationReason' })
export type ClusterAllocationExplainUnassignedInformationReason = z.infer<typeof ClusterAllocationExplainUnassignedInformationReason>

export const ClusterAllocationExplainUnassignedInformation = z.object({
  at: z.lazy(() => DateTime),
  last_allocation_status: z.string().optional(),
  reason: ClusterAllocationExplainUnassignedInformationReason,
  details: z.string().optional(),
  failed_allocation_attempts: z.lazy(() => integer).optional(),
  delayed: z.boolean().optional(),
  allocation_status: z.string().optional()
}).meta({ id: 'ClusterAllocationExplainUnassignedInformation' })
export type ClusterAllocationExplainUnassignedInformation = z.infer<typeof ClusterAllocationExplainUnassignedInformation>

export const ClusterAllocationExplainAllocationExplainDecision = z.enum(['NO', 'YES', 'THROTTLE', 'ALWAYS']).meta({ id: 'ClusterAllocationExplainAllocationExplainDecision' })
export type ClusterAllocationExplainAllocationExplainDecision = z.infer<typeof ClusterAllocationExplainAllocationExplainDecision>

export const ClusterAllocationExplainAllocationDecision = z.object({
  decider: z.string(),
  decision: ClusterAllocationExplainAllocationExplainDecision,
  explanation: z.string()
}).meta({ id: 'ClusterAllocationExplainAllocationDecision' })
export type ClusterAllocationExplainAllocationDecision = z.infer<typeof ClusterAllocationExplainAllocationDecision>

export const ClusterAllocationExplainAllocationStore = z.object({
  allocation_id: z.string(),
  found: z.boolean(),
  in_sync: z.boolean(),
  matching_size_in_bytes: z.lazy(() => long),
  matching_sync_id: z.boolean(),
  store_exception: z.string()
}).meta({ id: 'ClusterAllocationExplainAllocationStore' })
export type ClusterAllocationExplainAllocationStore = z.infer<typeof ClusterAllocationExplainAllocationStore>

export const ClusterAllocationExplainDiskUsage = z.object({
  path: z.string(),
  total_bytes: z.lazy(() => long),
  used_bytes: z.lazy(() => long),
  free_bytes: z.lazy(() => long),
  free_disk_percent: z.lazy(() => double),
  used_disk_percent: z.lazy(() => double)
}).meta({ id: 'ClusterAllocationExplainDiskUsage' })
export type ClusterAllocationExplainDiskUsage = z.infer<typeof ClusterAllocationExplainDiskUsage>

export const ClusterAllocationExplainNodeDiskUsage = z.object({
  node_name: z.lazy(() => Name),
  least_available: ClusterAllocationExplainDiskUsage,
  most_available: ClusterAllocationExplainDiskUsage
}).meta({ id: 'ClusterAllocationExplainNodeDiskUsage' })
export type ClusterAllocationExplainNodeDiskUsage = z.infer<typeof ClusterAllocationExplainNodeDiskUsage>

export const ClusterAllocationExplainReservedSize = z.object({
  node_id: z.lazy(() => Id),
  path: z.string(),
  total: z.lazy(() => long),
  shards: z.array(z.string())
}).meta({ id: 'ClusterAllocationExplainReservedSize' })
export type ClusterAllocationExplainReservedSize = z.infer<typeof ClusterAllocationExplainReservedSize>

export const ClusterAllocationExplainClusterInfo = z.object({
  nodes: z.record(z.string(), ClusterAllocationExplainNodeDiskUsage),
  shard_sizes: z.record(z.string(), z.lazy(() => long)),
  shard_data_set_sizes: z.record(z.string(), z.string()).optional(),
  shard_paths: z.record(z.string(), z.string()),
  reserved_sizes: z.array(ClusterAllocationExplainReservedSize)
}).meta({ id: 'ClusterAllocationExplainClusterInfo' })
export type ClusterAllocationExplainClusterInfo = z.infer<typeof ClusterAllocationExplainClusterInfo>

export const ClusterAllocationExplainCurrentNode = z.object({
  id: z.lazy(() => Id),
  name: z.lazy(() => Name),
  roles: z.lazy(() => NodeRoles),
  attributes: z.record(z.string(), z.string()),
  transport_address: z.lazy(() => TransportAddress),
  weight_ranking: z.lazy(() => integer)
}).meta({ id: 'ClusterAllocationExplainCurrentNode' })
export type ClusterAllocationExplainCurrentNode = z.infer<typeof ClusterAllocationExplainCurrentNode>

export const ClusterAllocationExplainDecision = z.enum(['yes', 'no', 'worse_balance', 'throttled', 'awaiting_info', 'allocation_delayed', 'no_valid_shard_copy', 'no_attempt']).meta({ id: 'ClusterAllocationExplainDecision' })
export type ClusterAllocationExplainDecision = z.infer<typeof ClusterAllocationExplainDecision>

export const ClusterAllocationExplainNodeAllocationExplanation = z.object({
  deciders: z.array(ClusterAllocationExplainAllocationDecision).optional(),
  node_attributes: z.record(z.string(), z.string()),
  node_decision: ClusterAllocationExplainDecision,
  node_id: z.lazy(() => Id),
  node_name: z.lazy(() => Name),
  roles: z.lazy(() => NodeRoles),
  store: ClusterAllocationExplainAllocationStore.optional(),
  transport_address: z.lazy(() => TransportAddress),
  weight_ranking: z.lazy(() => integer).optional()
}).meta({ id: 'ClusterAllocationExplainNodeAllocationExplanation' })
export type ClusterAllocationExplainNodeAllocationExplanation = z.infer<typeof ClusterAllocationExplainNodeAllocationExplanation>

/**
 * Explain the shard allocations.
 *
 * Get explanations for shard allocations in the cluster.
 * This API accepts the current_node, index, primary and shard parameters in the request body or in query parameters, but not in both at the same time.
 * For unassigned shards, it provides an explanation for why the shard is unassigned.
 * For assigned shards, it provides an explanation for why the shard is remaining on its current node and has not moved or rebalanced to another node.
 * This API can be very useful when attempting to diagnose why a shard is unassigned or why a shard continues to remain on its current node when you might expect otherwise.
 * Refer to the linked documentation for examples of how to troubleshoot allocation issues using this API.
 */
export const ClusterAllocationExplainRequest = z.object({
  include_disk_info: z.boolean().describe('If true, returns information about disk usage and shard sizes.').optional().meta({ found_in: 'query' }),
  include_yes_decisions: z.boolean().describe('If true, returns YES decisions in explanation.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  index: z.lazy(() => IndexName).describe('The name of the index that you would like an explanation for.').optional().meta({ found_in: 'body' }),
  shard: z.lazy(() => integer).describe('An identifier for the shard that you would like an explanation for.').optional().meta({ found_in: 'body' }),
  primary: z.boolean().describe('If true, returns an explanation for the primary shard for the specified shard ID.').optional().meta({ found_in: 'body' }),
  current_node: z.lazy(() => NodeId).describe('Explain a shard only if it is currently located on the specified node name or node ID.').optional().meta({ found_in: 'body' })
}).meta({ id: 'ClusterAllocationExplainRequest' })
export type ClusterAllocationExplainRequest = z.infer<typeof ClusterAllocationExplainRequest>

export const ClusterAllocationExplainResponse = z.object({
  allocate_explanation: z.string().optional(),
  allocation_delay: z.lazy(() => Duration).optional(),
  allocation_delay_in_millis: z.lazy(() => DurationValue).optional(),
  can_allocate: ClusterAllocationExplainDecision.optional(),
  can_move_to_other_node: ClusterAllocationExplainDecision.optional(),
  can_rebalance_cluster: ClusterAllocationExplainDecision.optional(),
  can_rebalance_cluster_decisions: z.array(ClusterAllocationExplainAllocationDecision).optional(),
  can_rebalance_to_other_node: ClusterAllocationExplainDecision.optional(),
  can_remain_decisions: z.array(ClusterAllocationExplainAllocationDecision).optional(),
  can_remain_on_current_node: ClusterAllocationExplainDecision.optional(),
  cluster_info: ClusterAllocationExplainClusterInfo.optional(),
  configured_delay: z.lazy(() => Duration).optional(),
  configured_delay_in_millis: z.lazy(() => DurationValue).optional(),
  current_node: ClusterAllocationExplainCurrentNode.optional(),
  current_state: z.string(),
  index: z.lazy(() => IndexName),
  move_explanation: z.string().optional(),
  node_allocation_decisions: z.array(ClusterAllocationExplainNodeAllocationExplanation).optional(),
  primary: z.boolean(),
  rebalance_explanation: z.string().optional(),
  remaining_delay: z.lazy(() => Duration).optional(),
  remaining_delay_in_millis: z.lazy(() => DurationValue).optional(),
  shard: z.lazy(() => integer),
  unassigned_info: ClusterAllocationExplainUnassignedInformation.optional(),
  note: z.string().optional()
}).meta({ id: 'ClusterAllocationExplainResponse' })
export type ClusterAllocationExplainResponse = z.infer<typeof ClusterAllocationExplainResponse>
