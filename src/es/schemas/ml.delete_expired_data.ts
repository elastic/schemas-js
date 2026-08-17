/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, float } from './_types.js'

/**
 * Delete expired ML data.
 *
 * Delete all job results, model snapshots and forecast data that have exceeded
 * their retention days period. Machine learning state documents that are not
 * associated with any job are also deleted.
 * You can limit the request to a single or set of anomaly detection jobs by
 * using a job identifier, a group name, a comma-separated list of jobs, or a
 * wildcard expression. You can delete expired data for all anomaly detection
 * jobs by using `_all`, by specifying `*` as the `<job_id>`, or by omitting the
 * `<job_id>`.
 */
export const MlDeleteExpiredDataRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for an anomaly detection job. It can be a job identifier, a group name, or a wildcard expression.').optional().meta({ found_in: 'path' }),
  requests_per_second: z.lazy(() => float).describe('The desired requests per second for the deletion processes. The default behavior is no throttling.').optional().meta({ found_in: 'body' }),
  timeout: z.lazy(() => Duration).describe('How long can the underlying delete processes run until they are canceled.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlDeleteExpiredDataRequest' })
export type MlDeleteExpiredDataRequest = z.infer<typeof MlDeleteExpiredDataRequest>

export const MlDeleteExpiredDataResponse = z.object({
  deleted: z.boolean()
}).meta({ id: 'MlDeleteExpiredDataResponse' })
export type MlDeleteExpiredDataResponse = z.infer<typeof MlDeleteExpiredDataResponse>
