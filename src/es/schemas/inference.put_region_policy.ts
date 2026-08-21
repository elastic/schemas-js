/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { InferenceRegionPolicyDoc } from './inference.js'

/** A cloud service provider region. */
export const InferenceCspRegion = z.object({
  csp: z.string().describe('The cloud service provider, for example `aws`, `gcp`, or `azure`.'),
  region: z.string().describe('The region of the cloud service provider, for example `us-east-1`.')
}).meta({ id: 'InferenceCspRegion' })
export type InferenceCspRegion = z.infer<typeof InferenceCspRegion>

const InferenceRegionPolicyExclusiveProps = z.union([z.object({ allowed_geos: z.array(z.string()) }), z.object({ allowed_regions: z.array(InferenceCspRegion) })])

/**
 * The region policy configuration.
 * Specify exactly one of `allowed_geos` or `allowed_regions`.
 */
export const InferenceRegionPolicy = InferenceRegionPolicyExclusiveProps.meta({ id: 'InferenceRegionPolicy' })
export type InferenceRegionPolicy = z.infer<typeof InferenceRegionPolicy>

/**
 * Create or update the inference region policy.
 *
 * The region policy restricts inference to a set of allowed geographic areas or cloud service provider regions.
 */
export const InferencePutRegionPolicyRequest = z.object({
  force: z.boolean().describe('If `true`, the region policy is applied even if it would deny access to inference endpoints that are currently in use by ingest pipeline or indices.').optional().meta({ found_in: 'query' }),
  region_policy: z.lazy(() => InferenceRegionPolicy).describe('The region policy configuration.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutRegionPolicyRequest' })
export type InferencePutRegionPolicyRequest = z.infer<typeof InferencePutRegionPolicyRequest>

export const InferencePutRegionPolicyResponse = z.lazy(() => InferenceRegionPolicyDoc).meta({ id: 'InferencePutRegionPolicyResponse' })
export type InferencePutRegionPolicyResponse = z.infer<typeof InferencePutRegionPolicyResponse>
