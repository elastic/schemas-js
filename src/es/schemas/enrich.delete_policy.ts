/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Delete an enrich policy.
 *
 * Deletes an existing enrich policy and its enrich index.
 */
export const EnrichDeletePolicyRequest = z.object({
  name: z.lazy(() => Name).describe('Enrich policy to delete.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EnrichDeletePolicyRequest' })
export type EnrichDeletePolicyRequest = z.infer<typeof EnrichDeletePolicyRequest>

export const EnrichDeletePolicyResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EnrichDeletePolicyResponse' })
export type EnrichDeletePolicyResponse = z.infer<typeof EnrichDeletePolicyResponse>
