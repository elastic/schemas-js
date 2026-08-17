/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, Fields, Metadata, PropertyName, Script, ScriptSource, double, integer } from './_types.js'
import type { ScriptShape, ScriptSourceShape } from './_types.js'
import { MappingTimeSeriesMetricType } from './field_caps.js'
import { MappingDocValues, MappingDynamicMapping, MappingDynamicTemplate, MappingFieldNamesField, MappingOnScriptError, MappingProperty, MappingRoutingField, MappingRuntimeField, MappingSourceField, MappingSubobjects, MappingSyntheticSourceKeepEnum } from './indices.put_mapping.js'
import type { MappingPropertyShape, MappingRuntimeFieldShape } from './indices.put_mapping.js'

export type MappingRuntimeFieldsShape = Record<Field, MappingRuntimeFieldShape>
export const MappingRuntimeFields: z.ZodType<MappingRuntimeFieldsShape> = z.record(z.lazy(() => Field), z.lazy(() => MappingRuntimeField)).meta({ id: 'MappingRuntimeFields' })
export type MappingRuntimeFields = z.infer<typeof MappingRuntimeFields>

export const MappingFieldType = z.enum(['none', 'geo_point', 'geo_shape', 'ip', 'binary', 'keyword', 'text', 'search_as_you_type', 'wildcard', 'date', 'date_nanos', 'boolean', 'completion', 'nested', 'object', 'passthrough', 'version', 'murmur3', 'token_count', 'percolator', 'integer', 'long', 'short', 'byte', 'float', 'half_float', 'scaled_float', 'double', 'integer_range', 'float_range', 'long_range', 'double_range', 'date_range', 'ip_range', 'alias', 'join', 'rank_feature', 'rank_features', 'flattened', 'shape', 'histogram', 'constant_keyword', 'counted_keyword', 'aggregate_metric_double', 'dense_vector', 'semantic_text', 'sparse_vector', 'match_only_text', 'icu_collation_keyword']).meta({ id: 'MappingFieldType' })
export type MappingFieldType = z.infer<typeof MappingFieldType>

