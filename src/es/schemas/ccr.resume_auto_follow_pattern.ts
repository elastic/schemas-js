/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Resume an auto-follow pattern.
 *
 * Resume a cross-cluster replication auto-follow pattern that was paused.
 * The auto-follow pattern will resume configuring following indices for newly created indices that match its patterns on the remote cluster.
 * Remote indices created while the pattern was paused will also be followed unless they have been deleted or closed in the interim.
 */
export const CcrResumeAutoFollowPatternRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the auto-follow pattern to resume.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrResumeAutoFollowPatternRequest' })
export type CcrResumeAutoFollowPatternRequest = z.infer<typeof CcrResumeAutoFollowPatternRequest>

export const CcrResumeAutoFollowPatternResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrResumeAutoFollowPatternResponse' })
export type CcrResumeAutoFollowPatternResponse = z.infer<typeof CcrResumeAutoFollowPatternResponse>
