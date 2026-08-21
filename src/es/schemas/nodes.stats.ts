/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, CommonStatsFlags, Duration, DurationValue, Field, Fields, Host, Ip, Name, NodeIds, NodeRoles, NodeStatistics, TransportAddress, double, float, integer, long } from './_types.js'
import { NodesHttp, NodesIngest, NodesScripting, NodesThreadCount } from './cluster.info.js'
import { NodesIndexingPressureMemory } from './cluster.stats.js'
import { IndicesStatsShardStats } from './indices.stats.js'

export const NodeStatsLevel = z.enum(['node', 'indices', 'shards']).meta({ id: 'NodeStatsLevel' })
export type NodeStatsLevel = z.infer<typeof NodeStatsLevel>

export const NodesAdaptiveSelection = z.object({
  avg_queue_size: z.lazy(() => long).describe('The exponentially weighted moving average queue size of search requests on the keyed node.').optional(),
  avg_response_time: z.lazy(() => Duration).describe('The exponentially weighted moving average response time of search requests on the keyed node.').optional(),
  avg_response_time_ns: z.lazy(() => long).describe('The exponentially weighted moving average response time, in nanoseconds, of search requests on the keyed node.').optional(),
  avg_service_time: z.lazy(() => Duration).describe('The exponentially weighted moving average service time of search requests on the keyed node.').optional(),
  avg_service_time_ns: z.lazy(() => long).describe('The exponentially weighted moving average service time, in nanoseconds, of search requests on the keyed node.').optional(),
  outgoing_searches: z.lazy(() => long).describe('The number of outstanding search requests to the keyed node from the node these stats are for.').optional(),
  rank: z.string().describe('The rank of this node; used for shard selection when routing search requests.').optional()
}).meta({ id: 'NodesAdaptiveSelection' })
export type NodesAdaptiveSelection = z.infer<typeof NodesAdaptiveSelection>

export const NodesAllocations = z.object({
  shards: z.lazy(() => integer).describe('Number of shards allocated to the node.').optional(),
  undesired_shards: z.lazy(() => integer).describe('Number of shards allocated to the node that are currently undesired.').optional(),
  forecasted_ingest_load: z.lazy(() => double).describe('Forecasted ingest load for the node.').optional(),
  forecasted_disk_usage: z.string().describe('Forecasted disk usage for the node.').optional(),
  forecasted_disk_usage_in_bytes: z.lazy(() => long).describe('Forecasted disk usage, in bytes, for the node.').optional(),
  current_disk_usage: z.string().describe('Current disk usage for the node.').optional(),
  current_disk_usage_in_bytes: z.lazy(() => long).describe('Current disk usage, in bytes, for the node.').optional()
}).meta({ id: 'NodesAllocations' })
export type NodesAllocations = z.infer<typeof NodesAllocations>

export const NodesBreaker = z.object({
  estimated_size: z.string().describe('Estimated memory used for the operation.').optional(),
  estimated_size_in_bytes: z.lazy(() => long).describe('Estimated memory used, in bytes, for the operation.').optional(),
  limit_size: z.string().describe('Memory limit for the circuit breaker.').optional(),
  limit_size_in_bytes: z.lazy(() => long).describe('Memory limit, in bytes, for the circuit breaker.').optional(),
  overhead: z.lazy(() => float).describe('A constant that all estimates for the circuit breaker are multiplied with to calculate a final estimate.').optional(),
  tripped: z.lazy(() => float).describe('Total number of times the circuit breaker has been triggered and prevented an out of memory error.').optional()
}).meta({ id: 'NodesBreaker' })
export type NodesBreaker = z.infer<typeof NodesBreaker>

export const NodesCpuAcct = z.object({
  control_group: z.string().describe('The `cpuacct` control group to which the Elasticsearch process belongs.').optional(),
  usage_nanos: z.lazy(() => DurationValue).describe('The total CPU time, in nanoseconds, consumed by all tasks in the same cgroup as the Elasticsearch process.').optional()
}).meta({ id: 'NodesCpuAcct' })
export type NodesCpuAcct = z.infer<typeof NodesCpuAcct>

export const NodesCgroupCpuStat = z.object({
  number_of_elapsed_periods: z.lazy(() => long).describe('The number of reporting periods (as specified by `cfs_period_micros`) that have elapsed.').optional(),
  number_of_times_throttled: z.lazy(() => long).describe('The number of times all tasks in the same cgroup as the Elasticsearch process have been throttled.').optional(),
  time_throttled_nanos: z.lazy(() => DurationValue).describe('The total amount of time, in nanoseconds, for which all tasks in the same cgroup as the Elasticsearch process have been throttled.').optional()
}).meta({ id: 'NodesCgroupCpuStat' })
export type NodesCgroupCpuStat = z.infer<typeof NodesCgroupCpuStat>

export const NodesCgroupCpu = z.object({
  control_group: z.string().describe('The `cpu` control group to which the Elasticsearch process belongs.').optional(),
  cfs_period_micros: z.lazy(() => integer).describe('The period of time, in microseconds, for how regularly all tasks in the same cgroup as the Elasticsearch process should have their access to CPU resources reallocated.').optional(),
  cfs_quota_micros: z.lazy(() => integer).describe('The total amount of time, in microseconds, for which all tasks in the same cgroup as the Elasticsearch process can run during one period `cfs_period_micros`.').optional(),
  stat: NodesCgroupCpuStat.describe('Contains CPU statistics for the node.').optional()
}).meta({ id: 'NodesCgroupCpu' })
export type NodesCgroupCpu = z.infer<typeof NodesCgroupCpu>

