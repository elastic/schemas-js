/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Refresh, Username } from './_types.js'

/**
 * Enable users.
 *
 * Enable users in the native realm.
 * By default, when you create users, they are enabled.
 */
export const SecurityEnableUserRequest = z.object({
  username: z.lazy(() => Username).describe('An identifier for the user.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityEnableUserRequest' })
export type SecurityEnableUserRequest = z.infer<typeof SecurityEnableUserRequest>

export const SecurityEnableUserResponse = z.object({
}).meta({ id: 'SecurityEnableUserResponse' })
export type SecurityEnableUserResponse = z.infer<typeof SecurityEnableUserResponse>
