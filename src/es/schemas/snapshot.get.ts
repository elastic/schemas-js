/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, ErrorCause, Name, Names, SortOrder, integer } from './_types.js'
import { SnapshotSnapshotInfo } from './snapshot.js'

export const SnapshotSnapshotSort = z.enum(['start_time', 'duration', 'name', 'index_count', 'repository', 'shard_count', 'failed_shard_count']).meta({ id: 'SnapshotSnapshotSort' })
export type SnapshotSnapshotSort = z.infer<typeof SnapshotSnapshotSort>

export const SnapshotSnapshotState = z.enum(['IN_PROGRESS', 'SUCCESS', 'FAILED', 'PARTIAL', 'INCOMPATIBLE']).meta({ id: 'SnapshotSnapshotState' })
export type SnapshotSnapshotState = z.infer<typeof SnapshotSnapshotState>

/**
 * Get snapshot information.
 *
 * NOTE: The `after` parameter and `next` field enable you to iterate through snapshots with some consistency guarantees regarding concurrent creation or deletion of snapshots.
 * It is guaranteed that any snapshot that exists at the beginning of the iteration and is not concurrently deleted will be seen during the iteration.
 * Snapshots concurrently created may be seen during an iteration.
 */
export const SnapshotGetRequest = z.object({
  repository: z.lazy(() => Name).describe('A comma-separated list of snapshot repository names used to limit the request. Wildcard (`*`) expressions are supported.').meta({ found_in: 'path' }),
  snapshot: z.lazy(() => Names).describe('A comma-separated list of snapshot names to retrieve Wildcards (`*`) are supported. * To get information about all snapshots in a registered repository, use a wildcard (`*`) or `_all`. * To get information about any snapshots that are currently running, use `_current`.').meta({ found_in: 'path' }),
  after: z.string().describe('An offset identifier to start pagination from as returned by the next field in the response body.').optional().meta({ found_in: 'query' }),
  from_sort_value: z.string().describe('The value of the current sort column at which to start retrieval. It can be a string `snapshot-` or a repository name when sorting by snapshot or repository name. It can be a millisecond time value or a number when sorting by `index-` or shard count.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error for any snapshots that are unavailable.').optional().meta({ found_in: 'query' }),
  index_details: z.boolean().describe('If `true`, the response includes additional information about each index in the snapshot comprising the number of shards in the index, the total size of the index in bytes, and the maximum number of segments per shard in the index. The default is `false`, meaning that this information is omitted.').optional().meta({ found_in: 'query' }),
  index_names: z.boolean().describe('If `true`, the response includes the name of each index in each snapshot.').optional().meta({ found_in: 'query' }),
  include_repository: z.boolean().describe('If `true`, the response includes the repository name in each snapshot.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  order: z.lazy(() => SortOrder).describe('The sort order. Valid values are `asc` for ascending and `desc` for descending order. The default behavior is ascending order.').optional().meta({ found_in: 'query' }),
  offset: z.lazy(() => integer).describe('Numeric offset to start pagination from based on the snapshots matching this request. Using a non-zero value for this parameter is mutually exclusive with using the after parameter. Defaults to 0.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('The maximum number of snapshots to return. The default is -1, which means to return all that match the request without limit.').optional().meta({ found_in: 'query' }),
  slm_policy_filter: z.lazy(() => Name).describe('Filter snapshots by a comma-separated list of snapshot lifecycle management (SLM) policy names that snapshots belong to. You can use wildcards (`*`) and combinations of wildcards followed by exclude patterns starting with `-`. For example, the pattern `*,-policy-a-*` will return all snapshots except for those that were created by an SLM policy with a name starting with `policy-a-`. Note that the wildcard pattern `*` matches all snapshots created by an SLM policy but not those snapshots that were not created by an SLM policy. To include snapshots that were not created by an SLM policy, you can use the special pattern `_none` that will match all snapshots without an SLM policy.').optional().meta({ found_in: 'query' }),
  sort: SnapshotSnapshotSort.describe('The sort order for the result. The default behavior is sorting by snapshot start time stamp.').optional().meta({ found_in: 'query' }),
  state: z.union([SnapshotSnapshotState, z.array(SnapshotSnapshotState)]).describe('Only return snapshots with a state found in the given comma-separated list of snapshot states. The default is all snapshot states.').optional().meta({ found_in: 'query' }),
  verbose: z.boolean().describe('If `true`, returns additional information about each snapshot such as the version of Elasticsearch which took the snapshot, the start and end times of the snapshot, and the number of shards snapshotted. NOTE: The parameters `size`, `order`, `after`, `from_sort_value`, `offset`, `slm_policy_filter`, and `sort` are not supported when you set `verbose=false` and the sort order for requests with `verbose=false` is undefined.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SnapshotGetRequest' })
export type SnapshotGetRequest = z.infer<typeof SnapshotGetRequest>

export const SnapshotGetSnapshotResponseItem = z.object({
  repository: z.lazy(() => Name),
  snapshots: z.array(SnapshotSnapshotInfo).optional(),
  error: z.lazy(() => ErrorCause).optional()
}).meta({ id: 'SnapshotGetSnapshotResponseItem' })
export type SnapshotGetSnapshotResponseItem = z.infer<typeof SnapshotGetSnapshotResponseItem>

export const SnapshotGetResponse = z.object({
  remaining: z.lazy(() => integer).describe('The number of remaining snapshots that were not returned due to size limits and that can be fetched by additional requests using the `next` field value.'),
  total: z.lazy(() => integer).describe('The total number of snapshots that match the request when ignoring the size limit or `after` query parameter.'),
  next: z.string().describe('If the request contained a size limit and there might be more results, a `next` field will be added to the response. It can be used as the `after` query parameter to fetch additional results.').optional(),
  responses: z.array(SnapshotGetSnapshotResponseItem).optional(),
  snapshots: z.array(SnapshotSnapshotInfo).optional()
}).meta({ id: 'SnapshotGetResponse' })
export type SnapshotGetResponse = z.infer<typeof SnapshotGetResponse>
