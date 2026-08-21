/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AggregateName, Duration, DurationLarge, Field, FieldValue, GeoBounds, Metadata, Script, ScriptSource, Sort, SortOrder, SortResults, TimeZone, double, float, integer, long } from './_types.js'
import type { ScriptShape, ScriptSourceShape } from './_types.js'
import { AggregationsMissing, AggregationsTermsAggregation } from './_types.aggregations.js'
import { QueryDslBoolQuery, QueryDslExistsQuery, QueryDslIdsQuery, QueryDslMatchAllQuery, QueryDslMatchQuery, QueryDslPrefixQuery, QueryDslRangeQuery, QueryDslSimpleQueryStringQuery, QueryDslTermQuery, QueryDslTermsQuery, QueryDslWildcardQuery } from './_types.query_dsl.js'
import { SecurityApiKey } from './security.js'

export const AggregationsAggregation = z.object({
}).meta({ id: 'AggregationsAggregation' })
export type AggregationsAggregation = z.infer<typeof AggregationsAggregation>

/** Base type for bucket aggregations. These aggregations also accept sub-aggregations. */
export const AggregationsBucketAggregationBase = z.object({
}).meta({ id: 'AggregationsBucketAggregationBase' })
export type AggregationsBucketAggregationBase = z.infer<typeof AggregationsBucketAggregationBase>

export const AggregationsCardinalityExecutionMode = z.enum(['global_ordinals', 'segment_ordinals', 'direct', 'save_memory_heuristic', 'save_time_heuristic']).meta({ id: 'AggregationsCardinalityExecutionMode' })
export type AggregationsCardinalityExecutionMode = z.infer<typeof AggregationsCardinalityExecutionMode>

export interface AggregationsCardinalityAggregationShape {
  field?: Field | undefined
  missing?: AggregationsMissing | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  precision_threshold?: integer | undefined
  rehash?: boolean | undefined
  execution_hint?: AggregationsCardinalityExecutionMode | undefined
}
export const AggregationsCardinalityAggregation = z.object({
  field: z.lazy(() => Field).describe('The field on which to run the aggregation.').optional(),
  missing: z.lazy(() => AggregationsMissing).describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
  get script () { return z.union([Script, ScriptSource]).optional() },
  precision_threshold: z.lazy(() => integer).describe('A unique count below which counts are expected to be close to accurate. This allows to trade memory for accuracy.').optional(),
  rehash: z.boolean().optional(),
  execution_hint: AggregationsCardinalityExecutionMode.describe('Mechanism by which cardinality aggregations is run.').optional()
}).meta({ id: 'AggregationsCardinalityAggregation' })
export type AggregationsCardinalityAggregation = z.infer<typeof AggregationsCardinalityAggregation>

export const AggregationsCompositeAggregateKey = z.record(z.lazy(() => Field), z.lazy(() => FieldValue)).meta({ id: 'AggregationsCompositeAggregateKey' })
export type AggregationsCompositeAggregateKey = z.infer<typeof AggregationsCompositeAggregateKey>

export const AggregationsMissingOrder = z.enum(['first', 'last', 'default']).meta({ id: 'AggregationsMissingOrder' })
export type AggregationsMissingOrder = z.infer<typeof AggregationsMissingOrder>

export const AggregationsValueType = z.enum(['string', 'long', 'double', 'number', 'date', 'date_nanos', 'ip', 'numeric', 'geo_point', 'boolean']).meta({ id: 'AggregationsValueType' })
export type AggregationsValueType = z.infer<typeof AggregationsValueType>

