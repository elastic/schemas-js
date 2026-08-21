/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Indices, Names } from './_types.js'

/**
 * Check aliases.
 *
 * Check if one or more data stream or index aliases exist.
 */
export const IndicesExistsAliasRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated list of aliases to check. Supports wildcards (`*`).').meta({ found_in: 'path' }),
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams or indices used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesExistsAliasRequest' })
export type IndicesExistsAliasRequest = z.infer<typeof IndicesExistsAliasRequest>

export const IndicesExistsAliasResponse = z.boolean().meta({ id: 'IndicesExistsAliasResponse' })
export type IndicesExistsAliasResponse = z.infer<typeof IndicesExistsAliasResponse>
