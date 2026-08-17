/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, DurationValue, ExpandWildcards, HealthStatus, IndexName, Indices, Level, Name, double, integer } from './_types.js'

export const WaitForEvents = z.enum(['immediate', 'urgent', 'high', 'normal', 'low', 'languid']).meta({ id: 'WaitForEvents' })
export type WaitForEvents = z.infer<typeof WaitForEvents>

export const ClusterHealthShardHealthStats = z.object({
  active_shards: z.lazy(() => integer),
  initializing_shards: z.lazy(() => integer),
  primary_active: z.boolean(),
  relocating_shards: z.lazy(() => integer),
  status: z.lazy(() => HealthStatus),
  unassigned_shards: z.lazy(() => integer),
  unassigned_primary_shards: z.lazy(() => integer)
}).meta({ id: 'ClusterHealthShardHealthStats' })
export type ClusterHealthShardHealthStats = z.infer<typeof ClusterHealthShardHealthStats>

export const ClusterHealthIndexHealthStats = z.object({
  active_primary_shards: z.lazy(() => integer),
  active_shards: z.lazy(() => integer),
  initializing_shards: z.lazy(() => integer),
  number_of_replicas: z.lazy(() => integer),
  number_of_shards: z.lazy(() => integer),
  relocating_shards: z.lazy(() => integer),
  shards: z.record(z.string(), ClusterHealthShardHealthStats).optional(),
  status: z.lazy(() => HealthStatus),
  unassigned_shards: z.lazy(() => integer),
  unassigned_primary_shards: z.lazy(() => integer)
}).meta({ id: 'ClusterHealthIndexHealthStats' })
export type ClusterHealthIndexHealthStats = z.infer<typeof ClusterHealthIndexHealthStats>

export const ClusterHealthHealthResponseBody = z.object({
  active_primary_shards: z.lazy(() => integer).describe('The number of active primary shards.'),
  active_shards: z.lazy(() => integer).describe('The total number of active primary and replica shards.'),
  active_shards_percent: z.string().describe('The ratio of active shards in the cluster expressed as a string formatted percentage.').optional(),
  active_shards_percent_as_number: z.lazy(() => double).describe('The ratio of active shards in the cluster expressed as a percentage.'),
  cluster_name: z.lazy(() => Name).describe('The name of the cluster.'),
  delayed_unassigned_shards: z.lazy(() => integer).describe('The number of shards whose allocation has been delayed by the timeout settings.'),
  indices: z.record(z.lazy(() => IndexName), ClusterHealthIndexHealthStats).optional(),
  initializing_shards: z.lazy(() => integer).describe('The number of shards that are under initialization.'),
  number_of_data_nodes: z.lazy(() => integer).describe('The number of nodes that are dedicated data nodes.'),
  number_of_in_flight_fetch: z.lazy(() => integer).describe('The number of unfinished fetches.'),
  number_of_nodes: z.lazy(() => integer).describe('The number of nodes within the cluster.'),
  number_of_pending_tasks: z.lazy(() => integer).describe('The number of cluster-level changes that have not yet been executed.'),
  relocating_shards: z.lazy(() => integer).describe('The number of shards that are under relocation.'),
  status: z.lazy(() => HealthStatus),
  task_max_waiting_in_queue: z.lazy(() => Duration).describe('The time since the earliest initiated task is waiting for being performed.').optional(),
  task_max_waiting_in_queue_millis: z.lazy(() => DurationValue).describe('The time expressed in milliseconds since the earliest initiated task is waiting for being performed.'),
  timed_out: z.boolean().describe('If false the response returned within the period of time that is specified by the timeout parameter (30s by default)'),
  unassigned_primary_shards: z.lazy(() => integer).describe('The number of primary shards that are not allocated.'),
  unassigned_shards: z.lazy(() => integer).describe('The number of shards that are not allocated.')
}).meta({ id: 'ClusterHealthHealthResponseBody' })
export type ClusterHealthHealthResponseBody = z.infer<typeof ClusterHealthHealthResponseBody>

export const ClusterHealthWaitForNodes = z.union([z.string(), z.lazy(() => integer)]).meta({ id: 'ClusterHealthWaitForNodes' })
export type ClusterHealthWaitForNodes = z.infer<typeof ClusterHealthWaitForNodes>

/**
 * Get the cluster health status.
 *
 * You can also use the API to get the health status of only specified data streams and indices.
 * For data streams, the API retrieves the health status of the stream’s backing indices.
 *
 * The cluster health status is: green, yellow or red.
 * On the shard level, a red status indicates that the specific shard is not allocated in the cluster. Yellow means that the primary shard is allocated but replicas are not. Green means that all shards are allocated.
 * The index level status is controlled by the worst shard status.
 *
 * One of the main benefits of the API is the ability to wait until the cluster reaches a certain high watermark health level.
 * The cluster status is controlled by the worst index status.
 */
export const ClusterHealthRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams, indices, and index aliases that limit the request. Wildcard expressions (`*`) are supported. To target all data streams and indices in a cluster, omit this parameter or use _all or `*`.').optional().meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Expand wildcard expression to concrete indices that are open, closed or both.').optional().meta({ found_in: 'query' }),
  level: z.lazy(() => Level).describe('Return health information at a specific level of detail.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If true, retrieve information from the local node only. If false, retrieve information from the master node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  wait_for_events: WaitForEvents.describe('Wait until all currently queued events with the given priority are processed.').optional().meta({ found_in: 'query' }),
  wait_for_nodes: ClusterHealthWaitForNodes.describe('Wait until the specified number (N) of nodes is available. It also accepts `>=N`, `<=N`, `>N` and `<N`. Alternatively, use the notations `ge(N)`, `le(N)`, `gt(N)`, and `lt(N)`.').optional().meta({ found_in: 'query' }),
  wait_for_no_initializing_shards: z.boolean().describe('Wait (until the timeout expires) for the cluster to have no shard initializations. If false, the request does not wait for initializing shards.').optional().meta({ found_in: 'query' }),
  wait_for_no_relocating_shards: z.boolean().describe('Wait (until the timeout expires) for the cluster to have no shard relocations. If false, the request not wait for relocating shards.').optional().meta({ found_in: 'query' }),
  wait_for_status: z.lazy(() => HealthStatus).describe('Wait (until the timeout expires) for the cluster to reach a specific health status (or a better status). A green status is better than yellow and yellow is better than red. By default, the request does not wait for a particular status.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterHealthRequest' })
export type ClusterHealthRequest = z.infer<typeof ClusterHealthRequest>

export const ClusterHealthResponse = ClusterHealthHealthResponseBody.meta({ id: 'ClusterHealthResponse' })
export type ClusterHealthResponse = z.infer<typeof ClusterHealthResponse>
