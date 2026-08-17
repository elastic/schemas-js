/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, Metadata } from './_types.js'
import { SecurityRoleDescriptor } from './security.js'

/**
 * Update an API key.
 *
 * Update attributes of an existing API key.
 * This API supports updates to an API key's access scope, expiration, and metadata.
 *
 * To use this API, you must have at least the `manage_own_api_key` cluster privilege.
 * Users can only update API keys that they created or that were granted to them.
 * To update another user’s API key, use the `run_as` feature to submit a request on behalf of another user.
 *
 * IMPORTANT: It's not possible to use an API key as the authentication credential for this API. The owner user’s credentials are required.
 *
 * Use this API to update API keys created by the create API key or grant API Key APIs.
 * If you need to apply the same update to many API keys, you can use the bulk update API keys API to reduce overhead.
 * It's not possible to update expired API keys or API keys that have been invalidated by the invalidate API key API.
 *
 * The access scope of an API key is derived from the `role_descriptors` you specify in the request and a snapshot of the owner user's permissions at the time of the request.
 * The snapshot of the owner's permissions is updated automatically on every call.
 *
 * IMPORTANT: If you don't specify `role_descriptors` in the request, a call to this API might still change the API key's access scope.
 * This change can occur if the owner user's permissions have changed since the API key was created or last modified.
 */
export const SecurityUpdateApiKeyRequest = z.object({
  id: z.lazy(() => Id).describe('The ID of the API key to update.').meta({ found_in: 'path' }),
  role_descriptors: z.record(z.string(), SecurityRoleDescriptor).describe('The role descriptors to assign to this API key. The API key\'s effective permissions are an intersection of its assigned privileges and the point in time snapshot of permissions of the owner user. You can assign new privileges by specifying them in this parameter. To remove assigned privileges, you can supply an empty `role_descriptors` parameter, that is to say, an empty object `{}`. If an API key has no assigned privileges, it inherits the owner user\'s full permissions. The snapshot of the owner\'s permissions is always updated, whether you supply the `role_descriptors` parameter or not. The structure of a role descriptor is the same as the request for the create API keys API.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata that you want to associate with the API key. It supports a nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage. When specified, this value fully replaces the metadata previously associated with the API key.').optional().meta({ found_in: 'body' }),
  expiration: z.lazy(() => Duration).describe('The expiration time for the API key. By default, API keys never expire. This property can be omitted to leave the expiration unchanged.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityUpdateApiKeyRequest' })
export type SecurityUpdateApiKeyRequest = z.infer<typeof SecurityUpdateApiKeyRequest>

export const SecurityUpdateApiKeyResponse = z.object({
  updated: z.boolean().describe('If `true`, the API key was updated. If `false`, the API key didn\'t change because no change was detected.')
}).meta({ id: 'SecurityUpdateApiKeyResponse' })
export type SecurityUpdateApiKeyResponse = z.infer<typeof SecurityUpdateApiKeyResponse>
