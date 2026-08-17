/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName, Name } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesAlias, IndicesIndexSettings } from './indices.js'

/**
 * Create an index.
 *
 * You can use the create index API to add a new index to an Elasticsearch cluster.
 * When creating an index, you can specify the following:
 *
 * * Settings for the index.
 * * Mappings for fields in the index.
 * * Index aliases
 *
 * **Wait for active shards**
 *
 * By default, index creation will only return a response to the client when the primary copies of each shard have been started, or the request times out.
 * The index creation response will indicate what happened.
 * For example, `acknowledged` indicates whether the index was successfully created in the cluster, `while shards_acknowledged` indicates whether the requisite number of shard copies were started for each shard in the index before timing out.
 * Note that it is still possible for either `acknowledged` or `shards_acknowledged` to be `false`, but for the index creation to be successful.
 * These values simply indicate whether the operation completed before the timeout.
 * If `acknowledged` is false, the request timed out before the cluster state was updated with the newly created index, but it probably will be created sometime soon.
 * If `shards_acknowledged` is false, then the request timed out before the requisite number of shards were started (by default just the primaries), even if the cluster state was successfully updated to reflect the newly created index (that is to say, `acknowledged` is `true`).
 *
 * You can change the default of only waiting for the primary shards to start through the index setting `index.write.wait_for_active_shards`.
 * Note that changing this setting will also affect the `wait_for_active_shards` value on all subsequent write operations.
 */
export const IndicesCreateRequest = z.object({
  index: z.lazy(() => IndexName).describe('Name of the index you wish to create. Index names must meet the following criteria: * Lowercase only * Cannot include ``, `/`, `*`, `?`, `"`, `<`, `>`, `|`, ` ` (space character), `,`, or `#` * Indices prior to 7.0 could contain a colon (`:`), but that has been deprecated and will not be supported in later versions * Cannot start with `-`, `_`, or `+` * Cannot be `.` or `..` * Cannot be longer than 255 bytes (note thtat it is bytes, so multi-byte characters will reach the limit faster) * Names starting with `.` are deprecated, except for hidden indices and internal indices managed by plugins').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  aliases: z.record(z.lazy(() => Name), z.lazy(() => IndicesAlias)).describe('Aliases for the index.').optional().meta({ found_in: 'body' }),
  mappings: z.lazy(() => MappingTypeMapping).describe('Mapping for fields in the index. If specified, this mapping can include: - Field names - Field data types - Mapping parameters').optional().meta({ found_in: 'body' }),
  settings: z.lazy(() => IndicesIndexSettings).describe('Configuration options for the index.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesCreateRequest' })
export type IndicesCreateRequest = z.infer<typeof IndicesCreateRequest>

export const IndicesCreateResponse = z.object({
  index: z.lazy(() => IndexName),
  shards_acknowledged: z.boolean(),
  acknowledged: z.boolean()
}).meta({ id: 'IndicesCreateResponse' })
export type IndicesCreateResponse = z.infer<typeof IndicesCreateResponse>
