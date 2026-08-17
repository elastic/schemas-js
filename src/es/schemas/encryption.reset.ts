/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Reset the project encryption key.
 *
 * Destroy the current project encryption key (PEK) and generate a new one.
 * This is the recovery path for when the on-disk encrypted PEK becomes permanently
 * inaccessible, for example because the key encryption material protecting it was lost.
 *
 * All data that was encrypted under the destroyed key becomes permanently unrecoverable.
 * Each feature that stores encrypted data decides how to handle its own data during the
 * reset: some features drop the encrypted values entirely, while others preserve the rest
 * of the affected data and only clear the values that can no longer be decrypted.
 *
 * Because this operation causes permanent data loss, it requires the `accept_data_loss`
 * query parameter to be set to `true`.
 */
export const EncryptionResetRequest = z.object({
  accept_data_loss: z.boolean().describe('Acknowledge that resetting the project encryption key permanently destroys all data that was encrypted under the current key. The request fails if this is not set to `true`.').meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EncryptionResetRequest' })
export type EncryptionResetRequest = z.infer<typeof EncryptionResetRequest>

export const EncryptionResetResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EncryptionResetResponse' })
export type EncryptionResetResponse = z.infer<typeof EncryptionResetResponse>
