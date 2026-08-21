/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Run a retention policy.
 *
 * Manually apply the retention policy to force immediate removal of snapshots that are expired according to the snapshot lifecycle policy retention rules.
 * The retention policy is normally applied according to its schedule.
 */
export const SlmExecuteRetentionRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmExecuteRetentionRequest' })
export type SlmExecuteRetentionRequest = z.infer<typeof SlmExecuteRetentionRequest>

export const SlmExecuteRetentionResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SlmExecuteRetentionResponse' })
export type SlmExecuteRetentionResponse = z.infer<typeof SlmExecuteRetentionResponse>
