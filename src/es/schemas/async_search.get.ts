/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { AsyncSearchAsyncSearchDocumentResponseBase } from './async_search.js'

/**
 * Get async search results.
 *
 * Retrieve the results of a previously submitted asynchronous search request.
 * If the Elasticsearch security features are enabled, access to the results of a specific async search is restricted to the user or API key that submitted it.
 */
export const AsyncSearchGetRequest = z.object({
  id: z.lazy(() => Id).describe('A unique identifier for the async search.').meta({ found_in: 'path' }),
  keep_alive: z.lazy(() => Duration).describe('The length of time that the async search should be available in the cluster. When not specified, the `keep_alive` set with the corresponding submit async request will be used. Otherwise, it is possible to override the value and extend the validity of the request. When this period expires, the search, if still running, is cancelled. If the search is completed, its saved results are deleted.').optional().meta({ found_in: 'query' }),
  typed_keys: z.boolean().describe('Specify whether aggregation and suggester names should be prefixed by their respective types in the response').optional().meta({ found_in: 'query' }),
  wait_for_completion_timeout: z.lazy(() => Duration).describe('Specifies to wait for the search to be completed up until the provided timeout. Final results will be returned if available before the timeout expires, otherwise the currently available results will be returned once the timeout expires. By default no timeout is set meaning that the currently available results will be returned without any additional wait.').optional().meta({ found_in: 'query' }),
  return_intermediate_results: z.boolean().describe('Specifies whether the response should contain intermediate results if the query is still running when the wait_for_completion_timeout expires or if no wait_for_completion_timeout is specified. If true and the search is still running, the search response will include any hits and partial aggregations that are available. If false and the search is still running, the search response will not include any hits (but possibly include total hits) nor will include any partial aggregations. When not specified, the intermediate results are returned for running queries.').optional().meta({ found_in: 'query' })
}).meta({ id: 'AsyncSearchGetRequest' })
export type AsyncSearchGetRequest = z.infer<typeof AsyncSearchGetRequest>

export const AsyncSearchGetResponse = AsyncSearchAsyncSearchDocumentResponseBase.meta({ id: 'AsyncSearchGetResponse' })
export type AsyncSearchGetResponse = z.infer<typeof AsyncSearchGetResponse>
