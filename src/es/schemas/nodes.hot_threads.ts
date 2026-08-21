/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, NodeIds, long } from './_types.js'

export const ThreadType = z.enum(['cpu', 'wait', 'block', 'gpu', 'mem']).meta({ id: 'ThreadType' })
export type ThreadType = z.infer<typeof ThreadType>

/**
 * Get the hot threads for nodes.
 *
 * Get a breakdown of the hot threads on each selected node in the cluster.
 * The output is plain text with a breakdown of the top hot threads for each node.
 */
export const NodesHotThreadsRequest = z.object({
  node_id: z.lazy(() => NodeIds).describe('List of node IDs or names used to limit returned information.').optional().meta({ found_in: 'path' }),
  ignore_idle_threads: z.boolean().describe('If true, known idle threads (e.g. waiting in a socket select, or to get a task from an empty queue) are filtered out.').optional().meta({ found_in: 'query' }),
  interval: z.lazy(() => Duration).describe('The interval to do the second sampling of threads.').optional().meta({ found_in: 'query' }),
  snapshots: z.lazy(() => long).describe('Number of samples of thread stacktrace.').optional().meta({ found_in: 'query' }),
  threads: z.lazy(() => long).describe('Specifies the number of hot threads to provide information for.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  type: ThreadType.describe('The type to sample.').optional().meta({ found_in: 'query' }),
  sort: ThreadType.describe('The sort order for \'cpu\' type').optional().meta({ found_in: 'query' })
}).meta({ id: 'NodesHotThreadsRequest' })
export type NodesHotThreadsRequest = z.infer<typeof NodesHotThreadsRequest>

export const NodesHotThreadsResponse = z.object({
}).meta({ id: 'NodesHotThreadsResponse' })
export type NodesHotThreadsResponse = z.infer<typeof NodesHotThreadsResponse>
