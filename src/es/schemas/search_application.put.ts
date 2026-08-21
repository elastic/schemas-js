/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName, Name, Result, Script, ScriptSource } from './_types.js'
import type { ScriptSourceShape } from './_types.js'

export const SearchApplicationSearchApplicationTemplate = z.object({
  script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]).describe('The associated mustache template.')
}).meta({ id: 'SearchApplicationSearchApplicationTemplate' })
export type SearchApplicationSearchApplicationTemplate = z.infer<typeof SearchApplicationSearchApplicationTemplate>

export const SearchApplicationSearchApplicationParameters = z.object({
  indices: z.array(z.lazy(() => IndexName)).describe('Indices that are part of the Search Application.'),
  analytics_collection_name: z.lazy(() => Name).describe('Analytics collection associated to the Search Application.').optional(),
  template: SearchApplicationSearchApplicationTemplate.describe('Search template to use on search operations.').optional()
}).meta({ id: 'SearchApplicationSearchApplicationParameters' })
export type SearchApplicationSearchApplicationParameters = z.infer<typeof SearchApplicationSearchApplicationParameters>

/** Create or update a search application. */
export const SearchApplicationPutRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the search application to be created or updated.').meta({ found_in: 'path' }),
  create: z.boolean().describe('If `true`, this request cannot replace or update existing Search Applications.').optional().meta({ found_in: 'query' }),
  search_application: SearchApplicationSearchApplicationParameters.optional().meta({ found_in: 'body' })
}).meta({ id: 'SearchApplicationPutRequest' })
export type SearchApplicationPutRequest = z.infer<typeof SearchApplicationPutRequest>

export const SearchApplicationPutResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'SearchApplicationPutResponse' })
export type SearchApplicationPutResponse = z.infer<typeof SearchApplicationPutResponse>
