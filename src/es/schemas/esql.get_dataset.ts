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

/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' })
export type Duration = z.infer<typeof Duration>

export const Name = z.string().meta({ id: 'Name' })
export type Name = z.infer<typeof Name>

export const Names = z.union([Name, z.array(Name)]).meta({ id: 'Names' })
export type Names = z.infer<typeof Names>

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
 * Represents a dataset definition stored in cluster state. A dataset is a named reference
 * to external data that participates in the index namespace alongside indices, aliases, and views.
 * Datasets inherit credentials from their referenced data source at query time.
 */
export const EsqlESQLDataset = z.object({
  name: Name.describe('The dataset name.'),
  data_source: Name.describe('The name of the referenced data source.'),
  resource: z.string().describe('The URI that identifies the data to read, resolved against the referenced data source. It can include glob patterns, for example a recursive pattern that matches Parquet files under `s3://logs-bucket/access`.'),
  description: z.string().describe('A free-text description.').optional(),
  settings: z.record(z.string(), z.any()).describe('Format- and parsing-specific settings that configure how the resource is read. Common keys include `format` and `partition_detection`. Additional keys depend on the format reader; compression can be inferred from the resource URI.').optional(),
  mappings: EsqlDatasetMapping.describe('The user-declared mapping on the dataset definition.').optional()
}).meta({ id: 'EsqlESQLDataset' })
export type EsqlESQLDataset = z.infer<typeof EsqlESQLDataset>

/**
 * Get ES|QL datasets.
 *
 * Returns one or more datasets used in ES|QL data federation.
 * A concrete-name miss returns `404`; a wildcard pattern or list-all request with no match
 * returns `200` with an empty array.
 */
export const EsqlGetDatasetRequest = z.object({
  ...RequestBase.shape,
  name: Names.describe('A comma-separated list of dataset names or wildcard patterns. Omit to return all datasets.').optional().meta({ found_in: 'path' }),
  master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlGetDatasetRequest' })
export type EsqlGetDatasetRequest = z.infer<typeof EsqlGetDatasetRequest>

export const EsqlGetDatasetResponse = z.object({
  datasets: z.array(EsqlESQLDataset).describe('The matching datasets.')
}).meta({ id: 'EsqlGetDatasetResponse' })
export type EsqlGetDatasetResponse = z.infer<typeof EsqlGetDatasetResponse>
