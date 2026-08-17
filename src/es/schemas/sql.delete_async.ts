/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete an async SQL search.
 *
 * Delete an async SQL search or a stored synchronous SQL search.
 * If the search is still running, the API cancels it.
 *
 * If the Elasticsearch security features are enabled, only the following users can use this API to delete a search:
 *
 * * Users with the `cancel_task` cluster privilege.
 * * The user who first submitted the search.
 */
export const SqlDeleteAsyncRequest = z.object({
  id: z.lazy(() => Id).describe('The identifier for the search.').meta({ found_in: 'path' })
}).meta({ id: 'SqlDeleteAsyncRequest' })
export type SqlDeleteAsyncRequest = z.infer<typeof SqlDeleteAsyncRequest>

export const SqlDeleteAsyncResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SqlDeleteAsyncResponse' })
export type SqlDeleteAsyncResponse = z.infer<typeof SqlDeleteAsyncResponse>
