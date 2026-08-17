/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Id } from './_types.js'

/** Delete a data frame analytics job. */
export const MlDeleteDataFrameAnalyticsRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the data frame analytics job.').meta({ found_in: 'path' }),
  force: z.boolean().describe('If `true`, it deletes a job that is not stopped; this method is quicker than stopping and deleting the job.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The time to wait for the job to be deleted.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteDataFrameAnalyticsRequest' })
export type MlDeleteDataFrameAnalyticsRequest = z.infer<typeof MlDeleteDataFrameAnalyticsRequest>

export const MlDeleteDataFrameAnalyticsResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteDataFrameAnalyticsResponse' })
export type MlDeleteDataFrameAnalyticsResponse = z.infer<typeof MlDeleteDataFrameAnalyticsResponse>
