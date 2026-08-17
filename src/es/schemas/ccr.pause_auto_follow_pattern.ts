/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Pause an auto-follow pattern.
 *
 * Pause a cross-cluster replication auto-follow pattern.
 * When the API returns, the auto-follow pattern is inactive.
 * New indices that are created on the remote cluster and match the auto-follow patterns are ignored.
 *
 * You can resume auto-following with the resume auto-follow pattern API.
 * When it resumes, the auto-follow pattern is active again and automatically configures follower indices for newly created indices on the remote cluster that match its patterns.
 * Remote indices that were created while the pattern was paused will also be followed, unless they have been deleted or closed in the interim.
 */
export const CcrPauseAutoFollowPatternRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the auto-follow pattern to pause.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrPauseAutoFollowPatternRequest' })
export type CcrPauseAutoFollowPatternRequest = z.infer<typeof CcrPauseAutoFollowPatternRequest>

export const CcrPauseAutoFollowPatternResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrPauseAutoFollowPatternResponse' })
export type CcrPauseAutoFollowPatternResponse = z.infer<typeof CcrPauseAutoFollowPatternResponse>
