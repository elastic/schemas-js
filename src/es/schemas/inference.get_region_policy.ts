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

/** Get the inference region policy. */
export const InferenceGetRegionPolicyRequest = z.object({
  ...RequestBase.shape
}).meta({ id: 'InferenceGetRegionPolicyRequest' })
export type InferenceGetRegionPolicyRequest = z.infer<typeof InferenceGetRegionPolicyRequest>

export const InferenceGetRegionPolicyResponse = InferenceRegionPolicyDoc.meta({ id: 'InferenceGetRegionPolicyResponse' })
export type InferenceGetRegionPolicyResponse = z.infer<typeof InferenceGetRegionPolicyResponse>
