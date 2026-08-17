/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Namespace, Refresh, Service } from './_types.js'

/**
 * Delete service account tokens.
 *
 * Delete service account tokens for a service in a specified namespace.
 *
 * IMPORTANT: On Serverless, non-operator users can delete tokens for only `elastic/fleet-server` and `elastic/fleet-server-remote`.
 * Deleting tokens for any other service account requires operator privileges.
 */
export const SecurityDeleteServiceTokenRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The namespace, which is a top-level grouping of service accounts.').meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The service name.').meta({ found_in: 'path' }),
  name: z.lazy(() => Name).describe('The name of the service account token.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteServiceTokenRequest' })
export type SecurityDeleteServiceTokenRequest = z.infer<typeof SecurityDeleteServiceTokenRequest>

export const SecurityDeleteServiceTokenResponse = z.object({
  found: z.boolean().describe('If the service account token is successfully deleted, the request returns `{"found": true}`. Otherwise, the response will have status code 404 and `found` is set to `false`.')
}).meta({ id: 'SecurityDeleteServiceTokenResponse' })
export type SecurityDeleteServiceTokenResponse = z.infer<typeof SecurityDeleteServiceTokenResponse>
