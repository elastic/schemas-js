/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, DurationValue, EpochTime, Host, Id, Ip, Name, NodeIds, NodeRoles, NodeStatistics, PluginStats, TransportAddress, VersionNumber, VersionString, integer, long } from './_types.js'

export const IndicesIndexRoutingAllocationOptions = z.enum(['all', 'primaries', 'new_primaries', 'none']).meta({ id: 'IndicesIndexRoutingAllocationOptions' })
export type IndicesIndexRoutingAllocationOptions = z.infer<typeof IndicesIndexRoutingAllocationOptions>

export const IndicesIndexRoutingAllocationInclude = z.object({
  _tier_preference: z.string().optional(),
  _id: z.lazy(() => Id).optional()
}).meta({ id: 'IndicesIndexRoutingAllocationInclude' })
export type IndicesIndexRoutingAllocationInclude = z.infer<typeof IndicesIndexRoutingAllocationInclude>

export const IndicesIndexRoutingAllocationInitialRecovery = z.object({
  _id: z.lazy(() => Id).optional()
}).meta({ id: 'IndicesIndexRoutingAllocationInitialRecovery' })
export type IndicesIndexRoutingAllocationInitialRecovery = z.infer<typeof IndicesIndexRoutingAllocationInitialRecovery>

export const IndicesIndexRoutingAllocationDisk = z.object({
  threshold_enabled: z.union([z.boolean(), z.string()]).optional()
}).meta({ id: 'IndicesIndexRoutingAllocationDisk' })
export type IndicesIndexRoutingAllocationDisk = z.infer<typeof IndicesIndexRoutingAllocationDisk>

export const IndicesIndexRoutingAllocation = z.object({
  enable: IndicesIndexRoutingAllocationOptions.optional(),
  include: IndicesIndexRoutingAllocationInclude.optional(),
  initial_recovery: IndicesIndexRoutingAllocationInitialRecovery.optional(),
  disk: IndicesIndexRoutingAllocationDisk.optional()
}).meta({ id: 'IndicesIndexRoutingAllocation' })
export type IndicesIndexRoutingAllocation = z.infer<typeof IndicesIndexRoutingAllocation>

export const IndicesIndexRoutingRebalanceOptions = z.enum(['all', 'primaries', 'replicas', 'none']).meta({ id: 'IndicesIndexRoutingRebalanceOptions' })
export type IndicesIndexRoutingRebalanceOptions = z.infer<typeof IndicesIndexRoutingRebalanceOptions>

export const IndicesIndexRoutingRebalance = z.object({
  enable: IndicesIndexRoutingRebalanceOptions
}).meta({ id: 'IndicesIndexRoutingRebalance' })
export type IndicesIndexRoutingRebalance = z.infer<typeof IndicesIndexRoutingRebalance>

export const IndicesIndexRouting = z.object({
  allocation: IndicesIndexRoutingAllocation.optional(),
  rebalance: IndicesIndexRoutingRebalance.optional()
}).meta({ id: 'IndicesIndexRouting' })
export type IndicesIndexRouting = z.infer<typeof IndicesIndexRouting>

export const NodesInfoDeprecationIndexing = z.object({
  enabled: z.union([z.boolean(), z.string()])
}).meta({ id: 'NodesInfoDeprecationIndexing' })
export type NodesInfoDeprecationIndexing = z.infer<typeof NodesInfoDeprecationIndexing>

export const NodesInfoNodeInfoHttp = z.object({
  bound_address: z.array(z.string()),
  max_content_length: z.lazy(() => ByteSize).optional(),
  max_content_length_in_bytes: z.lazy(() => long),
  publish_address: z.string()
}).meta({ id: 'NodesInfoNodeInfoHttp' })
export type NodesInfoNodeInfoHttp = z.infer<typeof NodesInfoNodeInfoHttp>

