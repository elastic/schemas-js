/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Indices, Names } from './_types.js'

export const IndicesDeleteAliasIndicesAliasesResponseBody = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.'),
  errors: z.boolean().optional()
}).meta({ id: 'IndicesDeleteAliasIndicesAliasesResponseBody' })
export type IndicesDeleteAliasIndicesAliasesResponseBody = z.infer<typeof IndicesDeleteAliasIndicesAliasesResponseBody>

/**
 * Delete an alias.
 *
 * Removes a data stream or index from an alias.
 */
export const IndicesDeleteAliasRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams or indices used to limit the request. Supports wildcards (`*`).').meta({ found_in: 'path' }),
  name: z.lazy(() => Names).describe('Comma-separated list of aliases to remove. Supports wildcards (`*`). To remove all aliases, use `*` or `_all`.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteAliasRequest' })
export type IndicesDeleteAliasRequest = z.infer<typeof IndicesDeleteAliasRequest>

export const IndicesDeleteAliasResponse = IndicesDeleteAliasIndicesAliasesResponseBody.meta({ id: 'IndicesDeleteAliasResponse' })
export type IndicesDeleteAliasResponse = z.infer<typeof IndicesDeleteAliasResponse>
