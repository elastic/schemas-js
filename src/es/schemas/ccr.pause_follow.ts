/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, IndexName } from './_types.js'

/**
 * Pause a follower.
 *
 * Pause a cross-cluster replication follower index.
 * The follower index will not fetch any additional operations from the leader index.
 * You can resume following with the resume follower API.
 * You can pause and resume a follower index to change the configuration of the following task.
 */
export const CcrPauseFollowRequest = z.object({
  index: z.lazy(() => IndexName).describe('The name of the follower index.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrPauseFollowRequest' })
export type CcrPauseFollowRequest = z.infer<typeof CcrPauseFollowRequest>

export const CcrPauseFollowResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrPauseFollowResponse' })
export type CcrPauseFollowResponse = z.infer<typeof CcrPauseFollowResponse>