export const NodesInfoNodeInfoJvmMemory = z.object({
  direct_max: z.lazy(() => ByteSize).optional(),
  direct_max_in_bytes: z.lazy(() => long),
  heap_init: z.lazy(() => ByteSize).optional(),
  heap_init_in_bytes: z.lazy(() => long),
  heap_max: z.lazy(() => ByteSize).optional(),
  heap_max_in_bytes: z.lazy(() => long),
  non_heap_init: z.lazy(() => ByteSize).optional(),
  non_heap_init_in_bytes: z.lazy(() => long),
  non_heap_max: z.lazy(() => ByteSize).optional(),
  non_heap_max_in_bytes: z.lazy(() => long)
}).meta({ id: 'NodesInfoNodeInfoJvmMemory' })
export type NodesInfoNodeInfoJvmMemory = z.infer<typeof NodesInfoNodeInfoJvmMemory>

export const NodesInfoNodeJvmInfo = z.object({
  gc_collectors: z.array(z.string()),
  mem: NodesInfoNodeInfoJvmMemory,
  memory_pools: z.array(z.string()),
  pid: z.lazy(() => integer),
  start_time_in_millis: z.lazy(() => EpochTime),
  version: z.lazy(() => VersionString),
  vm_name: z.lazy(() => Name),
  vm_vendor: z.string(),
  vm_version: z.lazy(() => VersionString),
  using_bundled_jdk: z.boolean(),
  using_compressed_ordinary_object_pointers: z.union([z.boolean(), z.string()]).optional(),
  input_arguments: z.array(z.string())
}).meta({ id: 'NodesInfoNodeJvmInfo' })
export type NodesInfoNodeJvmInfo = z.infer<typeof NodesInfoNodeJvmInfo>

export const NodesInfoNodeInfoOSCPU = z.object({
  cache_size: z.string(),
  cache_size_in_bytes: z.lazy(() => integer),
  cores_per_socket: z.lazy(() => integer),
  mhz: z.lazy(() => integer),
  model: z.string(),
  total_cores: z.lazy(() => integer),
  total_sockets: z.lazy(() => integer),
  vendor: z.string()
}).meta({ id: 'NodesInfoNodeInfoOSCPU' })
export type NodesInfoNodeInfoOSCPU = z.infer<typeof NodesInfoNodeInfoOSCPU>

export const NodesInfoNodeInfoMemory = z.object({
  total: z.string(),
  total_in_bytes: z.lazy(() => long)
}).meta({ id: 'NodesInfoNodeInfoMemory' })
export type NodesInfoNodeInfoMemory = z.infer<typeof NodesInfoNodeInfoMemory>

export const NodesInfoNodeOperatingSystemInfo = z.object({
  arch: z.string().describe('Name of the JVM architecture (ex: amd64, x86)'),
  available_processors: z.lazy(() => integer).describe('Number of processors available to the Java virtual machine'),
  allocated_processors: z.lazy(() => integer).describe('The number of processors actually used to calculate thread pool size. This number can be set with the node.processors setting of a node and defaults to the number of processors reported by the OS.').optional(),
  name: z.lazy(() => Name).describe('Name of the operating system (ex: Linux, Windows, Mac OS X)'),
  pretty_name: z.lazy(() => Name),
  refresh_interval_in_millis: z.lazy(() => DurationValue).describe('Refresh interval for the OS statistics'),
  version: z.lazy(() => VersionString).describe('Version of the operating system'),
  cpu: NodesInfoNodeInfoOSCPU.optional(),
  mem: NodesInfoNodeInfoMemory.optional(),
  swap: NodesInfoNodeInfoMemory.optional()
}).meta({ id: 'NodesInfoNodeOperatingSystemInfo' })
export type NodesInfoNodeOperatingSystemInfo = z.infer<typeof NodesInfoNodeOperatingSystemInfo>

export const NodesInfoNodeProcessInfo = z.object({
  id: z.lazy(() => long).describe('Process identifier (PID)'),
  mlockall: z.boolean().describe('Indicates if the process address space has been successfully locked in memory'),
  refresh_interval_in_millis: z.lazy(() => DurationValue).describe('Refresh interval for the process statistics')
}).meta({ id: 'NodesInfoNodeProcessInfo' })
export type NodesInfoNodeProcessInfo = z.infer<typeof NodesInfoNodeProcessInfo>

export const NodesInfoNodeInfoSettingsClusterElection = z.object({
  strategy: z.lazy(() => Name)
}).meta({ id: 'NodesInfoNodeInfoSettingsClusterElection' })
export type NodesInfoNodeInfoSettingsClusterElection = z.infer<typeof NodesInfoNodeInfoSettingsClusterElection>