export const NodesCgroupMemory = z.object({
  control_group: z.string().describe('The `memory` control group to which the Elasticsearch process belongs.').optional(),
  limit_in_bytes: z.string().describe('The maximum amount of user memory (including file cache) allowed for all tasks in the same cgroup as the Elasticsearch process. This value can be too big to store in a `long`, so is returned as a string so that the value returned can exactly match what the underlying operating system interface returns. Any value that is too large to parse into a `long` almost certainly means no limit has been set for the cgroup.').optional(),
  usage_in_bytes: z.string().describe('The total current memory usage by processes in the cgroup, in bytes, by all tasks in the same cgroup as the Elasticsearch process. This value is stored as a string for consistency with `limit_in_bytes`.').optional()
}).meta({ id: 'NodesCgroupMemory' })
export type NodesCgroupMemory = z.infer<typeof NodesCgroupMemory>

export const NodesCgroup = z.object({
  cpuacct: NodesCpuAcct.describe('Contains statistics about `cpuacct` control group for the node.').optional(),
  cpu: NodesCgroupCpu.describe('Contains statistics about `cpu` control group for the node.').optional(),
  memory: NodesCgroupMemory.describe('Contains statistics about the memory control group for the node.').optional()
}).meta({ id: 'NodesCgroup' })
export type NodesCgroup = z.infer<typeof NodesCgroup>

export const NodesRecording = z.object({
  name: z.string().optional(),
  cumulative_execution_count: z.lazy(() => long).optional(),
  cumulative_execution_time: z.lazy(() => Duration).optional(),
  cumulative_execution_time_millis: z.lazy(() => DurationValue).optional()
}).meta({ id: 'NodesRecording' })
export type NodesRecording = z.infer<typeof NodesRecording>

export const NodesClusterAppliedStats = z.object({
  recordings: z.array(NodesRecording).optional()
}).meta({ id: 'NodesClusterAppliedStats' })
export type NodesClusterAppliedStats = z.infer<typeof NodesClusterAppliedStats>

export const NodesClusterStateQueue = z.object({
  total: z.lazy(() => long).describe('Total number of cluster states in queue.').optional(),
  pending: z.lazy(() => long).describe('Number of pending cluster states in queue.').optional(),
  committed: z.lazy(() => long).describe('Number of committed cluster states in queue.').optional()
}).meta({ id: 'NodesClusterStateQueue' })
export type NodesClusterStateQueue = z.infer<typeof NodesClusterStateQueue>

export const NodesClusterStateUpdate = z.object({
  count: z.lazy(() => long).describe('The number of cluster state update attempts that did not change the cluster state since the node started.'),
  computation_time: z.lazy(() => Duration).describe('The cumulative amount of time spent computing no-op cluster state updates since the node started.').optional(),
  computation_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds, spent computing no-op cluster state updates since the node started.').optional(),
  publication_time: z.lazy(() => Duration).describe('The cumulative amount of time spent publishing cluster state updates which ultimately succeeded, which includes everything from the start of the publication (just after the computation of the new cluster state) until the publication has finished and the master node is ready to start processing the next state update. This includes the time measured by `context_construction_time`, `commit_time`, `completion_time` and `master_apply_time`.').optional(),
  publication_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds, spent publishing cluster state updates which ultimately succeeded, which includes everything from the start of the publication (just after the computation of the new cluster state) until the publication has finished and the master node is ready to start processing the next state update. This includes the time measured by `context_construction_time`, `commit_time`, `completion_time` and `master_apply_time`.').optional(),
  context_construction_time: z.lazy(() => Duration).describe('The cumulative amount of time spent constructing a publication context since the node started for publications that ultimately succeeded. This statistic includes the time spent computing the difference between the current and new cluster state preparing a serialized representation of this difference.').optional(),
  context_construction_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds, spent constructing a publication context since the node started for publications that ultimately succeeded. This statistic includes the time spent computing the difference between the current and new cluster state preparing a serialized representation of this difference.').optional(),
  commit_time: z.lazy(() => Duration).describe('The cumulative amount of time spent waiting for a successful cluster state update to commit, which measures the time from the start of each publication until a majority of the master-eligible nodes have written the state to disk and confirmed the write to the elected master.').optional(),
  commit_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds, spent waiting for a successful cluster state update to commit, which measures the time from the start of each publication until a majority of the master-eligible nodes have written the state to disk and confirmed the write to the elected master.').optional(),
  completion_time: z.lazy(() => Duration).describe('The cumulative amount of time spent waiting for a successful cluster state update to complete, which measures the time from the start of each publication until all the other nodes have notified the elected master that they have applied the cluster state.').optional(),
  completion_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds,  spent waiting for a successful cluster state update to complete, which measures the time from the start of each publication until all the other nodes have notified the elected master that they have applied the cluster state.').optional(),
  master_apply_time: z.lazy(() => Duration).describe('The cumulative amount of time spent successfully applying cluster state updates on the elected master since the node started.').optional(),
  master_apply_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds, spent successfully applying cluster state updates on the elected master since the node started.').optional(),
  notification_time: z.lazy(() => Duration).describe('The cumulative amount of time spent notifying listeners of a no-op cluster state update since the node started.').optional(),
  notification_time_millis: z.lazy(() => DurationValue).describe('The cumulative amount of time, in milliseconds, spent notifying listeners of a no-op cluster state update since the node started.').optional()
}).meta({ id: 'NodesClusterStateUpdate' })
export type NodesClusterStateUpdate = z.infer<typeof NodesClusterStateUpdate>

