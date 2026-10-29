/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { DataRecoveryRecovery } from './data_recovery.js'

/**
 * Get a recovery.
 *
 * Get the status and details of a recovery that was started with the start recovery API.
 * This API is intended for internal operator use.
 * The progress of a running recovery is reported as a percentage, and the repository and audit details of the recovery are not exposed.
 */
export const DataRecoveryGetRecoveryRequest = z.object({
  recovery_id: z.lazy(() => Id).describe('The identifier of the recovery, as returned when the recovery was started.').meta({ found_in: 'path' })
}).meta({ id: 'DataRecoveryGetRecoveryRequest' })
export type DataRecoveryGetRecoveryRequest = z.infer<typeof DataRecoveryGetRecoveryRequest>

export const DataRecoveryGetRecoveryResponse = z.lazy(() => DataRecoveryRecovery).meta({ id: 'DataRecoveryGetRecoveryResponse' })
export type DataRecoveryGetRecoveryResponse = z.infer<typeof DataRecoveryGetRecoveryResponse>
