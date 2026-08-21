/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, IndexName, Indices } from './_types.js'
import { IndicesIndexState } from './indices.js'

export const IndicesGetFeature = z.enum(['aliases', 'mappings', 'settings']).meta({ id: 'IndicesGetFeature' })
export type IndicesGetFeature = z.infer<typeof IndicesGetFeature>

export const IndicesGetFeatures = z.union([IndicesGetFeature, z.array(IndicesGetFeature)]).meta({ id: 'IndicesGetFeatures' })
export type IndicesGetFeatures = z.infer<typeof IndicesGetFeatures>

/**
 * Get index information.
 *
 * Get information about one or more indices. For data streams, the API returns information about the
 * stream’s backing indices.
 */
export const IndicesGetRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard expressions (*) are supported.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden.').optional().meta({ found_in: 'query' }),
  flat_settings: z.boolean().describe('If true, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If true, return all default settings in the response.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  features: IndicesGetFeatures.describe('Return only information on specified index features').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetRequest' })
export type IndicesGetRequest = z.infer<typeof IndicesGetRequest>

export const IndicesGetResponse = z.record(z.lazy(() => IndexName), IndicesIndexState).meta({ id: 'IndicesGetResponse' })
export type IndicesGetResponse = z.infer<typeof IndicesGetResponse>