export const NodesCpu = z.object({
  available_processors: z.lazy(() => integer).describe('The number of processors available to the Java virtual machine.').optional(),
  percent: z.lazy(() => integer).optional(),
  sys: z.lazy(() => Duration).optional(),
  sys_in_millis: z.lazy(() => DurationValue).optional(),
  total: z.lazy(() => Duration).optional(),
  total_in_millis: z.lazy(() => DurationValue).optional(),
  user: z.lazy(() => Duration).optional(),
  user_in_millis: z.lazy(() => DurationValue).optional(),
  load_average: z.record(z.string(), z.lazy(() => double)).optional()
}).meta({ id: 'NodesCpu' })
export type NodesCpu = z.infer<typeof NodesCpu>

export const NodesDataPathStats = z.object({
  available: z.string().describe('Total amount of disk space available to this Java virtual machine on this file store.').optional(),
  available_in_bytes: z.lazy(() => long).describe('Total number of bytes available to this Java virtual machine on this file store.').optional(),
  disk_queue: z.string().optional(),
  disk_reads: z.lazy(() => long).optional(),
  disk_read_size: z.string().optional(),
  disk_read_size_in_bytes: z.lazy(() => long).optional(),
  disk_writes: z.lazy(() => long).optional(),
  disk_write_size: z.string().optional(),
  disk_write_size_in_bytes: z.lazy(() => long).optional(),
  free: z.string().describe('Total amount of unallocated disk space in the file store.').optional(),
  free_in_bytes: z.lazy(() => long).describe('Total number of unallocated bytes in the file store.').optional(),
  low_watermark_free_space: z.string().describe('The amount of free disk space that, once reached, triggers the low disk watermark.').optional(),
  low_watermark_free_space_in_bytes: z.lazy(() => long).describe('The amount of free disk space, in bytes, that, once reached, triggers the low disk watermark.').optional(),
  high_watermark_free_space: z.string().describe('The amount of free disk space that, once reached, triggers the high disk watermark.').optional(),
  high_watermark_free_space_in_bytes: z.lazy(() => long).describe('The amount of free disk space, in bytes, that, once reached, triggers the high disk watermark.').optional(),
  flood_stage_free_space: z.string().describe('The amount of free disk space that, once reached, triggers the flood stage disk watermark.').optional(),
  flood_stage_free_space_in_bytes: z.lazy(() => long).describe('The amount of free disk space, in bytes, that, once reached, triggers the flood stage disk watermark.').optional(),
  frozen_flood_stage_free_space: z.string().describe('The amount of free disk space that, once reached, triggers the frozen flood stage disk watermark.').optional(),
  frozen_flood_stage_free_space_in_bytes: z.lazy(() => long).describe('The amount of free disk space, in bytes, that, once reached, triggers the frozen flood stage disk watermark.').optional(),
  mount: z.string().describe('Mount point of the file store (for example: `/dev/sda2`).').optional(),
  path: z.string().describe('Path to the file store.').optional(),
  total: z.string().describe('Total size of the file store.').optional(),
  total_in_bytes: z.lazy(() => long).describe('Total size of the file store in bytes.').optional(),
  type: z.string().describe('Type of the file store (ex: ext4).').optional()
}).meta({ id: 'NodesDataPathStats' })
export type NodesDataPathStats = z.infer<typeof NodesDataPathStats>

export const NodesPublishedClusterStates = z.object({
  full_states: z.lazy(() => long).describe('Number of published cluster states.').optional(),
  incompatible_diffs: z.lazy(() => long).describe('Number of incompatible differences between published cluster states.').optional(),
  compatible_diffs: z.lazy(() => long).describe('Number of compatible differences between published cluster states.').optional()
}).meta({ id: 'NodesPublishedClusterStates' })
export type NodesPublishedClusterStates = z.infer<typeof NodesPublishedClusterStates>

export const NodesSerializedClusterStateDetail = z.object({
  count: z.lazy(() => long).optional(),
  uncompressed_size: z.string().optional(),
  uncompressed_size_in_bytes: z.lazy(() => long).optional(),
  compressed_size: z.string().optional(),
  compressed_size_in_bytes: z.lazy(() => long).optional()
}).meta({ id: 'NodesSerializedClusterStateDetail' })
export type NodesSerializedClusterStateDetail = z.infer<typeof NodesSerializedClusterStateDetail>

export const NodesSerializedClusterState = z.object({
  full_states: NodesSerializedClusterStateDetail.describe('Number of published cluster states.').optional(),
  diffs: NodesSerializedClusterStateDetail.optional()
}).meta({ id: 'NodesSerializedClusterState' })
export type NodesSerializedClusterState = z.infer<typeof NodesSerializedClusterState>

