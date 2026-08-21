/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, Name, VersionNumber } from './_types.js'
import { IlmPolicy } from './ilm.js'

export const IlmGetLifecycleLifecycle = z.object({
  modified_date: z.lazy(() => DateTime),
  policy: IlmPolicy,
  version: z.lazy(() => VersionNumber)
}).meta({ id: 'IlmGetLifecycleLifecycle' })
export type IlmGetLifecycleLifecycle = z.infer<typeof IlmGetLifecycleLifecycle>

/** Get lifecycle policies. */
export const IlmGetLifecycleRequest = z.object({
  name: z.lazy(() => Name).describe('Identifier for the policy.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IlmGetLifecycleRequest' })
export type IlmGetLifecycleRequest = z.infer<typeof IlmGetLifecycleRequest>

export const IlmGetLifecycleResponse = z.record(z.string(), IlmGetLifecycleLifecycle).meta({ id: 'IlmGetLifecycleResponse' })
export type IlmGetLifecycleResponse = z.infer<typeof IlmGetLifecycleResponse>
