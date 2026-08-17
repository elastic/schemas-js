/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Retrieves a secret stored by Fleet. */
export const FleetGetSecretRequest = z.object({
  id: z.string().describe('The ID of the secret').meta({ found_in: 'path' })
}).meta({ id: 'FleetGetSecretRequest' })
export type FleetGetSecretRequest = z.infer<typeof FleetGetSecretRequest>

export const FleetGetSecretResponse = z.object({
  id: z.string(),
  value: z.string()
}).meta({ id: 'FleetGetSecretResponse' })
export type FleetGetSecretResponse = z.infer<typeof FleetGetSecretResponse>
