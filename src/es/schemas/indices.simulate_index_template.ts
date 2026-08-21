/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Name } from './_types.js'
import { IndicesIndexTemplate } from './indices.js'
import { IndicesSimulateTemplateOverlapping, IndicesSimulateTemplateTemplate } from './indices.simulate_template.js'

/**
 * Simulate an index.
 *
 * Get the index configuration that would be applied to the specified index from an existing index template.
 */
export const IndicesSimulateIndexTemplateRequest = z.object({
  name: z.lazy(() => Name).describe('Name of the index to simulate').meta({ found_in: 'path' }),
  create: z.boolean().describe('Whether the index template we optionally defined in the body should only be dry-run added if new or can also replace an existing one').optional().meta({ found_in: 'query' }),
  cause: z.string().describe('User defined reason for dry-run creating the new template for simulation purposes').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  include_defaults: z.boolean().describe('If true, returns all relevant default configurations for the index template.').optional().meta({ found_in: 'query' }),
  index_template: IndicesIndexTemplate.optional().meta({ found_in: 'body' })
}).meta({ id: 'IndicesSimulateIndexTemplateRequest' })
export type IndicesSimulateIndexTemplateRequest = z.infer<typeof IndicesSimulateIndexTemplateRequest>

export const IndicesSimulateIndexTemplateResponse = z.object({
  overlapping: z.array(IndicesSimulateTemplateOverlapping).optional(),
  template: IndicesSimulateTemplateTemplate
}).meta({ id: 'IndicesSimulateIndexTemplateResponse' })
export type IndicesSimulateIndexTemplateResponse = z.infer<typeof IndicesSimulateIndexTemplateResponse>
