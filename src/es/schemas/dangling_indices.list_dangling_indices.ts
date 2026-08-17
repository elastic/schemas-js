/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { EpochTime, Ids } from './_types.js'

export const DanglingIndicesListDanglingIndicesDanglingIndex = z.object({
  index_name: z.string(),
  index_uuid: z.string(),
  creation_date_millis: z.lazy(() => EpochTime),
  node_ids: z.lazy(() => Ids)
}).meta({ id: 'DanglingIndicesListDanglingIndicesDanglingIndex' })
export type DanglingIndicesListDanglingIndicesDanglingIndex = z.infer<typeof DanglingIndicesListDanglingIndicesDanglingIndex>

/**
 * Get the dangling indices.
 *
 * If Elasticsearch encounters index data that is absent from the current cluster state, those indices are considered to be dangling.
 * For example, this can happen if you delete more than `cluster.indices.tombstones.size` indices while an Elasticsearch node is offline.
 *
 * Use this API to list dangling indices, which you can then import or delete.
 */
export const DanglingIndicesListDanglingIndicesRequest = z.object({
}).meta({ id: 'DanglingIndicesListDanglingIndicesRequest' })
export type DanglingIndicesListDanglingIndicesRequest = z.infer<typeof DanglingIndicesListDanglingIndicesRequest>

export const DanglingIndicesListDanglingIndicesResponse = z.object({
  dangling_indices: z.array(DanglingIndicesListDanglingIndicesDanglingIndex)
}).meta({ id: 'DanglingIndicesListDanglingIndicesResponse' })
export type DanglingIndicesListDanglingIndicesResponse = z.infer<typeof DanglingIndicesListDanglingIndicesResponse>
