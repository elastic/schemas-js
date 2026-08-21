/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result, ScalarValue, double, integer } from './_types.js'

export const ConnectorDependency = z.object({
  field: z.string(),
  value: z.lazy(() => ScalarValue)
}).meta({ id: 'ConnectorDependency' })
export type ConnectorDependency = z.infer<typeof ConnectorDependency>

export const ConnectorDisplayType = z.enum(['textbox', 'textarea', 'numeric', 'toggle', 'dropdown']).meta({ id: 'ConnectorDisplayType' })
export type ConnectorDisplayType = z.infer<typeof ConnectorDisplayType>

export const ConnectorSelectOption = z.object({
  label: z.string(),
  value: z.lazy(() => ScalarValue)
}).meta({ id: 'ConnectorSelectOption' })
export type ConnectorSelectOption = z.infer<typeof ConnectorSelectOption>

export const ConnectorConnectorFieldType = z.enum(['str', 'int', 'list', 'bool']).meta({ id: 'ConnectorConnectorFieldType' })
export type ConnectorConnectorFieldType = z.infer<typeof ConnectorConnectorFieldType>

export const ConnectorLessThanValidation = z.object({
  type: z.literal('less_than'),
  constraint: z.lazy(() => double)
}).meta({ id: 'ConnectorLessThanValidation' })
export type ConnectorLessThanValidation = z.infer<typeof ConnectorLessThanValidation>

export const ConnectorGreaterThanValidation = z.object({
  type: z.literal('greater_than'),
  constraint: z.lazy(() => double)
}).meta({ id: 'ConnectorGreaterThanValidation' })
export type ConnectorGreaterThanValidation = z.infer<typeof ConnectorGreaterThanValidation>

export const ConnectorListTypeValidation = z.object({
  type: z.literal('list_type'),
  constraint: z.string()
}).meta({ id: 'ConnectorListTypeValidation' })
export type ConnectorListTypeValidation = z.infer<typeof ConnectorListTypeValidation>

export const ConnectorIncludedInValidation = z.object({
  type: z.literal('included_in'),
  constraint: z.array(z.lazy(() => ScalarValue))
}).meta({ id: 'ConnectorIncludedInValidation' })
export type ConnectorIncludedInValidation = z.infer<typeof ConnectorIncludedInValidation>

export const ConnectorRegexValidation = z.object({
  type: z.literal('regex'),
  constraint: z.string()
}).meta({ id: 'ConnectorRegexValidation' })
export type ConnectorRegexValidation = z.infer<typeof ConnectorRegexValidation>

export const ConnectorValidation = z.union([ConnectorLessThanValidation, ConnectorGreaterThanValidation, ConnectorListTypeValidation, ConnectorIncludedInValidation, ConnectorRegexValidation]).meta({ id: 'ConnectorValidation' })
export type ConnectorValidation = z.infer<typeof ConnectorValidation>

export const ConnectorConnectorConfigProperties = z.object({
  category: z.string().optional(),
  default_value: z.lazy(() => ScalarValue),
  depends_on: z.array(ConnectorDependency),
  display: ConnectorDisplayType,
  label: z.string(),
  options: z.array(ConnectorSelectOption),
  order: z.lazy(() => integer).optional(),
  placeholder: z.string().optional(),
  required: z.boolean(),
  sensitive: z.boolean(),
  tooltip: z.union([z.string(), z.null()]).optional(),
  type: ConnectorConnectorFieldType.optional(),
  ui_restrictions: z.array(z.string()).optional(),
  validations: z.array(ConnectorValidation).optional(),
  value: z.any()
}).meta({ id: 'ConnectorConnectorConfigProperties' })
export type ConnectorConnectorConfigProperties = z.infer<typeof ConnectorConnectorConfigProperties>

export const ConnectorConnectorConfiguration = z.record(z.string(), ConnectorConnectorConfigProperties).meta({ id: 'ConnectorConnectorConfiguration' })
export type ConnectorConnectorConfiguration = z.infer<typeof ConnectorConnectorConfiguration>

/**
 * Update the connector configuration.
 *
 * Update the configuration field in the connector document.
 */
export const ConnectorUpdateConfigurationRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  configuration: ConnectorConnectorConfiguration.optional().meta({ found_in: 'body' }),
  values: z.record(z.string(), z.any()).optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateConfigurationRequest' })
export type ConnectorUpdateConfigurationRequest = z.infer<typeof ConnectorUpdateConfigurationRequest>

export const ConnectorUpdateConfigurationResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateConfigurationResponse' })
export type ConnectorUpdateConfigurationResponse = z.infer<typeof ConnectorUpdateConfigurationResponse>