export const NodesDiscovery = z.object({
  cluster_state_queue: NodesClusterStateQueue.describe('Contains statistics for the cluster state queue of the node.').optional(),
  published_cluster_states: NodesPublishedClusterStates.describe('Contains statistics for the published cluster states of the node.').optional(),
  cluster_state_update: z.record(z.string(), NodesClusterStateUpdate).describe('Contains low-level statistics about how long various activities took during cluster state updates while the node was the elected master. Omitted if the node is not master-eligible. Every field whose name ends in `_time` within this object is also represented as a raw number of milliseconds in a field whose name ends in `_time_millis`. The human-readable fields with a `_time` suffix are only returned if requested with the `?human=true` query parameter.').optional(),
  serialized_cluster_states: NodesSerializedClusterState.optional(),
  cluster_applier_stats: NodesClusterAppliedStats.optional()
}).meta({ id: 'NodesDiscovery' })
export type NodesDiscovery = z.infer<typeof NodesDiscovery>

export const NodesMemoryStats = z.object({
  adjusted_total: z.string().describe('If the amount of physical memory has been overridden using the `es`.`total_memory_bytes` system property then this reports the overridden value. Otherwise it reports the same value as `total`.').optional(),
  adjusted_total_in_bytes: z.lazy(() => long).describe('If the amount of physical memory has been overridden using the `es`.`total_memory_bytes` system property then this reports the overridden value in bytes. Otherwise it reports the same value as `total_in_bytes`.').optional(),
  resident: z.string().optional(),
  resident_in_bytes: z.lazy(() => long).optional(),
  share: z.string().optional(),
  share_in_bytes: z.lazy(() => long).optional(),
  total_virtual: z.string().optional(),
  total_virtual_in_bytes: z.lazy(() => long).optional(),
  total: z.string().describe('Total amount of physical memory.').optional(),
  total_in_bytes: z.lazy(() => long).describe('Total amount of physical memory in bytes.').optional(),
  free: z.string().describe('Amount of free physical memory.').optional(),
  free_in_bytes: z.lazy(() => long).describe('Amount of free physical memory in bytes.').optional(),
  used: z.string().describe('Amount of used physical memory.').optional(),
  used_in_bytes: z.lazy(() => long).describe('Amount of used physical memory in bytes.').optional()
}).meta({ id: 'NodesMemoryStats' })
export type NodesMemoryStats = z.infer<typeof NodesMemoryStats>

export const NodesExtendedMemoryStats = z.object({
  ...NodesMemoryStats.shape,
  free_percent: z.lazy(() => integer).describe('Percentage of free memory.').optional(),
  used_percent: z.lazy(() => integer).describe('Percentage of used memory.').optional()
}).meta({ id: 'NodesExtendedMemoryStats' })
export type NodesExtendedMemoryStats = z.infer<typeof NodesExtendedMemoryStats>

export const NodesFileSystemTotal = z.object({
  available: z.string().describe('Total disk space available to this Java virtual machine on all file stores. Depending on OS or process level restrictions, this might appear less than `free`. This is the actual amount of free disk space the Elasticsearch node can utilise.').optional(),
  available_in_bytes: z.lazy(() => long).describe('Total number of bytes available to this Java virtual machine on all file stores. Depending on OS or process level restrictions, this might appear less than `free_in_bytes`. This is the actual amount of free disk space the Elasticsearch node can utilise.').optional(),
  free: z.string().describe('Total unallocated disk space in all file stores.').optional(),
  free_in_bytes: z.lazy(() => long).describe('Total number of unallocated bytes in all file stores.').optional(),
  total: z.string().describe('Total size of all file stores.').optional(),
  total_in_bytes: z.lazy(() => long).describe('Total size of all file stores in bytes.').optional()
}).meta({ id: 'NodesFileSystemTotal' })
export type NodesFileSystemTotal = z.infer<typeof NodesFileSystemTotal>

export const NodesIoStatDevice = z.object({
  device_name: z.string().describe('The Linux device name.').optional(),
  operations: z.lazy(() => long).describe('The total number of read and write operations for the device completed since starting Elasticsearch.').optional(),
  read_kilobytes: z.lazy(() => long).describe('The total number of kilobytes read for the device since starting Elasticsearch.').optional(),
  read_operations: z.lazy(() => long).describe('The total number of read operations for the device completed since starting Elasticsearch.').optional(),
  write_kilobytes: z.lazy(() => long).describe('The total number of kilobytes written for the device since starting Elasticsearch.').optional(),
  write_operations: z.lazy(() => long).describe('The total number of write operations for the device completed since starting Elasticsearch.').optional()
}).meta({ id: 'NodesIoStatDevice' })
export type NodesIoStatDevice = z.infer<typeof NodesIoStatDevice>

export const NodesIoStats = z.object({
  devices: z.array(NodesIoStatDevice).describe('Array of disk metrics for each device that is backing an Elasticsearch data path. These disk metrics are probed periodically and averages between the last probe and the current probe are computed.').optional(),
  total: NodesIoStatDevice.describe('The sum of the disk metrics for all devices that back an Elasticsearch data path.').optional()
}).meta({ id: 'NodesIoStats' })
export type NodesIoStats = z.infer<typeof NodesIoStats>

export const NodesFileSystem = z.object({
  data: z.array(NodesDataPathStats).describe('List of all file stores.').optional(),
  timestamp: z.lazy(() => long).describe('Last time the file stores statistics were refreshed. Recorded in milliseconds since the Unix Epoch.').optional(),
  total: NodesFileSystemTotal.describe('Contains statistics for all file stores of the node.').optional(),
  io_stats: NodesIoStats.describe('Contains I/O statistics for the node.').optional()
}).meta({ id: 'NodesFileSystem' })
export type NodesFileSystem = z.infer<typeof NodesFileSystem>

