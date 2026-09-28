/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Metadata, Namespace, Service } from './_types.js'
import { SecurityApplicationPrivileges, SecurityClusterPrivilege } from './security.js'
import { SecurityIndicesPrivileges } from './security.put_role.js'

export const SecurityRestrictionWorkflow = z.union([z.enum(['search_application_query']), z.string()]).meta({ id: 'SecurityRestrictionWorkflow' })
export type SecurityRestrictionWorkflow = z.infer<typeof SecurityRestrictionWorkflow>

export const SecurityRestriction = z.object({
  workflows: z.array(SecurityRestrictionWorkflow).describe('A list of workflows to which the API key is restricted. NOTE: In order to use a role restriction, an API key must be created with a single role descriptor.')
}).meta({ id: 'SecurityRestriction' })
export type SecurityRestriction = z.infer<typeof SecurityRestriction>

export const SecurityRoleDescriptorRead = z.object({
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)).describe('A list of cluster privileges. These privileges define the cluster level actions that API keys are able to execute.'),
  indices: z.array(z.lazy(() => SecurityIndicesPrivileges)).describe('A list of indices permissions entries.'),
  applications: z.array(z.lazy(() => SecurityApplicationPrivileges)).describe('A list of application privilege entries').optional(),
  metadata: z.lazy(() => Metadata).describe('Optional meta-data. Within the metadata object, keys that begin with `_` are reserved for system usage.').optional(),
  run_as: z.array(z.string()).describe('A list of users that the API keys can impersonate. NOTE: In Elastic Cloud Serverless, the run-as feature is disabled. For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected.').optional(),
  description: z.string().describe('Optional description of the role descriptor').optional(),
  restriction: z.lazy(() => SecurityRestriction).describe('Restriction for when the role descriptor is allowed to be effective.').optional(),
  transient_metadata: z.record(z.string(), z.any()).optional()
}).meta({ id: 'SecurityRoleDescriptorRead' })
export type SecurityRoleDescriptorRead = z.infer<typeof SecurityRoleDescriptorRead>

export const SecurityGetServiceAccountsBuiltInServiceAccount = z.object({
  type: z.literal('built_in').describe('The account ships with Elasticsearch.'),
  role_descriptor: SecurityRoleDescriptorRead.describe('The role descriptor declared for the account in the Elasticsearch distribution.')
}).meta({ id: 'SecurityGetServiceAccountsBuiltInServiceAccount' })
export type SecurityGetServiceAccountsBuiltInServiceAccount = z.infer<typeof SecurityGetServiceAccountsBuiltInServiceAccount>

export const SecurityGetServiceAccountsServiceAccountType = z.enum(['built_in', 'user_managed']).meta({ id: 'SecurityGetServiceAccountsServiceAccountType' })
export type SecurityGetServiceAccountsServiceAccountType = z.infer<typeof SecurityGetServiceAccountsServiceAccountType>

/**
 * Get service accounts.
 *
 * Get a list of service accounts that match the provided path parameters.
 * Built-in service accounts ship with Elasticsearch in the `elastic` namespace; user-managed service accounts are created with the put user-managed service account API.
 *
 * NOTE: When `type` is omitted, a request without a namespace reports built-in accounts only, which preserves the response of a whole-cluster listing.
 * A request scoped to a namespace reports both kinds, so an account you created is found without naming its kind.
 */
export const SecurityGetServiceAccountsRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The name of the namespace. Omit this parameter to retrieve information about all service accounts. If you omit this parameter, you must also omit the `service` parameter.').optional().meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The service name. Omit this parameter to retrieve information about all service accounts that belong to the specified `namespace`.').optional().meta({ found_in: 'path' }),
  type: z.union([SecurityGetServiceAccountsServiceAccountType, z.array(SecurityGetServiceAccountsServiceAccountType)]).describe('A comma-separated list of the kinds of service account to return. If it is omitted, it defaults to `built_in` when no namespace is given and to `built_in,user_managed` otherwise.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityGetServiceAccountsRequest' })
export type SecurityGetServiceAccountsRequest = z.infer<typeof SecurityGetServiceAccountsRequest>

export const SecurityGetServiceAccountsUserManagedServiceAccount = z.object({
  roles: z.array(z.string()).describe('The names of the roles granted to the account, as they were given when it was created. They are resolved when the account authenticates.'),
  enabled: z.boolean().describe('Whether the account can authenticate.')
}).meta({ id: 'SecurityGetServiceAccountsUserManagedServiceAccount' })
export type SecurityGetServiceAccountsUserManagedServiceAccount = z.infer<typeof SecurityGetServiceAccountsUserManagedServiceAccount>

/**
 * The two kinds of service account describe their privileges differently.
 * A built-in account includes its role descriptor. A user-managed account includes its role names and whether it is enabled.
 */
export const SecurityGetServiceAccountsServiceAccountInfo = z.union([SecurityGetServiceAccountsBuiltInServiceAccount, SecurityGetServiceAccountsUserManagedServiceAccount]).meta({ id: 'SecurityGetServiceAccountsServiceAccountInfo' })
export type SecurityGetServiceAccountsServiceAccountInfo = z.infer<typeof SecurityGetServiceAccountsServiceAccountInfo>

export const SecurityGetServiceAccountsResponse = z.record(z.string(), SecurityGetServiceAccountsServiceAccountInfo).meta({ id: 'SecurityGetServiceAccountsResponse' })
export type SecurityGetServiceAccountsResponse = z.infer<typeof SecurityGetServiceAccountsResponse>
