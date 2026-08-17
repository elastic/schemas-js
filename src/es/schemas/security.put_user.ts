/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Metadata, Password, Refresh, Username } from './_types.js'

/**
 * Create or update users.
 *
 * Add and update users in the native realm.
 * A password is required for adding a new user but is optional when updating an existing user.
 * To change a user's password without updating any other fields, use the change password API.
 */
export const SecurityPutUserRequest = z.object({
  username: z.lazy(() => Username).describe('An identifier for the user. NOTE: Usernames must be at least 1 and no more than 507 characters. They can contain alphanumeric characters (a-z, A-Z, 0-9), spaces, punctuation, and printable symbols in the Basic Latin (ASCII) block. Leading or trailing whitespace is not allowed.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('Valid values are `true`, `false`, and `wait_for`. These values have the same meaning as in the index API, but the default value for this API is true.').optional().meta({ found_in: 'query' }),
  email: z.union([z.string(), z.null()]).describe('The email of the user.').optional().meta({ found_in: 'body' }),
  full_name: z.union([z.string(), z.null()]).describe('The full name of the user.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Arbitrary metadata that you want to associate with the user.').optional().meta({ found_in: 'body' }),
  password: z.lazy(() => Password).describe('The user\'s password. Passwords must be at least 6 characters long. When adding a user, one of `password` or `password_hash` is required. When updating an existing user, the password is optional, so that other fields on the user (such as their roles) may be updated without modifying the user\'s password').optional().meta({ found_in: 'body' }),
  password_hash: z.string().describe('A hash of the user\'s password. This must be produced using the same hashing algorithm as has been configured for password storage. For more details, see the explanation of the `xpack.security.authc.password_hashing.algorithm` setting in the user cache and password hash algorithm documentation. Using this parameter allows the client to pre-hash the password for performance and/or confidentiality reasons. The `password` parameter and the `password_hash` parameter cannot be used in the same request.').optional().meta({ found_in: 'body' }),
  roles: z.array(z.string()).describe('A set of roles the user has. The roles determine the user\'s access permissions. To create a user without any roles, specify an empty list (`[]`).').optional().meta({ found_in: 'body' }),
  enabled: z.boolean().describe('Specifies whether the user is enabled.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityPutUserRequest' })
export type SecurityPutUserRequest = z.infer<typeof SecurityPutUserRequest>

export const SecurityPutUserResponse = z.object({
  created: z.boolean().describe('A successful call returns a JSON structure that shows whether the user has been created or updated. When an existing user is updated, `created` is set to `false`.')
}).meta({ id: 'SecurityPutUserResponse' })
export type SecurityPutUserResponse = z.infer<typeof SecurityPutUserResponse>
