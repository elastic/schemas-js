/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Get the trial status. */
export const LicenseGetTrialStatusRequest = z.object({
}).meta({ id: 'LicenseGetTrialStatusRequest' })
export type LicenseGetTrialStatusRequest = z.infer<typeof LicenseGetTrialStatusRequest>

export const LicenseGetTrialStatusResponse = z.object({
  eligible_to_start_trial: z.boolean()
}).meta({ id: 'LicenseGetTrialStatusResponse' })
export type LicenseGetTrialStatusResponse = z.infer<typeof LicenseGetTrialStatusResponse>
