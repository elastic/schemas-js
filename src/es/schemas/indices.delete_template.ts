/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Delete a legacy index template.
 *
 * IMPORTANT: This documentation is about legacy index templates, which are deprecated and will be replaced by the composable templates introduced in Elasticsearch 7.8.
 * @deprecated
 */
export const IndicesDeleteTemplateRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the legacy index template to delete. Wildcard (`*`) expressions are supported.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteTemplateRequest' })
export type IndicesDeleteTemplateRequest = z.infer<typeof IndicesDeleteTemplateRequest>

export const IndicesDeleteTemplateResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesDeleteTemplateResponse' })
export type IndicesDeleteTemplateResponse = z.infer<typeof IndicesDeleteTemplateResponse>
