import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const ClusterAlias: z.ZodString;
export type ClusterAlias = z.infer<typeof ClusterAlias>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
/** Reduced (minimal) info ElasticsearchVersion */
export declare const ElasticsearchVersionMinInfo: z.ZodObject<{
    build_flavor: z.ZodString;
    minimum_index_compatibility_version: z.ZodString;
    minimum_wire_compatibility_version: z.ZodString;
    number: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchVersionMinInfo = z.infer<typeof ElasticsearchVersionMinInfo>;
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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const Names: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Names = z.infer<typeof Names>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Resolve the cluster.
 *
 * Resolve the specified index expressions to return information about each cluster, including the local "querying" cluster, if included.
 * If no index expression is provided, the API will return information about all the remote clusters that are configured on the querying cluster.
 *
 * This endpoint is useful before doing a cross-cluster search in order to determine which remote clusters should be included in a search.
 *
 * You use the same index expression with this endpoint as you would for cross-cluster search.
 * Index and cluster exclusions are also supported with this endpoint.
 *
 * For each cluster in the index expression, information is returned about:
 *
 * * Whether the querying ("local") cluster is currently connected to each remote cluster specified in the index expression. Note that this endpoint actively attempts to contact the remote clusters, unlike the `remote/info` endpoint.
 * * Whether each remote cluster is configured with `skip_unavailable` as `true` or `false`.
 * * Whether there are any indices, aliases, or data streams on that cluster that match the index expression.
 * * Whether the search is likely to have errors returned when you do the cross-cluster search (including any authorization errors if you do not have permission to query the index).
 * * Cluster version information, including the Elasticsearch server version.
 *
 * For example, `GET /_resolve/cluster/my-index-*,cluster*:my-index-*` returns information about the local cluster and all remotely configured clusters that start with the alias `cluster*`.
 * Each cluster returns information about whether it has any indices, aliases or data streams that match `my-index-*`.
 *
 * ## Note on backwards compatibility
 * The ability to query without an index expression was added in version 8.18, so when
 * querying remote clusters older than that, the local cluster will send the index
 * expression `dummy*` to those remote clusters. Thus, if an errors occur, you may see a reference
 * to that index expression even though you didn't request it. If it causes a problem, you can
 * instead include an index expression like `*:*` to bypass the issue.
 *
 * ## Advantages of using this endpoint before a cross-cluster search
 *
 * You may want to exclude a cluster or index from a search when:
 *
 * * A remote cluster is not currently connected and is configured with `skip_unavailable=false`. Running a cross-cluster search under those conditions will cause the entire search to fail.
 * * A cluster has no matching indices, aliases or data streams for the index expression (or your user does not have permissions to search them). For example, suppose your index expression is `logs*,remote1:logs*` and the remote1 cluster has no indices, aliases or data streams that match `logs*`. In that case, that cluster will return no results from that cluster if you include it in a cross-cluster search.
 * * The index expression (combined with any query parameters you specify) will likely cause an exception to be thrown when you do the search. In these cases, the "error" field in the `_resolve/cluster` response will be present. (This is also where security/permission errors will be shown.)
 * * A remote cluster is an older version that does not support the feature you want to use in your search.
 *
 * ## Test availability of remote clusters
 *
 * The `remote/info` endpoint is commonly used to test whether the "local" cluster (the cluster being queried) is connected to its remote clusters, but it does not necessarily reflect whether the remote cluster is available or not.
 * The remote cluster may be available, while the local cluster is not currently connected to it.
 *
 * You can use the `_resolve/cluster` API to attempt to reconnect to remote clusters.
 * For example with `GET _resolve/cluster` or `GET _resolve/cluster/*:*`.
 * The `connected` field in the response will indicate whether it was successful.
 * If a connection was (re-)established, this will also cause the `remote/info` endpoint to now indicate a connected status.
 */
export declare const IndicesResolveClusterRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
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
    ignore_throttled: z.ZodOptional<z.ZodBoolean>;
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type IndicesResolveClusterRequest = z.infer<typeof IndicesResolveClusterRequest>;
/** Provides information about each cluster request relevant to doing a cross-cluster search. */
export declare const IndicesResolveClusterResolveClusterInfo: z.ZodObject<{
    connected: z.ZodBoolean;
    skip_unavailable: z.ZodBoolean;
    matching_indices: z.ZodOptional<z.ZodBoolean>;
    error: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodObject<{
        build_flavor: z.ZodString;
        minimum_index_compatibility_version: z.ZodString;
        minimum_wire_compatibility_version: z.ZodString;
        number: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesResolveClusterResolveClusterInfo = z.infer<typeof IndicesResolveClusterResolveClusterInfo>;
export declare const IndicesResolveClusterResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    connected: z.ZodBoolean;
    skip_unavailable: z.ZodBoolean;
    matching_indices: z.ZodOptional<z.ZodBoolean>;
    error: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodObject<{
        build_flavor: z.ZodString;
        minimum_index_compatibility_version: z.ZodString;
        minimum_wire_compatibility_version: z.ZodString;
        number: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>>;
export type IndicesResolveClusterResponse = z.infer<typeof IndicesResolveClusterResponse>;
//# sourceMappingURL=indices_resolve_cluster.d.ts.map