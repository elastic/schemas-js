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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
export declare const BulkStats: z.ZodObject<{
    total_operations: z.ZodNumber;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
    total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_size_in_bytes: z.ZodNumber;
    avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    avg_time_in_millis: z.ZodAny;
    avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    avg_size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type BulkStats = z.infer<typeof BulkStats>;
export declare const CommonStatsFlag: z.ZodEnum<{
    get: "get";
    bulk: "bulk";
    fielddata: "fielddata";
    recovery: "recovery";
    segments: "segments";
    search: "search";
    flush: "flush";
    refresh: "refresh";
    completion: "completion";
    request_cache: "request_cache";
    docs: "docs";
    store: "store";
    merge: "merge";
    translog: "translog";
    mappings: "mappings";
    _all: "_all";
    indexing: "indexing";
    query_cache: "query_cache";
    warmer: "warmer";
    shard_stats: "shard_stats";
    dense_vector: "dense_vector";
    sparse_vector: "sparse_vector";
}>;
export type CommonStatsFlag = z.infer<typeof CommonStatsFlag>;
export declare const CommonStatsFlags: z.ZodUnion<readonly [z.ZodEnum<{
    get: "get";
    bulk: "bulk";
    fielddata: "fielddata";
    recovery: "recovery";
    segments: "segments";
    search: "search";
    flush: "flush";
    refresh: "refresh";
    completion: "completion";
    request_cache: "request_cache";
    docs: "docs";
    store: "store";
    merge: "merge";
    translog: "translog";
    mappings: "mappings";
    _all: "_all";
    indexing: "indexing";
    query_cache: "query_cache";
    warmer: "warmer";
    shard_stats: "shard_stats";
    dense_vector: "dense_vector";
    sparse_vector: "sparse_vector";
}>, z.ZodArray<z.ZodEnum<{
    get: "get";
    bulk: "bulk";
    fielddata: "fielddata";
    recovery: "recovery";
    segments: "segments";
    search: "search";
    flush: "flush";
    refresh: "refresh";
    completion: "completion";
    request_cache: "request_cache";
    docs: "docs";
    store: "store";
    merge: "merge";
    translog: "translog";
    mappings: "mappings";
    _all: "_all";
    indexing: "indexing";
    query_cache: "query_cache";
    warmer: "warmer";
    shard_stats: "shard_stats";
    dense_vector: "dense_vector";
    sparse_vector: "sparse_vector";
}>>]>;
export type CommonStatsFlags = z.infer<typeof CommonStatsFlags>;
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
export declare const DocStats: z.ZodObject<{
    count: z.ZodNumber;
    deleted: z.ZodOptional<z.ZodNumber>;
    total_size_in_bytes: z.ZodNumber;
    total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type DocStats = z.infer<typeof DocStats>;
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
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const FlushStats: z.ZodObject<{
    periodic: z.ZodNumber;
    total: z.ZodNumber;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type FlushStats = z.infer<typeof FlushStats>;
export declare const GetStats: z.ZodObject<{
    current: z.ZodNumber;
    exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    exists_time_in_millis: z.ZodAny;
    exists_total: z.ZodNumber;
    missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    missing_time_in_millis: z.ZodAny;
    missing_total: z.ZodNumber;
    time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_in_millis: z.ZodAny;
    total: z.ZodNumber;
}, z.core.$strip>;
export type GetStats = z.infer<typeof GetStats>;
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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export interface IndexingStatsShape {
    index_current: long;
    delete_current: long;
    delete_time?: Duration | undefined;
    delete_time_in_millis: DurationValue;
    delete_total: long;
    is_throttled: boolean;
    noop_update_total: long;
    throttle_time?: Duration | undefined;
    throttle_time_in_millis: DurationValue;
    index_time?: Duration | undefined;
    index_time_in_millis: DurationValue;
    index_total: long;
    index_failed: long;
    types?: Record<string, IndexingStatsShape> | undefined;
    write_load?: double | undefined;
    recent_write_load?: double | undefined;
    peak_write_load?: double | undefined;
}
export declare const IndexingStats: z.ZodObject<{
    index_current: z.ZodNumber;
    delete_current: z.ZodNumber;
    delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    delete_time_in_millis: z.ZodAny;
    delete_total: z.ZodNumber;
    is_throttled: z.ZodBoolean;
    noop_update_total: z.ZodNumber;
    throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    throttle_time_in_millis: z.ZodAny;
    index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    index_time_in_millis: z.ZodAny;
    index_total: z.ZodNumber;
    index_failed: z.ZodNumber;
    types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
    write_load: z.ZodOptional<z.ZodNumber>;
    recent_write_load: z.ZodOptional<z.ZodNumber>;
    peak_write_load: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type IndexingStats = z.infer<typeof IndexingStats>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Level: z.ZodEnum<{
    indices: "indices";
    shards: "shards";
    cluster: "cluster";
}>;
export type Level = z.infer<typeof Level>;
export declare const MergesStats: z.ZodObject<{
    current: z.ZodNumber;
    current_docs: z.ZodNumber;
    current_size: z.ZodOptional<z.ZodString>;
    current_size_in_bytes: z.ZodNumber;
    total: z.ZodNumber;
    total_auto_throttle: z.ZodOptional<z.ZodString>;
    total_auto_throttle_in_bytes: z.ZodNumber;
    total_docs: z.ZodNumber;
    total_size: z.ZodOptional<z.ZodString>;
    total_size_in_bytes: z.ZodNumber;
    total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_stopped_time_in_millis: z.ZodAny;
    total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_throttled_time_in_millis: z.ZodAny;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type MergesStats = z.infer<typeof MergesStats>;
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
export declare const RecoveryStats: z.ZodObject<{
    current_as_source: z.ZodNumber;
    current_as_target: z.ZodNumber;
    throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    throttle_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type RecoveryStats = z.infer<typeof RecoveryStats>;
export declare const RefreshStats: z.ZodObject<{
    external_total: z.ZodNumber;
    external_total_time_in_millis: z.ZodAny;
    listeners: z.ZodNumber;
    total: z.ZodNumber;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type RefreshStats = z.infer<typeof RefreshStats>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const RequestCacheStats: z.ZodObject<{
    evictions: z.ZodNumber;
    hit_count: z.ZodNumber;
    memory_size: z.ZodOptional<z.ZodString>;
    memory_size_in_bytes: z.ZodNumber;
    miss_count: z.ZodNumber;
}, z.core.$strip>;
export type RequestCacheStats = z.infer<typeof RequestCacheStats>;
export interface SearchStatsShape {
    fetch_current: long;
    fetch_time?: Duration | undefined;
    fetch_time_in_millis: DurationValue;
    fetch_total: long;
    open_contexts?: long | undefined;
    query_current: long;
    query_time?: Duration | undefined;
    query_time_in_millis: DurationValue;
    query_total: long;
    scroll_current: long;
    scroll_time?: Duration | undefined;
    scroll_time_in_millis: DurationValue;
    scroll_total: long;
    suggest_current: long;
    suggest_time?: Duration | undefined;
    suggest_time_in_millis: DurationValue;
    suggest_total: long;
    recent_search_load?: double | undefined;
    groups?: Record<string, SearchStatsShape> | undefined;
}
export declare const SearchStats: z.ZodObject<{
    fetch_current: z.ZodNumber;
    fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    fetch_time_in_millis: z.ZodAny;
    fetch_total: z.ZodNumber;
    open_contexts: z.ZodOptional<z.ZodNumber>;
    query_current: z.ZodNumber;
    query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    query_time_in_millis: z.ZodAny;
    query_total: z.ZodNumber;
    scroll_current: z.ZodNumber;
    scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    scroll_time_in_millis: z.ZodAny;
    scroll_total: z.ZodNumber;
    suggest_current: z.ZodNumber;
    suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    suggest_time_in_millis: z.ZodAny;
    suggest_total: z.ZodNumber;
    recent_search_load: z.ZodOptional<z.ZodNumber>;
    groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
}, z.core.$strip>;
export type SearchStats = z.infer<typeof SearchStats>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
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
export declare const SequenceNumber: z.ZodNumber;
export type SequenceNumber = z.infer<typeof SequenceNumber>;
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
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
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
export declare const StoreStats: z.ZodObject<{
    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    size_in_bytes: z.ZodNumber;
    reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    reserved_in_bytes: z.ZodNumber;
    total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type StoreStats = z.infer<typeof StoreStats>;
export declare const TranslogStats: z.ZodObject<{
    earliest_last_modified_age: z.ZodNumber;
    operations: z.ZodNumber;
    size: z.ZodOptional<z.ZodString>;
    size_in_bytes: z.ZodNumber;
    uncommitted_operations: z.ZodNumber;
    uncommitted_size: z.ZodOptional<z.ZodString>;
    uncommitted_size_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type TranslogStats = z.infer<typeof TranslogStats>;
export declare const Uuid: z.ZodString;
export type Uuid = z.infer<typeof Uuid>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const WarmerStats: z.ZodObject<{
    current: z.ZodNumber;
    total: z.ZodNumber;
    total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type WarmerStats = z.infer<typeof WarmerStats>;
export declare const IndicesStatsIndexMetadataState: z.ZodEnum<{
    close: "close";
    open: "open";
}>;
export type IndicesStatsIndexMetadataState = z.infer<typeof IndicesStatsIndexMetadataState>;
export declare const IndicesStatsShardCommit: z.ZodObject<{
    generation: z.ZodNumber;
    id: z.ZodString;
    num_docs: z.ZodNumber;
    user_data: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type IndicesStatsShardCommit = z.infer<typeof IndicesStatsShardCommit>;
export declare const IndicesStatsMappingStats: z.ZodObject<{
    total_count: z.ZodNumber;
    total_estimated_overhead: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_estimated_overhead_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type IndicesStatsMappingStats = z.infer<typeof IndicesStatsMappingStats>;
export declare const IndicesStatsShardPath: z.ZodObject<{
    data_path: z.ZodString;
    is_custom_data_path: z.ZodBoolean;
    state_path: z.ZodString;
}, z.core.$strip>;
export type IndicesStatsShardPath = z.infer<typeof IndicesStatsShardPath>;
export declare const IndicesStatsShardQueryCache: z.ZodObject<{
    cache_count: z.ZodNumber;
    cache_size: z.ZodNumber;
    evictions: z.ZodNumber;
    hit_count: z.ZodNumber;
    memory_size_in_bytes: z.ZodNumber;
    miss_count: z.ZodNumber;
    total_count: z.ZodNumber;
}, z.core.$strip>;
export type IndicesStatsShardQueryCache = z.infer<typeof IndicesStatsShardQueryCache>;
export declare const IndicesStatsShardLease: z.ZodObject<{
    id: z.ZodString;
    retaining_seq_no: z.ZodNumber;
    timestamp: z.ZodNumber;
    source: z.ZodString;
}, z.core.$strip>;
export type IndicesStatsShardLease = z.infer<typeof IndicesStatsShardLease>;
export declare const IndicesStatsShardRetentionLeases: z.ZodObject<{
    primary_term: z.ZodNumber;
    version: z.ZodNumber;
    leases: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        retaining_seq_no: z.ZodNumber;
        timestamp: z.ZodNumber;
        source: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesStatsShardRetentionLeases = z.infer<typeof IndicesStatsShardRetentionLeases>;
export declare const IndicesStatsShardRoutingState: z.ZodEnum<{
    UNASSIGNED: "UNASSIGNED";
    INITIALIZING: "INITIALIZING";
    STARTED: "STARTED";
    RELOCATING: "RELOCATING";
}>;
export type IndicesStatsShardRoutingState = z.infer<typeof IndicesStatsShardRoutingState>;
export declare const IndicesStatsShardRouting: z.ZodObject<{
    node: z.ZodString;
    primary: z.ZodBoolean;
    relocating_node: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    state: z.ZodEnum<{
        UNASSIGNED: "UNASSIGNED";
        INITIALIZING: "INITIALIZING";
        STARTED: "STARTED";
        RELOCATING: "RELOCATING";
    }>;
}, z.core.$strip>;
export type IndicesStatsShardRouting = z.infer<typeof IndicesStatsShardRouting>;
export declare const IndicesStatsShardSequenceNumber: z.ZodObject<{
    global_checkpoint: z.ZodNumber;
    local_checkpoint: z.ZodNumber;
    max_seq_no: z.ZodNumber;
}, z.core.$strip>;
export type IndicesStatsShardSequenceNumber = z.infer<typeof IndicesStatsShardSequenceNumber>;
export declare const IndicesStatsShardsTotalStats: z.ZodObject<{
    total_count: z.ZodNumber;
}, z.core.$strip>;
export type IndicesStatsShardsTotalStats = z.infer<typeof IndicesStatsShardsTotalStats>;
export interface IndicesStatsShardStatsShape {
    commit?: IndicesStatsShardCommit | undefined;
    completion?: CompletionStats | undefined;
    docs?: DocStats | undefined;
    fielddata?: FielddataStats | undefined;
    flush?: FlushStats | undefined;
    get?: GetStats | undefined;
    indexing?: IndexingStatsShape | undefined;
    mappings?: IndicesStatsMappingStats | undefined;
    merges?: MergesStats | undefined;
    shard_path?: IndicesStatsShardPath | undefined;
    query_cache?: IndicesStatsShardQueryCache | undefined;
    recovery?: RecoveryStats | undefined;
    refresh?: RefreshStats | undefined;
    request_cache?: RequestCacheStats | undefined;
    retention_leases?: IndicesStatsShardRetentionLeases | undefined;
    routing?: IndicesStatsShardRouting | undefined;
    search?: SearchStatsShape | undefined;
    segments?: SegmentsStats | undefined;
    seq_no?: IndicesStatsShardSequenceNumber | undefined;
    store?: StoreStats | undefined;
    translog?: TranslogStats | undefined;
    warmer?: WarmerStats | undefined;
    bulk?: BulkStats | undefined;
    shards?: Record<IndexName, unknown> | undefined;
    shard_stats?: IndicesStatsShardsTotalStats | undefined;
    indices?: IndicesStatsIndicesStatsShape | undefined;
}
export declare const IndicesStatsShardStats: z.ZodObject<{
    commit: z.ZodOptional<z.ZodObject<{
        generation: z.ZodNumber;
        id: z.ZodString;
        num_docs: z.ZodNumber;
        user_data: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    completion: z.ZodOptional<z.ZodObject<{
        size_in_bytes: z.ZodNumber;
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    docs: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        deleted: z.ZodOptional<z.ZodNumber>;
        total_size_in_bytes: z.ZodNumber;
        total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>>;
    fielddata: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    flush: z.ZodOptional<z.ZodObject<{
        periodic: z.ZodNumber;
        total: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    get: z.ZodOptional<z.ZodObject<{
        current: z.ZodNumber;
        exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        exists_time_in_millis: z.ZodAny;
        exists_total: z.ZodNumber;
        missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        missing_time_in_millis: z.ZodAny;
        missing_total: z.ZodNumber;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_millis: z.ZodAny;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    indexing: z.ZodOptional<z.ZodObject<{
        index_current: z.ZodNumber;
        delete_current: z.ZodNumber;
        delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        delete_time_in_millis: z.ZodAny;
        delete_total: z.ZodNumber;
        is_throttled: z.ZodBoolean;
        noop_update_total: z.ZodNumber;
        throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        throttle_time_in_millis: z.ZodAny;
        index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        index_time_in_millis: z.ZodAny;
        index_total: z.ZodNumber;
        index_failed: z.ZodNumber;
        types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
        write_load: z.ZodOptional<z.ZodNumber>;
        recent_write_load: z.ZodOptional<z.ZodNumber>;
        peak_write_load: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    mappings: z.ZodOptional<z.ZodObject<{
        total_count: z.ZodNumber;
        total_estimated_overhead: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_estimated_overhead_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    merges: z.ZodOptional<z.ZodObject<{
        current: z.ZodNumber;
        current_docs: z.ZodNumber;
        current_size: z.ZodOptional<z.ZodString>;
        current_size_in_bytes: z.ZodNumber;
        total: z.ZodNumber;
        total_auto_throttle: z.ZodOptional<z.ZodString>;
        total_auto_throttle_in_bytes: z.ZodNumber;
        total_docs: z.ZodNumber;
        total_size: z.ZodOptional<z.ZodString>;
        total_size_in_bytes: z.ZodNumber;
        total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_stopped_time_in_millis: z.ZodAny;
        total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_throttled_time_in_millis: z.ZodAny;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    shard_path: z.ZodOptional<z.ZodObject<{
        data_path: z.ZodString;
        is_custom_data_path: z.ZodBoolean;
        state_path: z.ZodString;
    }, z.core.$strip>>;
    query_cache: z.ZodOptional<z.ZodObject<{
        cache_count: z.ZodNumber;
        cache_size: z.ZodNumber;
        evictions: z.ZodNumber;
        hit_count: z.ZodNumber;
        memory_size_in_bytes: z.ZodNumber;
        miss_count: z.ZodNumber;
        total_count: z.ZodNumber;
    }, z.core.$strip>>;
    recovery: z.ZodOptional<z.ZodObject<{
        current_as_source: z.ZodNumber;
        current_as_target: z.ZodNumber;
        throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        throttle_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    refresh: z.ZodOptional<z.ZodObject<{
        external_total: z.ZodNumber;
        external_total_time_in_millis: z.ZodAny;
        listeners: z.ZodNumber;
        total: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    request_cache: z.ZodOptional<z.ZodObject<{
        evictions: z.ZodNumber;
        hit_count: z.ZodNumber;
        memory_size: z.ZodOptional<z.ZodString>;
        memory_size_in_bytes: z.ZodNumber;
        miss_count: z.ZodNumber;
    }, z.core.$strip>>;
    retention_leases: z.ZodOptional<z.ZodObject<{
        primary_term: z.ZodNumber;
        version: z.ZodNumber;
        leases: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            retaining_seq_no: z.ZodNumber;
            timestamp: z.ZodNumber;
            source: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    routing: z.ZodOptional<z.ZodObject<{
        node: z.ZodString;
        primary: z.ZodBoolean;
        relocating_node: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        state: z.ZodEnum<{
            UNASSIGNED: "UNASSIGNED";
            INITIALIZING: "INITIALIZING";
            STARTED: "STARTED";
            RELOCATING: "RELOCATING";
        }>;
    }, z.core.$strip>>;
    search: z.ZodOptional<z.ZodObject<{
        fetch_current: z.ZodNumber;
        fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        fetch_time_in_millis: z.ZodAny;
        fetch_total: z.ZodNumber;
        open_contexts: z.ZodOptional<z.ZodNumber>;
        query_current: z.ZodNumber;
        query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        query_time_in_millis: z.ZodAny;
        query_total: z.ZodNumber;
        scroll_current: z.ZodNumber;
        scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        scroll_time_in_millis: z.ZodAny;
        scroll_total: z.ZodNumber;
        suggest_current: z.ZodNumber;
        suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        suggest_time_in_millis: z.ZodAny;
        suggest_total: z.ZodNumber;
        recent_search_load: z.ZodOptional<z.ZodNumber>;
        groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
    }, z.core.$strip>>;
    segments: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    seq_no: z.ZodOptional<z.ZodObject<{
        global_checkpoint: z.ZodNumber;
        local_checkpoint: z.ZodNumber;
        max_seq_no: z.ZodNumber;
    }, z.core.$strip>>;
    store: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        size_in_bytes: z.ZodNumber;
        reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reserved_in_bytes: z.ZodNumber;
        total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    translog: z.ZodOptional<z.ZodObject<{
        earliest_last_modified_age: z.ZodNumber;
        operations: z.ZodNumber;
        size: z.ZodOptional<z.ZodString>;
        size_in_bytes: z.ZodNumber;
        uncommitted_operations: z.ZodNumber;
        uncommitted_size: z.ZodOptional<z.ZodString>;
        uncommitted_size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    warmer: z.ZodOptional<z.ZodObject<{
        current: z.ZodNumber;
        total: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    bulk: z.ZodOptional<z.ZodObject<{
        total_operations: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
        total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_size_in_bytes: z.ZodNumber;
        avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        avg_time_in_millis: z.ZodAny;
        avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        avg_size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    shard_stats: z.ZodOptional<z.ZodObject<{
        total_count: z.ZodNumber;
    }, z.core.$strip>>;
    indices: z.ZodOptional<z.ZodObject<{
        primaries: z.ZodOptional<z.ZodObject<{
            completion: z.ZodOptional<z.ZodObject<{
                size_in_bytes: z.ZodNumber;
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            docs: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                deleted: z.ZodOptional<z.ZodNumber>;
                total_size_in_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>>;
            fielddata: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            flush: z.ZodOptional<z.ZodObject<{
                periodic: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            get: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                exists_time_in_millis: z.ZodAny;
                exists_total: z.ZodNumber;
                missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                missing_time_in_millis: z.ZodAny;
                missing_total: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            indexing: z.ZodOptional<z.ZodObject<{
                index_current: z.ZodNumber;
                delete_current: z.ZodNumber;
                delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                delete_time_in_millis: z.ZodAny;
                delete_total: z.ZodNumber;
                is_throttled: z.ZodBoolean;
                noop_update_total: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
                index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                index_time_in_millis: z.ZodAny;
                index_total: z.ZodNumber;
                index_failed: z.ZodNumber;
                types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
                write_load: z.ZodOptional<z.ZodNumber>;
                recent_write_load: z.ZodOptional<z.ZodNumber>;
                peak_write_load: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            merges: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                current_docs: z.ZodNumber;
                current_size: z.ZodOptional<z.ZodString>;
                current_size_in_bytes: z.ZodNumber;
                total: z.ZodNumber;
                total_auto_throttle: z.ZodOptional<z.ZodString>;
                total_auto_throttle_in_bytes: z.ZodNumber;
                total_docs: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodString>;
                total_size_in_bytes: z.ZodNumber;
                total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_stopped_time_in_millis: z.ZodAny;
                total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_throttled_time_in_millis: z.ZodAny;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            query_cache: z.ZodOptional<z.ZodObject<{
                cache_count: z.ZodNumber;
                cache_size: z.ZodNumber;
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
                current_as_source: z.ZodNumber;
                current_as_target: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            refresh: z.ZodOptional<z.ZodObject<{
                external_total: z.ZodNumber;
                external_total_time_in_millis: z.ZodAny;
                listeners: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            request_cache: z.ZodOptional<z.ZodObject<{
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodString>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                fetch_current: z.ZodNumber;
                fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fetch_time_in_millis: z.ZodAny;
                fetch_total: z.ZodNumber;
                open_contexts: z.ZodOptional<z.ZodNumber>;
                query_current: z.ZodNumber;
                query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                query_time_in_millis: z.ZodAny;
                query_total: z.ZodNumber;
                scroll_current: z.ZodNumber;
                scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                scroll_time_in_millis: z.ZodAny;
                scroll_total: z.ZodNumber;
                suggest_current: z.ZodNumber;
                suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                suggest_time_in_millis: z.ZodAny;
                suggest_total: z.ZodNumber;
                recent_search_load: z.ZodOptional<z.ZodNumber>;
                groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
            }, z.core.$strip>>;
            segments: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            store: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
                reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reserved_in_bytes: z.ZodNumber;
                total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            translog: z.ZodOptional<z.ZodObject<{
                earliest_last_modified_age: z.ZodNumber;
                operations: z.ZodNumber;
                size: z.ZodOptional<z.ZodString>;
                size_in_bytes: z.ZodNumber;
                uncommitted_operations: z.ZodNumber;
                uncommitted_size: z.ZodOptional<z.ZodString>;
                uncommitted_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            warmer: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            bulk: z.ZodOptional<z.ZodObject<{
                total_operations: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_size_in_bytes: z.ZodNumber;
                avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                avg_time_in_millis: z.ZodAny;
                avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                avg_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            shard_stats: z.ZodOptional<z.ZodObject<{
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<typeof IndicesStatsShardStats>>>;
        total: z.ZodOptional<z.ZodObject<{
            completion: z.ZodOptional<z.ZodObject<{
                size_in_bytes: z.ZodNumber;
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            docs: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                deleted: z.ZodOptional<z.ZodNumber>;
                total_size_in_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>>;
            fielddata: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            flush: z.ZodOptional<z.ZodObject<{
                periodic: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            get: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                exists_time_in_millis: z.ZodAny;
                exists_total: z.ZodNumber;
                missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                missing_time_in_millis: z.ZodAny;
                missing_total: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            indexing: z.ZodOptional<z.ZodObject<{
                index_current: z.ZodNumber;
                delete_current: z.ZodNumber;
                delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                delete_time_in_millis: z.ZodAny;
                delete_total: z.ZodNumber;
                is_throttled: z.ZodBoolean;
                noop_update_total: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
                index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                index_time_in_millis: z.ZodAny;
                index_total: z.ZodNumber;
                index_failed: z.ZodNumber;
                types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
                write_load: z.ZodOptional<z.ZodNumber>;
                recent_write_load: z.ZodOptional<z.ZodNumber>;
                peak_write_load: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            merges: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                current_docs: z.ZodNumber;
                current_size: z.ZodOptional<z.ZodString>;
                current_size_in_bytes: z.ZodNumber;
                total: z.ZodNumber;
                total_auto_throttle: z.ZodOptional<z.ZodString>;
                total_auto_throttle_in_bytes: z.ZodNumber;
                total_docs: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodString>;
                total_size_in_bytes: z.ZodNumber;
                total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_stopped_time_in_millis: z.ZodAny;
                total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_throttled_time_in_millis: z.ZodAny;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            query_cache: z.ZodOptional<z.ZodObject<{
                cache_count: z.ZodNumber;
                cache_size: z.ZodNumber;
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
                current_as_source: z.ZodNumber;
                current_as_target: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            refresh: z.ZodOptional<z.ZodObject<{
                external_total: z.ZodNumber;
                external_total_time_in_millis: z.ZodAny;
                listeners: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            request_cache: z.ZodOptional<z.ZodObject<{
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodString>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                fetch_current: z.ZodNumber;
                fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fetch_time_in_millis: z.ZodAny;
                fetch_total: z.ZodNumber;
                open_contexts: z.ZodOptional<z.ZodNumber>;
                query_current: z.ZodNumber;
                query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                query_time_in_millis: z.ZodAny;
                query_total: z.ZodNumber;
                scroll_current: z.ZodNumber;
                scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                scroll_time_in_millis: z.ZodAny;
                scroll_total: z.ZodNumber;
                suggest_current: z.ZodNumber;
                suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                suggest_time_in_millis: z.ZodAny;
                suggest_total: z.ZodNumber;
                recent_search_load: z.ZodOptional<z.ZodNumber>;
                groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
            }, z.core.$strip>>;
            segments: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            store: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
                reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reserved_in_bytes: z.ZodNumber;
                total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            translog: z.ZodOptional<z.ZodObject<{
                earliest_last_modified_age: z.ZodNumber;
                operations: z.ZodNumber;
                size: z.ZodOptional<z.ZodString>;
                size_in_bytes: z.ZodNumber;
                uncommitted_operations: z.ZodNumber;
                uncommitted_size: z.ZodOptional<z.ZodString>;
                uncommitted_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            warmer: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            bulk: z.ZodOptional<z.ZodObject<{
                total_operations: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_size_in_bytes: z.ZodNumber;
                avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                avg_time_in_millis: z.ZodAny;
                avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                avg_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            shard_stats: z.ZodOptional<z.ZodObject<{
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        uuid: z.ZodOptional<z.ZodString>;
        health: z.ZodOptional<z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            close: "close";
            open: "open";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesStatsShardStats = z.infer<typeof IndicesStatsShardStats>;
export interface IndicesStatsIndicesStatsShape {
    primaries?: IndicesStatsIndexStatsShape | undefined;
    shards?: Record<string, IndicesStatsShardStatsShape[]> | undefined;
    total?: IndicesStatsIndexStatsShape | undefined;
    uuid?: Uuid | undefined;
    health?: HealthStatus | undefined;
    status?: IndicesStatsIndexMetadataState | undefined;
}
export declare const IndicesStatsIndicesStats: z.ZodObject<{
    primaries: z.ZodOptional<z.ZodObject<{
        completion: z.ZodOptional<z.ZodObject<{
            size_in_bytes: z.ZodNumber;
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        docs: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            deleted: z.ZodOptional<z.ZodNumber>;
            total_size_in_bytes: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>>;
        fielddata: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        flush: z.ZodOptional<z.ZodObject<{
            periodic: z.ZodNumber;
            total: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        get: z.ZodOptional<z.ZodObject<{
            current: z.ZodNumber;
            exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            exists_time_in_millis: z.ZodAny;
            exists_total: z.ZodNumber;
            missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            missing_time_in_millis: z.ZodAny;
            missing_total: z.ZodNumber;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_millis: z.ZodAny;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        indexing: z.ZodOptional<z.ZodObject<{
            index_current: z.ZodNumber;
            delete_current: z.ZodNumber;
            delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            delete_time_in_millis: z.ZodAny;
            delete_total: z.ZodNumber;
            is_throttled: z.ZodBoolean;
            noop_update_total: z.ZodNumber;
            throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            throttle_time_in_millis: z.ZodAny;
            index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            index_time_in_millis: z.ZodAny;
            index_total: z.ZodNumber;
            index_failed: z.ZodNumber;
            types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
            write_load: z.ZodOptional<z.ZodNumber>;
            recent_write_load: z.ZodOptional<z.ZodNumber>;
            peak_write_load: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        merges: z.ZodOptional<z.ZodObject<{
            current: z.ZodNumber;
            current_docs: z.ZodNumber;
            current_size: z.ZodOptional<z.ZodString>;
            current_size_in_bytes: z.ZodNumber;
            total: z.ZodNumber;
            total_auto_throttle: z.ZodOptional<z.ZodString>;
            total_auto_throttle_in_bytes: z.ZodNumber;
            total_docs: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodString>;
            total_size_in_bytes: z.ZodNumber;
            total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_stopped_time_in_millis: z.ZodAny;
            total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_throttled_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        query_cache: z.ZodOptional<z.ZodObject<{
            cache_count: z.ZodNumber;
            cache_size: z.ZodNumber;
            evictions: z.ZodNumber;
            hit_count: z.ZodNumber;
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
            miss_count: z.ZodNumber;
            total_count: z.ZodNumber;
        }, z.core.$strip>>;
        recovery: z.ZodOptional<z.ZodObject<{
            current_as_source: z.ZodNumber;
            current_as_target: z.ZodNumber;
            throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            throttle_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        refresh: z.ZodOptional<z.ZodObject<{
            external_total: z.ZodNumber;
            external_total_time_in_millis: z.ZodAny;
            listeners: z.ZodNumber;
            total: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        request_cache: z.ZodOptional<z.ZodObject<{
            evictions: z.ZodNumber;
            hit_count: z.ZodNumber;
            memory_size: z.ZodOptional<z.ZodString>;
            memory_size_in_bytes: z.ZodNumber;
            miss_count: z.ZodNumber;
        }, z.core.$strip>>;
        search: z.ZodOptional<z.ZodObject<{
            fetch_current: z.ZodNumber;
            fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            fetch_time_in_millis: z.ZodAny;
            fetch_total: z.ZodNumber;
            open_contexts: z.ZodOptional<z.ZodNumber>;
            query_current: z.ZodNumber;
            query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            query_time_in_millis: z.ZodAny;
            query_total: z.ZodNumber;
            scroll_current: z.ZodNumber;
            scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            scroll_time_in_millis: z.ZodAny;
            scroll_total: z.ZodNumber;
            suggest_current: z.ZodNumber;
            suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            suggest_time_in_millis: z.ZodAny;
            suggest_total: z.ZodNumber;
            recent_search_load: z.ZodOptional<z.ZodNumber>;
            groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
        }, z.core.$strip>>;
        segments: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        store: z.ZodOptional<z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
            reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reserved_in_bytes: z.ZodNumber;
            total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        translog: z.ZodOptional<z.ZodObject<{
            earliest_last_modified_age: z.ZodNumber;
            operations: z.ZodNumber;
            size: z.ZodOptional<z.ZodString>;
            size_in_bytes: z.ZodNumber;
            uncommitted_operations: z.ZodNumber;
            uncommitted_size: z.ZodOptional<z.ZodString>;
            uncommitted_size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>;
        warmer: z.ZodOptional<z.ZodObject<{
            current: z.ZodNumber;
            total: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        bulk: z.ZodOptional<z.ZodObject<{
            total_operations: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_size_in_bytes: z.ZodNumber;
            avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            avg_time_in_millis: z.ZodAny;
            avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            avg_size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>;
        shard_stats: z.ZodOptional<z.ZodObject<{
            total_count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<typeof IndicesStatsShardStats>>>;
    total: z.ZodOptional<z.ZodObject<{
        completion: z.ZodOptional<z.ZodObject<{
            size_in_bytes: z.ZodNumber;
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        docs: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            deleted: z.ZodOptional<z.ZodNumber>;
            total_size_in_bytes: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>>;
        fielddata: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        flush: z.ZodOptional<z.ZodObject<{
            periodic: z.ZodNumber;
            total: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        get: z.ZodOptional<z.ZodObject<{
            current: z.ZodNumber;
            exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            exists_time_in_millis: z.ZodAny;
            exists_total: z.ZodNumber;
            missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            missing_time_in_millis: z.ZodAny;
            missing_total: z.ZodNumber;
            time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_in_millis: z.ZodAny;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        indexing: z.ZodOptional<z.ZodObject<{
            index_current: z.ZodNumber;
            delete_current: z.ZodNumber;
            delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            delete_time_in_millis: z.ZodAny;
            delete_total: z.ZodNumber;
            is_throttled: z.ZodBoolean;
            noop_update_total: z.ZodNumber;
            throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            throttle_time_in_millis: z.ZodAny;
            index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            index_time_in_millis: z.ZodAny;
            index_total: z.ZodNumber;
            index_failed: z.ZodNumber;
            types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
            write_load: z.ZodOptional<z.ZodNumber>;
            recent_write_load: z.ZodOptional<z.ZodNumber>;
            peak_write_load: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        merges: z.ZodOptional<z.ZodObject<{
            current: z.ZodNumber;
            current_docs: z.ZodNumber;
            current_size: z.ZodOptional<z.ZodString>;
            current_size_in_bytes: z.ZodNumber;
            total: z.ZodNumber;
            total_auto_throttle: z.ZodOptional<z.ZodString>;
            total_auto_throttle_in_bytes: z.ZodNumber;
            total_docs: z.ZodNumber;
            total_size: z.ZodOptional<z.ZodString>;
            total_size_in_bytes: z.ZodNumber;
            total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_stopped_time_in_millis: z.ZodAny;
            total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_throttled_time_in_millis: z.ZodAny;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        query_cache: z.ZodOptional<z.ZodObject<{
            cache_count: z.ZodNumber;
            cache_size: z.ZodNumber;
            evictions: z.ZodNumber;
            hit_count: z.ZodNumber;
            memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_size_in_bytes: z.ZodNumber;
            miss_count: z.ZodNumber;
            total_count: z.ZodNumber;
        }, z.core.$strip>>;
        recovery: z.ZodOptional<z.ZodObject<{
            current_as_source: z.ZodNumber;
            current_as_target: z.ZodNumber;
            throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            throttle_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        refresh: z.ZodOptional<z.ZodObject<{
            external_total: z.ZodNumber;
            external_total_time_in_millis: z.ZodAny;
            listeners: z.ZodNumber;
            total: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        request_cache: z.ZodOptional<z.ZodObject<{
            evictions: z.ZodNumber;
            hit_count: z.ZodNumber;
            memory_size: z.ZodOptional<z.ZodString>;
            memory_size_in_bytes: z.ZodNumber;
            miss_count: z.ZodNumber;
        }, z.core.$strip>>;
        search: z.ZodOptional<z.ZodObject<{
            fetch_current: z.ZodNumber;
            fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            fetch_time_in_millis: z.ZodAny;
            fetch_total: z.ZodNumber;
            open_contexts: z.ZodOptional<z.ZodNumber>;
            query_current: z.ZodNumber;
            query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            query_time_in_millis: z.ZodAny;
            query_total: z.ZodNumber;
            scroll_current: z.ZodNumber;
            scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            scroll_time_in_millis: z.ZodAny;
            scroll_total: z.ZodNumber;
            suggest_current: z.ZodNumber;
            suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            suggest_time_in_millis: z.ZodAny;
            suggest_total: z.ZodNumber;
            recent_search_load: z.ZodOptional<z.ZodNumber>;
            groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
        }, z.core.$strip>>;
        segments: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        store: z.ZodOptional<z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
            reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            reserved_in_bytes: z.ZodNumber;
            total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        translog: z.ZodOptional<z.ZodObject<{
            earliest_last_modified_age: z.ZodNumber;
            operations: z.ZodNumber;
            size: z.ZodOptional<z.ZodString>;
            size_in_bytes: z.ZodNumber;
            uncommitted_operations: z.ZodNumber;
            uncommitted_size: z.ZodOptional<z.ZodString>;
            uncommitted_size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>;
        warmer: z.ZodOptional<z.ZodObject<{
            current: z.ZodNumber;
            total: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        bulk: z.ZodOptional<z.ZodObject<{
            total_operations: z.ZodNumber;
            total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_time_in_millis: z.ZodAny;
            total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_size_in_bytes: z.ZodNumber;
            avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            avg_time_in_millis: z.ZodAny;
            avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            avg_size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>;
        shard_stats: z.ZodOptional<z.ZodObject<{
            total_count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    uuid: z.ZodOptional<z.ZodString>;
    health: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        GREEN: "GREEN";
        yellow: "yellow";
        YELLOW: "YELLOW";
        red: "red";
        RED: "RED";
        unavailable: "unavailable";
    }>>;
    status: z.ZodOptional<z.ZodEnum<{
        close: "close";
        open: "open";
    }>>;
}, z.core.$strip>;
export type IndicesStatsIndicesStats = z.infer<typeof IndicesStatsIndicesStats>;
export interface IndicesStatsIndexStatsShape {
    completion?: CompletionStats | undefined;
    docs?: DocStats | undefined;
    fielddata?: FielddataStats | undefined;
    flush?: FlushStats | undefined;
    get?: GetStats | undefined;
    indexing?: IndexingStatsShape | undefined;
    indices?: IndicesStatsIndicesStatsShape | undefined;
    merges?: MergesStats | undefined;
    query_cache?: QueryCacheStats | undefined;
    recovery?: RecoveryStats | undefined;
    refresh?: RefreshStats | undefined;
    request_cache?: RequestCacheStats | undefined;
    search?: SearchStatsShape | undefined;
    segments?: SegmentsStats | undefined;
    store?: StoreStats | undefined;
    translog?: TranslogStats | undefined;
    warmer?: WarmerStats | undefined;
    bulk?: BulkStats | undefined;
    shard_stats?: IndicesStatsShardsTotalStats | undefined;
}
export declare const IndicesStatsIndexStats: z.ZodObject<{
    completion: z.ZodOptional<z.ZodObject<{
        size_in_bytes: z.ZodNumber;
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            size_in_bytes: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    docs: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        deleted: z.ZodOptional<z.ZodNumber>;
        total_size_in_bytes: z.ZodNumber;
        total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>>;
    fielddata: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    flush: z.ZodOptional<z.ZodObject<{
        periodic: z.ZodNumber;
        total: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    get: z.ZodOptional<z.ZodObject<{
        current: z.ZodNumber;
        exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        exists_time_in_millis: z.ZodAny;
        exists_total: z.ZodNumber;
        missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        missing_time_in_millis: z.ZodAny;
        missing_total: z.ZodNumber;
        time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_in_millis: z.ZodAny;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    indexing: z.ZodOptional<z.ZodObject<{
        index_current: z.ZodNumber;
        delete_current: z.ZodNumber;
        delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        delete_time_in_millis: z.ZodAny;
        delete_total: z.ZodNumber;
        is_throttled: z.ZodBoolean;
        noop_update_total: z.ZodNumber;
        throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        throttle_time_in_millis: z.ZodAny;
        index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        index_time_in_millis: z.ZodAny;
        index_total: z.ZodNumber;
        index_failed: z.ZodNumber;
        types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
        write_load: z.ZodOptional<z.ZodNumber>;
        recent_write_load: z.ZodOptional<z.ZodNumber>;
        peak_write_load: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    indices: z.ZodOptional<z.ZodObject<{
        primaries: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<typeof IndicesStatsShardStats>>>;
        total: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
        uuid: z.ZodOptional<z.ZodString>;
        health: z.ZodOptional<z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            close: "close";
            open: "open";
        }>>;
    }, z.core.$strip>>;
    merges: z.ZodOptional<z.ZodObject<{
        current: z.ZodNumber;
        current_docs: z.ZodNumber;
        current_size: z.ZodOptional<z.ZodString>;
        current_size_in_bytes: z.ZodNumber;
        total: z.ZodNumber;
        total_auto_throttle: z.ZodOptional<z.ZodString>;
        total_auto_throttle_in_bytes: z.ZodNumber;
        total_docs: z.ZodNumber;
        total_size: z.ZodOptional<z.ZodString>;
        total_size_in_bytes: z.ZodNumber;
        total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_stopped_time_in_millis: z.ZodAny;
        total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_throttled_time_in_millis: z.ZodAny;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    query_cache: z.ZodOptional<z.ZodObject<{
        cache_count: z.ZodNumber;
        cache_size: z.ZodNumber;
        evictions: z.ZodNumber;
        hit_count: z.ZodNumber;
        memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_size_in_bytes: z.ZodNumber;
        miss_count: z.ZodNumber;
        total_count: z.ZodNumber;
    }, z.core.$strip>>;
    recovery: z.ZodOptional<z.ZodObject<{
        current_as_source: z.ZodNumber;
        current_as_target: z.ZodNumber;
        throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        throttle_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    refresh: z.ZodOptional<z.ZodObject<{
        external_total: z.ZodNumber;
        external_total_time_in_millis: z.ZodAny;
        listeners: z.ZodNumber;
        total: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    request_cache: z.ZodOptional<z.ZodObject<{
        evictions: z.ZodNumber;
        hit_count: z.ZodNumber;
        memory_size: z.ZodOptional<z.ZodString>;
        memory_size_in_bytes: z.ZodNumber;
        miss_count: z.ZodNumber;
    }, z.core.$strip>>;
    search: z.ZodOptional<z.ZodObject<{
        fetch_current: z.ZodNumber;
        fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        fetch_time_in_millis: z.ZodAny;
        fetch_total: z.ZodNumber;
        open_contexts: z.ZodOptional<z.ZodNumber>;
        query_current: z.ZodNumber;
        query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        query_time_in_millis: z.ZodAny;
        query_total: z.ZodNumber;
        scroll_current: z.ZodNumber;
        scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        scroll_time_in_millis: z.ZodAny;
        scroll_total: z.ZodNumber;
        suggest_current: z.ZodNumber;
        suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        suggest_time_in_millis: z.ZodAny;
        suggest_total: z.ZodNumber;
        recent_search_load: z.ZodOptional<z.ZodNumber>;
        groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
    }, z.core.$strip>>;
    segments: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    store: z.ZodOptional<z.ZodObject<{
        size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        size_in_bytes: z.ZodNumber;
        reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        reserved_in_bytes: z.ZodNumber;
        total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    translog: z.ZodOptional<z.ZodObject<{
        earliest_last_modified_age: z.ZodNumber;
        operations: z.ZodNumber;
        size: z.ZodOptional<z.ZodString>;
        size_in_bytes: z.ZodNumber;
        uncommitted_operations: z.ZodNumber;
        uncommitted_size: z.ZodOptional<z.ZodString>;
        uncommitted_size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    warmer: z.ZodOptional<z.ZodObject<{
        current: z.ZodNumber;
        total: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    bulk: z.ZodOptional<z.ZodObject<{
        total_operations: z.ZodNumber;
        total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_time_in_millis: z.ZodAny;
        total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_size_in_bytes: z.ZodNumber;
        avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        avg_time_in_millis: z.ZodAny;
        avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        avg_size_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    shard_stats: z.ZodOptional<z.ZodObject<{
        total_count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesStatsIndexStats = z.infer<typeof IndicesStatsIndexStats>;
/**
 * Get index statistics.
 *
 * For data streams, the API retrieves statistics for the stream's backing indices.
 *
 * By default, the returned statistics are index-level with `primaries` and `total` aggregations.
 * `primaries` are the values for only the primary shards.
 * `total` are the accumulated values for both primary and replica shards.
 *
 * To get shard-level statistics, set the `level` parameter to `shards`.
 *
 * NOTE: When moving to another node, the shard-level statistics for a shard are cleared.
 * Although the shard is no longer part of the node, that node retains any node-level statistics to which the shard contributed.
 */
export declare const IndicesStatsRequest: z.ZodObject<{
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        get: "get";
        bulk: "bulk";
        fielddata: "fielddata";
        recovery: "recovery";
        segments: "segments";
        search: "search";
        flush: "flush";
        refresh: "refresh";
        completion: "completion";
        request_cache: "request_cache";
        docs: "docs";
        store: "store";
        merge: "merge";
        translog: "translog";
        mappings: "mappings";
        _all: "_all";
        indexing: "indexing";
        query_cache: "query_cache";
        warmer: "warmer";
        shard_stats: "shard_stats";
        dense_vector: "dense_vector";
        sparse_vector: "sparse_vector";
    }>, z.ZodArray<z.ZodEnum<{
        get: "get";
        bulk: "bulk";
        fielddata: "fielddata";
        recovery: "recovery";
        segments: "segments";
        search: "search";
        flush: "flush";
        refresh: "refresh";
        completion: "completion";
        request_cache: "request_cache";
        docs: "docs";
        store: "store";
        merge: "merge";
        translog: "translog";
        mappings: "mappings";
        _all: "_all";
        indexing: "indexing";
        query_cache: "query_cache";
        warmer: "warmer";
        shard_stats: "shard_stats";
        dense_vector: "dense_vector";
        sparse_vector: "sparse_vector";
    }>>]>>;
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    completion_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
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
    fielddata_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    forbid_closed_indices: z.ZodOptional<z.ZodBoolean>;
    groups: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include_segment_file_sizes: z.ZodOptional<z.ZodBoolean>;
    include_unloaded_segments: z.ZodOptional<z.ZodBoolean>;
    level: z.ZodOptional<z.ZodEnum<{
        indices: "indices";
        shards: "shards";
        cluster: "cluster";
    }>>;
}, z.core.$strip>;
export type IndicesStatsRequest = z.infer<typeof IndicesStatsRequest>;
export declare const IndicesStatsResponse: z.ZodObject<{
    indices: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLazy<z.ZodObject<{
        primaries: z.ZodOptional<z.ZodObject<{
            completion: z.ZodOptional<z.ZodObject<{
                size_in_bytes: z.ZodNumber;
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            docs: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                deleted: z.ZodOptional<z.ZodNumber>;
                total_size_in_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>>;
            fielddata: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            flush: z.ZodOptional<z.ZodObject<{
                periodic: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            get: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                exists_time_in_millis: z.ZodAny;
                exists_total: z.ZodNumber;
                missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                missing_time_in_millis: z.ZodAny;
                missing_total: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            indexing: z.ZodOptional<z.ZodObject<{
                index_current: z.ZodNumber;
                delete_current: z.ZodNumber;
                delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                delete_time_in_millis: z.ZodAny;
                delete_total: z.ZodNumber;
                is_throttled: z.ZodBoolean;
                noop_update_total: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
                index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                index_time_in_millis: z.ZodAny;
                index_total: z.ZodNumber;
                index_failed: z.ZodNumber;
                types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
                write_load: z.ZodOptional<z.ZodNumber>;
                recent_write_load: z.ZodOptional<z.ZodNumber>;
                peak_write_load: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            merges: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                current_docs: z.ZodNumber;
                current_size: z.ZodOptional<z.ZodString>;
                current_size_in_bytes: z.ZodNumber;
                total: z.ZodNumber;
                total_auto_throttle: z.ZodOptional<z.ZodString>;
                total_auto_throttle_in_bytes: z.ZodNumber;
                total_docs: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodString>;
                total_size_in_bytes: z.ZodNumber;
                total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_stopped_time_in_millis: z.ZodAny;
                total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_throttled_time_in_millis: z.ZodAny;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            query_cache: z.ZodOptional<z.ZodObject<{
                cache_count: z.ZodNumber;
                cache_size: z.ZodNumber;
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
                current_as_source: z.ZodNumber;
                current_as_target: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            refresh: z.ZodOptional<z.ZodObject<{
                external_total: z.ZodNumber;
                external_total_time_in_millis: z.ZodAny;
                listeners: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            request_cache: z.ZodOptional<z.ZodObject<{
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodString>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                fetch_current: z.ZodNumber;
                fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fetch_time_in_millis: z.ZodAny;
                fetch_total: z.ZodNumber;
                open_contexts: z.ZodOptional<z.ZodNumber>;
                query_current: z.ZodNumber;
                query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                query_time_in_millis: z.ZodAny;
                query_total: z.ZodNumber;
                scroll_current: z.ZodNumber;
                scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                scroll_time_in_millis: z.ZodAny;
                scroll_total: z.ZodNumber;
                suggest_current: z.ZodNumber;
                suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                suggest_time_in_millis: z.ZodAny;
                suggest_total: z.ZodNumber;
                recent_search_load: z.ZodOptional<z.ZodNumber>;
                groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
            }, z.core.$strip>>;
            segments: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            store: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
                reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reserved_in_bytes: z.ZodNumber;
                total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            translog: z.ZodOptional<z.ZodObject<{
                earliest_last_modified_age: z.ZodNumber;
                operations: z.ZodNumber;
                size: z.ZodOptional<z.ZodString>;
                size_in_bytes: z.ZodNumber;
                uncommitted_operations: z.ZodNumber;
                uncommitted_size: z.ZodOptional<z.ZodString>;
                uncommitted_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            warmer: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            bulk: z.ZodOptional<z.ZodObject<{
                total_operations: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_size_in_bytes: z.ZodNumber;
                avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                avg_time_in_millis: z.ZodAny;
                avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                avg_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            shard_stats: z.ZodOptional<z.ZodObject<{
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<typeof IndicesStatsShardStats>>>;
        total: z.ZodOptional<z.ZodObject<{
            completion: z.ZodOptional<z.ZodObject<{
                size_in_bytes: z.ZodNumber;
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            docs: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                deleted: z.ZodOptional<z.ZodNumber>;
                total_size_in_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>>;
            fielddata: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            flush: z.ZodOptional<z.ZodObject<{
                periodic: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            get: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                exists_time_in_millis: z.ZodAny;
                exists_total: z.ZodNumber;
                missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                missing_time_in_millis: z.ZodAny;
                missing_total: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            indexing: z.ZodOptional<z.ZodObject<{
                index_current: z.ZodNumber;
                delete_current: z.ZodNumber;
                delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                delete_time_in_millis: z.ZodAny;
                delete_total: z.ZodNumber;
                is_throttled: z.ZodBoolean;
                noop_update_total: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
                index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                index_time_in_millis: z.ZodAny;
                index_total: z.ZodNumber;
                index_failed: z.ZodNumber;
                types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
                write_load: z.ZodOptional<z.ZodNumber>;
                recent_write_load: z.ZodOptional<z.ZodNumber>;
                peak_write_load: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            merges: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                current_docs: z.ZodNumber;
                current_size: z.ZodOptional<z.ZodString>;
                current_size_in_bytes: z.ZodNumber;
                total: z.ZodNumber;
                total_auto_throttle: z.ZodOptional<z.ZodString>;
                total_auto_throttle_in_bytes: z.ZodNumber;
                total_docs: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodString>;
                total_size_in_bytes: z.ZodNumber;
                total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_stopped_time_in_millis: z.ZodAny;
                total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_throttled_time_in_millis: z.ZodAny;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            query_cache: z.ZodOptional<z.ZodObject<{
                cache_count: z.ZodNumber;
                cache_size: z.ZodNumber;
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
                current_as_source: z.ZodNumber;
                current_as_target: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            refresh: z.ZodOptional<z.ZodObject<{
                external_total: z.ZodNumber;
                external_total_time_in_millis: z.ZodAny;
                listeners: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            request_cache: z.ZodOptional<z.ZodObject<{
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodString>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                fetch_current: z.ZodNumber;
                fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fetch_time_in_millis: z.ZodAny;
                fetch_total: z.ZodNumber;
                open_contexts: z.ZodOptional<z.ZodNumber>;
                query_current: z.ZodNumber;
                query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                query_time_in_millis: z.ZodAny;
                query_total: z.ZodNumber;
                scroll_current: z.ZodNumber;
                scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                scroll_time_in_millis: z.ZodAny;
                scroll_total: z.ZodNumber;
                suggest_current: z.ZodNumber;
                suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                suggest_time_in_millis: z.ZodAny;
                suggest_total: z.ZodNumber;
                recent_search_load: z.ZodOptional<z.ZodNumber>;
                groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
            }, z.core.$strip>>;
            segments: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            store: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
                reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reserved_in_bytes: z.ZodNumber;
                total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            translog: z.ZodOptional<z.ZodObject<{
                earliest_last_modified_age: z.ZodNumber;
                operations: z.ZodNumber;
                size: z.ZodOptional<z.ZodString>;
                size_in_bytes: z.ZodNumber;
                uncommitted_operations: z.ZodNumber;
                uncommitted_size: z.ZodOptional<z.ZodString>;
                uncommitted_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            warmer: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            bulk: z.ZodOptional<z.ZodObject<{
                total_operations: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_size_in_bytes: z.ZodNumber;
                avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                avg_time_in_millis: z.ZodAny;
                avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                avg_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            shard_stats: z.ZodOptional<z.ZodObject<{
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        uuid: z.ZodOptional<z.ZodString>;
        health: z.ZodOptional<z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            close: "close";
            open: "open";
        }>>;
    }, z.core.$strip>>>>;
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
    _all: z.ZodLazy<z.ZodObject<{
        primaries: z.ZodOptional<z.ZodObject<{
            completion: z.ZodOptional<z.ZodObject<{
                size_in_bytes: z.ZodNumber;
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            docs: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                deleted: z.ZodOptional<z.ZodNumber>;
                total_size_in_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>>;
            fielddata: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            flush: z.ZodOptional<z.ZodObject<{
                periodic: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            get: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                exists_time_in_millis: z.ZodAny;
                exists_total: z.ZodNumber;
                missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                missing_time_in_millis: z.ZodAny;
                missing_total: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            indexing: z.ZodOptional<z.ZodObject<{
                index_current: z.ZodNumber;
                delete_current: z.ZodNumber;
                delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                delete_time_in_millis: z.ZodAny;
                delete_total: z.ZodNumber;
                is_throttled: z.ZodBoolean;
                noop_update_total: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
                index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                index_time_in_millis: z.ZodAny;
                index_total: z.ZodNumber;
                index_failed: z.ZodNumber;
                types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
                write_load: z.ZodOptional<z.ZodNumber>;
                recent_write_load: z.ZodOptional<z.ZodNumber>;
                peak_write_load: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            merges: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                current_docs: z.ZodNumber;
                current_size: z.ZodOptional<z.ZodString>;
                current_size_in_bytes: z.ZodNumber;
                total: z.ZodNumber;
                total_auto_throttle: z.ZodOptional<z.ZodString>;
                total_auto_throttle_in_bytes: z.ZodNumber;
                total_docs: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodString>;
                total_size_in_bytes: z.ZodNumber;
                total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_stopped_time_in_millis: z.ZodAny;
                total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_throttled_time_in_millis: z.ZodAny;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            query_cache: z.ZodOptional<z.ZodObject<{
                cache_count: z.ZodNumber;
                cache_size: z.ZodNumber;
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
                current_as_source: z.ZodNumber;
                current_as_target: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            refresh: z.ZodOptional<z.ZodObject<{
                external_total: z.ZodNumber;
                external_total_time_in_millis: z.ZodAny;
                listeners: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            request_cache: z.ZodOptional<z.ZodObject<{
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodString>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                fetch_current: z.ZodNumber;
                fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fetch_time_in_millis: z.ZodAny;
                fetch_total: z.ZodNumber;
                open_contexts: z.ZodOptional<z.ZodNumber>;
                query_current: z.ZodNumber;
                query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                query_time_in_millis: z.ZodAny;
                query_total: z.ZodNumber;
                scroll_current: z.ZodNumber;
                scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                scroll_time_in_millis: z.ZodAny;
                scroll_total: z.ZodNumber;
                suggest_current: z.ZodNumber;
                suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                suggest_time_in_millis: z.ZodAny;
                suggest_total: z.ZodNumber;
                recent_search_load: z.ZodOptional<z.ZodNumber>;
                groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
            }, z.core.$strip>>;
            segments: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            store: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
                reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reserved_in_bytes: z.ZodNumber;
                total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            translog: z.ZodOptional<z.ZodObject<{
                earliest_last_modified_age: z.ZodNumber;
                operations: z.ZodNumber;
                size: z.ZodOptional<z.ZodString>;
                size_in_bytes: z.ZodNumber;
                uncommitted_operations: z.ZodNumber;
                uncommitted_size: z.ZodOptional<z.ZodString>;
                uncommitted_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            warmer: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            bulk: z.ZodOptional<z.ZodObject<{
                total_operations: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_size_in_bytes: z.ZodNumber;
                avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                avg_time_in_millis: z.ZodAny;
                avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                avg_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            shard_stats: z.ZodOptional<z.ZodObject<{
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        shards: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<typeof IndicesStatsShardStats>>>;
        total: z.ZodOptional<z.ZodObject<{
            completion: z.ZodOptional<z.ZodObject<{
                size_in_bytes: z.ZodNumber;
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    size_in_bytes: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            docs: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                deleted: z.ZodOptional<z.ZodNumber>;
                total_size_in_bytes: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>>;
            fielddata: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            flush: z.ZodOptional<z.ZodObject<{
                periodic: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            get: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                exists_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                exists_time_in_millis: z.ZodAny;
                exists_total: z.ZodNumber;
                missing_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                missing_time_in_millis: z.ZodAny;
                missing_total: z.ZodNumber;
                time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_in_millis: z.ZodAny;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            indexing: z.ZodOptional<z.ZodObject<{
                index_current: z.ZodNumber;
                delete_current: z.ZodNumber;
                delete_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                delete_time_in_millis: z.ZodAny;
                delete_total: z.ZodNumber;
                is_throttled: z.ZodBoolean;
                noop_update_total: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
                index_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                index_time_in_millis: z.ZodAny;
                index_total: z.ZodNumber;
                index_failed: z.ZodNumber;
                types: z.ZodOptional<z.ZodRecord<z.ZodString, typeof IndexingStats>>;
                write_load: z.ZodOptional<z.ZodNumber>;
                recent_write_load: z.ZodOptional<z.ZodNumber>;
                peak_write_load: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            indices: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$strip>>;
            merges: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                current_docs: z.ZodNumber;
                current_size: z.ZodOptional<z.ZodString>;
                current_size_in_bytes: z.ZodNumber;
                total: z.ZodNumber;
                total_auto_throttle: z.ZodOptional<z.ZodString>;
                total_auto_throttle_in_bytes: z.ZodNumber;
                total_docs: z.ZodNumber;
                total_size: z.ZodOptional<z.ZodString>;
                total_size_in_bytes: z.ZodNumber;
                total_stopped_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_stopped_time_in_millis: z.ZodAny;
                total_throttled_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_throttled_time_in_millis: z.ZodAny;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            query_cache: z.ZodOptional<z.ZodObject<{
                cache_count: z.ZodNumber;
                cache_size: z.ZodNumber;
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
            recovery: z.ZodOptional<z.ZodObject<{
                current_as_source: z.ZodNumber;
                current_as_target: z.ZodNumber;
                throttle_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                throttle_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            refresh: z.ZodOptional<z.ZodObject<{
                external_total: z.ZodNumber;
                external_total_time_in_millis: z.ZodAny;
                listeners: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            request_cache: z.ZodOptional<z.ZodObject<{
                evictions: z.ZodNumber;
                hit_count: z.ZodNumber;
                memory_size: z.ZodOptional<z.ZodString>;
                memory_size_in_bytes: z.ZodNumber;
                miss_count: z.ZodNumber;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                fetch_current: z.ZodNumber;
                fetch_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fetch_time_in_millis: z.ZodAny;
                fetch_total: z.ZodNumber;
                open_contexts: z.ZodOptional<z.ZodNumber>;
                query_current: z.ZodNumber;
                query_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                query_time_in_millis: z.ZodAny;
                query_total: z.ZodNumber;
                scroll_current: z.ZodNumber;
                scroll_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                scroll_time_in_millis: z.ZodAny;
                scroll_total: z.ZodNumber;
                suggest_current: z.ZodNumber;
                suggest_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                suggest_time_in_millis: z.ZodAny;
                suggest_total: z.ZodNumber;
                recent_search_load: z.ZodOptional<z.ZodNumber>;
                groups: z.ZodOptional<z.ZodRecord<z.ZodString, typeof SearchStats>>;
            }, z.core.$strip>>;
            segments: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            store: z.ZodOptional<z.ZodObject<{
                size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                size_in_bytes: z.ZodNumber;
                reserved: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                reserved_in_bytes: z.ZodNumber;
                total_data_set_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_data_set_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            translog: z.ZodOptional<z.ZodObject<{
                earliest_last_modified_age: z.ZodNumber;
                operations: z.ZodNumber;
                size: z.ZodOptional<z.ZodString>;
                size_in_bytes: z.ZodNumber;
                uncommitted_operations: z.ZodNumber;
                uncommitted_size: z.ZodOptional<z.ZodString>;
                uncommitted_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            warmer: z.ZodOptional<z.ZodObject<{
                current: z.ZodNumber;
                total: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
            bulk: z.ZodOptional<z.ZodObject<{
                total_operations: z.ZodNumber;
                total_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_time_in_millis: z.ZodAny;
                total_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                total_size_in_bytes: z.ZodNumber;
                avg_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                avg_time_in_millis: z.ZodAny;
                avg_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                avg_size_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            shard_stats: z.ZodOptional<z.ZodObject<{
                total_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        uuid: z.ZodOptional<z.ZodString>;
        health: z.ZodOptional<z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            GREEN: "GREEN";
            yellow: "yellow";
            YELLOW: "YELLOW";
            red: "red";
            RED: "RED";
            unavailable: "unavailable";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            close: "close";
            open: "open";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesStatsResponse = z.infer<typeof IndicesStatsResponse>;
//# sourceMappingURL=indices_stats.d.ts.map