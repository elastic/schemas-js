/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Names } from './_types.js'

/**
 * Delete component templates.
 *
 * Component templates are building blocks for constructing index templates that specify index mappings, settings, and aliases.
 */
export const ClusterDeleteComponentTemplateRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated list or wildcard expression of component template names used to limit the request.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'ClusterDeleteComponentTemplateRequest' })
export type ClusterDeleteComponentTemplateRequest = z.infer<typeof ClusterDeleteComponentTemplateRequest>

export const ClusterDeleteComponentTemplateResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ClusterDeleteComponentTemplateResponse' })
export type ClusterDeleteComponentTemplateResponse = z.infer<typeof ClusterDeleteComponentTemplateResponse>
