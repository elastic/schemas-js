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
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
/**
 * Get node stats.
 *
 * Get per-node information about transform usage.
 */
export const TransformGetNodeStatsRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'TransformGetNodeStatsRequest' });
export const TransformGetNodeStatsTransformSchedulerStats = z.object({
    registered_transform_count: integer,
    peek_transform: z.string().optional()
}).meta({ id: 'TransformGetNodeStatsTransformSchedulerStats' });
export const TransformGetNodeStatsTransformNodeStats = z.object({
    scheduler: TransformGetNodeStatsTransformSchedulerStats
}).meta({ id: 'TransformGetNodeStatsTransformNodeStats' });
export const TransformGetNodeStatsTransformNodeFullStats = z.object({
    total: TransformGetNodeStatsTransformNodeStats
}).catchall(z.any()).meta({ id: 'TransformGetNodeStatsTransformNodeFullStats' });
export const TransformGetNodeStatsResponse = TransformGetNodeStatsTransformNodeFullStats.meta({ id: 'TransformGetNodeStatsResponse' });
//# sourceMappingURL=transform_get_node_stats.js.map