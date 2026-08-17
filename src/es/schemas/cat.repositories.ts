/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'

export const CatRepositoriesRepositoriesRecord = z.object({
  id: z.string().describe('The unique repository identifier.').optional(),
  repoId: z.string().describe('The unique repository identifier.').optional(),
  type: z.string().describe('The repository type.').optional(),
  t: z.string().describe('The repository type.').optional()
}).meta({ id: 'CatRepositoriesRepositoriesRecord' })
export type CatRepositoriesRepositoriesRecord = z.infer<typeof CatRepositoriesRepositoriesRecord>

/**
 * Get snapshot repository information.
 *
 * Get a list of snapshot repositories for a cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot repository API.
 */
export const CatRepositoriesRequest = z.object({
  h: z.lazy(() => Names).describe('List of columns to appear in the response. Supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatRepositoriesRequest' })
export type CatRepositoriesRequest = z.infer<typeof CatRepositoriesRequest>

export const CatRepositoriesResponse = z.array(CatRepositoriesRepositoriesRecord).meta({ id: 'CatRepositoriesResponse' })
export type CatRepositoriesResponse = z.infer<typeof CatRepositoriesResponse>
