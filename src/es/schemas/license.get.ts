/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, EpochTime, Uuid, integer, long } from './_types.js'
import { LicenseLicenseStatus, LicenseLicenseType } from './license.js'

export const LicenseGetLicenseInformation = z.object({
  expiry_date: z.lazy(() => DateTime).describe('The date and time the license expires in ISO 8601 format.').optional(),
  expiry_date_in_millis: z.lazy(() => EpochTime).describe('The date and time the license expires in milliseconds since the Unix epoch.').optional(),
  issue_date: z.lazy(() => DateTime).describe('The date and time the license was issued in ISO 8601 format.'),
  issue_date_in_millis: z.lazy(() => EpochTime).describe('The date and time the license was issued in milliseconds since the Unix epoch.'),
  issued_to: z.string().describe('The name of the customer or organization that received the license.'),
  issuer: z.string().describe('The name of the organization that issued the license.'),
  max_nodes: z.union([z.lazy(() => long), z.null()]).describe('The maximum number of nodes the license allows.'),
  max_resource_units: z.union([z.lazy(() => integer), z.null()]).describe('The maximum number of resource units the license allows (for enterprise licenses only).').optional(),
  status: LicenseLicenseStatus.describe('The status of the license. For example,active, valid, invalid, or expired.'),
  type: LicenseLicenseType.describe('The type of the license. For example, trial, basic, gold, platinum, or enterprise.'),
  uid: z.lazy(() => Uuid).describe('The unique identifier of the license.'),
  start_date_in_millis: z.lazy(() => EpochTime).describe('The date and time the license was started in milliseconds since the Unix epoch.')
}).meta({ id: 'LicenseGetLicenseInformation' })
export type LicenseGetLicenseInformation = z.infer<typeof LicenseGetLicenseInformation>

/**
 * Get license information.
 *
 * Get information about your Elastic license including its type, its status, when it was issued, and when it expires.
 *
 * >info
 * > If the master node is generating a new cluster state, the get license API may return a `404 Not Found` response.
 * > If you receive an unexpected 404 response after cluster startup, wait a short period and retry the request.
 */
export const LicenseGetRequest = z.object({
  accept_enterprise: z.boolean().describe('If `true`, this parameter returns enterprise for Enterprise license types. If `false`, this parameter returns platinum for both platinum and enterprise license types. This behavior is maintained for backwards compatibility. This parameter is deprecated and will always be set to true in 8.x.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('Specifies whether to retrieve local information. From 9.2 onwards the default value is `true`, which means the information is retrieved from the responding node. In earlier versions the default is `false`, which means the information is retrieved from the elected master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'LicenseGetRequest' })
export type LicenseGetRequest = z.infer<typeof LicenseGetRequest>

export const LicenseGetResponse = z.object({
  license: LicenseGetLicenseInformation
}).meta({ id: 'LicenseGetResponse' })
export type LicenseGetResponse = z.infer<typeof LicenseGetResponse>
