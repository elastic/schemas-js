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
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
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
export declare const NodesNodesResponseBase: z.ZodObject<{
    node_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesNodesResponseBase = z.infer<typeof NodesNodesResponseBase>;
export declare const NodesUsageNodeUsage: z.ZodObject<{
    rest_actions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    since: z.ZodAny;
    timestamp: z.ZodAny;
    aggregations: z.ZodRecord<z.ZodString, z.ZodAny>;
}, z.core.$strip>;
export type NodesUsageNodeUsage = z.infer<typeof NodesUsageNodeUsage>;
export declare const NodesUsageNodesUsageMetric: z.ZodEnum<{
    aggregations: "aggregations";
    _all: "_all";
    rest_actions: "rest_actions";
}>;
export type NodesUsageNodesUsageMetric = z.infer<typeof NodesUsageNodesUsageMetric>;
export declare const NodesUsageNodesUsageMetrics: z.ZodUnion<readonly [z.ZodEnum<{
    aggregations: "aggregations";
    _all: "_all";
    rest_actions: "rest_actions";
}>, z.ZodArray<z.ZodEnum<{
    aggregations: "aggregations";
    _all: "_all";
    rest_actions: "rest_actions";
}>>]>;
export type NodesUsageNodesUsageMetrics = z.infer<typeof NodesUsageNodesUsageMetrics>;
/** Get feature usage information. */
export declare const NodesUsageRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        aggregations: "aggregations";
        _all: "_all";
        rest_actions: "rest_actions";
    }>, z.ZodArray<z.ZodEnum<{
        aggregations: "aggregations";
        _all: "_all";
        rest_actions: "rest_actions";
    }>>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type NodesUsageRequest = z.infer<typeof NodesUsageRequest>;
export declare const NodesUsageResponseBase: z.ZodObject<{
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        rest_actions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        since: z.ZodAny;
        timestamp: z.ZodAny;
        aggregations: z.ZodRecord<z.ZodString, z.ZodAny>;
    }, z.core.$strip>>;
    node_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesUsageResponseBase = z.infer<typeof NodesUsageResponseBase>;
export declare const NodesUsageResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        rest_actions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        since: z.ZodAny;
        timestamp: z.ZodAny;
        aggregations: z.ZodRecord<z.ZodString, z.ZodAny>;
    }, z.core.$strip>>;
    node_stats: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesUsageResponse = z.infer<typeof NodesUsageResponse>;
//# sourceMappingURL=nodes_usage.d.ts.map