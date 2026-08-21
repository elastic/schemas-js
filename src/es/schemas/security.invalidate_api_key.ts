/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ErrorCause, Id, Name, Username, integer } from './_types.js'

/**
 * Invalidate API keys.
 *
 * This API invalidates API keys created by the create API key or grant API key APIs.
 * Invalidated API keys fail authentication, but they can still be viewed using the get API key information and query API key information APIs, for at least the configured retention period, until they are automatically deleted.
 *
 * To use this API, you must have at least the `manage_security`, `manage_api_key`, or `manage_own_api_key` cluster privileges.
 * The `manage_security` privilege allows deleting any API key, including both REST and cross cluster API keys.
 * The `manage_api_key` privilege allows deleting any REST API key, but not cross cluster API keys.
 * The `manage_own_api_key` only allows deleting REST API keys that are owned by the user.
 * In addition, with the `manage_own_api_key` privilege, an invalidation request must be issued in one of the three formats:
 *
 * - Set the parameter `owner=true`.
 * - Or, set both `username` and `realm_name` to match the user's identity.
 * - Or, if the request is issued by an API key, that is to say an API key invalidates itself, specify its ID in the `ids` field.
 */
export const SecurityInvalidateApiKeyRequest = z.object({
  id: z.lazy(() => Id).optional().meta({ found_in: 'body' }),
  ids: z.array(z.lazy(() => Id)).describe('A list of API key ids. This parameter cannot be used with any of `name`, `realm_name`, or `username`.').optional().meta({ found_in: 'body' }),
  name: z.lazy(() => Name).describe('An API key name. This parameter cannot be used with any of `ids`, `realm_name` or `username`.').optional().meta({ found_in: 'body' }),
  owner: z.boolean().describe('Query API keys owned by the currently authenticated user. The `realm_name` or `username` parameters cannot be specified when this parameter is set to `true` as they are assumed to be the currently authenticated ones. NOTE: At least one of `ids`, `name`, `username`, and `realm_name` must be specified if `owner` is `false`.').optional().meta({ found_in: 'body' }),
  realm_name: z.string().describe('The name of an authentication realm. This parameter cannot be used with either `ids` or `name`, or when `owner` flag is set to `true`.').optional().meta({ found_in: 'body' }),
  username: z.lazy(() => Username).describe('The username of a user. This parameter cannot be used with either `ids` or `name` or when `owner` flag is set to `true`.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityInvalidateApiKeyRequest' })
export type SecurityInvalidateApiKeyRequest = z.infer<typeof SecurityInvalidateApiKeyRequest>

export const SecurityInvalidateApiKeyResponse = z.object({
  error_count: z.lazy(() => integer).describe('The number of errors that were encountered when invalidating the API keys.'),
  error_details: z.array(z.lazy(() => ErrorCause)).describe('Details about the errors. This field is not present in the response when `error_count` is `0`.').optional(),
  invalidated_api_keys: z.array(z.string()).describe('The IDs of the API keys that were invalidated as part of this request.'),
  previously_invalidated_api_keys: z.array(z.string()).describe('The IDs of the API keys that were already invalidated.')
}).meta({ id: 'SecurityInvalidateApiKeyResponse' })
export type SecurityInvalidateApiKeyResponse = z.infer<typeof SecurityInvalidateApiKeyResponse>
