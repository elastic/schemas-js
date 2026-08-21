/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamNames, Duration, ExpandWildcards } from './_types.js'

/**
 * Delete data streams.
 *
 * Deletes one or more data streams and their backing indices.
 */
export const IndicesDeleteDataStreamRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('Comma-separated list of data streams to delete. Wildcard (`*`) expressions are supported.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values,such as `open,hidden`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteDataStreamRequest' })
export type IndicesDeleteDataStreamRequest = z.infer<typeof IndicesDeleteDataStreamRequest>

export const IndicesDeleteDataStreamResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesDeleteDataStreamResponse' })
export type IndicesDeleteDataStreamResponse = z.infer<typeof IndicesDeleteDataStreamResponse>
