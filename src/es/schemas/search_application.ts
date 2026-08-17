/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, Name } from './_types.js'
import { SearchApplicationSearchApplicationParameters } from './search_application.put.js'

export const SearchApplicationSearchApplication = z.object({
  ...SearchApplicationSearchApplicationParameters.shape,
  name: z.lazy(() => Name).describe('Search Application name'),
  updated_at_millis: z.lazy(() => EpochTime).describe('Last time the Search Application was updated.')
}).meta({ id: 'SearchApplicationSearchApplication' })
export type SearchApplicationSearchApplication = z.infer<typeof SearchApplicationSearchApplication>
