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
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ClusterRemoteInfoClusterRemoteSniffInfo: z.ZodObject<{
    mode: z.ZodLiteral<"sniff">;
    connected: z.ZodBoolean;
    max_connections_per_cluster: z.ZodNumber;
    num_nodes_connected: z.ZodNumber;
    initial_connect_timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    skip_unavailable: z.ZodBoolean;
    seeds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ClusterRemoteInfoClusterRemoteSniffInfo = z.infer<typeof ClusterRemoteInfoClusterRemoteSniffInfo>;
export declare const ClusterRemoteInfoClusterRemoteProxyInfo: z.ZodObject<{
    mode: z.ZodLiteral<"proxy">;
    connected: z.ZodBoolean;
    initial_connect_timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    skip_unavailable: z.ZodBoolean;
    proxy_address: z.ZodString;
    server_name: z.ZodString;
    num_proxy_sockets_connected: z.ZodNumber;
    max_proxy_socket_connections: z.ZodNumber;
    cluster_credentials: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterRemoteInfoClusterRemoteProxyInfo = z.infer<typeof ClusterRemoteInfoClusterRemoteProxyInfo>;
export declare const ClusterRemoteInfoClusterRemoteInfo: z.ZodUnion<readonly [z.ZodObject<{
    mode: z.ZodLiteral<"sniff">;
    connected: z.ZodBoolean;
    max_connections_per_cluster: z.ZodNumber;
    num_nodes_connected: z.ZodNumber;
    initial_connect_timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    skip_unavailable: z.ZodBoolean;
    seeds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    mode: z.ZodLiteral<"proxy">;
    connected: z.ZodBoolean;
    initial_connect_timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    skip_unavailable: z.ZodBoolean;
    proxy_address: z.ZodString;
    server_name: z.ZodString;
    num_proxy_sockets_connected: z.ZodNumber;
    max_proxy_socket_connections: z.ZodNumber;
    cluster_credentials: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>;
export type ClusterRemoteInfoClusterRemoteInfo = z.infer<typeof ClusterRemoteInfoClusterRemoteInfo>;
/**
 * Get remote cluster information.
 *
 * Get information about configured remote clusters.
 * The API returns connection and endpoint information keyed by the configured remote cluster alias.
 *
 * > info
 * > This API returns information that reflects current state on the local cluster.
 * > The `connected` field does not necessarily reflect whether a remote cluster is down or unavailable, only whether there is currently an open connection to it.
 * > Elasticsearch does not spontaneously try to reconnect to a disconnected remote cluster.
 * > To trigger a reconnection, attempt a cross-cluster search, ES|QL cross-cluster search, or try the [resolve cluster endpoint](https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-indices-resolve-cluster).
 */
export declare const ClusterRemoteInfoRequest: z.ZodObject<{}, z.core.$strip>;
export type ClusterRemoteInfoRequest = z.infer<typeof ClusterRemoteInfoRequest>;
export declare const ClusterRemoteInfoResponse: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodObject<{
    mode: z.ZodLiteral<"sniff">;
    connected: z.ZodBoolean;
    max_connections_per_cluster: z.ZodNumber;
    num_nodes_connected: z.ZodNumber;
    initial_connect_timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    skip_unavailable: z.ZodBoolean;
    seeds: z.ZodArray<z.ZodString>;
}, z.core.$strip>, z.ZodObject<{
    mode: z.ZodLiteral<"proxy">;
    connected: z.ZodBoolean;
    initial_connect_timeout: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    skip_unavailable: z.ZodBoolean;
    proxy_address: z.ZodString;
    server_name: z.ZodString;
    num_proxy_sockets_connected: z.ZodNumber;
    max_proxy_socket_connections: z.ZodNumber;
    cluster_credentials: z.ZodOptional<z.ZodString>;
}, z.core.$strip>]>>;
export type ClusterRemoteInfoResponse = z.infer<typeof ClusterRemoteInfoResponse>;
//# sourceMappingURL=cluster_remote_info.d.ts.map