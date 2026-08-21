/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'
import { EqlEqlSearchResponseBase } from './eql.js'

/**
 * Get async EQL search results.
 *
 * Get the current status and available results for an async EQL search or a stored synchronous EQL search.
 */
export const EqlGetRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the search.').meta({ found_in: 'path' }),
  keep_alive: z.lazy(() => Duration).describe('Period for which the search and its results are stored on the cluster. Defaults to the keep_alive value set by the search’s EQL search API request.').optional().meta({ found_in: 'query' }),
  wait_for_completion_timeout: z.lazy(() => Duration).describe('Timeout duration to wait for the request to finish. Defaults to no timeout, meaning the request waits for complete search results.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EqlGetRequest' })
export type EqlGetRequest = z.infer<typeof EqlGetRequest>

export const EqlGetResponse = EqlEqlSearchResponseBase.meta({ id: 'EqlGetResponse' })
export type EqlGetResponse = z.infer<typeof EqlGetResponse>
