/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, VersionString, integer } from './_types.js'
import { AnalysisCharFilter, AnalysisTokenFilter, AnalysisTokenizer } from './_types.analysis.js'

export const MlCategorizationAnalyzerDefinition = z.object({
  char_filter: z.array(z.lazy(() => AnalysisCharFilter)).describe('One or more character filters. In addition to the built-in character filters, other plugins can provide more character filters. If this property is not specified, no character filters are applied prior to categorization. If you are customizing some other aspect of the analyzer and you need to achieve the equivalent of `categorization_filters` (which are not permitted when some other aspect of the analyzer is customized), add them here as pattern replace character filters.').optional(),
  filter: z.array(z.lazy(() => AnalysisTokenFilter)).describe('One or more token filters. In addition to the built-in token filters, other plugins can provide more token filters. If this property is not specified, no token filters are applied prior to categorization.').optional(),
  tokenizer: z.lazy(() => AnalysisTokenizer).describe('The name or definition of the tokenizer to use after character filters are applied. This property is compulsory if `categorization_analyzer` is specified as an object. Machine learning provides a tokenizer called `ml_standard` that tokenizes in a way that has been determined to produce good categorization results on a variety of log file formats for logs in English. If you want to use that tokenizer but change the character or token filters, specify "tokenizer": "ml_standard" in your `categorization_analyzer`. Additionally, the `ml_classic` tokenizer is available, which tokenizes in the same way as the non-customizable tokenizer in old versions of the product (before 6.2). `ml_classic` was the default categorization tokenizer in versions 6.2 to 7.13, so if you need categorization identical to the default for jobs created in these versions, specify "tokenizer": "ml_classic" in your `categorization_analyzer`.').optional()
}).meta({ id: 'MlCategorizationAnalyzerDefinition' })
export type MlCategorizationAnalyzerDefinition = z.infer<typeof MlCategorizationAnalyzerDefinition>

export const MlCategorizationAnalyzer = z.union([z.string(), MlCategorizationAnalyzerDefinition]).meta({ id: 'MlCategorizationAnalyzer' })
export type MlCategorizationAnalyzer = z.infer<typeof MlCategorizationAnalyzer>

export const MlInfoAnomalyDetectors = z.object({
  categorization_analyzer: z.lazy(() => MlCategorizationAnalyzer),
  categorization_examples_limit: z.lazy(() => integer),
  model_memory_limit: z.string(),
  model_snapshot_retention_days: z.lazy(() => integer),
  daily_model_snapshot_retention_after_days: z.lazy(() => integer)
}).meta({ id: 'MlInfoAnomalyDetectors' })
export type MlInfoAnomalyDetectors = z.infer<typeof MlInfoAnomalyDetectors>

export const MlInfoDatafeeds = z.object({
  scroll_size: z.lazy(() => integer)
}).meta({ id: 'MlInfoDatafeeds' })
export type MlInfoDatafeeds = z.infer<typeof MlInfoDatafeeds>

export const MlInfoModelPlatformVariant = z.enum(['linux-x86_64', 'platform_agnostic']).meta({ id: 'MlInfoModelPlatformVariant' })
export type MlInfoModelPlatformVariant = z.infer<typeof MlInfoModelPlatformVariant>

export const MlInfoDefaults = z.object({
  anomaly_detectors: MlInfoAnomalyDetectors,
  datafeeds: MlInfoDatafeeds,
  model_platform_variant: MlInfoModelPlatformVariant.describe('Returns `linux-x86_64` when all ML nodes are x86, or when no ML nodes exist but the cluster is in Elastic Cloud. Returns `platform_agnostic` otherwise.')
}).meta({ id: 'MlInfoDefaults' })
export type MlInfoDefaults = z.infer<typeof MlInfoDefaults>

export const MlInfoLimits = z.object({
  max_single_ml_node_processors: z.lazy(() => integer).optional(),
  total_ml_processors: z.lazy(() => integer).optional(),
  max_model_memory_limit: z.lazy(() => ByteSize).optional(),
  effective_max_model_memory_limit: z.lazy(() => ByteSize).optional(),
  total_ml_memory: z.lazy(() => ByteSize)
}).meta({ id: 'MlInfoLimits' })
export type MlInfoLimits = z.infer<typeof MlInfoLimits>

export const MlInfoNativeCode = z.object({
  build_hash: z.string(),
  version: z.lazy(() => VersionString)
}).meta({ id: 'MlInfoNativeCode' })
export type MlInfoNativeCode = z.infer<typeof MlInfoNativeCode>

/**
 * Get machine learning information.
 *
 * Get defaults and limits used by machine learning.
 * This endpoint is designed to be used by a user interface that needs to fully
 * understand machine learning configurations where some options are not
 * specified, meaning that the defaults should be used. This endpoint may be
 * used to find out what those defaults are. It also provides information about
 * the maximum size of machine learning jobs that could run in the current
 * cluster configuration.
 */
export const MlInfoRequest = z.object({
}).meta({ id: 'MlInfoRequest' })
export type MlInfoRequest = z.infer<typeof MlInfoRequest>

export const MlInfoResponse = z.object({
  defaults: MlInfoDefaults,
  limits: MlInfoLimits,
  upgrade_mode: z.boolean(),
  native_code: MlInfoNativeCode
}).meta({ id: 'MlInfoResponse' })
export type MlInfoResponse = z.infer<typeof MlInfoResponse>
