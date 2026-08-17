/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Metadata, Name, Refresh } from './_types.js'
import { SecurityCreatedStatus } from './security.js'

export const SecurityPutPrivilegesActions = z.object({
  actions: z.array(z.string()),
  application: z.string().optional(),
  name: z.lazy(() => Name).optional(),
  metadata: z.lazy(() => Metadata).optional()
}).meta({ id: 'SecurityPutPrivilegesActions' })
export type SecurityPutPrivilegesActions = z.infer<typeof SecurityPutPrivilegesActions>

/**
 * Create or update application privileges.
 *
 * To use this API, you must have one of the following privileges:
 *
 * * The `manage_security` cluster privilege (or a greater privilege such as `all`).
 * * The "Manage Application Privileges" global privilege for the application being referenced in the request.
 *
 * Application names are formed from a prefix, with an optional suffix that conform to the following rules:
 *
 * * The prefix must begin with a lowercase ASCII letter.
 * * The prefix must contain only ASCII letters or digits.
 * * The prefix must be at least 3 characters long.
 * * If the suffix exists, it must begin with either a dash `-` or `_`.
 * * The suffix cannot contain any of the following characters: `\`, `/`, `*`, `?`, `"`, `<`, `>`, `|`, `,`, `*`.
 * * No part of the name can contain whitespace.
 *
 * Privilege names must begin with a lowercase ASCII letter and must contain only ASCII letters and digits along with the characters `_`, `-`, and `.`.
 *
 * Action names can contain any number of printable ASCII characters and must contain at least one of the following characters: `/`, `*`, `:`.
 */
export const SecurityPutPrivilegesRequest = z.object({
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  privileges: z.record(z.string(), z.record(z.string(), SecurityPutPrivilegesActions)).optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityPutPrivilegesRequest' })
export type SecurityPutPrivilegesRequest = z.infer<typeof SecurityPutPrivilegesRequest>

export const SecurityPutPrivilegesResponse = z.record(z.string(), z.record(z.string(), z.lazy(() => SecurityCreatedStatus))).meta({ id: 'SecurityPutPrivilegesResponse' })
export type SecurityPutPrivilegesResponse = z.infer<typeof SecurityPutPrivilegesResponse>
