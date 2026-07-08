/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const SearchBoundaryScanner = z.enum(['chars', 'sentence', 'word']).meta({ id: 'SearchBoundaryScanner' });
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export const Field = z.string().meta({ id: 'Field' });
export const Name = z.string().meta({ id: 'Name' });
export const integer = z.number().meta({ id: 'integer' });
/** A reference to a field with formatting instructions on how to return the value */
export const QueryDslFieldAndFormat = z.object({
    field: Field.describe('A wildcard pattern. The request returns values for field names matching this pattern.'),
    format: z.string().describe('The format in which the values are returned.').optional(),
    include_unmapped: z.boolean().optional()
}).meta({ id: 'QueryDslFieldAndFormat' });
export const SearchHighlighterType = z.union([z.enum(['plain', 'fvh', 'unified']), z.string()]).meta({ id: 'SearchHighlighterType' });
export const SearchHighlighterFragmenter = z.enum(['simple', 'span']).meta({ id: 'SearchHighlighterFragmenter' });
export const float = z.number().meta({ id: 'float' });
export const QueryDslQueryBase = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional()
}).meta({ id: 'QueryDslQueryBase' });
/** The minimum number of terms that should match as integer, percentage or range */
export const MinimumShouldMatch = z.union([integer, z.string()]).meta({ id: 'MinimumShouldMatch' });
export const QueryDslBoolQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('The clause (query) must appear in matching documents. However, unlike `must`, the score of the query will be ignored.').optional(); },
    minimum_should_match: MinimumShouldMatch.describe('Specifies the number or percentage of `should` clauses returned documents must match.').optional(),
    get must() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('The clause (query) must appear in matching documents and will contribute to the score.').optional(); },
    get must_not() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('The clause (query) must not appear in the matching documents. Because scoring is ignored, a score of `0` is returned for all documents.').optional(); },
    get should() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('The clause (query) should appear in the matching document.').optional(); }
}).meta({ id: 'QueryDslBoolQuery' });
export const double = z.number().meta({ id: 'double' });
export const QueryDslBoostingQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    negative_boost: double.describe('Floating point number between 0 and 1.0 used to decrease the relevance scores of documents matching the `negative` query.'),
    get negative() { return QueryDslQueryContainer.describe('Query used to decrease the relevance score of matching documents.'); },
    get positive() { return QueryDslQueryContainer.describe('Any returned documents must match this query.'); }
}).meta({ id: 'QueryDslBoostingQuery' });
export const QueryDslOperator = z.enum(['and', 'AND', 'or', 'OR']).meta({ id: 'QueryDslOperator' });
export const QueryDslCommonTermsQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().optional(),
    cutoff_frequency: double.optional(),
    high_freq_operator: QueryDslOperator.optional(),
    low_freq_operator: QueryDslOperator.optional(),
    minimum_should_match: MinimumShouldMatch.optional(),
    query: z.string()
}).meta({ id: 'QueryDslCommonTermsQuery' });
export const QueryDslCombinedFieldsOperator = z.enum(['or', 'and']).meta({ id: 'QueryDslCombinedFieldsOperator' });
export const QueryDslCombinedFieldsZeroTerms = z.enum(['none', 'all']).meta({ id: 'QueryDslCombinedFieldsZeroTerms' });
export const QueryDslCombinedFieldsQuery = z.object({
    ...QueryDslQueryBase.shape,
    fields: z.array(Field).describe('List of fields to search. Field wildcard patterns are allowed. Only `text` fields are supported, and they must all have the same search `analyzer`.'),
    query: z.string().describe('Text to search for in the provided `fields`. The `combined_fields` query analyzes the provided text before performing a search.'),
    auto_generate_synonyms_phrase_query: z.boolean().describe('If true, match phrase queries are automatically created for multi-term synonyms.').optional(),
    operator: QueryDslCombinedFieldsOperator.describe('Boolean logic used to interpret text in the query value.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('Minimum number of clauses that must match for a document to be returned.').optional(),
    zero_terms_query: QueryDslCombinedFieldsZeroTerms.describe('Indicates whether no documents are returned if the analyzer removes all tokens, such as when using a `stop` filter.').optional()
}).meta({ id: 'QueryDslCombinedFieldsQuery' });
export const QueryDslConstantScoreQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get filter() { return QueryDslQueryContainer.describe('Filter query you wish to run. Any returned documents must match this query. Filter queries do not calculate relevance scores. To speed up performance, Elasticsearch automatically caches frequently used filter queries.'); }
}).meta({ id: 'QueryDslConstantScoreQuery' });
export const QueryDslDisMaxQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get queries() { return QueryDslQueryContainer.array().describe('One or more query clauses. Returned documents must match one or more of these queries. If a document matches multiple queries, Elasticsearch uses the highest relevance score.'); },
    tie_breaker: double.describe('Floating point number between 0 and 1.0 used to increase the relevance scores of documents matching multiple query clauses.').optional()
}).meta({ id: 'QueryDslDisMaxQuery' });
export const QueryDslDistanceFeatureQueryBase = z.object({
    ...QueryDslQueryBase.shape,
    origin: z.any().describe('Date or point of origin used to calculate distances. If the `field` value is a `date` or `date_nanos` field, the `origin` value must be a date. Date Math, such as `now-1h`, is supported. If the field value is a `geo_point` field, the `origin` value must be a geopoint.'),
    pivot: z.any().describe('Distance from the `origin` at which relevance scores receive half of the `boost` value. If the `field` value is a `date` or `date_nanos` field, the `pivot` value must be a time unit, such as `1h` or `10d`. If the `field` value is a `geo_point` field, the `pivot` value must be a distance unit, such as `1km` or `12m`.'),
    field: Field.describe('Name of the field used to calculate distances. This field must meet the following criteria: be a `date`, `date_nanos` or `geo_point` field; have an `index` mapping parameter value of `true`, which is the default; have an `doc_values` mapping parameter value of `true`, which is the default.')
}).meta({ id: 'QueryDslDistanceFeatureQueryBase' });
export const QueryDslUntypedDistanceFeatureQuery = z.object({
    ...QueryDslDistanceFeatureQueryBase.shape
}).meta({ id: 'QueryDslUntypedDistanceFeatureQuery' });
export const QueryDslGeoDistanceFeatureQuery = z.object({
    ...QueryDslDistanceFeatureQueryBase.shape
}).meta({ id: 'QueryDslGeoDistanceFeatureQuery' });
export const QueryDslDateDistanceFeatureQuery = z.object({
    ...QueryDslDistanceFeatureQueryBase.shape
}).meta({ id: 'QueryDslDateDistanceFeatureQuery' });
export const QueryDslDistanceFeatureQuery = z.union([QueryDslUntypedDistanceFeatureQuery, QueryDslGeoDistanceFeatureQuery, QueryDslDateDistanceFeatureQuery]).meta({ id: 'QueryDslDistanceFeatureQuery' });
export const QueryDslExistsQuery = z.object({
    ...QueryDslQueryBase.shape,
    field: Field.describe('Name of the field you wish to search.')
}).meta({ id: 'QueryDslExistsQuery' });
export const QueryDslFunctionBoostMode = z.enum(['multiply', 'replace', 'sum', 'avg', 'max', 'min']).meta({ id: 'QueryDslFunctionBoostMode' });
export const QueryDslMultiValueMode = z.enum(['min', 'max', 'avg', 'sum']).meta({ id: 'QueryDslMultiValueMode' });
export const QueryDslDecayFunctionBase = z.object({
    multi_value_mode: QueryDslMultiValueMode.describe('Determines how the distance is calculated when a field used for computing the decay contains multiple values.').optional()
}).meta({ id: 'QueryDslDecayFunctionBase' });
export const QueryDslUntypedDecayFunction = z.object({
    multi_value_mode: QueryDslMultiValueMode.describe('Determines how the distance is calculated when a field used for computing the decay contains multiple values.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslUntypedDecayFunction' });
export const QueryDslDateDecayFunction = z.object({
    multi_value_mode: QueryDslMultiValueMode.describe('Determines how the distance is calculated when a field used for computing the decay contains multiple values.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslDateDecayFunction' });
export const QueryDslNumericDecayFunction = z.object({
    multi_value_mode: QueryDslMultiValueMode.describe('Determines how the distance is calculated when a field used for computing the decay contains multiple values.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslNumericDecayFunction' });
export const QueryDslGeoDecayFunction = z.object({
    multi_value_mode: QueryDslMultiValueMode.describe('Determines how the distance is calculated when a field used for computing the decay contains multiple values.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslGeoDecayFunction' });
export const QueryDslDecayFunction = z.union([QueryDslUntypedDecayFunction, QueryDslDateDecayFunction, QueryDslNumericDecayFunction, QueryDslGeoDecayFunction]).meta({ id: 'QueryDslDecayFunction' });
export const QueryDslFieldValueFactorModifier = z.enum(['none', 'log', 'log1p', 'log2p', 'ln', 'ln1p', 'ln2p', 'square', 'sqrt', 'reciprocal']).meta({ id: 'QueryDslFieldValueFactorModifier' });
export const QueryDslFieldValueFactorScoreFunction = z.object({
    field: Field.describe('Field to be extracted from the document.'),
    factor: double.describe('Optional factor to multiply the field value with.').optional(),
    missing: double.describe('Value used if the document doesn’t have that field. The modifier and factor are still applied to it as though it were read from the document.').optional(),
    modifier: QueryDslFieldValueFactorModifier.describe('Modifier to apply to the field value.').optional()
}).meta({ id: 'QueryDslFieldValueFactorScoreFunction' });
export const long = z.number().meta({ id: 'long' });
export const QueryDslRandomScoreFunction = z.object({
    field: Field.optional(),
    seed: z.union([long, z.string()]).optional()
}).meta({ id: 'QueryDslRandomScoreFunction' });
export const Metadata = z.record(z.string(), z.any()).meta({ id: 'Metadata' });
export const AggregationsAggregation = z.object({}).meta({ id: 'AggregationsAggregation' });
/** Base type for bucket aggregations. These aggregations also accept sub-aggregations. */
export const AggregationsBucketAggregationBase = z.object({}).meta({ id: 'AggregationsBucketAggregationBase' });
export const AggregationsAdjacencyMatrixAggregation = z.object({
    get filters() { return z.record(z.string(), QueryDslQueryContainer).describe('Filters used to create buckets. At least one filter is required.').optional(); },
    separator: z.string().describe('Separator used to concatenate filter names. Defaults to &.').optional()
}).meta({ id: 'AggregationsAdjacencyMatrixAggregation' });
export const AggregationsMinimumInterval = z.enum(['second', 'minute', 'hour', 'day', 'month', 'year']).meta({ id: 'AggregationsMinimumInterval' });
export const EpochTime = z.any().meta({ id: 'EpochTime' });
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export const DateTime = z.union([z.string(), EpochTime]).meta({ id: 'DateTime' });
export const TimeZone = z.string().meta({ id: 'TimeZone' });
export const AggregationsAutoDateHistogramAggregation = z.object({
    buckets: integer.describe('The target number of buckets.').optional(),
    field: Field.describe('The field on which to run the aggregation.').optional(),
    format: z.string().describe('The date format used to format `key_as_string` in the response. If no `format` is specified, the first date format specified in the field mapping is used.').optional(),
    minimum_interval: z.union([AggregationsMinimumInterval, z.null()]).describe('The minimum rounding interval. This can make the collection process more efficient, as the aggregation will not attempt to round at any interval lower than `minimum_interval`.').optional(),
    missing: DateTime.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    offset: z.string().describe('Time zone specified as a ISO 8601 UTC offset.').optional(),
    params: z.record(z.string(), z.any()).optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    time_zone: TimeZone.describe('Time zone ID.').optional()
}).meta({ id: 'AggregationsAutoDateHistogramAggregation' });
export const AggregationsMissing = z.union([z.string(), integer, double, z.boolean()]).meta({ id: 'AggregationsMissing' });
export const AggregationsMetricAggregationBase = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); }
}).meta({ id: 'AggregationsMetricAggregationBase' });
export const AggregationsFormatMetricAggregationBase = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsFormatMetricAggregationBase' });
export const AggregationsAverageAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsAverageAggregation' });
/**
 * Buckets path can be expressed in different ways, and an aggregation may accept some or all of these
 * forms depending on its type. Please refer to each aggregation's documentation to know what buckets
 * path forms they accept.
 */
export const AggregationsBucketsPath = z.union([z.string(), z.array(z.string()), z.record(z.string(), z.string())]).meta({ id: 'AggregationsBucketsPath' });
export const AggregationsBucketPathAggregation = z.object({
    buckets_path: AggregationsBucketsPath.describe('Path to the buckets that contain one set of values to correlate.').optional()
}).meta({ id: 'AggregationsBucketPathAggregation' });
export const AggregationsGapPolicy = z.enum(['skip', 'insert_zeros', 'keep_values']).meta({ id: 'AggregationsGapPolicy' });
export const AggregationsPipelineAggregationBase = z.object({
    ...AggregationsBucketPathAggregation.shape,
    format: z.string().describe('`DecimalFormat` pattern for the output value. If specified, the formatted value is returned in the aggregation’s `value_as_string` property.').optional(),
    gap_policy: AggregationsGapPolicy.describe('Policy to apply when gaps are found in the data.').optional()
}).meta({ id: 'AggregationsPipelineAggregationBase' });
export const AggregationsAverageBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsAverageBucketAggregation' });
export const AggregationsTDigestExecutionHint = z.enum(['default', 'high_accuracy']).meta({ id: 'AggregationsTDigestExecutionHint' });
export const AggregationsBoxplotAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    compression: double.describe('Limits the maximum number of nodes used by the underlying TDigest algorithm to `20 * compression`, enabling control of memory usage and approximation error.').optional(),
    execution_hint: AggregationsTDigestExecutionHint.describe('The default implementation of TDigest is optimized for performance, scaling to millions or even billions of sample values while maintaining acceptable accuracy levels (close to 1% relative error for millions of samples in some cases). To use an implementation optimized for accuracy, set this parameter to high_accuracy instead.').optional()
}).meta({ id: 'AggregationsBoxplotAggregation' });
export const AggregationsBucketScriptAggregation = z.object({
    buckets_path: AggregationsBucketsPath.describe('Path to the buckets that contain one set of values to correlate.').optional(),
    format: z.string().describe('`DecimalFormat` pattern for the output value. If specified, the formatted value is returned in the aggregation’s `value_as_string` property.').optional(),
    gap_policy: AggregationsGapPolicy.describe('Policy to apply when gaps are found in the data.').optional(),
    get script() { return z.union([Script, ScriptSource]).describe('The script to run for this aggregation.').optional(); }
}).meta({ id: 'AggregationsBucketScriptAggregation' });
export const AggregationsBucketSelectorAggregation = z.object({
    buckets_path: AggregationsBucketsPath.describe('Path to the buckets that contain one set of values to correlate.').optional(),
    format: z.string().describe('`DecimalFormat` pattern for the output value. If specified, the formatted value is returned in the aggregation’s `value_as_string` property.').optional(),
    gap_policy: AggregationsGapPolicy.describe('Policy to apply when gaps are found in the data.').optional(),
    get script() { return z.union([Script, ScriptSource]).describe('The script to run for this aggregation.').optional(); }
}).meta({ id: 'AggregationsBucketSelectorAggregation' });
export const SortOrder = z.enum(['asc', 'desc']).meta({ id: 'SortOrder' });
export const ScoreSort = z.object({
    order: SortOrder.optional()
}).meta({ id: 'ScoreSort' });
export const SortMode = z.enum(['min', 'max', 'sum', 'avg', 'median']).meta({ id: 'SortMode' });
export const GeoDistanceType = z.enum(['arc', 'plane']).meta({ id: 'GeoDistanceType' });
export const DistanceUnit = z.enum(['in', 'ft', 'yd', 'mi', 'nmi', 'km', 'm', 'cm', 'mm']).meta({ id: 'DistanceUnit' });
export const NestedSortValue = z.object({
    get filter() { return QueryDslQueryContainer.optional(); },
    max_children: integer.optional(),
    get nested() { return NestedSortValue.optional(); },
    path: Field
}).meta({ id: 'NestedSortValue' });
export const GeoDistanceSort = z.looseObject({
    mode: SortMode.optional(),
    distance_type: GeoDistanceType.optional(),
    ignore_unmapped: z.boolean().optional(),
    order: SortOrder.optional(),
    unit: DistanceUnit.optional(),
    get nested() { return NestedSortValue.optional(); }
}).meta({ id: 'GeoDistanceSort' });
export const ScriptSortType = z.enum(['string', 'number', 'version']).meta({ id: 'ScriptSortType' });
export const ScriptSort = z.object({
    order: SortOrder.optional(),
    get script() { return z.union([Script, ScriptSource]); },
    type: ScriptSortType.optional(),
    mode: SortMode.optional(),
    get nested() { return NestedSortValue.optional(); }
}).meta({ id: 'ScriptSort' });
export const SortOptions = z.looseObject({
    _score: ScoreSort.optional(),
    _doc: ScoreSort.optional(),
    get _geo_distance() { return GeoDistanceSort.optional(); },
    get _script() { return ScriptSort.optional(); }
}).meta({ id: 'SortOptions' });
export const SortCombinations = z.union([Field, z.lazy(() => SortOptions)]).meta({ id: 'SortCombinations' });
export const Sort = z.union([z.lazy(() => SortCombinations), z.array(z.lazy(() => SortCombinations))]).meta({ id: 'Sort' });
export const AggregationsBucketSortAggregation = z.object({
    from: integer.describe('Buckets in positions prior to `from` will be truncated.').optional(),
    gap_policy: AggregationsGapPolicy.describe('The policy to apply when gaps are found in the data.').optional(),
    size: integer.describe('The number of buckets to return. Defaults to all buckets of the parent aggregation.').optional(),
    get sort() { return Sort.describe('The list of fields to sort on.').optional(); }
}).meta({ id: 'AggregationsBucketSortAggregation' });
/**
 * A sibling pipeline aggregation which executes a two sample Kolmogorov–Smirnov test (referred
 * to as a "K-S test" from now on) against a provided distribution, and the distribution implied
 * by the documents counts in the configured sibling aggregation. Specifically, for some metric,
 * assuming that the percentile intervals of the metric are known beforehand or have been computed
 * by an aggregation, then one would use range aggregation for the sibling to compute the p-value
 * of the distribution difference between the metric and the restriction of that metric to a subset
 * of the documents. A natural use case is if the sibling aggregation range aggregation nested in a
 * terms aggregation, in which case one compares the overall distribution of metric to its restriction
 * to each term.
 */
export const AggregationsBucketKsAggregation = z.object({
    ...AggregationsBucketPathAggregation.shape,
    alternative: z.array(z.string()).describe('A list of string values indicating which K-S test alternative to calculate. The valid values are: "greater", "less", "two_sided". This parameter is key for determining the K-S statistic used when calculating the K-S test. Default value is all possible alternative hypotheses.').optional(),
    fractions: z.array(double).describe('A list of doubles indicating the distribution of the samples with which to compare to the `buckets_path` results. In typical usage this is the overall proportion of documents in each bucket, which is compared with the actual document proportions in each bucket from the sibling aggregation counts. The default is to assume that overall documents are uniformly distributed on these buckets, which they would be if one used equal percentiles of a metric to define the bucket end points.').optional(),
    sampling_method: z.string().describe('Indicates the sampling methodology when calculating the K-S test. Note, this is sampling of the returned values. This determines the cumulative distribution function (CDF) points used comparing the two samples. Default is `upper_tail`, which emphasizes the upper end of the CDF points. Valid options are: `upper_tail`, `uniform`, and `lower_tail`.').optional()
}).meta({ id: 'AggregationsBucketKsAggregation' });
export const AggregationsBucketCorrelationFunctionCountCorrelationIndicator = z.object({
    doc_count: integer.describe('The total number of documents that initially created the expectations. It’s required to be greater than or equal to the sum of all values in the buckets_path as this is the originating superset of data to which the term values are correlated.'),
    expectations: z.array(double).describe('An array of numbers with which to correlate the configured `bucket_path` values. The length of this value must always equal the number of buckets returned by the `bucket_path`.'),
    fractions: z.array(double).describe('An array of fractions to use when averaging and calculating variance. This should be used if the pre-calculated data and the buckets_path have known gaps. The length of fractions, if provided, must equal expectations.').optional()
}).meta({ id: 'AggregationsBucketCorrelationFunctionCountCorrelationIndicator' });
export const AggregationsBucketCorrelationFunctionCountCorrelation = z.object({
    indicator: AggregationsBucketCorrelationFunctionCountCorrelationIndicator.describe('The indicator with which to correlate the configured `bucket_path` values.')
}).meta({ id: 'AggregationsBucketCorrelationFunctionCountCorrelation' });
export const AggregationsBucketCorrelationFunction = z.object({
    count_correlation: AggregationsBucketCorrelationFunctionCountCorrelation.describe('The configuration to calculate a count correlation. This function is designed for determining the correlation of a term value and a given metric.')
}).meta({ id: 'AggregationsBucketCorrelationFunction' });
/** A sibling pipeline aggregation which executes a correlation function on the configured sibling multi-bucket aggregation. */
export const AggregationsBucketCorrelationAggregation = z.object({
    ...AggregationsBucketPathAggregation.shape,
    function: AggregationsBucketCorrelationFunction.describe('The correlation function to execute.')
}).meta({ id: 'AggregationsBucketCorrelationAggregation' });
export const AggregationsCardinalityExecutionMode = z.enum(['global_ordinals', 'segment_ordinals', 'direct', 'save_memory_heuristic', 'save_time_heuristic']).meta({ id: 'AggregationsCardinalityExecutionMode' });
export const AggregationsCardinalityAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    precision_threshold: integer.describe('A unique count below which counts are expected to be close to accurate. This allows to trade memory for accuracy.').optional(),
    rehash: z.boolean().optional(),
    execution_hint: AggregationsCardinalityExecutionMode.describe('Mechanism by which cardinality aggregations is run.').optional()
}).meta({ id: 'AggregationsCardinalityAggregation' });
export const AggregationsCartesianBoundsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); }
}).meta({ id: 'AggregationsCartesianBoundsAggregation' });
export const AggregationsCartesianCentroidAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); }
}).meta({ id: 'AggregationsCartesianCentroidAggregation' });
export const AggregationsCustomCategorizeTextAnalyzer = z.object({
    char_filter: z.array(z.string()).optional(),
    tokenizer: z.string().optional(),
    filter: z.array(z.string()).optional()
}).meta({ id: 'AggregationsCustomCategorizeTextAnalyzer' });
export const AggregationsCategorizeTextAnalyzer = z.union([z.string(), AggregationsCustomCategorizeTextAnalyzer]).meta({ id: 'AggregationsCategorizeTextAnalyzer' });
/**
 * A multi-bucket aggregation that groups semi-structured text into buckets. Each text
 * field is re-analyzed using a custom analyzer. The resulting tokens are then categorized
 * creating buckets of similarly formatted text values. This aggregation works best with machine
 * generated text like system logs. Only the first 100 analyzed tokens are used to categorize the text.
 */
export const AggregationsCategorizeTextAggregation = z.object({
    field: Field.describe('The semi-structured text field to categorize.'),
    max_unique_tokens: integer.describe('The maximum number of unique tokens at any position up to max_matched_tokens. Must be larger than 1. Smaller values use less memory and create fewer categories. Larger values will use more memory and create narrower categories. Max allowed value is 100.').optional(),
    max_matched_tokens: integer.describe('The maximum number of token positions to match on before attempting to merge categories. Larger values will use more memory and create narrower categories. Max allowed value is 100.').optional(),
    similarity_threshold: integer.describe('The minimum percentage of tokens that must match for text to be added to the category bucket. Must be between 1 and 100. The larger the value the narrower the categories. Larger values will increase memory usage and create narrower categories.').optional(),
    categorization_filters: z.array(z.string()).describe('This property expects an array of regular expressions. The expressions are used to filter out matching sequences from the categorization field values. You can use this functionality to fine tune the categorization by excluding sequences from consideration when categories are defined. For example, you can exclude SQL statements that appear in your log files. This property cannot be used at the same time as categorization_analyzer. If you only want to define simple regular expression filters that are applied prior to tokenization, setting this property is the easiest method. If you also want to customize the tokenizer or post-tokenization filtering, use the categorization_analyzer property instead and include the filters as pattern_replace character filters.').optional(),
    categorization_analyzer: AggregationsCategorizeTextAnalyzer.describe('The categorization analyzer specifies how the text is analyzed and tokenized before being categorized. The syntax is very similar to that used to define the analyzer in the analyze API. This property cannot be used at the same time as `categorization_filters`.').optional(),
    shard_size: integer.describe('The number of categorization buckets to return from each shard before merging all the results.').optional(),
    size: integer.describe('The number of buckets to return.').optional(),
    min_doc_count: integer.describe('The minimum number of documents in a bucket to be returned to the results.').optional(),
    shard_min_doc_count: integer.describe('The minimum number of documents in a bucket to be returned from the shard before merging.').optional()
}).meta({ id: 'AggregationsCategorizeTextAggregation' });
export const AggregationsChangePointAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsChangePointAggregation' });
export const RelationName = z.string().meta({ id: 'RelationName' });
export const AggregationsChildrenAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    type: RelationName.describe('The child type that should be selected.').optional()
}).meta({ id: 'AggregationsChildrenAggregation' });
/** A field value. */
export const FieldValue = z.union([long, double, z.string(), z.boolean(), z.null()]).meta({ id: 'FieldValue' });
export const AggregationsCompositeAggregateKey = z.record(Field, FieldValue).meta({ id: 'AggregationsCompositeAggregateKey' });
export const AggregationsMissingOrder = z.enum(['first', 'last', 'default']).meta({ id: 'AggregationsMissingOrder' });
export const AggregationsValueType = z.enum(['string', 'long', 'double', 'number', 'date', 'date_nanos', 'ip', 'numeric', 'geo_point', 'boolean']).meta({ id: 'AggregationsValueType' });
export const AggregationsCompositeAggregationBase = z.object({
    field: Field.describe('Either `field` or `script` must be present').optional(),
    missing_bucket: z.boolean().optional(),
    missing_order: AggregationsMissingOrder.optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional(); },
    value_type: AggregationsValueType.optional(),
    order: SortOrder.optional()
}).meta({ id: 'AggregationsCompositeAggregationBase' });
export const AggregationsCompositeTermsAggregation = z.object({
    field: Field.describe('Either `field` or `script` must be present').optional(),
    missing_bucket: z.boolean().optional(),
    missing_order: AggregationsMissingOrder.optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional(); },
    value_type: AggregationsValueType.optional(),
    order: SortOrder.optional()
}).meta({ id: 'AggregationsCompositeTermsAggregation' });
export const AggregationsCompositeHistogramAggregation = z.object({
    field: Field.describe('Either `field` or `script` must be present').optional(),
    missing_bucket: z.boolean().optional(),
    missing_order: AggregationsMissingOrder.optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional(); },
    value_type: AggregationsValueType.optional(),
    order: SortOrder.optional(),
    interval: double
}).meta({ id: 'AggregationsCompositeHistogramAggregation' });
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export const DurationLarge = z.string().meta({ id: 'DurationLarge' });
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const AggregationsCompositeDateHistogramAggregation = z.object({
    field: Field.describe('Either `field` or `script` must be present').optional(),
    missing_bucket: z.boolean().optional(),
    missing_order: AggregationsMissingOrder.optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional(); },
    value_type: AggregationsValueType.optional(),
    order: SortOrder.optional(),
    format: z.string().optional(),
    calendar_interval: DurationLarge.describe('Either `calendar_interval` or `fixed_interval` must be present').optional(),
    fixed_interval: DurationLarge.describe('Either `calendar_interval` or `fixed_interval` must be present').optional(),
    offset: Duration.optional(),
    time_zone: TimeZone.optional()
}).meta({ id: 'AggregationsCompositeDateHistogramAggregation' });
export const CoordsGeoBounds = z.object({
    top: double,
    bottom: double,
    left: double,
    right: double
}).meta({ id: 'CoordsGeoBounds' });
export const LatLonGeoLocation = z.object({
    lat: double.describe('Latitude'),
    lon: double.describe('Longitude')
}).meta({ id: 'LatLonGeoLocation' });
export const GeoHash = z.string().meta({ id: 'GeoHash' });
export const GeoHashLocation = z.object({
    geohash: GeoHash
}).meta({ id: 'GeoHashLocation' });
/**
 * A latitude/longitude as a 2 dimensional point. It can be represented in various ways:
 * - as a `{lat, long}` object
 * - as a geo hash value
 * - as a `[lon, lat]` array
 * - as a string in `"<lat>, <lon>"` or WKT point formats
 */
