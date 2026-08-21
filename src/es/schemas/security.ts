/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, ErrorCause, Id, IndexName, Metadata, Name, Names, Script, ScriptSource, SequenceNumber, SortResults, Username, integer, long } from './_types.js'
import type { ScriptSourceShape } from './_types.js'
import { IndicesIndexSettings } from './indices.js'
import { SecurityFieldSecurity, SecurityIndicesPrivilegesQuery } from './security.get_role.js'
import { SecurityRestriction } from './security.get_service_accounts.js'
import { SecurityIndicesPrivileges } from './security.put_role.js'
import { SecurityUserProfileUser } from './security.suggest_user_profiles.js'

export const SecurityReplicationAccess = z.object({
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  allow_restricted_indices: z.boolean().describe('This needs to be set to true if the patterns in the names field should cover system indices.').optional()
}).meta({ id: 'SecurityReplicationAccess' })
export type SecurityReplicationAccess = z.infer<typeof SecurityReplicationAccess>

export const SecuritySearchAccess = z.object({
  field_security: z.lazy(() => SecurityFieldSecurity).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  query: z.lazy(() => SecurityIndicesPrivilegesQuery).describe('A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.').optional()
}).meta({ id: 'SecuritySearchAccess' })
export type SecuritySearchAccess = z.infer<typeof SecuritySearchAccess>

export const SecurityAccess = z.object({
  replication: z.array(SecurityReplicationAccess).describe('A list of indices permission entries for cross-cluster replication.').optional(),
  search: z.array(SecuritySearchAccess).describe('A list of indices permission entries for cross-cluster search.').optional()
}).meta({ id: 'SecurityAccess' })
export type SecurityAccess = z.infer<typeof SecurityAccess>

export const SecurityApiKeyType = z.enum(['rest', 'cross_cluster']).meta({ id: 'SecurityApiKeyType' })
export type SecurityApiKeyType = z.infer<typeof SecurityApiKeyType>

export const SecurityClusterPrivilege = z.union([z.enum(['all', 'cancel_task', 'create_snapshot', 'cross_cluster_replication', 'cross_cluster_search', 'delegate_pki', 'grant_api_key', 'manage', 'manage_api_key', 'manage_autoscaling', 'manage_behavioral_analytics', 'manage_ccr', 'manage_data_frame_transforms', 'manage_data_stream_global_retention', 'manage_enrich', 'manage_esql', 'manage_ilm', 'manage_index_templates', 'manage_inference', 'manage_ingest_pipelines', 'manage_logstash_pipelines', 'manage_ml', 'manage_oidc', 'manage_own_api_key', 'manage_pipeline', 'manage_reindex', 'manage_rollup', 'manage_saml', 'manage_search_application', 'manage_search_query_rules', 'manage_search_synonyms', 'manage_security', 'manage_service_account', 'manage_slm', 'manage_token', 'manage_transform', 'manage_user_profile', 'manage_watcher', 'monitor', 'monitor_data_frame_transforms', 'monitor_data_stream_global_retention', 'monitor_enrich', 'monitor_esql', 'monitor_inference', 'monitor_ml', 'monitor_reindex', 'monitor_rollup', 'monitor_snapshot', 'monitor_stats', 'monitor_text_structure', 'monitor_transform', 'monitor_watcher', 'none', 'post_behavioral_analytics_event', 'read_ccr', 'read_fleet_secrets', 'read_ilm', 'read_pipeline', 'read_security', 'read_slm', 'transport_client', 'write_connector_secrets', 'write_fleet_secrets', 'read_project_routing', 'manage_project_routing']), z.string()]).meta({ id: 'SecurityClusterPrivilege' })
export type SecurityClusterPrivilege = z.infer<typeof SecurityClusterPrivilege>

export const SecurityIndexPrivilege = z.union([z.enum(['all', 'auto_configure', 'create', 'create_doc', 'create_index', 'create_view', 'cross_cluster_replication', 'cross_cluster_replication_internal', 'delete', 'delete_index', 'delete_view', 'index', 'maintenance', 'manage', 'manage_data_stream_lifecycle', 'manage_follow_index', 'manage_ilm', 'manage_leader_index', 'manage_view', 'monitor', 'none', 'read', 'read_cross_cluster', 'read_view_metadata', 'view_index_metadata', 'write']), z.string()]).meta({ id: 'SecurityIndexPrivilege' })
export type SecurityIndexPrivilege = z.infer<typeof SecurityIndexPrivilege>

/** The subset of index level privileges that can be defined for remote clusters. */
export const SecurityRemoteIndicesPrivileges = z.object({
  clusters: z.lazy(() => Names).describe('A list of cluster aliases to which the permissions in this entry apply.'),
  field_security: z.lazy(() => SecurityFieldSecurity).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.lazy(() => SecurityIndicesPrivilegesQuery).describe('A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.').optional()
}).meta({ id: 'SecurityRemoteIndicesPrivileges' })
export type SecurityRemoteIndicesPrivileges = z.infer<typeof SecurityRemoteIndicesPrivileges>