export const NodesInfoNodeInfoSettingsCluster = z.object({
  name: z.lazy(() => Name),
  routing: z.lazy(() => IndicesIndexRouting).optional(),
  election: NodesInfoNodeInfoSettingsClusterElection,
  initial_master_nodes: z.union([z.array(z.string()), z.string()]).optional(),
  deprecation_indexing: NodesInfoDeprecationIndexing.optional()
}).meta({ id: 'NodesInfoNodeInfoSettingsCluster' })
export type NodesInfoNodeInfoSettingsCluster = z.infer<typeof NodesInfoNodeInfoSettingsCluster>

export const NodesInfoNodeInfoSettingsNode = z.object({
  name: z.lazy(() => Name),
  attr: z.record(z.string(), z.any()),
  max_local_storage_nodes: z.string().optional()
}).meta({ id: 'NodesInfoNodeInfoSettingsNode' })
export type NodesInfoNodeInfoSettingsNode = z.infer<typeof NodesInfoNodeInfoSettingsNode>

export const NodesInfoNodeInfoPath = z.object({
  logs: z.string().optional(),
  home: z.string().optional(),
  repo: z.array(z.string()).optional(),
  data: z.union([z.string(), z.array(z.string())]).optional()
}).meta({ id: 'NodesInfoNodeInfoPath' })
export type NodesInfoNodeInfoPath = z.infer<typeof NodesInfoNodeInfoPath>

export const NodesInfoNodeInfoRepositoriesUrl = z.object({
  allowed_urls: z.string()
}).meta({ id: 'NodesInfoNodeInfoRepositoriesUrl' })
export type NodesInfoNodeInfoRepositoriesUrl = z.infer<typeof NodesInfoNodeInfoRepositoriesUrl>

export const NodesInfoNodeInfoRepositories = z.object({
  url: NodesInfoNodeInfoRepositoriesUrl
}).meta({ id: 'NodesInfoNodeInfoRepositories' })
export type NodesInfoNodeInfoRepositories = z.infer<typeof NodesInfoNodeInfoRepositories>

export const NodesInfoNodeInfoDiscover = z.object({
  seed_hosts: z.union([z.array(z.string()), z.string()]).optional(),
  type: z.string().optional(),
  seed_providers: z.union([z.array(z.string()), z.string()]).optional()
}).catchall(z.any()).meta({ id: 'NodesInfoNodeInfoDiscover' })
export type NodesInfoNodeInfoDiscover = z.infer<typeof NodesInfoNodeInfoDiscover>

export const NodesInfoNodeInfoAction = z.object({
  destructive_requires_name: z.string()
}).meta({ id: 'NodesInfoNodeInfoAction' })
export type NodesInfoNodeInfoAction = z.infer<typeof NodesInfoNodeInfoAction>

export const NodesInfoNodeInfoClient = z.object({
  type: z.string()
}).meta({ id: 'NodesInfoNodeInfoClient' })
export type NodesInfoNodeInfoClient = z.infer<typeof NodesInfoNodeInfoClient>

export const NodesInfoNodeInfoSettingsHttpType = z.object({
  default: z.string()
}).meta({ id: 'NodesInfoNodeInfoSettingsHttpType' })
export type NodesInfoNodeInfoSettingsHttpType = z.infer<typeof NodesInfoNodeInfoSettingsHttpType>

export const NodesInfoNodeInfoSettingsHttp = z.object({
  type: z.union([NodesInfoNodeInfoSettingsHttpType, z.string()]),
  'type.default': z.string().optional(),
  compression: z.union([z.boolean(), z.string()]).optional(),
  port: z.union([z.lazy(() => integer), z.string()]).optional()
}).meta({ id: 'NodesInfoNodeInfoSettingsHttp' })
export type NodesInfoNodeInfoSettingsHttp = z.infer<typeof NodesInfoNodeInfoSettingsHttp>

export const NodesInfoNodeInfoBootstrap = z.object({
  memory_lock: z.string()
}).meta({ id: 'NodesInfoNodeInfoBootstrap' })
export type NodesInfoNodeInfoBootstrap = z.infer<typeof NodesInfoNodeInfoBootstrap>

