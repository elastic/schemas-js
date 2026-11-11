/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DurationValue, ErrorCause, ExpandWildcards, Field, Indices, QueryVector, TaskId, double, float, integer, long } from './_types.js'

export const RescoreVector = z.object({
  oversample: z.lazy(() => float).describe('Applies the specified oversample factor to k on the approximate kNN search')
}).meta({ id: 'RescoreVector' })
export type RescoreVector = z.infer<typeof RescoreVector>

/** Samples the query vectors from the stored documents. */
export const KnnEvalKnnEvalDocsQuerySource = z.object({
  from: z.literal('docs'),
  size: z.lazy(() => integer).describe('The number of documents to sample, from 1 to 1000.'),
  seed: z.lazy(() => integer).describe('The seed of the sampling, to sample the same documents across requests.').optional()
}).meta({ id: 'KnnEvalKnnEvalDocsQuerySource' })
export type KnnEvalKnnEvalDocsQuerySource = z.infer<typeof KnnEvalKnnEvalDocsQuerySource>

export const KnnEvalKnnEvalFailure = z.object({
  error: z.lazy(() => ErrorCause)
}).meta({ id: 'KnnEvalKnnEvalFailure' })
export type KnnEvalKnnEvalFailure = z.infer<typeof KnnEvalKnnEvalFailure>

export const KnnEvalKnnEvalQueryVector = z.object({
  id: z.string().describe('The identifier of the query, which identifies it in the `failures` of the response.'),
  query_vector: z.lazy(() => QueryVector).describe('The query vector.')
}).meta({ id: 'KnnEvalKnnEvalQueryVector' })
export type KnnEvalKnnEvalQueryVector = z.infer<typeof KnnEvalKnnEvalQueryVector>

/** Uses the query vectors in the request. */
export const KnnEvalKnnEvalVectorsQuerySource = z.object({
  from: z.literal('vectors'),
  vectors: z.array(KnnEvalKnnEvalQueryVector).describe('The query vectors, from 1 to 1000 entries with unique identifiers.')
}).meta({ id: 'KnnEvalKnnEvalVectorsQuerySource' })
export type KnnEvalKnnEvalVectorsQuerySource = z.infer<typeof KnnEvalKnnEvalVectorsQuerySource>

/** The source of the query vectors of a kNN evaluation. */
export const KnnEvalKnnEvalQuerySource = z.union([KnnEvalKnnEvalDocsQuerySource, KnnEvalKnnEvalVectorsQuerySource]).meta({ id: 'KnnEvalKnnEvalQuerySource' })
export type KnnEvalKnnEvalQuerySource = z.infer<typeof KnnEvalKnnEvalQuerySource>

export const KnnEvalKnnEvalQuerySourceType = z.enum(['docs', 'vectors']).meta({ id: 'KnnEvalKnnEvalQuerySourceType' })
export type KnnEvalKnnEvalQuerySourceType = z.infer<typeof KnnEvalKnnEvalQuerySourceType>

export const KnnEvalKnnEvalQuerySourceSummary = z.object({
  from: KnnEvalKnnEvalQuerySourceType.describe('How the query vectors were chosen.')
}).meta({ id: 'KnnEvalKnnEvalQuerySourceSummary' })
export type KnnEvalKnnEvalQuerySourceSummary = z.infer<typeof KnnEvalKnnEvalQuerySourceSummary>

export const KnnEvalKnnEvalSettings = z.object({
  visit_percentage: z.lazy(() => float).describe('The percentage of postings to visit, from 0 to 100. `0` selects the automatic visit calculation.').optional(),
  num_candidates: z.lazy(() => integer).describe('The number of nearest neighbor candidates to consider per shard. It can\'t be less than `k`, or more than 10000 (9999 with sampling).').optional(),
  rescore_vector: z.lazy(() => RescoreVector).describe('The rescoring of the candidates. Only applies to quantized fields.').optional(),
  exact: z.boolean().describe('If `true`, compares every vector at full precision. Only applies to the `baseline`, requires `allow_exact_baseline`, and can\'t be combined with other settings.').optional()
}).meta({ id: 'KnnEvalKnnEvalSettings' })
export type KnnEvalKnnEvalSettings = z.infer<typeof KnnEvalKnnEvalSettings>

export const KnnEvalKnnEvalReportedSettings = z.object({
  ...KnnEvalKnnEvalSettings.shape,
  rescore_window_capped: z.boolean().describe('If `true`, the number of vectors to rescore exceeded the limit of 10000.').optional(),
  quantized_scores: z.boolean().describe('If `true`, the hits were not rescored, so their scores are estimates, and no query is excluded from the mean recall.').optional()
}).meta({ id: 'KnnEvalKnnEvalReportedSettings' })
export type KnnEvalKnnEvalReportedSettings = z.infer<typeof KnnEvalKnnEvalReportedSettings>

