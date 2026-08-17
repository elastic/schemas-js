/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, EpochTime, long } from './_types.js'
import { LicenseLicenseStatus, LicenseLicenseType } from './license.js'

export const LicenseLicense = z.object({
  expiry_date_in_millis: z.lazy(() => EpochTime),
  issue_date_in_millis: z.lazy(() => EpochTime),
  start_date_in_millis: z.lazy(() => EpochTime).optional(),
  issued_to: z.string(),
  issuer: z.string(),
  max_nodes: z.union([z.lazy(() => long), z.null()]).optional(),
  max_resource_units: z.lazy(() => long).optional(),
  signature: z.string(),
  type: LicenseLicenseType,
  uid: z.string()
}).meta({ id: 'LicenseLicense' })
export type LicenseLicense = z.infer<typeof LicenseLicense>

export const LicensePostAcknowledgement = z.object({
  license: z.array(z.string()),
  message: z.string()
}).meta({ id: 'LicensePostAcknowledgement' })
export type LicensePostAcknowledgement = z.infer<typeof LicensePostAcknowledgement>

/**
 * Update the license.
 *
 * You can update your license at runtime without shutting down your nodes.
 * License updates take effect immediately.
 * If the license you are installing does not support all of the features that were available with your previous license, however, you are notified in the response.
 * You must then re-submit the API request with the acknowledge parameter set to true.
 *
 * NOTE: If Elasticsearch security features are enabled and you are installing a gold or higher license, you must enable TLS on the transport networking layer before you install the license.
 * If the operator privileges feature is enabled, only operator users can use this API.
 */
export const LicensePostRequest = z.object({
  acknowledge: z.boolean().describe('To update a license, you must accept the acknowledge messages and set this parameter to `true`. In particular, if you are upgrading or downgrading a license, you must acknowlege the feature changes.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  license: LicenseLicense.optional().meta({ found_in: 'body' }),
  licenses: z.array(LicenseLicense).describe('A sequence of one or more JSON documents containing the license information.').optional().meta({ found_in: 'body' })
}).meta({ id: 'LicensePostRequest' })
export type LicensePostRequest = z.infer<typeof LicensePostRequest>

export const LicensePostResponse = z.object({
  acknowledge: LicensePostAcknowledgement.optional(),
  acknowledged: z.boolean(),
  license_status: LicenseLicenseStatus
}).meta({ id: 'LicensePostResponse' })
export type LicensePostResponse = z.infer<typeof LicensePostResponse>