export const GeoLocation = z.union([LatLonGeoLocation, GeoHashLocation, z.array(double), z.string()]).meta({ id: 'GeoLocation' });
export const TopLeftBottomRightGeoBounds = z.object({
    top_left: GeoLocation,
    bottom_right: GeoLocation
}).meta({ id: 'TopLeftBottomRightGeoBounds' });
export const TopRightBottomLeftGeoBounds = z.object({
    top_right: GeoLocation,
    bottom_left: GeoLocation
}).meta({ id: 'TopRightBottomLeftGeoBounds' });
export const WktGeoBounds = z.object({
    wkt: z.string()
}).meta({ id: 'WktGeoBounds' });
/**
 * A geo bounding box. It can be represented in various ways:
 * - as 4 top/bottom/left/right coordinates
 * - as 2 top_left / bottom_right points
 * - as 2 top_right / bottom_left points
 * - as a WKT bounding box
 */
export const GeoBounds = z.union([CoordsGeoBounds, TopLeftBottomRightGeoBounds, TopRightBottomLeftGeoBounds, WktGeoBounds]).meta({ id: 'GeoBounds' });
export const AggregationsCompositeGeoTileGridAggregation = z.object({
    field: Field.describe('Either `field` or `script` must be present').optional(),
    missing_bucket: z.boolean().optional(),
    missing_order: AggregationsMissingOrder.optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Either `field` or `script` must be present').optional(); },
    value_type: AggregationsValueType.optional(),
    order: SortOrder.optional(),
    precision: integer.optional(),
    bounds: GeoBounds.optional()
}).meta({ id: 'AggregationsCompositeGeoTileGridAggregation' });
const AggregationsCompositeAggregationSourceExclusiveProps = z.union([z.object({ terms: z.lazy(() => AggregationsCompositeTermsAggregation) }), z.object({ histogram: z.lazy(() => AggregationsCompositeHistogramAggregation) }), z.object({ date_histogram: z.lazy(() => AggregationsCompositeDateHistogramAggregation) }), z.object({ geotile_grid: z.lazy(() => AggregationsCompositeGeoTileGridAggregation) })]);
export const AggregationsCompositeAggregationSource = AggregationsCompositeAggregationSourceExclusiveProps.meta({ id: 'AggregationsCompositeAggregationSource' });
export const AggregationsCompositeAggregation = z.object({
    after: AggregationsCompositeAggregateKey.describe('When paginating, use the `after_key` value returned in the previous response to retrieve the next page.').optional(),
    size: integer.describe('The number of composite buckets that should be returned.').optional(),
    get sources() { return z.array(z.record(z.string(), AggregationsCompositeAggregationSource)).describe('The value sources used to build composite buckets. Keys are returned in the order of the `sources` definition.').optional(); }
}).meta({ id: 'AggregationsCompositeAggregation' });
export const AggregationsCumulativeCardinalityAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsCumulativeCardinalityAggregation' });
export const AggregationsCumulativeSumAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsCumulativeSumAggregation' });
export const AggregationsCalendarInterval = z.enum(['second', '1s', 'minute', '1m', 'hour', '1h', 'day', '1d', 'week', '1w', 'month', '1M', 'quarter', '1q', 'year', '1y']).meta({ id: 'AggregationsCalendarInterval' });
export const AggregationsExtendedBounds = z.object({
    max: z.any().describe('Maximum value for the bound.').optional(),
    min: z.any().describe('Minimum value for the bound.').optional()
}).meta({ id: 'AggregationsExtendedBounds' });
export const AggregationsAggregateOrder = z.union([z.record(Field, SortOrder), z.array(z.record(Field, SortOrder))]).meta({ id: 'AggregationsAggregateOrder' });
export const AggregationsDateHistogramAggregation = z.object({
    calendar_interval: AggregationsCalendarInterval.describe('Calendar-aware interval. Can be specified using the unit name, such as `month`, or as a single unit quantity, such as `1M`.').optional(),
    extended_bounds: AggregationsExtendedBounds.describe('Enables extending the bounds of the histogram beyond the data itself.').optional(),
    hard_bounds: AggregationsExtendedBounds.describe('Limits the histogram to specified bounds.').optional(),
    field: Field.describe('The date field whose values are use to build a histogram.').optional(),
    fixed_interval: Duration.describe('Fixed intervals: a fixed number of SI units and never deviate, regardless of where they fall on the calendar.').optional(),
    format: z.string().describe('The date format used to format `key_as_string` in the response. If no `format` is specified, the first date format specified in the field mapping is used.').optional(),
    interval: Duration.optional(),
    min_doc_count: integer.describe('Only returns buckets that have `min_doc_count` number of documents. By default, all buckets between the first bucket that matches documents and the last one are returned.').optional(),
    missing: DateTime.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    offset: Duration.describe('Changes the start value of each bucket by the specified positive (`+`) or negative offset (`-`) duration.').optional(),
    order: AggregationsAggregateOrder.describe('The sort order of the returned buckets.').optional(),
    params: z.record(z.string(), z.any()).optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    time_zone: TimeZone.describe('Time zone used for bucketing and rounding. Defaults to Coordinated Universal Time (UTC).').optional(),
    keyed: z.boolean().describe('Set to `true` to associate a unique string key with each bucket and return the ranges as a hash rather than an array.').optional()
}).meta({ id: 'AggregationsDateHistogramAggregation' });
export const DateMath = z.string().meta({ id: 'DateMath' });
/**
 * A date range limit, represented either as a DateMath expression or a number expressed
 * according to the target field's precision.
 */
export const AggregationsFieldDateMath = z.union([DateMath, long]).meta({ id: 'AggregationsFieldDateMath' });
export const AggregationsDateRangeExpression = z.object({
    from: AggregationsFieldDateMath.describe('Start of the range (inclusive).').optional(),
    key: z.string().describe('Custom key to return the range with.').optional(),
    to: AggregationsFieldDateMath.describe('End of the range (exclusive).').optional()
}).meta({ id: 'AggregationsDateRangeExpression' });
export const AggregationsDateRangeAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    field: Field.describe('The date field whose values are use to build ranges.').optional(),
    format: z.string().describe('The date format used to format `from` and `to` in the response.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    ranges: z.array(AggregationsDateRangeExpression).describe('Array of date ranges.').optional(),
    time_zone: TimeZone.describe('Time zone used to convert dates from another time zone to UTC.').optional(),
    keyed: z.boolean().describe('Set to `true` to associate a unique string key with each bucket and returns the ranges as a hash rather than an array.').optional()
}).meta({ id: 'AggregationsDateRangeAggregation' });
export const AggregationsDerivativeAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsDerivativeAggregation' });
export const AggregationsSamplerAggregationExecutionHint = z.enum(['map', 'global_ordinals', 'bytes_hash']).meta({ id: 'AggregationsSamplerAggregationExecutionHint' });
export const AggregationsDiversifiedSamplerAggregation = z.object({
    execution_hint: AggregationsSamplerAggregationExecutionHint.describe('The type of value used for de-duplication.').optional(),
    max_docs_per_value: integer.describe('Limits how many documents are permitted per choice of de-duplicating value.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    shard_size: integer.describe('Limits how many top-scoring documents are collected in the sample processed on each shard.').optional(),
    field: Field.describe('The field used to provide values used for de-duplication.').optional()
}).meta({ id: 'AggregationsDiversifiedSamplerAggregation' });
export const AggregationsExtendedStatsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional(),
    sigma: double.describe('The number of standard deviations above/below the mean to display.').optional()
}).meta({ id: 'AggregationsExtendedStatsAggregation' });
export const AggregationsExtendedStatsBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    sigma: double.describe('The number of standard deviations above/below the mean to display.').optional()
}).meta({ id: 'AggregationsExtendedStatsBucketAggregation' });
export const AggregationsTermsExclude = z.union([z.string(), z.array(z.string())]).meta({ id: 'AggregationsTermsExclude' });
export const AggregationsTermsPartition = z.object({
    num_partitions: long.describe('The number of partitions.'),
    partition: long.describe('The partition number for this request.')
}).meta({ id: 'AggregationsTermsPartition' });
export const AggregationsTermsInclude = z.union([z.string(), z.array(z.string()), AggregationsTermsPartition]).meta({ id: 'AggregationsTermsInclude' });
export const AggregationsFrequentItemSetsField = z.object({
    field: Field,
    exclude: AggregationsTermsExclude.describe('Values to exclude. Can be regular expression strings or arrays of strings of exact terms.').optional(),
    include: AggregationsTermsInclude.describe('Values to include. Can be regular expression strings or arrays of strings of exact terms.').optional()
}).meta({ id: 'AggregationsFrequentItemSetsField' });
export const AggregationsFrequentItemSetsAggregation = z.object({
    fields: z.array(AggregationsFrequentItemSetsField).describe('Fields to analyze.'),
    minimum_set_size: integer.describe('The minimum size of one item set.').optional(),
    minimum_support: double.describe('The minimum support of one item set.').optional(),
    size: integer.describe('The number of top item sets to return.').optional(),
    get filter() { return QueryDslQueryContainer.describe('Query that filters documents from analysis.').optional(); }
}).meta({ id: 'AggregationsFrequentItemSetsAggregation' });
/**
 * Aggregation buckets. By default they are returned as an array, but if the aggregation has keys configured for
 * the different buckets, the result is a dictionary.
 */
