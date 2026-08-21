/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Get the basic license status. */
export const LicenseGetBasicStatusRequest = z.object({
}).meta({ id: 'LicenseGetBasicStatusRequest' })
export type LicenseGetBasicStatusRequest = z.infer<typeof LicenseGetBasicStatusRequest>

export const LicenseGetBasicStatusResponse = z.object({
  eligible_to_start_basic: z.boolean()
}).meta({ id: 'LicenseGetBasicStatusResponse' })
export type LicenseGetBasicStatusResponse = z.infer<typeof LicenseGetBasicStatusResponse>
