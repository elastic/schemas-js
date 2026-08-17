/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, IndexName, integer, long } from './_types.js'
import { ConnectorSyncJobTriggerMethod } from './connector.sync_job_post.js'
import { ConnectorConnectorConfiguration } from './connector.update_configuration.js'
import { ConnectorConnectorFeatures } from './connector.update_features.js'
import { ConnectorFilteringConfig, ConnectorFilteringRules } from './connector.update_filtering.js'
import { ConnectorIngestPipelineParams } from './connector.update_pipeline.js'
import { ConnectorSchedulingConfiguration } from './connector.update_scheduling.js'
import { ConnectorConnectorStatus } from './connector.update_status.js'

export const ConnectorCustomSchedulingConfigurationOverrides = z.object({
  max_crawl_depth: z.lazy(() => integer).optional(),
  sitemap_discovery_disabled: z.boolean().optional(),
  domain_allowlist: z.array(z.string()).optional(),
  sitemap_urls: z.array(z.string()).optional(),
  seed_urls: z.array(z.string()).optional()
}).meta({ id: 'ConnectorCustomSchedulingConfigurationOverrides' })
export type ConnectorCustomSchedulingConfigurationOverrides = z.infer<typeof ConnectorCustomSchedulingConfigurationOverrides>

export const ConnectorCustomScheduling = z.object({
  configuration_overrides: ConnectorCustomSchedulingConfigurationOverrides,
  enabled: z.boolean(),
  interval: z.string(),
  last_synced: z.lazy(() => DateTime).optional(),
  name: z.string()
}).meta({ id: 'ConnectorCustomScheduling' })
export type ConnectorCustomScheduling = z.infer<typeof ConnectorCustomScheduling>

export const ConnectorConnectorCustomScheduling = z.record(z.string(), ConnectorCustomScheduling).meta({ id: 'ConnectorConnectorCustomScheduling' })
export type ConnectorConnectorCustomScheduling = z.infer<typeof ConnectorConnectorCustomScheduling>

export const ConnectorSyncStatus = z.enum(['canceling', 'canceled', 'completed', 'error', 'in_progress', 'pending', 'suspended']).meta({ id: 'ConnectorSyncStatus' })
export type ConnectorSyncStatus = z.infer<typeof ConnectorSyncStatus>

export const ConnectorConnector = z.object({
  api_key_id: z.string().optional(),
  api_key_secret_id: z.string().optional(),
  configuration: ConnectorConnectorConfiguration,
  custom_scheduling: ConnectorConnectorCustomScheduling,
  deleted: z.boolean(),
  description: z.string().optional(),
  error: z.union([z.string(), z.null()]).optional(),
  features: ConnectorConnectorFeatures.optional(),
  filtering: z.array(ConnectorFilteringConfig),
  id: z.lazy(() => Id).optional(),
  index_name: z.union([z.lazy(() => IndexName), z.null()]).optional(),
  is_native: z.boolean(),
  language: z.string().optional(),
  last_access_control_sync_error: z.string().optional(),
  last_access_control_sync_scheduled_at: z.lazy(() => DateTime).optional(),
  last_access_control_sync_status: ConnectorSyncStatus.optional(),
  last_deleted_document_count: z.lazy(() => long).optional(),
  last_incremental_sync_scheduled_at: z.lazy(() => DateTime).optional(),
  last_indexed_document_count: z.lazy(() => long).optional(),
  last_seen: z.lazy(() => DateTime).optional(),
  last_sync_error: z.string().optional(),
  last_sync_scheduled_at: z.lazy(() => DateTime).optional(),
  last_sync_status: ConnectorSyncStatus.optional(),
  last_synced: z.lazy(() => DateTime).optional(),
  name: z.string().optional(),
  pipeline: ConnectorIngestPipelineParams.optional(),
  scheduling: ConnectorSchedulingConfiguration,
  service_type: z.string().optional(),
  status: ConnectorConnectorStatus,
  sync_cursor: z.any().optional(),
  sync_now: z.boolean()
}).meta({ id: 'ConnectorConnector' })
export type ConnectorConnector = z.infer<typeof ConnectorConnector>

export const ConnectorSyncJobConnectorReference = z.object({
  configuration: ConnectorConnectorConfiguration,
  filtering: ConnectorFilteringRules,
  id: z.lazy(() => Id),
  index_name: z.string(),
  language: z.string().optional(),
  pipeline: ConnectorIngestPipelineParams.optional(),
  service_type: z.string(),
  sync_cursor: z.any().optional()
}).meta({ id: 'ConnectorSyncJobConnectorReference' })
export type ConnectorSyncJobConnectorReference = z.infer<typeof ConnectorSyncJobConnectorReference>

export const ConnectorSyncJobType = z.enum(['full', 'incremental', 'access_control']).meta({ id: 'ConnectorSyncJobType' })
export type ConnectorSyncJobType = z.infer<typeof ConnectorSyncJobType>

export const ConnectorConnectorSyncJob = z.object({
  cancelation_requested_at: z.lazy(() => DateTime).optional(),
  canceled_at: z.lazy(() => DateTime).optional(),
  completed_at: z.lazy(() => DateTime).optional(),
  connector: ConnectorSyncJobConnectorReference,
  created_at: z.lazy(() => DateTime),
  deleted_document_count: z.lazy(() => long),
  error: z.string().optional(),
  id: z.lazy(() => Id),
  indexed_document_count: z.lazy(() => long),
  indexed_document_volume: z.lazy(() => long),
  job_type: z.lazy(() => ConnectorSyncJobType),
  last_seen: z.lazy(() => DateTime).optional(),
  metadata: z.record(z.string(), z.any()),
  started_at: z.lazy(() => DateTime).optional(),
  status: ConnectorSyncStatus,
  total_document_count: z.lazy(() => long),
  trigger_method: z.lazy(() => ConnectorSyncJobTriggerMethod),
  worker_hostname: z.string().optional()
}).meta({ id: 'ConnectorConnectorSyncJob' })
export type ConnectorConnectorSyncJob = z.infer<typeof ConnectorConnectorSyncJob>
