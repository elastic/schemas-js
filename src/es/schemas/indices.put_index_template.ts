/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, IndexName, Indices, Metadata, Name, VersionNumber, long } from './_types.js'
import { MappingTypeMapping } from './_types.mapping.js'
import { IndicesAlias, IndicesDataStreamLifecycle, IndicesDataStreamVisibility, IndicesIndexSettings } from './indices.js'

/** Template equivalent of FailureStoreLifecycle that allows nullable values. */
export const IndicesFailureStoreLifecycleTemplate = z.object({
  data_retention: z.union([z.lazy(() => Duration), z.null()]).describe('If defined, every document added to this data stream will be stored at least for this time frame. Any time after this duration the document could be deleted. When empty, every document in this data stream will be stored indefinitely.').optional(),
  enabled: z.boolean().describe('If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle that\'s disabled (enabled: `false`) will have no effect on the data stream.').optional()
}).meta({ id: 'IndicesFailureStoreLifecycleTemplate' })
export type IndicesFailureStoreLifecycleTemplate = z.infer<typeof IndicesFailureStoreLifecycleTemplate>

/** Template equivalent of DataStreamFailureStore that allows nullable values. */
export const IndicesDataStreamFailureStoreTemplate = z.object({
  enabled: z.union([z.boolean(), z.null()]).describe('If defined, it turns the failure store on/off (`true`/`false`) for this data stream. A data stream failure store that\'s disabled (enabled: `false`) will redirect no new failed indices to the failure store; however, it will not remove any existing data from the failure store.').optional(),
  lifecycle: z.union([IndicesFailureStoreLifecycleTemplate, z.null()]).describe('If defined, it specifies the lifecycle configuration for the failure store of this data stream.').optional()
}).meta({ id: 'IndicesDataStreamFailureStoreTemplate' })
export type IndicesDataStreamFailureStoreTemplate = z.infer<typeof IndicesDataStreamFailureStoreTemplate>

/** Data stream options template contains the same information as DataStreamOptions but allows them to be set explicitly to null. */
export const IndicesDataStreamOptionsTemplate = z.object({
  failure_store: z.union([IndicesDataStreamFailureStoreTemplate, z.null()]).optional()
}).meta({ id: 'IndicesDataStreamOptionsTemplate' })
export type IndicesDataStreamOptionsTemplate = z.infer<typeof IndicesDataStreamOptionsTemplate>

export const IndicesPutIndexTemplateIndexTemplateMapping = z.object({
  aliases: z.record(z.lazy(() => IndexName), z.lazy(() => IndicesAlias)).describe('Aliases to add. If the index template includes a `data_stream` object, these are data stream aliases. Otherwise, these are index aliases. Data stream aliases ignore the `index_routing`, `routing`, and `search_routing` options.').optional(),
  mappings: z.lazy(() => MappingTypeMapping).describe('Mapping for fields in the index. If specified, this mapping can include field names, field data types, and mapping parameters.').optional(),
  settings: z.lazy(() => IndicesIndexSettings).describe('Configuration options for the index.').optional(),
  lifecycle: IndicesDataStreamLifecycle.optional(),
  data_stream_options: z.union([IndicesDataStreamOptionsTemplate, z.null()]).optional()
}).meta({ id: 'IndicesPutIndexTemplateIndexTemplateMapping' })
export type IndicesPutIndexTemplateIndexTemplateMapping = z.infer<typeof IndicesPutIndexTemplateIndexTemplateMapping>