export const NodesGarbageCollectorTotal = z.object({
  collection_count: z.lazy(() => long).describe('Total number of JVM garbage collectors that collect objects.').optional(),
  collection_time: z.string().describe('Total time spent by JVM collecting objects.').optional(),
  collection_time_in_millis: z.lazy(() => long).describe('Total time, in milliseconds, spent by JVM collecting objects.').optional()
}).meta({ id: 'NodesGarbageCollectorTotal' })
export type NodesGarbageCollectorTotal = z.infer<typeof NodesGarbageCollectorTotal>

export const NodesGarbageCollector = z.object({
  collectors: z.record(z.string(), NodesGarbageCollectorTotal).describe('Contains statistics about JVM garbage collectors for the node.').optional()
}).meta({ id: 'NodesGarbageCollector' })
export type NodesGarbageCollector = z.infer<typeof NodesGarbageCollector>

export const NodesIndexingPressure = z.object({
  memory: NodesIndexingPressureMemory.describe('Contains statistics for memory consumption from indexing load.').optional()
}).meta({ id: 'NodesIndexingPressure' })
export type NodesIndexingPressure = z.infer<typeof NodesIndexingPressure>

export const NodesNodeBufferPool = z.object({
  count: z.lazy(() => long).describe('Number of buffer pools.').optional(),
  total_capacity: z.string().describe('Total capacity of buffer pools.').optional(),
  total_capacity_in_bytes: z.lazy(() => long).describe('Total capacity of buffer pools in bytes.').optional(),
  used: z.string().describe('Size of buffer pools.').optional(),
  used_in_bytes: z.lazy(() => long).describe('Size of buffer pools in bytes.').optional()
}).meta({ id: 'NodesNodeBufferPool' })
export type NodesNodeBufferPool = z.infer<typeof NodesNodeBufferPool>

export const NodesJvmClasses = z.object({
  current_loaded_count: z.lazy(() => long).describe('Number of classes currently loaded by JVM.').optional(),
  total_loaded_count: z.lazy(() => long).describe('Total number of classes loaded since the JVM started.').optional(),
  total_unloaded_count: z.lazy(() => long).describe('Total number of classes unloaded since the JVM started.').optional()
}).meta({ id: 'NodesJvmClasses' })
export type NodesJvmClasses = z.infer<typeof NodesJvmClasses>

export const NodesPool = z.object({
  used: z.string().describe('Memory used by the heap.').optional(),
  used_in_bytes: z.lazy(() => long).describe('Memory, in bytes, used by the heap.').optional(),
  max: z.string().describe('Maximum amount of memory available for use by the heap.').optional(),
  max_in_bytes: z.lazy(() => long).describe('Maximum amount of memory, in bytes, available for use by the heap.').optional(),
  peak_used: z.string().describe('Largest amount of memory historically used by the heap.').optional(),
  peak_used_in_bytes: z.lazy(() => long).describe('Largest amount of memory, in bytes, historically used by the heap.').optional(),
  peak_max: z.string().describe('Largest amount of memory historically used by the heap.').optional(),
  peak_max_in_bytes: z.lazy(() => long).describe('Largest amount of memory, in bytes, historically used by the heap.').optional()
}).meta({ id: 'NodesPool' })
export type NodesPool = z.infer<typeof NodesPool>

export const NodesJvmMemoryStats = z.object({
  heap_used: z.lazy(() => ByteSize).describe('Memory currently in use by the heap.').optional(),
  heap_used_in_bytes: z.lazy(() => long).describe('Memory, in bytes, currently in use by the heap.').optional(),
  heap_used_percent: z.lazy(() => long).describe('Percentage of memory currently in use by the heap.').optional(),
  heap_committed: z.lazy(() => ByteSize).describe('Amount of memory available for use by the heap.').optional(),
  heap_committed_in_bytes: z.lazy(() => long).describe('Amount of memory, in bytes, available for use by the heap.').optional(),
  heap_max_in_bytes: z.lazy(() => long).describe('Maximum amount of memory, in bytes, available for use by the heap.').optional(),
  heap_max: z.lazy(() => ByteSize).describe('Maximum amount of memory, available for use by the heap.').optional(),
  non_heap_used: z.lazy(() => ByteSize).describe('Non-heap memory used.').optional(),
  non_heap_used_in_bytes: z.lazy(() => long).describe('Non-heap memory used, in bytes.').optional(),
  non_heap_committed: z.lazy(() => ByteSize).describe('Amount of non-heap memory available.').optional(),
  non_heap_committed_in_bytes: z.lazy(() => long).describe('Amount of non-heap memory available, in bytes.').optional(),
  pools: z.record(z.string(), NodesPool).describe('Contains statistics about heap memory usage for the node.').optional()
}).meta({ id: 'NodesJvmMemoryStats' })
export type NodesJvmMemoryStats = z.infer<typeof NodesJvmMemoryStats>

export const NodesJvmThreads = z.object({
  count: z.lazy(() => long).describe('Number of active threads in use by JVM.').optional(),
  peak_count: z.lazy(() => long).describe('Highest number of threads used by JVM.').optional()
}).meta({ id: 'NodesJvmThreads' })
export type NodesJvmThreads = z.infer<typeof NodesJvmThreads>

