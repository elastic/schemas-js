/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Password, Refresh, Username } from './_types.js'

/**
 * Change passwords.
 *
 * Change the passwords of users in the native realm and built-in users.
 */
export const SecurityChangePasswordRequest = z.object({
  username: z.lazy(() => Username).describe('The user whose password you want to change. If you do not specify this parameter, the password is changed for the current user.').optional().meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  password: z.lazy(() => Password).describe('The new password value. Passwords must be at least 6 characters long.').optional().meta({ found_in: 'body' }),
  password_hash: z.string().describe('A hash of the new password value. This must be produced using the same hashing algorithm as has been configured for password storage. For more details, see the explanation of the `xpack.security.authc.password_hashing.algorithm` setting.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityChangePasswordRequest' })
export type SecurityChangePasswordRequest = z.infer<typeof SecurityChangePasswordRequest>

export const SecurityChangePasswordResponse = z.object({
}).meta({ id: 'SecurityChangePasswordResponse' })
export type SecurityChangePasswordResponse = z.infer<typeof SecurityChangePasswordResponse>
