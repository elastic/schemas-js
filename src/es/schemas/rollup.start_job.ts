/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'

/**
 * Start rollup jobs.
 *
 * If you try to start a job that does not exist, an exception occurs.
 * If you try to start a job that is already started, nothing happens.
 * @deprecated
 */
export const RollupStartJobRequest = z.object({
  id: z.lazy(() => Id).describe('Identifier for the rollup job.').meta({ found_in: 'path' })
}).meta({ id: 'RollupStartJobRequest' })
export type RollupStartJobRequest = z.infer<typeof RollupStartJobRequest>

export const RollupStartJobResponse = z.object({
  started: z.boolean()
}).meta({ id: 'RollupStartJobResponse' })
export type RollupStartJobResponse = z.infer<typeof RollupStartJobResponse>