export const NodesJvm = z.object({
  buffer_pools: z.record(z.string(), NodesNodeBufferPool).describe('Contains statistics about JVM buffer pools for the node.').optional(),
  classes: NodesJvmClasses.describe('Contains statistics about classes loaded by JVM for the node.').optional(),
  gc: NodesGarbageCollector.describe('Contains statistics about JVM garbage collectors for the node.').optional(),
  mem: NodesJvmMemoryStats.describe('Contains JVM memory usage statistics for the node.').optional(),
  threads: NodesJvmThreads.describe('Contains statistics about JVM thread usage for the node.').optional(),
  timestamp: z.lazy(() => long).describe('Last time JVM statistics were refreshed.').optional(),
  uptime: z.string().describe('Human-readable JVM uptime. Only returned if the `human` query parameter is `true`.').optional(),
  uptime_in_millis: z.lazy(() => long).describe('JVM uptime in milliseconds.').optional()
}).meta({ id: 'NodesJvm' })
export type NodesJvm = z.infer<typeof NodesJvm>

export const NodesOperatingSystem = z.object({
  cpu: NodesCpu.optional(),
  mem: NodesExtendedMemoryStats.optional(),
  swap: NodesMemoryStats.optional(),
  cgroup: NodesCgroup.optional(),
  timestamp: z.lazy(() => long).optional()
}).meta({ id: 'NodesOperatingSystem' })
export type NodesOperatingSystem = z.infer<typeof NodesOperatingSystem>

export const NodesProcess = z.object({
  cpu: NodesCpu.describe('Contains CPU statistics for the node.').optional(),
  mem: NodesMemoryStats.describe('Contains virtual memory statistics for the node.').optional(),
  open_file_descriptors: z.lazy(() => integer).describe('Number of opened file descriptors associated with the current or `-1` if not supported.').optional(),
  max_file_descriptors: z.lazy(() => integer).describe('Maximum number of file descriptors allowed on the system, or `-1` if not supported.').optional(),
  timestamp: z.lazy(() => long).describe('Last time the statistics were refreshed. Recorded in milliseconds since the Unix Epoch.').optional()
}).meta({ id: 'NodesProcess' })
export type NodesProcess = z.infer<typeof NodesProcess>

export const NodesRepositorySnapshotStats = z.object({
  total_read_throttled_time: z.lazy(() => Duration).describe('The cumulative time spent throttling read operations for this repository.').optional(),
  total_write_throttled_time: z.lazy(() => Duration).describe('The cumulative time spent throttling write operations for this repository.').optional(),
  total_read_throttled_time_nanos: z.lazy(() => DurationValue).describe('The cumulative time, in nanoseconds, spent throttling read operations for this repository.'),
  total_write_throttled_time_nanos: z.lazy(() => DurationValue).describe('The cumulative time, in nanoseconds, spent throttling write operations for this repository.'),
  shard_snapshots_started: z.lazy(() => long).describe('The number of shard snapshots started for this repository.'),
  shard_snapshots_completed: z.lazy(() => long).describe('The number of shard snapshots completed for this repository.'),
  shard_snapshots_in_progress: z.lazy(() => long).describe('The number of shard snapshots currently in progress for this repository.'),
  uploaded_blobs: z.lazy(() => long).describe('The number of blobs uploaded to this repository.'),
  uploaded_size: z.lazy(() => ByteSize).describe('The cumulative size of the blobs uploaded to this repository.').optional(),
  uploaded_size_in_bytes: z.lazy(() => long).describe('The cumulative size, in bytes, of the blobs uploaded to this repository.'),
  total_upload_time: z.lazy(() => Duration).describe('The cumulative time spent uploading blobs to this repository.').optional(),
  total_upload_time_in_millis: z.lazy(() => DurationValue).describe('The cumulative time, in milliseconds, spent uploading blobs to this repository.'),
  total_read_time: z.lazy(() => Duration).describe('The cumulative time spent reading blobs while uploading to this repository.').optional(),
  total_read_time_in_millis: z.lazy(() => DurationValue).describe('The cumulative time, in milliseconds, spent reading blobs while uploading to this repository.')
}).meta({ id: 'NodesRepositorySnapshotStats' })
export type NodesRepositorySnapshotStats = z.infer<typeof NodesRepositorySnapshotStats>

export const NodesScriptCache = z.object({
  cache_evictions: z.lazy(() => long).describe('Total number of times the script cache has evicted old data.').optional(),
  compilation_limit_triggered: z.lazy(() => long).describe('Total number of times the script compilation circuit breaker has limited inline script compilations.').optional(),
  compilations: z.lazy(() => long).describe('Total number of inline script compilations performed by the node.').optional(),
  context: z.string().optional()
}).meta({ id: 'NodesScriptCache' })
export type NodesScriptCache = z.infer<typeof NodesScriptCache>

