/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, NodeId, long } from './_types.js'

/**
 * Get a specific running ES|QL query information.
 *
 * Returns an object extended information about a running ES|QL query.
 */
export const EsqlGetQueryRequest = z.object({
  id: z.lazy(() => Id).describe('The query ID').meta({ found_in: 'path' })
}).meta({ id: 'EsqlGetQueryRequest' })
export type EsqlGetQueryRequest = z.infer<typeof EsqlGetQueryRequest>

export const EsqlGetQueryResponse = z.object({
  id: z.lazy(() => long),
  node: z.lazy(() => NodeId),
  start_time_millis: z.lazy(() => long),
  running_time_nanos: z.lazy(() => long),
  query: z.string(),
  coordinating_node: z.lazy(() => NodeId),
  data_nodes: z.array(z.lazy(() => NodeId))
}).meta({ id: 'EsqlGetQueryResponse' })
export type EsqlGetQueryResponse = z.infer<typeof EsqlGetQueryResponse>
