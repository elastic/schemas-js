import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const TransformGetTransformStatsTransformProgress: z.ZodObject<{
    docs_indexed: z.ZodNumber;
    docs_processed: z.ZodNumber;
    docs_remaining: z.ZodOptional<z.ZodNumber>;
    percent_complete: z.ZodOptional<z.ZodNumber>;
    total_docs: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type TransformGetTransformStatsTransformProgress = z.infer<typeof TransformGetTransformStatsTransformProgress>;
export declare const TransformGetTransformStatsCheckpointStats: z.ZodObject<{
    checkpoint: z.ZodNumber;
    checkpoint_progress: z.ZodOptional<z.ZodObject<{
        docs_indexed: z.ZodNumber;
        docs_processed: z.ZodNumber;
        docs_remaining: z.ZodOptional<z.ZodNumber>;
        percent_complete: z.ZodOptional<z.ZodNumber>;
        total_docs: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    timestamp_millis: z.ZodOptional<z.ZodAny>;
    time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type TransformGetTransformStatsCheckpointStats = z.infer<typeof TransformGetTransformStatsCheckpointStats>;
export declare const TransformGetTransformStatsCheckpointing: z.ZodObject<{
    changes_last_detected_at: z.ZodOptional<z.ZodNumber>;
    changes_last_detected_at_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    last: z.ZodObject<{
        checkpoint: z.ZodNumber;
        checkpoint_progress: z.ZodOptional<z.ZodObject<{
            docs_indexed: z.ZodNumber;
            docs_processed: z.ZodNumber;
            docs_remaining: z.ZodOptional<z.ZodNumber>;
            percent_complete: z.ZodOptional<z.ZodNumber>;
            total_docs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        timestamp_millis: z.ZodOptional<z.ZodAny>;
        time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>;
    next: z.ZodOptional<z.ZodObject<{
        checkpoint: z.ZodNumber;
        checkpoint_progress: z.ZodOptional<z.ZodObject<{
            docs_indexed: z.ZodNumber;
            docs_processed: z.ZodNumber;
            docs_remaining: z.ZodOptional<z.ZodNumber>;
            percent_complete: z.ZodOptional<z.ZodNumber>;
            total_docs: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        timestamp_millis: z.ZodOptional<z.ZodAny>;
        time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    operations_behind: z.ZodOptional<z.ZodNumber>;
    last_search_time: z.ZodOptional<z.ZodNumber>;
    last_search_time_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type TransformGetTransformStatsCheckpointing = z.infer<typeof TransformGetTransformStatsCheckpointing>;
/**
 * Get transform stats.
 *
 * Get usage information for transforms.
 */
export declare const TransformGetTransformStatsRequest: z.ZodObject<{
    transform_id: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type TransformGetTransformStatsRequest = z.infer<typeof TransformGetTransformStatsRequest>;
export declare const TransformGetTransformStatsTransformHealthIssue: z.ZodObject<{
    type: z.ZodString;
    issue: z.ZodString;
    details: z.ZodOptional<z.ZodString>;
    count: z.ZodNumber;
    first_occurrence: z.ZodOptional<z.ZodAny>;
    first_occurence_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
}, z.core.$strip>;
export type TransformGetTransformStatsTransformHealthIssue = z.infer<typeof TransformGetTransformStatsTransformHealthIssue>;
export declare const TransformGetTransformStatsTransformStatsHealth: z.ZodObject<{
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
    issues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        issue: z.ZodString;
        details: z.ZodOptional<z.ZodString>;
        count: z.ZodNumber;
        first_occurrence: z.ZodOptional<z.ZodAny>;
        first_occurence_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type TransformGetTransformStatsTransformStatsHealth = z.infer<typeof TransformGetTransformStatsTransformStatsHealth>;
export declare const TransformGetTransformStatsTransformIndexerStats: z.ZodObject<{
    delete_time_in_ms: z.ZodOptional<z.ZodAny>;
    documents_indexed: z.ZodNumber;
    documents_deleted: z.ZodOptional<z.ZodNumber>;
    documents_processed: z.ZodNumber;
    exponential_avg_checkpoint_duration_ms: z.ZodAny;
    exponential_avg_documents_indexed: z.ZodNumber;
    exponential_avg_documents_processed: z.ZodNumber;
    index_failures: z.ZodNumber;
    index_time_in_ms: z.ZodAny;
    index_total: z.ZodNumber;
    pages_processed: z.ZodNumber;
    processing_time_in_ms: z.ZodAny;
    processing_total: z.ZodNumber;
    search_failures: z.ZodNumber;
    search_time_in_ms: z.ZodAny;
    search_total: z.ZodNumber;
    trigger_count: z.ZodNumber;
}, z.core.$strip>;
export type TransformGetTransformStatsTransformIndexerStats = z.infer<typeof TransformGetTransformStatsTransformIndexerStats>;
export declare const TransformGetTransformStatsTransformStats: z.ZodObject<{
    checkpointing: z.ZodObject<{
        changes_last_detected_at: z.ZodOptional<z.ZodNumber>;
        changes_last_detected_at_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        last: z.ZodObject<{
            checkpoint: z.ZodNumber;
            checkpoint_progress: z.ZodOptional<z.ZodObject<{
                docs_indexed: z.ZodNumber;
                docs_processed: z.ZodNumber;
                docs_remaining: z.ZodOptional<z.ZodNumber>;
                percent_complete: z.ZodOptional<z.ZodNumber>;
                total_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            timestamp_millis: z.ZodOptional<z.ZodAny>;
            time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>;
        next: z.ZodOptional<z.ZodObject<{
            checkpoint: z.ZodNumber;
            checkpoint_progress: z.ZodOptional<z.ZodObject<{
                docs_indexed: z.ZodNumber;
                docs_processed: z.ZodNumber;
                docs_remaining: z.ZodOptional<z.ZodNumber>;
                percent_complete: z.ZodOptional<z.ZodNumber>;
                total_docs: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            timestamp_millis: z.ZodOptional<z.ZodAny>;
            time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        operations_behind: z.ZodOptional<z.ZodNumber>;
        last_search_time: z.ZodOptional<z.ZodNumber>;
        last_search_time_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
    }, z.core.$strip>;
    health: z.ZodOptional<z.ZodObject<{
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
        issues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            issue: z.ZodString;
            details: z.ZodOptional<z.ZodString>;
            count: z.ZodNumber;
            first_occurrence: z.ZodOptional<z.ZodAny>;
            first_occurence_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    id: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
    state: z.ZodString;
    stats: z.ZodObject<{
        delete_time_in_ms: z.ZodOptional<z.ZodAny>;
        documents_indexed: z.ZodNumber;
        documents_deleted: z.ZodOptional<z.ZodNumber>;
        documents_processed: z.ZodNumber;
        exponential_avg_checkpoint_duration_ms: z.ZodAny;
        exponential_avg_documents_indexed: z.ZodNumber;
        exponential_avg_documents_processed: z.ZodNumber;
        index_failures: z.ZodNumber;
        index_time_in_ms: z.ZodAny;
        index_total: z.ZodNumber;
        pages_processed: z.ZodNumber;
        processing_time_in_ms: z.ZodAny;
        processing_total: z.ZodNumber;
        search_failures: z.ZodNumber;
        search_time_in_ms: z.ZodAny;
        search_total: z.ZodNumber;
        trigger_count: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TransformGetTransformStatsTransformStats = z.infer<typeof TransformGetTransformStatsTransformStats>;
export declare const TransformGetTransformStatsResponse: z.ZodObject<{
    count: z.ZodNumber;
    transforms: z.ZodArray<z.ZodObject<{
        checkpointing: z.ZodObject<{
            changes_last_detected_at: z.ZodOptional<z.ZodNumber>;
            changes_last_detected_at_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            last: z.ZodObject<{
                checkpoint: z.ZodNumber;
                checkpoint_progress: z.ZodOptional<z.ZodObject<{
                    docs_indexed: z.ZodNumber;
                    docs_processed: z.ZodNumber;
                    docs_remaining: z.ZodOptional<z.ZodNumber>;
                    percent_complete: z.ZodOptional<z.ZodNumber>;
                    total_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                timestamp_millis: z.ZodOptional<z.ZodAny>;
                time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>;
            next: z.ZodOptional<z.ZodObject<{
                checkpoint: z.ZodNumber;
                checkpoint_progress: z.ZodOptional<z.ZodObject<{
                    docs_indexed: z.ZodNumber;
                    docs_processed: z.ZodNumber;
                    docs_remaining: z.ZodOptional<z.ZodNumber>;
                    percent_complete: z.ZodOptional<z.ZodNumber>;
                    total_docs: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                timestamp: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                timestamp_millis: z.ZodOptional<z.ZodAny>;
                time_upper_bound: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
                time_upper_bound_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            operations_behind: z.ZodOptional<z.ZodNumber>;
            last_search_time: z.ZodOptional<z.ZodNumber>;
            last_search_time_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
        }, z.core.$strip>;
        health: z.ZodOptional<z.ZodObject<{
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
            issues: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                issue: z.ZodString;
                details: z.ZodOptional<z.ZodString>;
                count: z.ZodNumber;
                first_occurrence: z.ZodOptional<z.ZodAny>;
                first_occurence_string: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodAny]>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        id: z.ZodString;
        reason: z.ZodOptional<z.ZodString>;
        state: z.ZodString;
        stats: z.ZodObject<{
            delete_time_in_ms: z.ZodOptional<z.ZodAny>;
            documents_indexed: z.ZodNumber;
            documents_deleted: z.ZodOptional<z.ZodNumber>;
            documents_processed: z.ZodNumber;
            exponential_avg_checkpoint_duration_ms: z.ZodAny;
            exponential_avg_documents_indexed: z.ZodNumber;
            exponential_avg_documents_processed: z.ZodNumber;
            index_failures: z.ZodNumber;
            index_time_in_ms: z.ZodAny;
            index_total: z.ZodNumber;
            pages_processed: z.ZodNumber;
            processing_time_in_ms: z.ZodAny;
            processing_total: z.ZodNumber;
            search_failures: z.ZodNumber;
            search_time_in_ms: z.ZodAny;
            search_total: z.ZodNumber;
            trigger_count: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TransformGetTransformStatsResponse = z.infer<typeof TransformGetTransformStatsResponse>;
//# sourceMappingURL=transform_get_transform_stats.d.ts.map