export interface AggregationsCompositeTermsAggregationShape {
  field?: Field | undefined
  missing_bucket?: boolean | undefined
  missing_order?: AggregationsMissingOrder | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  value_type?: AggregationsValueType | undefined
  order?: SortOrder | undefined
}
export const AggregationsCompositeTermsAggregation = z.object({
  field: z.lazy(() => Field).describe('Either `field` or `script` must be present').optional(),
  missing_bucket: z.boolean().optional(),
  missing_order: z.lazy(() => AggregationsMissingOrder).optional(),
  get script () { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional() },
  value_type: z.lazy(() => AggregationsValueType).optional(),
  order: z.lazy(() => SortOrder).optional()
}).meta({ id: 'AggregationsCompositeTermsAggregation' })
export type AggregationsCompositeTermsAggregation = z.infer<typeof AggregationsCompositeTermsAggregation>

export interface AggregationsCompositeHistogramAggregationShape {
  field?: Field | undefined
  missing_bucket?: boolean | undefined
  missing_order?: AggregationsMissingOrder | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  value_type?: AggregationsValueType | undefined
  order?: SortOrder | undefined
  interval: double
}
export const AggregationsCompositeHistogramAggregation = z.object({
  field: z.lazy(() => Field).describe('Either `field` or `script` must be present').optional(),
  missing_bucket: z.boolean().optional(),
  missing_order: z.lazy(() => AggregationsMissingOrder).optional(),
  get script () { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional() },
  value_type: z.lazy(() => AggregationsValueType).optional(),
  order: z.lazy(() => SortOrder).optional(),
  interval: z.lazy(() => double)
}).meta({ id: 'AggregationsCompositeHistogramAggregation' })
export type AggregationsCompositeHistogramAggregation = z.infer<typeof AggregationsCompositeHistogramAggregation>

export interface AggregationsCompositeDateHistogramAggregationShape {
  field?: Field | undefined
  missing_bucket?: boolean | undefined
  missing_order?: AggregationsMissingOrder | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  value_type?: AggregationsValueType | undefined
  order?: SortOrder | undefined
  format?: string | undefined
  calendar_interval?: DurationLarge | undefined
  fixed_interval?: DurationLarge | undefined
  offset?: Duration | undefined
  time_zone?: TimeZone | undefined
}
export const AggregationsCompositeDateHistogramAggregation = z.object({
  field: z.lazy(() => Field).describe('Either `field` or `script` must be present').optional(),
  missing_bucket: z.boolean().optional(),
  missing_order: z.lazy(() => AggregationsMissingOrder).optional(),
  get script () { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional() },
  value_type: z.lazy(() => AggregationsValueType).optional(),
  order: z.lazy(() => SortOrder).optional(),
  format: z.string().optional(),
  calendar_interval: z.lazy(() => DurationLarge).describe('Either `calendar_interval` or `fixed_interval` must be present').optional(),
  fixed_interval: z.lazy(() => DurationLarge).describe('Either `calendar_interval` or `fixed_interval` must be present').optional(),
  offset: z.lazy(() => Duration).optional(),
  time_zone: z.lazy(() => TimeZone).optional()
}).meta({ id: 'AggregationsCompositeDateHistogramAggregation' })
export type AggregationsCompositeDateHistogramAggregation = z.infer<typeof AggregationsCompositeDateHistogramAggregation>

export interface AggregationsCompositeGeoTileGridAggregationShape {
  field?: Field | undefined
  missing_bucket?: boolean | undefined
  missing_order?: AggregationsMissingOrder | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  value_type?: AggregationsValueType | undefined
  order?: SortOrder | undefined
  precision?: integer | undefined
  bounds?: GeoBounds | undefined
}
export const AggregationsCompositeGeoTileGridAggregation = z.object({
  field: z.lazy(() => Field).describe('Either `field` or `script` must be present').optional(),
  missing_bucket: z.boolean().optional(),
  missing_order: z.lazy(() => AggregationsMissingOrder).optional(),
  get script () { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional() },
  value_type: z.lazy(() => AggregationsValueType).optional(),
  order: z.lazy(() => SortOrder).optional(),
  precision: z.lazy(() => integer).optional(),
  bounds: z.lazy(() => GeoBounds).optional()
}).meta({ id: 'AggregationsCompositeGeoTileGridAggregation' })
export type AggregationsCompositeGeoTileGridAggregation = z.infer<typeof AggregationsCompositeGeoTileGridAggregation>

