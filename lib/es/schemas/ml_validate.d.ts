import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const SearchBoundaryScanner: z.ZodEnum<{
    chars: "chars";
    sentence: "sentence";
    word: "word";
}>;
export type SearchBoundaryScanner = z.infer<typeof SearchBoundaryScanner>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** A reference to a field with formatting instructions on how to return the value */
export declare const QueryDslFieldAndFormat: z.ZodObject<{
    field: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    include_unmapped: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type QueryDslFieldAndFormat = z.infer<typeof QueryDslFieldAndFormat>;
export declare const SearchHighlighterType: z.ZodUnion<readonly [z.ZodEnum<{
    plain: "plain";
    fvh: "fvh";
    unified: "unified";
}>, z.ZodString]>;
export type SearchHighlighterType = z.infer<typeof SearchHighlighterType>;
export declare const SearchHighlighterFragmenter: z.ZodEnum<{
    simple: "simple";
    span: "span";
}>;
export type SearchHighlighterFragmenter = z.infer<typeof SearchHighlighterFragmenter>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export declare const QueryDslQueryBase: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslQueryBase = z.infer<typeof QueryDslQueryBase>;
/** The minimum number of terms that should match as integer, percentage or range */
export declare const MinimumShouldMatch: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type MinimumShouldMatch = z.infer<typeof MinimumShouldMatch>;
export interface QueryDslBoolQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    minimum_should_match?: MinimumShouldMatch | undefined;
    must?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    must_not?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    should?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
}
export declare const QueryDslBoolQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    must: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    must_not: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    should: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
}, z.core.$strip>;
export type QueryDslBoolQuery = z.infer<typeof QueryDslBoolQuery>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export interface QueryDslBoostingQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    negative_boost: double;
    negative: QueryDslQueryContainerShape;
    positive: QueryDslQueryContainerShape;
}
export declare const QueryDslBoostingQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    negative_boost: z.ZodNumber;
    negative: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    positive: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
}, z.core.$strip>;
export type QueryDslBoostingQuery = z.infer<typeof QueryDslBoostingQuery>;
export declare const QueryDslOperator: z.ZodEnum<{
    and: "and";
    AND: "AND";
    or: "or";
    OR: "OR";
}>;
export type QueryDslOperator = z.infer<typeof QueryDslOperator>;
export declare const QueryDslCommonTermsQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    cutoff_frequency: z.ZodOptional<z.ZodNumber>;
    high_freq_operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    low_freq_operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    query: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslCommonTermsQuery = z.infer<typeof QueryDslCommonTermsQuery>;
export declare const QueryDslCombinedFieldsOperator: z.ZodEnum<{
    and: "and";
    or: "or";
}>;
export type QueryDslCombinedFieldsOperator = z.infer<typeof QueryDslCombinedFieldsOperator>;
export declare const QueryDslCombinedFieldsZeroTerms: z.ZodEnum<{
    all: "all";
    none: "none";
}>;
export type QueryDslCombinedFieldsZeroTerms = z.infer<typeof QueryDslCombinedFieldsZeroTerms>;
export declare const QueryDslCombinedFieldsQuery: z.ZodObject<{
    fields: z.ZodArray<z.ZodString>;
    query: z.ZodString;
    auto_generate_synonyms_phrase_query: z.ZodOptional<z.ZodBoolean>;
    operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        or: "or";
    }>>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    zero_terms_query: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslCombinedFieldsQuery = z.infer<typeof QueryDslCombinedFieldsQuery>;
