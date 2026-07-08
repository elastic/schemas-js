/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
export const IndexName = z.string().meta({ id: 'IndexName' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const IndicesMigrateReindexModeEnum = z.enum(['upgrade']).meta({ id: 'IndicesMigrateReindexModeEnum' });
export const IndicesMigrateReindexSourceIndex = z.object({
    index: IndexName
}).meta({ id: 'IndicesMigrateReindexSourceIndex' });
export const IndicesMigrateReindexMigrateReindex = z.object({
    mode: IndicesMigrateReindexModeEnum.describe('Reindex mode. Currently only \'upgrade\' is supported.'),
    source: IndicesMigrateReindexSourceIndex.describe('The source index or data stream (only data streams are currently supported).')
}).meta({ id: 'IndicesMigrateReindexMigrateReindex' });
/**
 * Reindex legacy backing indices.
 *
 * Reindex all legacy backing indices for a data stream.
 * This operation occurs in a persistent task.
 * The persistent task ID is returned immediately and the reindexing work is completed in that task.
 */
export const IndicesMigrateReindexRequest = z.object({
    ...RequestBase.shape,
    reindex: IndicesMigrateReindexMigrateReindex.meta({ found_in: 'body' })
}).meta({ id: 'IndicesMigrateReindexRequest' });
export const IndicesMigrateReindexResponse = AcknowledgedResponseBase.meta({ id: 'IndicesMigrateReindexResponse' });
//# sourceMappingURL=indices_migrate_reindex.js.map