export const NodesInfoNodeInfoSettingsTransportType = z.object({
  default: z.string()
}).meta({ id: 'NodesInfoNodeInfoSettingsTransportType' })
export type NodesInfoNodeInfoSettingsTransportType = z.infer<typeof NodesInfoNodeInfoSettingsTransportType>

export const NodesInfoNodeInfoSettingsTransportFeatures = z.object({
  'x-pack': z.string()
}).meta({ id: 'NodesInfoNodeInfoSettingsTransportFeatures' })
export type NodesInfoNodeInfoSettingsTransportFeatures = z.infer<typeof NodesInfoNodeInfoSettingsTransportFeatures>

export const NodesInfoNodeInfoSettingsTransport = z.object({
  type: z.union([NodesInfoNodeInfoSettingsTransportType, z.string()]),
  'type.default': z.string().optional(),
  features: NodesInfoNodeInfoSettingsTransportFeatures.optional()
}).meta({ id: 'NodesInfoNodeInfoSettingsTransport' })
export type NodesInfoNodeInfoSettingsTransport = z.infer<typeof NodesInfoNodeInfoSettingsTransport>

export const NodesInfoNodeInfoSettingsNetwork = z.object({
  host: z.union([z.lazy(() => Host), z.array(z.lazy(() => Host))]).optional()
}).meta({ id: 'NodesInfoNodeInfoSettingsNetwork' })
export type NodesInfoNodeInfoSettingsNetwork = z.infer<typeof NodesInfoNodeInfoSettingsNetwork>

export const NodesInfoNodeInfoXpackLicenseType = z.object({
  type: z.string()
}).meta({ id: 'NodesInfoNodeInfoXpackLicenseType' })
export type NodesInfoNodeInfoXpackLicenseType = z.infer<typeof NodesInfoNodeInfoXpackLicenseType>

export const NodesInfoNodeInfoXpackLicense = z.object({
  self_generated: NodesInfoNodeInfoXpackLicenseType
}).meta({ id: 'NodesInfoNodeInfoXpackLicense' })
export type NodesInfoNodeInfoXpackLicense = z.infer<typeof NodesInfoNodeInfoXpackLicense>

export const NodesInfoNodeInfoXpackSecuritySsl = z.object({
  ssl: z.record(z.string(), z.string())
}).meta({ id: 'NodesInfoNodeInfoXpackSecuritySsl' })
export type NodesInfoNodeInfoXpackSecuritySsl = z.infer<typeof NodesInfoNodeInfoXpackSecuritySsl>

export const NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus = z.object({
  enabled: z.string().optional(),
  order: z.string()
}).meta({ id: 'NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus' })
export type NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus>

export const NodesInfoNodeInfoXpackSecurityAuthcRealms = z.object({
  file: z.record(z.string(), NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus).optional(),
  native: z.record(z.string(), NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus).optional(),
  pki: z.record(z.string(), NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus).optional()
}).meta({ id: 'NodesInfoNodeInfoXpackSecurityAuthcRealms' })
export type NodesInfoNodeInfoXpackSecurityAuthcRealms = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthcRealms>

export const NodesInfoNodeInfoXpackSecurityAuthcToken = z.object({
  enabled: z.string()
}).meta({ id: 'NodesInfoNodeInfoXpackSecurityAuthcToken' })
export type NodesInfoNodeInfoXpackSecurityAuthcToken = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthcToken>

export const NodesInfoNodeInfoXpackSecurityAuthc = z.object({
  realms: NodesInfoNodeInfoXpackSecurityAuthcRealms.optional(),
  token: NodesInfoNodeInfoXpackSecurityAuthcToken.optional()
}).meta({ id: 'NodesInfoNodeInfoXpackSecurityAuthc' })
export type NodesInfoNodeInfoXpackSecurityAuthc = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthc>

export const NodesInfoNodeInfoXpackSecurity = z.object({
  http: NodesInfoNodeInfoXpackSecuritySsl.optional(),
  enabled: z.string(),
  transport: NodesInfoNodeInfoXpackSecuritySsl.optional(),
  authc: NodesInfoNodeInfoXpackSecurityAuthc.optional()
}).meta({ id: 'NodesInfoNodeInfoXpackSecurity' })
export type NodesInfoNodeInfoXpackSecurity = z.infer<typeof NodesInfoNodeInfoXpackSecurity>

