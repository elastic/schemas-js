/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesIndexSettings } from './indices.js'

export const IndicesCreateFromCreateFrom = z.object({
  mappings_override: z.lazy(() => MappingTypeMapping).describe('Mappings overrides to be applied to the destination index (optional)').optional(),
  settings_override: z.lazy(() => IndicesIndexSettings).describe('Settings overrides to be applied to the destination index (optional)').optional(),
  remove_index_blocks: z.boolean().describe('If index blocks should be removed when creating destination index (optional)').optional()
}).meta({ id: 'IndicesCreateFromCreateFrom' })
export type IndicesCreateFromCreateFrom = z.infer<typeof IndicesCreateFromCreateFrom>

/**
 * Create an index from a source index.
 *
 * Copy the mappings and settings from the source index to a destination index while allowing request settings and mappings to override the source values.
 */
export const IndicesCreateFromRequest = z.object({
  source: z.lazy(() => IndexName).describe('The source index or data stream name').meta({ found_in: 'path' }),
  dest: z.lazy(() => IndexName).describe('The destination index or data stream name').meta({ found_in: 'path' }),
  create_from: IndicesCreateFromCreateFrom.optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesCreateFromRequest' })
export type IndicesCreateFromRequest = z.infer<typeof IndicesCreateFromRequest>

export const IndicesCreateFromResponse = z.object({
  acknowledged: z.boolean(),
  index: z.lazy(() => IndexName),
  shards_acknowledged: z.boolean()
}).meta({ id: 'IndicesCreateFromResponse' })
export type IndicesCreateFromResponse = z.infer<typeof IndicesCreateFromResponse>
