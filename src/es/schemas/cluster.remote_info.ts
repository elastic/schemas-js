/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, integer, long } from './_types.js'

export const ClusterRemoteInfoClusterRemoteSniffInfo = z.object({
  mode: z.literal('sniff').describe('The connection mode for the remote cluster.'),
  connected: z.boolean().describe('If it is `true`, there is at least one open connection to the remote cluster. If it is `false`, it means that the cluster no longer has an open connection to the remote cluster. It does not necessarily mean that the remote cluster is down or unavailable, just that at some point a connection was lost.'),
  max_connections_per_cluster: z.lazy(() => integer).describe('The maximum number of connections maintained for the remote cluster when sniff mode is configured.'),
  num_nodes_connected: z.lazy(() => long).describe('The number of connected nodes in the remote cluster when sniff mode is configured.'),
  initial_connect_timeout: z.lazy(() => Duration).describe('The initial connect timeout for remote cluster connections.'),
  skip_unavailable: z.boolean().describe('If `true`, cross-cluster search skips the remote cluster when its nodes are unavailable during the search and ignores errors returned by the remote cluster.'),
  seeds: z.array(z.string()).describe('The initial seed transport addresses of the remote cluster when sniff mode is configured.')
}).meta({ id: 'ClusterRemoteInfoClusterRemoteSniffInfo' })
export type ClusterRemoteInfoClusterRemoteSniffInfo = z.infer<typeof ClusterRemoteInfoClusterRemoteSniffInfo>

export const ClusterRemoteInfoClusterRemoteProxyInfo = z.object({
  mode: z.literal('proxy').describe('The connection mode for the remote cluster.'),
  connected: z.boolean().describe('If it is `true`, there is at least one open connection to the remote cluster. If it is `false`, it means that the cluster no longer has an open connection to the remote cluster. It does not necessarily mean that the remote cluster is down or unavailable, just that at some point a connection was lost.'),
  initial_connect_timeout: z.lazy(() => Duration).describe('The initial connect timeout for remote cluster connections.'),
  skip_unavailable: z.boolean().describe('If `true`, cross-cluster search skips the remote cluster when its nodes are unavailable during the search and ignores errors returned by the remote cluster.'),
  proxy_address: z.string().describe('The address for remote connections when proxy mode is configured.'),
  server_name: z.string(),
  num_proxy_sockets_connected: z.lazy(() => integer).describe('The number of open socket connections to the remote cluster when proxy mode is configured.'),
  max_proxy_socket_connections: z.lazy(() => integer).describe('The maximum number of socket connections to the remote cluster when proxy mode is configured.'),
  cluster_credentials: z.string().describe('This field is present and has a value of `::es_redacted::` only when the remote cluster is configured with the API key based model. Otherwise, the field is not present.').optional()
}).meta({ id: 'ClusterRemoteInfoClusterRemoteProxyInfo' })
export type ClusterRemoteInfoClusterRemoteProxyInfo = z.infer<typeof ClusterRemoteInfoClusterRemoteProxyInfo>

export const ClusterRemoteInfoClusterRemoteInfo = z.union([ClusterRemoteInfoClusterRemoteSniffInfo, ClusterRemoteInfoClusterRemoteProxyInfo]).meta({ id: 'ClusterRemoteInfoClusterRemoteInfo' })
export type ClusterRemoteInfoClusterRemoteInfo = z.infer<typeof ClusterRemoteInfoClusterRemoteInfo>

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
export const ClusterRemoteInfoRequest = z.object({
}).meta({ id: 'ClusterRemoteInfoRequest' })
export type ClusterRemoteInfoRequest = z.infer<typeof ClusterRemoteInfoRequest>

export const ClusterRemoteInfoResponse = z.record(z.string(), ClusterRemoteInfoClusterRemoteInfo).meta({ id: 'ClusterRemoteInfoResponse' })
export type ClusterRemoteInfoResponse = z.infer<typeof ClusterRemoteInfoResponse>
