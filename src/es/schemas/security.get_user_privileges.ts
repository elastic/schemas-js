/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName, Names } from './_types.js'
import { SecurityApplicationPrivileges, SecurityIndexPrivilege } from './security.js'
import { SecurityFieldSecurity, SecurityIndicesPrivilegesQuery } from './security.get_role.js'

export const SecurityRemoteClusterPrivilege = z.enum(['monitor_enrich', 'monitor_stats']).meta({ id: 'SecurityRemoteClusterPrivilege' })
export type SecurityRemoteClusterPrivilege = z.infer<typeof SecurityRemoteClusterPrivilege>

/** The subset of cluster level privileges that can be defined for remote clusters. */
export const SecurityRemoteClusterPrivileges = z.object({
  clusters: z.lazy(() => Names).describe('A list of cluster aliases to which the permissions in this entry apply.'),
  privileges: z.array(SecurityRemoteClusterPrivilege).describe('The cluster level privileges that owners of the role have on the remote cluster.')
}).meta({ id: 'SecurityRemoteClusterPrivileges' })
export type SecurityRemoteClusterPrivileges = z.infer<typeof SecurityRemoteClusterPrivileges>

export const SecurityManageUserPrivileges = z.object({
  applications: z.array(z.string())
}).meta({ id: 'SecurityManageUserPrivileges' })
export type SecurityManageUserPrivileges = z.infer<typeof SecurityManageUserPrivileges>

export const SecurityApplicationGlobalUserPrivileges = z.object({
  manage: SecurityManageUserPrivileges
}).meta({ id: 'SecurityApplicationGlobalUserPrivileges' })
export type SecurityApplicationGlobalUserPrivileges = z.infer<typeof SecurityApplicationGlobalUserPrivileges>

export const SecurityWriteProfileGlobalUserPrivileges = z.object({
  write: SecurityManageUserPrivileges.describe('The applications for which user profile data can be written. Absent when the `profile` section is present but grants no privileges.').optional()
}).meta({ id: 'SecurityWriteProfileGlobalUserPrivileges' })
export type SecurityWriteProfileGlobalUserPrivileges = z.infer<typeof SecurityWriteProfileGlobalUserPrivileges>

export const SecurityManageRolesIndexPermissions = z.object({
  names: z.array(z.string()).describe('A list of indices (or index name patterns) that the owners of the role can manage roles for.'),
  privileges: z.array(z.string()).describe('The index privileges that the managed roles are allowed to grant on the specified indices.')
}).meta({ id: 'SecurityManageRolesIndexPermissions' })
export type SecurityManageRolesIndexPermissions = z.infer<typeof SecurityManageRolesIndexPermissions>

export const SecurityManageRolesPrivileges = z.object({
  indices: z.array(SecurityManageRolesIndexPermissions)
}).meta({ id: 'SecurityManageRolesPrivileges' })
export type SecurityManageRolesPrivileges = z.infer<typeof SecurityManageRolesPrivileges>

export const SecurityManageRolesGlobalUserPrivileges = z.object({
  manage: SecurityManageRolesPrivileges.describe('The index-scoped role management privileges. Absent when the `role` section is present but grants no privileges.').optional()
}).meta({ id: 'SecurityManageRolesGlobalUserPrivileges' })
export type SecurityManageRolesGlobalUserPrivileges = z.infer<typeof SecurityManageRolesGlobalUserPrivileges>

export const SecurityGlobalPrivilege = z.object({
  application: SecurityApplicationGlobalUserPrivileges.optional(),
  profile: SecurityWriteProfileGlobalUserPrivileges.describe('A privilege that grants the ability to write the `data` and `access` sections of user profiles for the specified applications.').optional(),
  role: SecurityManageRolesGlobalUserPrivileges.describe('A privilege that grants the ability to manage roles that are scoped to the specified indices.').optional()
}).meta({ id: 'SecurityGlobalPrivilege' })
export type SecurityGlobalPrivilege = z.infer<typeof SecurityGlobalPrivilege>

export const SecurityRemoteUserIndicesPrivileges = z.object({
  clusters: z.array(z.string()),
  field_security: z.array(z.lazy(() => SecurityFieldSecurity)).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.array(z.lazy(() => SecurityIndicesPrivilegesQuery)).describe('Search queries that define the documents the user has access to. A document within the specified indices must match these queries for it to be accessible by the owners of the role.').optional(),
  allow_restricted_indices: z.boolean().describe('Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.')
}).meta({ id: 'SecurityRemoteUserIndicesPrivileges' })
export type SecurityRemoteUserIndicesPrivileges = z.infer<typeof SecurityRemoteUserIndicesPrivileges>

export const SecurityUserIndicesPrivileges = z.object({
  field_security: z.array(z.lazy(() => SecurityFieldSecurity)).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.array(z.lazy(() => SecurityIndicesPrivilegesQuery)).describe('Search queries that define the documents the user has access to. A document within the specified indices must match these queries for it to be accessible by the owners of the role.').optional(),
  allow_restricted_indices: z.boolean().describe('Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.')
}).meta({ id: 'SecurityUserIndicesPrivileges' })
export type SecurityUserIndicesPrivileges = z.infer<typeof SecurityUserIndicesPrivileges>

/**
 * Get user privileges.
 *
 * Get the security privileges for the logged in user.
 * All users can use this API, but only to determine their own privileges.
 * To check the privileges of other users, you must use the run as feature.
 * To check whether a user has a specific list of privileges, use the has privileges API.
 */
export const SecurityGetUserPrivilegesRequest = z.object({
}).meta({ id: 'SecurityGetUserPrivilegesRequest' })
export type SecurityGetUserPrivilegesRequest = z.infer<typeof SecurityGetUserPrivilegesRequest>

export const SecurityGetUserPrivilegesResponse = z.object({
  applications: z.array(z.lazy(() => SecurityApplicationPrivileges)),
  cluster: z.array(z.string()),
  remote_cluster: z.array(z.lazy(() => SecurityRemoteClusterPrivileges)).optional(),
  global: z.array(z.lazy(() => SecurityGlobalPrivilege)),
  indices: z.array(SecurityUserIndicesPrivileges),
  remote_indices: z.array(SecurityRemoteUserIndicesPrivileges).optional(),
  run_as: z.array(z.string())
}).meta({ id: 'SecurityGetUserPrivilegesResponse' })
export type SecurityGetUserPrivilegesResponse = z.infer<typeof SecurityGetUserPrivilegesResponse>
