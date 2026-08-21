/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Names } from './_types.js'
import { SnapshotRepository } from './snapshot.js'

/** Get snapshot repository information. */
export const SnapshotGetRepositoryRequest = z.object({
  name: z.lazy(() => Names).describe('A comma-separated list of snapshot repository names used to limit the request. Wildcard (`*`) expressions are supported including combining wildcards with exclude patterns starting with `-`. To get information about all snapshot repositories registered in the cluster, omit this parameter or use `*` or `_all`.').optional().meta({ found_in: 'path' }),
  local: z.boolean().describe('If `true`, the request gets information from the local node only. If `false`, the request gets information from the master node.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SnapshotGetRepositoryRequest' })
export type SnapshotGetRepositoryRequest = z.infer<typeof SnapshotGetRepositoryRequest>

export const SnapshotGetRepositoryResponse = z.record(z.string(), SnapshotRepository).meta({ id: 'SnapshotGetRepositoryResponse' })
export type SnapshotGetRepositoryResponse = z.infer<typeof SnapshotGetRepositoryResponse>
