/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, IndexAlias, IndexName, Indices } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'

export const IndicesUpdateAliasesAddAction = z.object({
  alias: IndexAlias.describe('Alias for the action. Index alias names support date math.').optional(),
  aliases: z.union([IndexAlias, z.array(IndexAlias)]).describe('Aliases for the action. Index alias names support date math.').optional(),
  filter: z.lazy(() => QueryDslQueryContainer).describe('Query used to limit documents the alias can access.').optional(),
  index: z.lazy(() => IndexName).describe('Data stream or index for the action. Supports wildcards (`*`).').optional(),
  indices: z.lazy(() => Indices).describe('Data streams or indices for the action. Supports wildcards (`*`).').optional(),
  index_routing: z.string().describe('Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations. Data stream aliases don’t support this parameter.').optional(),
  is_hidden: z.boolean().describe('If `true`, the alias is hidden.').optional(),
  is_write_index: z.boolean().describe('If `true`, sets the write index or data stream for the alias.').optional(),
  routing: z.string().describe('Value used to route indexing and search operations to a specific shard. Data stream aliases don’t support this parameter.').optional(),
  search_routing: z.string().describe('Value used to route search operations to a specific shard. If specified, this overwrites the `routing` value for search operations. Data stream aliases don’t support this parameter.').optional(),
  must_exist: z.boolean().describe('If `true`, the alias must exist to perform the action.').optional()
}).meta({ id: 'IndicesUpdateAliasesAddAction' })
export type IndicesUpdateAliasesAddAction = z.infer<typeof IndicesUpdateAliasesAddAction>

export const IndicesUpdateAliasesRemoveAction = z.object({
  alias: IndexAlias.describe('Alias for the action. Index alias names support date math.').optional(),
  aliases: z.union([IndexAlias, z.array(IndexAlias)]).describe('Aliases for the action. Index alias names support date math.').optional(),
  index: z.lazy(() => IndexName).describe('Data stream or index for the action. Supports wildcards (`*`).').optional(),
  indices: z.lazy(() => Indices).describe('Data streams or indices for the action. Supports wildcards (`*`).').optional(),
  must_exist: z.boolean().describe('If `true`, the alias must exist to perform the action.').optional()
}).meta({ id: 'IndicesUpdateAliasesRemoveAction' })
export type IndicesUpdateAliasesRemoveAction = z.infer<typeof IndicesUpdateAliasesRemoveAction>

export const IndicesUpdateAliasesRemoveIndexAction = z.object({
  index: z.lazy(() => IndexName).describe('Data stream or index for the action. Supports wildcards (`*`).').optional(),
  indices: z.lazy(() => Indices).describe('Data streams or indices for the action. Supports wildcards (`*`).').optional(),
  must_exist: z.boolean().describe('If `true`, the alias must exist to perform the action.').optional()
}).meta({ id: 'IndicesUpdateAliasesRemoveIndexAction' })
export type IndicesUpdateAliasesRemoveIndexAction = z.infer<typeof IndicesUpdateAliasesRemoveIndexAction>

const IndicesUpdateAliasesActionExclusiveProps = z.union([z.object({ add: IndicesUpdateAliasesAddAction }), z.object({ remove: IndicesUpdateAliasesRemoveAction }), z.object({ remove_index: IndicesUpdateAliasesRemoveIndexAction })])

export const IndicesUpdateAliasesAction = IndicesUpdateAliasesActionExclusiveProps.meta({ id: 'IndicesUpdateAliasesAction' })
export type IndicesUpdateAliasesAction = z.infer<typeof IndicesUpdateAliasesAction>

/**
 * Create or update an alias.
 *
 * Adds a data stream or index to an alias.
 */
export const IndicesUpdateAliasesRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  actions: z.array(IndicesUpdateAliasesAction).describe('Actions to perform.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesUpdateAliasesRequest' })
export type IndicesUpdateAliasesRequest = z.infer<typeof IndicesUpdateAliasesRequest>

export const IndicesUpdateAliasesResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesUpdateAliasesResponse' })
export type IndicesUpdateAliasesResponse = z.infer<typeof IndicesUpdateAliasesResponse>
