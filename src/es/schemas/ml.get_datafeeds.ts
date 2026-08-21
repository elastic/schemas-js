/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Ids, long } from './_types.js'
import { MlDatafeed } from './ml.js'

/**
 * Get datafeeds configuration info.
 *
 * You can get information for multiple datafeeds in a single API request by
 * using a comma-separated list of datafeeds or a wildcard expression. You can
 * get information for all datafeeds by using `_all`, by specifying `*` as the
 * `<feed_id>`, or by omitting the `<feed_id>`.
 * This API returns a maximum of 10,000 datafeeds.
 */
export const MlGetDatafeedsRequest = z.object({
  datafeed_id: z.lazy(() => Ids).describe('Identifier for the datafeed. It can be a datafeed identifier or a wildcard expression. If you do not specify one of these options, the API returns information about all datafeeds.').optional().meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no datafeeds that match. 2. Contains the `_all` string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is `true`, which returns an empty `datafeeds` array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a `404` status code when there are no matches or only partial matches.').optional().meta({ found_in: 'query' }),
  exclude_generated: z.boolean().describe('Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetDatafeedsRequest' })
export type MlGetDatafeedsRequest = z.infer<typeof MlGetDatafeedsRequest>

export const MlGetDatafeedsResponse = z.object({
  count: z.lazy(() => long),
  datafeeds: z.array(z.lazy(() => MlDatafeed))
}).meta({ id: 'MlGetDatafeedsResponse' })
export type MlGetDatafeedsResponse = z.infer<typeof MlGetDatafeedsResponse>
