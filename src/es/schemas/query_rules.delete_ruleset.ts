/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a query ruleset.
 *
 * Remove a query ruleset and its associated data.
 * This is a destructive action that is not recoverable.
 */
export const QueryRulesDeleteRulesetRequest = z.object({
  ruleset_id: z.lazy(() => Id).describe('The unique identifier of the query ruleset to delete').meta({ found_in: 'path' })
}).meta({ id: 'QueryRulesDeleteRulesetRequest' })
export type QueryRulesDeleteRulesetRequest = z.infer<typeof QueryRulesDeleteRulesetRequest>

export const QueryRulesDeleteRulesetResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'QueryRulesDeleteRulesetResponse' })
export type QueryRulesDeleteRulesetResponse = z.infer<typeof QueryRulesDeleteRulesetResponse>
