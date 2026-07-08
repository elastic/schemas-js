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
export declare const DataStreamName: z.ZodString;
export type DataStreamName = z.infer<typeof DataStreamName>;
export declare const DataStreamNames: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type DataStreamNames = z.infer<typeof DataStreamNames>;
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
export declare const IndicesGetDataLifecycleDataStreamWithLifecycle: z.ZodObject<{
    name: z.ZodString;
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
}, z.core.$strip>;
export type IndicesGetDataLifecycleDataStreamWithLifecycle = z.infer<typeof IndicesGetDataLifecycleDataStreamWithLifecycle>;
/**
 * Get data stream lifecycles.
 *
 * Get the data stream lifecycle configuration of one or more data streams.
 */
export declare const IndicesGetDataLifecycleRequest: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
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
    include_defaults: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesGetDataLifecycleRequest = z.infer<typeof IndicesGetDataLifecycleRequest>;
export declare const IndicesGetDataLifecycleGlobalRetention: z.ZodObject<{
    max_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    default_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesGetDataLifecycleGlobalRetention = z.infer<typeof IndicesGetDataLifecycleGlobalRetention>;
export declare const IndicesGetDataLifecycleResponse: z.ZodObject<{
    data_streams: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
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
    }, z.core.$strip>>;
    global_retention: z.ZodObject<{
        max_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        default_retention: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type IndicesGetDataLifecycleResponse = z.infer<typeof IndicesGetDataLifecycleResponse>;
//# sourceMappingURL=indices_get_data_lifecycle.d.ts.map