const AggregationsCompositeAggregationSourceExclusiveProps = z.union([z.object({ terms: z.lazy(() => AggregationsCompositeTermsAggregation) }), z.object({ histogram: z.lazy(() => AggregationsCompositeHistogramAggregation) }), z.object({ date_histogram: z.lazy(() => AggregationsCompositeDateHistogramAggregation) }), z.object({ geotile_grid: z.lazy(() => AggregationsCompositeGeoTileGridAggregation) })])

export interface AggregationsCompositeAggregationSourceShape {
  terms?: AggregationsCompositeTermsAggregation | undefined
  histogram?: AggregationsCompositeHistogramAggregation | undefined
  date_histogram?: AggregationsCompositeDateHistogramAggregation | undefined
  geotile_grid?: AggregationsCompositeGeoTileGridAggregation | undefined
}
export const AggregationsCompositeAggregationSource: z.ZodType<AggregationsCompositeAggregationSourceShape> = AggregationsCompositeAggregationSourceExclusiveProps.meta({ id: 'AggregationsCompositeAggregationSource' })
export type AggregationsCompositeAggregationSource = z.infer<typeof AggregationsCompositeAggregationSource>

export interface AggregationsCompositeAggregationShape {
  after?: AggregationsCompositeAggregateKey | undefined
  size?: integer | undefined
  sources?: Array<Record<string, AggregationsCompositeAggregationSourceShape>> | undefined
}
export const AggregationsCompositeAggregation = z.object({
  after: z.lazy(() => AggregationsCompositeAggregateKey).describe('When paginating, use the `after_key` value returned in the previous response to retrieve the next page.').optional(),
  size: z.lazy(() => integer).describe('The number of composite buckets that should be returned.').optional(),
  get sources (): z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, typeof AggregationsCompositeAggregationSource>>> { return z.array(z.record(z.string(), AggregationsCompositeAggregationSource)).describe('The value sources used to build composite buckets. Keys are returned in the order of the `sources` definition.').optional() }
}).meta({ id: 'AggregationsCompositeAggregation' })
export type AggregationsCompositeAggregation = z.infer<typeof AggregationsCompositeAggregation>

export const DateMath = z.string().meta({ id: 'DateMath' })
export type DateMath = z.infer<typeof DateMath>

/**
 * A date range limit, represented either as a DateMath expression or a number expressed
 * according to the target field's precision.
 */
export const AggregationsFieldDateMath = z.union([DateMath, z.lazy(() => long)]).meta({ id: 'AggregationsFieldDateMath' })
export type AggregationsFieldDateMath = z.infer<typeof AggregationsFieldDateMath>

export const AggregationsDateRangeExpression = z.object({
  from: AggregationsFieldDateMath.describe('Start of the range (inclusive).').optional(),
  key: z.string().describe('Custom key to return the range with.').optional(),
  to: AggregationsFieldDateMath.describe('End of the range (exclusive).').optional()
}).meta({ id: 'AggregationsDateRangeExpression' })
export type AggregationsDateRangeExpression = z.infer<typeof AggregationsDateRangeExpression>

export const AggregationsDateRangeAggregation = z.object({
  field: z.lazy(() => Field).describe('The date field whose values are use to build ranges.').optional(),
  format: z.string().describe('The date format used to format `from` and `to` in the response.').optional(),
  missing: z.lazy(() => AggregationsMissing).describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
  ranges: z.array(AggregationsDateRangeExpression).describe('Array of date ranges.').optional(),
  time_zone: z.lazy(() => TimeZone).describe('Time zone used to convert dates from another time zone to UTC.').optional(),
  keyed: z.boolean().describe('Set to `true` to associate a unique string key with each bucket and returns the ranges as a hash rather than an array.').optional()
}).meta({ id: 'AggregationsDateRangeAggregation' })
export type AggregationsDateRangeAggregation = z.infer<typeof AggregationsDateRangeAggregation>

