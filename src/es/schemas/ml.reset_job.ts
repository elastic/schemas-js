/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Reset an anomaly detection job.
 *
 * All model state and results are deleted. The job is ready to start over as if
 * it had just been created.
 * It is not currently possible to reset multiple jobs using wildcards or a
 * comma separated list.
 */
export const MlResetJobRequest = z.object({
  job_id: z.lazy(() => Id).describe('The ID of the job to reset.').meta({ found_in: 'path' }),
  wait_for_completion: z.boolean().describe('Should this request wait until the operation has completed before returning.').optional().meta({ found_in: 'query' }),
  delete_user_annotations: z.boolean().describe('Specifies whether annotations that have been added by the user should be deleted along with any auto-generated annotations when the job is reset.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlResetJobRequest' })
export type MlResetJobRequest = z.infer<typeof MlResetJobRequest>

export const MlResetJobResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlResetJobResponse' })
export type MlResetJobResponse = z.infer<typeof MlResetJobResponse>
