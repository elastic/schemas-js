/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, EpochTime, IndexName, Metadata, Name, VersionNumber } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesAliasDefinition, IndicesDataStreamLifecycleWithRollover, IndicesDataStreamOptions, IndicesIndexSettings } from './indices.js'

export const ClusterComponentTemplateSummaryRes = z.object({
  lifecycle: z.lazy(() => IndicesDataStreamLifecycleWithRollover).optional(),
  _meta: z.lazy(() => Metadata).optional(),
  version: z.lazy(() => VersionNumber).optional(),
  settings: z.record(z.lazy(() => IndexName), z.lazy(() => IndicesIndexSettings)).optional(),
  mappings: z.lazy(() => MappingTypeMapping).optional(),
  aliases: z.record(z.string(), IndicesAliasDefinition).optional(),
  data_stream_options: z.lazy(() => IndicesDataStreamOptions).optional()
}).meta({ id: 'ClusterComponentTemplateSummaryRes' })
export type ClusterComponentTemplateSummaryRes = z.infer<typeof ClusterComponentTemplateSummaryRes>

export const ClusterComponentTemplateNodeWithRollover = z.object({
  template: ClusterComponentTemplateSummaryRes,
  version: z.lazy(() => VersionNumber).optional(),
  _meta: z.lazy(() => Metadata).optional(),
  deprecated: z.boolean().optional(),
  created_date: z.lazy(() => DateTime).describe('Date and time when the component template was created. Only returned if the `human` query parameter is `true`.').optional(),
  created_date_millis: z.lazy(() => EpochTime).describe('Date and time when the component template was created, in milliseconds since the epoch.').optional(),
  modified_date: z.lazy(() => DateTime).describe('Date and time when the component template was last modified. Only returned if the `human` query parameter is `true`.').optional(),
  modified_date_millis: z.lazy(() => EpochTime).describe('Date and time when the component template was last modified, in milliseconds since the epoch.').optional()
}).meta({ id: 'ClusterComponentTemplateNodeWithRollover' })
export type ClusterComponentTemplateNodeWithRollover = z.infer<typeof ClusterComponentTemplateNodeWithRollover>

export const ClusterComponentTemplate = z.object({
  name: z.lazy(() => Name),
  component_template: ClusterComponentTemplateNodeWithRollover
}).meta({ id: 'ClusterComponentTemplate' })
export type ClusterComponentTemplate = z.infer<typeof ClusterComponentTemplate>

/**
 * Get component templates.
 *
 * Get information about component templates.
 */
export const ClusterGetComponentTemplateRequest = z.object({
  name: z.lazy(() => Name).describe('Name of component template to retrieve. Wildcard (`*`) expressions are supported.').optional().meta({ found_in: 'path' }),
  flat_settings: z.boolean().describe('If `true`, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  settings_filter: z.union([z.string(), z.array(z.string())]).describe('Filter out results, for example to filter out sensitive information. Supports wildcards or full settings keys').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('Return all default configurations for the component template').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If `true`, the request retrieves information from the local node only. If `false`, information is retrieved from the master node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterGetComponentTemplateRequest' })
export type ClusterGetComponentTemplateRequest = z.infer<typeof ClusterGetComponentTemplateRequest>

export const ClusterGetComponentTemplateResponse = z.object({
  component_templates: z.array(ClusterComponentTemplate)
}).meta({ id: 'ClusterGetComponentTemplateResponse' })
export type ClusterGetComponentTemplateResponse = z.infer<typeof ClusterGetComponentTemplateResponse>
