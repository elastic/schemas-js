/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ExpandWildcards, Field, Fields, IndexName, Indices } from './_types.js'
import { MappingProperty } from './indices.put_mapping.js'

export const MappingFieldMapping = z.object({
  full_name: z.string(),
  mapping: z.record(z.lazy(() => Field), z.lazy(() => MappingProperty))
}).meta({ id: 'MappingFieldMapping' })
export type MappingFieldMapping = z.infer<typeof MappingFieldMapping>

/**
 * Get mapping definitions.
 *
 * Retrieves mapping definitions for one or more fields.
 * For data streams, the API retrieves field mappings for the stream’s backing indices.
 *
 * This API is useful if you don't need a complete mapping or if an index mapping contains a large number of fields.
 */
export const IndicesGetFieldMappingRequest = z.object({
  fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expression of fields used to limit returned information. Supports wildcards (`*`).').meta({ found_in: 'path' }),
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If `true`, return all default settings in the response.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetFieldMappingRequest' })
export type IndicesGetFieldMappingRequest = z.infer<typeof IndicesGetFieldMappingRequest>

export const IndicesGetFieldMappingTypeFieldMappings = z.object({
  mappings: z.record(z.lazy(() => Field), MappingFieldMapping)
}).meta({ id: 'IndicesGetFieldMappingTypeFieldMappings' })
export type IndicesGetFieldMappingTypeFieldMappings = z.infer<typeof IndicesGetFieldMappingTypeFieldMappings>

export const IndicesGetFieldMappingResponse = z.record(z.lazy(() => IndexName), IndicesGetFieldMappingTypeFieldMappings).meta({ id: 'IndicesGetFieldMappingResponse' })
export type IndicesGetFieldMappingResponse = z.infer<typeof IndicesGetFieldMappingResponse>
