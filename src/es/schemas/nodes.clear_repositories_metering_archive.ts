/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, NodeIds, NodeStatistics, long } from './_types.js'
import { NodesRepositoryMeteringInformation } from './nodes.js'

/**
 * Clear the archived repositories metering.
 *
 * Clear the archived repositories metering information in the cluster.
 */
export const NodesClearRepositoriesMeteringArchiveRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('Comma-separated list of node IDs or names used to limit returned information.').meta({ found_in: 'path' }),
  max_archive_version: z.lazy(() => long).describe('Specifies the maximum `archive_version` to be cleared from the archive.').meta({ found_in: 'path' })
}).meta({ id: 'NodesClearRepositoriesMeteringArchiveRequest' })
export type NodesClearRepositoriesMeteringArchiveRequest = z.infer<typeof NodesClearRepositoriesMeteringArchiveRequest>

export const NodesClearRepositoriesMeteringArchiveResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name).describe('Name of the cluster. Based on the `cluster.name` setting.'),
  nodes: z.record(z.string(), NodesRepositoryMeteringInformation).describe('Contains repositories metering information for the nodes selected by the request.')
}).meta({ id: 'NodesClearRepositoriesMeteringArchiveResponseBase' })
export type NodesClearRepositoriesMeteringArchiveResponseBase = z.infer<typeof NodesClearRepositoriesMeteringArchiveResponseBase>

export const NodesClearRepositoriesMeteringArchiveResponse = NodesClearRepositoriesMeteringArchiveResponseBase.meta({ id: 'NodesClearRepositoriesMeteringArchiveResponse' })
export type NodesClearRepositoriesMeteringArchiveResponse = z.infer<typeof NodesClearRepositoriesMeteringArchiveResponse>
