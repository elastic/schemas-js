/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { integer, long } from './_types.js'
import { SearchApplicationSearchApplication } from './search_application.js'

/**
 * Get search applications.
 *
 * Get information about search applications.
 */
export const SearchApplicationListRequest = z.object({
  q: z.string().describe('Query in the Lucene query string syntax.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Starting offset.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies a max number of results to get.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SearchApplicationListRequest' })
export type SearchApplicationListRequest = z.infer<typeof SearchApplicationListRequest>

export const SearchApplicationListResponse = z.object({
  count: z.lazy(() => long),
  results: z.array(SearchApplicationSearchApplication)
}).meta({ id: 'SearchApplicationListResponse' })
export type SearchApplicationListResponse = z.infer<typeof SearchApplicationListResponse>
