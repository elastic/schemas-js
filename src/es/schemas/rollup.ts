/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Field, Fields, TimeZone, long } from './_types.js'

export const RollupDateHistogramGrouping = z.object({
  delay: z.lazy(() => Duration).describe('How long to wait before rolling up new documents. By default, the indexer attempts to roll up all data that is available. However, it is not uncommon for data to arrive out of order. The indexer is unable to deal with data that arrives after a time-span has been rolled up. You need to specify a delay that matches the longest period of time you expect out-of-order data to arrive.').optional(),
  field: z.lazy(() => Field).describe('The date field that is to be rolled up.'),
  format: z.string().optional(),
  interval: z.lazy(() => Duration).optional(),
  calendar_interval: z.lazy(() => Duration).describe('The interval of time buckets to be generated when rolling up.').optional(),
  fixed_interval: z.lazy(() => Duration).describe('The interval of time buckets to be generated when rolling up.').optional(),
  time_zone: z.lazy(() => TimeZone).describe('Defines what `time_zone` the rollup documents are stored as. Unlike raw data, which can shift timezones on the fly, rolled documents have to be stored with a specific timezone. By default, rollup documents are stored in `UTC`.').optional()
}).meta({ id: 'RollupDateHistogramGrouping' })
export type RollupDateHistogramGrouping = z.infer<typeof RollupDateHistogramGrouping>

export const RollupMetric = z.enum(['min', 'max', 'sum', 'avg', 'value_count']).meta({ id: 'RollupMetric' })
export type RollupMetric = z.infer<typeof RollupMetric>

export const RollupFieldMetric = z.object({
  field: z.lazy(() => Field).describe('The field to collect metrics for. This must be a numeric of some kind.'),
  metrics: z.array(RollupMetric).describe('An array of metrics to collect for the field. At least one metric must be configured.')
}).meta({ id: 'RollupFieldMetric' })
export type RollupFieldMetric = z.infer<typeof RollupFieldMetric>

export const RollupHistogramGrouping = z.object({
  fields: z.lazy(() => Fields).describe('The set of fields that you wish to build histograms for. All fields specified must be some kind of numeric. Order does not matter.'),
  interval: z.lazy(() => long).describe('The interval of histogram buckets to be generated when rolling up. For example, a value of `5` creates buckets that are five units wide (`0-5`, `5-10`, etc). Note that only one interval can be specified in the histogram group, meaning that all fields being grouped via the histogram must share the same interval.')
}).meta({ id: 'RollupHistogramGrouping' })
export type RollupHistogramGrouping = z.infer<typeof RollupHistogramGrouping>

export const RollupTermsGrouping = z.object({
  fields: z.lazy(() => Fields).describe('The set of fields that you wish to collect terms for. This array can contain fields that are both keyword and numerics. Order does not matter.')
}).meta({ id: 'RollupTermsGrouping' })
export type RollupTermsGrouping = z.infer<typeof RollupTermsGrouping>

export const RollupGroupings = z.object({
  date_histogram: RollupDateHistogramGrouping.describe('A date histogram group aggregates a date field into time-based buckets. This group is mandatory; you currently cannot roll up documents without a timestamp and a `date_histogram` group.').optional(),
  histogram: RollupHistogramGrouping.describe('The histogram group aggregates one or more numeric fields into numeric histogram intervals.').optional(),
  terms: RollupTermsGrouping.describe('The terms group can be used on keyword or numeric fields to allow bucketing via the terms aggregation at a later point. The indexer enumerates and stores all values of a field for each time-period. This can be potentially costly for high-cardinality groups such as IP addresses, especially if the time-bucket is particularly sparse.').optional()
}).meta({ id: 'RollupGroupings' })
export type RollupGroupings = z.infer<typeof RollupGroupings>
