/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ByteSize, Duration, DurationValue, IndexAlias, IndexName, long } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesAlias } from './indices.js'

export const IndicesRolloverRolloverConditions = z.object({
  min_age: z.lazy(() => Duration).optional(),
  max_age: z.lazy(() => Duration).optional(),
  max_age_millis: z.lazy(() => DurationValue).optional(),
  min_docs: z.lazy(() => long).optional(),
  max_docs: z.lazy(() => long).optional(),
  max_size: z.lazy(() => ByteSize).describe('The `max_size` condition has been deprecated in 9.3.0 and `max_primary_shard_size` should be used instead').optional(),
  max_size_bytes: z.lazy(() => long).optional(),
  min_size: z.lazy(() => ByteSize).optional(),
  min_size_bytes: z.lazy(() => long).optional(),
  max_primary_shard_size: z.lazy(() => ByteSize).optional(),
  max_primary_shard_size_bytes: z.lazy(() => long).optional(),
  min_primary_shard_size: z.lazy(() => ByteSize).optional(),
  min_primary_shard_size_bytes: z.lazy(() => long).optional(),
  max_primary_shard_docs: z.lazy(() => long).optional(),
  min_primary_shard_docs: z.lazy(() => long).optional()
}).meta({ id: 'IndicesRolloverRolloverConditions' })
export type IndicesRolloverRolloverConditions = z.infer<typeof IndicesRolloverRolloverConditions>

/**
 * Roll over to a new index.
 *
 * TIP: We recommend using the index lifecycle rollover action to automate rollovers. However, Serverless does not support Index Lifecycle Management (ILM), so don't use this approach in the Serverless context.
 *
 * The rollover API creates a new index for a data stream or index alias.
 * The API behavior depends on the rollover target.
 *
 * **Roll over a data stream**
 *
 * If you roll over a data stream, the API creates a new write index for the stream.
 * The stream's previous write index becomes a regular backing index.
 * A rollover also increments the data stream's generation.
 *
 * **Roll over an index alias with a write index**
 *
 * TIP: Prior to Elasticsearch 7.9, you'd typically use an index alias with a write index to manage time series data.
 * Data streams replace this functionality, require less maintenance, and automatically integrate with data tiers.
 *
 * If an index alias points to multiple indices, one of the indices must be a write index.
 * The rollover API creates a new write index for the alias with `is_write_index` set to `true`.
 * The API also `sets is_write_index` to `false` for the previous write index.
 *
 * **Roll over an index alias with one index**
 *
 * If you roll over an index alias that points to only one index, the API creates a new index for the alias and removes the original index from the alias.
 *
 * NOTE: A rollover creates a new index and is subject to the `wait_for_active_shards` setting.
 *
 * **Increment index names for an alias**
 *
 * When you roll over an index alias, you can specify a name for the new index.
 * If you don't specify a name and the current index ends with `-` and a number, such as `my-index-000001` or `my-index-3`, the new index name increments that number.
 * For example, if you roll over an alias with a current index of `my-index-000001`, the rollover creates a new index named `my-index-000002`.
 * This number is always six characters and zero-padded, regardless of the previous index's name.
 *
 * If you use an index alias for time series data, you can use date math in the index name to track the rollover date.
 * For example, you can create an alias that points to an index named `<my-index-{now/d}-000001>`.
 * If you create the index on May 6, 2099, the index's name is `my-index-2099.05.06-000001`.
 * If you roll over the alias on May 7, 2099, the new index's name is `my-index-2099.05.07-000002`.
 */
export const IndicesRolloverRequest = z.object({
  alias: IndexAlias.describe('Name of the data stream or index alias to roll over.').meta({ found_in: 'path' }),
  new_index: z.lazy(() => IndexName).describe('Name of the index to create. Supports date math. Data streams do not support this parameter.').optional().meta({ found_in: 'path' }),
  dry_run: z.boolean().describe('If `true`, checks whether the current index satisfies the specified conditions but does not perform a rollover.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  lazy: z.boolean().describe('If set to true, the rollover action will only mark a data stream to signal that it needs to be rolled over at the next write. Only allowed on data streams.').optional().meta({ found_in: 'query' }),
  aliases: z.record(z.lazy(() => IndexName), z.lazy(() => IndicesAlias)).describe('Aliases for the target index. Data streams do not support this parameter.').optional().meta({ found_in: 'body' }),
  conditions: IndicesRolloverRolloverConditions.describe('Conditions for the rollover. If specified, Elasticsearch only performs the rollover if the current index satisfies these conditions. If this parameter is not specified, Elasticsearch performs the rollover unconditionally. If conditions are specified, at least one of them must be a `max_*` condition. The index will rollover if any `max_*` condition is satisfied and all `min_*` conditions are satisfied.').optional().meta({ found_in: 'body' }),
  mappings: z.lazy(() => MappingTypeMapping).describe('Mapping for fields in the index. If specified, this mapping can include field names, field data types, and mapping paramaters.').optional().meta({ found_in: 'body' }),
  settings: z.record(z.string(), z.any()).describe('Configuration options for the index. Data streams do not support this parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesRolloverRequest' })
export type IndicesRolloverRequest = z.infer<typeof IndicesRolloverRequest>

export const IndicesRolloverResponse = z.object({
  acknowledged: z.boolean(),
  conditions: z.record(z.string(), z.boolean()),
  dry_run: z.boolean(),
  new_index: z.string(),
  old_index: z.string(),
  rolled_over: z.boolean(),
  shards_acknowledged: z.boolean()
}).meta({ id: 'IndicesRolloverResponse' })
export type IndicesRolloverResponse = z.infer<typeof IndicesRolloverResponse>
