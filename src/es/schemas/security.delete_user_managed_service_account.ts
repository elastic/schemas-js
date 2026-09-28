/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Namespace, Refresh, Service } from './_types.js'

/**
 * Delete user-managed service accounts.
 *
 * Delete a service account from a namespace of your own.
 *
 * Deleting an account that still has service tokens is rejected unless `force` is `true`.
 * A forced delete leaves the tokens behind: they cannot authenticate while no account of that name exists, and recreating the account is rejected until they are deleted.
 *
 * NOTE: The `elastic` namespace is reserved for the built-in service accounts that ship with Elasticsearch.
 * A name that no user-managed service account could have is rejected rather than reported as not found.
 * The `manage_service_account` privilege does not authorize this API.
 */
export const SecurityDeleteUserManagedServiceAccountRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The namespace, which is a top-level grouping of service accounts. It must start with a letter or digit and can contain only letters, digits, hyphens, and underscores, up to a maximum of 128 characters. It cannot be `elastic`, which is reserved for built-in service accounts.').meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The service name. It must start with a letter or digit and can contain only letters, digits, hyphens, and underscores, up to a maximum of 128 characters.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `wait_for` (the default) then wait for a refresh to make this operation visible to search, if `true` then refresh the affected shards to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  force: z.boolean().describe('If `false` (the default), deleting a service account that still has service tokens is rejected. If `true`, the account is deleted and its tokens are left in place.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteUserManagedServiceAccountRequest' })
export type SecurityDeleteUserManagedServiceAccountRequest = z.infer<typeof SecurityDeleteUserManagedServiceAccountRequest>

export const SecurityDeleteUserManagedServiceAccountResponse = z.object({
  found: z.boolean().describe('If the service account is successfully deleted, the request returns `{"found": true}`. Otherwise, the response will have status code 404 and `found` is set to `false`.')
}).meta({ id: 'SecurityDeleteUserManagedServiceAccountResponse' })
export type SecurityDeleteUserManagedServiceAccountResponse = z.infer<typeof SecurityDeleteUserManagedServiceAccountResponse>
