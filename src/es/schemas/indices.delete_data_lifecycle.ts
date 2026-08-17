/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamNames, Duration, ExpandWildcards } from './_types.js'

/**
 * Delete data stream lifecycles.
 *
 * Removes the data stream lifecycle from a data stream, rendering it not managed by the data stream lifecycle.
 */
export const IndicesDeleteDataLifecycleRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('A comma-separated list of data streams of which the data stream lifecycle will be deleted. Use `*` to get all data streams').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Whether wildcard expressions should get expanded to open or closed indices (default: open)').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteDataLifecycleRequest' })
export type IndicesDeleteDataLifecycleRequest = z.infer<typeof IndicesDeleteDataLifecycleRequest>

export const IndicesDeleteDataLifecycleResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesDeleteDataLifecycleResponse' })
export type IndicesDeleteDataLifecycleResponse = z.infer<typeof IndicesDeleteDataLifecycleResponse>