export const AggregationsBuckets = z.union([z.record(z.string(), z.any()), z.array(z.any())]).meta({ id: 'AggregationsBuckets' });
export const AggregationsFiltersAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    filters: AggregationsBuckets.describe('Collection of queries from which to build buckets.').optional(),
    other_bucket: z.boolean().describe('Set to `true` to add a bucket to the response which will contain all documents that do not match any of the given filters.').optional(),
    other_bucket_key: z.string().describe('The key with which the other bucket is returned.').optional(),
    keyed: z.boolean().describe('By default, the named filters aggregation returns the buckets as an object. Set to `false` to return the buckets as an array of objects.').optional()
}).meta({ id: 'AggregationsFiltersAggregation' });
export const AggregationsGeoBoundsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    wrap_longitude: z.boolean().describe('Specifies whether the bounding box should be allowed to overlap the international date line.').optional()
}).meta({ id: 'AggregationsGeoBoundsAggregation' });
export const AggregationsGeoCentroidAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    count: long.optional(),
    location: GeoLocation.optional()
}).meta({ id: 'AggregationsGeoCentroidAggregation' });
export const AggregationsAggregationRange = z.object({
    from: z.union([double, z.null()]).describe('Start of the range (inclusive).').optional(),
    key: z.string().describe('Custom key to return the range with.').optional(),
    to: z.union([double, z.null()]).describe('End of the range (exclusive).').optional()
}).meta({ id: 'AggregationsAggregationRange' });
export const AggregationsGeoDistanceAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    distance_type: GeoDistanceType.describe('The distance calculation type.').optional(),
    field: Field.describe('A field of type `geo_point` used to evaluate the distance.').optional(),
    origin: GeoLocation.describe('The origin  used to evaluate the distance.').optional(),
    ranges: z.array(AggregationsAggregationRange).describe('An array of ranges used to bucket documents.').optional(),
    unit: DistanceUnit.describe('The distance unit.').optional()
}).meta({ id: 'AggregationsGeoDistanceAggregation' });
/** A precision that can be expressed as a geohash length between 1 and 12, or a distance measure like "1km", "10m". */
export const GeoHashPrecision = z.union([integer, z.string()]).meta({ id: 'GeoHashPrecision' });
export const AggregationsGeoHashGridAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    bounds: GeoBounds.describe('The bounding box to filter the points in each bucket.').optional(),
    field: Field.describe('Field containing indexed `geo_point` or `geo_shape` values. If the field contains an array, `geohash_grid` aggregates all array values.').optional(),
    precision: GeoHashPrecision.describe('The string length of the geohashes used to define cells/buckets in the results.').optional(),
    shard_size: integer.describe('Allows for more accurate counting of the top cells returned in the final result the aggregation. Defaults to returning `max(10,(size x number-of-shards))` buckets from each shard.').optional(),
    size: integer.describe('The maximum number of geohash buckets to return.').optional()
}).meta({ id: 'AggregationsGeoHashGridAggregation' });
export const AggregationsGeoLinePoint = z.object({
    field: Field.describe('The name of the geo_point field.')
}).meta({ id: 'AggregationsGeoLinePoint' });
export const AggregationsGeoLineSort = z.object({
    field: Field.describe('The name of the numeric field to use as the sort key for ordering the points.')
}).meta({ id: 'AggregationsGeoLineSort' });
export const AggregationsGeoLineAggregation = z.object({
    point: AggregationsGeoLinePoint.describe('The name of the geo_point field.'),
    sort: AggregationsGeoLineSort.describe('The name of the numeric field to use as the sort key for ordering the points. When the `geo_line` aggregation is nested inside a `time_series` aggregation, this field defaults to `@timestamp`, and any other value will result in error.').optional(),
    include_sort: z.boolean().describe('When `true`, returns an additional array of the sort values in the feature properties.').optional(),
    sort_order: SortOrder.describe('The order in which the line is sorted (ascending or descending).').optional(),
    size: integer.describe('The maximum length of the line represented in the aggregation. Valid sizes are between 1 and 10000.').optional()
}).meta({ id: 'AggregationsGeoLineAggregation' });
export const GeoTilePrecision = integer.meta({ id: 'GeoTilePrecision' });
export const AggregationsGeoTileGridAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    field: Field.describe('Field containing indexed `geo_point` or `geo_shape` values. If the field contains an array, `geotile_grid` aggregates all array values.').optional(),
    precision: GeoTilePrecision.describe('Integer zoom of the key used to define cells/buckets in the results. Values outside of the range [0,29] will be rejected.').optional(),
    shard_size: integer.describe('Allows for more accurate counting of the top cells returned in the final result the aggregation. Defaults to returning `max(10,(size x number-of-shards))` buckets from each shard.').optional(),
    size: integer.describe('The maximum number of buckets to return.').optional(),
    bounds: GeoBounds.describe('A bounding box to filter the geo-points or geo-shapes in each bucket.').optional()
}).meta({ id: 'AggregationsGeoTileGridAggregation' });
export const AggregationsGeohexGridAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    field: Field.describe('Field containing indexed `geo_point` or `geo_shape` values. If the field contains an array, `geohex_grid` aggregates all array values.'),
    precision: integer.describe('Integer zoom of the key used to defined cells or buckets in the results. Value should be between 0-15.').optional(),
    bounds: GeoBounds.describe('Bounding box used to filter the geo-points in each bucket.').optional(),
    size: integer.describe('Maximum number of buckets to return.').optional(),
    shard_size: integer.describe('Number of buckets returned from each shard.').optional()
}).meta({ id: 'AggregationsGeohexGridAggregation' });
export const AggregationsGlobalAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape
}).meta({ id: 'AggregationsGlobalAggregation' });
export const AggregationsHistogramAggregation = z.object({
    extended_bounds: AggregationsExtendedBounds.describe('Enables extending the bounds of the histogram beyond the data itself.').optional(),
    hard_bounds: AggregationsExtendedBounds.describe('Limits the range of buckets in the histogram. It is particularly useful in the case of open data ranges that can result in a very large number of buckets.').optional(),
    field: Field.describe('The name of the field to aggregate on.').optional(),
    interval: double.describe('The interval for the buckets. Must be a positive decimal.').optional(),
    min_doc_count: integer.describe('Only returns buckets that have `min_doc_count` number of documents. By default, the response will fill gaps in the histogram with empty buckets.').optional(),
    missing: double.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    offset: double.describe('By default, the bucket keys start with 0 and then continue in even spaced steps of `interval`. The bucket boundaries can be shifted by using the `offset` option.').optional(),
    order: AggregationsAggregateOrder.describe('The sort order of the returned buckets. By default, the returned buckets are sorted by their key ascending.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional(),
    keyed: z.boolean().describe('If `true`, returns buckets as a hash instead of an array, keyed by the bucket keys.').optional()
}).meta({ id: 'AggregationsHistogramAggregation' });
export const AggregationsIpRangeAggregationRange = z.object({
    from: z.union([z.string(), z.null()]).describe('Start of the range.').optional(),
    mask: z.string().describe('IP range defined as a CIDR mask.').optional(),
    to: z.union([z.string(), z.null()]).describe('End of the range.').optional()
}).meta({ id: 'AggregationsIpRangeAggregationRange' });
export const AggregationsIpRangeAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    field: Field.describe('The date field whose values are used to build ranges.').optional(),
    ranges: z.array(AggregationsIpRangeAggregationRange).describe('Array of IP ranges.').optional()
}).meta({ id: 'AggregationsIpRangeAggregation' });
export const AggregationsIpPrefixAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    field: Field.describe('The IP address field to aggregation on. The field mapping type must be `ip`.'),
    prefix_length: integer.describe('Length of the network prefix. For IPv4 addresses the accepted range is [0, 32]. For IPv6 addresses the accepted range is [0, 128].'),
    is_ipv6: z.boolean().describe('Defines whether the prefix applies to IPv6 addresses.').optional(),
    append_prefix_length: z.boolean().describe('Defines whether the prefix length is appended to IP address keys in the response.').optional(),
    keyed: z.boolean().describe('Defines whether buckets are returned as a hash rather than an array in the response.').optional(),
    min_doc_count: long.describe('Minimum number of documents in a bucket for it to be included in the response.').optional()
}).meta({ id: 'AggregationsIpPrefixAggregation' });
export const MlRegressionInferenceOptions = z.object({
    results_field: Field.describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
    num_top_feature_importance_values: integer.describe('Specifies the maximum number of feature importance values per document.').optional()
}).meta({ id: 'MlRegressionInferenceOptions' });
export const MlClassificationInferenceOptions = z.object({
    num_top_classes: integer.describe('Specifies the number of top class predictions to return. Defaults to 0.').optional(),
    num_top_feature_importance_values: integer.describe('Specifies the maximum number of feature importance values per document.').optional(),
    prediction_field_type: z.string().describe('Specifies the type of the predicted field to write. Acceptable values are: string, number, boolean. When boolean is provided 1.0 is transformed to true and 0.0 to false.').optional(),
    results_field: z.string().describe('The field that is added to incoming documents to contain the inference prediction. Defaults to predicted_value.').optional(),
    top_classes_results_field: z.string().describe('Specifies the field to which the top classes are written. Defaults to top_classes.').optional()
}).meta({ id: 'MlClassificationInferenceOptions' });
const AggregationsInferenceConfigContainerExclusiveProps = z.union([z.object({ regression: MlRegressionInferenceOptions }), z.object({ classification: MlClassificationInferenceOptions })]);
export const AggregationsInferenceConfigContainer = AggregationsInferenceConfigContainerExclusiveProps.meta({ id: 'AggregationsInferenceConfigContainer' });
export const AggregationsInferenceAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    model_id: Name.describe('The ID or alias for the trained model.'),
    inference_config: AggregationsInferenceConfigContainer.describe('Contains the inference type and its options.').optional()
}).meta({ id: 'AggregationsInferenceAggregation' });
export const Fields = z.union([Field, z.array(Field)]).meta({ id: 'Fields' });
export const AggregationsMatrixAggregation = z.object({
    fields: Fields.describe('An array of fields for computing the statistics.').optional(),
    missing: z.record(Field, double).describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional()
}).meta({ id: 'AggregationsMatrixAggregation' });
export const AggregationsMatrixStatsAggregation = z.object({
    ...AggregationsMatrixAggregation.shape,
    mode: SortMode.describe('Array value the aggregation will use for array or multi-valued fields.').optional()
}).meta({ id: 'AggregationsMatrixStatsAggregation' });
export const AggregationsMaxAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsMaxAggregation' });
export const AggregationsMaxBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsMaxBucketAggregation' });
export const AggregationsMedianAbsoluteDeviationAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional(),
    compression: double.describe('Limits the maximum number of nodes used by the underlying TDigest algorithm to `20 * compression`, enabling control of memory usage and approximation error.').optional(),
    execution_hint: AggregationsTDigestExecutionHint.describe('The default implementation of TDigest is optimized for performance, scaling to millions or even billions of sample values while maintaining acceptable accuracy levels (close to 1% relative error for millions of samples in some cases). To use an implementation optimized for accuracy, set this parameter to high_accuracy instead.').optional()
}).meta({ id: 'AggregationsMedianAbsoluteDeviationAggregation' });
export const AggregationsMinAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsMinAggregation' });
export const AggregationsMinBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsMinBucketAggregation' });
export const AggregationsMissingAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    field: Field.describe('The name of the field.').optional(),
    missing: AggregationsMissing.optional()
}).meta({ id: 'AggregationsMissingAggregation' });
export const AggregationsMovingAverageAggregationBase = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    minimize: z.boolean().optional(),
    predict: integer.optional(),
    window: integer.optional()
}).meta({ id: 'AggregationsMovingAverageAggregationBase' });
/** For empty Class assignments */
export const EmptyObject = z.object({}).meta({ id: 'EmptyObject' });
export const AggregationsLinearMovingAverageAggregation = z.object({
    ...AggregationsMovingAverageAggregationBase.shape,
    model: z.literal('linear'),
    settings: EmptyObject
}).meta({ id: 'AggregationsLinearMovingAverageAggregation' });
export const AggregationsSimpleMovingAverageAggregation = z.object({
    ...AggregationsMovingAverageAggregationBase.shape,
    model: z.literal('simple'),
    settings: EmptyObject
}).meta({ id: 'AggregationsSimpleMovingAverageAggregation' });
export const AggregationsEwmaModelSettings = z.object({
    alpha: float.optional()
}).meta({ id: 'AggregationsEwmaModelSettings' });
export const AggregationsEwmaMovingAverageAggregation = z.object({
    ...AggregationsMovingAverageAggregationBase.shape,
    model: z.literal('ewma'),
    settings: AggregationsEwmaModelSettings
}).meta({ id: 'AggregationsEwmaMovingAverageAggregation' });
export const AggregationsHoltLinearModelSettings = z.object({
    alpha: float.optional(),
    beta: float.optional()
}).meta({ id: 'AggregationsHoltLinearModelSettings' });
export const AggregationsHoltMovingAverageAggregation = z.object({
    ...AggregationsMovingAverageAggregationBase.shape,
    model: z.literal('holt'),
    settings: AggregationsHoltLinearModelSettings
}).meta({ id: 'AggregationsHoltMovingAverageAggregation' });
export const AggregationsHoltWintersType = z.enum(['add', 'mult']).meta({ id: 'AggregationsHoltWintersType' });
export const AggregationsHoltWintersModelSettings = z.object({
    alpha: float.optional(),
    beta: float.optional(),
    gamma: float.optional(),
    pad: z.boolean().optional(),
    period: integer.optional(),
    type: AggregationsHoltWintersType.optional()
}).meta({ id: 'AggregationsHoltWintersModelSettings' });
export const AggregationsHoltWintersMovingAverageAggregation = z.object({
    ...AggregationsMovingAverageAggregationBase.shape,
    model: z.literal('holt_winters'),
    settings: AggregationsHoltWintersModelSettings
}).meta({ id: 'AggregationsHoltWintersMovingAverageAggregation' });
export const AggregationsMovingAverageAggregation = z.union([AggregationsLinearMovingAverageAggregation, AggregationsSimpleMovingAverageAggregation, AggregationsEwmaMovingAverageAggregation, AggregationsHoltMovingAverageAggregation, AggregationsHoltWintersMovingAverageAggregation]).meta({ id: 'AggregationsMovingAverageAggregation' });
export const AggregationsMovingPercentilesAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    window: integer.describe('The size of window to "slide" across the histogram.').optional(),
    shift: integer.describe('By default, the window consists of the last n values excluding the current bucket. Increasing `shift` by 1, moves the starting window position by 1 to the right.').optional(),
    keyed: z.boolean().optional()
}).meta({ id: 'AggregationsMovingPercentilesAggregation' });
export const AggregationsMovingFunctionAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    script: z.string().describe('The script that should be executed on each window of data.').optional(),
    shift: integer.describe('By default, the window consists of the last n values excluding the current bucket. Increasing `shift` by 1, moves the starting window position by 1 to the right.').optional(),
    window: integer.describe('The size of window to "slide" across the histogram.').optional()
}).meta({ id: 'AggregationsMovingFunctionAggregation' });
export const AggregationsTermsAggregationCollectMode = z.enum(['depth_first', 'breadth_first']).meta({ id: 'AggregationsTermsAggregationCollectMode' });
const AggregationsMultiTermLookupCommonProps = z.object({
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional()
});
const AggregationsMultiTermLookupExclusiveProps = z.union([z.object({ field: Field }), z.object({ script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]) })]);
export const AggregationsMultiTermLookup = AggregationsMultiTermLookupCommonProps.and(AggregationsMultiTermLookupExclusiveProps).meta({ id: 'AggregationsMultiTermLookup' });
export const AggregationsMultiTermsAggregation = z.object({
    collect_mode: AggregationsTermsAggregationCollectMode.describe('Specifies the strategy for data collection.').optional(),
    order: AggregationsAggregateOrder.describe('Specifies the sort order of the buckets. Defaults to sorting by descending document count.').optional(),
    min_doc_count: long.describe('The minimum number of documents in a bucket for it to be returned.').optional(),
    shard_min_doc_count: long.describe('The minimum number of documents in a bucket on each shard for it to be returned.').optional(),
    shard_size: integer.describe('The number of candidate terms produced by each shard. By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.').optional(),
    show_term_doc_count_error: z.boolean().describe('Calculates the doc count error on per term basis.').optional(),
    size: integer.describe('The number of term buckets should be returned out of the overall terms list.').optional(),
    get terms() { return AggregationsMultiTermLookup.array().describe('The field from which to generate sets of terms.'); }
}).meta({ id: 'AggregationsMultiTermsAggregation' });
export const AggregationsNestedAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    path: Field.describe('The path to the field of type `nested`.').optional()
}).meta({ id: 'AggregationsNestedAggregation' });
export const AggregationsNormalizeMethod = z.enum(['rescale_0_1', 'rescale_0_100', 'percent_of_sum', 'mean', 'z-score', 'softmax']).meta({ id: 'AggregationsNormalizeMethod' });
export const AggregationsNormalizeAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    method: AggregationsNormalizeMethod.describe('The specific method to apply.').optional()
}).meta({ id: 'AggregationsNormalizeAggregation' });
export const AggregationsParentAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    type: RelationName.describe('The child type that should be selected.').optional()
}).meta({ id: 'AggregationsParentAggregation' });
export const AggregationsHdrMethod = z.object({
    number_of_significant_value_digits: integer.describe('Specifies the resolution of values for the histogram in number of significant digits.').optional()
}).meta({ id: 'AggregationsHdrMethod' });
export const AggregationsTDigest = z.object({
    compression: integer.describe('Limits the maximum number of nodes used by the underlying TDigest algorithm to `20 * compression`, enabling control of memory usage and approximation error.').optional(),
    execution_hint: AggregationsTDigestExecutionHint.describe('The default implementation of TDigest is optimized for performance, scaling to millions or even billions of sample values while maintaining acceptable accuracy levels (close to 1% relative error for millions of samples in some cases). To use an implementation optimized for accuracy, set this parameter to high_accuracy instead.').optional()
}).meta({ id: 'AggregationsTDigest' });
export const AggregationsPercentileRanksAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional(),
    keyed: z.boolean().describe('By default, the aggregation associates a unique string key with each bucket and returns the ranges as a hash rather than an array. Set to `false` to disable this behavior.').optional(),
    values: z.union([z.array(double), z.null()]).describe('An array of values for which to calculate the percentile ranks.').optional(),
    hdr: AggregationsHdrMethod.describe('Uses the alternative High Dynamic Range Histogram algorithm to calculate percentile ranks.').optional(),
    tdigest: AggregationsTDigest.describe('Sets parameters for the default TDigest algorithm used to calculate percentile ranks.').optional()
}).meta({ id: 'AggregationsPercentileRanksAggregation' });
export const AggregationsPercentilesAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional(),
    keyed: z.boolean().describe('By default, the aggregation associates a unique string key with each bucket and returns the ranges as a hash rather than an array. Set to `false` to disable this behavior.').optional(),
    percents: z.union([double, z.array(double)]).describe('The percentiles to calculate.').optional(),
    hdr: AggregationsHdrMethod.describe('Uses the alternative High Dynamic Range Histogram algorithm to calculate percentiles.').optional(),
    tdigest: AggregationsTDigest.describe('Sets parameters for the default TDigest algorithm used to calculate percentiles.').optional()
}).meta({ id: 'AggregationsPercentilesAggregation' });
export const AggregationsPercentilesBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    percents: z.array(double).describe('The list of percentiles to calculate.').optional()
}).meta({ id: 'AggregationsPercentilesBucketAggregation' });
export const AggregationsRangeAggregation = z.object({
    field: Field.describe('The date field whose values are use to build ranges.').optional(),
    missing: integer.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    ranges: z.array(AggregationsAggregationRange).describe('An array of ranges used to bucket documents.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    keyed: z.boolean().describe('Set to `true` to associate a unique string key with each bucket and return the ranges as a hash rather than an array.').optional(),
    format: z.string().optional()
}).meta({ id: 'AggregationsRangeAggregation' });
export const AggregationsRareTermsAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    exclude: AggregationsTermsExclude.describe('Terms that should be excluded from the aggregation.').optional(),
    field: Field.describe('The field from which to return rare terms.').optional(),
    include: AggregationsTermsInclude.describe('Terms that should be included in the aggregation.').optional(),
    max_doc_count: long.describe('The maximum number of documents a term should appear in.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    precision: double.describe('The precision of the internal CuckooFilters. Smaller precision leads to better approximation, but higher memory usage.').optional(),
    value_type: z.string().optional()
}).meta({ id: 'AggregationsRareTermsAggregation' });
export const AggregationsRateMode = z.enum(['sum', 'value_count']).meta({ id: 'AggregationsRateMode' });
export const AggregationsRateAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional(),
    unit: AggregationsCalendarInterval.describe('The interval used to calculate the rate. By default, the interval of the `date_histogram` is used.').optional(),
    mode: AggregationsRateMode.describe('How the rate is calculated.').optional()
}).meta({ id: 'AggregationsRateAggregation' });
export const AggregationsReverseNestedAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    path: Field.describe('Defines the nested object field that should be joined back to. The default is empty, which means that it joins back to the root/main document level.').optional()
}).meta({ id: 'AggregationsReverseNestedAggregation' });
export const AggregationsSamplerAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    shard_size: integer.describe('Limits how many top-scoring documents are collected in the sample processed on each shard.').optional()
}).meta({ id: 'AggregationsSamplerAggregation' });
export const AggregationsScriptedMetricAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    get combine_script() { return z.union([Script, ScriptSource]).describe('Runs once on each shard after document collection is complete. Allows the aggregation to consolidate the state returned from each shard.').optional(); },
    get init_script() { return z.union([Script, ScriptSource]).describe('Runs prior to any collection of documents. Allows the aggregation to set up any initial state.').optional(); },
    get map_script() { return z.union([Script, ScriptSource]).describe('Run once per document collected. If no `combine_script` is specified, the resulting state needs to be stored in the `state` object.').optional(); },
    params: z.record(z.string(), z.any()).describe('A global object with script parameters for `init`, `map` and `combine` scripts. It is shared between the scripts.').optional(),
    get reduce_script() { return z.union([Script, ScriptSource]).describe('Runs once on the coordinating node after all shards have returned their results. The script is provided with access to a variable `states`, which is an array of the result of the `combine_script` on each shard.').optional(); }
}).meta({ id: 'AggregationsScriptedMetricAggregation' });
export const AggregationsSerialDifferencingAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape,
    lag: integer.describe('The historical bucket to subtract from the current value. Must be a positive, non-zero integer.').optional()
}).meta({ id: 'AggregationsSerialDifferencingAggregation' });
export const AggregationsChiSquareHeuristic = z.object({
    background_is_superset: z.boolean().describe('Set to `false` if you defined a custom background filter that represents a different set of documents that you want to compare to.'),
    include_negatives: z.boolean().describe('Set to `false` to filter out the terms that appear less often in the subset than in documents outside the subset.')
}).meta({ id: 'AggregationsChiSquareHeuristic' });
export const AggregationsTermsAggregationExecutionHint = z.enum(['map', 'global_ordinals', 'global_ordinals_hash', 'global_ordinals_low_cardinality']).meta({ id: 'AggregationsTermsAggregationExecutionHint' });
export const AggregationsGoogleNormalizedDistanceHeuristic = z.object({
    background_is_superset: z.boolean().describe('Set to `false` if you defined a custom background filter that represents a different set of documents that you want to compare to.').optional()
}).meta({ id: 'AggregationsGoogleNormalizedDistanceHeuristic' });
export const AggregationsMutualInformationHeuristic = z.object({
    background_is_superset: z.boolean().describe('Set to `false` if you defined a custom background filter that represents a different set of documents that you want to compare to.').optional(),
    include_negatives: z.boolean().describe('Set to `false` to filter out the terms that appear less often in the subset than in documents outside the subset.').optional()
}).meta({ id: 'AggregationsMutualInformationHeuristic' });
export const AggregationsPercentageScoreHeuristic = z.object({}).meta({ id: 'AggregationsPercentageScoreHeuristic' });
export const AggregationsScriptedHeuristic = z.object({
    get script() { return z.union([Script, ScriptSource]); }
}).meta({ id: 'AggregationsScriptedHeuristic' });
export const AggregationsPValueHeuristic = z.object({
    background_is_superset: z.boolean().optional(),
    normalize_above: long.describe('Should the results be normalized when above the given value. Allows for consistent significance results at various scales. Note: `0` is a special value which means no normalization').optional()
}).meta({ id: 'AggregationsPValueHeuristic' });
export const AggregationsSignificantTermsAggregation = z.object({
    get background_filter() { return QueryDslQueryContainer.describe('A background filter that can be used to focus in on significant terms within a narrower context, instead of the entire index.').optional(); },
    chi_square: AggregationsChiSquareHeuristic.describe('Use Chi square, as described in "Information Retrieval", Manning et al., Chapter 13.5.2, as the significance score.').optional(),
    exclude: AggregationsTermsExclude.describe('Terms to exclude.').optional(),
    execution_hint: AggregationsTermsAggregationExecutionHint.describe('Mechanism by which the aggregation should be executed: using field values directly or using global ordinals.').optional(),
    field: Field.describe('The field from which to return significant terms.').optional(),
    gnd: AggregationsGoogleNormalizedDistanceHeuristic.describe('Use Google normalized distance as described in "The Google Similarity Distance", Cilibrasi and Vitanyi, 2007, as the significance score.').optional(),
    include: AggregationsTermsInclude.describe('Terms to include.').optional(),
    jlh: EmptyObject.describe('Use JLH score as the significance score.').optional(),
    min_doc_count: long.describe('Only return terms that are found in more than `min_doc_count` hits.').optional(),
    mutual_information: AggregationsMutualInformationHeuristic.describe('Use mutual information as described in "Information Retrieval", Manning et al., Chapter 13.5.1, as the significance score.').optional(),
    percentage: AggregationsPercentageScoreHeuristic.describe('A simple calculation of the number of documents in the foreground sample with a term divided by the number of documents in the background with the term.').optional(),
    get script_heuristic() { return AggregationsScriptedHeuristic.describe('Customized score, implemented via a script.').optional(); },
    p_value: AggregationsPValueHeuristic.describe('Significant terms heuristic that calculates the p-value between the term existing in foreground and background sets. The p-value is the probability of obtaining test results at least as extreme as the results actually observed, under the assumption that the null hypothesis is correct. The p-value is calculated assuming that the foreground set and the background set are independent https://en.wikipedia.org/wiki/Bernoulli_trial, with the null hypothesis that the probabilities are the same.').optional(),
    shard_min_doc_count: long.describe('Regulates the certainty a shard has if the term should actually be added to the candidate list or not with respect to the `min_doc_count`. Terms will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.').optional(),
    shard_size: integer.describe('Can be used to control the volumes of candidate terms produced by each shard. By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.').optional(),
    size: integer.describe('The number of buckets returned out of the overall terms list.').optional()
}).meta({ id: 'AggregationsSignificantTermsAggregation' });
export const AggregationsSignificantTextAggregation = z.object({
    get background_filter() { return QueryDslQueryContainer.describe('A background filter that can be used to focus in on significant terms within a narrower context, instead of the entire index.').optional(); },
    chi_square: AggregationsChiSquareHeuristic.describe('Use Chi square, as described in "Information Retrieval", Manning et al., Chapter 13.5.2, as the significance score.').optional(),
    exclude: AggregationsTermsExclude.describe('Values to exclude.').optional(),
    execution_hint: AggregationsTermsAggregationExecutionHint.describe('Determines whether the aggregation will use field values directly or global ordinals.').optional(),
    field: Field.describe('The field from which to return significant text.').optional(),
    filter_duplicate_text: z.boolean().describe('Whether to out duplicate text to deal with noisy data.').optional(),
    gnd: AggregationsGoogleNormalizedDistanceHeuristic.describe('Use Google normalized distance as described in "The Google Similarity Distance", Cilibrasi and Vitanyi, 2007, as the significance score.').optional(),
    include: AggregationsTermsInclude.describe('Values to include.').optional(),
    jlh: EmptyObject.describe('Use JLH score as the significance score.').optional(),
    min_doc_count: long.describe('Only return values that are found in more than `min_doc_count` hits.').optional(),
    mutual_information: AggregationsMutualInformationHeuristic.describe('Use mutual information as described in "Information Retrieval", Manning et al., Chapter 13.5.1, as the significance score.').optional(),
    percentage: AggregationsPercentageScoreHeuristic.describe('A simple calculation of the number of documents in the foreground sample with a term divided by the number of documents in the background with the term.').optional(),
    get script_heuristic() { return AggregationsScriptedHeuristic.describe('Customized score, implemented via a script.').optional(); },
    shard_min_doc_count: long.describe('Regulates the certainty a shard has if the values should actually be added to the candidate list or not with respect to the min_doc_count. Values will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.').optional(),
    shard_size: integer.describe('The number of candidate terms produced by each shard. By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.').optional(),
    size: integer.describe('The number of buckets returned out of the overall terms list.').optional(),
    source_fields: Fields.describe('Overrides the JSON `_source` fields from which text will be analyzed.').optional()
}).meta({ id: 'AggregationsSignificantTextAggregation' });
export const AggregationsStatsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsStatsAggregation' });
export const AggregationsStatsBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsStatsBucketAggregation' });
export const AggregationsStringStatsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    show_distribution: z.boolean().describe('Shows the probability distribution for all characters.').optional()
}).meta({ id: 'AggregationsStringStatsAggregation' });
export const AggregationsSumAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsSumAggregation' });
export const AggregationsSumBucketAggregation = z.object({
    ...AggregationsPipelineAggregationBase.shape
}).meta({ id: 'AggregationsSumBucketAggregation' });
export const AggregationsTermsAggregation = z.object({
    collect_mode: AggregationsTermsAggregationCollectMode.describe('Determines how child aggregations should be calculated: breadth-first or depth-first.').optional(),
    exclude: AggregationsTermsExclude.describe('Values to exclude. Accepts regular expressions and partitions.').optional(),
    execution_hint: AggregationsTermsAggregationExecutionHint.describe('Determines whether the aggregation will use field values directly or global ordinals.').optional(),
    field: Field.describe('The field from which to return terms.').optional(),
    include: AggregationsTermsInclude.describe('Values to include. Accepts regular expressions and partitions.').optional(),
    min_doc_count: integer.describe('Only return values that are found in more than `min_doc_count` hits.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    missing_order: AggregationsMissingOrder.optional(),
    missing_bucket: z.boolean().optional(),
    value_type: z.string().describe('Coerced unmapped fields into the specified type.').optional(),
    order: AggregationsAggregateOrder.describe('Specifies the sort order of the buckets. Defaults to sorting by descending document count.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    shard_min_doc_count: long.describe('Regulates the certainty a shard has if the term should actually be added to the candidate list or not with respect to the `min_doc_count`. Terms will only be considered if their local shard frequency within the set is higher than the `shard_min_doc_count`.').optional(),
    shard_size: integer.describe('The number of candidate terms produced by each shard. By default, `shard_size` will be automatically estimated based on the number of shards and the `size` parameter.').optional(),
    show_term_doc_count_error: z.boolean().describe('Set to `true` to return the `doc_count_error_upper_bound`, which is an upper bound to the error on the `doc_count` returned by each shard.').optional(),
    size: integer.describe('The number of buckets returned out of the overall terms list.').optional(),
    format: z.string().optional()
}).meta({ id: 'AggregationsTermsAggregation' });
export const AggregationsTimeSeriesAggregation = z.object({
    ...AggregationsBucketAggregationBase.shape,
    size: integer.describe('The maximum number of results to return.').optional(),
    keyed: z.boolean().describe('Set to `true` to associate a unique string key with each bucket and returns the ranges as a hash rather than an array.').optional()
}).meta({ id: 'AggregationsTimeSeriesAggregation' });
export const ScriptField = z.object({
    get script() { return z.union([Script, ScriptSource]); },
    ignore_failure: z.boolean().optional()
}).meta({ id: 'ScriptField' });
export const SearchSourceFilter = z.object({
    exclude_vectors: z.boolean().describe('If `true`, vector fields are excluded from the returned source. This option takes precedence over `includes`: any vector field will remain excluded even if it matches an `includes` rule.').optional(),
    excludes: Fields.describe('A list of fields to exclude from the returned source.').optional(),
    exclude: Fields.describe('A list of fields to exclude from the returned source.').optional(),
    includes: Fields.describe('A list of fields to include in the returned source.').optional(),
    include: Fields.describe('A list of fields to include in the returned source.').optional()
}).meta({ id: 'SearchSourceFilter' });
/** Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered. */
export const SearchSourceConfig = z.union([z.boolean(), z.union([SearchSourceFilter, Fields])]).meta({ id: 'SearchSourceConfig' });
export const AggregationsTopHitsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    docvalue_fields: z.array(z.union([QueryDslFieldAndFormat, Field])).describe('Fields for which to return doc values.').optional(),
    explain: z.boolean().describe('If `true`, returns detailed information about score computation as part of a hit.').optional(),
    fields: z.array(z.union([QueryDslFieldAndFormat, Field])).describe('Array of wildcard (*) patterns. The request returns values for field names matching these patterns in the hits.fields property of the response.').optional(),
    from: integer.describe('Starting document offset.').optional(),
    get highlight() { return SearchHighlight.describe('Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in the search results.').optional(); },
    get script_fields() { return z.record(z.string(), ScriptField).describe('Returns the result of one or more script evaluations for each hit.').optional(); },
    size: integer.describe('The maximum number of top matching hits to return per bucket.').optional(),
    get sort() { return Sort.describe('Sort order of the top matching hits. By default, the hits are sorted by the score of the main query.').optional(); },
    _source: SearchSourceConfig.describe('Selects the fields of the source that are returned.').optional(),
    stored_fields: Fields.describe('Returns values for the specified stored fields (fields that use the `store` mapping option).').optional(),
    track_scores: z.boolean().describe('If `true`, calculates and returns document scores, even if the scores are not used for sorting.').optional(),
    version: z.boolean().describe('If `true`, returns document version as part of a hit.').optional(),
    seq_no_primary_term: z.boolean().describe('If `true`, returns sequence number and primary term of the last modification of each hit.').optional()
}).meta({ id: 'AggregationsTopHitsAggregation' });
export const AggregationsTestPopulation = z.object({
    field: Field.describe('The field to aggregate.'),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    get filter() { return QueryDslQueryContainer.describe('A filter used to define a set of records to run unpaired t-test on.').optional(); }
}).meta({ id: 'AggregationsTestPopulation' });
export const AggregationsTTestType = z.enum(['paired', 'homoscedastic', 'heteroscedastic']).meta({ id: 'AggregationsTTestType' });
export const AggregationsTTestAggregation = z.object({
    get a() { return AggregationsTestPopulation.describe('Test population A.').optional(); },
    get b() { return AggregationsTestPopulation.describe('Test population B.').optional(); },
    type: AggregationsTTestType.describe('The type of test.').optional()
}).meta({ id: 'AggregationsTTestAggregation' });
export const AggregationsTopMetricsValue = z.object({
    field: Field.describe('A field to return as a metric.')
}).meta({ id: 'AggregationsTopMetricsValue' });
export const AggregationsTopMetricsAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    metrics: z.union([AggregationsTopMetricsValue, z.array(AggregationsTopMetricsValue)]).describe('The fields of the top document to return.').optional(),
    size: integer.describe('The number of top documents from which to return metrics.').optional(),
    get sort() { return Sort.describe('The sort order of the documents.').optional(); }
}).meta({ id: 'AggregationsTopMetricsAggregation' });
export const AggregationsFormattableMetricAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsFormattableMetricAggregation' });
export const AggregationsValueCountAggregation = z.object({
    field: Field.describe('The field on which to run the aggregation.').optional(),
    missing: AggregationsMissing.describe('The value to apply to documents that do not have a value. By default, documents without a value are ignored.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); },
    format: z.string().optional()
}).meta({ id: 'AggregationsValueCountAggregation' });
export const AggregationsWeightedAverageValue = z.object({
    field: Field.describe('The field from which to extract the values or weights.').optional(),
    missing: double.describe('A value or weight to use if the field is missing.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); }
}).meta({ id: 'AggregationsWeightedAverageValue' });
export const AggregationsWeightedAverageAggregation = z.object({
    format: z.string().describe('A numeric response formatter.').optional(),
    get value() { return AggregationsWeightedAverageValue.describe('Configuration for the field that provides the values.').optional(); },
    value_type: AggregationsValueType.optional(),
    get weight() { return AggregationsWeightedAverageValue.describe('Configuration for the field or script that provides the weights.').optional(); }
}).meta({ id: 'AggregationsWeightedAverageAggregation' });
export const AggregationsVariableWidthHistogramAggregation = z.object({
    field: Field.describe('The name of the field.').optional(),
    buckets: integer.describe('The target number of buckets.').optional(),
    shard_size: integer.describe('The number of buckets that the coordinating node will request from each shard. Defaults to `buckets * 50`.').optional(),
    initial_buffer: integer.describe('Specifies the number of individual documents that will be stored in memory on a shard before the initial bucketing algorithm is run. Defaults to `min(10 * shard_size, 50000)`.').optional(),
    get script() { return z.union([Script, ScriptSource]).optional(); }
}).meta({ id: 'AggregationsVariableWidthHistogramAggregation' });
const AggregationsAggregationContainerCommonProps = z.object({
    aggregations: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Sub-aggregations for this aggregation. Only applies to bucket aggregations.').optional(),
    aggs: z.record(z.string(), z.lazy(() => AggregationsAggregationContainer)).describe('Sub-aggregations for this aggregation. Only applies to bucket aggregations.').optional(),
    meta: Metadata.optional()
});
const AggregationsAggregationContainerExclusiveProps = z.union([z.object({ adjacency_matrix: z.lazy(() => AggregationsAdjacencyMatrixAggregation) }), z.object({ auto_date_histogram: z.lazy(() => AggregationsAutoDateHistogramAggregation) }), z.object({ avg: z.lazy(() => AggregationsAverageAggregation) }), z.object({ avg_bucket: AggregationsAverageBucketAggregation }), z.object({ boxplot: z.lazy(() => AggregationsBoxplotAggregation) }), z.object({ bucket_script: z.lazy(() => AggregationsBucketScriptAggregation) }), z.object({ bucket_selector: z.lazy(() => AggregationsBucketSelectorAggregation) }), z.object({ bucket_sort: z.lazy(() => AggregationsBucketSortAggregation) }), z.object({ bucket_count_ks_test: AggregationsBucketKsAggregation }), z.object({ bucket_correlation: AggregationsBucketCorrelationAggregation }), z.object({ cardinality: z.lazy(() => AggregationsCardinalityAggregation) }), z.object({ cartesian_bounds: z.lazy(() => AggregationsCartesianBoundsAggregation) }), z.object({ cartesian_centroid: z.lazy(() => AggregationsCartesianCentroidAggregation) }), z.object({ categorize_text: AggregationsCategorizeTextAggregation }), z.object({ change_point: AggregationsChangePointAggregation }), z.object({ children: AggregationsChildrenAggregation }), z.object({ composite: z.lazy(() => AggregationsCompositeAggregation) }), z.object({ cumulative_cardinality: AggregationsCumulativeCardinalityAggregation }), z.object({ cumulative_sum: AggregationsCumulativeSumAggregation }), z.object({ date_histogram: z.lazy(() => AggregationsDateHistogramAggregation) }), z.object({ date_range: AggregationsDateRangeAggregation }), z.object({ derivative: AggregationsDerivativeAggregation }), z.object({ diversified_sampler: z.lazy(() => AggregationsDiversifiedSamplerAggregation) }), z.object({ extended_stats: z.lazy(() => AggregationsExtendedStatsAggregation) }), z.object({ extended_stats_bucket: AggregationsExtendedStatsBucketAggregation }), z.object({ frequent_item_sets: z.lazy(() => AggregationsFrequentItemSetsAggregation) }), z.object({ filter: z.lazy(() => QueryDslQueryContainer) }), z.object({ filters: AggregationsFiltersAggregation }), z.object({ geo_bounds: z.lazy(() => AggregationsGeoBoundsAggregation) }), z.object({ geo_centroid: z.lazy(() => AggregationsGeoCentroidAggregation) }), z.object({ geo_distance: AggregationsGeoDistanceAggregation }), z.object({ geohash_grid: AggregationsGeoHashGridAggregation }), z.object({ geo_line: AggregationsGeoLineAggregation }), z.object({ geotile_grid: AggregationsGeoTileGridAggregation }), z.object({ geohex_grid: AggregationsGeohexGridAggregation }), z.object({ global: AggregationsGlobalAggregation }), z.object({ histogram: z.lazy(() => AggregationsHistogramAggregation) }), z.object({ ip_range: AggregationsIpRangeAggregation }), z.object({ ip_prefix: AggregationsIpPrefixAggregation }), z.object({ inference: AggregationsInferenceAggregation }), z.object({ line: AggregationsGeoLineAggregation }), z.object({ matrix_stats: AggregationsMatrixStatsAggregation }), z.object({ max: z.lazy(() => AggregationsMaxAggregation) }), z.object({ max_bucket: AggregationsMaxBucketAggregation }), z.object({ median_absolute_deviation: z.lazy(() => AggregationsMedianAbsoluteDeviationAggregation) }), z.object({ min: z.lazy(() => AggregationsMinAggregation) }), z.object({ min_bucket: AggregationsMinBucketAggregation }), z.object({ missing: AggregationsMissingAggregation }), z.object({ moving_avg: AggregationsMovingAverageAggregation }), z.object({ moving_percentiles: AggregationsMovingPercentilesAggregation }), z.object({ moving_fn: AggregationsMovingFunctionAggregation }), z.object({ multi_terms: z.lazy(() => AggregationsMultiTermsAggregation) }), z.object({ nested: AggregationsNestedAggregation }), z.object({ normalize: AggregationsNormalizeAggregation }), z.object({ parent: AggregationsParentAggregation }), z.object({ percentile_ranks: z.lazy(() => AggregationsPercentileRanksAggregation) }), z.object({ percentiles: z.lazy(() => AggregationsPercentilesAggregation) }), z.object({ percentiles_bucket: AggregationsPercentilesBucketAggregation }), z.object({ range: z.lazy(() => AggregationsRangeAggregation) }), z.object({ rare_terms: AggregationsRareTermsAggregation }), z.object({ rate: z.lazy(() => AggregationsRateAggregation) }), z.object({ reverse_nested: AggregationsReverseNestedAggregation }), z.object({ sampler: AggregationsSamplerAggregation }), z.object({ scripted_metric: z.lazy(() => AggregationsScriptedMetricAggregation) }), z.object({ serial_diff: AggregationsSerialDifferencingAggregation }), z.object({ significant_terms: z.lazy(() => AggregationsSignificantTermsAggregation) }), z.object({ significant_text: z.lazy(() => AggregationsSignificantTextAggregation) }), z.object({ stats: z.lazy(() => AggregationsStatsAggregation) }), z.object({ stats_bucket: AggregationsStatsBucketAggregation }), z.object({ string_stats: z.lazy(() => AggregationsStringStatsAggregation) }), z.object({ sum: z.lazy(() => AggregationsSumAggregation) }), z.object({ sum_bucket: AggregationsSumBucketAggregation }), z.object({ terms: z.lazy(() => AggregationsTermsAggregation) }), z.object({ time_series: AggregationsTimeSeriesAggregation }), z.object({ top_hits: z.lazy(() => AggregationsTopHitsAggregation) }), z.object({ t_test: z.lazy(() => AggregationsTTestAggregation) }), z.object({ top_metrics: z.lazy(() => AggregationsTopMetricsAggregation) }), z.object({ value_count: z.lazy(() => AggregationsValueCountAggregation) }), z.object({ weighted_avg: z.lazy(() => AggregationsWeightedAverageAggregation) }), z.object({ variable_width_histogram: z.lazy(() => AggregationsVariableWidthHistogramAggregation) })]);
export const AggregationsAggregationContainer = AggregationsAggregationContainerCommonProps.and(AggregationsAggregationContainerExclusiveProps).meta({ id: 'AggregationsAggregationContainer' });
/**
 * Number of hits matching the query to count accurately. If true, the exact
 * number of hits is returned at the cost of some performance. If false, the
 * response does not include the total number of hits matching the query.
 * Defaults to 10,000 hits.
 */
export const SearchTrackHits = z.union([z.boolean(), integer]).meta({ id: 'SearchTrackHits' });
export const IndexName = z.string().meta({ id: 'IndexName' });
export const QueryVector = z.array(float).meta({ id: 'QueryVector' });
export const InferenceEmbeddingContentType = z.enum(['text', 'image', 'audio', 'video', 'pdf']).meta({ id: 'InferenceEmbeddingContentType' });
export const InferenceEmbeddingContentFormat = z.enum(['text', 'base64']).meta({ id: 'InferenceEmbeddingContentFormat' });
export const InferenceString = z.object({
    type: InferenceEmbeddingContentType.describe('The type of data that the value represents.'),
    format: z.union([InferenceEmbeddingContentFormat, z.null()]).describe('The format of the data. If null, the default data format for the given type is used.').optional(),
    value: z.string().describe('String which may be raw text, or the string representation of some other data such as an image in base64.')
}).meta({ id: 'InferenceString' });
export const InferenceStringGroup = z.union([InferenceString, z.array(InferenceString)]).meta({ id: 'InferenceStringGroup' });
/**
 * Knn embedding input.
 * Either a string, an object or array of objects
 */
export const KnnEmbeddingInput = z.union([z.string(), InferenceStringGroup]).meta({ id: 'KnnEmbeddingInput' });
export const Embedding = z.object({
    inference_id: z.string().optional(),
    input: KnnEmbeddingInput,
    timeout: Duration.optional()
}).meta({ id: 'Embedding' });
export const TextEmbedding = z.object({
    model_id: z.string().describe('Model ID is required for all dense_vector fields but may be inferred for semantic_text fields').optional(),
    model_text: z.string().describe('The text to be converted into a vector by the specified model')
}).meta({ id: 'TextEmbedding' });
export const LookupQueryVectorBuilder = z.object({
    id: z.string().describe('The ID of the document to fetch the vector from'),
    index: z.string().describe('The name of the index to fetch the document from'),
    path: z.string().describe('The name of the field containing the vector'),
    routing: z.string().describe('The routing value to use when fetching the document').optional()
}).meta({ id: 'LookupQueryVectorBuilder' });
const QueryVectorBuilderExclusiveProps = z.union([z.object({ embedding: Embedding }), z.object({ text_embedding: TextEmbedding }), z.object({ lookup: LookupQueryVectorBuilder })]);
export const QueryVectorBuilder = QueryVectorBuilderExclusiveProps.meta({ id: 'QueryVectorBuilder' });
export const RescoreVector = z.object({
    oversample: float.describe('Applies the specified oversample factor to k on the approximate kNN search')
}).meta({ id: 'RescoreVector' });
export const KnnSearch = z.object({
    field: Field.describe('The name of the vector field to search against'),
    query_vector: QueryVector.describe('The query vector').optional(),
    query_vector_builder: QueryVectorBuilder.describe('The query vector builder. You must provide a query_vector_builder or query_vector, but not both.').optional(),
    k: integer.describe('The final number of nearest neighbors to return as top hits').optional(),
    num_candidates: integer.describe('The number of nearest neighbor candidates to consider per shard').optional(),
    visit_percentage: float.describe('The percentage of vectors to explore per shard while doing knn search with bbq_disk').optional(),
    boost: float.describe('Boost value to apply to kNN scores').optional(),
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Filters for the kNN search query').optional(); },
    similarity: float.describe('The minimum similarity for a vector to be considered a match').optional(),
    get inner_hits() { return SearchInnerHits.describe('If defined, each search hit will contain inner hits.').optional(); },
    rescore_vector: RescoreVector.describe('Apply oversampling and rescoring to quantized vectors').optional(),
    query_name: z.string().optional()
}).meta({ id: 'KnnSearch' });
export const SearchScoreMode = z.enum(['avg', 'max', 'min', 'multiply', 'total']).meta({ id: 'SearchScoreMode' });
export const SearchRescoreQuery = z.object({
    get Query() { return QueryDslQueryContainer.describe('The query to use for rescoring. This query is only run on the Top-K results returned by the `query` and `post_filter` phases.'); },
    query_weight: double.describe('Relative importance of the original query versus the rescore query.').optional(),
    rescore_query_weight: double.describe('Relative importance of the rescore query versus the original query.').optional(),
    score_mode: SearchScoreMode.describe('Determines how scores are combined.').optional()
}).meta({ id: 'SearchRescoreQuery' });
export const SearchLearningToRank = z.object({
    model_id: z.string().describe('The unique identifier of the trained model uploaded to Elasticsearch'),
    params: z.record(z.string(), z.any()).describe('Named parameters to be passed to the query templates used for feature').optional()
}).meta({ id: 'SearchLearningToRank' });
export const SearchScriptRescore = z.object({
    get script() { return z.union([Script, ScriptSource]); }
}).meta({ id: 'SearchScriptRescore' });
const SearchRescoreCommonProps = z.object({
    window_size: integer.optional()
});
const SearchRescoreExclusiveProps = z.union([z.object({ query: z.lazy(() => SearchRescoreQuery) }), z.object({ learning_to_rank: SearchLearningToRank }), z.object({ script: z.lazy(() => SearchScriptRescore) })]);
export const SearchRescore = SearchRescoreCommonProps.and(SearchRescoreExclusiveProps).meta({ id: 'SearchRescore' });
export const RetrieverBase = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional()
}).meta({ id: 'RetrieverBase' });
export const SortResults = z.array(FieldValue).meta({ id: 'SortResults' });
export const StandardRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    get query() { return QueryDslQueryContainer.describe('Defines a query to retrieve a set of top documents.').optional(); },
    search_after: SortResults.describe('Defines a search after object parameter used for pagination.').optional(),
    terminate_after: integer.describe('Maximum number of documents to collect for each shard.').optional(),
    get sort() { return Sort.describe('A sort object that that specifies the order of matching documents.').optional(); },
    get collapse() { return SearchFieldCollapse.describe('Collapses the top documents by a specified key into a single top document per key.').optional(); }
}).meta({ id: 'StandardRetriever' });
export const KnnRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    field: z.string().describe('The name of the vector field to search against.'),
    query_vector: QueryVector.describe('Query vector. Must have the same number of dimensions as the vector field you are searching against. You must provide a query_vector_builder or query_vector, but not both.').optional(),
    query_vector_builder: QueryVectorBuilder.describe('Defines a model to build a query vector.').optional(),
    k: integer.describe('Number of nearest neighbors to return as top hits.'),
    num_candidates: integer.describe('Number of nearest neighbor candidates to consider per shard.'),
    visit_percentage: float.describe('The percentage of vectors to explore per shard while doing knn search with bbq_disk').optional(),
    similarity: float.describe('The minimum similarity required for a document to be considered a match.').optional(),
    rescore_vector: RescoreVector.describe('Apply oversampling and rescoring to quantized vectors').optional()
}).meta({ id: 'KnnRetriever' });
/** Wraps a retriever with an optional weight for RRF scoring. */
export const RRFRetrieverComponent = z.object({
    get retriever() { return RetrieverContainer.describe('The nested retriever configuration.'); },
    weight: float.describe('Weight multiplier for this retriever\'s contribution to the RRF score. Higher values increase influence. Defaults to 1.0 if not specified. Must be non-negative.').optional()
}).meta({ id: 'RRFRetrieverComponent' });
/** Either a direct RetrieverContainer (backward compatible) or an RRFRetrieverComponent with weight. */
export const RRFRetrieverEntry = z.union([z.lazy(() => RetrieverContainer), z.lazy(() => RRFRetrieverComponent)]).meta({ id: 'RRFRetrieverEntry' });
export const RRFRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    get retrievers() { return RRFRetrieverEntry.array().describe('A list of child retrievers to specify which sets of returned top documents will have the RRF formula applied to them. Each retriever can optionally include a weight parameter.'); },
    rank_constant: integer.describe('This value determines how much influence documents in individual result sets per query have over the final ranked result set.').optional(),
    rank_window_size: integer.describe('This value determines the size of the individual result sets per query.').optional(),
    query: z.string().optional(),
    fields: z.array(z.string()).optional()
}).meta({ id: 'RRFRetriever' });
export const MappingChunkRescorerChunkingSettings = z.object({
    max_chunk_size: integer.describe('The maximum size of a chunk in words. This value cannot be lower than `20` (for `sentence` strategy) or `10` (for `word` strategy). This value should not exceed the window size for the associated model.'),
    overlap: integer.describe('The number of overlapping words for chunks. It is applicable only to a `word` chunking strategy. This value cannot be higher than half the `max_chunk_size` value.').optional(),
    sentence_overlap: integer.describe('The number of overlapping sentences for chunks. It is applicable only for a `sentence` chunking strategy. It can be either `1` or `0`.').optional(),
    separator_group: z.string().describe('Only applicable to the `recursive` strategy and required when using it. Sets a predefined list of separators in the saved chunking settings based on the selected text type. Values can be `markdown` or `plaintext`. Using this parameter is an alternative to manually specifying a custom `separators` list.').optional(),
    separators: z.array(z.string()).describe('Only applicable to the `recursive` strategy and required when using it. A list of strings used as possible split points when chunking text. Each string can be a plain string or a regular expression (regex) pattern. The system tries each separator in order to split the text, starting from the first item in the list. After splitting, it attempts to recombine smaller pieces into larger chunks that stay within the `max_chunk_size` limit, to reduce the total number of chunks generated.').optional(),
    strategy: z.string().describe('The chunking strategy: `sentence`, `word`, `none` or `recursive`.  * If `strategy` is set to `recursive`, you must also specify: - `max_chunk_size` - either `separators` or`separator_group` Learn more about different chunking strategies in the linked documentation.').optional()
}).meta({ id: 'MappingChunkRescorerChunkingSettings' });
export const ChunkRescorer = z.object({
    size: integer.describe('The number of chunks per document to evaluate for reranking.').optional(),
    chunking_settings: MappingChunkRescorerChunkingSettings.describe('Chunking settings to apply').optional()
}).meta({ id: 'ChunkRescorer' });
export const TextSimilarityReranker = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    get retriever() { return RetrieverContainer.describe('The nested retriever which will produce the first-level results, that will later be used for reranking.'); },
    rank_window_size: integer.describe('This value determines how many documents we will consider from the nested retriever.').optional(),
    inference_id: z.string().describe('Unique identifier of the inference endpoint created using the inference API.').optional(),
    inference_text: z.string().describe('The text snippet used as the basis for similarity comparison.'),
    field: z.string().describe('The document field to be used for text similarity comparisons. This field should contain the text that will be evaluated against the inference_text.'),
    chunk_rescorer: ChunkRescorer.describe('Whether to rescore on only the best matching chunks.').optional()
}).meta({ id: 'TextSimilarityReranker' });
export const Id = z.string().meta({ id: 'Id' });
export const RuleRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    ruleset_ids: z.union([Id, z.array(Id)]).describe('The ruleset IDs containing the rules this retriever is evaluating against.'),
    match_criteria: z.any().describe('The match criteria that will determine if a rule in the provided rulesets should be applied.'),
    get retriever() { return RetrieverContainer.describe('The retriever whose results rules should be applied to.'); },
    rank_window_size: integer.describe('This value determines the size of the individual result set.').optional()
}).meta({ id: 'RuleRetriever' });
export const RescorerRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    get retriever() { return RetrieverContainer.describe('Inner retriever.'); },
    get rescore() { return z.union([SearchRescore, SearchRescore.array()]); }
}).meta({ id: 'RescorerRetriever' });
export const ScoreNormalizer = z.enum(['none', 'minmax', 'l2_norm']).meta({ id: 'ScoreNormalizer' });
export const InnerRetriever = z.object({
    get retriever() { return RetrieverContainer; },
    weight: float,
    normalizer: ScoreNormalizer
}).meta({ id: 'InnerRetriever' });
export const LinearRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    get retrievers() { return InnerRetriever.array().describe('Inner retrievers.').optional(); },
    rank_window_size: integer.optional(),
    query: z.string().optional(),
    fields: z.array(z.string()).optional(),
    normalizer: ScoreNormalizer.optional()
}).meta({ id: 'LinearRetriever' });
export const SpecifiedDocument = z.object({
    index: IndexName.optional(),
    id: Id
}).meta({ id: 'SpecifiedDocument' });
export const PinnedRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    get retriever() { return RetrieverContainer.describe('Inner retriever.'); },
    ids: z.array(z.string()).optional(),
    docs: z.array(SpecifiedDocument).optional(),
    rank_window_size: integer.optional()
}).meta({ id: 'PinnedRetriever' });
export const DiversifyRetrieverTypes = z.enum(['mmr']).meta({ id: 'DiversifyRetrieverTypes' });
export const DiversifyRetriever = z.object({
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Query to filter the documents that can match.').optional(); },
    min_score: float.describe('Minimum _score for matching documents. Documents with a lower _score are not included in the top documents.').optional(),
    _name: z.string().describe('Retriever name.').optional(),
    type: DiversifyRetrieverTypes.describe('The diversification strategy to apply.'),
    field: z.string().describe('The document field on which to diversify results on.'),
    get retriever() { return RetrieverContainer.describe('The nested retriever whose results will be diversified.'); },
    size: integer.describe('The number of top documents to return after diversification.').optional(),
    rank_window_size: integer.describe('The number of top documents from the nested retriever to consider for diversification.').optional(),
    query_vector: QueryVector.describe('The query vector used for diversification.').optional(),
    query_vector_builder: QueryVectorBuilder.describe('a dense vector query vector builder to use instead of a static query_vector').optional(),
    lambda: float.describe('Controls the trade-off between relevance and diversity for MMR. A value of 0.0 focuses solely on diversity, while a value of 1.0 focuses solely on relevance. Required for MMR').optional()
}).meta({ id: 'DiversifyRetriever' });
const RetrieverContainerExclusiveProps = z.union([z.object({ standard: z.lazy(() => StandardRetriever) }), z.object({ knn: z.lazy(() => KnnRetriever) }), z.object({ rrf: z.lazy(() => RRFRetriever) }), z.object({ text_similarity_reranker: z.lazy(() => TextSimilarityReranker) }), z.object({ rule: z.lazy(() => RuleRetriever) }), z.object({ rescorer: z.lazy(() => RescorerRetriever) }), z.object({ linear: z.lazy(() => LinearRetriever) }), z.object({ pinned: z.lazy(() => PinnedRetriever) }), z.object({ diversify: z.lazy(() => DiversifyRetriever) })]);
export const RetrieverContainer = RetrieverContainerExclusiveProps.meta({ id: 'RetrieverContainer' });
export const SlicedScroll = z.object({
    field: Field.optional(),
    id: Id,
    max: integer
}).meta({ id: 'SlicedScroll' });
export const SearchSuggester = z.object({
    text: z.string().describe('Global suggest text, to avoid repetition when the same text is used in several suggesters').optional()
}).catchall(z.any()).meta({ id: 'SearchSuggester' });
export const SearchPointInTimeReference = z.object({
    id: Id,
    keep_alive: Duration.optional()
}).meta({ id: 'SearchPointInTimeReference' });
export const MappingRuntimeFieldType = z.enum(['boolean', 'composite', 'date', 'double', 'geo_point', 'geo_shape', 'ip', 'keyword', 'long', 'lookup']).meta({ id: 'MappingRuntimeFieldType' });
export const MappingCompositeSubField = z.object({
    type: MappingRuntimeFieldType
}).meta({ id: 'MappingCompositeSubField' });
export const MappingRuntimeFieldFetchFields = z.object({
    field: Field,
    format: z.string().optional()
}).meta({ id: 'MappingRuntimeFieldFetchFields' });
export const MappingOnScriptError = z.enum(['fail', 'continue']).meta({ id: 'MappingOnScriptError' });
export const MappingRuntimeField = z.object({
    fields: z.record(z.string(), MappingCompositeSubField).describe('For type `composite`').optional(),
    fetch_fields: z.array(z.union([MappingRuntimeFieldFetchFields, Field])).describe('For type `lookup`').optional(),
    format: z.string().describe('A custom format for `date` type runtime fields.').optional(),
    input_field: Field.describe('For type `lookup`').optional(),
    target_field: Field.describe('For type `lookup`').optional(),
    target_index: IndexName.describe('For type `lookup`').optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Painless script executed at query time.').optional(); },
    on_script_error: MappingOnScriptError.optional(),
    type: MappingRuntimeFieldType.describe('Field type, which can be: `boolean`, `composite`, `date`, `double`, `geo_point`, `ip`,`keyword`, `long`, or `lookup`.')
}).meta({ id: 'MappingRuntimeField' });
export const MappingRuntimeFields = z.record(Field, z.lazy(() => MappingRuntimeField)).meta({ id: 'MappingRuntimeFields' });
export const SearchSearchRequestBody = z.object({
    get aggregations() { return z.record(z.string(), AggregationsAggregationContainer).describe('Defines the aggregations that are run as part of the search request.').optional(); },
    get collapse() { return SearchFieldCollapse.describe('Collapses search results the values of the specified field.').optional(); },
    explain: z.boolean().describe('If `true`, the request returns detailed information about score computation as part of a hit.').optional(),
    ext: z.record(z.string(), z.any()).describe('Configuration of search extensions defined by Elasticsearch plugins.').optional(),
    from: integer.describe('The starting document offset, which must be non-negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter.').optional(),
    get highlight() { return SearchHighlight.describe('Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in your search results.').optional(); },
    track_total_hits: SearchTrackHits.describe('Number of hits matching the query to count accurately. If `true`, the exact number of hits is returned at the cost of some performance. If `false`, the  response does not include the total number of hits matching the query.').optional(),
    indices_boost: z.array(z.record(IndexName, double)).describe('Boost the `_score` of documents from specified indices. The boost value is the factor by which scores are multiplied. A boost value greater than `1.0` increases the score. A boost value between `0` and `1.0` decreases the score.').optional(),
    docvalue_fields: z.array(z.union([QueryDslFieldAndFormat, Field])).describe('An array of wildcard (`*`) field patterns. The request returns doc values for field names matching these patterns in the `hits.fields` property of the response.').optional(),
    get knn() { return z.union([KnnSearch, KnnSearch.array()]).describe('The approximate kNN search to run.').optional(); },
    min_score: double.describe('The minimum `_score` for matching documents. Documents with a lower `_score` are not included in search results or results collected by aggregations.').optional(),
    get post_filter() { return QueryDslQueryContainer.describe('Use the `post_filter` parameter to filter search results. The search hits are filtered after the aggregations are calculated. A post filter has no impact on the aggregation results.').optional(); },
    profile: z.boolean().describe('Set to `true` to return detailed timing information about the execution of individual components in a search request. NOTE: This is a debugging tool and adds significant overhead to search execution.').optional(),
    get query() { return QueryDslQueryContainer.describe('The search definition using the Query DSL.').optional(); },
    get rescore() { return z.union([SearchRescore, SearchRescore.array()]).describe('Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases.').optional(); },
    get retriever() { return RetrieverContainer.describe('A retriever is a specification to describe top documents returned from a search. A retriever replaces other elements of the search API that also return top documents such as `query` and `knn`.').optional(); },
    get script_fields() { return z.record(z.string(), ScriptField).describe('Retrieve a script evaluation (based on different fields) for each hit.').optional(); },
    search_after: SortResults.describe('Used to retrieve the next page of hits using a set of sort values from the previous page.').optional(),
    size: integer.describe('The number of hits to return, which must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` property.').optional(),
    slice: SlicedScroll.describe('Split a scrolled search into multiple slices that can be consumed independently.').optional(),
    get sort() { return Sort.describe('A comma-separated list of <field>:<direction> pairs.').optional(); },
    _source: SearchSourceConfig.describe('The source fields that are returned for matching documents. These fields are returned in the `hits._source` property of the search response. If the `stored_fields` property is specified, the `_source` property defaults to `false`. Otherwise, it defaults to `true`.').optional(),
    fields: z.array(z.union([QueryDslFieldAndFormat, Field])).describe('An array of wildcard (`*`) field patterns. The request returns values for field names matching these patterns in the `hits.fields` property of the response.').optional(),
    suggest: SearchSuggester.describe('Defines a suggester that provides similar looking terms based on a provided text.').optional(),
    terminate_after: long.describe('The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. IMPORTANT: Use with caution. Elasticsearch applies this property to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this property for requests that target data streams with backing indices across multiple data tiers. If set to `0` (default), the query does not terminate early.').optional(),
    timeout: z.string().describe('The period of time to wait for a response from each shard. If no response is received before the timeout expires, the request fails and returns an error. Defaults to no timeout.').optional(),
    track_scores: z.boolean().describe('If `true`, calculate and return document scores, even if the scores are not used for sorting.').optional(),
    version: z.boolean().describe('If `true`, the request returns the document version as part of a hit.').optional(),
    seq_no_primary_term: z.boolean().describe('If `true`, the request returns sequence number and primary term of the last modification of each hit.').optional(),
    stored_fields: Fields.describe('A comma-separated list of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the `_source` property defaults to `false`. You can pass `_source: true` to return both source fields and stored fields in the search response.').optional(),
    pit: SearchPointInTimeReference.describe('Limit the search to a point in time (PIT). If you provide a PIT, you cannot specify an `<index>` in the request path.').optional(),
    get runtime_mappings() { return MappingRuntimeFields.describe('One or more runtime fields in the search request. These fields take precedence over mapped fields with the same name.').optional(); },
    stats: z.array(z.string()).describe('The stats groups to associate with the search. Each group maintains a statistics aggregation for its associated searches. You can retrieve these stats using the indices stats API.').optional()
}).meta({ id: 'SearchSearchRequestBody' });
export const ScriptSource = z.union([z.string(), z.lazy(() => SearchSearchRequestBody)]).meta({ id: 'ScriptSource' });
export const ScriptLanguage = z.union([z.enum(['painless', 'expression', 'mustache', 'java']), z.string()]).meta({ id: 'ScriptLanguage' });
export const Script = z.object({
    get source() { return ScriptSource.describe('The script source.').optional(); },
    id: Id.describe('The `id` for a stored script.').optional(),
    params: z.record(z.string(), z.any()).describe('Specifies any named parameters that are passed into the script as variables. Use parameters instead of hard-coded values to decrease compile time.').optional(),
    lang: ScriptLanguage.describe('Specifies the language the script is written in.').optional(),
    options: z.record(z.string(), z.string()).optional()
}).meta({ id: 'Script' });
export const QueryDslScriptScoreFunction = z.object({
    get script() { return z.union([Script, ScriptSource]).describe('A script that computes a score.'); }
}).meta({ id: 'QueryDslScriptScoreFunction' });
const QueryDslFunctionScoreContainerCommonProps = z.object({
    filter: z.lazy(() => QueryDslQueryContainer).optional(),
    weight: double.optional()
});
const QueryDslFunctionScoreContainerExclusiveProps = z.union([z.object({ exp: QueryDslDecayFunction }), z.object({ gauss: QueryDslDecayFunction }), z.object({ linear: QueryDslDecayFunction }), z.object({ field_value_factor: QueryDslFieldValueFactorScoreFunction }), z.object({ random_score: QueryDslRandomScoreFunction }), z.object({ script_score: z.lazy(() => QueryDslScriptScoreFunction) })]);
export const QueryDslFunctionScoreContainer = QueryDslFunctionScoreContainerCommonProps.and(QueryDslFunctionScoreContainerExclusiveProps).meta({ id: 'QueryDslFunctionScoreContainer' });
export const QueryDslFunctionScoreMode = z.enum(['multiply', 'sum', 'avg', 'first', 'max', 'min']).meta({ id: 'QueryDslFunctionScoreMode' });
export const QueryDslFunctionScoreQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    boost_mode: QueryDslFunctionBoostMode.describe('Defines how he newly computed score is combined with the score of the query').optional(),
    get functions() { return QueryDslFunctionScoreContainer.array().describe('One or more functions that compute a new score for each document returned by the query.').optional(); },
    max_boost: double.describe('Restricts the new score to not exceed the provided limit.').optional(),
    min_score: double.describe('Excludes documents that do not meet the provided score threshold.').optional(),
    get query() { return QueryDslQueryContainer.describe('A query that determines the documents for which a new score is computed.').optional(); },
    score_mode: QueryDslFunctionScoreMode.describe('Specifies how the computed scores are combined').optional()
}).meta({ id: 'QueryDslFunctionScoreQuery' });
export const MultiTermQueryRewrite = z.string().meta({ id: 'MultiTermQueryRewrite' });
export const Fuzziness = z.union([z.string(), integer]).meta({ id: 'Fuzziness' });
export const QueryDslFuzzyQuery = z.object({
    ...QueryDslQueryBase.shape,
    max_expansions: integer.describe('Maximum number of variations created.').optional(),
    prefix_length: integer.describe('Number of beginning characters left unchanged when creating expansions.').optional(),
    rewrite: MultiTermQueryRewrite.describe('Number of beginning characters left unchanged when creating expansions.').optional(),
    transpositions: z.boolean().describe('Indicates whether edits include transpositions of two adjacent characters (for example `ab` to `ba`).').optional(),
    fuzziness: Fuzziness.describe('Maximum edit distance allowed for matching.').optional(),
    value: z.union([z.string(), double, z.boolean()]).describe('Term you wish to find in the provided field.')
}).meta({ id: 'QueryDslFuzzyQuery' });
export const QueryDslGeoExecution = z.enum(['memory', 'indexed']).meta({ id: 'QueryDslGeoExecution' });
export const QueryDslGeoValidationMethod = z.enum(['coerce', 'ignore_malformed', 'strict']).meta({ id: 'QueryDslGeoValidationMethod' });
export const QueryDslGeoBoundingBoxQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    type: QueryDslGeoExecution.optional(),
    validation_method: QueryDslGeoValidationMethod.describe('Set to `IGNORE_MALFORMED` to accept geo points with invalid latitude or longitude. Set to `COERCE` to also try to infer correct latitude or longitude.').optional(),
    ignore_unmapped: z.boolean().describe('Set to `true` to ignore an unmapped field and not match any documents for this query. Set to `false` to throw an exception if the field is not mapped.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslGeoBoundingBoxQuery' });
export const Distance = z.string().meta({ id: 'Distance' });
export const QueryDslGeoDistanceQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    distance: Distance.describe('The radius of the circle centred on the specified location. Points which fall into this circle are considered to be matches.'),
    distance_type: GeoDistanceType.describe('How to compute the distance. Set to `plane` for a faster calculation that\'s inaccurate on long distances and close to the poles.').optional(),
    validation_method: QueryDslGeoValidationMethod.describe('Set to `IGNORE_MALFORMED` to accept geo points with invalid latitude or longitude. Set to `COERCE` to also try to infer correct latitude or longitude.').optional(),
    ignore_unmapped: z.boolean().describe('Set to `true` to ignore an unmapped field and not match any documents for this query. Set to `false` to throw an exception if the field is not mapped.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslGeoDistanceQuery' });
/** A map tile reference, represented as `{zoom}/{x}/{y}` */
export const GeoTile = z.string().meta({ id: 'GeoTile' });
/** A map hex cell (H3) reference */
export const GeoHexCell = z.string().meta({ id: 'GeoHexCell' });
const QueryDslGeoGridQueryExclusiveProps = z.union([z.object({ geotile: GeoTile }), z.object({ geohash: GeoHash }), z.object({ geohex: GeoHexCell })]);
export const QueryDslGeoGridQuery = QueryDslGeoGridQueryExclusiveProps.meta({ id: 'QueryDslGeoGridQuery' });
export const QueryDslGeoPolygonQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    validation_method: QueryDslGeoValidationMethod.optional(),
    ignore_unmapped: z.boolean().optional()
}).catchall(z.any()).meta({ id: 'QueryDslGeoPolygonQuery' });
export const QueryDslGeoShapeQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    ignore_unmapped: z.boolean().describe('Set to `true` to ignore an unmapped field and not match any documents for this query. Set to `false` to throw an exception if the field is not mapped.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslGeoShapeQuery' });
export const QueryDslChildScoreMode = z.enum(['none', 'avg', 'sum', 'max', 'min']).meta({ id: 'QueryDslChildScoreMode' });
export const QueryDslHasChildQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    ignore_unmapped: z.boolean().describe('Indicates whether to ignore an unmapped `type` and not return any documents instead of an error.').optional(),
    get inner_hits() { return SearchInnerHits.describe('If defined, each search hit will contain inner hits.').optional(); },
    max_children: integer.describe('Maximum number of child documents that match the query allowed for a returned parent document. If the parent document exceeds this limit, it is excluded from the search results.').optional(),
    min_children: integer.describe('Minimum number of child documents that match the query required to match the query for a returned parent document. If the parent document does not meet this limit, it is excluded from the search results.').optional(),
    get query() { return QueryDslQueryContainer.describe('Query you wish to run on child documents of the `type` field. If a child document matches the search, the query returns the parent document.'); },
    score_mode: QueryDslChildScoreMode.describe('Indicates how scores for matching child documents affect the root parent document’s relevance score.').optional(),
    type: RelationName.describe('Name of the child relationship mapped for the `join` field.')
}).meta({ id: 'QueryDslHasChildQuery' });
export const QueryDslHasParentQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    ignore_unmapped: z.boolean().describe('Indicates whether to ignore an unmapped `parent_type` and not return any documents instead of an error. You can use this parameter to query multiple indices that may not contain the `parent_type`.').optional(),
    get inner_hits() { return SearchInnerHits.describe('If defined, each search hit will contain inner hits.').optional(); },
    parent_type: RelationName.describe('Name of the parent relationship mapped for the `join` field.'),
    get query() { return QueryDslQueryContainer.describe('Query you wish to run on parent documents of the `parent_type` field. If a parent document matches the search, the query returns its child documents.'); },
    score: z.boolean().describe('Indicates whether the relevance score of a matching parent document is aggregated into its child documents.').optional()
}).meta({ id: 'QueryDslHasParentQuery' });
export const Ids = z.union([Id, z.array(Id)]).meta({ id: 'Ids' });
export const QueryDslIdsQuery = z.object({
    ...QueryDslQueryBase.shape,
    values: Ids.describe('An array of document IDs.').optional()
}).meta({ id: 'QueryDslIdsQuery' });
const QueryDslIntervalsFilterExclusiveProps = z.union([z.object({ after: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ before: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ contained_by: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ containing: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ not_contained_by: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ not_containing: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ not_overlapping: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ overlapping: z.lazy(() => QueryDslIntervalsContainer) }), z.object({ script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]) })]);
export const QueryDslIntervalsFilter = QueryDslIntervalsFilterExclusiveProps.meta({ id: 'QueryDslIntervalsFilter' });
export const QueryDslIntervalsAnyOf = z.object({
    get intervals() { return QueryDslIntervalsContainer.array().describe('An array of rules to match.'); },
    get filter() { return QueryDslIntervalsFilter.describe('Rule used to filter returned intervals.').optional(); }
}).meta({ id: 'QueryDslIntervalsAnyOf' });
export const QueryDslIntervalsFuzzy = z.object({
    analyzer: z.string().describe('Analyzer used to normalize the term.').optional(),
    fuzziness: Fuzziness.describe('Maximum edit distance allowed for matching.').optional(),
    prefix_length: integer.describe('Number of beginning characters left unchanged when creating expansions.').optional(),
    term: z.string().describe('The term to match.'),
    transpositions: z.boolean().describe('Indicates whether edits include transpositions of two adjacent characters (for example, `ab` to `ba`).').optional(),
    use_field: Field.describe('If specified, match intervals from this field rather than the top-level field. The `term` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.').optional()
}).meta({ id: 'QueryDslIntervalsFuzzy' });
export const QueryDslIntervalsMatch = z.object({
    analyzer: z.string().describe('Analyzer used to analyze terms in the query.').optional(),
    max_gaps: integer.describe('Maximum number of positions between the matching terms. Terms further apart than this are not considered matches.').optional(),
    ordered: z.boolean().describe('If `true`, matching terms must appear in their specified order.').optional(),
    query: z.string().describe('Text you wish to find in the provided field.'),
    use_field: Field.describe('If specified, match intervals from this field rather than the top-level field. The `term` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.').optional(),
    get filter() { return QueryDslIntervalsFilter.describe('An optional interval filter.').optional(); }
}).meta({ id: 'QueryDslIntervalsMatch' });
export const QueryDslIntervalsPrefix = z.object({
    analyzer: z.string().describe('Analyzer used to analyze the `prefix`.').optional(),
    prefix: z.string().describe('Beginning characters of terms you wish to find in the top-level field.'),
    use_field: Field.describe('If specified, match intervals from this field rather than the top-level field. The `prefix` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.').optional()
}).meta({ id: 'QueryDslIntervalsPrefix' });
export const QueryDslIntervalsRange = z.object({
    analyzer: z.string().describe('Analyzer used to analyze the `prefix`.').optional(),
    gte: z.string().describe('Lower term, either gte or gt must be provided.').optional(),
    gt: z.string().describe('Lower term, either gte or gt must be provided.').optional(),
    lte: z.string().describe('Upper term, either lte or lt must be provided.').optional(),
    lt: z.string().describe('Upper term, either lte or lt must be provided.').optional(),
    use_field: Field.describe('If specified, match intervals from this field rather than the top-level field. The `prefix` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.').optional()
}).meta({ id: 'QueryDslIntervalsRange' });
export const QueryDslIntervalsRegexp = z.object({
    analyzer: z.string().describe('Analyzer used to analyze the `prefix`.').optional(),
    pattern: z.string().describe('Regex pattern.'),
    use_field: Field.describe('If specified, match intervals from this field rather than the top-level field. The `prefix` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.').optional()
}).meta({ id: 'QueryDslIntervalsRegexp' });
export const QueryDslIntervalsWildcard = z.object({
    analyzer: z.string().describe('Analyzer used to analyze the `pattern`. Defaults to the top-level field\'s analyzer.').optional(),
    pattern: z.string().describe('Wildcard pattern used to find matching terms.'),
    use_field: Field.describe('If specified, match intervals from this field rather than the top-level field. The `pattern` is normalized using the search analyzer from this field, unless `analyzer` is specified separately.').optional()
}).meta({ id: 'QueryDslIntervalsWildcard' });
const QueryDslIntervalsContainerExclusiveProps = z.union([z.object({ all_of: z.lazy(() => QueryDslIntervalsAllOf) }), z.object({ any_of: z.lazy(() => QueryDslIntervalsAnyOf) }), z.object({ fuzzy: QueryDslIntervalsFuzzy }), z.object({ match: z.lazy(() => QueryDslIntervalsMatch) }), z.object({ prefix: QueryDslIntervalsPrefix }), z.object({ range: QueryDslIntervalsRange }), z.object({ regexp: QueryDslIntervalsRegexp }), z.object({ wildcard: QueryDslIntervalsWildcard })]);
export const QueryDslIntervalsContainer = QueryDslIntervalsContainerExclusiveProps.meta({ id: 'QueryDslIntervalsContainer' });
export const QueryDslIntervalsAllOf = z.object({
    get intervals() { return QueryDslIntervalsContainer.array().describe('An array of rules to combine. All rules must produce a match in a document for the overall source to match.'); },
    max_gaps: integer.describe('Maximum number of positions between the matching terms. Intervals produced by the rules further apart than this are not considered matches.').optional(),
    ordered: z.boolean().describe('If `true`, intervals produced by the rules should appear in the order in which they are specified.').optional(),
    get filter() { return QueryDslIntervalsFilter.describe('Rule used to filter returned intervals.').optional(); }
}).meta({ id: 'QueryDslIntervalsAllOf' });
const QueryDslIntervalsQueryExclusiveProps = z.union([z.object({ all_of: z.lazy(() => QueryDslIntervalsAllOf) }), z.object({ any_of: z.lazy(() => QueryDslIntervalsAnyOf) }), z.object({ fuzzy: QueryDslIntervalsFuzzy }), z.object({ match: z.lazy(() => QueryDslIntervalsMatch) }), z.object({ prefix: QueryDslIntervalsPrefix }), z.object({ range: QueryDslIntervalsRange }), z.object({ regexp: QueryDslIntervalsRegexp }), z.object({ wildcard: QueryDslIntervalsWildcard })]);
export const QueryDslIntervalsQuery = QueryDslIntervalsQueryExclusiveProps.meta({ id: 'QueryDslIntervalsQuery' });
export const KnnQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    field: Field.describe('The name of the vector field to search against'),
    query_vector: QueryVector.describe('The query vector').optional(),
    query_vector_builder: QueryVectorBuilder.describe('The query vector builder. You must provide a query_vector_builder or query_vector, but not both.').optional(),
    num_candidates: integer.describe('The number of nearest neighbor candidates to consider per shard').optional(),
    visit_percentage: float.describe('The percentage of vectors to explore per shard while doing knn search with bbq_disk').optional(),
    k: integer.describe('The final number of nearest neighbors to return as top hits').optional(),
    get filter() { return z.union([QueryDslQueryContainer, QueryDslQueryContainer.array()]).describe('Filters for the kNN search query').optional(); },
    similarity: float.describe('The minimum similarity for a vector to be considered a match').optional(),
    rescore_vector: RescoreVector.describe('Apply oversampling and rescoring to quantized vectors').optional()
}).meta({ id: 'KnnQuery' });
export const QueryDslZeroTermsQuery = z.enum(['all', 'none']).meta({ id: 'QueryDslZeroTermsQuery' });
export const QueryDslMatchQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('Analyzer used to convert the text in the query value into tokens.').optional(),
    auto_generate_synonyms_phrase_query: z.boolean().describe('If `true`, match phrase queries are automatically created for multi-term synonyms.').optional(),
    cutoff_frequency: double.optional(),
    fuzziness: Fuzziness.describe('Maximum edit distance allowed for matching.').optional(),
    fuzzy_rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    fuzzy_transpositions: z.boolean().describe('If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).').optional(),
    lenient: z.boolean().describe('If `true`, format-based errors, such as providing a text query value for a numeric field, are ignored.').optional(),
    max_expansions: integer.describe('Maximum number of terms to which the query will expand.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('Minimum number of clauses that must match for a document to be returned.').optional(),
    operator: QueryDslOperator.describe('Boolean logic used to interpret text in the query value.').optional(),
    prefix_length: integer.describe('Number of beginning characters left unchanged for fuzzy matching.').optional(),
    query: z.union([z.string(), float, z.boolean()]).describe('Text, number, boolean value or date you wish to find in the provided field.'),
    zero_terms_query: QueryDslZeroTermsQuery.describe('Indicates whether no documents are returned if the `analyzer` removes all tokens, such as when using a `stop` filter.').optional()
}).meta({ id: 'QueryDslMatchQuery' });
export const QueryDslMatchAllQuery = z.object({
    ...QueryDslQueryBase.shape
}).meta({ id: 'QueryDslMatchAllQuery' });
export const QueryDslMatchBoolPrefixQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('Analyzer used to convert the text in the query value into tokens.').optional(),
    fuzziness: Fuzziness.describe('Maximum edit distance allowed for matching. Can be applied to the term subqueries constructed for all terms but the final term.').optional(),
    fuzzy_rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query. Can be applied to the term subqueries constructed for all terms but the final term.').optional(),
    fuzzy_transpositions: z.boolean().describe('If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`). Can be applied to the term subqueries constructed for all terms but the final term.').optional(),
    max_expansions: integer.describe('Maximum number of terms to which the query will expand. Can be applied to the term subqueries constructed for all terms but the final term.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('Minimum number of clauses that must match for a document to be returned. Applied to the constructed bool query.').optional(),
    operator: QueryDslOperator.describe('Boolean logic used to interpret text in the query value. Applied to the constructed bool query.').optional(),
    prefix_length: integer.describe('Number of beginning characters left unchanged for fuzzy matching. Can be applied to the term subqueries constructed for all terms but the final term.').optional(),
    query: z.string().describe('Terms you wish to find in the provided field. The last term is used in a prefix query.')
}).meta({ id: 'QueryDslMatchBoolPrefixQuery' });
export const QueryDslMatchNoneQuery = z.object({
    ...QueryDslQueryBase.shape
}).meta({ id: 'QueryDslMatchNoneQuery' });
export const QueryDslMatchPhraseQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('Analyzer used to convert the text in the query value into tokens.').optional(),
    query: z.string().describe('Query terms that are analyzed and turned into a phrase query.'),
    slop: integer.describe('Maximum number of positions allowed between matching tokens.').optional(),
    zero_terms_query: QueryDslZeroTermsQuery.describe('Indicates whether no documents are returned if the `analyzer` removes all tokens, such as when using a `stop` filter.').optional()
}).meta({ id: 'QueryDslMatchPhraseQuery' });
export const QueryDslMatchPhrasePrefixQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('Analyzer used to convert text in the query value into tokens.').optional(),
    max_expansions: integer.describe('Maximum number of terms to which the last provided term of the query value will expand.').optional(),
    query: z.string().describe('Text you wish to find in the provided field.'),
    slop: integer.describe('Maximum number of positions allowed between matching tokens.').optional(),
    zero_terms_query: QueryDslZeroTermsQuery.describe('Indicates whether no documents are returned if the analyzer removes all tokens, such as when using a `stop` filter.').optional()
}).meta({ id: 'QueryDslMatchPhrasePrefixQuery' });
/** Only to be used in query and path parameters, as the array form is actually a csv */
export const Routing = z.union([z.string(), z.array(z.string())]).meta({ id: 'Routing' });
export const VersionNumber = long.meta({ id: 'VersionNumber' });
export const VersionType = z.enum(['internal', 'external', 'external_gte']).meta({ id: 'VersionType' });
export const QueryDslLikeDocument = z.object({
    doc: z.any().describe('A document not present in the index.').optional(),
    fields: z.array(Field).optional(),
    _id: Id.describe('ID of a document.').optional(),
    _index: IndexName.describe('Index of a document.').optional(),
    per_field_analyzer: z.record(Field, z.string()).describe('Overrides the default analyzer.').optional(),
    routing: Routing.optional(),
    version: VersionNumber.optional(),
    version_type: VersionType.optional()
}).meta({ id: 'QueryDslLikeDocument' });
/** Text that we want similar documents for or a lookup to a document's field for the text. */
export const QueryDslLike = z.union([z.string(), QueryDslLikeDocument]).meta({ id: 'QueryDslLike' });
export const AnalysisStopWordLanguage = z.enum(['_arabic_', '_armenian_', '_basque_', '_bengali_', '_brazilian_', '_bulgarian_', '_catalan_', '_cjk_', '_czech_', '_danish_', '_dutch_', '_english_', '_estonian_', '_finnish_', '_french_', '_galician_', '_german_', '_greek_', '_hindi_', '_hungarian_', '_indonesian_', '_irish_', '_italian_', '_latvian_', '_lithuanian_', '_norwegian_', '_persian_', '_portuguese_', '_romanian_', '_russian_', '_serbian_', '_sorani_', '_spanish_', '_swedish_', '_thai_', '_turkish_', '_none_']).meta({ id: 'AnalysisStopWordLanguage' });
/**
 * Language value, such as _arabic_ or _thai_. Defaults to _english_.
 * Each language value corresponds to a predefined list of stop words in Lucene. See Stop words by language for supported language values and their stop words.
 * Also accepts an array of stop words.
 */