export const NodesTransportHistogram = z.object({
  count: z.lazy(() => long).describe('The number of times a transport thread took a period of time within the bounds of this bucket to handle an inbound message.').optional(),
  lt: z.lazy(() => Duration).describe('The exclusive upper bound of the bucket. May be omitted on the last bucket if this bucket has no upper bound.').optional(),
  lt_millis: z.lazy(() => long).describe('The exclusive upper bound of the bucket in milliseconds. May be omitted on the last bucket if this bucket has no upper bound.').optional(),
  ge: z.lazy(() => Duration).describe('The inclusive lower bound of the bucket. May be omitted on the first bucket if this bucket has no lower bound.').optional(),
  ge_millis: z.lazy(() => long).describe('The inclusive lower bound of the bucket in milliseconds. May be omitted on the first bucket if this bucket has no lower bound.').optional()
}).meta({ id: 'NodesTransportHistogram' })
export type NodesTransportHistogram = z.infer<typeof NodesTransportHistogram>

export const NodesTransportMessageSizeHistogramBucket = z.object({
  count: z.lazy(() => long).describe('The number of messages with a size that falls within the bounds of this bucket.'),
  ge: z.lazy(() => ByteSize).describe('The inclusive lower bound of the bucket. May be omitted on the first bucket if this bucket has no lower bound.').optional(),
  ge_bytes: z.lazy(() => long).describe('The inclusive lower bound of the bucket in bytes. May be omitted on the first bucket if this bucket has no lower bound.').optional(),
  lt: z.lazy(() => ByteSize).describe('The exclusive upper bound of the bucket. May be omitted on the last bucket if this bucket has no upper bound.').optional(),
  lt_bytes: z.lazy(() => long).describe('The exclusive upper bound of the bucket in bytes. May be omitted on the last bucket if this bucket has no upper bound.').optional()
}).meta({ id: 'NodesTransportMessageSizeHistogramBucket' })
export type NodesTransportMessageSizeHistogramBucket = z.infer<typeof NodesTransportMessageSizeHistogramBucket>

export const NodesTransportActionMessageStats = z.object({
  count: z.lazy(() => long).describe('The number of messages of this kind that the node has handled for this action.'),
  total_size: z.lazy(() => ByteSize).describe('The cumulative size of the messages of this kind that the node has handled for this action.').optional(),
  total_size_in_bytes: z.lazy(() => long).describe('The cumulative size, in bytes, of the messages of this kind that the node has handled for this action.'),
  histogram: z.array(NodesTransportMessageSizeHistogramBucket).describe('The distribution of the sizes of the messages of this kind that the node has handled for this action, represented as a histogram.')
}).meta({ id: 'NodesTransportActionMessageStats' })
export type NodesTransportActionMessageStats = z.infer<typeof NodesTransportActionMessageStats>

export const NodesTransportActionStats = z.object({
  requests: NodesTransportActionMessageStats.describe('Statistics about the requests received for this action.'),
  responses: NodesTransportActionMessageStats.describe('Statistics about the responses sent for this action.')
}).meta({ id: 'NodesTransportActionStats' })
export type NodesTransportActionStats = z.infer<typeof NodesTransportActionStats>

export const NodesTransport = z.object({
  inbound_handling_time_histogram: z.array(NodesTransportHistogram).describe('The distribution of the time spent handling each inbound message on a transport thread, represented as a histogram.').optional(),
  outbound_handling_time_histogram: z.array(NodesTransportHistogram).describe('The distribution of the time spent sending each outbound transport message on a transport thread, represented as a histogram.').optional(),
  rx_count: z.lazy(() => long).describe('Total number of RX (receive) packets received by the node during internal cluster communication.').optional(),
  rx_size: z.string().describe('Size of RX packets received by the node during internal cluster communication.').optional(),
  rx_size_in_bytes: z.lazy(() => long).describe('Size, in bytes, of RX packets received by the node during internal cluster communication.').optional(),
  server_open: z.lazy(() => integer).describe('Current number of inbound TCP connections used for internal communication between nodes.').optional(),
  tx_count: z.lazy(() => long).describe('Total number of TX (transmit) packets sent by the node during internal cluster communication.').optional(),
  tx_size: z.string().describe('Size of TX packets sent by the node during internal cluster communication.').optional(),
  tx_size_in_bytes: z.lazy(() => long).describe('Size, in bytes, of TX packets sent by the node during internal cluster communication.').optional(),
  total_outbound_connections: z.lazy(() => long).describe('The cumulative number of outbound transport connections that this node has opened since it started. Each transport connection may comprise multiple TCP connections but is only counted once in this statistic. Transport connections are typically long-lived so this statistic should remain constant in a stable cluster.').optional(),
  actions: z.record(z.string(), NodesTransportActionStats).describe('Statistics about the transport messages sent and received by the node, broken down by action name.').optional()
}).meta({ id: 'NodesTransport' })
export type NodesTransport = z.infer<typeof NodesTransport>