/**
 * Aggregation buckets. By default they are returned as an array, but if the aggregation has keys configured for
 * the different buckets, the result is a dictionary.
 */
export const AggregationsBuckets = z.union([z.record(z.string(), z.any()), z.array(z.any())]).meta({ id: 'AggregationsBuckets' })
export type AggregationsBuckets = z.infer<typeof AggregationsBuckets>

export const AggregationsAggregationRange = z.object({
  from: z.union([z.lazy(() => double), z.null()]).describe('Start of the range (inclusive).').optional(),
  key: z.string().describe('Custom key to return the range with.').optional(),
  to: z.union([z.lazy(() => double), z.null()]).describe('End of the range (exclusive).').optional()
}).meta({ id: 'AggregationsAggregationRange' })
export type AggregationsAggregationRange = z.infer<typeof AggregationsAggregationRange>

export const AggregationsMissingAggregation = z.object({
  field: z.lazy(() => Field).describe('The name of the field.').optional(),
  missing: z.lazy(() => AggregationsMissing).optional()
}).meta({ id: 'AggregationsMissingAggregation' })
export type AggregationsMissingAggregation = z.infer<typeof AggregationsMissingAggregation>

export interface AggregationsRangeAggregationShape {
  field?: Field | undefined
  missing?: integer | undefined
  ranges?: AggregationsAggregationRange[] | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  keyed?: boolean | undefined
  format?: string | undefined
}
export const AggregationsRangeAggregation = z.object({
  field: z.lazy(() => Field).describe('The date field whose values are use to build ranges.').optional(),
  missing: z.lazy(() => integer).describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
  ranges: z.array(z.lazy(() => AggregationsAggregationRange)).describe('An array of ranges used to bucket documents.').optional(),
  get script () { return z.union([Script, ScriptSource]).optional() },
  keyed: z.boolean().describe('Set to `true` to associate a unique string key with each bucket and return the ranges as a hash rather than an array.').optional(),
  format: z.string().optional()
}).meta({ id: 'AggregationsRangeAggregation' })
export type AggregationsRangeAggregation = z.infer<typeof AggregationsRangeAggregation>

export interface AggregationsValueCountAggregationShape {
  field?: Field | undefined
  missing?: AggregationsMissing | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  format?: string | undefined
}
export const AggregationsValueCountAggregation = z.object({
  field: z.lazy(() => Field).describe('The field on which to run the aggregation.').optional(),
  missing: z.lazy(() => AggregationsMissing).describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
  get script () { return z.union([Script, ScriptSource]).optional() },
  format: z.string().optional()
}).meta({ id: 'AggregationsValueCountAggregation' })
export type AggregationsValueCountAggregation = z.infer<typeof AggregationsValueCountAggregation>

export const AggregationsAggregateBase = z.object({
  meta: z.lazy(() => Metadata).optional()
}).meta({ id: 'AggregationsAggregateBase' })
export type AggregationsAggregateBase = z.infer<typeof AggregationsAggregateBase>

export const AggregationsCardinalityAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  value: z.lazy(() => long)
}).meta({ id: 'AggregationsCardinalityAggregate' })
export type AggregationsCardinalityAggregate = z.infer<typeof AggregationsCardinalityAggregate>

export const AggregationsSingleMetricAggregateBase = z.object({
  meta: z.lazy(() => Metadata).optional(),
  value: z.union([z.lazy(() => double), z.null()]).describe('The metric value. A missing value generally means that there was no data to aggregate, unless specified otherwise.'),
  value_as_string: z.string().optional()
}).meta({ id: 'AggregationsSingleMetricAggregateBase' })
export type AggregationsSingleMetricAggregateBase = z.infer<typeof AggregationsSingleMetricAggregateBase>

