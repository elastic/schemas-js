/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase } from './_types.js'

/** Delete the inference region policy. */
export const InferenceDeleteRegionPolicyRequest = z.object({
}).meta({ id: 'InferenceDeleteRegionPolicyRequest' })
export type InferenceDeleteRegionPolicyRequest = z.infer<typeof InferenceDeleteRegionPolicyRequest>

export const InferenceDeleteRegionPolicyResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'InferenceDeleteRegionPolicyResponse' })
export type InferenceDeleteRegionPolicyResponse = z.infer<typeof InferenceDeleteRegionPolicyResponse>
