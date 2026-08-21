/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Field, IndexAlias, IndexName, Indices, float, integer } from './_types.js'
import { AggregationsAggregationContainer, AggregationsDateHistogramAggregation, AggregationsGeoTileGridAggregation, AggregationsHistogramAggregation, AggregationsTermsAggregation } from './_types.aggregations.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'

export const TransformDestinationAlias = z.object({
  alias: IndexAlias.describe('The name of the alias.'),
  move_on_creation: z.boolean().describe('Whether the destination index should be the only index in this alias. If `true`, all the other indices will be removed from this alias before adding the destination index to this alias. This does not delete the removed indices; it only removes them from the alias.').optional()
}).meta({ id: 'TransformDestinationAlias' })
export type TransformDestinationAlias = z.infer<typeof TransformDestinationAlias>

export const TransformDestination = z.object({
  index: z.lazy(() => IndexName).describe('The destination index for the transform. The mappings of the destination index are deduced based on the source fields when possible. If alternate mappings are required, use the create index API prior to starting the transform.').optional(),
  aliases: z.array(TransformDestinationAlias).describe('The aliases that the destination index for the transform should have. Aliases are manipulated using the stored credentials of the transform, which means the secondary credentials supplied at creation time (if both primary and secondary credentials are specified). The destination index is added to the aliases regardless of whether the destination index was created by the transform or pre-created by the user.').optional(),
  pipeline: z.string().describe('The unique identifier for an ingest pipeline.').optional()
}).meta({ id: 'TransformDestination' })
export type TransformDestination = z.infer<typeof TransformDestination>

export const TransformLatest = z.object({
  sort: z.lazy(() => Field).describe('Specifies the date field that is used to identify the latest documents.'),
  unique_key: z.array(z.lazy(() => Field)).describe('Specifies an array of one or more fields that are used to group the data.')
}).meta({ id: 'TransformLatest' })
export type TransformLatest = z.infer<typeof TransformLatest>

const TransformPivotGroupByContainerExclusiveProps = z.union([z.object({ date_histogram: z.lazy(() => AggregationsDateHistogramAggregation) }), z.object({ geotile_grid: AggregationsGeoTileGridAggregation }), z.object({ histogram: z.lazy(() => AggregationsHistogramAggregation) }), z.object({ terms: z.lazy(() => AggregationsTermsAggregation) })])

export const TransformPivotGroupByContainer = TransformPivotGroupByContainerExclusiveProps.meta({ id: 'TransformPivotGroupByContainer' })
export type TransformPivotGroupByContainer = z.infer<typeof TransformPivotGroupByContainer>

export const TransformPivot = z.object({
  aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Defines how to aggregate the grouped data. The following aggregations are currently supported: average, bucket script, bucket selector, cardinality, filter, geo bounds, geo centroid, geo line, max, median absolute deviation, min, missing, percentiles, rare terms, scripted metric, stats, sum, terms, top metrics, value count, weighted average.').optional(),
  aggs: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Defines how to aggregate the grouped data. The following aggregations are currently supported: average, bucket script, bucket selector, cardinality, filter, geo bounds, geo centroid, geo line, max, median absolute deviation, min, missing, percentiles, rare terms, scripted metric, stats, sum, terms, top metrics, value count, weighted average.').optional(),
  group_by: z.record(z.string(), TransformPivotGroupByContainer).describe('Defines how to group the data. More than one grouping can be defined per pivot. The following groupings are currently supported: date histogram, geotile grid, histogram, terms.').optional()
}).meta({ id: 'TransformPivot' })
export type TransformPivot = z.infer<typeof TransformPivot>

export const TransformRetentionPolicy = z.object({
  field: z.lazy(() => Field).describe('The date field that is used to calculate the age of the document.'),
  max_age: z.lazy(() => Duration).describe('Specifies the maximum age of a document in the destination index. Documents that are older than the configured value are removed from the destination index.')
}).meta({ id: 'TransformRetentionPolicy' })
export type TransformRetentionPolicy = z.infer<typeof TransformRetentionPolicy>

const TransformRetentionPolicyContainerExclusiveProps = z.union([z.object({ time: TransformRetentionPolicy })])

