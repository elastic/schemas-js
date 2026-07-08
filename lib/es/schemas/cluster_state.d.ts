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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const ClusterStateClusterStateMetric: z.ZodEnum<{
    nodes: "nodes";
    version: "version";
    metadata: "metadata";
    blocks: "blocks";
    _all: "_all";
    master_node: "master_node";
    routing_table: "routing_table";
    routing_nodes: "routing_nodes";
    customs: "customs";
}>;
export type ClusterStateClusterStateMetric = z.infer<typeof ClusterStateClusterStateMetric>;
export declare const ClusterStateClusterStateMetrics: z.ZodUnion<readonly [z.ZodEnum<{
    nodes: "nodes";
    version: "version";
    metadata: "metadata";
    blocks: "blocks";
    _all: "_all";
    master_node: "master_node";
    routing_table: "routing_table";
    routing_nodes: "routing_nodes";
    customs: "customs";
}>, z.ZodArray<z.ZodEnum<{
    nodes: "nodes";
    version: "version";
    metadata: "metadata";
    blocks: "blocks";
    _all: "_all";
    master_node: "master_node";
    routing_table: "routing_table";
    routing_nodes: "routing_nodes";
    customs: "customs";
}>>]>;
export type ClusterStateClusterStateMetrics = z.infer<typeof ClusterStateClusterStateMetrics>;
/**
 * Get the cluster state.
 *
 * Get comprehensive information about the state of the cluster.
 *
 * The cluster state is an internal data structure which keeps track of a variety of information needed by every node, including the identity and attributes of the other nodes in the cluster; cluster-wide settings; index metadata, including the mapping and settings for each index; the location and status of every shard copy in the cluster.
 *
 * The elected master node ensures that every node in the cluster has a copy of the same cluster state.
 * This API lets you retrieve a representation of this internal state for debugging or diagnostic purposes.
 * You may need to consult the Elasticsearch source code to determine the precise meaning of the response.
 *
 * By default the API will route requests to the elected master node since this node is the authoritative source of cluster states.
 * You can also retrieve the cluster state held on the node handling the API request by adding the `?local=true` query parameter.
 *
 * Elasticsearch may need to expend significant effort to compute a response to this API in larger clusters, and the response may comprise a very large quantity of data.
 * If you use this API repeatedly, your cluster may become unstable.
 *
 * WARNING: The response is a representation of an internal data structure.
 * Its format is not subject to the same compatibility guarantees as other more stable APIs and may change from version to version.
 * Do not query this API using external monitoring tools.
 * Instead, obtain the information you require using other more stable cluster APIs.
 */
export declare const ClusterStateRequest: z.ZodObject<{
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        nodes: "nodes";
        version: "version";
        metadata: "metadata";
        blocks: "blocks";
        _all: "_all";
        master_node: "master_node";
        routing_table: "routing_table";
        routing_nodes: "routing_nodes";
        customs: "customs";
    }>, z.ZodArray<z.ZodEnum<{
        nodes: "nodes";
        version: "version";
        metadata: "metadata";
        blocks: "blocks";
        _all: "_all";
        master_node: "master_node";
        routing_table: "routing_table";
        routing_nodes: "routing_nodes";
        customs: "customs";
    }>>]>>;
    index: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    allow_no_indices: z.ZodOptional<z.ZodBoolean>;
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
    flat_settings: z.ZodOptional<z.ZodBoolean>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    local: z.ZodOptional<z.ZodBoolean>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_metadata_version: z.ZodOptional<z.ZodNumber>;
    wait_for_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type ClusterStateRequest = z.infer<typeof ClusterStateRequest>;
export declare const ClusterStateResponse: z.ZodAny;
export type ClusterStateResponse = z.infer<typeof ClusterStateResponse>;
//# sourceMappingURL=cluster_state.d.ts.map