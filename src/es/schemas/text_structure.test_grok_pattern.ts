/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { GrokPattern, integer } from './_types.js'

export const TextStructureTestGrokPatternMatchedField = z.object({
  match: z.string(),
  offset: z.lazy(() => integer),
  length: z.lazy(() => integer)
}).meta({ id: 'TextStructureTestGrokPatternMatchedField' })
export type TextStructureTestGrokPatternMatchedField = z.infer<typeof TextStructureTestGrokPatternMatchedField>

export const TextStructureTestGrokPatternMatchedText = z.object({
  matched: z.boolean(),
  fields: z.record(z.string(), z.array(TextStructureTestGrokPatternMatchedField)).optional()
}).meta({ id: 'TextStructureTestGrokPatternMatchedText' })
export type TextStructureTestGrokPatternMatchedText = z.infer<typeof TextStructureTestGrokPatternMatchedText>

/**
 * Test a Grok pattern.
 *
 * Test a Grok pattern on one or more lines of text.
 * The API indicates whether the lines match the pattern together with the offsets and lengths of the matched substrings.
 */
export const TextStructureTestGrokPatternRequest = z.object({
  ecs_compatibility: z.string().describe('The mode of compatibility with ECS compliant Grok patterns. Use this parameter to specify whether to use ECS Grok patterns instead of legacy ones when the structure finder creates a Grok pattern. Valid values are `disabled` and `v1`.').optional().meta({ found_in: 'query' }),
  grok_pattern: z.lazy(() => GrokPattern).describe('The Grok pattern to run on the text.').meta({ found_in: 'body' }),
  text: z.array(z.string()).describe('The lines of text to run the Grok pattern on.').meta({ found_in: 'body' })
}).meta({ id: 'TextStructureTestGrokPatternRequest' })
export type TextStructureTestGrokPatternRequest = z.infer<typeof TextStructureTestGrokPatternRequest>

export const TextStructureTestGrokPatternResponse = z.object({
  matches: z.array(TextStructureTestGrokPatternMatchedText)
}).meta({ id: 'TextStructureTestGrokPatternResponse' })
export type TextStructureTestGrokPatternResponse = z.infer<typeof TextStructureTestGrokPatternResponse>
