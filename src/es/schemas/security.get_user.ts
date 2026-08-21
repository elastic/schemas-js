/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Username } from './_types.js'
import { SecurityUser } from './security.js'

/**
 * Get users.
 *
 * Get information about users in the native realm and built-in users.
 */
export const SecurityGetUserRequest = z.object({
  username: z.union([z.lazy(() => Username), z.array(z.lazy(() => Username))]).describe('An identifier for the user. You can specify multiple usernames as a comma-separated list. If you omit this parameter, the API retrieves information about all users.').optional().meta({ found_in: 'path' }),
  with_profile_uid: z.boolean().describe('Determines whether to retrieve the user profile UID, if it exists, for the users.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityGetUserRequest' })
export type SecurityGetUserRequest = z.infer<typeof SecurityGetUserRequest>

export const SecurityGetUserResponse = z.record(z.string(), SecurityUser).meta({ id: 'SecurityGetUserResponse' })
export type SecurityGetUserResponse = z.infer<typeof SecurityGetUserResponse>