/** Value count aggregation result. `value` is always present. */
export const AggregationsValueCountAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  value: z.union([z.lazy(() => double), z.null()]).describe('The metric value. A missing value generally means that there was no data to aggregate, unless specified otherwise.'),
  value_as_string: z.string().optional()
}).meta({ id: 'AggregationsValueCountAggregate' })
export type AggregationsValueCountAggregate = z.infer<typeof AggregationsValueCountAggregate>

export const AggregationsMultiBucketAggregateBase = z.object({
  meta: z.lazy(() => Metadata).optional(),
  buckets: z.lazy(() => AggregationsBuckets)
}).meta({ id: 'AggregationsMultiBucketAggregateBase' })
export type AggregationsMultiBucketAggregateBase = z.infer<typeof AggregationsMultiBucketAggregateBase>

export const AggregationsTermsAggregateBase = z.object({
  meta: z.lazy(() => Metadata).optional(),
  buckets: z.lazy(() => AggregationsBuckets),
  doc_count_error_upper_bound: z.lazy(() => long).optional(),
  sum_other_doc_count: z.lazy(() => long).optional()
}).meta({ id: 'AggregationsTermsAggregateBase' })
export type AggregationsTermsAggregateBase = z.infer<typeof AggregationsTermsAggregateBase>

/** Result of a `terms` aggregation when the field is a string. */
export const AggregationsStringTermsAggregate = z.object({
  ...AggregationsTermsAggregateBase.shape
}).meta({ id: 'AggregationsStringTermsAggregate' })
export type AggregationsStringTermsAggregate = z.infer<typeof AggregationsStringTermsAggregate>

/** Result of a `terms` aggregation when the field is some kind of whole number like a integer, long, or a date. */
export const AggregationsLongTermsAggregate = z.object({
  ...AggregationsTermsAggregateBase.shape
}).meta({ id: 'AggregationsLongTermsAggregate' })
export type AggregationsLongTermsAggregate = z.infer<typeof AggregationsLongTermsAggregate>

/** Result of a `terms` aggregation when the field is some kind of decimal number like a float, double, or distance. */
export const AggregationsDoubleTermsAggregate = z.object({
  ...AggregationsTermsAggregateBase.shape
}).meta({ id: 'AggregationsDoubleTermsAggregate' })
export type AggregationsDoubleTermsAggregate = z.infer<typeof AggregationsDoubleTermsAggregate>

/** Result of a `terms` aggregation when the field is unmapped. `buckets` is always empty. */
export const AggregationsUnmappedTermsAggregate = z.object({
  ...AggregationsTermsAggregateBase.shape
}).meta({ id: 'AggregationsUnmappedTermsAggregate' })
export type AggregationsUnmappedTermsAggregate = z.infer<typeof AggregationsUnmappedTermsAggregate>

export const AggregationsMultiTermsAggregate = z.object({
  ...AggregationsTermsAggregateBase.shape
}).meta({ id: 'AggregationsMultiTermsAggregate' })
export type AggregationsMultiTermsAggregate = z.infer<typeof AggregationsMultiTermsAggregate>

/** Base type for single-bucket aggregation results that can hold sub-aggregations results. */
export const AggregationsSingleBucketAggregateBase = z.object({
  meta: z.lazy(() => Metadata).optional(),
  doc_count: z.lazy(() => long)
}).meta({ id: 'AggregationsSingleBucketAggregateBase' })
export type AggregationsSingleBucketAggregateBase = z.infer<typeof AggregationsSingleBucketAggregateBase>

export const AggregationsMissingAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  doc_count: z.lazy(() => long)
}).catchall(z.any()).meta({ id: 'AggregationsMissingAggregate' })
export type AggregationsMissingAggregate = z.infer<typeof AggregationsMissingAggregate>

export const AggregationsFilterAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  doc_count: z.lazy(() => long)
}).catchall(z.any()).meta({ id: 'AggregationsFilterAggregate' })
export type AggregationsFilterAggregate = z.infer<typeof AggregationsFilterAggregate>

