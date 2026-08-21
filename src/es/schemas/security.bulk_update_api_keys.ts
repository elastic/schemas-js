/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Metadata } from './_types.js'
import { SecurityBulkError, SecurityRoleDescriptor } from './security.js'

/**
 * Bulk update API keys.
 *
 * Update the attributes for multiple API keys.
 *
 * IMPORTANT: It is not possible to use an API key as the authentication credential for this API. To update API keys, the owner user's credentials are required.
 *
 * This API is similar to the update API key API but enables you to apply the same update to multiple API keys in one API call. This operation can greatly improve performance over making individual updates.
 *
 * It is not possible to update expired or invalidated API keys.
 *
 * This API supports updates to API key access scope, metadata and expiration.
 * The access scope of each API key is derived from the `role_descriptors` you specify in the request and a snapshot of the owner user's permissions at the time of the request.
 * The snapshot of the owner's permissions is updated automatically on every call.
 *
 * IMPORTANT: If you don't specify `role_descriptors` in the request, a call to this API might still change an API key's access scope. This change can occur if the owner user's permissions have changed since the API key was created or last modified.
 *
 * A successful request returns a JSON structure that contains the IDs of all updated API keys, the IDs of API keys that already had the requested changes and did not require an update, and error details for any failed update.
 */
export const SecurityBulkUpdateApiKeysRequest = z.object({
  expiration: z.lazy(() => Duration).describe('Expiration time for the API keys. By default, API keys never expire. This property can be omitted to leave the value unchanged.').optional().meta({ found_in: 'body' }),
  ids: z.union([z.string(), z.array(z.string())]).describe('The API key identifiers.').meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary nested metadata to associate with the API keys. Within the `metadata` object, top-level keys beginning with an underscore (`_`) are reserved for system usage. Any information specified with this parameter fully replaces metadata previously associated with the API key.').optional().meta({ found_in: 'body' }),
  role_descriptors: z.record(z.string(), SecurityRoleDescriptor).describe('The role descriptors to assign to the API keys. An API key\'s effective permissions are an intersection of its assigned privileges and the point-in-time snapshot of permissions of the owner user. You can assign new privileges by specifying them in this parameter. To remove assigned privileges, supply the `role_descriptors` parameter as an empty object `{}`. If an API key has no assigned privileges, it inherits the owner user\'s full permissions. The snapshot of the owner\'s permissions is always updated, whether you supply the `role_descriptors` parameter. The structure of a role descriptor is the same as the request for the create API keys API.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityBulkUpdateApiKeysRequest' })
export type SecurityBulkUpdateApiKeysRequest = z.infer<typeof SecurityBulkUpdateApiKeysRequest>

export const SecurityBulkUpdateApiKeysResponse = z.object({
  errors: SecurityBulkError.optional(),
  noops: z.array(z.string()),
  updated: z.array(z.string())
}).meta({ id: 'SecurityBulkUpdateApiKeysResponse' })
export type SecurityBulkUpdateApiKeysResponse = z.infer<typeof SecurityBulkUpdateApiKeysResponse>
