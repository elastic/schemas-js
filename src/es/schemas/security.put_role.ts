/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName, Metadata, Name, Refresh } from './_types.js'
import { SecurityApplicationPrivileges, SecurityClusterPrivilege, SecurityCreatedStatus, SecurityIndexPrivilege } from './security.js'
import { SecurityFieldSecurity, SecurityIndicesPrivilegesQuery } from './security.get_role.js'

export const SecurityIndicesPrivileges = z.object({
  field_security: z.lazy(() => SecurityFieldSecurity).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.lazy(() => SecurityIndicesPrivilegesQuery).describe('A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.').optional()
}).meta({ id: 'SecurityIndicesPrivileges' })
export type SecurityIndicesPrivileges = z.infer<typeof SecurityIndicesPrivileges>

/**
 * Create or update roles.
 *
 * The role management APIs are generally the preferred way to manage roles in the native realm, rather than using file-based role management.
 * The create or update roles API cannot update roles that are defined in roles files.
 * File-based role management is not available in Elastic Serverless.
 */
export const SecurityPutRoleRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the role that is being created or updated. On Elasticsearch Serverless, the role name must begin with a letter or digit and can only contain letters, digits and the characters \'_\', \'-\', and \'.\'. Each role must have a unique name, as this will serve as the identifier for that role.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  applications: z.array(z.lazy(() => SecurityApplicationPrivileges)).describe('A list of application privilege entries.').optional().meta({ found_in: 'body' }),
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)).describe('A list of cluster privileges. These privileges define the cluster-level actions for users with this role.').optional().meta({ found_in: 'body' }),
  indices: z.array(z.lazy(() => SecurityIndicesPrivileges)).describe('A list of indices permissions entries.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Optional metadata. Within the metadata object, keys that begin with an underscore (`_`) are reserved for system use.').optional().meta({ found_in: 'body' }),
  run_as: z.array(z.string()).describe('A list of users that the owners of this role can impersonate. *Note*: in Serverless, the run-as feature is disabled. For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('Optional description of the role descriptor').optional().meta({ found_in: 'body' }),
  transient_metadata: z.record(z.string(), z.any()).describe('Indicates roles that might be incompatible with the current cluster license, specifically roles with document and field level security. When the cluster license doesn’t allow certain features for a given role, this parameter is updated dynamically to list the incompatible features. If `enabled` is `false`, the role is ignored, but is still listed in the response from the authenticate API.').optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityPutRoleRequest' })
export type SecurityPutRoleRequest = z.infer<typeof SecurityPutRoleRequest>

export const SecurityPutRoleResponse = z.object({
  role: z.lazy(() => SecurityCreatedStatus).describe('When an existing role is updated, `created` is set to `false`.')
}).meta({ id: 'SecurityPutRoleResponse' })
export type SecurityPutRoleResponse = z.infer<typeof SecurityPutRoleResponse>
