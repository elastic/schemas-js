/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

export const ConnectorFilteringValidation = z.object({
  ids: z.array(z.lazy(() => Id)),
  messages: z.array(z.string())
}).meta({ id: 'ConnectorFilteringValidation' })
export type ConnectorFilteringValidation = z.infer<typeof ConnectorFilteringValidation>

export const ConnectorFilteringValidationState = z.enum(['edited', 'invalid', 'valid']).meta({ id: 'ConnectorFilteringValidationState' })
export type ConnectorFilteringValidationState = z.infer<typeof ConnectorFilteringValidationState>

export const ConnectorFilteringRulesValidation = z.object({
  errors: z.array(ConnectorFilteringValidation),
  state: ConnectorFilteringValidationState
}).meta({ id: 'ConnectorFilteringRulesValidation' })
export type ConnectorFilteringRulesValidation = z.infer<typeof ConnectorFilteringRulesValidation>

/**
 * Update the connector draft filtering validation.
 *
 * Update the draft filtering validation info for a connector.
 */
export const ConnectorUpdateFilteringValidationRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  validation: ConnectorFilteringRulesValidation.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateFilteringValidationRequest' })
export type ConnectorUpdateFilteringValidationRequest = z.infer<typeof ConnectorUpdateFilteringValidationRequest>

export const ConnectorUpdateFilteringValidationResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateFilteringValidationResponse' })
export type ConnectorUpdateFilteringValidationResponse = z.infer<typeof ConnectorUpdateFilteringValidationResponse>
