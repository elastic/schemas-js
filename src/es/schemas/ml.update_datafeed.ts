/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ExpandWildcards, Id, IndicesOptions, ScriptField, integer } from './_types.js'
import { AggregationsAggregationContainer } from './_types.aggregations.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { MlChunkingConfig, MlDatafeedAuthorization, MlDelayedDataCheckConfig } from './ml.js'

/**
 * Update a datafeed.
 *
 * You must stop and start the datafeed for the changes to be applied.
 * When Elasticsearch security features are enabled, your datafeed remembers which roles the user who updated it had at
 * the time of the update and runs the query using those same roles. If you provide secondary authorization headers,
 * those credentials are used instead.
 */
export const MlUpdateDatafeedRequest = z.object({
  datafeed_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values.').optional().meta({ found_in: 'query' }),
  ignore_throttled: z.boolean().describe('If `true`, concrete, expanded or aliased indices are ignored when frozen.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data.').optional().meta({ found_in: 'body' }),
  chunking_config: MlChunkingConfig.describe('Datafeeds might search over long time periods, for several months or years. This search is split into time chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of these time chunks are calculated; it is an advanced configuration option.').optional().meta({ found_in: 'body' }),
  delayed_data_check_config: MlDelayedDataCheckConfig.describe('Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally search over indices that have already been read in an effort to determine whether any data has subsequently been added to the index. If missing data is found, it is a good indication that the `query_delay` is set too low and the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time datafeeds.').optional().meta({ found_in: 'body' }),
  frequency: z.lazy(() => Duration).describe('The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.').optional().meta({ found_in: 'body' }),
  indices: z.array(z.string()).describe('An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role.').optional().meta({ found_in: 'body' }),
  indexes: z.array(z.string()).describe('An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role.').optional(),
  indices_options: z.lazy(() => IndicesOptions).describe('Specifies index expansion options that are used during search.').optional().meta({ found_in: 'body' }),
  job_id: z.lazy(() => Id).optional().meta({ found_in: 'body' }),
  max_empty_searches: z.lazy(() => integer).describe('If a real-time datafeed has never seen any data (including during any initial training period), it automatically stops and closes the associated job after this many real-time searches return no documents. In other words, it stops after `frequency` times `max_empty_searches` of real-time operation. If not set, a datafeed with no end time that sees no data remains started until it is explicitly stopped. By default, it is not set.').optional().meta({ found_in: 'body' }),
  query: z.lazy(() => QueryDslQueryContainer).describe('The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. Note that if you change the query, the analyzed data is also changed. Therefore, the time required to learn might be long and the understandability of the results is unpredictable. If you want to make significant changes to the source data, it is recommended that you clone the job and datafeed and make the amendments in the clone. Let both run in parallel and close one when you are satisfied with the results of the job.').optional().meta({ found_in: 'body' }),
  query_delay: z.lazy(() => Duration).describe('The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default value is randomly selected between `60s` and `120s`. This randomness improves the query performance when there are multiple jobs running on the same node.').optional().meta({ found_in: 'body' }),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).describe('Specifies runtime fields for the datafeed search.').optional().meta({ found_in: 'body' }),
  script_fields: z.record(z.string(), z.lazy(() => ScriptField)).describe('Specifies scripts that evaluate custom expressions and returns script fields to the datafeed. The detector configuration objects in a job can contain functions that use these script fields.').optional().meta({ found_in: 'body' }),
  scroll_size: z.lazy(() => integer).describe('The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations. The maximum value is the value of `index.max_result_window`.').optional().meta({ found_in: 'body' }),
  _force_rekeying: z.boolean().describe('When true, force reminting of the datafeed\'s internal cloud API key from the caller\'s cloud credential without requiring other configuration changes. Requires a cloud-authenticated caller and an environment that supports cross-project calls. Rejected with 400 otherwise. The datafeed must be stopped.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlUpdateDatafeedRequest' })
export type MlUpdateDatafeedRequest = z.infer<typeof MlUpdateDatafeedRequest>

export const MlUpdateDatafeedResponse = z.object({
  authorization: MlDatafeedAuthorization.optional(),
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).optional(),
  chunking_config: MlChunkingConfig,
  delayed_data_check_config: MlDelayedDataCheckConfig.optional(),
  datafeed_id: z.lazy(() => Id),
  frequency: z.lazy(() => Duration).describe('The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. For example: `150s`. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation.').optional(),
  indices: z.array(z.string()),
  indices_options: z.lazy(() => IndicesOptions).optional(),
  job_id: z.lazy(() => Id),
  max_empty_searches: z.lazy(() => integer).optional(),
  query: z.lazy(() => QueryDslQueryContainer),
  query_delay: z.lazy(() => Duration),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).optional(),
  script_fields: z.record(z.string(), z.lazy(() => ScriptField)).optional(),
  scroll_size: z.lazy(() => integer)
}).meta({ id: 'MlUpdateDatafeedResponse' })
export type MlUpdateDatafeedResponse = z.infer<typeof MlUpdateDatafeedResponse>