export const SecurityDataSourcePrivilege = z.union([z.enum(['create', 'delete', 'read_metadata', 'read', 'manage']), z.string()]).meta({ id: 'SecurityDataSourcePrivilege' })
export type SecurityDataSourcePrivilege = z.infer<typeof SecurityDataSourcePrivilege>

export const SecurityDataSourcePrivileges = z.object({
  names: z.array(z.string()).describe('A list of data source names or wildcard patterns to which the permissions in this entry apply.'),
  privileges: z.array(SecurityDataSourcePrivilege).describe('The data source privileges that owners of the role have for the specified data sources.')
}).meta({ id: 'SecurityDataSourcePrivileges' })
export type SecurityDataSourcePrivileges = z.infer<typeof SecurityDataSourcePrivileges>

export const SecurityApplicationPrivileges = z.object({
  application: z.string().describe('The name of the application to which this entry applies.'),
  privileges: z.array(z.string()).describe('A list of strings, where each element is the name of an application privilege or action.'),
  resources: z.array(z.string()).describe('A list resources to which the privileges are applied.')
}).meta({ id: 'SecurityApplicationPrivileges' })
export type SecurityApplicationPrivileges = z.infer<typeof SecurityApplicationPrivileges>

export const SecurityRoleDescriptor = z.object({
  cluster: z.array(z.lazy(() => SecurityClusterPrivilege)).describe('A list of cluster privileges. These privileges define the cluster level actions that API keys are able to execute.').optional(),
  indices: z.array(z.lazy(() => SecurityIndicesPrivileges)).describe('A list of indices permissions entries.').optional(),
  index: z.array(z.lazy(() => SecurityIndicesPrivileges)).describe('A list of indices permissions entries.').optional(),
  applications: z.array(z.lazy(() => SecurityApplicationPrivileges)).describe('A list of application privilege entries').optional(),
  metadata: z.lazy(() => Metadata).describe('Optional meta-data. Within the metadata object, keys that begin with `_` are reserved for system usage.').optional(),
  run_as: z.array(z.string()).describe('A list of users that the API keys can impersonate. NOTE: In Elastic Cloud Serverless, the run-as feature is disabled. For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected.').optional(),
  description: z.string().describe('Optional description of the role descriptor').optional(),
  restriction: z.lazy(() => SecurityRestriction).describe('Restriction for when the role descriptor is allowed to be effective.').optional(),
  transient_metadata: z.record(z.string(), z.any()).optional()
}).meta({ id: 'SecurityRoleDescriptor' })
export type SecurityRoleDescriptor = z.infer<typeof SecurityRoleDescriptor>

export const SecurityApiKey = z.object({
  id: z.lazy(() => Id).describe('Id for the API key'),
  name: z.lazy(() => Name).describe('Name of the API key.'),
  type: SecurityApiKeyType.describe('The type of the API key (e.g. `rest` or `cross_cluster`).'),
  creation: z.lazy(() => EpochTime).describe('Creation time for the API key in milliseconds.'),
  expiration: z.lazy(() => EpochTime).describe('Expiration time for the API key in milliseconds.').optional(),
  invalidated: z.boolean().describe('Invalidation status for the API key. If the key has been invalidated, it has a value of `true`. Otherwise, it is `false`.'),
  invalidation: z.lazy(() => EpochTime).describe('If the key has been invalidated, invalidation time in milliseconds.').optional(),
  username: z.lazy(() => Username).describe('Principal for which this API key was created'),
  realm: z.string().describe('Realm name of the principal for which this API key was created.'),
  realm_type: z.string().describe('Realm type of the principal for which this API key was created').optional(),
  metadata: z.lazy(() => Metadata).describe('Metadata of the API key'),
  role_descriptors: z.record(z.string(), SecurityRoleDescriptor).describe('The role descriptors assigned to this API key when it was created or last updated. An empty role descriptor means the API key inherits the owner user’s permissions.').optional(),
  limited_by: z.array(z.record(z.string(), SecurityRoleDescriptor)).describe('The owner user’s permissions associated with the API key. It is a point-in-time snapshot captured at creation and subsequent updates. An API key’s effective permissions are an intersection of its assigned privileges and the owner user’s permissions.').optional(),
  access: SecurityAccess.describe('The access granted to cross-cluster API keys. The access is composed of permissions for cross cluster search and cross cluster replication. At least one of them must be specified. When specified, the new access assignment fully replaces the previously assigned access.').optional(),
  profile_uid: z.string().describe('The profile uid for the API key owner principal, if requested and if it exists').optional(),
  _sort: z.lazy(() => SortResults).describe('Sorting values when using the `sort` parameter with the `security.query_api_keys` API.').optional()
}).meta({ id: 'SecurityApiKey' })
export type SecurityApiKey = z.infer<typeof SecurityApiKey>