export interface QueryDslConstantScoreQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    filter: QueryDslQueryContainerShape;
}
export declare const QueryDslConstantScoreQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    filter: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
}, z.core.$strip>;
export type QueryDslConstantScoreQuery = z.infer<typeof QueryDslConstantScoreQuery>;
export interface QueryDslDisMaxQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    queries: QueryDslQueryContainerShape[];
    tie_breaker?: double | undefined;
}
export declare const QueryDslDisMaxQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    queries: z.ZodArray<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    tie_breaker: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type QueryDslDisMaxQuery = z.infer<typeof QueryDslDisMaxQuery>;
export declare const QueryDslDistanceFeatureQueryBase: z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslDistanceFeatureQueryBase = z.infer<typeof QueryDslDistanceFeatureQueryBase>;
export declare const QueryDslUntypedDistanceFeatureQuery: z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslUntypedDistanceFeatureQuery = z.infer<typeof QueryDslUntypedDistanceFeatureQuery>;
export declare const QueryDslGeoDistanceFeatureQuery: z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslGeoDistanceFeatureQuery = z.infer<typeof QueryDslGeoDistanceFeatureQuery>;
export declare const QueryDslDateDistanceFeatureQuery: z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslDateDistanceFeatureQuery = z.infer<typeof QueryDslDateDistanceFeatureQuery>;
export declare const QueryDslDistanceFeatureQuery: z.ZodUnion<readonly [z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    origin: z.ZodAny;
    pivot: z.ZodAny;
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type QueryDslDistanceFeatureQuery = z.infer<typeof QueryDslDistanceFeatureQuery>;
export declare const QueryDslExistsQuery: z.ZodObject<{
    field: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslExistsQuery = z.infer<typeof QueryDslExistsQuery>;
export declare const QueryDslFunctionBoostMode: z.ZodEnum<{
    max: "max";
    min: "min";
    replace: "replace";
    sum: "sum";
    avg: "avg";
    multiply: "multiply";
}>;
export type QueryDslFunctionBoostMode = z.infer<typeof QueryDslFunctionBoostMode>;
export declare const QueryDslMultiValueMode: z.ZodEnum<{
    max: "max";
    min: "min";
    sum: "sum";
    avg: "avg";
}>;
export type QueryDslMultiValueMode = z.infer<typeof QueryDslMultiValueMode>;
export declare const QueryDslDecayFunctionBase: z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$strip>;
export type QueryDslDecayFunctionBase = z.infer<typeof QueryDslDecayFunctionBase>;
export declare const QueryDslUntypedDecayFunction: z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslUntypedDecayFunction = z.infer<typeof QueryDslUntypedDecayFunction>;
export declare const QueryDslDateDecayFunction: z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslDateDecayFunction = z.infer<typeof QueryDslDateDecayFunction>;
export declare const QueryDslNumericDecayFunction: z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslNumericDecayFunction = z.infer<typeof QueryDslNumericDecayFunction>;
export declare const QueryDslGeoDecayFunction: z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslGeoDecayFunction = z.infer<typeof QueryDslGeoDecayFunction>;
export declare const QueryDslDecayFunction: z.ZodUnion<readonly [z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    multi_value_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$catchall<z.ZodAny>>]>;
export type QueryDslDecayFunction = z.infer<typeof QueryDslDecayFunction>;
export declare const QueryDslFieldValueFactorModifier: z.ZodEnum<{
    none: "none";
    log: "log";
    log1p: "log1p";
    log2p: "log2p";
    ln: "ln";
    ln1p: "ln1p";
    ln2p: "ln2p";
    square: "square";
    sqrt: "sqrt";
    reciprocal: "reciprocal";
}>;
export type QueryDslFieldValueFactorModifier = z.infer<typeof QueryDslFieldValueFactorModifier>;
export declare const QueryDslFieldValueFactorScoreFunction: z.ZodObject<{
    field: z.ZodString;
    factor: z.ZodOptional<z.ZodNumber>;
    missing: z.ZodOptional<z.ZodNumber>;
    modifier: z.ZodOptional<z.ZodEnum<{
        none: "none";
        log: "log";
        log1p: "log1p";
        log2p: "log2p";
        ln: "ln";
        ln1p: "ln1p";
        ln2p: "ln2p";
        square: "square";
        sqrt: "sqrt";
        reciprocal: "reciprocal";
    }>>;
}, z.core.$strip>;
export type QueryDslFieldValueFactorScoreFunction = z.infer<typeof QueryDslFieldValueFactorScoreFunction>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const QueryDslRandomScoreFunction: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    seed: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type QueryDslRandomScoreFunction = z.infer<typeof QueryDslRandomScoreFunction>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const AggregationsAggregation: z.ZodObject<{}, z.core.$strip>;
export type AggregationsAggregation = z.infer<typeof AggregationsAggregation>;
/** Base type for bucket aggregations. These aggregations also accept sub-aggregations. */
export declare const AggregationsBucketAggregationBase: z.ZodObject<{}, z.core.$strip>;
export type AggregationsBucketAggregationBase = z.infer<typeof AggregationsBucketAggregationBase>;
export interface AggregationsAdjacencyMatrixAggregationShape {
    filters?: Record<string, QueryDslQueryContainerShape> | undefined;
    separator?: string | undefined;
}
export declare const AggregationsAdjacencyMatrixAggregation: z.ZodObject<{
    filters: z.ZodOptional<z.ZodRecord<z.ZodString, typeof QueryDslQueryContainer>>;
    separator: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsAdjacencyMatrixAggregation = z.infer<typeof AggregationsAdjacencyMatrixAggregation>;
export declare const AggregationsMinimumInterval: z.ZodEnum<{
    second: "second";
    minute: "minute";
    hour: "hour";
    day: "day";
    month: "month";
    year: "year";
}>;
export type AggregationsMinimumInterval = z.infer<typeof AggregationsMinimumInterval>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const TimeZone: z.ZodString;
export type TimeZone = z.infer<typeof TimeZone>;
export interface AggregationsAutoDateHistogramAggregationShape {
    buckets?: integer | undefined;
    field?: Field | undefined;
    format?: string | undefined;
    minimum_interval?: AggregationsMinimumInterval | null | undefined;
    missing?: DateTime | undefined;
    offset?: string | undefined;
    params?: Record<string, unknown> | undefined;
    script?: ScriptShape | undefined;
    time_zone?: TimeZone | undefined;
}
export declare const AggregationsAutoDateHistogramAggregation: z.ZodObject<{
    buckets: z.ZodOptional<z.ZodNumber>;
    field: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    minimum_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        second: "second";
        minute: "minute";
        hour: "hour";
        day: "day";
        month: "month";
        year: "year";
    }>, z.ZodNull]>>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    offset: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    time_zone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsAutoDateHistogramAggregation = z.infer<typeof AggregationsAutoDateHistogramAggregation>;
export declare const AggregationsMissing: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>;
export type AggregationsMissing = z.infer<typeof AggregationsMissing>;
export interface AggregationsMetricAggregationBaseShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsMetricAggregationBase: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsMetricAggregationBase = z.infer<typeof AggregationsMetricAggregationBase>;
export interface AggregationsFormatMetricAggregationBaseShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsFormatMetricAggregationBase: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsFormatMetricAggregationBase = z.infer<typeof AggregationsFormatMetricAggregationBase>;
export interface AggregationsAverageAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsAverageAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsAverageAggregation = z.infer<typeof AggregationsAverageAggregation>;
/**
 * Buckets path can be expressed in different ways, and an aggregation may accept some or all of these
 * forms depending on its type. Please refer to each aggregation's documentation to know what buckets
 * path forms they accept.
 */
export declare const AggregationsBucketsPath: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>;
export type AggregationsBucketsPath = z.infer<typeof AggregationsBucketsPath>;
export declare const AggregationsBucketPathAggregation: z.ZodObject<{
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsBucketPathAggregation = z.infer<typeof AggregationsBucketPathAggregation>;
export declare const AggregationsGapPolicy: z.ZodEnum<{
    skip: "skip";
    insert_zeros: "insert_zeros";
    keep_values: "keep_values";
}>;
export type AggregationsGapPolicy = z.infer<typeof AggregationsGapPolicy>;
export declare const AggregationsPipelineAggregationBase: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsPipelineAggregationBase = z.infer<typeof AggregationsPipelineAggregationBase>;
export declare const AggregationsAverageBucketAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsAverageBucketAggregation = z.infer<typeof AggregationsAverageBucketAggregation>;
export declare const AggregationsTDigestExecutionHint: z.ZodEnum<{
    default: "default";
    high_accuracy: "high_accuracy";
}>;
export type AggregationsTDigestExecutionHint = z.infer<typeof AggregationsTDigestExecutionHint>;
export interface AggregationsBoxplotAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    compression?: double | undefined;
    execution_hint?: AggregationsTDigestExecutionHint | undefined;
}
export declare const AggregationsBoxplotAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    compression: z.ZodOptional<z.ZodNumber>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        default: "default";
        high_accuracy: "high_accuracy";
    }>>;
}, z.core.$strip>;
export type AggregationsBoxplotAggregation = z.infer<typeof AggregationsBoxplotAggregation>;
export interface AggregationsBucketScriptAggregationShape {
    buckets_path?: AggregationsBucketsPath | undefined;
    format?: string | undefined;
    gap_policy?: AggregationsGapPolicy | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsBucketScriptAggregation: z.ZodObject<{
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsBucketScriptAggregation = z.infer<typeof AggregationsBucketScriptAggregation>;
export interface AggregationsBucketSelectorAggregationShape {
    buckets_path?: AggregationsBucketsPath | undefined;
    format?: string | undefined;
    gap_policy?: AggregationsGapPolicy | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsBucketSelectorAggregation: z.ZodObject<{
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsBucketSelectorAggregation = z.infer<typeof AggregationsBucketSelectorAggregation>;
export declare const SortOrder: z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>;
export type SortOrder = z.infer<typeof SortOrder>;
export declare const ScoreSort: z.ZodObject<{
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type ScoreSort = z.infer<typeof ScoreSort>;
export declare const SortMode: z.ZodEnum<{
    max: "max";
    min: "min";
    sum: "sum";
    avg: "avg";
    median: "median";
}>;
export type SortMode = z.infer<typeof SortMode>;
export declare const GeoDistanceType: z.ZodEnum<{
    arc: "arc";
    plane: "plane";
}>;
export type GeoDistanceType = z.infer<typeof GeoDistanceType>;
export declare const DistanceUnit: z.ZodEnum<{
    in: "in";
    m: "m";
    ft: "ft";
    yd: "yd";
    mi: "mi";
    nmi: "nmi";
    km: "km";
    cm: "cm";
    mm: "mm";
}>;
export type DistanceUnit = z.infer<typeof DistanceUnit>;
export interface NestedSortValueShape {
    filter?: QueryDslQueryContainerShape | undefined;
    max_children?: integer | undefined;
    nested?: NestedSortValueShape | undefined;
    path: Field;
}
export declare const NestedSortValue: z.ZodObject<{
    filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    max_children: z.ZodOptional<z.ZodNumber>;
    nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
    path: z.ZodString;
}, z.core.$strip>;
export type NestedSortValue = z.infer<typeof NestedSortValue>;
export interface GeoDistanceSortShape {
    mode?: SortMode | undefined;
    distance_type?: GeoDistanceType | undefined;
    ignore_unmapped?: boolean | undefined;
    order?: SortOrder | undefined;
    unit?: DistanceUnit | undefined;
    nested?: NestedSortValueShape | undefined;
}
export declare const GeoDistanceSort: z.ZodObject<{
    mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
        median: "median";
    }>>;
    distance_type: z.ZodOptional<z.ZodEnum<{
        arc: "arc";
        plane: "plane";
    }>>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    unit: z.ZodOptional<z.ZodEnum<{
        in: "in";
        m: "m";
        ft: "ft";
        yd: "yd";
        mi: "mi";
        nmi: "nmi";
        km: "km";
        cm: "cm";
        mm: "mm";
    }>>;
    nested: z.ZodOptional<z.ZodObject<{
        filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
        max_children: z.ZodOptional<z.ZodNumber>;
        nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        path: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$loose>;
export type GeoDistanceSort = z.infer<typeof GeoDistanceSort>;
export declare const ScriptSortType: z.ZodEnum<{
    string: "string";
    number: "number";
    version: "version";
}>;
export type ScriptSortType = z.infer<typeof ScriptSortType>;
export interface ScriptSortShape {
    order?: SortOrder | undefined;
    script: ScriptShape;
    type?: ScriptSortType | undefined;
    mode?: SortMode | undefined;
    nested?: NestedSortValueShape | undefined;
}
export declare const ScriptSort: z.ZodObject<{
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
    type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        version: "version";
    }>>;
    mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
        median: "median";
    }>>;
    nested: z.ZodOptional<z.ZodObject<{
        filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
        max_children: z.ZodOptional<z.ZodNumber>;
        nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        path: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ScriptSort = z.infer<typeof ScriptSort>;
export interface SortOptionsShape {
    _score?: ScoreSort | undefined;
    _doc?: ScoreSort | undefined;
    _geo_distance?: GeoDistanceSortShape | undefined;
    _script?: ScriptSortShape | undefined;
}
export declare const SortOptions: z.ZodObject<{
    _score: z.ZodOptional<z.ZodObject<{
        order: z.ZodOptional<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
    }, z.core.$strip>>;
    _doc: z.ZodOptional<z.ZodObject<{
        order: z.ZodOptional<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
    }, z.core.$strip>>;
    _geo_distance: z.ZodOptional<z.ZodObject<{
        mode: z.ZodOptional<z.ZodEnum<{
            max: "max";
            min: "min";
            sum: "sum";
            avg: "avg";
            median: "median";
        }>>;
        distance_type: z.ZodOptional<z.ZodEnum<{
            arc: "arc";
            plane: "plane";
        }>>;
        ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
        order: z.ZodOptional<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
        unit: z.ZodOptional<z.ZodEnum<{
            in: "in";
            m: "m";
            ft: "ft";
            yd: "yd";
            mi: "mi";
            nmi: "nmi";
            km: "km";
            cm: "cm";
            mm: "mm";
        }>>;
        nested: z.ZodOptional<z.ZodObject<{
            filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
            max_children: z.ZodOptional<z.ZodNumber>;
            nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            path: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$loose>>;
    _script: z.ZodOptional<z.ZodObject<{
        order: z.ZodOptional<z.ZodEnum<{
            asc: "asc";
            desc: "desc";
        }>>;
        script: z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
        type: z.ZodOptional<z.ZodEnum<{
            string: "string";
            number: "number";
            version: "version";
        }>>;
        mode: z.ZodOptional<z.ZodEnum<{
            max: "max";
            min: "min";
            sum: "sum";
            avg: "avg";
            median: "median";
        }>>;
        nested: z.ZodOptional<z.ZodObject<{
            filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
            max_children: z.ZodOptional<z.ZodNumber>;
            nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            path: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$loose>;
export type SortOptions = z.infer<typeof SortOptions>;
export type SortCombinationsShape = Field | SortOptionsShape;
export declare const SortCombinations: z.ZodType<SortCombinationsShape>;
export type SortCombinations = z.infer<typeof SortCombinations>;
export type SortShape = SortCombinationsShape | SortCombinationsShape[];
export declare const Sort: z.ZodType<SortShape>;
export type Sort = z.infer<typeof Sort>;
export interface AggregationsBucketSortAggregationShape {
    from?: integer | undefined;
    gap_policy?: AggregationsGapPolicy | undefined;
    size?: integer | undefined;
    sort?: SortShape | undefined;
}
export declare const AggregationsBucketSortAggregation: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    size: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
}, z.core.$strip>;
export type AggregationsBucketSortAggregation = z.infer<typeof AggregationsBucketSortAggregation>;
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
export declare const AggregationsBucketKsAggregation: z.ZodObject<{
    alternative: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fractions: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    sampling_method: z.ZodOptional<z.ZodString>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsBucketKsAggregation = z.infer<typeof AggregationsBucketKsAggregation>;
export declare const AggregationsBucketCorrelationFunctionCountCorrelationIndicator: z.ZodObject<{
    doc_count: z.ZodNumber;
    expectations: z.ZodArray<z.ZodNumber>;
    fractions: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type AggregationsBucketCorrelationFunctionCountCorrelationIndicator = z.infer<typeof AggregationsBucketCorrelationFunctionCountCorrelationIndicator>;
export declare const AggregationsBucketCorrelationFunctionCountCorrelation: z.ZodObject<{
    indicator: z.ZodObject<{
        doc_count: z.ZodNumber;
        expectations: z.ZodArray<z.ZodNumber>;
        fractions: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AggregationsBucketCorrelationFunctionCountCorrelation = z.infer<typeof AggregationsBucketCorrelationFunctionCountCorrelation>;
export declare const AggregationsBucketCorrelationFunction: z.ZodObject<{
    count_correlation: z.ZodObject<{
        indicator: z.ZodObject<{
            doc_count: z.ZodNumber;
            expectations: z.ZodArray<z.ZodNumber>;
            fractions: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AggregationsBucketCorrelationFunction = z.infer<typeof AggregationsBucketCorrelationFunction>;
/** A sibling pipeline aggregation which executes a correlation function on the configured sibling multi-bucket aggregation. */
export declare const AggregationsBucketCorrelationAggregation: z.ZodObject<{
    function: z.ZodObject<{
        count_correlation: z.ZodObject<{
            indicator: z.ZodObject<{
                doc_count: z.ZodNumber;
                expectations: z.ZodArray<z.ZodNumber>;
                fractions: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsBucketCorrelationAggregation = z.infer<typeof AggregationsBucketCorrelationAggregation>;
export declare const AggregationsCardinalityExecutionMode: z.ZodEnum<{
    global_ordinals: "global_ordinals";
    direct: "direct";
    segment_ordinals: "segment_ordinals";
    save_memory_heuristic: "save_memory_heuristic";
    save_time_heuristic: "save_time_heuristic";
}>;
export type AggregationsCardinalityExecutionMode = z.infer<typeof AggregationsCardinalityExecutionMode>;
export interface AggregationsCardinalityAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    precision_threshold?: integer | undefined;
    rehash?: boolean | undefined;
    execution_hint?: AggregationsCardinalityExecutionMode | undefined;
}
export declare const AggregationsCardinalityAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    precision_threshold: z.ZodOptional<z.ZodNumber>;
    rehash: z.ZodOptional<z.ZodBoolean>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        global_ordinals: "global_ordinals";
        direct: "direct";
        segment_ordinals: "segment_ordinals";
        save_memory_heuristic: "save_memory_heuristic";
        save_time_heuristic: "save_time_heuristic";
    }>>;
}, z.core.$strip>;
export type AggregationsCardinalityAggregation = z.infer<typeof AggregationsCardinalityAggregation>;
export interface AggregationsCartesianBoundsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsCartesianBoundsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsCartesianBoundsAggregation = z.infer<typeof AggregationsCartesianBoundsAggregation>;
export interface AggregationsCartesianCentroidAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsCartesianCentroidAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsCartesianCentroidAggregation = z.infer<typeof AggregationsCartesianCentroidAggregation>;
export declare const AggregationsCustomCategorizeTextAnalyzer: z.ZodObject<{
    char_filter: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type AggregationsCustomCategorizeTextAnalyzer = z.infer<typeof AggregationsCustomCategorizeTextAnalyzer>;
export declare const AggregationsCategorizeTextAnalyzer: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    char_filter: z.ZodOptional<z.ZodArray<z.ZodString>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>]>;
export type AggregationsCategorizeTextAnalyzer = z.infer<typeof AggregationsCategorizeTextAnalyzer>;
/**
 * A multi-bucket aggregation that groups semi-structured text into buckets. Each text
 * field is re-analyzed using a custom analyzer. The resulting tokens are then categorized
 * creating buckets of similarly formatted text values. This aggregation works best with machine
 * generated text like system logs. Only the first 100 analyzed tokens are used to categorize the text.
 */
export declare const AggregationsCategorizeTextAggregation: z.ZodObject<{
    field: z.ZodString;
    max_unique_tokens: z.ZodOptional<z.ZodNumber>;
    max_matched_tokens: z.ZodOptional<z.ZodNumber>;
    similarity_threshold: z.ZodOptional<z.ZodNumber>;
    categorization_filters: z.ZodOptional<z.ZodArray<z.ZodString>>;
    categorization_analyzer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        char_filter: z.ZodOptional<z.ZodArray<z.ZodString>>;
        tokenizer: z.ZodOptional<z.ZodString>;
        filter: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>]>>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    shard_min_doc_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsCategorizeTextAggregation = z.infer<typeof AggregationsCategorizeTextAggregation>;
export declare const AggregationsChangePointAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsChangePointAggregation = z.infer<typeof AggregationsChangePointAggregation>;
export declare const RelationName: z.ZodString;
export type RelationName = z.infer<typeof RelationName>;
export declare const AggregationsChildrenAggregation: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsChildrenAggregation = z.infer<typeof AggregationsChildrenAggregation>;
/** A field value. */
export declare const FieldValue: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
export type FieldValue = z.infer<typeof FieldValue>;
export declare const AggregationsCompositeAggregateKey: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
export type AggregationsCompositeAggregateKey = z.infer<typeof AggregationsCompositeAggregateKey>;
export declare const AggregationsMissingOrder: z.ZodEnum<{
    default: "default";
    first: "first";
    last: "last";
}>;
export type AggregationsMissingOrder = z.infer<typeof AggregationsMissingOrder>;
export declare const AggregationsValueType: z.ZodEnum<{
    string: "string";
    number: "number";
    boolean: "boolean";
    date: "date";
    long: "long";
    double: "double";
    ip: "ip";
    numeric: "numeric";
    geo_point: "geo_point";
    date_nanos: "date_nanos";
}>;
export type AggregationsValueType = z.infer<typeof AggregationsValueType>;
export interface AggregationsCompositeAggregationBaseShape {
    field?: Field | undefined;
    missing_bucket?: boolean | undefined;
    missing_order?: AggregationsMissingOrder | undefined;
    script?: ScriptShape | undefined;
    value_type?: AggregationsValueType | undefined;
    order?: SortOrder | undefined;
}
export declare const AggregationsCompositeAggregationBase: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing_bucket: z.ZodOptional<z.ZodBoolean>;
    missing_order: z.ZodOptional<z.ZodEnum<{
        default: "default";
        first: "first";
        last: "last";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    value_type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        ip: "ip";
        numeric: "numeric";
        geo_point: "geo_point";
        date_nanos: "date_nanos";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type AggregationsCompositeAggregationBase = z.infer<typeof AggregationsCompositeAggregationBase>;
export interface AggregationsCompositeTermsAggregationShape {
    field?: Field | undefined;
    missing_bucket?: boolean | undefined;
    missing_order?: AggregationsMissingOrder | undefined;
    script?: ScriptShape | undefined;
    value_type?: AggregationsValueType | undefined;
    order?: SortOrder | undefined;
}
export declare const AggregationsCompositeTermsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing_bucket: z.ZodOptional<z.ZodBoolean>;
    missing_order: z.ZodOptional<z.ZodEnum<{
        default: "default";
        first: "first";
        last: "last";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    value_type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        ip: "ip";
        numeric: "numeric";
        geo_point: "geo_point";
        date_nanos: "date_nanos";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strip>;
export type AggregationsCompositeTermsAggregation = z.infer<typeof AggregationsCompositeTermsAggregation>;
export interface AggregationsCompositeHistogramAggregationShape {
    field?: Field | undefined;
    missing_bucket?: boolean | undefined;
    missing_order?: AggregationsMissingOrder | undefined;
    script?: ScriptShape | undefined;
    value_type?: AggregationsValueType | undefined;
    order?: SortOrder | undefined;
    interval: double;
}
export declare const AggregationsCompositeHistogramAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing_bucket: z.ZodOptional<z.ZodBoolean>;
    missing_order: z.ZodOptional<z.ZodEnum<{
        default: "default";
        first: "first";
        last: "last";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    value_type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        ip: "ip";
        numeric: "numeric";
        geo_point: "geo_point";
        date_nanos: "date_nanos";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    interval: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsCompositeHistogramAggregation = z.infer<typeof AggregationsCompositeHistogramAggregation>;
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export declare const DurationLarge: z.ZodString;
export type DurationLarge = z.infer<typeof DurationLarge>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export interface AggregationsCompositeDateHistogramAggregationShape {
    field?: Field | undefined;
    missing_bucket?: boolean | undefined;
    missing_order?: AggregationsMissingOrder | undefined;
    script?: ScriptShape | undefined;
    value_type?: AggregationsValueType | undefined;
    order?: SortOrder | undefined;
    format?: string | undefined;
    calendar_interval?: DurationLarge | undefined;
    fixed_interval?: DurationLarge | undefined;
    offset?: Duration | undefined;
    time_zone?: TimeZone | undefined;
}
export declare const AggregationsCompositeDateHistogramAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing_bucket: z.ZodOptional<z.ZodBoolean>;
    missing_order: z.ZodOptional<z.ZodEnum<{
        default: "default";
        first: "first";
        last: "last";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    value_type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        ip: "ip";
        numeric: "numeric";
        geo_point: "geo_point";
        date_nanos: "date_nanos";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    format: z.ZodOptional<z.ZodString>;
    calendar_interval: z.ZodOptional<z.ZodString>;
    fixed_interval: z.ZodOptional<z.ZodString>;
    offset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_zone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsCompositeDateHistogramAggregation = z.infer<typeof AggregationsCompositeDateHistogramAggregation>;
export declare const CoordsGeoBounds: z.ZodObject<{
    top: z.ZodNumber;
    bottom: z.ZodNumber;
    left: z.ZodNumber;
    right: z.ZodNumber;
}, z.core.$strip>;
export type CoordsGeoBounds = z.infer<typeof CoordsGeoBounds>;
export declare const LatLonGeoLocation: z.ZodObject<{
    lat: z.ZodNumber;
    lon: z.ZodNumber;
}, z.core.$strip>;
export type LatLonGeoLocation = z.infer<typeof LatLonGeoLocation>;
export declare const GeoHash: z.ZodString;
export type GeoHash = z.infer<typeof GeoHash>;
export declare const GeoHashLocation: z.ZodObject<{
    geohash: z.ZodString;
}, z.core.$strip>;
export type GeoHashLocation = z.infer<typeof GeoHashLocation>;
/**
 * A latitude/longitude as a 2 dimensional point. It can be represented in various ways:
 * - as a `{lat, long}` object
 * - as a geo hash value
 * - as a `[lon, lat]` array
 * - as a string in `"<lat>, <lon>"` or WKT point formats
 */
export declare const GeoLocation: z.ZodUnion<readonly [z.ZodObject<{
    lat: z.ZodNumber;
    lon: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    geohash: z.ZodString;
}, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
export type GeoLocation = z.infer<typeof GeoLocation>;
export declare const TopLeftBottomRightGeoBounds: z.ZodObject<{
    top_left: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    bottom_right: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
}, z.core.$strip>;
export type TopLeftBottomRightGeoBounds = z.infer<typeof TopLeftBottomRightGeoBounds>;
export declare const TopRightBottomLeftGeoBounds: z.ZodObject<{
    top_right: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    bottom_left: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
}, z.core.$strip>;
export type TopRightBottomLeftGeoBounds = z.infer<typeof TopRightBottomLeftGeoBounds>;
export declare const WktGeoBounds: z.ZodObject<{
    wkt: z.ZodString;
}, z.core.$strip>;
export type WktGeoBounds = z.infer<typeof WktGeoBounds>;
/**
 * A geo bounding box. It can be represented in various ways:
 * - as 4 top/bottom/left/right coordinates
 * - as 2 top_left / bottom_right points
 * - as 2 top_right / bottom_left points
 * - as a WKT bounding box
 */
export declare const GeoBounds: z.ZodUnion<readonly [z.ZodObject<{
    top: z.ZodNumber;
    bottom: z.ZodNumber;
    left: z.ZodNumber;
    right: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    top_left: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    bottom_right: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
}, z.core.$strip>, z.ZodObject<{
    top_right: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    bottom_left: z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
}, z.core.$strip>, z.ZodObject<{
    wkt: z.ZodString;
}, z.core.$strip>]>;
export type GeoBounds = z.infer<typeof GeoBounds>;
export interface AggregationsCompositeGeoTileGridAggregationShape {
    field?: Field | undefined;
    missing_bucket?: boolean | undefined;
    missing_order?: AggregationsMissingOrder | undefined;
    script?: ScriptShape | undefined;
    value_type?: AggregationsValueType | undefined;
    order?: SortOrder | undefined;
    precision?: integer | undefined;
    bounds?: GeoBounds | undefined;
}
export declare const AggregationsCompositeGeoTileGridAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing_bucket: z.ZodOptional<z.ZodBoolean>;
    missing_order: z.ZodOptional<z.ZodEnum<{
        default: "default";
        first: "first";
        last: "last";
    }>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    value_type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        ip: "ip";
        numeric: "numeric";
        geo_point: "geo_point";
        date_nanos: "date_nanos";
    }>>;
    order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    precision: z.ZodOptional<z.ZodNumber>;
    bounds: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        top: z.ZodNumber;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        top_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        top_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        wkt: z.ZodString;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type AggregationsCompositeGeoTileGridAggregation = z.infer<typeof AggregationsCompositeGeoTileGridAggregation>;
export interface AggregationsCompositeAggregationSourceShape {
    terms?: AggregationsCompositeTermsAggregation | undefined;
    histogram?: AggregationsCompositeHistogramAggregation | undefined;
    date_histogram?: AggregationsCompositeDateHistogramAggregation | undefined;
    geotile_grid?: AggregationsCompositeGeoTileGridAggregation | undefined;
}
export declare const AggregationsCompositeAggregationSource: z.ZodType<AggregationsCompositeAggregationSourceShape>;
export type AggregationsCompositeAggregationSource = z.infer<typeof AggregationsCompositeAggregationSource>;
export interface AggregationsCompositeAggregationShape {
    after?: AggregationsCompositeAggregateKey | undefined;
    size?: integer | undefined;
    sources?: Array<Record<string, AggregationsCompositeAggregationSourceShape>> | undefined;
}
export declare const AggregationsCompositeAggregation: z.ZodObject<{
    after: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    size: z.ZodOptional<z.ZodNumber>;
    sources: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, typeof AggregationsCompositeAggregationSource>>>;
}, z.core.$strip>;
export type AggregationsCompositeAggregation = z.infer<typeof AggregationsCompositeAggregation>;
export declare const AggregationsCumulativeCardinalityAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsCumulativeCardinalityAggregation = z.infer<typeof AggregationsCumulativeCardinalityAggregation>;
export declare const AggregationsCumulativeSumAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsCumulativeSumAggregation = z.infer<typeof AggregationsCumulativeSumAggregation>;
export declare const AggregationsCalendarInterval: z.ZodEnum<{
    second: "second";
    "1s": "1s";
    minute: "minute";
    "1m": "1m";
    hour: "hour";
    "1h": "1h";
    day: "day";
    "1d": "1d";
    week: "week";
    "1w": "1w";
    month: "month";
    "1M": "1M";
    quarter: "quarter";
    "1q": "1q";
    year: "year";
    "1y": "1y";
}>;
export type AggregationsCalendarInterval = z.infer<typeof AggregationsCalendarInterval>;
export declare const AggregationsExtendedBounds: z.ZodObject<{
    max: z.ZodOptional<z.ZodAny>;
    min: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type AggregationsExtendedBounds = z.infer<typeof AggregationsExtendedBounds>;
export declare const AggregationsAggregateOrder: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>>, z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>>>]>;
export type AggregationsAggregateOrder = z.infer<typeof AggregationsAggregateOrder>;
export interface AggregationsDateHistogramAggregationShape {
    calendar_interval?: AggregationsCalendarInterval | undefined;
    extended_bounds?: AggregationsExtendedBounds | undefined;
    hard_bounds?: AggregationsExtendedBounds | undefined;
    field?: Field | undefined;
    fixed_interval?: Duration | undefined;
    format?: string | undefined;
    interval?: Duration | undefined;
    min_doc_count?: integer | undefined;
    missing?: DateTime | undefined;
    offset?: Duration | undefined;
    order?: AggregationsAggregateOrder | undefined;
    params?: Record<string, unknown> | undefined;
    script?: ScriptShape | undefined;
    time_zone?: TimeZone | undefined;
    keyed?: boolean | undefined;
}
export declare const AggregationsDateHistogramAggregation: z.ZodObject<{
    calendar_interval: z.ZodOptional<z.ZodEnum<{
        second: "second";
        "1s": "1s";
        minute: "minute";
        "1m": "1m";
        hour: "hour";
        "1h": "1h";
        day: "day";
        "1d": "1d";
        week: "week";
        "1w": "1w";
        month: "month";
        "1M": "1M";
        quarter: "quarter";
        "1q": "1q";
        year: "year";
        "1y": "1y";
    }>>;
    extended_bounds: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodAny>;
        min: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    hard_bounds: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodAny>;
        min: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    field: z.ZodOptional<z.ZodString>;
    fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    format: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    offset: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    order: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>, z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>>]>>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    time_zone: z.ZodOptional<z.ZodString>;
    keyed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsDateHistogramAggregation = z.infer<typeof AggregationsDateHistogramAggregation>;
export declare const DateMath: z.ZodString;
export type DateMath = z.infer<typeof DateMath>;
/**
 * A date range limit, represented either as a DateMath expression or a number expressed
 * according to the target field's precision.
 */
export declare const AggregationsFieldDateMath: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
export type AggregationsFieldDateMath = z.infer<typeof AggregationsFieldDateMath>;
export declare const AggregationsDateRangeExpression: z.ZodObject<{
    from: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    key: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
}, z.core.$strip>;
export type AggregationsDateRangeExpression = z.infer<typeof AggregationsDateRangeExpression>;
export declare const AggregationsDateRangeAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    format: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    ranges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
        key: z.ZodOptional<z.ZodString>;
        to: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    }, z.core.$strip>>>;
    time_zone: z.ZodOptional<z.ZodString>;
    keyed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsDateRangeAggregation = z.infer<typeof AggregationsDateRangeAggregation>;
export declare const AggregationsDerivativeAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsDerivativeAggregation = z.infer<typeof AggregationsDerivativeAggregation>;
export declare const AggregationsSamplerAggregationExecutionHint: z.ZodEnum<{
    map: "map";
    global_ordinals: "global_ordinals";
    bytes_hash: "bytes_hash";
}>;
export type AggregationsSamplerAggregationExecutionHint = z.infer<typeof AggregationsSamplerAggregationExecutionHint>;
export interface AggregationsDiversifiedSamplerAggregationShape {
    execution_hint?: AggregationsSamplerAggregationExecutionHint | undefined;
    max_docs_per_value?: integer | undefined;
    script?: ScriptShape | undefined;
    shard_size?: integer | undefined;
    field?: Field | undefined;
}
export declare const AggregationsDiversifiedSamplerAggregation: z.ZodObject<{
    execution_hint: z.ZodOptional<z.ZodEnum<{
        map: "map";
        global_ordinals: "global_ordinals";
        bytes_hash: "bytes_hash";
    }>>;
    max_docs_per_value: z.ZodOptional<z.ZodNumber>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsDiversifiedSamplerAggregation = z.infer<typeof AggregationsDiversifiedSamplerAggregation>;
export interface AggregationsExtendedStatsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
    sigma?: double | undefined;
}
export declare const AggregationsExtendedStatsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
    sigma: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsExtendedStatsAggregation = z.infer<typeof AggregationsExtendedStatsAggregation>;
export declare const AggregationsExtendedStatsBucketAggregation: z.ZodObject<{
    sigma: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsExtendedStatsBucketAggregation = z.infer<typeof AggregationsExtendedStatsBucketAggregation>;
export declare const AggregationsTermsExclude: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type AggregationsTermsExclude = z.infer<typeof AggregationsTermsExclude>;
export declare const AggregationsTermsPartition: z.ZodObject<{
    num_partitions: z.ZodNumber;
    partition: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsTermsPartition = z.infer<typeof AggregationsTermsPartition>;
export declare const AggregationsTermsInclude: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
    num_partitions: z.ZodNumber;
    partition: z.ZodNumber;
}, z.core.$strip>]>;
export type AggregationsTermsInclude = z.infer<typeof AggregationsTermsInclude>;
export declare const AggregationsFrequentItemSetsField: z.ZodObject<{
    field: z.ZodString;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
        num_partitions: z.ZodNumber;
        partition: z.ZodNumber;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type AggregationsFrequentItemSetsField = z.infer<typeof AggregationsFrequentItemSetsField>;
export interface AggregationsFrequentItemSetsAggregationShape {
    fields: AggregationsFrequentItemSetsField[];
    minimum_set_size?: integer | undefined;
    minimum_support?: double | undefined;
    size?: integer | undefined;
    filter?: QueryDslQueryContainerShape | undefined;
}
export declare const AggregationsFrequentItemSetsAggregation: z.ZodObject<{
    fields: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
            num_partitions: z.ZodNumber;
            partition: z.ZodNumber;
        }, z.core.$strip>]>>;
    }, z.core.$strip>>;
    minimum_set_size: z.ZodOptional<z.ZodNumber>;
    minimum_support: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
}, z.core.$strip>;
export type AggregationsFrequentItemSetsAggregation = z.infer<typeof AggregationsFrequentItemSetsAggregation>;
/**
 * Aggregation buckets. By default they are returned as an array, but if the aggregation has keys configured for
 * the different buckets, the result is a dictionary.
 */
export declare const AggregationsBuckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
export type AggregationsBuckets = z.infer<typeof AggregationsBuckets>;
export declare const AggregationsFiltersAggregation: z.ZodObject<{
    filters: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>>;
    other_bucket: z.ZodOptional<z.ZodBoolean>;
    other_bucket_key: z.ZodOptional<z.ZodString>;
    keyed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsFiltersAggregation = z.infer<typeof AggregationsFiltersAggregation>;
export interface AggregationsGeoBoundsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    wrap_longitude?: boolean | undefined;
}
export declare const AggregationsGeoBoundsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    wrap_longitude: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsGeoBoundsAggregation = z.infer<typeof AggregationsGeoBoundsAggregation>;
export interface AggregationsGeoCentroidAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    count?: long | undefined;
    location?: GeoLocation | undefined;
}
export declare const AggregationsGeoCentroidAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    count: z.ZodOptional<z.ZodNumber>;
    location: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>>;
}, z.core.$strip>;
export type AggregationsGeoCentroidAggregation = z.infer<typeof AggregationsGeoCentroidAggregation>;
export declare const AggregationsAggregationRange: z.ZodObject<{
    from: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    key: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
}, z.core.$strip>;
export type AggregationsAggregationRange = z.infer<typeof AggregationsAggregationRange>;
export declare const AggregationsGeoDistanceAggregation: z.ZodObject<{
    distance_type: z.ZodOptional<z.ZodEnum<{
        arc: "arc";
        plane: "plane";
    }>>;
    field: z.ZodOptional<z.ZodString>;
    origin: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>>;
    ranges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        key: z.ZodOptional<z.ZodString>;
        to: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    }, z.core.$strip>>>;
    unit: z.ZodOptional<z.ZodEnum<{
        in: "in";
        m: "m";
        ft: "ft";
        yd: "yd";
        mi: "mi";
        nmi: "nmi";
        km: "km";
        cm: "cm";
        mm: "mm";
    }>>;
}, z.core.$strip>;
export type AggregationsGeoDistanceAggregation = z.infer<typeof AggregationsGeoDistanceAggregation>;
/** A precision that can be expressed as a geohash length between 1 and 12, or a distance measure like "1km", "10m". */
export declare const GeoHashPrecision: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type GeoHashPrecision = z.infer<typeof GeoHashPrecision>;
export declare const AggregationsGeoHashGridAggregation: z.ZodObject<{
    bounds: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        top: z.ZodNumber;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        top_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        top_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        wkt: z.ZodString;
    }, z.core.$strip>]>>;
    field: z.ZodOptional<z.ZodString>;
    precision: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsGeoHashGridAggregation = z.infer<typeof AggregationsGeoHashGridAggregation>;
export declare const AggregationsGeoLinePoint: z.ZodObject<{
    field: z.ZodString;
}, z.core.$strip>;
export type AggregationsGeoLinePoint = z.infer<typeof AggregationsGeoLinePoint>;
export declare const AggregationsGeoLineSort: z.ZodObject<{
    field: z.ZodString;
}, z.core.$strip>;
export type AggregationsGeoLineSort = z.infer<typeof AggregationsGeoLineSort>;
export declare const AggregationsGeoLineAggregation: z.ZodObject<{
    point: z.ZodObject<{
        field: z.ZodString;
    }, z.core.$strip>;
    sort: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
    }, z.core.$strip>>;
    include_sort: z.ZodOptional<z.ZodBoolean>;
    sort_order: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsGeoLineAggregation = z.infer<typeof AggregationsGeoLineAggregation>;
export declare const GeoTilePrecision: z.ZodNumber;
export type GeoTilePrecision = z.infer<typeof GeoTilePrecision>;
export declare const AggregationsGeoTileGridAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    precision: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    bounds: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        top: z.ZodNumber;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        top_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        top_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        wkt: z.ZodString;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type AggregationsGeoTileGridAggregation = z.infer<typeof AggregationsGeoTileGridAggregation>;
export declare const AggregationsGeohexGridAggregation: z.ZodObject<{
    field: z.ZodString;
    precision: z.ZodOptional<z.ZodNumber>;
    bounds: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        top: z.ZodNumber;
        bottom: z.ZodNumber;
        left: z.ZodNumber;
        right: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        top_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        top_right: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
        bottom_left: z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        wkt: z.ZodString;
    }, z.core.$strip>]>>;
    size: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsGeohexGridAggregation = z.infer<typeof AggregationsGeohexGridAggregation>;
export declare const AggregationsGlobalAggregation: z.ZodObject<{}, z.core.$strip>;
export type AggregationsGlobalAggregation = z.infer<typeof AggregationsGlobalAggregation>;
export interface AggregationsHistogramAggregationShape {
    extended_bounds?: AggregationsExtendedBounds | undefined;
    hard_bounds?: AggregationsExtendedBounds | undefined;
    field?: Field | undefined;
    interval?: double | undefined;
    min_doc_count?: integer | undefined;
    missing?: double | undefined;
    offset?: double | undefined;
    order?: AggregationsAggregateOrder | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
    keyed?: boolean | undefined;
}
export declare const AggregationsHistogramAggregation: z.ZodObject<{
    extended_bounds: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodAny>;
        min: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    hard_bounds: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodAny>;
        min: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    field: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodNumber>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    missing: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    order: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>, z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>>]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
    keyed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsHistogramAggregation = z.infer<typeof AggregationsHistogramAggregation>;
export declare const AggregationsIpRangeAggregationRange: z.ZodObject<{
    from: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    mask: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strip>;
export type AggregationsIpRangeAggregationRange = z.infer<typeof AggregationsIpRangeAggregationRange>;
export declare const AggregationsIpRangeAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    ranges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        mask: z.ZodOptional<z.ZodString>;
        to: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type AggregationsIpRangeAggregation = z.infer<typeof AggregationsIpRangeAggregation>;
export declare const AggregationsIpPrefixAggregation: z.ZodObject<{
    field: z.ZodString;
    prefix_length: z.ZodNumber;
    is_ipv6: z.ZodOptional<z.ZodBoolean>;
    append_prefix_length: z.ZodOptional<z.ZodBoolean>;
    keyed: z.ZodOptional<z.ZodBoolean>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsIpPrefixAggregation = z.infer<typeof AggregationsIpPrefixAggregation>;
export declare const MlRegressionInferenceOptions: z.ZodObject<{
    results_field: z.ZodOptional<z.ZodString>;
    num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlRegressionInferenceOptions = z.infer<typeof MlRegressionInferenceOptions>;
export declare const MlClassificationInferenceOptions: z.ZodObject<{
    num_top_classes: z.ZodOptional<z.ZodNumber>;
    num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
    prediction_field_type: z.ZodOptional<z.ZodString>;
    results_field: z.ZodOptional<z.ZodString>;
    top_classes_results_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlClassificationInferenceOptions = z.infer<typeof MlClassificationInferenceOptions>;
export declare const AggregationsInferenceConfigContainer: z.ZodUnion<readonly [z.ZodObject<{
    regression: z.ZodObject<{
        results_field: z.ZodOptional<z.ZodString>;
        num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    classification: z.ZodObject<{
        num_top_classes: z.ZodOptional<z.ZodNumber>;
        num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
        prediction_field_type: z.ZodOptional<z.ZodString>;
        results_field: z.ZodOptional<z.ZodString>;
        top_classes_results_field: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type AggregationsInferenceConfigContainer = z.infer<typeof AggregationsInferenceConfigContainer>;
export declare const AggregationsInferenceAggregation: z.ZodObject<{
    model_id: z.ZodString;
    inference_config: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        regression: z.ZodObject<{
            results_field: z.ZodOptional<z.ZodString>;
            num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        classification: z.ZodObject<{
            num_top_classes: z.ZodOptional<z.ZodNumber>;
            num_top_feature_importance_values: z.ZodOptional<z.ZodNumber>;
            prediction_field_type: z.ZodOptional<z.ZodString>;
            results_field: z.ZodOptional<z.ZodString>;
            top_classes_results_field: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsInferenceAggregation = z.infer<typeof AggregationsInferenceAggregation>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const AggregationsMatrixAggregation: z.ZodObject<{
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    missing: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type AggregationsMatrixAggregation = z.infer<typeof AggregationsMatrixAggregation>;
export declare const AggregationsMatrixStatsAggregation: z.ZodObject<{
    mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
        median: "median";
    }>>;
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    missing: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type AggregationsMatrixStatsAggregation = z.infer<typeof AggregationsMatrixStatsAggregation>;
export interface AggregationsMaxAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsMaxAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsMaxAggregation = z.infer<typeof AggregationsMaxAggregation>;
export declare const AggregationsMaxBucketAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsMaxBucketAggregation = z.infer<typeof AggregationsMaxBucketAggregation>;
export interface AggregationsMedianAbsoluteDeviationAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
    compression?: double | undefined;
    execution_hint?: AggregationsTDigestExecutionHint | undefined;
}
export declare const AggregationsMedianAbsoluteDeviationAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodNumber>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        default: "default";
        high_accuracy: "high_accuracy";
    }>>;
}, z.core.$strip>;
export type AggregationsMedianAbsoluteDeviationAggregation = z.infer<typeof AggregationsMedianAbsoluteDeviationAggregation>;
export interface AggregationsMinAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsMinAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsMinAggregation = z.infer<typeof AggregationsMinAggregation>;
export declare const AggregationsMinBucketAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsMinBucketAggregation = z.infer<typeof AggregationsMinBucketAggregation>;
export declare const AggregationsMissingAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
}, z.core.$strip>;
export type AggregationsMissingAggregation = z.infer<typeof AggregationsMissingAggregation>;
export declare const AggregationsMovingAverageAggregationBase: z.ZodObject<{
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsMovingAverageAggregationBase = z.infer<typeof AggregationsMovingAverageAggregationBase>;
/** For empty Class assignments */
export declare const EmptyObject: z.ZodObject<{}, z.core.$strip>;
export type EmptyObject = z.infer<typeof EmptyObject>;
export declare const AggregationsLinearMovingAverageAggregation: z.ZodObject<{
    model: z.ZodLiteral<"linear">;
    settings: z.ZodObject<{}, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsLinearMovingAverageAggregation = z.infer<typeof AggregationsLinearMovingAverageAggregation>;
export declare const AggregationsSimpleMovingAverageAggregation: z.ZodObject<{
    model: z.ZodLiteral<"simple">;
    settings: z.ZodObject<{}, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsSimpleMovingAverageAggregation = z.infer<typeof AggregationsSimpleMovingAverageAggregation>;
export declare const AggregationsEwmaModelSettings: z.ZodObject<{
    alpha: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsEwmaModelSettings = z.infer<typeof AggregationsEwmaModelSettings>;
export declare const AggregationsEwmaMovingAverageAggregation: z.ZodObject<{
    model: z.ZodLiteral<"ewma">;
    settings: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsEwmaMovingAverageAggregation = z.infer<typeof AggregationsEwmaMovingAverageAggregation>;
export declare const AggregationsHoltLinearModelSettings: z.ZodObject<{
    alpha: z.ZodOptional<z.ZodNumber>;
    beta: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsHoltLinearModelSettings = z.infer<typeof AggregationsHoltLinearModelSettings>;
export declare const AggregationsHoltMovingAverageAggregation: z.ZodObject<{
    model: z.ZodLiteral<"holt">;
    settings: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
        beta: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsHoltMovingAverageAggregation = z.infer<typeof AggregationsHoltMovingAverageAggregation>;
export declare const AggregationsHoltWintersType: z.ZodEnum<{
    add: "add";
    mult: "mult";
}>;
export type AggregationsHoltWintersType = z.infer<typeof AggregationsHoltWintersType>;
export declare const AggregationsHoltWintersModelSettings: z.ZodObject<{
    alpha: z.ZodOptional<z.ZodNumber>;
    beta: z.ZodOptional<z.ZodNumber>;
    gamma: z.ZodOptional<z.ZodNumber>;
    pad: z.ZodOptional<z.ZodBoolean>;
    period: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodEnum<{
        add: "add";
        mult: "mult";
    }>>;
}, z.core.$strip>;
export type AggregationsHoltWintersModelSettings = z.infer<typeof AggregationsHoltWintersModelSettings>;
export declare const AggregationsHoltWintersMovingAverageAggregation: z.ZodObject<{
    model: z.ZodLiteral<"holt_winters">;
    settings: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
        beta: z.ZodOptional<z.ZodNumber>;
        gamma: z.ZodOptional<z.ZodNumber>;
        pad: z.ZodOptional<z.ZodBoolean>;
        period: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodEnum<{
            add: "add";
            mult: "mult";
        }>>;
    }, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsHoltWintersMovingAverageAggregation = z.infer<typeof AggregationsHoltWintersMovingAverageAggregation>;
export declare const AggregationsMovingAverageAggregation: z.ZodUnion<readonly [z.ZodObject<{
    model: z.ZodLiteral<"linear">;
    settings: z.ZodObject<{}, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>, z.ZodObject<{
    model: z.ZodLiteral<"simple">;
    settings: z.ZodObject<{}, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>, z.ZodObject<{
    model: z.ZodLiteral<"ewma">;
    settings: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>, z.ZodObject<{
    model: z.ZodLiteral<"holt">;
    settings: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
        beta: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>, z.ZodObject<{
    model: z.ZodLiteral<"holt_winters">;
    settings: z.ZodObject<{
        alpha: z.ZodOptional<z.ZodNumber>;
        beta: z.ZodOptional<z.ZodNumber>;
        gamma: z.ZodOptional<z.ZodNumber>;
        pad: z.ZodOptional<z.ZodBoolean>;
        period: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodEnum<{
            add: "add";
            mult: "mult";
        }>>;
    }, z.core.$strip>;
    minimize: z.ZodOptional<z.ZodBoolean>;
    predict: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>]>;
export type AggregationsMovingAverageAggregation = z.infer<typeof AggregationsMovingAverageAggregation>;
export declare const AggregationsMovingPercentilesAggregation: z.ZodObject<{
    window: z.ZodOptional<z.ZodNumber>;
    shift: z.ZodOptional<z.ZodNumber>;
    keyed: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsMovingPercentilesAggregation = z.infer<typeof AggregationsMovingPercentilesAggregation>;
export declare const AggregationsMovingFunctionAggregation: z.ZodObject<{
    script: z.ZodOptional<z.ZodString>;
    shift: z.ZodOptional<z.ZodNumber>;
    window: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsMovingFunctionAggregation = z.infer<typeof AggregationsMovingFunctionAggregation>;
export declare const AggregationsTermsAggregationCollectMode: z.ZodEnum<{
    depth_first: "depth_first";
    breadth_first: "breadth_first";
}>;
export type AggregationsTermsAggregationCollectMode = z.infer<typeof AggregationsTermsAggregationCollectMode>;
export interface AggregationsMultiTermLookupShape {
    missing?: AggregationsMissing | undefined;
    field?: Field | undefined;
    script?: Script | undefined;
}
export declare const AggregationsMultiTermLookup: z.ZodType<AggregationsMultiTermLookupShape>;
export type AggregationsMultiTermLookup = z.infer<typeof AggregationsMultiTermLookup>;
export interface AggregationsMultiTermsAggregationShape {
    collect_mode?: AggregationsTermsAggregationCollectMode | undefined;
    order?: AggregationsAggregateOrder | undefined;
    min_doc_count?: long | undefined;
    shard_min_doc_count?: long | undefined;
    shard_size?: integer | undefined;
    show_term_doc_count_error?: boolean | undefined;
    size?: integer | undefined;
    terms: AggregationsMultiTermLookupShape[];
}
export declare const AggregationsMultiTermsAggregation: z.ZodObject<{
    collect_mode: z.ZodOptional<z.ZodEnum<{
        depth_first: "depth_first";
        breadth_first: "breadth_first";
    }>>;
    order: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>, z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>>]>>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    shard_min_doc_count: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    show_term_doc_count_error: z.ZodOptional<z.ZodBoolean>;
    size: z.ZodOptional<z.ZodNumber>;
    terms: z.ZodArray<z.ZodType<AggregationsMultiTermLookupShape, unknown, z.core.$ZodTypeInternals<AggregationsMultiTermLookupShape, unknown>>>;
}, z.core.$strip>;
export type AggregationsMultiTermsAggregation = z.infer<typeof AggregationsMultiTermsAggregation>;
export declare const AggregationsNestedAggregation: z.ZodObject<{
    path: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsNestedAggregation = z.infer<typeof AggregationsNestedAggregation>;
export declare const AggregationsNormalizeMethod: z.ZodEnum<{
    rescale_0_1: "rescale_0_1";
    rescale_0_100: "rescale_0_100";
    percent_of_sum: "percent_of_sum";
    mean: "mean";
    "z-score": "z-score";
    softmax: "softmax";
}>;
export type AggregationsNormalizeMethod = z.infer<typeof AggregationsNormalizeMethod>;
export declare const AggregationsNormalizeAggregation: z.ZodObject<{
    method: z.ZodOptional<z.ZodEnum<{
        rescale_0_1: "rescale_0_1";
        rescale_0_100: "rescale_0_100";
        percent_of_sum: "percent_of_sum";
        mean: "mean";
        "z-score": "z-score";
        softmax: "softmax";
    }>>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsNormalizeAggregation = z.infer<typeof AggregationsNormalizeAggregation>;
export declare const AggregationsParentAggregation: z.ZodObject<{
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsParentAggregation = z.infer<typeof AggregationsParentAggregation>;
export declare const AggregationsHdrMethod: z.ZodObject<{
    number_of_significant_value_digits: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsHdrMethod = z.infer<typeof AggregationsHdrMethod>;
export declare const AggregationsTDigest: z.ZodObject<{
    compression: z.ZodOptional<z.ZodNumber>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        default: "default";
        high_accuracy: "high_accuracy";
    }>>;
}, z.core.$strip>;
export type AggregationsTDigest = z.infer<typeof AggregationsTDigest>;
export interface AggregationsPercentileRanksAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
    keyed?: boolean | undefined;
    values?: double[] | null | undefined;
    hdr?: AggregationsHdrMethod | undefined;
    tdigest?: AggregationsTDigest | undefined;
}
export declare const AggregationsPercentileRanksAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
    keyed: z.ZodOptional<z.ZodBoolean>;
    values: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodNumber>, z.ZodNull]>>;
    hdr: z.ZodOptional<z.ZodObject<{
        number_of_significant_value_digits: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    tdigest: z.ZodOptional<z.ZodObject<{
        compression: z.ZodOptional<z.ZodNumber>;
        execution_hint: z.ZodOptional<z.ZodEnum<{
            default: "default";
            high_accuracy: "high_accuracy";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AggregationsPercentileRanksAggregation = z.infer<typeof AggregationsPercentileRanksAggregation>;
export interface AggregationsPercentilesAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
    keyed?: boolean | undefined;
    percents?: double | double[] | undefined;
    hdr?: AggregationsHdrMethod | undefined;
    tdigest?: AggregationsTDigest | undefined;
}
export declare const AggregationsPercentilesAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
    keyed: z.ZodOptional<z.ZodBoolean>;
    percents: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodArray<z.ZodNumber>]>>;
    hdr: z.ZodOptional<z.ZodObject<{
        number_of_significant_value_digits: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    tdigest: z.ZodOptional<z.ZodObject<{
        compression: z.ZodOptional<z.ZodNumber>;
        execution_hint: z.ZodOptional<z.ZodEnum<{
            default: "default";
            high_accuracy: "high_accuracy";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AggregationsPercentilesAggregation = z.infer<typeof AggregationsPercentilesAggregation>;
export declare const AggregationsPercentilesBucketAggregation: z.ZodObject<{
    percents: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsPercentilesBucketAggregation = z.infer<typeof AggregationsPercentilesBucketAggregation>;
export interface AggregationsRangeAggregationShape {
    field?: Field | undefined;
    missing?: integer | undefined;
    ranges?: AggregationsAggregationRange[] | undefined;
    script?: ScriptShape | undefined;
    keyed?: boolean | undefined;
    format?: string | undefined;
}
export declare const AggregationsRangeAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodNumber>;
    ranges: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        key: z.ZodOptional<z.ZodString>;
        to: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    }, z.core.$strip>>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    keyed: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsRangeAggregation = z.infer<typeof AggregationsRangeAggregation>;
export declare const AggregationsRareTermsAggregation: z.ZodObject<{
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    field: z.ZodOptional<z.ZodString>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
        num_partitions: z.ZodNumber;
        partition: z.ZodNumber;
    }, z.core.$strip>]>>;
    max_doc_count: z.ZodOptional<z.ZodNumber>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    precision: z.ZodOptional<z.ZodNumber>;
    value_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsRareTermsAggregation = z.infer<typeof AggregationsRareTermsAggregation>;
export declare const AggregationsRateMode: z.ZodEnum<{
    sum: "sum";
    value_count: "value_count";
}>;
export type AggregationsRateMode = z.infer<typeof AggregationsRateMode>;
export interface AggregationsRateAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
    unit?: AggregationsCalendarInterval | undefined;
    mode?: AggregationsRateMode | undefined;
}
export declare const AggregationsRateAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
    unit: z.ZodOptional<z.ZodEnum<{
        second: "second";
        "1s": "1s";
        minute: "minute";
        "1m": "1m";
        hour: "hour";
        "1h": "1h";
        day: "day";
        "1d": "1d";
        week: "week";
        "1w": "1w";
        month: "month";
        "1M": "1M";
        quarter: "quarter";
        "1q": "1q";
        year: "year";
        "1y": "1y";
    }>>;
    mode: z.ZodOptional<z.ZodEnum<{
        sum: "sum";
        value_count: "value_count";
    }>>;
}, z.core.$strip>;
export type AggregationsRateAggregation = z.infer<typeof AggregationsRateAggregation>;
export declare const AggregationsReverseNestedAggregation: z.ZodObject<{
    path: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsReverseNestedAggregation = z.infer<typeof AggregationsReverseNestedAggregation>;
export declare const AggregationsSamplerAggregation: z.ZodObject<{
    shard_size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsSamplerAggregation = z.infer<typeof AggregationsSamplerAggregation>;
export interface AggregationsScriptedMetricAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    combine_script?: ScriptShape | undefined;
    init_script?: ScriptShape | undefined;
    map_script?: ScriptShape | undefined;
    params?: Record<string, unknown> | undefined;
    reduce_script?: ScriptShape | undefined;
}
export declare const AggregationsScriptedMetricAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    combine_script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    init_script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    map_script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    reduce_script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsScriptedMetricAggregation = z.infer<typeof AggregationsScriptedMetricAggregation>;
export declare const AggregationsSerialDifferencingAggregation: z.ZodObject<{
    lag: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsSerialDifferencingAggregation = z.infer<typeof AggregationsSerialDifferencingAggregation>;
export declare const AggregationsChiSquareHeuristic: z.ZodObject<{
    background_is_superset: z.ZodBoolean;
    include_negatives: z.ZodBoolean;
}, z.core.$strip>;
export type AggregationsChiSquareHeuristic = z.infer<typeof AggregationsChiSquareHeuristic>;
export declare const AggregationsTermsAggregationExecutionHint: z.ZodEnum<{
    map: "map";
    global_ordinals: "global_ordinals";
    global_ordinals_hash: "global_ordinals_hash";
    global_ordinals_low_cardinality: "global_ordinals_low_cardinality";
}>;
export type AggregationsTermsAggregationExecutionHint = z.infer<typeof AggregationsTermsAggregationExecutionHint>;
export declare const AggregationsGoogleNormalizedDistanceHeuristic: z.ZodObject<{
    background_is_superset: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsGoogleNormalizedDistanceHeuristic = z.infer<typeof AggregationsGoogleNormalizedDistanceHeuristic>;
export declare const AggregationsMutualInformationHeuristic: z.ZodObject<{
    background_is_superset: z.ZodOptional<z.ZodBoolean>;
    include_negatives: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsMutualInformationHeuristic = z.infer<typeof AggregationsMutualInformationHeuristic>;
export declare const AggregationsPercentageScoreHeuristic: z.ZodObject<{}, z.core.$strip>;
export type AggregationsPercentageScoreHeuristic = z.infer<typeof AggregationsPercentageScoreHeuristic>;
export interface AggregationsScriptedHeuristicShape {
    script: ScriptShape;
}
export declare const AggregationsScriptedHeuristic: z.ZodObject<{
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
}, z.core.$strip>;
export type AggregationsScriptedHeuristic = z.infer<typeof AggregationsScriptedHeuristic>;
export declare const AggregationsPValueHeuristic: z.ZodObject<{
    background_is_superset: z.ZodOptional<z.ZodBoolean>;
    normalize_above: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsPValueHeuristic = z.infer<typeof AggregationsPValueHeuristic>;
export interface AggregationsSignificantTermsAggregationShape {
    background_filter?: QueryDslQueryContainerShape | undefined;
    chi_square?: AggregationsChiSquareHeuristic | undefined;
    exclude?: AggregationsTermsExclude | undefined;
    execution_hint?: AggregationsTermsAggregationExecutionHint | undefined;
    field?: Field | undefined;
    gnd?: AggregationsGoogleNormalizedDistanceHeuristic | undefined;
    include?: AggregationsTermsInclude | undefined;
    jlh?: EmptyObject | undefined;
    min_doc_count?: long | undefined;
    mutual_information?: AggregationsMutualInformationHeuristic | undefined;
    percentage?: AggregationsPercentageScoreHeuristic | undefined;
    script_heuristic?: AggregationsScriptedHeuristicShape | undefined;
    p_value?: AggregationsPValueHeuristic | undefined;
    shard_min_doc_count?: long | undefined;
    shard_size?: integer | undefined;
    size?: integer | undefined;
}
export declare const AggregationsSignificantTermsAggregation: z.ZodObject<{
    background_filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    chi_square: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodBoolean;
        include_negatives: z.ZodBoolean;
    }, z.core.$strip>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        map: "map";
        global_ordinals: "global_ordinals";
        global_ordinals_hash: "global_ordinals_hash";
        global_ordinals_low_cardinality: "global_ordinals_low_cardinality";
    }>>;
    field: z.ZodOptional<z.ZodString>;
    gnd: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
        num_partitions: z.ZodNumber;
        partition: z.ZodNumber;
    }, z.core.$strip>]>>;
    jlh: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    mutual_information: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodOptional<z.ZodBoolean>;
        include_negatives: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    percentage: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    script_heuristic: z.ZodOptional<z.ZodObject<{
        script: z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
    }, z.core.$strip>>;
    p_value: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodOptional<z.ZodBoolean>;
        normalize_above: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    shard_min_doc_count: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsSignificantTermsAggregation = z.infer<typeof AggregationsSignificantTermsAggregation>;
export interface AggregationsSignificantTextAggregationShape {
    background_filter?: QueryDslQueryContainerShape | undefined;
    chi_square?: AggregationsChiSquareHeuristic | undefined;
    exclude?: AggregationsTermsExclude | undefined;
    execution_hint?: AggregationsTermsAggregationExecutionHint | undefined;
    field?: Field | undefined;
    filter_duplicate_text?: boolean | undefined;
    gnd?: AggregationsGoogleNormalizedDistanceHeuristic | undefined;
    include?: AggregationsTermsInclude | undefined;
    jlh?: EmptyObject | undefined;
    min_doc_count?: long | undefined;
    mutual_information?: AggregationsMutualInformationHeuristic | undefined;
    percentage?: AggregationsPercentageScoreHeuristic | undefined;
    script_heuristic?: AggregationsScriptedHeuristicShape | undefined;
    shard_min_doc_count?: long | undefined;
    shard_size?: integer | undefined;
    size?: integer | undefined;
    source_fields?: Fields | undefined;
}
export declare const AggregationsSignificantTextAggregation: z.ZodObject<{
    background_filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    chi_square: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodBoolean;
        include_negatives: z.ZodBoolean;
    }, z.core.$strip>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        map: "map";
        global_ordinals: "global_ordinals";
        global_ordinals_hash: "global_ordinals_hash";
        global_ordinals_low_cardinality: "global_ordinals_low_cardinality";
    }>>;
    field: z.ZodOptional<z.ZodString>;
    filter_duplicate_text: z.ZodOptional<z.ZodBoolean>;
    gnd: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
        num_partitions: z.ZodNumber;
        partition: z.ZodNumber;
    }, z.core.$strip>]>>;
    jlh: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    mutual_information: z.ZodOptional<z.ZodObject<{
        background_is_superset: z.ZodOptional<z.ZodBoolean>;
        include_negatives: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    percentage: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    script_heuristic: z.ZodOptional<z.ZodObject<{
        script: z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
    }, z.core.$strip>>;
    shard_min_doc_count: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    source_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsSignificantTextAggregation = z.infer<typeof AggregationsSignificantTextAggregation>;
export interface AggregationsStatsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsStatsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsStatsAggregation = z.infer<typeof AggregationsStatsAggregation>;
export declare const AggregationsStatsBucketAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsStatsBucketAggregation = z.infer<typeof AggregationsStatsBucketAggregation>;
export interface AggregationsStringStatsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    show_distribution?: boolean | undefined;
}
export declare const AggregationsStringStatsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    show_distribution: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsStringStatsAggregation = z.infer<typeof AggregationsStringStatsAggregation>;
export interface AggregationsSumAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsSumAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsSumAggregation = z.infer<typeof AggregationsSumAggregation>;
export declare const AggregationsSumBucketAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    gap_policy: z.ZodOptional<z.ZodEnum<{
        skip: "skip";
        insert_zeros: "insert_zeros";
        keep_values: "keep_values";
    }>>;
    buckets_path: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodString>]>>;
}, z.core.$strip>;
export type AggregationsSumBucketAggregation = z.infer<typeof AggregationsSumBucketAggregation>;
export interface AggregationsTermsAggregationShape {
    collect_mode?: AggregationsTermsAggregationCollectMode | undefined;
    exclude?: AggregationsTermsExclude | undefined;
    execution_hint?: AggregationsTermsAggregationExecutionHint | undefined;
    field?: Field | undefined;
    include?: AggregationsTermsInclude | undefined;
    min_doc_count?: integer | undefined;
    missing?: AggregationsMissing | undefined;
    missing_order?: AggregationsMissingOrder | undefined;
    missing_bucket?: boolean | undefined;
    value_type?: string | undefined;
    order?: AggregationsAggregateOrder | undefined;
    script?: ScriptShape | undefined;
    shard_min_doc_count?: long | undefined;
    shard_size?: integer | undefined;
    show_term_doc_count_error?: boolean | undefined;
    size?: integer | undefined;
    format?: string | undefined;
}
export declare const AggregationsTermsAggregation: z.ZodObject<{
    collect_mode: z.ZodOptional<z.ZodEnum<{
        depth_first: "depth_first";
        breadth_first: "breadth_first";
    }>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    execution_hint: z.ZodOptional<z.ZodEnum<{
        map: "map";
        global_ordinals: "global_ordinals";
        global_ordinals_hash: "global_ordinals_hash";
        global_ordinals_low_cardinality: "global_ordinals_low_cardinality";
    }>>;
    field: z.ZodOptional<z.ZodString>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>, z.ZodObject<{
        num_partitions: z.ZodNumber;
        partition: z.ZodNumber;
    }, z.core.$strip>]>>;
    min_doc_count: z.ZodOptional<z.ZodNumber>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    missing_order: z.ZodOptional<z.ZodEnum<{
        default: "default";
        first: "first";
        last: "last";
    }>>;
    missing_bucket: z.ZodOptional<z.ZodBoolean>;
    value_type: z.ZodOptional<z.ZodString>;
    order: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>, z.ZodArray<z.ZodRecord<z.ZodString, z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>>]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    shard_min_doc_count: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    show_term_doc_count_error: z.ZodOptional<z.ZodBoolean>;
    size: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsTermsAggregation = z.infer<typeof AggregationsTermsAggregation>;
export declare const AggregationsTimeSeriesAggregation: z.ZodObject<{
    size: z.ZodOptional<z.ZodNumber>;
    keyed: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsTimeSeriesAggregation = z.infer<typeof AggregationsTimeSeriesAggregation>;
export interface ScriptFieldShape {
    script: ScriptShape;
    ignore_failure?: boolean | undefined;
}
export declare const ScriptField: z.ZodObject<{
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
    ignore_failure: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ScriptField = z.infer<typeof ScriptField>;
export declare const SearchSourceFilter: z.ZodObject<{
    exclude_vectors: z.ZodOptional<z.ZodBoolean>;
    excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type SearchSourceFilter = z.infer<typeof SearchSourceFilter>;
/** Defines how to fetch a source. Fetching can be disabled entirely, or the source can be filtered. */
export declare const SearchSourceConfig: z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
    exclude_vectors: z.ZodOptional<z.ZodBoolean>;
    excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>;
export type SearchSourceConfig = z.infer<typeof SearchSourceConfig>;
export interface AggregationsTopHitsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    docvalue_fields?: QueryDslFieldAndFormat[] | undefined;
    explain?: boolean | undefined;
    fields?: QueryDslFieldAndFormat[] | undefined;
    from?: integer | undefined;
    highlight?: SearchHighlightShape | undefined;
    script_fields?: Record<string, ScriptFieldShape> | undefined;
    size?: integer | undefined;
    sort?: SortShape | undefined;
    _source?: SearchSourceConfig | undefined;
    stored_fields?: Fields | undefined;
    track_scores?: boolean | undefined;
    version?: boolean | undefined;
    seq_no_primary_term?: boolean | undefined;
}
export declare const AggregationsTopHitsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        include_unmapped: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodString]>>>;
    explain: z.ZodOptional<z.ZodBoolean>;
    fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        include_unmapped: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodString]>>>;
    from: z.ZodOptional<z.ZodNumber>;
    highlight: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            plain: "plain";
            fvh: "fvh";
            unified: "unified";
        }>, z.ZodString]>>;
        boundary_chars: z.ZodOptional<z.ZodString>;
        boundary_max_scan: z.ZodOptional<z.ZodNumber>;
        boundary_scanner: z.ZodOptional<z.ZodEnum<{
            chars: "chars";
            sentence: "sentence";
            word: "word";
        }>>;
        boundary_scanner_locale: z.ZodOptional<z.ZodString>;
        force_source: z.ZodOptional<z.ZodBoolean>;
        fragmenter: z.ZodOptional<z.ZodEnum<{
            simple: "simple";
            span: "span";
        }>>;
        fragment_size: z.ZodOptional<z.ZodNumber>;
        highlight_filter: z.ZodOptional<z.ZodBoolean>;
        highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
        max_fragment_length: z.ZodOptional<z.ZodNumber>;
        max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
        no_match_size: z.ZodOptional<z.ZodNumber>;
        number_of_fragments: z.ZodOptional<z.ZodNumber>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        order: z.ZodOptional<z.ZodEnum<{
            score: "score";
        }>>;
        phrase_limit: z.ZodOptional<z.ZodNumber>;
        post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        require_field_match: z.ZodOptional<z.ZodBoolean>;
        tags_schema: z.ZodOptional<z.ZodEnum<{
            styled: "styled";
        }>>;
        encoder: z.ZodOptional<z.ZodEnum<{
            default: "default";
            html: "html";
        }>>;
        fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
    }, z.core.$strip>>;
    script_fields: z.ZodOptional<z.ZodRecord<z.ZodString, typeof ScriptField>>;
    size: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
        exclude_vectors: z.ZodOptional<z.ZodBoolean>;
        excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    track_scores: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodBoolean>;
    seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AggregationsTopHitsAggregation = z.infer<typeof AggregationsTopHitsAggregation>;
export interface AggregationsTestPopulationShape {
    field: Field;
    script?: ScriptShape | undefined;
    filter?: QueryDslQueryContainerShape | undefined;
}
export declare const AggregationsTestPopulation: z.ZodObject<{
    field: z.ZodString;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
}, z.core.$strip>;
export type AggregationsTestPopulation = z.infer<typeof AggregationsTestPopulation>;
export declare const AggregationsTTestType: z.ZodEnum<{
    paired: "paired";
    homoscedastic: "homoscedastic";
    heteroscedastic: "heteroscedastic";
}>;
export type AggregationsTTestType = z.infer<typeof AggregationsTTestType>;
export interface AggregationsTTestAggregationShape {
    a?: AggregationsTestPopulationShape | undefined;
    b?: AggregationsTestPopulationShape | undefined;
    type?: AggregationsTTestType | undefined;
}
export declare const AggregationsTTestAggregation: z.ZodObject<{
    a: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
        filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    }, z.core.$strip>>;
    b: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
        filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodEnum<{
        paired: "paired";
        homoscedastic: "homoscedastic";
        heteroscedastic: "heteroscedastic";
    }>>;
}, z.core.$strip>;
export type AggregationsTTestAggregation = z.infer<typeof AggregationsTTestAggregation>;
export declare const AggregationsTopMetricsValue: z.ZodObject<{
    field: z.ZodString;
}, z.core.$strip>;
export type AggregationsTopMetricsValue = z.infer<typeof AggregationsTopMetricsValue>;
export interface AggregationsTopMetricsAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    metrics?: AggregationsTopMetricsValue | AggregationsTopMetricsValue[] | undefined;
    size?: integer | undefined;
    sort?: SortShape | undefined;
}
export declare const AggregationsTopMetricsAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    metrics: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        field: z.ZodString;
    }, z.core.$strip>>]>>;
    size: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
}, z.core.$strip>;
export type AggregationsTopMetricsAggregation = z.infer<typeof AggregationsTopMetricsAggregation>;
export interface AggregationsFormattableMetricAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsFormattableMetricAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsFormattableMetricAggregation = z.infer<typeof AggregationsFormattableMetricAggregation>;
export interface AggregationsValueCountAggregationShape {
    field?: Field | undefined;
    missing?: AggregationsMissing | undefined;
    script?: ScriptShape | undefined;
    format?: string | undefined;
}
export declare const AggregationsValueCountAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNumber, z.ZodBoolean]>>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsValueCountAggregation = z.infer<typeof AggregationsValueCountAggregation>;
export interface AggregationsWeightedAverageValueShape {
    field?: Field | undefined;
    missing?: double | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsWeightedAverageValue: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    missing: z.ZodOptional<z.ZodNumber>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsWeightedAverageValue = z.infer<typeof AggregationsWeightedAverageValue>;
export interface AggregationsWeightedAverageAggregationShape {
    format?: string | undefined;
    value?: AggregationsWeightedAverageValueShape | undefined;
    value_type?: AggregationsValueType | undefined;
    weight?: AggregationsWeightedAverageValueShape | undefined;
}
export declare const AggregationsWeightedAverageAggregation: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        missing: z.ZodOptional<z.ZodNumber>;
        script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    }, z.core.$strip>>;
    value_type: z.ZodOptional<z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        ip: "ip";
        numeric: "numeric";
        geo_point: "geo_point";
        date_nanos: "date_nanos";
    }>>;
    weight: z.ZodOptional<z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        missing: z.ZodOptional<z.ZodNumber>;
        script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AggregationsWeightedAverageAggregation = z.infer<typeof AggregationsWeightedAverageAggregation>;
export interface AggregationsVariableWidthHistogramAggregationShape {
    field?: Field | undefined;
    buckets?: integer | undefined;
    shard_size?: integer | undefined;
    initial_buffer?: integer | undefined;
    script?: ScriptShape | undefined;
}
export declare const AggregationsVariableWidthHistogramAggregation: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    buckets: z.ZodOptional<z.ZodNumber>;
    shard_size: z.ZodOptional<z.ZodNumber>;
    initial_buffer: z.ZodOptional<z.ZodNumber>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
}, z.core.$strip>;
export type AggregationsVariableWidthHistogramAggregation = z.infer<typeof AggregationsVariableWidthHistogramAggregation>;
export interface AggregationsAggregationContainerShape {
    aggregations?: Record<string, AggregationsAggregationContainerShape> | undefined;
    meta?: Metadata | undefined;
    adjacency_matrix?: AggregationsAdjacencyMatrixAggregation | undefined;
    auto_date_histogram?: AggregationsAutoDateHistogramAggregation | undefined;
    avg?: AggregationsAverageAggregation | undefined;
    avg_bucket?: AggregationsAverageBucketAggregation | undefined;
    boxplot?: AggregationsBoxplotAggregation | undefined;
    bucket_script?: AggregationsBucketScriptAggregation | undefined;
    bucket_selector?: AggregationsBucketSelectorAggregation | undefined;
    bucket_sort?: AggregationsBucketSortAggregation | undefined;
    bucket_count_ks_test?: AggregationsBucketKsAggregation | undefined;
    bucket_correlation?: AggregationsBucketCorrelationAggregation | undefined;
    cardinality?: AggregationsCardinalityAggregation | undefined;
    cartesian_bounds?: AggregationsCartesianBoundsAggregation | undefined;
    cartesian_centroid?: AggregationsCartesianCentroidAggregation | undefined;
    categorize_text?: AggregationsCategorizeTextAggregation | undefined;
    change_point?: AggregationsChangePointAggregation | undefined;
    children?: AggregationsChildrenAggregation | undefined;
    composite?: AggregationsCompositeAggregation | undefined;
    cumulative_cardinality?: AggregationsCumulativeCardinalityAggregation | undefined;
    cumulative_sum?: AggregationsCumulativeSumAggregation | undefined;
    date_histogram?: AggregationsDateHistogramAggregation | undefined;
    date_range?: AggregationsDateRangeAggregation | undefined;
    derivative?: AggregationsDerivativeAggregation | undefined;
    diversified_sampler?: AggregationsDiversifiedSamplerAggregation | undefined;
    extended_stats?: AggregationsExtendedStatsAggregation | undefined;
    extended_stats_bucket?: AggregationsExtendedStatsBucketAggregation | undefined;
    frequent_item_sets?: AggregationsFrequentItemSetsAggregation | undefined;
    filter?: QueryDslQueryContainer | undefined;
    filters?: AggregationsFiltersAggregation | undefined;
    geo_bounds?: AggregationsGeoBoundsAggregation | undefined;
    geo_centroid?: AggregationsGeoCentroidAggregation | undefined;
    geo_distance?: AggregationsGeoDistanceAggregation | undefined;
    geohash_grid?: AggregationsGeoHashGridAggregation | undefined;
    geo_line?: AggregationsGeoLineAggregation | undefined;
    geotile_grid?: AggregationsGeoTileGridAggregation | undefined;
    geohex_grid?: AggregationsGeohexGridAggregation | undefined;
    global?: AggregationsGlobalAggregation | undefined;
    histogram?: AggregationsHistogramAggregation | undefined;
    ip_range?: AggregationsIpRangeAggregation | undefined;
    ip_prefix?: AggregationsIpPrefixAggregation | undefined;
    inference?: AggregationsInferenceAggregation | undefined;
    line?: AggregationsGeoLineAggregation | undefined;
    matrix_stats?: AggregationsMatrixStatsAggregation | undefined;
    max?: AggregationsMaxAggregation | undefined;
    max_bucket?: AggregationsMaxBucketAggregation | undefined;
    median_absolute_deviation?: AggregationsMedianAbsoluteDeviationAggregation | undefined;
    min?: AggregationsMinAggregation | undefined;
    min_bucket?: AggregationsMinBucketAggregation | undefined;
    missing?: AggregationsMissingAggregation | undefined;
    moving_avg?: AggregationsMovingAverageAggregation | undefined;
    moving_percentiles?: AggregationsMovingPercentilesAggregation | undefined;
    moving_fn?: AggregationsMovingFunctionAggregation | undefined;
    multi_terms?: AggregationsMultiTermsAggregation | undefined;
    nested?: AggregationsNestedAggregation | undefined;
    normalize?: AggregationsNormalizeAggregation | undefined;
    parent?: AggregationsParentAggregation | undefined;
    percentile_ranks?: AggregationsPercentileRanksAggregation | undefined;
    percentiles?: AggregationsPercentilesAggregation | undefined;
    percentiles_bucket?: AggregationsPercentilesBucketAggregation | undefined;
    range?: AggregationsRangeAggregation | undefined;
    rare_terms?: AggregationsRareTermsAggregation | undefined;
    rate?: AggregationsRateAggregation | undefined;
    reverse_nested?: AggregationsReverseNestedAggregation | undefined;
    sampler?: AggregationsSamplerAggregation | undefined;
    scripted_metric?: AggregationsScriptedMetricAggregation | undefined;
    serial_diff?: AggregationsSerialDifferencingAggregation | undefined;
    significant_terms?: AggregationsSignificantTermsAggregation | undefined;
    significant_text?: AggregationsSignificantTextAggregation | undefined;
    stats?: AggregationsStatsAggregation | undefined;
    stats_bucket?: AggregationsStatsBucketAggregation | undefined;
    string_stats?: AggregationsStringStatsAggregation | undefined;
    sum?: AggregationsSumAggregation | undefined;
    sum_bucket?: AggregationsSumBucketAggregation | undefined;
    terms?: AggregationsTermsAggregation | undefined;
    time_series?: AggregationsTimeSeriesAggregation | undefined;
    top_hits?: AggregationsTopHitsAggregation | undefined;
    t_test?: AggregationsTTestAggregation | undefined;
    top_metrics?: AggregationsTopMetricsAggregation | undefined;
    value_count?: AggregationsValueCountAggregation | undefined;
    weighted_avg?: AggregationsWeightedAverageAggregation | undefined;
    variable_width_histogram?: AggregationsVariableWidthHistogramAggregation | undefined;
}
export declare const AggregationsAggregationContainer: z.ZodType<AggregationsAggregationContainerShape>;
export type AggregationsAggregationContainer = z.infer<typeof AggregationsAggregationContainer>;
/**
 * Number of hits matching the query to count accurately. If true, the exact
 * number of hits is returned at the cost of some performance. If false, the
 * response does not include the total number of hits matching the query.
 * Defaults to 10,000 hits.
 */
export declare const SearchTrackHits: z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>;
export type SearchTrackHits = z.infer<typeof SearchTrackHits>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const QueryVector: z.ZodArray<z.ZodNumber>;
export type QueryVector = z.infer<typeof QueryVector>;
export declare const InferenceEmbeddingContentType: z.ZodEnum<{
    text: "text";
    image: "image";
    audio: "audio";
    video: "video";
    pdf: "pdf";
}>;
export type InferenceEmbeddingContentType = z.infer<typeof InferenceEmbeddingContentType>;
export declare const InferenceEmbeddingContentFormat: z.ZodEnum<{
    text: "text";
    base64: "base64";
}>;
export type InferenceEmbeddingContentFormat = z.infer<typeof InferenceEmbeddingContentFormat>;
export declare const InferenceString: z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>, z.ZodNull]>>;
    value: z.ZodString;
}, z.core.$strip>;
export type InferenceString = z.infer<typeof InferenceString>;
export declare const InferenceStringGroup: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>, z.ZodNull]>>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodArray<z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>, z.ZodNull]>>;
    value: z.ZodString;
}, z.core.$strip>>]>;
export type InferenceStringGroup = z.infer<typeof InferenceStringGroup>;
/**
 * Knn embedding input.
 * Either a string, an object or array of objects
 */
export declare const KnnEmbeddingInput: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>, z.ZodNull]>>;
    value: z.ZodString;
}, z.core.$strip>, z.ZodArray<z.ZodObject<{
    type: z.ZodEnum<{
        text: "text";
        image: "image";
        audio: "audio";
        video: "video";
        pdf: "pdf";
    }>;
    format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        text: "text";
        base64: "base64";
    }>, z.ZodNull]>>;
    value: z.ZodString;
}, z.core.$strip>>]>]>;
export type KnnEmbeddingInput = z.infer<typeof KnnEmbeddingInput>;
export declare const Embedding: z.ZodObject<{
    inference_id: z.ZodOptional<z.ZodString>;
    input: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>, z.ZodNull]>>;
        value: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            text: "text";
            image: "image";
            audio: "audio";
            video: "video";
            pdf: "pdf";
        }>;
        format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            text: "text";
            base64: "base64";
        }>, z.ZodNull]>>;
        value: z.ZodString;
    }, z.core.$strip>>]>]>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type Embedding = z.infer<typeof Embedding>;
export declare const TextEmbedding: z.ZodObject<{
    model_id: z.ZodOptional<z.ZodString>;
    model_text: z.ZodString;
}, z.core.$strip>;
export type TextEmbedding = z.infer<typeof TextEmbedding>;
export declare const LookupQueryVectorBuilder: z.ZodObject<{
    id: z.ZodString;
    index: z.ZodString;
    path: z.ZodString;
    routing: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type LookupQueryVectorBuilder = z.infer<typeof LookupQueryVectorBuilder>;
export declare const QueryVectorBuilder: z.ZodUnion<readonly [z.ZodObject<{
    embedding: z.ZodObject<{
        inference_id: z.ZodOptional<z.ZodString>;
        input: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                image: "image";
                audio: "audio";
                video: "video";
                pdf: "pdf";
            }>;
            format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                text: "text";
                base64: "base64";
            }>, z.ZodNull]>>;
            value: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                text: "text";
                image: "image";
                audio: "audio";
                video: "video";
                pdf: "pdf";
            }>;
            format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                text: "text";
                base64: "base64";
            }>, z.ZodNull]>>;
            value: z.ZodString;
        }, z.core.$strip>>]>]>;
        timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    text_embedding: z.ZodObject<{
        model_id: z.ZodOptional<z.ZodString>;
        model_text: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    lookup: z.ZodObject<{
        id: z.ZodString;
        index: z.ZodString;
        path: z.ZodString;
        routing: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type QueryVectorBuilder = z.infer<typeof QueryVectorBuilder>;
export declare const RescoreVector: z.ZodObject<{
    oversample: z.ZodNumber;
}, z.core.$strip>;
export type RescoreVector = z.infer<typeof RescoreVector>;
export interface KnnSearchShape {
    field: Field;
    query_vector?: QueryVector | undefined;
    query_vector_builder?: QueryVectorBuilder | undefined;
    k?: integer | undefined;
    num_candidates?: integer | undefined;
    visit_percentage?: float | undefined;
    boost?: float | undefined;
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    similarity?: float | undefined;
    inner_hits?: SearchInnerHitsShape | undefined;
    rescore_vector?: RescoreVector | undefined;
    query_name?: string | undefined;
}
export declare const KnnSearch: z.ZodObject<{
    field: z.ZodString;
    query_vector: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    query_vector_builder: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        embedding: z.ZodObject<{
            inference_id: z.ZodOptional<z.ZodString>;
            input: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>>]>]>;
            timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_embedding: z.ZodObject<{
            model_id: z.ZodOptional<z.ZodString>;
            model_text: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        lookup: z.ZodObject<{
            id: z.ZodString;
            index: z.ZodString;
            path: z.ZodString;
            routing: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    k: z.ZodOptional<z.ZodNumber>;
    num_candidates: z.ZodOptional<z.ZodNumber>;
    visit_percentage: z.ZodOptional<z.ZodNumber>;
    boost: z.ZodOptional<z.ZodNumber>;
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    similarity: z.ZodOptional<z.ZodNumber>;
    inner_hits: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        from: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
            max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
            collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        }, z.core.$strip>>;
        docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        explain: z.ZodOptional<z.ZodBoolean>;
        highlight: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                plain: "plain";
                fvh: "fvh";
                unified: "unified";
            }>, z.ZodString]>>;
            boundary_chars: z.ZodOptional<z.ZodString>;
            boundary_max_scan: z.ZodOptional<z.ZodNumber>;
            boundary_scanner: z.ZodOptional<z.ZodEnum<{
                chars: "chars";
                sentence: "sentence";
                word: "word";
            }>>;
            boundary_scanner_locale: z.ZodOptional<z.ZodString>;
            force_source: z.ZodOptional<z.ZodBoolean>;
            fragmenter: z.ZodOptional<z.ZodEnum<{
                simple: "simple";
                span: "span";
            }>>;
            fragment_size: z.ZodOptional<z.ZodNumber>;
            highlight_filter: z.ZodOptional<z.ZodBoolean>;
            highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
            max_fragment_length: z.ZodOptional<z.ZodNumber>;
            max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
            no_match_size: z.ZodOptional<z.ZodNumber>;
            number_of_fragments: z.ZodOptional<z.ZodNumber>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            order: z.ZodOptional<z.ZodEnum<{
                score: "score";
            }>>;
            phrase_limit: z.ZodOptional<z.ZodNumber>;
            post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            require_field_match: z.ZodOptional<z.ZodBoolean>;
            tags_schema: z.ZodOptional<z.ZodEnum<{
                styled: "styled";
            }>>;
            encoder: z.ZodOptional<z.ZodEnum<{
                default: "default";
                html: "html";
            }>>;
            fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
        }, z.core.$strip>>;
        ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
        script_fields: z.ZodOptional<z.ZodRecord<typeof Field, typeof ScriptField>>;
        seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
        field: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
        _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
            exclude_vectors: z.ZodOptional<z.ZodBoolean>;
            excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
        stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        track_scores: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    rescore_vector: z.ZodOptional<z.ZodObject<{
        oversample: z.ZodNumber;
    }, z.core.$strip>>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type KnnSearch = z.infer<typeof KnnSearch>;
