/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Indices } from './_types.js'

/**
 * Check indices.
 *
 * Check if one or more indices, index aliases, or data streams exist.
 */
export const IndicesExistsRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases. Supports wildcards (`*`).').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  flat_settings: z.boolean().describe('If `true`, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If `true`, return all default settings in the response.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesExistsRequest' })
export type IndicesExistsRequest = z.infer<typeof IndicesExistsRequest>

export const IndicesExistsResponse = z.boolean().meta({ id: 'IndicesExistsResponse' })
export type IndicesExistsResponse = z.infer<typeof IndicesExistsResponse>
