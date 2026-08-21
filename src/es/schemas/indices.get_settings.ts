/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, IndexName, Indices, Names } from './_types.js'
import { IndicesIndexState } from './indices.js'

/**
 * Get index settings.
 *
 * Get setting information for one or more indices.
 * For data streams, it returns setting information for the stream's backing indices.
 */
export const IndicesGetSettingsRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  name: z.lazy(() => Names).describe('Comma-separated list or wildcard expression of settings to retrieve.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  flat_settings: z.boolean().describe('If `true`, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If `true`, return all default settings in the response.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only. If `false`, information is retrieved from the master node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetSettingsRequest' })
export type IndicesGetSettingsRequest = z.infer<typeof IndicesGetSettingsRequest>

export const IndicesGetSettingsResponse = z.record(z.lazy(() => IndexName), IndicesIndexState).meta({ id: 'IndicesGetSettingsResponse' })
export type IndicesGetSettingsResponse = z.infer<typeof IndicesGetSettingsResponse>
