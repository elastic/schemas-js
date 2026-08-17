/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Namespace, Refresh, Service } from './_types.js'

/**
 * Create a service account token.
 *
 * Create a service accounts token for access without requiring basic authentication.
 *
 * NOTE: Service account tokens never expire.
 * You must actively delete them if they are no longer needed.
 *
 * IMPORTANT: On Serverless, non-operator users can create tokens for only `elastic/fleet-server` and `elastic/fleet-server-remote`.
 * Creating tokens for any other service account requires operator privileges.
 */
export const SecurityCreateServiceTokenRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The name of the namespace, which is a top-level grouping of service accounts.').meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The name of the service.').meta({ found_in: 'path' }),
  name: z.lazy(() => Name).describe('The name for the service account token. If omitted, a random name will be generated. Token names must be at least one and no more than 256 characters. They can contain alphanumeric characters (a-z, A-Z, 0-9), dashes (`-`), and underscores (`_`), but cannot begin with an underscore. NOTE: Token names must be unique in the context of the associated service account. They must also be globally unique with their fully qualified names, which are comprised of the service account principal and token name, such as `<namespace>/<service>/<token-name>`.').optional().meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityCreateServiceTokenRequest' })
export type SecurityCreateServiceTokenRequest = z.infer<typeof SecurityCreateServiceTokenRequest>

export const SecurityCreateServiceTokenToken = z.object({
  name: z.lazy(() => Name),
  value: z.string()
}).meta({ id: 'SecurityCreateServiceTokenToken' })
export type SecurityCreateServiceTokenToken = z.infer<typeof SecurityCreateServiceTokenToken>

export const SecurityCreateServiceTokenResponse = z.object({
  created: z.boolean(),
  token: SecurityCreateServiceTokenToken
}).meta({ id: 'SecurityCreateServiceTokenResponse' })
export type SecurityCreateServiceTokenResponse = z.infer<typeof SecurityCreateServiceTokenResponse>