export declare const SearchScoreMode: z.ZodEnum<{
    max: "max";
    min: "min";
    avg: "avg";
    total: "total";
    multiply: "multiply";
}>;
export type SearchScoreMode = z.infer<typeof SearchScoreMode>;
export interface SearchRescoreQueryShape {
    Query: QueryDslQueryContainerShape;
    query_weight?: double | undefined;
    rescore_query_weight?: double | undefined;
    score_mode?: SearchScoreMode | undefined;
}
export declare const SearchRescoreQuery: z.ZodObject<{
    Query: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    query_weight: z.ZodOptional<z.ZodNumber>;
    rescore_query_weight: z.ZodOptional<z.ZodNumber>;
    score_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        avg: "avg";
        total: "total";
        multiply: "multiply";
    }>>;
}, z.core.$strip>;
export type SearchRescoreQuery = z.infer<typeof SearchRescoreQuery>;
export declare const SearchLearningToRank: z.ZodObject<{
    model_id: z.ZodString;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type SearchLearningToRank = z.infer<typeof SearchLearningToRank>;
export interface SearchScriptRescoreShape {
    script: ScriptShape;
}
export declare const SearchScriptRescore: z.ZodObject<{
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
}, z.core.$strip>;
export type SearchScriptRescore = z.infer<typeof SearchScriptRescore>;
export interface SearchRescoreShape {
    window_size?: integer | undefined;
    query?: SearchRescoreQuery | undefined;
    learning_to_rank?: SearchLearningToRank | undefined;
    script?: SearchScriptRescore | undefined;
}
export declare const SearchRescore: z.ZodType<SearchRescoreShape>;
export type SearchRescore = z.infer<typeof SearchRescore>;
export interface RetrieverBaseShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
}
export declare const RetrieverBase: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RetrieverBase = z.infer<typeof RetrieverBase>;
export declare const SortResults: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
export type SortResults = z.infer<typeof SortResults>;
export interface StandardRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    query?: QueryDslQueryContainerShape | undefined;
    search_after?: SortResults | undefined;
    terminate_after?: integer | undefined;
    sort?: SortShape | undefined;
    collapse?: SearchFieldCollapseShape | undefined;
}
export declare const StandardRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    search_after: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    terminate_after: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
    collapse: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
        max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type StandardRetriever = z.infer<typeof StandardRetriever>;
export interface KnnRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    field: string;
    query_vector?: QueryVector | undefined;
    query_vector_builder?: QueryVectorBuilder | undefined;
    k: integer;
    num_candidates: integer;
    visit_percentage?: float | undefined;
    similarity?: float | undefined;
    rescore_vector?: RescoreVector | undefined;
}
export declare const KnnRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    field: z.ZodString;
    query_vector: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    query_vector_builder: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        embedding: z.ZodObject<{
            inference_id: z.ZodOptional<z.ZodString>;
            input: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>>]>]>;
            timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_embedding: z.ZodObject<{
            model_id: z.ZodOptional<z.ZodString>;
            model_text: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        lookup: z.ZodObject<{
            id: z.ZodString;
            index: z.ZodString;
            path: z.ZodString;
            routing: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    k: z.ZodNumber;
    num_candidates: z.ZodNumber;
    visit_percentage: z.ZodOptional<z.ZodNumber>;
    similarity: z.ZodOptional<z.ZodNumber>;
    rescore_vector: z.ZodOptional<z.ZodObject<{
        oversample: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KnnRetriever = z.infer<typeof KnnRetriever>;
export interface RRFRetrieverComponentShape {
    retriever: RetrieverContainerShape;
    weight?: float | undefined;
}
/** Wraps a retriever with an optional weight for RRF scoring. */
export declare const RRFRetrieverComponent: z.ZodObject<{
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    weight: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type RRFRetrieverComponent = z.infer<typeof RRFRetrieverComponent>;
export type RRFRetrieverEntryShape = RetrieverContainerShape | RRFRetrieverComponentShape;
/** Either a direct RetrieverContainer (backward compatible) or an RRFRetrieverComponent with weight. */
export declare const RRFRetrieverEntry: z.ZodType<RRFRetrieverEntryShape>;
export type RRFRetrieverEntry = z.infer<typeof RRFRetrieverEntry>;
export interface RRFRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    retrievers: RRFRetrieverEntryShape[];
    rank_constant?: integer | undefined;
    rank_window_size?: integer | undefined;
    query?: string | undefined;
    fields?: string[] | undefined;
}
export declare const RRFRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    retrievers: z.ZodArray<z.ZodType<RRFRetrieverEntryShape, unknown, z.core.$ZodTypeInternals<RRFRetrieverEntryShape, unknown>>>;
    rank_constant: z.ZodOptional<z.ZodNumber>;
    rank_window_size: z.ZodOptional<z.ZodNumber>;
    query: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type RRFRetriever = z.infer<typeof RRFRetriever>;
export declare const MappingChunkRescorerChunkingSettings: z.ZodObject<{
    max_chunk_size: z.ZodNumber;
    overlap: z.ZodOptional<z.ZodNumber>;
    sentence_overlap: z.ZodOptional<z.ZodNumber>;
    separator_group: z.ZodOptional<z.ZodString>;
    separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
    strategy: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MappingChunkRescorerChunkingSettings = z.infer<typeof MappingChunkRescorerChunkingSettings>;
export declare const ChunkRescorer: z.ZodObject<{
    size: z.ZodOptional<z.ZodNumber>;
    chunking_settings: z.ZodOptional<z.ZodObject<{
        max_chunk_size: z.ZodNumber;
        overlap: z.ZodOptional<z.ZodNumber>;
        sentence_overlap: z.ZodOptional<z.ZodNumber>;
        separator_group: z.ZodOptional<z.ZodString>;
        separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        strategy: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ChunkRescorer = z.infer<typeof ChunkRescorer>;
export interface TextSimilarityRerankerShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    retriever: RetrieverContainerShape;
    rank_window_size?: integer | undefined;
    inference_id?: string | undefined;
    inference_text: string;
    field: string;
    chunk_rescorer?: ChunkRescorer | undefined;
}
export declare const TextSimilarityReranker: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    rank_window_size: z.ZodOptional<z.ZodNumber>;
    inference_id: z.ZodOptional<z.ZodString>;
    inference_text: z.ZodString;
    field: z.ZodString;
    chunk_rescorer: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodNumber>;
        chunking_settings: z.ZodOptional<z.ZodObject<{
            max_chunk_size: z.ZodNumber;
            overlap: z.ZodOptional<z.ZodNumber>;
            sentence_overlap: z.ZodOptional<z.ZodNumber>;
            separator_group: z.ZodOptional<z.ZodString>;
            separators: z.ZodOptional<z.ZodArray<z.ZodString>>;
            strategy: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TextSimilarityReranker = z.infer<typeof TextSimilarityReranker>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export interface RuleRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    ruleset_ids: Id | Id[];
    match_criteria: unknown;
    retriever: RetrieverContainerShape;
    rank_window_size?: integer | undefined;
}
export declare const RuleRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    ruleset_ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    match_criteria: z.ZodAny;
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    rank_window_size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type RuleRetriever = z.infer<typeof RuleRetriever>;
export interface RescorerRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    retriever: RetrieverContainerShape;
    rescore: SearchRescoreShape | SearchRescoreShape[];
}
export declare const RescorerRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    rescore: z.ZodUnion<readonly [typeof SearchRescore, z.ZodArray<typeof SearchRescore>]>;
}, z.core.$strip>;
export type RescorerRetriever = z.infer<typeof RescorerRetriever>;
export declare const ScoreNormalizer: z.ZodEnum<{
    none: "none";
    l2_norm: "l2_norm";
    minmax: "minmax";
}>;
export type ScoreNormalizer = z.infer<typeof ScoreNormalizer>;
export interface InnerRetrieverShape {
    retriever: RetrieverContainerShape;
    weight: float;
    normalizer: ScoreNormalizer;
}
export declare const InnerRetriever: z.ZodObject<{
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    weight: z.ZodNumber;
    normalizer: z.ZodEnum<{
        none: "none";
        l2_norm: "l2_norm";
        minmax: "minmax";
    }>;
}, z.core.$strip>;
export type InnerRetriever = z.infer<typeof InnerRetriever>;
export interface LinearRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    retrievers?: InnerRetrieverShape[] | undefined;
    rank_window_size?: integer | undefined;
    query?: string | undefined;
    fields?: string[] | undefined;
    normalizer?: ScoreNormalizer | undefined;
}
export declare const LinearRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    retrievers: z.ZodOptional<z.ZodArray<z.ZodObject<{
        retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
        weight: z.ZodNumber;
        normalizer: z.ZodEnum<{
            none: "none";
            l2_norm: "l2_norm";
            minmax: "minmax";
        }>;
    }, z.core.$strip>>>;
    rank_window_size: z.ZodOptional<z.ZodNumber>;
    query: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    normalizer: z.ZodOptional<z.ZodEnum<{
        none: "none";
        l2_norm: "l2_norm";
        minmax: "minmax";
    }>>;
}, z.core.$strip>;
export type LinearRetriever = z.infer<typeof LinearRetriever>;
export declare const SpecifiedDocument: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
}, z.core.$strip>;
export type SpecifiedDocument = z.infer<typeof SpecifiedDocument>;
export interface PinnedRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    retriever: RetrieverContainerShape;
    ids?: string[] | undefined;
    docs?: SpecifiedDocument[] | undefined;
    rank_window_size?: integer | undefined;
}
export declare const PinnedRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    docs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
    }, z.core.$strip>>>;
    rank_window_size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type PinnedRetriever = z.infer<typeof PinnedRetriever>;
export declare const DiversifyRetrieverTypes: z.ZodEnum<{
    mmr: "mmr";
}>;
export type DiversifyRetrieverTypes = z.infer<typeof DiversifyRetrieverTypes>;
export interface DiversifyRetrieverShape {
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    min_score?: float | undefined;
    _name?: string | undefined;
    type: DiversifyRetrieverTypes;
    field: string;
    retriever: RetrieverContainerShape;
    size?: integer | undefined;
    rank_window_size?: integer | undefined;
    query_vector?: QueryVector | undefined;
    query_vector_builder?: QueryVectorBuilder | undefined;
    lambda?: float | undefined;
}
export declare const DiversifyRetriever: z.ZodObject<{
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    _name: z.ZodOptional<z.ZodString>;
    type: z.ZodEnum<{
        mmr: "mmr";
    }>;
    field: z.ZodString;
    retriever: z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>;
    size: z.ZodOptional<z.ZodNumber>;
    rank_window_size: z.ZodOptional<z.ZodNumber>;
    query_vector: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    query_vector_builder: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        embedding: z.ZodObject<{
            inference_id: z.ZodOptional<z.ZodString>;
            input: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>>]>]>;
            timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_embedding: z.ZodObject<{
            model_id: z.ZodOptional<z.ZodString>;
            model_text: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        lookup: z.ZodObject<{
            id: z.ZodString;
            index: z.ZodString;
            path: z.ZodString;
            routing: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    lambda: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type DiversifyRetriever = z.infer<typeof DiversifyRetriever>;
export interface RetrieverContainerShape {
    standard?: StandardRetriever | undefined;
    knn?: KnnRetriever | undefined;
    rrf?: RRFRetriever | undefined;
    text_similarity_reranker?: TextSimilarityReranker | undefined;
    rule?: RuleRetriever | undefined;
    rescorer?: RescorerRetriever | undefined;
    linear?: LinearRetriever | undefined;
    pinned?: PinnedRetriever | undefined;
    diversify?: DiversifyRetriever | undefined;
}
export declare const RetrieverContainer: z.ZodType<RetrieverContainerShape>;
export type RetrieverContainer = z.infer<typeof RetrieverContainer>;
export declare const SlicedScroll: z.ZodObject<{
    field: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    max: z.ZodNumber;
}, z.core.$strip>;
export type SlicedScroll = z.infer<typeof SlicedScroll>;
export declare const SearchSuggester: z.ZodObject<{
    text: z.ZodOptional<z.ZodString>;
}, z.core.$catchall<z.ZodAny>>;
export type SearchSuggester = z.infer<typeof SearchSuggester>;
export declare const SearchPointInTimeReference: z.ZodObject<{
    id: z.ZodString;
    keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SearchPointInTimeReference = z.infer<typeof SearchPointInTimeReference>;
export declare const MappingRuntimeFieldType: z.ZodEnum<{
    boolean: "boolean";
    date: "date";
    long: "long";
    double: "double";
    lookup: "lookup";
    ip: "ip";
    keyword: "keyword";
    composite: "composite";
    geo_point: "geo_point";
    geo_shape: "geo_shape";
}>;
export type MappingRuntimeFieldType = z.infer<typeof MappingRuntimeFieldType>;
export declare const MappingCompositeSubField: z.ZodObject<{
    type: z.ZodEnum<{
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        lookup: "lookup";
        ip: "ip";
        keyword: "keyword";
        composite: "composite";
        geo_point: "geo_point";
        geo_shape: "geo_shape";
    }>;
}, z.core.$strip>;
export type MappingCompositeSubField = z.infer<typeof MappingCompositeSubField>;
export declare const MappingRuntimeFieldFetchFields: z.ZodObject<{
    field: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MappingRuntimeFieldFetchFields = z.infer<typeof MappingRuntimeFieldFetchFields>;
export declare const MappingOnScriptError: z.ZodEnum<{
    fail: "fail";
    continue: "continue";
}>;
export type MappingOnScriptError = z.infer<typeof MappingOnScriptError>;
export interface MappingRuntimeFieldShape {
    fields?: Record<string, MappingCompositeSubField> | undefined;
    fetch_fields?: MappingRuntimeFieldFetchFields[] | undefined;
    format?: string | undefined;
    input_field?: Field | undefined;
    target_field?: Field | undefined;
    target_index?: IndexName | undefined;
    script?: ScriptShape | undefined;
    on_script_error?: MappingOnScriptError | undefined;
    type: MappingRuntimeFieldType;
}
export declare const MappingRuntimeField: z.ZodObject<{
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodEnum<{
            boolean: "boolean";
            date: "date";
            long: "long";
            double: "double";
            lookup: "lookup";
            ip: "ip";
            keyword: "keyword";
            composite: "composite";
            geo_point: "geo_point";
            geo_shape: "geo_shape";
        }>;
    }, z.core.$strip>>>;
    fetch_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodString]>>>;
    format: z.ZodOptional<z.ZodString>;
    input_field: z.ZodOptional<z.ZodString>;
    target_field: z.ZodOptional<z.ZodString>;
    target_index: z.ZodOptional<z.ZodString>;
    script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    on_script_error: z.ZodOptional<z.ZodEnum<{
        fail: "fail";
        continue: "continue";
    }>>;
    type: z.ZodEnum<{
        boolean: "boolean";
        date: "date";
        long: "long";
        double: "double";
        lookup: "lookup";
        ip: "ip";
        keyword: "keyword";
        composite: "composite";
        geo_point: "geo_point";
        geo_shape: "geo_shape";
    }>;
}, z.core.$strip>;
export type MappingRuntimeField = z.infer<typeof MappingRuntimeField>;
export type MappingRuntimeFieldsShape = Record<Field, MappingRuntimeFieldShape>;
export declare const MappingRuntimeFields: z.ZodType<MappingRuntimeFieldsShape>;
export type MappingRuntimeFields = z.infer<typeof MappingRuntimeFields>;
export interface SearchSearchRequestBodyShape {
    aggregations?: Record<string, AggregationsAggregationContainerShape> | undefined;
    collapse?: SearchFieldCollapseShape | undefined;
    explain?: boolean | undefined;
    ext?: Record<string, unknown> | undefined;
    from?: integer | undefined;
    highlight?: SearchHighlightShape | undefined;
    track_total_hits?: SearchTrackHits | undefined;
    indices_boost?: Array<Record<IndexName, double>> | undefined;
    docvalue_fields?: QueryDslFieldAndFormat[] | undefined;
    knn?: KnnSearchShape | KnnSearchShape[] | undefined;
    min_score?: double | undefined;
    post_filter?: QueryDslQueryContainerShape | undefined;
    profile?: boolean | undefined;
    query?: QueryDslQueryContainerShape | undefined;
    rescore?: SearchRescoreShape | SearchRescoreShape[] | undefined;
    retriever?: RetrieverContainerShape | undefined;
    script_fields?: Record<string, ScriptFieldShape> | undefined;
    search_after?: SortResults | undefined;
    size?: integer | undefined;
    slice?: SlicedScroll | undefined;
    sort?: SortShape | undefined;
    _source?: SearchSourceConfig | undefined;
    fields?: QueryDslFieldAndFormat[] | undefined;
    suggest?: SearchSuggester | undefined;
    terminate_after?: long | undefined;
    timeout?: string | undefined;
    track_scores?: boolean | undefined;
    version?: boolean | undefined;
    seq_no_primary_term?: boolean | undefined;
    stored_fields?: Fields | undefined;
    pit?: SearchPointInTimeReference | undefined;
    runtime_mappings?: MappingRuntimeFieldsShape | undefined;
    stats?: string[] | undefined;
}
export declare const SearchSearchRequestBody: z.ZodObject<{
    aggregations: z.ZodOptional<z.ZodRecord<z.ZodString, typeof AggregationsAggregationContainer>>;
    collapse: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
        max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
    }, z.core.$strip>>;
    explain: z.ZodOptional<z.ZodBoolean>;
    ext: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    from: z.ZodOptional<z.ZodNumber>;
    highlight: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            plain: "plain";
            fvh: "fvh";
            unified: "unified";
        }>, z.ZodString]>>;
        boundary_chars: z.ZodOptional<z.ZodString>;
        boundary_max_scan: z.ZodOptional<z.ZodNumber>;
        boundary_scanner: z.ZodOptional<z.ZodEnum<{
            chars: "chars";
            sentence: "sentence";
            word: "word";
        }>>;
        boundary_scanner_locale: z.ZodOptional<z.ZodString>;
        force_source: z.ZodOptional<z.ZodBoolean>;
        fragmenter: z.ZodOptional<z.ZodEnum<{
            simple: "simple";
            span: "span";
        }>>;
        fragment_size: z.ZodOptional<z.ZodNumber>;
        highlight_filter: z.ZodOptional<z.ZodBoolean>;
        highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
        max_fragment_length: z.ZodOptional<z.ZodNumber>;
        max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
        no_match_size: z.ZodOptional<z.ZodNumber>;
        number_of_fragments: z.ZodOptional<z.ZodNumber>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        order: z.ZodOptional<z.ZodEnum<{
            score: "score";
        }>>;
        phrase_limit: z.ZodOptional<z.ZodNumber>;
        post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        require_field_match: z.ZodOptional<z.ZodBoolean>;
        tags_schema: z.ZodOptional<z.ZodEnum<{
            styled: "styled";
        }>>;
        encoder: z.ZodOptional<z.ZodEnum<{
            default: "default";
            html: "html";
        }>>;
        fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
    }, z.core.$strip>>;
    track_total_hits: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodNumber]>>;
    indices_boost: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNumber>>>;
    docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        include_unmapped: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodString]>>>;
    knn: z.ZodOptional<z.ZodUnion<readonly [typeof KnnSearch, z.ZodArray<typeof KnnSearch>]>>;
    min_score: z.ZodOptional<z.ZodNumber>;
    post_filter: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    profile: z.ZodOptional<z.ZodBoolean>;
    query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    rescore: z.ZodOptional<z.ZodUnion<readonly [typeof SearchRescore, z.ZodArray<typeof SearchRescore>]>>;
    retriever: z.ZodOptional<z.ZodType<RetrieverContainerShape, unknown, z.core.$ZodTypeInternals<RetrieverContainerShape, unknown>>>;
    script_fields: z.ZodOptional<z.ZodRecord<z.ZodString, typeof ScriptField>>;
    search_after: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    size: z.ZodOptional<z.ZodNumber>;
    slice: z.ZodOptional<z.ZodObject<{
        field: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        max: z.ZodNumber;
    }, z.core.$strip>>;
    sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
        exclude_vectors: z.ZodOptional<z.ZodBoolean>;
        excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        include_unmapped: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodString]>>>;
    suggest: z.ZodOptional<z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
    }, z.core.$catchall<z.ZodAny>>>;
    terminate_after: z.ZodOptional<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodString>;
    track_scores: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodBoolean>;
    seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    pit: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    runtime_mappings: z.ZodOptional<z.ZodType<MappingRuntimeFieldsShape, unknown, z.core.$ZodTypeInternals<MappingRuntimeFieldsShape, unknown>>>;
    stats: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type SearchSearchRequestBody = z.infer<typeof SearchSearchRequestBody>;
export type ScriptSourceShape = string | SearchSearchRequestBodyShape;
export declare const ScriptSource: z.ZodType<ScriptSourceShape>;
export type ScriptSource = z.infer<typeof ScriptSource>;
export declare const ScriptLanguage: z.ZodUnion<readonly [z.ZodEnum<{
    painless: "painless";
    expression: "expression";
    mustache: "mustache";
    java: "java";
}>, z.ZodString]>;
export type ScriptLanguage = z.infer<typeof ScriptLanguage>;
export interface ScriptShape {
    source?: ScriptSourceShape | undefined;
    id?: Id | undefined;
    params?: Record<string, unknown> | undefined;
    lang?: ScriptLanguage | undefined;
    options?: Record<string, string> | undefined;
}
export declare const Script: z.ZodObject<{
    source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
    id: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        painless: "painless";
        expression: "expression";
        mustache: "mustache";
        java: "java";
    }>, z.ZodString]>>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type Script = z.infer<typeof Script>;
export interface QueryDslScriptScoreFunctionShape {
    script: ScriptShape;
}
export declare const QueryDslScriptScoreFunction: z.ZodObject<{
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
}, z.core.$strip>;
export type QueryDslScriptScoreFunction = z.infer<typeof QueryDslScriptScoreFunction>;
export interface QueryDslFunctionScoreContainerShape {
    filter?: QueryDslQueryContainerShape | undefined;
    weight?: double | undefined;
    exp?: QueryDslDecayFunction | undefined;
    gauss?: QueryDslDecayFunction | undefined;
    linear?: QueryDslDecayFunction | undefined;
    field_value_factor?: QueryDslFieldValueFactorScoreFunction | undefined;
    random_score?: QueryDslRandomScoreFunction | undefined;
    script_score?: QueryDslScriptScoreFunction | undefined;
}
export declare const QueryDslFunctionScoreContainer: z.ZodType<QueryDslFunctionScoreContainerShape>;
export type QueryDslFunctionScoreContainer = z.infer<typeof QueryDslFunctionScoreContainer>;
export declare const QueryDslFunctionScoreMode: z.ZodEnum<{
    max: "max";
    min: "min";
    first: "first";
    sum: "sum";
    avg: "avg";
    multiply: "multiply";
}>;
export type QueryDslFunctionScoreMode = z.infer<typeof QueryDslFunctionScoreMode>;
export interface QueryDslFunctionScoreQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    boost_mode?: QueryDslFunctionBoostMode | undefined;
    functions?: QueryDslFunctionScoreContainerShape[] | undefined;
    max_boost?: double | undefined;
    min_score?: double | undefined;
    query?: QueryDslQueryContainerShape | undefined;
    score_mode?: QueryDslFunctionScoreMode | undefined;
}
export declare const QueryDslFunctionScoreQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    boost_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        replace: "replace";
        sum: "sum";
        avg: "avg";
        multiply: "multiply";
    }>>;
    functions: z.ZodOptional<z.ZodArray<z.ZodType<QueryDslFunctionScoreContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslFunctionScoreContainerShape, unknown>>>>;
    max_boost: z.ZodOptional<z.ZodNumber>;
    min_score: z.ZodOptional<z.ZodNumber>;
    query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    score_mode: z.ZodOptional<z.ZodEnum<{
        max: "max";
        min: "min";
        first: "first";
        sum: "sum";
        avg: "avg";
        multiply: "multiply";
    }>>;
}, z.core.$strip>;
export type QueryDslFunctionScoreQuery = z.infer<typeof QueryDslFunctionScoreQuery>;
export declare const MultiTermQueryRewrite: z.ZodString;
export type MultiTermQueryRewrite = z.infer<typeof MultiTermQueryRewrite>;
export declare const Fuzziness: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
export type Fuzziness = z.infer<typeof Fuzziness>;
export declare const QueryDslFuzzyQuery: z.ZodObject<{
    max_expansions: z.ZodOptional<z.ZodNumber>;
    prefix_length: z.ZodOptional<z.ZodNumber>;
    rewrite: z.ZodOptional<z.ZodString>;
    transpositions: z.ZodOptional<z.ZodBoolean>;
    fuzziness: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslFuzzyQuery = z.infer<typeof QueryDslFuzzyQuery>;
export declare const QueryDslGeoExecution: z.ZodEnum<{
    memory: "memory";
    indexed: "indexed";
}>;
export type QueryDslGeoExecution = z.infer<typeof QueryDslGeoExecution>;
export declare const QueryDslGeoValidationMethod: z.ZodEnum<{
    coerce: "coerce";
    ignore_malformed: "ignore_malformed";
    strict: "strict";
}>;
export type QueryDslGeoValidationMethod = z.infer<typeof QueryDslGeoValidationMethod>;
export declare const QueryDslGeoBoundingBoxQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        memory: "memory";
        indexed: "indexed";
    }>>;
    validation_method: z.ZodOptional<z.ZodEnum<{
        coerce: "coerce";
        ignore_malformed: "ignore_malformed";
        strict: "strict";
    }>>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslGeoBoundingBoxQuery = z.infer<typeof QueryDslGeoBoundingBoxQuery>;
