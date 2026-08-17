/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamNames, Duration, ExpandWildcards } from './_types.js'

/**
 * Delete data stream options.
 *
 * Removes the data stream options from a data stream.
 */
export const IndicesDeleteDataStreamOptionsRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('A comma-separated list of data streams of which the data stream options will be deleted. Use `*` to get all data streams').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether wildcard expressions should get expanded to open or closed indices').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteDataStreamOptionsRequest' })
export type IndicesDeleteDataStreamOptionsRequest = z.infer<typeof IndicesDeleteDataStreamOptionsRequest>

export const IndicesDeleteDataStreamOptionsResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesDeleteDataStreamOptionsResponse' })
export type IndicesDeleteDataStreamOptionsResponse = z.infer<typeof IndicesDeleteDataStreamOptionsResponse>
