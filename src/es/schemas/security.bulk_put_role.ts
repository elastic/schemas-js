/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Refresh } from './_types.js'
import { SecurityBulkError, SecurityRoleDescriptor } from './security.js'

/**
 * Bulk create or update roles.
 *
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The bulk create or update roles API cannot update roles that are defined in roles files.
 */
export const SecurityBulkPutRoleRequest = z.object({
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  roles: z.record(z.string(), SecurityRoleDescriptor).describe('A dictionary of role name to RoleDescriptor objects to add or update').meta({ found_in: 'body' })
}).meta({ id: 'SecurityBulkPutRoleRequest' })
export type SecurityBulkPutRoleRequest = z.infer<typeof SecurityBulkPutRoleRequest>

export const SecurityBulkPutRoleResponse = z.object({
  created: z.array(z.string()).describe('Array of created roles').optional(),
  updated: z.array(z.string()).describe('Array of updated roles').optional(),
  noop: z.array(z.string()).describe('Array of role names without any changes').optional(),
  errors: SecurityBulkError.describe('Present if any updates resulted in errors').optional()
}).meta({ id: 'SecurityBulkPutRoleResponse' })
export type SecurityBulkPutRoleResponse = z.infer<typeof SecurityBulkPutRoleResponse>
