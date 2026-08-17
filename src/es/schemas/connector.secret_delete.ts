/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Deletes a connector secret. */
export const ConnectorSecretDeleteRequest = z.object({
  id: z.string().describe('The ID of the secret').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorSecretDeleteRequest' })
export type ConnectorSecretDeleteRequest = z.infer<typeof ConnectorSecretDeleteRequest>

export const ConnectorSecretDeleteResponse = z.object({
  deleted: z.boolean()
}).meta({ id: 'ConnectorSecretDeleteResponse' })
export type ConnectorSecretDeleteResponse = z.infer<typeof ConnectorSecretDeleteResponse>
