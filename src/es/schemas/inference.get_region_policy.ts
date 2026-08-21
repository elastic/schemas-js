/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { InferenceRegionPolicyDoc } from './inference.js'

/** Get the inference region policy. */
export const InferenceGetRegionPolicyRequest = z.object({
}).meta({ id: 'InferenceGetRegionPolicyRequest' })
export type InferenceGetRegionPolicyRequest = z.infer<typeof InferenceGetRegionPolicyRequest>

export const InferenceGetRegionPolicyResponse = z.lazy(() => InferenceRegionPolicyDoc).meta({ id: 'InferenceGetRegionPolicyResponse' })
export type InferenceGetRegionPolicyResponse = z.infer<typeof InferenceGetRegionPolicyResponse>