export const AggregationsRangeAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  buckets: z.lazy(() => AggregationsBuckets)
}).meta({ id: 'AggregationsRangeAggregate' })
export type AggregationsRangeAggregate = z.infer<typeof AggregationsRangeAggregate>

/**
 * Result of a `date_range` aggregation. Same format as a for a `range` aggregation: `from` and `to`
 * in `buckets` are milliseconds since the Epoch, represented as a floating point number.
 */
export const AggregationsDateRangeAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  buckets: z.lazy(() => AggregationsBuckets)
}).meta({ id: 'AggregationsDateRangeAggregate' })
export type AggregationsDateRangeAggregate = z.infer<typeof AggregationsDateRangeAggregate>

export const AggregationsFiltersAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  buckets: z.lazy(() => AggregationsBuckets)
}).meta({ id: 'AggregationsFiltersAggregate' })
export type AggregationsFiltersAggregate = z.infer<typeof AggregationsFiltersAggregate>

export const AggregationsCompositeAggregate = z.object({
  meta: z.lazy(() => Metadata).optional(),
  buckets: z.lazy(() => AggregationsBuckets),
  after_key: z.lazy(() => AggregationsCompositeAggregateKey).optional()
}).meta({ id: 'AggregationsCompositeAggregate' })
export type AggregationsCompositeAggregate = z.infer<typeof AggregationsCompositeAggregate>

export const SecurityQueryApiKeysApiKeyAggregate = z.union([z.lazy(() => AggregationsCardinalityAggregate), z.lazy(() => AggregationsValueCountAggregate), z.lazy(() => AggregationsStringTermsAggregate), z.lazy(() => AggregationsLongTermsAggregate), z.lazy(() => AggregationsDoubleTermsAggregate), z.lazy(() => AggregationsUnmappedTermsAggregate), z.lazy(() => AggregationsMultiTermsAggregate), z.lazy(() => AggregationsMissingAggregate), z.lazy(() => AggregationsFilterAggregate), z.lazy(() => AggregationsFiltersAggregate), z.lazy(() => AggregationsRangeAggregate), z.lazy(() => AggregationsDateRangeAggregate), z.lazy(() => AggregationsCompositeAggregate)]).meta({ id: 'SecurityQueryApiKeysApiKeyAggregate' })
export type SecurityQueryApiKeysApiKeyAggregate = z.infer<typeof SecurityQueryApiKeysApiKeyAggregate>

const SecurityQueryApiKeysApiKeyQueryContainerExclusiveProps = z.union([z.object({ bool: z.lazy(() => QueryDslBoolQuery) }), z.object({ exists: z.lazy(() => QueryDslExistsQuery) }), z.object({ ids: z.lazy(() => QueryDslIdsQuery) }), z.object({ match: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslMatchQuery), z.union([z.string(), z.lazy(() => float), z.boolean()])])) }), z.object({ match_all: z.lazy(() => QueryDslMatchAllQuery) }), z.object({ prefix: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslPrefixQuery), z.string()])) }), z.object({ range: z.record(z.lazy(() => Field), z.lazy(() => QueryDslRangeQuery)) }), z.object({ simple_query_string: z.lazy(() => QueryDslSimpleQueryStringQuery) }), z.object({ term: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslTermQuery), z.lazy(() => FieldValue)])) }), z.object({ terms: z.lazy(() => QueryDslTermsQuery) }), z.object({ wildcard: z.record(z.lazy(() => Field), z.union([z.lazy(() => QueryDslWildcardQuery), z.string()])) })])

export const SecurityQueryApiKeysApiKeyQueryContainer = SecurityQueryApiKeysApiKeyQueryContainerExclusiveProps.meta({ id: 'SecurityQueryApiKeysApiKeyQueryContainer' })
export type SecurityQueryApiKeysApiKeyQueryContainer = z.infer<typeof SecurityQueryApiKeysApiKeyQueryContainer>

