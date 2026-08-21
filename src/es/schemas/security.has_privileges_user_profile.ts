/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ErrorCause, long } from './_types.js'
import { SecurityClusterPrivilege, SecurityUserProfileId } from './security.js'
import { SecurityHasPrivilegesApplicationPrivilegesCheck, SecurityHasPrivilegesIndexPrivilegesCheck } from './security.has_privileges.js'

export const SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors = z.object({
  count: z.lazy(() => long),
  details: z.record(z.lazy(() => SecurityUserProfileId), z.lazy(() => ErrorCause))
}).meta({ id: 'SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors' })
export type SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors = z.infer<typeof SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors>

export const SecurityHasPrivilegesUserProfilePrivilegesCheck = z.object({
  application: z.array(SecurityHasPrivilegesApplicationPrivilegesCheck).optional(),
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)).describe('A list of the cluster privileges that you want to check.').optional(),
  index: z.array(SecurityHasPrivilegesIndexPrivilegesCheck).optional()
}).meta({ id: 'SecurityHasPrivilegesUserProfilePrivilegesCheck' })
export type SecurityHasPrivilegesUserProfilePrivilegesCheck = z.infer<typeof SecurityHasPrivilegesUserProfilePrivilegesCheck>

/**
 * Check user profile privileges.
 *
 * Determine whether the users associated with the specified user profile IDs have all the requested privileges.
 *
 * NOTE: The user profile feature is designed only for use by Kibana and Elastic's Observability, Enterprise Search, and Elastic Security solutions. Individual users and external applications should not call this API directly.
 * Elastic reserves the right to change or remove this feature in future releases without prior notice.
 */
export const SecurityHasPrivilegesUserProfileRequest = z.object({
  uids: z.array(z.lazy(() => SecurityUserProfileId)).describe('A list of profile IDs. The privileges are checked for associated users of the profiles.').meta({ found_in: 'body' }),
  privileges: SecurityHasPrivilegesUserProfilePrivilegesCheck.describe('An object containing all the privileges to be checked.').meta({ found_in: 'body' })
}).meta({ id: 'SecurityHasPrivilegesUserProfileRequest' })
export type SecurityHasPrivilegesUserProfileRequest = z.infer<typeof SecurityHasPrivilegesUserProfileRequest>

export const SecurityHasPrivilegesUserProfileResponse = z.object({
  has_privilege_uids: z.array(z.lazy(() => SecurityUserProfileId)).describe('The subset of the requested profile IDs of the users that have all the requested privileges.'),
  errors: SecurityHasPrivilegesUserProfileHasPrivilegesUserProfileErrors.describe('The subset of the requested profile IDs for which an error was encountered. It does not include the missing profile IDs or the profile IDs of the users that do not have all the requested privileges. This field is absent if empty.').optional()
}).meta({ id: 'SecurityHasPrivilegesUserProfileResponse' })
export type SecurityHasPrivilegesUserProfileResponse = z.infer<typeof SecurityHasPrivilegesUserProfileResponse>
