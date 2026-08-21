/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Refresh, Username } from './_types.js'

/**
 * Disable users.
 *
 * Disable users in the native realm.
 * By default, when you create users, they are enabled.
 * You can use this API to revoke a user's access to Elasticsearch.
 */
export const SecurityDisableUserRequest = z.object({
  username: z.lazy(() => Username).describe('An identifier for the user.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDisableUserRequest' })
export type SecurityDisableUserRequest = z.infer<typeof SecurityDisableUserRequest>

export const SecurityDisableUserResponse = z.object({
}).meta({ id: 'SecurityDisableUserResponse' })
export type SecurityDisableUserResponse = z.infer<typeof SecurityDisableUserResponse>
