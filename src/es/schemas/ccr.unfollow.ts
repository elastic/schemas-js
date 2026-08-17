/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, IndexName } from './_types.js'

/**
 * Unfollow an index.
 *
 * Convert a cross-cluster replication follower index to a regular index.
 * The API stops the following task associated with a follower index and removes index metadata and settings associated with cross-cluster replication.
 * The follower index must be paused and closed before you call the unfollow API.
 *
 * > info
 * > Currently cross-cluster replication does not support converting an existing regular index to a follower index. Converting a follower index to a regular index is an irreversible operation.
 */
export const CcrUnfollowRequest = z.object({
  index: z.lazy(() => IndexName).describe('The name of the follower index.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrUnfollowRequest' })
export type CcrUnfollowRequest = z.infer<typeof CcrUnfollowRequest>

export const CcrUnfollowResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrUnfollowResponse' })
export type CcrUnfollowResponse = z.infer<typeof CcrUnfollowResponse>
