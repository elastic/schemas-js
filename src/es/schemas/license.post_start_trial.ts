/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration } from './_types.js'
import { LicenseLicenseType } from './license.js'

/**
 * Start a trial.
 *
 * Start a 30-day trial, which gives access to all subscription features.
 *
 * NOTE: You are allowed to start a trial only if your cluster has not already activated a trial for the current major product version.
 * For example, if you have already activated a trial for v8.0, you cannot start a new trial until v9.0. You can, however, request an extended trial at https://www.elastic.co/trialextension.
 *
 * To check the status of your trial, use the get trial status API.
 */
export const LicensePostStartTrialRequest = z.object({
  acknowledge: z.boolean().describe('To start a trial, you must accept the acknowledge messages and set this parameter to `true`.').optional().meta({ found_in: 'query' }),
  type: z.string().describe('The type of trial license to generate').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'LicensePostStartTrialRequest' })
export type LicensePostStartTrialRequest = z.infer<typeof LicensePostStartTrialRequest>

export const LicensePostStartTrialResponse = z.object({
  acknowledged: z.boolean(),
  error_message: z.string().optional(),
  trial_was_started: z.boolean(),
  type: LicenseLicenseType.optional()
}).meta({ id: 'LicensePostStartTrialResponse' })
export type LicensePostStartTrialResponse = z.infer<typeof LicensePostStartTrialResponse>
