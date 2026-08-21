/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/** Create or update an ES|QL view. */
export const EsqlPutViewRequest = z.object({
  name: z.lazy(() => Id).describe('The view name to create or update.').meta({ found_in: 'path' }),
  query: z.string().describe('The ES|QL query string from which to create a view.').meta({ found_in: 'body' }),
  description: z.string().describe('A free-text description of the view.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlPutViewRequest' })
export type EsqlPutViewRequest = z.infer<typeof EsqlPutViewRequest>

export const EsqlPutViewResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlPutViewResponse' })
export type EsqlPutViewResponse = z.infer<typeof EsqlPutViewResponse>
