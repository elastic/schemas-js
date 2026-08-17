/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Indices } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'

export const IndicesGetDataStreamMappingsDataStreamMappings = z.object({
  name: z.string().describe('The name of the data stream.'),
  mappings: z.lazy(() => MappingTypeMapping).describe('The settings specific to this data stream'),
  effective_mappings: z.lazy(() => MappingTypeMapping).describe('The settings specific to this data stream merged with the settings from its template. These `effective_settings` are the settings that will be used when a new index is created for this data stream.')
}).meta({ id: 'IndicesGetDataStreamMappingsDataStreamMappings' })
export type IndicesGetDataStreamMappingsDataStreamMappings = z.infer<typeof IndicesGetDataStreamMappingsDataStreamMappings>

/**
 * Get data stream mappings.
 *
 * Get mapping information for one or more data streams.
 */
export const IndicesGetDataStreamMappingsRequest = z.object({
  name: z.lazy(() => Indices).describe('A comma-separated list of data streams or data stream patterns. Supports wildcards (`*`).').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetDataStreamMappingsRequest' })
export type IndicesGetDataStreamMappingsRequest = z.infer<typeof IndicesGetDataStreamMappingsRequest>

export const IndicesGetDataStreamMappingsResponse = z.object({
  data_streams: z.array(IndicesGetDataStreamMappingsDataStreamMappings)
}).meta({ id: 'IndicesGetDataStreamMappingsResponse' })
export type IndicesGetDataStreamMappingsResponse = z.infer<typeof IndicesGetDataStreamMappingsResponse>