export declare const Distance: z.ZodString;
export type Distance = z.infer<typeof Distance>;
export declare const QueryDslGeoDistanceQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    distance: z.ZodString;
    distance_type: z.ZodOptional<z.ZodEnum<{
        arc: "arc";
        plane: "plane";
    }>>;
    validation_method: z.ZodOptional<z.ZodEnum<{
        coerce: "coerce";
        ignore_malformed: "ignore_malformed";
        strict: "strict";
    }>>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslGeoDistanceQuery = z.infer<typeof QueryDslGeoDistanceQuery>;
/** A map tile reference, represented as `{zoom}/{x}/{y}` */
export declare const GeoTile: z.ZodString;
export type GeoTile = z.infer<typeof GeoTile>;
/** A map hex cell (H3) reference */
export declare const GeoHexCell: z.ZodString;
export type GeoHexCell = z.infer<typeof GeoHexCell>;
export declare const QueryDslGeoGridQuery: z.ZodUnion<readonly [z.ZodObject<{
    geotile: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    geohash: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    geohex: z.ZodString;
}, z.core.$strip>]>;
export type QueryDslGeoGridQuery = z.infer<typeof QueryDslGeoGridQuery>;
export declare const QueryDslGeoPolygonQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    validation_method: z.ZodOptional<z.ZodEnum<{
        coerce: "coerce";
        ignore_malformed: "ignore_malformed";
        strict: "strict";
    }>>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslGeoPolygonQuery = z.infer<typeof QueryDslGeoPolygonQuery>;
export declare const QueryDslGeoShapeQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslGeoShapeQuery = z.infer<typeof QueryDslGeoShapeQuery>;
export declare const QueryDslChildScoreMode: z.ZodEnum<{
    none: "none";
    max: "max";
    min: "min";
    sum: "sum";
    avg: "avg";
}>;
export type QueryDslChildScoreMode = z.infer<typeof QueryDslChildScoreMode>;
export interface QueryDslHasChildQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    ignore_unmapped?: boolean | undefined;
    inner_hits?: SearchInnerHitsShape | undefined;
    max_children?: integer | undefined;
    min_children?: integer | undefined;
    query: QueryDslQueryContainerShape;
    score_mode?: QueryDslChildScoreMode | undefined;
    type: RelationName;
}
export declare const QueryDslHasChildQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
    inner_hits: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        from: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
            max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
            collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        }, z.core.$strip>>;
        docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        explain: z.ZodOptional<z.ZodBoolean>;
        highlight: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                plain: "plain";
                fvh: "fvh";
                unified: "unified";
            }>, z.ZodString]>>;
            boundary_chars: z.ZodOptional<z.ZodString>;
            boundary_max_scan: z.ZodOptional<z.ZodNumber>;
            boundary_scanner: z.ZodOptional<z.ZodEnum<{
                chars: "chars";
                sentence: "sentence";
                word: "word";
            }>>;
            boundary_scanner_locale: z.ZodOptional<z.ZodString>;
            force_source: z.ZodOptional<z.ZodBoolean>;
            fragmenter: z.ZodOptional<z.ZodEnum<{
                simple: "simple";
                span: "span";
            }>>;
            fragment_size: z.ZodOptional<z.ZodNumber>;
            highlight_filter: z.ZodOptional<z.ZodBoolean>;
            highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
            max_fragment_length: z.ZodOptional<z.ZodNumber>;
            max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
            no_match_size: z.ZodOptional<z.ZodNumber>;
            number_of_fragments: z.ZodOptional<z.ZodNumber>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            order: z.ZodOptional<z.ZodEnum<{
                score: "score";
            }>>;
            phrase_limit: z.ZodOptional<z.ZodNumber>;
            post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            require_field_match: z.ZodOptional<z.ZodBoolean>;
            tags_schema: z.ZodOptional<z.ZodEnum<{
                styled: "styled";
            }>>;
            encoder: z.ZodOptional<z.ZodEnum<{
                default: "default";
                html: "html";
            }>>;
            fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
        }, z.core.$strip>>;
        ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
        script_fields: z.ZodOptional<z.ZodRecord<typeof Field, typeof ScriptField>>;
        seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
        field: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
        _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
            exclude_vectors: z.ZodOptional<z.ZodBoolean>;
            excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
        stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        track_scores: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    max_children: z.ZodOptional<z.ZodNumber>;
    min_children: z.ZodOptional<z.ZodNumber>;
    query: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    score_mode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
    type: z.ZodString;
}, z.core.$strip>;
export type QueryDslHasChildQuery = z.infer<typeof QueryDslHasChildQuery>;
export interface QueryDslHasParentQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    ignore_unmapped?: boolean | undefined;
    inner_hits?: SearchInnerHitsShape | undefined;
    parent_type: RelationName;
    query: QueryDslQueryContainerShape;
    score?: boolean | undefined;
}
export declare const QueryDslHasParentQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
    inner_hits: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        from: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
            max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
            collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        }, z.core.$strip>>;
        docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        explain: z.ZodOptional<z.ZodBoolean>;
        highlight: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                plain: "plain";
                fvh: "fvh";
                unified: "unified";
            }>, z.ZodString]>>;
            boundary_chars: z.ZodOptional<z.ZodString>;
            boundary_max_scan: z.ZodOptional<z.ZodNumber>;
            boundary_scanner: z.ZodOptional<z.ZodEnum<{
                chars: "chars";
                sentence: "sentence";
                word: "word";
            }>>;
            boundary_scanner_locale: z.ZodOptional<z.ZodString>;
            force_source: z.ZodOptional<z.ZodBoolean>;
            fragmenter: z.ZodOptional<z.ZodEnum<{
                simple: "simple";
                span: "span";
            }>>;
            fragment_size: z.ZodOptional<z.ZodNumber>;
            highlight_filter: z.ZodOptional<z.ZodBoolean>;
            highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
            max_fragment_length: z.ZodOptional<z.ZodNumber>;
            max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
            no_match_size: z.ZodOptional<z.ZodNumber>;
            number_of_fragments: z.ZodOptional<z.ZodNumber>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            order: z.ZodOptional<z.ZodEnum<{
                score: "score";
            }>>;
            phrase_limit: z.ZodOptional<z.ZodNumber>;
            post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            require_field_match: z.ZodOptional<z.ZodBoolean>;
            tags_schema: z.ZodOptional<z.ZodEnum<{
                styled: "styled";
            }>>;
            encoder: z.ZodOptional<z.ZodEnum<{
                default: "default";
                html: "html";
            }>>;
            fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
        }, z.core.$strip>>;
        ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
        script_fields: z.ZodOptional<z.ZodRecord<typeof Field, typeof ScriptField>>;
        seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
        field: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
        _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
            exclude_vectors: z.ZodOptional<z.ZodBoolean>;
            excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
        stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        track_scores: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    parent_type: z.ZodString;
    query: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    score: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type QueryDslHasParentQuery = z.infer<typeof QueryDslHasParentQuery>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const QueryDslIdsQuery: z.ZodObject<{
    values: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslIdsQuery = z.infer<typeof QueryDslIdsQuery>;
export interface QueryDslIntervalsFilterShape {
    after?: QueryDslIntervalsContainer | undefined;
    before?: QueryDslIntervalsContainer | undefined;
    contained_by?: QueryDslIntervalsContainer | undefined;
    containing?: QueryDslIntervalsContainer | undefined;
    not_contained_by?: QueryDslIntervalsContainer | undefined;
    not_containing?: QueryDslIntervalsContainer | undefined;
    not_overlapping?: QueryDslIntervalsContainer | undefined;
    overlapping?: QueryDslIntervalsContainer | undefined;
    script?: Script | undefined;
}
export declare const QueryDslIntervalsFilter: z.ZodType<QueryDslIntervalsFilterShape>;
export type QueryDslIntervalsFilter = z.infer<typeof QueryDslIntervalsFilter>;
export interface QueryDslIntervalsAnyOfShape {
    intervals: QueryDslIntervalsContainerShape[];
    filter?: QueryDslIntervalsFilterShape | undefined;
}
export declare const QueryDslIntervalsAnyOf: z.ZodObject<{
    intervals: z.ZodArray<z.ZodType<QueryDslIntervalsContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslIntervalsContainerShape, unknown>>>;
    filter: z.ZodOptional<z.ZodType<QueryDslIntervalsFilterShape, unknown, z.core.$ZodTypeInternals<QueryDslIntervalsFilterShape, unknown>>>;
}, z.core.$strip>;
export type QueryDslIntervalsAnyOf = z.infer<typeof QueryDslIntervalsAnyOf>;
export declare const QueryDslIntervalsFuzzy: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    fuzziness: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    prefix_length: z.ZodOptional<z.ZodNumber>;
    term: z.ZodString;
    transpositions: z.ZodOptional<z.ZodBoolean>;
    use_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslIntervalsFuzzy = z.infer<typeof QueryDslIntervalsFuzzy>;
export interface QueryDslIntervalsMatchShape {
    analyzer?: string | undefined;
    max_gaps?: integer | undefined;
    ordered?: boolean | undefined;
    query: string;
    use_field?: Field | undefined;
    filter?: QueryDslIntervalsFilterShape | undefined;
}
export declare const QueryDslIntervalsMatch: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    max_gaps: z.ZodOptional<z.ZodNumber>;
    ordered: z.ZodOptional<z.ZodBoolean>;
    query: z.ZodString;
    use_field: z.ZodOptional<z.ZodString>;
    filter: z.ZodOptional<z.ZodType<QueryDslIntervalsFilterShape, unknown, z.core.$ZodTypeInternals<QueryDslIntervalsFilterShape, unknown>>>;
}, z.core.$strip>;
export type QueryDslIntervalsMatch = z.infer<typeof QueryDslIntervalsMatch>;
export declare const QueryDslIntervalsPrefix: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    prefix: z.ZodString;
    use_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslIntervalsPrefix = z.infer<typeof QueryDslIntervalsPrefix>;
export declare const QueryDslIntervalsRange: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    gte: z.ZodOptional<z.ZodString>;
    gt: z.ZodOptional<z.ZodString>;
    lte: z.ZodOptional<z.ZodString>;
    lt: z.ZodOptional<z.ZodString>;
    use_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslIntervalsRange = z.infer<typeof QueryDslIntervalsRange>;
export declare const QueryDslIntervalsRegexp: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    use_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslIntervalsRegexp = z.infer<typeof QueryDslIntervalsRegexp>;
export declare const QueryDslIntervalsWildcard: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    use_field: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslIntervalsWildcard = z.infer<typeof QueryDslIntervalsWildcard>;
export interface QueryDslIntervalsContainerShape {
    all_of?: QueryDslIntervalsAllOf | undefined;
    any_of?: QueryDslIntervalsAnyOf | undefined;
    fuzzy?: QueryDslIntervalsFuzzy | undefined;
    match?: QueryDslIntervalsMatch | undefined;
    prefix?: QueryDslIntervalsPrefix | undefined;
    range?: QueryDslIntervalsRange | undefined;
    regexp?: QueryDslIntervalsRegexp | undefined;
    wildcard?: QueryDslIntervalsWildcard | undefined;
}
export declare const QueryDslIntervalsContainer: z.ZodType<QueryDslIntervalsContainerShape>;
export type QueryDslIntervalsContainer = z.infer<typeof QueryDslIntervalsContainer>;
export interface QueryDslIntervalsAllOfShape {
    intervals: QueryDslIntervalsContainerShape[];
    max_gaps?: integer | undefined;
    ordered?: boolean | undefined;
    filter?: QueryDslIntervalsFilterShape | undefined;
}
export declare const QueryDslIntervalsAllOf: z.ZodObject<{
    intervals: z.ZodArray<z.ZodType<QueryDslIntervalsContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslIntervalsContainerShape, unknown>>>;
    max_gaps: z.ZodOptional<z.ZodNumber>;
    ordered: z.ZodOptional<z.ZodBoolean>;
    filter: z.ZodOptional<z.ZodType<QueryDslIntervalsFilterShape, unknown, z.core.$ZodTypeInternals<QueryDslIntervalsFilterShape, unknown>>>;
}, z.core.$strip>;
export type QueryDslIntervalsAllOf = z.infer<typeof QueryDslIntervalsAllOf>;
export interface QueryDslIntervalsQueryShape {
    all_of?: QueryDslIntervalsAllOf | undefined;
    any_of?: QueryDslIntervalsAnyOf | undefined;
    fuzzy?: QueryDslIntervalsFuzzy | undefined;
    match?: QueryDslIntervalsMatch | undefined;
    prefix?: QueryDslIntervalsPrefix | undefined;
    range?: QueryDslIntervalsRange | undefined;
    regexp?: QueryDslIntervalsRegexp | undefined;
    wildcard?: QueryDslIntervalsWildcard | undefined;
}
export declare const QueryDslIntervalsQuery: z.ZodType<QueryDslIntervalsQueryShape>;
export type QueryDslIntervalsQuery = z.infer<typeof QueryDslIntervalsQuery>;
export interface KnnQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    field: Field;
    query_vector?: QueryVector | undefined;
    query_vector_builder?: QueryVectorBuilder | undefined;
    num_candidates?: integer | undefined;
    visit_percentage?: float | undefined;
    k?: integer | undefined;
    filter?: QueryDslQueryContainerShape | QueryDslQueryContainerShape[] | undefined;
    similarity?: float | undefined;
    rescore_vector?: RescoreVector | undefined;
}
export declare const KnnQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    field: z.ZodString;
    query_vector: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    query_vector_builder: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        embedding: z.ZodObject<{
            inference_id: z.ZodOptional<z.ZodString>;
            input: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodObject<{
                type: z.ZodEnum<{
                    text: "text";
                    image: "image";
                    audio: "audio";
                    video: "video";
                    pdf: "pdf";
                }>;
                format: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    text: "text";
                    base64: "base64";
                }>, z.ZodNull]>>;
                value: z.ZodString;
            }, z.core.$strip>>]>]>;
            timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        text_embedding: z.ZodObject<{
            model_id: z.ZodOptional<z.ZodString>;
            model_text: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        lookup: z.ZodObject<{
            id: z.ZodString;
            index: z.ZodString;
            path: z.ZodString;
            routing: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>]>>;
    num_candidates: z.ZodOptional<z.ZodNumber>;
    visit_percentage: z.ZodOptional<z.ZodNumber>;
    k: z.ZodOptional<z.ZodNumber>;
    filter: z.ZodOptional<z.ZodUnion<readonly [typeof QueryDslQueryContainer, z.ZodArray<typeof QueryDslQueryContainer>]>>;
    similarity: z.ZodOptional<z.ZodNumber>;
    rescore_vector: z.ZodOptional<z.ZodObject<{
        oversample: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KnnQuery = z.infer<typeof KnnQuery>;
export declare const QueryDslZeroTermsQuery: z.ZodEnum<{
    all: "all";
    none: "none";
}>;
export type QueryDslZeroTermsQuery = z.infer<typeof QueryDslZeroTermsQuery>;
export declare const QueryDslMatchQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    auto_generate_synonyms_phrase_query: z.ZodOptional<z.ZodBoolean>;
    cutoff_frequency: z.ZodOptional<z.ZodNumber>;
    fuzziness: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    fuzzy_rewrite: z.ZodOptional<z.ZodString>;
    fuzzy_transpositions: z.ZodOptional<z.ZodBoolean>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    max_expansions: z.ZodOptional<z.ZodNumber>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    prefix_length: z.ZodOptional<z.ZodNumber>;
    query: z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean]>;
    zero_terms_query: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMatchQuery = z.infer<typeof QueryDslMatchQuery>;
export declare const QueryDslMatchAllQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMatchAllQuery = z.infer<typeof QueryDslMatchAllQuery>;
export declare const QueryDslMatchBoolPrefixQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    fuzziness: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    fuzzy_rewrite: z.ZodOptional<z.ZodString>;
    fuzzy_transpositions: z.ZodOptional<z.ZodBoolean>;
    max_expansions: z.ZodOptional<z.ZodNumber>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    prefix_length: z.ZodOptional<z.ZodNumber>;
    query: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMatchBoolPrefixQuery = z.infer<typeof QueryDslMatchBoolPrefixQuery>;
export declare const QueryDslMatchNoneQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMatchNoneQuery = z.infer<typeof QueryDslMatchNoneQuery>;
export declare const QueryDslMatchPhraseQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    slop: z.ZodOptional<z.ZodNumber>;
    zero_terms_query: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMatchPhraseQuery = z.infer<typeof QueryDslMatchPhraseQuery>;
export declare const QueryDslMatchPhrasePrefixQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    max_expansions: z.ZodOptional<z.ZodNumber>;
    query: z.ZodString;
    slop: z.ZodOptional<z.ZodNumber>;
    zero_terms_query: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMatchPhrasePrefixQuery = z.infer<typeof QueryDslMatchPhrasePrefixQuery>;
/** Only to be used in query and path parameters, as the array form is actually a csv */
export declare const Routing: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Routing = z.infer<typeof Routing>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const VersionType: z.ZodEnum<{
    internal: "internal";
    external: "external";
    external_gte: "external_gte";
}>;
export type VersionType = z.infer<typeof VersionType>;
export declare const QueryDslLikeDocument: z.ZodObject<{
    doc: z.ZodOptional<z.ZodAny>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>;
export type QueryDslLikeDocument = z.infer<typeof QueryDslLikeDocument>;
/** Text that we want similar documents for or a lookup to a document's field for the text. */
export declare const QueryDslLike: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    doc: z.ZodOptional<z.ZodAny>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
}, z.core.$strip>]>;
export type QueryDslLike = z.infer<typeof QueryDslLike>;
export declare const AnalysisStopWordLanguage: z.ZodEnum<{
    _arabic_: "_arabic_";
    _armenian_: "_armenian_";
    _basque_: "_basque_";
    _bengali_: "_bengali_";
    _brazilian_: "_brazilian_";
    _bulgarian_: "_bulgarian_";
    _catalan_: "_catalan_";
    _cjk_: "_cjk_";
    _czech_: "_czech_";
    _danish_: "_danish_";
    _dutch_: "_dutch_";
    _english_: "_english_";
    _estonian_: "_estonian_";
    _finnish_: "_finnish_";
    _french_: "_french_";
    _galician_: "_galician_";
    _german_: "_german_";
    _greek_: "_greek_";
    _hindi_: "_hindi_";
    _hungarian_: "_hungarian_";
    _indonesian_: "_indonesian_";
    _irish_: "_irish_";
    _italian_: "_italian_";
    _latvian_: "_latvian_";
    _lithuanian_: "_lithuanian_";
    _norwegian_: "_norwegian_";
    _persian_: "_persian_";
    _portuguese_: "_portuguese_";
    _romanian_: "_romanian_";
    _russian_: "_russian_";
    _serbian_: "_serbian_";
    _sorani_: "_sorani_";
    _spanish_: "_spanish_";
    _swedish_: "_swedish_";
    _thai_: "_thai_";
    _turkish_: "_turkish_";
    _none_: "_none_";
}>;
export type AnalysisStopWordLanguage = z.infer<typeof AnalysisStopWordLanguage>;
/**
 * Language value, such as _arabic_ or _thai_. Defaults to _english_.
 * Each language value corresponds to a predefined list of stop words in Lucene. See Stop words by language for supported language values and their stop words.
 * Also accepts an array of stop words.
 */
export declare const AnalysisStopWords: z.ZodUnion<readonly [z.ZodEnum<{
    _arabic_: "_arabic_";
    _armenian_: "_armenian_";
    _basque_: "_basque_";
    _bengali_: "_bengali_";
    _brazilian_: "_brazilian_";
    _bulgarian_: "_bulgarian_";
    _catalan_: "_catalan_";
    _cjk_: "_cjk_";
    _czech_: "_czech_";
    _danish_: "_danish_";
    _dutch_: "_dutch_";
    _english_: "_english_";
    _estonian_: "_estonian_";
    _finnish_: "_finnish_";
    _french_: "_french_";
    _galician_: "_galician_";
    _german_: "_german_";
    _greek_: "_greek_";
    _hindi_: "_hindi_";
    _hungarian_: "_hungarian_";
    _indonesian_: "_indonesian_";
    _irish_: "_irish_";
    _italian_: "_italian_";
    _latvian_: "_latvian_";
    _lithuanian_: "_lithuanian_";
    _norwegian_: "_norwegian_";
    _persian_: "_persian_";
    _portuguese_: "_portuguese_";
    _romanian_: "_romanian_";
    _russian_: "_russian_";
    _serbian_: "_serbian_";
    _sorani_: "_sorani_";
    _spanish_: "_spanish_";
    _swedish_: "_swedish_";
    _thai_: "_thai_";
    _turkish_: "_turkish_";
    _none_: "_none_";
}>, z.ZodArray<z.ZodString>]>;
export type AnalysisStopWords = z.infer<typeof AnalysisStopWords>;
export declare const QueryDslMoreLikeThisQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    boost_terms: z.ZodOptional<z.ZodNumber>;
    fail_on_unsupported_field: z.ZodOptional<z.ZodBoolean>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    include: z.ZodOptional<z.ZodBoolean>;
    like: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        doc: z.ZodOptional<z.ZodAny>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodNumber>;
        version_type: z.ZodOptional<z.ZodEnum<{
            internal: "internal";
            external: "external";
            external_gte: "external_gte";
        }>>;
    }, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        doc: z.ZodOptional<z.ZodAny>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodNumber>;
        version_type: z.ZodOptional<z.ZodEnum<{
            internal: "internal";
            external: "external";
            external_gte: "external_gte";
        }>>;
    }, z.core.$strip>]>>]>;
    max_doc_freq: z.ZodOptional<z.ZodNumber>;
    max_query_terms: z.ZodOptional<z.ZodNumber>;
    max_word_length: z.ZodOptional<z.ZodNumber>;
    min_doc_freq: z.ZodOptional<z.ZodNumber>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    min_term_freq: z.ZodOptional<z.ZodNumber>;
    min_word_length: z.ZodOptional<z.ZodNumber>;
    routing: z.ZodOptional<z.ZodString>;
    stop_words: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    unlike: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        doc: z.ZodOptional<z.ZodAny>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodNumber>;
        version_type: z.ZodOptional<z.ZodEnum<{
            internal: "internal";
            external: "external";
            external_gte: "external_gte";
        }>>;
    }, z.core.$strip>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        doc: z.ZodOptional<z.ZodAny>;
        fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        per_field_analyzer: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodNumber>;
        version_type: z.ZodOptional<z.ZodEnum<{
            internal: "internal";
            external: "external";
            external_gte: "external_gte";
        }>>;
    }, z.core.$strip>]>>]>>;
    version: z.ZodOptional<z.ZodNumber>;
    version_type: z.ZodOptional<z.ZodEnum<{
        internal: "internal";
        external: "external";
        external_gte: "external_gte";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMoreLikeThisQuery = z.infer<typeof QueryDslMoreLikeThisQuery>;
export declare const QueryDslTextQueryType: z.ZodEnum<{
    best_fields: "best_fields";
    most_fields: "most_fields";
    cross_fields: "cross_fields";
    phrase: "phrase";
    phrase_prefix: "phrase_prefix";
    bool_prefix: "bool_prefix";
}>;
export type QueryDslTextQueryType = z.infer<typeof QueryDslTextQueryType>;
export declare const QueryDslMultiMatchQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    auto_generate_synonyms_phrase_query: z.ZodOptional<z.ZodBoolean>;
    cutoff_frequency: z.ZodOptional<z.ZodNumber>;
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    fuzziness: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    fuzzy_rewrite: z.ZodOptional<z.ZodString>;
    fuzzy_transpositions: z.ZodOptional<z.ZodBoolean>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    max_expansions: z.ZodOptional<z.ZodNumber>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    prefix_length: z.ZodOptional<z.ZodNumber>;
    query: z.ZodString;
    slop: z.ZodOptional<z.ZodNumber>;
    tie_breaker: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodEnum<{
        best_fields: "best_fields";
        most_fields: "most_fields";
        cross_fields: "cross_fields";
        phrase: "phrase";
        phrase_prefix: "phrase_prefix";
        bool_prefix: "bool_prefix";
    }>>;
    zero_terms_query: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslMultiMatchQuery = z.infer<typeof QueryDslMultiMatchQuery>;
export interface QueryDslNestedQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    ignore_unmapped?: boolean | undefined;
    inner_hits?: SearchInnerHitsShape | undefined;
    path: Field;
    query: QueryDslQueryContainerShape;
    score_mode?: QueryDslChildScoreMode | undefined;
}
export declare const QueryDslNestedQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
    inner_hits: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodNumber>;
        from: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
            max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
            collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        }, z.core.$strip>>;
        docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        explain: z.ZodOptional<z.ZodBoolean>;
        highlight: z.ZodOptional<z.ZodObject<{
            type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                plain: "plain";
                fvh: "fvh";
                unified: "unified";
            }>, z.ZodString]>>;
            boundary_chars: z.ZodOptional<z.ZodString>;
            boundary_max_scan: z.ZodOptional<z.ZodNumber>;
            boundary_scanner: z.ZodOptional<z.ZodEnum<{
                chars: "chars";
                sentence: "sentence";
                word: "word";
            }>>;
            boundary_scanner_locale: z.ZodOptional<z.ZodString>;
            force_source: z.ZodOptional<z.ZodBoolean>;
            fragmenter: z.ZodOptional<z.ZodEnum<{
                simple: "simple";
                span: "span";
            }>>;
            fragment_size: z.ZodOptional<z.ZodNumber>;
            highlight_filter: z.ZodOptional<z.ZodBoolean>;
            highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
            max_fragment_length: z.ZodOptional<z.ZodNumber>;
            max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
            no_match_size: z.ZodOptional<z.ZodNumber>;
            number_of_fragments: z.ZodOptional<z.ZodNumber>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            order: z.ZodOptional<z.ZodEnum<{
                score: "score";
            }>>;
            phrase_limit: z.ZodOptional<z.ZodNumber>;
            post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            require_field_match: z.ZodOptional<z.ZodBoolean>;
            tags_schema: z.ZodOptional<z.ZodEnum<{
                styled: "styled";
            }>>;
            encoder: z.ZodOptional<z.ZodEnum<{
                default: "default";
                html: "html";
            }>>;
            fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
        }, z.core.$strip>>;
        ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
        script_fields: z.ZodOptional<z.ZodRecord<typeof Field, typeof ScriptField>>;
        seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
        field: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            include_unmapped: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodString]>>>;
        sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
        _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
            exclude_vectors: z.ZodOptional<z.ZodBoolean>;
            excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
        stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        track_scores: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    path: z.ZodString;
    query: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    score_mode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
    }>>;
}, z.core.$strip>;
export type QueryDslNestedQuery = z.infer<typeof QueryDslNestedQuery>;
export declare const QueryDslParentIdQuery: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodString>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslParentIdQuery = z.infer<typeof QueryDslParentIdQuery>;
export declare const QueryDslPercolateQuery: z.ZodObject<{
    document: z.ZodOptional<z.ZodAny>;
    documents: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    field: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
    index: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    preference: z.ZodOptional<z.ZodString>;
    routing: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslPercolateQuery = z.infer<typeof QueryDslPercolateQuery>;
export declare const QueryDslPinnedDoc: z.ZodObject<{
    _id: z.ZodString;
    _index: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslPinnedDoc = z.infer<typeof QueryDslPinnedDoc>;
export interface QueryDslPinnedQueryShape {
    organic: QueryDslQueryContainerShape;
    ids?: Id[] | undefined;
    docs?: QueryDslPinnedDoc[] | undefined;
}
export declare const QueryDslPinnedQuery: z.ZodType<QueryDslPinnedQueryShape>;
export type QueryDslPinnedQuery = z.infer<typeof QueryDslPinnedQuery>;
export declare const QueryDslPrefixQuery: z.ZodObject<{
    rewrite: z.ZodOptional<z.ZodString>;
    value: z.ZodString;
    case_insensitive: z.ZodOptional<z.ZodBoolean>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslPrefixQuery = z.infer<typeof QueryDslPrefixQuery>;
export declare const QueryDslQueryStringQuery: z.ZodObject<{
    allow_leading_wildcard: z.ZodOptional<z.ZodBoolean>;
    analyzer: z.ZodOptional<z.ZodString>;
    analyze_wildcard: z.ZodOptional<z.ZodBoolean>;
    auto_generate_synonyms_phrase_query: z.ZodOptional<z.ZodBoolean>;
    default_field: z.ZodOptional<z.ZodString>;
    default_operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    enable_position_increments: z.ZodOptional<z.ZodBoolean>;
    escape: z.ZodOptional<z.ZodBoolean>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fuzziness: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>>;
    fuzzy_max_expansions: z.ZodOptional<z.ZodNumber>;
    fuzzy_prefix_length: z.ZodOptional<z.ZodNumber>;
    fuzzy_rewrite: z.ZodOptional<z.ZodString>;
    fuzzy_transpositions: z.ZodOptional<z.ZodBoolean>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    max_determinized_states: z.ZodOptional<z.ZodNumber>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    phrase_slop: z.ZodOptional<z.ZodNumber>;
    query: z.ZodString;
    quote_analyzer: z.ZodOptional<z.ZodString>;
    quote_field_suffix: z.ZodOptional<z.ZodString>;
    rewrite: z.ZodOptional<z.ZodString>;
    tie_breaker: z.ZodOptional<z.ZodNumber>;
    time_zone: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        best_fields: "best_fields";
        most_fields: "most_fields";
        cross_fields: "cross_fields";
        phrase: "phrase";
        phrase_prefix: "phrase_prefix";
        bool_prefix: "bool_prefix";
    }>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslQueryStringQuery = z.infer<typeof QueryDslQueryStringQuery>;
export declare const QueryDslRangeRelation: z.ZodEnum<{
    contains: "contains";
    within: "within";
    intersects: "intersects";
}>;
export type QueryDslRangeRelation = z.infer<typeof QueryDslRangeRelation>;
export declare const QueryDslRangeQueryBase: z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslRangeQueryBase = z.infer<typeof QueryDslRangeQueryBase>;
export declare const DateFormat: z.ZodString;
export type DateFormat = z.infer<typeof DateFormat>;
export declare const QueryDslUntypedRangeQuery: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    time_zone: z.ZodOptional<z.ZodString>;
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslUntypedRangeQuery = z.infer<typeof QueryDslUntypedRangeQuery>;
export declare const QueryDslDateRangeQuery: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    time_zone: z.ZodOptional<z.ZodString>;
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslDateRangeQuery = z.infer<typeof QueryDslDateRangeQuery>;
export declare const QueryDslNumberRangeQuery: z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslNumberRangeQuery = z.infer<typeof QueryDslNumberRangeQuery>;
export declare const QueryDslLongNumberRangeQuery: z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslLongNumberRangeQuery = z.infer<typeof QueryDslLongNumberRangeQuery>;
export declare const QueryDslTermRangeQuery: z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslTermRangeQuery = z.infer<typeof QueryDslTermRangeQuery>;
export declare const QueryDslRangeQuery: z.ZodUnion<readonly [z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    time_zone: z.ZodOptional<z.ZodString>;
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    time_zone: z.ZodOptional<z.ZodString>;
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    relation: z.ZodOptional<z.ZodEnum<{
        contains: "contains";
        within: "within";
        intersects: "intersects";
    }>>;
    gt: z.ZodOptional<z.ZodAny>;
    gte: z.ZodOptional<z.ZodAny>;
    lt: z.ZodOptional<z.ZodAny>;
    lte: z.ZodOptional<z.ZodAny>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type QueryDslRangeQuery = z.infer<typeof QueryDslRangeQuery>;
export declare const QueryDslRankFeatureFunction: z.ZodObject<{}, z.core.$strip>;
export type QueryDslRankFeatureFunction = z.infer<typeof QueryDslRankFeatureFunction>;
export declare const QueryDslRankFeatureFunctionSaturation: z.ZodObject<{
    pivot: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type QueryDslRankFeatureFunctionSaturation = z.infer<typeof QueryDslRankFeatureFunctionSaturation>;
export declare const QueryDslRankFeatureFunctionLogarithm: z.ZodObject<{
    scaling_factor: z.ZodNumber;
}, z.core.$strip>;
export type QueryDslRankFeatureFunctionLogarithm = z.infer<typeof QueryDslRankFeatureFunctionLogarithm>;
export declare const QueryDslRankFeatureFunctionLinear: z.ZodObject<{}, z.core.$strip>;
export type QueryDslRankFeatureFunctionLinear = z.infer<typeof QueryDslRankFeatureFunctionLinear>;
export declare const QueryDslRankFeatureFunctionSigmoid: z.ZodObject<{
    pivot: z.ZodNumber;
    exponent: z.ZodNumber;
}, z.core.$strip>;
export type QueryDslRankFeatureFunctionSigmoid = z.infer<typeof QueryDslRankFeatureFunctionSigmoid>;
export declare const QueryDslRankFeatureQuery: z.ZodObject<{
    field: z.ZodString;
    saturation: z.ZodOptional<z.ZodObject<{
        pivot: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    log: z.ZodOptional<z.ZodObject<{
        scaling_factor: z.ZodNumber;
    }, z.core.$strip>>;
    linear: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    sigmoid: z.ZodOptional<z.ZodObject<{
        pivot: z.ZodNumber;
        exponent: z.ZodNumber;
    }, z.core.$strip>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslRankFeatureQuery = z.infer<typeof QueryDslRankFeatureQuery>;
export declare const QueryDslRegexpQuery: z.ZodObject<{
    case_insensitive: z.ZodOptional<z.ZodBoolean>;
    flags: z.ZodOptional<z.ZodString>;
    max_determinized_states: z.ZodOptional<z.ZodNumber>;
    rewrite: z.ZodOptional<z.ZodString>;
    value: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslRegexpQuery = z.infer<typeof QueryDslRegexpQuery>;
export interface QueryDslRuleQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    organic: QueryDslQueryContainerShape;
    ruleset_ids?: Id | Id[] | undefined;
    ruleset_id?: string | undefined;
    match_criteria: unknown;
}
export declare const QueryDslRuleQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    organic: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    ruleset_ids: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    ruleset_id: z.ZodOptional<z.ZodString>;
    match_criteria: z.ZodAny;
}, z.core.$strip>;
export type QueryDslRuleQuery = z.infer<typeof QueryDslRuleQuery>;
export interface QueryDslScriptQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    script: ScriptShape;
}
export declare const QueryDslScriptQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
}, z.core.$strip>;
export type QueryDslScriptQuery = z.infer<typeof QueryDslScriptQuery>;
export interface QueryDslScriptScoreQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    min_score?: float | undefined;
    query: QueryDslQueryContainerShape;
    script: ScriptShape;
}
export declare const QueryDslScriptScoreQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    min_score: z.ZodOptional<z.ZodNumber>;
    query: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
    script: z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>;
}, z.core.$strip>;
export type QueryDslScriptScoreQuery = z.infer<typeof QueryDslScriptScoreQuery>;
export declare const QueryDslSemanticQuery: z.ZodObject<{
    field: z.ZodString;
    query: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslSemanticQuery = z.infer<typeof QueryDslSemanticQuery>;
export declare const QueryDslShapeQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslShapeQuery = z.infer<typeof QueryDslShapeQuery>;
/**
 * A set of flags that can be represented as a single enum value or a set of values that are encoded
 * as a pipe-separated string
 *
 * Depending on the target language, code generators can use this hint to generate language specific
 * flags enum constructs and the corresponding (de-)serialization code.
 */
export declare const SpecUtilsPipeSeparatedFlags: z.ZodUnion<readonly [z.ZodAny, z.ZodString]>;
export type SpecUtilsPipeSeparatedFlags = z.infer<typeof SpecUtilsPipeSeparatedFlags>;
/** Query flags can be either a single flag or a combination of flags, e.g. `OR|AND|PREFIX` */
export declare const QueryDslSimpleQueryStringFlags: z.ZodUnion<readonly [z.ZodAny, z.ZodString]>;
export type QueryDslSimpleQueryStringFlags = z.infer<typeof QueryDslSimpleQueryStringFlags>;
export declare const QueryDslSimpleQueryStringQuery: z.ZodObject<{
    analyzer: z.ZodOptional<z.ZodString>;
    analyze_wildcard: z.ZodOptional<z.ZodBoolean>;
    auto_generate_synonyms_phrase_query: z.ZodOptional<z.ZodBoolean>;
    default_operator: z.ZodOptional<z.ZodEnum<{
        and: "and";
        AND: "AND";
        or: "or";
        OR: "OR";
    }>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    flags: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    fuzzy_max_expansions: z.ZodOptional<z.ZodNumber>;
    fuzzy_prefix_length: z.ZodOptional<z.ZodNumber>;
    fuzzy_transpositions: z.ZodOptional<z.ZodBoolean>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    query: z.ZodString;
    quote_field_suffix: z.ZodOptional<z.ZodString>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslSimpleQueryStringQuery = z.infer<typeof QueryDslSimpleQueryStringQuery>;
export interface QueryDslSpanFieldMaskingQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    field: Field;
    query: QueryDslSpanQueryShape;
}
export declare const QueryDslSpanFieldMaskingQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    field: z.ZodString;
    query: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
}, z.core.$strip>;
export type QueryDslSpanFieldMaskingQuery = z.infer<typeof QueryDslSpanFieldMaskingQuery>;
export interface QueryDslSpanFirstQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    end: integer;
    match: QueryDslSpanQueryShape;
}
export declare const QueryDslSpanFirstQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    end: z.ZodNumber;
    match: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
}, z.core.$strip>;
export type QueryDslSpanFirstQuery = z.infer<typeof QueryDslSpanFirstQuery>;
/** Can only be used as a clause in a span_near query. */
export declare const QueryDslSpanGapQuery: z.ZodRecord<z.ZodString, z.ZodNumber>;
export type QueryDslSpanGapQuery = z.infer<typeof QueryDslSpanGapQuery>;
export interface QueryDslSpanMultiTermQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    match: QueryDslQueryContainerShape;
}
export declare const QueryDslSpanMultiTermQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    match: z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>;
}, z.core.$strip>;
export type QueryDslSpanMultiTermQuery = z.infer<typeof QueryDslSpanMultiTermQuery>;
export interface QueryDslSpanNearQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    clauses: QueryDslSpanQueryShape[];
    in_order?: boolean | undefined;
    slop?: integer | undefined;
}
export declare const QueryDslSpanNearQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    clauses: z.ZodArray<z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>>;
    in_order: z.ZodOptional<z.ZodBoolean>;
    slop: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type QueryDslSpanNearQuery = z.infer<typeof QueryDslSpanNearQuery>;
