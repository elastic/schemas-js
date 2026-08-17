/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, NodeId } from './_types.js'

/**
 * Start a data frame analytics job.
 *
 * A data frame analytics job can be started and stopped multiple times
 * throughout its lifecycle.
 * If the destination index does not exist, it is created automatically the
 * first time you start the data frame analytics job. The
 * `index.number_of_shards` and `index.number_of_replicas` settings for the
 * destination index are copied from the source index. If there are multiple
 * source indices, the destination index copies the highest setting values. The
 * mappings for the destination index are also copied from the source indices.
 * If there are any mapping conflicts, the job fails to start.
 * If the destination index exists, it is used as is. You can therefore set up
 * the destination index in advance with custom settings and mappings.
 */
export const MlStartDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  timeout: z.lazy(() => Duration).describe('Controls the amount of time to wait until the data frame analytics job starts.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlStartDataFrameAnalyticsRequest' })
export type MlStartDataFrameAnalyticsRequest = z.infer<typeof MlStartDataFrameAnalyticsRequest>

export const MlStartDataFrameAnalyticsResponse = z.object({
  acknowledged: z.boolean(),
  node: z.lazy(() => NodeId).describe('The ID of the node that the job was started on. If the job is allowed to open lazily and has not yet been assigned to a node, this value is an empty string. The node ID of the node the job has been assigned to, or an empty string if it hasn\'t been assigned to a node. In serverless if the job has been assigned to run then the node ID will be "serverless".')
}).meta({ id: 'MlStartDataFrameAnalyticsResponse' })
export type MlStartDataFrameAnalyticsResponse = z.infer<typeof MlStartDataFrameAnalyticsResponse>
