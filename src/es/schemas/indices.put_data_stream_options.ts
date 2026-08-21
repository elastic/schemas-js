/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamNames, Duration, ExpandWildcards } from './_types.js'

/** The failure store lifecycle configures the data stream lifecycle configuration for failure indices. */
export const IndicesFailureStoreLifecycle = z.object({
  data_retention: z.lazy(() => Duration).describe('If defined, every document added to this data stream will be stored at least for this time frame. Any time after this duration the document could be deleted. When empty, every document in this data stream will be stored indefinitely.').optional(),
  enabled: z.boolean().describe('If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle that\'s disabled (enabled: `false`) will have no effect on the data stream.').optional()
}).meta({ id: 'IndicesFailureStoreLifecycle' })
export type IndicesFailureStoreLifecycle = z.infer<typeof IndicesFailureStoreLifecycle>

/** Data stream failure store contains the configuration of the failure store for a given data stream. */
export const IndicesDataStreamFailureStore = z.object({
  enabled: z.boolean().describe('If defined, it turns the failure store on/off (`true`/`false`) for this data stream. A data stream failure store that\'s disabled (enabled: `false`) will redirect no new failed indices to the failure store; however, it will not remove any existing data from the failure store.').optional(),
  lifecycle: IndicesFailureStoreLifecycle.describe('If defined, it specifies the lifecycle configuration for the failure store of this data stream.').optional()
}).meta({ id: 'IndicesDataStreamFailureStore' })
export type IndicesDataStreamFailureStore = z.infer<typeof IndicesDataStreamFailureStore>

/**
 * Update data stream options.
 *
 * Update the data stream options of the specified data streams.
 */
export const IndicesPutDataStreamOptionsRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('Comma-separated list of data streams used to limit the request. Supports wildcards (`*`). To target all data streams use `*` or `_all`.').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  failure_store: z.lazy(() => IndicesDataStreamFailureStore).describe('If defined, it will update the failure store configuration of every data stream resolved by the name expression.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutDataStreamOptionsRequest' })
export type IndicesPutDataStreamOptionsRequest = z.infer<typeof IndicesPutDataStreamOptionsRequest>

export const IndicesPutDataStreamOptionsResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesPutDataStreamOptionsResponse' })
export type IndicesPutDataStreamOptionsResponse = z.infer<typeof IndicesPutDataStreamOptionsResponse>