export interface MappingPropertyBaseShape {
  meta?: Record<string, string> | undefined
  properties?: Record<PropertyName, MappingPropertyShape> | undefined
  ignore_above?: integer | undefined
  dynamic?: MappingDynamicMapping | undefined
  fields?: Record<PropertyName, MappingPropertyShape> | undefined
  synthetic_source_keep?: MappingSyntheticSourceKeepEnum | undefined
}
export const MappingPropertyBase = z.object({
  meta: z.record(z.string(), z.string()).describe('Metadata about the field.').optional(),
  get properties (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  ignore_above: z.lazy(() => integer).optional(),
  dynamic: z.lazy(() => MappingDynamicMapping).optional(),
  get fields (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  synthetic_source_keep: z.lazy(() => MappingSyntheticSourceKeepEnum).optional()
}).meta({ id: 'MappingPropertyBase' })
export type MappingPropertyBase = z.infer<typeof MappingPropertyBase>

export const MappingAllField = z.object({
  analyzer: z.string(),
  enabled: z.boolean(),
  omit_norms: z.boolean(),
  search_analyzer: z.string(),
  similarity: z.string(),
  store: z.boolean(),
  store_term_vector_offsets: z.boolean(),
  store_term_vector_payloads: z.boolean(),
  store_term_vector_positions: z.boolean(),
  store_term_vectors: z.boolean()
}).meta({ id: 'MappingAllField' })
export type MappingAllField = z.infer<typeof MappingAllField>

export interface MappingCorePropertyBaseShape {
  meta?: Record<string, string> | undefined
  properties?: Record<PropertyName, MappingPropertyShape> | undefined
  ignore_above?: integer | undefined
  dynamic?: MappingDynamicMapping | undefined
  fields?: Record<PropertyName, MappingPropertyShape> | undefined
  synthetic_source_keep?: MappingSyntheticSourceKeepEnum | undefined
  copy_to?: Fields | undefined
  store?: boolean | undefined
}
export const MappingCorePropertyBase = z.object({
  meta: z.record(z.string(), z.string()).describe('Metadata about the field.').optional(),
  get properties (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  ignore_above: z.lazy(() => integer).optional(),
  dynamic: z.lazy(() => MappingDynamicMapping).optional(),
  get fields (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  synthetic_source_keep: z.lazy(() => MappingSyntheticSourceKeepEnum).optional(),
  copy_to: z.lazy(() => Fields).optional(),
  store: z.boolean().optional()
}).meta({ id: 'MappingCorePropertyBase' })
export type MappingCorePropertyBase = z.infer<typeof MappingCorePropertyBase>

export interface MappingDocValuesPropertyBaseShape {
  meta?: Record<string, string> | undefined
  properties?: Record<PropertyName, MappingPropertyShape> | undefined
  ignore_above?: integer | undefined
  dynamic?: MappingDynamicMapping | undefined
  fields?: Record<PropertyName, MappingPropertyShape> | undefined
  synthetic_source_keep?: MappingSyntheticSourceKeepEnum | undefined
  copy_to?: Fields | undefined
  store?: boolean | undefined
  doc_values?: MappingDocValues | undefined
}
export const MappingDocValuesPropertyBase = z.object({
  meta: z.record(z.string(), z.string()).describe('Metadata about the field.').optional(),
  get properties (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  ignore_above: z.lazy(() => integer).optional(),
  dynamic: z.lazy(() => MappingDynamicMapping).optional(),
  get fields (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  synthetic_source_keep: z.lazy(() => MappingSyntheticSourceKeepEnum).optional(),
  copy_to: z.lazy(() => Fields).optional(),
  store: z.boolean().optional(),
  doc_values: z.lazy(() => MappingDocValues).optional()
}).meta({ id: 'MappingDocValuesPropertyBase' })
export type MappingDocValuesPropertyBase = z.infer<typeof MappingDocValuesPropertyBase>

export interface MappingNumberPropertyBaseShape {
  meta?: Record<string, string> | undefined
  properties?: Record<PropertyName, MappingPropertyShape> | undefined
  ignore_above?: integer | undefined
  dynamic?: MappingDynamicMapping | undefined
  fields?: Record<PropertyName, MappingPropertyShape> | undefined
  synthetic_source_keep?: MappingSyntheticSourceKeepEnum | undefined
  copy_to?: Fields | undefined
  store?: boolean | undefined
  doc_values?: MappingDocValues | undefined
  boost?: double | undefined
  coerce?: boolean | undefined
  ignore_malformed?: boolean | undefined
  index?: boolean | undefined
  on_script_error?: MappingOnScriptError | undefined
  script?: ScriptShape | ScriptSourceShape | undefined
  time_series_metric?: MappingTimeSeriesMetricType | undefined
  time_series_dimension?: boolean | undefined
}
export const MappingNumberPropertyBase = z.object({
  meta: z.record(z.string(), z.string()).describe('Metadata about the field.').optional(),
  get properties (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  ignore_above: z.lazy(() => integer).optional(),
  dynamic: z.lazy(() => MappingDynamicMapping).optional(),
  get fields (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  synthetic_source_keep: z.lazy(() => MappingSyntheticSourceKeepEnum).optional(),
  copy_to: z.lazy(() => Fields).optional(),
  store: z.boolean().optional(),
  doc_values: z.lazy(() => MappingDocValues).optional(),
  boost: z.lazy(() => double).optional(),
  coerce: z.boolean().optional(),
  ignore_malformed: z.boolean().optional(),
  index: z.boolean().optional(),
  on_script_error: z.lazy(() => MappingOnScriptError).optional(),
  get script () { return z.union([Script, ScriptSource]).optional() },
  time_series_metric: z.lazy(() => MappingTimeSeriesMetricType).describe('For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.').optional(),
  time_series_dimension: z.boolean().describe('For internal use by Elastic only. Marks the field as a time series dimension. Defaults to false.').optional()
}).meta({ id: 'MappingNumberPropertyBase' })
export type MappingNumberPropertyBase = z.infer<typeof MappingNumberPropertyBase>

export const MappingDataStreamTimestamp = z.object({
  enabled: z.boolean()
}).meta({ id: 'MappingDataStreamTimestamp' })
export type MappingDataStreamTimestamp = z.infer<typeof MappingDataStreamTimestamp>

export interface MappingRangePropertyBaseShape {
  meta?: Record<string, string> | undefined
  properties?: Record<PropertyName, MappingPropertyShape> | undefined
  ignore_above?: integer | undefined
  dynamic?: MappingDynamicMapping | undefined
  fields?: Record<PropertyName, MappingPropertyShape> | undefined
  synthetic_source_keep?: MappingSyntheticSourceKeepEnum | undefined
  copy_to?: Fields | undefined
  store?: boolean | undefined
  doc_values?: MappingDocValues | undefined
  boost?: double | undefined
  coerce?: boolean | undefined
  index?: boolean | undefined
}
export const MappingRangePropertyBase = z.object({
  meta: z.record(z.string(), z.string()).describe('Metadata about the field.').optional(),
  get properties (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  ignore_above: z.lazy(() => integer).optional(),
  dynamic: z.lazy(() => MappingDynamicMapping).optional(),
  get fields (): z.ZodOptional<z.ZodRecord<typeof PropertyName, typeof MappingProperty>> { return z.record(PropertyName, MappingProperty).optional() },
  synthetic_source_keep: z.lazy(() => MappingSyntheticSourceKeepEnum).optional(),
  copy_to: z.lazy(() => Fields).optional(),
  store: z.boolean().optional(),
  doc_values: z.lazy(() => MappingDocValues).optional(),
  boost: z.lazy(() => double).optional(),
  coerce: z.boolean().optional(),
  index: z.boolean().optional()
}).meta({ id: 'MappingRangePropertyBase' })
export type MappingRangePropertyBase = z.infer<typeof MappingRangePropertyBase>

export const MappingIndexField = z.object({
  enabled: z.boolean()
}).meta({ id: 'MappingIndexField' })
export type MappingIndexField = z.infer<typeof MappingIndexField>

export const MappingSizeField = z.object({
  enabled: z.boolean()
}).meta({ id: 'MappingSizeField' })
export type MappingSizeField = z.infer<typeof MappingSizeField>

export const MappingTypeMapping = z.object({
  all_field: MappingAllField.optional(),
  date_detection: z.boolean().optional(),
  dynamic: z.lazy(() => MappingDynamicMapping).optional(),
  dynamic_date_formats: z.array(z.string()).optional(),
  dynamic_templates: z.array(z.record(z.string(), z.lazy(() => MappingDynamicTemplate))).optional(),
  _field_names: z.lazy(() => MappingFieldNamesField).optional(),
  index_field: MappingIndexField.optional(),
  _meta: z.lazy(() => Metadata).optional(),
  numeric_detection: z.boolean().optional(),
  properties: z.record(z.lazy(() => PropertyName), z.lazy(() => MappingProperty)).optional(),
  _routing: z.lazy(() => MappingRoutingField).optional(),
  _size: MappingSizeField.optional(),
  _source: z.lazy(() => MappingSourceField).optional(),
  runtime: z.record(z.string(), z.lazy(() => MappingRuntimeField)).optional(),
  enabled: z.boolean().optional(),
  subobjects: z.lazy(() => MappingSubobjects).optional(),
  _data_stream_timestamp: MappingDataStreamTimestamp.optional()
}).meta({ id: 'MappingTypeMapping' })
export type MappingTypeMapping = z.infer<typeof MappingTypeMapping>
