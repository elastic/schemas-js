/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'
import { IlmPolicy } from './ilm.js'

/**
 * Create or update a lifecycle policy.
 *
 * If the specified policy exists, it is replaced and the policy version is incremented.
 *
 * NOTE: Only the latest version of the policy is stored, you cannot revert to previous versions.
 */
export const IlmPutLifecycleRequest = z.object({
  name: z.lazy(() => Name).describe('Identifier for the policy.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  policy: IlmPolicy.optional().meta({ found_in: 'body' })
}).meta({ id: 'IlmPutLifecycleRequest' })
export type IlmPutLifecycleRequest = z.infer<typeof IlmPutLifecycleRequest>

export const IlmPutLifecycleResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IlmPutLifecycleResponse' })
export type IlmPutLifecycleResponse = z.infer<typeof IlmPutLifecycleResponse>
