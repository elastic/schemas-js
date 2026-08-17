/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DataStreamName, DataStreamNames, Duration, ExpandWildcards } from './_types.js'
import { IndicesDataStreamLifecycleWithRollover } from './indices.js'

export const IndicesGetDataLifecycleDataStreamWithLifecycle = z.object({
  name: z.lazy(() => DataStreamName),
  lifecycle: z.lazy(() => IndicesDataStreamLifecycleWithRollover).optional()
}).meta({ id: 'IndicesGetDataLifecycleDataStreamWithLifecycle' })
export type IndicesGetDataLifecycleDataStreamWithLifecycle = z.infer<typeof IndicesGetDataLifecycleDataStreamWithLifecycle>

/**
 * Get data stream lifecycles.
 *
 * Get the data stream lifecycle configuration of one or more data streams.
 */
export const IndicesGetDataLifecycleRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('Comma-separated list of data streams to limit the request. Supports wildcards (`*`). To target all data streams, omit this parameter or use `*` or `_all`.').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If `true`, return all default settings in the response.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetDataLifecycleRequest' })
export type IndicesGetDataLifecycleRequest = z.infer<typeof IndicesGetDataLifecycleRequest>

export const IndicesGetDataLifecycleGlobalRetention = z.object({
  max_retention: z.lazy(() => Duration).optional(),
  default_retention: z.lazy(() => Duration).optional()
}).meta({ id: 'IndicesGetDataLifecycleGlobalRetention' })
export type IndicesGetDataLifecycleGlobalRetention = z.infer<typeof IndicesGetDataLifecycleGlobalRetention>

export const IndicesGetDataLifecycleResponse = z.object({
  data_streams: z.array(IndicesGetDataLifecycleDataStreamWithLifecycle),
  global_retention: IndicesGetDataLifecycleGlobalRetention
}).meta({ id: 'IndicesGetDataLifecycleResponse' })
export type IndicesGetDataLifecycleResponse = z.infer<typeof IndicesGetDataLifecycleResponse>
