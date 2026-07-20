/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-nocheck

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any())
export type TODO = z.infer<typeof TODO>

export const AcknowledgedResponseBase = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' })
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

/** Delete the inference region policy. */
export const InferenceDeleteRegionPolicyRequest = z.object({
  ...RequestBase.shape
}).meta({ id: 'InferenceDeleteRegionPolicyRequest' })
export type InferenceDeleteRegionPolicyRequest = z.infer<typeof InferenceDeleteRegionPolicyRequest>

export const InferenceDeleteRegionPolicyResponse = AcknowledgedResponseBase.meta({ id: 'InferenceDeleteRegionPolicyResponse' })
export type InferenceDeleteRegionPolicyResponse = z.infer<typeof InferenceDeleteRegionPolicyResponse>