export interface QueryDslSpanNotQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    dist?: integer | undefined;
    exclude: QueryDslSpanQueryShape;
    include: QueryDslSpanQueryShape;
    post?: integer | undefined;
    pre?: integer | undefined;
}
export declare const QueryDslSpanNotQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    dist: z.ZodOptional<z.ZodNumber>;
    exclude: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
    include: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
    post: z.ZodOptional<z.ZodNumber>;
    pre: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type QueryDslSpanNotQuery = z.infer<typeof QueryDslSpanNotQuery>;
export interface QueryDslSpanOrQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    clauses: QueryDslSpanQueryShape[];
}
export declare const QueryDslSpanOrQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    clauses: z.ZodArray<z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>>;
}, z.core.$strip>;
export type QueryDslSpanOrQuery = z.infer<typeof QueryDslSpanOrQuery>;
export declare const QueryDslSpanTermQuery: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    term: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslSpanTermQuery = z.infer<typeof QueryDslSpanTermQuery>;
export interface QueryDslSpanWithinQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    big: QueryDslSpanQueryShape;
    little: QueryDslSpanQueryShape;
}
export declare const QueryDslSpanWithinQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    big: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
    little: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
}, z.core.$strip>;
export type QueryDslSpanWithinQuery = z.infer<typeof QueryDslSpanWithinQuery>;
export interface QueryDslSpanQueryShape {
    span_containing?: QueryDslSpanContainingQuery | undefined;
    span_field_masking?: QueryDslSpanFieldMaskingQuery | undefined;
    span_first?: QueryDslSpanFirstQuery | undefined;
    span_gap?: QueryDslSpanGapQuery | undefined;
    span_multi?: QueryDslSpanMultiTermQuery | undefined;
    span_near?: QueryDslSpanNearQuery | undefined;
    span_not?: QueryDslSpanNotQuery | undefined;
    span_or?: QueryDslSpanOrQuery | undefined;
    span_term?: Record<Field, QueryDslSpanTermQuery> | undefined;
    span_within?: QueryDslSpanWithinQuery | undefined;
}
export declare const QueryDslSpanQuery: z.ZodType<QueryDslSpanQueryShape>;
export type QueryDslSpanQuery = z.infer<typeof QueryDslSpanQuery>;
export interface QueryDslSpanContainingQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    big: QueryDslSpanQueryShape;
    little: QueryDslSpanQueryShape;
}
export declare const QueryDslSpanContainingQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    big: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
    little: z.ZodType<QueryDslSpanQueryShape, unknown, z.core.$ZodTypeInternals<QueryDslSpanQueryShape, unknown>>;
}, z.core.$strip>;
export type QueryDslSpanContainingQuery = z.infer<typeof QueryDslSpanContainingQuery>;
export declare const TokenPruningConfig: z.ZodObject<{
    tokens_freq_ratio_threshold: z.ZodOptional<z.ZodNumber>;
    tokens_weight_threshold: z.ZodOptional<z.ZodNumber>;
    only_score_pruned_tokens: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type TokenPruningConfig = z.infer<typeof TokenPruningConfig>;
export declare const QueryDslSparseVectorQuery: z.ZodIntersection<z.ZodObject<{
    field: z.ZodString;
    query: z.ZodOptional<z.ZodString>;
    prune: z.ZodOptional<z.ZodBoolean>;
    pruning_config: z.ZodOptional<z.ZodObject<{
        tokens_freq_ratio_threshold: z.ZodOptional<z.ZodNumber>;
        tokens_weight_threshold: z.ZodOptional<z.ZodNumber>;
        only_score_pruned_tokens: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>, z.ZodUnion<readonly [z.ZodObject<{
    query_vector: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>, z.ZodObject<{
    inference_id: z.ZodString;
}, z.core.$strip>]>>;
export type QueryDslSparseVectorQuery = z.infer<typeof QueryDslSparseVectorQuery>;
export declare const QueryDslTermQuery: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    case_insensitive: z.ZodOptional<z.ZodBoolean>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslTermQuery = z.infer<typeof QueryDslTermQuery>;
export declare const QueryDslTermsQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$catchall<z.ZodAny>>;
export type QueryDslTermsQuery = z.infer<typeof QueryDslTermsQuery>;
export interface QueryDslTermsSetQueryShape {
    boost?: float | undefined;
    query_name?: string | undefined;
    minimum_should_match?: MinimumShouldMatch | undefined;
    minimum_should_match_field?: Field | undefined;
    minimum_should_match_script?: ScriptShape | undefined;
    terms: FieldValue[];
}
export declare const QueryDslTermsSetQuery: z.ZodObject<{
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
    minimum_should_match: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    minimum_should_match_field: z.ZodOptional<z.ZodString>;
    minimum_should_match_script: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>, z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>]>>;
    terms: z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
}, z.core.$strip>;
export type QueryDslTermsSetQuery = z.infer<typeof QueryDslTermsSetQuery>;
export declare const QueryDslTextExpansionQuery: z.ZodObject<{
    model_id: z.ZodString;
    model_text: z.ZodString;
    pruning_config: z.ZodOptional<z.ZodObject<{
        tokens_freq_ratio_threshold: z.ZodOptional<z.ZodNumber>;
        tokens_weight_threshold: z.ZodOptional<z.ZodNumber>;
        only_score_pruned_tokens: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslTextExpansionQuery = z.infer<typeof QueryDslTextExpansionQuery>;
export declare const QueryDslWeightedTokensQuery: z.ZodObject<{
    tokens: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodNumber>, z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNumber>>]>;
    pruning_config: z.ZodOptional<z.ZodObject<{
        tokens_freq_ratio_threshold: z.ZodOptional<z.ZodNumber>;
        tokens_weight_threshold: z.ZodOptional<z.ZodNumber>;
        only_score_pruned_tokens: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslWeightedTokensQuery = z.infer<typeof QueryDslWeightedTokensQuery>;
export declare const QueryDslWildcardQuery: z.ZodObject<{
    case_insensitive: z.ZodOptional<z.ZodBoolean>;
    rewrite: z.ZodOptional<z.ZodString>;
    value: z.ZodOptional<z.ZodString>;
    wildcard: z.ZodOptional<z.ZodString>;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslWildcardQuery = z.infer<typeof QueryDslWildcardQuery>;
export declare const QueryDslWrapperQuery: z.ZodObject<{
    query: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslWrapperQuery = z.infer<typeof QueryDslWrapperQuery>;
export declare const QueryDslTypeQuery: z.ZodObject<{
    value: z.ZodString;
    boost: z.ZodOptional<z.ZodNumber>;
    query_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type QueryDslTypeQuery = z.infer<typeof QueryDslTypeQuery>;
export interface QueryDslQueryContainerShape {
    bool?: QueryDslBoolQuery | undefined;
    boosting?: QueryDslBoostingQuery | undefined;
    common?: Record<Field, QueryDslCommonTermsQuery> | undefined;
    combined_fields?: QueryDslCombinedFieldsQuery | undefined;
    constant_score?: QueryDslConstantScoreQuery | undefined;
    dis_max?: QueryDslDisMaxQuery | undefined;
    distance_feature?: QueryDslDistanceFeatureQuery | undefined;
    exists?: QueryDslExistsQuery | undefined;
    function_score?: QueryDslFunctionScoreQuery | undefined;
    fuzzy?: Record<Field, QueryDslFuzzyQuery> | undefined;
    geo_bounding_box?: QueryDslGeoBoundingBoxQuery | undefined;
    geo_distance?: QueryDslGeoDistanceQuery | undefined;
    geo_grid?: Record<Field, QueryDslGeoGridQuery> | undefined;
    geo_polygon?: QueryDslGeoPolygonQuery | undefined;
    geo_shape?: QueryDslGeoShapeQuery | undefined;
    has_child?: QueryDslHasChildQuery | undefined;
    has_parent?: QueryDslHasParentQuery | undefined;
    ids?: QueryDslIdsQuery | undefined;
    intervals?: Record<Field, QueryDslIntervalsQuery> | undefined;
    knn?: KnnQuery | undefined;
    match?: Record<Field, QueryDslMatchQuery> | undefined;
    match_all?: QueryDslMatchAllQuery | undefined;
    match_bool_prefix?: Record<Field, QueryDslMatchBoolPrefixQuery> | undefined;
    match_none?: QueryDslMatchNoneQuery | undefined;
    match_phrase?: Record<Field, QueryDslMatchPhraseQuery> | undefined;
    match_phrase_prefix?: Record<Field, QueryDslMatchPhrasePrefixQuery> | undefined;
    more_like_this?: QueryDslMoreLikeThisQuery | undefined;
    multi_match?: QueryDslMultiMatchQuery | undefined;
    nested?: QueryDslNestedQuery | undefined;
    parent_id?: QueryDslParentIdQuery | undefined;
    percolate?: QueryDslPercolateQuery | undefined;
    pinned?: QueryDslPinnedQuery | undefined;
    prefix?: Record<Field, QueryDslPrefixQuery> | undefined;
    query_string?: QueryDslQueryStringQuery | undefined;
    range?: Record<Field, QueryDslRangeQuery> | undefined;
    rank_feature?: QueryDslRankFeatureQuery | undefined;
    regexp?: Record<Field, QueryDslRegexpQuery> | undefined;
    rule?: QueryDslRuleQuery | undefined;
    script?: QueryDslScriptQuery | undefined;
    script_score?: QueryDslScriptScoreQuery | undefined;
    semantic?: QueryDslSemanticQuery | undefined;
    shape?: QueryDslShapeQuery | undefined;
    simple_query_string?: QueryDslSimpleQueryStringQuery | undefined;
    span_containing?: QueryDslSpanContainingQuery | undefined;
    span_field_masking?: QueryDslSpanFieldMaskingQuery | undefined;
    span_first?: QueryDslSpanFirstQuery | undefined;
    span_multi?: QueryDslSpanMultiTermQuery | undefined;
    span_near?: QueryDslSpanNearQuery | undefined;
    span_not?: QueryDslSpanNotQuery | undefined;
    span_or?: QueryDslSpanOrQuery | undefined;
    span_term?: Record<Field, QueryDslSpanTermQuery> | undefined;
    span_within?: QueryDslSpanWithinQuery | undefined;
    sparse_vector?: QueryDslSparseVectorQuery | undefined;
    term?: Record<Field, QueryDslTermQuery> | undefined;
    terms?: QueryDslTermsQuery | undefined;
    terms_set?: Record<Field, QueryDslTermsSetQuery> | undefined;
    text_expansion?: Record<Field, QueryDslTextExpansionQuery> | undefined;
    weighted_tokens?: Record<Field, QueryDslWeightedTokensQuery> | undefined;
    wildcard?: Record<Field, QueryDslWildcardQuery> | undefined;
    wrapper?: QueryDslWrapperQuery | undefined;
    type?: QueryDslTypeQuery | undefined;
}
/** An Elasticsearch Query DSL (Domain Specific Language) object that defines a query. */
export declare const QueryDslQueryContainer: z.ZodType<QueryDslQueryContainerShape>;
export type QueryDslQueryContainer = z.infer<typeof QueryDslQueryContainer>;
export declare const SearchHighlighterOrder: z.ZodEnum<{
    score: "score";
}>;
export type SearchHighlighterOrder = z.infer<typeof SearchHighlighterOrder>;
export declare const SearchHighlighterTagsSchema: z.ZodEnum<{
    styled: "styled";
}>;
export type SearchHighlighterTagsSchema = z.infer<typeof SearchHighlighterTagsSchema>;
export interface SearchHighlightBaseShape {
    type?: SearchHighlighterType | undefined;
    boundary_chars?: string | undefined;
    boundary_max_scan?: integer | undefined;
    boundary_scanner?: SearchBoundaryScanner | undefined;
    boundary_scanner_locale?: string | undefined;
    force_source?: boolean | undefined;
    fragmenter?: SearchHighlighterFragmenter | undefined;
    fragment_size?: integer | undefined;
    highlight_filter?: boolean | undefined;
    highlight_query?: QueryDslQueryContainerShape | undefined;
    max_fragment_length?: integer | undefined;
    max_analyzed_offset?: integer | undefined;
    no_match_size?: integer | undefined;
    number_of_fragments?: integer | undefined;
    options?: Record<string, unknown> | undefined;
    order?: SearchHighlighterOrder | undefined;
    phrase_limit?: integer | undefined;
    post_tags?: string[] | undefined;
    pre_tags?: string[] | undefined;
    require_field_match?: boolean | undefined;
    tags_schema?: SearchHighlighterTagsSchema | undefined;
}
export declare const SearchHighlightBase: z.ZodObject<{
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        plain: "plain";
        fvh: "fvh";
        unified: "unified";
    }>, z.ZodString]>>;
    boundary_chars: z.ZodOptional<z.ZodString>;
    boundary_max_scan: z.ZodOptional<z.ZodNumber>;
    boundary_scanner: z.ZodOptional<z.ZodEnum<{
        chars: "chars";
        sentence: "sentence";
        word: "word";
    }>>;
    boundary_scanner_locale: z.ZodOptional<z.ZodString>;
    force_source: z.ZodOptional<z.ZodBoolean>;
    fragmenter: z.ZodOptional<z.ZodEnum<{
        simple: "simple";
        span: "span";
    }>>;
    fragment_size: z.ZodOptional<z.ZodNumber>;
    highlight_filter: z.ZodOptional<z.ZodBoolean>;
    highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    max_fragment_length: z.ZodOptional<z.ZodNumber>;
    max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
    no_match_size: z.ZodOptional<z.ZodNumber>;
    number_of_fragments: z.ZodOptional<z.ZodNumber>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    order: z.ZodOptional<z.ZodEnum<{
        score: "score";
    }>>;
    phrase_limit: z.ZodOptional<z.ZodNumber>;
    post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    require_field_match: z.ZodOptional<z.ZodBoolean>;
    tags_schema: z.ZodOptional<z.ZodEnum<{
        styled: "styled";
    }>>;
}, z.core.$strip>;
export type SearchHighlightBase = z.infer<typeof SearchHighlightBase>;
export declare const SearchHighlighterEncoder: z.ZodEnum<{
    default: "default";
    html: "html";
}>;
export type SearchHighlighterEncoder = z.infer<typeof SearchHighlighterEncoder>;
export interface SearchHighlightFieldShape {
    type?: SearchHighlighterType | undefined;
    boundary_chars?: string | undefined;
    boundary_max_scan?: integer | undefined;
    boundary_scanner?: SearchBoundaryScanner | undefined;
    boundary_scanner_locale?: string | undefined;
    force_source?: boolean | undefined;
    fragmenter?: SearchHighlighterFragmenter | undefined;
    fragment_size?: integer | undefined;
    highlight_filter?: boolean | undefined;
    highlight_query?: QueryDslQueryContainerShape | undefined;
    max_fragment_length?: integer | undefined;
    max_analyzed_offset?: integer | undefined;
    no_match_size?: integer | undefined;
    number_of_fragments?: integer | undefined;
    options?: Record<string, unknown> | undefined;
    order?: SearchHighlighterOrder | undefined;
    phrase_limit?: integer | undefined;
    post_tags?: string[] | undefined;
    pre_tags?: string[] | undefined;
    require_field_match?: boolean | undefined;
    tags_schema?: SearchHighlighterTagsSchema | undefined;
    fragment_offset?: integer | undefined;
    matched_fields?: Fields | undefined;
}
export declare const SearchHighlightField: z.ZodObject<{
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        plain: "plain";
        fvh: "fvh";
        unified: "unified";
    }>, z.ZodString]>>;
    boundary_chars: z.ZodOptional<z.ZodString>;
    boundary_max_scan: z.ZodOptional<z.ZodNumber>;
    boundary_scanner: z.ZodOptional<z.ZodEnum<{
        chars: "chars";
        sentence: "sentence";
        word: "word";
    }>>;
    boundary_scanner_locale: z.ZodOptional<z.ZodString>;
    force_source: z.ZodOptional<z.ZodBoolean>;
    fragmenter: z.ZodOptional<z.ZodEnum<{
        simple: "simple";
        span: "span";
    }>>;
    fragment_size: z.ZodOptional<z.ZodNumber>;
    highlight_filter: z.ZodOptional<z.ZodBoolean>;
    highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    max_fragment_length: z.ZodOptional<z.ZodNumber>;
    max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
    no_match_size: z.ZodOptional<z.ZodNumber>;
    number_of_fragments: z.ZodOptional<z.ZodNumber>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    order: z.ZodOptional<z.ZodEnum<{
        score: "score";
    }>>;
    phrase_limit: z.ZodOptional<z.ZodNumber>;
    post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    require_field_match: z.ZodOptional<z.ZodBoolean>;
    tags_schema: z.ZodOptional<z.ZodEnum<{
        styled: "styled";
    }>>;
    fragment_offset: z.ZodOptional<z.ZodNumber>;
    matched_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type SearchHighlightField = z.infer<typeof SearchHighlightField>;
export interface SearchHighlightShape {
    type?: SearchHighlighterType | undefined;
    boundary_chars?: string | undefined;
    boundary_max_scan?: integer | undefined;
    boundary_scanner?: SearchBoundaryScanner | undefined;
    boundary_scanner_locale?: string | undefined;
    force_source?: boolean | undefined;
    fragmenter?: SearchHighlighterFragmenter | undefined;
    fragment_size?: integer | undefined;
    highlight_filter?: boolean | undefined;
    highlight_query?: QueryDslQueryContainerShape | undefined;
    max_fragment_length?: integer | undefined;
    max_analyzed_offset?: integer | undefined;
    no_match_size?: integer | undefined;
    number_of_fragments?: integer | undefined;
    options?: Record<string, unknown> | undefined;
    order?: SearchHighlighterOrder | undefined;
    phrase_limit?: integer | undefined;
    post_tags?: string[] | undefined;
    pre_tags?: string[] | undefined;
    require_field_match?: boolean | undefined;
    tags_schema?: SearchHighlighterTagsSchema | undefined;
    encoder?: SearchHighlighterEncoder | undefined;
    fields: Record<Field, SearchHighlightFieldShape> | Array<Record<Field, SearchHighlightFieldShape>>;
}
export declare const SearchHighlight: z.ZodObject<{
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        plain: "plain";
        fvh: "fvh";
        unified: "unified";
    }>, z.ZodString]>>;
    boundary_chars: z.ZodOptional<z.ZodString>;
    boundary_max_scan: z.ZodOptional<z.ZodNumber>;
    boundary_scanner: z.ZodOptional<z.ZodEnum<{
        chars: "chars";
        sentence: "sentence";
        word: "word";
    }>>;
    boundary_scanner_locale: z.ZodOptional<z.ZodString>;
    force_source: z.ZodOptional<z.ZodBoolean>;
    fragmenter: z.ZodOptional<z.ZodEnum<{
        simple: "simple";
        span: "span";
    }>>;
    fragment_size: z.ZodOptional<z.ZodNumber>;
    highlight_filter: z.ZodOptional<z.ZodBoolean>;
    highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
    max_fragment_length: z.ZodOptional<z.ZodNumber>;
    max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
    no_match_size: z.ZodOptional<z.ZodNumber>;
    number_of_fragments: z.ZodOptional<z.ZodNumber>;
    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    order: z.ZodOptional<z.ZodEnum<{
        score: "score";
    }>>;
    phrase_limit: z.ZodOptional<z.ZodNumber>;
    post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    require_field_match: z.ZodOptional<z.ZodBoolean>;
    tags_schema: z.ZodOptional<z.ZodEnum<{
        styled: "styled";
    }>>;
    encoder: z.ZodOptional<z.ZodEnum<{
        default: "default";
        html: "html";
    }>>;
    fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
}, z.core.$strip>;
export type SearchHighlight = z.infer<typeof SearchHighlight>;
export interface SearchInnerHitsShape {
    name?: Name | undefined;
    size?: integer | undefined;
    from?: integer | undefined;
    collapse?: SearchFieldCollapseShape | undefined;
    docvalue_fields?: QueryDslFieldAndFormat[] | undefined;
    explain?: boolean | undefined;
    highlight?: SearchHighlightShape | undefined;
    ignore_unmapped?: boolean | undefined;
    script_fields?: Record<Field, ScriptFieldShape> | undefined;
    seq_no_primary_term?: boolean | undefined;
    field?: Field[] | undefined;
    fields?: QueryDslFieldAndFormat[] | undefined;
    sort?: SortShape | undefined;
    _source?: SearchSourceConfig | undefined;
    stored_fields?: Fields | undefined;
    track_scores?: boolean | undefined;
    version?: boolean | undefined;
}
export declare const SearchInnerHits: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodNumber>;
    from: z.ZodOptional<z.ZodNumber>;
    collapse: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
        max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
        collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
    }, z.core.$strip>>;
    docvalue_fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        include_unmapped: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodString]>>>;
    explain: z.ZodOptional<z.ZodBoolean>;
    highlight: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            plain: "plain";
            fvh: "fvh";
            unified: "unified";
        }>, z.ZodString]>>;
        boundary_chars: z.ZodOptional<z.ZodString>;
        boundary_max_scan: z.ZodOptional<z.ZodNumber>;
        boundary_scanner: z.ZodOptional<z.ZodEnum<{
            chars: "chars";
            sentence: "sentence";
            word: "word";
        }>>;
        boundary_scanner_locale: z.ZodOptional<z.ZodString>;
        force_source: z.ZodOptional<z.ZodBoolean>;
        fragmenter: z.ZodOptional<z.ZodEnum<{
            simple: "simple";
            span: "span";
        }>>;
        fragment_size: z.ZodOptional<z.ZodNumber>;
        highlight_filter: z.ZodOptional<z.ZodBoolean>;
        highlight_query: z.ZodOptional<z.ZodType<QueryDslQueryContainerShape, unknown, z.core.$ZodTypeInternals<QueryDslQueryContainerShape, unknown>>>;
        max_fragment_length: z.ZodOptional<z.ZodNumber>;
        max_analyzed_offset: z.ZodOptional<z.ZodNumber>;
        no_match_size: z.ZodOptional<z.ZodNumber>;
        number_of_fragments: z.ZodOptional<z.ZodNumber>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        order: z.ZodOptional<z.ZodEnum<{
            score: "score";
        }>>;
        phrase_limit: z.ZodOptional<z.ZodNumber>;
        post_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        pre_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        require_field_match: z.ZodOptional<z.ZodBoolean>;
        tags_schema: z.ZodOptional<z.ZodEnum<{
            styled: "styled";
        }>>;
        encoder: z.ZodOptional<z.ZodEnum<{
            default: "default";
            html: "html";
        }>>;
        fields: z.ZodUnion<readonly [z.ZodRecord<typeof Field, typeof SearchHighlightField>, z.ZodArray<z.ZodRecord<typeof Field, typeof SearchHighlightField>>]>;
    }, z.core.$strip>>;
    ignore_unmapped: z.ZodOptional<z.ZodBoolean>;
    script_fields: z.ZodOptional<z.ZodRecord<typeof Field, typeof ScriptField>>;
    seq_no_primary_term: z.ZodOptional<z.ZodBoolean>;
    field: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        include_unmapped: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodString]>>>;
    sort: z.ZodOptional<z.ZodType<SortShape, unknown, z.core.$ZodTypeInternals<SortShape, unknown>>>;
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodUnion<readonly [z.ZodObject<{
        exclude_vectors: z.ZodOptional<z.ZodBoolean>;
        excludes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        exclude: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        includes: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>, z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>]>]>>;
    stored_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    track_scores: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SearchInnerHits = z.infer<typeof SearchInnerHits>;
export interface SearchFieldCollapseShape {
    field: Field;
    inner_hits?: SearchInnerHitsShape | SearchInnerHitsShape[] | undefined;
    max_concurrent_group_searches?: integer | undefined;
    collapse?: SearchFieldCollapseShape | undefined;
}
export declare const SearchFieldCollapse: z.ZodObject<{
    field: z.ZodString;
    inner_hits: z.ZodOptional<z.ZodUnion<readonly [typeof SearchInnerHits, z.ZodArray<typeof SearchInnerHits>]>>;
    max_concurrent_group_searches: z.ZodOptional<z.ZodNumber>;
    collapse: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
}, z.core.$strip>;
export type SearchFieldCollapse = z.infer<typeof SearchFieldCollapse>;
/**
 * Some APIs will return values such as numbers also as a string (notably epoch timestamps). This behavior
 * is used to capture this behavior while keeping the semantics of the field type.
 *
 * Depending on the target language, code generators can keep the union or remove it and leniently parse
 * strings to the target type.
 */
