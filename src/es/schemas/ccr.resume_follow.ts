/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, IndexName, long } from './_types.js'

/**
 * Resume a follower.
 *
 * Resume a cross-cluster replication follower index that was paused.
 * The follower index could have been paused with the pause follower API.
 * Alternatively it could be paused due to replication that cannot be retried due to failures during following tasks.
 * When this API returns, the follower index will resume fetching operations from the leader index.
 */
export const CcrResumeFollowRequest = z.object({
  index: z.lazy(() => IndexName).describe('Name of the follow index to resume following').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  max_outstanding_read_requests: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  max_outstanding_write_requests: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  max_read_request_operation_count: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  max_read_request_size: z.string().optional().meta({ found_in: 'body' }),
  max_retry_delay: z.lazy(() => Duration).optional().meta({ found_in: 'body' }),
  max_write_buffer_count: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  max_write_buffer_size: z.string().optional().meta({ found_in: 'body' }),
  max_write_request_operation_count: z.lazy(() => long).optional().meta({ found_in: 'body' }),
  max_write_request_size: z.string().optional().meta({ found_in: 'body' }),
  read_poll_timeout: z.lazy(() => Duration).optional().meta({ found_in: 'body' })
}).meta({ id: 'CcrResumeFollowRequest' })
export type CcrResumeFollowRequest = z.infer<typeof CcrResumeFollowRequest>

export const CcrResumeFollowResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrResumeFollowResponse' })
export type CcrResumeFollowResponse = z.infer<typeof CcrResumeFollowResponse>