export const AnalysisStopWords = z.union([AnalysisStopWordLanguage, z.array(z.string())]).meta({ id: 'AnalysisStopWords' });
export const QueryDslMoreLikeThisQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('The analyzer that is used to analyze the free form text. Defaults to the analyzer associated with the first field in fields.').optional(),
    boost_terms: double.describe('Each term in the formed query could be further boosted by their tf-idf score. This sets the boost factor to use when using this feature. Defaults to deactivated (0).').optional(),
    fail_on_unsupported_field: z.boolean().describe('Controls whether the query should fail (throw an exception) if any of the specified fields are not of the supported types (`text` or `keyword`).').optional(),
    fields: z.array(Field).describe('A list of fields to fetch and analyze the text from. Defaults to the `index.query.default_field` index setting, which has a default value of `*`.').optional(),
    include: z.boolean().describe('Specifies whether the input documents should also be included in the search results returned.').optional(),
    like: z.union([QueryDslLike, z.array(QueryDslLike)]).describe('Specifies free form text and/or a single or multiple documents for which you want to find similar documents.'),
    max_doc_freq: integer.describe('The maximum document frequency above which the terms are ignored from the input document.').optional(),
    max_query_terms: integer.describe('The maximum number of query terms that can be selected.').optional(),
    max_word_length: integer.describe('The maximum word length above which the terms are ignored. Defaults to unbounded (`0`).').optional(),
    min_doc_freq: integer.describe('The minimum document frequency below which the terms are ignored from the input document.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('After the disjunctive query has been formed, this parameter controls the number of terms that must match.').optional(),
    min_term_freq: integer.describe('The minimum term frequency below which the terms are ignored from the input document.').optional(),
    min_word_length: integer.describe('The minimum word length below which the terms are ignored.').optional(),
    routing: z.string().optional(),
    stop_words: AnalysisStopWords.describe('An array of stop words. Any word in this set is ignored.').optional(),
    unlike: z.union([QueryDslLike, z.array(QueryDslLike)]).describe('Used in combination with `like` to exclude documents that match a set of terms.').optional(),
    version: VersionNumber.optional(),
    version_type: VersionType.optional()
}).meta({ id: 'QueryDslMoreLikeThisQuery' });
export const QueryDslTextQueryType = z.enum(['best_fields', 'most_fields', 'cross_fields', 'phrase', 'phrase_prefix', 'bool_prefix']).meta({ id: 'QueryDslTextQueryType' });
export const QueryDslMultiMatchQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('Analyzer used to convert the text in the query value into tokens.').optional(),
    auto_generate_synonyms_phrase_query: z.boolean().describe('If `true`, match phrase queries are automatically created for multi-term synonyms.').optional(),
    cutoff_frequency: double.optional(),
    fields: Fields.describe('The fields to be queried. Defaults to the `index.query.default_field` index settings, which in turn defaults to `*`.').optional(),
    fuzziness: Fuzziness.describe('Maximum edit distance allowed for matching.').optional(),
    fuzzy_rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    fuzzy_transpositions: z.boolean().describe('If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`). Can be applied to the term subqueries constructed for all terms but the final term.').optional(),
    lenient: z.boolean().describe('If `true`, format-based errors, such as providing a text query value for a numeric field, are ignored.').optional(),
    max_expansions: integer.describe('Maximum number of terms to which the query will expand.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('Minimum number of clauses that must match for a document to be returned.').optional(),
    operator: QueryDslOperator.describe('Boolean logic used to interpret text in the query value.').optional(),
    prefix_length: integer.describe('Number of beginning characters left unchanged for fuzzy matching.').optional(),
    query: z.string().describe('Text, number, boolean value or date you wish to find in the provided field.'),
    slop: integer.describe('Maximum number of positions allowed between matching tokens.').optional(),
    tie_breaker: double.describe('Determines how scores for each per-term blended query and scores across groups are combined.').optional(),
    type: QueryDslTextQueryType.describe('How `the` multi_match query is executed internally.').optional(),
    zero_terms_query: QueryDslZeroTermsQuery.describe('Indicates whether no documents are returned if the `analyzer` removes all tokens, such as when using a `stop` filter.').optional()
}).meta({ id: 'QueryDslMultiMatchQuery' });
export const QueryDslNestedQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    ignore_unmapped: z.boolean().describe('Indicates whether to ignore an unmapped path and not return any documents instead of an error.').optional(),
    get inner_hits() { return SearchInnerHits.describe('If defined, each search hit will contain inner hits.').optional(); },
    path: Field.describe('Path to the nested object you wish to search.'),
    get query() { return QueryDslQueryContainer.describe('Query you wish to run on nested objects in the path.'); },
    score_mode: QueryDslChildScoreMode.describe('How scores for matching child objects affect the root parent document’s relevance score.').optional()
}).meta({ id: 'QueryDslNestedQuery' });
export const QueryDslParentIdQuery = z.object({
    ...QueryDslQueryBase.shape,
    id: Id.describe('ID of the parent document.').optional(),
    ignore_unmapped: z.boolean().describe('Indicates whether to ignore an unmapped `type` and not return any documents instead of an error.').optional(),
    type: RelationName.describe('Name of the child relationship mapped for the `join` field.').optional()
}).meta({ id: 'QueryDslParentIdQuery' });
export const QueryDslPercolateQuery = z.object({
    ...QueryDslQueryBase.shape,
    document: z.any().describe('The source of the document being percolated.').optional(),
    documents: z.array(z.any()).describe('An array of sources of the documents being percolated.').optional(),
    field: Field.describe('Field that holds the indexed queries. The field must use the `percolator` mapping type.'),
    id: Id.describe('The ID of a stored document to percolate.').optional(),
    index: IndexName.describe('The index of a stored document to percolate.').optional(),
    name: z.string().describe('The suffix used for the `_percolator_document_slot` field when multiple `percolate` queries are specified.').optional(),
    preference: z.string().describe('Preference used to fetch document to percolate.').optional(),
    routing: z.string().describe('Routing used to fetch document to percolate.').optional(),
    version: VersionNumber.describe('The expected version of a stored document to percolate.').optional()
}).meta({ id: 'QueryDslPercolateQuery' });
export const QueryDslPinnedDoc = z.object({
    _id: Id.describe('The unique document ID.'),
    _index: IndexName.describe('The index that contains the document.').optional()
}).meta({ id: 'QueryDslPinnedDoc' });
const QueryDslPinnedQueryCommonProps = z.object({
    organic: z.lazy(() => QueryDslQueryContainer).describe('Any choice of query used to rank documents which will be ranked below the "pinned" documents.')
});
const QueryDslPinnedQueryExclusiveProps = z.union([z.object({ ids: z.array(Id) }), z.object({ docs: z.array(QueryDslPinnedDoc) })]);
export const QueryDslPinnedQuery = QueryDslPinnedQueryCommonProps.and(QueryDslPinnedQueryExclusiveProps).meta({ id: 'QueryDslPinnedQuery' });
export const QueryDslPrefixQuery = z.object({
    ...QueryDslQueryBase.shape,
    rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    value: z.string().describe('Beginning characters of terms you wish to find in the provided field.'),
    case_insensitive: z.boolean().describe('Allows ASCII case insensitive matching of the value with the indexed field values when set to `true`. Default is `false` which means the case sensitivity of matching depends on the underlying field’s mapping.').optional()
}).meta({ id: 'QueryDslPrefixQuery' });
export const QueryDslQueryStringQuery = z.object({
    ...QueryDslQueryBase.shape,
    allow_leading_wildcard: z.boolean().describe('If `true`, the wildcard characters `*` and `?` are allowed as the first character of the query string.').optional(),
    analyzer: z.string().describe('Analyzer used to convert text in the query string into tokens.').optional(),
    analyze_wildcard: z.boolean().describe('If `true`, the query attempts to analyze wildcard terms in the query string.').optional(),
    auto_generate_synonyms_phrase_query: z.boolean().describe('If `true`, match phrase queries are automatically created for multi-term synonyms.').optional(),
    default_field: Field.describe('Default field to search if no field is provided in the query string. Supports wildcards (`*`). Defaults to the `index.query.default_field` index setting, which has a default value of `*`.').optional(),
    default_operator: QueryDslOperator.describe('Default boolean logic used to interpret text in the query string if no operators are specified.').optional(),
    enable_position_increments: z.boolean().describe('If `true`, enable position increments in queries constructed from a `query_string` search.').optional(),
    escape: z.boolean().optional(),
    fields: z.array(Field).describe('Array of fields to search. Supports wildcards (`*`).').optional(),
    fuzziness: Fuzziness.describe('Maximum edit distance allowed for fuzzy matching.').optional(),
    fuzzy_max_expansions: integer.describe('Maximum number of terms to which the query expands for fuzzy matching.').optional(),
    fuzzy_prefix_length: integer.describe('Number of beginning characters left unchanged for fuzzy matching.').optional(),
    fuzzy_rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    fuzzy_transpositions: z.boolean().describe('If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).').optional(),
    lenient: z.boolean().describe('If `true`, format-based errors, such as providing a text value for a numeric field, are ignored.').optional(),
    max_determinized_states: integer.describe('Maximum number of automaton states required for the query.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('Minimum number of clauses that must match for a document to be returned.').optional(),
    phrase_slop: double.describe('Maximum number of positions allowed between matching tokens for phrases.').optional(),
    query: z.string().describe('Query string you wish to parse and use for search.'),
    quote_analyzer: z.string().describe('Analyzer used to convert quoted text in the query string into tokens. For quoted text, this parameter overrides the analyzer specified in the `analyzer` parameter.').optional(),
    quote_field_suffix: z.string().describe('Suffix appended to quoted text in the query string. You can use this suffix to use a different analysis method for exact matches.').optional(),
    rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    tie_breaker: double.describe('How to combine the queries generated from the individual search terms in the resulting `dis_max` query.').optional(),
    time_zone: TimeZone.describe('Coordinated Universal Time (UTC) offset or IANA time zone used to convert date values in the query string to UTC.').optional(),
    type: QueryDslTextQueryType.describe('Determines how the query matches and scores documents.').optional()
}).meta({ id: 'QueryDslQueryStringQuery' });
export const QueryDslRangeRelation = z.enum(['within', 'contains', 'intersects']).meta({ id: 'QueryDslRangeRelation' });
export const QueryDslRangeQueryBase = z.object({
    ...QueryDslQueryBase.shape,
    relation: QueryDslRangeRelation.describe('Indicates how the range query matches values for `range` fields.').optional(),
    gt: z.any().describe('Greater than.').optional(),
    gte: z.any().describe('Greater than or equal to.').optional(),
    lt: z.any().describe('Less than.').optional(),
    lte: z.any().describe('Less than or equal to.').optional()
}).meta({ id: 'QueryDslRangeQueryBase' });
export const DateFormat = z.string().meta({ id: 'DateFormat' });
export const QueryDslUntypedRangeQuery = z.object({
    ...QueryDslRangeQueryBase.shape,
    format: DateFormat.describe('Date format used to convert `date` values in the query.').optional(),
    time_zone: TimeZone.describe('Coordinated Universal Time (UTC) offset or IANA time zone used to convert `date` values in the query to UTC.').optional()
}).meta({ id: 'QueryDslUntypedRangeQuery' });
export const QueryDslDateRangeQuery = z.object({
    ...QueryDslRangeQueryBase.shape,
    format: DateFormat.describe('Date format used to convert `date` values in the query.').optional(),
    time_zone: TimeZone.describe('Coordinated Universal Time (UTC) offset or IANA time zone used to convert `date` values in the query to UTC.').optional()
}).meta({ id: 'QueryDslDateRangeQuery' });
export const QueryDslNumberRangeQuery = z.object({
    ...QueryDslRangeQueryBase.shape
}).meta({ id: 'QueryDslNumberRangeQuery' });
export const QueryDslLongNumberRangeQuery = z.object({
    ...QueryDslRangeQueryBase.shape
}).meta({ id: 'QueryDslLongNumberRangeQuery' });
export const QueryDslTermRangeQuery = z.object({
    ...QueryDslRangeQueryBase.shape
}).meta({ id: 'QueryDslTermRangeQuery' });
export const QueryDslRangeQuery = z.union([QueryDslUntypedRangeQuery, QueryDslDateRangeQuery, QueryDslNumberRangeQuery, QueryDslLongNumberRangeQuery, QueryDslTermRangeQuery]).meta({ id: 'QueryDslRangeQuery' });
export const QueryDslRankFeatureFunction = z.object({}).meta({ id: 'QueryDslRankFeatureFunction' });
export const QueryDslRankFeatureFunctionSaturation = z.object({
    pivot: float.describe('Configurable pivot value so that the result will be less than 0.5.').optional()
}).meta({ id: 'QueryDslRankFeatureFunctionSaturation' });
export const QueryDslRankFeatureFunctionLogarithm = z.object({
    scaling_factor: float.describe('Configurable scaling factor.')
}).meta({ id: 'QueryDslRankFeatureFunctionLogarithm' });
export const QueryDslRankFeatureFunctionLinear = z.object({}).meta({ id: 'QueryDslRankFeatureFunctionLinear' });
export const QueryDslRankFeatureFunctionSigmoid = z.object({
    pivot: float.describe('Configurable pivot value so that the result will be less than 0.5.'),
    exponent: float.describe('Configurable Exponent.')
}).meta({ id: 'QueryDslRankFeatureFunctionSigmoid' });
export const QueryDslRankFeatureQuery = z.object({
    ...QueryDslQueryBase.shape,
    field: Field.describe('`rank_feature` or `rank_features` field used to boost relevance scores.'),
    saturation: QueryDslRankFeatureFunctionSaturation.describe('Saturation function used to boost relevance scores based on the value of the rank feature `field`.').optional(),
    log: QueryDslRankFeatureFunctionLogarithm.describe('Logarithmic function used to boost relevance scores based on the value of the rank feature `field`.').optional(),
    linear: QueryDslRankFeatureFunctionLinear.describe('Linear function used to boost relevance scores based on the value of the rank feature `field`.').optional(),
    sigmoid: QueryDslRankFeatureFunctionSigmoid.describe('Sigmoid function used to boost relevance scores based on the value of the rank feature `field`.').optional()
}).meta({ id: 'QueryDslRankFeatureQuery' });
export const QueryDslRegexpQuery = z.object({
    ...QueryDslQueryBase.shape,
    case_insensitive: z.boolean().describe('Allows case insensitive matching of the regular expression value with the indexed field values when set to `true`. When `false`, case sensitivity of matching depends on the underlying field’s mapping.').optional(),
    flags: z.string().describe('Enables optional operators for the regular expression.').optional(),
    max_determinized_states: integer.describe('Maximum number of automaton states required for the query.').optional(),
    rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    value: z.string().describe('Regular expression for terms you wish to find in the provided field.')
}).meta({ id: 'QueryDslRegexpQuery' });
export const QueryDslRuleQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get organic() { return QueryDslQueryContainer; },
    ruleset_ids: z.union([Id, z.array(Id)]).optional(),
    ruleset_id: z.string().optional(),
    match_criteria: z.any()
}).meta({ id: 'QueryDslRuleQuery' });
export const QueryDslScriptQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get script() { return z.union([Script, ScriptSource]).describe('Contains a script to run as a query. This script must return a boolean value, `true` or `false`.'); }
}).meta({ id: 'QueryDslScriptQuery' });
export const QueryDslScriptScoreQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    min_score: float.describe('Documents with a score lower than this floating point number are excluded from the search results.').optional(),
    get query() { return QueryDslQueryContainer.describe('Query used to return documents.'); },
    get script() { return z.union([Script, ScriptSource]).describe('Script used to compute the score of documents returned by the query. Important: final relevance scores from the `script_score` query cannot be negative.'); }
}).meta({ id: 'QueryDslScriptScoreQuery' });
export const QueryDslSemanticQuery = z.object({
    ...QueryDslQueryBase.shape,
    field: z.string().describe('The field to query, which must be a semantic_text field type'),
    query: z.string().describe('The query text')
}).meta({ id: 'QueryDslSemanticQuery' });
export const QueryDslShapeQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    ignore_unmapped: z.boolean().describe('When set to `true` the query ignores an unmapped field and will not match any documents.').optional()
}).catchall(z.any()).meta({ id: 'QueryDslShapeQuery' });
/**
 * A set of flags that can be represented as a single enum value or a set of values that are encoded
 * as a pipe-separated string
 *
 * Depending on the target language, code generators can use this hint to generate language specific
 * flags enum constructs and the corresponding (de-)serialization code.
 */
