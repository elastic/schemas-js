/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Create or update an ES|QL view.
 *
 * Stores an ES|QL query that runs whenever the view is referenced.
 * A query that cannot be parsed is rejected. Replacing a reserved view fails.
 */
export const EsqlPutViewRequest = z.object({
  name: z.lazy(() => Id).describe('The view name to create or update.').meta({ found_in: 'path' }),
  validate: z.boolean().describe('Whether to analyze the view query and return a warning when validation fails. Validation reports an unknown index or column, including an index the caller cannot read. The view is saved even when validation reports a problem. Failures unrelated to the query, such as an overloaded cluster, produce no warning.').optional().meta({ found_in: 'query' }),
  query: z.string().describe('The ES|QL query string that defines the view. A query that cannot be parsed is rejected.').meta({ found_in: 'body' }),
  description: z.string().describe('A free-text description of the view.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EsqlPutViewRequest' })
export type EsqlPutViewRequest = z.infer<typeof EsqlPutViewRequest>

export const EsqlPutViewResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlPutViewResponse' })
export type EsqlPutViewResponse = z.infer<typeof EsqlPutViewResponse>
