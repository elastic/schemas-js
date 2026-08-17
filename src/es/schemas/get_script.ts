/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, StoredScript } from './_types.js'

/**
 * Get a script or search template.
 *
 * Retrieves a stored script or search template.
 */
export const GetScriptRequest = z.object({
  id: z.lazy(() => Id).describe('The identifier for the stored script or search template.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'GetScriptRequest' })
export type GetScriptRequest = z.infer<typeof GetScriptRequest>

export const GetScriptResponse = z.object({
  _id: z.lazy(() => Id),
  found: z.boolean(),
  script: StoredScript.optional()
}).meta({ id: 'GetScriptResponse' })
export type GetScriptResponse = z.infer<typeof GetScriptResponse>
