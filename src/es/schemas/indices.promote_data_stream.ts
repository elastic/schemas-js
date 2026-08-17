/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, IndexName } from './_types.js'

/**
 * Promote a data stream.
 *
 * Promote a data stream from a replicated data stream managed by cross-cluster replication (CCR) to a regular data stream.
 *
 * With CCR auto following, a data stream from a remote cluster can be replicated to the local cluster.
 * These data streams can't be rolled over in the local cluster.
 * These replicated data streams roll over only if the upstream data stream rolls over.
 * In the event that the remote cluster is no longer available, the data stream in the local cluster can be promoted to a regular data stream, which allows these data streams to be rolled over in the local cluster.
 *
 * NOTE: When promoting a data stream, ensure the local cluster has a data stream enabled index template that matches the data stream.
 * If this is missing, the data stream will not be able to roll over until a matching index template is created.
 * This will affect the lifecycle management of the data stream and interfere with the data stream size and retention.
 */
export const IndicesPromoteDataStreamRequest = z.object({
  name: z.lazy(() => IndexName).describe('The name of the data stream to promote').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesPromoteDataStreamRequest' })
export type IndicesPromoteDataStreamRequest = z.infer<typeof IndicesPromoteDataStreamRequest>

export const IndicesPromoteDataStreamResponse = z.any().meta({ id: 'IndicesPromoteDataStreamResponse' })
export type IndicesPromoteDataStreamResponse = z.infer<typeof IndicesPromoteDataStreamResponse>
