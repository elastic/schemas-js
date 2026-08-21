/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id } from './_types.js'

/**
 * Stop data frame analytics jobs.
 *
 * A data frame analytics job can be started and stopped multiple times
 * throughout its lifecycle.
 */
export const MlStopDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  allow_no_match: z.boolean().describe('Specifies what to do when the request: 1. Contains wildcard expressions and there are no data frame analytics jobs that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is true, which returns an empty data_frame_analytics array when there are no matches and the subset of results when there are partial matches. If this parameter is false, the request returns a 404 status code when there are no matches or only partial matches.').optional().meta({ found_in: 'body' }),
  force: z.boolean().describe('If true, the data frame analytics job is stopped forcefully.').optional().meta({ found_in: 'body' }),
  timeout: z.lazy(() => Duration).describe('Controls the amount of time to wait until the data frame analytics job stops. Defaults to 20 seconds.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlStopDataFrameAnalyticsRequest' })
export type MlStopDataFrameAnalyticsRequest = z.infer<typeof MlStopDataFrameAnalyticsRequest>

export const MlStopDataFrameAnalyticsResponse = z.object({
  stopped: z.boolean()
}).meta({ id: 'MlStopDataFrameAnalyticsResponse' })
export type MlStopDataFrameAnalyticsResponse = z.infer<typeof MlStopDataFrameAnalyticsResponse>
