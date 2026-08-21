/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'

export const CatCatMasterColumn = z.union([z.enum(['id', 'host', 'h', 'ip', 'node', 'n']), z.string()]).meta({ id: 'CatCatMasterColumn' })
export type CatCatMasterColumn = z.infer<typeof CatCatMasterColumn>

export const CatCatMasterColumns = z.union([CatCatMasterColumn, z.array(CatCatMasterColumn)]).meta({ id: 'CatCatMasterColumns' })
export type CatCatMasterColumns = z.infer<typeof CatCatMasterColumns>

export const CatMasterMasterRecord = z.object({
  id: z.string().describe('node id').optional(),
  host: z.string().describe('host name').optional(),
  h: z.string().describe('host name').optional(),
  ip: z.string().describe('ip address').optional(),
  node: z.string().describe('node name').optional(),
  n: z.string().describe('node name').optional()
}).meta({ id: 'CatMasterMasterRecord' })
export type CatMasterMasterRecord = z.infer<typeof CatMasterMasterRecord>

/**
 * Get master node information.
 *
 * Get information about the master node, including the ID, bound IP address, and name.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the nodes info API.
 */
export const CatMasterRequest = z.object({
  h: CatCatMasterColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatMasterRequest' })
export type CatMasterRequest = z.infer<typeof CatMasterRequest>

export const CatMasterResponse = z.array(CatMasterMasterRecord).meta({ id: 'CatMasterResponse' })
export type CatMasterResponse = z.infer<typeof CatMasterResponse>
