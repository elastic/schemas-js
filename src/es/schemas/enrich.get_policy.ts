/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'
import { EnrichPolicy } from './enrich.put_policy.js'

export const EnrichPolicyType = z.enum(['geo_match', 'match', 'range']).meta({ id: 'EnrichPolicyType' })
export type EnrichPolicyType = z.infer<typeof EnrichPolicyType>

export const EnrichSummary = z.object({
  config: z.record(EnrichPolicyType, EnrichPolicy)
}).meta({ id: 'EnrichSummary' })
export type EnrichSummary = z.infer<typeof EnrichSummary>

/**
 * Get an enrich policy.
 *
 * Returns information about an enrich policy.
 */
export const EnrichGetPolicyRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated list of enrich policy names used to limit the request. To return information for all enrich policies, omit this parameter.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EnrichGetPolicyRequest' })
export type EnrichGetPolicyRequest = z.infer<typeof EnrichGetPolicyRequest>

export const EnrichGetPolicyResponse = z.object({
  policies: z.array(EnrichSummary)
}).meta({ id: 'EnrichGetPolicyResponse' })
export type EnrichGetPolicyResponse = z.infer<typeof EnrichGetPolicyResponse>
