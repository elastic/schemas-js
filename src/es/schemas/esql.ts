/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsStringified } from './_spec_utils.js'
import { DurationValue, ErrorCause, FieldValue, IndexName, NodeId, ProjectRouting, double, integer, long } from './_types.js'

export const EsqlEsqlColumnInfo = z.object({
  name: z.string(),
  type: z.string()
}).meta({ id: 'EsqlEsqlColumnInfo' })
export type EsqlEsqlColumnInfo = z.infer<typeof EsqlEsqlColumnInfo>

export const EsqlEsqlClusterStatus = z.enum(['running', 'successful', 'partial', 'skipped', 'failed']).meta({ id: 'EsqlEsqlClusterStatus' })
export type EsqlEsqlClusterStatus = z.infer<typeof EsqlEsqlClusterStatus>

export const EsqlEsqlShardInfo = z.object({
  total: z.lazy(() => integer),
  successful: z.lazy(() => integer).optional(),
  skipped: z.lazy(() => integer).optional(),
  failed: z.lazy(() => integer).optional()
}).meta({ id: 'EsqlEsqlShardInfo' })
export type EsqlEsqlShardInfo = z.infer<typeof EsqlEsqlShardInfo>

export const EsqlEsqlShardFailure = z.object({
  shard: z.lazy(() => integer),
  index: z.union([z.lazy(() => IndexName), z.null()]),
  node: z.lazy(() => NodeId).optional(),
  reason: z.lazy(() => ErrorCause)
}).meta({ id: 'EsqlEsqlShardFailure' })
export type EsqlEsqlShardFailure = z.infer<typeof EsqlEsqlShardFailure>

export const EsqlEsqlClusterDetails = z.object({
  status: EsqlEsqlClusterStatus,
  indices: z.string(),
  took: z.lazy(() => DurationValue).optional(),
  _shards: EsqlEsqlShardInfo.optional(),
  failures: z.array(EsqlEsqlShardFailure).optional()
}).meta({ id: 'EsqlEsqlClusterDetails' })
export type EsqlEsqlClusterDetails = z.infer<typeof EsqlEsqlClusterDetails>

export const EsqlEsqlClusterInfo = z.object({
  total: z.lazy(() => integer),
  successful: z.lazy(() => integer),
  running: z.lazy(() => integer),
  skipped: z.lazy(() => integer),
  partial: z.lazy(() => integer),
  failed: z.lazy(() => integer),
  details: z.record(z.string(), EsqlEsqlClusterDetails)
}).meta({ id: 'EsqlEsqlClusterInfo' })
export type EsqlEsqlClusterInfo = z.infer<typeof EsqlEsqlClusterInfo>

export const EsqlEsqlResult = z.object({
  took: z.lazy(() => DurationValue).optional(),
  is_partial: z.boolean().optional(),
  all_columns: z.array(EsqlEsqlColumnInfo).optional(),
  columns: z.array(EsqlEsqlColumnInfo),
  values: z.array(z.array(z.lazy(() => FieldValue))),
  _clusters: EsqlEsqlClusterInfo.describe('Cross-cluster search information. Present if `include_ccs_metadata` was `true` in the request and a cross-cluster search was performed.').optional(),
  profile: z.any().describe('Profiling information. Present if `profile` was `true` in the request. The contents of this field are currently unstable.').optional()
}).meta({ id: 'EsqlEsqlResult' })
export type EsqlEsqlResult = z.infer<typeof EsqlEsqlResult>

export const EsqlAsyncEsqlResult = z.object({
  ...EsqlEsqlResult.shape,
  id: z.string().describe('The ID of the async query, to be used in subsequent requests to check the status or retrieve results. Also available in the `X-Elasticsearch-Async-Id` HTTP header.').optional(),
  is_running: z.boolean().describe('Indicates whether the async query is still running or has completed. Also available in the `X-Elasticsearch-Async-Is-Running` HTTP header.')
}).meta({ id: 'EsqlAsyncEsqlResult' })
export type EsqlAsyncEsqlResult = z.infer<typeof EsqlAsyncEsqlResult>

export const EsqlSingleOrMultiValue = z.union([z.lazy(() => FieldValue), z.array(z.lazy(() => FieldValue))]).meta({ id: 'EsqlSingleOrMultiValue' })
export type EsqlSingleOrMultiValue = z.infer<typeof EsqlSingleOrMultiValue>

const EsqlClassifiedNamedParameterExclusiveProps = z.union([z.object({ value: EsqlSingleOrMultiValue }), z.object({ identifier: z.string() }), z.object({ pattern: z.string() })])

/**
 * A named ES|QL query parameter supplied in its classified form.
 * Exactly one of `value`, `identifier`, or `pattern` must be set.
 */
export const EsqlClassifiedNamedParameter = EsqlClassifiedNamedParameterExclusiveProps.meta({ id: 'EsqlClassifiedNamedParameter' })
export type EsqlClassifiedNamedParameter = z.infer<typeof EsqlClassifiedNamedParameter>

/**
 * The value of a named ES|QL query parameter.
 * It is either a literal single or multi value, or a single-key object that classifies how
 * the parameter is interpreted.
 */
