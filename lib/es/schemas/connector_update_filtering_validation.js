/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const Result = z.enum(['created', 'updated', 'deleted', 'not_found', 'noop']).meta({ id: 'Result' });
export const ConnectorFilteringValidation = z.object({
    ids: z.array(Id),
    messages: z.array(z.string())
}).meta({ id: 'ConnectorFilteringValidation' });
export const ConnectorFilteringValidationState = z.enum(['edited', 'invalid', 'valid']).meta({ id: 'ConnectorFilteringValidationState' });
export const ConnectorFilteringRulesValidation = z.object({
    errors: z.array(ConnectorFilteringValidation),
    state: ConnectorFilteringValidationState
}).meta({ id: 'ConnectorFilteringRulesValidation' });
/**
 * Update the connector draft filtering validation.
 *
 * Update the draft filtering validation info for a connector.
 */
export const ConnectorUpdateFilteringValidationRequest = z.object({
    ...RequestBase.shape,
    connector_id: Id.describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
    validation: ConnectorFilteringRulesValidation.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateFilteringValidationRequest' });
export const ConnectorUpdateFilteringValidationResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorUpdateFilteringValidationResponse' });
//# sourceMappingURL=connector_update_filtering_validation.js.map