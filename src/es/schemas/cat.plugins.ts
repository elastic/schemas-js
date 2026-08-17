/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name, Names, NodeId, VersionString } from './_types.js'

export const CatCatPluginsColumn = z.union([z.enum(['id', 'name', 'n', 'component', 'c', 'version', 'v', 'description', 'd']), z.string()]).meta({ id: 'CatCatPluginsColumn' })
export type CatCatPluginsColumn = z.infer<typeof CatCatPluginsColumn>

export const CatCatPluginsColumns = z.union([CatCatPluginsColumn, z.array(CatCatPluginsColumn)]).meta({ id: 'CatCatPluginsColumns' })
export type CatCatPluginsColumns = z.infer<typeof CatCatPluginsColumns>

export const CatPluginsPluginsRecord = z.object({
  id: z.lazy(() => NodeId).describe('The unique node identifier.').optional(),
  name: z.lazy(() => Name).describe('The node name.').optional(),
  n: z.lazy(() => Name).describe('The node name.').optional(),
  component: z.string().describe('The component name.').optional(),
  c: z.string().describe('The component name.').optional(),
  version: z.lazy(() => VersionString).describe('The component version.').optional(),
  v: z.lazy(() => VersionString).describe('The component version.').optional(),
  description: z.string().describe('The plugin details.').optional(),
  d: z.string().describe('The plugin details.').optional(),
  type: z.string().describe('The plugin type.').optional(),
  t: z.string().describe('The plugin type.').optional()
}).meta({ id: 'CatPluginsPluginsRecord' })
export type CatPluginsPluginsRecord = z.infer<typeof CatPluginsPluginsRecord>

/**
 * Get plugin information.
 *
 * Get a list of plugins running on each node of a cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 */
export const CatPluginsRequest = z.object({
  h: CatCatPluginsColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  include_bootstrap: z.boolean().describe('Include bootstrap plugins in the response').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatPluginsRequest' })
export type CatPluginsRequest = z.infer<typeof CatPluginsRequest>

export const CatPluginsResponse = z.array(CatPluginsPluginsRecord).meta({ id: 'CatPluginsResponse' })
export type CatPluginsResponse = z.infer<typeof CatPluginsResponse>
