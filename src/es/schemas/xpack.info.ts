/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, EpochTime, VersionString } from './_types.js'
import { LicenseLicenseStatus, LicenseLicenseType } from './license.js'

export const XpackInfoBuildInformation = z.object({
  date: z.lazy(() => DateTime),
  hash: z.string()
}).meta({ id: 'XpackInfoBuildInformation' })
export type XpackInfoBuildInformation = z.infer<typeof XpackInfoBuildInformation>

export const XpackInfoNativeCodeInformation = z.object({
  build_hash: z.string(),
  version: z.lazy(() => VersionString)
}).meta({ id: 'XpackInfoNativeCodeInformation' })
export type XpackInfoNativeCodeInformation = z.infer<typeof XpackInfoNativeCodeInformation>

export const XpackInfoFeature = z.object({
  available: z.boolean(),
  description: z.string().optional(),
  enabled: z.boolean(),
  native_code_info: XpackInfoNativeCodeInformation.optional()
}).meta({ id: 'XpackInfoFeature' })
export type XpackInfoFeature = z.infer<typeof XpackInfoFeature>

export const XpackInfoFeatures = z.object({
  aggregate_metric: XpackInfoFeature,
  analytics: XpackInfoFeature,
  ccr: XpackInfoFeature,
  data_streams: XpackInfoFeature,
  data_tiers: XpackInfoFeature,
  enrich: XpackInfoFeature,
  eql: XpackInfoFeature,
  graph: XpackInfoFeature,
  ilm: XpackInfoFeature,
  logstash: XpackInfoFeature,
  logsdb: XpackInfoFeature,
  ml: XpackInfoFeature,
  monitoring: XpackInfoFeature,
  rollup: XpackInfoFeature,
  runtime_fields: XpackInfoFeature.optional(),
  searchable_snapshots: XpackInfoFeature,
  security: XpackInfoFeature,
  slm: XpackInfoFeature,
  spatial: XpackInfoFeature,
  sql: XpackInfoFeature,
  transform: XpackInfoFeature,
  voting_only: XpackInfoFeature,
  watcher: XpackInfoFeature
}).meta({ id: 'XpackInfoFeatures' })
export type XpackInfoFeatures = z.infer<typeof XpackInfoFeatures>

export const XpackInfoMinimalLicenseInformation = z.object({
  expiry_date_in_millis: z.lazy(() => EpochTime),
  mode: LicenseLicenseType,
  status: LicenseLicenseStatus,
  type: LicenseLicenseType,
  uid: z.string()
}).meta({ id: 'XpackInfoMinimalLicenseInformation' })
export type XpackInfoMinimalLicenseInformation = z.infer<typeof XpackInfoMinimalLicenseInformation>

export const XpackInfoXPackCategory = z.enum(['build', 'features', 'license']).meta({ id: 'XpackInfoXPackCategory' })
export type XpackInfoXPackCategory = z.infer<typeof XpackInfoXPackCategory>

/**
 * Get information.
 *
 * The information provided by the API includes:
 *
 * * Build information including the build number and timestamp.
 * * License information about the currently installed license.
 * * Feature information for the features that are currently enabled and available under the current license.
 */
export const XpackInfoRequest = z.object({
  categories: z.array(XpackInfoXPackCategory).describe('A comma-separated list of the information categories to include in the response. For example, `build,license,features`.').optional().meta({ found_in: 'query' }),
  accept_enterprise: z.boolean().describe('If used, this otherwise ignored parameter must be set to true').optional().meta({ found_in: 'query' }),
  human: z.boolean().describe('Defines whether additional human-readable information is included in the response. In particular, it adds descriptions and a tag line.').optional().meta({ found_in: 'query' })
}).meta({ id: 'XpackInfoRequest' })
export type XpackInfoRequest = z.infer<typeof XpackInfoRequest>

export const XpackInfoResponse = z.object({
  build: XpackInfoBuildInformation,
  features: XpackInfoFeatures,
  license: XpackInfoMinimalLicenseInformation,
  tagline: z.string()
}).meta({ id: 'XpackInfoResponse' })
export type XpackInfoResponse = z.infer<typeof XpackInfoResponse>
