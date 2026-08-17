/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name } from './_types.js'

/**
 * Check index templates.
 *
 * Check whether index templates exist.
 */
export const IndicesExistsIndexTemplateRequest = z.object({
  name: z.lazy(() => Name).describe('Comma-separated list of index template names used to limit the request. Wildcard (*) expressions are supported.').meta({ found_in: 'path' }),
  local: z.boolean().describe('If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.').optional().meta({ found_in: 'query' }),
  flat_settings: z.boolean().describe('If true, returns settings in flat format.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesExistsIndexTemplateRequest' })
export type IndicesExistsIndexTemplateRequest = z.infer<typeof IndicesExistsIndexTemplateRequest>

export const IndicesExistsIndexTemplateResponse = z.boolean().meta({ id: 'IndicesExistsIndexTemplateResponse' })
export type IndicesExistsIndexTemplateResponse = z.infer<typeof IndicesExistsIndexTemplateResponse>
