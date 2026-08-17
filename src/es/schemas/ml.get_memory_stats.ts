/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, Id, Name, NodeStatistics, TransportAddress, integer } from './_types.js'

export const MlGetMemoryStatsJvmStats = z.object({
  heap_max: z.lazy(() => ByteSize).describe('Maximum amount of memory available for use by the heap.').optional(),
  heap_max_in_bytes: z.lazy(() => integer).describe('Maximum amount of memory, in bytes, available for use by the heap.'),
  java_inference: z.lazy(() => ByteSize).describe('Amount of Java heap currently being used for caching inference models.').optional(),
  java_inference_in_bytes: z.lazy(() => integer).describe('Amount of Java heap, in bytes, currently being used for caching inference models.'),
  java_inference_max: z.lazy(() => ByteSize).describe('Maximum amount of Java heap to be used for caching inference models.').optional(),
  java_inference_max_in_bytes: z.lazy(() => integer).describe('Maximum amount of Java heap, in bytes, to be used for caching inference models.')
}).meta({ id: 'MlGetMemoryStatsJvmStats' })
export type MlGetMemoryStatsJvmStats = z.infer<typeof MlGetMemoryStatsJvmStats>

export const MlGetMemoryStatsMemMlStats = z.object({
  anomaly_detectors: z.lazy(() => ByteSize).describe('Amount of native memory set aside for anomaly detection jobs.').optional(),
  anomaly_detectors_in_bytes: z.lazy(() => integer).describe('Amount of native memory, in bytes, set aside for anomaly detection jobs.'),
  data_frame_analytics: z.lazy(() => ByteSize).describe('Amount of native memory set aside for data frame analytics jobs.').optional(),
  data_frame_analytics_in_bytes: z.lazy(() => integer).describe('Amount of native memory, in bytes, set aside for data frame analytics jobs.'),
  max: z.lazy(() => ByteSize).describe('Maximum amount of native memory (separate to the JVM heap) that may be used by machine learning native processes.').optional(),
  max_in_bytes: z.lazy(() => integer).describe('Maximum amount of native memory (separate to the JVM heap), in bytes, that may be used by machine learning native processes.'),
  native_code_overhead: z.lazy(() => ByteSize).describe('Amount of native memory set aside for loading machine learning native code shared libraries.').optional(),
  native_code_overhead_in_bytes: z.lazy(() => integer).describe('Amount of native memory, in bytes, set aside for loading machine learning native code shared libraries.'),
  native_inference: z.lazy(() => ByteSize).describe('Amount of native memory set aside for trained models that have a PyTorch model_type.').optional(),
  native_inference_in_bytes: z.lazy(() => integer).describe('Amount of native memory, in bytes, set aside for trained models that have a PyTorch model_type.')
}).meta({ id: 'MlGetMemoryStatsMemMlStats' })
export type MlGetMemoryStatsMemMlStats = z.infer<typeof MlGetMemoryStatsMemMlStats>

export const MlGetMemoryStatsMemStats = z.object({
  adjusted_total: z.lazy(() => ByteSize).describe('If the amount of physical memory has been overridden using the es.total_memory_bytes system property then this reports the overridden value. Otherwise it reports the same value as total.').optional(),
  adjusted_total_in_bytes: z.lazy(() => integer).describe('If the amount of physical memory has been overridden using the `es.total_memory_bytes` system property then this reports the overridden value in bytes. Otherwise it reports the same value as `total_in_bytes`.'),
  total: z.lazy(() => ByteSize).describe('Total amount of physical memory.').optional(),
  total_in_bytes: z.lazy(() => integer).describe('Total amount of physical memory in bytes.'),
  ml: MlGetMemoryStatsMemMlStats.describe('Contains statistics about machine learning use of native memory on the node.')
}).meta({ id: 'MlGetMemoryStatsMemStats' })
export type MlGetMemoryStatsMemStats = z.infer<typeof MlGetMemoryStatsMemStats>

export const MlGetMemoryStatsMemory = z.object({
  attributes: z.record(z.string(), z.string()),
  jvm: MlGetMemoryStatsJvmStats.describe('Contains Java Virtual Machine (JVM) statistics for the node.'),
  mem: MlGetMemoryStatsMemStats.describe('Contains statistics about memory usage for the node.'),
  name: z.lazy(() => Name).describe('Human-readable identifier for the node. Based on the Node name setting setting.'),
  roles: z.array(z.string()).describe('Roles assigned to the node.'),
  transport_address: z.lazy(() => TransportAddress).describe('The host and port where transport HTTP connections are accepted.'),
  ephemeral_id: z.lazy(() => Id)
}).meta({ id: 'MlGetMemoryStatsMemory' })
export type MlGetMemoryStatsMemory = z.infer<typeof MlGetMemoryStatsMemory>

/**
 * Get machine learning memory usage info.
 *
 * Get information about how machine learning jobs and trained models are using memory,
 * on each node, both within the JVM heap, and natively, outside of the JVM.
 */
export const MlGetMemoryStatsRequest = z.object({
  node_id: z.lazy(() => Id).describe('The names of particular nodes in the cluster to target. For example, `nodeId1,nodeId2` or `ml:true`').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetMemoryStatsRequest' })
export type MlGetMemoryStatsRequest = z.infer<typeof MlGetMemoryStatsRequest>

export const MlGetMemoryStatsResponse = z.object({
  _nodes: z.lazy(() => NodeStatistics),
  cluster_name: z.lazy(() => Name),
  nodes: z.record(z.lazy(() => Id), MlGetMemoryStatsMemory)
}).meta({ id: 'MlGetMemoryStatsResponse' })
export type MlGetMemoryStatsResponse = z.infer<typeof MlGetMemoryStatsResponse>