export const NodesInfoNodeInfoXpackMl = z.object({
  use_auto_machine_memory_percent: z.boolean().optional()
}).meta({ id: 'NodesInfoNodeInfoXpackMl' })
export type NodesInfoNodeInfoXpackMl = z.infer<typeof NodesInfoNodeInfoXpackMl>

export const NodesInfoNodeInfoXpack = z.object({
  license: NodesInfoNodeInfoXpackLicense.optional(),
  security: NodesInfoNodeInfoXpackSecurity,
  notification: z.record(z.string(), z.any()).optional(),
  ml: NodesInfoNodeInfoXpackMl.optional()
}).meta({ id: 'NodesInfoNodeInfoXpack' })
export type NodesInfoNodeInfoXpack = z.infer<typeof NodesInfoNodeInfoXpack>

export const NodesInfoNodeInfoScript = z.object({
  allowed_types: z.string(),
  disable_max_compilations_rate: z.string().optional()
}).meta({ id: 'NodesInfoNodeInfoScript' })
export type NodesInfoNodeInfoScript = z.infer<typeof NodesInfoNodeInfoScript>

export const NodesInfoNodeInfoSearchRemote = z.object({
  connect: z.string()
}).meta({ id: 'NodesInfoNodeInfoSearchRemote' })
export type NodesInfoNodeInfoSearchRemote = z.infer<typeof NodesInfoNodeInfoSearchRemote>

export const NodesInfoNodeInfoSearch = z.object({
  remote: NodesInfoNodeInfoSearchRemote
}).meta({ id: 'NodesInfoNodeInfoSearch' })
export type NodesInfoNodeInfoSearch = z.infer<typeof NodesInfoNodeInfoSearch>

export const NodesInfoNodeInfoIngestDownloader = z.object({
  enabled: z.string()
}).meta({ id: 'NodesInfoNodeInfoIngestDownloader' })
export type NodesInfoNodeInfoIngestDownloader = z.infer<typeof NodesInfoNodeInfoIngestDownloader>

export const NodesInfoNodeInfoIngestInfo = z.object({
  downloader: NodesInfoNodeInfoIngestDownloader
}).meta({ id: 'NodesInfoNodeInfoIngestInfo' })
export type NodesInfoNodeInfoIngestInfo = z.infer<typeof NodesInfoNodeInfoIngestInfo>

export const NodesInfoNodeInfoSettingsIngest = z.object({
  attachment: NodesInfoNodeInfoIngestInfo.optional(),
  append: NodesInfoNodeInfoIngestInfo.optional(),
  csv: NodesInfoNodeInfoIngestInfo.optional(),
  convert: NodesInfoNodeInfoIngestInfo.optional(),
  date: NodesInfoNodeInfoIngestInfo.optional(),
  date_index_name: NodesInfoNodeInfoIngestInfo.optional(),
  dot_expander: NodesInfoNodeInfoIngestInfo.optional(),
  enrich: NodesInfoNodeInfoIngestInfo.optional(),
  fail: NodesInfoNodeInfoIngestInfo.optional(),
  foreach: NodesInfoNodeInfoIngestInfo.optional(),
  json: NodesInfoNodeInfoIngestInfo.optional(),
  user_agent: NodesInfoNodeInfoIngestInfo.optional(),
  kv: NodesInfoNodeInfoIngestInfo.optional(),
  geoip: NodesInfoNodeInfoIngestInfo.optional(),
  grok: NodesInfoNodeInfoIngestInfo.optional(),
  gsub: NodesInfoNodeInfoIngestInfo.optional(),
  join: NodesInfoNodeInfoIngestInfo.optional(),
  lowercase: NodesInfoNodeInfoIngestInfo.optional(),
  remove: NodesInfoNodeInfoIngestInfo.optional(),
  rename: NodesInfoNodeInfoIngestInfo.optional(),
  script: NodesInfoNodeInfoIngestInfo.optional(),
  set: NodesInfoNodeInfoIngestInfo.optional(),
  sort: NodesInfoNodeInfoIngestInfo.optional(),
  split: NodesInfoNodeInfoIngestInfo.optional(),
  trim: NodesInfoNodeInfoIngestInfo.optional(),
  uppercase: NodesInfoNodeInfoIngestInfo.optional(),
  urldecode: NodesInfoNodeInfoIngestInfo.optional(),
  bytes: NodesInfoNodeInfoIngestInfo.optional(),
  dissect: NodesInfoNodeInfoIngestInfo.optional(),
  set_security_user: NodesInfoNodeInfoIngestInfo.optional(),
  pipeline: NodesInfoNodeInfoIngestInfo.optional(),
  drop: NodesInfoNodeInfoIngestInfo.optional(),
  circle: NodesInfoNodeInfoIngestInfo.optional(),
  inference: NodesInfoNodeInfoIngestInfo.optional()
}).meta({ id: 'NodesInfoNodeInfoSettingsIngest' })
export type NodesInfoNodeInfoSettingsIngest = z.infer<typeof NodesInfoNodeInfoSettingsIngest>

