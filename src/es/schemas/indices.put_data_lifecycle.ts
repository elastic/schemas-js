/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamNames, Duration, DurationLarge, ExpandWildcards } from './_types.js'

export const IndicesDownsamplingRound = z.object({
  after: z.lazy(() => Duration).describe('The duration since rollover when this downsampling round should execute'),
  fixed_interval: z.lazy(() => DurationLarge).describe('The downsample interval.')
}).meta({ id: 'IndicesDownsamplingRound' })
export type IndicesDownsamplingRound = z.infer<typeof IndicesDownsamplingRound>

export const IndicesSamplingMethod = z.enum(['aggregate', 'last_value']).meta({ id: 'IndicesSamplingMethod' })
export type IndicesSamplingMethod = z.infer<typeof IndicesSamplingMethod>

/**
 * Update data stream lifecycles.
 *
 * Update the data stream lifecycle of the specified data streams.
 */
export const IndicesPutDataLifecycleRequest = z.object({
  name: z.lazy(() => DataStreamNames).describe('Comma-separated list of data streams used to limit the request. Supports wildcards (`*`). To target all data streams use `*` or `_all`.').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  data_retention: z.lazy(() => Duration).describe('If defined, every document added to this data stream will be stored at least for this time frame. Any time after this duration the document could be deleted. When empty, every document in this data stream will be stored indefinitely.').optional().meta({ found_in: 'body' }),
  downsampling: z.array(z.lazy(() => IndicesDownsamplingRound)).describe('The downsampling configuration to execute for the managed backing index after rollover.').optional().meta({ found_in: 'body' }),
  downsampling_method: z.lazy(() => IndicesSamplingMethod).describe('The method used to downsample the data. There are two options `aggregate` and `last_value`. It requires `downsampling` to be defined. Defaults to `aggregate`.').optional().meta({ found_in: 'body' }),
  enabled: z.boolean().describe('If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle that\'s disabled (enabled: `false`) will have no effect on the data stream.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutDataLifecycleRequest' })
export type IndicesPutDataLifecycleRequest = z.infer<typeof IndicesPutDataLifecycleRequest>

export const IndicesPutDataLifecycleResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesPutDataLifecycleResponse' })
export type IndicesPutDataLifecycleResponse = z.infer<typeof IndicesPutDataLifecycleResponse>
