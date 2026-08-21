/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Name } from './_types.js'

/**
 * Delete a search application.
 *
 * Remove a search application and its associated alias. Indices attached to the search application are not removed.
 */
export const SearchApplicationDeleteRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the search application to delete.').meta({ found_in: 'path' })
}).meta({ id: 'SearchApplicationDeleteRequest' })
export type SearchApplicationDeleteRequest = z.infer<typeof SearchApplicationDeleteRequest>

export const SearchApplicationDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SearchApplicationDeleteResponse' })
export type SearchApplicationDeleteResponse = z.infer<typeof SearchApplicationDeleteResponse>
