/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Refresh, Username } from './_types.js'

/**
 * Delete users.
 *
 * Delete users from the native realm.
 */
export const SecurityDeleteUserRequest = z.object({
  username: z.lazy(() => Username).describe('An identifier for the user.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteUserRequest' })
export type SecurityDeleteUserRequest = z.infer<typeof SecurityDeleteUserRequest>

export const SecurityDeleteUserResponse = z.object({
  found: z.boolean().describe('If the user is successfully deleted, the request returns `{"found": true}`. Otherwise, `found` is set to `false`.')
}).meta({ id: 'SecurityDeleteUserResponse' })
export type SecurityDeleteUserResponse = z.infer<typeof SecurityDeleteUserResponse>
