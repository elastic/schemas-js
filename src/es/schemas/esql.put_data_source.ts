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

export const AcknowledgedResponseBase = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' })
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const Name = z.string().meta({ id: 'Name' })
export type Name = z.infer<typeof Name>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

/**
 * Create or update an ES|QL data source.
 *
 * Creates or replaces a named, type-specific data source configuration for ES|QL data federation.
 * Datasets reference data source configurations to access external data. Names must be lowercase
 * and follow index or alias naming rules.
 */
export const EsqlPutDataSourceRequest = z.object({
  ...RequestBase.shape,
  name: Name.describe('The data source name to create or update.').meta({ found_in: 'path' }),
  master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: Duration.describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' }),
  type: z.string().describe('The data source type. Currently, `s3` is supported. The value must be lowercase and contain no whitespace.').meta({ found_in: 'body' }),
  description: z.string().describe('A free-text description of the data source.').optional().meta({ found_in: 'body' }),
  settings: z.record(z.string(), z.any()).describe('Type-specific connection and authentication settings. For `s3`, connection settings include `region` and `endpoint`. Authentication settings include `auth` and the credentials required by the selected authentication method.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlPutDataSourceRequest' })
export type EsqlPutDataSourceRequest = z.infer<typeof EsqlPutDataSourceRequest>

export const EsqlPutDataSourceResponse = AcknowledgedResponseBase.meta({ id: 'EsqlPutDataSourceResponse' })
export type EsqlPutDataSourceResponse = z.infer<typeof EsqlPutDataSourceResponse>