export const SecurityBulkError = z.object({
  count: z.lazy(() => integer).describe('The number of errors'),
  details: z.record(z.string(), z.lazy(() => ErrorCause)).describe('Details about the errors, keyed by role name')
}).meta({ id: 'SecurityBulkError' })
export type SecurityBulkError = z.infer<typeof SecurityBulkError>

export const SecurityClusterNode = z.object({
  name: z.lazy(() => Name)
}).meta({ id: 'SecurityClusterNode' })
export type SecurityClusterNode = z.infer<typeof SecurityClusterNode>

export const SecurityCreatedStatus = z.object({
  created: z.boolean()
}).meta({ id: 'SecurityCreatedStatus' })
export type SecurityCreatedStatus = z.infer<typeof SecurityCreatedStatus>

export const SecurityIndicesPrivilegesBase = z.object({
  field_security: z.lazy(() => SecurityFieldSecurity).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.lazy(() => SecurityIndicesPrivilegesQuery).describe('A search query that defines the documents the owners of the role have access to. A document within the specified indices must match this query for it to be accessible by the owners of the role.').optional()
}).meta({ id: 'SecurityIndicesPrivilegesBase' })
export type SecurityIndicesPrivilegesBase = z.infer<typeof SecurityIndicesPrivilegesBase>

export const SecurityTemplateFormat = z.enum(['string', 'json']).meta({ id: 'SecurityTemplateFormat' })
export type SecurityTemplateFormat = z.infer<typeof SecurityTemplateFormat>

export const SecurityRoleTemplate = z.object({
  format: SecurityTemplateFormat.optional(),
  template: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)])
}).meta({ id: 'SecurityRoleTemplate' })
export type SecurityRoleTemplate = z.infer<typeof SecurityRoleTemplate>

export const SecuritySecuritySettings = z.object({
  index: z.lazy(() => IndicesIndexSettings).optional()
}).meta({ id: 'SecuritySecuritySettings' })
export type SecuritySecuritySettings = z.infer<typeof SecuritySecuritySettings>

export const SecurityUserProfileId = z.string().meta({ id: 'SecurityUserProfileId' })
export type SecurityUserProfileId = z.infer<typeof SecurityUserProfileId>

export const SecurityUser = z.object({
  email: z.union([z.string(), z.null()]).optional(),
  full_name: z.union([z.lazy(() => Name), z.null()]).optional(),
  metadata: z.lazy(() => Metadata),
  roles: z.array(z.string()),
  username: z.lazy(() => Username),
  enabled: z.boolean(),
  profile_uid: z.lazy(() => SecurityUserProfileId).optional()
}).meta({ id: 'SecurityUser' })
export type SecurityUser = z.infer<typeof SecurityUser>

export const SecurityUserIndicesPrivilegesBase = z.object({
  field_security: z.array(z.lazy(() => SecurityFieldSecurity)).describe('The document fields that the owners of the role have read access to.').optional(),
  names: z.union([z.lazy(() => IndexName), z.array(z.lazy(() => IndexName))]).describe('A list of indices (or index name patterns) to which the permissions in this entry apply.'),
  privileges: z.array(z.lazy(() => SecurityIndexPrivilege)).describe('The index level privileges that owners of the role have on the specified indices.'),
  query: z.array(z.lazy(() => SecurityIndicesPrivilegesQuery)).describe('Search queries that define the documents the user has access to. A document within the specified indices must match these queries for it to be accessible by the owners of the role.').optional(),
  allow_restricted_indices: z.boolean().describe('Set to `true` if using wildcard or regular expressions for patterns that cover restricted indices. Implicitly, restricted indices have limited privileges that can cause pattern tests to fail. If restricted indices are explicitly included in the `names` list, Elasticsearch checks privileges against these indices regardless of the value set for `allow_restricted_indices`.')
}).meta({ id: 'SecurityUserIndicesPrivilegesBase' })
export type SecurityUserIndicesPrivilegesBase = z.infer<typeof SecurityUserIndicesPrivilegesBase>

export const SecurityUserProfileHitMetadata = z.object({
  _primary_term: z.lazy(() => long),
  _seq_no: z.lazy(() => SequenceNumber)
}).meta({ id: 'SecurityUserProfileHitMetadata' })
export type SecurityUserProfileHitMetadata = z.infer<typeof SecurityUserProfileHitMetadata>

export const SecurityUserProfileWithMetadata = z.object({
  uid: z.lazy(() => SecurityUserProfileId),
  user: SecurityUserProfileUser,
  data: z.record(z.string(), z.any()),
  labels: z.record(z.string(), z.any()),
  enabled: z.boolean().optional(),
  last_synchronized: z.lazy(() => long),
  _doc: SecurityUserProfileHitMetadata
}).meta({ id: 'SecurityUserProfileWithMetadata' })
export type SecurityUserProfileWithMetadata = z.infer<typeof SecurityUserProfileWithMetadata>
