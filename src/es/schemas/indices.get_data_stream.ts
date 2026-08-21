/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DataStreamName, DataStreamNames, Duration, ExpandWildcards, Field, HealthStatus, IndexName, Metadata, Name, Uuid, integer } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesDataStreamLifecycleWithRollover, IndicesIndexSettings } from './indices.js'
import { IndicesIndexMode } from './indices.resolve_index.js'

export const IndicesManagedBy = z.enum(['Index Lifecycle Management', 'Data stream lifecycle', 'Unmanaged']).meta({ id: 'IndicesManagedBy' })
export type IndicesManagedBy = z.infer<typeof IndicesManagedBy>

export const IndicesDataStreamIndex = z.object({
  index_name: z.lazy(() => IndexName).describe('Name of the backing index.'),
  index_uuid: z.lazy(() => Uuid).describe('Universally unique identifier (UUID) for the index.'),
  ilm_policy: z.lazy(() => Name).describe('Name of the current ILM lifecycle policy configured for this backing index.').optional(),
  managed_by: IndicesManagedBy.describe('Name of the lifecycle system that\'s currently managing this backing index.').optional(),
  prefer_ilm: z.boolean().describe('Indicates if ILM should take precedence over DSL in case both are configured to manage this index.').optional(),
  index_mode: IndicesIndexMode.describe('The index mode of this backing index of the data stream.').optional()
}).meta({ id: 'IndicesDataStreamIndex' })
export type IndicesDataStreamIndex = z.infer<typeof IndicesDataStreamIndex>

export const IndicesFailureStore = z.object({
  enabled: z.boolean(),
  indices: z.array(IndicesDataStreamIndex),
  rollover_on_write: z.boolean()
}).meta({ id: 'IndicesFailureStore' })
export type IndicesFailureStore = z.infer<typeof IndicesFailureStore>

export const IndicesDataStreamTimestampField = z.object({
  name: z.lazy(() => Field).describe('Name of the timestamp field for the data stream, which must be `@timestamp`. The `@timestamp` field must be included in every document indexed to the data stream.')
}).meta({ id: 'IndicesDataStreamTimestampField' })
export type IndicesDataStreamTimestampField = z.infer<typeof IndicesDataStreamTimestampField>

export const IndicesDataStream = z.object({
  _meta: z.lazy(() => Metadata).describe('Custom metadata for the stream, copied from the `_meta` object of the stream’s matching index template. If empty, the response omits this property.').optional(),
  allow_custom_routing: z.boolean().describe('If `true`, the data stream allows custom routing on write request.').optional(),
  failure_store: IndicesFailureStore.describe('Information about failure store backing indices').optional(),
  generation: z.lazy(() => integer).describe('Current generation for the data stream. This number acts as a cumulative count of the stream’s rollovers, starting at 1.'),
  hidden: z.boolean().describe('If `true`, the data stream is hidden.'),
  ilm_policy: z.lazy(() => Name).describe('Name of the current ILM lifecycle policy in the stream’s matching index template. This lifecycle policy is set in the `index.lifecycle.name` setting. If the template does not include a lifecycle policy, this property is not included in the response. NOTE: A data stream’s backing indices may be assigned different lifecycle policies. To retrieve the lifecycle policy for individual backing indices, use the get index settings API.').optional(),
  next_generation_managed_by: IndicesManagedBy.describe('Name of the lifecycle system that\'ll manage the next generation of the data stream.'),
  prefer_ilm: z.boolean().describe('Indicates if ILM should take precedence over DSL in case both are configured to managed this data stream.'),
  indices: z.array(IndicesDataStreamIndex).describe('Array of objects containing information about the data stream’s backing indices. The last item in this array contains information about the stream’s current write index.'),
  lifecycle: z.lazy(() => IndicesDataStreamLifecycleWithRollover).describe('Contains the configuration for the data stream lifecycle of this data stream.').optional(),
  name: z.lazy(() => DataStreamName).describe('Name of the data stream.'),
  replicated: z.boolean().describe('If `true`, the data stream is created and managed by cross-cluster replication and the local cluster can not write into this data stream or change its mappings.').optional(),
  rollover_on_write: z.boolean().describe('If `true`, the next write to this data stream will trigger a rollover first and the document will be indexed in the new backing index. If the rollover fails the indexing request will fail too.'),
  settings: z.lazy(() => IndicesIndexSettings).describe('The settings specific to this data stream that will take precedence over the settings in the matching index template.'),
  mappings: z.lazy(() => MappingTypeMapping).describe('The mappings specific to this data stream that will take precedence over the mappings in the matching index template.').optional(),
  status: z.lazy(() => HealthStatus).describe('Health status of the data stream. This health status is based on the state of the primary and replica shards of the stream’s backing indices.'),
  system: z.boolean().describe('If `true`, the data stream is created and managed by an Elastic stack component and cannot be modified through normal user interaction.').optional(),
  template: z.lazy(() => Name).describe('Name of the index template used to create the data stream’s backing indices. The template’s index pattern must match the name of this data stream.'),
  timestamp_field: IndicesDataStreamTimestampField.describe('Information about the `@timestamp` field in the data stream.'),
  index_mode: IndicesIndexMode.describe('The index mode for the data stream that will be used for newly created backing indices.').optional()
}).meta({ id: 'IndicesDataStream' })
export type IndicesDataStream = z.infer<typeof IndicesDataStream>

/**
 * Get data streams.
 *
 * Get information about one or more data streams.
 */
export const IndicesGetDataStreamRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('Comma-separated list of data stream names used to limit the request. Wildcard (`*`) expressions are supported. If omitted, all data streams are returned.').optional().meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If true, returns all relevant default configurations for the index template.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  verbose: z.boolean().describe('Whether the maximum timestamp for each data stream should be calculated and returned.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetDataStreamRequest' })
export type IndicesGetDataStreamRequest = z.infer<typeof IndicesGetDataStreamRequest>

export const IndicesGetDataStreamResponse = z.object({
  data_streams: z.array(IndicesDataStream)
}).meta({ id: 'IndicesGetDataStreamResponse' })
export type IndicesGetDataStreamResponse = z.infer<typeof IndicesGetDataStreamResponse>
