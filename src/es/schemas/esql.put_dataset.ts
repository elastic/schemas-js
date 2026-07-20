/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// @ts-nocheck

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any())
export type TODO = z.infer<typeof TODO>

export const AcknowledgedResponseBase = z.object({
  acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' })
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const Name = z.string().meta({ id: 'Name' })
export type Name = z.infer<typeof Name>

export const RequestBase = z.object({
}).meta({ id: 'RequestBase' })
export type RequestBase = z.infer<typeof RequestBase>

/** A per-column declaration inside a dataset mapping's `properties`. */
export const EsqlDatasetFieldMapping = z.object({
  type: z.string().describe('The declared column type.'),
  path: z.string().describe('The underlying file column that this logical column reads from. This is a read-path rename: the physical column becomes this single logical column.').optional(),
  format: z.string().describe('The date-parse pattern for a declared `date` column, mirroring the index date-field `format`.').optional()
}).meta({ id: 'EsqlDatasetFieldMapping' })
export type EsqlDatasetFieldMapping = z.infer<typeof EsqlDatasetFieldMapping>

export const EsqlDynamic = z.union([z.boolean(), z.enum(['true', 'false'])]).meta({ id: 'EsqlDynamic' })
export type EsqlDynamic = z.infer<typeof EsqlDynamic>

/** The `_id` meta-field of a dataset mapping. */
export const EsqlIdPath = z.object({
  path: z.string().describe('The name of the column that provides the document identity.')
}).meta({ id: 'EsqlIdPath' })
export type EsqlIdPath = z.infer<typeof EsqlIdPath>

/**
 * A user-declared mapping (the `mappings` block) attached to a dataset.
 * It is entirely optional: a dataset with no declared mapping relies on inference.
 */
export const EsqlDatasetMapping = z.object({
  dynamic: EsqlDynamic.describe('The policy for columns that are not declared in `properties`. `true` (the default) infers undeclared columns and overlays the declarations; `false` makes the declaration the entire schema, so undeclared columns are not queryable.').optional(),
  properties: z.record(z.string(), EsqlDatasetFieldMapping).describe('The per-column declarations, keyed by logical column name.').optional(),
  _id: EsqlIdPath.describe('The `_id` meta-field configuration, sourcing the document identity from a column.').optional()
}).meta({ id: 'EsqlDatasetMapping' })
export type EsqlDatasetMapping = z.infer<typeof EsqlDatasetMapping>

/**
 * Create or update an ES|QL dataset.
 *
 * Creates or replaces a dataset that references a data source in ES|QL data federation.
 * Dataset names participate in the index namespace and must follow index or alias naming rules.
 * Returns `404` if the referenced data source does not exist.
 */
export const EsqlPutDatasetRequest = z.object({
  ...RequestBase.shape,
  name: Name.describe('The dataset name to create or update.').meta({ found_in: 'path' }),
  master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: Duration.describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' }),
  data_source: Name.describe('The name of the referenced data source. The data source must already exist.').meta({ found_in: 'body' }),
  resource: z.string().describe('The URI that identifies the data to read, resolved against the referenced data source. It can include glob patterns. For example, a recursive pattern can match all Parquet files under the `s3://logs-bucket/access` prefix.').meta({ found_in: 'body' }),
  description: z.string().describe('A free-text description of the dataset.').optional().meta({ found_in: 'body' }),
  mappings: EsqlDatasetMapping.describe('User-declared mapping on the dataset definition').optional().meta({ found_in: 'body' }),
  settings: z.record(z.string(), z.any()).describe('Format and parsing-specific settings that configure how the resource is read. Common keys include `format`, which explicitly selects a registered format, and `partition_detection`, which accepts `auto`, `hive`, `template`, or `none`. Additional keys depend on the format reader. Compression can be inferred from the resource URI.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlPutDatasetRequest' })
export type EsqlPutDatasetRequest = z.infer<typeof EsqlPutDatasetRequest>

export const EsqlPutDatasetResponse = AcknowledgedResponseBase.meta({ id: 'EsqlPutDatasetResponse' })
export type EsqlPutDatasetResponse = z.infer<typeof EsqlPutDatasetResponse>
