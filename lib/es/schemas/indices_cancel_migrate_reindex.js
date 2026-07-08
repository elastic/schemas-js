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
export const Indices = z.union([IndexName, z.array(IndexName)]).meta({ id: 'Indices' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Cancel a migration reindex operation.
 *
 * Cancel a migration reindex attempt for a data stream or index.
 */
export const IndicesCancelMigrateReindexRequest = z.object({
    ...RequestBase.shape,
    index: Indices.describe('The index or data stream name').meta({ found_in: 'path' })
}).meta({ id: 'IndicesCancelMigrateReindexRequest' });
export const IndicesCancelMigrateReindexResponse = AcknowledgedResponseBase.meta({ id: 'IndicesCancelMigrateReindexResponse' });
//# sourceMappingURL=indices_cancel_migrate_reindex.js.map