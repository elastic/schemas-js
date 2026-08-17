/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Names } from './_types.js'

/**
 * Delete an index template.
 *
 * The provided <index-template> may contain multiple template names separated by a comma. If multiple template
 * names are specified then there is no wildcard support and the provided names should match completely with
 * existing templates.
 */
export const IndicesDeleteIndexTemplateRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated list of index template names used to limit the request. Wildcard (*) expressions are supported.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteIndexTemplateRequest' })
export type IndicesDeleteIndexTemplateRequest = z.infer<typeof IndicesDeleteIndexTemplateRequest>

export const IndicesDeleteIndexTemplateResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesDeleteIndexTemplateResponse' })
export type IndicesDeleteIndexTemplateResponse = z.infer<typeof IndicesDeleteIndexTemplateResponse>