export declare const SpecUtilsStringified: z.ZodUnion<readonly [z.ZodAny, z.ZodString]>;
export type SpecUtilsStringified = z.infer<typeof SpecUtilsStringified>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const AnalysisTokenFilterBase: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisTokenFilterBase = z.infer<typeof AnalysisTokenFilterBase>;
export declare const AnalysisApostropheTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"apostrophe">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisApostropheTokenFilter = z.infer<typeof AnalysisApostropheTokenFilter>;
export declare const AnalysisArabicNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"arabic_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisArabicNormalizationTokenFilter = z.infer<typeof AnalysisArabicNormalizationTokenFilter>;
export declare const AnalysisArabicStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"arabic_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisArabicStemTokenFilter = z.infer<typeof AnalysisArabicStemTokenFilter>;
export declare const AnalysisAsciiFoldingTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"asciifolding">;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisAsciiFoldingTokenFilter = z.infer<typeof AnalysisAsciiFoldingTokenFilter>;
export declare const AnalysisBengaliNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"bengali_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisBengaliNormalizationTokenFilter = z.infer<typeof AnalysisBengaliNormalizationTokenFilter>;
export declare const AnalysisBrazilianStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"brazilian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisBrazilianStemTokenFilter = z.infer<typeof AnalysisBrazilianStemTokenFilter>;
export declare const AnalysisCharFilterBase: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCharFilterBase = z.infer<typeof AnalysisCharFilterBase>;
export declare const AnalysisHtmlStripCharFilter: z.ZodObject<{
    type: z.ZodLiteral<"html_strip">;
    escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisHtmlStripCharFilter = z.infer<typeof AnalysisHtmlStripCharFilter>;
export declare const AnalysisMappingCharFilter: z.ZodObject<{
    type: z.ZodLiteral<"mapping">;
    mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mappings_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisMappingCharFilter = z.infer<typeof AnalysisMappingCharFilter>;
export declare const AnalysisPatternReplaceCharFilter: z.ZodObject<{
    type: z.ZodLiteral<"pattern_replace">;
    flags: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    replacement: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPatternReplaceCharFilter = z.infer<typeof AnalysisPatternReplaceCharFilter>;
export declare const AnalysisIcuNormalizationMode: z.ZodEnum<{
    decompose: "decompose";
    compose: "compose";
}>;
export type AnalysisIcuNormalizationMode = z.infer<typeof AnalysisIcuNormalizationMode>;
export declare const AnalysisIcuNormalizationType: z.ZodEnum<{
    nfc: "nfc";
    nfkc: "nfkc";
    nfkc_cf: "nfkc_cf";
}>;
export type AnalysisIcuNormalizationType = z.infer<typeof AnalysisIcuNormalizationType>;
export declare const AnalysisIcuNormalizationCharFilter: z.ZodObject<{
    type: z.ZodLiteral<"icu_normalizer">;
    mode: z.ZodOptional<z.ZodEnum<{
        decompose: "decompose";
        compose: "compose";
    }>>;
    name: z.ZodOptional<z.ZodEnum<{
        nfc: "nfc";
        nfkc: "nfkc";
        nfkc_cf: "nfkc_cf";
    }>>;
    unicode_set_filter: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIcuNormalizationCharFilter = z.infer<typeof AnalysisIcuNormalizationCharFilter>;
export declare const AnalysisKuromojiIterationMarkCharFilter: z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_iteration_mark">;
    normalize_kana: z.ZodBoolean;
    normalize_kanji: z.ZodBoolean;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKuromojiIterationMarkCharFilter = z.infer<typeof AnalysisKuromojiIterationMarkCharFilter>;
export declare const AnalysisCharFilterDefinition: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"html_strip">;
    escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"mapping">;
    mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mappings_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern_replace">;
    flags: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    replacement: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_normalizer">;
    mode: z.ZodOptional<z.ZodEnum<{
        decompose: "decompose";
        compose: "compose";
    }>>;
    name: z.ZodOptional<z.ZodEnum<{
        nfc: "nfc";
        nfkc: "nfkc";
        nfkc_cf: "nfkc_cf";
    }>>;
    unicode_set_filter: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_iteration_mark">;
    normalize_kana: z.ZodBoolean;
    normalize_kanji: z.ZodBoolean;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type AnalysisCharFilterDefinition = z.infer<typeof AnalysisCharFilterDefinition>;
export declare const AnalysisCharFilter: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"html_strip">;
    escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"mapping">;
    mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
    mappings_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern_replace">;
    flags: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    replacement: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_normalizer">;
    mode: z.ZodOptional<z.ZodEnum<{
        decompose: "decompose";
        compose: "compose";
    }>>;
    name: z.ZodOptional<z.ZodEnum<{
        nfc: "nfc";
        nfkc: "nfkc";
        nfkc_cf: "nfkc_cf";
    }>>;
    unicode_set_filter: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_iteration_mark">;
    normalize_kana: z.ZodBoolean;
    normalize_kanji: z.ZodBoolean;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>]>;
export type AnalysisCharFilter = z.infer<typeof AnalysisCharFilter>;
export declare const AnalysisTokenizerBase: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisTokenizerBase = z.infer<typeof AnalysisTokenizerBase>;
export declare const AnalysisCharGroupTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"char_group">;
    tokenize_on_chars: z.ZodArray<z.ZodString>;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCharGroupTokenizer = z.infer<typeof AnalysisCharGroupTokenizer>;
export declare const AnalysisCjkBigramIgnoredScript: z.ZodEnum<{
    han: "han";
    hangul: "hangul";
    hiragana: "hiragana";
    katakana: "katakana";
}>;
export type AnalysisCjkBigramIgnoredScript = z.infer<typeof AnalysisCjkBigramIgnoredScript>;
export declare const AnalysisCjkBigramTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"cjk_bigram">;
    ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        han: "han";
        hangul: "hangul";
        hiragana: "hiragana";
        katakana: "katakana";
    }>>>;
    output_unigrams: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCjkBigramTokenFilter = z.infer<typeof AnalysisCjkBigramTokenFilter>;
export declare const AnalysisCjkWidthTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"cjk_width">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCjkWidthTokenFilter = z.infer<typeof AnalysisCjkWidthTokenFilter>;
export declare const AnalysisClassicTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"classic">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisClassicTokenFilter = z.infer<typeof AnalysisClassicTokenFilter>;
export declare const AnalysisClassicTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"classic">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisClassicTokenizer = z.infer<typeof AnalysisClassicTokenizer>;
export declare const AnalysisCommonGramsTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"common_grams">;
    common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    common_words_path: z.ZodOptional<z.ZodString>;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    query_mode: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCommonGramsTokenFilter = z.infer<typeof AnalysisCommonGramsTokenFilter>;
export declare const AnalysisCompoundWordTokenFilterBase: z.ZodObject<{
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCompoundWordTokenFilterBase = z.infer<typeof AnalysisCompoundWordTokenFilterBase>;
export declare const AnalysisConditionTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"condition">;
    filter: z.ZodArray<z.ZodString>;
    script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisConditionTokenFilter = z.infer<typeof AnalysisConditionTokenFilter>;
export declare const AnalysisCzechStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"czech_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisCzechStemTokenFilter = z.infer<typeof AnalysisCzechStemTokenFilter>;
export declare const AnalysisDecimalDigitTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"decimal_digit">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisDecimalDigitTokenFilter = z.infer<typeof AnalysisDecimalDigitTokenFilter>;
export declare const AnalysisDelimitedPayloadEncoding: z.ZodEnum<{
    int: "int";
    float: "float";
    identity: "identity";
}>;
export type AnalysisDelimitedPayloadEncoding = z.infer<typeof AnalysisDelimitedPayloadEncoding>;
export declare const AnalysisDelimitedPayloadTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"delimited_payload">;
    delimiter: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        int: "int";
        float: "float";
        identity: "identity";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisDelimitedPayloadTokenFilter = z.infer<typeof AnalysisDelimitedPayloadTokenFilter>;
export declare const AnalysisDictionaryDecompounderTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"dictionary_decompounder">;
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisDictionaryDecompounderTokenFilter = z.infer<typeof AnalysisDictionaryDecompounderTokenFilter>;
export declare const AnalysisDutchStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"dutch_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisDutchStemTokenFilter = z.infer<typeof AnalysisDutchStemTokenFilter>;
export declare const AnalysisEdgeNGramSide: z.ZodEnum<{
    front: "front";
    back: "back";
}>;
export type AnalysisEdgeNGramSide = z.infer<typeof AnalysisEdgeNGramSide>;
export declare const AnalysisEdgeNGramTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"edge_ngram">;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    side: z.ZodOptional<z.ZodEnum<{
        front: "front";
        back: "back";
    }>>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisEdgeNGramTokenFilter = z.infer<typeof AnalysisEdgeNGramTokenFilter>;
export declare const AnalysisTokenChar: z.ZodEnum<{
    symbol: "symbol";
    custom: "custom";
    whitespace: "whitespace";
    letter: "letter";
    digit: "digit";
    punctuation: "punctuation";
}>;
export type AnalysisTokenChar = z.infer<typeof AnalysisTokenChar>;
export declare const AnalysisEdgeNGramTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"edge_ngram">;
    custom_token_chars: z.ZodOptional<z.ZodString>;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        symbol: "symbol";
        custom: "custom";
        whitespace: "whitespace";
        letter: "letter";
        digit: "digit";
        punctuation: "punctuation";
    }>>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisEdgeNGramTokenizer = z.infer<typeof AnalysisEdgeNGramTokenizer>;
export declare const AnalysisElisionTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"elision">;
    articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    articles_path: z.ZodOptional<z.ZodString>;
    articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisElisionTokenFilter = z.infer<typeof AnalysisElisionTokenFilter>;
export declare const AnalysisFingerprintTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"fingerprint">;
    max_output_size: z.ZodOptional<z.ZodNumber>;
    separator: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisFingerprintTokenFilter = z.infer<typeof AnalysisFingerprintTokenFilter>;
export declare const AnalysisFlattenGraphTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"flatten_graph">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisFlattenGraphTokenFilter = z.infer<typeof AnalysisFlattenGraphTokenFilter>;
export declare const AnalysisFrenchStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"french_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisFrenchStemTokenFilter = z.infer<typeof AnalysisFrenchStemTokenFilter>;
export declare const AnalysisGermanNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"german_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisGermanNormalizationTokenFilter = z.infer<typeof AnalysisGermanNormalizationTokenFilter>;
export declare const AnalysisGermanStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"german_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisGermanStemTokenFilter = z.infer<typeof AnalysisGermanStemTokenFilter>;
export declare const AnalysisHindiNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"hindi_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisHindiNormalizationTokenFilter = z.infer<typeof AnalysisHindiNormalizationTokenFilter>;
export declare const AnalysisHunspellTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"hunspell">;
    dedup: z.ZodOptional<z.ZodBoolean>;
    dictionary: z.ZodOptional<z.ZodString>;
    locale: z.ZodString;
    lang: z.ZodString;
    language: z.ZodString;
    longest_only: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisHunspellTokenFilter = z.infer<typeof AnalysisHunspellTokenFilter>;
export declare const AnalysisHyphenationDecompounderTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"hyphenation_decompounder">;
    hyphenation_patterns_path: z.ZodString;
    no_sub_matches: z.ZodOptional<z.ZodBoolean>;
    no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisHyphenationDecompounderTokenFilter = z.infer<typeof AnalysisHyphenationDecompounderTokenFilter>;
export declare const AnalysisIcuCollationAlternate: z.ZodEnum<{
    shifted: "shifted";
    "non-ignorable": "non-ignorable";
}>;
export type AnalysisIcuCollationAlternate = z.infer<typeof AnalysisIcuCollationAlternate>;
export declare const AnalysisIcuCollationCaseFirst: z.ZodEnum<{
    lower: "lower";
    upper: "upper";
}>;
export type AnalysisIcuCollationCaseFirst = z.infer<typeof AnalysisIcuCollationCaseFirst>;
export declare const AnalysisIcuCollationDecomposition: z.ZodEnum<{
    no: "no";
    identical: "identical";
}>;
export type AnalysisIcuCollationDecomposition = z.infer<typeof AnalysisIcuCollationDecomposition>;
export declare const AnalysisIcuCollationStrength: z.ZodEnum<{
    identical: "identical";
    primary: "primary";
    secondary: "secondary";
    tertiary: "tertiary";
    quaternary: "quaternary";
}>;
export type AnalysisIcuCollationStrength = z.infer<typeof AnalysisIcuCollationStrength>;
export declare const AnalysisIcuCollationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"icu_collation">;
    alternate: z.ZodOptional<z.ZodEnum<{
        shifted: "shifted";
        "non-ignorable": "non-ignorable";
    }>>;
    caseFirst: z.ZodOptional<z.ZodEnum<{
        lower: "lower";
        upper: "upper";
    }>>;
    caseLevel: z.ZodOptional<z.ZodBoolean>;
    country: z.ZodOptional<z.ZodString>;
    decomposition: z.ZodOptional<z.ZodEnum<{
        no: "no";
        identical: "identical";
    }>>;
    hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    numeric: z.ZodOptional<z.ZodBoolean>;
    rules: z.ZodOptional<z.ZodString>;
    strength: z.ZodOptional<z.ZodEnum<{
        identical: "identical";
        primary: "primary";
        secondary: "secondary";
        tertiary: "tertiary";
        quaternary: "quaternary";
    }>>;
    variableTop: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIcuCollationTokenFilter = z.infer<typeof AnalysisIcuCollationTokenFilter>;
export declare const AnalysisIcuFoldingTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"icu_folding">;
    unicode_set_filter: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIcuFoldingTokenFilter = z.infer<typeof AnalysisIcuFoldingTokenFilter>;
export declare const AnalysisIcuNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"icu_normalizer">;
    name: z.ZodEnum<{
        nfc: "nfc";
        nfkc: "nfkc";
        nfkc_cf: "nfkc_cf";
    }>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIcuNormalizationTokenFilter = z.infer<typeof AnalysisIcuNormalizationTokenFilter>;
export declare const AnalysisIcuTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"icu_tokenizer">;
    rule_files: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIcuTokenizer = z.infer<typeof AnalysisIcuTokenizer>;
export declare const AnalysisIcuTransformDirection: z.ZodEnum<{
    reverse: "reverse";
    forward: "forward";
}>;
export type AnalysisIcuTransformDirection = z.infer<typeof AnalysisIcuTransformDirection>;
export declare const AnalysisIcuTransformTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"icu_transform">;
    dir: z.ZodOptional<z.ZodEnum<{
        reverse: "reverse";
        forward: "forward";
    }>>;
    id: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIcuTransformTokenFilter = z.infer<typeof AnalysisIcuTransformTokenFilter>;
export declare const AnalysisIndicNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"indic_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisIndicNormalizationTokenFilter = z.infer<typeof AnalysisIndicNormalizationTokenFilter>;
export declare const AnalysisJaStopTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"ja_stop">;
    stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisJaStopTokenFilter = z.infer<typeof AnalysisJaStopTokenFilter>;
export declare const AnalysisKStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"kstem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKStemTokenFilter = z.infer<typeof AnalysisKStemTokenFilter>;
export declare const AnalysisKeepTypesMode: z.ZodEnum<{
    exclude: "exclude";
    include: "include";
}>;
export type AnalysisKeepTypesMode = z.infer<typeof AnalysisKeepTypesMode>;
export declare const AnalysisKeepTypesTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"keep_types">;
    mode: z.ZodOptional<z.ZodEnum<{
        exclude: "exclude";
        include: "include";
    }>>;
    types: z.ZodArray<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKeepTypesTokenFilter = z.infer<typeof AnalysisKeepTypesTokenFilter>;
export declare const AnalysisKeepWordsTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"keep">;
    keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    keep_words_case: z.ZodOptional<z.ZodBoolean>;
    keep_words_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKeepWordsTokenFilter = z.infer<typeof AnalysisKeepWordsTokenFilter>;
export declare const AnalysisKeywordMarkerTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"keyword_marker">;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    keywords_path: z.ZodOptional<z.ZodString>;
    keywords_pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKeywordMarkerTokenFilter = z.infer<typeof AnalysisKeywordMarkerTokenFilter>;
export declare const AnalysisKeywordRepeatTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"keyword_repeat">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKeywordRepeatTokenFilter = z.infer<typeof AnalysisKeywordRepeatTokenFilter>;
export declare const AnalysisKeywordTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"keyword">;
    buffer_size: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKeywordTokenizer = z.infer<typeof AnalysisKeywordTokenizer>;
export declare const AnalysisKuromojiPartOfSpeechTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_part_of_speech">;
    stoptags: z.ZodArray<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKuromojiPartOfSpeechTokenFilter = z.infer<typeof AnalysisKuromojiPartOfSpeechTokenFilter>;
export declare const AnalysisKuromojiReadingFormTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_readingform">;
    use_romaji: z.ZodBoolean;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKuromojiReadingFormTokenFilter = z.infer<typeof AnalysisKuromojiReadingFormTokenFilter>;
export declare const AnalysisKuromojiStemmerTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_stemmer">;
    minimum_length: z.ZodNumber;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKuromojiStemmerTokenFilter = z.infer<typeof AnalysisKuromojiStemmerTokenFilter>;
export declare const AnalysisKuromojiTokenizationMode: z.ZodEnum<{
    search: "search";
    normal: "normal";
    extended: "extended";
}>;
export type AnalysisKuromojiTokenizationMode = z.infer<typeof AnalysisKuromojiTokenizationMode>;
export declare const AnalysisKuromojiTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_tokenizer">;
    discard_punctuation: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodEnum<{
        search: "search";
        normal: "normal";
        extended: "extended";
    }>;
    nbest_cost: z.ZodOptional<z.ZodNumber>;
    nbest_examples: z.ZodOptional<z.ZodString>;
    user_dictionary: z.ZodOptional<z.ZodString>;
    user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    discard_compound_token: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisKuromojiTokenizer = z.infer<typeof AnalysisKuromojiTokenizer>;
export declare const AnalysisLengthTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"length">;
    max: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisLengthTokenFilter = z.infer<typeof AnalysisLengthTokenFilter>;
export declare const AnalysisLetterTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"letter">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisLetterTokenizer = z.infer<typeof AnalysisLetterTokenizer>;
export declare const AnalysisLimitTokenCountTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"limit">;
    consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
    max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisLimitTokenCountTokenFilter = z.infer<typeof AnalysisLimitTokenCountTokenFilter>;
export declare const AnalysisLowercaseTokenFilterLanguages: z.ZodEnum<{
    greek: "greek";
    irish: "irish";
    turkish: "turkish";
}>;
export type AnalysisLowercaseTokenFilterLanguages = z.infer<typeof AnalysisLowercaseTokenFilterLanguages>;
export declare const AnalysisLowercaseTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"lowercase">;
    language: z.ZodOptional<z.ZodEnum<{
        greek: "greek";
        irish: "irish";
        turkish: "turkish";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisLowercaseTokenFilter = z.infer<typeof AnalysisLowercaseTokenFilter>;
export declare const AnalysisLowercaseTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"lowercase">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisLowercaseTokenizer = z.infer<typeof AnalysisLowercaseTokenizer>;
export declare const AnalysisMinHashTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"min_hash">;
    bucket_count: z.ZodOptional<z.ZodNumber>;
    hash_count: z.ZodOptional<z.ZodNumber>;
    hash_set_size: z.ZodOptional<z.ZodNumber>;
    with_rotation: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisMinHashTokenFilter = z.infer<typeof AnalysisMinHashTokenFilter>;
export declare const AnalysisMultiplexerTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"multiplexer">;
    filters: z.ZodArray<z.ZodString>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisMultiplexerTokenFilter = z.infer<typeof AnalysisMultiplexerTokenFilter>;
export declare const AnalysisNGramTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"ngram">;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisNGramTokenFilter = z.infer<typeof AnalysisNGramTokenFilter>;
export declare const AnalysisNGramTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"ngram">;
    custom_token_chars: z.ZodOptional<z.ZodString>;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        symbol: "symbol";
        custom: "custom";
        whitespace: "whitespace";
        letter: "letter";
        digit: "digit";
        punctuation: "punctuation";
    }>>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisNGramTokenizer = z.infer<typeof AnalysisNGramTokenizer>;
export declare const AnalysisNoriDecompoundMode: z.ZodEnum<{
    none: "none";
    discard: "discard";
    mixed: "mixed";
}>;
export type AnalysisNoriDecompoundMode = z.infer<typeof AnalysisNoriDecompoundMode>;
export declare const AnalysisNoriPartOfSpeechTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"nori_part_of_speech">;
    stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisNoriPartOfSpeechTokenFilter = z.infer<typeof AnalysisNoriPartOfSpeechTokenFilter>;
export declare const AnalysisNoriTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"nori_tokenizer">;
    decompound_mode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        discard: "discard";
        mixed: "mixed";
    }>>;
    discard_punctuation: z.ZodOptional<z.ZodBoolean>;
    user_dictionary: z.ZodOptional<z.ZodString>;
    user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisNoriTokenizer = z.infer<typeof AnalysisNoriTokenizer>;
export declare const AnalysisPathHierarchyTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"path_hierarchy">;
    buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    delimiter: z.ZodOptional<z.ZodString>;
    replacement: z.ZodOptional<z.ZodString>;
    reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPathHierarchyTokenizer = z.infer<typeof AnalysisPathHierarchyTokenizer>;
export declare const AnalysisPatternCaptureTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"pattern_capture">;
    patterns: z.ZodArray<z.ZodString>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPatternCaptureTokenFilter = z.infer<typeof AnalysisPatternCaptureTokenFilter>;
export declare const AnalysisPatternReplaceTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"pattern_replace">;
    all: z.ZodOptional<z.ZodBoolean>;
    flags: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    replacement: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPatternReplaceTokenFilter = z.infer<typeof AnalysisPatternReplaceTokenFilter>;
export declare const AnalysisPatternTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"pattern">;
    flags: z.ZodOptional<z.ZodString>;
    group: z.ZodOptional<z.ZodNumber>;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPatternTokenizer = z.infer<typeof AnalysisPatternTokenizer>;
export declare const AnalysisPersianNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"persian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPersianNormalizationTokenFilter = z.infer<typeof AnalysisPersianNormalizationTokenFilter>;
export declare const AnalysisPersianStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"persian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPersianStemTokenFilter = z.infer<typeof AnalysisPersianStemTokenFilter>;
export declare const AnalysisPhoneticEncoder: z.ZodEnum<{
    metaphone: "metaphone";
    double_metaphone: "double_metaphone";
    soundex: "soundex";
    refined_soundex: "refined_soundex";
    caverphone1: "caverphone1";
    caverphone2: "caverphone2";
    cologne: "cologne";
    nysiis: "nysiis";
    koelnerphonetik: "koelnerphonetik";
    haasephonetik: "haasephonetik";
    beider_morse: "beider_morse";
    daitch_mokotoff: "daitch_mokotoff";
}>;
export type AnalysisPhoneticEncoder = z.infer<typeof AnalysisPhoneticEncoder>;
export declare const AnalysisPhoneticLanguage: z.ZodEnum<{
    any: "any";
    english: "english";
    french: "french";
    german: "german";
    hungarian: "hungarian";
    romanian: "romanian";
    russian: "russian";
    spanish: "spanish";
    common: "common";
    cyrillic: "cyrillic";
    hebrew: "hebrew";
    polish: "polish";
}>;
export type AnalysisPhoneticLanguage = z.infer<typeof AnalysisPhoneticLanguage>;
export declare const AnalysisPhoneticNameType: z.ZodEnum<{
    generic: "generic";
    ashkenazi: "ashkenazi";
    sephardic: "sephardic";
}>;
export type AnalysisPhoneticNameType = z.infer<typeof AnalysisPhoneticNameType>;
export declare const AnalysisPhoneticRuleType: z.ZodEnum<{
    approx: "approx";
    exact: "exact";
}>;
export type AnalysisPhoneticRuleType = z.infer<typeof AnalysisPhoneticRuleType>;
export declare const AnalysisPhoneticTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"phonetic">;
    encoder: z.ZodEnum<{
        metaphone: "metaphone";
        double_metaphone: "double_metaphone";
        soundex: "soundex";
        refined_soundex: "refined_soundex";
        caverphone1: "caverphone1";
        caverphone2: "caverphone2";
        cologne: "cologne";
        nysiis: "nysiis";
        koelnerphonetik: "koelnerphonetik";
        haasephonetik: "haasephonetik";
        beider_morse: "beider_morse";
        daitch_mokotoff: "daitch_mokotoff";
    }>;
    languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        any: "any";
        english: "english";
        french: "french";
        german: "german";
        hungarian: "hungarian";
        romanian: "romanian";
        russian: "russian";
        spanish: "spanish";
        common: "common";
        cyrillic: "cyrillic";
        hebrew: "hebrew";
        polish: "polish";
    }>, z.ZodArray<z.ZodEnum<{
        any: "any";
        english: "english";
        french: "french";
        german: "german";
        hungarian: "hungarian";
        romanian: "romanian";
        russian: "russian";
        spanish: "spanish";
        common: "common";
        cyrillic: "cyrillic";
        hebrew: "hebrew";
        polish: "polish";
    }>>]>>;
    max_code_len: z.ZodOptional<z.ZodNumber>;
    name_type: z.ZodOptional<z.ZodEnum<{
        generic: "generic";
        ashkenazi: "ashkenazi";
        sephardic: "sephardic";
    }>>;
    replace: z.ZodOptional<z.ZodBoolean>;
    rule_type: z.ZodOptional<z.ZodEnum<{
        approx: "approx";
        exact: "exact";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPhoneticTokenFilter = z.infer<typeof AnalysisPhoneticTokenFilter>;
export declare const AnalysisPorterStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"porter_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPorterStemTokenFilter = z.infer<typeof AnalysisPorterStemTokenFilter>;
export declare const AnalysisPredicateTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"predicate_token_filter">;
    script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisPredicateTokenFilter = z.infer<typeof AnalysisPredicateTokenFilter>;
export declare const AnalysisRemoveDuplicatesTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"remove_duplicates">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisRemoveDuplicatesTokenFilter = z.infer<typeof AnalysisRemoveDuplicatesTokenFilter>;
export declare const AnalysisReverseTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"reverse">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisReverseTokenFilter = z.infer<typeof AnalysisReverseTokenFilter>;
export declare const AnalysisRussianStemTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"russian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisRussianStemTokenFilter = z.infer<typeof AnalysisRussianStemTokenFilter>;
export declare const AnalysisScandinavianFoldingTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"scandinavian_folding">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisScandinavianFoldingTokenFilter = z.infer<typeof AnalysisScandinavianFoldingTokenFilter>;
export declare const AnalysisScandinavianNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"scandinavian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisScandinavianNormalizationTokenFilter = z.infer<typeof AnalysisScandinavianNormalizationTokenFilter>;
export declare const AnalysisSerbianNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"serbian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSerbianNormalizationTokenFilter = z.infer<typeof AnalysisSerbianNormalizationTokenFilter>;
export declare const AnalysisShingleTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"shingle">;
    filler_token: z.ZodOptional<z.ZodString>;
    max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    output_unigrams: z.ZodOptional<z.ZodBoolean>;
    output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
    token_separator: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisShingleTokenFilter = z.infer<typeof AnalysisShingleTokenFilter>;
export declare const AnalysisSimplePatternSplitTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"simple_pattern_split">;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSimplePatternSplitTokenizer = z.infer<typeof AnalysisSimplePatternSplitTokenizer>;
export declare const AnalysisSimplePatternTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"simple_pattern">;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSimplePatternTokenizer = z.infer<typeof AnalysisSimplePatternTokenizer>;
export declare const AnalysisSnowballLanguage: z.ZodEnum<{
    Arabic: "Arabic";
    Armenian: "Armenian";
    Basque: "Basque";
    Catalan: "Catalan";
    Danish: "Danish";
    Dutch: "Dutch";
    English: "English";
    Estonian: "Estonian";
    Finnish: "Finnish";
    French: "French";
    German: "German";
    German2: "German2";
    Hungarian: "Hungarian";
    Italian: "Italian";
    Irish: "Irish";
    Kp: "Kp";
    Lithuanian: "Lithuanian";
    Lovins: "Lovins";
    Norwegian: "Norwegian";
    Porter: "Porter";
    Portuguese: "Portuguese";
    Romanian: "Romanian";
    Russian: "Russian";
    Serbian: "Serbian";
    Spanish: "Spanish";
    Swedish: "Swedish";
    Turkish: "Turkish";
}>;
export type AnalysisSnowballLanguage = z.infer<typeof AnalysisSnowballLanguage>;
export declare const AnalysisSnowballTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"snowball">;
    language: z.ZodOptional<z.ZodEnum<{
        Arabic: "Arabic";
        Armenian: "Armenian";
        Basque: "Basque";
        Catalan: "Catalan";
        Danish: "Danish";
        Dutch: "Dutch";
        English: "English";
        Estonian: "Estonian";
        Finnish: "Finnish";
        French: "French";
        German: "German";
        German2: "German2";
        Hungarian: "Hungarian";
        Italian: "Italian";
        Irish: "Irish";
        Kp: "Kp";
        Lithuanian: "Lithuanian";
        Lovins: "Lovins";
        Norwegian: "Norwegian";
        Porter: "Porter";
        Portuguese: "Portuguese";
        Romanian: "Romanian";
        Russian: "Russian";
        Serbian: "Serbian";
        Spanish: "Spanish";
        Swedish: "Swedish";
        Turkish: "Turkish";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSnowballTokenFilter = z.infer<typeof AnalysisSnowballTokenFilter>;
export declare const AnalysisSoraniNormalizationTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"sorani_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSoraniNormalizationTokenFilter = z.infer<typeof AnalysisSoraniNormalizationTokenFilter>;
export declare const AnalysisStandardTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"standard">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisStandardTokenizer = z.infer<typeof AnalysisStandardTokenizer>;
export declare const AnalysisStemmerOverrideTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"stemmer_override">;
    rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    rules_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisStemmerOverrideTokenFilter = z.infer<typeof AnalysisStemmerOverrideTokenFilter>;
export declare const AnalysisStemmerTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"stemmer">;
    language: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisStemmerTokenFilter = z.infer<typeof AnalysisStemmerTokenFilter>;
export declare const AnalysisStopTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"stop">;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    remove_trailing: z.ZodOptional<z.ZodBoolean>;
    stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    stopwords_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisStopTokenFilter = z.infer<typeof AnalysisStopTokenFilter>;
export declare const AnalysisSynonymFormat: z.ZodEnum<{
    solr: "solr";
    wordnet: "wordnet";
}>;
export type AnalysisSynonymFormat = z.infer<typeof AnalysisSynonymFormat>;
export declare const AnalysisSynonymTokenFilterBase: z.ZodObject<{
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSynonymTokenFilterBase = z.infer<typeof AnalysisSynonymTokenFilterBase>;
export declare const AnalysisSynonymGraphTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"synonym_graph">;
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSynonymGraphTokenFilter = z.infer<typeof AnalysisSynonymGraphTokenFilter>;
export declare const AnalysisSynonymTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"synonym">;
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisSynonymTokenFilter = z.infer<typeof AnalysisSynonymTokenFilter>;
export declare const AnalysisThaiTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"thai">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisThaiTokenizer = z.infer<typeof AnalysisThaiTokenizer>;
export declare const AnalysisTrimTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"trim">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisTrimTokenFilter = z.infer<typeof AnalysisTrimTokenFilter>;
export declare const AnalysisTruncateTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"truncate">;
    length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisTruncateTokenFilter = z.infer<typeof AnalysisTruncateTokenFilter>;
export declare const AnalysisUniqueTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"unique">;
    only_on_same_position: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisUniqueTokenFilter = z.infer<typeof AnalysisUniqueTokenFilter>;
export declare const AnalysisUppercaseTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"uppercase">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisUppercaseTokenFilter = z.infer<typeof AnalysisUppercaseTokenFilter>;
export declare const AnalysisWordDelimiterTokenFilterBase: z.ZodObject<{
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisWordDelimiterTokenFilterBase = z.infer<typeof AnalysisWordDelimiterTokenFilterBase>;
export declare const AnalysisWordDelimiterGraphTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"word_delimiter_graph">;
    adjust_offsets: z.ZodOptional<z.ZodBoolean>;
    ignore_keywords: z.ZodOptional<z.ZodBoolean>;
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisWordDelimiterGraphTokenFilter = z.infer<typeof AnalysisWordDelimiterGraphTokenFilter>;
export declare const AnalysisWordDelimiterTokenFilter: z.ZodObject<{
    type: z.ZodLiteral<"word_delimiter">;
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisWordDelimiterTokenFilter = z.infer<typeof AnalysisWordDelimiterTokenFilter>;
export declare const AnalysisTokenFilterDefinition: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"apostrophe">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"arabic_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"arabic_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"asciifolding">;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"bengali_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"brazilian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"cjk_bigram">;
    ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        han: "han";
        hangul: "hangul";
        hiragana: "hiragana";
        katakana: "katakana";
    }>>>;
    output_unigrams: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"cjk_width">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"classic">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"common_grams">;
    common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    common_words_path: z.ZodOptional<z.ZodString>;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    query_mode: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"condition">;
    filter: z.ZodArray<z.ZodString>;
    script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"czech_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"decimal_digit">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"delimited_payload">;
    delimiter: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        int: "int";
        float: "float";
        identity: "identity";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"dutch_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"edge_ngram">;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    side: z.ZodOptional<z.ZodEnum<{
        front: "front";
        back: "back";
    }>>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"elision">;
    articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    articles_path: z.ZodOptional<z.ZodString>;
    articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"fingerprint">;
    max_output_size: z.ZodOptional<z.ZodNumber>;
    separator: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"flatten_graph">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"french_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"german_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"german_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"hindi_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"hunspell">;
    dedup: z.ZodOptional<z.ZodBoolean>;
    dictionary: z.ZodOptional<z.ZodString>;
    locale: z.ZodString;
    lang: z.ZodString;
    language: z.ZodString;
    longest_only: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"hyphenation_decompounder">;
    hyphenation_patterns_path: z.ZodString;
    no_sub_matches: z.ZodOptional<z.ZodBoolean>;
    no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"indic_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keep_types">;
    mode: z.ZodOptional<z.ZodEnum<{
        exclude: "exclude";
        include: "include";
    }>>;
    types: z.ZodArray<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keep">;
    keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    keep_words_case: z.ZodOptional<z.ZodBoolean>;
    keep_words_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keyword_marker">;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    keywords_path: z.ZodOptional<z.ZodString>;
    keywords_pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keyword_repeat">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kstem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"length">;
    max: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"limit">;
    consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
    max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"lowercase">;
    language: z.ZodOptional<z.ZodEnum<{
        greek: "greek";
        irish: "irish";
        turkish: "turkish";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"min_hash">;
    bucket_count: z.ZodOptional<z.ZodNumber>;
    hash_count: z.ZodOptional<z.ZodNumber>;
    hash_set_size: z.ZodOptional<z.ZodNumber>;
    with_rotation: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"multiplexer">;
    filters: z.ZodArray<z.ZodString>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ngram">;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"nori_part_of_speech">;
    stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern_capture">;
    patterns: z.ZodArray<z.ZodString>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern_replace">;
    all: z.ZodOptional<z.ZodBoolean>;
    flags: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    replacement: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"persian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"persian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"porter_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"predicate_token_filter">;
    script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"remove_duplicates">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"reverse">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"russian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"scandinavian_folding">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"scandinavian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"serbian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"shingle">;
    filler_token: z.ZodOptional<z.ZodString>;
    max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    output_unigrams: z.ZodOptional<z.ZodBoolean>;
    output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
    token_separator: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"snowball">;
    language: z.ZodOptional<z.ZodEnum<{
        Arabic: "Arabic";
        Armenian: "Armenian";
        Basque: "Basque";
        Catalan: "Catalan";
        Danish: "Danish";
        Dutch: "Dutch";
        English: "English";
        Estonian: "Estonian";
        Finnish: "Finnish";
        French: "French";
        German: "German";
        German2: "German2";
        Hungarian: "Hungarian";
        Italian: "Italian";
        Irish: "Irish";
        Kp: "Kp";
        Lithuanian: "Lithuanian";
        Lovins: "Lovins";
        Norwegian: "Norwegian";
        Porter: "Porter";
        Portuguese: "Portuguese";
        Romanian: "Romanian";
        Russian: "Russian";
        Serbian: "Serbian";
        Spanish: "Spanish";
        Swedish: "Swedish";
        Turkish: "Turkish";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"sorani_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stemmer_override">;
    rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    rules_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stemmer">;
    language: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stop">;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    remove_trailing: z.ZodOptional<z.ZodBoolean>;
    stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    stopwords_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"synonym_graph">;
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"synonym">;
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"trim">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"truncate">;
    length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"unique">;
    only_on_same_position: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"uppercase">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"word_delimiter_graph">;
    adjust_offsets: z.ZodOptional<z.ZodBoolean>;
    ignore_keywords: z.ZodOptional<z.ZodBoolean>;
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"word_delimiter">;
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ja_stop">;
    stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_stemmer">;
    minimum_length: z.ZodNumber;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_readingform">;
    use_romaji: z.ZodBoolean;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_part_of_speech">;
    stoptags: z.ZodArray<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_collation">;
    alternate: z.ZodOptional<z.ZodEnum<{
        shifted: "shifted";
        "non-ignorable": "non-ignorable";
    }>>;
    caseFirst: z.ZodOptional<z.ZodEnum<{
        lower: "lower";
        upper: "upper";
    }>>;
    caseLevel: z.ZodOptional<z.ZodBoolean>;
    country: z.ZodOptional<z.ZodString>;
    decomposition: z.ZodOptional<z.ZodEnum<{
        no: "no";
        identical: "identical";
    }>>;
    hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    numeric: z.ZodOptional<z.ZodBoolean>;
    rules: z.ZodOptional<z.ZodString>;
    strength: z.ZodOptional<z.ZodEnum<{
        identical: "identical";
        primary: "primary";
        secondary: "secondary";
        tertiary: "tertiary";
        quaternary: "quaternary";
    }>>;
    variableTop: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_folding">;
    unicode_set_filter: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_normalizer">;
    name: z.ZodEnum<{
        nfc: "nfc";
        nfkc: "nfkc";
        nfkc_cf: "nfkc_cf";
    }>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_transform">;
    dir: z.ZodOptional<z.ZodEnum<{
        reverse: "reverse";
        forward: "forward";
    }>>;
    id: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"phonetic">;
    encoder: z.ZodEnum<{
        metaphone: "metaphone";
        double_metaphone: "double_metaphone";
        soundex: "soundex";
        refined_soundex: "refined_soundex";
        caverphone1: "caverphone1";
        caverphone2: "caverphone2";
        cologne: "cologne";
        nysiis: "nysiis";
        koelnerphonetik: "koelnerphonetik";
        haasephonetik: "haasephonetik";
        beider_morse: "beider_morse";
        daitch_mokotoff: "daitch_mokotoff";
    }>;
    languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        any: "any";
        english: "english";
        french: "french";
        german: "german";
        hungarian: "hungarian";
        romanian: "romanian";
        russian: "russian";
        spanish: "spanish";
        common: "common";
        cyrillic: "cyrillic";
        hebrew: "hebrew";
        polish: "polish";
    }>, z.ZodArray<z.ZodEnum<{
        any: "any";
        english: "english";
        french: "french";
        german: "german";
        hungarian: "hungarian";
        romanian: "romanian";
        russian: "russian";
        spanish: "spanish";
        common: "common";
        cyrillic: "cyrillic";
        hebrew: "hebrew";
        polish: "polish";
    }>>]>>;
    max_code_len: z.ZodOptional<z.ZodNumber>;
    name_type: z.ZodOptional<z.ZodEnum<{
        generic: "generic";
        ashkenazi: "ashkenazi";
        sephardic: "sephardic";
    }>>;
    replace: z.ZodOptional<z.ZodBoolean>;
    rule_type: z.ZodOptional<z.ZodEnum<{
        approx: "approx";
        exact: "exact";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"dictionary_decompounder">;
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type AnalysisTokenFilterDefinition = z.infer<typeof AnalysisTokenFilterDefinition>;
export declare const AnalysisTokenFilter: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"apostrophe">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"arabic_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"arabic_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"asciifolding">;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"bengali_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"brazilian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"cjk_bigram">;
    ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        han: "han";
        hangul: "hangul";
        hiragana: "hiragana";
        katakana: "katakana";
    }>>>;
    output_unigrams: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"cjk_width">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"classic">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"common_grams">;
    common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    common_words_path: z.ZodOptional<z.ZodString>;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    query_mode: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"condition">;
    filter: z.ZodArray<z.ZodString>;
    script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"czech_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"decimal_digit">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"delimited_payload">;
    delimiter: z.ZodOptional<z.ZodString>;
    encoding: z.ZodOptional<z.ZodEnum<{
        int: "int";
        float: "float";
        identity: "identity";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"dutch_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"edge_ngram">;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    side: z.ZodOptional<z.ZodEnum<{
        front: "front";
        back: "back";
    }>>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"elision">;
    articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    articles_path: z.ZodOptional<z.ZodString>;
    articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"fingerprint">;
    max_output_size: z.ZodOptional<z.ZodNumber>;
    separator: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"flatten_graph">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"french_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"german_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"german_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"hindi_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"hunspell">;
    dedup: z.ZodOptional<z.ZodBoolean>;
    dictionary: z.ZodOptional<z.ZodString>;
    locale: z.ZodString;
    lang: z.ZodString;
    language: z.ZodString;
    longest_only: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"hyphenation_decompounder">;
    hyphenation_patterns_path: z.ZodString;
    no_sub_matches: z.ZodOptional<z.ZodBoolean>;
    no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"indic_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keep_types">;
    mode: z.ZodOptional<z.ZodEnum<{
        exclude: "exclude";
        include: "include";
    }>>;
    types: z.ZodArray<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keep">;
    keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    keep_words_case: z.ZodOptional<z.ZodBoolean>;
    keep_words_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keyword_marker">;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    keywords_path: z.ZodOptional<z.ZodString>;
    keywords_pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keyword_repeat">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kstem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"length">;
    max: z.ZodOptional<z.ZodNumber>;
    min: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"limit">;
    consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
    max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"lowercase">;
    language: z.ZodOptional<z.ZodEnum<{
        greek: "greek";
        irish: "irish";
        turkish: "turkish";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"min_hash">;
    bucket_count: z.ZodOptional<z.ZodNumber>;
    hash_count: z.ZodOptional<z.ZodNumber>;
    hash_set_size: z.ZodOptional<z.ZodNumber>;
    with_rotation: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"multiplexer">;
    filters: z.ZodArray<z.ZodString>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ngram">;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"nori_part_of_speech">;
    stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern_capture">;
    patterns: z.ZodArray<z.ZodString>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern_replace">;
    all: z.ZodOptional<z.ZodBoolean>;
    flags: z.ZodOptional<z.ZodString>;
    pattern: z.ZodString;
    replacement: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"persian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"persian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"porter_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"predicate_token_filter">;
    script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
        source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
        id: z.ZodOptional<z.ZodString>;
        params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            painless: "painless";
            expression: "expression";
            mustache: "mustache";
            java: "java";
        }>, z.ZodString]>>;
        options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"remove_duplicates">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"reverse">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"russian_stem">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"scandinavian_folding">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"scandinavian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"serbian_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"shingle">;
    filler_token: z.ZodOptional<z.ZodString>;
    max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    output_unigrams: z.ZodOptional<z.ZodBoolean>;
    output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
    token_separator: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"snowball">;
    language: z.ZodOptional<z.ZodEnum<{
        Arabic: "Arabic";
        Armenian: "Armenian";
        Basque: "Basque";
        Catalan: "Catalan";
        Danish: "Danish";
        Dutch: "Dutch";
        English: "English";
        Estonian: "Estonian";
        Finnish: "Finnish";
        French: "French";
        German: "German";
        German2: "German2";
        Hungarian: "Hungarian";
        Italian: "Italian";
        Irish: "Irish";
        Kp: "Kp";
        Lithuanian: "Lithuanian";
        Lovins: "Lovins";
        Norwegian: "Norwegian";
        Porter: "Porter";
        Portuguese: "Portuguese";
        Romanian: "Romanian";
        Russian: "Russian";
        Serbian: "Serbian";
        Spanish: "Spanish";
        Swedish: "Swedish";
        Turkish: "Turkish";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"sorani_normalization">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stemmer_override">;
    rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    rules_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stemmer">;
    language: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"stop">;
    ignore_case: z.ZodOptional<z.ZodBoolean>;
    remove_trailing: z.ZodOptional<z.ZodBoolean>;
    stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    stopwords_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"synonym_graph">;
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"synonym">;
    expand: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<{
        solr: "solr";
        wordnet: "wordnet";
    }>>;
    lenient: z.ZodOptional<z.ZodBoolean>;
    synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
    synonyms_path: z.ZodOptional<z.ZodString>;
    synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    tokenizer: z.ZodOptional<z.ZodString>;
    updateable: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"trim">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"truncate">;
    length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"unique">;
    only_on_same_position: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"uppercase">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"word_delimiter_graph">;
    adjust_offsets: z.ZodOptional<z.ZodBoolean>;
    ignore_keywords: z.ZodOptional<z.ZodBoolean>;
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"word_delimiter">;
    catenate_all: z.ZodOptional<z.ZodBoolean>;
    catenate_numbers: z.ZodOptional<z.ZodBoolean>;
    catenate_words: z.ZodOptional<z.ZodBoolean>;
    generate_number_parts: z.ZodOptional<z.ZodBoolean>;
    generate_word_parts: z.ZodOptional<z.ZodBoolean>;
    preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
    protected_words_path: z.ZodOptional<z.ZodString>;
    split_on_case_change: z.ZodOptional<z.ZodBoolean>;
    split_on_numerics: z.ZodOptional<z.ZodBoolean>;
    stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
    type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
    type_table_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ja_stop">;
    stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        _arabic_: "_arabic_";
        _armenian_: "_armenian_";
        _basque_: "_basque_";
        _bengali_: "_bengali_";
        _brazilian_: "_brazilian_";
        _bulgarian_: "_bulgarian_";
        _catalan_: "_catalan_";
        _cjk_: "_cjk_";
        _czech_: "_czech_";
        _danish_: "_danish_";
        _dutch_: "_dutch_";
        _english_: "_english_";
        _estonian_: "_estonian_";
        _finnish_: "_finnish_";
        _french_: "_french_";
        _galician_: "_galician_";
        _german_: "_german_";
        _greek_: "_greek_";
        _hindi_: "_hindi_";
        _hungarian_: "_hungarian_";
        _indonesian_: "_indonesian_";
        _irish_: "_irish_";
        _italian_: "_italian_";
        _latvian_: "_latvian_";
        _lithuanian_: "_lithuanian_";
        _norwegian_: "_norwegian_";
        _persian_: "_persian_";
        _portuguese_: "_portuguese_";
        _romanian_: "_romanian_";
        _russian_: "_russian_";
        _serbian_: "_serbian_";
        _sorani_: "_sorani_";
        _spanish_: "_spanish_";
        _swedish_: "_swedish_";
        _thai_: "_thai_";
        _turkish_: "_turkish_";
        _none_: "_none_";
    }>, z.ZodArray<z.ZodString>]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_stemmer">;
    minimum_length: z.ZodNumber;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_readingform">;
    use_romaji: z.ZodBoolean;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_part_of_speech">;
    stoptags: z.ZodArray<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_collation">;
    alternate: z.ZodOptional<z.ZodEnum<{
        shifted: "shifted";
        "non-ignorable": "non-ignorable";
    }>>;
    caseFirst: z.ZodOptional<z.ZodEnum<{
        lower: "lower";
        upper: "upper";
    }>>;
    caseLevel: z.ZodOptional<z.ZodBoolean>;
    country: z.ZodOptional<z.ZodString>;
    decomposition: z.ZodOptional<z.ZodEnum<{
        no: "no";
        identical: "identical";
    }>>;
    hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
    language: z.ZodOptional<z.ZodString>;
    numeric: z.ZodOptional<z.ZodBoolean>;
    rules: z.ZodOptional<z.ZodString>;
    strength: z.ZodOptional<z.ZodEnum<{
        identical: "identical";
        primary: "primary";
        secondary: "secondary";
        tertiary: "tertiary";
        quaternary: "quaternary";
    }>>;
    variableTop: z.ZodOptional<z.ZodString>;
    variant: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_folding">;
    unicode_set_filter: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_normalizer">;
    name: z.ZodEnum<{
        nfc: "nfc";
        nfkc: "nfkc";
        nfkc_cf: "nfkc_cf";
    }>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_transform">;
    dir: z.ZodOptional<z.ZodEnum<{
        reverse: "reverse";
        forward: "forward";
    }>>;
    id: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"phonetic">;
    encoder: z.ZodEnum<{
        metaphone: "metaphone";
        double_metaphone: "double_metaphone";
        soundex: "soundex";
        refined_soundex: "refined_soundex";
        caverphone1: "caverphone1";
        caverphone2: "caverphone2";
        cologne: "cologne";
        nysiis: "nysiis";
        koelnerphonetik: "koelnerphonetik";
        haasephonetik: "haasephonetik";
        beider_morse: "beider_morse";
        daitch_mokotoff: "daitch_mokotoff";
    }>;
    languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        any: "any";
        english: "english";
        french: "french";
        german: "german";
        hungarian: "hungarian";
        romanian: "romanian";
        russian: "russian";
        spanish: "spanish";
        common: "common";
        cyrillic: "cyrillic";
        hebrew: "hebrew";
        polish: "polish";
    }>, z.ZodArray<z.ZodEnum<{
        any: "any";
        english: "english";
        french: "french";
        german: "german";
        hungarian: "hungarian";
        romanian: "romanian";
        russian: "russian";
        spanish: "spanish";
        common: "common";
        cyrillic: "cyrillic";
        hebrew: "hebrew";
        polish: "polish";
    }>>]>>;
    max_code_len: z.ZodOptional<z.ZodNumber>;
    name_type: z.ZodOptional<z.ZodEnum<{
        generic: "generic";
        ashkenazi: "ashkenazi";
        sephardic: "sephardic";
    }>>;
    replace: z.ZodOptional<z.ZodBoolean>;
    rule_type: z.ZodOptional<z.ZodEnum<{
        approx: "approx";
        exact: "exact";
    }>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"dictionary_decompounder">;
    max_subword_size: z.ZodOptional<z.ZodNumber>;
    min_subword_size: z.ZodOptional<z.ZodNumber>;
    min_word_size: z.ZodOptional<z.ZodNumber>;
    only_longest_match: z.ZodOptional<z.ZodBoolean>;
    word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
    word_list_path: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>]>;
export type AnalysisTokenFilter = z.infer<typeof AnalysisTokenFilter>;
export declare const AnalysisUaxEmailUrlTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"uax_url_email">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisUaxEmailUrlTokenizer = z.infer<typeof AnalysisUaxEmailUrlTokenizer>;
export declare const AnalysisWhitespaceTokenizer: z.ZodObject<{
    type: z.ZodLiteral<"whitespace">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AnalysisWhitespaceTokenizer = z.infer<typeof AnalysisWhitespaceTokenizer>;
export declare const AnalysisTokenizerDefinition: z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"char_group">;
    tokenize_on_chars: z.ZodArray<z.ZodString>;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"classic">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"edge_ngram">;
    custom_token_chars: z.ZodOptional<z.ZodString>;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        symbol: "symbol";
        custom: "custom";
        whitespace: "whitespace";
        letter: "letter";
        digit: "digit";
        punctuation: "punctuation";
    }>>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keyword">;
    buffer_size: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"letter">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"lowercase">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ngram">;
    custom_token_chars: z.ZodOptional<z.ZodString>;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        symbol: "symbol";
        custom: "custom";
        whitespace: "whitespace";
        letter: "letter";
        digit: "digit";
        punctuation: "punctuation";
    }>>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"path_hierarchy">;
    buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    delimiter: z.ZodOptional<z.ZodString>;
    replacement: z.ZodOptional<z.ZodString>;
    reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern">;
    flags: z.ZodOptional<z.ZodString>;
    group: z.ZodOptional<z.ZodNumber>;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"simple_pattern">;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"simple_pattern_split">;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"standard">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"thai">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"uax_url_email">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"whitespace">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_tokenizer">;
    rule_files: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_tokenizer">;
    discard_punctuation: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodEnum<{
        search: "search";
        normal: "normal";
        extended: "extended";
    }>;
    nbest_cost: z.ZodOptional<z.ZodNumber>;
    nbest_examples: z.ZodOptional<z.ZodString>;
    user_dictionary: z.ZodOptional<z.ZodString>;
    user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    discard_compound_token: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"nori_tokenizer">;
    decompound_mode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        discard: "discard";
        mixed: "mixed";
    }>>;
    discard_punctuation: z.ZodOptional<z.ZodBoolean>;
    user_dictionary: z.ZodOptional<z.ZodString>;
    user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type AnalysisTokenizerDefinition = z.infer<typeof AnalysisTokenizerDefinition>;
export declare const AnalysisTokenizer: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    type: z.ZodLiteral<"char_group">;
    tokenize_on_chars: z.ZodArray<z.ZodString>;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"classic">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"edge_ngram">;
    custom_token_chars: z.ZodOptional<z.ZodString>;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        symbol: "symbol";
        custom: "custom";
        whitespace: "whitespace";
        letter: "letter";
        digit: "digit";
        punctuation: "punctuation";
    }>>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"keyword">;
    buffer_size: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"letter">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"lowercase">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"ngram">;
    custom_token_chars: z.ZodOptional<z.ZodString>;
    max_gram: z.ZodOptional<z.ZodNumber>;
    min_gram: z.ZodOptional<z.ZodNumber>;
    token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        symbol: "symbol";
        custom: "custom";
        whitespace: "whitespace";
        letter: "letter";
        digit: "digit";
        punctuation: "punctuation";
    }>>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"path_hierarchy">;
    buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    delimiter: z.ZodOptional<z.ZodString>;
    replacement: z.ZodOptional<z.ZodString>;
    reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"pattern">;
    flags: z.ZodOptional<z.ZodString>;
    group: z.ZodOptional<z.ZodNumber>;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"simple_pattern">;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"simple_pattern_split">;
    pattern: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"standard">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"thai">;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"uax_url_email">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"whitespace">;
    max_token_length: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"icu_tokenizer">;
    rule_files: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"kuromoji_tokenizer">;
    discard_punctuation: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodEnum<{
        search: "search";
        normal: "normal";
        extended: "extended";
    }>;
    nbest_cost: z.ZodOptional<z.ZodNumber>;
    nbest_examples: z.ZodOptional<z.ZodString>;
    user_dictionary: z.ZodOptional<z.ZodString>;
    user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    discard_compound_token: z.ZodOptional<z.ZodBoolean>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodLiteral<"nori_tokenizer">;
    decompound_mode: z.ZodOptional<z.ZodEnum<{
        none: "none";
        discard: "discard";
        mixed: "mixed";
    }>>;
    discard_punctuation: z.ZodOptional<z.ZodBoolean>;
    user_dictionary: z.ZodOptional<z.ZodString>;
    user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>]>;
