/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'

export const CatCatNodeattrsColumn = z.union([z.enum(['node', 'id', 'id', 'nodeId', 'pid', 'p', 'host', 'h', 'ip', 'i', 'port', 'po', 'attr', 'attr.name', 'value', 'attr.value']), z.string()]).meta({ id: 'CatCatNodeattrsColumn' })
export type CatCatNodeattrsColumn = z.infer<typeof CatCatNodeattrsColumn>

export const CatCatNodeattrsColumns = z.union([CatCatNodeattrsColumn, z.array(CatCatNodeattrsColumn)]).meta({ id: 'CatCatNodeattrsColumns' })
export type CatCatNodeattrsColumns = z.infer<typeof CatCatNodeattrsColumns>

export const CatNodeattrsNodeAttributesRecord = z.object({
  node: z.string().describe('The node name.').optional(),
  id: z.string().describe('The unique node identifier.').optional(),
  pid: z.string().describe('The process identifier.').optional(),
  host: z.string().describe('The host name.').optional(),
  h: z.string().describe('The host name.').optional(),
  ip: z.string().describe('The IP address.').optional(),
  i: z.string().describe('The IP address.').optional(),
  port: z.string().describe('The bound transport port.').optional(),
  attr: z.string().describe('The attribute name.').optional(),
  value: z.string().describe('The attribute value.').optional()
}).meta({ id: 'CatNodeattrsNodeAttributesRecord' })
export type CatNodeattrsNodeAttributesRecord = z.infer<typeof CatNodeattrsNodeAttributesRecord>

/**
 * Get node attribute information.
 *
 * Get information about custom node attributes.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 */
export const CatNodeattrsRequest = z.object({
  h: CatCatNodeattrsColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatNodeattrsRequest' })
export type CatNodeattrsRequest = z.infer<typeof CatNodeattrsRequest>

export const CatNodeattrsResponse = z.array(CatNodeattrsNodeAttributesRecord).meta({ id: 'CatNodeattrsResponse' })
export type CatNodeattrsResponse = z.infer<typeof CatNodeattrsResponse>