export const SecurityQueryApiKeysApiKeyFiltersAggregation = z.object({
  filters: z.lazy(() => AggregationsBuckets).describe('Collection of queries from which to build buckets.').optional(),
  other_bucket: z.boolean().describe('Set to `true` to add a bucket to the response which will contain all documents that do not match any of the given filters.').optional(),
  other_bucket_key: z.string().describe('The key with which the other bucket is returned.').optional(),
  keyed: z.boolean().describe('By default, the named filters aggregation returns the buckets as an object. Set to `false` to return the buckets as an array of objects.').optional()
}).meta({ id: 'SecurityQueryApiKeysApiKeyFiltersAggregation' })
export type SecurityQueryApiKeysApiKeyFiltersAggregation = z.infer<typeof SecurityQueryApiKeysApiKeyFiltersAggregation>

const SecurityQueryApiKeysApiKeyAggregationContainerCommonProps = z.object({
  aggregations: z.record(z.string(), z.lazy(() => SecurityQueryApiKeysApiKeyAggregationContainer)).describe('Sub-aggregations for this aggregation. Only applies to bucket aggregations.').optional(),
  aggs: z.record(z.string(), z.lazy(() => SecurityQueryApiKeysApiKeyAggregationContainer)).describe('Sub-aggregations for this aggregation. Only applies to bucket aggregations.').optional(),
  meta: z.lazy(() => Metadata).optional()
})

const SecurityQueryApiKeysApiKeyAggregationContainerExclusiveProps = z.union([z.object({ cardinality: z.lazy(() => AggregationsCardinalityAggregation) }), z.object({ composite: z.lazy(() => AggregationsCompositeAggregation) }), z.object({ date_range: z.lazy(() => AggregationsDateRangeAggregation) }), z.object({ filter: SecurityQueryApiKeysApiKeyQueryContainer }), z.object({ filters: SecurityQueryApiKeysApiKeyFiltersAggregation }), z.object({ missing: z.lazy(() => AggregationsMissingAggregation) }), z.object({ range: z.lazy(() => AggregationsRangeAggregation) }), z.object({ terms: z.lazy(() => AggregationsTermsAggregation) }), z.object({ value_count: z.lazy(() => AggregationsValueCountAggregation) })])

export interface SecurityQueryApiKeysApiKeyAggregationContainerShape {
  aggregations?: Record<string, SecurityQueryApiKeysApiKeyAggregationContainerShape> | undefined
  meta?: Metadata | undefined
  cardinality?: AggregationsCardinalityAggregation | undefined
  composite?: AggregationsCompositeAggregation | undefined
  date_range?: AggregationsDateRangeAggregation | undefined
  filter?: SecurityQueryApiKeysApiKeyQueryContainer | undefined
  filters?: SecurityQueryApiKeysApiKeyFiltersAggregation | undefined
  missing?: AggregationsMissingAggregation | undefined
  range?: AggregationsRangeAggregation | undefined
  terms?: AggregationsTermsAggregation | undefined
  value_count?: AggregationsValueCountAggregation | undefined
}
export const SecurityQueryApiKeysApiKeyAggregationContainer: z.ZodType<SecurityQueryApiKeysApiKeyAggregationContainerShape> = SecurityQueryApiKeysApiKeyAggregationContainerCommonProps.and(SecurityQueryApiKeysApiKeyAggregationContainerExclusiveProps).meta({ id: 'SecurityQueryApiKeysApiKeyAggregationContainer' })
export type SecurityQueryApiKeysApiKeyAggregationContainer = z.infer<typeof SecurityQueryApiKeysApiKeyAggregationContainer>

/**
 * Find API keys with a query.
 *
 * Get a paginated list of API keys and their information.
 * You can optionally filter the results with a query.
 *
 * To use this API, you must have at least the `manage_own_api_key` or the `read_security` cluster privileges.
 * If you have only the `manage_own_api_key` privilege, this API returns only the API keys that you own.
 * If you have the `read_security`, `manage_api_key`, or greater privileges (including `manage_security`), this API returns all API keys regardless of ownership.
 * Refer to the linked documentation for examples of how to find API keys:
 */
