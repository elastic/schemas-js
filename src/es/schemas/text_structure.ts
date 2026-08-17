/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { integer, long } from './_types.js'

export const TextStructureEcsCompatibilityType = z.enum(['disabled', 'v1']).meta({ id: 'TextStructureEcsCompatibilityType' })
export type TextStructureEcsCompatibilityType = z.infer<typeof TextStructureEcsCompatibilityType>

export const TextStructureTopHit = z.object({
  count: z.lazy(() => long),
  value: z.any()
}).meta({ id: 'TextStructureTopHit' })
export type TextStructureTopHit = z.infer<typeof TextStructureTopHit>

export const TextStructureFieldStat = z.object({
  count: z.lazy(() => integer),
  cardinality: z.lazy(() => integer),
  top_hits: z.array(TextStructureTopHit),
  mean_value: z.lazy(() => integer).optional(),
  median_value: z.lazy(() => integer).optional(),
  max_value: z.lazy(() => integer).optional(),
  min_value: z.lazy(() => integer).optional(),
  earliest: z.string().optional(),
  latest: z.string().optional()
}).meta({ id: 'TextStructureFieldStat' })
export type TextStructureFieldStat = z.infer<typeof TextStructureFieldStat>

export const TextStructureFormatType = z.enum(['delimited', 'ndjson', 'semi_structured_text', 'xml']).meta({ id: 'TextStructureFormatType' })
export type TextStructureFormatType = z.infer<typeof TextStructureFormatType>
