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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const MlGetMemoryStatsJvmStats: z.ZodObject<{
    heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    heap_max_in_bytes: z.ZodNumber;
    java_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    java_inference_in_bytes: z.ZodNumber;
    java_inference_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    java_inference_max_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type MlGetMemoryStatsJvmStats = z.infer<typeof MlGetMemoryStatsJvmStats>;
export declare const MlGetMemoryStatsMemMlStats: z.ZodObject<{
    anomaly_detectors: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    anomaly_detectors_in_bytes: z.ZodNumber;
    data_frame_analytics: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    data_frame_analytics_in_bytes: z.ZodNumber;
    max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_in_bytes: z.ZodNumber;
    native_code_overhead: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    native_code_overhead_in_bytes: z.ZodNumber;
    native_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    native_inference_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type MlGetMemoryStatsMemMlStats = z.infer<typeof MlGetMemoryStatsMemMlStats>;
export declare const MlGetMemoryStatsMemStats: z.ZodObject<{
    adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    adjusted_total_in_bytes: z.ZodNumber;
    total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    total_in_bytes: z.ZodNumber;
    ml: z.ZodObject<{
        anomaly_detectors: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        anomaly_detectors_in_bytes: z.ZodNumber;
        data_frame_analytics: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        data_frame_analytics_in_bytes: z.ZodNumber;
        max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_in_bytes: z.ZodNumber;
        native_code_overhead: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        native_code_overhead_in_bytes: z.ZodNumber;
        native_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        native_inference_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MlGetMemoryStatsMemStats = z.infer<typeof MlGetMemoryStatsMemStats>;
export declare const MlGetMemoryStatsMemory: z.ZodObject<{
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    jvm: z.ZodObject<{
        heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        heap_max_in_bytes: z.ZodNumber;
        java_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        java_inference_in_bytes: z.ZodNumber;
        java_inference_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        java_inference_max_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
    mem: z.ZodObject<{
        adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        adjusted_total_in_bytes: z.ZodNumber;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        total_in_bytes: z.ZodNumber;
        ml: z.ZodObject<{
            anomaly_detectors: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            anomaly_detectors_in_bytes: z.ZodNumber;
            data_frame_analytics: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            data_frame_analytics_in_bytes: z.ZodNumber;
            max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_in_bytes: z.ZodNumber;
            native_code_overhead: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            native_code_overhead_in_bytes: z.ZodNumber;
            native_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            native_inference_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    name: z.ZodString;
    roles: z.ZodArray<z.ZodString>;
    transport_address: z.ZodString;
    ephemeral_id: z.ZodString;
}, z.core.$strip>;
export type MlGetMemoryStatsMemory = z.infer<typeof MlGetMemoryStatsMemory>;
/**
 * Get machine learning memory usage info.
 *
 * Get information about how machine learning jobs and trained models are using memory,
 * on each node, both within the JVM heap, and natively, outside of the JVM.
 */
export declare const MlGetMemoryStatsRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodString>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlGetMemoryStatsRequest = z.infer<typeof MlGetMemoryStatsRequest>;
export declare const MlGetMemoryStatsResponse: z.ZodObject<{
    _nodes: z.ZodObject<{
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
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        jvm: z.ZodObject<{
            heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            heap_max_in_bytes: z.ZodNumber;
            java_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            java_inference_in_bytes: z.ZodNumber;
            java_inference_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            java_inference_max_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        mem: z.ZodObject<{
            adjusted_total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            adjusted_total_in_bytes: z.ZodNumber;
            total: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            total_in_bytes: z.ZodNumber;
            ml: z.ZodObject<{
                anomaly_detectors: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                anomaly_detectors_in_bytes: z.ZodNumber;
                data_frame_analytics: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                data_frame_analytics_in_bytes: z.ZodNumber;
                max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                max_in_bytes: z.ZodNumber;
                native_code_overhead: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                native_code_overhead_in_bytes: z.ZodNumber;
                native_inference: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                native_inference_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        name: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
        transport_address: z.ZodString;
        ephemeral_id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetMemoryStatsResponse = z.infer<typeof MlGetMemoryStatsResponse>;
//# sourceMappingURL=ml_get_memory_stats.d.ts.map