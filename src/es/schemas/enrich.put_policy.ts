/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Field, Fields, Indices, Name } from './_types.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'

export const EnrichPolicy = z.object({
  enrich_fields: z.lazy(() => Fields),
  indices: z.lazy(() => Indices),
  match_field: z.lazy(() => Field),
  query: z.lazy(() => QueryDslQueryContainer).optional(),
  name: z.lazy(() => Name).optional(),
  elasticsearch_version: z.string().optional()
}).meta({ id: 'EnrichPolicy' })
export type EnrichPolicy = z.infer<typeof EnrichPolicy>

/**
 * Create an enrich policy.
 *
 * Creates an enrich policy.
 */
export const EnrichPutPolicyRequest = z.object({
  name: z.lazy(() => Name).describe('Name of the enrich policy to create or update.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  geo_match: EnrichPolicy.describe('Matches enrich data to incoming documents based on a `geo_shape` query.').optional().meta({ found_in: 'body' }),
  match: EnrichPolicy.describe('Matches enrich data to incoming documents based on a `term` query.').optional().meta({ found_in: 'body' }),
  range: EnrichPolicy.describe('Matches a number, date, or IP address in incoming documents to a range in the enrich index based on a `term` query.').optional().meta({ found_in: 'body' })
}).meta({ id: 'EnrichPutPolicyRequest' })
export type EnrichPutPolicyRequest = z.infer<typeof EnrichPutPolicyRequest>

export const EnrichPutPolicyResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EnrichPutPolicyResponse' })
export type EnrichPutPolicyResponse = z.infer<typeof EnrichPutPolicyResponse>
