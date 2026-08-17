/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, IndexName, long } from './_types.js'
import { AnalysisCharFilter, AnalysisTokenFilter, AnalysisTokenizer } from './_types.analysis.js'

export const IndicesAnalyzeExplainAnalyzeToken = z.object({
  bytes: z.string(),
  end_offset: z.lazy(() => long),
  keyword: z.boolean().optional(),
  position: z.lazy(() => long),
  positionLength: z.lazy(() => long),
  start_offset: z.lazy(() => long),
  termFrequency: z.lazy(() => long),
  token: z.string(),
  type: z.string()
}).catchall(z.any()).meta({ id: 'IndicesAnalyzeExplainAnalyzeToken' })
export type IndicesAnalyzeExplainAnalyzeToken = z.infer<typeof IndicesAnalyzeExplainAnalyzeToken>

export const IndicesAnalyzeAnalyzerDetail = z.object({
  name: z.string(),
  tokens: z.array(IndicesAnalyzeExplainAnalyzeToken)
}).meta({ id: 'IndicesAnalyzeAnalyzerDetail' })
export type IndicesAnalyzeAnalyzerDetail = z.infer<typeof IndicesAnalyzeAnalyzerDetail>

export const IndicesAnalyzeCharFilterDetail = z.object({
  filtered_text: z.array(z.string()),
  name: z.string()
}).meta({ id: 'IndicesAnalyzeCharFilterDetail' })
export type IndicesAnalyzeCharFilterDetail = z.infer<typeof IndicesAnalyzeCharFilterDetail>

export const IndicesAnalyzeTokenDetail = z.object({
  name: z.string(),
  tokens: z.array(IndicesAnalyzeExplainAnalyzeToken)
}).meta({ id: 'IndicesAnalyzeTokenDetail' })
export type IndicesAnalyzeTokenDetail = z.infer<typeof IndicesAnalyzeTokenDetail>

export const IndicesAnalyzeAnalyzeDetail = z.object({
  analyzer: IndicesAnalyzeAnalyzerDetail.optional(),
  charfilters: z.array(IndicesAnalyzeCharFilterDetail).optional(),
  custom_analyzer: z.boolean(),
  tokenfilters: z.array(IndicesAnalyzeTokenDetail).optional(),
  tokenizer: IndicesAnalyzeTokenDetail.optional()
}).meta({ id: 'IndicesAnalyzeAnalyzeDetail' })
export type IndicesAnalyzeAnalyzeDetail = z.infer<typeof IndicesAnalyzeAnalyzeDetail>

export const IndicesAnalyzeAnalyzeToken = z.object({
  end_offset: z.lazy(() => long),
  position: z.lazy(() => long),
  positionLength: z.lazy(() => long).optional(),
  start_offset: z.lazy(() => long),
  token: z.string(),
  type: z.string()
}).meta({ id: 'IndicesAnalyzeAnalyzeToken' })
export type IndicesAnalyzeAnalyzeToken = z.infer<typeof IndicesAnalyzeAnalyzeToken>

export const IndicesAnalyzeTextToAnalyze = z.union([z.string(), z.array(z.string())]).meta({ id: 'IndicesAnalyzeTextToAnalyze' })
export type IndicesAnalyzeTextToAnalyze = z.infer<typeof IndicesAnalyzeTextToAnalyze>

/**
 * Get tokens from text analysis.
 *
 * The analyze API performs analysis on a text string and returns the resulting tokens.
 *
 * Generating excessive amount of tokens may cause a node to run out of memory.
 * The `index.analyze.max_token_count` setting enables you to limit the number of tokens that can be produced.
 * If more than this limit of tokens gets generated, an error occurs.
 * The `_analyze` endpoint without a specified index will always use `10000` as its limit.
 */
export const IndicesAnalyzeRequest = z.object({
  index: z.lazy(() => IndexName).describe('Index used to derive the analyzer. If specified, the `analyzer` or field parameter overrides this value. If no index is specified or the index does not have a default analyzer, the analyze API uses the standard analyzer.').optional().meta({ found_in: 'path' }),
  analyzer: z.string().describe('The name of the analyzer that should be applied to the provided `text`. This could be a built-in analyzer, or an analyzer that’s been configured in the index.').optional().meta({ found_in: 'body' }),
  attributes: z.array(z.string()).describe('Array of token attributes used to filter the output of the `explain` parameter.').optional().meta({ found_in: 'body' }),
  char_filter: z.array(z.lazy(() => AnalysisCharFilter)).describe('Array of character filters used to preprocess characters before the tokenizer.').optional().meta({ found_in: 'body' }),
  explain: z.boolean().describe('If `true`, the response includes token attributes and additional details.').optional().meta({ found_in: 'body' }),
  field: z.lazy(() => Field).describe('Field used to derive the analyzer. To use this parameter, you must specify an index. If specified, the `analyzer` parameter overrides this value.').optional().meta({ found_in: 'body' }),
  filter: z.array(z.lazy(() => AnalysisTokenFilter)).describe('Array of token filters used to apply after the tokenizer.').optional().meta({ found_in: 'body' }),
  normalizer: z.string().describe('Normalizer to use to convert text into a single token.').optional().meta({ found_in: 'body' }),
  text: IndicesAnalyzeTextToAnalyze.describe('Text to analyze. If an array of strings is provided, it is analyzed as a multi-value field.').optional().meta({ found_in: 'body' }),
  tokenizer: z.lazy(() => AnalysisTokenizer).describe('Tokenizer to use to convert text into tokens.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesAnalyzeRequest' })
export type IndicesAnalyzeRequest = z.infer<typeof IndicesAnalyzeRequest>

export const IndicesAnalyzeResponse = z.object({
  detail: IndicesAnalyzeAnalyzeDetail.optional(),
  tokens: z.array(IndicesAnalyzeAnalyzeToken).optional()
}).meta({ id: 'IndicesAnalyzeResponse' })
export type IndicesAnalyzeResponse = z.infer<typeof IndicesAnalyzeResponse>