export const SecurityQueryApiKeysRequest = z.object({
  with_limited_by: z.boolean().describe('Return the snapshot of the owner user\'s role descriptors associated with the API key. An API key\'s actual permission is the intersection of its assigned role descriptors and the owner user\'s role descriptors (effectively limited by it). An API key cannot retrieve any API key’s limited-by role descriptors (including itself) unless it has `manage_api_key` or higher privileges.').optional().meta({ found_in: 'query' }),
  with_profile_uid: z.boolean().describe('Determines whether to also retrieve the profile UID for the API key owner principal. If it exists, the profile UID is returned under the `profile_uid` response field for each API key.').optional().meta({ found_in: 'query' }),
  typed_keys: z.boolean().describe('Determines whether aggregation names are prefixed by their respective types in the response.').optional().meta({ found_in: 'query' }),
  aggregations: z.record(z.string(), z.lazy(() => SecurityQueryApiKeysApiKeyAggregationContainer)).describe('Any aggregations to run over the corpus of returned API keys. Aggregations and queries work together. Aggregations are computed only on the API keys that match the query. This supports only a subset of aggregation types, namely: `terms`, `range`, `date_range`, `missing`, `cardinality`, `value_count`, `composite`, `filter`, and `filters`. Additionally, aggregations only run over the same subset of fields that query works with.').optional().meta({ found_in: 'body' }),
  aggs: z.record(z.string(), z.lazy(() => SecurityQueryApiKeysApiKeyAggregationContainer)).describe('Any aggregations to run over the corpus of returned API keys. Aggregations and queries work together. Aggregations are computed only on the API keys that match the query. This supports only a subset of aggregation types, namely: `terms`, `range`, `date_range`, `missing`, `cardinality`, `value_count`, `composite`, `filter`, and `filters`. Additionally, aggregations only run over the same subset of fields that query works with.').optional(),
  query: SecurityQueryApiKeysApiKeyQueryContainer.describe('A query to filter which API keys to return. If the query parameter is missing, it is equivalent to a `match_all` query. The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`, `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`. You can query the following public information associated with an API key: `id`, `type`, `name`, `creation`, `expiration`, `invalidated`, `invalidation`, `username`, `realm`, and `metadata`. NOTE: The queryable string values associated with API keys are internally mapped as keywords. Consequently, if no `analyzer` parameter is specified for a `match` query, then the provided match query string is interpreted as a single keyword value. Such a match query is hence equivalent to a `term` query.').optional().meta({ found_in: 'body' }),
  from: z.lazy(() => integer).describe('The starting document offset. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  sort: z.lazy(() => Sort).describe('The sort definition. Other than `id`, all public fields of an API key are eligible for sorting. In addition, sort can also be applied to the `_doc` field to sort by index order.').optional().meta({ found_in: 'body' }),
  size: z.lazy(() => integer).describe('The number of hits to return. It must not be negative. The `size` parameter can be set to `0`, in which case no API key matches are returned, only the aggregation results. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional().meta({ found_in: 'body' }),
  search_after: z.lazy(() => SortResults).describe('The search after definition.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityQueryApiKeysRequest' })
export type SecurityQueryApiKeysRequest = z.infer<typeof SecurityQueryApiKeysRequest>

export const SecurityQueryApiKeysResponse = z.object({
  total: z.lazy(() => integer).describe('The total number of API keys found.'),
  count: z.lazy(() => integer).describe('The number of API keys returned in the response.'),
  api_keys: z.array(z.lazy(() => SecurityApiKey)).describe('A list of API key information.'),
  aggregations: z.record(z.lazy(() => AggregateName), SecurityQueryApiKeysApiKeyAggregate).describe('The aggregations result, if requested.').optional()
}).meta({ id: 'SecurityQueryApiKeysResponse' })
export type SecurityQueryApiKeysResponse = z.infer<typeof SecurityQueryApiKeysResponse>
