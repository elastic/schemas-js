/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'

/**
 * Check component templates.
 *
 * Returns information about whether a particular component template exists.
 */
export const ClusterExistsComponentTemplateRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated list of component template names used to limit the request. Wildcard (*) expressions are supported.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  local: z.boolean().describe('If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterExistsComponentTemplateRequest' })
export type ClusterExistsComponentTemplateRequest = z.infer<typeof ClusterExistsComponentTemplateRequest>

export const ClusterExistsComponentTemplateResponse = z.boolean().meta({ id: 'ClusterExistsComponentTemplateResponse' })
export type ClusterExistsComponentTemplateResponse = z.infer<typeof ClusterExistsComponentTemplateResponse>
