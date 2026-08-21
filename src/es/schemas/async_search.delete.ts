/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete an async search.
 *
 * If the asynchronous search is still running, it is cancelled.
 * Otherwise, the saved search results are deleted.
 * If the Elasticsearch security features are enabled, the deletion of a specific async search is restricted to: the authenticated user that submitted the original search request; users that have the `cancel_task` cluster privilege.
 */
export const AsyncSearchDeleteRequest = z.object({
  id: z.lazy(() => Id).describe('A unique identifier for the async search.').meta({ found_in: 'path' })
}).meta({ id: 'AsyncSearchDeleteRequest' })
export type AsyncSearchDeleteRequest = z.infer<typeof AsyncSearchDeleteRequest>

export const AsyncSearchDeleteResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'AsyncSearchDeleteResponse' })
export type AsyncSearchDeleteResponse = z.infer<typeof AsyncSearchDeleteResponse>