export const SpecUtilsPipeSeparatedFlags = z.union([z.any(), z.string()]).meta({ id: 'SpecUtilsPipeSeparatedFlags' });
/** Query flags can be either a single flag or a combination of flags, e.g. `OR|AND|PREFIX` */
export const QueryDslSimpleQueryStringFlags = SpecUtilsPipeSeparatedFlags.meta({ id: 'QueryDslSimpleQueryStringFlags' });
export const QueryDslSimpleQueryStringQuery = z.object({
    ...QueryDslQueryBase.shape,
    analyzer: z.string().describe('Analyzer used to convert text in the query string into tokens.').optional(),
    analyze_wildcard: z.boolean().describe('If `true`, the query attempts to analyze wildcard terms in the query string.').optional(),
    auto_generate_synonyms_phrase_query: z.boolean().describe('If `true`, the parser creates a match_phrase query for each multi-position token.').optional(),
    default_operator: QueryDslOperator.describe('Default boolean logic used to interpret text in the query string if no operators are specified.').optional(),
    fields: z.array(Field).describe('Array of fields you wish to search. Accepts wildcard expressions. You also can boost relevance scores for matches to particular fields using a caret (`^`) notation. Defaults to the `index.query.default_field index` setting, which has a default value of `*`.').optional(),
    flags: QueryDslSimpleQueryStringFlags.describe('List of enabled operators for the simple query string syntax.').optional(),
    fuzzy_max_expansions: integer.describe('Maximum number of terms to which the query expands for fuzzy matching.').optional(),
    fuzzy_prefix_length: integer.describe('Number of beginning characters left unchanged for fuzzy matching.').optional(),
    fuzzy_transpositions: z.boolean().describe('If `true`, edits for fuzzy matching include transpositions of two adjacent characters (for example, `ab` to `ba`).').optional(),
    lenient: z.boolean().describe('If `true`, format-based errors, such as providing a text value for a numeric field, are ignored.').optional(),
    minimum_should_match: MinimumShouldMatch.describe('Minimum number of clauses that must match for a document to be returned.').optional(),
    query: z.string().describe('Query string in the simple query string syntax you wish to parse and use for search.'),
    quote_field_suffix: z.string().describe('Suffix appended to quoted text in the query string.').optional()
}).meta({ id: 'QueryDslSimpleQueryStringQuery' });
export const QueryDslSpanFieldMaskingQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    field: Field,
    get query() { return QueryDslSpanQuery; }
}).meta({ id: 'QueryDslSpanFieldMaskingQuery' });
export const QueryDslSpanFirstQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    end: integer.describe('Controls the maximum end position permitted in a match.'),
    get match() { return QueryDslSpanQuery.describe('Can be any other span type query.'); }
}).meta({ id: 'QueryDslSpanFirstQuery' });
/** Can only be used as a clause in a span_near query. */
export const QueryDslSpanGapQuery = z.record(Field, integer).meta({ id: 'QueryDslSpanGapQuery' });
export const QueryDslSpanMultiTermQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get match() { return QueryDslQueryContainer.describe('Should be a multi term query (one of `wildcard`, `fuzzy`, `prefix`, `range`, or `regexp` query).'); }
}).meta({ id: 'QueryDslSpanMultiTermQuery' });
export const QueryDslSpanNearQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get clauses() { return QueryDslSpanQuery.array().describe('Array of one or more other span type queries.'); },
    in_order: z.boolean().describe('Controls whether matches are required to be in-order.').optional(),
    slop: integer.describe('Controls the maximum number of intervening unmatched positions permitted.').optional()
}).meta({ id: 'QueryDslSpanNearQuery' });
export const QueryDslSpanNotQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    dist: integer.describe('The number of tokens from within the include span that can’t have overlap with the exclude span. Equivalent to setting both `pre` and `post`.').optional(),
    get exclude() { return QueryDslSpanQuery.describe('Span query whose matches must not overlap those returned.'); },
    get include() { return QueryDslSpanQuery.describe('Span query whose matches are filtered.'); },
    post: integer.describe('The number of tokens after the include span that can’t have overlap with the exclude span.').optional(),
    pre: integer.describe('The number of tokens before the include span that can’t have overlap with the exclude span.').optional()
}).meta({ id: 'QueryDslSpanNotQuery' });
export const QueryDslSpanOrQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get clauses() { return QueryDslSpanQuery.array().describe('Array of one or more other span type queries.'); }
}).meta({ id: 'QueryDslSpanOrQuery' });
export const QueryDslSpanTermQuery = z.object({
    ...QueryDslQueryBase.shape,
    value: FieldValue,
    term: FieldValue
}).meta({ id: 'QueryDslSpanTermQuery' });
export const QueryDslSpanWithinQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get big() { return QueryDslSpanQuery.describe('Can be any span query. Matching spans from `little` that are enclosed within `big` are returned.'); },
    get little() { return QueryDslSpanQuery.describe('Can be any span query. Matching spans from `little` that are enclosed within `big` are returned.'); }
}).meta({ id: 'QueryDslSpanWithinQuery' });
const QueryDslSpanQueryExclusiveProps = z.union([z.object({ span_containing: z.lazy(() => QueryDslSpanContainingQuery) }), z.object({ span_field_masking: z.lazy(() => QueryDslSpanFieldMaskingQuery) }), z.object({ span_first: z.lazy(() => QueryDslSpanFirstQuery) }), z.object({ span_gap: QueryDslSpanGapQuery }), z.object({ span_multi: z.lazy(() => QueryDslSpanMultiTermQuery) }), z.object({ span_near: z.lazy(() => QueryDslSpanNearQuery) }), z.object({ span_not: z.lazy(() => QueryDslSpanNotQuery) }), z.object({ span_or: z.lazy(() => QueryDslSpanOrQuery) }), z.object({ span_term: z.record(Field, z.union([QueryDslSpanTermQuery, FieldValue])) }), z.object({ span_within: z.lazy(() => QueryDslSpanWithinQuery) })]);
export const QueryDslSpanQuery = QueryDslSpanQueryExclusiveProps.meta({ id: 'QueryDslSpanQuery' });
export const QueryDslSpanContainingQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    get big() { return QueryDslSpanQuery.describe('Can be any span query. Matching spans from `big` that contain matches from `little` are returned.'); },
    get little() { return QueryDslSpanQuery.describe('Can be any span query. Matching spans from `big` that contain matches from `little` are returned.'); }
}).meta({ id: 'QueryDslSpanContainingQuery' });
export const TokenPruningConfig = z.object({
    tokens_freq_ratio_threshold: integer.describe('Tokens whose frequency is more than this threshold times the average frequency of all tokens in the specified field are considered outliers and pruned.').optional(),
    tokens_weight_threshold: float.describe('Tokens whose weight is less than this threshold are considered nonsignificant and pruned.').optional(),
    only_score_pruned_tokens: z.boolean().describe('Whether to only score pruned tokens, vs only scoring kept tokens.').optional()
}).meta({ id: 'TokenPruningConfig' });
const QueryDslSparseVectorQueryCommonProps = z.object({
    field: Field.describe('The name of the field that contains the token-weight pairs to be searched against. This field must be a mapped sparse_vector field.'),
    query: z.string().describe('The query text you want to use for search. If inference_id is specified, query must also be specified.').optional(),
    prune: z.boolean().describe('Whether to perform pruning, omitting the non-significant tokens from the query to improve query performance. If prune is true but the pruning_config is not specified, pruning will occur but default values will be used. Default: false').optional(),
    pruning_config: TokenPruningConfig.describe('Optional pruning configuration. If enabled, this will omit non-significant tokens from the query in order to improve query performance. This is only used if prune is set to true. If prune is set to true but pruning_config is not specified, default values will be used.').optional()
});
const QueryDslSparseVectorQueryExclusiveProps = z.union([z.object({ query_vector: z.record(z.string(), float) }), z.object({ inference_id: Id })]);
export const QueryDslSparseVectorQuery = QueryDslSparseVectorQueryCommonProps.and(QueryDslSparseVectorQueryExclusiveProps).meta({ id: 'QueryDslSparseVectorQuery' });
export const QueryDslTermQuery = z.object({
    ...QueryDslQueryBase.shape,
    value: FieldValue.describe('Term you wish to find in the provided field.'),
    case_insensitive: z.boolean().describe('Allows ASCII case insensitive matching of the value with the indexed field values when set to `true`. When `false`, the case sensitivity of matching depends on the underlying field’s mapping.').optional()
}).meta({ id: 'QueryDslTermQuery' });
export const QueryDslTermsQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional()
}).catchall(z.any()).meta({ id: 'QueryDslTermsQuery' });
export const QueryDslTermsSetQuery = z.object({
    boost: float.describe('Floating point number used to decrease or increase the relevance scores of the query. Boost values are relative to the default value of 1.0. A boost value between 0 and 1.0 decreases the relevance score. A value greater than 1.0 increases the relevance score.').optional(),
    query_name: z.string().optional(),
    minimum_should_match: MinimumShouldMatch.describe('Specification describing number of matching terms required to return a document.').optional(),
    minimum_should_match_field: Field.describe('Numeric field containing the number of matching terms required to return a document.').optional(),
    get minimum_should_match_script() { return z.union([Script, ScriptSource]).describe('Custom script containing the number of matching terms required to return a document.').optional(); },
    terms: z.array(FieldValue).describe('Array of terms you wish to find in the provided field.')
}).meta({ id: 'QueryDslTermsSetQuery' });
export const QueryDslTextExpansionQuery = z.object({
    ...QueryDslQueryBase.shape,
    model_id: z.string().describe('The text expansion NLP model to use'),
    model_text: z.string().describe('The query text'),
    pruning_config: TokenPruningConfig.describe('Token pruning configurations').optional()
}).meta({ id: 'QueryDslTextExpansionQuery' });
export const QueryDslWeightedTokensQuery = z.object({
    ...QueryDslQueryBase.shape,
    tokens: z.union([z.record(z.string(), float), z.array(z.record(z.string(), float))]).describe('The tokens representing this query'),
    pruning_config: TokenPruningConfig.describe('Token pruning configurations').optional()
}).meta({ id: 'QueryDslWeightedTokensQuery' });
export const QueryDslWildcardQuery = z.object({
    ...QueryDslQueryBase.shape,
    case_insensitive: z.boolean().describe('Allows case insensitive matching of the pattern with the indexed field values when set to true. Default is false which means the case sensitivity of matching depends on the underlying field’s mapping.').optional(),
    rewrite: MultiTermQueryRewrite.describe('Method used to rewrite the query.').optional(),
    value: z.string().describe('Wildcard pattern for terms you wish to find in the provided field. Required, when wildcard is not set.').optional(),
    wildcard: z.string().describe('Wildcard pattern for terms you wish to find in the provided field. Required, when value is not set.').optional()
}).meta({ id: 'QueryDslWildcardQuery' });
export const QueryDslWrapperQuery = z.object({
    ...QueryDslQueryBase.shape,
    query: z.string().describe('A base64 encoded query. The binary data format can be any of JSON, YAML, CBOR or SMILE encodings')
}).meta({ id: 'QueryDslWrapperQuery' });
export const QueryDslTypeQuery = z.object({
    ...QueryDslQueryBase.shape,
    value: z.string()
}).meta({ id: 'QueryDslTypeQuery' });
const QueryDslQueryContainerExclusiveProps = z.union([z.object({ bool: z.lazy(() => QueryDslBoolQuery) }), z.object({ boosting: z.lazy(() => QueryDslBoostingQuery) }), z.object({ common: z.record(Field, z.union([QueryDslCommonTermsQuery, z.string()])) }), z.object({ combined_fields: QueryDslCombinedFieldsQuery }), z.object({ constant_score: z.lazy(() => QueryDslConstantScoreQuery) }), z.object({ dis_max: z.lazy(() => QueryDslDisMaxQuery) }), z.object({ distance_feature: QueryDslDistanceFeatureQuery }), z.object({ exists: QueryDslExistsQuery }), z.object({ function_score: z.union([z.lazy(() => QueryDslFunctionScoreQuery), z.array(z.lazy(() => QueryDslFunctionScoreContainer))]) }), z.object({ fuzzy: z.record(Field, z.union([QueryDslFuzzyQuery, z.union([z.string(), double, z.boolean()])])) }), z.object({ geo_bounding_box: QueryDslGeoBoundingBoxQuery }), z.object({ geo_distance: QueryDslGeoDistanceQuery }), z.object({ geo_grid: z.record(Field, QueryDslGeoGridQuery) }), z.object({ geo_polygon: QueryDslGeoPolygonQuery }), z.object({ geo_shape: QueryDslGeoShapeQuery }), z.object({ has_child: z.lazy(() => QueryDslHasChildQuery) }), z.object({ has_parent: z.lazy(() => QueryDslHasParentQuery) }), z.object({ ids: QueryDslIdsQuery }), z.object({ intervals: z.record(Field, z.lazy(() => QueryDslIntervalsQuery)) }), z.object({ knn: z.lazy(() => KnnQuery) }), z.object({ match: z.record(Field, z.union([QueryDslMatchQuery, z.union([z.string(), float, z.boolean()])])) }), z.object({ match_all: QueryDslMatchAllQuery }), z.object({ match_bool_prefix: z.record(Field, z.union([QueryDslMatchBoolPrefixQuery, z.string()])) }), z.object({ match_none: QueryDslMatchNoneQuery }), z.object({ match_phrase: z.record(Field, z.union([QueryDslMatchPhraseQuery, z.string()])) }), z.object({ match_phrase_prefix: z.record(Field, z.union([QueryDslMatchPhrasePrefixQuery, z.string()])) }), z.object({ more_like_this: QueryDslMoreLikeThisQuery }), z.object({ multi_match: QueryDslMultiMatchQuery }), z.object({ nested: z.lazy(() => QueryDslNestedQuery) }), z.object({ parent_id: QueryDslParentIdQuery }), z.object({ percolate: QueryDslPercolateQuery }), z.object({ pinned: z.lazy(() => QueryDslPinnedQuery) }), z.object({ prefix: z.record(Field, z.union([QueryDslPrefixQuery, z.string()])) }), z.object({ query_string: QueryDslQueryStringQuery }), z.object({ range: z.record(Field, QueryDslRangeQuery) }), z.object({ rank_feature: QueryDslRankFeatureQuery }), z.object({ regexp: z.record(Field, z.union([QueryDslRegexpQuery, z.string()])) }), z.object({ rule: z.lazy(() => QueryDslRuleQuery) }), z.object({ script: z.lazy(() => QueryDslScriptQuery) }), z.object({ script_score: z.lazy(() => QueryDslScriptScoreQuery) }), z.object({ semantic: QueryDslSemanticQuery }), z.object({ shape: QueryDslShapeQuery }), z.object({ simple_query_string: QueryDslSimpleQueryStringQuery }), z.object({ span_containing: z.lazy(() => QueryDslSpanContainingQuery) }), z.object({ span_field_masking: z.lazy(() => QueryDslSpanFieldMaskingQuery) }), z.object({ span_first: z.lazy(() => QueryDslSpanFirstQuery) }), z.object({ span_multi: z.lazy(() => QueryDslSpanMultiTermQuery) }), z.object({ span_near: z.lazy(() => QueryDslSpanNearQuery) }), z.object({ span_not: z.lazy(() => QueryDslSpanNotQuery) }), z.object({ span_or: z.lazy(() => QueryDslSpanOrQuery) }), z.object({ span_term: z.record(Field, z.union([QueryDslSpanTermQuery, FieldValue])) }), z.object({ span_within: z.lazy(() => QueryDslSpanWithinQuery) }), z.object({ sparse_vector: QueryDslSparseVectorQuery }), z.object({ term: z.record(Field, z.union([QueryDslTermQuery, FieldValue])) }), z.object({ terms: QueryDslTermsQuery }), z.object({ terms_set: z.record(Field, z.lazy(() => QueryDslTermsSetQuery)) }), z.object({ text_expansion: z.record(Field, QueryDslTextExpansionQuery) }), z.object({ weighted_tokens: z.record(Field, QueryDslWeightedTokensQuery) }), z.object({ wildcard: z.record(Field, z.union([QueryDslWildcardQuery, z.string()])) }), z.object({ wrapper: QueryDslWrapperQuery }), z.object({ type: QueryDslTypeQuery })]);
/** An Elasticsearch Query DSL (Domain Specific Language) object that defines a query. */
export const QueryDslQueryContainer = QueryDslQueryContainerExclusiveProps.meta({ id: 'QueryDslQueryContainer' });
export const SearchHighlighterOrder = z.enum(['score']).meta({ id: 'SearchHighlighterOrder' });
export const SearchHighlighterTagsSchema = z.enum(['styled']).meta({ id: 'SearchHighlighterTagsSchema' });
export const SearchHighlightBase = z.object({
    type: SearchHighlighterType.optional(),
    boundary_chars: z.string().describe('A string that contains each boundary character.').optional(),
    boundary_max_scan: integer.describe('How far to scan for boundary characters.').optional(),
    boundary_scanner: SearchBoundaryScanner.describe('Specifies how to break the highlighted fragments: chars, sentence, or word. Only valid for the unified and fvh highlighters. Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.').optional(),
    boundary_scanner_locale: z.string().describe('Controls which locale is used to search for sentence and word boundaries. This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.').optional(),
    force_source: z.boolean().optional(),
    fragmenter: SearchHighlighterFragmenter.describe('Specifies how text should be broken up in highlight snippets: `simple` or `span`. Only valid for the `plain` highlighter.').optional(),
    fragment_size: integer.describe('The size of the highlighted fragment in characters.').optional(),
    highlight_filter: z.boolean().optional(),
    get highlight_query() { return QueryDslQueryContainer.describe('Highlight matches for a query other than the search query. This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.').optional(); },
    max_fragment_length: integer.optional(),
    max_analyzed_offset: integer.describe('If set to a non-negative value, highlighting stops at this defined maximum limit. The rest of the text is not processed, thus not highlighted and no error is returned The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.').optional(),
    no_match_size: integer.describe('The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.').optional(),
    number_of_fragments: integer.describe('The maximum number of fragments to return. If the number of fragments is set to `0`, no fragments are returned. Instead, the entire field contents are highlighted and returned. This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required. If `number_of_fragments` is `0`, `fragment_size` is ignored.').optional(),
    options: z.record(z.string(), z.any()).optional(),
    order: SearchHighlighterOrder.describe('Sorts highlighted fragments by score when set to `score`. By default, fragments will be output in the order they appear in the field (order: `none`). Setting this option to `score` will output the most relevant fragments first. Each highlighter applies its own logic to compute relevancy scores.').optional(),
    phrase_limit: integer.describe('Controls the number of matching phrases in a document that are considered. Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory. When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory. Only supported by the `fvh` highlighter.').optional(),
    post_tags: z.array(z.string()).describe('Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
    pre_tags: z.array(z.string()).describe('Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
    require_field_match: z.boolean().describe('By default, only fields that contains a query match are highlighted. Set to `false` to highlight all fields.').optional(),
    tags_schema: SearchHighlighterTagsSchema.describe('Set to `styled` to use the built-in tag schema.').optional()
}).meta({ id: 'SearchHighlightBase' });
export const SearchHighlighterEncoder = z.enum(['default', 'html']).meta({ id: 'SearchHighlighterEncoder' });
export const SearchHighlightField = z.object({
    type: SearchHighlighterType.optional(),
    boundary_chars: z.string().describe('A string that contains each boundary character.').optional(),
    boundary_max_scan: integer.describe('How far to scan for boundary characters.').optional(),
    boundary_scanner: SearchBoundaryScanner.describe('Specifies how to break the highlighted fragments: chars, sentence, or word. Only valid for the unified and fvh highlighters. Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.').optional(),
    boundary_scanner_locale: z.string().describe('Controls which locale is used to search for sentence and word boundaries. This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.').optional(),
    force_source: z.boolean().optional(),
    fragmenter: SearchHighlighterFragmenter.describe('Specifies how text should be broken up in highlight snippets: `simple` or `span`. Only valid for the `plain` highlighter.').optional(),
    fragment_size: integer.describe('The size of the highlighted fragment in characters.').optional(),
    highlight_filter: z.boolean().optional(),
    get highlight_query() { return QueryDslQueryContainer.describe('Highlight matches for a query other than the search query. This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.').optional(); },
    max_fragment_length: integer.optional(),
    max_analyzed_offset: integer.describe('If set to a non-negative value, highlighting stops at this defined maximum limit. The rest of the text is not processed, thus not highlighted and no error is returned The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.').optional(),
    no_match_size: integer.describe('The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.').optional(),
    number_of_fragments: integer.describe('The maximum number of fragments to return. If the number of fragments is set to `0`, no fragments are returned. Instead, the entire field contents are highlighted and returned. This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required. If `number_of_fragments` is `0`, `fragment_size` is ignored.').optional(),
    options: z.record(z.string(), z.any()).optional(),
    order: SearchHighlighterOrder.describe('Sorts highlighted fragments by score when set to `score`. By default, fragments will be output in the order they appear in the field (order: `none`). Setting this option to `score` will output the most relevant fragments first. Each highlighter applies its own logic to compute relevancy scores.').optional(),
    phrase_limit: integer.describe('Controls the number of matching phrases in a document that are considered. Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory. When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory. Only supported by the `fvh` highlighter.').optional(),
    post_tags: z.array(z.string()).describe('Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
    pre_tags: z.array(z.string()).describe('Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
    require_field_match: z.boolean().describe('By default, only fields that contains a query match are highlighted. Set to `false` to highlight all fields.').optional(),
    tags_schema: SearchHighlighterTagsSchema.describe('Set to `styled` to use the built-in tag schema.').optional(),
    fragment_offset: integer.optional(),
    matched_fields: Fields.optional()
}).meta({ id: 'SearchHighlightField' });
export const SearchHighlight = z.object({
    type: SearchHighlighterType.optional(),
    boundary_chars: z.string().describe('A string that contains each boundary character.').optional(),
    boundary_max_scan: integer.describe('How far to scan for boundary characters.').optional(),
    boundary_scanner: SearchBoundaryScanner.describe('Specifies how to break the highlighted fragments: chars, sentence, or word. Only valid for the unified and fvh highlighters. Defaults to `sentence` for the `unified` highlighter. Defaults to `chars` for the `fvh` highlighter.').optional(),
    boundary_scanner_locale: z.string().describe('Controls which locale is used to search for sentence and word boundaries. This parameter takes a form of a language tag, for example: `"en-US"`, `"fr-FR"`, `"ja-JP"`.').optional(),
    force_source: z.boolean().optional(),
    fragmenter: SearchHighlighterFragmenter.describe('Specifies how text should be broken up in highlight snippets: `simple` or `span`. Only valid for the `plain` highlighter.').optional(),
    fragment_size: integer.describe('The size of the highlighted fragment in characters.').optional(),
    highlight_filter: z.boolean().optional(),
    get highlight_query() { return QueryDslQueryContainer.describe('Highlight matches for a query other than the search query. This is especially useful if you use a rescore query because those are not taken into account by highlighting by default.').optional(); },
    max_fragment_length: integer.optional(),
    max_analyzed_offset: integer.describe('If set to a non-negative value, highlighting stops at this defined maximum limit. The rest of the text is not processed, thus not highlighted and no error is returned The `max_analyzed_offset` query setting does not override the `index.highlight.max_analyzed_offset` setting, which prevails when it’s set to lower value than the query setting.').optional(),
    no_match_size: integer.describe('The amount of text you want to return from the beginning of the field if there are no matching fragments to highlight.').optional(),
    number_of_fragments: integer.describe('The maximum number of fragments to return. If the number of fragments is set to `0`, no fragments are returned. Instead, the entire field contents are highlighted and returned. This can be handy when you need to highlight short texts such as a title or address, but fragmentation is not required. If `number_of_fragments` is `0`, `fragment_size` is ignored.').optional(),
    options: z.record(z.string(), z.any()).optional(),
    order: SearchHighlighterOrder.describe('Sorts highlighted fragments by score when set to `score`. By default, fragments will be output in the order they appear in the field (order: `none`). Setting this option to `score` will output the most relevant fragments first. Each highlighter applies its own logic to compute relevancy scores.').optional(),
    phrase_limit: integer.describe('Controls the number of matching phrases in a document that are considered. Prevents the `fvh` highlighter from analyzing too many phrases and consuming too much memory. When using `matched_fields`, `phrase_limit` phrases per matched field are considered. Raising the limit increases query time and consumes more memory. Only supported by the `fvh` highlighter.').optional(),
    post_tags: z.array(z.string()).describe('Use in conjunction with `pre_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
    pre_tags: z.array(z.string()).describe('Use in conjunction with `post_tags` to define the HTML tags to use for the highlighted text. By default, highlighted text is wrapped in `<em>` and `</em>` tags.').optional(),
    require_field_match: z.boolean().describe('By default, only fields that contains a query match are highlighted. Set to `false` to highlight all fields.').optional(),
    tags_schema: SearchHighlighterTagsSchema.describe('Set to `styled` to use the built-in tag schema.').optional(),
    encoder: SearchHighlighterEncoder.optional(),
    get fields() { return z.union([z.record(Field, SearchHighlightField), z.array(z.record(Field, SearchHighlightField))]); }
}).meta({ id: 'SearchHighlight' });
export const SearchInnerHits = z.object({
    name: Name.describe('The name for the particular inner hit definition in the response. Useful when a search request contains multiple inner hits.').optional(),
    size: integer.describe('The maximum number of hits to return per `inner_hits`.').optional(),
    from: integer.describe('Inner hit starting document offset.').optional(),
    get collapse() { return SearchFieldCollapse.optional(); },
    docvalue_fields: z.array(z.union([QueryDslFieldAndFormat, Field])).optional(),
    explain: z.boolean().optional(),
    get highlight() { return SearchHighlight.optional(); },
    ignore_unmapped: z.boolean().optional(),
    get script_fields() { return z.record(Field, ScriptField).optional(); },
    seq_no_primary_term: z.boolean().optional(),
    field: z.array(Field).optional(),
    fields: z.array(z.union([QueryDslFieldAndFormat, Field])).optional(),
    get sort() { return Sort.describe('How the inner hits should be sorted per `inner_hits`. By default, inner hits are sorted by score.').optional(); },
    _source: SearchSourceConfig.optional(),
    stored_fields: Fields.optional(),
    track_scores: z.boolean().optional(),
    version: z.boolean().optional()
}).meta({ id: 'SearchInnerHits' });
export const SearchFieldCollapse = z.object({
    field: Field.describe('The field to collapse the result set on'),
    get inner_hits() { return z.union([SearchInnerHits, SearchInnerHits.array()]).describe('The number of inner hits and their sort order').optional(); },
    max_concurrent_group_searches: integer.describe('The number of concurrent requests allowed to retrieve the inner_hits per group').optional(),
    get collapse() { return SearchFieldCollapse.optional(); }
}).meta({ id: 'SearchFieldCollapse' });
/**
 * Some APIs will return values such as numbers also as a string (notably epoch timestamps). This behavior
 * is used to capture this behavior while keeping the semantics of the field type.
 *
 * Depending on the target language, code generators can keep the union or remove it and leniently parse
 * strings to the target type.
 */
export const SpecUtilsStringified = z.union([z.any(), z.string()]).meta({ id: 'SpecUtilsStringified' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const VersionString = z.string().meta({ id: 'VersionString' });
export const AnalysisTokenFilterBase = z.object({
    version: VersionString.optional()
}).meta({ id: 'AnalysisTokenFilterBase' });
export const AnalysisApostropheTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('apostrophe')
}).meta({ id: 'AnalysisApostropheTokenFilter' });
export const AnalysisArabicNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('arabic_normalization')
}).meta({ id: 'AnalysisArabicNormalizationTokenFilter' });
export const AnalysisArabicStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('arabic_stem')
}).meta({ id: 'AnalysisArabicStemTokenFilter' });
export const AnalysisAsciiFoldingTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('asciifolding'),
    preserve_original: SpecUtilsStringified.describe('If `true`, emit both original tokens and folded tokens. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisAsciiFoldingTokenFilter' });
