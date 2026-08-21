/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { integer } from './_types.js'

/**
 * Get node stats.
 *
 * Get per-node information about transform usage.
 */
export const TransformGetNodeStatsRequest = z.object({
}).meta({ id: 'TransformGetNodeStatsRequest' })
export type TransformGetNodeStatsRequest = z.infer<typeof TransformGetNodeStatsRequest>

export const TransformGetNodeStatsTransformSchedulerStats = z.object({
  registered_transform_count: z.lazy(() => integer),
  peek_transform: z.string().optional()
}).meta({ id: 'TransformGetNodeStatsTransformSchedulerStats' })
export type TransformGetNodeStatsTransformSchedulerStats = z.infer<typeof TransformGetNodeStatsTransformSchedulerStats>

export const TransformGetNodeStatsTransformNodeStats = z.object({
  scheduler: TransformGetNodeStatsTransformSchedulerStats
}).meta({ id: 'TransformGetNodeStatsTransformNodeStats' })
export type TransformGetNodeStatsTransformNodeStats = z.infer<typeof TransformGetNodeStatsTransformNodeStats>

export const TransformGetNodeStatsTransformNodeFullStats = z.object({
  total: TransformGetNodeStatsTransformNodeStats
}).catchall(z.any()).meta({ id: 'TransformGetNodeStatsTransformNodeFullStats' })
export type TransformGetNodeStatsTransformNodeFullStats = z.infer<typeof TransformGetNodeStatsTransformNodeFullStats>

export const TransformGetNodeStatsResponse = TransformGetNodeStatsTransformNodeFullStats.meta({ id: 'TransformGetNodeStatsResponse' })
export type TransformGetNodeStatsResponse = z.infer<typeof TransformGetNodeStatsResponse>
