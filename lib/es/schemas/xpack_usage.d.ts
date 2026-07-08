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
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const uint: z.ZodNumber;
export type uint = z.infer<typeof uint>;
export declare const ulong: z.ZodNumber;
export type ulong = z.infer<typeof ulong>;
export declare const MlJobStatistics: z.ZodObject<{
    avg: z.ZodNumber;
    max: z.ZodNumber;
    min: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type MlJobStatistics = z.infer<typeof MlJobStatistics>;
export declare const SlmStatistics: z.ZodObject<{
    retention_deletion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    retention_deletion_time_millis: z.ZodOptional<z.ZodAny>;
    retention_failed: z.ZodOptional<z.ZodNumber>;
    retention_runs: z.ZodOptional<z.ZodNumber>;
    retention_timed_out: z.ZodOptional<z.ZodNumber>;
    policy: z.ZodOptional<z.ZodString>;
    total_snapshots_deleted: z.ZodOptional<z.ZodNumber>;
    snapshots_deleted: z.ZodOptional<z.ZodNumber>;
    total_snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
    snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
    total_snapshots_failed: z.ZodOptional<z.ZodNumber>;
    snapshots_failed: z.ZodOptional<z.ZodNumber>;
    total_snapshots_taken: z.ZodOptional<z.ZodNumber>;
    snapshots_taken: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type SlmStatistics = z.infer<typeof SlmStatistics>;
export declare const XpackUsageBase: z.ZodObject<{
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageBase = z.infer<typeof XpackUsageBase>;
export declare const XpackUsageAnalyticsStatistics: z.ZodObject<{
    boxplot_usage: z.ZodNumber;
    cumulative_cardinality_usage: z.ZodNumber;
    string_stats_usage: z.ZodNumber;
    top_metrics_usage: z.ZodNumber;
    t_test_usage: z.ZodNumber;
    moving_percentiles_usage: z.ZodNumber;
    normalize_usage: z.ZodNumber;
    rate_usage: z.ZodNumber;
    multi_terms_usage: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type XpackUsageAnalyticsStatistics = z.infer<typeof XpackUsageAnalyticsStatistics>;
export declare const XpackUsageAnalytics: z.ZodObject<{
    stats: z.ZodObject<{
        boxplot_usage: z.ZodNumber;
        cumulative_cardinality_usage: z.ZodNumber;
        string_stats_usage: z.ZodNumber;
        top_metrics_usage: z.ZodNumber;
        t_test_usage: z.ZodNumber;
        moving_percentiles_usage: z.ZodNumber;
        normalize_usage: z.ZodNumber;
        rate_usage: z.ZodNumber;
        multi_terms_usage: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageAnalytics = z.infer<typeof XpackUsageAnalytics>;
export declare const XpackUsageArchive: z.ZodObject<{
    indices_count: z.ZodNumber;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageArchive = z.infer<typeof XpackUsageArchive>;
export declare const XpackUsageFeatureToggle: z.ZodObject<{
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageFeatureToggle = z.infer<typeof XpackUsageFeatureToggle>;
export declare const XpackUsageAudit: z.ZodObject<{
    outputs: z.ZodOptional<z.ZodArray<z.ZodString>>;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageAudit = z.infer<typeof XpackUsageAudit>;
export declare const XpackUsageCcr: z.ZodObject<{
    auto_follow_patterns_count: z.ZodNumber;
    follower_indices_count: z.ZodNumber;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageCcr = z.infer<typeof XpackUsageCcr>;
export declare const XpackUsageCounter: z.ZodObject<{
    active: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageCounter = z.infer<typeof XpackUsageCounter>;
export declare const XpackUsageDataStreams: z.ZodObject<{
    data_streams: z.ZodNumber;
    indices_count: z.ZodNumber;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageDataStreams = z.infer<typeof XpackUsageDataStreams>;
export declare const XpackUsageDataTierPhaseStatistics: z.ZodObject<{
    node_count: z.ZodNumber;
    index_count: z.ZodNumber;
    total_shard_count: z.ZodNumber;
    primary_shard_count: z.ZodNumber;
    doc_count: z.ZodNumber;
    total_size_bytes: z.ZodNumber;
    primary_size_bytes: z.ZodNumber;
    primary_shard_size_avg_bytes: z.ZodNumber;
    primary_shard_size_median_bytes: z.ZodNumber;
    primary_shard_size_mad_bytes: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageDataTierPhaseStatistics = z.infer<typeof XpackUsageDataTierPhaseStatistics>;
export declare const XpackUsageDataTiers: z.ZodObject<{
    data_warm: z.ZodObject<{
        node_count: z.ZodNumber;
        index_count: z.ZodNumber;
        total_shard_count: z.ZodNumber;
        primary_shard_count: z.ZodNumber;
        doc_count: z.ZodNumber;
        total_size_bytes: z.ZodNumber;
        primary_size_bytes: z.ZodNumber;
        primary_shard_size_avg_bytes: z.ZodNumber;
        primary_shard_size_median_bytes: z.ZodNumber;
        primary_shard_size_mad_bytes: z.ZodNumber;
    }, z.core.$strip>;
    data_frozen: z.ZodOptional<z.ZodObject<{
        node_count: z.ZodNumber;
        index_count: z.ZodNumber;
        total_shard_count: z.ZodNumber;
        primary_shard_count: z.ZodNumber;
        doc_count: z.ZodNumber;
        total_size_bytes: z.ZodNumber;
        primary_size_bytes: z.ZodNumber;
        primary_shard_size_avg_bytes: z.ZodNumber;
        primary_shard_size_median_bytes: z.ZodNumber;
        primary_shard_size_mad_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    data_cold: z.ZodObject<{
        node_count: z.ZodNumber;
        index_count: z.ZodNumber;
        total_shard_count: z.ZodNumber;
        primary_shard_count: z.ZodNumber;
        doc_count: z.ZodNumber;
        total_size_bytes: z.ZodNumber;
        primary_size_bytes: z.ZodNumber;
        primary_shard_size_avg_bytes: z.ZodNumber;
        primary_shard_size_median_bytes: z.ZodNumber;
        primary_shard_size_mad_bytes: z.ZodNumber;
    }, z.core.$strip>;
    data_content: z.ZodObject<{
        node_count: z.ZodNumber;
        index_count: z.ZodNumber;
        total_shard_count: z.ZodNumber;
        primary_shard_count: z.ZodNumber;
        doc_count: z.ZodNumber;
        total_size_bytes: z.ZodNumber;
        primary_size_bytes: z.ZodNumber;
        primary_shard_size_avg_bytes: z.ZodNumber;
        primary_shard_size_median_bytes: z.ZodNumber;
        primary_shard_size_mad_bytes: z.ZodNumber;
    }, z.core.$strip>;
    data_hot: z.ZodObject<{
        node_count: z.ZodNumber;
        index_count: z.ZodNumber;
        total_shard_count: z.ZodNumber;
        primary_shard_count: z.ZodNumber;
        doc_count: z.ZodNumber;
        total_size_bytes: z.ZodNumber;
        primary_size_bytes: z.ZodNumber;
        primary_shard_size_avg_bytes: z.ZodNumber;
        primary_shard_size_median_bytes: z.ZodNumber;
        primary_shard_size_mad_bytes: z.ZodNumber;
    }, z.core.$strip>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageDataTiers = z.infer<typeof XpackUsageDataTiers>;
export declare const XpackUsageDatafeed: z.ZodObject<{
    count: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageDatafeed = z.infer<typeof XpackUsageDatafeed>;
export declare const XpackUsageEqlFeaturesJoin: z.ZodObject<{
    join_queries_two: z.ZodNumber;
    join_queries_three: z.ZodNumber;
    join_until: z.ZodNumber;
    join_queries_five_or_more: z.ZodNumber;
    join_queries_four: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageEqlFeaturesJoin = z.infer<typeof XpackUsageEqlFeaturesJoin>;
export declare const XpackUsageEqlFeaturesKeys: z.ZodObject<{
    join_keys_two: z.ZodNumber;
    join_keys_one: z.ZodNumber;
    join_keys_three: z.ZodNumber;
    join_keys_five_or_more: z.ZodNumber;
    join_keys_four: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageEqlFeaturesKeys = z.infer<typeof XpackUsageEqlFeaturesKeys>;
export declare const XpackUsageEqlFeaturesPipes: z.ZodObject<{
    pipe_tail: z.ZodNumber;
    pipe_head: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageEqlFeaturesPipes = z.infer<typeof XpackUsageEqlFeaturesPipes>;
export declare const XpackUsageEqlFeaturesSequences: z.ZodObject<{
    sequence_queries_three: z.ZodNumber;
    sequence_queries_four: z.ZodNumber;
    sequence_queries_two: z.ZodNumber;
    sequence_until: z.ZodNumber;
    sequence_queries_five_or_more: z.ZodNumber;
    sequence_maxspan: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageEqlFeaturesSequences = z.infer<typeof XpackUsageEqlFeaturesSequences>;
export declare const XpackUsageEqlFeatures: z.ZodObject<{
    join: z.ZodNumber;
    joins: z.ZodObject<{
        join_queries_two: z.ZodNumber;
        join_queries_three: z.ZodNumber;
        join_until: z.ZodNumber;
        join_queries_five_or_more: z.ZodNumber;
        join_queries_four: z.ZodNumber;
    }, z.core.$strip>;
    keys: z.ZodObject<{
        join_keys_two: z.ZodNumber;
        join_keys_one: z.ZodNumber;
        join_keys_three: z.ZodNumber;
        join_keys_five_or_more: z.ZodNumber;
        join_keys_four: z.ZodNumber;
    }, z.core.$strip>;
    event: z.ZodNumber;
    pipes: z.ZodObject<{
        pipe_tail: z.ZodNumber;
        pipe_head: z.ZodNumber;
    }, z.core.$strip>;
    sequence: z.ZodNumber;
    sequences: z.ZodObject<{
        sequence_queries_three: z.ZodNumber;
        sequence_queries_four: z.ZodNumber;
        sequence_queries_two: z.ZodNumber;
        sequence_until: z.ZodNumber;
        sequence_queries_five_or_more: z.ZodNumber;
        sequence_maxspan: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageEqlFeatures = z.infer<typeof XpackUsageEqlFeatures>;
export declare const XpackUsageQuery: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    failed: z.ZodOptional<z.ZodNumber>;
    paging: z.ZodOptional<z.ZodNumber>;
    total: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type XpackUsageQuery = z.infer<typeof XpackUsageQuery>;
export declare const XpackUsageEql: z.ZodObject<{
    features: z.ZodObject<{
        join: z.ZodNumber;
        joins: z.ZodObject<{
            join_queries_two: z.ZodNumber;
            join_queries_three: z.ZodNumber;
            join_until: z.ZodNumber;
            join_queries_five_or_more: z.ZodNumber;
            join_queries_four: z.ZodNumber;
        }, z.core.$strip>;
        keys: z.ZodObject<{
            join_keys_two: z.ZodNumber;
            join_keys_one: z.ZodNumber;
            join_keys_three: z.ZodNumber;
            join_keys_five_or_more: z.ZodNumber;
            join_keys_four: z.ZodNumber;
        }, z.core.$strip>;
        event: z.ZodNumber;
        pipes: z.ZodObject<{
            pipe_tail: z.ZodNumber;
            pipe_head: z.ZodNumber;
        }, z.core.$strip>;
        sequence: z.ZodNumber;
        sequences: z.ZodObject<{
            sequence_queries_three: z.ZodNumber;
            sequence_queries_four: z.ZodNumber;
            sequence_queries_two: z.ZodNumber;
            sequence_until: z.ZodNumber;
            sequence_queries_five_or_more: z.ZodNumber;
            sequence_maxspan: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    queries: z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        failed: z.ZodOptional<z.ZodNumber>;
        paging: z.ZodOptional<z.ZodNumber>;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageEql = z.infer<typeof XpackUsageEql>;
export declare const XpackUsageFlattened: z.ZodObject<{
    field_count: z.ZodNumber;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageFlattened = z.infer<typeof XpackUsageFlattened>;
export declare const XpackUsageInvocations: z.ZodObject<{
    total: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageInvocations = z.infer<typeof XpackUsageInvocations>;
export declare const XpackUsageHealthStatistics: z.ZodObject<{
    invocations: z.ZodObject<{
        total: z.ZodNumber;
    }, z.core.$strip>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageHealthStatistics = z.infer<typeof XpackUsageHealthStatistics>;
export declare const XpackUsagePhase: z.ZodObject<{
    actions: z.ZodArray<z.ZodString>;
    min_age: z.ZodAny;
}, z.core.$strip>;
export type XpackUsagePhase = z.infer<typeof XpackUsagePhase>;
export declare const XpackUsagePhases: z.ZodObject<{
    cold: z.ZodOptional<z.ZodObject<{
        actions: z.ZodArray<z.ZodString>;
        min_age: z.ZodAny;
    }, z.core.$strip>>;
    delete: z.ZodOptional<z.ZodObject<{
        actions: z.ZodArray<z.ZodString>;
        min_age: z.ZodAny;
    }, z.core.$strip>>;
    frozen: z.ZodOptional<z.ZodObject<{
        actions: z.ZodArray<z.ZodString>;
        min_age: z.ZodAny;
    }, z.core.$strip>>;
    hot: z.ZodOptional<z.ZodObject<{
        actions: z.ZodArray<z.ZodString>;
        min_age: z.ZodAny;
    }, z.core.$strip>>;
    warm: z.ZodOptional<z.ZodObject<{
        actions: z.ZodArray<z.ZodString>;
        min_age: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackUsagePhases = z.infer<typeof XpackUsagePhases>;
export declare const XpackUsageIlmPolicyStatistics: z.ZodObject<{
    indices_managed: z.ZodNumber;
    phases: z.ZodObject<{
        cold: z.ZodOptional<z.ZodObject<{
            actions: z.ZodArray<z.ZodString>;
            min_age: z.ZodAny;
        }, z.core.$strip>>;
        delete: z.ZodOptional<z.ZodObject<{
            actions: z.ZodArray<z.ZodString>;
            min_age: z.ZodAny;
        }, z.core.$strip>>;
        frozen: z.ZodOptional<z.ZodObject<{
            actions: z.ZodArray<z.ZodString>;
            min_age: z.ZodAny;
        }, z.core.$strip>>;
        hot: z.ZodOptional<z.ZodObject<{
            actions: z.ZodArray<z.ZodString>;
            min_age: z.ZodAny;
        }, z.core.$strip>>;
        warm: z.ZodOptional<z.ZodObject<{
            actions: z.ZodArray<z.ZodString>;
            min_age: z.ZodAny;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageIlmPolicyStatistics = z.infer<typeof XpackUsageIlmPolicyStatistics>;
export declare const XpackUsageIlm: z.ZodObject<{
    policy_count: z.ZodNumber;
    policy_stats: z.ZodArray<z.ZodObject<{
        indices_managed: z.ZodNumber;
        phases: z.ZodObject<{
            cold: z.ZodOptional<z.ZodObject<{
                actions: z.ZodArray<z.ZodString>;
                min_age: z.ZodAny;
            }, z.core.$strip>>;
            delete: z.ZodOptional<z.ZodObject<{
                actions: z.ZodArray<z.ZodString>;
                min_age: z.ZodAny;
            }, z.core.$strip>>;
            frozen: z.ZodOptional<z.ZodObject<{
                actions: z.ZodArray<z.ZodString>;
                min_age: z.ZodAny;
            }, z.core.$strip>>;
            hot: z.ZodOptional<z.ZodObject<{
                actions: z.ZodArray<z.ZodString>;
                min_age: z.ZodAny;
            }, z.core.$strip>>;
            warm: z.ZodOptional<z.ZodObject<{
                actions: z.ZodArray<z.ZodString>;
                min_age: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackUsageIlm = z.infer<typeof XpackUsageIlm>;
export declare const XpackUsageIpFilter: z.ZodObject<{
    http: z.ZodBoolean;
    transport: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageIpFilter = z.infer<typeof XpackUsageIpFilter>;
export declare const XpackUsageMlJobForecasts: z.ZodObject<{
    total: z.ZodNumber;
    forecasted_jobs: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageMlJobForecasts = z.infer<typeof XpackUsageMlJobForecasts>;
export declare const XpackUsageJobUsage: z.ZodObject<{
    count: z.ZodNumber;
    created_by: z.ZodRecord<z.ZodString, z.ZodNumber>;
    detectors: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    forecasts: z.ZodObject<{
        total: z.ZodNumber;
        forecasted_jobs: z.ZodNumber;
    }, z.core.$strip>;
    model_size: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageJobUsage = z.infer<typeof XpackUsageJobUsage>;
export declare const XpackUsageMlDataFrameAnalyticsJobsMemory: z.ZodObject<{
    peak_usage_bytes: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageMlDataFrameAnalyticsJobsMemory = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobsMemory>;
export declare const XpackUsageMlDataFrameAnalyticsJobsCount: z.ZodObject<{
    count: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageMlDataFrameAnalyticsJobsCount = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobsCount>;
export declare const XpackUsageMlDataFrameAnalyticsJobsAnalysis: z.ZodObject<{
    classification: z.ZodOptional<z.ZodNumber>;
    outlier_detection: z.ZodOptional<z.ZodNumber>;
    regression: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type XpackUsageMlDataFrameAnalyticsJobsAnalysis = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobsAnalysis>;
export declare const XpackUsageMlDataFrameAnalyticsJobs: z.ZodObject<{
    memory_usage: z.ZodOptional<z.ZodObject<{
        peak_usage_bytes: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    _all: z.ZodObject<{
        count: z.ZodNumber;
    }, z.core.$strip>;
    analysis_counts: z.ZodOptional<z.ZodObject<{
        classification: z.ZodOptional<z.ZodNumber>;
        outlier_detection: z.ZodOptional<z.ZodNumber>;
        regression: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    stopped: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackUsageMlDataFrameAnalyticsJobs = z.infer<typeof XpackUsageMlDataFrameAnalyticsJobs>;
export declare const XpackUsageMlInferenceIngestProcessorCount: z.ZodObject<{
    max: z.ZodNumber;
    sum: z.ZodNumber;
    min: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageMlInferenceIngestProcessorCount = z.infer<typeof XpackUsageMlInferenceIngestProcessorCount>;
export declare const XpackUsageMlCounter: z.ZodObject<{
    count: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageMlCounter = z.infer<typeof XpackUsageMlCounter>;
export declare const XpackUsageMlInferenceIngestProcessor: z.ZodObject<{
    num_docs_processed: z.ZodObject<{
        max: z.ZodNumber;
        sum: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
    pipelines: z.ZodObject<{
        count: z.ZodNumber;
    }, z.core.$strip>;
    num_failures: z.ZodObject<{
        max: z.ZodNumber;
        sum: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
    time_ms: z.ZodObject<{
        max: z.ZodNumber;
        sum: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageMlInferenceIngestProcessor = z.infer<typeof XpackUsageMlInferenceIngestProcessor>;
export declare const XpackUsageMlInferenceTrainedModelsCount: z.ZodObject<{
    total: z.ZodNumber;
    prepackaged: z.ZodNumber;
    other: z.ZodNumber;
    pass_through: z.ZodOptional<z.ZodNumber>;
    regression: z.ZodOptional<z.ZodNumber>;
    classification: z.ZodOptional<z.ZodNumber>;
    ner: z.ZodOptional<z.ZodNumber>;
    text_embedding: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type XpackUsageMlInferenceTrainedModelsCount = z.infer<typeof XpackUsageMlInferenceTrainedModelsCount>;
export declare const XpackUsageMlInferenceTrainedModels: z.ZodObject<{
    estimated_operations: z.ZodOptional<z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    estimated_heap_memory_usage_bytes: z.ZodOptional<z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    count: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        prepackaged: z.ZodNumber;
        other: z.ZodNumber;
        pass_through: z.ZodOptional<z.ZodNumber>;
        regression: z.ZodOptional<z.ZodNumber>;
        classification: z.ZodOptional<z.ZodNumber>;
        ner: z.ZodOptional<z.ZodNumber>;
        text_embedding: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    _all: z.ZodObject<{
        count: z.ZodNumber;
    }, z.core.$strip>;
    model_size_bytes: z.ZodOptional<z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackUsageMlInferenceTrainedModels = z.infer<typeof XpackUsageMlInferenceTrainedModels>;
export declare const XpackUsageMlInferenceDeploymentsTimeMs: z.ZodObject<{
    avg: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageMlInferenceDeploymentsTimeMs = z.infer<typeof XpackUsageMlInferenceDeploymentsTimeMs>;
export declare const XpackUsageMlInferenceDeployments: z.ZodObject<{
    count: z.ZodNumber;
    inference_counts: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    model_sizes_bytes: z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    time_ms: z.ZodObject<{
        avg: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageMlInferenceDeployments = z.infer<typeof XpackUsageMlInferenceDeployments>;
export declare const XpackUsageMlInference: z.ZodObject<{
    ingest_processors: z.ZodRecord<z.ZodString, z.ZodObject<{
        num_docs_processed: z.ZodObject<{
            max: z.ZodNumber;
            sum: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
        pipelines: z.ZodObject<{
            count: z.ZodNumber;
        }, z.core.$strip>;
        num_failures: z.ZodObject<{
            max: z.ZodNumber;
            sum: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
        time_ms: z.ZodObject<{
            max: z.ZodNumber;
            sum: z.ZodNumber;
            min: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    trained_models: z.ZodObject<{
        estimated_operations: z.ZodOptional<z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        estimated_heap_memory_usage_bytes: z.ZodOptional<z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        count: z.ZodOptional<z.ZodObject<{
            total: z.ZodNumber;
            prepackaged: z.ZodNumber;
            other: z.ZodNumber;
            pass_through: z.ZodOptional<z.ZodNumber>;
            regression: z.ZodOptional<z.ZodNumber>;
            classification: z.ZodOptional<z.ZodNumber>;
            ner: z.ZodOptional<z.ZodNumber>;
            text_embedding: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        _all: z.ZodObject<{
            count: z.ZodNumber;
        }, z.core.$strip>;
        model_size_bytes: z.ZodOptional<z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    deployments: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        inference_counts: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        model_sizes_bytes: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        time_ms: z.ZodObject<{
            avg: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackUsageMlInference = z.infer<typeof XpackUsageMlInference>;
export declare const XpackUsageMachineLearning: z.ZodObject<{
    datafeeds: z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
    }, z.core.$strip>>;
    jobs: z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        created_by: z.ZodRecord<z.ZodString, z.ZodNumber>;
        detectors: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        forecasts: z.ZodObject<{
            total: z.ZodNumber;
            forecasted_jobs: z.ZodNumber;
        }, z.core.$strip>;
        model_size: z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    node_count: z.ZodNumber;
    data_frame_analytics_jobs: z.ZodObject<{
        memory_usage: z.ZodOptional<z.ZodObject<{
            peak_usage_bytes: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        _all: z.ZodObject<{
            count: z.ZodNumber;
        }, z.core.$strip>;
        analysis_counts: z.ZodOptional<z.ZodObject<{
            classification: z.ZodOptional<z.ZodNumber>;
            outlier_detection: z.ZodOptional<z.ZodNumber>;
            regression: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        stopped: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    inference: z.ZodObject<{
        ingest_processors: z.ZodRecord<z.ZodString, z.ZodObject<{
            num_docs_processed: z.ZodObject<{
                max: z.ZodNumber;
                sum: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
            pipelines: z.ZodObject<{
                count: z.ZodNumber;
            }, z.core.$strip>;
            num_failures: z.ZodObject<{
                max: z.ZodNumber;
                sum: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
            time_ms: z.ZodObject<{
                max: z.ZodNumber;
                sum: z.ZodNumber;
                min: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        trained_models: z.ZodObject<{
            estimated_operations: z.ZodOptional<z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            estimated_heap_memory_usage_bytes: z.ZodOptional<z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            count: z.ZodOptional<z.ZodObject<{
                total: z.ZodNumber;
                prepackaged: z.ZodNumber;
                other: z.ZodNumber;
                pass_through: z.ZodOptional<z.ZodNumber>;
                regression: z.ZodOptional<z.ZodNumber>;
                classification: z.ZodOptional<z.ZodNumber>;
                ner: z.ZodOptional<z.ZodNumber>;
                text_embedding: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            _all: z.ZodObject<{
                count: z.ZodNumber;
            }, z.core.$strip>;
            model_size_bytes: z.ZodOptional<z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        deployments: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            inference_counts: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            model_sizes_bytes: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            time_ms: z.ZodObject<{
                avg: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageMachineLearning = z.infer<typeof XpackUsageMachineLearning>;
export declare const XpackUsageMonitoring: z.ZodObject<{
    collection_enabled: z.ZodBoolean;
    enabled_exporters: z.ZodRecord<z.ZodString, z.ZodNumber>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageMonitoring = z.infer<typeof XpackUsageMonitoring>;
export declare const XpackUsageRealmCache: z.ZodObject<{
    size: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageRealmCache = z.infer<typeof XpackUsageRealmCache>;
export declare const XpackUsageRealm: z.ZodObject<{
    name: z.ZodOptional<z.ZodArray<z.ZodString>>;
    order: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    size: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    cache: z.ZodOptional<z.ZodArray<z.ZodObject<{
        size: z.ZodNumber;
    }, z.core.$strip>>>;
    has_authorization_realms: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
    has_default_username_pattern: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
    has_truststore: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
    is_authentication_delegated: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageRealm = z.infer<typeof XpackUsageRealm>;
/**
 * Get usage information.
 *
 * Get information about the features that are currently enabled and available under the current license.
 * The API also provides some usage statistics.
 */
export declare const XpackUsageRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type XpackUsageRequest = z.infer<typeof XpackUsageRequest>;
export declare const XpackUsageWatcherActionTotals: z.ZodObject<{
    total: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    total_time_in_ms: z.ZodAny;
}, z.core.$strip>;
export type XpackUsageWatcherActionTotals = z.infer<typeof XpackUsageWatcherActionTotals>;
export declare const XpackUsageWatcherActions: z.ZodObject<{
    actions: z.ZodRecord<z.ZodString, z.ZodObject<{
        total: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        total_time_in_ms: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type XpackUsageWatcherActions = z.infer<typeof XpackUsageWatcherActions>;
export declare const XpackUsageWatcherWatchTriggerSchedule: z.ZodObject<{
    cron: z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    _all: z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    active: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageWatcherWatchTriggerSchedule = z.infer<typeof XpackUsageWatcherWatchTriggerSchedule>;
export declare const XpackUsageWatcherWatchTrigger: z.ZodObject<{
    schedule: z.ZodOptional<z.ZodObject<{
        cron: z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        _all: z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    _all: z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageWatcherWatchTrigger = z.infer<typeof XpackUsageWatcherWatchTrigger>;
export declare const XpackUsageWatcherWatch: z.ZodObject<{
    input: z.ZodRecord<z.ZodString, z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    condition: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>>;
    action: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>>;
    trigger: z.ZodObject<{
        schedule: z.ZodOptional<z.ZodObject<{
            cron: z.ZodObject<{
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            _all: z.ZodObject<{
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        _all: z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageWatcherWatch = z.infer<typeof XpackUsageWatcherWatch>;
export declare const XpackUsageWatcher: z.ZodObject<{
    execution: z.ZodObject<{
        actions: z.ZodRecord<z.ZodString, z.ZodObject<{
            total: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
            total_time_in_ms: z.ZodAny;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    watch: z.ZodObject<{
        input: z.ZodRecord<z.ZodString, z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        condition: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>>;
        action: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>>;
        trigger: z.ZodObject<{
            schedule: z.ZodOptional<z.ZodObject<{
                cron: z.ZodObject<{
                    active: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>;
                _all: z.ZodObject<{
                    active: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>;
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            _all: z.ZodObject<{
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    count: z.ZodObject<{
        active: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageWatcher = z.infer<typeof XpackUsageWatcher>;
export declare const XpackUsageRuntimeFieldsType: z.ZodObject<{
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
export type XpackUsageRuntimeFieldsType = z.infer<typeof XpackUsageRuntimeFieldsType>;
export declare const XpackUsageRuntimeFieldTypes: z.ZodObject<{
    field_types: z.ZodArray<z.ZodObject<{
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
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageRuntimeFieldTypes = z.infer<typeof XpackUsageRuntimeFieldTypes>;
export declare const XpackUsageSearchableSnapshots: z.ZodObject<{
    indices_count: z.ZodNumber;
    full_copy_indices_count: z.ZodOptional<z.ZodNumber>;
    shared_cache_indices_count: z.ZodOptional<z.ZodNumber>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageSearchableSnapshots = z.infer<typeof XpackUsageSearchableSnapshots>;
export declare const XpackUsageRoleMapping: z.ZodObject<{
    enabled: z.ZodNumber;
    size: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageRoleMapping = z.infer<typeof XpackUsageRoleMapping>;
export declare const XpackUsageSecurityRolesNative: z.ZodObject<{
    dls: z.ZodBoolean;
    fls: z.ZodBoolean;
    size: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageSecurityRolesNative = z.infer<typeof XpackUsageSecurityRolesNative>;
export declare const XpackUsageSecurityRolesDlsBitSetCache: z.ZodObject<{
    count: z.ZodNumber;
    memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    memory_in_bytes: z.ZodNumber;
    hits: z.ZodNumber;
    misses: z.ZodNumber;
    evictions: z.ZodNumber;
    hits_time_in_millis: z.ZodAny;
    misses_time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type XpackUsageSecurityRolesDlsBitSetCache = z.infer<typeof XpackUsageSecurityRolesDlsBitSetCache>;
export declare const XpackUsageSecurityRolesDls: z.ZodObject<{
    bit_set_cache: z.ZodObject<{
        count: z.ZodNumber;
        memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        memory_in_bytes: z.ZodNumber;
        hits: z.ZodNumber;
        misses: z.ZodNumber;
        evictions: z.ZodNumber;
        hits_time_in_millis: z.ZodAny;
        misses_time_in_millis: z.ZodAny;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageSecurityRolesDls = z.infer<typeof XpackUsageSecurityRolesDls>;
export declare const XpackUsageSecurityRolesFile: z.ZodObject<{
    dls: z.ZodBoolean;
    fls: z.ZodBoolean;
    size: z.ZodNumber;
}, z.core.$strip>;
export type XpackUsageSecurityRolesFile = z.infer<typeof XpackUsageSecurityRolesFile>;
export declare const XpackUsageSecurityRoles: z.ZodObject<{
    native: z.ZodObject<{
        dls: z.ZodBoolean;
        fls: z.ZodBoolean;
        size: z.ZodNumber;
    }, z.core.$strip>;
    dls: z.ZodObject<{
        bit_set_cache: z.ZodObject<{
            count: z.ZodNumber;
            memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            memory_in_bytes: z.ZodNumber;
            hits: z.ZodNumber;
            misses: z.ZodNumber;
            evictions: z.ZodNumber;
            hits_time_in_millis: z.ZodAny;
            misses_time_in_millis: z.ZodAny;
        }, z.core.$strip>;
    }, z.core.$strip>;
    file: z.ZodObject<{
        dls: z.ZodBoolean;
        fls: z.ZodBoolean;
        size: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageSecurityRoles = z.infer<typeof XpackUsageSecurityRoles>;
export declare const XpackUsageSsl: z.ZodObject<{
    http: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    transport: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageSsl = z.infer<typeof XpackUsageSsl>;
export declare const XpackUsageSecurity: z.ZodObject<{
    api_key_service: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    anonymous: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    audit: z.ZodObject<{
        outputs: z.ZodOptional<z.ZodArray<z.ZodString>>;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    fips_140: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    ipfilter: z.ZodObject<{
        http: z.ZodBoolean;
        transport: z.ZodBoolean;
    }, z.core.$strip>;
    realms: z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodOptional<z.ZodArray<z.ZodString>>;
        order: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        size: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        cache: z.ZodOptional<z.ZodArray<z.ZodObject<{
            size: z.ZodNumber;
        }, z.core.$strip>>>;
        has_authorization_realms: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
        has_default_username_pattern: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
        has_truststore: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
        is_authentication_delegated: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    role_mapping: z.ZodRecord<z.ZodString, z.ZodObject<{
        enabled: z.ZodNumber;
        size: z.ZodNumber;
    }, z.core.$strip>>;
    roles: z.ZodObject<{
        native: z.ZodObject<{
            dls: z.ZodBoolean;
            fls: z.ZodBoolean;
            size: z.ZodNumber;
        }, z.core.$strip>;
        dls: z.ZodObject<{
            bit_set_cache: z.ZodObject<{
                count: z.ZodNumber;
                memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                memory_in_bytes: z.ZodNumber;
                hits: z.ZodNumber;
                misses: z.ZodNumber;
                evictions: z.ZodNumber;
                hits_time_in_millis: z.ZodAny;
                misses_time_in_millis: z.ZodAny;
            }, z.core.$strip>;
        }, z.core.$strip>;
        file: z.ZodObject<{
            dls: z.ZodBoolean;
            fls: z.ZodBoolean;
            size: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    ssl: z.ZodObject<{
        http: z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        transport: z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
    }, z.core.$strip>;
    system_key: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    token_service: z.ZodObject<{
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    operator_privileges: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageSecurity = z.infer<typeof XpackUsageSecurity>;
export declare const XpackUsageSlm: z.ZodObject<{
    policy_count: z.ZodOptional<z.ZodNumber>;
    policy_stats: z.ZodOptional<z.ZodObject<{
        retention_deletion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        retention_deletion_time_millis: z.ZodOptional<z.ZodAny>;
        retention_failed: z.ZodOptional<z.ZodNumber>;
        retention_runs: z.ZodOptional<z.ZodNumber>;
        retention_timed_out: z.ZodOptional<z.ZodNumber>;
        policy: z.ZodOptional<z.ZodString>;
        total_snapshots_deleted: z.ZodOptional<z.ZodNumber>;
        snapshots_deleted: z.ZodOptional<z.ZodNumber>;
        total_snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
        snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
        total_snapshots_failed: z.ZodOptional<z.ZodNumber>;
        snapshots_failed: z.ZodOptional<z.ZodNumber>;
        total_snapshots_taken: z.ZodOptional<z.ZodNumber>;
        snapshots_taken: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageSlm = z.infer<typeof XpackUsageSlm>;
export declare const XpackUsageSql: z.ZodObject<{
    features: z.ZodRecord<z.ZodString, z.ZodNumber>;
    queries: z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        failed: z.ZodOptional<z.ZodNumber>;
        paging: z.ZodOptional<z.ZodNumber>;
        total: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageSql = z.infer<typeof XpackUsageSql>;
export declare const XpackUsageVector: z.ZodObject<{
    dense_vector_dims_avg_count: z.ZodNumber;
    dense_vector_fields_count: z.ZodNumber;
    sparse_vector_fields_count: z.ZodOptional<z.ZodNumber>;
    available: z.ZodBoolean;
    enabled: z.ZodBoolean;
}, z.core.$strip>;
export type XpackUsageVector = z.infer<typeof XpackUsageVector>;
export declare const XpackUsageResponse: z.ZodObject<{
    aggregate_metric: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    analytics: z.ZodObject<{
        stats: z.ZodObject<{
            boxplot_usage: z.ZodNumber;
            cumulative_cardinality_usage: z.ZodNumber;
            string_stats_usage: z.ZodNumber;
            top_metrics_usage: z.ZodNumber;
            t_test_usage: z.ZodNumber;
            moving_percentiles_usage: z.ZodNumber;
            normalize_usage: z.ZodNumber;
            rate_usage: z.ZodNumber;
            multi_terms_usage: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    archive: z.ZodObject<{
        indices_count: z.ZodNumber;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    watcher: z.ZodObject<{
        execution: z.ZodObject<{
            actions: z.ZodRecord<z.ZodString, z.ZodObject<{
                total: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
                total_time_in_ms: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        watch: z.ZodObject<{
            input: z.ZodRecord<z.ZodString, z.ZodObject<{
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            condition: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>>;
            action: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                active: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>>;
            trigger: z.ZodObject<{
                schedule: z.ZodOptional<z.ZodObject<{
                    cron: z.ZodObject<{
                        active: z.ZodNumber;
                        total: z.ZodNumber;
                    }, z.core.$strip>;
                    _all: z.ZodObject<{
                        active: z.ZodNumber;
                        total: z.ZodNumber;
                    }, z.core.$strip>;
                    active: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>>;
                _all: z.ZodObject<{
                    active: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        count: z.ZodObject<{
            active: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    ccr: z.ZodObject<{
        auto_follow_patterns_count: z.ZodNumber;
        follower_indices_count: z.ZodNumber;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    data_frame: z.ZodOptional<z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    data_science: z.ZodOptional<z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    data_streams: z.ZodOptional<z.ZodObject<{
        data_streams: z.ZodNumber;
        indices_count: z.ZodNumber;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    data_tiers: z.ZodObject<{
        data_warm: z.ZodObject<{
            node_count: z.ZodNumber;
            index_count: z.ZodNumber;
            total_shard_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            doc_count: z.ZodNumber;
            total_size_bytes: z.ZodNumber;
            primary_size_bytes: z.ZodNumber;
            primary_shard_size_avg_bytes: z.ZodNumber;
            primary_shard_size_median_bytes: z.ZodNumber;
            primary_shard_size_mad_bytes: z.ZodNumber;
        }, z.core.$strip>;
        data_frozen: z.ZodOptional<z.ZodObject<{
            node_count: z.ZodNumber;
            index_count: z.ZodNumber;
            total_shard_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            doc_count: z.ZodNumber;
            total_size_bytes: z.ZodNumber;
            primary_size_bytes: z.ZodNumber;
            primary_shard_size_avg_bytes: z.ZodNumber;
            primary_shard_size_median_bytes: z.ZodNumber;
            primary_shard_size_mad_bytes: z.ZodNumber;
        }, z.core.$strip>>;
        data_cold: z.ZodObject<{
            node_count: z.ZodNumber;
            index_count: z.ZodNumber;
            total_shard_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            doc_count: z.ZodNumber;
            total_size_bytes: z.ZodNumber;
            primary_size_bytes: z.ZodNumber;
            primary_shard_size_avg_bytes: z.ZodNumber;
            primary_shard_size_median_bytes: z.ZodNumber;
            primary_shard_size_mad_bytes: z.ZodNumber;
        }, z.core.$strip>;
        data_content: z.ZodObject<{
            node_count: z.ZodNumber;
            index_count: z.ZodNumber;
            total_shard_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            doc_count: z.ZodNumber;
            total_size_bytes: z.ZodNumber;
            primary_size_bytes: z.ZodNumber;
            primary_shard_size_avg_bytes: z.ZodNumber;
            primary_shard_size_median_bytes: z.ZodNumber;
            primary_shard_size_mad_bytes: z.ZodNumber;
        }, z.core.$strip>;
        data_hot: z.ZodObject<{
            node_count: z.ZodNumber;
            index_count: z.ZodNumber;
            total_shard_count: z.ZodNumber;
            primary_shard_count: z.ZodNumber;
            doc_count: z.ZodNumber;
            total_size_bytes: z.ZodNumber;
            primary_size_bytes: z.ZodNumber;
            primary_shard_size_avg_bytes: z.ZodNumber;
            primary_shard_size_median_bytes: z.ZodNumber;
            primary_shard_size_mad_bytes: z.ZodNumber;
        }, z.core.$strip>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    enrich: z.ZodOptional<z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    eql: z.ZodObject<{
        features: z.ZodObject<{
            join: z.ZodNumber;
            joins: z.ZodObject<{
                join_queries_two: z.ZodNumber;
                join_queries_three: z.ZodNumber;
                join_until: z.ZodNumber;
                join_queries_five_or_more: z.ZodNumber;
                join_queries_four: z.ZodNumber;
            }, z.core.$strip>;
            keys: z.ZodObject<{
                join_keys_two: z.ZodNumber;
                join_keys_one: z.ZodNumber;
                join_keys_three: z.ZodNumber;
                join_keys_five_or_more: z.ZodNumber;
                join_keys_four: z.ZodNumber;
            }, z.core.$strip>;
            event: z.ZodNumber;
            pipes: z.ZodObject<{
                pipe_tail: z.ZodNumber;
                pipe_head: z.ZodNumber;
            }, z.core.$strip>;
            sequence: z.ZodNumber;
            sequences: z.ZodObject<{
                sequence_queries_three: z.ZodNumber;
                sequence_queries_four: z.ZodNumber;
                sequence_queries_two: z.ZodNumber;
                sequence_until: z.ZodNumber;
                sequence_queries_five_or_more: z.ZodNumber;
                sequence_maxspan: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        queries: z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            failed: z.ZodOptional<z.ZodNumber>;
            paging: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    flattened: z.ZodOptional<z.ZodObject<{
        field_count: z.ZodNumber;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    graph: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    health_api: z.ZodOptional<z.ZodObject<{
        invocations: z.ZodObject<{
            total: z.ZodNumber;
        }, z.core.$strip>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    ilm: z.ZodObject<{
        policy_count: z.ZodNumber;
        policy_stats: z.ZodArray<z.ZodObject<{
            indices_managed: z.ZodNumber;
            phases: z.ZodObject<{
                cold: z.ZodOptional<z.ZodObject<{
                    actions: z.ZodArray<z.ZodString>;
                    min_age: z.ZodAny;
                }, z.core.$strip>>;
                delete: z.ZodOptional<z.ZodObject<{
                    actions: z.ZodArray<z.ZodString>;
                    min_age: z.ZodAny;
                }, z.core.$strip>>;
                frozen: z.ZodOptional<z.ZodObject<{
                    actions: z.ZodArray<z.ZodString>;
                    min_age: z.ZodAny;
                }, z.core.$strip>>;
                hot: z.ZodOptional<z.ZodObject<{
                    actions: z.ZodArray<z.ZodString>;
                    min_age: z.ZodAny;
                }, z.core.$strip>>;
                warm: z.ZodOptional<z.ZodObject<{
                    actions: z.ZodArray<z.ZodString>;
                    min_age: z.ZodAny;
                }, z.core.$strip>>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    logstash: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    ml: z.ZodObject<{
        datafeeds: z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
        }, z.core.$strip>>;
        jobs: z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            created_by: z.ZodRecord<z.ZodString, z.ZodNumber>;
            detectors: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
            forecasts: z.ZodObject<{
                total: z.ZodNumber;
                forecasted_jobs: z.ZodNumber;
            }, z.core.$strip>;
            model_size: z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        node_count: z.ZodNumber;
        data_frame_analytics_jobs: z.ZodObject<{
            memory_usage: z.ZodOptional<z.ZodObject<{
                peak_usage_bytes: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            _all: z.ZodObject<{
                count: z.ZodNumber;
            }, z.core.$strip>;
            analysis_counts: z.ZodOptional<z.ZodObject<{
                classification: z.ZodOptional<z.ZodNumber>;
                outlier_detection: z.ZodOptional<z.ZodNumber>;
                regression: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            stopped: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        inference: z.ZodObject<{
            ingest_processors: z.ZodRecord<z.ZodString, z.ZodObject<{
                num_docs_processed: z.ZodObject<{
                    max: z.ZodNumber;
                    sum: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
                pipelines: z.ZodObject<{
                    count: z.ZodNumber;
                }, z.core.$strip>;
                num_failures: z.ZodObject<{
                    max: z.ZodNumber;
                    sum: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
                time_ms: z.ZodObject<{
                    max: z.ZodNumber;
                    sum: z.ZodNumber;
                    min: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            trained_models: z.ZodObject<{
                estimated_operations: z.ZodOptional<z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>>;
                estimated_heap_memory_usage_bytes: z.ZodOptional<z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>>;
                count: z.ZodOptional<z.ZodObject<{
                    total: z.ZodNumber;
                    prepackaged: z.ZodNumber;
                    other: z.ZodNumber;
                    pass_through: z.ZodOptional<z.ZodNumber>;
                    regression: z.ZodOptional<z.ZodNumber>;
                    classification: z.ZodOptional<z.ZodNumber>;
                    ner: z.ZodOptional<z.ZodNumber>;
                    text_embedding: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                _all: z.ZodObject<{
                    count: z.ZodNumber;
                }, z.core.$strip>;
                model_size_bytes: z.ZodOptional<z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            deployments: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                inference_counts: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>;
                model_sizes_bytes: z.ZodObject<{
                    avg: z.ZodNumber;
                    max: z.ZodNumber;
                    min: z.ZodNumber;
                    total: z.ZodNumber;
                }, z.core.$strip>;
                time_ms: z.ZodObject<{
                    avg: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    monitoring: z.ZodObject<{
        collection_enabled: z.ZodBoolean;
        enabled_exporters: z.ZodRecord<z.ZodString, z.ZodNumber>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    rollup: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    runtime_fields: z.ZodOptional<z.ZodObject<{
        field_types: z.ZodArray<z.ZodObject<{
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
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    spatial: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    searchable_snapshots: z.ZodObject<{
        indices_count: z.ZodNumber;
        full_copy_indices_count: z.ZodOptional<z.ZodNumber>;
        shared_cache_indices_count: z.ZodOptional<z.ZodNumber>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    security: z.ZodObject<{
        api_key_service: z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        anonymous: z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        audit: z.ZodObject<{
            outputs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        fips_140: z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        ipfilter: z.ZodObject<{
            http: z.ZodBoolean;
            transport: z.ZodBoolean;
        }, z.core.$strip>;
        realms: z.ZodRecord<z.ZodString, z.ZodObject<{
            name: z.ZodOptional<z.ZodArray<z.ZodString>>;
            order: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            size: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            cache: z.ZodOptional<z.ZodArray<z.ZodObject<{
                size: z.ZodNumber;
            }, z.core.$strip>>>;
            has_authorization_realms: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
            has_default_username_pattern: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
            has_truststore: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
            is_authentication_delegated: z.ZodOptional<z.ZodArray<z.ZodBoolean>>;
            available: z.ZodBoolean;
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        role_mapping: z.ZodRecord<z.ZodString, z.ZodObject<{
            enabled: z.ZodNumber;
            size: z.ZodNumber;
        }, z.core.$strip>>;
        roles: z.ZodObject<{
            native: z.ZodObject<{
                dls: z.ZodBoolean;
                fls: z.ZodBoolean;
                size: z.ZodNumber;
            }, z.core.$strip>;
            dls: z.ZodObject<{
                bit_set_cache: z.ZodObject<{
                    count: z.ZodNumber;
                    memory: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                    memory_in_bytes: z.ZodNumber;
                    hits: z.ZodNumber;
                    misses: z.ZodNumber;
                    evictions: z.ZodNumber;
                    hits_time_in_millis: z.ZodAny;
                    misses_time_in_millis: z.ZodAny;
                }, z.core.$strip>;
            }, z.core.$strip>;
            file: z.ZodObject<{
                dls: z.ZodBoolean;
                fls: z.ZodBoolean;
                size: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        ssl: z.ZodObject<{
            http: z.ZodObject<{
                enabled: z.ZodBoolean;
            }, z.core.$strip>;
            transport: z.ZodObject<{
                enabled: z.ZodBoolean;
            }, z.core.$strip>;
        }, z.core.$strip>;
        system_key: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>>;
        token_service: z.ZodObject<{
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        operator_privileges: z.ZodObject<{
            available: z.ZodBoolean;
            enabled: z.ZodBoolean;
        }, z.core.$strip>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    slm: z.ZodObject<{
        policy_count: z.ZodOptional<z.ZodNumber>;
        policy_stats: z.ZodOptional<z.ZodObject<{
            retention_deletion_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            retention_deletion_time_millis: z.ZodOptional<z.ZodAny>;
            retention_failed: z.ZodOptional<z.ZodNumber>;
            retention_runs: z.ZodOptional<z.ZodNumber>;
            retention_timed_out: z.ZodOptional<z.ZodNumber>;
            policy: z.ZodOptional<z.ZodString>;
            total_snapshots_deleted: z.ZodOptional<z.ZodNumber>;
            snapshots_deleted: z.ZodOptional<z.ZodNumber>;
            total_snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
            snapshot_deletion_failures: z.ZodOptional<z.ZodNumber>;
            total_snapshots_failed: z.ZodOptional<z.ZodNumber>;
            snapshots_failed: z.ZodOptional<z.ZodNumber>;
            total_snapshots_taken: z.ZodOptional<z.ZodNumber>;
            snapshots_taken: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    sql: z.ZodObject<{
        features: z.ZodRecord<z.ZodString, z.ZodNumber>;
        queries: z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            failed: z.ZodOptional<z.ZodNumber>;
            paging: z.ZodOptional<z.ZodNumber>;
            total: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    transform: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
    vectors: z.ZodOptional<z.ZodObject<{
        dense_vector_dims_avg_count: z.ZodNumber;
        dense_vector_fields_count: z.ZodNumber;
        sparse_vector_fields_count: z.ZodOptional<z.ZodNumber>;
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>>;
    voting_only: z.ZodObject<{
        available: z.ZodBoolean;
        enabled: z.ZodBoolean;
    }, z.core.$strip>;
}, z.core.$strip>;
export type XpackUsageResponse = z.infer<typeof XpackUsageResponse>;
//# sourceMappingURL=xpack_usage.d.ts.map