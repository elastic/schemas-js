/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Retrieves a secret stored by Connectors. */
export const ConnectorSecretGetRequest = z.object({
  id: z.string().describe('The ID of the secret').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorSecretGetRequest' })
export type ConnectorSecretGetRequest = z.infer<typeof ConnectorSecretGetRequest>

export const ConnectorSecretGetResponse = z.object({
  id: z.string(),
  value: z.string()
}).meta({ id: 'ConnectorSecretGetResponse' })
export type ConnectorSecretGetResponse = z.infer<typeof ConnectorSecretGetResponse>
