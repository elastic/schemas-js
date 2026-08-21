/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name, TaskId } from './_types.js'

export const EnrichExecutePolicyEnrichPolicyPhase = z.enum(['SCHEDULED', 'RUNNING', 'COMPLETE', 'FAILED', 'CANCELLED']).meta({ id: 'EnrichExecutePolicyEnrichPolicyPhase' })
export type EnrichExecutePolicyEnrichPolicyPhase = z.infer<typeof EnrichExecutePolicyEnrichPolicyPhase>

export const EnrichExecutePolicyExecuteEnrichPolicyStatus = z.object({
  phase: EnrichExecutePolicyEnrichPolicyPhase,
  step: z.string().optional()
}).meta({ id: 'EnrichExecutePolicyExecuteEnrichPolicyStatus' })
export type EnrichExecutePolicyExecuteEnrichPolicyStatus = z.infer<typeof EnrichExecutePolicyExecuteEnrichPolicyStatus>

/**
 * Run an enrich policy.
 *
 * Create the enrich index for an existing enrich policy.
 */
export const EnrichExecutePolicyRequest = z.object({
  name: z.lazy(() => Name).describe('Enrich policy to execute.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request blocks other enrich policy execution requests until complete.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EnrichExecutePolicyRequest' })
export type EnrichExecutePolicyRequest = z.infer<typeof EnrichExecutePolicyRequest>

export const EnrichExecutePolicyResponse = z.object({
  status: EnrichExecutePolicyExecuteEnrichPolicyStatus.optional(),
  task: TaskId.optional()
}).meta({ id: 'EnrichExecutePolicyResponse' })
export type EnrichExecutePolicyResponse = z.infer<typeof EnrichExecutePolicyResponse>
