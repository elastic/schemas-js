/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names, Refresh } from './_types.js'

export const SecurityDeletePrivilegesFoundStatus = z.object({
  found: z.boolean()
}).meta({ id: 'SecurityDeletePrivilegesFoundStatus' })
export type SecurityDeletePrivilegesFoundStatus = z.infer<typeof SecurityDeletePrivilegesFoundStatus>

/**
 * Delete application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_security` cluster privilege (or a greater privilege such as `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 */
export const SecurityDeletePrivilegesRequest = z.object({
  application: z.lazy(() => Name).describe('The name of the application. Application privileges are always associated with exactly one application.').meta({ found_in: 'path' }),
  name: z.lazy(() => Names).describe('The name of the privilege.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityDeletePrivilegesRequest' })
export type SecurityDeletePrivilegesRequest = z.infer<typeof SecurityDeletePrivilegesRequest>

export const SecurityDeletePrivilegesResponse = z.record(z.string(), z.record(z.string(), SecurityDeletePrivilegesFoundStatus)).meta({ id: 'SecurityDeletePrivilegesResponse' })
export type SecurityDeletePrivilegesResponse = z.infer<typeof SecurityDeletePrivilegesResponse>
