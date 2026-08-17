/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DataStreamName, DataStreamNames, Duration, ExpandWildcards } from './_types.js'
import { IndicesDataStreamOptions } from './indices.js'

export const IndicesGetDataStreamOptionsDataStreamWithOptions = z.object({
  name: z.lazy(() => DataStreamName),
  options: z.lazy(() => IndicesDataStreamOptions).optional()
}).meta({ id: 'IndicesGetDataStreamOptionsDataStreamWithOptions' })
export type IndicesGetDataStreamOptionsDataStreamWithOptions = z.infer<typeof IndicesGetDataStreamOptionsDataStreamWithOptions>

/**
 * Get data stream options.
 *
 * Get the data stream options configuration of one or more data streams.
 */
export const IndicesGetDataStreamOptionsRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('Comma-separated list of data streams to limit the request. Supports wildcards (`*`). To target all data streams, omit this parameter or use `*` or `_all`.').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetDataStreamOptionsRequest' })
export type IndicesGetDataStreamOptionsRequest = z.infer<typeof IndicesGetDataStreamOptionsRequest>

export const IndicesGetDataStreamOptionsResponse = z.object({
  data_streams: z.array(IndicesGetDataStreamOptionsDataStreamWithOptions)
}).meta({ id: 'IndicesGetDataStreamOptionsResponse' })
export type IndicesGetDataStreamOptionsResponse = z.infer<typeof IndicesGetDataStreamOptionsResponse>
