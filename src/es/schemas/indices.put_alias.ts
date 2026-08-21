/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Indices, Name } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'

/**
 * Create or update an alias.
 *
 * Adds a data stream or index to an alias.
 */
export const IndicesPutAliasRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams or indices to add. Supports wildcards (`*`). Wildcard patterns that match both data streams and indices return an error.').meta({ found_in: 'path' }),
  name: z.lazy(() => Name).describe('Alias to update. If the alias doesn’t exist, the request creates it. Index alias names support date math.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  filter: z.lazy(() => QueryDslQueryContainer).describe('Query used to limit documents the alias can access.').optional().meta({ found_in: 'body' }),
  index_routing: z.string().describe('Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations. Data stream aliases don’t support this parameter.').optional().meta({ found_in: 'body' }),
  is_write_index: z.boolean().describe('If `true`, sets the write index or data stream for the alias. If an alias points to multiple indices or data streams and `is_write_index` isn’t set, the alias rejects write requests. If an index alias points to one index and `is_write_index` isn’t set, the index automatically acts as the write index. Data stream aliases don’t automatically set a write data stream, even if the alias points to one data stream.').optional().meta({ found_in: 'body' }),
  routing: z.string().describe('Value used to route indexing and search operations to a specific shard. Data stream aliases don’t support this parameter.').optional().meta({ found_in: 'body' }),
  search_routing: z.string().describe('Value used to route search operations to a specific shard. If specified, this overwrites the `routing` value for search operations. Data stream aliases don’t support this parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutAliasRequest' })
export type IndicesPutAliasRequest = z.infer<typeof IndicesPutAliasRequest>

export const IndicesPutAliasResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesPutAliasResponse' })
export type IndicesPutAliasResponse = z.infer<typeof IndicesPutAliasResponse>
