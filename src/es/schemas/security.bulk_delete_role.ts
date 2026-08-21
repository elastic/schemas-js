/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Refresh } from './_types.js'
import { SecurityBulkError } from './security.js'

/**
 * Bulk delete roles.
 *
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The bulk delete roles API cannot delete roles that are defined in roles files.
 */
export const SecurityBulkDeleteRoleRequest = z.object({
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  names: z.array(z.string()).describe('An array of role names to delete').meta({ found_in: 'body' })
}).meta({ id: 'SecurityBulkDeleteRoleRequest' })
export type SecurityBulkDeleteRoleRequest = z.infer<typeof SecurityBulkDeleteRoleRequest>

export const SecurityBulkDeleteRoleResponse = z.object({
  deleted: z.array(z.string()).describe('Array of deleted roles').optional(),
  not_found: z.array(z.string()).describe('Array of roles that could not be found').optional(),
  errors: SecurityBulkError.describe('Present if any deletes resulted in errors').optional()
}).meta({ id: 'SecurityBulkDeleteRoleResponse' })
export type SecurityBulkDeleteRoleResponse = z.infer<typeof SecurityBulkDeleteRoleResponse>
