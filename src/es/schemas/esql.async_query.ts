/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { EsqlAsyncEsqlResult, EsqlESQLParams, EsqlEsqlFormat, EsqlEsqlQuerySettings, EsqlTableValuesContainer } from './esql.js'

/**
 * Run an async ES|QL query.
 *
 * Asynchronously run an ES|QL (Elasticsearch query language) query, monitor its progress, and retrieve results when they become available.
 *
 * The API accepts the same parameters and request body as the synchronous query API, along with additional async related properties.
 */
export const EsqlAsyncQueryRequest = z.object({
  allow_partial_results: z.boolean().describe('If `true`, partial results will be returned if there are shard failures, but the query can continue to execute on other clusters and shards. If `false`, the query will fail if there are any failures. To override the default behavior, you can set the `esql.query.allow_partial_results` cluster setting to `false`.').optional().meta({ found_in: 'query' }),
  delimiter: z.string().describe('The character to use between values within a CSV row. It is valid only for the CSV format.').optional().meta({ found_in: 'query' }),
  drop_null_columns: z.boolean().describe('Indicates whether columns that are entirely `null` will be removed from the `columns` and `values` portion of the results. If `true`, the response will include an extra section under the name `all_columns` which has the name of all the columns.').optional().meta({ found_in: 'query' }),
  format: EsqlEsqlFormat.describe('A short version of the Accept header, e.g. json, yaml. `csv`, `tsv`, and `txt` formats will return results in a tabular format, excluding other metadata fields from the response. For async requests, nothing will be returned if the async query doesn\'t finish within the timeout. The query ID and running status are available in the `X-Elasticsearch-Async-Id` and `X-Elasticsearch-Async-Is-Running` HTTP headers of the response, respectively.').optional().meta({ found_in: 'query' }),
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
  wait_for_completion_timeout: z.lazy(() => Duration).describe('The period to wait for the request to finish. By default, the request waits for 1 second for the query results. If the query completes during this period, results are returned Otherwise, a query ID is returned that can later be used to retrieve the results.').optional().meta({ found_in: 'body' }),
  keep_alive: z.lazy(() => Duration).describe('The period for which the query and its results are stored in the cluster. The default period is five days. When this period expires, the query and its results are deleted, even if the query is still ongoing. If the `keep_on_completion` parameter is false, Elasticsearch only stores async queries that do not complete within the period set by the `wait_for_completion_timeout` parameter, regardless of this value.').optional().meta({ found_in: 'body' }),
  keep_on_completion: z.boolean().describe('Indicates whether the query and its results are stored in the cluster. If false, the query and its results are stored in the cluster only if the request does not complete during the period set by the `wait_for_completion_timeout` parameter.').optional().meta({ found_in: 'body' }),
  settings: EsqlEsqlQuerySettings.describe('Per-query settings, the request-body equivalent of the in-query `SET` command. For example, `time_zone` can be supplied here instead of as a top-level field.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlAsyncQueryRequest' })
export type EsqlAsyncQueryRequest = z.infer<typeof EsqlAsyncQueryRequest>

export const EsqlAsyncQueryResponse = EsqlAsyncEsqlResult.meta({ id: 'EsqlAsyncQueryResponse' })
export type EsqlAsyncQueryResponse = z.infer<typeof EsqlAsyncQueryResponse>
