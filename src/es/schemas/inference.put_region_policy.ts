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

export const EpochTime = z.any().meta({ id: 'EpochTime' })
export type EpochTime = z.infer<typeof EpochTime>

/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export const DateTime = z.union([z.string(), EpochTime]).meta({ id: 'DateTime' })
export type DateTime = z.infer<typeof DateTime>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

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

/** The stored region policy document. */
export const InferenceRegionPolicyDoc = z.object({
  region_policy: InferenceRegionPolicy,
  created_at: DateTime.describe('The date and time the region policy was created.'),
  created_by: z.string().describe('The user who created the region policy.').optional(),
  updated_at: DateTime.describe('The date and time the region policy was last updated.').optional(),
  updated_by: z.string().describe('The user who last updated the region policy.').optional()
}).meta({ id: 'InferenceRegionPolicyDoc' })
export type InferenceRegionPolicyDoc = z.infer<typeof InferenceRegionPolicyDoc>

/**
 * Create or update the inference region policy.
 *
 * The region policy restricts inference to a set of allowed geographic areas or cloud service provider regions.
 */
export const InferencePutRegionPolicyRequest = z.object({
  ...RequestBase.shape,
  force: z.boolean().describe('If `true`, the region policy is applied even if it would deny access to inference endpoints that are currently in use by ingest pipeline or indices.').optional().meta({ found_in: 'query' }),
  region_policy: InferenceRegionPolicy.describe('The region policy configuration.').meta({ found_in: 'body' })
}).meta({ id: 'InferencePutRegionPolicyRequest' })
export type InferencePutRegionPolicyRequest = z.infer<typeof InferencePutRegionPolicyRequest>

export const InferencePutRegionPolicyResponse = InferenceRegionPolicyDoc.meta({ id: 'InferencePutRegionPolicyResponse' })
export type InferencePutRegionPolicyResponse = z.infer<typeof InferencePutRegionPolicyResponse>
