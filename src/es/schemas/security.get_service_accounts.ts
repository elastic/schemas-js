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
  index: z.array(z.lazy(() => SecurityIndicesPrivileges)).describe('A list of indices permissions entries.'),
  applications: z.array(z.lazy(() => SecurityApplicationPrivileges)).describe('A list of application privilege entries').optional(),
  metadata: z.lazy(() => Metadata).describe('Optional meta-data. Within the metadata object, keys that begin with `_` are reserved for system usage.').optional(),
  run_as: z.array(z.string()).describe('A list of users that the API keys can impersonate. NOTE: In Elastic Cloud Serverless, the run-as feature is disabled. For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected.').optional(),
  description: z.string().describe('Optional description of the role descriptor').optional(),
  restriction: z.lazy(() => SecurityRestriction).describe('Restriction for when the role descriptor is allowed to be effective.').optional(),
  transient_metadata: z.record(z.string(), z.any()).optional()
}).meta({ id: 'SecurityRoleDescriptorRead' })
export type SecurityRoleDescriptorRead = z.infer<typeof SecurityRoleDescriptorRead>

/**
 * Get service accounts.
 *
 * Get a list of service accounts that match the provided path parameters.
 *
 * NOTE: Currently, only the `elastic/fleet-server` service account is available.
 */
export const SecurityGetServiceAccountsRequest = z.object({
  namespace: z.lazy(() => Namespace).describe('The name of the namespace. Omit this parameter to retrieve information about all service accounts. If you omit this parameter, you must also omit the `service` parameter.').optional().meta({ found_in: 'path' }),
  service: z.lazy(() => Service).describe('The service name. Omit this parameter to retrieve information about all service accounts that belong to the specified `namespace`.').optional().meta({ found_in: 'path' })
}).meta({ id: 'SecurityGetServiceAccountsRequest' })
export type SecurityGetServiceAccountsRequest = z.infer<typeof SecurityGetServiceAccountsRequest>

export const SecurityGetServiceAccountsRoleDescriptorWrapper = z.object({
  role_descriptor: SecurityRoleDescriptorRead
}).meta({ id: 'SecurityGetServiceAccountsRoleDescriptorWrapper' })
export type SecurityGetServiceAccountsRoleDescriptorWrapper = z.infer<typeof SecurityGetServiceAccountsRoleDescriptorWrapper>

export const SecurityGetServiceAccountsResponse = z.record(z.string(), SecurityGetServiceAccountsRoleDescriptorWrapper).meta({ id: 'SecurityGetServiceAccountsResponse' })
export type SecurityGetServiceAccountsResponse = z.infer<typeof SecurityGetServiceAccountsResponse>
