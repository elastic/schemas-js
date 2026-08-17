/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, Uuid } from './_types.js'

/**
 * Import a dangling index.
 *
 * If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling.
 * For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
 */
export const DanglingIndicesImportDanglingIndexRequest = z.object({
  index_uuid: z.lazy(() => Uuid).describe('The UUID of the index to import. Use the get dangling indices API to locate the UUID.').meta({ found_in: 'path' }),
  accept_data_loss: z.boolean().describe('This parameter must be set to true to import a dangling index. Because Elasticsearch cannot know where the dangling index data came from or determine which shard copies are fresh and which are stale, it cannot guarantee that the imported data represents the latest state of the index when it was last in the cluster.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response.').optional().meta({ found_in: 'query' })
}).meta({ id: 'DanglingIndicesImportDanglingIndexRequest' })
export type DanglingIndicesImportDanglingIndexRequest = z.infer<typeof DanglingIndicesImportDanglingIndexRequest>

export const DanglingIndicesImportDanglingIndexResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'DanglingIndicesImportDanglingIndexResponse' })
export type DanglingIndicesImportDanglingIndexResponse = z.infer<typeof DanglingIndicesImportDanglingIndexResponse>