export const TransformRetentionPolicyContainer = TransformRetentionPolicyContainerExclusiveProps.meta({ id: 'TransformRetentionPolicyContainer' })
export type TransformRetentionPolicyContainer = z.infer<typeof TransformRetentionPolicyContainer>

/** The source of the data for the transform. */
export const TransformSettings = z.object({
  align_checkpoints: z.boolean().describe('Specifies whether the transform checkpoint ranges should be optimized for performance. Such optimization can align checkpoint ranges with the date histogram interval when date histogram is specified as a group source in the transform config. As a result, less document updates in the destination index will be performed thus improving overall performance.').optional(),
  dates_as_epoch_millis: z.boolean().describe('Defines if dates in the ouput should be written as ISO formatted string or as millis since epoch. epoch_millis was the default for transforms created before version 7.11. For compatible output set this value to `true`.').optional(),
  deduce_mappings: z.boolean().describe('Specifies whether the transform should deduce the destination index mappings from the transform configuration.').optional(),
  docs_per_second: z.lazy(() => float).describe('Specifies a limit on the number of input documents per second. This setting throttles the transform by adding a wait time between search requests. The default value is null, which disables throttling.').optional(),
  max_page_search_size: z.lazy(() => integer).describe('Defines the initial page size to use for the composite aggregation for each checkpoint. If circuit breaker exceptions occur, the page size is dynamically adjusted to a lower value. The minimum value is `10` and the maximum is `65,536`. The default value is `500` for `pivot` transforms and `5000` for `latest` transforms.').optional(),
  use_point_in_time: z.boolean().describe('Specifies whether the transform checkpoint will use the Point In Time API while searching over the source index. In general, Point In Time is an optimization that will reduce pressure on the source index by reducing the amount of refreshes and merges, but it can be expensive if a large number of Point In Times are opened and closed for a given index. The benefits and impact depend on the data being searched, the ingest rate into the source index, and the amount of other consumers searching the same source index.').optional(),
  num_failure_retries: z.lazy(() => integer).describe('Defines the number of retries on a recoverable failure before the transform task is marked as `failed`. The minimum value is `0` and the maximum is `100`, where `-1` indicates that the transform retries indefinitely. If unset, the cluster-level setting `num_transform_failure_retries` is used. This setting cannot be specified when `unattended` is `true`, because unattended transforms always retry indefinitely.').optional(),
  unattended: z.boolean().describe('If `true`, the transform runs in unattended mode. In unattended mode, the transform retries indefinitely in case of an error which means the transform never fails. Setting the number of retries other than infinite fails in validation.').optional()
}).meta({ id: 'TransformSettings' })
export type TransformSettings = z.infer<typeof TransformSettings>

export const TransformSource = z.object({
  index: z.lazy(() => Indices).describe('The source indices for the transform. It can be a single index, an index pattern (for example, `"my-index-*""`), an array of indices (for example, `["my-index-000001", "my-index-000002"]`), or an array of index patterns (for example, `["my-index-*", "my-other-index-*"]`. For remote indices use the syntax `"remote_name:index_name"`. If any indices are in remote clusters then the master node and at least one transform node must have the `remote_cluster_client` node role.'),
  query: z.lazy(() => QueryDslQueryContainer).describe('A query clause that retrieves a subset of data from the source index.').optional(),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).describe('Definitions of search-time runtime fields that can be used by the transform. For search runtime fields all data nodes, including remote nodes, must be 7.12 or later.').optional()
}).meta({ id: 'TransformSource' })
export type TransformSource = z.infer<typeof TransformSource>

export const TransformTimeSync = z.object({
  delay: z.lazy(() => Duration).describe('The time delay between the current time and the latest input data time.').optional(),
  field: z.lazy(() => Field).describe('The date field that is used to identify new documents in the source. In general, it’s a good idea to use a field that contains the ingest timestamp. If you use a different field, you might need to set the delay such that it accounts for data transmission delays.')
}).meta({ id: 'TransformTimeSync' })
export type TransformTimeSync = z.infer<typeof TransformTimeSync>

const TransformSyncContainerExclusiveProps = z.union([z.object({ time: TransformTimeSync })])

export const TransformSyncContainer = TransformSyncContainerExclusiveProps.meta({ id: 'TransformSyncContainer' })
export type TransformSyncContainer = z.infer<typeof TransformSyncContainer>
