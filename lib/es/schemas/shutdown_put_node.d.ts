import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const ShutdownType: z.ZodEnum<{
    replace: "replace";
    remove: "remove";
    restart: "restart";
}>;
export type ShutdownType = z.infer<typeof ShutdownType>;
/**
 * Prepare a node to be shut down.
 *
 * NOTE: This feature is designed for indirect use by Elastic Cloud, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * If you specify a node that is offline, it will be prepared for shut down when it rejoins the cluster.
 *
 * If the operator privileges feature is enabled, you must be an operator to use this API.
 *
 * The API migrates ongoing tasks and index shards to other nodes as needed to prepare a node to be restarted or shut down and removed from the cluster.
 * This ensures that Elasticsearch can be stopped safely with minimal disruption to the cluster.
 *
 * You must specify the type of shutdown: `restart`, `remove`, or `replace`.
 * If a node is already being prepared for shutdown, you can use this API to change the shutdown type.
 *
 * IMPORTANT: This API does NOT terminate the Elasticsearch process.
 * Monitor the node shutdown status to determine when it is safe to stop Elasticsearch.
 */
export declare const ShutdownPutNodeRequest: z.ZodObject<{
    node_id: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    type: z.ZodEnum<{
        replace: "replace";
        remove: "remove";
        restart: "restart";
    }>;
    reason: z.ZodString;
    allocation_delay: z.ZodOptional<z.ZodString>;
    target_node_name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ShutdownPutNodeRequest = z.infer<typeof ShutdownPutNodeRequest>;
export declare const ShutdownPutNodeResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type ShutdownPutNodeResponse = z.infer<typeof ShutdownPutNodeResponse>;
//# sourceMappingURL=shutdown_put_node.d.ts.map