export type AnalysisTokenizer = z.infer<typeof AnalysisTokenizer>;
export declare const MlCategorizationAnalyzerDefinition: z.ZodObject<{
    char_filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"html_strip">;
        escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"mapping">;
        mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mappings_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern_replace">;
        flags: z.ZodOptional<z.ZodString>;
        pattern: z.ZodString;
        replacement: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_normalizer">;
        mode: z.ZodOptional<z.ZodEnum<{
            decompose: "decompose";
            compose: "compose";
        }>>;
        name: z.ZodOptional<z.ZodEnum<{
            nfc: "nfc";
            nfkc: "nfkc";
            nfkc_cf: "nfkc_cf";
        }>>;
        unicode_set_filter: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_iteration_mark">;
        normalize_kana: z.ZodBoolean;
        normalize_kanji: z.ZodBoolean;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>]>>>;
    filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"apostrophe">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"arabic_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"arabic_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"asciifolding">;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"bengali_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"brazilian_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cjk_bigram">;
        ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            han: "han";
            hangul: "hangul";
            hiragana: "hiragana";
            katakana: "katakana";
        }>>>;
        output_unigrams: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cjk_width">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"classic">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"common_grams">;
        common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        common_words_path: z.ZodOptional<z.ZodString>;
        ignore_case: z.ZodOptional<z.ZodBoolean>;
        query_mode: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"condition">;
        filter: z.ZodArray<z.ZodString>;
        script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"czech_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"decimal_digit">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"delimited_payload">;
        delimiter: z.ZodOptional<z.ZodString>;
        encoding: z.ZodOptional<z.ZodEnum<{
            int: "int";
            float: "float";
            identity: "identity";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"dutch_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"edge_ngram">;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        side: z.ZodOptional<z.ZodEnum<{
            front: "front";
            back: "back";
        }>>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"elision">;
        articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
        articles_path: z.ZodOptional<z.ZodString>;
        articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"fingerprint">;
        max_output_size: z.ZodOptional<z.ZodNumber>;
        separator: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"flatten_graph">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"french_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"german_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"german_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"hindi_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"hunspell">;
        dedup: z.ZodOptional<z.ZodBoolean>;
        dictionary: z.ZodOptional<z.ZodString>;
        locale: z.ZodString;
        lang: z.ZodString;
        language: z.ZodString;
        longest_only: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"hyphenation_decompounder">;
        hyphenation_patterns_path: z.ZodString;
        no_sub_matches: z.ZodOptional<z.ZodBoolean>;
        no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
        max_subword_size: z.ZodOptional<z.ZodNumber>;
        min_subword_size: z.ZodOptional<z.ZodNumber>;
        min_word_size: z.ZodOptional<z.ZodNumber>;
        only_longest_match: z.ZodOptional<z.ZodBoolean>;
        word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
        word_list_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"indic_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keep_types">;
        mode: z.ZodOptional<z.ZodEnum<{
            exclude: "exclude";
            include: "include";
        }>>;
        types: z.ZodArray<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keep">;
        keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        keep_words_case: z.ZodOptional<z.ZodBoolean>;
        keep_words_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keyword_marker">;
        ignore_case: z.ZodOptional<z.ZodBoolean>;
        keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        keywords_path: z.ZodOptional<z.ZodString>;
        keywords_pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keyword_repeat">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kstem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"length">;
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"limit">;
        consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
        max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"lowercase">;
        language: z.ZodOptional<z.ZodEnum<{
            greek: "greek";
            irish: "irish";
            turkish: "turkish";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"min_hash">;
        bucket_count: z.ZodOptional<z.ZodNumber>;
        hash_count: z.ZodOptional<z.ZodNumber>;
        hash_set_size: z.ZodOptional<z.ZodNumber>;
        with_rotation: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"multiplexer">;
        filters: z.ZodArray<z.ZodString>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ngram">;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"nori_part_of_speech">;
        stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern_capture">;
        patterns: z.ZodArray<z.ZodString>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern_replace">;
        all: z.ZodOptional<z.ZodBoolean>;
        flags: z.ZodOptional<z.ZodString>;
        pattern: z.ZodString;
        replacement: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"persian_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"persian_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"porter_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"predicate_token_filter">;
        script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"remove_duplicates">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reverse">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"russian_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"scandinavian_folding">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"scandinavian_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"serbian_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"shingle">;
        filler_token: z.ZodOptional<z.ZodString>;
        max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        output_unigrams: z.ZodOptional<z.ZodBoolean>;
        output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
        token_separator: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"snowball">;
        language: z.ZodOptional<z.ZodEnum<{
            Arabic: "Arabic";
            Armenian: "Armenian";
            Basque: "Basque";
            Catalan: "Catalan";
            Danish: "Danish";
            Dutch: "Dutch";
            English: "English";
            Estonian: "Estonian";
            Finnish: "Finnish";
            French: "French";
            German: "German";
            German2: "German2";
            Hungarian: "Hungarian";
            Italian: "Italian";
            Irish: "Irish";
            Kp: "Kp";
            Lithuanian: "Lithuanian";
            Lovins: "Lovins";
            Norwegian: "Norwegian";
            Porter: "Porter";
            Portuguese: "Portuguese";
            Romanian: "Romanian";
            Russian: "Russian";
            Serbian: "Serbian";
            Spanish: "Spanish";
            Swedish: "Swedish";
            Turkish: "Turkish";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"sorani_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stemmer_override">;
        rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
        rules_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stemmer">;
        language: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stop">;
        ignore_case: z.ZodOptional<z.ZodBoolean>;
        remove_trailing: z.ZodOptional<z.ZodBoolean>;
        stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            _arabic_: "_arabic_";
            _armenian_: "_armenian_";
            _basque_: "_basque_";
            _bengali_: "_bengali_";
            _brazilian_: "_brazilian_";
            _bulgarian_: "_bulgarian_";
            _catalan_: "_catalan_";
            _cjk_: "_cjk_";
            _czech_: "_czech_";
            _danish_: "_danish_";
            _dutch_: "_dutch_";
            _english_: "_english_";
            _estonian_: "_estonian_";
            _finnish_: "_finnish_";
            _french_: "_french_";
            _galician_: "_galician_";
            _german_: "_german_";
            _greek_: "_greek_";
            _hindi_: "_hindi_";
            _hungarian_: "_hungarian_";
            _indonesian_: "_indonesian_";
            _irish_: "_irish_";
            _italian_: "_italian_";
            _latvian_: "_latvian_";
            _lithuanian_: "_lithuanian_";
            _norwegian_: "_norwegian_";
            _persian_: "_persian_";
            _portuguese_: "_portuguese_";
            _romanian_: "_romanian_";
            _russian_: "_russian_";
            _serbian_: "_serbian_";
            _sorani_: "_sorani_";
            _spanish_: "_spanish_";
            _swedish_: "_swedish_";
            _thai_: "_thai_";
            _turkish_: "_turkish_";
            _none_: "_none_";
        }>, z.ZodArray<z.ZodString>]>>;
        stopwords_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"synonym_graph">;
        expand: z.ZodOptional<z.ZodBoolean>;
        format: z.ZodOptional<z.ZodEnum<{
            solr: "solr";
            wordnet: "wordnet";
        }>>;
        lenient: z.ZodOptional<z.ZodBoolean>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
        synonyms_path: z.ZodOptional<z.ZodString>;
        synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        tokenizer: z.ZodOptional<z.ZodString>;
        updateable: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"synonym">;
        expand: z.ZodOptional<z.ZodBoolean>;
        format: z.ZodOptional<z.ZodEnum<{
            solr: "solr";
            wordnet: "wordnet";
        }>>;
        lenient: z.ZodOptional<z.ZodBoolean>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
        synonyms_path: z.ZodOptional<z.ZodString>;
        synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        tokenizer: z.ZodOptional<z.ZodString>;
        updateable: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"trim">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"truncate">;
        length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"unique">;
        only_on_same_position: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"uppercase">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"word_delimiter_graph">;
        adjust_offsets: z.ZodOptional<z.ZodBoolean>;
        ignore_keywords: z.ZodOptional<z.ZodBoolean>;
        catenate_all: z.ZodOptional<z.ZodBoolean>;
        catenate_numbers: z.ZodOptional<z.ZodBoolean>;
        catenate_words: z.ZodOptional<z.ZodBoolean>;
        generate_number_parts: z.ZodOptional<z.ZodBoolean>;
        generate_word_parts: z.ZodOptional<z.ZodBoolean>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        protected_words_path: z.ZodOptional<z.ZodString>;
        split_on_case_change: z.ZodOptional<z.ZodBoolean>;
        split_on_numerics: z.ZodOptional<z.ZodBoolean>;
        stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
        type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type_table_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"word_delimiter">;
        catenate_all: z.ZodOptional<z.ZodBoolean>;
        catenate_numbers: z.ZodOptional<z.ZodBoolean>;
        catenate_words: z.ZodOptional<z.ZodBoolean>;
        generate_number_parts: z.ZodOptional<z.ZodBoolean>;
        generate_word_parts: z.ZodOptional<z.ZodBoolean>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        protected_words_path: z.ZodOptional<z.ZodString>;
        split_on_case_change: z.ZodOptional<z.ZodBoolean>;
        split_on_numerics: z.ZodOptional<z.ZodBoolean>;
        stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
        type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type_table_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ja_stop">;
        stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            _arabic_: "_arabic_";
            _armenian_: "_armenian_";
            _basque_: "_basque_";
            _bengali_: "_bengali_";
            _brazilian_: "_brazilian_";
            _bulgarian_: "_bulgarian_";
            _catalan_: "_catalan_";
            _cjk_: "_cjk_";
            _czech_: "_czech_";
            _danish_: "_danish_";
            _dutch_: "_dutch_";
            _english_: "_english_";
            _estonian_: "_estonian_";
            _finnish_: "_finnish_";
            _french_: "_french_";
            _galician_: "_galician_";
            _german_: "_german_";
            _greek_: "_greek_";
            _hindi_: "_hindi_";
            _hungarian_: "_hungarian_";
            _indonesian_: "_indonesian_";
            _irish_: "_irish_";
            _italian_: "_italian_";
            _latvian_: "_latvian_";
            _lithuanian_: "_lithuanian_";
            _norwegian_: "_norwegian_";
            _persian_: "_persian_";
            _portuguese_: "_portuguese_";
            _romanian_: "_romanian_";
            _russian_: "_russian_";
            _serbian_: "_serbian_";
            _sorani_: "_sorani_";
            _spanish_: "_spanish_";
            _swedish_: "_swedish_";
            _thai_: "_thai_";
            _turkish_: "_turkish_";
            _none_: "_none_";
        }>, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_stemmer">;
        minimum_length: z.ZodNumber;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_readingform">;
        use_romaji: z.ZodBoolean;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_part_of_speech">;
        stoptags: z.ZodArray<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_collation">;
        alternate: z.ZodOptional<z.ZodEnum<{
            shifted: "shifted";
            "non-ignorable": "non-ignorable";
        }>>;
        caseFirst: z.ZodOptional<z.ZodEnum<{
            lower: "lower";
            upper: "upper";
        }>>;
        caseLevel: z.ZodOptional<z.ZodBoolean>;
        country: z.ZodOptional<z.ZodString>;
        decomposition: z.ZodOptional<z.ZodEnum<{
            no: "no";
            identical: "identical";
        }>>;
        hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
        language: z.ZodOptional<z.ZodString>;
        numeric: z.ZodOptional<z.ZodBoolean>;
        rules: z.ZodOptional<z.ZodString>;
        strength: z.ZodOptional<z.ZodEnum<{
            identical: "identical";
            primary: "primary";
            secondary: "secondary";
            tertiary: "tertiary";
            quaternary: "quaternary";
        }>>;
        variableTop: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_folding">;
        unicode_set_filter: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_normalizer">;
        name: z.ZodEnum<{
            nfc: "nfc";
            nfkc: "nfkc";
            nfkc_cf: "nfkc_cf";
        }>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_transform">;
        dir: z.ZodOptional<z.ZodEnum<{
            reverse: "reverse";
            forward: "forward";
        }>>;
        id: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"phonetic">;
        encoder: z.ZodEnum<{
            metaphone: "metaphone";
            double_metaphone: "double_metaphone";
            soundex: "soundex";
            refined_soundex: "refined_soundex";
            caverphone1: "caverphone1";
            caverphone2: "caverphone2";
            cologne: "cologne";
            nysiis: "nysiis";
            koelnerphonetik: "koelnerphonetik";
            haasephonetik: "haasephonetik";
            beider_morse: "beider_morse";
            daitch_mokotoff: "daitch_mokotoff";
        }>;
        languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            any: "any";
            english: "english";
            french: "french";
            german: "german";
            hungarian: "hungarian";
            romanian: "romanian";
            russian: "russian";
            spanish: "spanish";
            common: "common";
            cyrillic: "cyrillic";
            hebrew: "hebrew";
            polish: "polish";
        }>, z.ZodArray<z.ZodEnum<{
            any: "any";
            english: "english";
            french: "french";
            german: "german";
            hungarian: "hungarian";
            romanian: "romanian";
            russian: "russian";
            spanish: "spanish";
            common: "common";
            cyrillic: "cyrillic";
            hebrew: "hebrew";
            polish: "polish";
        }>>]>>;
        max_code_len: z.ZodOptional<z.ZodNumber>;
        name_type: z.ZodOptional<z.ZodEnum<{
            generic: "generic";
            ashkenazi: "ashkenazi";
            sephardic: "sephardic";
        }>>;
        replace: z.ZodOptional<z.ZodBoolean>;
        rule_type: z.ZodOptional<z.ZodEnum<{
            approx: "approx";
            exact: "exact";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"dictionary_decompounder">;
        max_subword_size: z.ZodOptional<z.ZodNumber>;
        min_subword_size: z.ZodOptional<z.ZodNumber>;
        min_word_size: z.ZodOptional<z.ZodNumber>;
        only_longest_match: z.ZodOptional<z.ZodBoolean>;
        word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
        word_list_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>]>>>;
    tokenizer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"char_group">;
        tokenize_on_chars: z.ZodArray<z.ZodString>;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"classic">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"edge_ngram">;
        custom_token_chars: z.ZodOptional<z.ZodString>;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            symbol: "symbol";
            custom: "custom";
            whitespace: "whitespace";
            letter: "letter";
            digit: "digit";
            punctuation: "punctuation";
        }>>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keyword">;
        buffer_size: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"letter">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"lowercase">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ngram">;
        custom_token_chars: z.ZodOptional<z.ZodString>;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            symbol: "symbol";
            custom: "custom";
            whitespace: "whitespace";
            letter: "letter";
            digit: "digit";
            punctuation: "punctuation";
        }>>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"path_hierarchy">;
        buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        delimiter: z.ZodOptional<z.ZodString>;
        replacement: z.ZodOptional<z.ZodString>;
        reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern">;
        flags: z.ZodOptional<z.ZodString>;
        group: z.ZodOptional<z.ZodNumber>;
        pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"simple_pattern">;
        pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"simple_pattern_split">;
        pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"standard">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"thai">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"uax_url_email">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"whitespace">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_tokenizer">;
        rule_files: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_tokenizer">;
        discard_punctuation: z.ZodOptional<z.ZodBoolean>;
        mode: z.ZodEnum<{
            search: "search";
            normal: "normal";
            extended: "extended";
        }>;
        nbest_cost: z.ZodOptional<z.ZodNumber>;
        nbest_examples: z.ZodOptional<z.ZodString>;
        user_dictionary: z.ZodOptional<z.ZodString>;
        user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
        discard_compound_token: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"nori_tokenizer">;
        decompound_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            discard: "discard";
            mixed: "mixed";
        }>>;
        discard_punctuation: z.ZodOptional<z.ZodBoolean>;
        user_dictionary: z.ZodOptional<z.ZodString>;
        user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>]>>;
}, z.core.$strip>;
export type MlCategorizationAnalyzerDefinition = z.infer<typeof MlCategorizationAnalyzerDefinition>;
export declare const MlCategorizationAnalyzer: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    char_filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"html_strip">;
        escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"mapping">;
        mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
        mappings_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern_replace">;
        flags: z.ZodOptional<z.ZodString>;
        pattern: z.ZodString;
        replacement: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_normalizer">;
        mode: z.ZodOptional<z.ZodEnum<{
            decompose: "decompose";
            compose: "compose";
        }>>;
        name: z.ZodOptional<z.ZodEnum<{
            nfc: "nfc";
            nfkc: "nfkc";
            nfkc_cf: "nfkc_cf";
        }>>;
        unicode_set_filter: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_iteration_mark">;
        normalize_kana: z.ZodBoolean;
        normalize_kanji: z.ZodBoolean;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>]>>>;
    filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"apostrophe">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"arabic_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"arabic_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"asciifolding">;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"bengali_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"brazilian_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cjk_bigram">;
        ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            han: "han";
            hangul: "hangul";
            hiragana: "hiragana";
            katakana: "katakana";
        }>>>;
        output_unigrams: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"cjk_width">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"classic">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"common_grams">;
        common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        common_words_path: z.ZodOptional<z.ZodString>;
        ignore_case: z.ZodOptional<z.ZodBoolean>;
        query_mode: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"condition">;
        filter: z.ZodArray<z.ZodString>;
        script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"czech_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"decimal_digit">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"delimited_payload">;
        delimiter: z.ZodOptional<z.ZodString>;
        encoding: z.ZodOptional<z.ZodEnum<{
            int: "int";
            float: "float";
            identity: "identity";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"dutch_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"edge_ngram">;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        side: z.ZodOptional<z.ZodEnum<{
            front: "front";
            back: "back";
        }>>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"elision">;
        articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
        articles_path: z.ZodOptional<z.ZodString>;
        articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"fingerprint">;
        max_output_size: z.ZodOptional<z.ZodNumber>;
        separator: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"flatten_graph">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"french_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"german_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"german_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"hindi_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"hunspell">;
        dedup: z.ZodOptional<z.ZodBoolean>;
        dictionary: z.ZodOptional<z.ZodString>;
        locale: z.ZodString;
        lang: z.ZodString;
        language: z.ZodString;
        longest_only: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"hyphenation_decompounder">;
        hyphenation_patterns_path: z.ZodString;
        no_sub_matches: z.ZodOptional<z.ZodBoolean>;
        no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
        max_subword_size: z.ZodOptional<z.ZodNumber>;
        min_subword_size: z.ZodOptional<z.ZodNumber>;
        min_word_size: z.ZodOptional<z.ZodNumber>;
        only_longest_match: z.ZodOptional<z.ZodBoolean>;
        word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
        word_list_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"indic_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keep_types">;
        mode: z.ZodOptional<z.ZodEnum<{
            exclude: "exclude";
            include: "include";
        }>>;
        types: z.ZodArray<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keep">;
        keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        keep_words_case: z.ZodOptional<z.ZodBoolean>;
        keep_words_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keyword_marker">;
        ignore_case: z.ZodOptional<z.ZodBoolean>;
        keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        keywords_path: z.ZodOptional<z.ZodString>;
        keywords_pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keyword_repeat">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kstem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"length">;
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"limit">;
        consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
        max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"lowercase">;
        language: z.ZodOptional<z.ZodEnum<{
            greek: "greek";
            irish: "irish";
            turkish: "turkish";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"min_hash">;
        bucket_count: z.ZodOptional<z.ZodNumber>;
        hash_count: z.ZodOptional<z.ZodNumber>;
        hash_set_size: z.ZodOptional<z.ZodNumber>;
        with_rotation: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"multiplexer">;
        filters: z.ZodArray<z.ZodString>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ngram">;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"nori_part_of_speech">;
        stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern_capture">;
        patterns: z.ZodArray<z.ZodString>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern_replace">;
        all: z.ZodOptional<z.ZodBoolean>;
        flags: z.ZodOptional<z.ZodString>;
        pattern: z.ZodString;
        replacement: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"persian_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"persian_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"porter_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"predicate_token_filter">;
        script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
            source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
            id: z.ZodOptional<z.ZodString>;
            params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                painless: "painless";
                expression: "expression";
                mustache: "mustache";
                java: "java";
            }>, z.ZodString]>>;
            options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"remove_duplicates">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"reverse">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"russian_stem">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"scandinavian_folding">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"scandinavian_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"serbian_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"shingle">;
        filler_token: z.ZodOptional<z.ZodString>;
        max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        output_unigrams: z.ZodOptional<z.ZodBoolean>;
        output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
        token_separator: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"snowball">;
        language: z.ZodOptional<z.ZodEnum<{
            Arabic: "Arabic";
            Armenian: "Armenian";
            Basque: "Basque";
            Catalan: "Catalan";
            Danish: "Danish";
            Dutch: "Dutch";
            English: "English";
            Estonian: "Estonian";
            Finnish: "Finnish";
            French: "French";
            German: "German";
            German2: "German2";
            Hungarian: "Hungarian";
            Italian: "Italian";
            Irish: "Irish";
            Kp: "Kp";
            Lithuanian: "Lithuanian";
            Lovins: "Lovins";
            Norwegian: "Norwegian";
            Porter: "Porter";
            Portuguese: "Portuguese";
            Romanian: "Romanian";
            Russian: "Russian";
            Serbian: "Serbian";
            Spanish: "Spanish";
            Swedish: "Swedish";
            Turkish: "Turkish";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"sorani_normalization">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stemmer_override">;
        rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
        rules_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stemmer">;
        language: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"stop">;
        ignore_case: z.ZodOptional<z.ZodBoolean>;
        remove_trailing: z.ZodOptional<z.ZodBoolean>;
        stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            _arabic_: "_arabic_";
            _armenian_: "_armenian_";
            _basque_: "_basque_";
            _bengali_: "_bengali_";
            _brazilian_: "_brazilian_";
            _bulgarian_: "_bulgarian_";
            _catalan_: "_catalan_";
            _cjk_: "_cjk_";
            _czech_: "_czech_";
            _danish_: "_danish_";
            _dutch_: "_dutch_";
            _english_: "_english_";
            _estonian_: "_estonian_";
            _finnish_: "_finnish_";
            _french_: "_french_";
            _galician_: "_galician_";
            _german_: "_german_";
            _greek_: "_greek_";
            _hindi_: "_hindi_";
            _hungarian_: "_hungarian_";
            _indonesian_: "_indonesian_";
            _irish_: "_irish_";
            _italian_: "_italian_";
            _latvian_: "_latvian_";
            _lithuanian_: "_lithuanian_";
            _norwegian_: "_norwegian_";
            _persian_: "_persian_";
            _portuguese_: "_portuguese_";
            _romanian_: "_romanian_";
            _russian_: "_russian_";
            _serbian_: "_serbian_";
            _sorani_: "_sorani_";
            _spanish_: "_spanish_";
            _swedish_: "_swedish_";
            _thai_: "_thai_";
            _turkish_: "_turkish_";
            _none_: "_none_";
        }>, z.ZodArray<z.ZodString>]>>;
        stopwords_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"synonym_graph">;
        expand: z.ZodOptional<z.ZodBoolean>;
        format: z.ZodOptional<z.ZodEnum<{
            solr: "solr";
            wordnet: "wordnet";
        }>>;
        lenient: z.ZodOptional<z.ZodBoolean>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
        synonyms_path: z.ZodOptional<z.ZodString>;
        synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        tokenizer: z.ZodOptional<z.ZodString>;
        updateable: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"synonym">;
        expand: z.ZodOptional<z.ZodBoolean>;
        format: z.ZodOptional<z.ZodEnum<{
            solr: "solr";
            wordnet: "wordnet";
        }>>;
        lenient: z.ZodOptional<z.ZodBoolean>;
        synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
        synonyms_path: z.ZodOptional<z.ZodString>;
        synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        tokenizer: z.ZodOptional<z.ZodString>;
        updateable: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"trim">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"truncate">;
        length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"unique">;
        only_on_same_position: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"uppercase">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"word_delimiter_graph">;
        adjust_offsets: z.ZodOptional<z.ZodBoolean>;
        ignore_keywords: z.ZodOptional<z.ZodBoolean>;
        catenate_all: z.ZodOptional<z.ZodBoolean>;
        catenate_numbers: z.ZodOptional<z.ZodBoolean>;
        catenate_words: z.ZodOptional<z.ZodBoolean>;
        generate_number_parts: z.ZodOptional<z.ZodBoolean>;
        generate_word_parts: z.ZodOptional<z.ZodBoolean>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        protected_words_path: z.ZodOptional<z.ZodString>;
        split_on_case_change: z.ZodOptional<z.ZodBoolean>;
        split_on_numerics: z.ZodOptional<z.ZodBoolean>;
        stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
        type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type_table_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"word_delimiter">;
        catenate_all: z.ZodOptional<z.ZodBoolean>;
        catenate_numbers: z.ZodOptional<z.ZodBoolean>;
        catenate_words: z.ZodOptional<z.ZodBoolean>;
        generate_number_parts: z.ZodOptional<z.ZodBoolean>;
        generate_word_parts: z.ZodOptional<z.ZodBoolean>;
        preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
        protected_words_path: z.ZodOptional<z.ZodString>;
        split_on_case_change: z.ZodOptional<z.ZodBoolean>;
        split_on_numerics: z.ZodOptional<z.ZodBoolean>;
        stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
        type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type_table_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ja_stop">;
        stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            _arabic_: "_arabic_";
            _armenian_: "_armenian_";
            _basque_: "_basque_";
            _bengali_: "_bengali_";
            _brazilian_: "_brazilian_";
            _bulgarian_: "_bulgarian_";
            _catalan_: "_catalan_";
            _cjk_: "_cjk_";
            _czech_: "_czech_";
            _danish_: "_danish_";
            _dutch_: "_dutch_";
            _english_: "_english_";
            _estonian_: "_estonian_";
            _finnish_: "_finnish_";
            _french_: "_french_";
            _galician_: "_galician_";
            _german_: "_german_";
            _greek_: "_greek_";
            _hindi_: "_hindi_";
            _hungarian_: "_hungarian_";
            _indonesian_: "_indonesian_";
            _irish_: "_irish_";
            _italian_: "_italian_";
            _latvian_: "_latvian_";
            _lithuanian_: "_lithuanian_";
            _norwegian_: "_norwegian_";
            _persian_: "_persian_";
            _portuguese_: "_portuguese_";
            _romanian_: "_romanian_";
            _russian_: "_russian_";
            _serbian_: "_serbian_";
            _sorani_: "_sorani_";
            _spanish_: "_spanish_";
            _swedish_: "_swedish_";
            _thai_: "_thai_";
            _turkish_: "_turkish_";
            _none_: "_none_";
        }>, z.ZodArray<z.ZodString>]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_stemmer">;
        minimum_length: z.ZodNumber;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_readingform">;
        use_romaji: z.ZodBoolean;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_part_of_speech">;
        stoptags: z.ZodArray<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_collation">;
        alternate: z.ZodOptional<z.ZodEnum<{
            shifted: "shifted";
            "non-ignorable": "non-ignorable";
        }>>;
        caseFirst: z.ZodOptional<z.ZodEnum<{
            lower: "lower";
            upper: "upper";
        }>>;
        caseLevel: z.ZodOptional<z.ZodBoolean>;
        country: z.ZodOptional<z.ZodString>;
        decomposition: z.ZodOptional<z.ZodEnum<{
            no: "no";
            identical: "identical";
        }>>;
        hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
        language: z.ZodOptional<z.ZodString>;
        numeric: z.ZodOptional<z.ZodBoolean>;
        rules: z.ZodOptional<z.ZodString>;
        strength: z.ZodOptional<z.ZodEnum<{
            identical: "identical";
            primary: "primary";
            secondary: "secondary";
            tertiary: "tertiary";
            quaternary: "quaternary";
        }>>;
        variableTop: z.ZodOptional<z.ZodString>;
        variant: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_folding">;
        unicode_set_filter: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_normalizer">;
        name: z.ZodEnum<{
            nfc: "nfc";
            nfkc: "nfkc";
            nfkc_cf: "nfkc_cf";
        }>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_transform">;
        dir: z.ZodOptional<z.ZodEnum<{
            reverse: "reverse";
            forward: "forward";
        }>>;
        id: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"phonetic">;
        encoder: z.ZodEnum<{
            metaphone: "metaphone";
            double_metaphone: "double_metaphone";
            soundex: "soundex";
            refined_soundex: "refined_soundex";
            caverphone1: "caverphone1";
            caverphone2: "caverphone2";
            cologne: "cologne";
            nysiis: "nysiis";
            koelnerphonetik: "koelnerphonetik";
            haasephonetik: "haasephonetik";
            beider_morse: "beider_morse";
            daitch_mokotoff: "daitch_mokotoff";
        }>;
        languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            any: "any";
            english: "english";
            french: "french";
            german: "german";
            hungarian: "hungarian";
            romanian: "romanian";
            russian: "russian";
            spanish: "spanish";
            common: "common";
            cyrillic: "cyrillic";
            hebrew: "hebrew";
            polish: "polish";
        }>, z.ZodArray<z.ZodEnum<{
            any: "any";
            english: "english";
            french: "french";
            german: "german";
            hungarian: "hungarian";
            romanian: "romanian";
            russian: "russian";
            spanish: "spanish";
            common: "common";
            cyrillic: "cyrillic";
            hebrew: "hebrew";
            polish: "polish";
        }>>]>>;
        max_code_len: z.ZodOptional<z.ZodNumber>;
        name_type: z.ZodOptional<z.ZodEnum<{
            generic: "generic";
            ashkenazi: "ashkenazi";
            sephardic: "sephardic";
        }>>;
        replace: z.ZodOptional<z.ZodBoolean>;
        rule_type: z.ZodOptional<z.ZodEnum<{
            approx: "approx";
            exact: "exact";
        }>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"dictionary_decompounder">;
        max_subword_size: z.ZodOptional<z.ZodNumber>;
        min_subword_size: z.ZodOptional<z.ZodNumber>;
        min_word_size: z.ZodOptional<z.ZodNumber>;
        only_longest_match: z.ZodOptional<z.ZodBoolean>;
        word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
        word_list_path: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>]>>>;
    tokenizer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        type: z.ZodLiteral<"char_group">;
        tokenize_on_chars: z.ZodArray<z.ZodString>;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"classic">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"edge_ngram">;
        custom_token_chars: z.ZodOptional<z.ZodString>;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            symbol: "symbol";
            custom: "custom";
            whitespace: "whitespace";
            letter: "letter";
            digit: "digit";
            punctuation: "punctuation";
        }>>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"keyword">;
        buffer_size: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"letter">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"lowercase">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"ngram">;
        custom_token_chars: z.ZodOptional<z.ZodString>;
        max_gram: z.ZodOptional<z.ZodNumber>;
        min_gram: z.ZodOptional<z.ZodNumber>;
        token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            symbol: "symbol";
            custom: "custom";
            whitespace: "whitespace";
            letter: "letter";
            digit: "digit";
            punctuation: "punctuation";
        }>>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"path_hierarchy">;
        buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        delimiter: z.ZodOptional<z.ZodString>;
        replacement: z.ZodOptional<z.ZodString>;
        reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"pattern">;
        flags: z.ZodOptional<z.ZodString>;
        group: z.ZodOptional<z.ZodNumber>;
        pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"simple_pattern">;
        pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"simple_pattern_split">;
        pattern: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"standard">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"thai">;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"uax_url_email">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"whitespace">;
        max_token_length: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"icu_tokenizer">;
        rule_files: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"kuromoji_tokenizer">;
        discard_punctuation: z.ZodOptional<z.ZodBoolean>;
        mode: z.ZodEnum<{
            search: "search";
            normal: "normal";
            extended: "extended";
        }>;
        nbest_cost: z.ZodOptional<z.ZodNumber>;
        nbest_examples: z.ZodOptional<z.ZodString>;
        user_dictionary: z.ZodOptional<z.ZodString>;
        user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
        discard_compound_token: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodLiteral<"nori_tokenizer">;
        decompound_mode: z.ZodOptional<z.ZodEnum<{
            none: "none";
            discard: "discard";
            mixed: "mixed";
        }>>;
        discard_punctuation: z.ZodOptional<z.ZodBoolean>;
        user_dictionary: z.ZodOptional<z.ZodString>;
        user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>]>>;
}, z.core.$strip>]>;
export type MlCategorizationAnalyzer = z.infer<typeof MlCategorizationAnalyzer>;
export declare const MlRuleAction: z.ZodEnum<{
    skip_result: "skip_result";
    skip_model_update: "skip_model_update";
}>;
export type MlRuleAction = z.infer<typeof MlRuleAction>;
export declare const MlAppliesTo: z.ZodEnum<{
    time: "time";
    actual: "actual";
    typical: "typical";
    diff_from_typical: "diff_from_typical";
}>;
export type MlAppliesTo = z.infer<typeof MlAppliesTo>;
export declare const MlConditionOperator: z.ZodEnum<{
    gt: "gt";
    gte: "gte";
    lt: "lt";
    lte: "lte";
}>;
export type MlConditionOperator = z.infer<typeof MlConditionOperator>;
export declare const MlRuleCondition: z.ZodObject<{
    applies_to: z.ZodEnum<{
        time: "time";
        actual: "actual";
        typical: "typical";
        diff_from_typical: "diff_from_typical";
    }>;
    operator: z.ZodEnum<{
        gt: "gt";
        gte: "gte";
        lt: "lt";
        lte: "lte";
    }>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type MlRuleCondition = z.infer<typeof MlRuleCondition>;
export declare const MlFilterType: z.ZodEnum<{
    exclude: "exclude";
    include: "include";
}>;
export type MlFilterType = z.infer<typeof MlFilterType>;
export declare const MlFilterRef: z.ZodObject<{
    filter_id: z.ZodString;
    filter_type: z.ZodOptional<z.ZodEnum<{
        exclude: "exclude";
        include: "include";
    }>>;
}, z.core.$strip>;
export type MlFilterRef = z.infer<typeof MlFilterRef>;
export declare const MlDetectionRule: z.ZodObject<{
    actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        skip_result: "skip_result";
        skip_model_update: "skip_model_update";
    }>>>;
    conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        applies_to: z.ZodEnum<{
            time: "time";
            actual: "actual";
            typical: "typical";
            diff_from_typical: "diff_from_typical";
        }>;
        operator: z.ZodEnum<{
            gt: "gt";
            gte: "gte";
            lt: "lt";
            lte: "lte";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>>>;
    scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        filter_id: z.ZodString;
        filter_type: z.ZodOptional<z.ZodEnum<{
            exclude: "exclude";
            include: "include";
        }>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type MlDetectionRule = z.infer<typeof MlDetectionRule>;
export declare const MlExcludeFrequent: z.ZodEnum<{
    all: "all";
    none: "none";
    by: "by";
    over: "over";
}>;
export type MlExcludeFrequent = z.infer<typeof MlExcludeFrequent>;
export declare const MlDetector: z.ZodObject<{
    by_field_name: z.ZodOptional<z.ZodString>;
    custom_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            skip_result: "skip_result";
            skip_model_update: "skip_model_update";
        }>>>;
        conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            applies_to: z.ZodEnum<{
                time: "time";
                actual: "actual";
                typical: "typical";
                diff_from_typical: "diff_from_typical";
            }>;
            operator: z.ZodEnum<{
                gt: "gt";
                gte: "gte";
                lt: "lt";
                lte: "lte";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            filter_id: z.ZodString;
            filter_type: z.ZodOptional<z.ZodEnum<{
                exclude: "exclude";
                include: "include";
            }>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    detector_description: z.ZodOptional<z.ZodString>;
    detector_index: z.ZodOptional<z.ZodNumber>;
    exclude_frequent: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
        by: "by";
        over: "over";
    }>>;
    field_name: z.ZodOptional<z.ZodString>;
    function: z.ZodOptional<z.ZodString>;
    over_field_name: z.ZodOptional<z.ZodString>;
    partition_field_name: z.ZodOptional<z.ZodString>;
    use_null: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlDetector = z.infer<typeof MlDetector>;
export declare const MlPerPartitionCategorization: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    stop_on_warn: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlPerPartitionCategorization = z.infer<typeof MlPerPartitionCategorization>;
export declare const MlAnalysisConfig: z.ZodObject<{
    bucket_span: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    categorization_analyzer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        char_filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"html_strip">;
            escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"mapping">;
            mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
            mappings_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"pattern_replace">;
            flags: z.ZodOptional<z.ZodString>;
            pattern: z.ZodString;
            replacement: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"icu_normalizer">;
            mode: z.ZodOptional<z.ZodEnum<{
                decompose: "decompose";
                compose: "compose";
            }>>;
            name: z.ZodOptional<z.ZodEnum<{
                nfc: "nfc";
                nfkc: "nfkc";
                nfkc_cf: "nfkc_cf";
            }>>;
            unicode_set_filter: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"kuromoji_iteration_mark">;
            normalize_kana: z.ZodBoolean;
            normalize_kanji: z.ZodBoolean;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>]>>>;
        filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"apostrophe">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"arabic_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"arabic_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"asciifolding">;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"bengali_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"brazilian_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"cjk_bigram">;
            ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                han: "han";
                hangul: "hangul";
                hiragana: "hiragana";
                katakana: "katakana";
            }>>>;
            output_unigrams: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"cjk_width">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"classic">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"common_grams">;
            common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
            common_words_path: z.ZodOptional<z.ZodString>;
            ignore_case: z.ZodOptional<z.ZodBoolean>;
            query_mode: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"condition">;
            filter: z.ZodArray<z.ZodString>;
            script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
                source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
                id: z.ZodOptional<z.ZodString>;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    painless: "painless";
                    expression: "expression";
                    mustache: "mustache";
                    java: "java";
                }>, z.ZodString]>>;
                options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"czech_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"decimal_digit">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"delimited_payload">;
            delimiter: z.ZodOptional<z.ZodString>;
            encoding: z.ZodOptional<z.ZodEnum<{
                int: "int";
                float: "float";
                identity: "identity";
            }>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"dutch_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"edge_ngram">;
            max_gram: z.ZodOptional<z.ZodNumber>;
            min_gram: z.ZodOptional<z.ZodNumber>;
            side: z.ZodOptional<z.ZodEnum<{
                front: "front";
                back: "back";
            }>>;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"elision">;
            articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
            articles_path: z.ZodOptional<z.ZodString>;
            articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"fingerprint">;
            max_output_size: z.ZodOptional<z.ZodNumber>;
            separator: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"flatten_graph">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"french_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"german_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"german_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"hindi_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"hunspell">;
            dedup: z.ZodOptional<z.ZodBoolean>;
            dictionary: z.ZodOptional<z.ZodString>;
            locale: z.ZodString;
            lang: z.ZodString;
            language: z.ZodString;
            longest_only: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"hyphenation_decompounder">;
            hyphenation_patterns_path: z.ZodString;
            no_sub_matches: z.ZodOptional<z.ZodBoolean>;
            no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
            max_subword_size: z.ZodOptional<z.ZodNumber>;
            min_subword_size: z.ZodOptional<z.ZodNumber>;
            min_word_size: z.ZodOptional<z.ZodNumber>;
            only_longest_match: z.ZodOptional<z.ZodBoolean>;
            word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
            word_list_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"indic_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"keep_types">;
            mode: z.ZodOptional<z.ZodEnum<{
                exclude: "exclude";
                include: "include";
            }>>;
            types: z.ZodArray<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"keep">;
            keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
            keep_words_case: z.ZodOptional<z.ZodBoolean>;
            keep_words_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"keyword_marker">;
            ignore_case: z.ZodOptional<z.ZodBoolean>;
            keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            keywords_path: z.ZodOptional<z.ZodString>;
            keywords_pattern: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"keyword_repeat">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"kstem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"length">;
            max: z.ZodOptional<z.ZodNumber>;
            min: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"limit">;
            consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
            max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"lowercase">;
            language: z.ZodOptional<z.ZodEnum<{
                greek: "greek";
                irish: "irish";
                turkish: "turkish";
            }>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"min_hash">;
            bucket_count: z.ZodOptional<z.ZodNumber>;
            hash_count: z.ZodOptional<z.ZodNumber>;
            hash_set_size: z.ZodOptional<z.ZodNumber>;
            with_rotation: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"multiplexer">;
            filters: z.ZodArray<z.ZodString>;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ngram">;
            max_gram: z.ZodOptional<z.ZodNumber>;
            min_gram: z.ZodOptional<z.ZodNumber>;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"nori_part_of_speech">;
            stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"pattern_capture">;
            patterns: z.ZodArray<z.ZodString>;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"pattern_replace">;
            all: z.ZodOptional<z.ZodBoolean>;
            flags: z.ZodOptional<z.ZodString>;
            pattern: z.ZodString;
            replacement: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"persian_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"persian_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"porter_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"predicate_token_filter">;
            script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
                source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
                id: z.ZodOptional<z.ZodString>;
                params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    painless: "painless";
                    expression: "expression";
                    mustache: "mustache";
                    java: "java";
                }>, z.ZodString]>>;
                options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"remove_duplicates">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"reverse">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"russian_stem">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"scandinavian_folding">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"scandinavian_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"serbian_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"shingle">;
            filler_token: z.ZodOptional<z.ZodString>;
            max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            output_unigrams: z.ZodOptional<z.ZodBoolean>;
            output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
            token_separator: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"snowball">;
            language: z.ZodOptional<z.ZodEnum<{
                Arabic: "Arabic";
                Armenian: "Armenian";
                Basque: "Basque";
                Catalan: "Catalan";
                Danish: "Danish";
                Dutch: "Dutch";
                English: "English";
                Estonian: "Estonian";
                Finnish: "Finnish";
                French: "French";
                German: "German";
                German2: "German2";
                Hungarian: "Hungarian";
                Italian: "Italian";
                Irish: "Irish";
                Kp: "Kp";
                Lithuanian: "Lithuanian";
                Lovins: "Lovins";
                Norwegian: "Norwegian";
                Porter: "Porter";
                Portuguese: "Portuguese";
                Romanian: "Romanian";
                Russian: "Russian";
                Serbian: "Serbian";
                Spanish: "Spanish";
                Swedish: "Swedish";
                Turkish: "Turkish";
            }>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"sorani_normalization">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"stemmer_override">;
            rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
            rules_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"stemmer">;
            language: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"stop">;
            ignore_case: z.ZodOptional<z.ZodBoolean>;
            remove_trailing: z.ZodOptional<z.ZodBoolean>;
            stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                _arabic_: "_arabic_";
                _armenian_: "_armenian_";
                _basque_: "_basque_";
                _bengali_: "_bengali_";
                _brazilian_: "_brazilian_";
                _bulgarian_: "_bulgarian_";
                _catalan_: "_catalan_";
                _cjk_: "_cjk_";
                _czech_: "_czech_";
                _danish_: "_danish_";
                _dutch_: "_dutch_";
                _english_: "_english_";
                _estonian_: "_estonian_";
                _finnish_: "_finnish_";
                _french_: "_french_";
                _galician_: "_galician_";
                _german_: "_german_";
                _greek_: "_greek_";
                _hindi_: "_hindi_";
                _hungarian_: "_hungarian_";
                _indonesian_: "_indonesian_";
                _irish_: "_irish_";
                _italian_: "_italian_";
                _latvian_: "_latvian_";
                _lithuanian_: "_lithuanian_";
                _norwegian_: "_norwegian_";
                _persian_: "_persian_";
                _portuguese_: "_portuguese_";
                _romanian_: "_romanian_";
                _russian_: "_russian_";
                _serbian_: "_serbian_";
                _sorani_: "_sorani_";
                _spanish_: "_spanish_";
                _swedish_: "_swedish_";
                _thai_: "_thai_";
                _turkish_: "_turkish_";
                _none_: "_none_";
            }>, z.ZodArray<z.ZodString>]>>;
            stopwords_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"synonym_graph">;
            expand: z.ZodOptional<z.ZodBoolean>;
            format: z.ZodOptional<z.ZodEnum<{
                solr: "solr";
                wordnet: "wordnet";
            }>>;
            lenient: z.ZodOptional<z.ZodBoolean>;
            synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
            synonyms_path: z.ZodOptional<z.ZodString>;
            synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            tokenizer: z.ZodOptional<z.ZodString>;
            updateable: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"synonym">;
            expand: z.ZodOptional<z.ZodBoolean>;
            format: z.ZodOptional<z.ZodEnum<{
                solr: "solr";
                wordnet: "wordnet";
            }>>;
            lenient: z.ZodOptional<z.ZodBoolean>;
            synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
            synonyms_path: z.ZodOptional<z.ZodString>;
            synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            tokenizer: z.ZodOptional<z.ZodString>;
            updateable: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"trim">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"truncate">;
            length: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"unique">;
            only_on_same_position: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"uppercase">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"word_delimiter_graph">;
            adjust_offsets: z.ZodOptional<z.ZodBoolean>;
            ignore_keywords: z.ZodOptional<z.ZodBoolean>;
            catenate_all: z.ZodOptional<z.ZodBoolean>;
            catenate_numbers: z.ZodOptional<z.ZodBoolean>;
            catenate_words: z.ZodOptional<z.ZodBoolean>;
            generate_number_parts: z.ZodOptional<z.ZodBoolean>;
            generate_word_parts: z.ZodOptional<z.ZodBoolean>;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
            protected_words_path: z.ZodOptional<z.ZodString>;
            split_on_case_change: z.ZodOptional<z.ZodBoolean>;
            split_on_numerics: z.ZodOptional<z.ZodBoolean>;
            stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
            type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
            type_table_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"word_delimiter">;
            catenate_all: z.ZodOptional<z.ZodBoolean>;
            catenate_numbers: z.ZodOptional<z.ZodBoolean>;
            catenate_words: z.ZodOptional<z.ZodBoolean>;
            generate_number_parts: z.ZodOptional<z.ZodBoolean>;
            generate_word_parts: z.ZodOptional<z.ZodBoolean>;
            preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
            protected_words_path: z.ZodOptional<z.ZodString>;
            split_on_case_change: z.ZodOptional<z.ZodBoolean>;
            split_on_numerics: z.ZodOptional<z.ZodBoolean>;
            stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
            type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
            type_table_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ja_stop">;
            stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                _arabic_: "_arabic_";
                _armenian_: "_armenian_";
                _basque_: "_basque_";
                _bengali_: "_bengali_";
                _brazilian_: "_brazilian_";
                _bulgarian_: "_bulgarian_";
                _catalan_: "_catalan_";
                _cjk_: "_cjk_";
                _czech_: "_czech_";
                _danish_: "_danish_";
                _dutch_: "_dutch_";
                _english_: "_english_";
                _estonian_: "_estonian_";
                _finnish_: "_finnish_";
                _french_: "_french_";
                _galician_: "_galician_";
                _german_: "_german_";
                _greek_: "_greek_";
                _hindi_: "_hindi_";
                _hungarian_: "_hungarian_";
                _indonesian_: "_indonesian_";
                _irish_: "_irish_";
                _italian_: "_italian_";
                _latvian_: "_latvian_";
                _lithuanian_: "_lithuanian_";
                _norwegian_: "_norwegian_";
                _persian_: "_persian_";
                _portuguese_: "_portuguese_";
                _romanian_: "_romanian_";
                _russian_: "_russian_";
                _serbian_: "_serbian_";
                _sorani_: "_sorani_";
                _spanish_: "_spanish_";
                _swedish_: "_swedish_";
                _thai_: "_thai_";
                _turkish_: "_turkish_";
                _none_: "_none_";
            }>, z.ZodArray<z.ZodString>]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"kuromoji_stemmer">;
            minimum_length: z.ZodNumber;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"kuromoji_readingform">;
            use_romaji: z.ZodBoolean;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"kuromoji_part_of_speech">;
            stoptags: z.ZodArray<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"icu_collation">;
            alternate: z.ZodOptional<z.ZodEnum<{
                shifted: "shifted";
                "non-ignorable": "non-ignorable";
            }>>;
            caseFirst: z.ZodOptional<z.ZodEnum<{
                lower: "lower";
                upper: "upper";
            }>>;
            caseLevel: z.ZodOptional<z.ZodBoolean>;
            country: z.ZodOptional<z.ZodString>;
            decomposition: z.ZodOptional<z.ZodEnum<{
                no: "no";
                identical: "identical";
            }>>;
            hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
            language: z.ZodOptional<z.ZodString>;
            numeric: z.ZodOptional<z.ZodBoolean>;
            rules: z.ZodOptional<z.ZodString>;
            strength: z.ZodOptional<z.ZodEnum<{
                identical: "identical";
                primary: "primary";
                secondary: "secondary";
                tertiary: "tertiary";
                quaternary: "quaternary";
            }>>;
            variableTop: z.ZodOptional<z.ZodString>;
            variant: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"icu_folding">;
            unicode_set_filter: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"icu_normalizer">;
            name: z.ZodEnum<{
                nfc: "nfc";
                nfkc: "nfkc";
                nfkc_cf: "nfkc_cf";
            }>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"icu_transform">;
            dir: z.ZodOptional<z.ZodEnum<{
                reverse: "reverse";
                forward: "forward";
            }>>;
            id: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"phonetic">;
            encoder: z.ZodEnum<{
                metaphone: "metaphone";
                double_metaphone: "double_metaphone";
                soundex: "soundex";
                refined_soundex: "refined_soundex";
                caverphone1: "caverphone1";
                caverphone2: "caverphone2";
                cologne: "cologne";
                nysiis: "nysiis";
                koelnerphonetik: "koelnerphonetik";
                haasephonetik: "haasephonetik";
                beider_morse: "beider_morse";
                daitch_mokotoff: "daitch_mokotoff";
            }>;
            languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                any: "any";
                english: "english";
                french: "french";
                german: "german";
                hungarian: "hungarian";
                romanian: "romanian";
                russian: "russian";
                spanish: "spanish";
                common: "common";
                cyrillic: "cyrillic";
                hebrew: "hebrew";
                polish: "polish";
            }>, z.ZodArray<z.ZodEnum<{
                any: "any";
                english: "english";
                french: "french";
                german: "german";
                hungarian: "hungarian";
                romanian: "romanian";
                russian: "russian";
                spanish: "spanish";
                common: "common";
                cyrillic: "cyrillic";
                hebrew: "hebrew";
                polish: "polish";
            }>>]>>;
            max_code_len: z.ZodOptional<z.ZodNumber>;
            name_type: z.ZodOptional<z.ZodEnum<{
                generic: "generic";
                ashkenazi: "ashkenazi";
                sephardic: "sephardic";
            }>>;
            replace: z.ZodOptional<z.ZodBoolean>;
            rule_type: z.ZodOptional<z.ZodEnum<{
                approx: "approx";
                exact: "exact";
            }>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"dictionary_decompounder">;
            max_subword_size: z.ZodOptional<z.ZodNumber>;
            min_subword_size: z.ZodOptional<z.ZodNumber>;
            min_word_size: z.ZodOptional<z.ZodNumber>;
            only_longest_match: z.ZodOptional<z.ZodBoolean>;
            word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
            word_list_path: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>]>>>;
        tokenizer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            type: z.ZodLiteral<"char_group">;
            tokenize_on_chars: z.ZodArray<z.ZodString>;
            max_token_length: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"classic">;
            max_token_length: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"edge_ngram">;
            custom_token_chars: z.ZodOptional<z.ZodString>;
            max_gram: z.ZodOptional<z.ZodNumber>;
            min_gram: z.ZodOptional<z.ZodNumber>;
            token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                symbol: "symbol";
                custom: "custom";
                whitespace: "whitespace";
                letter: "letter";
                digit: "digit";
                punctuation: "punctuation";
            }>>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"keyword">;
            buffer_size: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"letter">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"lowercase">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"ngram">;
            custom_token_chars: z.ZodOptional<z.ZodString>;
            max_gram: z.ZodOptional<z.ZodNumber>;
            min_gram: z.ZodOptional<z.ZodNumber>;
            token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                symbol: "symbol";
                custom: "custom";
                whitespace: "whitespace";
                letter: "letter";
                digit: "digit";
                punctuation: "punctuation";
            }>>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"path_hierarchy">;
            buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            delimiter: z.ZodOptional<z.ZodString>;
            replacement: z.ZodOptional<z.ZodString>;
            reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"pattern">;
            flags: z.ZodOptional<z.ZodString>;
            group: z.ZodOptional<z.ZodNumber>;
            pattern: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"simple_pattern">;
            pattern: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"simple_pattern_split">;
            pattern: z.ZodOptional<z.ZodString>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"standard">;
            max_token_length: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"thai">;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"uax_url_email">;
            max_token_length: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"whitespace">;
            max_token_length: z.ZodOptional<z.ZodNumber>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"icu_tokenizer">;
            rule_files: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"kuromoji_tokenizer">;
            discard_punctuation: z.ZodOptional<z.ZodBoolean>;
            mode: z.ZodEnum<{
                search: "search";
                normal: "normal";
                extended: "extended";
            }>;
            nbest_cost: z.ZodOptional<z.ZodNumber>;
            nbest_examples: z.ZodOptional<z.ZodString>;
            user_dictionary: z.ZodOptional<z.ZodString>;
            user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
            discard_compound_token: z.ZodOptional<z.ZodBoolean>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodObject<{
            type: z.ZodLiteral<"nori_tokenizer">;
            decompound_mode: z.ZodOptional<z.ZodEnum<{
                none: "none";
                discard: "discard";
                mixed: "mixed";
            }>>;
            discard_punctuation: z.ZodOptional<z.ZodBoolean>;
            user_dictionary: z.ZodOptional<z.ZodString>;
            user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>]>]>>;
    }, z.core.$strip>]>>;
    categorization_field_name: z.ZodOptional<z.ZodString>;
    categorization_filters: z.ZodOptional<z.ZodArray<z.ZodString>>;
    detectors: z.ZodArray<z.ZodObject<{
        by_field_name: z.ZodOptional<z.ZodString>;
        custom_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                skip_result: "skip_result";
                skip_model_update: "skip_model_update";
            }>>>;
            conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                applies_to: z.ZodEnum<{
                    time: "time";
                    actual: "actual";
                    typical: "typical";
                    diff_from_typical: "diff_from_typical";
                }>;
                operator: z.ZodEnum<{
                    gt: "gt";
                    gte: "gte";
                    lt: "lt";
                    lte: "lte";
                }>;
                value: z.ZodNumber;
            }, z.core.$strip>>>;
            scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                filter_id: z.ZodString;
                filter_type: z.ZodOptional<z.ZodEnum<{
                    exclude: "exclude";
                    include: "include";
                }>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        detector_description: z.ZodOptional<z.ZodString>;
        detector_index: z.ZodOptional<z.ZodNumber>;
        exclude_frequent: z.ZodOptional<z.ZodEnum<{
            all: "all";
            none: "none";
            by: "by";
            over: "over";
        }>>;
        field_name: z.ZodOptional<z.ZodString>;
        function: z.ZodOptional<z.ZodString>;
        over_field_name: z.ZodOptional<z.ZodString>;
        partition_field_name: z.ZodOptional<z.ZodString>;
        use_null: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    influencers: z.ZodOptional<z.ZodArray<z.ZodString>>;
    latency: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    model_prune_window: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    multivariate_by_fields: z.ZodOptional<z.ZodBoolean>;
    per_partition_categorization: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        stop_on_warn: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    summary_count_field_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlAnalysisConfig = z.infer<typeof MlAnalysisConfig>;
