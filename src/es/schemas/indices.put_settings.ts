/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, ExpandWildcards, Indices } from './_types.js'
import { IndicesIndexSettings } from './indices.js'

/**
 * Update index settings.
 *
 * Changes dynamic index settings in real time.
 * For data streams, index setting changes are applied to all backing indices by default.
 *
 * To revert a setting to the default value, use a null value.
 * The list of per-index settings that can be updated dynamically on live indices can be found in index settings documentation.
 * To preserve existing settings from being updated, set the `preserve_existing` parameter to `true`.
 *
 * For performance optimization during bulk indexing, you can disable the refresh interval.
 * Refer to [disable refresh interval](https://www.elastic.co/docs/deploy-manage/production-guidance/optimize-performance/indexing-speed#disable-refresh-interval) for an example.
 * There are multiple valid ways to represent index settings in the request body. You can specify only the setting, for example:
 *
 * ```
 * {
 *   "number_of_replicas": 1
 * }
 * ```
 *
 * Or you can use an `index` setting object:
 * ```
 * {
 *   "index": {
 *     "number_of_replicas": 1
 *   }
 * }
 * ```
 *
 * Or you can use dot annotation:
 * ```
 * {
 *   "index.number_of_replicas": 1
 * }
 * ```
 *
 * Or you can embed any of the aforementioned options in a `settings` object. For example:
 *
 * ```
 * {
 *   "settings": {
 *     "index": {
 *       "number_of_replicas": 1
 *     }
 *   }
 * }
 * ```
 *
 * NOTE: You can only define new analyzers on closed indices.
 * To add an analyzer, you must close the index, define the analyzer, and reopen the index.
 * You cannot close the write index of a data stream.
 * To update the analyzer for a data stream's write index and future backing indices, update the analyzer in the index template used by the stream.
 * Then roll over the data stream to apply the new analyzer to the stream's write index and future backing indices.
 * This affects searches and any new data added to the stream after the rollover.
 * However, it does not affect the data stream's backing indices or their existing data.
 * To change the analyzer for existing backing indices, you must create a new data stream and reindex your data into it.
 * Refer to [updating analyzers on existing indices](https://www.elastic.co/docs/manage-data/data-store/text-analysis/specify-an-analyzer#update-analyzers-on-existing-indices) for step-by-step examples.
 */
export const IndicesPutSettingsRequest = z.object({
  index: z.lazy(() => Indices).describe('Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  flat_settings: z.boolean().describe('If `true`, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  preserve_existing: z.boolean().describe('If `true`, existing index settings remain unchanged.').optional().meta({ found_in: 'query' }),
  reopen: z.boolean().describe('Whether to close and reopen the index to apply non-dynamic settings. If set to `true` the indices to which the settings are being applied will be closed temporarily and then reopened in order to apply the changes.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the  timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  settings: z.lazy(() => IndicesIndexSettings).optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutSettingsRequest' })
export type IndicesPutSettingsRequest = z.infer<typeof IndicesPutSettingsRequest>

export const IndicesPutSettingsResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesPutSettingsResponse' })
export type IndicesPutSettingsResponse = z.infer<typeof IndicesPutSettingsResponse>
