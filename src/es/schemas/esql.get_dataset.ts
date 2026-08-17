/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name, Names } from './_types.js'
import { EsqlDatasetMapping } from './esql.put_dataset.js'

/**
 * Represents a dataset definition stored in cluster state. A dataset is a named reference
 * to external data that participates in the index namespace alongside indices, aliases, and views.
 * Datasets inherit credentials from their referenced data source at query time.
 */
export const EsqlESQLDataset = z.object({
  name: z.lazy(() => Name).describe('The dataset name.'),
  data_source: z.lazy(() => Name).describe('The name of the referenced data source.'),
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
  name: z.lazy(() => Names).describe('A comma-separated list of dataset names or wildcard patterns. Omit to return all datasets.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'EsqlGetDatasetRequest' })
export type EsqlGetDatasetRequest = z.infer<typeof EsqlGetDatasetRequest>

export const EsqlGetDatasetResponse = z.object({
  datasets: z.array(EsqlESQLDataset).describe('The matching datasets.')
}).meta({ id: 'EsqlGetDatasetResponse' })
export type EsqlGetDatasetResponse = z.infer<typeof EsqlGetDatasetResponse>
