/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name, Names } from './_types.js'
import { SecurityPutPrivilegesActions } from './security.put_privileges.js'

/**
 * Get application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `read_security` cluster privilege (or a greater privilege such as `manage_security` or `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 */
export const SecurityGetPrivilegesRequest = z.object({
  application: z.lazy(() => Name).describe('The name of the application. Application privileges are always associated with exactly one application. If you do not specify this parameter, the API returns information about all privileges for all applications.').optional().meta({ found_in: 'path' }),
  name: z.lazy(() => Names).describe('The name of the privilege. If you do not specify this parameter, the API returns information about all privileges for the requested application.').optional().meta({ found_in: 'path' })
}).meta({ id: 'SecurityGetPrivilegesRequest' })
export type SecurityGetPrivilegesRequest = z.infer<typeof SecurityGetPrivilegesRequest>

export const SecurityGetPrivilegesResponse = z.record(z.string(), z.record(z.string(), SecurityPutPrivilegesActions)).meta({ id: 'SecurityGetPrivilegesResponse' })
export type SecurityGetPrivilegesResponse = z.infer<typeof SecurityGetPrivilegesResponse>
