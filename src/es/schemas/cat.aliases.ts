/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, IndexName, Names } from './_types.js'

export const CatCatAliasesColumn = z.union([z.enum(['alias', 'a', 'index', 'i', 'idx', 'filter', 'f', 'fi', 'routing.index', 'ri', 'routingIndex', 'routing.search', 'rs', 'routingSearch', 'is_write_index', 'w', 'isWriteIndex']), z.string()]).meta({ id: 'CatCatAliasesColumn' })
export type CatCatAliasesColumn = z.infer<typeof CatCatAliasesColumn>

export const CatCatAliasesColumns = z.union([CatCatAliasesColumn, z.array(CatCatAliasesColumn)]).meta({ id: 'CatCatAliasesColumns' })
export type CatCatAliasesColumns = z.infer<typeof CatCatAliasesColumns>

export const CatAliasesAliasesRecord = z.object({
  alias: z.string().describe('alias name').optional(),
  a: z.string().describe('alias name').optional(),
  index: z.lazy(() => IndexName).describe('index alias points to').optional(),
  i: z.lazy(() => IndexName).describe('index alias points to').optional(),
  idx: z.lazy(() => IndexName).describe('index alias points to').optional(),
  filter: z.string().describe('filter').optional(),
  f: z.string().describe('filter').optional(),
  fi: z.string().describe('filter').optional(),
  'routing.index': z.string().describe('index routing').optional(),
  ri: z.string().describe('index routing').optional(),
  routingIndex: z.string().describe('index routing').optional(),
  'routing.search': z.string().describe('search routing').optional(),
  rs: z.string().describe('search routing').optional(),
  routingSearch: z.string().describe('search routing').optional(),
  is_write_index: z.string().describe('write index').optional(),
  w: z.string().describe('write index').optional(),
  isWriteIndex: z.string().describe('write index').optional()
}).meta({ id: 'CatAliasesAliasesRecord' })
export type CatAliasesAliasesRecord = z.infer<typeof CatAliasesAliasesRecord>

/**
 * Get aliases.
 *
 * Get the cluster's index aliases, including filter and routing information.
 * This API does not return data stream aliases.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or the Kibana console. They are not intended for use by applications. For application consumption, use the aliases API.
 */
export const CatAliasesRequest = z.object({
  name: z.lazy(() => Names).describe('A comma-separated list of aliases to retrieve. Supports wildcards (`*`).  To retrieve all aliases, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  h: CatCatAliasesColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicated that the request should never timeout, you can set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatAliasesRequest' })
export type CatAliasesRequest = z.infer<typeof CatAliasesRequest>

export const CatAliasesResponse = z.array(CatAliasesAliasesRecord).meta({ id: 'CatAliasesResponse' })
export type CatAliasesResponse = z.infer<typeof CatAliasesResponse>
