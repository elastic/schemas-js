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
/**
 * A date histogram interval. Similar to `Duration` with additional units: `w` (week), `M` (month), `q` (quarter) and
 * `y` (year)
 */
export declare const DurationLarge: z.ZodString;
export type DurationLarge = z.infer<typeof DurationLarge>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const IndicesRetentionSource: z.ZodEnum<{
    data_stream_configuration: "data_stream_configuration";
    default_global_retention: "default_global_retention";
    max_global_retention: "max_global_retention";
    default_failures_retention: "default_failures_retention";
}>;
export type IndicesRetentionSource = z.infer<typeof IndicesRetentionSource>;
export declare const IndicesDownsamplingRound: z.ZodObject<{
    after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    fixed_interval: z.ZodString;
}, z.core.$strip>;
export type IndicesDownsamplingRound = z.infer<typeof IndicesDownsamplingRound>;
export declare const IndicesSamplingMethod: z.ZodEnum<{
    aggregate: "aggregate";
    last_value: "last_value";
}>;
export type IndicesSamplingMethod = z.infer<typeof IndicesSamplingMethod>;
/** Data stream lifecycle denotes that a data stream is managed by the data stream lifecycle and contains the configuration. */
export declare const IndicesDataStreamLifecycle: z.ZodObject<{
    data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    effective_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    retention_determined_by: z.ZodOptional<z.ZodEnum<{
        data_stream_configuration: "data_stream_configuration";
        default_global_retention: "default_global_retention";
        max_global_retention: "max_global_retention";
        default_failures_retention: "default_failures_retention";
    }>>;
    downsampling: z.ZodOptional<z.ZodArray<z.ZodObject<{
        after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        fixed_interval: z.ZodString;
    }, z.core.$strip>>>;
    downsampling_method: z.ZodOptional<z.ZodEnum<{
        aggregate: "aggregate";
        last_value: "last_value";
    }>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    frozen_after: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesDataStreamLifecycle = z.infer<typeof IndicesDataStreamLifecycle>;
export declare const IndicesDataStreamLifecycleRolloverConditions: z.ZodObject<{
    min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_age: z.ZodOptional<z.ZodString>;
    min_docs: z.ZodOptional<z.ZodNumber>;
    max_docs: z.ZodOptional<z.ZodNumber>;
    min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
    max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type IndicesDataStreamLifecycleRolloverConditions = z.infer<typeof IndicesDataStreamLifecycleRolloverConditions>;
/**
 * Data stream lifecycle with rollover can be used to display the configuration including the default rollover conditions,
 * if asked.
 */
export declare const IndicesDataStreamLifecycleWithRollover: z.ZodObject<{
    rollover: z.ZodOptional<z.ZodObject<{
        min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_age: z.ZodOptional<z.ZodString>;
        min_docs: z.ZodOptional<z.ZodNumber>;
        max_docs: z.ZodOptional<z.ZodNumber>;
        min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
        max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    effective_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    retention_determined_by: z.ZodOptional<z.ZodEnum<{
        data_stream_configuration: "data_stream_configuration";
        default_global_retention: "default_global_retention";
        max_global_retention: "max_global_retention";
        default_failures_retention: "default_failures_retention";
    }>>;
    downsampling: z.ZodOptional<z.ZodArray<z.ZodObject<{
        after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        fixed_interval: z.ZodString;
    }, z.core.$strip>>>;
    downsampling_method: z.ZodOptional<z.ZodEnum<{
        aggregate: "aggregate";
        last_value: "last_value";
    }>>;
    enabled: z.ZodOptional<z.ZodBoolean>;
    frozen_after: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesDataStreamLifecycleWithRollover = z.infer<typeof IndicesDataStreamLifecycleWithRollover>;
export declare const IndicesExplainDataLifecycleDataStreamLifecycleExplain: z.ZodObject<{
    index: z.ZodString;
    managed_by_lifecycle: z.ZodBoolean;
    index_creation_date_millis: z.ZodOptional<z.ZodAny>;
    time_since_index_creation: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    rollover_date_millis: z.ZodOptional<z.ZodAny>;
    time_since_rollover: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    lifecycle: z.ZodOptional<z.ZodObject<{
        rollover: z.ZodOptional<z.ZodObject<{
            min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_age: z.ZodOptional<z.ZodString>;
            min_docs: z.ZodOptional<z.ZodNumber>;
            max_docs: z.ZodOptional<z.ZodNumber>;
            min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        effective_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        retention_determined_by: z.ZodOptional<z.ZodEnum<{
            data_stream_configuration: "data_stream_configuration";
            default_global_retention: "default_global_retention";
            max_global_retention: "max_global_retention";
            default_failures_retention: "default_failures_retention";
        }>>;
        downsampling: z.ZodOptional<z.ZodArray<z.ZodObject<{
            after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
            fixed_interval: z.ZodString;
        }, z.core.$strip>>>;
        downsampling_method: z.ZodOptional<z.ZodEnum<{
            aggregate: "aggregate";
            last_value: "last_value";
        }>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        frozen_after: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    generation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    error: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IndicesExplainDataLifecycleDataStreamLifecycleExplain = z.infer<typeof IndicesExplainDataLifecycleDataStreamLifecycleExplain>;
/**
 * Get the status for a data stream lifecycle.
 *
 * Get information about an index or data stream's current data stream lifecycle status, such as time since index creation, time since rollover, the lifecycle configuration managing the index, or any errors encountered during lifecycle execution.
 */
export declare const IndicesExplainDataLifecycleRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    include_defaults: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesExplainDataLifecycleRequest = z.infer<typeof IndicesExplainDataLifecycleRequest>;
export declare const IndicesExplainDataLifecycleResponse: z.ZodObject<{
    indices: z.ZodRecord<z.ZodString, z.ZodObject<{
        index: z.ZodString;
        managed_by_lifecycle: z.ZodBoolean;
        index_creation_date_millis: z.ZodOptional<z.ZodAny>;
        time_since_index_creation: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        rollover_date_millis: z.ZodOptional<z.ZodAny>;
        time_since_rollover: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        lifecycle: z.ZodOptional<z.ZodObject<{
            rollover: z.ZodOptional<z.ZodObject<{
                min_age: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                max_age: z.ZodOptional<z.ZodString>;
                min_docs: z.ZodOptional<z.ZodNumber>;
                max_docs: z.ZodOptional<z.ZodNumber>;
                min_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_primary_shard_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                min_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
                max_primary_shard_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            data_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            effective_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            retention_determined_by: z.ZodOptional<z.ZodEnum<{
                data_stream_configuration: "data_stream_configuration";
                default_global_retention: "default_global_retention";
                max_global_retention: "max_global_retention";
                default_failures_retention: "default_failures_retention";
            }>>;
            downsampling: z.ZodOptional<z.ZodArray<z.ZodObject<{
                after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
                fixed_interval: z.ZodString;
            }, z.core.$strip>>>;
            downsampling_method: z.ZodOptional<z.ZodEnum<{
                aggregate: "aggregate";
                last_value: "last_value";
            }>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            frozen_after: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        generation_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        error: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesExplainDataLifecycleResponse = z.infer<typeof IndicesExplainDataLifecycleResponse>;
//# sourceMappingURL=indices_explain_data_lifecycle.d.ts.map