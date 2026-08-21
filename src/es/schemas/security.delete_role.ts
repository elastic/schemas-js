/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Refresh } from './_types.js'

/**
 * Delete roles.
 *
 * Delete roles in the native realm.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The delete roles API cannot remove roles that are defined in roles files.
 */
export const SecurityDeleteRoleRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the role.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeleteRoleRequest' })
export type SecurityDeleteRoleRequest = z.infer<typeof SecurityDeleteRoleRequest>

export const SecurityDeleteRoleResponse = z.object({
  found: z.boolean().describe('If the role is successfully deleted, `found` is `true`. Otherwise, `found` is `false`.')
}).meta({ id: 'SecurityDeleteRoleResponse' })
export type SecurityDeleteRoleResponse = z.infer<typeof SecurityDeleteRoleResponse>
