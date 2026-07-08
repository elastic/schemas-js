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
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const MlCategorizationStatus: z.ZodEnum<{
    warn: "warn";
    ok: "ok";
}>;
export type MlCategorizationStatus = z.infer<typeof MlCategorizationStatus>;
export declare const MlDataCounts: z.ZodObject<{
    bucket_count: z.ZodNumber;
    earliest_record_timestamp: z.ZodOptional<z.ZodNumber>;
    empty_bucket_count: z.ZodNumber;
    input_bytes: z.ZodNumber;
    input_field_count: z.ZodNumber;
    input_record_count: z.ZodNumber;
    invalid_date_count: z.ZodNumber;
    job_id: z.ZodString;
    last_data_time: z.ZodOptional<z.ZodNumber>;
    latest_empty_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
    latest_record_timestamp: z.ZodOptional<z.ZodNumber>;
    latest_sparse_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
    latest_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
    log_time: z.ZodOptional<z.ZodNumber>;
    missing_field_count: z.ZodNumber;
    out_of_order_timestamp_count: z.ZodNumber;
    processed_field_count: z.ZodNumber;
    processed_record_count: z.ZodNumber;
    sparse_bucket_count: z.ZodNumber;
}, z.core.$strip>;
export type MlDataCounts = z.infer<typeof MlDataCounts>;
export declare const MlJobStatistics: z.ZodObject<{
    avg: z.ZodNumber;
    max: z.ZodNumber;
    min: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type MlJobStatistics = z.infer<typeof MlJobStatistics>;
export declare const MlJobForecastStatistics: z.ZodObject<{
    memory_bytes: z.ZodOptional<z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    processing_time_ms: z.ZodOptional<z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    records: z.ZodOptional<z.ZodObject<{
        avg: z.ZodNumber;
        max: z.ZodNumber;
        min: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    status: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    total: z.ZodNumber;
    forecasted_jobs: z.ZodNumber;
}, z.core.$strip>;
export type MlJobForecastStatistics = z.infer<typeof MlJobForecastStatistics>;
export declare const MlJobState: z.ZodEnum<{
    closed: "closed";
    failed: "failed";
    closing: "closing";
    opened: "opened";
    opening: "opening";
}>;
export type MlJobState = z.infer<typeof MlJobState>;
export declare const MlMemoryStatus: z.ZodEnum<{
    ok: "ok";
    soft_limit: "soft_limit";
    hard_limit: "hard_limit";
}>;
export type MlMemoryStatus = z.infer<typeof MlMemoryStatus>;
export declare const MlModelSizeStats: z.ZodObject<{
    bucket_allocation_failures_count: z.ZodNumber;
    job_id: z.ZodString;
    log_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    memory_status: z.ZodEnum<{
        ok: "ok";
        soft_limit: "soft_limit";
        hard_limit: "hard_limit";
    }>;
    model_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    model_bytes_exceeded: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    model_bytes_memory_limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    output_memory_allocator_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    peak_model_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    assignment_memory_basis: z.ZodOptional<z.ZodString>;
    result_type: z.ZodString;
    total_by_field_count: z.ZodNumber;
    total_over_field_count: z.ZodNumber;
    total_partition_field_count: z.ZodNumber;
    categorization_status: z.ZodEnum<{
        warn: "warn";
        ok: "ok";
    }>;
    categorized_doc_count: z.ZodNumber;
    dead_category_count: z.ZodNumber;
    failed_category_count: z.ZodNumber;
    frequent_category_count: z.ZodNumber;
    rare_category_count: z.ZodNumber;
    total_category_count: z.ZodNumber;
    timestamp: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlModelSizeStats = z.infer<typeof MlModelSizeStats>;
export declare const MlJobTimingStats: z.ZodObject<{
    average_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
    bucket_count: z.ZodNumber;
    exponential_average_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
    exponential_average_bucket_processing_time_per_hour_ms: z.ZodAny;
    job_id: z.ZodString;
    total_bucket_processing_time_ms: z.ZodAny;
    maximum_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
    minimum_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type MlJobTimingStats = z.infer<typeof MlJobTimingStats>;
export declare const MlJobStats: z.ZodObject<{
    assignment_explanation: z.ZodOptional<z.ZodString>;
    data_counts: z.ZodObject<{
        bucket_count: z.ZodNumber;
        earliest_record_timestamp: z.ZodOptional<z.ZodNumber>;
        empty_bucket_count: z.ZodNumber;
        input_bytes: z.ZodNumber;
        input_field_count: z.ZodNumber;
        input_record_count: z.ZodNumber;
        invalid_date_count: z.ZodNumber;
        job_id: z.ZodString;
        last_data_time: z.ZodOptional<z.ZodNumber>;
        latest_empty_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
        latest_record_timestamp: z.ZodOptional<z.ZodNumber>;
        latest_sparse_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
        latest_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
        log_time: z.ZodOptional<z.ZodNumber>;
        missing_field_count: z.ZodNumber;
        out_of_order_timestamp_count: z.ZodNumber;
        processed_field_count: z.ZodNumber;
        processed_record_count: z.ZodNumber;
        sparse_bucket_count: z.ZodNumber;
    }, z.core.$strip>;
    forecasts_stats: z.ZodObject<{
        memory_bytes: z.ZodOptional<z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        processing_time_ms: z.ZodOptional<z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        records: z.ZodOptional<z.ZodObject<{
            avg: z.ZodNumber;
            max: z.ZodNumber;
            min: z.ZodNumber;
            total: z.ZodNumber;
        }, z.core.$strip>>;
        status: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        total: z.ZodNumber;
        forecasted_jobs: z.ZodNumber;
    }, z.core.$strip>;
    job_id: z.ZodString;
    model_size_stats: z.ZodObject<{
        bucket_allocation_failures_count: z.ZodNumber;
        job_id: z.ZodString;
        log_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        memory_status: z.ZodEnum<{
            ok: "ok";
            soft_limit: "soft_limit";
            hard_limit: "hard_limit";
        }>;
        model_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        model_bytes_exceeded: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        model_bytes_memory_limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        output_memory_allocator_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        peak_model_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        assignment_memory_basis: z.ZodOptional<z.ZodString>;
        result_type: z.ZodString;
        total_by_field_count: z.ZodNumber;
        total_over_field_count: z.ZodNumber;
        total_partition_field_count: z.ZodNumber;
        categorization_status: z.ZodEnum<{
            warn: "warn";
            ok: "ok";
        }>;
        categorized_doc_count: z.ZodNumber;
        dead_category_count: z.ZodNumber;
        failed_category_count: z.ZodNumber;
        frequent_category_count: z.ZodNumber;
        rare_category_count: z.ZodNumber;
        total_category_count: z.ZodNumber;
        timestamp: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    open_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    state: z.ZodEnum<{
        closed: "closed";
        failed: "failed";
        closing: "closing";
        opened: "opened";
        opening: "opening";
    }>;
    timing_stats: z.ZodObject<{
        average_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
        bucket_count: z.ZodNumber;
        exponential_average_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
        exponential_average_bucket_processing_time_per_hour_ms: z.ZodAny;
        job_id: z.ZodString;
        total_bucket_processing_time_ms: z.ZodAny;
        maximum_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
        minimum_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
    deleting: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlJobStats = z.infer<typeof MlJobStats>;
/** Get anomaly detection job stats. */
export declare const MlGetJobStatsRequest: z.ZodObject<{
    job_id: z.ZodOptional<z.ZodString>;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlGetJobStatsRequest = z.infer<typeof MlGetJobStatsRequest>;
export declare const MlGetJobStatsResponse: z.ZodObject<{
    count: z.ZodNumber;
    jobs: z.ZodArray<z.ZodObject<{
        assignment_explanation: z.ZodOptional<z.ZodString>;
        data_counts: z.ZodObject<{
            bucket_count: z.ZodNumber;
            earliest_record_timestamp: z.ZodOptional<z.ZodNumber>;
            empty_bucket_count: z.ZodNumber;
            input_bytes: z.ZodNumber;
            input_field_count: z.ZodNumber;
            input_record_count: z.ZodNumber;
            invalid_date_count: z.ZodNumber;
            job_id: z.ZodString;
            last_data_time: z.ZodOptional<z.ZodNumber>;
            latest_empty_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
            latest_record_timestamp: z.ZodOptional<z.ZodNumber>;
            latest_sparse_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
            latest_bucket_timestamp: z.ZodOptional<z.ZodNumber>;
            log_time: z.ZodOptional<z.ZodNumber>;
            missing_field_count: z.ZodNumber;
            out_of_order_timestamp_count: z.ZodNumber;
            processed_field_count: z.ZodNumber;
            processed_record_count: z.ZodNumber;
            sparse_bucket_count: z.ZodNumber;
        }, z.core.$strip>;
        forecasts_stats: z.ZodObject<{
            memory_bytes: z.ZodOptional<z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            processing_time_ms: z.ZodOptional<z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            records: z.ZodOptional<z.ZodObject<{
                avg: z.ZodNumber;
                max: z.ZodNumber;
                min: z.ZodNumber;
                total: z.ZodNumber;
            }, z.core.$strip>>;
            status: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            total: z.ZodNumber;
            forecasted_jobs: z.ZodNumber;
        }, z.core.$strip>;
        job_id: z.ZodString;
        model_size_stats: z.ZodObject<{
            bucket_allocation_failures_count: z.ZodNumber;
            job_id: z.ZodString;
            log_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
            memory_status: z.ZodEnum<{
                ok: "ok";
                soft_limit: "soft_limit";
                hard_limit: "hard_limit";
            }>;
            model_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            model_bytes_exceeded: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            model_bytes_memory_limit: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            output_memory_allocator_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            peak_model_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            assignment_memory_basis: z.ZodOptional<z.ZodString>;
            result_type: z.ZodString;
            total_by_field_count: z.ZodNumber;
            total_over_field_count: z.ZodNumber;
            total_partition_field_count: z.ZodNumber;
            categorization_status: z.ZodEnum<{
                warn: "warn";
                ok: "ok";
            }>;
            categorized_doc_count: z.ZodNumber;
            dead_category_count: z.ZodNumber;
            failed_category_count: z.ZodNumber;
            frequent_category_count: z.ZodNumber;
            rare_category_count: z.ZodNumber;
            total_category_count: z.ZodNumber;
            timestamp: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        open_time: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        state: z.ZodEnum<{
            closed: "closed";
            failed: "failed";
            closing: "closing";
            opened: "opened";
            opening: "opening";
        }>;
        timing_stats: z.ZodObject<{
            average_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
            bucket_count: z.ZodNumber;
            exponential_average_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
            exponential_average_bucket_processing_time_per_hour_ms: z.ZodAny;
            job_id: z.ZodString;
            total_bucket_processing_time_ms: z.ZodAny;
            maximum_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
            minimum_bucket_processing_time_ms: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>;
        deleting: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetJobStatsResponse = z.infer<typeof MlGetJobStatsResponse>;
//# sourceMappingURL=ml_get_job_stats.d.ts.map