export const AnalysisBengaliNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('bengali_normalization')
}).meta({ id: 'AnalysisBengaliNormalizationTokenFilter' });
export const AnalysisBrazilianStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('brazilian_stem')
}).meta({ id: 'AnalysisBrazilianStemTokenFilter' });
export const AnalysisCharFilterBase = z.object({
    version: VersionString.optional()
}).meta({ id: 'AnalysisCharFilterBase' });
export const AnalysisHtmlStripCharFilter = z.object({
    ...AnalysisCharFilterBase.shape,
    type: z.literal('html_strip'),
    escaped_tags: z.array(z.string()).optional()
}).meta({ id: 'AnalysisHtmlStripCharFilter' });
export const AnalysisMappingCharFilter = z.object({
    ...AnalysisCharFilterBase.shape,
    type: z.literal('mapping'),
    mappings: z.array(z.string()).optional(),
    mappings_path: z.string().optional()
}).meta({ id: 'AnalysisMappingCharFilter' });
export const AnalysisPatternReplaceCharFilter = z.object({
    ...AnalysisCharFilterBase.shape,
    type: z.literal('pattern_replace'),
    flags: z.string().optional(),
    pattern: z.string(),
    replacement: z.string().optional()
}).meta({ id: 'AnalysisPatternReplaceCharFilter' });
export const AnalysisIcuNormalizationMode = z.enum(['decompose', 'compose']).meta({ id: 'AnalysisIcuNormalizationMode' });
export const AnalysisIcuNormalizationType = z.enum(['nfc', 'nfkc', 'nfkc_cf']).meta({ id: 'AnalysisIcuNormalizationType' });
export const AnalysisIcuNormalizationCharFilter = z.object({
    ...AnalysisCharFilterBase.shape,
    type: z.literal('icu_normalizer'),
    mode: AnalysisIcuNormalizationMode.optional(),
    name: AnalysisIcuNormalizationType.optional(),
    unicode_set_filter: z.string().optional()
}).meta({ id: 'AnalysisIcuNormalizationCharFilter' });
export const AnalysisKuromojiIterationMarkCharFilter = z.object({
    ...AnalysisCharFilterBase.shape,
    type: z.literal('kuromoji_iteration_mark'),
    normalize_kana: z.boolean(),
    normalize_kanji: z.boolean()
}).meta({ id: 'AnalysisKuromojiIterationMarkCharFilter' });
export const AnalysisCharFilterDefinition = z.union([AnalysisHtmlStripCharFilter, AnalysisMappingCharFilter, AnalysisPatternReplaceCharFilter, AnalysisIcuNormalizationCharFilter, AnalysisKuromojiIterationMarkCharFilter]).meta({ id: 'AnalysisCharFilterDefinition' });
export const AnalysisCharFilter = z.union([z.string(), AnalysisCharFilterDefinition]).meta({ id: 'AnalysisCharFilter' });
export const AnalysisTokenizerBase = z.object({
    version: VersionString.optional()
}).meta({ id: 'AnalysisTokenizerBase' });
export const AnalysisCharGroupTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('char_group'),
    tokenize_on_chars: z.array(z.string()),
    max_token_length: integer.optional()
}).meta({ id: 'AnalysisCharGroupTokenizer' });
export const AnalysisCjkBigramIgnoredScript = z.enum(['han', 'hangul', 'hiragana', 'katakana']).meta({ id: 'AnalysisCjkBigramIgnoredScript' });
export const AnalysisCjkBigramTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('cjk_bigram'),
    ignored_scripts: z.array(AnalysisCjkBigramIgnoredScript).describe('Array of character scripts for which to disable bigrams.').optional(),
    output_unigrams: z.boolean().describe('If `true`, emit tokens in both bigram and unigram form. If `false`, a CJK character is output in unigram form when it has no adjacent characters. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisCjkBigramTokenFilter' });
export const AnalysisCjkWidthTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('cjk_width')
}).meta({ id: 'AnalysisCjkWidthTokenFilter' });
export const AnalysisClassicTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('classic')
}).meta({ id: 'AnalysisClassicTokenFilter' });
export const AnalysisClassicTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('classic'),
    max_token_length: integer.optional()
}).meta({ id: 'AnalysisClassicTokenizer' });
export const AnalysisCommonGramsTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('common_grams'),
    common_words: z.array(z.string()).describe('A list of tokens. The filter generates bigrams for these tokens. Either this or the `common_words_path` parameter is required.').optional(),
    common_words_path: z.string().describe('Path to a file containing a list of tokens. The filter generates bigrams for these tokens. This path must be absolute or relative to the `config` location. The file must be UTF-8 encoded. Each token in the file must be separated by a line break. Either this or the `common_words` parameter is required.').optional(),
    ignore_case: z.boolean().describe('If `true`, matches for common words matching are case-insensitive. Defaults to `false`.').optional(),
    query_mode: z.boolean().describe('If `true`, the filter excludes the following tokens from the output: - Unigrams for common words - Unigrams for terms followed by common words Defaults to `false`. We recommend enabling this parameter for search analyzers.').optional()
}).meta({ id: 'AnalysisCommonGramsTokenFilter' });
export const AnalysisCompoundWordTokenFilterBase = z.object({
    ...AnalysisTokenFilterBase.shape,
    max_subword_size: integer.describe('Maximum subword character length. Longer subword tokens are excluded from the output. Defaults to `15`.').optional(),
    min_subword_size: integer.describe('Minimum subword character length. Shorter subword tokens are excluded from the output. Defaults to `2`.').optional(),
    min_word_size: integer.describe('Minimum word character length. Shorter word tokens are excluded from the output. Defaults to `5`.').optional(),
    only_longest_match: z.boolean().describe('If `true`, only include the longest matching subword. Defaults to `false`.').optional(),
    word_list: z.array(z.string()).describe('A list of subwords to look for in the token stream. If found, the subword is included in the token output. Either this parameter or `word_list_path` must be specified.').optional(),
    word_list_path: z.string().describe('Path to a file that contains a list of subwords to find in the token stream. If found, the subword is included in the token output. This path must be absolute or relative to the config location, and the file must be UTF-8 encoded. Each token in the file must be separated by a line break. Either this parameter or `word_list` must be specified.').optional()
}).meta({ id: 'AnalysisCompoundWordTokenFilterBase' });
export const AnalysisConditionTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('condition'),
    filter: z.array(z.string()).describe('Array of token filters. If a token matches the predicate script in the `script` parameter, these filters are applied to the token in the order provided.'),
    script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]).describe('Predicate script used to apply token filters. If a token matches this script, the filters in the `filter` parameter are applied to the token.')
}).meta({ id: 'AnalysisConditionTokenFilter' });
export const AnalysisCzechStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('czech_stem')
}).meta({ id: 'AnalysisCzechStemTokenFilter' });
export const AnalysisDecimalDigitTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('decimal_digit')
}).meta({ id: 'AnalysisDecimalDigitTokenFilter' });
export const AnalysisDelimitedPayloadEncoding = z.enum(['int', 'float', 'identity']).meta({ id: 'AnalysisDelimitedPayloadEncoding' });
export const AnalysisDelimitedPayloadTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('delimited_payload'),
    delimiter: z.string().describe('Character used to separate tokens from payloads. Defaults to `|`.').optional(),
    encoding: AnalysisDelimitedPayloadEncoding.describe('Data type for the stored payload.').optional()
}).meta({ id: 'AnalysisDelimitedPayloadTokenFilter' });
export const AnalysisDictionaryDecompounderTokenFilter = z.object({
    ...AnalysisCompoundWordTokenFilterBase.shape,
    type: z.literal('dictionary_decompounder')
}).meta({ id: 'AnalysisDictionaryDecompounderTokenFilter' });
export const AnalysisDutchStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('dutch_stem')
}).meta({ id: 'AnalysisDutchStemTokenFilter' });
export const AnalysisEdgeNGramSide = z.enum(['front', 'back']).meta({ id: 'AnalysisEdgeNGramSide' });
export const AnalysisEdgeNGramTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('edge_ngram'),
    max_gram: integer.describe('Maximum character length of a gram. For custom token filters, defaults to `2`. For the built-in edge_ngram filter, defaults to `1`.').optional(),
    min_gram: integer.describe('Minimum character length of a gram. Defaults to `1`.').optional(),
    side: AnalysisEdgeNGramSide.describe('Indicates whether to truncate tokens from the `front` or `back`. Defaults to `front`.').optional(),
    preserve_original: SpecUtilsStringified.describe('Emits original token when set to `true`. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisEdgeNGramTokenFilter' });
export const AnalysisTokenChar = z.enum(['letter', 'digit', 'whitespace', 'punctuation', 'symbol', 'custom']).meta({ id: 'AnalysisTokenChar' });
export const AnalysisEdgeNGramTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('edge_ngram'),
    custom_token_chars: z.string().optional(),
    max_gram: integer.optional(),
    min_gram: integer.optional(),
    token_chars: z.array(AnalysisTokenChar).optional()
}).meta({ id: 'AnalysisEdgeNGramTokenizer' });
export const AnalysisElisionTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('elision'),
    articles: z.array(z.string()).describe('List of elisions to remove. To be removed, the elision must be at the beginning of a token and be immediately followed by an apostrophe. Both the elision and apostrophe are removed. For custom `elision` filters, either this parameter or `articles_path` must be specified.').optional(),
    articles_path: z.string().describe('Path to a file that contains a list of elisions to remove. This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each elision in the file must be separated by a line break. To be removed, the elision must be at the beginning of a token and be immediately followed by an apostrophe. Both the elision and apostrophe are removed. For custom `elision` filters, either this parameter or `articles` must be specified.').optional(),
    articles_case: SpecUtilsStringified.describe('If `true`, elision matching is case insensitive. If `false`, elision matching is case sensitive. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisElisionTokenFilter' });
export const AnalysisFingerprintTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('fingerprint'),
    max_output_size: integer.describe('Maximum character length, including whitespace, of the output token. Defaults to `255`. Concatenated tokens longer than this will result in no token output.').optional(),
    separator: z.string().describe('Character to use to concatenate the token stream input. Defaults to a space.').optional()
}).meta({ id: 'AnalysisFingerprintTokenFilter' });
export const AnalysisFlattenGraphTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('flatten_graph')
}).meta({ id: 'AnalysisFlattenGraphTokenFilter' });
export const AnalysisFrenchStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('french_stem')
}).meta({ id: 'AnalysisFrenchStemTokenFilter' });
export const AnalysisGermanNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('german_normalization')
}).meta({ id: 'AnalysisGermanNormalizationTokenFilter' });
export const AnalysisGermanStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('german_stem')
}).meta({ id: 'AnalysisGermanStemTokenFilter' });
export const AnalysisHindiNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('hindi_normalization')
}).meta({ id: 'AnalysisHindiNormalizationTokenFilter' });
export const AnalysisHunspellTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('hunspell'),
    dedup: z.boolean().describe('If `true`, duplicate tokens are removed from the filter’s output. Defaults to `true`.').optional(),
    dictionary: z.string().describe('One or more `.dic` files (e.g, `en_US.dic`, my_custom.dic) to use for the Hunspell dictionary. By default, the `hunspell` filter uses all `.dic` files in the `<$ES_PATH_CONF>/hunspell/<locale>` directory specified using the `lang`, `language`, or `locale` parameter.').optional(),
    locale: z.string().describe('Locale directory used to specify the `.aff` and `.dic` files for a Hunspell dictionary.'),
    lang: z.string().describe('Locale directory used to specify the `.aff` and `.dic` files for a Hunspell dictionary.'),
    language: z.string().describe('Locale directory used to specify the `.aff` and `.dic` files for a Hunspell dictionary.'),
    longest_only: z.boolean().describe('If `true`, only the longest stemmed version of each token is included in the output. If `false`, all stemmed versions of the token are included. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisHunspellTokenFilter' });
export const AnalysisHyphenationDecompounderTokenFilter = z.object({
    ...AnalysisCompoundWordTokenFilterBase.shape,
    type: z.literal('hyphenation_decompounder'),
    hyphenation_patterns_path: z.string().describe('Path to an Apache FOP (Formatting Objects Processor) XML hyphenation pattern file. This path must be absolute or relative to the `config` location. Only FOP v1.2 compatible files are supported.'),
    no_sub_matches: z.boolean().describe('If `true`, do not match sub tokens in tokens that are in the word list. Defaults to `false`.').optional(),
    no_overlapping_matches: z.boolean().describe('If `true`, do not allow overlapping tokens. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisHyphenationDecompounderTokenFilter' });
export const AnalysisIcuCollationAlternate = z.enum(['shifted', 'non-ignorable']).meta({ id: 'AnalysisIcuCollationAlternate' });
export const AnalysisIcuCollationCaseFirst = z.enum(['lower', 'upper']).meta({ id: 'AnalysisIcuCollationCaseFirst' });
export const AnalysisIcuCollationDecomposition = z.enum(['no', 'identical']).meta({ id: 'AnalysisIcuCollationDecomposition' });
export const AnalysisIcuCollationStrength = z.enum(['primary', 'secondary', 'tertiary', 'quaternary', 'identical']).meta({ id: 'AnalysisIcuCollationStrength' });
export const AnalysisIcuCollationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('icu_collation'),
    alternate: AnalysisIcuCollationAlternate.optional(),
    caseFirst: AnalysisIcuCollationCaseFirst.optional(),
    caseLevel: z.boolean().optional(),
    country: z.string().optional(),
    decomposition: AnalysisIcuCollationDecomposition.optional(),
    hiraganaQuaternaryMode: z.boolean().optional(),
    language: z.string().optional(),
    numeric: z.boolean().optional(),
    rules: z.string().optional(),
    strength: AnalysisIcuCollationStrength.optional(),
    variableTop: z.string().optional(),
    variant: z.string().optional()
}).meta({ id: 'AnalysisIcuCollationTokenFilter' });
export const AnalysisIcuFoldingTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('icu_folding'),
    unicode_set_filter: z.string()
}).meta({ id: 'AnalysisIcuFoldingTokenFilter' });
export const AnalysisIcuNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('icu_normalizer'),
    name: AnalysisIcuNormalizationType
}).meta({ id: 'AnalysisIcuNormalizationTokenFilter' });
export const AnalysisIcuTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('icu_tokenizer'),
    rule_files: z.string()
}).meta({ id: 'AnalysisIcuTokenizer' });
export const AnalysisIcuTransformDirection = z.enum(['forward', 'reverse']).meta({ id: 'AnalysisIcuTransformDirection' });
export const AnalysisIcuTransformTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('icu_transform'),
    dir: AnalysisIcuTransformDirection.optional(),
    id: z.string()
}).meta({ id: 'AnalysisIcuTransformTokenFilter' });
export const AnalysisIndicNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('indic_normalization')
}).meta({ id: 'AnalysisIndicNormalizationTokenFilter' });
export const AnalysisJaStopTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('ja_stop'),
    stopwords: AnalysisStopWords.optional()
}).meta({ id: 'AnalysisJaStopTokenFilter' });
export const AnalysisKStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('kstem')
}).meta({ id: 'AnalysisKStemTokenFilter' });
export const AnalysisKeepTypesMode = z.enum(['include', 'exclude']).meta({ id: 'AnalysisKeepTypesMode' });
export const AnalysisKeepTypesTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('keep_types'),
    mode: AnalysisKeepTypesMode.describe('Indicates whether to keep or remove the specified token types.').optional(),
    types: z.array(z.string()).describe('List of token types to keep or remove.')
}).meta({ id: 'AnalysisKeepTypesTokenFilter' });
export const AnalysisKeepWordsTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('keep'),
    keep_words: z.array(z.string()).describe('List of words to keep. Only tokens that match words in this list are included in the output. Either this parameter or `keep_words_path` must be specified.').optional(),
    keep_words_case: z.boolean().describe('If `true`, lowercase all keep words. Defaults to `false`.').optional(),
    keep_words_path: z.string().describe('Path to a file that contains a list of words to keep. Only tokens that match words in this list are included in the output. This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each word in the file must be separated by a line break. Either this parameter or `keep_words` must be specified.').optional()
}).meta({ id: 'AnalysisKeepWordsTokenFilter' });
export const AnalysisKeywordMarkerTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('keyword_marker'),
    ignore_case: z.boolean().describe('If `true`, matching for the `keywords` and `keywords_path` parameters ignores letter case. Defaults to `false`.').optional(),
    keywords: z.union([z.string(), z.array(z.string())]).describe('Array of keywords. Tokens that match these keywords are not stemmed. This parameter, `keywords_path`, or `keywords_pattern` must be specified. You cannot specify this parameter and `keywords_pattern`.').optional(),
    keywords_path: z.string().describe('Path to a file that contains a list of keywords. Tokens that match these keywords are not stemmed. This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each word in the file must be separated by a line break. This parameter, `keywords`, or `keywords_pattern` must be specified. You cannot specify this parameter and `keywords_pattern`.').optional(),
    keywords_pattern: z.string().describe('Java regular expression used to match tokens. Tokens that match this expression are marked as keywords and not stemmed. This parameter, `keywords`, or `keywords_path` must be specified. You cannot specify this parameter and `keywords` or `keywords_pattern`.').optional()
}).meta({ id: 'AnalysisKeywordMarkerTokenFilter' });
export const AnalysisKeywordRepeatTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('keyword_repeat')
}).meta({ id: 'AnalysisKeywordRepeatTokenFilter' });
export const AnalysisKeywordTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('keyword'),
    buffer_size: integer.optional()
}).meta({ id: 'AnalysisKeywordTokenizer' });
export const AnalysisKuromojiPartOfSpeechTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('kuromoji_part_of_speech'),
    stoptags: z.array(z.string())
}).meta({ id: 'AnalysisKuromojiPartOfSpeechTokenFilter' });
export const AnalysisKuromojiReadingFormTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('kuromoji_readingform'),
    use_romaji: z.boolean()
}).meta({ id: 'AnalysisKuromojiReadingFormTokenFilter' });
export const AnalysisKuromojiStemmerTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('kuromoji_stemmer'),
    minimum_length: integer
}).meta({ id: 'AnalysisKuromojiStemmerTokenFilter' });
export const AnalysisKuromojiTokenizationMode = z.enum(['normal', 'search', 'extended']).meta({ id: 'AnalysisKuromojiTokenizationMode' });
export const AnalysisKuromojiTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('kuromoji_tokenizer'),
    discard_punctuation: z.boolean().optional(),
    mode: AnalysisKuromojiTokenizationMode,
    nbest_cost: integer.optional(),
    nbest_examples: z.string().optional(),
    user_dictionary: z.string().optional(),
    user_dictionary_rules: z.array(z.string()).optional(),
    discard_compound_token: z.boolean().optional()
}).meta({ id: 'AnalysisKuromojiTokenizer' });
export const AnalysisLengthTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('length'),
    max: integer.describe('Maximum character length of a token. Longer tokens are excluded from the output. Defaults to `Integer.MAX_VALUE`, which is `2^31-1` or `2147483647`.').optional(),
    min: integer.describe('Minimum character length of a token. Shorter tokens are excluded from the output. Defaults to `0`.').optional()
}).meta({ id: 'AnalysisLengthTokenFilter' });
export const AnalysisLetterTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('letter')
}).meta({ id: 'AnalysisLetterTokenizer' });
export const AnalysisLimitTokenCountTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('limit'),
    consume_all_tokens: z.boolean().describe('If `true`, the limit filter exhausts the token stream, even if the `max_token_count` has already been reached. Defaults to `false`.').optional(),
    max_token_count: SpecUtilsStringified.describe('Maximum number of tokens to keep. Once this limit is reached, any remaining tokens are excluded from the output. Defaults to `1`.').optional()
}).meta({ id: 'AnalysisLimitTokenCountTokenFilter' });
export const AnalysisLowercaseTokenFilterLanguages = z.enum(['greek', 'irish', 'turkish']).meta({ id: 'AnalysisLowercaseTokenFilterLanguages' });
export const AnalysisLowercaseTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('lowercase'),
    language: AnalysisLowercaseTokenFilterLanguages.describe('Language-specific lowercase token filter to use.').optional()
}).meta({ id: 'AnalysisLowercaseTokenFilter' });
export const AnalysisLowercaseTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('lowercase')
}).meta({ id: 'AnalysisLowercaseTokenizer' });
export const AnalysisMinHashTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('min_hash'),
    bucket_count: integer.describe('Number of buckets to which hashes are assigned. Defaults to `512`.').optional(),
    hash_count: integer.describe('Number of ways to hash each token in the stream. Defaults to `1`.').optional(),
    hash_set_size: integer.describe('Number of hashes to keep from each bucket. Defaults to `1`. Hashes are retained by ascending size, starting with the bucket’s smallest hash first.').optional(),
    with_rotation: z.boolean().describe('If `true`, the filter fills empty buckets with the value of the first non-empty bucket to its circular right if the `hash_set_size` is `1`. If the `bucket_count` argument is greater than 1, this parameter defaults to `true`. Otherwise, this parameter defaults to `false`.').optional()
}).meta({ id: 'AnalysisMinHashTokenFilter' });
export const AnalysisMultiplexerTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('multiplexer'),
    filters: z.array(z.string()).describe('A list of token filters to apply to incoming tokens.'),
    preserve_original: SpecUtilsStringified.describe('If `true` (the default) then emit the original token in addition to the filtered tokens.').optional()
}).meta({ id: 'AnalysisMultiplexerTokenFilter' });
export const AnalysisNGramTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('ngram'),
    max_gram: integer.describe('Maximum length of characters in a gram. Defaults to `2`.').optional(),
    min_gram: integer.describe('Minimum length of characters in a gram. Defaults to `1`.').optional(),
    preserve_original: SpecUtilsStringified.describe('Emits original token when set to `true`. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisNGramTokenFilter' });
