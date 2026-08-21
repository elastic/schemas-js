/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete an async EQL search.
 *
 * Delete an async EQL search or a stored synchronous EQL search.
 * The API also deletes results for the search.
 */
export const EqlDeleteRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the search to delete. A search ID is provided in the EQL search API\'s response for an async search. A search ID is also provided if the request’s `keep_on_completion` parameter is `true`.').meta({ found_in: 'path' })
}).meta({ id: 'EqlDeleteRequest' })
export type EqlDeleteRequest = z.infer<typeof EqlDeleteRequest>

export const EqlDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EqlDeleteResponse' })
export type EqlDeleteResponse = z.infer<typeof EqlDeleteResponse>
