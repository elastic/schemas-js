/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, Id, NodeIds } from './_types.js'

/**
 * Start datafeeds.
 *
 * A datafeed must be started in order to retrieve data from Elasticsearch. A datafeed can be started and stopped
 * multiple times throughout its lifecycle.
 *
 * Before you can start a datafeed, the anomaly detection job must be open. Otherwise, an error occurs.
 *
 * If you restart a stopped datafeed, it continues processing input data from the next millisecond after it was stopped.
 * If new data was indexed for that exact millisecond between stopping and starting, it will be ignored.
 *
 * When Elasticsearch security features are enabled, your datafeed remembers which roles the last user to create or
 * update it had at the time of creation or update and runs the query using those same roles. If you provided secondary
 * authorization headers when you created or updated the datafeed, those credentials are used instead.
 */
export const MlStartDatafeedRequest = z.object({
  datafeed_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  end: z.lazy(() => DateTime).describe('Refer to the description for the `end` query parameter.').optional().meta({ found_in: 'body' }),
  start: z.lazy(() => DateTime).describe('Refer to the description for the `start` query parameter.').optional().meta({ found_in: 'body' }),
  timeout: z.lazy(() => Duration).describe('Refer to the description for the `timeout` query parameter.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlStartDatafeedRequest' })
export type MlStartDatafeedRequest = z.infer<typeof MlStartDatafeedRequest>

export const MlStartDatafeedResponse = z.object({
  node: z.lazy(() => NodeIds).describe('The ID of the node that the job was started on. In serverless this will be the "serverless". If the job is allowed to open lazily and has not yet been assigned to a node, this value is an empty string.'),
  started: z.boolean().describe('For a successful response, this value is always `true`. On failure, an exception is returned instead.')
}).meta({ id: 'MlStartDatafeedResponse' })
export type MlStartDatafeedResponse = z.infer<typeof MlStartDatafeedResponse>