export const EsqlNamedParameterValue = z.union([EsqlSingleOrMultiValue, EsqlClassifiedNamedParameter]).meta({ id: 'EsqlNamedParameterValue' })
export type EsqlNamedParameterValue = z.infer<typeof EsqlNamedParameterValue>

export const EsqlNamedValue = z.record(z.string(), EsqlNamedParameterValue).meta({ id: 'EsqlNamedValue' })
export type EsqlNamedValue = z.infer<typeof EsqlNamedValue>

export const EsqlESQLParams = z.union([z.array(EsqlSingleOrMultiValue), z.array(EsqlNamedValue)]).meta({ id: 'EsqlESQLParams' })
export type EsqlESQLParams = z.infer<typeof EsqlESQLParams>

export const EsqlEsqlApproximationSettings = z.object({
  rows: z.lazy(() => integer).describe('The number of sampled rows used for approximating the query. It must be at least 10,000. A null value uses the system default.').optional(),
  confidence_level: z.lazy(() => double).describe('The confidence level of the computed confidence intervals. A null value disables computing confidence intervals.').optional()
}).meta({ id: 'EsqlEsqlApproximationSettings' })
export type EsqlEsqlApproximationSettings = z.infer<typeof EsqlEsqlApproximationSettings>

/**
 * The `approximation` query setting.
 * It can be a boolean that toggles query approximation with default settings, or a map that enables it with custom settings.
 */
export const EsqlEsqlApproximation = z.union([z.boolean(), EsqlEsqlApproximationSettings]).meta({ id: 'EsqlEsqlApproximation' })
export type EsqlEsqlApproximation = z.infer<typeof EsqlEsqlApproximation>

export const EsqlEsqlFormat = z.enum(['csv', 'json', 'tsv', 'txt', 'yaml', 'cbor', 'smile', 'arrow']).meta({ id: 'EsqlEsqlFormat' })
export type EsqlEsqlFormat = z.infer<typeof EsqlEsqlFormat>

/**
 * Per-query settings supplied through the request body.
 * This is the request-body equivalent of the in-query `SET` command.
 * Only settings that are exposed as request-body parameters can be set here; other `SET`-only
 * settings (such as `unmapped_fields`) must be supplied in the query itself.
 */
export const EsqlEsqlQuerySettings = z.object({
  time_zone: z.string().describe('The default timezone to be used in the query. It defaults to UTC and overrides the `time_zone` request parameter.').optional(),
  approximation: EsqlEsqlApproximation.describe('Enables query approximation if possible for the query. `false` (the default) disables query approximation and `true` enables it with default settings. A map value enables query approximation with custom settings.').optional(),
  column_metadata: z.lazy(() => SpecUtilsStringified).describe('When enabled, column metadata is added to the query response as additional `_meta` properties. Currently, only `_meta.bucket` is added for columns corresponding to the `BUCKET` function, containing the bucket interval and unit for queries where it can be determined.').optional(),
  project_routing: z.lazy(() => ProjectRouting).describe('Limits the scope of a cross-project search (CPS) to specific projects before query execution, based on a Lucene query expression evaluated against project tags. Excluded projects are not queried, which can reduce cost and latency.').optional()
}).meta({ id: 'EsqlEsqlQuerySettings' })
export type EsqlEsqlQuerySettings = z.infer<typeof EsqlEsqlQuerySettings>

export const EsqlTableValuesIntegerValue = z.union([z.lazy(() => integer), z.array(z.lazy(() => integer))]).meta({ id: 'EsqlTableValuesIntegerValue' })
export type EsqlTableValuesIntegerValue = z.infer<typeof EsqlTableValuesIntegerValue>

export const EsqlTableValuesKeywordValue = z.union([z.string(), z.array(z.string())]).meta({ id: 'EsqlTableValuesKeywordValue' })
export type EsqlTableValuesKeywordValue = z.infer<typeof EsqlTableValuesKeywordValue>

export const EsqlTableValuesLongValue = z.union([z.lazy(() => long), z.array(z.lazy(() => long))]).meta({ id: 'EsqlTableValuesLongValue' })
export type EsqlTableValuesLongValue = z.infer<typeof EsqlTableValuesLongValue>

export const EsqlTableValuesLongDouble = z.union([z.lazy(() => double), z.array(z.lazy(() => double))]).meta({ id: 'EsqlTableValuesLongDouble' })
export type EsqlTableValuesLongDouble = z.infer<typeof EsqlTableValuesLongDouble>

const EsqlTableValuesContainerExclusiveProps = z.union([z.object({ integer: z.array(EsqlTableValuesIntegerValue) }), z.object({ keyword: z.array(EsqlTableValuesKeywordValue) }), z.object({ long: z.array(EsqlTableValuesLongValue) }), z.object({ double: z.array(EsqlTableValuesLongDouble) })])

export const EsqlTableValuesContainer = EsqlTableValuesContainerExclusiveProps.meta({ id: 'EsqlTableValuesContainer' })
export type EsqlTableValuesContainer = z.infer<typeof EsqlTableValuesContainer>
