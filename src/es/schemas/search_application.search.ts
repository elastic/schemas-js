/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'
import { SearchResponseBody } from './search.js'

/**
 * Run a search application search.
 *
 * Generate and run an Elasticsearch query that uses the specified query parameteter and the search template associated with the search application or default template.
 * Unspecified template parameters are assigned their default values if applicable.
 */
export const SearchApplicationSearchRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the search application to be searched.').meta({ found_in: 'path' }),
  typed_keys: z.boolean().describe('Determines whether aggregation names are prefixed by their respective types in the response.').optional().meta({ found_in: 'query' }),
  params: z.record(z.string(), z.any()).describe('Query parameters specific to this request, which will override any defaults specified in the template.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SearchApplicationSearchRequest' })
export type SearchApplicationSearchRequest = z.infer<typeof SearchApplicationSearchRequest>

export const SearchApplicationSearchResponse = SearchResponseBody.meta({ id: 'SearchApplicationSearchResponse' })
export type SearchApplicationSearchResponse = z.infer<typeof SearchApplicationSearchResponse>
