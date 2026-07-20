/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-nocheck

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any())
export type TODO = z.infer<typeof TODO>

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const Name = z.string().meta({ id: 'Name' })
export type Name = z.infer<typeof Name>

export const Names = z.union([Name, z.array(Name)]).meta({ id: 'Names' })
export type Names = z.infer<typeof Names>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

/**
 * Represents a data source definition stored in cluster state. A data source holds
 * connection settings (credentials, endpoints, auth) for an external data provider.
 */
export const EsqlESQLDataSource = z.object({
  name: Name.describe('The data source name.'),
  type: z.string().describe('The data source type. Currently, `s3` is supported.'),
  description: z.string().describe('A free-text description.').optional(),
  settings: z.record(z.string(), z.any()).describe('Type-specific connection and authentication settings.')
}).meta({ id: 'EsqlESQLDataSource' })
export type EsqlESQLDataSource = z.infer<typeof EsqlESQLDataSource>

/**
 * Get ES|QL data sources.
 *
 * Returns one or more data sources used in ES|QL data federation.
 * A concrete-name miss returns `404`; a wildcard pattern or list-all request with no match
 * returns `200` with an empty array.
 */
export const EsqlGetDataSourceRequest = z.object({
  ...RequestBase.shape,
  name: Names.describe('A comma-separated list of data source names or wildcard patterns. Omit to return all data sources.').optional().meta({ found_in: 'path' }),
  master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlGetDataSourceRequest' })
export type EsqlGetDataSourceRequest = z.infer<typeof EsqlGetDataSourceRequest>

export const EsqlGetDataSourceResponse = z.object({
  data_sources: z.array(EsqlESQLDataSource).describe('The matching data sources. Credential values in each data source\'s settings are redacted as `::es_redacted::` in the response.')
}).meta({ id: 'EsqlGetDataSourceResponse' })
export type EsqlGetDataSourceResponse = z.infer<typeof EsqlGetDataSourceResponse>
