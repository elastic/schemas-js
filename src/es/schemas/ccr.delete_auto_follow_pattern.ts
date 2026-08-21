/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'

/**
 * Delete auto-follow patterns.
 *
 * Delete a collection of cross-cluster replication auto-follow patterns.
 */
export const CcrDeleteAutoFollowPatternRequest = z.object({
  name: z.lazy(() => Name).describe('The auto-follow pattern collection to delete.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrDeleteAutoFollowPatternRequest' })
export type CcrDeleteAutoFollowPatternRequest = z.infer<typeof CcrDeleteAutoFollowPatternRequest>

export const CcrDeleteAutoFollowPatternResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'CcrDeleteAutoFollowPatternResponse' })
export type CcrDeleteAutoFollowPatternResponse = z.infer<typeof CcrDeleteAutoFollowPatternResponse>