export const NodesInfoNodeInfoSettings = z.object({
  cluster: NodesInfoNodeInfoSettingsCluster,
  node: NodesInfoNodeInfoSettingsNode,
  path: NodesInfoNodeInfoPath.optional(),
  repositories: NodesInfoNodeInfoRepositories.optional(),
  discovery: NodesInfoNodeInfoDiscover.optional(),
  action: NodesInfoNodeInfoAction.optional(),
  client: NodesInfoNodeInfoClient.optional(),
  http: NodesInfoNodeInfoSettingsHttp,
  bootstrap: NodesInfoNodeInfoBootstrap.optional(),
  transport: NodesInfoNodeInfoSettingsTransport,
  network: NodesInfoNodeInfoSettingsNetwork.optional(),
  xpack: NodesInfoNodeInfoXpack.optional(),
  script: NodesInfoNodeInfoScript.optional(),
  search: NodesInfoNodeInfoSearch.optional(),
  ingest: NodesInfoNodeInfoSettingsIngest.optional()
}).meta({ id: 'NodesInfoNodeInfoSettings' })
export type NodesInfoNodeInfoSettings = z.infer<typeof NodesInfoNodeInfoSettings>

export const NodesInfoNodeThreadPoolInfo = z.object({
  core: z.lazy(() => integer).optional(),
  keep_alive: z.lazy(() => Duration).optional(),
  max: z.lazy(() => integer).optional(),
  queue_size: z.lazy(() => integer),
  size: z.lazy(() => integer).optional(),
  type: z.string()
}).meta({ id: 'NodesInfoNodeThreadPoolInfo' })
export type NodesInfoNodeThreadPoolInfo = z.infer<typeof NodesInfoNodeThreadPoolInfo>

export const NodesInfoNodeInfoTransport = z.object({
  bound_address: z.array(z.string()),
  publish_address: z.string(),
  profiles: z.record(z.string(), z.string())
}).meta({ id: 'NodesInfoNodeInfoTransport' })
export type NodesInfoNodeInfoTransport = z.infer<typeof NodesInfoNodeInfoTransport>

export const NodesInfoNodeInfoIngestProcessor = z.object({
  type: z.string()
}).meta({ id: 'NodesInfoNodeInfoIngestProcessor' })
export type NodesInfoNodeInfoIngestProcessor = z.infer<typeof NodesInfoNodeInfoIngestProcessor>

export const NodesInfoNodeInfoIngest = z.object({
  processors: z.array(NodesInfoNodeInfoIngestProcessor)
}).meta({ id: 'NodesInfoNodeInfoIngest' })
export type NodesInfoNodeInfoIngest = z.infer<typeof NodesInfoNodeInfoIngest>

export const NodesInfoNodeInfoAggregation = z.object({
  types: z.array(z.string())
}).meta({ id: 'NodesInfoNodeInfoAggregation' })
export type NodesInfoNodeInfoAggregation = z.infer<typeof NodesInfoNodeInfoAggregation>

export const NodesInfoRemoveClusterServer = z.object({
  bound_address: z.array(z.lazy(() => TransportAddress)),
  publish_address: z.lazy(() => TransportAddress)
}).meta({ id: 'NodesInfoRemoveClusterServer' })
export type NodesInfoRemoveClusterServer = z.infer<typeof NodesInfoRemoveClusterServer>

