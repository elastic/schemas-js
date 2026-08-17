/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Creates a secret for a Connector. */
export const ConnectorSecretPostRequest = z.object({
  value: z.string().optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSecretPostRequest' })
export type ConnectorSecretPostRequest = z.infer<typeof ConnectorSecretPostRequest>

export const ConnectorSecretPostResponse = z.object({
  id: z.string()
}).meta({ id: 'ConnectorSecretPostResponse' })
export type ConnectorSecretPostResponse = z.infer<typeof ConnectorSecretPostResponse>
