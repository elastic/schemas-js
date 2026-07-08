import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlRunningStateSearchInterval: z.ZodObject<{
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    end_ms: z.ZodAny;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    start_ms: z.ZodAny;
}, z.core.$strip>;
export type MlRunningStateSearchInterval = z.infer<typeof MlRunningStateSearchInterval>;
export declare const MlDatafeedRunningState: z.ZodObject<{
    real_time_configured: z.ZodBoolean;
    real_time_running: z.ZodBoolean;
    search_interval: z.ZodOptional<z.ZodObject<{
        end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        end_ms: z.ZodAny;
        start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        start_ms: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlDatafeedRunningState = z.infer<typeof MlDatafeedRunningState>;
export declare const MlDatafeedState: z.ZodEnum<{
    started: "started";
    starting: "starting";
    stopping: "stopping";
    stopped: "stopped";
}>;
export type MlDatafeedState = z.infer<typeof MlDatafeedState>;
export declare const MlExponentialAverageCalculationContext: z.ZodObject<{
    incremental_metric_value_ms: z.ZodAny;
    latest_timestamp: z.ZodOptional<z.ZodAny>;
    previous_exponential_average_ms: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type MlExponentialAverageCalculationContext = z.infer<typeof MlExponentialAverageCalculationContext>;
export declare const MlDatafeedTimingStats: z.ZodObject<{
    bucket_count: z.ZodNumber;
    exponential_average_search_time_per_hour_ms: z.ZodAny;
    exponential_average_calculation_context: z.ZodOptional<z.ZodObject<{
        incremental_metric_value_ms: z.ZodAny;
        latest_timestamp: z.ZodOptional<z.ZodAny>;
        previous_exponential_average_ms: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    job_id: z.ZodString;
    search_count: z.ZodNumber;
    total_search_time_ms: z.ZodAny;
    average_search_time_per_bucket_ms: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type MlDatafeedTimingStats = z.infer<typeof MlDatafeedTimingStats>;
export declare const MlDatafeedStats: z.ZodObject<{
    assignment_explanation: z.ZodOptional<z.ZodString>;
    datafeed_id: z.ZodString;
    state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        stopped: "stopped";
    }>;
    timing_stats: z.ZodOptional<z.ZodObject<{
        bucket_count: z.ZodNumber;
        exponential_average_search_time_per_hour_ms: z.ZodAny;
        exponential_average_calculation_context: z.ZodOptional<z.ZodObject<{
            incremental_metric_value_ms: z.ZodAny;
            latest_timestamp: z.ZodOptional<z.ZodAny>;
            previous_exponential_average_ms: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        job_id: z.ZodString;
        search_count: z.ZodNumber;
        total_search_time_ms: z.ZodAny;
        average_search_time_per_bucket_ms: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    running_state: z.ZodOptional<z.ZodObject<{
        real_time_configured: z.ZodBoolean;
        real_time_running: z.ZodBoolean;
        search_interval: z.ZodOptional<z.ZodObject<{
            end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            end_ms: z.ZodAny;
            start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            start_ms: z.ZodAny;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlDatafeedStats = z.infer<typeof MlDatafeedStats>;
/**
 * Get datafeed stats.
 *
 * You can get statistics for multiple datafeeds in a single API request by
 * using a comma-separated list of datafeeds or a wildcard expression. You can
 * get statistics for all datafeeds by using `_all`, by specifying `*` as the
 * `<feed_id>`, or by omitting the `<feed_id>`. If the datafeed is stopped, the
 * only information you receive is the `datafeed_id` and the `state`.
 * This API returns a maximum of 10,000 datafeeds.
 */
export declare const MlGetDatafeedStatsRequest: z.ZodObject<{
    datafeed_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlGetDatafeedStatsRequest = z.infer<typeof MlGetDatafeedStatsRequest>;
export declare const MlGetDatafeedStatsResponse: z.ZodObject<{
    count: z.ZodNumber;
    datafeeds: z.ZodArray<z.ZodObject<{
        assignment_explanation: z.ZodOptional<z.ZodString>;
        datafeed_id: z.ZodString;
        state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            stopped: "stopped";
        }>;
        timing_stats: z.ZodOptional<z.ZodObject<{
            bucket_count: z.ZodNumber;
            exponential_average_search_time_per_hour_ms: z.ZodAny;
            exponential_average_calculation_context: z.ZodOptional<z.ZodObject<{
                incremental_metric_value_ms: z.ZodAny;
                latest_timestamp: z.ZodOptional<z.ZodAny>;
                previous_exponential_average_ms: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            job_id: z.ZodString;
            search_count: z.ZodNumber;
            total_search_time_ms: z.ZodAny;
            average_search_time_per_bucket_ms: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        running_state: z.ZodOptional<z.ZodObject<{
            real_time_configured: z.ZodBoolean;
            real_time_running: z.ZodBoolean;
            search_interval: z.ZodOptional<z.ZodObject<{
                end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                end_ms: z.ZodAny;
                start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                start_ms: z.ZodAny;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetDatafeedStatsResponse = z.infer<typeof MlGetDatafeedStatsResponse>;
//# sourceMappingURL=ml_get_datafeed_stats.d.ts.map