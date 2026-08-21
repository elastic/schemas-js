/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Name } from './_types.js'
import { SnapshotRepository } from './snapshot.js'

/**
 * Create or update a snapshot repository.
 *
 * IMPORTANT: If you are migrating searchable snapshots, the repository name must be identical in the source and destination clusters.
 * To register a snapshot repository, the cluster's global metadata must be writeable.
 * Ensure there are no cluster blocks (for example, `cluster.blocks.read_only` and `clsuter.blocks.read_only_allow_delete` settings) that prevent write access.
 *
 * Several options for this API can be specified using a query parameter or a request body parameter.
 * If both parameters are specified, only the query parameter is used.
 */
export const SnapshotCreateRepositoryRequest = z.object({
  name: z.lazy(() => Name).describe('The name of the snapshot repository to register or update.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  verify: z.boolean().describe('If `true`, the request verifies the repository is functional on all master and data nodes in the cluster. If `false`, this verification is skipped. You can also perform this verification with the verify snapshot repository API.').optional().meta({ found_in: 'query' }),
  repository: SnapshotRepository.optional().meta({ found_in: 'body' })
}).meta({ id: 'SnapshotCreateRepositoryRequest' })
export type SnapshotCreateRepositoryRequest = z.infer<typeof SnapshotCreateRepositoryRequest>

export const SnapshotCreateRepositoryResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'SnapshotCreateRepositoryResponse' })
export type SnapshotCreateRepositoryResponse = z.infer<typeof SnapshotCreateRepositoryResponse>
