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
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
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
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
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
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const NodeRole: z.ZodEnum<{
    master: "master";
    ingest: "ingest";
    ml: "ml";
    transform: "transform";
    data: "data";
    client: "client";
    data_hot: "data_hot";
    data_content: "data_content";
    data_warm: "data_warm";
    data_cold: "data_cold";
    data_frozen: "data_frozen";
    remote_cluster_client: "remote_cluster_client";
    voting_only: "voting_only";
    coordinating_only: "coordinating_only";
}>;
export type NodeRole = z.infer<typeof NodeRole>;
export declare const NodeRoles: z.ZodArray<z.ZodEnum<{
    master: "master";
    ingest: "ingest";
    ml: "ml";
    transform: "transform";
    data: "data";
    client: "client";
    data_hot: "data_hot";
    data_content: "data_content";
    data_warm: "data_warm";
    data_cold: "data_cold";
    data_frozen: "data_frozen";
    remote_cluster_client: "remote_cluster_client";
    voting_only: "voting_only";
    coordinating_only: "coordinating_only";
}>>;
export type NodeRoles = z.infer<typeof NodeRoles>;
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
export declare const NodeStatsLevel: z.ZodEnum<{
    indices: "indices";
    shards: "shards";
    node: "node";
}>;
export type NodeStatsLevel = z.infer<typeof NodeStatsLevel>;
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
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
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
export declare const float: z.ZodNumber;
export type float = z.infer<typeof float>;
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
export declare const NodesAdaptiveSelection: z.ZodObject<{
    avg_queue_size: z.ZodOptional<z.ZodNumber>;
    avg_response_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    avg_response_time_ns: z.ZodOptional<z.ZodNumber>;
    avg_service_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    avg_service_time_ns: z.ZodOptional<z.ZodNumber>;
    outgoing_searches: z.ZodOptional<z.ZodNumber>;
    rank: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesAdaptiveSelection = z.infer<typeof NodesAdaptiveSelection>;
export declare const NodesBreaker: z.ZodObject<{
    estimated_size: z.ZodOptional<z.ZodString>;
    estimated_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    limit_size: z.ZodOptional<z.ZodString>;
    limit_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    overhead: z.ZodOptional<z.ZodNumber>;
    tripped: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesBreaker = z.infer<typeof NodesBreaker>;
export declare const NodesCpuAcct: z.ZodObject<{
    control_group: z.ZodOptional<z.ZodString>;
    usage_nanos: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type NodesCpuAcct = z.infer<typeof NodesCpuAcct>;
export declare const NodesCgroupCpuStat: z.ZodObject<{
    number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
    number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
    time_throttled_nanos: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type NodesCgroupCpuStat = z.infer<typeof NodesCgroupCpuStat>;
export declare const NodesCgroupCpu: z.ZodObject<{
    control_group: z.ZodOptional<z.ZodString>;
    cfs_period_micros: z.ZodOptional<z.ZodNumber>;
    cfs_quota_micros: z.ZodOptional<z.ZodNumber>;
    stat: z.ZodOptional<z.ZodObject<{
        number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
        number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
        time_throttled_nanos: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesCgroupCpu = z.infer<typeof NodesCgroupCpu>;
export declare const NodesCgroupMemory: z.ZodObject<{
    control_group: z.ZodOptional<z.ZodString>;
    limit_in_bytes: z.ZodOptional<z.ZodString>;
    usage_in_bytes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesCgroupMemory = z.infer<typeof NodesCgroupMemory>;
export declare const NodesCgroup: z.ZodObject<{
    cpuacct: z.ZodOptional<z.ZodObject<{
        control_group: z.ZodOptional<z.ZodString>;
        usage_nanos: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    cpu: z.ZodOptional<z.ZodObject<{
        control_group: z.ZodOptional<z.ZodString>;
        cfs_period_micros: z.ZodOptional<z.ZodNumber>;
        cfs_quota_micros: z.ZodOptional<z.ZodNumber>;
        stat: z.ZodOptional<z.ZodObject<{
            number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
            number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
            time_throttled_nanos: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    memory: z.ZodOptional<z.ZodObject<{
        control_group: z.ZodOptional<z.ZodString>;
        limit_in_bytes: z.ZodOptional<z.ZodString>;
        usage_in_bytes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesCgroup = z.infer<typeof NodesCgroup>;
export declare const NodesClient: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    agent: z.ZodOptional<z.ZodString>;
    local_address: z.ZodOptional<z.ZodString>;
    remote_address: z.ZodOptional<z.ZodString>;
    last_uri: z.ZodOptional<z.ZodString>;
    opened_time_millis: z.ZodOptional<z.ZodNumber>;
    closed_time_millis: z.ZodOptional<z.ZodNumber>;
    last_request_time_millis: z.ZodOptional<z.ZodNumber>;
    request_count: z.ZodOptional<z.ZodNumber>;
    request_size_bytes: z.ZodOptional<z.ZodNumber>;
    x_opaque_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesClient = z.infer<typeof NodesClient>;
export declare const NodesRecording: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    cumulative_execution_count: z.ZodOptional<z.ZodNumber>;
    cumulative_execution_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    cumulative_execution_time_millis: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type NodesRecording = z.infer<typeof NodesRecording>;
export declare const NodesClusterAppliedStats: z.ZodObject<{
    recordings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        cumulative_execution_count: z.ZodOptional<z.ZodNumber>;
        cumulative_execution_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        cumulative_execution_time_millis: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesClusterAppliedStats = z.infer<typeof NodesClusterAppliedStats>;
export declare const NodesClusterStateQueue: z.ZodObject<{
    total: z.ZodOptional<z.ZodNumber>;
    pending: z.ZodOptional<z.ZodNumber>;
    committed: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesClusterStateQueue = z.infer<typeof NodesClusterStateQueue>;
export declare const NodesClusterStateUpdate: z.ZodObject<{
    count: z.ZodNumber;
    computation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    computation_time_millis: z.ZodOptional<z.ZodAny>;
    publication_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    publication_time_millis: z.ZodOptional<z.ZodAny>;
    context_construction_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    context_construction_time_millis: z.ZodOptional<z.ZodAny>;
    commit_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    commit_time_millis: z.ZodOptional<z.ZodAny>;
    completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    completion_time_millis: z.ZodOptional<z.ZodAny>;
    master_apply_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    master_apply_time_millis: z.ZodOptional<z.ZodAny>;
    notification_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    notification_time_millis: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type NodesClusterStateUpdate = z.infer<typeof NodesClusterStateUpdate>;
export declare const NodesContext: z.ZodObject<{
    context: z.ZodOptional<z.ZodString>;
    compilations: z.ZodOptional<z.ZodNumber>;
    cache_evictions: z.ZodOptional<z.ZodNumber>;
    compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesContext = z.infer<typeof NodesContext>;
export declare const NodesCpu: z.ZodObject<{
    percent: z.ZodOptional<z.ZodNumber>;
    sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    sys_in_millis: z.ZodOptional<z.ZodAny>;
    total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    total_in_millis: z.ZodOptional<z.ZodAny>;
    user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    user_in_millis: z.ZodOptional<z.ZodAny>;
    load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type NodesCpu = z.infer<typeof NodesCpu>;
export declare const NodesDataPathStats: z.ZodObject<{
    available: z.ZodOptional<z.ZodString>;
    available_in_bytes: z.ZodOptional<z.ZodNumber>;
    disk_queue: z.ZodOptional<z.ZodString>;
    disk_reads: z.ZodOptional<z.ZodNumber>;
    disk_read_size: z.ZodOptional<z.ZodString>;
    disk_read_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    disk_writes: z.ZodOptional<z.ZodNumber>;
    disk_write_size: z.ZodOptional<z.ZodString>;
    disk_write_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    free: z.ZodOptional<z.ZodString>;
    free_in_bytes: z.ZodOptional<z.ZodNumber>;
    mount: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    total: z.ZodOptional<z.ZodString>;
    total_in_bytes: z.ZodOptional<z.ZodNumber>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesDataPathStats = z.infer<typeof NodesDataPathStats>;
export declare const NodesPublishedClusterStates: z.ZodObject<{
    full_states: z.ZodOptional<z.ZodNumber>;
    incompatible_diffs: z.ZodOptional<z.ZodNumber>;
    compatible_diffs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesPublishedClusterStates = z.infer<typeof NodesPublishedClusterStates>;
export declare const NodesSerializedClusterStateDetail: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    uncompressed_size: z.ZodOptional<z.ZodString>;
    uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    compressed_size: z.ZodOptional<z.ZodString>;
    compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesSerializedClusterStateDetail = z.infer<typeof NodesSerializedClusterStateDetail>;
export declare const NodesSerializedClusterState: z.ZodObject<{
    full_states: z.ZodOptional<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        uncompressed_size: z.ZodOptional<z.ZodString>;
        uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        compressed_size: z.ZodOptional<z.ZodString>;
        compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    diffs: z.ZodOptional<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        uncompressed_size: z.ZodOptional<z.ZodString>;
        uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        compressed_size: z.ZodOptional<z.ZodString>;
        compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesSerializedClusterState = z.infer<typeof NodesSerializedClusterState>;
export declare const NodesDiscovery: z.ZodObject<{
    cluster_state_queue: z.ZodOptional<z.ZodObject<{
        total: z.ZodOptional<z.ZodNumber>;
        pending: z.ZodOptional<z.ZodNumber>;
        committed: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    published_cluster_states: z.ZodOptional<z.ZodObject<{
        full_states: z.ZodOptional<z.ZodNumber>;
        incompatible_diffs: z.ZodOptional<z.ZodNumber>;
        compatible_diffs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    cluster_state_update: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        computation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        computation_time_millis: z.ZodOptional<z.ZodAny>;
        publication_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        publication_time_millis: z.ZodOptional<z.ZodAny>;
        context_construction_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        context_construction_time_millis: z.ZodOptional<z.ZodAny>;
        commit_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        commit_time_millis: z.ZodOptional<z.ZodAny>;
        completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        completion_time_millis: z.ZodOptional<z.ZodAny>;
        master_apply_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        master_apply_time_millis: z.ZodOptional<z.ZodAny>;
        notification_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        notification_time_millis: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>>;
    serialized_cluster_states: z.ZodOptional<z.ZodObject<{
        full_states: z.ZodOptional<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            uncompressed_size: z.ZodOptional<z.ZodString>;
            uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            compressed_size: z.ZodOptional<z.ZodString>;
            compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        diffs: z.ZodOptional<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            uncompressed_size: z.ZodOptional<z.ZodString>;
            uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            compressed_size: z.ZodOptional<z.ZodString>;
            compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    cluster_applier_stats: z.ZodOptional<z.ZodObject<{
        recordings: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            cumulative_execution_count: z.ZodOptional<z.ZodNumber>;
            cumulative_execution_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            cumulative_execution_time_millis: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesDiscovery = z.infer<typeof NodesDiscovery>;
export declare const NodesMemoryStats: z.ZodObject<{
    adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
    resident: z.ZodOptional<z.ZodString>;
    resident_in_bytes: z.ZodOptional<z.ZodNumber>;
    share: z.ZodOptional<z.ZodString>;
    share_in_bytes: z.ZodOptional<z.ZodNumber>;
    total_virtual: z.ZodOptional<z.ZodString>;
    total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
    total_in_bytes: z.ZodOptional<z.ZodNumber>;
    free_in_bytes: z.ZodOptional<z.ZodNumber>;
    used_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesMemoryStats = z.infer<typeof NodesMemoryStats>;
export declare const NodesExtendedMemoryStats: z.ZodObject<{
    free_percent: z.ZodOptional<z.ZodNumber>;
    used_percent: z.ZodOptional<z.ZodNumber>;
    adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
    resident: z.ZodOptional<z.ZodString>;
    resident_in_bytes: z.ZodOptional<z.ZodNumber>;
    share: z.ZodOptional<z.ZodString>;
    share_in_bytes: z.ZodOptional<z.ZodNumber>;
    total_virtual: z.ZodOptional<z.ZodString>;
    total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
    total_in_bytes: z.ZodOptional<z.ZodNumber>;
    free_in_bytes: z.ZodOptional<z.ZodNumber>;
    used_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesExtendedMemoryStats = z.infer<typeof NodesExtendedMemoryStats>;
export declare const NodesFileSystemTotal: z.ZodObject<{
    available: z.ZodOptional<z.ZodString>;
    available_in_bytes: z.ZodOptional<z.ZodNumber>;
    free: z.ZodOptional<z.ZodString>;
    free_in_bytes: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodString>;
    total_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesFileSystemTotal = z.infer<typeof NodesFileSystemTotal>;
export declare const NodesIoStatDevice: z.ZodObject<{
    device_name: z.ZodOptional<z.ZodString>;
    operations: z.ZodOptional<z.ZodNumber>;
    read_kilobytes: z.ZodOptional<z.ZodNumber>;
    read_operations: z.ZodOptional<z.ZodNumber>;
    write_kilobytes: z.ZodOptional<z.ZodNumber>;
    write_operations: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesIoStatDevice = z.infer<typeof NodesIoStatDevice>;
export declare const NodesIoStats: z.ZodObject<{
    devices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        device_name: z.ZodOptional<z.ZodString>;
        operations: z.ZodOptional<z.ZodNumber>;
        read_kilobytes: z.ZodOptional<z.ZodNumber>;
        read_operations: z.ZodOptional<z.ZodNumber>;
        write_kilobytes: z.ZodOptional<z.ZodNumber>;
        write_operations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodObject<{
        device_name: z.ZodOptional<z.ZodString>;
        operations: z.ZodOptional<z.ZodNumber>;
        read_kilobytes: z.ZodOptional<z.ZodNumber>;
        read_operations: z.ZodOptional<z.ZodNumber>;
        write_kilobytes: z.ZodOptional<z.ZodNumber>;
        write_operations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesIoStats = z.infer<typeof NodesIoStats>;
export declare const NodesFileSystem: z.ZodObject<{
    data: z.ZodOptional<z.ZodArray<z.ZodObject<{
        available: z.ZodOptional<z.ZodString>;
        available_in_bytes: z.ZodOptional<z.ZodNumber>;
        disk_queue: z.ZodOptional<z.ZodString>;
        disk_reads: z.ZodOptional<z.ZodNumber>;
        disk_read_size: z.ZodOptional<z.ZodString>;
        disk_read_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        disk_writes: z.ZodOptional<z.ZodNumber>;
        disk_write_size: z.ZodOptional<z.ZodString>;
        disk_write_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        free: z.ZodOptional<z.ZodString>;
        free_in_bytes: z.ZodOptional<z.ZodNumber>;
        mount: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodString>;
        total_in_bytes: z.ZodOptional<z.ZodNumber>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    timestamp: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodObject<{
        available: z.ZodOptional<z.ZodString>;
        available_in_bytes: z.ZodOptional<z.ZodNumber>;
        free: z.ZodOptional<z.ZodString>;
        free_in_bytes: z.ZodOptional<z.ZodNumber>;
        total: z.ZodOptional<z.ZodString>;
        total_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    io_stats: z.ZodOptional<z.ZodObject<{
        devices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            device_name: z.ZodOptional<z.ZodString>;
            operations: z.ZodOptional<z.ZodNumber>;
            read_kilobytes: z.ZodOptional<z.ZodNumber>;
            read_operations: z.ZodOptional<z.ZodNumber>;
            write_kilobytes: z.ZodOptional<z.ZodNumber>;
            write_operations: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        total: z.ZodOptional<z.ZodObject<{
            device_name: z.ZodOptional<z.ZodString>;
            operations: z.ZodOptional<z.ZodNumber>;
            read_kilobytes: z.ZodOptional<z.ZodNumber>;
            read_operations: z.ZodOptional<z.ZodNumber>;
            write_kilobytes: z.ZodOptional<z.ZodNumber>;
            write_operations: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesFileSystem = z.infer<typeof NodesFileSystem>;
export declare const NodesGarbageCollectorTotal: z.ZodObject<{
    collection_count: z.ZodOptional<z.ZodNumber>;
    collection_time: z.ZodOptional<z.ZodString>;
    collection_time_in_millis: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesGarbageCollectorTotal = z.infer<typeof NodesGarbageCollectorTotal>;
export declare const NodesGarbageCollector: z.ZodObject<{
    collectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        collection_count: z.ZodOptional<z.ZodNumber>;
        collection_time: z.ZodOptional<z.ZodString>;
        collection_time_in_millis: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesGarbageCollector = z.infer<typeof NodesGarbageCollector>;
export declare const NodesHttp: z.ZodObject<{
    current_open: z.ZodOptional<z.ZodNumber>;
    total_opened: z.ZodOptional<z.ZodNumber>;
    clients: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        agent: z.ZodOptional<z.ZodString>;
        local_address: z.ZodOptional<z.ZodString>;
        remote_address: z.ZodOptional<z.ZodString>;
        last_uri: z.ZodOptional<z.ZodString>;
        opened_time_millis: z.ZodOptional<z.ZodNumber>;
        closed_time_millis: z.ZodOptional<z.ZodNumber>;
        last_request_time_millis: z.ZodOptional<z.ZodNumber>;
        request_count: z.ZodOptional<z.ZodNumber>;
        request_size_bytes: z.ZodOptional<z.ZodNumber>;
        x_opaque_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesHttp = z.infer<typeof NodesHttp>;
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
export declare const NodesIndexingPressure: z.ZodObject<{
    memory: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesIndexingPressure = z.infer<typeof NodesIndexingPressure>;
export declare const NodesProcessor: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    current: z.ZodOptional<z.ZodNumber>;
    failed: z.ZodOptional<z.ZodNumber>;
    time_in_millis: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type NodesProcessor = z.infer<typeof NodesProcessor>;
export declare const NodesKeyedProcessor: z.ZodObject<{
    stats: z.ZodOptional<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        current: z.ZodOptional<z.ZodNumber>;
        failed: z.ZodOptional<z.ZodNumber>;
        time_in_millis: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesKeyedProcessor = z.infer<typeof NodesKeyedProcessor>;
export declare const NodesIngestStats: z.ZodObject<{
    count: z.ZodNumber;
    current: z.ZodNumber;
    failed: z.ZodNumber;
    processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
        stats: z.ZodOptional<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            current: z.ZodOptional<z.ZodNumber>;
            failed: z.ZodOptional<z.ZodNumber>;
            time_in_millis: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    time_in_millis: z.ZodAny;
    ingested_as_first_pipeline_in_bytes: z.ZodNumber;
    produced_as_first_pipeline_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type NodesIngestStats = z.infer<typeof NodesIngestStats>;
export declare const NodesIngestTotal: z.ZodObject<{
    count: z.ZodNumber;
    current: z.ZodNumber;
    failed: z.ZodNumber;
    time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type NodesIngestTotal = z.infer<typeof NodesIngestTotal>;
export declare const NodesIngest: z.ZodObject<{
    pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        current: z.ZodNumber;
        failed: z.ZodNumber;
        processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
            stats: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                current: z.ZodOptional<z.ZodNumber>;
                failed: z.ZodOptional<z.ZodNumber>;
                time_in_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        time_in_millis: z.ZodAny;
        ingested_as_first_pipeline_in_bytes: z.ZodNumber;
        produced_as_first_pipeline_in_bytes: z.ZodNumber;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        current: z.ZodNumber;
        failed: z.ZodNumber;
        time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesIngest = z.infer<typeof NodesIngest>;
export declare const NodesNodeBufferPool: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    total_capacity: z.ZodOptional<z.ZodString>;
    total_capacity_in_bytes: z.ZodOptional<z.ZodNumber>;
    used: z.ZodOptional<z.ZodString>;
    used_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesNodeBufferPool = z.infer<typeof NodesNodeBufferPool>;
export declare const NodesJvmClasses: z.ZodObject<{
    current_loaded_count: z.ZodOptional<z.ZodNumber>;
    total_loaded_count: z.ZodOptional<z.ZodNumber>;
    total_unloaded_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesJvmClasses = z.infer<typeof NodesJvmClasses>;
export declare const NodesPool: z.ZodObject<{
    used_in_bytes: z.ZodOptional<z.ZodNumber>;
    max_in_bytes: z.ZodOptional<z.ZodNumber>;
    peak_used_in_bytes: z.ZodOptional<z.ZodNumber>;
    peak_max_in_bytes: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesPool = z.infer<typeof NodesPool>;
export declare const NodesJvmMemoryStats: z.ZodObject<{
    heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
    heap_used_percent: z.ZodOptional<z.ZodNumber>;
    heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
    heap_max_in_bytes: z.ZodOptional<z.ZodNumber>;
    heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    non_heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
    non_heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
    pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        used_in_bytes: z.ZodOptional<z.ZodNumber>;
        max_in_bytes: z.ZodOptional<z.ZodNumber>;
        peak_used_in_bytes: z.ZodOptional<z.ZodNumber>;
        peak_max_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesJvmMemoryStats = z.infer<typeof NodesJvmMemoryStats>;
export declare const NodesJvmThreads: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    peak_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesJvmThreads = z.infer<typeof NodesJvmThreads>;
export declare const NodesJvm: z.ZodObject<{
    buffer_pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        total_capacity: z.ZodOptional<z.ZodString>;
        total_capacity_in_bytes: z.ZodOptional<z.ZodNumber>;
        used: z.ZodOptional<z.ZodString>;
        used_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    classes: z.ZodOptional<z.ZodObject<{
        current_loaded_count: z.ZodOptional<z.ZodNumber>;
        total_loaded_count: z.ZodOptional<z.ZodNumber>;
        total_unloaded_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    gc: z.ZodOptional<z.ZodObject<{
        collectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            collection_count: z.ZodOptional<z.ZodNumber>;
            collection_time: z.ZodOptional<z.ZodString>;
            collection_time_in_millis: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    mem: z.ZodOptional<z.ZodObject<{
        heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
        heap_used_percent: z.ZodOptional<z.ZodNumber>;
        heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
        heap_max_in_bytes: z.ZodOptional<z.ZodNumber>;
        heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        non_heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
        non_heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
        pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            used_in_bytes: z.ZodOptional<z.ZodNumber>;
            max_in_bytes: z.ZodOptional<z.ZodNumber>;
            peak_used_in_bytes: z.ZodOptional<z.ZodNumber>;
            peak_max_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    threads: z.ZodOptional<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        peak_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    timestamp: z.ZodOptional<z.ZodNumber>;
    uptime: z.ZodOptional<z.ZodString>;
    uptime_in_millis: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesJvm = z.infer<typeof NodesJvm>;
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
export declare const NodesOperatingSystem: z.ZodObject<{
    cpu: z.ZodOptional<z.ZodObject<{
        percent: z.ZodOptional<z.ZodNumber>;
        sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        sys_in_millis: z.ZodOptional<z.ZodAny>;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_in_millis: z.ZodOptional<z.ZodAny>;
        user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        user_in_millis: z.ZodOptional<z.ZodAny>;
        load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    mem: z.ZodOptional<z.ZodObject<{
        free_percent: z.ZodOptional<z.ZodNumber>;
        used_percent: z.ZodOptional<z.ZodNumber>;
        adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
        resident: z.ZodOptional<z.ZodString>;
        resident_in_bytes: z.ZodOptional<z.ZodNumber>;
        share: z.ZodOptional<z.ZodString>;
        share_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_virtual: z.ZodOptional<z.ZodString>;
        total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_in_bytes: z.ZodOptional<z.ZodNumber>;
        free_in_bytes: z.ZodOptional<z.ZodNumber>;
        used_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    swap: z.ZodOptional<z.ZodObject<{
        adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
        resident: z.ZodOptional<z.ZodString>;
        resident_in_bytes: z.ZodOptional<z.ZodNumber>;
        share: z.ZodOptional<z.ZodString>;
        share_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_virtual: z.ZodOptional<z.ZodString>;
        total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_in_bytes: z.ZodOptional<z.ZodNumber>;
        free_in_bytes: z.ZodOptional<z.ZodNumber>;
        used_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    cgroup: z.ZodOptional<z.ZodObject<{
        cpuacct: z.ZodOptional<z.ZodObject<{
            control_group: z.ZodOptional<z.ZodString>;
            usage_nanos: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        cpu: z.ZodOptional<z.ZodObject<{
            control_group: z.ZodOptional<z.ZodString>;
            cfs_period_micros: z.ZodOptional<z.ZodNumber>;
            cfs_quota_micros: z.ZodOptional<z.ZodNumber>;
            stat: z.ZodOptional<z.ZodObject<{
                number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
                number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
                time_throttled_nanos: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        memory: z.ZodOptional<z.ZodObject<{
            control_group: z.ZodOptional<z.ZodString>;
            limit_in_bytes: z.ZodOptional<z.ZodString>;
            usage_in_bytes: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    timestamp: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesOperatingSystem = z.infer<typeof NodesOperatingSystem>;
export declare const NodesProcess: z.ZodObject<{
    cpu: z.ZodOptional<z.ZodObject<{
        percent: z.ZodOptional<z.ZodNumber>;
        sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        sys_in_millis: z.ZodOptional<z.ZodAny>;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        total_in_millis: z.ZodOptional<z.ZodAny>;
        user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        user_in_millis: z.ZodOptional<z.ZodAny>;
        load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
    mem: z.ZodOptional<z.ZodObject<{
        adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
        resident: z.ZodOptional<z.ZodString>;
        resident_in_bytes: z.ZodOptional<z.ZodNumber>;
        share: z.ZodOptional<z.ZodString>;
        share_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_virtual: z.ZodOptional<z.ZodString>;
        total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_in_bytes: z.ZodOptional<z.ZodNumber>;
        free_in_bytes: z.ZodOptional<z.ZodNumber>;
        used_in_bytes: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    open_file_descriptors: z.ZodOptional<z.ZodNumber>;
    max_file_descriptors: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesProcess = z.infer<typeof NodesProcess>;
export declare const NodesScriptCache: z.ZodObject<{
    cache_evictions: z.ZodOptional<z.ZodNumber>;
    compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
    compilations: z.ZodOptional<z.ZodNumber>;
    context: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesScriptCache = z.infer<typeof NodesScriptCache>;
export declare const NodesScripting: z.ZodObject<{
    cache_evictions: z.ZodOptional<z.ZodNumber>;
    compilations: z.ZodOptional<z.ZodNumber>;
    compilations_history: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
    contexts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        context: z.ZodOptional<z.ZodString>;
        compilations: z.ZodOptional<z.ZodNumber>;
        cache_evictions: z.ZodOptional<z.ZodNumber>;
        compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesScripting = z.infer<typeof NodesScripting>;
export declare const NodesThreadCount: z.ZodObject<{
    active: z.ZodOptional<z.ZodNumber>;
    completed: z.ZodOptional<z.ZodNumber>;
    largest: z.ZodOptional<z.ZodNumber>;
    queue: z.ZodOptional<z.ZodNumber>;
    rejected: z.ZodOptional<z.ZodNumber>;
    threads: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesThreadCount = z.infer<typeof NodesThreadCount>;
export declare const NodesTransportHistogram: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    lt_millis: z.ZodOptional<z.ZodNumber>;
    ge_millis: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesTransportHistogram = z.infer<typeof NodesTransportHistogram>;
export declare const NodesTransport: z.ZodObject<{
    inbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        lt_millis: z.ZodOptional<z.ZodNumber>;
        ge_millis: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    outbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        lt_millis: z.ZodOptional<z.ZodNumber>;
        ge_millis: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    rx_count: z.ZodOptional<z.ZodNumber>;
    rx_size: z.ZodOptional<z.ZodString>;
    rx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    server_open: z.ZodOptional<z.ZodNumber>;
    tx_count: z.ZodOptional<z.ZodNumber>;
    tx_size: z.ZodOptional<z.ZodString>;
    tx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
    total_outbound_connections: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesTransport = z.infer<typeof NodesTransport>;
export declare const NodesStats: z.ZodObject<{
    adaptive_selection: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        avg_queue_size: z.ZodOptional<z.ZodNumber>;
        avg_response_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        avg_response_time_ns: z.ZodOptional<z.ZodNumber>;
        avg_service_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        avg_service_time_ns: z.ZodOptional<z.ZodNumber>;
        outgoing_searches: z.ZodOptional<z.ZodNumber>;
        rank: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    breakers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        estimated_size: z.ZodOptional<z.ZodString>;
        estimated_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        limit_size: z.ZodOptional<z.ZodString>;
        limit_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        overhead: z.ZodOptional<z.ZodNumber>;
        tripped: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    fs: z.ZodOptional<z.ZodObject<{
        data: z.ZodOptional<z.ZodArray<z.ZodObject<{
            available: z.ZodOptional<z.ZodString>;
            available_in_bytes: z.ZodOptional<z.ZodNumber>;
            disk_queue: z.ZodOptional<z.ZodString>;
            disk_reads: z.ZodOptional<z.ZodNumber>;
            disk_read_size: z.ZodOptional<z.ZodString>;
            disk_read_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            disk_writes: z.ZodOptional<z.ZodNumber>;
            disk_write_size: z.ZodOptional<z.ZodString>;
            disk_write_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            free: z.ZodOptional<z.ZodString>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            mount: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodString>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        total: z.ZodOptional<z.ZodObject<{
            available: z.ZodOptional<z.ZodString>;
            available_in_bytes: z.ZodOptional<z.ZodNumber>;
            free: z.ZodOptional<z.ZodString>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodString>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        io_stats: z.ZodOptional<z.ZodObject<{
            devices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                device_name: z.ZodOptional<z.ZodString>;
                operations: z.ZodOptional<z.ZodNumber>;
                read_kilobytes: z.ZodOptional<z.ZodNumber>;
                read_operations: z.ZodOptional<z.ZodNumber>;
                write_kilobytes: z.ZodOptional<z.ZodNumber>;
                write_operations: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            total: z.ZodOptional<z.ZodObject<{
                device_name: z.ZodOptional<z.ZodString>;
                operations: z.ZodOptional<z.ZodNumber>;
                read_kilobytes: z.ZodOptional<z.ZodNumber>;
                read_operations: z.ZodOptional<z.ZodNumber>;
                write_kilobytes: z.ZodOptional<z.ZodNumber>;
                write_operations: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    host: z.ZodOptional<z.ZodString>;
    http: z.ZodOptional<z.ZodObject<{
        current_open: z.ZodOptional<z.ZodNumber>;
        total_opened: z.ZodOptional<z.ZodNumber>;
        clients: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            agent: z.ZodOptional<z.ZodString>;
            local_address: z.ZodOptional<z.ZodString>;
            remote_address: z.ZodOptional<z.ZodString>;
            last_uri: z.ZodOptional<z.ZodString>;
            opened_time_millis: z.ZodOptional<z.ZodNumber>;
            closed_time_millis: z.ZodOptional<z.ZodNumber>;
            last_request_time_millis: z.ZodOptional<z.ZodNumber>;
            request_count: z.ZodOptional<z.ZodNumber>;
            request_size_bytes: z.ZodOptional<z.ZodNumber>;
            x_opaque_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    ingest: z.ZodOptional<z.ZodObject<{
        pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            current: z.ZodNumber;
            failed: z.ZodNumber;
            processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
                stats: z.ZodOptional<z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    current: z.ZodOptional<z.ZodNumber>;
                    failed: z.ZodOptional<z.ZodNumber>;
                    time_in_millis: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            time_in_millis: z.ZodAny;
            ingested_as_first_pipeline_in_bytes: z.ZodNumber;
            produced_as_first_pipeline_in_bytes: z.ZodNumber;
        }, z.core.$strip>>>;
        total: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            current: z.ZodNumber;
            failed: z.ZodNumber;
            time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    jvm: z.ZodOptional<z.ZodObject<{
        buffer_pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            total_capacity: z.ZodOptional<z.ZodString>;
            total_capacity_in_bytes: z.ZodOptional<z.ZodNumber>;
            used: z.ZodOptional<z.ZodString>;
            used_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        classes: z.ZodOptional<z.ZodObject<{
            current_loaded_count: z.ZodOptional<z.ZodNumber>;
            total_loaded_count: z.ZodOptional<z.ZodNumber>;
            total_unloaded_count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        gc: z.ZodOptional<z.ZodObject<{
            collectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                collection_count: z.ZodOptional<z.ZodNumber>;
                collection_time: z.ZodOptional<z.ZodString>;
                collection_time_in_millis: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        mem: z.ZodOptional<z.ZodObject<{
            heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
            heap_used_percent: z.ZodOptional<z.ZodNumber>;
            heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
            heap_max_in_bytes: z.ZodOptional<z.ZodNumber>;
            heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            non_heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
            non_heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
            pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
                max_in_bytes: z.ZodOptional<z.ZodNumber>;
                peak_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                peak_max_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        threads: z.ZodOptional<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            peak_count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        uptime: z.ZodOptional<z.ZodString>;
        uptime_in_millis: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    name: z.ZodOptional<z.ZodString>;
    os: z.ZodOptional<z.ZodObject<{
        cpu: z.ZodOptional<z.ZodObject<{
            percent: z.ZodOptional<z.ZodNumber>;
            sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            sys_in_millis: z.ZodOptional<z.ZodAny>;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_in_millis: z.ZodOptional<z.ZodAny>;
            user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            user_in_millis: z.ZodOptional<z.ZodAny>;
            load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        mem: z.ZodOptional<z.ZodObject<{
            free_percent: z.ZodOptional<z.ZodNumber>;
            used_percent: z.ZodOptional<z.ZodNumber>;
            adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
            resident: z.ZodOptional<z.ZodString>;
            resident_in_bytes: z.ZodOptional<z.ZodNumber>;
            share: z.ZodOptional<z.ZodString>;
            share_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_virtual: z.ZodOptional<z.ZodString>;
            total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            used_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        swap: z.ZodOptional<z.ZodObject<{
            adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
            resident: z.ZodOptional<z.ZodString>;
            resident_in_bytes: z.ZodOptional<z.ZodNumber>;
            share: z.ZodOptional<z.ZodString>;
            share_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_virtual: z.ZodOptional<z.ZodString>;
            total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            used_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        cgroup: z.ZodOptional<z.ZodObject<{
            cpuacct: z.ZodOptional<z.ZodObject<{
                control_group: z.ZodOptional<z.ZodString>;
                usage_nanos: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            cpu: z.ZodOptional<z.ZodObject<{
                control_group: z.ZodOptional<z.ZodString>;
                cfs_period_micros: z.ZodOptional<z.ZodNumber>;
                cfs_quota_micros: z.ZodOptional<z.ZodNumber>;
                stat: z.ZodOptional<z.ZodObject<{
                    number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
                    number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
                    time_throttled_nanos: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            memory: z.ZodOptional<z.ZodObject<{
                control_group: z.ZodOptional<z.ZodString>;
                limit_in_bytes: z.ZodOptional<z.ZodString>;
                usage_in_bytes: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        timestamp: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    process: z.ZodOptional<z.ZodObject<{
        cpu: z.ZodOptional<z.ZodObject<{
            percent: z.ZodOptional<z.ZodNumber>;
            sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            sys_in_millis: z.ZodOptional<z.ZodAny>;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            total_in_millis: z.ZodOptional<z.ZodAny>;
            user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            user_in_millis: z.ZodOptional<z.ZodAny>;
            load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
        mem: z.ZodOptional<z.ZodObject<{
            adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
            resident: z.ZodOptional<z.ZodString>;
            resident_in_bytes: z.ZodOptional<z.ZodNumber>;
            share: z.ZodOptional<z.ZodString>;
            share_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_virtual: z.ZodOptional<z.ZodString>;
            total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_in_bytes: z.ZodOptional<z.ZodNumber>;
            free_in_bytes: z.ZodOptional<z.ZodNumber>;
            used_in_bytes: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        open_file_descriptors: z.ZodOptional<z.ZodNumber>;
        max_file_descriptors: z.ZodOptional<z.ZodNumber>;
        timestamp: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        master: "master";
        ingest: "ingest";
        ml: "ml";
        transform: "transform";
        data: "data";
        client: "client";
        data_hot: "data_hot";
        data_content: "data_content";
        data_warm: "data_warm";
        data_cold: "data_cold";
        data_frozen: "data_frozen";
        remote_cluster_client: "remote_cluster_client";
        voting_only: "voting_only";
        coordinating_only: "coordinating_only";
    }>>>;
    script: z.ZodOptional<z.ZodObject<{
        cache_evictions: z.ZodOptional<z.ZodNumber>;
        compilations: z.ZodOptional<z.ZodNumber>;
        compilations_history: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
        contexts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            context: z.ZodOptional<z.ZodString>;
            compilations: z.ZodOptional<z.ZodNumber>;
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    script_cache: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
        cache_evictions: z.ZodOptional<z.ZodNumber>;
        compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
        compilations: z.ZodOptional<z.ZodNumber>;
        context: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>, z.ZodArray<z.ZodObject<{
        cache_evictions: z.ZodOptional<z.ZodNumber>;
        compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
        compilations: z.ZodOptional<z.ZodNumber>;
        context: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>]>>>;
    thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active: z.ZodOptional<z.ZodNumber>;
        completed: z.ZodOptional<z.ZodNumber>;
        largest: z.ZodOptional<z.ZodNumber>;
        queue: z.ZodOptional<z.ZodNumber>;
        rejected: z.ZodOptional<z.ZodNumber>;
        threads: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    timestamp: z.ZodOptional<z.ZodNumber>;
    transport: z.ZodOptional<z.ZodObject<{
        inbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            lt_millis: z.ZodOptional<z.ZodNumber>;
            ge_millis: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        outbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            lt_millis: z.ZodOptional<z.ZodNumber>;
            ge_millis: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        rx_count: z.ZodOptional<z.ZodNumber>;
        rx_size: z.ZodOptional<z.ZodString>;
        rx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        server_open: z.ZodOptional<z.ZodNumber>;
        tx_count: z.ZodOptional<z.ZodNumber>;
        tx_size: z.ZodOptional<z.ZodString>;
        tx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
        total_outbound_connections: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    transport_address: z.ZodOptional<z.ZodString>;
    attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    discovery: z.ZodOptional<z.ZodObject<{
        cluster_state_queue: z.ZodOptional<z.ZodObject<{
            total: z.ZodOptional<z.ZodNumber>;
            pending: z.ZodOptional<z.ZodNumber>;
            committed: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        published_cluster_states: z.ZodOptional<z.ZodObject<{
            full_states: z.ZodOptional<z.ZodNumber>;
            incompatible_diffs: z.ZodOptional<z.ZodNumber>;
            compatible_diffs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        cluster_state_update: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            computation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            computation_time_millis: z.ZodOptional<z.ZodAny>;
            publication_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            publication_time_millis: z.ZodOptional<z.ZodAny>;
            context_construction_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            context_construction_time_millis: z.ZodOptional<z.ZodAny>;
            commit_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            commit_time_millis: z.ZodOptional<z.ZodAny>;
            completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            completion_time_millis: z.ZodOptional<z.ZodAny>;
            master_apply_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            master_apply_time_millis: z.ZodOptional<z.ZodAny>;
            notification_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            notification_time_millis: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>>;
        serialized_cluster_states: z.ZodOptional<z.ZodObject<{
            full_states: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                uncompressed_size: z.ZodOptional<z.ZodString>;
                uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                compressed_size: z.ZodOptional<z.ZodString>;
                compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            diffs: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                uncompressed_size: z.ZodOptional<z.ZodString>;
                uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                compressed_size: z.ZodOptional<z.ZodString>;
                compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        cluster_applier_stats: z.ZodOptional<z.ZodObject<{
            recordings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                cumulative_execution_count: z.ZodOptional<z.ZodNumber>;
                cumulative_execution_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                cumulative_execution_time_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    indexing_pressure: z.ZodOptional<z.ZodObject<{
        memory: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    indices: z.ZodOptional<z.ZodLazy<z.ZodObject<{
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
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesStats = z.infer<typeof NodesStats>;
export declare const NodesStatsNodeStatsMetric: z.ZodEnum<{
    indices: "indices";
    repositories: "repositories";
    ingest: "ingest";
    script: "script";
    breaker: "breaker";
    http: "http";
    fs: "fs";
    indexing_pressure: "indexing_pressure";
    _all: "_all";
    thread_pool: "thread_pool";
    _none: "_none";
    os: "os";
    process: "process";
    jvm: "jvm";
    transport: "transport";
    discovery: "discovery";
    adaptive_selection: "adaptive_selection";
    script_cache: "script_cache";
    allocations: "allocations";
}>;
export type NodesStatsNodeStatsMetric = z.infer<typeof NodesStatsNodeStatsMetric>;
export declare const NodesStatsNodeStatsMetrics: z.ZodUnion<readonly [z.ZodEnum<{
    indices: "indices";
    repositories: "repositories";
    ingest: "ingest";
    script: "script";
    breaker: "breaker";
    http: "http";
    fs: "fs";
    indexing_pressure: "indexing_pressure";
    _all: "_all";
    thread_pool: "thread_pool";
    _none: "_none";
    os: "os";
    process: "process";
    jvm: "jvm";
    transport: "transport";
    discovery: "discovery";
    adaptive_selection: "adaptive_selection";
    script_cache: "script_cache";
    allocations: "allocations";
}>, z.ZodArray<z.ZodEnum<{
    indices: "indices";
    repositories: "repositories";
    ingest: "ingest";
    script: "script";
    breaker: "breaker";
    http: "http";
    fs: "fs";
    indexing_pressure: "indexing_pressure";
    _all: "_all";
    thread_pool: "thread_pool";
    _none: "_none";
    os: "os";
    process: "process";
    jvm: "jvm";
    transport: "transport";
    discovery: "discovery";
    adaptive_selection: "adaptive_selection";
    script_cache: "script_cache";
    allocations: "allocations";
}>>]>;
export type NodesStatsNodeStatsMetrics = z.infer<typeof NodesStatsNodeStatsMetrics>;
/**
 * Get node statistics.
 *
 * Get statistics for nodes in a cluster.
 * By default, all stats are returned. You can limit the returned information by using metrics.
 */
export declare const NodesStatsRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        indices: "indices";
        repositories: "repositories";
        ingest: "ingest";
        script: "script";
        breaker: "breaker";
        http: "http";
        fs: "fs";
        indexing_pressure: "indexing_pressure";
        _all: "_all";
        thread_pool: "thread_pool";
        _none: "_none";
        os: "os";
        process: "process";
        jvm: "jvm";
        transport: "transport";
        discovery: "discovery";
        adaptive_selection: "adaptive_selection";
        script_cache: "script_cache";
        allocations: "allocations";
    }>, z.ZodArray<z.ZodEnum<{
        indices: "indices";
        repositories: "repositories";
        ingest: "ingest";
        script: "script";
        breaker: "breaker";
        http: "http";
        fs: "fs";
        indexing_pressure: "indexing_pressure";
        _all: "_all";
        thread_pool: "thread_pool";
        _none: "_none";
        os: "os";
        process: "process";
        jvm: "jvm";
        transport: "transport";
        discovery: "discovery";
        adaptive_selection: "adaptive_selection";
        script_cache: "script_cache";
        allocations: "allocations";
    }>>]>>;
    index_metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
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
    completion_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    fielddata_fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    fields: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    groups: z.ZodOptional<z.ZodBoolean>;
    include_segment_file_sizes: z.ZodOptional<z.ZodBoolean>;
    level: z.ZodOptional<z.ZodEnum<{
        indices: "indices";
        shards: "shards";
        node: "node";
    }>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    types: z.ZodOptional<z.ZodArray<z.ZodString>>;
    include_unloaded_segments: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type NodesStatsRequest = z.infer<typeof NodesStatsRequest>;
export declare const NodesStatsResponseBase: z.ZodObject<{
    cluster_name: z.ZodOptional<z.ZodString>;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        adaptive_selection: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            avg_queue_size: z.ZodOptional<z.ZodNumber>;
            avg_response_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            avg_response_time_ns: z.ZodOptional<z.ZodNumber>;
            avg_service_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            avg_service_time_ns: z.ZodOptional<z.ZodNumber>;
            outgoing_searches: z.ZodOptional<z.ZodNumber>;
            rank: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        breakers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            estimated_size: z.ZodOptional<z.ZodString>;
            estimated_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            limit_size: z.ZodOptional<z.ZodString>;
            limit_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            overhead: z.ZodOptional<z.ZodNumber>;
            tripped: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        fs: z.ZodOptional<z.ZodObject<{
            data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                available: z.ZodOptional<z.ZodString>;
                available_in_bytes: z.ZodOptional<z.ZodNumber>;
                disk_queue: z.ZodOptional<z.ZodString>;
                disk_reads: z.ZodOptional<z.ZodNumber>;
                disk_read_size: z.ZodOptional<z.ZodString>;
                disk_read_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                disk_writes: z.ZodOptional<z.ZodNumber>;
                disk_write_size: z.ZodOptional<z.ZodString>;
                disk_write_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                free: z.ZodOptional<z.ZodString>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                mount: z.ZodOptional<z.ZodString>;
                path: z.ZodOptional<z.ZodString>;
                total: z.ZodOptional<z.ZodString>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            timestamp: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodObject<{
                available: z.ZodOptional<z.ZodString>;
                available_in_bytes: z.ZodOptional<z.ZodNumber>;
                free: z.ZodOptional<z.ZodString>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                total: z.ZodOptional<z.ZodString>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            io_stats: z.ZodOptional<z.ZodObject<{
                devices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    device_name: z.ZodOptional<z.ZodString>;
                    operations: z.ZodOptional<z.ZodNumber>;
                    read_kilobytes: z.ZodOptional<z.ZodNumber>;
                    read_operations: z.ZodOptional<z.ZodNumber>;
                    write_kilobytes: z.ZodOptional<z.ZodNumber>;
                    write_operations: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
                total: z.ZodOptional<z.ZodObject<{
                    device_name: z.ZodOptional<z.ZodString>;
                    operations: z.ZodOptional<z.ZodNumber>;
                    read_kilobytes: z.ZodOptional<z.ZodNumber>;
                    read_operations: z.ZodOptional<z.ZodNumber>;
                    write_kilobytes: z.ZodOptional<z.ZodNumber>;
                    write_operations: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        host: z.ZodOptional<z.ZodString>;
        http: z.ZodOptional<z.ZodObject<{
            current_open: z.ZodOptional<z.ZodNumber>;
            total_opened: z.ZodOptional<z.ZodNumber>;
            clients: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                agent: z.ZodOptional<z.ZodString>;
                local_address: z.ZodOptional<z.ZodString>;
                remote_address: z.ZodOptional<z.ZodString>;
                last_uri: z.ZodOptional<z.ZodString>;
                opened_time_millis: z.ZodOptional<z.ZodNumber>;
                closed_time_millis: z.ZodOptional<z.ZodNumber>;
                last_request_time_millis: z.ZodOptional<z.ZodNumber>;
                request_count: z.ZodOptional<z.ZodNumber>;
                request_size_bytes: z.ZodOptional<z.ZodNumber>;
                x_opaque_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        ingest: z.ZodOptional<z.ZodObject<{
            pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                current: z.ZodNumber;
                failed: z.ZodNumber;
                processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
                    stats: z.ZodOptional<z.ZodObject<{
                        count: z.ZodOptional<z.ZodNumber>;
                        current: z.ZodOptional<z.ZodNumber>;
                        failed: z.ZodOptional<z.ZodNumber>;
                        time_in_millis: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                time_in_millis: z.ZodAny;
                ingested_as_first_pipeline_in_bytes: z.ZodNumber;
                produced_as_first_pipeline_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
            total: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                current: z.ZodNumber;
                failed: z.ZodNumber;
                time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        jvm: z.ZodOptional<z.ZodObject<{
            buffer_pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                total_capacity: z.ZodOptional<z.ZodString>;
                total_capacity_in_bytes: z.ZodOptional<z.ZodNumber>;
                used: z.ZodOptional<z.ZodString>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            classes: z.ZodOptional<z.ZodObject<{
                current_loaded_count: z.ZodOptional<z.ZodNumber>;
                total_loaded_count: z.ZodOptional<z.ZodNumber>;
                total_unloaded_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            gc: z.ZodOptional<z.ZodObject<{
                collectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    collection_count: z.ZodOptional<z.ZodNumber>;
                    collection_time: z.ZodOptional<z.ZodString>;
                    collection_time_in_millis: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                heap_used_percent: z.ZodOptional<z.ZodNumber>;
                heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
                heap_max_in_bytes: z.ZodOptional<z.ZodNumber>;
                heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                non_heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                non_heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
                pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    used_in_bytes: z.ZodOptional<z.ZodNumber>;
                    max_in_bytes: z.ZodOptional<z.ZodNumber>;
                    peak_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                    peak_max_in_bytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            threads: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                peak_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            timestamp: z.ZodOptional<z.ZodNumber>;
            uptime: z.ZodOptional<z.ZodString>;
            uptime_in_millis: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        name: z.ZodOptional<z.ZodString>;
        os: z.ZodOptional<z.ZodObject<{
            cpu: z.ZodOptional<z.ZodObject<{
                percent: z.ZodOptional<z.ZodNumber>;
                sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                sys_in_millis: z.ZodOptional<z.ZodAny>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_in_millis: z.ZodOptional<z.ZodAny>;
                user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                user_in_millis: z.ZodOptional<z.ZodAny>;
                load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                free_percent: z.ZodOptional<z.ZodNumber>;
                used_percent: z.ZodOptional<z.ZodNumber>;
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                resident: z.ZodOptional<z.ZodString>;
                resident_in_bytes: z.ZodOptional<z.ZodNumber>;
                share: z.ZodOptional<z.ZodString>;
                share_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_virtual: z.ZodOptional<z.ZodString>;
                total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            swap: z.ZodOptional<z.ZodObject<{
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                resident: z.ZodOptional<z.ZodString>;
                resident_in_bytes: z.ZodOptional<z.ZodNumber>;
                share: z.ZodOptional<z.ZodString>;
                share_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_virtual: z.ZodOptional<z.ZodString>;
                total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            cgroup: z.ZodOptional<z.ZodObject<{
                cpuacct: z.ZodOptional<z.ZodObject<{
                    control_group: z.ZodOptional<z.ZodString>;
                    usage_nanos: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                cpu: z.ZodOptional<z.ZodObject<{
                    control_group: z.ZodOptional<z.ZodString>;
                    cfs_period_micros: z.ZodOptional<z.ZodNumber>;
                    cfs_quota_micros: z.ZodOptional<z.ZodNumber>;
                    stat: z.ZodOptional<z.ZodObject<{
                        number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
                        number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
                        time_throttled_nanos: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                memory: z.ZodOptional<z.ZodObject<{
                    control_group: z.ZodOptional<z.ZodString>;
                    limit_in_bytes: z.ZodOptional<z.ZodString>;
                    usage_in_bytes: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            timestamp: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        process: z.ZodOptional<z.ZodObject<{
            cpu: z.ZodOptional<z.ZodObject<{
                percent: z.ZodOptional<z.ZodNumber>;
                sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                sys_in_millis: z.ZodOptional<z.ZodAny>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_in_millis: z.ZodOptional<z.ZodAny>;
                user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                user_in_millis: z.ZodOptional<z.ZodAny>;
                load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                resident: z.ZodOptional<z.ZodString>;
                resident_in_bytes: z.ZodOptional<z.ZodNumber>;
                share: z.ZodOptional<z.ZodString>;
                share_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_virtual: z.ZodOptional<z.ZodString>;
                total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            open_file_descriptors: z.ZodOptional<z.ZodNumber>;
            max_file_descriptors: z.ZodOptional<z.ZodNumber>;
            timestamp: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            master: "master";
            ingest: "ingest";
            ml: "ml";
            transform: "transform";
            data: "data";
            client: "client";
            data_hot: "data_hot";
            data_content: "data_content";
            data_warm: "data_warm";
            data_cold: "data_cold";
            data_frozen: "data_frozen";
            remote_cluster_client: "remote_cluster_client";
            voting_only: "voting_only";
            coordinating_only: "coordinating_only";
        }>>>;
        script: z.ZodOptional<z.ZodObject<{
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilations: z.ZodOptional<z.ZodNumber>;
            compilations_history: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            contexts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                context: z.ZodOptional<z.ZodString>;
                compilations: z.ZodOptional<z.ZodNumber>;
                cache_evictions: z.ZodOptional<z.ZodNumber>;
                compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        script_cache: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            compilations: z.ZodOptional<z.ZodNumber>;
            context: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            compilations: z.ZodOptional<z.ZodNumber>;
            context: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>>>;
        thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            active: z.ZodOptional<z.ZodNumber>;
            completed: z.ZodOptional<z.ZodNumber>;
            largest: z.ZodOptional<z.ZodNumber>;
            queue: z.ZodOptional<z.ZodNumber>;
            rejected: z.ZodOptional<z.ZodNumber>;
            threads: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        transport: z.ZodOptional<z.ZodObject<{
            inbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                lt_millis: z.ZodOptional<z.ZodNumber>;
                ge_millis: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            outbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                lt_millis: z.ZodOptional<z.ZodNumber>;
                ge_millis: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            rx_count: z.ZodOptional<z.ZodNumber>;
            rx_size: z.ZodOptional<z.ZodString>;
            rx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            server_open: z.ZodOptional<z.ZodNumber>;
            tx_count: z.ZodOptional<z.ZodNumber>;
            tx_size: z.ZodOptional<z.ZodString>;
            tx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_outbound_connections: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        transport_address: z.ZodOptional<z.ZodString>;
        attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        discovery: z.ZodOptional<z.ZodObject<{
            cluster_state_queue: z.ZodOptional<z.ZodObject<{
                total: z.ZodOptional<z.ZodNumber>;
                pending: z.ZodOptional<z.ZodNumber>;
                committed: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            published_cluster_states: z.ZodOptional<z.ZodObject<{
                full_states: z.ZodOptional<z.ZodNumber>;
                incompatible_diffs: z.ZodOptional<z.ZodNumber>;
                compatible_diffs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            cluster_state_update: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                computation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                computation_time_millis: z.ZodOptional<z.ZodAny>;
                publication_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                publication_time_millis: z.ZodOptional<z.ZodAny>;
                context_construction_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                context_construction_time_millis: z.ZodOptional<z.ZodAny>;
                commit_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                commit_time_millis: z.ZodOptional<z.ZodAny>;
                completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                completion_time_millis: z.ZodOptional<z.ZodAny>;
                master_apply_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                master_apply_time_millis: z.ZodOptional<z.ZodAny>;
                notification_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                notification_time_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>>;
            serialized_cluster_states: z.ZodOptional<z.ZodObject<{
                full_states: z.ZodOptional<z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    uncompressed_size: z.ZodOptional<z.ZodString>;
                    uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                    compressed_size: z.ZodOptional<z.ZodString>;
                    compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                diffs: z.ZodOptional<z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    uncompressed_size: z.ZodOptional<z.ZodString>;
                    uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                    compressed_size: z.ZodOptional<z.ZodString>;
                    compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            cluster_applier_stats: z.ZodOptional<z.ZodObject<{
                recordings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    cumulative_execution_count: z.ZodOptional<z.ZodNumber>;
                    cumulative_execution_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    cumulative_execution_time_millis: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        indexing_pressure: z.ZodOptional<z.ZodObject<{
            memory: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        indices: z.ZodOptional<z.ZodLazy<z.ZodObject<{
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
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
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
export type NodesStatsResponseBase = z.infer<typeof NodesStatsResponseBase>;
export declare const NodesStatsResponse: z.ZodObject<{
    cluster_name: z.ZodOptional<z.ZodString>;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        adaptive_selection: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            avg_queue_size: z.ZodOptional<z.ZodNumber>;
            avg_response_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            avg_response_time_ns: z.ZodOptional<z.ZodNumber>;
            avg_service_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            avg_service_time_ns: z.ZodOptional<z.ZodNumber>;
            outgoing_searches: z.ZodOptional<z.ZodNumber>;
            rank: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        breakers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            estimated_size: z.ZodOptional<z.ZodString>;
            estimated_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            limit_size: z.ZodOptional<z.ZodString>;
            limit_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            overhead: z.ZodOptional<z.ZodNumber>;
            tripped: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        fs: z.ZodOptional<z.ZodObject<{
            data: z.ZodOptional<z.ZodArray<z.ZodObject<{
                available: z.ZodOptional<z.ZodString>;
                available_in_bytes: z.ZodOptional<z.ZodNumber>;
                disk_queue: z.ZodOptional<z.ZodString>;
                disk_reads: z.ZodOptional<z.ZodNumber>;
                disk_read_size: z.ZodOptional<z.ZodString>;
                disk_read_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                disk_writes: z.ZodOptional<z.ZodNumber>;
                disk_write_size: z.ZodOptional<z.ZodString>;
                disk_write_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                free: z.ZodOptional<z.ZodString>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                mount: z.ZodOptional<z.ZodString>;
                path: z.ZodOptional<z.ZodString>;
                total: z.ZodOptional<z.ZodString>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            timestamp: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodObject<{
                available: z.ZodOptional<z.ZodString>;
                available_in_bytes: z.ZodOptional<z.ZodNumber>;
                free: z.ZodOptional<z.ZodString>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                total: z.ZodOptional<z.ZodString>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            io_stats: z.ZodOptional<z.ZodObject<{
                devices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    device_name: z.ZodOptional<z.ZodString>;
                    operations: z.ZodOptional<z.ZodNumber>;
                    read_kilobytes: z.ZodOptional<z.ZodNumber>;
                    read_operations: z.ZodOptional<z.ZodNumber>;
                    write_kilobytes: z.ZodOptional<z.ZodNumber>;
                    write_operations: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
                total: z.ZodOptional<z.ZodObject<{
                    device_name: z.ZodOptional<z.ZodString>;
                    operations: z.ZodOptional<z.ZodNumber>;
                    read_kilobytes: z.ZodOptional<z.ZodNumber>;
                    read_operations: z.ZodOptional<z.ZodNumber>;
                    write_kilobytes: z.ZodOptional<z.ZodNumber>;
                    write_operations: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        host: z.ZodOptional<z.ZodString>;
        http: z.ZodOptional<z.ZodObject<{
            current_open: z.ZodOptional<z.ZodNumber>;
            total_opened: z.ZodOptional<z.ZodNumber>;
            clients: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodNumber>;
                agent: z.ZodOptional<z.ZodString>;
                local_address: z.ZodOptional<z.ZodString>;
                remote_address: z.ZodOptional<z.ZodString>;
                last_uri: z.ZodOptional<z.ZodString>;
                opened_time_millis: z.ZodOptional<z.ZodNumber>;
                closed_time_millis: z.ZodOptional<z.ZodNumber>;
                last_request_time_millis: z.ZodOptional<z.ZodNumber>;
                request_count: z.ZodOptional<z.ZodNumber>;
                request_size_bytes: z.ZodOptional<z.ZodNumber>;
                x_opaque_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        ingest: z.ZodOptional<z.ZodObject<{
            pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                current: z.ZodNumber;
                failed: z.ZodNumber;
                processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
                    stats: z.ZodOptional<z.ZodObject<{
                        count: z.ZodOptional<z.ZodNumber>;
                        current: z.ZodOptional<z.ZodNumber>;
                        failed: z.ZodOptional<z.ZodNumber>;
                        time_in_millis: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>>;
                time_in_millis: z.ZodAny;
                ingested_as_first_pipeline_in_bytes: z.ZodNumber;
                produced_as_first_pipeline_in_bytes: z.ZodNumber;
            }, z.core.$strip>>>;
            total: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                current: z.ZodNumber;
                failed: z.ZodNumber;
                time_in_millis: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        jvm: z.ZodOptional<z.ZodObject<{
            buffer_pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                total_capacity: z.ZodOptional<z.ZodString>;
                total_capacity_in_bytes: z.ZodOptional<z.ZodNumber>;
                used: z.ZodOptional<z.ZodString>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            classes: z.ZodOptional<z.ZodObject<{
                current_loaded_count: z.ZodOptional<z.ZodNumber>;
                total_loaded_count: z.ZodOptional<z.ZodNumber>;
                total_unloaded_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            gc: z.ZodOptional<z.ZodObject<{
                collectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    collection_count: z.ZodOptional<z.ZodNumber>;
                    collection_time: z.ZodOptional<z.ZodString>;
                    collection_time_in_millis: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                heap_used_percent: z.ZodOptional<z.ZodNumber>;
                heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
                heap_max_in_bytes: z.ZodOptional<z.ZodNumber>;
                heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                non_heap_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                non_heap_committed_in_bytes: z.ZodOptional<z.ZodNumber>;
                pools: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    used_in_bytes: z.ZodOptional<z.ZodNumber>;
                    max_in_bytes: z.ZodOptional<z.ZodNumber>;
                    peak_used_in_bytes: z.ZodOptional<z.ZodNumber>;
                    peak_max_in_bytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            threads: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                peak_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            timestamp: z.ZodOptional<z.ZodNumber>;
            uptime: z.ZodOptional<z.ZodString>;
            uptime_in_millis: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        name: z.ZodOptional<z.ZodString>;
        os: z.ZodOptional<z.ZodObject<{
            cpu: z.ZodOptional<z.ZodObject<{
                percent: z.ZodOptional<z.ZodNumber>;
                sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                sys_in_millis: z.ZodOptional<z.ZodAny>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_in_millis: z.ZodOptional<z.ZodAny>;
                user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                user_in_millis: z.ZodOptional<z.ZodAny>;
                load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                free_percent: z.ZodOptional<z.ZodNumber>;
                used_percent: z.ZodOptional<z.ZodNumber>;
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                resident: z.ZodOptional<z.ZodString>;
                resident_in_bytes: z.ZodOptional<z.ZodNumber>;
                share: z.ZodOptional<z.ZodString>;
                share_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_virtual: z.ZodOptional<z.ZodString>;
                total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            swap: z.ZodOptional<z.ZodObject<{
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                resident: z.ZodOptional<z.ZodString>;
                resident_in_bytes: z.ZodOptional<z.ZodNumber>;
                share: z.ZodOptional<z.ZodString>;
                share_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_virtual: z.ZodOptional<z.ZodString>;
                total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            cgroup: z.ZodOptional<z.ZodObject<{
                cpuacct: z.ZodOptional<z.ZodObject<{
                    control_group: z.ZodOptional<z.ZodString>;
                    usage_nanos: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                cpu: z.ZodOptional<z.ZodObject<{
                    control_group: z.ZodOptional<z.ZodString>;
                    cfs_period_micros: z.ZodOptional<z.ZodNumber>;
                    cfs_quota_micros: z.ZodOptional<z.ZodNumber>;
                    stat: z.ZodOptional<z.ZodObject<{
                        number_of_elapsed_periods: z.ZodOptional<z.ZodNumber>;
                        number_of_times_throttled: z.ZodOptional<z.ZodNumber>;
                        time_throttled_nanos: z.ZodOptional<z.ZodAny>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                memory: z.ZodOptional<z.ZodObject<{
                    control_group: z.ZodOptional<z.ZodString>;
                    limit_in_bytes: z.ZodOptional<z.ZodString>;
                    usage_in_bytes: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            timestamp: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        process: z.ZodOptional<z.ZodObject<{
            cpu: z.ZodOptional<z.ZodObject<{
                percent: z.ZodOptional<z.ZodNumber>;
                sys: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                sys_in_millis: z.ZodOptional<z.ZodAny>;
                total: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                total_in_millis: z.ZodOptional<z.ZodAny>;
                user: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                user_in_millis: z.ZodOptional<z.ZodAny>;
                load_average: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                adjusted_total_in_bytes: z.ZodOptional<z.ZodNumber>;
                resident: z.ZodOptional<z.ZodString>;
                resident_in_bytes: z.ZodOptional<z.ZodNumber>;
                share: z.ZodOptional<z.ZodString>;
                share_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_virtual: z.ZodOptional<z.ZodString>;
                total_virtual_in_bytes: z.ZodOptional<z.ZodNumber>;
                total_in_bytes: z.ZodOptional<z.ZodNumber>;
                free_in_bytes: z.ZodOptional<z.ZodNumber>;
                used_in_bytes: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            open_file_descriptors: z.ZodOptional<z.ZodNumber>;
            max_file_descriptors: z.ZodOptional<z.ZodNumber>;
            timestamp: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            master: "master";
            ingest: "ingest";
            ml: "ml";
            transform: "transform";
            data: "data";
            client: "client";
            data_hot: "data_hot";
            data_content: "data_content";
            data_warm: "data_warm";
            data_cold: "data_cold";
            data_frozen: "data_frozen";
            remote_cluster_client: "remote_cluster_client";
            voting_only: "voting_only";
            coordinating_only: "coordinating_only";
        }>>>;
        script: z.ZodOptional<z.ZodObject<{
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilations: z.ZodOptional<z.ZodNumber>;
            compilations_history: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            contexts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                context: z.ZodOptional<z.ZodString>;
                compilations: z.ZodOptional<z.ZodNumber>;
                cache_evictions: z.ZodOptional<z.ZodNumber>;
                compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        script_cache: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            compilations: z.ZodOptional<z.ZodNumber>;
            context: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>, z.ZodArray<z.ZodObject<{
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
            compilations: z.ZodOptional<z.ZodNumber>;
            context: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>]>>>;
        thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            active: z.ZodOptional<z.ZodNumber>;
            completed: z.ZodOptional<z.ZodNumber>;
            largest: z.ZodOptional<z.ZodNumber>;
            queue: z.ZodOptional<z.ZodNumber>;
            rejected: z.ZodOptional<z.ZodNumber>;
            threads: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        timestamp: z.ZodOptional<z.ZodNumber>;
        transport: z.ZodOptional<z.ZodObject<{
            inbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                lt_millis: z.ZodOptional<z.ZodNumber>;
                ge_millis: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            outbound_handling_time_histogram: z.ZodOptional<z.ZodArray<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                lt_millis: z.ZodOptional<z.ZodNumber>;
                ge_millis: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>>;
            rx_count: z.ZodOptional<z.ZodNumber>;
            rx_size: z.ZodOptional<z.ZodString>;
            rx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            server_open: z.ZodOptional<z.ZodNumber>;
            tx_count: z.ZodOptional<z.ZodNumber>;
            tx_size: z.ZodOptional<z.ZodString>;
            tx_size_in_bytes: z.ZodOptional<z.ZodNumber>;
            total_outbound_connections: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        transport_address: z.ZodOptional<z.ZodString>;
        attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        discovery: z.ZodOptional<z.ZodObject<{
            cluster_state_queue: z.ZodOptional<z.ZodObject<{
                total: z.ZodOptional<z.ZodNumber>;
                pending: z.ZodOptional<z.ZodNumber>;
                committed: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            published_cluster_states: z.ZodOptional<z.ZodObject<{
                full_states: z.ZodOptional<z.ZodNumber>;
                incompatible_diffs: z.ZodOptional<z.ZodNumber>;
                compatible_diffs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            cluster_state_update: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                count: z.ZodNumber;
                computation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                computation_time_millis: z.ZodOptional<z.ZodAny>;
                publication_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                publication_time_millis: z.ZodOptional<z.ZodAny>;
                context_construction_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                context_construction_time_millis: z.ZodOptional<z.ZodAny>;
                commit_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                commit_time_millis: z.ZodOptional<z.ZodAny>;
                completion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                completion_time_millis: z.ZodOptional<z.ZodAny>;
                master_apply_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                master_apply_time_millis: z.ZodOptional<z.ZodAny>;
                notification_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                notification_time_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>>;
            serialized_cluster_states: z.ZodOptional<z.ZodObject<{
                full_states: z.ZodOptional<z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    uncompressed_size: z.ZodOptional<z.ZodString>;
                    uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                    compressed_size: z.ZodOptional<z.ZodString>;
                    compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                diffs: z.ZodOptional<z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    uncompressed_size: z.ZodOptional<z.ZodString>;
                    uncompressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                    compressed_size: z.ZodOptional<z.ZodString>;
                    compressed_size_in_bytes: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            cluster_applier_stats: z.ZodOptional<z.ZodObject<{
                recordings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    cumulative_execution_count: z.ZodOptional<z.ZodNumber>;
                    cumulative_execution_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    cumulative_execution_time_millis: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        indexing_pressure: z.ZodOptional<z.ZodObject<{
            memory: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        indices: z.ZodOptional<z.ZodLazy<z.ZodObject<{
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
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
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
export type NodesStatsResponse = z.infer<typeof NodesStatsResponse>;
//# sourceMappingURL=nodes_stats.d.ts.map