/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { NodeId, TaskId, long } from './_types.js'

export const EsqlListQueriesBody = z.object({
  id: z.lazy(() => long),
  node: z.lazy(() => NodeId),
  start_time_millis: z.lazy(() => long),
  running_time_nanos: z.lazy(() => long),
  query: z.string()
}).meta({ id: 'EsqlListQueriesBody' })
export type EsqlListQueriesBody = z.infer<typeof EsqlListQueriesBody>

/**
 * Get running ES|QL queries information.
 *
 * Returns an object containing IDs and other information about the running ES|QL queries.
 */
export const EsqlListQueriesRequest = z.object({
}).meta({ id: 'EsqlListQueriesRequest' })
export type EsqlListQueriesRequest = z.infer<typeof EsqlListQueriesRequest>

export const EsqlListQueriesResponse = z.object({
  queries: z.record(TaskId, EsqlListQueriesBody)
}).meta({ id: 'EsqlListQueriesResponse' })
export type EsqlListQueriesResponse = z.infer<typeof EsqlListQueriesResponse>
