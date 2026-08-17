/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Field, Id, Result, integer } from './_types.js'
import { ConnectorFilteringRulesValidation } from './connector.update_filtering_validation.js'

export const ConnectorFilteringAdvancedSnippet = z.object({
  created_at: z.lazy(() => DateTime).optional(),
  updated_at: z.lazy(() => DateTime).optional(),
  value: z.any()
}).meta({ id: 'ConnectorFilteringAdvancedSnippet' })
export type ConnectorFilteringAdvancedSnippet = z.infer<typeof ConnectorFilteringAdvancedSnippet>

export const ConnectorFilteringPolicy = z.enum(['exclude', 'include']).meta({ id: 'ConnectorFilteringPolicy' })
export type ConnectorFilteringPolicy = z.infer<typeof ConnectorFilteringPolicy>

export const ConnectorFilteringRuleRule = z.enum(['contains', 'ends_with', 'equals', 'regex', 'starts_with', '>', '<']).meta({ id: 'ConnectorFilteringRuleRule' })
export type ConnectorFilteringRuleRule = z.infer<typeof ConnectorFilteringRuleRule>

export const ConnectorFilteringRule = z.object({
  created_at: z.lazy(() => DateTime).optional(),
  field: z.lazy(() => Field),
  id: z.lazy(() => Id),
  order: z.lazy(() => integer),
  policy: ConnectorFilteringPolicy,
  rule: ConnectorFilteringRuleRule,
  updated_at: z.lazy(() => DateTime).optional(),
  value: z.string()
}).meta({ id: 'ConnectorFilteringRule' })
export type ConnectorFilteringRule = z.infer<typeof ConnectorFilteringRule>

export const ConnectorFilteringRules = z.object({
  advanced_snippet: ConnectorFilteringAdvancedSnippet,
  rules: z.array(ConnectorFilteringRule),
  validation: ConnectorFilteringRulesValidation
}).meta({ id: 'ConnectorFilteringRules' })
export type ConnectorFilteringRules = z.infer<typeof ConnectorFilteringRules>

export const ConnectorFilteringConfig = z.object({
  active: ConnectorFilteringRules,
  domain: z.string().optional(),
  draft: ConnectorFilteringRules
}).meta({ id: 'ConnectorFilteringConfig' })
export type ConnectorFilteringConfig = z.infer<typeof ConnectorFilteringConfig>

/**
 * Update the connector filtering.
 *
 * Update the draft filtering configuration of a connector and marks the draft validation state as edited.
 * The filtering draft is activated once validated by the running Elastic connector service.
 * The filtering property is used to configure sync rules (both basic and advanced) for a connector.
 */
export const ConnectorUpdateFilteringRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  filtering: z.array(ConnectorFilteringConfig).optional().meta({ found_in: 'body' }),
  rules: z.array(ConnectorFilteringRule).optional().meta({ found_in: 'body' }),
  advanced_snippet: ConnectorFilteringAdvancedSnippet.optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateFilteringRequest' })
export type ConnectorUpdateFilteringRequest = z.infer<typeof ConnectorUpdateFilteringRequest>

export const ConnectorUpdateFilteringResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateFilteringResponse' })
export type ConnectorUpdateFilteringResponse = z.infer<typeof ConnectorUpdateFilteringResponse>
