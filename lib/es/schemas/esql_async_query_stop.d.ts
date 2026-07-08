import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
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
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const double: z.ZodNumber;
export type double = z.infer<typeof double>;
/** A field value. */
export declare const FieldValue: z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>;
export type FieldValue = z.infer<typeof FieldValue>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const EsqlEsqlClusterStatus: z.ZodEnum<{
    partial: "partial";
    successful: "successful";
    failed: "failed";
    running: "running";
    skipped: "skipped";
}>;
export type EsqlEsqlClusterStatus = z.infer<typeof EsqlEsqlClusterStatus>;
export declare const EsqlEsqlShardInfo: z.ZodObject<{
    total: z.ZodNumber;
    successful: z.ZodOptional<z.ZodNumber>;
    skipped: z.ZodOptional<z.ZodNumber>;
    failed: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type EsqlEsqlShardInfo = z.infer<typeof EsqlEsqlShardInfo>;
export declare const EsqlEsqlShardFailure: z.ZodObject<{
    shard: z.ZodNumber;
    index: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    node: z.ZodOptional<z.ZodString>;
    reason: z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>;
}, z.core.$strip>;
export type EsqlEsqlShardFailure = z.infer<typeof EsqlEsqlShardFailure>;
export declare const EsqlEsqlClusterDetails: z.ZodObject<{
    status: z.ZodEnum<{
        partial: "partial";
        successful: "successful";
        failed: "failed";
        running: "running";
        skipped: "skipped";
    }>;
    indices: z.ZodString;
    took: z.ZodOptional<z.ZodAny>;
    _shards: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        successful: z.ZodOptional<z.ZodNumber>;
        skipped: z.ZodOptional<z.ZodNumber>;
        failed: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        shard: z.ZodNumber;
        index: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        node: z.ZodOptional<z.ZodString>;
        reason: z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EsqlEsqlClusterDetails = z.infer<typeof EsqlEsqlClusterDetails>;
export declare const EsqlEsqlClusterInfo: z.ZodObject<{
    total: z.ZodNumber;
    successful: z.ZodNumber;
    running: z.ZodNumber;
    skipped: z.ZodNumber;
    partial: z.ZodNumber;
    failed: z.ZodNumber;
    details: z.ZodRecord<z.ZodString, z.ZodObject<{
        status: z.ZodEnum<{
            partial: "partial";
            successful: "successful";
            failed: "failed";
            running: "running";
            skipped: "skipped";
        }>;
        indices: z.ZodString;
        took: z.ZodOptional<z.ZodAny>;
        _shards: z.ZodOptional<z.ZodObject<{
            total: z.ZodNumber;
            successful: z.ZodOptional<z.ZodNumber>;
            skipped: z.ZodOptional<z.ZodNumber>;
            failed: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
            shard: z.ZodNumber;
            index: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            node: z.ZodOptional<z.ZodString>;
            reason: z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EsqlEsqlClusterInfo = z.infer<typeof EsqlEsqlClusterInfo>;
export declare const EsqlEsqlColumnInfo: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
}, z.core.$strip>;
export type EsqlEsqlColumnInfo = z.infer<typeof EsqlEsqlColumnInfo>;
export declare const EsqlEsqlResult: z.ZodObject<{
    took: z.ZodOptional<z.ZodAny>;
    is_partial: z.ZodOptional<z.ZodBoolean>;
    all_columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    columns: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    values: z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    _clusters: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        successful: z.ZodNumber;
        running: z.ZodNumber;
        skipped: z.ZodNumber;
        partial: z.ZodNumber;
        failed: z.ZodNumber;
        details: z.ZodRecord<z.ZodString, z.ZodObject<{
            status: z.ZodEnum<{
                partial: "partial";
                successful: "successful";
                failed: "failed";
                running: "running";
                skipped: "skipped";
            }>;
            indices: z.ZodString;
            took: z.ZodOptional<z.ZodAny>;
            _shards: z.ZodOptional<z.ZodObject<{
                total: z.ZodNumber;
                successful: z.ZodOptional<z.ZodNumber>;
                skipped: z.ZodOptional<z.ZodNumber>;
                failed: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                shard: z.ZodNumber;
                index: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node: z.ZodOptional<z.ZodString>;
                reason: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    profile: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type EsqlEsqlResult = z.infer<typeof EsqlEsqlResult>;
/**
 * Stop async ES|QL query.
 *
 * This API interrupts the query execution and returns the results so far.
 * If the Elasticsearch security features are enabled, only the user who first submitted the ES|QL query can stop it.
 */
export declare const EsqlAsyncQueryStopRequest: z.ZodObject<{
    id: z.ZodString;
    drop_null_columns: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EsqlAsyncQueryStopRequest = z.infer<typeof EsqlAsyncQueryStopRequest>;
export declare const EsqlAsyncQueryStopResponse: z.ZodObject<{
    took: z.ZodOptional<z.ZodAny>;
    is_partial: z.ZodOptional<z.ZodBoolean>;
    all_columns: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>>;
    columns: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
    values: z.ZodArray<z.ZodArray<z.ZodUnion<readonly [z.ZodNumber, z.ZodNumber, z.ZodString, z.ZodBoolean, z.ZodNull]>>>;
    _clusters: z.ZodOptional<z.ZodObject<{
        total: z.ZodNumber;
        successful: z.ZodNumber;
        running: z.ZodNumber;
        skipped: z.ZodNumber;
        partial: z.ZodNumber;
        failed: z.ZodNumber;
        details: z.ZodRecord<z.ZodString, z.ZodObject<{
            status: z.ZodEnum<{
                partial: "partial";
                successful: "successful";
                failed: "failed";
                running: "running";
                skipped: "skipped";
            }>;
            indices: z.ZodString;
            took: z.ZodOptional<z.ZodAny>;
            _shards: z.ZodOptional<z.ZodObject<{
                total: z.ZodNumber;
                successful: z.ZodOptional<z.ZodNumber>;
                skipped: z.ZodOptional<z.ZodNumber>;
                failed: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            failures: z.ZodOptional<z.ZodArray<z.ZodObject<{
                shard: z.ZodNumber;
                index: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node: z.ZodOptional<z.ZodString>;
                reason: z.ZodLazy<z.ZodObject<{
                    type: z.ZodString;
                    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                    stack_trace: z.ZodOptional<z.ZodString>;
                    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                }, z.core.$loose>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    profile: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type EsqlAsyncQueryStopResponse = z.infer<typeof EsqlAsyncQueryStopResponse>;
//# sourceMappingURL=esql_async_query_stop.d.ts.map