export const AnalysisNGramTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('ngram'),
    custom_token_chars: z.string().optional(),
    max_gram: integer.optional(),
    min_gram: integer.optional(),
    token_chars: z.array(AnalysisTokenChar).optional()
}).meta({ id: 'AnalysisNGramTokenizer' });
export const AnalysisNoriDecompoundMode = z.enum(['discard', 'none', 'mixed']).meta({ id: 'AnalysisNoriDecompoundMode' });
export const AnalysisNoriPartOfSpeechTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('nori_part_of_speech'),
    stoptags: z.array(z.string()).describe('An array of part-of-speech tags that should be removed.').optional()
}).meta({ id: 'AnalysisNoriPartOfSpeechTokenFilter' });
export const AnalysisNoriTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('nori_tokenizer'),
    decompound_mode: AnalysisNoriDecompoundMode.optional(),
    discard_punctuation: z.boolean().optional(),
    user_dictionary: z.string().optional(),
    user_dictionary_rules: z.array(z.string()).optional()
}).meta({ id: 'AnalysisNoriTokenizer' });
export const AnalysisPathHierarchyTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('path_hierarchy'),
    buffer_size: SpecUtilsStringified.optional(),
    delimiter: z.string().optional(),
    replacement: z.string().optional(),
    reverse: SpecUtilsStringified.optional(),
    skip: SpecUtilsStringified.optional()
}).meta({ id: 'AnalysisPathHierarchyTokenizer' });
export const AnalysisPatternCaptureTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('pattern_capture'),
    patterns: z.array(z.string()).describe('A list of regular expressions to match.'),
    preserve_original: SpecUtilsStringified.describe('If set to `true` (the default) it will emit the original token.').optional()
}).meta({ id: 'AnalysisPatternCaptureTokenFilter' });
export const AnalysisPatternReplaceTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('pattern_replace'),
    all: z.boolean().describe('If `true`, all substrings matching the pattern parameter’s regular expression are replaced. If `false`, the filter replaces only the first matching substring in each token. Defaults to `true`.').optional(),
    flags: z.string().optional(),
    pattern: z.string().describe('Regular expression, written in Java’s regular expression syntax. The filter replaces token substrings matching this pattern with the substring in the `replacement` parameter.'),
    replacement: z.string().describe('Replacement substring. Defaults to an empty substring (`""`).').optional()
}).meta({ id: 'AnalysisPatternReplaceTokenFilter' });
export const AnalysisPatternTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('pattern'),
    flags: z.string().optional(),
    group: integer.optional(),
    pattern: z.string().optional()
}).meta({ id: 'AnalysisPatternTokenizer' });
export const AnalysisPersianNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('persian_normalization')
}).meta({ id: 'AnalysisPersianNormalizationTokenFilter' });
export const AnalysisPersianStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('persian_stem')
}).meta({ id: 'AnalysisPersianStemTokenFilter' });
export const AnalysisPhoneticEncoder = z.enum(['metaphone', 'double_metaphone', 'soundex', 'refined_soundex', 'caverphone1', 'caverphone2', 'cologne', 'nysiis', 'koelnerphonetik', 'haasephonetik', 'beider_morse', 'daitch_mokotoff']).meta({ id: 'AnalysisPhoneticEncoder' });
export const AnalysisPhoneticLanguage = z.enum(['any', 'common', 'cyrillic', 'english', 'french', 'german', 'hebrew', 'hungarian', 'polish', 'romanian', 'russian', 'spanish']).meta({ id: 'AnalysisPhoneticLanguage' });
export const AnalysisPhoneticNameType = z.enum(['generic', 'ashkenazi', 'sephardic']).meta({ id: 'AnalysisPhoneticNameType' });
export const AnalysisPhoneticRuleType = z.enum(['approx', 'exact']).meta({ id: 'AnalysisPhoneticRuleType' });
export const AnalysisPhoneticTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('phonetic'),
    encoder: AnalysisPhoneticEncoder,
    languageset: z.union([AnalysisPhoneticLanguage, z.array(AnalysisPhoneticLanguage)]).optional(),
    max_code_len: integer.optional(),
    name_type: AnalysisPhoneticNameType.optional(),
    replace: z.boolean().optional(),
    rule_type: AnalysisPhoneticRuleType.optional()
}).meta({ id: 'AnalysisPhoneticTokenFilter' });
export const AnalysisPorterStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('porter_stem')
}).meta({ id: 'AnalysisPorterStemTokenFilter' });
export const AnalysisPredicateTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('predicate_token_filter'),
    script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]).describe('Script containing a condition used to filter incoming tokens. Only tokens that match this script are included in the output.')
}).meta({ id: 'AnalysisPredicateTokenFilter' });
export const AnalysisRemoveDuplicatesTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('remove_duplicates')
}).meta({ id: 'AnalysisRemoveDuplicatesTokenFilter' });
export const AnalysisReverseTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('reverse')
}).meta({ id: 'AnalysisReverseTokenFilter' });
export const AnalysisRussianStemTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('russian_stem')
}).meta({ id: 'AnalysisRussianStemTokenFilter' });
export const AnalysisScandinavianFoldingTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('scandinavian_folding')
}).meta({ id: 'AnalysisScandinavianFoldingTokenFilter' });
export const AnalysisScandinavianNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('scandinavian_normalization')
}).meta({ id: 'AnalysisScandinavianNormalizationTokenFilter' });
export const AnalysisSerbianNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('serbian_normalization')
}).meta({ id: 'AnalysisSerbianNormalizationTokenFilter' });
export const AnalysisShingleTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('shingle'),
    filler_token: z.string().describe('String used in shingles as a replacement for empty positions that do not contain a token. This filler token is only used in shingles, not original unigrams. Defaults to an underscore (`_`).').optional(),
    max_shingle_size: SpecUtilsStringified.describe('Maximum number of tokens to concatenate when creating shingles. Defaults to `2`.').optional(),
    min_shingle_size: SpecUtilsStringified.describe('Minimum number of tokens to concatenate when creating shingles. Defaults to `2`.').optional(),
    output_unigrams: z.boolean().describe('If `true`, the output includes the original input tokens. If `false`, the output only includes shingles; the original input tokens are removed. Defaults to `true`.').optional(),
    output_unigrams_if_no_shingles: z.boolean().describe('If `true`, the output includes the original input tokens only if no shingles are produced; if shingles are produced, the output only includes shingles. Defaults to `false`.').optional(),
    token_separator: z.string().describe('Separator used to concatenate adjacent tokens to form a shingle. Defaults to a space (`" "`).').optional()
}).meta({ id: 'AnalysisShingleTokenFilter' });
export const AnalysisSimplePatternSplitTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('simple_pattern_split'),
    pattern: z.string().optional()
}).meta({ id: 'AnalysisSimplePatternSplitTokenizer' });
export const AnalysisSimplePatternTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('simple_pattern'),
    pattern: z.string().optional()
}).meta({ id: 'AnalysisSimplePatternTokenizer' });
export const AnalysisSnowballLanguage = z.enum(['Arabic', 'Armenian', 'Basque', 'Catalan', 'Danish', 'Dutch', 'English', 'Estonian', 'Finnish', 'French', 'German', 'German2', 'Hungarian', 'Italian', 'Irish', 'Kp', 'Lithuanian', 'Lovins', 'Norwegian', 'Porter', 'Portuguese', 'Romanian', 'Russian', 'Serbian', 'Spanish', 'Swedish', 'Turkish']).meta({ id: 'AnalysisSnowballLanguage' });
export const AnalysisSnowballTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('snowball'),
    language: AnalysisSnowballLanguage.describe('Controls the language used by the stemmer.').optional()
}).meta({ id: 'AnalysisSnowballTokenFilter' });
export const AnalysisSoraniNormalizationTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('sorani_normalization')
}).meta({ id: 'AnalysisSoraniNormalizationTokenFilter' });
export const AnalysisStandardTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('standard'),
    max_token_length: integer.optional()
}).meta({ id: 'AnalysisStandardTokenizer' });
export const AnalysisStemmerOverrideTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('stemmer_override'),
    rules: z.array(z.string()).describe('A list of mapping rules to use.').optional(),
    rules_path: z.string().describe('A path (either relative to `config` location, or absolute) to a list of mappings.').optional()
}).meta({ id: 'AnalysisStemmerOverrideTokenFilter' });
export const AnalysisStemmerTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('stemmer'),
    language: z.string().optional(),
    name: z.string().optional()
}).meta({ id: 'AnalysisStemmerTokenFilter' });
export const AnalysisStopTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('stop'),
    ignore_case: z.boolean().describe('If `true`, stop word matching is case insensitive. For example, if `true`, a stop word of the matches and removes `The`, `THE`, or `the`. Defaults to `false`.').optional(),
    remove_trailing: z.boolean().describe('If `true`, the last token of a stream is removed if it’s a stop word. Defaults to `true`.').optional(),
    stopwords: AnalysisStopWords.describe('Language value, such as `_arabic_` or `_thai_`. Defaults to `_english_`.').optional(),
    stopwords_path: z.string().describe('Path to a file that contains a list of stop words to remove. This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each stop word in the file must be separated by a line break.').optional()
}).meta({ id: 'AnalysisStopTokenFilter' });
export const AnalysisSynonymFormat = z.enum(['solr', 'wordnet']).meta({ id: 'AnalysisSynonymFormat' });
export const AnalysisSynonymTokenFilterBase = z.object({
    ...AnalysisTokenFilterBase.shape,
    expand: z.boolean().describe('Expands definitions for equivalent synonym rules. Defaults to `true`.').optional(),
    format: AnalysisSynonymFormat.describe('Sets the synonym rules format.').optional(),
    lenient: z.boolean().describe('If `true` ignores errors while parsing the synonym rules. It is important to note that only those synonym rules which cannot get parsed are ignored. Defaults to the value of the `updateable` setting.').optional(),
    synonyms: z.array(z.string()).describe('Used to define inline synonyms.').optional(),
    synonyms_path: z.string().describe('Used to provide a synonym file. This path must be absolute or relative to the `config` location.').optional(),
    synonyms_set: z.union([z.string(), z.array(z.string())]).describe('Provide one or more synonym sets created through the Synonyms Management APIs. Maximum 100 sets per filter.').optional(),
    tokenizer: z.string().describe('Controls the tokenizers that will be used to tokenize the synonym, this parameter is for backwards compatibility for indices that created before 6.0.').optional(),
    updateable: z.boolean().describe('If `true` allows reloading search analyzers to pick up changes to synonym files. Only to be used for search analyzers. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisSynonymTokenFilterBase' });
export const AnalysisSynonymGraphTokenFilter = z.object({
    ...AnalysisSynonymTokenFilterBase.shape,
    type: z.literal('synonym_graph')
}).meta({ id: 'AnalysisSynonymGraphTokenFilter' });
export const AnalysisSynonymTokenFilter = z.object({
    ...AnalysisSynonymTokenFilterBase.shape,
    type: z.literal('synonym')
}).meta({ id: 'AnalysisSynonymTokenFilter' });
export const AnalysisThaiTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('thai')
}).meta({ id: 'AnalysisThaiTokenizer' });
export const AnalysisTrimTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('trim')
}).meta({ id: 'AnalysisTrimTokenFilter' });
export const AnalysisTruncateTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('truncate'),
    length: integer.describe('Character limit for each token. Tokens exceeding this limit are truncated. Defaults to `10`.').optional()
}).meta({ id: 'AnalysisTruncateTokenFilter' });
export const AnalysisUniqueTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('unique'),
    only_on_same_position: z.boolean().describe('If `true`, only remove duplicate tokens in the same position. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisUniqueTokenFilter' });
export const AnalysisUppercaseTokenFilter = z.object({
    ...AnalysisTokenFilterBase.shape,
    type: z.literal('uppercase')
}).meta({ id: 'AnalysisUppercaseTokenFilter' });
export const AnalysisWordDelimiterTokenFilterBase = z.object({
    ...AnalysisTokenFilterBase.shape,
    catenate_all: z.boolean().describe('If `true`, the filter produces catenated tokens for chains of alphanumeric characters separated by non-alphabetic delimiters. Defaults to `false`.').optional(),
    catenate_numbers: z.boolean().describe('If `true`, the filter produces catenated tokens for chains of numeric characters separated by non-alphabetic delimiters. Defaults to `false`.').optional(),
    catenate_words: z.boolean().describe('If `true`, the filter produces catenated tokens for chains of alphabetical characters separated by non-alphabetic delimiters. Defaults to `false`.').optional(),
    generate_number_parts: z.boolean().describe('If `true`, the filter includes tokens consisting of only numeric characters in the output. If `false`, the filter excludes these tokens from the output. Defaults to `true`.').optional(),
    generate_word_parts: z.boolean().describe('If `true`, the filter includes tokens consisting of only alphabetical characters in the output. If `false`, the filter excludes these tokens from the output. Defaults to `true`.').optional(),
    preserve_original: SpecUtilsStringified.describe('If `true`, the filter includes the original version of any split tokens in the output. This original version includes non-alphanumeric delimiters. Defaults to `false`.').optional(),
    protected_words: z.array(z.string()).describe('Array of tokens the filter won’t split.').optional(),
    protected_words_path: z.string().describe('Path to a file that contains a list of tokens the filter won’t split. This path must be absolute or relative to the `config` location, and the file must be UTF-8 encoded. Each token in the file must be separated by a line break.').optional(),
    split_on_case_change: z.boolean().describe('If `true`, the filter splits tokens at letter case transitions. For example: camelCase -> [ camel, Case ]. Defaults to `true`.').optional(),
    split_on_numerics: z.boolean().describe('If `true`, the filter splits tokens at letter-number transitions. For example: j2se -> [ j, 2, se ]. Defaults to `true`.').optional(),
    stem_english_possessive: z.boolean().describe('If `true`, the filter removes the English possessive (`\'s`) from the end of each token. For example: O\'Neil\'s -> [ O, Neil ]. Defaults to `true`.').optional(),
    type_table: z.array(z.string()).describe('Array of custom type mappings for characters. This allows you to map non-alphanumeric characters as numeric or alphanumeric to avoid splitting on those characters.').optional(),
    type_table_path: z.string().describe('Path to a file that contains custom type mappings for characters. This allows you to map non-alphanumeric characters as numeric or alphanumeric to avoid splitting on those characters.').optional()
}).meta({ id: 'AnalysisWordDelimiterTokenFilterBase' });
export const AnalysisWordDelimiterGraphTokenFilter = z.object({
    ...AnalysisWordDelimiterTokenFilterBase.shape,
    type: z.literal('word_delimiter_graph'),
    adjust_offsets: z.boolean().describe('If `true`, the filter adjusts the offsets of split or catenated tokens to better reflect their actual position in the token stream. Defaults to `true`.').optional(),
    ignore_keywords: z.boolean().describe('If `true`, the filter skips tokens with a keyword attribute of true. Defaults to `false`.').optional()
}).meta({ id: 'AnalysisWordDelimiterGraphTokenFilter' });
export const AnalysisWordDelimiterTokenFilter = z.object({
    ...AnalysisWordDelimiterTokenFilterBase.shape,
    type: z.literal('word_delimiter')
}).meta({ id: 'AnalysisWordDelimiterTokenFilter' });
export const AnalysisTokenFilterDefinition = z.union([AnalysisApostropheTokenFilter, AnalysisArabicStemTokenFilter, AnalysisArabicNormalizationTokenFilter, AnalysisAsciiFoldingTokenFilter, AnalysisBengaliNormalizationTokenFilter, AnalysisBrazilianStemTokenFilter, AnalysisCjkBigramTokenFilter, AnalysisCjkWidthTokenFilter, AnalysisClassicTokenFilter, AnalysisCommonGramsTokenFilter, AnalysisConditionTokenFilter, AnalysisCzechStemTokenFilter, AnalysisDecimalDigitTokenFilter, AnalysisDelimitedPayloadTokenFilter, AnalysisDutchStemTokenFilter, AnalysisEdgeNGramTokenFilter, AnalysisElisionTokenFilter, AnalysisFingerprintTokenFilter, AnalysisFlattenGraphTokenFilter, AnalysisFrenchStemTokenFilter, AnalysisGermanNormalizationTokenFilter, AnalysisGermanStemTokenFilter, AnalysisHindiNormalizationTokenFilter, AnalysisHunspellTokenFilter, AnalysisHyphenationDecompounderTokenFilter, AnalysisIndicNormalizationTokenFilter, AnalysisKeepTypesTokenFilter, AnalysisKeepWordsTokenFilter, AnalysisKeywordMarkerTokenFilter, AnalysisKeywordRepeatTokenFilter, AnalysisKStemTokenFilter, AnalysisLengthTokenFilter, AnalysisLimitTokenCountTokenFilter, AnalysisLowercaseTokenFilter, AnalysisMinHashTokenFilter, AnalysisMultiplexerTokenFilter, AnalysisNGramTokenFilter, AnalysisNoriPartOfSpeechTokenFilter, AnalysisPatternCaptureTokenFilter, AnalysisPatternReplaceTokenFilter, AnalysisPersianNormalizationTokenFilter, AnalysisPersianStemTokenFilter, AnalysisPorterStemTokenFilter, AnalysisPredicateTokenFilter, AnalysisRemoveDuplicatesTokenFilter, AnalysisReverseTokenFilter, AnalysisRussianStemTokenFilter, AnalysisScandinavianFoldingTokenFilter, AnalysisScandinavianNormalizationTokenFilter, AnalysisSerbianNormalizationTokenFilter, AnalysisShingleTokenFilter, AnalysisSnowballTokenFilter, AnalysisSoraniNormalizationTokenFilter, AnalysisStemmerOverrideTokenFilter, AnalysisStemmerTokenFilter, AnalysisStopTokenFilter, AnalysisSynonymGraphTokenFilter, AnalysisSynonymTokenFilter, AnalysisTrimTokenFilter, AnalysisTruncateTokenFilter, AnalysisUniqueTokenFilter, AnalysisUppercaseTokenFilter, AnalysisWordDelimiterGraphTokenFilter, AnalysisWordDelimiterTokenFilter, AnalysisJaStopTokenFilter, AnalysisKuromojiStemmerTokenFilter, AnalysisKuromojiReadingFormTokenFilter, AnalysisKuromojiPartOfSpeechTokenFilter, AnalysisIcuCollationTokenFilter, AnalysisIcuFoldingTokenFilter, AnalysisIcuNormalizationTokenFilter, AnalysisIcuTransformTokenFilter, AnalysisPhoneticTokenFilter, AnalysisDictionaryDecompounderTokenFilter]).meta({ id: 'AnalysisTokenFilterDefinition' });
export const AnalysisTokenFilter = z.union([z.string(), AnalysisTokenFilterDefinition]).meta({ id: 'AnalysisTokenFilter' });
export const AnalysisUaxEmailUrlTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('uax_url_email'),
    max_token_length: integer.optional()
}).meta({ id: 'AnalysisUaxEmailUrlTokenizer' });
export const AnalysisWhitespaceTokenizer = z.object({
    ...AnalysisTokenizerBase.shape,
    type: z.literal('whitespace'),
    max_token_length: integer.optional()
}).meta({ id: 'AnalysisWhitespaceTokenizer' });
export const AnalysisTokenizerDefinition = z.union([AnalysisCharGroupTokenizer, AnalysisClassicTokenizer, AnalysisEdgeNGramTokenizer, AnalysisKeywordTokenizer, AnalysisLetterTokenizer, AnalysisLowercaseTokenizer, AnalysisNGramTokenizer, AnalysisPathHierarchyTokenizer, AnalysisPatternTokenizer, AnalysisSimplePatternTokenizer, AnalysisSimplePatternSplitTokenizer, AnalysisStandardTokenizer, AnalysisThaiTokenizer, AnalysisUaxEmailUrlTokenizer, AnalysisWhitespaceTokenizer, AnalysisIcuTokenizer, AnalysisKuromojiTokenizer, AnalysisNoriTokenizer]).meta({ id: 'AnalysisTokenizerDefinition' });
export const AnalysisTokenizer = z.union([z.string(), AnalysisTokenizerDefinition]).meta({ id: 'AnalysisTokenizer' });
export const MlCategorizationAnalyzerDefinition = z.object({
    char_filter: z.array(AnalysisCharFilter).describe('One or more character filters. In addition to the built-in character filters, other plugins can provide more character filters. If this property is not specified, no character filters are applied prior to categorization. If you are customizing some other aspect of the analyzer and you need to achieve the equivalent of `categorization_filters` (which are not permitted when some other aspect of the analyzer is customized), add them here as pattern replace character filters.').optional(),
    filter: z.array(AnalysisTokenFilter).describe('One or more token filters. In addition to the built-in token filters, other plugins can provide more token filters. If this property is not specified, no token filters are applied prior to categorization.').optional(),
    tokenizer: AnalysisTokenizer.describe('The name or definition of the tokenizer to use after character filters are applied. This property is compulsory if `categorization_analyzer` is specified as an object. Machine learning provides a tokenizer called `ml_standard` that tokenizes in a way that has been determined to produce good categorization results on a variety of log file formats for logs in English. If you want to use that tokenizer but change the character or token filters, specify "tokenizer": "ml_standard" in your `categorization_analyzer`. Additionally, the `ml_classic` tokenizer is available, which tokenizes in the same way as the non-customizable tokenizer in old versions of the product (before 6.2). `ml_classic` was the default categorization tokenizer in versions 6.2 to 7.13, so if you need categorization identical to the default for jobs created in these versions, specify "tokenizer": "ml_classic" in your `categorization_analyzer`.').optional()
}).meta({ id: 'MlCategorizationAnalyzerDefinition' });
export const MlCategorizationAnalyzer = z.union([z.string(), MlCategorizationAnalyzerDefinition]).meta({ id: 'MlCategorizationAnalyzer' });
export const MlRuleAction = z.enum(['skip_result', 'skip_model_update']).meta({ id: 'MlRuleAction' });
export const MlAppliesTo = z.enum(['actual', 'typical', 'diff_from_typical', 'time']).meta({ id: 'MlAppliesTo' });
export const MlConditionOperator = z.enum(['gt', 'gte', 'lt', 'lte']).meta({ id: 'MlConditionOperator' });
export const MlRuleCondition = z.object({
    applies_to: MlAppliesTo.describe('Specifies the result property to which the condition applies. If your detector uses `lat_long`, `metric`, `rare`, or `freq_rare` functions, you can only specify conditions that apply to time.'),
    operator: MlConditionOperator.describe('Specifies the condition operator. The available options are greater than, greater than or equals, less than, and less than or equals.'),
    value: double.describe('The value that is compared against the `applies_to` field using the operator.')
}).meta({ id: 'MlRuleCondition' });
export const MlFilterType = z.enum(['include', 'exclude']).meta({ id: 'MlFilterType' });
export const MlFilterRef = z.object({
    filter_id: Id.describe('The identifier for the filter.'),
    filter_type: MlFilterType.describe('If set to `include`, the rule applies for values in the filter. If set to `exclude`, the rule applies for values not in the filter.').optional()
}).meta({ id: 'MlFilterRef' });
export const MlDetectionRule = z.object({
    actions: z.array(MlRuleAction).describe('The set of actions to be triggered when the rule applies. If more than one action is specified the effects of all actions are combined.').optional(),
    conditions: z.array(MlRuleCondition).describe('An array of numeric conditions when the rule applies. A rule must either have a non-empty scope or at least one condition. Multiple conditions are combined together with a logical AND.').optional(),
    scope: z.record(Field, MlFilterRef).describe('A scope of series where the rule applies. A rule must either have a non-empty scope or at least one condition. By default, the scope includes all series. Scoping is allowed for any of the fields that are also specified in `by_field_name`, `over_field_name`, or `partition_field_name`.').optional()
}).meta({ id: 'MlDetectionRule' });
export const MlExcludeFrequent = z.enum(['all', 'none', 'by', 'over']).meta({ id: 'MlExcludeFrequent' });
export const MlDetector = z.object({
    by_field_name: Field.describe('The field used to split the data. In particular, this property is used for analyzing the splits with respect to their own history. It is used for finding unusual values in the context of the split.').optional(),
    custom_rules: z.array(MlDetectionRule).describe('Custom rules enable you to customize the way detectors operate. For example, a rule may dictate conditions under which results should be skipped. Kibana refers to custom rules as job rules.').optional(),
    detector_description: z.string().describe('A description of the detector.').optional(),
    detector_index: integer.describe('A unique identifier for the detector. This identifier is based on the order of the detectors in the `analysis_config`, starting at zero. If you specify a value for this property, it is ignored.').optional(),
    exclude_frequent: MlExcludeFrequent.describe('If set, frequent entities are excluded from influencing the anomaly results. Entities can be considered frequent over time or frequent in a population. If you are working with both over and by fields, you can set `exclude_frequent` to `all` for both fields, or to `by` or `over` for those specific fields.').optional(),
    field_name: Field.describe('The field that the detector uses in the function. If you use an event rate function such as count or rare, do not specify this field. The `field_name` cannot contain double quotes or backslashes.').optional(),
    function: z.string().describe('The analysis function that is used. For example, `count`, `rare`, `mean`, `min`, `max`, or `sum`.').optional(),
    over_field_name: Field.describe('The field used to split the data. In particular, this property is used for analyzing the splits with respect to the history of all splits. It is used for finding unusual values in the population of all splits.').optional(),
    partition_field_name: Field.describe('The field used to segment the analysis. When you use this property, you have completely independent baselines for each value of this field.').optional(),
    use_null: z.boolean().describe('Defines whether a new series is used as the null series when there is no value for the by or partition fields.').optional()
}).meta({ id: 'MlDetector' });
export const MlPerPartitionCategorization = z.object({
    enabled: z.boolean().describe('To enable this setting, you must also set the `partition_field_name` property to the same value in every detector that uses the keyword `mlcategory`. Otherwise, job creation fails.').optional(),
    stop_on_warn: z.boolean().describe('This setting can be set to true only if per-partition categorization is enabled. If true, both categorization and subsequent anomaly detection stops for partitions where the categorization status changes to warn. This setting makes it viable to have a job where it is expected that categorization works well for some partitions but not others; you do not pay the cost of bad categorization forever in the partitions where it works badly.').optional()
}).meta({ id: 'MlPerPartitionCategorization' });
export const MlAnalysisConfig = z.object({
    bucket_span: Duration.describe('The size of the interval that the analysis is aggregated into, typically between `5m` and `1h`. This value should be either a whole number of days or equate to a whole number of buckets in one day. If the anomaly detection job uses a datafeed with aggregations, this value must also be divisible by the interval of the date histogram aggregation.').optional(),
    categorization_analyzer: MlCategorizationAnalyzer.describe('If `categorization_field_name` is specified, you can also define the analyzer that is used to interpret the categorization field. This property cannot be used at the same time as `categorization_filters`. The categorization analyzer specifies how the `categorization_field` is interpreted by the categorization process. The `categorization_analyzer` field can be specified either as a string or as an object. If it is a string, it must refer to a built-in analyzer or one added by another plugin.').optional(),
    categorization_field_name: Field.describe('If this property is specified, the values of the specified field will be categorized. The resulting categories must be used in a detector by setting `by_field_name`, `over_field_name`, or `partition_field_name` to the keyword `mlcategory`.').optional(),
    categorization_filters: z.array(z.string()).describe('If `categorization_field_name` is specified, you can also define optional filters. This property expects an array of regular expressions. The expressions are used to filter out matching sequences from the categorization field values. You can use this functionality to fine tune the categorization by excluding sequences from consideration when categories are defined. For example, you can exclude SQL statements that appear in your log files. This property cannot be used at the same time as `categorization_analyzer`. If you only want to define simple regular expression filters that are applied prior to tokenization, setting this property is the easiest method. If you also want to customize the tokenizer or post-tokenization filtering, use the `categorization_analyzer` property instead and include the filters as pattern_replace character filters. The effect is exactly the same.').optional(),
    detectors: z.array(MlDetector).describe('Detector configuration objects specify which data fields a job analyzes. They also specify which analytical functions are used. You can specify multiple detectors for a job. If the detectors array does not contain at least one detector, no analysis can occur and an error is returned.'),
    influencers: z.array(Field).describe('A comma separated list of influencer field names. Typically these can be the by, over, or partition fields that are used in the detector configuration. You might also want to use a field name that is not specifically named in a detector, but is available as part of the input data. When you use multiple detectors, the use of influencers is recommended as it aggregates results for each influencer entity.').optional(),
    latency: Duration.describe('The size of the window in which to expect data that is out of time order. If you specify a non-zero value, it must be greater than or equal to one second. NOTE: Latency is applicable only when you send data by using the post data API.').optional(),
    model_prune_window: Duration.describe('Advanced configuration option. Affects the pruning of models that have not been updated for the given time duration. The value must be set to a multiple of the `bucket_span`. If set too low, important information may be removed from the model. For jobs created in 8.1 and later, the default value is the greater of `30d` or 20 times `bucket_span`.').optional(),
    multivariate_by_fields: z.boolean().describe('This functionality is reserved for internal use. It is not supported for use in customer environments and is not subject to the support SLA of official GA features. If set to `true`, the analysis will automatically find correlations between metrics for a given by field value and report anomalies when those correlations cease to hold. For example, suppose CPU and memory usage on host A is usually highly correlated with the same metrics on host B. Perhaps this correlation occurs because they are running a load-balanced application. If you enable this property, anomalies will be reported when, for example, CPU usage on host A is high and the value of CPU usage on host B is low. That is to say, you’ll see an anomaly when the CPU of host A is unusual given the CPU of host B. To use the `multivariate_by_fields` property, you must also specify `by_field_name` in your detector.').optional(),
    per_partition_categorization: MlPerPartitionCategorization.describe('Settings related to how categorization interacts with partition fields.').optional(),
    summary_count_field_name: Field.describe('If this property is specified, the data that is fed to the job is expected to be pre-summarized. This property value is the name of the field that contains the count of raw data points that have been summarized. The same `summary_count_field_name` applies to all detectors in the job. NOTE: The `summary_count_field_name` property cannot be used with the `metric` function.').optional()
}).meta({ id: 'MlAnalysisConfig' });
/**
 * Estimate job model memory usage.
 *
 * Make an estimation of the memory usage for an anomaly detection job model.
 * The estimate is based on analysis configuration details for the job and cardinality
 * estimates for the fields it references.
 */
export const MlEstimateModelMemoryRequest = z.object({
    ...RequestBase.shape,
    analysis_config: MlAnalysisConfig.describe('For a list of the properties that you can specify in the `analysis_config` component of the body of this API.').optional().meta({ found_in: 'body' }),
    max_bucket_cardinality: z.record(Field, long).describe('Estimates of the highest cardinality in a single bucket that is observed for influencer fields over the time period that the job analyzes data. To produce a good answer, values must be provided for all influencer fields. Providing values for fields that are not listed as `influencers` has no effect on the estimation.').optional().meta({ found_in: 'body' }),
    overall_cardinality: z.record(Field, long).describe('Estimates of the cardinality that is observed for fields over the whole time period that the job analyzes data. To produce a good answer, values must be provided for fields referenced in the `by_field_name`, `over_field_name` and `partition_field_name` of any detectors. Providing values for other fields has no effect on the estimation. It can be omitted from the request if no detectors have a `by_field_name`, `over_field_name` or `partition_field_name`.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlEstimateModelMemoryRequest' });
export const MlEstimateModelMemoryResponse = z.object({
    model_memory_estimate: z.string()
}).meta({ id: 'MlEstimateModelMemoryResponse' });
//# sourceMappingURL=ml_estimate_model_memory.js.map