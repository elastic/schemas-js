/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, NodeIds, NodeStatistics } from './_types.js'
import { NodesRepositoryMeteringInformation } from './nodes.js'

/**
 * Get cluster repositories metering.
 *
 * Get repositories metering information for a cluster.
 * This API exposes monotonically non-decreasing counters and it is expected that clients would durably store the information needed to compute aggregations over a period of time.
 * Additionally, the information exposed by this API is volatile, meaning that it will not be present after node restarts.
 */
export const NodesGetRepositoriesMeteringInfoRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('Comma-separated list of node IDs or names used to limit returned information.').meta({ found_in: 'path' })
}).meta({ id: 'NodesGetRepositoriesMeteringInfoRequest' })
export type NodesGetRepositoriesMeteringInfoRequest = z.infer<typeof NodesGetRepositoriesMeteringInfoRequest>

export const NodesGetRepositoriesMeteringInfoResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name).describe('Name of the cluster. Based on the `cluster.name` setting.'),
  nodes: z.record(z.string(), NodesRepositoryMeteringInformation).describe('Contains repositories metering information for the nodes selected by the request.')
}).meta({ id: 'NodesGetRepositoriesMeteringInfoResponseBase' })
export type NodesGetRepositoriesMeteringInfoResponseBase = z.infer<typeof NodesGetRepositoriesMeteringInfoResponseBase>

export const NodesGetRepositoriesMeteringInfoResponse = NodesGetRepositoriesMeteringInfoResponseBase.meta({ id: 'NodesGetRepositoriesMeteringInfoResponse' })
export type NodesGetRepositoriesMeteringInfoResponse = z.infer<typeof NodesGetRepositoriesMeteringInfoResponse>
