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
export const long = z.number().meta({ id: 'long' });
export const double = z.number().meta({ id: 'double' });
/** A scalar value. */
export const ScalarValue = z.union([long, double, z.string(), z.boolean(), z.null()]).meta({ id: 'ScalarValue' });
export const integer = z.number().meta({ id: 'integer' });
export const ConnectorDependency = z.object({
    field: z.string(),
    value: ScalarValue
}).meta({ id: 'ConnectorDependency' });
export const ConnectorDisplayType = z.enum(['textbox', 'textarea', 'numeric', 'toggle', 'dropdown']).meta({ id: 'ConnectorDisplayType' });
export const ConnectorSelectOption = z.object({
    label: z.string(),
    value: ScalarValue
}).meta({ id: 'ConnectorSelectOption' });
export const ConnectorConnectorFieldType = z.enum(['str', 'int', 'list', 'bool']).meta({ id: 'ConnectorConnectorFieldType' });
export const ConnectorLessThanValidation = z.object({
    type: z.literal('less_than'),
    constraint: double
}).meta({ id: 'ConnectorLessThanValidation' });
export const ConnectorGreaterThanValidation = z.object({
    type: z.literal('greater_than'),
    constraint: double
}).meta({ id: 'ConnectorGreaterThanValidation' });
export const ConnectorListTypeValidation = z.object({
    type: z.literal('list_type'),
    constraint: z.string()
}).meta({ id: 'ConnectorListTypeValidation' });
export const ConnectorIncludedInValidation = z.object({
    type: z.literal('included_in'),
    constraint: z.array(ScalarValue)
}).meta({ id: 'ConnectorIncludedInValidation' });
export const ConnectorRegexValidation = z.object({
    type: z.literal('regex'),
    constraint: z.string()
}).meta({ id: 'ConnectorRegexValidation' });
export const ConnectorValidation = z.union([ConnectorLessThanValidation, ConnectorGreaterThanValidation, ConnectorListTypeValidation, ConnectorIncludedInValidation, ConnectorRegexValidation]).meta({ id: 'ConnectorValidation' });
export const ConnectorConnectorConfigProperties = z.object({
    category: z.string().optional(),
    default_value: ScalarValue,
    depends_on: z.array(ConnectorDependency),
    display: ConnectorDisplayType,
    label: z.string(),
    options: z.array(ConnectorSelectOption),
    order: integer.optional(),
    placeholder: z.string().optional(),
    required: z.boolean(),
    sensitive: z.boolean(),
    tooltip: z.union([z.string(), z.null()]).optional(),
    type: ConnectorConnectorFieldType.optional(),
    ui_restrictions: z.array(z.string()).optional(),
    validations: z.array(ConnectorValidation).optional(),
    value: z.any()
}).meta({ id: 'ConnectorConnectorConfigProperties' });
export const ConnectorConnectorConfiguration = z.record(z.string(), ConnectorConnectorConfigProperties).meta({ id: 'ConnectorConnectorConfiguration' });
/**
 * Update the connector configuration.
 *
 * Update the configuration field in the connector document.
 */
export const ConnectorUpdateConfigurationRequest = z.object({
    ...RequestBase.shape,
    connector_id: Id.describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
    configuration: ConnectorConnectorConfiguration.optional().meta({ found_in: 'body' }),
    values: z.record(z.string(), z.any()).optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateConfigurationRequest' });
export const ConnectorUpdateConfigurationResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorUpdateConfigurationResponse' });
//# sourceMappingURL=connector_update_configuration.js.map