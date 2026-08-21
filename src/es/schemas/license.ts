/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const LicenseLicenseType = z.enum(['missing', 'trial', 'basic', 'standard', 'dev', 'silver', 'gold', 'platinum', 'enterprise']).meta({ id: 'LicenseLicenseType' })
export type LicenseLicenseType = z.infer<typeof LicenseLicenseType>

export const LicenseLicenseStatus = z.enum(['active', 'valid', 'invalid', 'expired']).meta({ id: 'LicenseLicenseStatus' })
export type LicenseLicenseStatus = z.infer<typeof LicenseLicenseStatus>
