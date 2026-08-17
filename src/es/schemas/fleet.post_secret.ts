/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Creates a secret stored by Fleet. */
export const FleetPostSecretRequest = z.object({
  value: z.string().meta({ found_in: 'body' })
}).meta({ id: 'FleetPostSecretRequest' })
export type FleetPostSecretRequest = z.infer<typeof FleetPostSecretRequest>

export const FleetPostSecretResponse = z.object({
  id: z.string()
}).meta({ id: 'FleetPostSecretResponse' })
export type FleetPostSecretResponse = z.infer<typeof FleetPostSecretResponse>
