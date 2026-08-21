/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/** A non-materialized ES|QL view. */
export const EsqlESQLView = z.object({
  name: z.string().describe('The name of the ES|QL view'),
  query: z.string().describe('The ES|QL query'),
  description: z.string().describe('A free-text description of the view.').optional()
}).meta({ id: 'EsqlESQLView' })
export type EsqlESQLView = z.infer<typeof EsqlESQLView>

/**
 * Get an ES|QL view.
 *
 * Returns a stored ES|QL view.
 */
export const EsqlGetViewRequest = z.object({
  name: z.lazy(() => Id).describe('The comma-separated view names to retrieve.').optional().meta({ found_in: 'path' })
}).meta({ id: 'EsqlGetViewRequest' })
export type EsqlGetViewRequest = z.infer<typeof EsqlGetViewRequest>

export const EsqlGetViewResponse = z.object({
  views: z.array(EsqlESQLView)
}).meta({ id: 'EsqlGetViewResponse' })
export type EsqlGetViewResponse = z.infer<typeof EsqlGetViewResponse>
