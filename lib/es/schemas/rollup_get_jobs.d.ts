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
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Fields = z.infer<typeof Fields>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TimeZone: z.ZodString;
export type TimeZone = z.infer<typeof TimeZone>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const RollupDateHistogramGrouping: z.ZodObject<{
    delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    field: z.ZodString;
    format: z.ZodOptional<z.ZodString>;
    interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    time_zone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RollupDateHistogramGrouping = z.infer<typeof RollupDateHistogramGrouping>;
export declare const RollupMetric: z.ZodEnum<{
    max: "max";
    min: "min";
    sum: "sum";
    avg: "avg";
    value_count: "value_count";
}>;
export type RollupMetric = z.infer<typeof RollupMetric>;
export declare const RollupFieldMetric: z.ZodObject<{
    field: z.ZodString;
    metrics: z.ZodArray<z.ZodEnum<{
        max: "max";
        min: "min";
        sum: "sum";
        avg: "avg";
        value_count: "value_count";
    }>>;
}, z.core.$strip>;
export type RollupFieldMetric = z.infer<typeof RollupFieldMetric>;
export declare const RollupHistogramGrouping: z.ZodObject<{
    fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    interval: z.ZodNumber;
}, z.core.$strip>;
export type RollupHistogramGrouping = z.infer<typeof RollupHistogramGrouping>;
export declare const RollupTermsGrouping: z.ZodObject<{
    fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
}, z.core.$strip>;
export type RollupTermsGrouping = z.infer<typeof RollupTermsGrouping>;
export declare const RollupGroupings: z.ZodObject<{
    date_histogram: z.ZodOptional<z.ZodObject<{
        delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        field: z.ZodString;
        format: z.ZodOptional<z.ZodString>;
        interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        time_zone: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    histogram: z.ZodOptional<z.ZodObject<{
        fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        interval: z.ZodNumber;
    }, z.core.$strip>>;
    terms: z.ZodOptional<z.ZodObject<{
        fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RollupGroupings = z.infer<typeof RollupGroupings>;
export declare const RollupGetJobsIndexingJobState: z.ZodEnum<{
    indexing: "indexing";
    started: "started";
    stopping: "stopping";
    stopped: "stopped";
    aborting: "aborting";
}>;
export type RollupGetJobsIndexingJobState = z.infer<typeof RollupGetJobsIndexingJobState>;
/**
 * Get rollup job information.
 *
 * Get the configuration, stats, and status of rollup jobs.
 *
 * NOTE: This API returns only active (both `STARTED` and `STOPPED`) jobs.
 * If a job was created, ran for a while, then was deleted, the API does not return any details about it.
 * For details about a historical rollup job, the rollup capabilities API may be more useful.
 * @deprecated
 */
export declare const RollupGetJobsRequest: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RollupGetJobsRequest = z.infer<typeof RollupGetJobsRequest>;
export declare const RollupGetJobsRollupJobConfiguration: z.ZodObject<{
    cron: z.ZodString;
    groups: z.ZodObject<{
        date_histogram: z.ZodOptional<z.ZodObject<{
            delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            field: z.ZodString;
            format: z.ZodOptional<z.ZodString>;
            interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            time_zone: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        histogram: z.ZodOptional<z.ZodObject<{
            fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
            interval: z.ZodNumber;
        }, z.core.$strip>>;
        terms: z.ZodOptional<z.ZodObject<{
            fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    id: z.ZodString;
    index_pattern: z.ZodString;
    metrics: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        metrics: z.ZodArray<z.ZodEnum<{
            max: "max";
            min: "min";
            sum: "sum";
            avg: "avg";
            value_count: "value_count";
        }>>;
    }, z.core.$strip>>;
    page_size: z.ZodNumber;
    rollup_index: z.ZodString;
    timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
}, z.core.$strip>;
export type RollupGetJobsRollupJobConfiguration = z.infer<typeof RollupGetJobsRollupJobConfiguration>;
export declare const RollupGetJobsRollupJobStats: z.ZodObject<{
    documents_processed: z.ZodNumber;
    index_failures: z.ZodNumber;
    index_time_in_ms: z.ZodAny;
    index_total: z.ZodNumber;
    pages_processed: z.ZodNumber;
    rollups_indexed: z.ZodNumber;
    search_failures: z.ZodNumber;
    search_time_in_ms: z.ZodAny;
    search_total: z.ZodNumber;
    trigger_count: z.ZodNumber;
    processing_time_in_ms: z.ZodAny;
    processing_total: z.ZodNumber;
}, z.core.$strip>;
export type RollupGetJobsRollupJobStats = z.infer<typeof RollupGetJobsRollupJobStats>;
export declare const RollupGetJobsRollupJobStatus: z.ZodObject<{
    current_position: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    job_state: z.ZodEnum<{
        indexing: "indexing";
        started: "started";
        stopping: "stopping";
        stopped: "stopped";
        aborting: "aborting";
    }>;
    upgraded_doc_id: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type RollupGetJobsRollupJobStatus = z.infer<typeof RollupGetJobsRollupJobStatus>;
export declare const RollupGetJobsRollupJob: z.ZodObject<{
    config: z.ZodObject<{
        cron: z.ZodString;
        groups: z.ZodObject<{
            date_histogram: z.ZodOptional<z.ZodObject<{
                delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                field: z.ZodString;
                format: z.ZodOptional<z.ZodString>;
                interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                time_zone: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            histogram: z.ZodOptional<z.ZodObject<{
                fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                interval: z.ZodNumber;
            }, z.core.$strip>>;
            terms: z.ZodOptional<z.ZodObject<{
                fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        id: z.ZodString;
        index_pattern: z.ZodString;
        metrics: z.ZodArray<z.ZodObject<{
            field: z.ZodString;
            metrics: z.ZodArray<z.ZodEnum<{
                max: "max";
                min: "min";
                sum: "sum";
                avg: "avg";
                value_count: "value_count";
            }>>;
        }, z.core.$strip>>;
        page_size: z.ZodNumber;
        rollup_index: z.ZodString;
        timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    }, z.core.$strip>;
    stats: z.ZodObject<{
        documents_processed: z.ZodNumber;
        index_failures: z.ZodNumber;
        index_time_in_ms: z.ZodAny;
        index_total: z.ZodNumber;
        pages_processed: z.ZodNumber;
        rollups_indexed: z.ZodNumber;
        search_failures: z.ZodNumber;
        search_time_in_ms: z.ZodAny;
        search_total: z.ZodNumber;
        trigger_count: z.ZodNumber;
        processing_time_in_ms: z.ZodAny;
        processing_total: z.ZodNumber;
    }, z.core.$strip>;
    status: z.ZodObject<{
        current_position: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        job_state: z.ZodEnum<{
            indexing: "indexing";
            started: "started";
            stopping: "stopping";
            stopped: "stopped";
            aborting: "aborting";
        }>;
        upgraded_doc_id: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RollupGetJobsRollupJob = z.infer<typeof RollupGetJobsRollupJob>;
export declare const RollupGetJobsResponse: z.ZodObject<{
    jobs: z.ZodArray<z.ZodObject<{
        config: z.ZodObject<{
            cron: z.ZodString;
            groups: z.ZodObject<{
                date_histogram: z.ZodOptional<z.ZodObject<{
                    delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    field: z.ZodString;
                    format: z.ZodOptional<z.ZodString>;
                    interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    calendar_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    fixed_interval: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
                    time_zone: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                histogram: z.ZodOptional<z.ZodObject<{
                    fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                    interval: z.ZodNumber;
                }, z.core.$strip>>;
                terms: z.ZodOptional<z.ZodObject<{
                    fields: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            id: z.ZodString;
            index_pattern: z.ZodString;
            metrics: z.ZodArray<z.ZodObject<{
                field: z.ZodString;
                metrics: z.ZodArray<z.ZodEnum<{
                    max: "max";
                    min: "min";
                    sum: "sum";
                    avg: "avg";
                    value_count: "value_count";
                }>>;
            }, z.core.$strip>>;
            page_size: z.ZodNumber;
            rollup_index: z.ZodString;
            timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        }, z.core.$strip>;
        stats: z.ZodObject<{
            documents_processed: z.ZodNumber;
            index_failures: z.ZodNumber;
            index_time_in_ms: z.ZodAny;
            index_total: z.ZodNumber;
            pages_processed: z.ZodNumber;
            rollups_indexed: z.ZodNumber;
            search_failures: z.ZodNumber;
            search_time_in_ms: z.ZodAny;
            search_total: z.ZodNumber;
            trigger_count: z.ZodNumber;
            processing_time_in_ms: z.ZodAny;
            processing_total: z.ZodNumber;
        }, z.core.$strip>;
        status: z.ZodObject<{
            current_position: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            job_state: z.ZodEnum<{
                indexing: "indexing";
                started: "started";
                stopping: "stopping";
                stopped: "stopped";
                aborting: "aborting";
            }>;
            upgraded_doc_id: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RollupGetJobsResponse = z.infer<typeof RollupGetJobsResponse>;
//# sourceMappingURL=rollup_get_jobs.d.ts.map