export const NodesStats = z.object({
  adaptive_selection: z.record(z.string(), NodesAdaptiveSelection).describe('Statistics about adaptive replica selection.').optional(),
  allocations: NodesAllocations.describe('Statistics about shard allocations on the node.').optional(),
  breakers: z.record(z.string(), NodesBreaker).describe('Statistics about the field data circuit breaker.').optional(),
  fs: NodesFileSystem.describe('File system information, data path, free disk space, read/write stats.').optional(),
  host: z.lazy(() => Host).describe('Network host for the node, based on the network host setting.').optional(),
  http: NodesHttp.describe('HTTP connection information.').optional(),
  ingest: NodesIngest.describe('Statistics about ingest preprocessing.').optional(),
  ip: z.union([z.lazy(() => Ip), z.array(z.lazy(() => Ip))]).describe('IP address and port for the node.').optional(),
  jvm: NodesJvm.describe('JVM stats, memory pool information, garbage collection, buffer pools, number of loaded/unloaded classes.').optional(),
  name: z.lazy(() => Name).describe('Human-readable identifier for the node. Based on the node name setting.').optional(),
  os: NodesOperatingSystem.describe('Operating system stats, load average, mem, swap.').optional(),
  process: NodesProcess.describe('Process statistics, memory consumption, cpu usage, open file descriptors.').optional(),
  roles: z.lazy(() => NodeRoles).describe('Roles assigned to the node.').optional(),
  script: NodesScripting.describe('Contains script statistics for the node.').optional(),
  script_cache: z.record(z.string(), z.union([NodesScriptCache, z.array(NodesScriptCache)])).optional(),
  thread_pool: z.record(z.string(), NodesThreadCount).describe('Statistics about each thread pool, including current size, queue and rejected tasks.').optional(),
  timestamp: z.lazy(() => long).optional(),
  transport: NodesTransport.describe('Transport statistics about sent and received bytes in cluster communication.').optional(),
  transport_address: z.lazy(() => TransportAddress).describe('Host and port for the transport layer, used for internal communication between nodes in a cluster.').optional(),
  attributes: z.record(z.lazy(() => Field), z.string()).describe('Contains a list of attributes for the node.').optional(),
  discovery: NodesDiscovery.describe('Contains node discovery statistics for the node.').optional(),
  indexing_pressure: NodesIndexingPressure.describe('Contains indexing pressure statistics for the node.').optional(),
  indices: z.lazy(() => IndicesStatsShardStats).describe('Indices stats about size, document count, indexing and deletion times, search times, field cache size, merges and flushes.').optional(),
  repositories: z.record(z.string(), NodesRepositorySnapshotStats).describe('Statistics about snapshot activity for the node\'s registered repositories, keyed by repository name.').optional()
}).meta({ id: 'NodesStats' })
export type NodesStats = z.infer<typeof NodesStats>

export const NodesStatsNodeStatsMetric = z.enum(['_all', '_none', 'indices', 'os', 'process', 'jvm', 'thread_pool', 'fs', 'transport', 'http', 'breaker', 'script', 'discovery', 'ingest', 'adaptive_selection', 'script_cache', 'indexing_pressure', 'repositories', 'allocations']).meta({ id: 'NodesStatsNodeStatsMetric' })
export type NodesStatsNodeStatsMetric = z.infer<typeof NodesStatsNodeStatsMetric>

export const NodesStatsNodeStatsMetrics = z.union([NodesStatsNodeStatsMetric, z.array(NodesStatsNodeStatsMetric)]).meta({ id: 'NodesStatsNodeStatsMetrics' })
export type NodesStatsNodeStatsMetrics = z.infer<typeof NodesStatsNodeStatsMetrics>

/**
 * Get node statistics.
 *
 * Get statistics for nodes in a cluster.
 * By default, all stats are returned. You can limit the returned information by using metrics.
 */
export const NodesStatsRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('Comma-separated list of node IDs or names used to limit returned information.').optional().meta({ found_in: 'path' }),
  metric: NodesStatsNodeStatsMetrics.describe('Limits the information returned to the specific metrics.').optional().meta({ found_in: 'path' }),
  index_metric: z.lazy(() => CommonStatsFlags).describe('Limit the information returned for indices metric to the specific index metrics. It can be used only if indices (or all) metric is specified.').optional().meta({ found_in: 'path' }),
  completion_fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in fielddata and suggest statistics.').optional().meta({ found_in: 'query' }),
  fielddata_fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in fielddata statistics.').optional().meta({ found_in: 'query' }),
  fields: z.lazy(() => Fields).describe('Comma-separated list or wildcard expressions of fields to include in the statistics.').optional().meta({ found_in: 'query' }),
  groups: z.boolean().describe('Comma-separated list of search groups to include in the search statistics.').optional().meta({ found_in: 'query' }),
  include_segment_file_sizes: z.boolean().describe('If true, the call reports the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested).').optional().meta({ found_in: 'query' }),
  level: NodeStatsLevel.describe('Indicates whether statistics are aggregated at the node, indices, or shards level.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  types: z.array(z.string()).describe('A comma-separated list of document types for the indexing index metric.').optional().meta({ found_in: 'query' }),
  include_unloaded_segments: z.boolean().describe('If `true`, the response includes information from segments that are not loaded into memory.').optional().meta({ found_in: 'query' })
}).meta({ id: 'NodesStatsRequest' })
export type NodesStatsRequest = z.infer<typeof NodesStatsRequest>

export const NodesStatsResponseBase = z.object({
  node_stats: z.lazy(() => NodeStatistics).describe('Contains statistics about the number of nodes selected by the request’s node filters.').optional(),
  cluster_name: z.lazy(() => Name).optional(),
  nodes: z.record(z.string(), NodesStats)
}).meta({ id: 'NodesStatsResponseBase' })
export type NodesStatsResponseBase = z.infer<typeof NodesStatsResponseBase>

export const NodesStatsResponse = NodesStatsResponseBase.meta({ id: 'NodesStatsResponse' })
export type NodesStatsResponse = z.infer<typeof NodesStatsResponse>
