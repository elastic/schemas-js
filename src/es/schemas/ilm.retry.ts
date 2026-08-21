/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, IndexName } from './_types.js'

/**
 * Retry a policy.
 *
 * Retry running the lifecycle policy for an index that is in the ERROR step.
 * The API sets the policy back to the step where the error occurred and runs the step.
 * Use the explain lifecycle state API to determine whether an index is in the ERROR step.
 */
export const IlmRetryRequest = z.object({
  index: z.lazy(() => IndexName).describe('The name of the indices (comma-separated) whose failed lifecycle step is to be retry').meta({ found_in: 'path' })
}).meta({ id: 'IlmRetryRequest' })
export type IlmRetryRequest = z.infer<typeof IlmRetryRequest>

export const IlmRetryResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IlmRetryResponse' })
export type IlmRetryResponse = z.infer<typeof IlmRetryResponse>
