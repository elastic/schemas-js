/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ErrorCause, IndexAlias, IndexName, Indices, integer } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'

export const IndicesUpdateAliasesAddAction = z.object({
  alias: IndexAlias.describe('Alias for the action. Index alias names support date math.').optional(),
  aliases: z.union([IndexAlias, z.array(IndexAlias)]).describe('Aliases for the action. Index alias names support date math.').optional(),
  filter: z.lazy(() => QueryDslQueryContainer).describe('Query used to limit documents the alias can access.').optional(),
  index: z.lazy(() => IndexName).describe('Data stream or index for the action. Supports wildcards (`*`). Wildcard patterns that match both data streams and indices return an error.').optional(),
  indices: z.lazy(() => Indices).describe('Data streams or indices for the action. Supports wildcards (`*`). Wildcard patterns that match both data streams and indices return an error.').optional(),
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

export const IndicesUpdateAliasesAliasActionType = z.enum(['add', 'remove', 'remove_index']).meta({ id: 'IndicesUpdateAliasesAliasActionType' })
export type IndicesUpdateAliasesAliasActionType = z.infer<typeof IndicesUpdateAliasesAliasActionType>

export const IndicesUpdateAliasesAliasActionSummary = z.object({
  type: IndicesUpdateAliasesAliasActionType.describe('The action that was applied.'),
  indices: z.array(z.lazy(() => IndexName)).describe('Resolved data streams or indices for the action.'),
  aliases: z.array(IndexAlias).describe('Aliases for the action.')
}).meta({ id: 'IndicesUpdateAliasesAliasActionSummary' })
export type IndicesUpdateAliasesAliasActionSummary = z.infer<typeof IndicesUpdateAliasesAliasActionSummary>

export const IndicesUpdateAliasesAliasActionResult = z.object({
  action: IndicesUpdateAliasesAliasActionSummary.describe('The action this result describes.'),
  status: z.lazy(() => integer).describe('HTTP status for this action. `200` when the action succeeds.'),
  error: z.lazy(() => ErrorCause).describe('Cause of the failure. Returned only when this action fails.').optional()
}).meta({ id: 'IndicesUpdateAliasesAliasActionResult' })
export type IndicesUpdateAliasesAliasActionResult = z.infer<typeof IndicesUpdateAliasesAliasActionResult>

export const IndicesUpdateAliasesIndicesUpdateAliasesResponseBody = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'IndicesUpdateAliasesIndicesUpdateAliasesResponseBody' })
export type IndicesUpdateAliasesIndicesUpdateAliasesResponseBody = z.infer<typeof IndicesUpdateAliasesIndicesUpdateAliasesResponseBody>

/**
 * Update aliases and delete indices atomically.
 *
 * Applies one or more actions in a single request:
 *
 * - Add a data stream or index to an alias.
 * - Remove a data stream or index from an alias.
 * - Delete an index in that same request, so the deletion and the alias changes are applied together.
 *
 * For example, you can replace an index with an alias of the same name.
 *
 * NOTE: Every `remove_index` action in the request runs first, before any `add` or `remove` actions, no matter where it sits in the `actions` array.
 */
export const IndicesUpdateAliasesRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  actions: z.array(IndicesUpdateAliasesAction).describe('Actions to perform.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesUpdateAliasesRequest' })
export type IndicesUpdateAliasesRequest = z.infer<typeof IndicesUpdateAliasesRequest>

export const IndicesUpdateAliasesResponse = IndicesUpdateAliasesIndicesUpdateAliasesResponseBody.meta({ id: 'IndicesUpdateAliasesResponse' })
export type IndicesUpdateAliasesResponse = z.infer<typeof IndicesUpdateAliasesResponse>
