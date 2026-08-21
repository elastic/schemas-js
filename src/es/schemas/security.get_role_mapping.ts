/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Metadata, Names } from './_types.js'
import { SecurityRoleTemplate } from './security.js'
import { SecurityRoleMappingRule } from './security.put_role_mapping.js'

export const SecurityRoleMapping = z.object({
  enabled: z.boolean(),
  metadata: z.lazy(() => Metadata),
  roles: z.array(z.string()).optional(),
  role_templates: z.array(z.lazy(() => SecurityRoleTemplate)).optional(),
  rules: z.lazy(() => SecurityRoleMappingRule)
}).meta({ id: 'SecurityRoleMapping' })
export type SecurityRoleMapping = z.infer<typeof SecurityRoleMapping>

/**
 * Get role mappings.
 *
 * Role mappings define which roles are assigned to each user.
 * The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files.
 * The get role mappings API cannot retrieve role mappings that are defined in role mapping files.
 */
export const SecurityGetRoleMappingRequest = z.object({
  name: z.lazy(() => Names).describe('The distinct name that identifies the role mapping. The name is used solely as an identifier to facilitate interaction via the API; it does not affect the behavior of the mapping in any way. You can specify multiple mapping names as a comma-separated list. If you do not specify this parameter, the API returns information about all role mappings.').optional().meta({ found_in: 'path' })
}).meta({ id: 'SecurityGetRoleMappingRequest' })
export type SecurityGetRoleMappingRequest = z.infer<typeof SecurityGetRoleMappingRequest>

export const SecurityGetRoleMappingResponse = z.record(z.string(), SecurityRoleMapping).meta({ id: 'SecurityGetRoleMappingResponse' })
export type SecurityGetRoleMappingResponse = z.infer<typeof SecurityGetRoleMappingResponse>
