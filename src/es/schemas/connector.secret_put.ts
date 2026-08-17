/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Result } from './_types.js'

/** Creates or updates a secret for a Connector. */
export const ConnectorSecretPutRequest = z.object({
  id: z.string().describe('The ID of the secret').meta({ found_in: 'path' }),
  value: z.string().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSecretPutRequest' })
export type ConnectorSecretPutRequest = z.infer<typeof ConnectorSecretPutRequest>

export const ConnectorSecretPutResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorSecretPutResponse' })
export type ConnectorSecretPutResponse = z.infer<typeof ConnectorSecretPutResponse>
