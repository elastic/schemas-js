/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Deletes a secret stored by Fleet. */
export const FleetDeleteSecretRequest = z.object({
  id: z.string().describe('The ID of the secret').meta({ found_in: 'path' })
}).meta({ id: 'FleetDeleteSecretRequest' })
export type FleetDeleteSecretRequest = z.infer<typeof FleetDeleteSecretRequest>

export const FleetDeleteSecretResponse = z.object({
  deleted: z.boolean()
}).meta({ id: 'FleetDeleteSecretResponse' })
export type FleetDeleteSecretResponse = z.infer<typeof FleetDeleteSecretResponse>
