/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, Id, uint } from './_types.js'

/**
 * Get the async SQL search status.
 *
 * Get the current status of an async SQL search or a stored synchronous SQL search.
 */
export const SqlGetAsyncStatusRequest = z.object({
  id: z.lazy(() => Id).describe('The identifier for the search.').meta({ found_in: 'path' })
}).meta({ id: 'SqlGetAsyncStatusRequest' })
export type SqlGetAsyncStatusRequest = z.infer<typeof SqlGetAsyncStatusRequest>

export const SqlGetAsyncStatusResponse = z.object({
  expiration_time_in_millis: z.lazy(() => EpochTime).describe('The timestamp, in milliseconds since the Unix epoch, when Elasticsearch will delete the search and its results, even if the search is still running.'),
  id: z.string().describe('The identifier for the search.'),
  is_running: z.boolean().describe('If `true`, the search is still running. If `false`, the search has finished.'),
  is_partial: z.boolean().describe('If `true`, the response does not contain complete search results. If `is_partial` is `true` and `is_running` is `true`, the search is still running. If `is_partial` is `true` but `is_running` is `false`, the results are partial due to a failure or timeout.'),
  start_time_in_millis: z.lazy(() => EpochTime).describe('The timestamp, in milliseconds since the Unix epoch, when the search started. The API returns this property only for running searches.'),
  completion_status: z.lazy(() => uint).describe('The HTTP status code for the search. The API returns this property only for completed searches.').optional()
}).meta({ id: 'SqlGetAsyncStatusResponse' })
export type SqlGetAsyncStatusResponse = z.infer<typeof SqlGetAsyncStatusResponse>
