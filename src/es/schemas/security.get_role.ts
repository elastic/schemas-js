/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Fields, Id, IndexName, Metadata, Names, ScriptLanguage } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { SecurityApplicationPrivileges, SecurityClusterPrivilege, SecurityIndexPrivilege, SecurityRoleTemplate } from './security.js'

export const SecurityFieldSecurity = z.object({
  except: z.lazy(() => Fields).optional(),
  grant: z.lazy(() => Fields).optional()
}).meta({ id: 'SecurityFieldSecurity' })
export type SecurityFieldSecurity = z.infer<typeof SecurityFieldSecurity>

export const SecurityRoleTemplateInlineQuery = z.union([z.string(), z.lazy(() => QueryDslQueryContainer)]).meta({ id: 'SecurityRoleTemplateInlineQuery' })
export type SecurityRoleTemplateInlineQuery = z.infer<typeof SecurityRoleTemplateInlineQuery>

export const SecurityRoleTemplateScript = z.object({
  source: SecurityRoleTemplateInlineQuery.optional(),
  id: z.lazy(() => Id).describe('The `id` for a stored script.').optional(),
  params: z.record(z.string(), z.any()).describe('Specifies any named parameters that are passed into the script as variables. Use parameters instead of hard-coded values to decrease compile time.').optional(),
  lang: z.lazy(() => ScriptLanguage).describe('Specifies the language the script is written in.').optional(),
  options: z.record(z.string(), z.string()).optional()
}).meta({ id: 'SecurityRoleTemplateScript' })
export type SecurityRoleTemplateScript = z.infer<typeof SecurityRoleTemplateScript>

export const SecurityRoleTemplateQuery = z.object({
  template: z.union([SecurityRoleTemplateScript, SecurityRoleTemplateInlineQuery]).describe('When you create a role, you can specify a query that defines the document level security permissions. You can optionally use Mustache templates in the role query to insert the username of the current authenticated user into the role. Like other places in Elasticsearch that support templating or scripting, you can specify inline, stored, or file-based templates and define custom parameters. You access the details for the current authenticated user through the _user parameter.').optional()
}).meta({ id: 'SecurityRoleTemplateQuery' })
export type SecurityRoleTemplateQuery = z.infer<typeof SecurityRoleTemplateQuery>

/**
 * While creating or updating a role you can provide either a JSON structure or a string to the API.
 * However, the response provided by Elasticsearch will only be string with a json-as-text content.
 *
 * Since this is embedded in `IndicesPrivileges`, the same structure is used for clarity in both contexts.
 */
export const SecurityIndicesPrivilegesQuery = z.union([z.string(), z.lazy(() => QueryDslQueryContainer), SecurityRoleTemplateQuery]).meta({ id: 'SecurityIndicesPrivilegesQuery' })
export type SecurityIndicesPrivilegesQuery = z.infer<typeof SecurityIndicesPrivilegesQuery>

/**
 * Read-side variant of `IndicesPrivileges` returned by the get role API.
 * Carries the `implicitly_granted` marker that is set on entries contributed by
 * a registered `ImplicitPrivilegesProvider` when `include_implicit` is `true`.
 */
export const SecurityGetRoleIndicesPrivilegesRead = z.object({
  implicitly_granted: z.boolean().describe('Set to `true` on entries that were contributed by a registered `ImplicitPrivilegesProvider` rather than explicitly stored on the role. Only present when the get role API is called with `include_implicit=true`. The put role API rejects this field, so clients must not echo it back on a GET-then-PUT round-trip.').optional(),
  field_security: z.lazy(() => SecurityFieldSecurity).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.lazy(() => SecurityIndicesPrivilegesQuery).describe('A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.').optional()
}).meta({ id: 'SecurityGetRoleIndicesPrivilegesRead' })
export type SecurityGetRoleIndicesPrivilegesRead = z.infer<typeof SecurityGetRoleIndicesPrivilegesRead>

/**
 * Get roles.
 *
 * Get roles in the native realm.
 * The role management APIs are generally the preferred way to manage roles, rather than using file-based role management.
 * The get roles API cannot retrieve roles that are defined in roles files.
 */
export const SecurityGetRoleRequest = z.object({
  name: z.lazy(() => Names).describe('The name of the role. You can specify multiple roles as a comma-separated list. If you do not specify this parameter, the API returns information about all roles.').optional().meta({ found_in: 'path' }),
  include_implicit: z.boolean().describe('If `true`, include privileges that are implicitly granted by registered `ImplicitPrivilegesProviders` alongside the explicitly configured privileges. Each implicit entry in the response is annotated with `implicitly_granted: true`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityGetRoleRequest' })
export type SecurityGetRoleRequest = z.infer<typeof SecurityGetRoleRequest>

export const SecurityGetRoleRole = z.object({
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)),
  indices: z.array(SecurityGetRoleIndicesPrivilegesRead),
  metadata: z.lazy(() => Metadata),
  description: z.string().optional(),
  run_as: z.array(z.string()).optional(),
  transient_metadata: z.record(z.string(), z.any()).optional(),
  applications: z.array(z.lazy(() => SecurityApplicationPrivileges)),
  role_templates: z.array(z.lazy(() => SecurityRoleTemplate)).optional(),
  global: z.record(z.string(), z.record(z.string(), z.record(z.string(), z.array(z.string())))).optional()
}).meta({ id: 'SecurityGetRoleRole' })
export type SecurityGetRoleRole = z.infer<typeof SecurityGetRoleRole>

export const SecurityGetRoleResponse = z.record(z.string(), SecurityGetRoleRole).meta({ id: 'SecurityGetRoleResponse' })
export type SecurityGetRoleResponse = z.infer<typeof SecurityGetRoleResponse>
