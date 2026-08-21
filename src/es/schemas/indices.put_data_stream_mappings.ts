/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, Indices } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'

/**
 * Update data stream mappings.
 *
 * This API can be used to override mappings on specific data streams. These overrides will take precedence over what
 * is specified in the template that the data stream matches. The mapping change is only applied to new write indices
 * that are created during rollover after this API is called. No indices are changed by this API.
 */
export const IndicesPutDataStreamMappingsRequest = z.object({
  name: z.lazy(() => Indices).describe('A comma-separated list of data streams or data stream patterns.').meta({ found_in: 'path' }),
  dry_run: z.boolean().describe('If `true`, the request does not actually change the mappings on any data streams. Instead, it simulates changing the settings and reports back to the user what would have happened had these settings actually been applied.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the  timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  mappings: z.lazy(() => MappingTypeMapping).optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutDataStreamMappingsRequest' })
export type IndicesPutDataStreamMappingsRequest = z.infer<typeof IndicesPutDataStreamMappingsRequest>

export const IndicesPutDataStreamMappingsUpdatedDataStreamMappings = z.object({
  name: z.lazy(() => IndexName).describe('The data stream name.'),
  applied_to_data_stream: z.boolean().describe('If the mappings were successfully applied to the data stream (or would have been, if running in `dry_run` mode), it is `true`. If an error occurred, it is `false`.'),
  error: z.string().describe('A message explaining why the mappings could not be applied to the data stream.').optional(),
  mappings: z.lazy(() => MappingTypeMapping).describe('The mappings that are specfic to this data stream that will override any mappings from the matching index template.').optional(),
  effective_mappings: z.lazy(() => MappingTypeMapping).describe('The mappings that are effective on this data stream, taking into account the mappings from the matching index template and the mappings specific to this data stream.').optional()
}).meta({ id: 'IndicesPutDataStreamMappingsUpdatedDataStreamMappings' })
export type IndicesPutDataStreamMappingsUpdatedDataStreamMappings = z.infer<typeof IndicesPutDataStreamMappingsUpdatedDataStreamMappings>

export const IndicesPutDataStreamMappingsResponse = z.object({
  data_streams: z.array(IndicesPutDataStreamMappingsUpdatedDataStreamMappings)
}).meta({ id: 'IndicesPutDataStreamMappingsResponse' })
export type IndicesPutDataStreamMappingsResponse = z.infer<typeof IndicesPutDataStreamMappingsResponse>
