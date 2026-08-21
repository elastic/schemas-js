/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Fields, Names } from './_types.js'

export const CatCatFieldDataColumn = z.union([z.enum(['id', 'host', 'h', 'ip', 'node', 'n', 'field', 'f', 'size', 's']), z.string()]).meta({ id: 'CatCatFieldDataColumn' })
export type CatCatFieldDataColumn = z.infer<typeof CatCatFieldDataColumn>

export const CatCatFieldDataColumns = z.union([CatCatFieldDataColumn, z.array(CatCatFieldDataColumn)]).meta({ id: 'CatCatFieldDataColumns' })
export type CatCatFieldDataColumns = z.infer<typeof CatCatFieldDataColumns>

export const CatFielddataFielddataRecord = z.object({
  id: z.string().describe('node id').optional(),
  host: z.string().describe('host name').optional(),
  h: z.string().describe('host name').optional(),
  ip: z.string().describe('ip address').optional(),
  node: z.string().describe('node name').optional(),
  n: z.string().describe('node name').optional(),
  field: z.string().describe('field name').optional(),
  f: z.string().describe('field name').optional(),
  size: z.string().describe('field data usage').optional()
}).meta({ id: 'CatFielddataFielddataRecord' })
export type CatFielddataFielddataRecord = z.infer<typeof CatFielddataFielddataRecord>

/**
 * Get field data cache information.
 *
 * Get the amount of heap memory currently used by the field data cache on every data node in the cluster.
 *
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console.
 * They are not intended for use by applications. For application consumption, use the nodes stats API.
 */
export const CatFielddataRequest = z.object({
  fields: z.lazy(() => Fields).describe('Comma-separated list of fields used to limit returned information. To retrieve all fields, omit this parameter.').optional().meta({ found_in: 'path' }),
  h: CatCatFieldDataColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatFielddataRequest' })
export type CatFielddataRequest = z.infer<typeof CatFielddataRequest>

export const CatFielddataResponse = z.array(CatFielddataFielddataRecord).meta({ id: 'CatFielddataResponse' })
export type CatFielddataResponse = z.infer<typeof CatFielddataResponse>
