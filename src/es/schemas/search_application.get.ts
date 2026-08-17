/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'
import { SearchApplicationSearchApplication } from './search_application.js'

/** Get search application details. */
export const SearchApplicationGetRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the search application').meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationGetRequest' })
export type SearchApplicationGetRequest = z.infer<typeof SearchApplicationGetRequest>

export const SearchApplicationGetResponse = SearchApplicationSearchApplication.meta({ id: 'SearchApplicationGetResponse' })
export type SearchApplicationGetResponse = z.infer<typeof SearchApplicationGetResponse>