/**
 * Create or update an index template.
 *
 * Index templates define settings, mappings, and aliases that can be applied automatically to new indices.
 *
 * Elasticsearch applies templates to new indices based on an wildcard pattern that matches the index name.
 * Index templates are applied during data stream or index creation.
 * For data streams, these settings and mappings are applied when the stream's backing indices are created.
 * Settings and mappings specified in a create index API request override any settings or mappings specified in an index template.
 * Changes to index templates do not affect existing indices, including the existing backing indices of a data stream.
 *
 * You can use C-style `/* *\/` block comments in index templates.
 * You can include comments anywhere in the request body, except before the opening curly bracket.
 *
 * **Multiple matching templates**
 *
 * If multiple index templates match the name of a new index or data stream, the template with the highest priority is used.
 *
 * Multiple templates with overlapping index patterns at the same priority are not allowed and an error will be thrown when attempting to create a template matching an existing index template at identical priorities.
 *
 * **Composing aliases, mappings, and settings**
 *
 * When multiple component templates are specified in the `composed_of` field for an index template, they are merged in the order specified, meaning that later component templates override earlier component templates.
 * Any mappings, settings, or aliases from the parent index template are merged in next.
 * Finally, any configuration on the index request itself is merged.
 * Mapping definitions are merged recursively, which means that later mapping components can introduce new field mappings and update the mapping configuration.
 * If a field mapping is already contained in an earlier component, its definition will be completely overwritten by the later one.
 * This recursive merging strategy applies not only to field mappings, but also root options like `dynamic_templates` and `meta`.
 * If an earlier component contains a `dynamic_templates` block, then by default new `dynamic_templates` entries are appended onto the end.
 * If an entry already exists with the same key, then it is overwritten by the new definition.
 */
export const IndicesPutIndexTemplateRequest = z.object({
  name: z.lazy(() => Name).describe('Index or template name').meta({ found_in: 'path' }),
  create: z.boolean().describe('If `true`, this request cannot replace or update existing index templates.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  cause: z.string().describe('User defined reason for creating or updating the index template').optional().meta({ found_in: 'query' }),
  index_patterns: z.lazy(() => Indices).describe('Array of wildcard (`*`) expressions used to match the names of data streams and indices during creation.').optional().meta({ found_in: 'body' }),
  composed_of: z.array(z.lazy(() => Name)).describe('An ordered list of component template names. Component templates are merged in the order specified, meaning that the last component template specified has the highest precedence.').optional().meta({ found_in: 'body' }),
  template: IndicesPutIndexTemplateIndexTemplateMapping.describe('Template to be applied. It may optionally include an `aliases`, `mappings`, or `settings` configuration.').optional().meta({ found_in: 'body' }),
  data_stream: IndicesDataStreamVisibility.describe('If this object is included, the template is used to create data streams and their backing indices. Supports an empty object. Data streams require a matching index template with a `data_stream` object.').optional().meta({ found_in: 'body' }),
  priority: z.lazy(() => long).describe('Priority to determine index template precedence when a new data stream or index is created. The index template with the highest priority is chosen. If no priority is specified the template is treated as though it is of priority 0 (lowest priority). This number is not automatically generated by Elasticsearch.').optional().meta({ found_in: 'body' }),
  version: z.lazy(() => VersionNumber).describe('Version number used to manage index templates externally. This number is not automatically generated by Elasticsearch. External systems can use these version numbers to simplify template management. To unset a version, replace the template without specifying one.').optional().meta({ found_in: 'body' }),
  _meta: z.lazy(() => Metadata).describe('Optional user metadata about the index template. It may have any contents. It is not automatically generated or used by Elasticsearch. This user-defined object is stored in the cluster state, so keeping it short is preferable To unset the metadata, replace the template without specifying it.').optional().meta({ found_in: 'body' }),
  allow_auto_create: z.boolean().describe('This setting overrides the value of the `action.auto_create_index` cluster setting. If set to `true` in a template, then indices can be automatically created using that template even if auto-creation of indices is disabled via `actions.auto_create_index`. If set to `false`, then indices or data streams matching the template must always be explicitly created, and may never be automatically created.').optional().meta({ found_in: 'body' }),
  ignore_missing_component_templates: z.array(z.string()).describe('The configuration option ignore_missing_component_templates can be used when an index template references a component template that might not exist').optional().meta({ found_in: 'body' }),
  deprecated: z.boolean().describe('Marks this index template as deprecated. When creating or updating a non-deprecated index template that uses deprecated components, Elasticsearch will emit a deprecation warning.').optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesPutIndexTemplateRequest' })
export type IndicesPutIndexTemplateRequest = z.infer<typeof IndicesPutIndexTemplateRequest>

export const IndicesPutIndexTemplateResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesPutIndexTemplateResponse' })
export type IndicesPutIndexTemplateResponse = z.infer<typeof IndicesPutIndexTemplateResponse>