export const NodesInfoNodeInfo = z.object({
  attributes: z.record(z.string(), z.string()),
  build_flavor: z.string(),
  build_hash: z.string().describe('Short hash of the last git commit in this release.'),
  build_type: z.string(),
  component_versions: z.record(z.lazy(() => Name), z.lazy(() => integer)),
  host: z.lazy(() => Host).describe('The node’s host name.'),
  http: NodesInfoNodeInfoHttp.optional(),
  index_version: z.lazy(() => VersionNumber),
  ip: z.lazy(() => Ip).describe('The node’s IP address.'),
  jvm: NodesInfoNodeJvmInfo.optional(),
  name: z.lazy(() => Name).describe('The node\'s name'),
  os: NodesInfoNodeOperatingSystemInfo.optional(),
  plugins: z.array(z.lazy(() => PluginStats)).optional(),
  process: NodesInfoNodeProcessInfo.optional(),
  roles: z.lazy(() => NodeRoles),
  settings: NodesInfoNodeInfoSettings.optional(),
  thread_pool: z.record(z.string(), NodesInfoNodeThreadPoolInfo).optional(),
  total_indexing_buffer: z.lazy(() => long).describe('Total heap allowed to be used to hold recently indexed documents before they must be written to disk. This size is a shared pool across all shards on this node, and is controlled by Indexing Buffer settings.').optional(),
  total_indexing_buffer_in_bytes: z.lazy(() => ByteSize).describe('Same as total_indexing_buffer, but expressed in bytes.').optional(),
  transport: NodesInfoNodeInfoTransport.optional(),
  transport_address: z.lazy(() => TransportAddress).describe('Host and port where transport HTTP connections are accepted.'),
  transport_version: z.lazy(() => VersionNumber),
  version: z.lazy(() => VersionString).describe('Elasticsearch version running on this node.'),
  modules: z.array(z.lazy(() => PluginStats)).optional(),
  ingest: NodesInfoNodeInfoIngest.optional(),
  aggregations: z.record(z.string(), NodesInfoNodeInfoAggregation).optional(),
  remote_cluster_server: NodesInfoRemoveClusterServer.optional()
}).meta({ id: 'NodesInfoNodeInfo' })
export type NodesInfoNodeInfo = z.infer<typeof NodesInfoNodeInfo>

export const NodesInfoNodesInfoMetric = z.enum(['_all', '_none', 'settings', 'os', 'process', 'jvm', 'thread_pool', 'transport', 'http', 'remote_cluster_server', 'plugins', 'ingest', 'aggregations', 'indices']).meta({ id: 'NodesInfoNodesInfoMetric' })
export type NodesInfoNodesInfoMetric = z.infer<typeof NodesInfoNodesInfoMetric>

export const NodesInfoNodesInfoMetrics = z.union([NodesInfoNodesInfoMetric, z.array(NodesInfoNodesInfoMetric)]).meta({ id: 'NodesInfoNodesInfoMetrics' })
export type NodesInfoNodesInfoMetrics = z.infer<typeof NodesInfoNodesInfoMetrics>

/**
 * Get node information.
 *
 * By default, the API returns all attributes and core settings for cluster nodes.
 */
export const NodesInfoRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('Comma-separated list of node IDs or names used to limit returned information.').optional().meta({ found_in: 'path' }),
  metric: NodesInfoNodesInfoMetrics.describe('Limits the information returned to the specific metrics. Supports a comma-separated list, such as http,ingest.').optional().meta({ found_in: 'path' }),
  flat_settings: z.boolean().describe('If true, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'NodesInfoRequest' })
export type NodesInfoRequest = z.infer<typeof NodesInfoRequest>

export const NodesInfoResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.string(), NodesInfoNodeInfo)
}).meta({ id: 'NodesInfoResponseBase' })
export type NodesInfoResponseBase = z.infer<typeof NodesInfoResponseBase>

export const NodesInfoResponse = NodesInfoResponseBase.meta({ id: 'NodesInfoResponse' })
export type NodesInfoResponse = z.infer<typeof NodesInfoResponse>