export const KnnEvalKnnEvalResult = z.object({
  knn_settings: KnnEvalKnnEvalReportedSettings.describe('The evaluated settings.'),
  recall: z.union([z.lazy(() => double), z.null()]).describe('The mean recall of the included queries, or `null` if no query is included.'),
  included_queries: z.lazy(() => long).describe('The number of queries included in the mean recall.'),
  excluded_queries: z.lazy(() => long).describe('The number of queries excluded from the mean recall, because the search found a document scoring above the baseline\'s lowest top `k` score.'),
  took_ms: z.lazy(() => DurationValue).describe('The time the searches took, in milliseconds.'),
  vector_ops: z.lazy(() => long).describe('The number of vector operations of the searches.')
}).meta({ id: 'KnnEvalKnnEvalResult' })
export type KnnEvalKnnEvalResult = z.infer<typeof KnnEvalKnnEvalResult>

export const KnnEvalKnnEvalVectorOpsKind = z.enum(['full_precision_scan', 'quantized_visit_plus_rescore']).meta({ id: 'KnnEvalKnnEvalVectorOpsKind' })
export type KnnEvalKnnEvalVectorOpsKind = z.infer<typeof KnnEvalKnnEvalVectorOpsKind>

/**
 * Evaluate kNN search settings.
 *
 * Estimate the recall and cost of approximate kNN search configurations on a `dense_vector` field against a more thorough baseline.
 * The field must use the `bbq_disk` index type, and must not be inside a nested object.
 *
 * Each `knn_settings` entry reports the mean recall of the baseline's top `k`, not of relevance judgments, plus included and excluded query counts and cost totals.
 * A query is excluded from the mean recall when the candidate finds a document scoring above the baseline's lowest top `k` score.
 * A baseline returning fewer than `k` hits fails that query, because recall at `k` is undefined.
 * All configurations run against one point in time.
 *
 * The default baseline uses a `visit_percentage` of 20 and a `rescore_vector.oversample` of 100.
 * An exact full-precision baseline must be requested explicitly with `allow_exact_baseline`, and is limited to 100 million vector-by-query comparisons.
 *
 * The request is refused when the `search.knn_eval.enabled` cluster setting or the `index.knn_eval.enabled` index setting is `false`.
 */
export const KnnEvalRequest = z.object({
  index: z.lazy(() => Indices).describe('A comma-separated list of index names to search.').meta({ found_in: 'path' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a missing or closed index.').optional().meta({ found_in: 'query' }),
  allow_no_indices: z.boolean().describe('If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices. This behavior applies even if the request targets other open indices.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('The type of index that wildcard patterns can match. It supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request waits for the evaluation to complete. A large evaluation can run for minutes, and closing the connection, for example because of a client or proxy timeout, cancels it. If `false`, the request returns a task identifier, and stores the completed response for retrieval through the task management API.').optional().meta({ found_in: 'query' }),
  field: z.lazy(() => Field).describe('The `dense_vector` field to evaluate.').meta({ found_in: 'body' }),
  k: z.lazy(() => integer).describe('The number of nearest neighbors to compute the recall for, from 1 to 1000.').meta({ found_in: 'body' }),
  query_source: KnnEvalKnnEvalQuerySource.describe('The source of the query vectors.').meta({ found_in: 'body' }),
  baseline: KnnEvalKnnEvalSettings.describe('The settings of the search that the `knn_settings` entries are compared with. If not specified, it uses a `visit_percentage` of 20 and a `rescore_vector.oversample` of 100.').optional().meta({ found_in: 'body' }),
  knn_settings: z.array(KnnEvalKnnEvalSettings).describe('The kNN search settings to evaluate, from 1 to 32 unique entries.').meta({ found_in: 'body' }),
  allow_exact_baseline: z.boolean().describe('If `true`, the `baseline` can be `exact`. An exact baseline compares every vector at full precision, and can severely slow down other searches.').optional().meta({ found_in: 'body' })
}).meta({ id: 'KnnEvalRequest' })
export type KnnEvalRequest = z.infer<typeof KnnEvalRequest>

export const KnnEvalResponse = z.object({
  query_source: KnnEvalKnnEvalQuerySourceSummary.describe('The source of the query vectors. Not returned when `wait_for_completion` is `false`.').optional(),
  baseline: KnnEvalKnnEvalReportedSettings.describe('The settings of the baseline search. Not returned when `wait_for_completion` is `false`.').optional(),
  baseline_took_ms: z.lazy(() => DurationValue).describe('The time the baseline searches took, in milliseconds. Not returned when `wait_for_completion` is `false`.').optional(),
  baseline_vector_ops: z.lazy(() => long).describe('The number of vector operations of the baseline searches. Not returned when `wait_for_completion` is `false`.').optional(),
  baseline_vector_ops_kind: KnnEvalKnnEvalVectorOpsKind.describe('What `baseline_vector_ops` counts. Not returned when `wait_for_completion` is `false`.').optional(),
  results: z.array(KnnEvalKnnEvalResult).describe('The results of each `knn_settings` entry, in the order of the request. Not returned when `wait_for_completion` is `false`.').optional(),
  failures: z.record(z.string(), KnnEvalKnnEvalFailure).describe('The queries that failed, by query identifier. Not returned when `wait_for_completion` is `false`.').optional(),
  task: z.lazy(() => TaskId).describe('The identifier of the task that runs the evaluation. Only returned when `wait_for_completion` is `false`.').optional()
}).meta({ id: 'KnnEvalResponse' })
export type KnnEvalResponse = z.infer<typeof KnnEvalResponse>
