/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'

/**
 * Stop datafeeds.
 *
 * A datafeed that is stopped ceases to retrieve data from Elasticsearch. A datafeed can be started and stopped
 * multiple times throughout its lifecycle.
 */
export const MlStopDatafeedRequest = z.object({
  datafeed_id: z.lazy(() => Id).describe('Identifier for the datafeed. You can stop multiple datafeeds in a single API request by using a comma-separated list of datafeeds or a wildcard expression. You can close all datafeeds by using `_all` or by specifying `*` as the identifier.').meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Refer to the description for the `allow_no_match` query parameter.').optional().meta({ found_in: 'body' }),
  force: z.boolean().describe('Refer to the description for the `force` query parameter.').optional().meta({ found_in: 'body' }),
  timeout: z.lazy(() => Duration).describe('Refer to the description for the `timeout` query parameter.').optional().meta({ found_in: 'body' }),
  close_job: z.boolean().describe('Refer to the description for the `close_job` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlStopDatafeedRequest' })
export type MlStopDatafeedRequest = z.infer<typeof MlStopDatafeedRequest>

export const MlStopDatafeedResponse = z.object({
  stopped: z.boolean()
}).meta({ id: 'MlStopDatafeedResponse' })
export type MlStopDatafeedResponse = z.infer<typeof MlStopDatafeedResponse>
