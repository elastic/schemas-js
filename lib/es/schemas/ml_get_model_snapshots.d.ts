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
/** Path to field or array of paths. Some API's support wildcards in the path to select multiple fields. */
export declare const Field: z.ZodString;
export type Field = z.infer<typeof Field>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const MlCategorizationStatus: z.ZodEnum<{
    warn: "warn";
    ok: "ok";
}>;
export type MlCategorizationStatus = z.infer<typeof MlCategorizationStatus>;
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
export declare const MlModelSnapshot: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    job_id: z.ZodString;
    latest_record_time_stamp: z.ZodOptional<z.ZodNumber>;
    latest_result_time_stamp: z.ZodOptional<z.ZodNumber>;
    min_version: z.ZodString;
    model_size_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    retain: z.ZodBoolean;
    snapshot_doc_count: z.ZodNumber;
    snapshot_id: z.ZodString;
    timestamp: z.ZodNumber;
}, z.core.$strip>;
export type MlModelSnapshot = z.infer<typeof MlModelSnapshot>;
export declare const MlPage: z.ZodObject<{
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlPage = z.infer<typeof MlPage>;
/** Get model snapshots info. */
export declare const MlGetModelSnapshotsRequest: z.ZodObject<{
    job_id: z.ZodString;
    snapshot_id: z.ZodOptional<z.ZodString>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    desc: z.ZodOptional<z.ZodBoolean>;
    end: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    page: z.ZodOptional<z.ZodObject<{
        from: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    sort: z.ZodOptional<z.ZodString>;
    start: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type MlGetModelSnapshotsRequest = z.infer<typeof MlGetModelSnapshotsRequest>;
export declare const MlGetModelSnapshotsResponse: z.ZodObject<{
    count: z.ZodNumber;
    model_snapshots: z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        job_id: z.ZodString;
        latest_record_time_stamp: z.ZodOptional<z.ZodNumber>;
        latest_result_time_stamp: z.ZodOptional<z.ZodNumber>;
        min_version: z.ZodString;
        model_size_stats: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        retain: z.ZodBoolean;
        snapshot_doc_count: z.ZodNumber;
        snapshot_id: z.ZodString;
        timestamp: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetModelSnapshotsResponse = z.infer<typeof MlGetModelSnapshotsResponse>;
//# sourceMappingURL=ml_get_model_snapshots.d.ts.map