export declare const MlAnalysisLimits: z.ZodObject<{
    categorization_examples_limit: z.ZodOptional<z.ZodNumber>;
    model_memory_limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type MlAnalysisLimits = z.infer<typeof MlAnalysisLimits>;
export declare const MlDataDescription: z.ZodObject<{
    format: z.ZodOptional<z.ZodString>;
    time_field: z.ZodOptional<z.ZodString>;
    time_format: z.ZodOptional<z.ZodString>;
    field_delimiter: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlDataDescription = z.infer<typeof MlDataDescription>;
export declare const MlModelPlotConfig: z.ZodObject<{
    annotations_enabled: z.ZodOptional<z.ZodBoolean>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    terms: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlModelPlotConfig = z.infer<typeof MlModelPlotConfig>;
/** Validate an anomaly detection job. */
export declare const MlValidateRequest: z.ZodObject<{
    job_id: z.ZodOptional<z.ZodString>;
    analysis_config: z.ZodOptional<z.ZodObject<{
        bucket_span: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        categorization_analyzer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            char_filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"html_strip">;
                escaped_tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"mapping">;
                mappings: z.ZodOptional<z.ZodArray<z.ZodString>>;
                mappings_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"pattern_replace">;
                flags: z.ZodOptional<z.ZodString>;
                pattern: z.ZodString;
                replacement: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"icu_normalizer">;
                mode: z.ZodOptional<z.ZodEnum<{
                    decompose: "decompose";
                    compose: "compose";
                }>>;
                name: z.ZodOptional<z.ZodEnum<{
                    nfc: "nfc";
                    nfkc: "nfkc";
                    nfkc_cf: "nfkc_cf";
                }>>;
                unicode_set_filter: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"kuromoji_iteration_mark">;
                normalize_kana: z.ZodBoolean;
                normalize_kanji: z.ZodBoolean;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>]>>>;
            filter: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"apostrophe">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"arabic_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"arabic_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"asciifolding">;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"bengali_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"brazilian_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"cjk_bigram">;
                ignored_scripts: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    han: "han";
                    hangul: "hangul";
                    hiragana: "hiragana";
                    katakana: "katakana";
                }>>>;
                output_unigrams: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"cjk_width">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"classic">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"common_grams">;
                common_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
                common_words_path: z.ZodOptional<z.ZodString>;
                ignore_case: z.ZodOptional<z.ZodBoolean>;
                query_mode: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"condition">;
                filter: z.ZodArray<z.ZodString>;
                script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
                    source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
                    id: z.ZodOptional<z.ZodString>;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        painless: "painless";
                        expression: "expression";
                        mustache: "mustache";
                        java: "java";
                    }>, z.ZodString]>>;
                    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"czech_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"decimal_digit">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"delimited_payload">;
                delimiter: z.ZodOptional<z.ZodString>;
                encoding: z.ZodOptional<z.ZodEnum<{
                    int: "int";
                    float: "float";
                    identity: "identity";
                }>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"dutch_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"edge_ngram">;
                max_gram: z.ZodOptional<z.ZodNumber>;
                min_gram: z.ZodOptional<z.ZodNumber>;
                side: z.ZodOptional<z.ZodEnum<{
                    front: "front";
                    back: "back";
                }>>;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"elision">;
                articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
                articles_path: z.ZodOptional<z.ZodString>;
                articles_case: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"fingerprint">;
                max_output_size: z.ZodOptional<z.ZodNumber>;
                separator: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"flatten_graph">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"french_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"german_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"german_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"hindi_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"hunspell">;
                dedup: z.ZodOptional<z.ZodBoolean>;
                dictionary: z.ZodOptional<z.ZodString>;
                locale: z.ZodString;
                lang: z.ZodString;
                language: z.ZodString;
                longest_only: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"hyphenation_decompounder">;
                hyphenation_patterns_path: z.ZodString;
                no_sub_matches: z.ZodOptional<z.ZodBoolean>;
                no_overlapping_matches: z.ZodOptional<z.ZodBoolean>;
                max_subword_size: z.ZodOptional<z.ZodNumber>;
                min_subword_size: z.ZodOptional<z.ZodNumber>;
                min_word_size: z.ZodOptional<z.ZodNumber>;
                only_longest_match: z.ZodOptional<z.ZodBoolean>;
                word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
                word_list_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"indic_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"keep_types">;
                mode: z.ZodOptional<z.ZodEnum<{
                    exclude: "exclude";
                    include: "include";
                }>>;
                types: z.ZodArray<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"keep">;
                keep_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
                keep_words_case: z.ZodOptional<z.ZodBoolean>;
                keep_words_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"keyword_marker">;
                ignore_case: z.ZodOptional<z.ZodBoolean>;
                keywords: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                keywords_path: z.ZodOptional<z.ZodString>;
                keywords_pattern: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"keyword_repeat">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"kstem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"length">;
                max: z.ZodOptional<z.ZodNumber>;
                min: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"limit">;
                consume_all_tokens: z.ZodOptional<z.ZodBoolean>;
                max_token_count: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"lowercase">;
                language: z.ZodOptional<z.ZodEnum<{
                    greek: "greek";
                    irish: "irish";
                    turkish: "turkish";
                }>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"min_hash">;
                bucket_count: z.ZodOptional<z.ZodNumber>;
                hash_count: z.ZodOptional<z.ZodNumber>;
                hash_set_size: z.ZodOptional<z.ZodNumber>;
                with_rotation: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"multiplexer">;
                filters: z.ZodArray<z.ZodString>;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ngram">;
                max_gram: z.ZodOptional<z.ZodNumber>;
                min_gram: z.ZodOptional<z.ZodNumber>;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"nori_part_of_speech">;
                stoptags: z.ZodOptional<z.ZodArray<z.ZodString>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"pattern_capture">;
                patterns: z.ZodArray<z.ZodString>;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"pattern_replace">;
                all: z.ZodOptional<z.ZodBoolean>;
                flags: z.ZodOptional<z.ZodString>;
                pattern: z.ZodString;
                replacement: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"persian_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"persian_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"porter_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"predicate_token_filter">;
                script: z.ZodUnion<readonly [z.ZodLazy<z.ZodObject<{
                    source: z.ZodOptional<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>;
                    id: z.ZodOptional<z.ZodString>;
                    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    lang: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                        painless: "painless";
                        expression: "expression";
                        mustache: "mustache";
                        java: "java";
                    }>, z.ZodString]>>;
                    options: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>, z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>]>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"remove_duplicates">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"reverse">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"russian_stem">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"scandinavian_folding">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"scandinavian_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"serbian_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"shingle">;
                filler_token: z.ZodOptional<z.ZodString>;
                max_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                min_shingle_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                output_unigrams: z.ZodOptional<z.ZodBoolean>;
                output_unigrams_if_no_shingles: z.ZodOptional<z.ZodBoolean>;
                token_separator: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"snowball">;
                language: z.ZodOptional<z.ZodEnum<{
                    Arabic: "Arabic";
                    Armenian: "Armenian";
                    Basque: "Basque";
                    Catalan: "Catalan";
                    Danish: "Danish";
                    Dutch: "Dutch";
                    English: "English";
                    Estonian: "Estonian";
                    Finnish: "Finnish";
                    French: "French";
                    German: "German";
                    German2: "German2";
                    Hungarian: "Hungarian";
                    Italian: "Italian";
                    Irish: "Irish";
                    Kp: "Kp";
                    Lithuanian: "Lithuanian";
                    Lovins: "Lovins";
                    Norwegian: "Norwegian";
                    Porter: "Porter";
                    Portuguese: "Portuguese";
                    Romanian: "Romanian";
                    Russian: "Russian";
                    Serbian: "Serbian";
                    Spanish: "Spanish";
                    Swedish: "Swedish";
                    Turkish: "Turkish";
                }>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"sorani_normalization">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"stemmer_override">;
                rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
                rules_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"stemmer">;
                language: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"stop">;
                ignore_case: z.ZodOptional<z.ZodBoolean>;
                remove_trailing: z.ZodOptional<z.ZodBoolean>;
                stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    _arabic_: "_arabic_";
                    _armenian_: "_armenian_";
                    _basque_: "_basque_";
                    _bengali_: "_bengali_";
                    _brazilian_: "_brazilian_";
                    _bulgarian_: "_bulgarian_";
                    _catalan_: "_catalan_";
                    _cjk_: "_cjk_";
                    _czech_: "_czech_";
                    _danish_: "_danish_";
                    _dutch_: "_dutch_";
                    _english_: "_english_";
                    _estonian_: "_estonian_";
                    _finnish_: "_finnish_";
                    _french_: "_french_";
                    _galician_: "_galician_";
                    _german_: "_german_";
                    _greek_: "_greek_";
                    _hindi_: "_hindi_";
                    _hungarian_: "_hungarian_";
                    _indonesian_: "_indonesian_";
                    _irish_: "_irish_";
                    _italian_: "_italian_";
                    _latvian_: "_latvian_";
                    _lithuanian_: "_lithuanian_";
                    _norwegian_: "_norwegian_";
                    _persian_: "_persian_";
                    _portuguese_: "_portuguese_";
                    _romanian_: "_romanian_";
                    _russian_: "_russian_";
                    _serbian_: "_serbian_";
                    _sorani_: "_sorani_";
                    _spanish_: "_spanish_";
                    _swedish_: "_swedish_";
                    _thai_: "_thai_";
                    _turkish_: "_turkish_";
                    _none_: "_none_";
                }>, z.ZodArray<z.ZodString>]>>;
                stopwords_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"synonym_graph">;
                expand: z.ZodOptional<z.ZodBoolean>;
                format: z.ZodOptional<z.ZodEnum<{
                    solr: "solr";
                    wordnet: "wordnet";
                }>>;
                lenient: z.ZodOptional<z.ZodBoolean>;
                synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
                synonyms_path: z.ZodOptional<z.ZodString>;
                synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                tokenizer: z.ZodOptional<z.ZodString>;
                updateable: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"synonym">;
                expand: z.ZodOptional<z.ZodBoolean>;
                format: z.ZodOptional<z.ZodEnum<{
                    solr: "solr";
                    wordnet: "wordnet";
                }>>;
                lenient: z.ZodOptional<z.ZodBoolean>;
                synonyms: z.ZodOptional<z.ZodArray<z.ZodString>>;
                synonyms_path: z.ZodOptional<z.ZodString>;
                synonyms_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                tokenizer: z.ZodOptional<z.ZodString>;
                updateable: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"trim">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"truncate">;
                length: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"unique">;
                only_on_same_position: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"uppercase">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"word_delimiter_graph">;
                adjust_offsets: z.ZodOptional<z.ZodBoolean>;
                ignore_keywords: z.ZodOptional<z.ZodBoolean>;
                catenate_all: z.ZodOptional<z.ZodBoolean>;
                catenate_numbers: z.ZodOptional<z.ZodBoolean>;
                catenate_words: z.ZodOptional<z.ZodBoolean>;
                generate_number_parts: z.ZodOptional<z.ZodBoolean>;
                generate_word_parts: z.ZodOptional<z.ZodBoolean>;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
                protected_words_path: z.ZodOptional<z.ZodString>;
                split_on_case_change: z.ZodOptional<z.ZodBoolean>;
                split_on_numerics: z.ZodOptional<z.ZodBoolean>;
                stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
                type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
                type_table_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"word_delimiter">;
                catenate_all: z.ZodOptional<z.ZodBoolean>;
                catenate_numbers: z.ZodOptional<z.ZodBoolean>;
                catenate_words: z.ZodOptional<z.ZodBoolean>;
                generate_number_parts: z.ZodOptional<z.ZodBoolean>;
                generate_word_parts: z.ZodOptional<z.ZodBoolean>;
                preserve_original: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                protected_words: z.ZodOptional<z.ZodArray<z.ZodString>>;
                protected_words_path: z.ZodOptional<z.ZodString>;
                split_on_case_change: z.ZodOptional<z.ZodBoolean>;
                split_on_numerics: z.ZodOptional<z.ZodBoolean>;
                stem_english_possessive: z.ZodOptional<z.ZodBoolean>;
                type_table: z.ZodOptional<z.ZodArray<z.ZodString>>;
                type_table_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ja_stop">;
                stopwords: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    _arabic_: "_arabic_";
                    _armenian_: "_armenian_";
                    _basque_: "_basque_";
                    _bengali_: "_bengali_";
                    _brazilian_: "_brazilian_";
                    _bulgarian_: "_bulgarian_";
                    _catalan_: "_catalan_";
                    _cjk_: "_cjk_";
                    _czech_: "_czech_";
                    _danish_: "_danish_";
                    _dutch_: "_dutch_";
                    _english_: "_english_";
                    _estonian_: "_estonian_";
                    _finnish_: "_finnish_";
                    _french_: "_french_";
                    _galician_: "_galician_";
                    _german_: "_german_";
                    _greek_: "_greek_";
                    _hindi_: "_hindi_";
                    _hungarian_: "_hungarian_";
                    _indonesian_: "_indonesian_";
                    _irish_: "_irish_";
                    _italian_: "_italian_";
                    _latvian_: "_latvian_";
                    _lithuanian_: "_lithuanian_";
                    _norwegian_: "_norwegian_";
                    _persian_: "_persian_";
                    _portuguese_: "_portuguese_";
                    _romanian_: "_romanian_";
                    _russian_: "_russian_";
                    _serbian_: "_serbian_";
                    _sorani_: "_sorani_";
                    _spanish_: "_spanish_";
                    _swedish_: "_swedish_";
                    _thai_: "_thai_";
                    _turkish_: "_turkish_";
                    _none_: "_none_";
                }>, z.ZodArray<z.ZodString>]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"kuromoji_stemmer">;
                minimum_length: z.ZodNumber;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"kuromoji_readingform">;
                use_romaji: z.ZodBoolean;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"kuromoji_part_of_speech">;
                stoptags: z.ZodArray<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"icu_collation">;
                alternate: z.ZodOptional<z.ZodEnum<{
                    shifted: "shifted";
                    "non-ignorable": "non-ignorable";
                }>>;
                caseFirst: z.ZodOptional<z.ZodEnum<{
                    lower: "lower";
                    upper: "upper";
                }>>;
                caseLevel: z.ZodOptional<z.ZodBoolean>;
                country: z.ZodOptional<z.ZodString>;
                decomposition: z.ZodOptional<z.ZodEnum<{
                    no: "no";
                    identical: "identical";
                }>>;
                hiraganaQuaternaryMode: z.ZodOptional<z.ZodBoolean>;
                language: z.ZodOptional<z.ZodString>;
                numeric: z.ZodOptional<z.ZodBoolean>;
                rules: z.ZodOptional<z.ZodString>;
                strength: z.ZodOptional<z.ZodEnum<{
                    identical: "identical";
                    primary: "primary";
                    secondary: "secondary";
                    tertiary: "tertiary";
                    quaternary: "quaternary";
                }>>;
                variableTop: z.ZodOptional<z.ZodString>;
                variant: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"icu_folding">;
                unicode_set_filter: z.ZodString;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"icu_normalizer">;
                name: z.ZodEnum<{
                    nfc: "nfc";
                    nfkc: "nfkc";
                    nfkc_cf: "nfkc_cf";
                }>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"icu_transform">;
                dir: z.ZodOptional<z.ZodEnum<{
                    reverse: "reverse";
                    forward: "forward";
                }>>;
                id: z.ZodString;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"phonetic">;
                encoder: z.ZodEnum<{
                    metaphone: "metaphone";
                    double_metaphone: "double_metaphone";
                    soundex: "soundex";
                    refined_soundex: "refined_soundex";
                    caverphone1: "caverphone1";
                    caverphone2: "caverphone2";
                    cologne: "cologne";
                    nysiis: "nysiis";
                    koelnerphonetik: "koelnerphonetik";
                    haasephonetik: "haasephonetik";
                    beider_morse: "beider_morse";
                    daitch_mokotoff: "daitch_mokotoff";
                }>;
                languageset: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                    any: "any";
                    english: "english";
                    french: "french";
                    german: "german";
                    hungarian: "hungarian";
                    romanian: "romanian";
                    russian: "russian";
                    spanish: "spanish";
                    common: "common";
                    cyrillic: "cyrillic";
                    hebrew: "hebrew";
                    polish: "polish";
                }>, z.ZodArray<z.ZodEnum<{
                    any: "any";
                    english: "english";
                    french: "french";
                    german: "german";
                    hungarian: "hungarian";
                    romanian: "romanian";
                    russian: "russian";
                    spanish: "spanish";
                    common: "common";
                    cyrillic: "cyrillic";
                    hebrew: "hebrew";
                    polish: "polish";
                }>>]>>;
                max_code_len: z.ZodOptional<z.ZodNumber>;
                name_type: z.ZodOptional<z.ZodEnum<{
                    generic: "generic";
                    ashkenazi: "ashkenazi";
                    sephardic: "sephardic";
                }>>;
                replace: z.ZodOptional<z.ZodBoolean>;
                rule_type: z.ZodOptional<z.ZodEnum<{
                    approx: "approx";
                    exact: "exact";
                }>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"dictionary_decompounder">;
                max_subword_size: z.ZodOptional<z.ZodNumber>;
                min_subword_size: z.ZodOptional<z.ZodNumber>;
                min_word_size: z.ZodOptional<z.ZodNumber>;
                only_longest_match: z.ZodOptional<z.ZodBoolean>;
                word_list: z.ZodOptional<z.ZodArray<z.ZodString>>;
                word_list_path: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>]>>>;
            tokenizer: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                type: z.ZodLiteral<"char_group">;
                tokenize_on_chars: z.ZodArray<z.ZodString>;
                max_token_length: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"classic">;
                max_token_length: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"edge_ngram">;
                custom_token_chars: z.ZodOptional<z.ZodString>;
                max_gram: z.ZodOptional<z.ZodNumber>;
                min_gram: z.ZodOptional<z.ZodNumber>;
                token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    symbol: "symbol";
                    custom: "custom";
                    whitespace: "whitespace";
                    letter: "letter";
                    digit: "digit";
                    punctuation: "punctuation";
                }>>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"keyword">;
                buffer_size: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"letter">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"lowercase">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"ngram">;
                custom_token_chars: z.ZodOptional<z.ZodString>;
                max_gram: z.ZodOptional<z.ZodNumber>;
                min_gram: z.ZodOptional<z.ZodNumber>;
                token_chars: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    symbol: "symbol";
                    custom: "custom";
                    whitespace: "whitespace";
                    letter: "letter";
                    digit: "digit";
                    punctuation: "punctuation";
                }>>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"path_hierarchy">;
                buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                delimiter: z.ZodOptional<z.ZodString>;
                replacement: z.ZodOptional<z.ZodString>;
                reverse: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                skip: z.ZodOptional<z.ZodUnion<readonly [z.ZodAny, z.ZodString]>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"pattern">;
                flags: z.ZodOptional<z.ZodString>;
                group: z.ZodOptional<z.ZodNumber>;
                pattern: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"simple_pattern">;
                pattern: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"simple_pattern_split">;
                pattern: z.ZodOptional<z.ZodString>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"standard">;
                max_token_length: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"thai">;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"uax_url_email">;
                max_token_length: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"whitespace">;
                max_token_length: z.ZodOptional<z.ZodNumber>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"icu_tokenizer">;
                rule_files: z.ZodString;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"kuromoji_tokenizer">;
                discard_punctuation: z.ZodOptional<z.ZodBoolean>;
                mode: z.ZodEnum<{
                    search: "search";
                    normal: "normal";
                    extended: "extended";
                }>;
                nbest_cost: z.ZodOptional<z.ZodNumber>;
                nbest_examples: z.ZodOptional<z.ZodString>;
                user_dictionary: z.ZodOptional<z.ZodString>;
                user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
                discard_compound_token: z.ZodOptional<z.ZodBoolean>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>, z.ZodObject<{
                type: z.ZodLiteral<"nori_tokenizer">;
                decompound_mode: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    discard: "discard";
                    mixed: "mixed";
                }>>;
                discard_punctuation: z.ZodOptional<z.ZodBoolean>;
                user_dictionary: z.ZodOptional<z.ZodString>;
                user_dictionary_rules: z.ZodOptional<z.ZodArray<z.ZodString>>;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>]>]>>;
        }, z.core.$strip>]>>;
        categorization_field_name: z.ZodOptional<z.ZodString>;
        categorization_filters: z.ZodOptional<z.ZodArray<z.ZodString>>;
        detectors: z.ZodArray<z.ZodObject<{
            by_field_name: z.ZodOptional<z.ZodString>;
            custom_rules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                actions: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    skip_result: "skip_result";
                    skip_model_update: "skip_model_update";
                }>>>;
                conditions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    applies_to: z.ZodEnum<{
                        time: "time";
                        actual: "actual";
                        typical: "typical";
                        diff_from_typical: "diff_from_typical";
                    }>;
                    operator: z.ZodEnum<{
                        gt: "gt";
                        gte: "gte";
                        lt: "lt";
                        lte: "lte";
                    }>;
                    value: z.ZodNumber;
                }, z.core.$strip>>>;
                scope: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    filter_id: z.ZodString;
                    filter_type: z.ZodOptional<z.ZodEnum<{
                        exclude: "exclude";
                        include: "include";
                    }>>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>>;
            detector_description: z.ZodOptional<z.ZodString>;
            detector_index: z.ZodOptional<z.ZodNumber>;
            exclude_frequent: z.ZodOptional<z.ZodEnum<{
                all: "all";
                none: "none";
                by: "by";
                over: "over";
            }>>;
            field_name: z.ZodOptional<z.ZodString>;
            function: z.ZodOptional<z.ZodString>;
            over_field_name: z.ZodOptional<z.ZodString>;
            partition_field_name: z.ZodOptional<z.ZodString>;
            use_null: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        influencers: z.ZodOptional<z.ZodArray<z.ZodString>>;
        latency: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        model_prune_window: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        multivariate_by_fields: z.ZodOptional<z.ZodBoolean>;
        per_partition_categorization: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            stop_on_warn: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        summary_count_field_name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    analysis_limits: z.ZodOptional<z.ZodObject<{
        categorization_examples_limit: z.ZodOptional<z.ZodNumber>;
        model_memory_limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>>;
    data_description: z.ZodOptional<z.ZodObject<{
        format: z.ZodOptional<z.ZodString>;
        time_field: z.ZodOptional<z.ZodString>;
        time_format: z.ZodOptional<z.ZodString>;
        field_delimiter: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    description: z.ZodOptional<z.ZodString>;
    model_plot: z.ZodOptional<z.ZodObject<{
        annotations_enabled: z.ZodOptional<z.ZodBoolean>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        terms: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    model_snapshot_id: z.ZodOptional<z.ZodString>;
    model_snapshot_retention_days: z.ZodOptional<z.ZodNumber>;
    results_index_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MlValidateRequest = z.infer<typeof MlValidateRequest>;
export declare const MlValidateResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlValidateResponse = z.infer<typeof MlValidateResponse>;
//# sourceMappingURL=ml_validate.d.ts.map