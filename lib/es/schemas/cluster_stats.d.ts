import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const FieldSizeUsage: z.ZodObject<{
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type FieldSizeUsage = z.infer<typeof FieldSizeUsage>;
export declare const CompletionStats: z.ZodObject<{
    size_in_bytes: z.ZodNumber;
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type CompletionStats = z.infer<typeof CompletionStats>;
export declare const DateFormat: z.ZodString;
export type DateFormat = z.infer<typeof DateFormat>;
export declare const DocStats: z.ZodObject<{
    count: z.ZodNumber;
    deleted: z.ZodOptional<z.ZodNumber>;
    total_size_in_bytes: z.ZodNumber;
    total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type DocStats = z.infer<typeof DocStats>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
export declare const FieldMemoryUsage: z.ZodObject<{
    memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    memory_size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type FieldMemoryUsage = z.infer<typeof FieldMemoryUsage>;
/** Time unit for milliseconds */
export declare const UnitMillis: z.ZodNumber;
export type UnitMillis = z.infer<typeof UnitMillis>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const GlobalOrdinalFieldStats: z.ZodObject<{
    build_time_in_millis: z.ZodNumber;
    build_time: z.ZodOptional<z.ZodString>;
    shard_max_value_count: z.ZodNumber;
}, z.core.$strip>;
export type GlobalOrdinalFieldStats = z.infer<typeof GlobalOrdinalFieldStats>;
export declare const GlobalOrdinalsStats: z.ZodObject<{
    build_time_in_millis: z.ZodNumber;
    build_time: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        build_time_in_millis: z.ZodNumber;
        build_time: z.ZodOptional<z.ZodString>;
        shard_max_value_count: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type GlobalOrdinalsStats = z.infer<typeof GlobalOrdinalsStats>;
export declare const FielddataStats: z.ZodObject<{
    evictions: z.ZodOptional<z.ZodNumber>;
    memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    memory_size_in_bytes: z.ZodNumber;
    fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>>;
    global_ordinals: z.ZodObject<{
        build_time_in_millis: z.ZodNumber;
        build_time: z.ZodOptional<z.ZodString>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            build_time_in_millis: z.ZodNumber;
            build_time: z.ZodOptional<z.ZodString>;
            shard_max_value_count: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type FielddataStats = z.infer<typeof FielddataStats>;
export declare const HealthStatus: z.ZodEnum<{
    unknown: "unknown";
    green: "green";
    GREEN: "GREEN";
    yellow: "yellow";
    YELLOW: "YELLOW";
    red: "red";
    RED: "RED";
    unavailable: "unavailable";
}>;
export type HealthStatus = z.infer<typeof HealthStatus>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** Contains statistics about the number of nodes selected by the request. */
export declare const NodeStatistics: z.ZodObject<{
    failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
    total: z.ZodNumber;
    successful: z.ZodNumber;
    failed: z.ZodNumber;
}, z.core.$strip>;
export type NodeStatistics = z.infer<typeof NodeStatistics>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const PluginStats: z.ZodObject<{
    classname: z.ZodString;
    description: z.ZodString;
    elasticsearch_version: z.ZodString;
    extended_plugins: z.ZodArray<z.ZodString>;
    has_native_controller: z.ZodBoolean;
    java_version: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    licensed: z.ZodBoolean;
}, z.core.$strip>;
export type PluginStats = z.infer<typeof PluginStats>;
export declare const QueryCacheStats: z.ZodObject<{
    cache_count: z.ZodNumber;
    cache_size: z.ZodNumber;
    evictions: z.ZodNumber;
    hit_count: z.ZodNumber;
    memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    memory_size_in_bytes: z.ZodNumber;
    miss_count: z.ZodNumber;
    total_count: z.ZodNumber;
}, z.core.$strip>;
export type QueryCacheStats = z.infer<typeof QueryCacheStats>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesStatsShardFileSizeInfo: z.ZodObject<{
    description: z.ZodString;
    size_in_bytes: z.ZodNumber;
    min_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    max_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    average_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type IndicesStatsShardFileSizeInfo = z.infer<typeof IndicesStatsShardFileSizeInfo>;
export declare const SegmentsStats: z.ZodObject<{
    count: z.ZodNumber;
    doc_values_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    doc_values_memory_in_bytes: z.ZodNumber;
    file_sizes: z.ZodRecord<z.ZodString, z.ZodObject<{
        description: z.ZodString;
        size_in_bytes: z.ZodNumber;
        min_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        max_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        average_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    fixed_bit_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    fixed_bit_set_memory_in_bytes: z.ZodNumber;
    index_writer_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    index_writer_memory_in_bytes: z.ZodNumber;
    max_unsafe_auto_id_timestamp: z.ZodNumber;
    memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    memory_in_bytes: z.ZodNumber;
    norms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    norms_memory_in_bytes: z.ZodNumber;
    points_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    points_memory_in_bytes: z.ZodNumber;
    stored_fields_memory_in_bytes: z.ZodNumber;
    stored_fields_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    terms_memory_in_bytes: z.ZodNumber;
    terms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    term_vectors_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    term_vectors_memory_in_bytes: z.ZodNumber;
    version_map_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    version_map_memory_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type SegmentsStats = z.infer<typeof SegmentsStats>;
export declare const StoreStats: z.ZodObject<{
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    size_in_bytes: z.ZodNumber;
    reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    reserved_in_bytes: z.ZodNumber;
    total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type StoreStats = z.infer<typeof StoreStats>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const ClusterStatsRemoteClusterInfo: z.ZodObject<{
    cluster_uuid: z.ZodString;
    mode: z.ZodString;
    skip_unavailable: z.ZodBoolean;
    'transport.compress': z.ZodString;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>;
    version: z.ZodArray<z.ZodString>;
    nodes_count: z.ZodNumber;
    shards_count: z.ZodNumber;
    indices_count: z.ZodNumber;
    indices_total_size_in_bytes: z.ZodNumber;
    indices_total_size: z.ZodOptional<z.ZodString>;
    max_heap_in_bytes: z.ZodNumber;
    max_heap: z.ZodOptional<z.ZodString>;
    mem_total_in_bytes: z.ZodNumber;
    mem_total: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterStatsRemoteClusterInfo = z.infer<typeof ClusterStatsRemoteClusterInfo>;
export declare const ClusterStatsCCSUsageTimeValue: z.ZodObject<{
    max: z.ZodAny;
    avg: z.ZodAny;
    p90: z.ZodAny;
}, z.core.$strip>;
export type ClusterStatsCCSUsageTimeValue = z.infer<typeof ClusterStatsCCSUsageTimeValue>;
export declare const ClusterStatsCCSUsageClusterStats: z.ZodObject<{
    total: z.ZodNumber;
    skipped: z.ZodNumber;
    took: z.ZodObject<{
        max: z.ZodAny;
        avg: z.ZodAny;
        p90: z.ZodAny;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsCCSUsageClusterStats = z.infer<typeof ClusterStatsCCSUsageClusterStats>;
export declare const ClusterStatsCCSUsageStats: z.ZodObject<{
    total: z.ZodNumber;
    success: z.ZodNumber;
    skipped: z.ZodNumber;
    took: z.ZodObject<{
        max: z.ZodAny;
        avg: z.ZodAny;
        p90: z.ZodAny;
    }, z.core.$strip>;
    took_mrt_true: z.ZodOptional<z.ZodObject<{
        max: z.ZodAny;
        avg: z.ZodAny;
        p90: z.ZodAny;
    }, z.core.$strip>>;
    took_mrt_false: z.ZodOptional<z.ZodObject<{
        max: z.ZodAny;
        avg: z.ZodAny;
        p90: z.ZodAny;
    }, z.core.$strip>>;
    remotes_per_search_max: z.ZodNumber;
    remotes_per_search_avg: z.ZodNumber;
    failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
    features: z.ZodRecord<z.ZodString, z.ZodNumber>;
    clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
    clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
        total: z.ZodNumber;
        skipped: z.ZodNumber;
        took: z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsCCSUsageStats = z.infer<typeof ClusterStatsCCSUsageStats>;
export declare const ClusterStatsCCSStats: z.ZodObject<{
    clusters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        cluster_uuid: z.ZodString;
        mode: z.ZodString;
        skip_unavailable: z.ZodBoolean;
        'transport.compress': z.ZodString;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>;
        version: z.ZodArray<z.ZodString>;
        nodes_count: z.ZodNumber;
        shards_count: z.ZodNumber;
        indices_count: z.ZodNumber;
        indices_total_size_in_bytes: z.ZodNumber;
        indices_total_size: z.ZodOptional<z.ZodString>;
        max_heap_in_bytes: z.ZodNumber;
        max_heap: z.ZodOptional<z.ZodString>;
        mem_total_in_bytes: z.ZodNumber;
        mem_total: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    _search: z.ZodObject<{
        total: z.ZodNumber;
        success: z.ZodNumber;
        skipped: z.ZodNumber;
        took: z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>;
        took_mrt_true: z.ZodOptional<z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>>;
        took_mrt_false: z.ZodOptional<z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>>;
        remotes_per_search_max: z.ZodNumber;
        remotes_per_search_avg: z.ZodNumber;
        failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
        features: z.ZodRecord<z.ZodString, z.ZodNumber>;
        clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
        clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
            total: z.ZodNumber;
            skipped: z.ZodNumber;
            took: z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    _esql: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        success: z.ZodNumber;
        skipped: z.ZodNumber;
        took: z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>;
        took_mrt_true: z.ZodOptional<z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>>;
        took_mrt_false: z.ZodOptional<z.ZodObject<{
            max: z.ZodAny;
            avg: z.ZodAny;
            p90: z.ZodAny;
        }, z.core.$strip>>;
        remotes_per_search_max: z.ZodNumber;
        remotes_per_search_avg: z.ZodNumber;
        failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
        features: z.ZodRecord<z.ZodString, z.ZodNumber>;
        clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
        clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
            total: z.ZodNumber;
            skipped: z.ZodNumber;
            took: z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsCCSStats = z.infer<typeof ClusterStatsCCSStats>;
export declare const ClusterStatsFieldTypes: z.ZodObject<{
    name: z.ZodString;
    count: z.ZodNumber;
    index_count: z.ZodNumber;
    indexed_vector_count: z.ZodOptional<z.ZodNumber>;
    indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
    indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
    script_count: z.ZodOptional<z.ZodNumber>;
    vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type ClusterStatsFieldTypes = z.infer<typeof ClusterStatsFieldTypes>;
export declare const ClusterStatsMultipleSynonymGraphFilter: z.ZodObject<{
    analyzer_count: z.ZodOptional<z.ZodNumber>;
    index_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsMultipleSynonymGraphFilter = z.infer<typeof ClusterStatsMultipleSynonymGraphFilter>;
export declare const ClusterStatsSynonymsStats: z.ZodObject<{
    count: z.ZodNumber;
    index_count: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsSynonymsStats = z.infer<typeof ClusterStatsSynonymsStats>;
export declare const ClusterStatsCharFilterTypes: z.ZodObject<{
    analyzer_types: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    built_in_analyzers: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    built_in_char_filters: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    built_in_filters: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    built_in_tokenizers: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    char_filter_types: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    multiple_synonym_graph_filters: z.ZodOptional<z.ZodObject<{
        analyzer_count: z.ZodOptional<z.ZodNumber>;
        index_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    filter_types: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    tokenizer_types: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    synonyms: z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        index_count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsCharFilterTypes = z.infer<typeof ClusterStatsCharFilterTypes>;
export declare const ClusterStatsClusterFileSystem: z.ZodObject<{
    path: z.ZodOptional<z.ZodString>;
    mount: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    available_in_bytes: z.ZodOptional<z.ZodNumber>;
    available: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    free_in_bytes: z.ZodOptional<z.ZodNumber>;
    free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_in_bytes: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    low_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    low_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
    high_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    high_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
    flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
    frozen_flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    frozen_flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsClusterFileSystem = z.infer<typeof ClusterStatsClusterFileSystem>;
export declare const ClusterStatsExtendedTextSimilarityRetrieverUsage: z.ZodObject<{
    chunk_rescorer: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsExtendedTextSimilarityRetrieverUsage = z.infer<typeof ClusterStatsExtendedTextSimilarityRetrieverUsage>;
export declare const ClusterStatsExtendedRetrieversSearchUsage: z.ZodObject<{
    text_similarity_reranker: z.ZodOptional<z.ZodObject<{
        chunk_rescorer: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsExtendedRetrieversSearchUsage = z.infer<typeof ClusterStatsExtendedRetrieversSearchUsage>;
export declare const ClusterStatsSortType: z.ZodEnum<{
    _score: "_score";
    _doc: "_doc";
    _geo_distance: "_geo_distance";
    _script: "_script";
    field_sort: "field_sort";
}>;
export type ClusterStatsSortType = z.infer<typeof ClusterStatsSortType>;
export declare const ClusterStatsExtendedSectionSearchUsage: z.ZodObject<{
    sort: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
        _score: "_score";
        _doc: "_doc";
        _geo_distance: "_geo_distance";
        _script: "_script";
        field_sort: "field_sort";
    }>, z.ZodNumber>>;
}, z.core.$strip>;
export type ClusterStatsExtendedSectionSearchUsage = z.infer<typeof ClusterStatsExtendedSectionSearchUsage>;
export declare const ClusterStatsExtendedSearchUsage: z.ZodObject<{
    retrievers: z.ZodOptional<z.ZodObject<{
        text_similarity_reranker: z.ZodOptional<z.ZodObject<{
            chunk_rescorer: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    section: z.ZodOptional<z.ZodObject<{
        sort: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
            _score: "_score";
            _doc: "_doc";
            _geo_distance: "_geo_distance";
            _script: "_script";
            field_sort: "field_sort";
        }>, z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsExtendedSearchUsage = z.infer<typeof ClusterStatsExtendedSearchUsage>;
export declare const ClusterStatsSearchUsageStats: z.ZodObject<{
    total: z.ZodNumber;
    queries: z.ZodRecord<z.ZodString, z.ZodNumber>;
    rescorers: z.ZodRecord<z.ZodString, z.ZodNumber>;
    sections: z.ZodRecord<z.ZodString, z.ZodNumber>;
    retrievers: z.ZodRecord<z.ZodString, z.ZodNumber>;
    extended: z.ZodObject<{
        retrievers: z.ZodOptional<z.ZodObject<{
            text_similarity_reranker: z.ZodOptional<z.ZodObject<{
                chunk_rescorer: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        section: z.ZodOptional<z.ZodObject<{
            sort: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                _score: "_score";
                _doc: "_doc";
                _geo_distance: "_geo_distance";
                _script: "_script";
                field_sort: "field_sort";
            }>, z.ZodNumber>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsSearchUsageStats = z.infer<typeof ClusterStatsSearchUsageStats>;
export declare const ClusterStatsClusterShardMetrics: z.ZodObject<{
    avg: z.ZodNumber;
    max: z.ZodNumber;
    min: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsClusterShardMetrics = z.infer<typeof ClusterStatsClusterShardMetrics>;
export declare const ClusterStatsClusterIndicesShardsIndex: z.ZodObject<{
    primaries: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
    replication: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
    shards: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsClusterIndicesShardsIndex = z.infer<typeof ClusterStatsClusterIndicesShardsIndex>;
/** Contains statistics about shards assigned to selected nodes. */
export declare const ClusterStatsClusterIndicesShards: z.ZodObject<{
    index: z.ZodOptional<z.ZodObject<{
        primaries: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
        replication: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
        shards: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    primaries: z.ZodOptional<z.ZodNumber>;
    replication: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsClusterIndicesShards = z.infer<typeof ClusterStatsClusterIndicesShards>;
export declare const ClusterStatsRuntimeFieldTypes: z.ZodObject<{
    chars_max: z.ZodNumber;
    chars_total: z.ZodNumber;
    count: z.ZodNumber;
    doc_max: z.ZodNumber;
    doc_total: z.ZodNumber;
    index_count: z.ZodNumber;
    lang: z.ZodArray<z.ZodString>;
    lines_max: z.ZodNumber;
    lines_total: z.ZodNumber;
    name: z.ZodString;
    scriptless_count: z.ZodNumber;
    shadowed_count: z.ZodNumber;
    source_max: z.ZodNumber;
    source_total: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsRuntimeFieldTypes = z.infer<typeof ClusterStatsRuntimeFieldTypes>;
export declare const ClusterStatsFieldTypesMappings: z.ZodObject<{
    field_types: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        count: z.ZodNumber;
        index_count: z.ZodNumber;
        indexed_vector_count: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
        indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
        script_count: z.ZodOptional<z.ZodNumber>;
        vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    runtime_field_types: z.ZodArray<z.ZodObject<{
        chars_max: z.ZodNumber;
        chars_total: z.ZodNumber;
        count: z.ZodNumber;
        doc_max: z.ZodNumber;
        doc_total: z.ZodNumber;
        index_count: z.ZodNumber;
        lang: z.ZodArray<z.ZodString>;
        lines_max: z.ZodNumber;
        lines_total: z.ZodNumber;
        name: z.ZodString;
        scriptless_count: z.ZodNumber;
        shadowed_count: z.ZodNumber;
        source_max: z.ZodNumber;
        source_total: z.ZodNumber;
    }, z.core.$strip>>;
    total_field_count: z.ZodOptional<z.ZodNumber>;
    total_deduplicated_field_count: z.ZodOptional<z.ZodNumber>;
    total_deduplicated_mapping_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_deduplicated_mapping_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    source_modes: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsFieldTypesMappings = z.infer<typeof ClusterStatsFieldTypesMappings>;
export declare const ClusterStatsIndicesVersions: z.ZodObject<{
    index_count: z.ZodNumber;
    primary_shard_count: z.ZodNumber;
    total_primary_bytes: z.ZodNumber;
    total_primary_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    version: z.ZodString;
}, z.core.$strip>;
export type ClusterStatsIndicesVersions = z.infer<typeof ClusterStatsIndicesVersions>;
export declare const ClusterStatsDenseVectorOffHeapStats: z.ZodObject<{
    total_size_bytes: z.ZodNumber;
    total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_veb_size_bytes: z.ZodNumber;
    total_veb_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_vec_size_bytes: z.ZodNumber;
    total_vec_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_veq_size_bytes: z.ZodNumber;
    total_veq_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_vex_size_bytes: z.ZodNumber;
    total_vex_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_cenif_size_bytes: z.ZodNumber;
    total_cenif_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_clivf_size_bytes: z.ZodNumber;
    total_clivf_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    fielddata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>>;
}, z.core.$strip>;
export type ClusterStatsDenseVectorOffHeapStats = z.infer<typeof ClusterStatsDenseVectorOffHeapStats>;
export declare const ClusterStatsDenseVectorStats: z.ZodObject<{
    value_count: z.ZodNumber;
    off_heap: z.ZodOptional<z.ZodObject<{
        total_size_bytes: z.ZodNumber;
        total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_veb_size_bytes: z.ZodNumber;
        total_veb_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_vec_size_bytes: z.ZodNumber;
        total_vec_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_veq_size_bytes: z.ZodNumber;
        total_veq_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_vex_size_bytes: z.ZodNumber;
        total_vex_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_cenif_size_bytes: z.ZodNumber;
        total_cenif_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_clivf_size_bytes: z.ZodNumber;
        total_clivf_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        fielddata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsDenseVectorStats = z.infer<typeof ClusterStatsDenseVectorStats>;
export declare const ClusterStatsSparseVectorStats: z.ZodObject<{
    value_count: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsSparseVectorStats = z.infer<typeof ClusterStatsSparseVectorStats>;
export declare const ClusterStatsClusterIndices: z.ZodObject<{
    analysis: z.ZodOptional<z.ZodObject<{
        analyzer_types: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        built_in_analyzers: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        built_in_char_filters: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        built_in_filters: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        built_in_tokenizers: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        char_filter_types: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        multiple_synonym_graph_filters: z.ZodOptional<z.ZodObject<{
            analyzer_count: z.ZodOptional<z.ZodNumber>;
            index_count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        filter_types: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        tokenizer_types: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        synonyms: z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            index_count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    completion: z.ZodObject<{
        size_in_bytes: z.ZodNumber;
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    count: z.ZodNumber;
    docs: z.ZodObject<{
        count: z.ZodNumber;
        deleted: z.ZodOptional<z.ZodNumber>;
        total_size_in_bytes: z.ZodNumber;
        total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    fielddata: z.ZodObject<{
        evictions: z.ZodOptional<z.ZodNumber>;
        memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_size_in_bytes: z.ZodNumber;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>>;
        global_ordinals: z.ZodObject<{
            build_time_in_millis: z.ZodNumber;
            build_time: z.ZodOptional<z.ZodString>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                build_time_in_millis: z.ZodNumber;
                build_time: z.ZodOptional<z.ZodString>;
                shard_max_value_count: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    query_cache: z.ZodObject<{
        cache_count: z.ZodNumber;
        cache_size: z.ZodNumber;
        evictions: z.ZodNumber;
        hit_count: z.ZodNumber;
        memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_size_in_bytes: z.ZodNumber;
        miss_count: z.ZodNumber;
        total_count: z.ZodNumber;
    }, z.core.$strip>;
    search: z.ZodObject<{
        total: z.ZodNumber;
        queries: z.ZodRecord<z.ZodString, z.ZodNumber>;
        rescorers: z.ZodRecord<z.ZodString, z.ZodNumber>;
        sections: z.ZodRecord<z.ZodString, z.ZodNumber>;
        retrievers: z.ZodRecord<z.ZodString, z.ZodNumber>;
        extended: z.ZodObject<{
            retrievers: z.ZodOptional<z.ZodObject<{
                text_similarity_reranker: z.ZodOptional<z.ZodObject<{
                    chunk_rescorer: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            section: z.ZodOptional<z.ZodObject<{
                sort: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                    _score: "_score";
                    _doc: "_doc";
                    _geo_distance: "_geo_distance";
                    _script: "_script";
                    field_sort: "field_sort";
                }>, z.ZodNumber>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    segments: z.ZodObject<{
        count: z.ZodNumber;
        doc_values_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        doc_values_memory_in_bytes: z.ZodNumber;
        file_sizes: z.ZodRecord<z.ZodString, z.ZodObject<{
            description: z.ZodString;
            size_in_bytes: z.ZodNumber;
            min_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            max_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            average_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        fixed_bit_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        fixed_bit_set_memory_in_bytes: z.ZodNumber;
        index_writer_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        index_writer_memory_in_bytes: z.ZodNumber;
        max_unsafe_auto_id_timestamp: z.ZodNumber;
        memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_in_bytes: z.ZodNumber;
        norms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        norms_memory_in_bytes: z.ZodNumber;
        points_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        points_memory_in_bytes: z.ZodNumber;
        stored_fields_memory_in_bytes: z.ZodNumber;
        stored_fields_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        terms_memory_in_bytes: z.ZodNumber;
        terms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        term_vectors_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        term_vectors_memory_in_bytes: z.ZodNumber;
        version_map_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        version_map_memory_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
    shards: z.ZodObject<{
        index: z.ZodOptional<z.ZodObject<{
            primaries: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
            replication: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
            shards: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        primaries: z.ZodOptional<z.ZodNumber>;
        replication: z.ZodOptional<z.ZodNumber>;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    store: z.ZodObject<{
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        size_in_bytes: z.ZodNumber;
        reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reserved_in_bytes: z.ZodNumber;
        total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    mappings: z.ZodOptional<z.ZodObject<{
        field_types: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            count: z.ZodNumber;
            index_count: z.ZodNumber;
            indexed_vector_count: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
            indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
            script_count: z.ZodOptional<z.ZodNumber>;
            vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        runtime_field_types: z.ZodArray<z.ZodObject<{
            chars_max: z.ZodNumber;
            chars_total: z.ZodNumber;
            count: z.ZodNumber;
            doc_max: z.ZodNumber;
            doc_total: z.ZodNumber;
            index_count: z.ZodNumber;
            lang: z.ZodArray<z.ZodString>;
            lines_max: z.ZodNumber;
            lines_total: z.ZodNumber;
            name: z.ZodString;
            scriptless_count: z.ZodNumber;
            shadowed_count: z.ZodNumber;
            source_max: z.ZodNumber;
            source_total: z.ZodNumber;
        }, z.core.$strip>>;
        total_field_count: z.ZodOptional<z.ZodNumber>;
        total_deduplicated_field_count: z.ZodOptional<z.ZodNumber>;
        total_deduplicated_mapping_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_deduplicated_mapping_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        source_modes: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>>;
    versions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index_count: z.ZodNumber;
        primary_shard_count: z.ZodNumber;
        total_primary_bytes: z.ZodNumber;
        total_primary_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        version: z.ZodString;
    }, z.core.$strip>>>;
    dense_vector: z.ZodObject<{
        value_count: z.ZodNumber;
        off_heap: z.ZodOptional<z.ZodObject<{
            total_size_bytes: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_veb_size_bytes: z.ZodNumber;
            total_veb_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_vec_size_bytes: z.ZodNumber;
            total_vec_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_veq_size_bytes: z.ZodNumber;
            total_veq_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_vex_size_bytes: z.ZodNumber;
            total_vex_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_cenif_size_bytes: z.ZodNumber;
            total_cenif_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_clivf_size_bytes: z.ZodNumber;
            total_clivf_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fielddata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    sparse_vector: z.ZodObject<{
        value_count: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsClusterIndices = z.infer<typeof ClusterStatsClusterIndices>;
export declare const ClusterStatsClusterProcessor: z.ZodObject<{
    count: z.ZodNumber;
    current: z.ZodNumber;
    failed: z.ZodNumber;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type ClusterStatsClusterProcessor = z.infer<typeof ClusterStatsClusterProcessor>;
export declare const ClusterStatsClusterIngest: z.ZodObject<{
    number_of_pipelines: z.ZodNumber;
    processor_stats: z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        current: z.ZodNumber;
        failed: z.ZodNumber;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsClusterIngest = z.infer<typeof ClusterStatsClusterIngest>;
export declare const ClusterStatsClusterJvmMemory: z.ZodObject<{
    heap_max_in_bytes: z.ZodNumber;
    heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    heap_used_in_bytes: z.ZodNumber;
    heap_used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type ClusterStatsClusterJvmMemory = z.infer<typeof ClusterStatsClusterJvmMemory>;
export declare const ClusterStatsClusterJvmVersion: z.ZodObject<{
    bundled_jdk: z.ZodBoolean;
    count: z.ZodNumber;
    using_bundled_jdk: z.ZodBoolean;
    version: z.ZodString;
    vm_name: z.ZodString;
    vm_vendor: z.ZodString;
    vm_version: z.ZodString;
}, z.core.$strip>;
export type ClusterStatsClusterJvmVersion = z.infer<typeof ClusterStatsClusterJvmVersion>;
export declare const ClusterStatsClusterJvm: z.ZodObject<{
    max_uptime_in_millis: z.ZodAny;
    max_uptime: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    mem: z.ZodObject<{
        heap_max_in_bytes: z.ZodNumber;
        heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        heap_used_in_bytes: z.ZodNumber;
        heap_used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    threads: z.ZodNumber;
    versions: z.ZodArray<z.ZodObject<{
        bundled_jdk: z.ZodBoolean;
        count: z.ZodNumber;
        using_bundled_jdk: z.ZodBoolean;
        version: z.ZodString;
        vm_name: z.ZodString;
        vm_vendor: z.ZodString;
        vm_version: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsClusterJvm = z.infer<typeof ClusterStatsClusterJvm>;
export declare const ClusterStatsClusterNetworkTypes: z.ZodObject<{
    http_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
    transport_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsClusterNetworkTypes = z.infer<typeof ClusterStatsClusterNetworkTypes>;
export declare const ClusterStatsClusterNodeCount: z.ZodObject<{
    total: z.ZodNumber;
    coordinating_only: z.ZodOptional<z.ZodNumber>;
    data: z.ZodOptional<z.ZodNumber>;
    data_cold: z.ZodOptional<z.ZodNumber>;
    data_content: z.ZodOptional<z.ZodNumber>;
    data_frozen: z.ZodOptional<z.ZodNumber>;
    data_hot: z.ZodOptional<z.ZodNumber>;
    data_warm: z.ZodOptional<z.ZodNumber>;
    index: z.ZodOptional<z.ZodNumber>;
    ingest: z.ZodOptional<z.ZodNumber>;
    master: z.ZodOptional<z.ZodNumber>;
    ml: z.ZodOptional<z.ZodNumber>;
    remote_cluster_client: z.ZodOptional<z.ZodNumber>;
    search: z.ZodOptional<z.ZodNumber>;
    transform: z.ZodOptional<z.ZodNumber>;
    voting_only: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsClusterNodeCount = z.infer<typeof ClusterStatsClusterNodeCount>;
export declare const NodesPressureMemory: z.ZodObject<{
    all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    all_in_bytes: z.ZodOptional<z.ZodNumber>;
    combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
    coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
    primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    primary_in_bytes: z.ZodOptional<z.ZodNumber>;
    replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    replica_in_bytes: z.ZodOptional<z.ZodNumber>;
    coordinating_rejections: z.ZodOptional<z.ZodNumber>;
    primary_rejections: z.ZodOptional<z.ZodNumber>;
    replica_rejections: z.ZodOptional<z.ZodNumber>;
    primary_document_rejections: z.ZodOptional<z.ZodNumber>;
    large_operation_rejections: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesPressureMemory = z.infer<typeof NodesPressureMemory>;
export declare const NodesIndexingPressureMemory: z.ZodObject<{
    limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    limit_in_bytes: z.ZodOptional<z.ZodNumber>;
    current: z.ZodOptional<z.ZodObject<{
        all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        all_in_bytes: z.ZodOptional<z.ZodNumber>;
        combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
        coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
        primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        primary_in_bytes: z.ZodOptional<z.ZodNumber>;
        replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        replica_in_bytes: z.ZodOptional<z.ZodNumber>;
        coordinating_rejections: z.ZodOptional<z.ZodNumber>;
        primary_rejections: z.ZodOptional<z.ZodNumber>;
        replica_rejections: z.ZodOptional<z.ZodNumber>;
        primary_document_rejections: z.ZodOptional<z.ZodNumber>;
        large_operation_rejections: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    total: z.ZodOptional<z.ZodObject<{
        all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        all_in_bytes: z.ZodOptional<z.ZodNumber>;
        combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
        coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
        primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        primary_in_bytes: z.ZodOptional<z.ZodNumber>;
        replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        replica_in_bytes: z.ZodOptional<z.ZodNumber>;
        coordinating_rejections: z.ZodOptional<z.ZodNumber>;
        primary_rejections: z.ZodOptional<z.ZodNumber>;
        replica_rejections: z.ZodOptional<z.ZodNumber>;
        primary_document_rejections: z.ZodOptional<z.ZodNumber>;
        large_operation_rejections: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesIndexingPressureMemory = z.infer<typeof NodesIndexingPressureMemory>;
export declare const ClusterStatsIndexingPressure: z.ZodObject<{
    memory: z.ZodObject<{
        limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        limit_in_bytes: z.ZodOptional<z.ZodNumber>;
        current: z.ZodOptional<z.ZodObject<{
            all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            all_in_bytes: z.ZodOptional<z.ZodNumber>;
            combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
            coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
            primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            primary_in_bytes: z.ZodOptional<z.ZodNumber>;
            replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            replica_in_bytes: z.ZodOptional<z.ZodNumber>;
            coordinating_rejections: z.ZodOptional<z.ZodNumber>;
            primary_rejections: z.ZodOptional<z.ZodNumber>;
            replica_rejections: z.ZodOptional<z.ZodNumber>;
            primary_document_rejections: z.ZodOptional<z.ZodNumber>;
            large_operation_rejections: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        total: z.ZodOptional<z.ZodObject<{
            all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            all_in_bytes: z.ZodOptional<z.ZodNumber>;
            combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
            coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
            primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            primary_in_bytes: z.ZodOptional<z.ZodNumber>;
            replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            replica_in_bytes: z.ZodOptional<z.ZodNumber>;
            coordinating_rejections: z.ZodOptional<z.ZodNumber>;
            primary_rejections: z.ZodOptional<z.ZodNumber>;
            replica_rejections: z.ZodOptional<z.ZodNumber>;
            primary_document_rejections: z.ZodOptional<z.ZodNumber>;
            large_operation_rejections: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsIndexingPressure = z.infer<typeof ClusterStatsIndexingPressure>;
export declare const ClusterStatsClusterOperatingSystemArchitecture: z.ZodObject<{
    arch: z.ZodString;
    count: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsClusterOperatingSystemArchitecture = z.infer<typeof ClusterStatsClusterOperatingSystemArchitecture>;
export declare const ClusterStatsOperatingSystemMemoryInfo: z.ZodObject<{
    adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
    adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    free_in_bytes: z.ZodNumber;
    free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    free_percent: z.ZodNumber;
    total_in_bytes: z.ZodNumber;
    total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    used_in_bytes: z.ZodNumber;
    used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    used_percent: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsOperatingSystemMemoryInfo = z.infer<typeof ClusterStatsOperatingSystemMemoryInfo>;
export declare const ClusterStatsClusterOperatingSystemName: z.ZodObject<{
    count: z.ZodNumber;
    name: z.ZodString;
}, z.core.$strip>;
export type ClusterStatsClusterOperatingSystemName = z.infer<typeof ClusterStatsClusterOperatingSystemName>;
export declare const ClusterStatsClusterOperatingSystemPrettyName: z.ZodObject<{
    count: z.ZodNumber;
    pretty_name: z.ZodString;
}, z.core.$strip>;
export type ClusterStatsClusterOperatingSystemPrettyName = z.infer<typeof ClusterStatsClusterOperatingSystemPrettyName>;
export declare const ClusterStatsClusterOperatingSystem: z.ZodObject<{
    allocated_processors: z.ZodNumber;
    architectures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        arch: z.ZodString;
        count: z.ZodNumber;
    }, z.core.$strip>>>;
    available_processors: z.ZodNumber;
    mem: z.ZodObject<{
        adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
        adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        free_in_bytes: z.ZodNumber;
        free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        free_percent: z.ZodNumber;
        total_in_bytes: z.ZodNumber;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        used_in_bytes: z.ZodNumber;
        used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        used_percent: z.ZodNumber;
    }, z.core.$strip>;
    names: z.ZodArray<z.ZodObject<{
        count: z.ZodNumber;
        name: z.ZodString;
    }, z.core.$strip>>;
    pretty_names: z.ZodArray<z.ZodObject<{
        count: z.ZodNumber;
        pretty_name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsClusterOperatingSystem = z.infer<typeof ClusterStatsClusterOperatingSystem>;
export declare const ClusterStatsNodePackagingType: z.ZodObject<{
    count: z.ZodNumber;
    flavor: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type ClusterStatsNodePackagingType = z.infer<typeof ClusterStatsNodePackagingType>;
export declare const ClusterStatsClusterProcessCpu: z.ZodObject<{
    percent: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsClusterProcessCpu = z.infer<typeof ClusterStatsClusterProcessCpu>;
export declare const ClusterStatsClusterProcessOpenFileDescriptors: z.ZodObject<{
    avg: z.ZodNumber;
    max: z.ZodNumber;
    min: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsClusterProcessOpenFileDescriptors = z.infer<typeof ClusterStatsClusterProcessOpenFileDescriptors>;
export declare const ClusterStatsClusterProcess: z.ZodObject<{
    cpu: z.ZodObject<{
        percent: z.ZodNumber;
    }, z.core.$strip>;
    open_file_descriptors: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsClusterProcess = z.infer<typeof ClusterStatsClusterProcess>;
export declare const ClusterStatsClusterNodes: z.ZodObject<{
    count: z.ZodObject<{
        total: z.ZodNumber;
        coordinating_only: z.ZodOptional<z.ZodNumber>;
        data: z.ZodOptional<z.ZodNumber>;
        data_cold: z.ZodOptional<z.ZodNumber>;
        data_content: z.ZodOptional<z.ZodNumber>;
        data_frozen: z.ZodOptional<z.ZodNumber>;
        data_hot: z.ZodOptional<z.ZodNumber>;
        data_warm: z.ZodOptional<z.ZodNumber>;
        index: z.ZodOptional<z.ZodNumber>;
        ingest: z.ZodOptional<z.ZodNumber>;
        master: z.ZodOptional<z.ZodNumber>;
        ml: z.ZodOptional<z.ZodNumber>;
        remote_cluster_client: z.ZodOptional<z.ZodNumber>;
        search: z.ZodOptional<z.ZodNumber>;
        transform: z.ZodOptional<z.ZodNumber>;
        voting_only: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    discovery_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
    fs: z.ZodObject<{
        path: z.ZodOptional<z.ZodString>;
        mount: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        available_in_bytes: z.ZodOptional<z.ZodNumber>;
        available: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        free_in_bytes: z.ZodOptional<z.ZodNumber>;
        free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_in_bytes: z.ZodOptional<z.ZodNumber>;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        low_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        low_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
        high_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        high_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
        flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
        frozen_flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        frozen_flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    indexing_pressure: z.ZodObject<{
        memory: z.ZodObject<{
            limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            limit_in_bytes: z.ZodOptional<z.ZodNumber>;
            current: z.ZodOptional<z.ZodObject<{
                all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                all_in_bytes: z.ZodOptional<z.ZodNumber>;
                combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
                primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                replica_in_bytes: z.ZodOptional<z.ZodNumber>;
                coordinating_rejections: z.ZodOptional<z.ZodNumber>;
                primary_rejections: z.ZodOptional<z.ZodNumber>;
                replica_rejections: z.ZodOptional<z.ZodNumber>;
                primary_document_rejections: z.ZodOptional<z.ZodNumber>;
                large_operation_rejections: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            total: z.ZodOptional<z.ZodObject<{
                all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                all_in_bytes: z.ZodOptional<z.ZodNumber>;
                combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
                primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                replica_in_bytes: z.ZodOptional<z.ZodNumber>;
                coordinating_rejections: z.ZodOptional<z.ZodNumber>;
                primary_rejections: z.ZodOptional<z.ZodNumber>;
                replica_rejections: z.ZodOptional<z.ZodNumber>;
                primary_document_rejections: z.ZodOptional<z.ZodNumber>;
                large_operation_rejections: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    ingest: z.ZodObject<{
        number_of_pipelines: z.ZodNumber;
        processor_stats: z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            current: z.ZodNumber;
            failed: z.ZodNumber;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    jvm: z.ZodObject<{
        max_uptime_in_millis: z.ZodAny;
        max_uptime: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        mem: z.ZodObject<{
            heap_max_in_bytes: z.ZodNumber;
            heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            heap_used_in_bytes: z.ZodNumber;
            heap_used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        threads: z.ZodNumber;
        versions: z.ZodArray<z.ZodObject<{
            bundled_jdk: z.ZodBoolean;
            count: z.ZodNumber;
            using_bundled_jdk: z.ZodBoolean;
            version: z.ZodString;
            vm_name: z.ZodString;
            vm_vendor: z.ZodString;
            vm_version: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    network_types: z.ZodObject<{
        http_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
        transport_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
    }, z.core.$strip>;
    os: z.ZodObject<{
        allocated_processors: z.ZodNumber;
        architectures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            arch: z.ZodString;
            count: z.ZodNumber;
        }, z.core.$strip>>>;
        available_processors: z.ZodNumber;
        mem: z.ZodObject<{
            adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
            adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            free_in_bytes: z.ZodNumber;
            free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            free_percent: z.ZodNumber;
            total_in_bytes: z.ZodNumber;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            used_in_bytes: z.ZodNumber;
            used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            used_percent: z.ZodNumber;
        }, z.core.$strip>;
        names: z.ZodArray<z.ZodObject<{
            count: z.ZodNumber;
            name: z.ZodString;
        }, z.core.$strip>>;
        pretty_names: z.ZodArray<z.ZodObject<{
            count: z.ZodNumber;
            pretty_name: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    packaging_types: z.ZodArray<z.ZodObject<{
        count: z.ZodNumber;
        flavor: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    plugins: z.ZodArray<z.ZodObject<{
        classname: z.ZodString;
        description: z.ZodString;
        elasticsearch_version: z.ZodString;
        extended_plugins: z.ZodArray<z.ZodString>;
        has_native_controller: z.ZodBoolean;
        java_version: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        licensed: z.ZodBoolean;
    }, z.core.$strip>>;
    process: z.ZodObject<{
        cpu: z.ZodObject<{
            percent: z.ZodNumber;
        }, z.core.$strip>;
        open_file_descriptors: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    versions: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ClusterStatsClusterNodes = z.infer<typeof ClusterStatsClusterNodes>;
export declare const ClusterStatsSnapshotCurrentCounts: z.ZodObject<{
    snapshots: z.ZodNumber;
    shard_snapshots: z.ZodNumber;
    snapshot_deletions: z.ZodNumber;
    concurrent_operations: z.ZodNumber;
    cleanups: z.ZodNumber;
}, z.core.$strip>;
export type ClusterStatsSnapshotCurrentCounts = z.infer<typeof ClusterStatsSnapshotCurrentCounts>;
export declare const ClusterStatsShardState: z.ZodEnum<{
    SUCCESS: "SUCCESS";
    FAILED: "FAILED";
    INIT: "INIT";
    ABORTED: "ABORTED";
    MISSING: "MISSING";
    WAITING: "WAITING";
    QUEUED: "QUEUED";
    PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
}>;
export type ClusterStatsShardState = z.infer<typeof ClusterStatsShardState>;
export declare const ClusterStatsRepositoryStatsShards: z.ZodObject<{
    total: z.ZodNumber;
    complete: z.ZodNumber;
    incomplete: z.ZodNumber;
    states: z.ZodRecord<z.ZodEnum<{
        SUCCESS: "SUCCESS";
        FAILED: "FAILED";
        INIT: "INIT";
        ABORTED: "ABORTED";
        MISSING: "MISSING";
        WAITING: "WAITING";
        QUEUED: "QUEUED";
        PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
    }>, z.ZodNumber>;
}, z.core.$strip>;
export type ClusterStatsRepositoryStatsShards = z.infer<typeof ClusterStatsRepositoryStatsShards>;
export declare const ClusterStatsRepositoryStatsCurrentCounts: z.ZodObject<{
    snapshots: z.ZodNumber;
    clones: z.ZodNumber;
    finalizations: z.ZodNumber;
    deletions: z.ZodNumber;
    snapshot_deletions: z.ZodNumber;
    active_deletions: z.ZodNumber;
    shards: z.ZodObject<{
        total: z.ZodNumber;
        complete: z.ZodNumber;
        incomplete: z.ZodNumber;
        states: z.ZodRecord<z.ZodEnum<{
            SUCCESS: "SUCCESS";
            FAILED: "FAILED";
            INIT: "INIT";
            ABORTED: "ABORTED";
            MISSING: "MISSING";
            WAITING: "WAITING";
            QUEUED: "QUEUED";
            PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
        }>, z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsRepositoryStatsCurrentCounts = z.infer<typeof ClusterStatsRepositoryStatsCurrentCounts>;
export declare const ClusterStatsPerRepositoryStats: z.ZodObject<{
    type: z.ZodString;
    oldest_start_time_millis: z.ZodNumber;
    oldest_start_time: z.ZodOptional<z.ZodString>;
    current_counts: z.ZodObject<{
        snapshots: z.ZodNumber;
        clones: z.ZodNumber;
        finalizations: z.ZodNumber;
        deletions: z.ZodNumber;
        snapshot_deletions: z.ZodNumber;
        active_deletions: z.ZodNumber;
        shards: z.ZodObject<{
            total: z.ZodNumber;
            complete: z.ZodNumber;
            incomplete: z.ZodNumber;
            states: z.ZodRecord<z.ZodEnum<{
                SUCCESS: "SUCCESS";
                FAILED: "FAILED";
                INIT: "INIT";
                ABORTED: "ABORTED";
                MISSING: "MISSING";
                WAITING: "WAITING";
                QUEUED: "QUEUED";
                PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
            }>, z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ClusterStatsPerRepositoryStats = z.infer<typeof ClusterStatsPerRepositoryStats>;
export declare const ClusterStatsClusterSnapshotStats: z.ZodObject<{
    current_counts: z.ZodObject<{
        snapshots: z.ZodNumber;
        shard_snapshots: z.ZodNumber;
        snapshot_deletions: z.ZodNumber;
        concurrent_operations: z.ZodNumber;
        cleanups: z.ZodNumber;
    }, z.core.$strip>;
    repositories: z.ZodRecord<z.ZodString, z.ZodObject<{
        type: z.ZodString;
        oldest_start_time_millis: z.ZodNumber;
        oldest_start_time: z.ZodOptional<z.ZodString>;
        current_counts: z.ZodObject<{
            snapshots: z.ZodNumber;
            clones: z.ZodNumber;
            finalizations: z.ZodNumber;
            deletions: z.ZodNumber;
            snapshot_deletions: z.ZodNumber;
            active_deletions: z.ZodNumber;
            shards: z.ZodObject<{
                total: z.ZodNumber;
                complete: z.ZodNumber;
                incomplete: z.ZodNumber;
                states: z.ZodRecord<z.ZodEnum<{
                    SUCCESS: "SUCCESS";
                    FAILED: "FAILED";
                    INIT: "INIT";
                    ABORTED: "ABORTED";
                    MISSING: "MISSING";
                    WAITING: "WAITING";
                    QUEUED: "QUEUED";
                    PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
                }>, z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsClusterSnapshotStats = z.infer<typeof ClusterStatsClusterSnapshotStats>;
/**
 * Get cluster statistics.
 *
 * Get basic index metrics (shard numbers, store size, memory usage) and information about the current nodes that form the cluster (number, roles, os, jvm versions, memory usage, cpu and installed plugins).
 */
export declare const ClusterStatsRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include_remotes: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type ClusterStatsRequest = z.infer<typeof ClusterStatsRequest>;
export declare const NodesNodesResponseBase: z.ZodObject<{
    node_stats: z.ZodOptional<z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesNodesResponseBase = z.infer<typeof NodesNodesResponseBase>;
export declare const ClusterStatsStatsResponseBase: z.ZodObject<{
    cluster_name: z.ZodString;
    cluster_uuid: z.ZodString;
    indices: z.ZodObject<{
        analysis: z.ZodOptional<z.ZodObject<{
            analyzer_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_analyzers: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_char_filters: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_filters: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_tokenizers: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            char_filter_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            multiple_synonym_graph_filters: z.ZodOptional<z.ZodObject<{
                analyzer_count: z.ZodOptional<z.ZodNumber>;
                index_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            filter_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            tokenizer_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            synonyms: z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                index_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        completion: z.ZodObject<{
            size_in_bytes: z.ZodNumber;
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        count: z.ZodNumber;
        docs: z.ZodObject<{
            count: z.ZodNumber;
            deleted: z.ZodOptional<z.ZodNumber>;
            total_size_in_bytes: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        fielddata: z.ZodObject<{
            evictions: z.ZodOptional<z.ZodNumber>;
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
            global_ordinals: z.ZodObject<{
                build_time_in_millis: z.ZodNumber;
                build_time: z.ZodOptional<z.ZodString>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    build_time_in_millis: z.ZodNumber;
                    build_time: z.ZodOptional<z.ZodString>;
                    shard_max_value_count: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        query_cache: z.ZodObject<{
            cache_count: z.ZodNumber;
            cache_size: z.ZodNumber;
            evictions: z.ZodNumber;
            hit_count: z.ZodNumber;
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
            miss_count: z.ZodNumber;
            total_count: z.ZodNumber;
        }, z.core.$strip>;
        search: z.ZodObject<{
            total: z.ZodNumber;
            queries: z.ZodRecord<z.ZodString, z.ZodNumber>;
            rescorers: z.ZodRecord<z.ZodString, z.ZodNumber>;
            sections: z.ZodRecord<z.ZodString, z.ZodNumber>;
            retrievers: z.ZodRecord<z.ZodString, z.ZodNumber>;
            extended: z.ZodObject<{
                retrievers: z.ZodOptional<z.ZodObject<{
                    text_similarity_reranker: z.ZodOptional<z.ZodObject<{
                        chunk_rescorer: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                section: z.ZodOptional<z.ZodObject<{
                    sort: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                        _score: "_score";
                        _doc: "_doc";
                        _geo_distance: "_geo_distance";
                        _script: "_script";
                        field_sort: "field_sort";
                    }>, z.ZodNumber>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        segments: z.ZodObject<{
            count: z.ZodNumber;
            doc_values_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            doc_values_memory_in_bytes: z.ZodNumber;
            file_sizes: z.ZodRecord<z.ZodString, z.ZodObject<{
                description: z.ZodString;
                size_in_bytes: z.ZodNumber;
                min_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                max_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                average_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            fixed_bit_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fixed_bit_set_memory_in_bytes: z.ZodNumber;
            index_writer_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            index_writer_memory_in_bytes: z.ZodNumber;
            max_unsafe_auto_id_timestamp: z.ZodNumber;
            memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_in_bytes: z.ZodNumber;
            norms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            norms_memory_in_bytes: z.ZodNumber;
            points_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            points_memory_in_bytes: z.ZodNumber;
            stored_fields_memory_in_bytes: z.ZodNumber;
            stored_fields_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            terms_memory_in_bytes: z.ZodNumber;
            terms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            term_vectors_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            term_vectors_memory_in_bytes: z.ZodNumber;
            version_map_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            version_map_memory_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        shards: z.ZodObject<{
            index: z.ZodOptional<z.ZodObject<{
                primaries: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
                replication: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
                shards: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            primaries: z.ZodOptional<z.ZodNumber>;
            replication: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        store: z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
            reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reserved_in_bytes: z.ZodNumber;
            total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        mappings: z.ZodOptional<z.ZodObject<{
            field_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            runtime_field_types: z.ZodArray<z.ZodObject<{
                chars_max: z.ZodNumber;
                chars_total: z.ZodNumber;
                count: z.ZodNumber;
                doc_max: z.ZodNumber;
                doc_total: z.ZodNumber;
                index_count: z.ZodNumber;
                lang: z.ZodArray<z.ZodString>;
                lines_max: z.ZodNumber;
                lines_total: z.ZodNumber;
                name: z.ZodString;
                scriptless_count: z.ZodNumber;
                shadowed_count: z.ZodNumber;
                source_max: z.ZodNumber;
                source_total: z.ZodNumber;
            }, z.core.$strip>>;
            total_field_count: z.ZodOptional<z.ZodNumber>;
            total_deduplicated_field_count: z.ZodOptional<z.ZodNumber>;
            total_deduplicated_mapping_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_deduplicated_mapping_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            source_modes: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
        versions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            total_primary_bytes: z.ZodNumber;
            total_primary_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            version: z.ZodString;
        }, z.core.$strip>>>;
        dense_vector: z.ZodObject<{
            value_count: z.ZodNumber;
            off_heap: z.ZodOptional<z.ZodObject<{
                total_size_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_veb_size_bytes: z.ZodNumber;
                total_veb_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_vec_size_bytes: z.ZodNumber;
                total_vec_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_veq_size_bytes: z.ZodNumber;
                total_veq_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_vex_size_bytes: z.ZodNumber;
                total_vex_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_cenif_size_bytes: z.ZodNumber;
                total_cenif_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_clivf_size_bytes: z.ZodNumber;
                total_clivf_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fielddata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        sparse_vector: z.ZodObject<{
            value_count: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    nodes: z.ZodObject<{
        count: z.ZodObject<{
            total: z.ZodNumber;
            coordinating_only: z.ZodOptional<z.ZodNumber>;
            data: z.ZodOptional<z.ZodNumber>;
            data_cold: z.ZodOptional<z.ZodNumber>;
            data_content: z.ZodOptional<z.ZodNumber>;
            data_frozen: z.ZodOptional<z.ZodNumber>;
            data_hot: z.ZodOptional<z.ZodNumber>;
            data_warm: z.ZodOptional<z.ZodNumber>;
            index: z.ZodOptional<z.ZodNumber>;
            ingest: z.ZodOptional<z.ZodNumber>;
            master: z.ZodOptional<z.ZodNumber>;
            ml: z.ZodOptional<z.ZodNumber>;
            remote_cluster_client: z.ZodOptional<z.ZodNumber>;
            search: z.ZodOptional<z.ZodNumber>;
            transform: z.ZodOptional<z.ZodNumber>;
            voting_only: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        discovery_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
        fs: z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            mount: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            available_in_bytes: z.ZodOptional<z.ZodNumber>;
            available: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            low_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            low_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
            high_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            high_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
            flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
            frozen_flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            frozen_flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        indexing_pressure: z.ZodObject<{
            memory: z.ZodObject<{
                limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                limit_in_bytes: z.ZodOptional<z.ZodNumber>;
                current: z.ZodOptional<z.ZodObject<{
                    all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    all_in_bytes: z.ZodOptional<z.ZodNumber>;
                    combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
                    primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    replica_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_rejections: z.ZodOptional<z.ZodNumber>;
                    replica_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_document_rejections: z.ZodOptional<z.ZodNumber>;
                    large_operation_rejections: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                total: z.ZodOptional<z.ZodObject<{
                    all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    all_in_bytes: z.ZodOptional<z.ZodNumber>;
                    combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
                    primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    replica_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_rejections: z.ZodOptional<z.ZodNumber>;
                    replica_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_document_rejections: z.ZodOptional<z.ZodNumber>;
                    large_operation_rejections: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        ingest: z.ZodObject<{
            number_of_pipelines: z.ZodNumber;
            processor_stats: z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                current: z.ZodNumber;
                failed: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        jvm: z.ZodObject<{
            max_uptime_in_millis: z.ZodAny;
            max_uptime: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            mem: z.ZodObject<{
                heap_max_in_bytes: z.ZodNumber;
                heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                heap_used_in_bytes: z.ZodNumber;
                heap_used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>;
            threads: z.ZodNumber;
            versions: z.ZodArray<z.ZodObject<{
                bundled_jdk: z.ZodBoolean;
                count: z.ZodNumber;
                using_bundled_jdk: z.ZodBoolean;
                version: z.ZodString;
                vm_name: z.ZodString;
                vm_vendor: z.ZodString;
                vm_version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        network_types: z.ZodObject<{
            http_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
            transport_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>;
        os: z.ZodObject<{
            allocated_processors: z.ZodNumber;
            architectures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                arch: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>>;
            available_processors: z.ZodNumber;
            mem: z.ZodObject<{
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                free_in_bytes: z.ZodNumber;
                free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                free_percent: z.ZodNumber;
                total_in_bytes: z.ZodNumber;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                used_in_bytes: z.ZodNumber;
                used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                used_percent: z.ZodNumber;
            }, z.core.$strip>;
            names: z.ZodArray<z.ZodObject<{
                count: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>>;
            pretty_names: z.ZodArray<z.ZodObject<{
                count: z.ZodNumber;
                pretty_name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        packaging_types: z.ZodArray<z.ZodObject<{
            count: z.ZodNumber;
            flavor: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>>;
        plugins: z.ZodArray<z.ZodObject<{
            classname: z.ZodString;
            description: z.ZodString;
            elasticsearch_version: z.ZodString;
            extended_plugins: z.ZodArray<z.ZodString>;
            has_native_controller: z.ZodBoolean;
            java_version: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            licensed: z.ZodBoolean;
        }, z.core.$strip>>;
        process: z.ZodObject<{
            cpu: z.ZodObject<{
                percent: z.ZodNumber;
            }, z.core.$strip>;
            open_file_descriptors: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        versions: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    repositories: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>;
    snapshots: z.ZodObject<{
        current_counts: z.ZodObject<{
            snapshots: z.ZodNumber;
            shard_snapshots: z.ZodNumber;
            snapshot_deletions: z.ZodNumber;
            concurrent_operations: z.ZodNumber;
            cleanups: z.ZodNumber;
        }, z.core.$strip>;
        repositories: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            oldest_start_time_millis: z.ZodNumber;
            oldest_start_time: z.ZodOptional<z.ZodString>;
            current_counts: z.ZodObject<{
                snapshots: z.ZodNumber;
                clones: z.ZodNumber;
                finalizations: z.ZodNumber;
                deletions: z.ZodNumber;
                snapshot_deletions: z.ZodNumber;
                active_deletions: z.ZodNumber;
                shards: z.ZodObject<{
                    total: z.ZodNumber;
                    complete: z.ZodNumber;
                    incomplete: z.ZodNumber;
                    states: z.ZodRecord<z.ZodEnum<{
                        SUCCESS: "SUCCESS";
                        FAILED: "FAILED";
                        INIT: "INIT";
                        ABORTED: "ABORTED";
                        MISSING: "MISSING";
                        WAITING: "WAITING";
                        QUEUED: "QUEUED";
                        PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
                    }>, z.ZodNumber>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    status: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>>;
    timestamp: z.ZodNumber;
    ccs: z.ZodObject<{
        clusters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            cluster_uuid: z.ZodString;
            mode: z.ZodString;
            skip_unavailable: z.ZodBoolean;
            'transport.compress': z.ZodString;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                GREEN: "GREEN";
                yellow: "yellow";
                YELLOW: "YELLOW";
                red: "red";
                RED: "RED";
                unavailable: "unavailable";
            }>;
            version: z.ZodArray<z.ZodString>;
            nodes_count: z.ZodNumber;
            shards_count: z.ZodNumber;
            indices_count: z.ZodNumber;
            indices_total_size_in_bytes: z.ZodNumber;
            indices_total_size: z.ZodOptional<z.ZodString>;
            max_heap_in_bytes: z.ZodNumber;
            max_heap: z.ZodOptional<z.ZodString>;
            mem_total_in_bytes: z.ZodNumber;
            mem_total: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        _search: z.ZodObject<{
            total: z.ZodNumber;
            success: z.ZodNumber;
            skipped: z.ZodNumber;
            took: z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>;
            took_mrt_true: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            took_mrt_false: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            remotes_per_search_max: z.ZodNumber;
            remotes_per_search_avg: z.ZodNumber;
            failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
            features: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
                total: z.ZodNumber;
                skipped: z.ZodNumber;
                took: z.ZodObject<{
                    max: z.ZodAny;
                    avg: z.ZodAny;
                    p90: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        _esql: z.ZodOptional<z.ZodObject<{
            total: z.ZodNumber;
            success: z.ZodNumber;
            skipped: z.ZodNumber;
            took: z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>;
            took_mrt_true: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            took_mrt_false: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            remotes_per_search_max: z.ZodNumber;
            remotes_per_search_avg: z.ZodNumber;
            failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
            features: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
                total: z.ZodNumber;
                skipped: z.ZodNumber;
                took: z.ZodObject<{
                    max: z.ZodAny;
                    avg: z.ZodAny;
                    p90: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    node_stats: z.ZodOptional<z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsStatsResponseBase = z.infer<typeof ClusterStatsStatsResponseBase>;
export declare const ClusterStatsResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    cluster_uuid: z.ZodString;
    indices: z.ZodObject<{
        analysis: z.ZodOptional<z.ZodObject<{
            analyzer_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_analyzers: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_char_filters: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_filters: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            built_in_tokenizers: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            char_filter_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            multiple_synonym_graph_filters: z.ZodOptional<z.ZodObject<{
                analyzer_count: z.ZodOptional<z.ZodNumber>;
                index_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            filter_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            tokenizer_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            synonyms: z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                index_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        completion: z.ZodObject<{
            size_in_bytes: z.ZodNumber;
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        count: z.ZodNumber;
        docs: z.ZodObject<{
            count: z.ZodNumber;
            deleted: z.ZodOptional<z.ZodNumber>;
            total_size_in_bytes: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        fielddata: z.ZodObject<{
            evictions: z.ZodOptional<z.ZodNumber>;
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
            global_ordinals: z.ZodObject<{
                build_time_in_millis: z.ZodNumber;
                build_time: z.ZodOptional<z.ZodString>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    build_time_in_millis: z.ZodNumber;
                    build_time: z.ZodOptional<z.ZodString>;
                    shard_max_value_count: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        query_cache: z.ZodObject<{
            cache_count: z.ZodNumber;
            cache_size: z.ZodNumber;
            evictions: z.ZodNumber;
            hit_count: z.ZodNumber;
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
            miss_count: z.ZodNumber;
            total_count: z.ZodNumber;
        }, z.core.$strip>;
        search: z.ZodObject<{
            total: z.ZodNumber;
            queries: z.ZodRecord<z.ZodString, z.ZodNumber>;
            rescorers: z.ZodRecord<z.ZodString, z.ZodNumber>;
            sections: z.ZodRecord<z.ZodString, z.ZodNumber>;
            retrievers: z.ZodRecord<z.ZodString, z.ZodNumber>;
            extended: z.ZodObject<{
                retrievers: z.ZodOptional<z.ZodObject<{
                    text_similarity_reranker: z.ZodOptional<z.ZodObject<{
                        chunk_rescorer: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                section: z.ZodOptional<z.ZodObject<{
                    sort: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
                        _score: "_score";
                        _doc: "_doc";
                        _geo_distance: "_geo_distance";
                        _script: "_script";
                        field_sort: "field_sort";
                    }>, z.ZodNumber>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        segments: z.ZodObject<{
            count: z.ZodNumber;
            doc_values_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            doc_values_memory_in_bytes: z.ZodNumber;
            file_sizes: z.ZodRecord<z.ZodString, z.ZodObject<{
                description: z.ZodString;
                size_in_bytes: z.ZodNumber;
                min_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                max_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                average_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            fixed_bit_set: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fixed_bit_set_memory_in_bytes: z.ZodNumber;
            index_writer_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            index_writer_memory_in_bytes: z.ZodNumber;
            max_unsafe_auto_id_timestamp: z.ZodNumber;
            memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_in_bytes: z.ZodNumber;
            norms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            norms_memory_in_bytes: z.ZodNumber;
            points_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            points_memory_in_bytes: z.ZodNumber;
            stored_fields_memory_in_bytes: z.ZodNumber;
            stored_fields_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            terms_memory_in_bytes: z.ZodNumber;
            terms_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            term_vectors_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            term_vectors_memory_in_bytes: z.ZodNumber;
            version_map_memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            version_map_memory_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        shards: z.ZodObject<{
            index: z.ZodOptional<z.ZodObject<{
                primaries: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
                replication: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
                shards: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            primaries: z.ZodOptional<z.ZodNumber>;
            replication: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        store: z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
            reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reserved_in_bytes: z.ZodNumber;
            total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        mappings: z.ZodOptional<z.ZodObject<{
            field_types: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                count: z.ZodNumber;
                index_count: z.ZodNumber;
                indexed_vector_count: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_max: z.ZodOptional<z.ZodNumber>;
                indexed_vector_dim_min: z.ZodOptional<z.ZodNumber>;
                script_count: z.ZodOptional<z.ZodNumber>;
                vector_index_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_similarity_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                vector_element_type_count: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            runtime_field_types: z.ZodArray<z.ZodObject<{
                chars_max: z.ZodNumber;
                chars_total: z.ZodNumber;
                count: z.ZodNumber;
                doc_max: z.ZodNumber;
                doc_total: z.ZodNumber;
                index_count: z.ZodNumber;
                lang: z.ZodArray<z.ZodString>;
                lines_max: z.ZodNumber;
                lines_total: z.ZodNumber;
                name: z.ZodString;
                scriptless_count: z.ZodNumber;
                shadowed_count: z.ZodNumber;
                source_max: z.ZodNumber;
                source_total: z.ZodNumber;
            }, z.core.$strip>>;
            total_field_count: z.ZodOptional<z.ZodNumber>;
            total_deduplicated_field_count: z.ZodOptional<z.ZodNumber>;
            total_deduplicated_mapping_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_deduplicated_mapping_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            source_modes: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>>;
        versions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            total_primary_bytes: z.ZodNumber;
            total_primary_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            version: z.ZodString;
        }, z.core.$strip>>>;
        dense_vector: z.ZodObject<{
            value_count: z.ZodNumber;
            off_heap: z.ZodOptional<z.ZodObject<{
                total_size_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_veb_size_bytes: z.ZodNumber;
                total_veb_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_vec_size_bytes: z.ZodNumber;
                total_vec_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_veq_size_bytes: z.ZodNumber;
                total_veq_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_vex_size_bytes: z.ZodNumber;
                total_vex_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_cenif_size_bytes: z.ZodNumber;
                total_cenif_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_clivf_size_bytes: z.ZodNumber;
                total_clivf_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fielddata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        sparse_vector: z.ZodObject<{
            value_count: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    nodes: z.ZodObject<{
        count: z.ZodObject<{
            total: z.ZodNumber;
            coordinating_only: z.ZodOptional<z.ZodNumber>;
            data: z.ZodOptional<z.ZodNumber>;
            data_cold: z.ZodOptional<z.ZodNumber>;
            data_content: z.ZodOptional<z.ZodNumber>;
            data_frozen: z.ZodOptional<z.ZodNumber>;
            data_hot: z.ZodOptional<z.ZodNumber>;
            data_warm: z.ZodOptional<z.ZodNumber>;
            index: z.ZodOptional<z.ZodNumber>;
            ingest: z.ZodOptional<z.ZodNumber>;
            master: z.ZodOptional<z.ZodNumber>;
            ml: z.ZodOptional<z.ZodNumber>;
            remote_cluster_client: z.ZodOptional<z.ZodNumber>;
            search: z.ZodOptional<z.ZodNumber>;
            transform: z.ZodOptional<z.ZodNumber>;
            voting_only: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        discovery_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
        fs: z.ZodObject<{
            path: z.ZodOptional<z.ZodString>;
            mount: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            available_in_bytes: z.ZodOptional<z.ZodNumber>;
            available: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            low_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            low_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
            high_watermark_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            high_watermark_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
            flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
            frozen_flood_stage_free_space: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            frozen_flood_stage_free_space_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        indexing_pressure: z.ZodObject<{
            memory: z.ZodObject<{
                limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                limit_in_bytes: z.ZodOptional<z.ZodNumber>;
                current: z.ZodOptional<z.ZodObject<{
                    all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    all_in_bytes: z.ZodOptional<z.ZodNumber>;
                    combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
                    primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    replica_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_rejections: z.ZodOptional<z.ZodNumber>;
                    replica_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_document_rejections: z.ZodOptional<z.ZodNumber>;
                    large_operation_rejections: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                total: z.ZodOptional<z.ZodObject<{
                    all: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    all_in_bytes: z.ZodOptional<z.ZodNumber>;
                    combined_coordinating_and_primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    combined_coordinating_and_primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    coordinating_in_bytes: z.ZodOptional<z.ZodNumber>;
                    primary: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    primary_in_bytes: z.ZodOptional<z.ZodNumber>;
                    replica: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    replica_in_bytes: z.ZodOptional<z.ZodNumber>;
                    coordinating_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_rejections: z.ZodOptional<z.ZodNumber>;
                    replica_rejections: z.ZodOptional<z.ZodNumber>;
                    primary_document_rejections: z.ZodOptional<z.ZodNumber>;
                    large_operation_rejections: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        ingest: z.ZodObject<{
            number_of_pipelines: z.ZodNumber;
            processor_stats: z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                current: z.ZodNumber;
                failed: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        jvm: z.ZodObject<{
            max_uptime_in_millis: z.ZodAny;
            max_uptime: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            mem: z.ZodObject<{
                heap_max_in_bytes: z.ZodNumber;
                heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                heap_used_in_bytes: z.ZodNumber;
                heap_used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>;
            threads: z.ZodNumber;
            versions: z.ZodArray<z.ZodObject<{
                bundled_jdk: z.ZodBoolean;
                count: z.ZodNumber;
                using_bundled_jdk: z.ZodBoolean;
                version: z.ZodString;
                vm_name: z.ZodString;
                vm_vendor: z.ZodString;
                vm_version: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        network_types: z.ZodObject<{
            http_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
            transport_types: z.ZodRecord<z.ZodString, z.ZodNumber>;
        }, z.core.$strip>;
        os: z.ZodObject<{
            allocated_processors: z.ZodNumber;
            architectures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                arch: z.ZodString;
                count: z.ZodNumber;
            }, z.core.$strip>>>;
            available_processors: z.ZodNumber;
            mem: z.ZodObject<{
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                free_in_bytes: z.ZodNumber;
                free: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                free_percent: z.ZodNumber;
                total_in_bytes: z.ZodNumber;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                used_in_bytes: z.ZodNumber;
                used: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                used_percent: z.ZodNumber;
            }, z.core.$strip>;
            names: z.ZodArray<z.ZodObject<{
                count: z.ZodNumber;
                name: z.ZodString;
            }, z.core.$strip>>;
            pretty_names: z.ZodArray<z.ZodObject<{
                count: z.ZodNumber;
                pretty_name: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        packaging_types: z.ZodArray<z.ZodObject<{
            count: z.ZodNumber;
            flavor: z.ZodString;
            type: z.ZodString;
        }, z.core.$strip>>;
        plugins: z.ZodArray<z.ZodObject<{
            classname: z.ZodString;
            description: z.ZodString;
            elasticsearch_version: z.ZodString;
            extended_plugins: z.ZodArray<z.ZodString>;
            has_native_controller: z.ZodBoolean;
            java_version: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            licensed: z.ZodBoolean;
        }, z.core.$strip>>;
        process: z.ZodObject<{
            cpu: z.ZodObject<{
                percent: z.ZodNumber;
            }, z.core.$strip>;
            open_file_descriptors: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        versions: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    repositories: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNumber>>;
    snapshots: z.ZodObject<{
        current_counts: z.ZodObject<{
            snapshots: z.ZodNumber;
            shard_snapshots: z.ZodNumber;
            snapshot_deletions: z.ZodNumber;
            concurrent_operations: z.ZodNumber;
            cleanups: z.ZodNumber;
        }, z.core.$strip>;
        repositories: z.ZodRecord<z.ZodString, z.ZodObject<{
            type: z.ZodString;
            oldest_start_time_millis: z.ZodNumber;
            oldest_start_time: z.ZodOptional<z.ZodString>;
            current_counts: z.ZodObject<{
                snapshots: z.ZodNumber;
                clones: z.ZodNumber;
                finalizations: z.ZodNumber;
                deletions: z.ZodNumber;
                snapshot_deletions: z.ZodNumber;
                active_deletions: z.ZodNumber;
                shards: z.ZodObject<{
                    total: z.ZodNumber;
                    complete: z.ZodNumber;
                    incomplete: z.ZodNumber;
                    states: z.ZodRecord<z.ZodEnum<{
                        SUCCESS: "SUCCESS";
                        FAILED: "FAILED";
                        INIT: "INIT";
                        ABORTED: "ABORTED";
                        MISSING: "MISSING";
                        WAITING: "WAITING";
                        QUEUED: "QUEUED";
                        PAUSED_FOR_NODE_REMOVAL: "PAUSED_FOR_NODE_REMOVAL";
                    }>, z.ZodNumber>;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    status: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>>;
    timestamp: z.ZodNumber;
    ccs: z.ZodObject<{
        clusters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            cluster_uuid: z.ZodString;
            mode: z.ZodString;
            skip_unavailable: z.ZodBoolean;
            'transport.compress': z.ZodString;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                GREEN: "GREEN";
                yellow: "yellow";
                YELLOW: "YELLOW";
                red: "red";
                RED: "RED";
                unavailable: "unavailable";
            }>;
            version: z.ZodArray<z.ZodString>;
            nodes_count: z.ZodNumber;
            shards_count: z.ZodNumber;
            indices_count: z.ZodNumber;
            indices_total_size_in_bytes: z.ZodNumber;
            indices_total_size: z.ZodOptional<z.ZodString>;
            max_heap_in_bytes: z.ZodNumber;
            max_heap: z.ZodOptional<z.ZodString>;
            mem_total_in_bytes: z.ZodNumber;
            mem_total: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        _search: z.ZodObject<{
            total: z.ZodNumber;
            success: z.ZodNumber;
            skipped: z.ZodNumber;
            took: z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>;
            took_mrt_true: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            took_mrt_false: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            remotes_per_search_max: z.ZodNumber;
            remotes_per_search_avg: z.ZodNumber;
            failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
            features: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
                total: z.ZodNumber;
                skipped: z.ZodNumber;
                took: z.ZodObject<{
                    max: z.ZodAny;
                    avg: z.ZodAny;
                    p90: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        _esql: z.ZodOptional<z.ZodObject<{
            total: z.ZodNumber;
            success: z.ZodNumber;
            skipped: z.ZodNumber;
            took: z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>;
            took_mrt_true: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            took_mrt_false: z.ZodOptional<z.ZodObject<{
                max: z.ZodAny;
                avg: z.ZodAny;
                p90: z.ZodAny;
            }, z.core.$strip>>;
            remotes_per_search_max: z.ZodNumber;
            remotes_per_search_avg: z.ZodNumber;
            failure_reasons: z.ZodRecord<z.ZodString, z.ZodNumber>;
            features: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clients: z.ZodRecord<z.ZodString, z.ZodNumber>;
            clusters: z.ZodRecord<z.ZodString, z.ZodObject<{
                total: z.ZodNumber;
                skipped: z.ZodNumber;
                took: z.ZodObject<{
                    max: z.ZodAny;
                    avg: z.ZodAny;
                    p90: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    node_stats: z.ZodOptional<z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterStatsResponse = z.infer<typeof ClusterStatsResponse>;
//# sourceMappingURL=cluster_stats.d.ts.map