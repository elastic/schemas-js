/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DurationValue, ErrorCause, FieldValue, IndexName, NodeId, integer } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { EsqlESQLParams, EsqlEsqlFormat, EsqlEsqlQuerySettings, EsqlTableValuesContainer } from './esql.js'

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
  all_columns: z.array(z.lazy(() => EsqlEsqlColumnInfo)).optional(),
  columns: z.array(z.lazy(() => EsqlEsqlColumnInfo)),
  values: z.array(z.array(z.lazy(() => FieldValue))),
  _clusters: z.lazy(() => EsqlEsqlClusterInfo).describe('Cross-cluster search information. Present if `include_ccs_metadata` was `true` in the request and a cross-cluster search was performed.').optional(),
  profile: z.any().describe('Profiling information. Present if `profile` was `true` in the request. The contents of this field are currently unstable.').optional()
}).meta({ id: 'EsqlEsqlResult' })
export type EsqlEsqlResult = z.infer<typeof EsqlEsqlResult>

/**
 * Run an ES|QL query.
 *
 * Get search results for an ES|QL (Elasticsearch query language) query.
 */
export const EsqlQueryRequest = z.object({
  format: z.lazy(() => EsqlEsqlFormat).describe('A short version of the Accept header, e.g. json, yaml. `csv`, `tsv`, and `txt` formats will return results in a tabular format, excluding other metadata fields from the response.').optional().meta({ found_in: 'query' }),
  delimiter: z.string().describe('The character to use between values within a CSV row. Only valid for the CSV format.').optional().meta({ found_in: 'query' }),
  drop_null_columns: z.boolean().describe('Should columns that are entirely `null` be removed from the `columns` and `values` portion of the results? Defaults to `false`. If `true` then the response will include an extra section under the name `all_columns` which has the name of all columns.').optional().meta({ found_in: 'query' }),
  allow_partial_results: z.boolean().describe('If `true`, partial results will be returned if there are shard failures, but the query can continue to execute on other clusters and shards. If `false`, the query will fail if there are any failures. To override the default behavior, you can set the `esql.query.allow_partial_results` cluster setting to `false`.').optional().meta({ found_in: 'query' }),
  columnar: z.boolean().describe('By default, ES|QL returns results as rows. For example, FROM returns each individual document as one row. For the JSON, YAML, CBOR and smile formats, ES|QL can return the results in a columnar fashion where one row represents all the values of a certain column in the results.').optional().meta({ found_in: 'body' }),
  filter: z.lazy(() => QueryDslQueryContainer).describe('Specify a Query DSL query in the filter parameter to filter the set of documents that an ES|QL query runs on.').optional().meta({ found_in: 'body' }),
  time_zone: z.string().describe('Sets the default timezone of the query.').optional().meta({ found_in: 'body' }),
  locale: z.string().describe('Returns results (especially dates) formatted per the conventions of the locale.').optional().meta({ found_in: 'body' }),
  params: z.lazy(() => EsqlESQLParams).describe('To avoid any attempts of hacking or code injection, extract the values in a separate list of parameters. Use question mark placeholders (?) in the query string for each of the parameters.').optional().meta({ found_in: 'body' }),
  profile: z.boolean().describe('If provided and `true` the response will include an extra `profile` object with information on how the query was executed. This information is for human debugging and its format can change at any time but it can give some insight into the performance of each part of the query.').optional().meta({ found_in: 'body' }),
  query: z.string().describe('The ES|QL query API accepts an ES|QL query string in the query parameter, runs it, and returns the results.').meta({ found_in: 'body' }),
  tables: z.record(z.string(), z.record(z.string(), z.lazy(() => EsqlTableValuesContainer))).describe('Tables to use with the LOOKUP operation. The top level key is the table name and the next level key is the column name.').optional().meta({ found_in: 'body' }),
  include_ccs_metadata: z.boolean().describe('When set to `true` and performing a cross-cluster/cross-project query, the response will include an extra `_clusters` object with information about the clusters that participated in the search along with info such as shards count.').optional().meta({ found_in: 'body' }),
  include_execution_metadata: z.boolean().describe('When set to `true`, the response will include an extra `_clusters` object with information about the clusters that participated in the search along with info such as shards count. This is similar to `include_ccs_metadata`, but it also returns metadata when the query is not CCS/CPS').optional().meta({ found_in: 'body' }),
  settings: z.lazy(() => EsqlEsqlQuerySettings).describe('Per-query settings, the request-body equivalent of the in-query `SET` command. For example, `time_zone` can be supplied here instead of as a top-level field.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlQueryRequest' })
export type EsqlQueryRequest = z.infer<typeof EsqlQueryRequest>

export const EsqlQueryResponse = z.lazy(() => EsqlEsqlResult).meta({ id: 'EsqlQueryResponse' })
export type EsqlQueryResponse = z.infer<typeof EsqlQueryResponse>
