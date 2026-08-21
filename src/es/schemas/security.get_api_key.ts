/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Name, Username } from './_types.js'
import { SecurityApiKey } from './security.js'

/**
 * Get API key information.
 *
 * Retrieves information for one or more API keys.
 * NOTE: If you have only the `manage_own_api_key` privilege, this API returns only the API keys that you own.
 * If you have `read_security`, `manage_api_key` or greater privileges (including `manage_security`), this API returns all API keys regardless of ownership.
 */
export const SecurityGetApiKeyRequest = z.object({
  id: z.lazy(() => Id).describe('An API key id. This parameter cannot be used with any of `name`, `realm_name` or `username`.').optional().meta({ found_in: 'query' }),
  name: z.lazy(() => Name).describe('An API key name. This parameter cannot be used with any of `id`, `realm_name` or `username`. It supports prefix search with wildcard.').optional().meta({ found_in: 'query' }),
  owner: z.boolean().describe('A boolean flag that can be used to query API keys owned by the currently authenticated user. The `realm_name` or `username` parameters cannot be specified when this parameter is set to `true` as they are assumed to be the currently authenticated ones.').optional().meta({ found_in: 'query' }),
  realm_name: z.lazy(() => Name).describe('The name of an authentication realm. This parameter cannot be used with either `id` or `name` or when `owner` flag is set to `true`.').optional().meta({ found_in: 'query' }),
  username: z.lazy(() => Username).describe('The username of a user. This parameter cannot be used with either `id` or `name` or when `owner` flag is set to `true`.').optional().meta({ found_in: 'query' }),
  with_limited_by: z.boolean().describe('Return the snapshot of the owner user\'s role descriptors associated with the API key. An API key\'s actual permission is the intersection of its assigned role descriptors and the owner user\'s role descriptors.').optional().meta({ found_in: 'query' }),
  active_only: z.boolean().describe('A boolean flag that can be used to query API keys that are currently active. An API key is considered active if it is neither invalidated, nor expired at query time. You can specify this together with other parameters such as `owner` or `name`. If `active_only` is false, the response will include both active and inactive (expired or invalidated) keys.').optional().meta({ found_in: 'query' }),
  with_profile_uid: z.boolean().describe('Determines whether to also retrieve the profile uid, for the API key owner principal, if it exists.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityGetApiKeyRequest' })
export type SecurityGetApiKeyRequest = z.infer<typeof SecurityGetApiKeyRequest>

export const SecurityGetApiKeyResponse = z.object({
  api_keys: z.array(z.lazy(() => SecurityApiKey))
}).meta({ id: 'SecurityGetApiKeyResponse' })
export type SecurityGetApiKeyResponse = z.infer<typeof SecurityGetApiKeyResponse>
