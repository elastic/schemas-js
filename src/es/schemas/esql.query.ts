/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { EsqlESQLParams, EsqlEsqlFormat, EsqlEsqlQuerySettings, EsqlEsqlResult, EsqlTableValuesContainer } from './esql.js'

/**
 * Run an ES|QL query.
 *
 * Get search results for an ES|QL (Elasticsearch query language) query.
 */
export const EsqlQueryRequest = z.object({
  format: EsqlEsqlFormat.describe('A short version of the Accept header, e.g. json, yaml. `csv`, `tsv`, and `txt` formats will return results in a tabular format, excluding other metadata fields from the response.').optional().meta({ found_in: 'query' }),
  delimiter: z.string().describe('The character to use between values within a CSV row. Only valid for the CSV format.').optional().meta({ found_in: 'query' }),
  drop_null_columns: z.boolean().describe('Should columns that are entirely `null` be removed from the `columns` and `values` portion of the results? Defaults to `false`. If `true` then the response will include an extra section under the name `all_columns` which has the name of all columns.').optional().meta({ found_in: 'query' }),
  allow_partial_results: z.boolean().describe('If `true`, partial results will be returned if there are shard failures, but the query can continue to execute on other clusters and shards. If `false`, the query will fail if there are any failures. To override the default behavior, you can set the `esql.query.allow_partial_results` cluster setting to `false`.').optional().meta({ found_in: 'query' }),
  columnar: z.boolean().describe('By default, ES|QL returns results as rows. For example, FROM returns each individual document as one row. For the JSON, YAML, CBOR and smile formats, ES|QL can return the results in a columnar fashion where one row represents all the values of a certain column in the results.').optional().meta({ found_in: 'body' }),
  filter: z.lazy(() => QueryDslQueryContainer).describe('Specify a Query DSL query in the filter parameter to filter the set of documents that an ES|QL query runs on.').optional().meta({ found_in: 'body' }),
  time_zone: z.string().describe('Sets the default timezone of the query.').optional().meta({ found_in: 'body' }),
  locale: z.string().describe('Returns results (especially dates) formatted per the conventions of the locale.').optional().meta({ found_in: 'body' }),
  params: EsqlESQLParams.describe('To avoid any attempts of hacking or code injection, extract the values in a separate list of parameters. Use question mark placeholders (?) in the query string for each of the parameters.').optional().meta({ found_in: 'body' }),
  profile: z.boolean().describe('If provided and `true` the response will include an extra `profile` object with information on how the query was executed. This information is for human debugging and its format can change at any time but it can give some insight into the performance of each part of the query.').optional().meta({ found_in: 'body' }),
  query: z.string().describe('The ES|QL query API accepts an ES|QL query string in the query parameter, runs it, and returns the results.').meta({ found_in: 'body' }),
  tables: z.record(z.string(), z.record(z.string(), EsqlTableValuesContainer)).describe('Tables to use with the LOOKUP operation. The top level key is the table name and the next level key is the column name.').optional().meta({ found_in: 'body' }),
  include_ccs_metadata: z.boolean().describe('When set to `true` and performing a cross-cluster/cross-project query, the response will include an extra `_clusters` object with information about the clusters that participated in the search along with info such as shards count.').optional().meta({ found_in: 'body' }),
  include_execution_metadata: z.boolean().describe('When set to `true`, the response will include an extra `_clusters` object with information about the clusters that participated in the search along with info such as shards count. This is similar to `include_ccs_metadata`, but it also returns metadata when the query is not CCS/CPS').optional().meta({ found_in: 'body' }),
  settings: EsqlEsqlQuerySettings.describe('Per-query settings, the request-body equivalent of the in-query `SET` command. For example, `time_zone` can be supplied here instead of as a top-level field.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlQueryRequest' })
export type EsqlQueryRequest = z.infer<typeof EsqlQueryRequest>

export const EsqlQueryResponse = EsqlEsqlResult.meta({ id: 'EsqlQueryResponse' })
export type EsqlQueryResponse = z.infer<typeof EsqlQueryResponse>
