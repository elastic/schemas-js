/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsStringified } from './_spec_utils.js'
import { Indices, Names, TimeOfDay } from './_types.js'

export const CatCatCountColumn = z.union([z.enum(['epoch', 't', 'time', 'timestamp', 'ts', 'hms', 'hhmmss', 'count', 'dc', 'docs.count', 'docsCount']), z.string()]).meta({ id: 'CatCatCountColumn' })
export type CatCatCountColumn = z.infer<typeof CatCatCountColumn>

export const CatCatCountColumns = z.union([CatCatCountColumn, z.array(CatCatCountColumn)]).meta({ id: 'CatCatCountColumns' })
export type CatCatCountColumns = z.infer<typeof CatCatCountColumns>

export const CatCountCountRecord = z.object({
  epoch: z.lazy(() => SpecUtilsStringified).describe('seconds since 1970-01-01 00:00:00').optional(),
  t: z.lazy(() => SpecUtilsStringified).describe('seconds since 1970-01-01 00:00:00').optional(),
  time: z.lazy(() => SpecUtilsStringified).describe('seconds since 1970-01-01 00:00:00').optional(),
  timestamp: z.lazy(() => TimeOfDay).describe('time in HH:MM:SS').optional(),
  ts: z.lazy(() => TimeOfDay).describe('time in HH:MM:SS').optional(),
  hms: z.lazy(() => TimeOfDay).describe('time in HH:MM:SS').optional(),
  hhmmss: z.lazy(() => TimeOfDay).describe('time in HH:MM:SS').optional(),
  count: z.string().describe('the document count').optional(),
  dc: z.string().describe('the document count').optional(),
  'docs.count': z.string().describe('the document count').optional(),
  docsCount: z.string().describe('the document count').optional()
}).meta({ id: 'CatCountCountRecord' })
export type CatCountCountRecord = z.infer<typeof CatCountCountRecord>

/**
 * Get a document count.
 *
 * Get quick access to a document count for a data stream, an index, or an entire cluster.
 * The document count only includes live documents, not deleted documents which have not yet been removed by the merge process.
 *
 * IMPORTANT: CAT APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the count API.
 *
 * NOTE: Starting in Elasticsearch 9.3.0, this endpoint also supports the `POST` method. This is primarily intended for project routing in serverless environments.
 */
export const CatCountRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of data streams, indices, and aliases used to limit the request. It supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  h: CatCatCountColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatCountRequest' })
export type CatCountRequest = z.infer<typeof CatCountRequest>

export const CatCountResponse = z.array(CatCountCountRecord).meta({ id: 'CatCountResponse' })
export type CatCountResponse = z.infer<typeof CatCountResponse>
