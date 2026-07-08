import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
export interface ExplainExplanationDetailShape {
    description: string;
    details?: ExplainExplanationDetailShape[] | undefined;
    value: float;
}
export declare const ExplainExplanationDetail: z.ZodObject<{
    description: z.ZodString;
    details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type ExplainExplanationDetail = z.infer<typeof ExplainExplanationDetail>;
export declare const ExplainExplanation: z.ZodObject<{
    description: z.ZodString;
    details: z.ZodArray<z.ZodLazy<z.ZodObject<{
        description: z.ZodString;
        details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        value: z.ZodNumber;
    }, z.core.$strip>>>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type ExplainExplanation = z.infer<typeof ExplainExplanation>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SearchAggregationBreakdown: z.ZodObject<{
    build_aggregation: z.ZodNumber;
    build_aggregation_count: z.ZodNumber;
    build_leaf_collector: z.ZodNumber;
    build_leaf_collector_count: z.ZodNumber;
    collect: z.ZodNumber;
    collect_count: z.ZodNumber;
    initialize: z.ZodNumber;
    initialize_count: z.ZodNumber;
    post_collection: z.ZodOptional<z.ZodNumber>;
    post_collection_count: z.ZodOptional<z.ZodNumber>;
    reduce: z.ZodNumber;
    reduce_count: z.ZodNumber;
}, z.core.$strip>;
export type SearchAggregationBreakdown = z.infer<typeof SearchAggregationBreakdown>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const SearchAggregationProfileDelegateDebugFilter: z.ZodObject<{
    results_from_metadata: z.ZodOptional<z.ZodNumber>;
    query: z.ZodOptional<z.ZodString>;
    specialized_for: z.ZodOptional<z.ZodString>;
    segments_counted_in_constant_time: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SearchAggregationProfileDelegateDebugFilter = z.infer<typeof SearchAggregationProfileDelegateDebugFilter>;
export interface SearchAggregationProfileDebugShape {
    segments_with_multi_valued_ords?: integer | undefined;
    collection_strategy?: string | undefined;
    segments_with_single_valued_ords?: integer | undefined;
    total_buckets?: integer | undefined;
    built_buckets?: integer | undefined;
    result_strategy?: string | undefined;
    has_filter?: boolean | undefined;
    delegate?: string | undefined;
    delegate_debug?: SearchAggregationProfileDebugShape | undefined;
    chars_fetched?: integer | undefined;
    extract_count?: integer | undefined;
    extract_ns?: integer | undefined;
    values_fetched?: integer | undefined;
    collect_analyzed_ns?: integer | undefined;
    collect_analyzed_count?: integer | undefined;
    surviving_buckets?: integer | undefined;
    ordinals_collectors_used?: integer | undefined;
    ordinals_collectors_overhead_too_high?: integer | undefined;
    string_hashing_collectors_used?: integer | undefined;
    numeric_collectors_used?: integer | undefined;
    empty_collectors_used?: integer | undefined;
    deferred_aggregators?: string[] | undefined;
    segments_with_doc_count_field?: integer | undefined;
    segments_with_deleted_docs?: integer | undefined;
    filters?: SearchAggregationProfileDelegateDebugFilter[] | undefined;
    segments_counted?: integer | undefined;
    segments_collected?: integer | undefined;
    map_reducer?: string | undefined;
    brute_force_used?: integer | undefined;
    dynamic_pruning_attempted?: integer | undefined;
    dynamic_pruning_used?: integer | undefined;
    skipped_due_to_no_data?: integer | undefined;
}
export declare const SearchAggregationProfileDebug: z.ZodObject<{
    segments_with_multi_valued_ords: z.ZodOptional<z.ZodNumber>;
    collection_strategy: z.ZodOptional<z.ZodString>;
    segments_with_single_valued_ords: z.ZodOptional<z.ZodNumber>;
    total_buckets: z.ZodOptional<z.ZodNumber>;
    built_buckets: z.ZodOptional<z.ZodNumber>;
    result_strategy: z.ZodOptional<z.ZodString>;
    has_filter: z.ZodOptional<z.ZodBoolean>;
    delegate: z.ZodOptional<z.ZodString>;
    delegate_debug: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
    chars_fetched: z.ZodOptional<z.ZodNumber>;
    extract_count: z.ZodOptional<z.ZodNumber>;
    extract_ns: z.ZodOptional<z.ZodNumber>;
    values_fetched: z.ZodOptional<z.ZodNumber>;
    collect_analyzed_ns: z.ZodOptional<z.ZodNumber>;
    collect_analyzed_count: z.ZodOptional<z.ZodNumber>;
    surviving_buckets: z.ZodOptional<z.ZodNumber>;
    ordinals_collectors_used: z.ZodOptional<z.ZodNumber>;
    ordinals_collectors_overhead_too_high: z.ZodOptional<z.ZodNumber>;
    string_hashing_collectors_used: z.ZodOptional<z.ZodNumber>;
    numeric_collectors_used: z.ZodOptional<z.ZodNumber>;
    empty_collectors_used: z.ZodOptional<z.ZodNumber>;
    deferred_aggregators: z.ZodOptional<z.ZodArray<z.ZodString>>;
    segments_with_doc_count_field: z.ZodOptional<z.ZodNumber>;
    segments_with_deleted_docs: z.ZodOptional<z.ZodNumber>;
    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        results_from_metadata: z.ZodOptional<z.ZodNumber>;
        query: z.ZodOptional<z.ZodString>;
        specialized_for: z.ZodOptional<z.ZodString>;
        segments_counted_in_constant_time: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    segments_counted: z.ZodOptional<z.ZodNumber>;
    segments_collected: z.ZodOptional<z.ZodNumber>;
    map_reducer: z.ZodOptional<z.ZodString>;
    brute_force_used: z.ZodOptional<z.ZodNumber>;
    dynamic_pruning_attempted: z.ZodOptional<z.ZodNumber>;
    dynamic_pruning_used: z.ZodOptional<z.ZodNumber>;
    skipped_due_to_no_data: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SearchAggregationProfileDebug = z.infer<typeof SearchAggregationProfileDebug>;
export interface SearchAggregationProfileShape {
    breakdown: SearchAggregationBreakdown;
    description: string;
    time_in_nanos: DurationValue;
    type: string;
    debug?: SearchAggregationProfileDebugShape | undefined;
    children?: SearchAggregationProfileShape[] | undefined;
}
export declare const SearchAggregationProfile: z.ZodObject<{
    breakdown: z.ZodObject<{
        build_aggregation: z.ZodNumber;
        build_aggregation_count: z.ZodNumber;
        build_leaf_collector: z.ZodNumber;
        build_leaf_collector_count: z.ZodNumber;
        collect: z.ZodNumber;
        collect_count: z.ZodNumber;
        initialize: z.ZodNumber;
        initialize_count: z.ZodNumber;
        post_collection: z.ZodOptional<z.ZodNumber>;
        post_collection_count: z.ZodOptional<z.ZodNumber>;
        reduce: z.ZodNumber;
        reduce_count: z.ZodNumber;
    }, z.core.$strip>;
    description: z.ZodString;
    time_in_nanos: z.ZodAny;
    type: z.ZodString;
    debug: z.ZodOptional<z.ZodObject<{
        segments_with_multi_valued_ords: z.ZodOptional<z.ZodNumber>;
        collection_strategy: z.ZodOptional<z.ZodString>;
        segments_with_single_valued_ords: z.ZodOptional<z.ZodNumber>;
        total_buckets: z.ZodOptional<z.ZodNumber>;
        built_buckets: z.ZodOptional<z.ZodNumber>;
        result_strategy: z.ZodOptional<z.ZodString>;
        has_filter: z.ZodOptional<z.ZodBoolean>;
        delegate: z.ZodOptional<z.ZodString>;
        delegate_debug: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        chars_fetched: z.ZodOptional<z.ZodNumber>;
        extract_count: z.ZodOptional<z.ZodNumber>;
        extract_ns: z.ZodOptional<z.ZodNumber>;
        values_fetched: z.ZodOptional<z.ZodNumber>;
        collect_analyzed_ns: z.ZodOptional<z.ZodNumber>;
        collect_analyzed_count: z.ZodOptional<z.ZodNumber>;
        surviving_buckets: z.ZodOptional<z.ZodNumber>;
        ordinals_collectors_used: z.ZodOptional<z.ZodNumber>;
        ordinals_collectors_overhead_too_high: z.ZodOptional<z.ZodNumber>;
        string_hashing_collectors_used: z.ZodOptional<z.ZodNumber>;
        numeric_collectors_used: z.ZodOptional<z.ZodNumber>;
        empty_collectors_used: z.ZodOptional<z.ZodNumber>;
        deferred_aggregators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        segments_with_doc_count_field: z.ZodOptional<z.ZodNumber>;
        segments_with_deleted_docs: z.ZodOptional<z.ZodNumber>;
        filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            results_from_metadata: z.ZodOptional<z.ZodNumber>;
            query: z.ZodOptional<z.ZodString>;
            specialized_for: z.ZodOptional<z.ZodString>;
            segments_counted_in_constant_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        segments_counted: z.ZodOptional<z.ZodNumber>;
        segments_collected: z.ZodOptional<z.ZodNumber>;
        map_reducer: z.ZodOptional<z.ZodString>;
        brute_force_used: z.ZodOptional<z.ZodNumber>;
        dynamic_pruning_attempted: z.ZodOptional<z.ZodNumber>;
        dynamic_pruning_used: z.ZodOptional<z.ZodNumber>;
        skipped_due_to_no_data: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchAggregationProfile = z.infer<typeof SearchAggregationProfile>;
export declare const SearchBoundaryScanner: z.ZodEnum<{
    chars: "chars";
    sentence: "sentence";
    word: "word";
}>;
export type SearchBoundaryScanner = z.infer<typeof SearchBoundaryScanner>;
export interface SearchCollectorShape {
    name: string;
    reason: string;
    time_in_nanos: DurationValue;
    children?: SearchCollectorShape[] | undefined;
}
export declare const SearchCollector: z.ZodObject<{
    name: z.ZodString;
    reason: z.ZodString;
    time_in_nanos: z.ZodAny;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchCollector = z.infer<typeof SearchCollector>;
export declare const SearchSuggestBase: z.ZodObject<{
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>;
export type SearchSuggestBase = z.infer<typeof SearchSuggestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
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
/** Text or location that we want similar documents for or a lookup to a document's field for the text. */
export declare const SearchContext: z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    lat: z.ZodNumber;
    lon: z.ZodNumber;
}, z.core.$strip>, z.ZodObject<{
    geohash: z.ZodString;
}, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>;
export type SearchContext = z.infer<typeof SearchContext>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const SearchCompletionSuggestOption: z.ZodObject<{
    collate_match: z.ZodOptional<z.ZodBoolean>;
    contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    _id: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    _routing: z.ZodOptional<z.ZodString>;
    _score: z.ZodOptional<z.ZodNumber>;
    _source: z.ZodOptional<z.ZodAny>;
    text: z.ZodString;
    score: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SearchCompletionSuggestOption = z.infer<typeof SearchCompletionSuggestOption>;
export declare const SearchCompletionSuggest: z.ZodObject<{
    options: z.ZodUnion<readonly [z.ZodObject<{
        collate_match: z.ZodOptional<z.ZodBoolean>;
        contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        _routing: z.ZodOptional<z.ZodString>;
        _score: z.ZodOptional<z.ZodNumber>;
        _source: z.ZodOptional<z.ZodAny>;
        text: z.ZodString;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        collate_match: z.ZodOptional<z.ZodBoolean>;
        contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        _routing: z.ZodOptional<z.ZodString>;
        _score: z.ZodOptional<z.ZodNumber>;
        _source: z.ZodOptional<z.ZodAny>;
        text: z.ZodString;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>]>;
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>;
export type SearchCompletionSuggest = z.infer<typeof SearchCompletionSuggest>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const SearchKnnQueryProfileBreakdown: z.ZodObject<{
    advance: z.ZodNumber;
    advance_count: z.ZodNumber;
    build_scorer: z.ZodNumber;
    build_scorer_count: z.ZodNumber;
    compute_max_score: z.ZodNumber;
    compute_max_score_count: z.ZodNumber;
    count_weight: z.ZodNumber;
    count_weight_count: z.ZodNumber;
    create_weight: z.ZodNumber;
    create_weight_count: z.ZodNumber;
    match: z.ZodNumber;
    match_count: z.ZodNumber;
    next_doc: z.ZodNumber;
    next_doc_count: z.ZodNumber;
    score: z.ZodNumber;
    score_count: z.ZodNumber;
    set_min_competitive_score: z.ZodNumber;
    set_min_competitive_score_count: z.ZodNumber;
    shallow_advance: z.ZodNumber;
    shallow_advance_count: z.ZodNumber;
}, z.core.$strip>;
export type SearchKnnQueryProfileBreakdown = z.infer<typeof SearchKnnQueryProfileBreakdown>;
export interface SearchKnnQueryProfileResultShape {
    type: string;
    description: string;
    time?: Duration | undefined;
    time_in_nanos: DurationValue;
    breakdown: SearchKnnQueryProfileBreakdown;
    debug?: Record<string, unknown> | undefined;
    children?: SearchKnnQueryProfileResultShape[] | undefined;
}
export declare const SearchKnnQueryProfileResult: z.ZodObject<{
    type: z.ZodString;
    description: z.ZodString;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_nanos: z.ZodAny;
    breakdown: z.ZodObject<{
        advance: z.ZodNumber;
        advance_count: z.ZodNumber;
        build_scorer: z.ZodNumber;
        build_scorer_count: z.ZodNumber;
        compute_max_score: z.ZodNumber;
        compute_max_score_count: z.ZodNumber;
        count_weight: z.ZodNumber;
        count_weight_count: z.ZodNumber;
        create_weight: z.ZodNumber;
        create_weight_count: z.ZodNumber;
        match: z.ZodNumber;
        match_count: z.ZodNumber;
        next_doc: z.ZodNumber;
        next_doc_count: z.ZodNumber;
        score: z.ZodNumber;
        score_count: z.ZodNumber;
        set_min_competitive_score: z.ZodNumber;
        set_min_competitive_score_count: z.ZodNumber;
        shallow_advance: z.ZodNumber;
        shallow_advance_count: z.ZodNumber;
    }, z.core.$strip>;
    debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchKnnQueryProfileResult = z.infer<typeof SearchKnnQueryProfileResult>;
export interface SearchKnnCollectorResultShape {
    name: string;
    reason: string;
    time?: Duration | undefined;
    time_in_nanos: DurationValue;
    children?: SearchKnnCollectorResultShape[] | undefined;
}
export declare const SearchKnnCollectorResult: z.ZodObject<{
    name: z.ZodString;
    reason: z.ZodString;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_nanos: z.ZodAny;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchKnnCollectorResult = z.infer<typeof SearchKnnCollectorResult>;
export declare const SearchDfsKnnProfile: z.ZodObject<{
    vector_operations_count: z.ZodOptional<z.ZodNumber>;
    query: z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        description: z.ZodString;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_nanos: z.ZodAny;
        breakdown: z.ZodObject<{
            advance: z.ZodNumber;
            advance_count: z.ZodNumber;
            build_scorer: z.ZodNumber;
            build_scorer_count: z.ZodNumber;
            compute_max_score: z.ZodNumber;
            compute_max_score_count: z.ZodNumber;
            count_weight: z.ZodNumber;
            count_weight_count: z.ZodNumber;
            create_weight: z.ZodNumber;
            create_weight_count: z.ZodNumber;
            match: z.ZodNumber;
            match_count: z.ZodNumber;
            next_doc: z.ZodNumber;
            next_doc_count: z.ZodNumber;
            score: z.ZodNumber;
            score_count: z.ZodNumber;
            set_min_competitive_score: z.ZodNumber;
            set_min_competitive_score_count: z.ZodNumber;
            shallow_advance: z.ZodNumber;
            shallow_advance_count: z.ZodNumber;
        }, z.core.$strip>;
        debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
    rewrite_time: z.ZodNumber;
    collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
        name: z.ZodString;
        reason: z.ZodString;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_nanos: z.ZodAny;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchDfsKnnProfile = z.infer<typeof SearchDfsKnnProfile>;
export declare const SearchDfsStatisticsBreakdown: z.ZodObject<{
    collection_statistics: z.ZodNumber;
    collection_statistics_count: z.ZodNumber;
    create_weight: z.ZodNumber;
    create_weight_count: z.ZodNumber;
    rewrite: z.ZodNumber;
    rewrite_count: z.ZodNumber;
    term_statistics: z.ZodNumber;
    term_statistics_count: z.ZodNumber;
}, z.core.$strip>;
export type SearchDfsStatisticsBreakdown = z.infer<typeof SearchDfsStatisticsBreakdown>;
export interface SearchDfsStatisticsProfileShape {
    type: string;
    description: string;
    time?: Duration | undefined;
    time_in_nanos: DurationValue;
    breakdown: SearchDfsStatisticsBreakdown;
    debug?: Record<string, unknown> | undefined;
    children?: SearchDfsStatisticsProfileShape[] | undefined;
}
export declare const SearchDfsStatisticsProfile: z.ZodObject<{
    type: z.ZodString;
    description: z.ZodString;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_nanos: z.ZodAny;
    breakdown: z.ZodObject<{
        collection_statistics: z.ZodNumber;
        collection_statistics_count: z.ZodNumber;
        create_weight: z.ZodNumber;
        create_weight_count: z.ZodNumber;
        rewrite: z.ZodNumber;
        rewrite_count: z.ZodNumber;
        term_statistics: z.ZodNumber;
        term_statistics_count: z.ZodNumber;
    }, z.core.$strip>;
    debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchDfsStatisticsProfile = z.infer<typeof SearchDfsStatisticsProfile>;
export declare const SearchDfsProfile: z.ZodObject<{
    statistics: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        description: z.ZodString;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_nanos: z.ZodAny;
        breakdown: z.ZodObject<{
            collection_statistics: z.ZodNumber;
            collection_statistics_count: z.ZodNumber;
            create_weight: z.ZodNumber;
            create_weight_count: z.ZodNumber;
            rewrite: z.ZodNumber;
            rewrite_count: z.ZodNumber;
            term_statistics: z.ZodNumber;
            term_statistics_count: z.ZodNumber;
        }, z.core.$strip>;
        debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
    knn: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vector_operations_count: z.ZodOptional<z.ZodNumber>;
        query: z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            description: z.ZodString;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_nanos: z.ZodAny;
            breakdown: z.ZodObject<{
                advance: z.ZodNumber;
                advance_count: z.ZodNumber;
                build_scorer: z.ZodNumber;
                build_scorer_count: z.ZodNumber;
                compute_max_score: z.ZodNumber;
                compute_max_score_count: z.ZodNumber;
                count_weight: z.ZodNumber;
                count_weight_count: z.ZodNumber;
                create_weight: z.ZodNumber;
                create_weight_count: z.ZodNumber;
                match: z.ZodNumber;
                match_count: z.ZodNumber;
                next_doc: z.ZodNumber;
                next_doc_count: z.ZodNumber;
                score: z.ZodNumber;
                score_count: z.ZodNumber;
                set_min_competitive_score: z.ZodNumber;
                set_min_competitive_score_count: z.ZodNumber;
                shallow_advance: z.ZodNumber;
                shallow_advance_count: z.ZodNumber;
            }, z.core.$strip>;
            debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
        rewrite_time: z.ZodNumber;
        collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
            name: z.ZodString;
            reason: z.ZodString;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_nanos: z.ZodAny;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchDfsProfile = z.infer<typeof SearchDfsProfile>;
export declare const SearchFetchProfileBreakdown: z.ZodObject<{
    load_source: z.ZodOptional<z.ZodNumber>;
    load_source_count: z.ZodOptional<z.ZodNumber>;
    load_stored_fields: z.ZodOptional<z.ZodNumber>;
    load_stored_fields_count: z.ZodOptional<z.ZodNumber>;
    next_reader: z.ZodOptional<z.ZodNumber>;
    next_reader_count: z.ZodOptional<z.ZodNumber>;
    process_count: z.ZodOptional<z.ZodNumber>;
    process: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SearchFetchProfileBreakdown = z.infer<typeof SearchFetchProfileBreakdown>;
export declare const SearchFetchProfileDebug: z.ZodObject<{
    stored_fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    fast_path: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SearchFetchProfileDebug = z.infer<typeof SearchFetchProfileDebug>;
export interface SearchFetchProfileShape {
    type: string;
    description: string;
    time_in_nanos: DurationValue;
    breakdown: SearchFetchProfileBreakdown;
    debug?: SearchFetchProfileDebug | undefined;
    children?: SearchFetchProfileShape[] | undefined;
}
export declare const SearchFetchProfile: z.ZodObject<{
    type: z.ZodString;
    description: z.ZodString;
    time_in_nanos: z.ZodAny;
    breakdown: z.ZodObject<{
        load_source: z.ZodOptional<z.ZodNumber>;
        load_source_count: z.ZodOptional<z.ZodNumber>;
        load_stored_fields: z.ZodOptional<z.ZodNumber>;
        load_stored_fields_count: z.ZodOptional<z.ZodNumber>;
        next_reader: z.ZodOptional<z.ZodNumber>;
        next_reader_count: z.ZodOptional<z.ZodNumber>;
        process_count: z.ZodOptional<z.ZodNumber>;
        process: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    debug: z.ZodOptional<z.ZodObject<{
        stored_fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
        fast_path: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchFetchProfile = z.infer<typeof SearchFetchProfile>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
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
export declare const SearchTotalHitsRelation: z.ZodEnum<{
    gte: "gte";
    eq: "eq";
}>;
export type SearchTotalHitsRelation = z.infer<typeof SearchTotalHitsRelation>;
export declare const SearchTotalHits: z.ZodObject<{
    relation: z.ZodEnum<{
        gte: "gte";
        eq: "eq";
    }>;
    value: z.ZodNumber;
}, z.core.$strip>;
export type SearchTotalHits = z.infer<typeof SearchTotalHits>;
export interface SearchHitsMetadataShape {
    total?: SearchTotalHits | long | undefined;
    hits: SearchHitShape[];
    max_score?: double | null | undefined;
}
export declare const SearchHitsMetadata: z.ZodObject<{
    total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        relation: z.ZodEnum<{
            gte: "gte";
            eq: "eq";
        }>;
        value: z.ZodNumber;
    }, z.core.$strip>, z.ZodNumber]>>;
    hits: z.ZodArray<z.ZodObject<{
        _index: z.ZodString;
        _id: z.ZodOptional<z.ZodString>;
        _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        _explanation: z.ZodOptional<z.ZodObject<{
            description: z.ZodString;
            details: z.ZodArray<z.ZodLazy<z.ZodObject<{
                description: z.ZodString;
                details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                value: z.ZodNumber;
            }, z.core.$strip>>>;
            value: z.ZodNumber;
        }, z.core.$strip>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
        inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
        matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
        _nested: z.ZodOptional<z.ZodObject<{
            field: z.ZodString;
            offset: z.ZodNumber;
            _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        }, z.core.$strip>>;
        _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
        ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
        _shard: z.ZodOptional<z.ZodString>;
        _node: z.ZodOptional<z.ZodString>;
        _routing: z.ZodOptional<z.ZodString>;
        _source: z.ZodOptional<z.ZodAny>;
        _rank: z.ZodOptional<z.ZodNumber>;
        _seq_no: z.ZodOptional<z.ZodNumber>;
        _primary_term: z.ZodOptional<z.ZodNumber>;
        _version: z.ZodOptional<z.ZodNumber>;
        sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    }, z.core.$strip>>;
    max_score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
}, z.core.$strip>;
export type SearchHitsMetadata = z.infer<typeof SearchHitsMetadata>;
export interface SearchInnerHitsResultShape {
    hits: SearchHitsMetadataShape;
}
export declare const SearchInnerHitsResult: z.ZodObject<{
    hits: z.ZodObject<{
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            relation: z.ZodEnum<{
                gte: "gte";
                eq: "eq";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>, z.ZodNumber]>>;
        hits: z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodOptional<z.ZodString>;
            _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            _explanation: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                details: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    description: z.ZodString;
                    details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                    value: z.ZodNumber;
                }, z.core.$strip>>>;
                value: z.ZodNumber;
            }, z.core.$strip>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
            matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            _nested: z.ZodOptional<z.ZodObject<{
                field: z.ZodString;
                offset: z.ZodNumber;
                _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            }, z.core.$strip>>;
            _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
            ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
            _shard: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            _routing: z.ZodOptional<z.ZodString>;
            _source: z.ZodOptional<z.ZodAny>;
            _rank: z.ZodOptional<z.ZodNumber>;
            _seq_no: z.ZodOptional<z.ZodNumber>;
            _primary_term: z.ZodOptional<z.ZodNumber>;
            _version: z.ZodOptional<z.ZodNumber>;
            sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
        }, z.core.$strip>>;
        max_score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SearchInnerHitsResult = z.infer<typeof SearchInnerHitsResult>;
export interface SearchNestedIdentityShape {
    field: Field;
    offset: integer;
    _nested?: SearchNestedIdentityShape | undefined;
}
export declare const SearchNestedIdentity: z.ZodObject<{
    field: z.ZodString;
    offset: z.ZodNumber;
    _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
}, z.core.$strip>;
export type SearchNestedIdentity = z.infer<typeof SearchNestedIdentity>;
export declare const SequenceNumber: z.ZodNumber;
export type SequenceNumber = z.infer<typeof SequenceNumber>;
export interface SearchHitShape {
    _index: IndexName;
    _id?: Id | undefined;
    _score?: double | null | undefined;
    _explanation?: ExplainExplanation | undefined;
    fields?: Record<string, unknown> | undefined;
    highlight?: Record<string, string[]> | undefined;
    inner_hits?: Record<string, SearchInnerHitsResultShape> | undefined;
    matched_queries?: string[] | Record<string, double> | undefined;
    _nested?: SearchNestedIdentityShape | undefined;
    _ignored?: string[] | undefined;
    ignored_field_values?: Record<string, unknown[]> | undefined;
    _shard?: string | undefined;
    _node?: string | undefined;
    _routing?: string | undefined;
    _source?: unknown | undefined;
    _rank?: integer | undefined;
    _seq_no?: SequenceNumber | undefined;
    _primary_term?: long | undefined;
    _version?: VersionNumber | undefined;
    sort?: SortResults | undefined;
}
export declare const SearchHit: z.ZodObject<{
    _index: z.ZodString;
    _id: z.ZodOptional<z.ZodString>;
    _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    _explanation: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        details: z.ZodArray<z.ZodLazy<z.ZodObject<{
            description: z.ZodString;
            details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            value: z.ZodNumber;
        }, z.core.$strip>>>;
        value: z.ZodNumber;
    }, z.core.$strip>>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
    inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
    matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
    _nested: z.ZodOptional<z.ZodObject<{
        field: z.ZodString;
        offset: z.ZodNumber;
        _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
    }, z.core.$strip>>;
    _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
    _shard: z.ZodOptional<z.ZodString>;
    _node: z.ZodOptional<z.ZodString>;
    _routing: z.ZodOptional<z.ZodString>;
    _source: z.ZodOptional<z.ZodAny>;
    _rank: z.ZodOptional<z.ZodNumber>;
    _seq_no: z.ZodOptional<z.ZodNumber>;
    _primary_term: z.ZodOptional<z.ZodNumber>;
    _version: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
}, z.core.$strip>;
export type SearchHit = z.infer<typeof SearchHit>;
export declare const SearchPhraseSuggestOption: z.ZodObject<{
    text: z.ZodString;
    score: z.ZodNumber;
    highlighted: z.ZodOptional<z.ZodString>;
    collate_match: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SearchPhraseSuggestOption = z.infer<typeof SearchPhraseSuggestOption>;
export declare const SearchPhraseSuggest: z.ZodObject<{
    options: z.ZodUnion<readonly [z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>]>;
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>;
export type SearchPhraseSuggest = z.infer<typeof SearchPhraseSuggest>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const SearchQueryBreakdown: z.ZodObject<{
    advance: z.ZodNumber;
    advance_count: z.ZodNumber;
    build_scorer: z.ZodNumber;
    build_scorer_count: z.ZodNumber;
    create_weight: z.ZodNumber;
    create_weight_count: z.ZodNumber;
    match: z.ZodNumber;
    match_count: z.ZodNumber;
    shallow_advance: z.ZodNumber;
    shallow_advance_count: z.ZodNumber;
    next_doc: z.ZodNumber;
    next_doc_count: z.ZodNumber;
    score: z.ZodNumber;
    score_count: z.ZodNumber;
    compute_max_score: z.ZodNumber;
    compute_max_score_count: z.ZodNumber;
    count_weight: z.ZodNumber;
    count_weight_count: z.ZodNumber;
    set_min_competitive_score: z.ZodNumber;
    set_min_competitive_score_count: z.ZodNumber;
}, z.core.$strip>;
export type SearchQueryBreakdown = z.infer<typeof SearchQueryBreakdown>;
export interface SearchQueryProfileShape {
    breakdown: SearchQueryBreakdown;
    description: string;
    time_in_nanos: DurationValue;
    type: string;
    children?: SearchQueryProfileShape[] | undefined;
}
export declare const SearchQueryProfile: z.ZodObject<{
    breakdown: z.ZodObject<{
        advance: z.ZodNumber;
        advance_count: z.ZodNumber;
        build_scorer: z.ZodNumber;
        build_scorer_count: z.ZodNumber;
        create_weight: z.ZodNumber;
        create_weight_count: z.ZodNumber;
        match: z.ZodNumber;
        match_count: z.ZodNumber;
        shallow_advance: z.ZodNumber;
        shallow_advance_count: z.ZodNumber;
        next_doc: z.ZodNumber;
        next_doc_count: z.ZodNumber;
        score: z.ZodNumber;
        score_count: z.ZodNumber;
        compute_max_score: z.ZodNumber;
        compute_max_score_count: z.ZodNumber;
        count_weight: z.ZodNumber;
        count_weight_count: z.ZodNumber;
        set_min_competitive_score: z.ZodNumber;
        set_min_competitive_score_count: z.ZodNumber;
    }, z.core.$strip>;
    description: z.ZodString;
    time_in_nanos: z.ZodAny;
    type: z.ZodString;
    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
}, z.core.$strip>;
export type SearchQueryProfile = z.infer<typeof SearchQueryProfile>;
export declare const SearchSearchProfile: z.ZodObject<{
    collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
        name: z.ZodString;
        reason: z.ZodString;
        time_in_nanos: z.ZodAny;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
    query: z.ZodArray<z.ZodLazy<z.ZodObject<{
        breakdown: z.ZodObject<{
            advance: z.ZodNumber;
            advance_count: z.ZodNumber;
            build_scorer: z.ZodNumber;
            build_scorer_count: z.ZodNumber;
            create_weight: z.ZodNumber;
            create_weight_count: z.ZodNumber;
            match: z.ZodNumber;
            match_count: z.ZodNumber;
            shallow_advance: z.ZodNumber;
            shallow_advance_count: z.ZodNumber;
            next_doc: z.ZodNumber;
            next_doc_count: z.ZodNumber;
            score: z.ZodNumber;
            score_count: z.ZodNumber;
            compute_max_score: z.ZodNumber;
            compute_max_score_count: z.ZodNumber;
            count_weight: z.ZodNumber;
            count_weight_count: z.ZodNumber;
            set_min_competitive_score: z.ZodNumber;
            set_min_competitive_score_count: z.ZodNumber;
        }, z.core.$strip>;
        description: z.ZodString;
        time_in_nanos: z.ZodAny;
        type: z.ZodString;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
    rewrite_time: z.ZodNumber;
}, z.core.$strip>;
export type SearchSearchProfile = z.infer<typeof SearchSearchProfile>;
export declare const SearchShardProfile: z.ZodObject<{
    aggregations: z.ZodArray<z.ZodLazy<z.ZodObject<{
        breakdown: z.ZodObject<{
            build_aggregation: z.ZodNumber;
            build_aggregation_count: z.ZodNumber;
            build_leaf_collector: z.ZodNumber;
            build_leaf_collector_count: z.ZodNumber;
            collect: z.ZodNumber;
            collect_count: z.ZodNumber;
            initialize: z.ZodNumber;
            initialize_count: z.ZodNumber;
            post_collection: z.ZodOptional<z.ZodNumber>;
            post_collection_count: z.ZodOptional<z.ZodNumber>;
            reduce: z.ZodNumber;
            reduce_count: z.ZodNumber;
        }, z.core.$strip>;
        description: z.ZodString;
        time_in_nanos: z.ZodAny;
        type: z.ZodString;
        debug: z.ZodOptional<z.ZodObject<{
            segments_with_multi_valued_ords: z.ZodOptional<z.ZodNumber>;
            collection_strategy: z.ZodOptional<z.ZodString>;
            segments_with_single_valued_ords: z.ZodOptional<z.ZodNumber>;
            total_buckets: z.ZodOptional<z.ZodNumber>;
            built_buckets: z.ZodOptional<z.ZodNumber>;
            result_strategy: z.ZodOptional<z.ZodString>;
            has_filter: z.ZodOptional<z.ZodBoolean>;
            delegate: z.ZodOptional<z.ZodString>;
            delegate_debug: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            chars_fetched: z.ZodOptional<z.ZodNumber>;
            extract_count: z.ZodOptional<z.ZodNumber>;
            extract_ns: z.ZodOptional<z.ZodNumber>;
            values_fetched: z.ZodOptional<z.ZodNumber>;
            collect_analyzed_ns: z.ZodOptional<z.ZodNumber>;
            collect_analyzed_count: z.ZodOptional<z.ZodNumber>;
            surviving_buckets: z.ZodOptional<z.ZodNumber>;
            ordinals_collectors_used: z.ZodOptional<z.ZodNumber>;
            ordinals_collectors_overhead_too_high: z.ZodOptional<z.ZodNumber>;
            string_hashing_collectors_used: z.ZodOptional<z.ZodNumber>;
            numeric_collectors_used: z.ZodOptional<z.ZodNumber>;
            empty_collectors_used: z.ZodOptional<z.ZodNumber>;
            deferred_aggregators: z.ZodOptional<z.ZodArray<z.ZodString>>;
            segments_with_doc_count_field: z.ZodOptional<z.ZodNumber>;
            segments_with_deleted_docs: z.ZodOptional<z.ZodNumber>;
            filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                results_from_metadata: z.ZodOptional<z.ZodNumber>;
                query: z.ZodOptional<z.ZodString>;
                specialized_for: z.ZodOptional<z.ZodString>;
                segments_counted_in_constant_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            segments_counted: z.ZodOptional<z.ZodNumber>;
            segments_collected: z.ZodOptional<z.ZodNumber>;
            map_reducer: z.ZodOptional<z.ZodString>;
            brute_force_used: z.ZodOptional<z.ZodNumber>;
            dynamic_pruning_attempted: z.ZodOptional<z.ZodNumber>;
            dynamic_pruning_used: z.ZodOptional<z.ZodNumber>;
            skipped_due_to_no_data: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
    cluster: z.ZodString;
    dfs: z.ZodOptional<z.ZodObject<{
        statistics: z.ZodOptional<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            description: z.ZodString;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_nanos: z.ZodAny;
            breakdown: z.ZodObject<{
                collection_statistics: z.ZodNumber;
                collection_statistics_count: z.ZodNumber;
                create_weight: z.ZodNumber;
                create_weight_count: z.ZodNumber;
                rewrite: z.ZodNumber;
                rewrite_count: z.ZodNumber;
                term_statistics: z.ZodNumber;
                term_statistics_count: z.ZodNumber;
            }, z.core.$strip>;
            debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
        knn: z.ZodOptional<z.ZodArray<z.ZodObject<{
            vector_operations_count: z.ZodOptional<z.ZodNumber>;
            query: z.ZodArray<z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                description: z.ZodString;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_nanos: z.ZodAny;
                breakdown: z.ZodObject<{
                    advance: z.ZodNumber;
                    advance_count: z.ZodNumber;
                    build_scorer: z.ZodNumber;
                    build_scorer_count: z.ZodNumber;
                    compute_max_score: z.ZodNumber;
                    compute_max_score_count: z.ZodNumber;
                    count_weight: z.ZodNumber;
                    count_weight_count: z.ZodNumber;
                    create_weight: z.ZodNumber;
                    create_weight_count: z.ZodNumber;
                    match: z.ZodNumber;
                    match_count: z.ZodNumber;
                    next_doc: z.ZodNumber;
                    next_doc_count: z.ZodNumber;
                    score: z.ZodNumber;
                    score_count: z.ZodNumber;
                    set_min_competitive_score: z.ZodNumber;
                    set_min_competitive_score_count: z.ZodNumber;
                    shallow_advance: z.ZodNumber;
                    shallow_advance_count: z.ZodNumber;
                }, z.core.$strip>;
                debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
            rewrite_time: z.ZodNumber;
            collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
                name: z.ZodString;
                reason: z.ZodString;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_nanos: z.ZodAny;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    fetch: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        description: z.ZodString;
        time_in_nanos: z.ZodAny;
        breakdown: z.ZodObject<{
            load_source: z.ZodOptional<z.ZodNumber>;
            load_source_count: z.ZodOptional<z.ZodNumber>;
            load_stored_fields: z.ZodOptional<z.ZodNumber>;
            load_stored_fields_count: z.ZodOptional<z.ZodNumber>;
            next_reader: z.ZodOptional<z.ZodNumber>;
            next_reader_count: z.ZodOptional<z.ZodNumber>;
            process_count: z.ZodOptional<z.ZodNumber>;
            process: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        debug: z.ZodOptional<z.ZodObject<{
            stored_fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
            fast_path: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
    }, z.core.$strip>>>;
    id: z.ZodString;
    index: z.ZodString;
    node_id: z.ZodString;
    searches: z.ZodArray<z.ZodObject<{
        collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
            name: z.ZodString;
            reason: z.ZodString;
            time_in_nanos: z.ZodAny;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
        query: z.ZodArray<z.ZodLazy<z.ZodObject<{
            breakdown: z.ZodObject<{
                advance: z.ZodNumber;
                advance_count: z.ZodNumber;
                build_scorer: z.ZodNumber;
                build_scorer_count: z.ZodNumber;
                create_weight: z.ZodNumber;
                create_weight_count: z.ZodNumber;
                match: z.ZodNumber;
                match_count: z.ZodNumber;
                shallow_advance: z.ZodNumber;
                shallow_advance_count: z.ZodNumber;
                next_doc: z.ZodNumber;
                next_doc_count: z.ZodNumber;
                score: z.ZodNumber;
                score_count: z.ZodNumber;
                compute_max_score: z.ZodNumber;
                compute_max_score_count: z.ZodNumber;
                count_weight: z.ZodNumber;
                count_weight_count: z.ZodNumber;
                set_min_competitive_score: z.ZodNumber;
                set_min_competitive_score_count: z.ZodNumber;
            }, z.core.$strip>;
            description: z.ZodString;
            time_in_nanos: z.ZodAny;
            type: z.ZodString;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
        rewrite_time: z.ZodNumber;
    }, z.core.$strip>>;
    shard_id: z.ZodNumber;
}, z.core.$strip>;
export type SearchShardProfile = z.infer<typeof SearchShardProfile>;
/**
 * Coordinator snapshot of the original search request, serialized under `profile.request` when profiling is enabled.
 * Introduced in Elasticsearch 9.5; omitted when the cluster contains mixed-version nodes that do not serialize this metadata.
 */
export declare const SearchSearchRequestCoordinatorMetadata: z.ZodObject<{
    source: z.ZodOptional<z.ZodLazy<z.ZodObject<{
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
    }, z.core.$strip>>>;
    indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type SearchSearchRequestCoordinatorMetadata = z.infer<typeof SearchSearchRequestCoordinatorMetadata>;
export declare const SearchProfile: z.ZodObject<{
    shards: z.ZodArray<z.ZodObject<{
        aggregations: z.ZodArray<z.ZodLazy<z.ZodObject<{
            breakdown: z.ZodObject<{
                build_aggregation: z.ZodNumber;
                build_aggregation_count: z.ZodNumber;
                build_leaf_collector: z.ZodNumber;
                build_leaf_collector_count: z.ZodNumber;
                collect: z.ZodNumber;
                collect_count: z.ZodNumber;
                initialize: z.ZodNumber;
                initialize_count: z.ZodNumber;
                post_collection: z.ZodOptional<z.ZodNumber>;
                post_collection_count: z.ZodOptional<z.ZodNumber>;
                reduce: z.ZodNumber;
                reduce_count: z.ZodNumber;
            }, z.core.$strip>;
            description: z.ZodString;
            time_in_nanos: z.ZodAny;
            type: z.ZodString;
            debug: z.ZodOptional<z.ZodObject<{
                segments_with_multi_valued_ords: z.ZodOptional<z.ZodNumber>;
                collection_strategy: z.ZodOptional<z.ZodString>;
                segments_with_single_valued_ords: z.ZodOptional<z.ZodNumber>;
                total_buckets: z.ZodOptional<z.ZodNumber>;
                built_buckets: z.ZodOptional<z.ZodNumber>;
                result_strategy: z.ZodOptional<z.ZodString>;
                has_filter: z.ZodOptional<z.ZodBoolean>;
                delegate: z.ZodOptional<z.ZodString>;
                delegate_debug: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
                chars_fetched: z.ZodOptional<z.ZodNumber>;
                extract_count: z.ZodOptional<z.ZodNumber>;
                extract_ns: z.ZodOptional<z.ZodNumber>;
                values_fetched: z.ZodOptional<z.ZodNumber>;
                collect_analyzed_ns: z.ZodOptional<z.ZodNumber>;
                collect_analyzed_count: z.ZodOptional<z.ZodNumber>;
                surviving_buckets: z.ZodOptional<z.ZodNumber>;
                ordinals_collectors_used: z.ZodOptional<z.ZodNumber>;
                ordinals_collectors_overhead_too_high: z.ZodOptional<z.ZodNumber>;
                string_hashing_collectors_used: z.ZodOptional<z.ZodNumber>;
                numeric_collectors_used: z.ZodOptional<z.ZodNumber>;
                empty_collectors_used: z.ZodOptional<z.ZodNumber>;
                deferred_aggregators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                segments_with_doc_count_field: z.ZodOptional<z.ZodNumber>;
                segments_with_deleted_docs: z.ZodOptional<z.ZodNumber>;
                filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    results_from_metadata: z.ZodOptional<z.ZodNumber>;
                    query: z.ZodOptional<z.ZodString>;
                    specialized_for: z.ZodOptional<z.ZodString>;
                    segments_counted_in_constant_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
                segments_counted: z.ZodOptional<z.ZodNumber>;
                segments_collected: z.ZodOptional<z.ZodNumber>;
                map_reducer: z.ZodOptional<z.ZodString>;
                brute_force_used: z.ZodOptional<z.ZodNumber>;
                dynamic_pruning_attempted: z.ZodOptional<z.ZodNumber>;
                dynamic_pruning_used: z.ZodOptional<z.ZodNumber>;
                skipped_due_to_no_data: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
        cluster: z.ZodString;
        dfs: z.ZodOptional<z.ZodObject<{
            statistics: z.ZodOptional<z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                description: z.ZodString;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_nanos: z.ZodAny;
                breakdown: z.ZodObject<{
                    collection_statistics: z.ZodNumber;
                    collection_statistics_count: z.ZodNumber;
                    create_weight: z.ZodNumber;
                    create_weight_count: z.ZodNumber;
                    rewrite: z.ZodNumber;
                    rewrite_count: z.ZodNumber;
                    term_statistics: z.ZodNumber;
                    term_statistics_count: z.ZodNumber;
                }, z.core.$strip>;
                debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
            knn: z.ZodOptional<z.ZodArray<z.ZodObject<{
                vector_operations_count: z.ZodOptional<z.ZodNumber>;
                query: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    description: z.ZodString;
                    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    time_in_nanos: z.ZodAny;
                    breakdown: z.ZodObject<{
                        advance: z.ZodNumber;
                        advance_count: z.ZodNumber;
                        build_scorer: z.ZodNumber;
                        build_scorer_count: z.ZodNumber;
                        compute_max_score: z.ZodNumber;
                        compute_max_score_count: z.ZodNumber;
                        count_weight: z.ZodNumber;
                        count_weight_count: z.ZodNumber;
                        create_weight: z.ZodNumber;
                        create_weight_count: z.ZodNumber;
                        match: z.ZodNumber;
                        match_count: z.ZodNumber;
                        next_doc: z.ZodNumber;
                        next_doc_count: z.ZodNumber;
                        score: z.ZodNumber;
                        score_count: z.ZodNumber;
                        set_min_competitive_score: z.ZodNumber;
                        set_min_competitive_score_count: z.ZodNumber;
                        shallow_advance: z.ZodNumber;
                        shallow_advance_count: z.ZodNumber;
                    }, z.core.$strip>;
                    debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                }, z.core.$strip>>>;
                rewrite_time: z.ZodNumber;
                collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    name: z.ZodString;
                    reason: z.ZodString;
                    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    time_in_nanos: z.ZodAny;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        fetch: z.ZodOptional<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            description: z.ZodString;
            time_in_nanos: z.ZodAny;
            breakdown: z.ZodObject<{
                load_source: z.ZodOptional<z.ZodNumber>;
                load_source_count: z.ZodOptional<z.ZodNumber>;
                load_stored_fields: z.ZodOptional<z.ZodNumber>;
                load_stored_fields_count: z.ZodOptional<z.ZodNumber>;
                next_reader: z.ZodOptional<z.ZodNumber>;
                next_reader_count: z.ZodOptional<z.ZodNumber>;
                process_count: z.ZodOptional<z.ZodNumber>;
                process: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            debug: z.ZodOptional<z.ZodObject<{
                stored_fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
                fast_path: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
        }, z.core.$strip>>>;
        id: z.ZodString;
        index: z.ZodString;
        node_id: z.ZodString;
        searches: z.ZodArray<z.ZodObject<{
            collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
                name: z.ZodString;
                reason: z.ZodString;
                time_in_nanos: z.ZodAny;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
            query: z.ZodArray<z.ZodLazy<z.ZodObject<{
                breakdown: z.ZodObject<{
                    advance: z.ZodNumber;
                    advance_count: z.ZodNumber;
                    build_scorer: z.ZodNumber;
                    build_scorer_count: z.ZodNumber;
                    create_weight: z.ZodNumber;
                    create_weight_count: z.ZodNumber;
                    match: z.ZodNumber;
                    match_count: z.ZodNumber;
                    shallow_advance: z.ZodNumber;
                    shallow_advance_count: z.ZodNumber;
                    next_doc: z.ZodNumber;
                    next_doc_count: z.ZodNumber;
                    score: z.ZodNumber;
                    score_count: z.ZodNumber;
                    compute_max_score: z.ZodNumber;
                    compute_max_score_count: z.ZodNumber;
                    count_weight: z.ZodNumber;
                    count_weight_count: z.ZodNumber;
                    set_min_competitive_score: z.ZodNumber;
                    set_min_competitive_score_count: z.ZodNumber;
                }, z.core.$strip>;
                description: z.ZodString;
                time_in_nanos: z.ZodAny;
                type: z.ZodString;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
            rewrite_time: z.ZodNumber;
        }, z.core.$strip>>;
        shard_id: z.ZodNumber;
    }, z.core.$strip>>;
    request: z.ZodOptional<z.ZodObject<{
        source: z.ZodOptional<z.ZodLazy<z.ZodObject<{
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
        }, z.core.$strip>>>;
        indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SearchProfile = z.infer<typeof SearchProfile>;
export declare const SearchTermSuggestOption: z.ZodObject<{
    text: z.ZodString;
    score: z.ZodNumber;
    freq: z.ZodNumber;
    highlighted: z.ZodOptional<z.ZodString>;
    collate_match: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SearchTermSuggestOption = z.infer<typeof SearchTermSuggestOption>;
export declare const SearchTermSuggest: z.ZodObject<{
    options: z.ZodUnion<readonly [z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        freq: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        freq: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>]>;
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>;
export type SearchTermSuggest = z.infer<typeof SearchTermSuggest>;
export declare const SearchSuggest: z.ZodUnion<readonly [z.ZodObject<{
    options: z.ZodUnion<readonly [z.ZodObject<{
        collate_match: z.ZodOptional<z.ZodBoolean>;
        contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        _routing: z.ZodOptional<z.ZodString>;
        _score: z.ZodOptional<z.ZodNumber>;
        _source: z.ZodOptional<z.ZodAny>;
        text: z.ZodString;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        collate_match: z.ZodOptional<z.ZodBoolean>;
        contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        _id: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        _routing: z.ZodOptional<z.ZodString>;
        _score: z.ZodOptional<z.ZodNumber>;
        _source: z.ZodOptional<z.ZodAny>;
        text: z.ZodString;
        score: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>]>;
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodUnion<readonly [z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>]>;
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    options: z.ZodUnion<readonly [z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        freq: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        text: z.ZodString;
        score: z.ZodNumber;
        freq: z.ZodNumber;
        highlighted: z.ZodOptional<z.ZodString>;
        collate_match: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>]>;
    length: z.ZodNumber;
    offset: z.ZodNumber;
    text: z.ZodString;
}, z.core.$strip>]>;
export type SearchSuggest = z.infer<typeof SearchSuggest>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const ExpandWildcard: z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>;
export type ExpandWildcard = z.infer<typeof ExpandWildcard>;
export declare const ExpandWildcards: z.ZodUnion<readonly [z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>, z.ZodArray<z.ZodEnum<{
    open: "open";
    all: "all";
    closed: "closed";
    hidden: "hidden";
    none: "none";
}>>]>;
export type ExpandWildcards = z.infer<typeof ExpandWildcards>;
export declare const SearchType: z.ZodEnum<{
    query_then_fetch: "query_then_fetch";
    dfs_query_then_fetch: "dfs_query_then_fetch";
}>;
export type SearchType = z.infer<typeof SearchType>;
/** Run a search with a search template. */
export declare const SearchTemplateRequest: z.ZodObject<{
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
    ccs_minimize_roundtrips: z.ZodOptional<z.ZodBoolean>;
    expand_wildcards: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>, z.ZodArray<z.ZodEnum<{
        open: "open";
        all: "all";
        closed: "closed";
        hidden: "hidden";
        none: "none";
    }>>]>>;
    ignore_throttled: z.ZodOptional<z.ZodBoolean>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    preference: z.ZodOptional<z.ZodString>;
    routing: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    scroll: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    search_type: z.ZodOptional<z.ZodEnum<{
        query_then_fetch: "query_then_fetch";
        dfs_query_then_fetch: "dfs_query_then_fetch";
    }>>;
    rest_total_hits_as_int: z.ZodOptional<z.ZodBoolean>;
    typed_keys: z.ZodOptional<z.ZodBoolean>;
    explain: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodOptional<z.ZodString>;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    profile: z.ZodOptional<z.ZodBoolean>;
    source: z.ZodOptional<z.ZodLazy<z.ZodType<ScriptSourceShape, unknown, z.core.$ZodTypeInternals<ScriptSourceShape, unknown>>>>;
}, z.core.$strip>;
export type SearchTemplateRequest = z.infer<typeof SearchTemplateRequest>;
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const ShardFailure: z.ZodObject<{
    index: z.ZodOptional<z.ZodString>;
    _index: z.ZodOptional<z.ZodString>;
    node: z.ZodOptional<z.ZodString>;
    _node: z.ZodOptional<z.ZodString>;
    reason: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
    shard: z.ZodOptional<z.ZodNumber>;
    _shard: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodString>;
    primary: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ShardFailure = z.infer<typeof ShardFailure>;
export declare const ShardStatistics: z.ZodObject<{
    failed: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
        _node: z.ZodOptional<z.ZodString>;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        shard: z.ZodOptional<z.ZodNumber>;
        _shard: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    skipped: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ShardStatistics = z.infer<typeof ShardStatistics>;
/**
 * The aggregation name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
export declare const AggregateName: z.ZodString;
export type AggregateName = z.infer<typeof AggregateName>;
export declare const AggregationsAggregateBase: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsAggregateBase = z.infer<typeof AggregationsAggregateBase>;
export declare const AggregationsCardinalityAggregate: z.ZodObject<{
    value: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsCardinalityAggregate = z.infer<typeof AggregationsCardinalityAggregate>;
export declare const AggregationsKeyedPercentiles: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>;
export type AggregationsKeyedPercentiles = z.infer<typeof AggregationsKeyedPercentiles>;
export declare const AggregationsArrayPercentilesItem: z.ZodObject<{
    key: z.ZodNumber;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AggregationsArrayPercentilesItem = z.infer<typeof AggregationsArrayPercentilesItem>;
export declare const AggregationsPercentiles: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
    key: z.ZodNumber;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>]>;
export type AggregationsPercentiles = z.infer<typeof AggregationsPercentiles>;
export declare const AggregationsPercentilesAggregateBase: z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsPercentilesAggregateBase = z.infer<typeof AggregationsPercentilesAggregateBase>;
export declare const AggregationsHdrPercentilesAggregate: z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsHdrPercentilesAggregate = z.infer<typeof AggregationsHdrPercentilesAggregate>;
export declare const AggregationsHdrPercentileRanksAggregate: z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsHdrPercentileRanksAggregate = z.infer<typeof AggregationsHdrPercentileRanksAggregate>;
export declare const AggregationsTDigestPercentilesAggregate: z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTDigestPercentilesAggregate = z.infer<typeof AggregationsTDigestPercentilesAggregate>;
export declare const AggregationsTDigestPercentileRanksAggregate: z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTDigestPercentileRanksAggregate = z.infer<typeof AggregationsTDigestPercentileRanksAggregate>;
export declare const AggregationsPercentilesBucketAggregate: z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsPercentilesBucketAggregate = z.infer<typeof AggregationsPercentilesBucketAggregate>;
export declare const AggregationsSingleMetricAggregateBase: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSingleMetricAggregateBase = z.infer<typeof AggregationsSingleMetricAggregateBase>;
export declare const AggregationsMedianAbsoluteDeviationAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsMedianAbsoluteDeviationAggregate = z.infer<typeof AggregationsMedianAbsoluteDeviationAggregate>;
export declare const AggregationsMinAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsMinAggregate = z.infer<typeof AggregationsMinAggregate>;
export declare const AggregationsMaxAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsMaxAggregate = z.infer<typeof AggregationsMaxAggregate>;
/** Sum aggregation result. `value` is always present and is zero if there were no values to process. */
export declare const AggregationsSumAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSumAggregate = z.infer<typeof AggregationsSumAggregate>;
export declare const AggregationsAvgAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsAvgAggregate = z.infer<typeof AggregationsAvgAggregate>;
/** Weighted average aggregation result. `value` is missing if the weight was set to zero. */
export declare const AggregationsWeightedAvgAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsWeightedAvgAggregate = z.infer<typeof AggregationsWeightedAvgAggregate>;
/** Value count aggregation result. `value` is always present. */
export declare const AggregationsValueCountAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsValueCountAggregate = z.infer<typeof AggregationsValueCountAggregate>;
export declare const AggregationsSimpleValueAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSimpleValueAggregate = z.infer<typeof AggregationsSimpleValueAggregate>;
export declare const AggregationsDerivativeAggregate: z.ZodObject<{
    normalized_value: z.ZodOptional<z.ZodNumber>;
    normalized_value_as_string: z.ZodOptional<z.ZodString>;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsDerivativeAggregate = z.infer<typeof AggregationsDerivativeAggregate>;
export declare const AggregationsBucketMetricValueAggregate: z.ZodObject<{
    keys: z.ZodArray<z.ZodString>;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsBucketMetricValueAggregate = z.infer<typeof AggregationsBucketMetricValueAggregate>;
export declare const AggregationsAbstractChangePoint: z.ZodObject<{
    p_value: z.ZodNumber;
    change_point: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsAbstractChangePoint = z.infer<typeof AggregationsAbstractChangePoint>;
export declare const AggregationsDip: z.ZodObject<{
    p_value: z.ZodNumber;
    change_point: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsDip = z.infer<typeof AggregationsDip>;
export declare const AggregationsDistributionChange: z.ZodObject<{
    p_value: z.ZodNumber;
    change_point: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsDistributionChange = z.infer<typeof AggregationsDistributionChange>;
export declare const AggregationsIndeterminable: z.ZodObject<{
    reason: z.ZodString;
}, z.core.$strip>;
export type AggregationsIndeterminable = z.infer<typeof AggregationsIndeterminable>;
export declare const AggregationsNonStationary: z.ZodObject<{
    p_value: z.ZodNumber;
    r_value: z.ZodNumber;
    trend: z.ZodString;
}, z.core.$strip>;
export type AggregationsNonStationary = z.infer<typeof AggregationsNonStationary>;
export declare const AggregationsSpike: z.ZodObject<{
    p_value: z.ZodNumber;
    change_point: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsSpike = z.infer<typeof AggregationsSpike>;
export declare const AggregationsStationary: z.ZodObject<{}, z.core.$strip>;
export type AggregationsStationary = z.infer<typeof AggregationsStationary>;
export declare const AggregationsStepChange: z.ZodObject<{
    p_value: z.ZodNumber;
    change_point: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsStepChange = z.infer<typeof AggregationsStepChange>;
export declare const AggregationsTrendChange: z.ZodObject<{
    p_value: z.ZodNumber;
    r_value: z.ZodNumber;
    change_point: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsTrendChange = z.infer<typeof AggregationsTrendChange>;
export declare const AggregationsChangeType: z.ZodUnion<readonly [z.ZodObject<{
    dip: z.ZodObject<{
        p_value: z.ZodNumber;
        change_point: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    distribution_change: z.ZodObject<{
        p_value: z.ZodNumber;
        change_point: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    indeterminable: z.ZodObject<{
        reason: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    non_stationary: z.ZodObject<{
        p_value: z.ZodNumber;
        r_value: z.ZodNumber;
        trend: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    spike: z.ZodObject<{
        p_value: z.ZodNumber;
        change_point: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    stationary: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    step_change: z.ZodObject<{
        p_value: z.ZodNumber;
        change_point: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>, z.ZodObject<{
    trend_change: z.ZodObject<{
        p_value: z.ZodNumber;
        r_value: z.ZodNumber;
        change_point: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>]>;
export type AggregationsChangeType = z.infer<typeof AggregationsChangeType>;
/** Base type for multi-bucket aggregation results that can hold sub-aggregations results. */
export declare const AggregationsMultiBucketBase: z.ZodObject<{
    doc_count: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsMultiBucketBase = z.infer<typeof AggregationsMultiBucketBase>;
export declare const AggregationsChangePointBucket: z.ZodObject<{
    doc_count: z.ZodNumber;
    key: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsChangePointBucket = z.infer<typeof AggregationsChangePointBucket>;
export declare const AggregationsChangePointAggregate: z.ZodObject<{
    type: z.ZodUnion<readonly [z.ZodObject<{
        dip: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        distribution_change: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        indeterminable: z.ZodObject<{
            reason: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        non_stationary: z.ZodObject<{
            p_value: z.ZodNumber;
            r_value: z.ZodNumber;
            trend: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        spike: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        stationary: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        step_change: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        trend_change: z.ZodObject<{
            p_value: z.ZodNumber;
            r_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>]>;
    bucket: z.ZodOptional<z.ZodObject<{
        doc_count: z.ZodNumber;
        key: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    }, z.core.$catchall<z.ZodAny>>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsChangePointAggregate = z.infer<typeof AggregationsChangePointAggregate>;
/**
 * Statistics aggregation result. `min`, `max` and `avg` are missing if there were no values to process
 * (`count` is zero).
 */
export declare const AggregationsStatsAggregate: z.ZodObject<{
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsStatsAggregate = z.infer<typeof AggregationsStatsAggregate>;
export declare const AggregationsStatsBucketAggregate: z.ZodObject<{
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsStatsBucketAggregate = z.infer<typeof AggregationsStatsBucketAggregate>;
export declare const AggregationsStandardDeviationBounds: z.ZodObject<{
    upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
}, z.core.$strip>;
export type AggregationsStandardDeviationBounds = z.infer<typeof AggregationsStandardDeviationBounds>;
export declare const AggregationsStandardDeviationBoundsAsString: z.ZodObject<{
    upper: z.ZodString;
    lower: z.ZodString;
    upper_population: z.ZodString;
    lower_population: z.ZodString;
    upper_sampling: z.ZodString;
    lower_sampling: z.ZodString;
}, z.core.$strip>;
export type AggregationsStandardDeviationBoundsAsString = z.infer<typeof AggregationsStandardDeviationBoundsAsString>;
export declare const AggregationsExtendedStatsAggregate: z.ZodObject<{
    sum_of_squares: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_bounds: z.ZodOptional<z.ZodObject<{
        upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    }, z.core.$strip>>;
    sum_of_squares_as_string: z.ZodOptional<z.ZodString>;
    variance_as_string: z.ZodOptional<z.ZodString>;
    variance_population_as_string: z.ZodOptional<z.ZodString>;
    variance_sampling_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_bounds_as_string: z.ZodOptional<z.ZodObject<{
        upper: z.ZodString;
        lower: z.ZodString;
        upper_population: z.ZodString;
        lower_population: z.ZodString;
        upper_sampling: z.ZodString;
        lower_sampling: z.ZodString;
    }, z.core.$strip>>;
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsExtendedStatsAggregate = z.infer<typeof AggregationsExtendedStatsAggregate>;
export declare const AggregationsExtendedStatsBucketAggregate: z.ZodObject<{
    sum_of_squares: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_bounds: z.ZodOptional<z.ZodObject<{
        upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    }, z.core.$strip>>;
    sum_of_squares_as_string: z.ZodOptional<z.ZodString>;
    variance_as_string: z.ZodOptional<z.ZodString>;
    variance_population_as_string: z.ZodOptional<z.ZodString>;
    variance_sampling_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_bounds_as_string: z.ZodOptional<z.ZodObject<{
        upper: z.ZodString;
        lower: z.ZodString;
        upper_population: z.ZodString;
        lower_population: z.ZodString;
        upper_sampling: z.ZodString;
        lower_sampling: z.ZodString;
    }, z.core.$strip>>;
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsExtendedStatsBucketAggregate = z.infer<typeof AggregationsExtendedStatsBucketAggregate>;
export declare const AggregationsCartesianBoundsAggregate: z.ZodObject<{
    bounds: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsCartesianBoundsAggregate = z.infer<typeof AggregationsCartesianBoundsAggregate>;
export declare const CartesianPoint: z.ZodObject<{
    x: z.ZodNumber;
    y: z.ZodNumber;
}, z.core.$strip>;
export type CartesianPoint = z.infer<typeof CartesianPoint>;
export declare const AggregationsCartesianCentroidAggregate: z.ZodObject<{
    count: z.ZodNumber;
    location: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsCartesianCentroidAggregate = z.infer<typeof AggregationsCartesianCentroidAggregate>;
export declare const AggregationsGeoBoundsAggregate: z.ZodObject<{
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
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoBoundsAggregate = z.infer<typeof AggregationsGeoBoundsAggregate>;
export declare const AggregationsGeoCentroidAggregate: z.ZodObject<{
    count: z.ZodNumber;
    location: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoCentroidAggregate = z.infer<typeof AggregationsGeoCentroidAggregate>;
export declare const AggregationsMultiBucketAggregateBase: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsMultiBucketAggregateBase = z.infer<typeof AggregationsMultiBucketAggregateBase>;
export declare const AggregationsHistogramAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsHistogramAggregate = z.infer<typeof AggregationsHistogramAggregate>;
export declare const AggregationsDateHistogramAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsDateHistogramAggregate = z.infer<typeof AggregationsDateHistogramAggregate>;
export declare const AggregationsAutoDateHistogramAggregate: z.ZodObject<{
    interval: z.ZodString;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsAutoDateHistogramAggregate = z.infer<typeof AggregationsAutoDateHistogramAggregate>;
export declare const AggregationsVariableWidthHistogramAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsVariableWidthHistogramAggregate = z.infer<typeof AggregationsVariableWidthHistogramAggregate>;
export declare const AggregationsTermsAggregateBase: z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTermsAggregateBase = z.infer<typeof AggregationsTermsAggregateBase>;
/** Result of a `terms` aggregation when the field is a string. */
export declare const AggregationsStringTermsAggregate: z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsStringTermsAggregate = z.infer<typeof AggregationsStringTermsAggregate>;
/** Result of a `terms` aggregation when the field is some kind of whole number like a integer, long, or a date. */
export declare const AggregationsLongTermsAggregate: z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsLongTermsAggregate = z.infer<typeof AggregationsLongTermsAggregate>;
/** Result of a `terms` aggregation when the field is some kind of decimal number like a float, double, or distance. */
export declare const AggregationsDoubleTermsAggregate: z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsDoubleTermsAggregate = z.infer<typeof AggregationsDoubleTermsAggregate>;
/** Result of a `terms` aggregation when the field is unmapped. `buckets` is always empty. */
export declare const AggregationsUnmappedTermsAggregate: z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsUnmappedTermsAggregate = z.infer<typeof AggregationsUnmappedTermsAggregate>;
/** Result of the `rare_terms` aggregation when the field is some kind of whole number like a integer, long, or a date. */
export declare const AggregationsLongRareTermsAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsLongRareTermsAggregate = z.infer<typeof AggregationsLongRareTermsAggregate>;
/** Result of the `rare_terms` aggregation when the field is a string. */
export declare const AggregationsStringRareTermsAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsStringRareTermsAggregate = z.infer<typeof AggregationsStringRareTermsAggregate>;
/** Result of a `rare_terms` aggregation when the field is unmapped. `buckets` is always empty. */
export declare const AggregationsUnmappedRareTermsAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsUnmappedRareTermsAggregate = z.infer<typeof AggregationsUnmappedRareTermsAggregate>;
export declare const AggregationsMultiTermsAggregate: z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsMultiTermsAggregate = z.infer<typeof AggregationsMultiTermsAggregate>;
/** Base type for single-bucket aggregation results that can hold sub-aggregations results. */
export declare const AggregationsSingleBucketAggregateBase: z.ZodObject<{
    doc_count: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSingleBucketAggregateBase = z.infer<typeof AggregationsSingleBucketAggregateBase>;
export declare const AggregationsMissingAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsMissingAggregate = z.infer<typeof AggregationsMissingAggregate>;
export declare const AggregationsNestedAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsNestedAggregate = z.infer<typeof AggregationsNestedAggregate>;
export declare const AggregationsReverseNestedAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsReverseNestedAggregate = z.infer<typeof AggregationsReverseNestedAggregate>;
export declare const AggregationsGlobalAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsGlobalAggregate = z.infer<typeof AggregationsGlobalAggregate>;
export declare const AggregationsFilterAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsFilterAggregate = z.infer<typeof AggregationsFilterAggregate>;
export declare const AggregationsChildrenAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsChildrenAggregate = z.infer<typeof AggregationsChildrenAggregate>;
export declare const AggregationsParentAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsParentAggregate = z.infer<typeof AggregationsParentAggregate>;
export declare const AggregationsSamplerAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsSamplerAggregate = z.infer<typeof AggregationsSamplerAggregate>;
export declare const AggregationsUnmappedSamplerAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsUnmappedSamplerAggregate = z.infer<typeof AggregationsUnmappedSamplerAggregate>;
export declare const AggregationsGeoHashGridAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoHashGridAggregate = z.infer<typeof AggregationsGeoHashGridAggregate>;
export declare const AggregationsGeoTileGridAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoTileGridAggregate = z.infer<typeof AggregationsGeoTileGridAggregate>;
export declare const AggregationsGeoHexGridAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoHexGridAggregate = z.infer<typeof AggregationsGeoHexGridAggregate>;
export declare const AggregationsRangeAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsRangeAggregate = z.infer<typeof AggregationsRangeAggregate>;
/**
 * Result of a `date_range` aggregation. Same format as a for a `range` aggregation: `from` and `to`
 * in `buckets` are milliseconds since the Epoch, represented as a floating point number.
 */
export declare const AggregationsDateRangeAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsDateRangeAggregate = z.infer<typeof AggregationsDateRangeAggregate>;
/** Result of a `geo_distance` aggregation. The unit for `from` and `to` is meters by default. */
export declare const AggregationsGeoDistanceAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoDistanceAggregate = z.infer<typeof AggregationsGeoDistanceAggregate>;
export declare const AggregationsIpRangeAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsIpRangeAggregate = z.infer<typeof AggregationsIpRangeAggregate>;
export declare const AggregationsIpPrefixAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsIpPrefixAggregate = z.infer<typeof AggregationsIpPrefixAggregate>;
export declare const AggregationsFiltersAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsFiltersAggregate = z.infer<typeof AggregationsFiltersAggregate>;
export declare const AggregationsAdjacencyMatrixAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsAdjacencyMatrixAggregate = z.infer<typeof AggregationsAdjacencyMatrixAggregate>;
export declare const AggregationsSignificantTermsAggregateBase: z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSignificantTermsAggregateBase = z.infer<typeof AggregationsSignificantTermsAggregateBase>;
export declare const AggregationsSignificantLongTermsAggregate: z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSignificantLongTermsAggregate = z.infer<typeof AggregationsSignificantLongTermsAggregate>;
export declare const AggregationsSignificantStringTermsAggregate: z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsSignificantStringTermsAggregate = z.infer<typeof AggregationsSignificantStringTermsAggregate>;
/** Result of the `significant_terms` aggregation on an unmapped field. `buckets` is always empty. */
export declare const AggregationsUnmappedSignificantTermsAggregate: z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsUnmappedSignificantTermsAggregate = z.infer<typeof AggregationsUnmappedSignificantTermsAggregate>;
export declare const AggregationsCompositeAggregate: z.ZodObject<{
    after_key: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsCompositeAggregate = z.infer<typeof AggregationsCompositeAggregate>;
export declare const AggregationsFrequentItemSetsAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsFrequentItemSetsAggregate = z.infer<typeof AggregationsFrequentItemSetsAggregate>;
export declare const AggregationsTimeSeriesAggregate: z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTimeSeriesAggregate = z.infer<typeof AggregationsTimeSeriesAggregate>;
export declare const AggregationsScriptedMetricAggregate: z.ZodObject<{
    value: z.ZodAny;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsScriptedMetricAggregate = z.infer<typeof AggregationsScriptedMetricAggregate>;
export declare const AggregationsTopHitsAggregate: z.ZodObject<{
    hits: z.ZodLazy<z.ZodObject<{
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            relation: z.ZodEnum<{
                gte: "gte";
                eq: "eq";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>, z.ZodNumber]>>;
        hits: z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodOptional<z.ZodString>;
            _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            _explanation: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                details: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    description: z.ZodString;
                    details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                    value: z.ZodNumber;
                }, z.core.$strip>>>;
                value: z.ZodNumber;
            }, z.core.$strip>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
            matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            _nested: z.ZodOptional<z.ZodObject<{
                field: z.ZodString;
                offset: z.ZodNumber;
                _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            }, z.core.$strip>>;
            _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
            ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
            _shard: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            _routing: z.ZodOptional<z.ZodString>;
            _source: z.ZodOptional<z.ZodAny>;
            _rank: z.ZodOptional<z.ZodNumber>;
            _seq_no: z.ZodOptional<z.ZodNumber>;
            _primary_term: z.ZodOptional<z.ZodNumber>;
            _version: z.ZodOptional<z.ZodNumber>;
            sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
        }, z.core.$strip>>;
        max_score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTopHitsAggregate = z.infer<typeof AggregationsTopHitsAggregate>;
export declare const AggregationsInferenceClassImportance: z.ZodObject<{
    class_name: z.ZodString;
    importance: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsInferenceClassImportance = z.infer<typeof AggregationsInferenceClassImportance>;
export declare const AggregationsInferenceFeatureImportance: z.ZodObject<{
    feature_name: z.ZodString;
    importance: z.ZodOptional<z.ZodNumber>;
    classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        class_name: z.ZodString;
        importance: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type AggregationsInferenceFeatureImportance = z.infer<typeof AggregationsInferenceFeatureImportance>;
export declare const AggregationsInferenceTopClassEntry: z.ZodObject<{
    class_name: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    class_probability: z.ZodNumber;
    class_score: z.ZodNumber;
}, z.core.$strip>;
export type AggregationsInferenceTopClassEntry = z.infer<typeof AggregationsInferenceTopClassEntry>;
export declare const AggregationsInferenceAggregate: z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
    feature_importance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        feature_name: z.ZodString;
        importance: z.ZodOptional<z.ZodNumber>;
        classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            class_name: z.ZodString;
            importance: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    top_classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        class_name: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
        class_probability: z.ZodNumber;
        class_score: z.ZodNumber;
    }, z.core.$strip>>>;
    warning: z.ZodOptional<z.ZodString>;
}, z.core.$catchall<z.ZodAny>>;
export type AggregationsInferenceAggregate = z.infer<typeof AggregationsInferenceAggregate>;
export declare const AggregationsStringStatsAggregate: z.ZodObject<{
    count: z.ZodNumber;
    min_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    entropy: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    distribution: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodNumber>, z.ZodNull]>>;
    min_length_as_string: z.ZodOptional<z.ZodString>;
    max_length_as_string: z.ZodOptional<z.ZodString>;
    avg_length_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsStringStatsAggregate = z.infer<typeof AggregationsStringStatsAggregate>;
export declare const AggregationsBoxPlotAggregate: z.ZodObject<{
    min: z.ZodNumber;
    max: z.ZodNumber;
    q1: z.ZodNumber;
    q2: z.ZodNumber;
    q3: z.ZodNumber;
    lower: z.ZodNumber;
    upper: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    q1_as_string: z.ZodOptional<z.ZodString>;
    q2_as_string: z.ZodOptional<z.ZodString>;
    q3_as_string: z.ZodOptional<z.ZodString>;
    lower_as_string: z.ZodOptional<z.ZodString>;
    upper_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsBoxPlotAggregate = z.infer<typeof AggregationsBoxPlotAggregate>;
export declare const AggregationsTopMetrics: z.ZodObject<{
    sort: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
    metrics: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
}, z.core.$strip>;
export type AggregationsTopMetrics = z.infer<typeof AggregationsTopMetrics>;
export declare const AggregationsTopMetricsAggregate: z.ZodObject<{
    top: z.ZodArray<z.ZodObject<{
        sort: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
        metrics: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTopMetricsAggregate = z.infer<typeof AggregationsTopMetricsAggregate>;
export declare const AggregationsTTestAggregate: z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsTTestAggregate = z.infer<typeof AggregationsTTestAggregate>;
export declare const AggregationsRateAggregate: z.ZodObject<{
    value: z.ZodNumber;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsRateAggregate = z.infer<typeof AggregationsRateAggregate>;
/** Result of the `cumulative_cardinality` aggregation */
export declare const AggregationsCumulativeCardinalityAggregate: z.ZodObject<{
    value: z.ZodNumber;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsCumulativeCardinalityAggregate = z.infer<typeof AggregationsCumulativeCardinalityAggregate>;
export declare const AggregationsMatrixStatsFields: z.ZodObject<{
    name: z.ZodString;
    count: z.ZodNumber;
    mean: z.ZodNumber;
    variance: z.ZodNumber;
    skewness: z.ZodNumber;
    kurtosis: z.ZodNumber;
    covariance: z.ZodRecord<z.ZodString, z.ZodNumber>;
    correlation: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type AggregationsMatrixStatsFields = z.infer<typeof AggregationsMatrixStatsFields>;
export declare const AggregationsMatrixStatsAggregate: z.ZodObject<{
    doc_count: z.ZodNumber;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        mean: z.ZodNumber;
        variance: z.ZodNumber;
        skewness: z.ZodNumber;
        kurtosis: z.ZodNumber;
        covariance: z.ZodRecord<z.ZodString, z.ZodNumber>;
        correlation: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsMatrixStatsAggregate = z.infer<typeof AggregationsMatrixStatsAggregate>;
/** A GeoJson GeoLine. */
export declare const GeoLine: z.ZodObject<{
    type: z.ZodString;
    coordinates: z.ZodArray<z.ZodArray<z.ZodNumber>>;
}, z.core.$strip>;
export type GeoLine = z.infer<typeof GeoLine>;
export declare const AggregationsGeoLineAggregate: z.ZodObject<{
    type: z.ZodString;
    geometry: z.ZodObject<{
        type: z.ZodString;
        coordinates: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>;
    properties: z.ZodAny;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>;
export type AggregationsGeoLineAggregate = z.infer<typeof AggregationsGeoLineAggregate>;
export declare const AggregationsAggregate: z.ZodUnion<readonly [z.ZodObject<{
    value: z.ZodNumber;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
        key: z.ZodNumber;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    normalized_value: z.ZodOptional<z.ZodNumber>;
    normalized_value_as_string: z.ZodOptional<z.ZodString>;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    keys: z.ZodArray<z.ZodString>;
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodUnion<readonly [z.ZodObject<{
        dip: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        distribution_change: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        indeterminable: z.ZodObject<{
            reason: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        non_stationary: z.ZodObject<{
            p_value: z.ZodNumber;
            r_value: z.ZodNumber;
            trend: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        spike: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        stationary: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        step_change: z.ZodObject<{
            p_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        trend_change: z.ZodObject<{
            p_value: z.ZodNumber;
            r_value: z.ZodNumber;
            change_point: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>]>;
    bucket: z.ZodOptional<z.ZodObject<{
        doc_count: z.ZodNumber;
        key: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
    }, z.core.$catchall<z.ZodAny>>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    sum_of_squares: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_bounds: z.ZodOptional<z.ZodObject<{
        upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    }, z.core.$strip>>;
    sum_of_squares_as_string: z.ZodOptional<z.ZodString>;
    variance_as_string: z.ZodOptional<z.ZodString>;
    variance_population_as_string: z.ZodOptional<z.ZodString>;
    variance_sampling_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_bounds_as_string: z.ZodOptional<z.ZodObject<{
        upper: z.ZodString;
        lower: z.ZodString;
        upper_population: z.ZodString;
        lower_population: z.ZodString;
        upper_sampling: z.ZodString;
        lower_sampling: z.ZodString;
    }, z.core.$strip>>;
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    sum_of_squares: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    variance_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    std_deviation_bounds: z.ZodOptional<z.ZodObject<{
        upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    }, z.core.$strip>>;
    sum_of_squares_as_string: z.ZodOptional<z.ZodString>;
    variance_as_string: z.ZodOptional<z.ZodString>;
    variance_population_as_string: z.ZodOptional<z.ZodString>;
    variance_sampling_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_as_string: z.ZodOptional<z.ZodString>;
    std_deviation_bounds_as_string: z.ZodOptional<z.ZodObject<{
        upper: z.ZodString;
        lower: z.ZodString;
        upper_population: z.ZodString;
        lower_population: z.ZodString;
        upper_sampling: z.ZodString;
        lower_sampling: z.ZodString;
    }, z.core.$strip>>;
    count: z.ZodNumber;
    min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    sum: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    avg_as_string: z.ZodOptional<z.ZodString>;
    sum_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    bounds: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    count: z.ZodNumber;
    location: z.ZodOptional<z.ZodObject<{
        x: z.ZodNumber;
        y: z.ZodNumber;
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
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
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    count: z.ZodNumber;
    location: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        lat: z.ZodNumber;
        lon: z.ZodNumber;
    }, z.core.$strip>, z.ZodObject<{
        geohash: z.ZodString;
    }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    interval: z.ZodString;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
    sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    doc_count: z.ZodNumber;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    bg_count: z.ZodOptional<z.ZodNumber>;
    doc_count: z.ZodOptional<z.ZodNumber>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    after_key: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodAny;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    hits: z.ZodLazy<z.ZodObject<{
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            relation: z.ZodEnum<{
                gte: "gte";
                eq: "eq";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>, z.ZodNumber]>>;
        hits: z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodOptional<z.ZodString>;
            _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            _explanation: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                details: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    description: z.ZodString;
                    details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                    value: z.ZodNumber;
                }, z.core.$strip>>>;
                value: z.ZodNumber;
            }, z.core.$strip>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
            matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            _nested: z.ZodOptional<z.ZodObject<{
                field: z.ZodString;
                offset: z.ZodNumber;
                _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            }, z.core.$strip>>;
            _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
            ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
            _shard: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            _routing: z.ZodOptional<z.ZodString>;
            _source: z.ZodOptional<z.ZodAny>;
            _rank: z.ZodOptional<z.ZodNumber>;
            _seq_no: z.ZodOptional<z.ZodNumber>;
            _primary_term: z.ZodOptional<z.ZodNumber>;
            _version: z.ZodOptional<z.ZodNumber>;
            sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
        }, z.core.$strip>>;
        max_score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
    feature_importance: z.ZodOptional<z.ZodArray<z.ZodObject<{
        feature_name: z.ZodString;
        importance: z.ZodOptional<z.ZodNumber>;
        classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            class_name: z.ZodString;
            importance: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
    top_classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        class_name: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
        class_probability: z.ZodNumber;
        class_score: z.ZodNumber;
    }, z.core.$strip>>>;
    warning: z.ZodOptional<z.ZodString>;
}, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
    count: z.ZodNumber;
    min_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    max_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    avg_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    entropy: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    distribution: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodNumber>, z.ZodNull]>>;
    min_length_as_string: z.ZodOptional<z.ZodString>;
    max_length_as_string: z.ZodOptional<z.ZodString>;
    avg_length_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    min: z.ZodNumber;
    max: z.ZodNumber;
    q1: z.ZodNumber;
    q2: z.ZodNumber;
    q3: z.ZodNumber;
    lower: z.ZodNumber;
    upper: z.ZodNumber;
    min_as_string: z.ZodOptional<z.ZodString>;
    max_as_string: z.ZodOptional<z.ZodString>;
    q1_as_string: z.ZodOptional<z.ZodString>;
    q2_as_string: z.ZodOptional<z.ZodString>;
    q3_as_string: z.ZodOptional<z.ZodString>;
    lower_as_string: z.ZodOptional<z.ZodString>;
    upper_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    top: z.ZodArray<z.ZodObject<{
        sort: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
        metrics: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
    }, z.core.$strip>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodNumber;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    value: z.ZodNumber;
    value_as_string: z.ZodOptional<z.ZodString>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    doc_count: z.ZodNumber;
    fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        mean: z.ZodNumber;
        variance: z.ZodNumber;
        skewness: z.ZodNumber;
        kurtosis: z.ZodNumber;
        covariance: z.ZodRecord<z.ZodString, z.ZodNumber>;
        correlation: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>>;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>, z.ZodObject<{
    type: z.ZodString;
    geometry: z.ZodObject<{
        type: z.ZodString;
        coordinates: z.ZodArray<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>;
    properties: z.ZodAny;
    meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$strip>]>;
export type AggregationsAggregate = z.infer<typeof AggregationsAggregate>;
export declare const ClusterAlias: z.ZodString;
export type ClusterAlias = z.infer<typeof ClusterAlias>;
export declare const ClusterSearchStatus: z.ZodEnum<{
    partial: "partial";
    successful: "successful";
    failed: "failed";
    running: "running";
    skipped: "skipped";
}>;
export type ClusterSearchStatus = z.infer<typeof ClusterSearchStatus>;
export declare const ClusterDetails: z.ZodObject<{
    status: z.ZodEnum<{
        partial: "partial";
        successful: "successful";
        failed: "failed";
        running: "running";
        skipped: "skipped";
    }>;
    indices: z.ZodString;
    took: z.ZodOptional<z.ZodAny>;
    timed_out: z.ZodBoolean;
    _shards: z.ZodOptional<z.ZodObject<{
        failed: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            reason: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            shard: z.ZodOptional<z.ZodNumber>;
            _shard: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        skipped: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index: z.ZodOptional<z.ZodString>;
        _index: z.ZodOptional<z.ZodString>;
        node: z.ZodOptional<z.ZodString>;
        _node: z.ZodOptional<z.ZodString>;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
        shard: z.ZodOptional<z.ZodNumber>;
        _shard: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ClusterDetails = z.infer<typeof ClusterDetails>;
export declare const ClusterStatistics: z.ZodObject<{
    skipped: z.ZodNumber;
    successful: z.ZodNumber;
    total: z.ZodNumber;
    running: z.ZodNumber;
    partial: z.ZodNumber;
    failed: z.ZodNumber;
    details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        status: z.ZodEnum<{
            partial: "partial";
            successful: "successful";
            failed: "failed";
            running: "running";
            skipped: "skipped";
        }>;
        indices: z.ZodString;
        took: z.ZodOptional<z.ZodAny>;
        timed_out: z.ZodBoolean;
        _shards: z.ZodOptional<z.ZodObject<{
            failed: z.ZodNumber;
            successful: z.ZodNumber;
            total: z.ZodNumber;
            failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodOptional<z.ZodString>;
                _index: z.ZodOptional<z.ZodString>;
                node: z.ZodOptional<z.ZodString>;
                _node: z.ZodOptional<z.ZodString>;
                reason: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
                shard: z.ZodOptional<z.ZodNumber>;
                _shard: z.ZodOptional<z.ZodNumber>;
                status: z.ZodOptional<z.ZodString>;
                primary: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            skipped: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            reason: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            shard: z.ZodOptional<z.ZodNumber>;
            _shard: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ClusterStatistics = z.infer<typeof ClusterStatistics>;
export declare const ScrollId: z.ZodString;
export type ScrollId = z.infer<typeof ScrollId>;
/**
 * The suggestion name as returned from the server. Depending whether typed_keys is specified this could come back
 * in the form of `name#type` instead of simply `name`
 */
export declare const SuggestionName: z.ZodString;
export type SuggestionName = z.infer<typeof SuggestionName>;
export declare const SearchTemplateResponse: z.ZodObject<{
    took: z.ZodNumber;
    timed_out: z.ZodBoolean;
    _shards: z.ZodObject<{
        failed: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            node: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            reason: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
            shard: z.ZodOptional<z.ZodNumber>;
            _shard: z.ZodOptional<z.ZodNumber>;
            status: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        skipped: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    hits: z.ZodLazy<z.ZodObject<{
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            relation: z.ZodEnum<{
                gte: "gte";
                eq: "eq";
            }>;
            value: z.ZodNumber;
        }, z.core.$strip>, z.ZodNumber]>>;
        hits: z.ZodArray<z.ZodObject<{
            _index: z.ZodString;
            _id: z.ZodOptional<z.ZodString>;
            _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            _explanation: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                details: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    description: z.ZodString;
                    details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                    value: z.ZodNumber;
                }, z.core.$strip>>>;
                value: z.ZodNumber;
            }, z.core.$strip>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
            inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
            matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
            _nested: z.ZodOptional<z.ZodObject<{
                field: z.ZodString;
                offset: z.ZodNumber;
                _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            }, z.core.$strip>>;
            _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
            ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
            _shard: z.ZodOptional<z.ZodString>;
            _node: z.ZodOptional<z.ZodString>;
            _routing: z.ZodOptional<z.ZodString>;
            _source: z.ZodOptional<z.ZodAny>;
            _rank: z.ZodOptional<z.ZodNumber>;
            _seq_no: z.ZodOptional<z.ZodNumber>;
            _primary_term: z.ZodOptional<z.ZodNumber>;
            _version: z.ZodOptional<z.ZodNumber>;
            sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
        }, z.core.$strip>>;
        max_score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    }, z.core.$strip>>;
    aggregations: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        value: z.ZodNumber;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
            key: z.ZodNumber;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            value_as_string: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
            key: z.ZodNumber;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            value_as_string: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
            key: z.ZodNumber;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            value_as_string: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
            key: z.ZodNumber;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            value_as_string: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        values: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodNull]>>, z.ZodArray<z.ZodObject<{
            key: z.ZodNumber;
            value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            value_as_string: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        normalized_value: z.ZodOptional<z.ZodNumber>;
        normalized_value_as_string: z.ZodOptional<z.ZodString>;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        keys: z.ZodArray<z.ZodString>;
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodUnion<readonly [z.ZodObject<{
            dip: z.ZodObject<{
                p_value: z.ZodNumber;
                change_point: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            distribution_change: z.ZodObject<{
                p_value: z.ZodNumber;
                change_point: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            indeterminable: z.ZodObject<{
                reason: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            non_stationary: z.ZodObject<{
                p_value: z.ZodNumber;
                r_value: z.ZodNumber;
                trend: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            spike: z.ZodObject<{
                p_value: z.ZodNumber;
                change_point: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            stationary: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            step_change: z.ZodObject<{
                p_value: z.ZodNumber;
                change_point: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>, z.ZodObject<{
            trend_change: z.ZodObject<{
                p_value: z.ZodNumber;
                r_value: z.ZodNumber;
                change_point: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>]>;
        bucket: z.ZodOptional<z.ZodObject<{
            doc_count: z.ZodNumber;
            key: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
        }, z.core.$catchall<z.ZodAny>>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        count: z.ZodNumber;
        min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        sum: z.ZodNumber;
        min_as_string: z.ZodOptional<z.ZodString>;
        max_as_string: z.ZodOptional<z.ZodString>;
        avg_as_string: z.ZodOptional<z.ZodString>;
        sum_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        count: z.ZodNumber;
        min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        sum: z.ZodNumber;
        min_as_string: z.ZodOptional<z.ZodString>;
        max_as_string: z.ZodOptional<z.ZodString>;
        avg_as_string: z.ZodOptional<z.ZodString>;
        sum_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        sum_of_squares: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        variance: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        variance_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        variance_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation_bounds: z.ZodOptional<z.ZodObject<{
            upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        }, z.core.$strip>>;
        sum_of_squares_as_string: z.ZodOptional<z.ZodString>;
        variance_as_string: z.ZodOptional<z.ZodString>;
        variance_population_as_string: z.ZodOptional<z.ZodString>;
        variance_sampling_as_string: z.ZodOptional<z.ZodString>;
        std_deviation_as_string: z.ZodOptional<z.ZodString>;
        std_deviation_bounds_as_string: z.ZodOptional<z.ZodObject<{
            upper: z.ZodString;
            lower: z.ZodString;
            upper_population: z.ZodString;
            lower_population: z.ZodString;
            upper_sampling: z.ZodString;
            lower_sampling: z.ZodString;
        }, z.core.$strip>>;
        count: z.ZodNumber;
        min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        sum: z.ZodNumber;
        min_as_string: z.ZodOptional<z.ZodString>;
        max_as_string: z.ZodOptional<z.ZodString>;
        avg_as_string: z.ZodOptional<z.ZodString>;
        sum_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        sum_of_squares: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        variance: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        variance_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        variance_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        std_deviation_bounds: z.ZodOptional<z.ZodObject<{
            upper: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            lower: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            upper_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            lower_population: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            upper_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
            lower_sampling: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        }, z.core.$strip>>;
        sum_of_squares_as_string: z.ZodOptional<z.ZodString>;
        variance_as_string: z.ZodOptional<z.ZodString>;
        variance_population_as_string: z.ZodOptional<z.ZodString>;
        variance_sampling_as_string: z.ZodOptional<z.ZodString>;
        std_deviation_as_string: z.ZodOptional<z.ZodString>;
        std_deviation_bounds_as_string: z.ZodOptional<z.ZodObject<{
            upper: z.ZodString;
            lower: z.ZodString;
            upper_population: z.ZodString;
            lower_population: z.ZodString;
            upper_sampling: z.ZodString;
            lower_sampling: z.ZodString;
        }, z.core.$strip>>;
        count: z.ZodNumber;
        min: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        max: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        avg: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        sum: z.ZodNumber;
        min_as_string: z.ZodOptional<z.ZodString>;
        max_as_string: z.ZodOptional<z.ZodString>;
        avg_as_string: z.ZodOptional<z.ZodString>;
        sum_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        bounds: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        count: z.ZodNumber;
        location: z.ZodOptional<z.ZodObject<{
            x: z.ZodNumber;
            y: z.ZodNumber;
        }, z.core.$strip>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
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
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        count: z.ZodNumber;
        location: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            lat: z.ZodNumber;
            lon: z.ZodNumber;
        }, z.core.$strip>, z.ZodObject<{
            geohash: z.ZodString;
        }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        interval: z.ZodString;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
        sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
        sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
        sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
        sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        doc_count_error_upper_bound: z.ZodOptional<z.ZodNumber>;
        sum_other_doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        doc_count: z.ZodNumber;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        bg_count: z.ZodOptional<z.ZodNumber>;
        doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        bg_count: z.ZodOptional<z.ZodNumber>;
        doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        bg_count: z.ZodOptional<z.ZodNumber>;
        doc_count: z.ZodOptional<z.ZodNumber>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        after_key: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        buckets: z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodAny>, z.ZodArray<z.ZodAny>]>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodAny;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        hits: z.ZodLazy<z.ZodObject<{
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                relation: z.ZodEnum<{
                    gte: "gte";
                    eq: "eq";
                }>;
                value: z.ZodNumber;
            }, z.core.$strip>, z.ZodNumber]>>;
            hits: z.ZodArray<z.ZodObject<{
                _index: z.ZodString;
                _id: z.ZodOptional<z.ZodString>;
                _score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
                _explanation: z.ZodOptional<z.ZodObject<{
                    description: z.ZodString;
                    details: z.ZodArray<z.ZodLazy<z.ZodObject<{
                        description: z.ZodString;
                        details: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                        value: z.ZodNumber;
                    }, z.core.$strip>>>;
                    value: z.ZodNumber;
                }, z.core.$strip>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                highlight: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString>>>;
                inner_hits: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchInnerHitsResult>>;
                matched_queries: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodRecord<z.ZodString, z.ZodNumber>]>>;
                _nested: z.ZodOptional<z.ZodObject<{
                    field: z.ZodString;
                    offset: z.ZodNumber;
                    _nested: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
                }, z.core.$strip>>;
                _ignored: z.ZodOptional<z.ZodArray<z.ZodString>>;
                ignored_field_values: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodAny>>>;
                _shard: z.ZodOptional<z.ZodString>;
                _node: z.ZodOptional<z.ZodString>;
                _routing: z.ZodOptional<z.ZodString>;
                _source: z.ZodOptional<z.ZodAny>;
                _rank: z.ZodOptional<z.ZodNumber>;
                _seq_no: z.ZodOptional<z.ZodNumber>;
                _primary_term: z.ZodOptional<z.ZodNumber>;
                _version: z.ZodOptional<z.ZodNumber>;
                sort: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
            }, z.core.$strip>>;
            max_score: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        }, z.core.$strip>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>;
        feature_importance: z.ZodOptional<z.ZodArray<z.ZodObject<{
            feature_name: z.ZodString;
            importance: z.ZodOptional<z.ZodNumber>;
            classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                class_name: z.ZodString;
                importance: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
        top_classes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            class_name: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
            class_probability: z.ZodNumber;
            class_score: z.ZodNumber;
        }, z.core.$strip>>>;
        warning: z.ZodOptional<z.ZodString>;
    }, z.core.$catchall<z.ZodAny>>, z.ZodObject<{
        count: z.ZodNumber;
        min_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        max_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        avg_length: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        entropy: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        distribution: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodNumber>, z.ZodNull]>>;
        min_length_as_string: z.ZodOptional<z.ZodString>;
        max_length_as_string: z.ZodOptional<z.ZodString>;
        avg_length_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        min: z.ZodNumber;
        max: z.ZodNumber;
        q1: z.ZodNumber;
        q2: z.ZodNumber;
        q3: z.ZodNumber;
        lower: z.ZodNumber;
        upper: z.ZodNumber;
        min_as_string: z.ZodOptional<z.ZodString>;
        max_as_string: z.ZodOptional<z.ZodString>;
        q1_as_string: z.ZodOptional<z.ZodString>;
        q2_as_string: z.ZodOptional<z.ZodString>;
        q3_as_string: z.ZodOptional<z.ZodString>;
        lower_as_string: z.ZodOptional<z.ZodString>;
        upper_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        top: z.ZodArray<z.ZodObject<{
            sort: z.ZodArray<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
            metrics: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>, z.ZodNull]>>;
        }, z.core.$strip>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodNumber;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        value: z.ZodNumber;
        value_as_string: z.ZodOptional<z.ZodString>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        doc_count: z.ZodNumber;
        fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            mean: z.ZodNumber;
            variance: z.ZodNumber;
            skewness: z.ZodNumber;
            kurtosis: z.ZodNumber;
            covariance: z.ZodRecord<z.ZodString, z.ZodNumber>;
            correlation: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>>;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>, z.ZodObject<{
        type: z.ZodString;
        geometry: z.ZodObject<{
            type: z.ZodString;
            coordinates: z.ZodArray<z.ZodArray<z.ZodNumber>>;
        }, z.core.$strip>;
        properties: z.ZodAny;
        meta: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$strip>]>>>;
    _clusters: z.ZodOptional<z.ZodObject<{
        skipped: z.ZodNumber;
        successful: z.ZodNumber;
        total: z.ZodNumber;
        running: z.ZodNumber;
        partial: z.ZodNumber;
        failed: z.ZodNumber;
        details: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            status: z.ZodEnum<{
                partial: "partial";
                successful: "successful";
                failed: "failed";
                running: "running";
                skipped: "skipped";
            }>;
            indices: z.ZodString;
            took: z.ZodOptional<z.ZodAny>;
            timed_out: z.ZodBoolean;
            _shards: z.ZodOptional<z.ZodObject<{
                failed: z.ZodNumber;
                successful: z.ZodNumber;
                total: z.ZodNumber;
                failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    index: z.ZodOptional<z.ZodString>;
                    _index: z.ZodOptional<z.ZodString>;
                    node: z.ZodOptional<z.ZodString>;
                    _node: z.ZodOptional<z.ZodString>;
                    reason: z.ZodLazy<z.ZodObject<{
                        type: z.ZodString;
                        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                        stack_trace: z.ZodOptional<z.ZodString>;
                        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    }, z.core.$loose>>;
                    shard: z.ZodOptional<z.ZodNumber>;
                    _shard: z.ZodOptional<z.ZodNumber>;
                    status: z.ZodOptional<z.ZodString>;
                    primary: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>>;
                skipped: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index: z.ZodOptional<z.ZodString>;
                _index: z.ZodOptional<z.ZodString>;
                node: z.ZodOptional<z.ZodString>;
                _node: z.ZodOptional<z.ZodString>;
                reason: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
                shard: z.ZodOptional<z.ZodNumber>;
                _shard: z.ZodOptional<z.ZodNumber>;
                status: z.ZodOptional<z.ZodString>;
                primary: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    max_score: z.ZodOptional<z.ZodNumber>;
    num_reduce_phases: z.ZodOptional<z.ZodNumber>;
    profile: z.ZodOptional<z.ZodObject<{
        shards: z.ZodArray<z.ZodObject<{
            aggregations: z.ZodArray<z.ZodLazy<z.ZodObject<{
                breakdown: z.ZodObject<{
                    build_aggregation: z.ZodNumber;
                    build_aggregation_count: z.ZodNumber;
                    build_leaf_collector: z.ZodNumber;
                    build_leaf_collector_count: z.ZodNumber;
                    collect: z.ZodNumber;
                    collect_count: z.ZodNumber;
                    initialize: z.ZodNumber;
                    initialize_count: z.ZodNumber;
                    post_collection: z.ZodOptional<z.ZodNumber>;
                    post_collection_count: z.ZodOptional<z.ZodNumber>;
                    reduce: z.ZodNumber;
                    reduce_count: z.ZodNumber;
                }, z.core.$strip>;
                description: z.ZodString;
                time_in_nanos: z.ZodAny;
                type: z.ZodString;
                debug: z.ZodOptional<z.ZodObject<{
                    segments_with_multi_valued_ords: z.ZodOptional<z.ZodNumber>;
                    collection_strategy: z.ZodOptional<z.ZodString>;
                    segments_with_single_valued_ords: z.ZodOptional<z.ZodNumber>;
                    total_buckets: z.ZodOptional<z.ZodNumber>;
                    built_buckets: z.ZodOptional<z.ZodNumber>;
                    result_strategy: z.ZodOptional<z.ZodString>;
                    has_filter: z.ZodOptional<z.ZodBoolean>;
                    delegate: z.ZodOptional<z.ZodString>;
                    delegate_debug: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
                    chars_fetched: z.ZodOptional<z.ZodNumber>;
                    extract_count: z.ZodOptional<z.ZodNumber>;
                    extract_ns: z.ZodOptional<z.ZodNumber>;
                    values_fetched: z.ZodOptional<z.ZodNumber>;
                    collect_analyzed_ns: z.ZodOptional<z.ZodNumber>;
                    collect_analyzed_count: z.ZodOptional<z.ZodNumber>;
                    surviving_buckets: z.ZodOptional<z.ZodNumber>;
                    ordinals_collectors_used: z.ZodOptional<z.ZodNumber>;
                    ordinals_collectors_overhead_too_high: z.ZodOptional<z.ZodNumber>;
                    string_hashing_collectors_used: z.ZodOptional<z.ZodNumber>;
                    numeric_collectors_used: z.ZodOptional<z.ZodNumber>;
                    empty_collectors_used: z.ZodOptional<z.ZodNumber>;
                    deferred_aggregators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    segments_with_doc_count_field: z.ZodOptional<z.ZodNumber>;
                    segments_with_deleted_docs: z.ZodOptional<z.ZodNumber>;
                    filters: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        results_from_metadata: z.ZodOptional<z.ZodNumber>;
                        query: z.ZodOptional<z.ZodString>;
                        specialized_for: z.ZodOptional<z.ZodString>;
                        segments_counted_in_constant_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>>;
                    segments_counted: z.ZodOptional<z.ZodNumber>;
                    segments_collected: z.ZodOptional<z.ZodNumber>;
                    map_reducer: z.ZodOptional<z.ZodString>;
                    brute_force_used: z.ZodOptional<z.ZodNumber>;
                    dynamic_pruning_attempted: z.ZodOptional<z.ZodNumber>;
                    dynamic_pruning_used: z.ZodOptional<z.ZodNumber>;
                    skipped_due_to_no_data: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
            cluster: z.ZodString;
            dfs: z.ZodOptional<z.ZodObject<{
                statistics: z.ZodOptional<z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    description: z.ZodString;
                    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    time_in_nanos: z.ZodAny;
                    breakdown: z.ZodObject<{
                        collection_statistics: z.ZodNumber;
                        collection_statistics_count: z.ZodNumber;
                        create_weight: z.ZodNumber;
                        create_weight_count: z.ZodNumber;
                        rewrite: z.ZodNumber;
                        rewrite_count: z.ZodNumber;
                        term_statistics: z.ZodNumber;
                        term_statistics_count: z.ZodNumber;
                    }, z.core.$strip>;
                    debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                }, z.core.$strip>>>;
                knn: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    vector_operations_count: z.ZodOptional<z.ZodNumber>;
                    query: z.ZodArray<z.ZodLazy<z.ZodObject<{
                        type: z.ZodString;
                        description: z.ZodString;
                        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        time_in_nanos: z.ZodAny;
                        breakdown: z.ZodObject<{
                            advance: z.ZodNumber;
                            advance_count: z.ZodNumber;
                            build_scorer: z.ZodNumber;
                            build_scorer_count: z.ZodNumber;
                            compute_max_score: z.ZodNumber;
                            compute_max_score_count: z.ZodNumber;
                            count_weight: z.ZodNumber;
                            count_weight_count: z.ZodNumber;
                            create_weight: z.ZodNumber;
                            create_weight_count: z.ZodNumber;
                            match: z.ZodNumber;
                            match_count: z.ZodNumber;
                            next_doc: z.ZodNumber;
                            next_doc_count: z.ZodNumber;
                            score: z.ZodNumber;
                            score_count: z.ZodNumber;
                            set_min_competitive_score: z.ZodNumber;
                            set_min_competitive_score_count: z.ZodNumber;
                            shallow_advance: z.ZodNumber;
                            shallow_advance_count: z.ZodNumber;
                        }, z.core.$strip>;
                        debug: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                    }, z.core.$strip>>>;
                    rewrite_time: z.ZodNumber;
                    collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
                        name: z.ZodString;
                        reason: z.ZodString;
                        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                        time_in_nanos: z.ZodAny;
                        children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            fetch: z.ZodOptional<z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                description: z.ZodString;
                time_in_nanos: z.ZodAny;
                breakdown: z.ZodObject<{
                    load_source: z.ZodOptional<z.ZodNumber>;
                    load_source_count: z.ZodOptional<z.ZodNumber>;
                    load_stored_fields: z.ZodOptional<z.ZodNumber>;
                    load_stored_fields_count: z.ZodOptional<z.ZodNumber>;
                    next_reader: z.ZodOptional<z.ZodNumber>;
                    next_reader_count: z.ZodOptional<z.ZodNumber>;
                    process_count: z.ZodOptional<z.ZodNumber>;
                    process: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
                debug: z.ZodOptional<z.ZodObject<{
                    stored_fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    fast_path: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
            }, z.core.$strip>>>;
            id: z.ZodString;
            index: z.ZodString;
            node_id: z.ZodString;
            searches: z.ZodArray<z.ZodObject<{
                collector: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    name: z.ZodString;
                    reason: z.ZodString;
                    time_in_nanos: z.ZodAny;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                }, z.core.$strip>>>;
                query: z.ZodArray<z.ZodLazy<z.ZodObject<{
                    breakdown: z.ZodObject<{
                        advance: z.ZodNumber;
                        advance_count: z.ZodNumber;
                        build_scorer: z.ZodNumber;
                        build_scorer_count: z.ZodNumber;
                        create_weight: z.ZodNumber;
                        create_weight_count: z.ZodNumber;
                        match: z.ZodNumber;
                        match_count: z.ZodNumber;
                        shallow_advance: z.ZodNumber;
                        shallow_advance_count: z.ZodNumber;
                        next_doc: z.ZodNumber;
                        next_doc_count: z.ZodNumber;
                        score: z.ZodNumber;
                        score_count: z.ZodNumber;
                        compute_max_score: z.ZodNumber;
                        compute_max_score_count: z.ZodNumber;
                        count_weight: z.ZodNumber;
                        count_weight_count: z.ZodNumber;
                        set_min_competitive_score: z.ZodNumber;
                        set_min_competitive_score_count: z.ZodNumber;
                    }, z.core.$strip>;
                    description: z.ZodString;
                    time_in_nanos: z.ZodAny;
                    type: z.ZodString;
                    children: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$strip>>>;
                }, z.core.$strip>>>;
                rewrite_time: z.ZodNumber;
            }, z.core.$strip>>;
            shard_id: z.ZodNumber;
        }, z.core.$strip>>;
        request: z.ZodOptional<z.ZodObject<{
            source: z.ZodOptional<z.ZodLazy<z.ZodObject<{
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
            }, z.core.$strip>>>;
            indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    pit_id: z.ZodOptional<z.ZodString>;
    _scroll_id: z.ZodOptional<z.ZodString>;
    suggest: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        options: z.ZodUnion<readonly [z.ZodObject<{
            collate_match: z.ZodOptional<z.ZodBoolean>;
            contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                lat: z.ZodNumber;
                lon: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                geohash: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            _id: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            _routing: z.ZodOptional<z.ZodString>;
            _score: z.ZodOptional<z.ZodNumber>;
            _source: z.ZodOptional<z.ZodAny>;
            text: z.ZodString;
            score: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            collate_match: z.ZodOptional<z.ZodBoolean>;
            contexts: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
                lat: z.ZodNumber;
                lon: z.ZodNumber;
            }, z.core.$strip>, z.ZodObject<{
                geohash: z.ZodString;
            }, z.core.$strip>, z.ZodArray<z.ZodNumber>, z.ZodString]>]>>>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            _id: z.ZodOptional<z.ZodString>;
            _index: z.ZodOptional<z.ZodString>;
            _routing: z.ZodOptional<z.ZodString>;
            _score: z.ZodOptional<z.ZodNumber>;
            _source: z.ZodOptional<z.ZodAny>;
            text: z.ZodString;
            score: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>]>;
        length: z.ZodNumber;
        offset: z.ZodNumber;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodUnion<readonly [z.ZodObject<{
            text: z.ZodString;
            score: z.ZodNumber;
            highlighted: z.ZodOptional<z.ZodString>;
            collate_match: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            text: z.ZodString;
            score: z.ZodNumber;
            highlighted: z.ZodOptional<z.ZodString>;
            collate_match: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>]>;
        length: z.ZodNumber;
        offset: z.ZodNumber;
        text: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        options: z.ZodUnion<readonly [z.ZodObject<{
            text: z.ZodString;
            score: z.ZodNumber;
            freq: z.ZodNumber;
            highlighted: z.ZodOptional<z.ZodString>;
            collate_match: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            text: z.ZodString;
            score: z.ZodNumber;
            freq: z.ZodNumber;
            highlighted: z.ZodOptional<z.ZodString>;
            collate_match: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>]>;
        length: z.ZodNumber;
        offset: z.ZodNumber;
        text: z.ZodString;
    }, z.core.$strip>]>>>>;
    terminated_early: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SearchTemplateResponse = z.infer<typeof SearchTemplateResponse>;
//# sourceMappingURL=search_template.d.ts.map