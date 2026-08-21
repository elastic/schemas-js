/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Result } from './_types.js'

/**
 * Update the connector API key ID.
 *
 * Update the `api_key_id` and `api_key_secret_id` fields of a connector.
 * You can specify the ID of the API key used for authorization and the ID of the connector secret where the API key is stored.
 * The connector secret ID is required only for Elastic managed (native) connectors.
 * Self-managed connectors (connector clients) do not use this field.
 */
export const ConnectorUpdateApiKeyIdRequest = z.object({
  connector_id: z.lazy(() => Id).describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
  api_key_id: z.string().optional().meta({ found_in: 'body' }),
  api_key_secret_id: z.string().optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateApiKeyIdRequest' })
export type ConnectorUpdateApiKeyIdRequest = z.infer<typeof ConnectorUpdateApiKeyIdRequest>

export const ConnectorUpdateApiKeyIdResponse = z.object({
  result: z.lazy(() => Result)
}).meta({ id: 'ConnectorUpdateApiKeyIdResponse' })
export type ConnectorUpdateApiKeyIdResponse = z.infer<typeof ConnectorUpdateApiKeyIdResponse>
