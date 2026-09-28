/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Namespace, Refresh, Service } from './_types.js'

/**
 * Create user-managed service accounts.
 *
 * Create a service account in a namespace of your own, or replace one that already exists.
 * A replacement is not a partial update: every write applies the defaults, so an account that was disabled and is then written again without `enabled` comes back enabled.
 *
 * Creating an account whose name still has leftover service tokens is rejected.
 * Delete those tokens first.
 *
 * NOTE: The `elastic` namespace is reserved for the built-in service accounts that ship with Elasticsearch.
 * The `manage_service_account` privilege does not authorize this API.
 */
export const SecurityPutUserManagedServiceAccountRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The namespace, which is a top-level grouping of service accounts. It must start with a letter or digit and can contain only letters, digits, hyphens, and underscores, up to a maximum of 128 characters. It cannot be `elastic`, which is reserved for built-in service accounts.').meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The service name. It must start with a letter or digit and can contain only letters, digits, hyphens, and underscores, up to a maximum of 128 characters.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `wait_for` (the default) then wait for a refresh to make this operation visible to search, if `true` then refresh the affected shards to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  roles: z.array(z.string()).describe('The names of the roles to grant to the service account, up to a maximum of 1000. The roles are resolved when the account authenticates, so they do not have to exist yet.').meta({ found_in: 'body' }),
  enabled: z.boolean().describe('Whether the account can authenticate. Tokens can still be created for a disabled account; they just cannot be used until the account is enabled.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityPutUserManagedServiceAccountRequest' })
export type SecurityPutUserManagedServiceAccountRequest = z.infer<typeof SecurityPutUserManagedServiceAccountRequest>

export const SecurityPutUserManagedServiceAccountResponse = z.object({
  created: z.boolean().describe('A successful call returns a JSON structure that shows whether the service account has been created or updated. When an existing service account is replaced, `created` is set to `false`.')
}).meta({ id: 'SecurityPutUserManagedServiceAccountResponse' })
export type SecurityPutUserManagedServiceAccountResponse = z.infer<typeof SecurityPutUserManagedServiceAccountResponse>
