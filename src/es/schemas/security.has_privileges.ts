/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { IndexName, Indices, Name, Username } from './_types.js'
import { SecurityClusterPrivilege, SecurityIndexPrivilege } from './security.js'

export const SecurityHasPrivilegesApplicationPrivilegesCheck = z.object({
  application: z.string().describe('The name of the application.'),
  privileges: z.array(z.string()).describe('A list of the privileges that you want to check for the specified resources. It may be either application privilege names or the names of actions that are granted by those privileges'),
  resources: z.array(z.string()).describe('A list of resource names against which the privileges should be checked.')
}).meta({ id: 'SecurityHasPrivilegesApplicationPrivilegesCheck' })
export type SecurityHasPrivilegesApplicationPrivilegesCheck = z.infer<typeof SecurityHasPrivilegesApplicationPrivilegesCheck>

export const SecurityHasPrivilegesPrivileges = z.record(z.string(), z.boolean()).meta({ id: 'SecurityHasPrivilegesPrivileges' })
export type SecurityHasPrivilegesPrivileges = z.infer<typeof SecurityHasPrivilegesPrivileges>

export const SecurityHasPrivilegesResourcePrivileges = z.record(z.lazy(() => Name), SecurityHasPrivilegesPrivileges).meta({ id: 'SecurityHasPrivilegesResourcePrivileges' })
export type SecurityHasPrivilegesResourcePrivileges = z.infer<typeof SecurityHasPrivilegesResourcePrivileges>

export const SecurityHasPrivilegesApplicationsPrivileges = z.record(z.lazy(() => Name), SecurityHasPrivilegesResourcePrivileges).meta({ id: 'SecurityHasPrivilegesApplicationsPrivileges' })
export type SecurityHasPrivilegesApplicationsPrivileges = z.infer<typeof SecurityHasPrivilegesApplicationsPrivileges>

export const SecurityHasPrivilegesIndexPrivilegesCheck = z.object({
  names: z.lazy(() => Indices).describe('A list of indices.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('A list of the privileges that you want to check for the specified indices.'),
  allow_restricted_indices: z.boolean().describe('This needs to be set to `true` (default is `false`) if using wildcards or regexps for patterns that cover restricted indices. Implicitly, restricted indices do not match index patterns because restricted indices usually have limited privileges and including them in pattern tests would render most such tests false. If restricted indices are explicitly included in the names list, privileges will be checked against them regardless of the value of `allow_restricted_indices`.').optional()
}).meta({ id: 'SecurityHasPrivilegesIndexPrivilegesCheck' })
export type SecurityHasPrivilegesIndexPrivilegesCheck = z.infer<typeof SecurityHasPrivilegesIndexPrivilegesCheck>

/**
 * Check user privileges.
 *
 * Determine whether the specified user has a specified list of privileges.
 * All users can use this API, but only to determine their own privileges.
 * To check the privileges of other users, you must use the run as feature.
 */
export const SecurityHasPrivilegesRequest = z.object({
  user: z.lazy(() => Name).describe('Username').optional().meta({ found_in: 'path' }),
  application: z.array(SecurityHasPrivilegesApplicationPrivilegesCheck).optional().meta({ found_in: 'body' }),
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)).describe('A list of the cluster privileges that you want to check.').optional().meta({ found_in: 'body' }),
  index: z.array(SecurityHasPrivilegesIndexPrivilegesCheck).optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityHasPrivilegesRequest' })
export type SecurityHasPrivilegesRequest = z.infer<typeof SecurityHasPrivilegesRequest>

export const SecurityHasPrivilegesResponse = z.object({
  application: SecurityHasPrivilegesApplicationsPrivileges,
  cluster: z.record(z.string(), z.boolean()),
  has_all_requested: z.boolean(),
  index: z.record(z.lazy(() => IndexName), SecurityHasPrivilegesPrivileges),
  username: z.lazy(() => Username)
}).meta({ id: 'SecurityHasPrivilegesResponse' })
export type SecurityHasPrivilegesResponse = z.infer<typeof SecurityHasPrivilegesResponse>
