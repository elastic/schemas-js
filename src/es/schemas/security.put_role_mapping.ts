/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Field, FieldValue, Metadata, Name, Refresh } from './_types.js'
import { SecurityCreatedStatus, SecurityRoleTemplate } from './security.js'

const SecurityRoleMappingRuleExclusiveProps = z.union([z.object({ any: z.array(z.lazy(() => SecurityRoleMappingRule)) }), z.object({ all: z.array(z.lazy(() => SecurityRoleMappingRule)) }), z.object({ field: z.record(z.lazy(() => Field), z.union([z.lazy(() => FieldValue), z.array(z.lazy(() => FieldValue))])) }), z.object({ except: z.lazy(() => SecurityRoleMappingRule) })])

export interface SecurityRoleMappingRuleShape {
  any?: SecurityRoleMappingRule[] | undefined
  all?: SecurityRoleMappingRule[] | undefined
  field?: Record<Field, FieldValue | FieldValue[]> | undefined
  except?: SecurityRoleMappingRule | undefined
}
export const SecurityRoleMappingRule: z.ZodType<SecurityRoleMappingRuleShape> = SecurityRoleMappingRuleExclusiveProps.meta({ id: 'SecurityRoleMappingRule' })
export type SecurityRoleMappingRule = z.infer<typeof SecurityRoleMappingRule>

/**
 * Create or update role mappings.
 *
 * Role mappings define which roles are assigned to each user.
 * Each mapping has rules that identify users and a list of roles that are granted to those users.
 * The role mapping APIs are generally the preferred way to manage role mappings rather than using role mapping files. The create or update role mappings API cannot update role mappings that are defined in role mapping files.
 *
 * NOTE: This API does not create roles. Rather, it maps users to existing roles.
 * Roles can be created by using the create or update roles API or roles files.
 *
 * **Role templates**
 *
 * The most common use for role mappings is to create a mapping from a known value on the user to a fixed role name.
 * For example, all users in the `cn=admin,dc=example,dc=com` LDAP group should be given the superuser role in Elasticsearch.
 * The `roles` field is used for this purpose.
 *
 * For more complex needs, it is possible to use Mustache templates to dynamically determine the names of the roles that should be granted to the user.
 * The `role_templates` field is used for this purpose.
 *
 * NOTE: To use role templates successfully, the relevant scripting feature must be enabled.
 * Otherwise, all attempts to create a role mapping with role templates fail.
 *
 * All of the user fields that are available in the role mapping rules are also available in the role templates.
 * Thus it is possible to assign a user to a role that reflects their username, their groups, or the name of the realm to which they authenticated.
 *
 * By default a template is evaluated to produce a single string that is the name of the role which should be assigned to the user.
 * If the format of the template is set to "json" then the template is expected to produce a JSON string or an array of JSON strings for the role names.
 */
export const SecurityPutRoleMappingRequest = z.object({
  name: z.lazy(() => Name).describe('The distinct name that identifies the role mapping. The name is used solely as an identifier to facilitate interaction via the API; it does not affect the behavior of the mapping in any way.').meta({ found_in: 'path' }),
  refresh: z.lazy(() => Refresh).describe('If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes.').optional().meta({ found_in: 'query' }),
  enabled: z.boolean().describe('Mappings that have `enabled` set to `false` are ignored when role mapping is performed.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Additional metadata that helps define which roles are assigned to each user. Within the metadata object, keys beginning with `_` are reserved for system usage.').optional().meta({ found_in: 'body' }),
  roles: z.array(z.string()).describe('A list of role names that are granted to the users that match the role mapping rules. Exactly one of `roles` or `role_templates` must be specified.').optional().meta({ found_in: 'body' }),
  role_templates: z.array(z.lazy(() => SecurityRoleTemplate)).describe('A list of Mustache templates that will be evaluated to determine the roles names that should granted to the users that match the role mapping rules. Exactly one of `roles` or `role_templates` must be specified.').optional().meta({ found_in: 'body' }),
  rules: z.lazy(() => SecurityRoleMappingRule).describe('The rules that determine which users should be matched by the mapping. A rule is a logical condition that is expressed by using a JSON DSL.').optional().meta({ found_in: 'body' }),
  run_as: z.array(z.string()).optional().meta({ found_in: 'body' })
}).meta({ id: 'SecurityPutRoleMappingRequest' })
export type SecurityPutRoleMappingRequest = z.infer<typeof SecurityPutRoleMappingRequest>

export const SecurityPutRoleMappingResponse = z.object({
  created: z.boolean().optional(),
  role_mapping: z.lazy(() => SecurityCreatedStatus)
}).meta({ id: 'SecurityPutRoleMappingResponse' })
export type SecurityPutRoleMappingResponse = z.infer<typeof SecurityPutRoleMappingResponse>
