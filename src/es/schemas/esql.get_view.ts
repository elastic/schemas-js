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
  description: z.string().describe('A free-text description of the view.').optional(),
  reserved: z.boolean().describe('Whether this view is reserved. Elasticsearch creates reserved views. They can be queried and read like any other view. They cannot be created, updated, or deleted through the views API. The response includes this field only when the value is `true`.').optional()
}).meta({ id: 'EsqlESQLView' })
export type EsqlESQLView = z.infer<typeof EsqlESQLView>

/**
 * Get an ES|QL view.
 *
 * Returns one or more stored views. A reserved view includes `reserved` set to `true`.
 */
export const EsqlGetViewRequest = z.object({
  name: z.lazy(() => Id).describe('The comma-separated view names to retrieve.').optional().meta({ found_in: 'path' })
}).meta({ id: 'EsqlGetViewRequest' })
export type EsqlGetViewRequest = z.infer<typeof EsqlGetViewRequest>

export const EsqlGetViewResponse = z.object({
  views: z.array(EsqlESQLView)
}).meta({ id: 'EsqlGetViewResponse' })
export type EsqlGetViewResponse = z.infer<typeof EsqlGetViewResponse>
