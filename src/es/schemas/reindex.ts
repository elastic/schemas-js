/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { BulkIndexByScrollFailure, Conflicts, Duration, DurationValue, EpochTime, Host, IndexName, Indices, OpType, Password, ReindexStatus, Retries, Script, ScriptSource, SlicedScroll, Slices, Sort, TaskId, Username, VersionType, float, integer, long } from './_types.js'
import type { ScriptSourceShape } from './_types.js'
import { MappingRuntimeFields } from './_types.mapping.js'
import { QueryDslQueryContainer } from './_types.query_dsl.js'
import { SearchSourceConfig } from './search.js'

export const ReindexDestination = z.object({
  index: z.lazy(() => IndexName).describe('The name of the data stream, index, or index alias you are copying to.'),
  op_type: z.lazy(() => OpType).describe('If it is `create`, the operation will only index documents that do not already exist (also known as "put if absent"). IMPORTANT: To reindex to a data stream destination, this argument must be `create`.').optional(),
  pipeline: z.string().describe('The name of the pipeline to use.').optional(),
  routing: z.string().describe('By default, a document\'s routing is preserved unless it\'s changed by the script. If it is `keep`, the routing on the bulk request sent for each match is set to the routing on the match. If it is `discard`, the routing on the bulk request sent for each match is set to `null`. If it is `=value`, the routing on the bulk request sent for each match is set to all value specified after the equals sign (`=`). Not allowed when `index.slice.enabled` is `true` for the destination index; use `_slice` instead.').optional(),
  version_type: z.lazy(() => VersionType).describe('The versioning to use for the indexing operation.').optional()
}).meta({ id: 'ReindexDestination' })
export type ReindexDestination = z.infer<typeof ReindexDestination>

export const ReindexRemoteSource = z.object({
  connect_timeout: z.lazy(() => Duration).describe('The remote connection timeout.').optional(),
  headers: z.record(z.string(), z.string()).describe('An object containing the headers of the request.').optional(),
  host: z.lazy(() => Host).describe('The URL for the remote instance of Elasticsearch that you want to index from. This information is required when you\'re indexing from remote.'),
  username: z.lazy(() => Username).describe('The username to use for authentication with the remote host (required when using basic auth).').optional(),
  password: z.lazy(() => Password).describe('The password to use for authentication with the remote host (required when using basic auth).').optional(),
  api_key: z.string().describe('The API key to use for authentication with the remote host (as an alternative to basic auth when the remote cluster is in Elastic Cloud). (It is not permitted to set this and also to set an `Authorization` header via `headers`.)').optional(),
  socket_timeout: z.lazy(() => Duration).describe('The remote socket read timeout.').optional()
}).meta({ id: 'ReindexRemoteSource' })
export type ReindexRemoteSource = z.infer<typeof ReindexRemoteSource>

export const ReindexSource = z.object({
  index: z.lazy(() => Indices).describe('The name of the data stream, index, or alias you are copying from. It accepts a comma-separated list to reindex from multiple sources.'),
  query: z.lazy(() => QueryDslQueryContainer).describe('The documents to reindex, which is defined with Query DSL.').optional(),
  remote: ReindexRemoteSource.describe('A remote instance of Elasticsearch that you want to index from.').optional(),
  size: z.lazy(() => integer).describe('The number of documents to index per batch. Use it when you are indexing from remote to ensure that the batches fit within the on-heap buffer, which defaults to a maximum size of 100 MB.').optional(),
  slice: z.lazy(() => SlicedScroll).describe('Slice the reindex request manually using the provided slice ID and total number of slices.').optional(),
  sort: z.lazy(() => Sort).describe('A comma-separated list of `<field>:<direction>` pairs to sort by before indexing. Use it in conjunction with `max_docs` to control what documents are reindexed. WARNING: Sort in reindex is deprecated. Sorting in reindex was never guaranteed to index documents in order and prevents further development of reindex such as resilience and performance improvements. If used in combination with `max_docs`, consider using a query filter instead.').optional(),
  source_fields: z.lazy(() => SearchSourceConfig).describe('If `true`, reindex all source fields. Set it to a list to reindex select fields.').optional(),
  runtime_mappings: z.lazy(() => MappingRuntimeFields).optional()
}).meta({ id: 'ReindexSource' })
export type ReindexSource = z.infer<typeof ReindexSource>

/**
 * Reindex documents.
 *
 * Copy documents from a source to a destination.
 * You can copy all documents to the destination index or reindex a subset of the documents.
 * The source can be any existing index, alias, or data stream.
 * The destination must differ from the source.
 * For example, you cannot reindex a data stream into itself.
 *
 * IMPORTANT: Reindex requires `_source` to be enabled for all documents in the source.
 * The destination should be configured as wanted before calling the reindex API.
 * Reindex does not copy the settings from the source or its associated template.
 * Mappings, shard counts, and replicas, for example, must be configured ahead of time.
 *
 * If the Elasticsearch security features are enabled, you must have the following security privileges:
 *
 * * The `read` index privilege for the source data stream, index, or alias.
 * * The `write` index privilege for the destination data stream, index, or index alias.
 * * To automatically create a data stream or index with a reindex API request, you must have the `auto_configure`, `create_index`, or `manage` index privilege for the destination data stream, index, or alias.
 * * If reindexing from a remote cluster, the `source.remote.user` must have the `monitor` cluster privilege and the `read` index privilege for the source data stream, index, or alias.
 *
 * If reindexing from a remote cluster into a cluster using Elastic Stack, you must explicitly allow the remote host using the `reindex.remote.whitelist` node setting on the destination cluster.
 * If reindexing from a remote cluster into an Elastic Cloud Serverless project, only remote hosts from [Elastic Cloud Hosted and Elastic Cloud Serverless](https://cloud.elastic.co/registration?page=docs&placement=docs-body) are allowed.
 * Automatic data stream creation requires a matching index template with data stream enabled.
 *
 * The `dest` element can be configured like the index API to control optimistic concurrency control.
 * Omitting `version_type` or setting it to `internal` causes Elasticsearch to blindly dump documents into the destination, overwriting any that happen to have the same ID.
 *
 * Setting `version_type` to `external` causes Elasticsearch to preserve the `version` from the source, create any documents that are missing, and update any documents that have an older version in the destination than they do in the source.
 *
 * Setting `op_type` to `create` causes the reindex API to create only missing documents in the destination.
 * All existing documents will cause a version conflict.
 *
 * IMPORTANT: Because data streams are append-only, any reindex request to a destination data stream must have an `op_type` of `create`.
 * A reindex can only add new documents to a destination data stream.
 * It cannot update existing documents in a destination data stream.
 *
 * By default, version conflicts abort the reindex process.
 * To continue reindexing if there are conflicts, set the `conflicts` request body property to `proceed`.
 * In this case, the response includes a count of the version conflicts that were encountered.
 * Note that the handling of other error types is unaffected by the `conflicts` property.
 * Additionally, if you opt to count version conflicts, the operation could attempt to reindex more documents from the source than `max_docs` until it has successfully indexed `max_docs` documents into the target or it has gone through every document in the source query.
 *
 * It's recommended to reindex on indices with a green status. Reindexing can fail when a node shuts down or crashes.
 * * When requested with `wait_for_completion=true` (default), the request fails if the node shuts down.
 * * When requested with `wait_for_completion=false`, a task id is returned, for use with the task management APIs. The task may disappear or fail if the node shuts down.
 * When retrying a failed reindex operation, it might be necessary to set `conflicts=proceed` or to first delete the partial destination index.
 * Additionally, dry runs, checking disk space, and fetching index recovery information can help address the root cause.
 *
 * Refer to the linked documentation for examples of how to reindex documents.
 */
export const ReindexRequest = z.object({
  refresh: z.boolean().describe('If `true`, the request refreshes affected shards to make this operation visible to search.').optional().meta({ found_in: 'query' }),
  requests_per_second: z.lazy(() => float).describe('The maximum number of documents to index per second, across the entire reindex operation (including slices). It can be either `-1` to turn off throttling or any decimal number like `1.7` or `12` to throttle to that level.').optional().meta({ found_in: 'query' }),
  scroll: z.lazy(() => Duration).describe('The period of time that a consistent view of the index should be maintained for scrolled search. In serverless, and stack versions >= v9.5.0, we use PIT rather than scroll for pagination. We only use scroll for reindexing from remote clusters that are older than v7.10.0. Therefore, this parameter is ignored unless you are reindexing from a remote cluster that is older than v7.10.0.').optional().meta({ found_in: 'query' }),
  slices: Slices.describe('The number of slices this task should be divided into. It defaults to one slice, which means the task isn\'t sliced into subtasks. Reindex supports sliced scroll to parallelize the reindexing process. This parallelization can improve efficiency and provide a convenient way to break the request down into smaller parts. NOTE: Reindexing from remote clusters does not support manual or automatic slicing. If set to `auto`, Elasticsearch chooses the number of slices to use. This setting will use one slice per shard, up to a certain limit. If there are multiple sources, it will choose the number of slices based on the index or backing index with the smallest number of shards.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period each indexing waits for automatic index creation, dynamic mapping updates, and waiting for active shards. By default, Elasticsearch waits for at least one minute before failing. The actual wait time could be longer, particularly when multiple waits occur.').optional().meta({ found_in: 'query' }),
  wait_for_completion: z.boolean().describe('If `true`, the request blocks until the operation is complete. If your requested reindex operation is complex or time-consuming, it might timeout due to transport-layer limitations. While the reindex will continue to be processed by the cluster, your client will not receive updates on status automatically after timeout. Set this option `true` if you anticipate a long-running reindex.').optional().meta({ found_in: 'query' }),
  require_alias: z.boolean().describe('If `true`, the destination must be an index alias.').optional().meta({ found_in: 'query' }),
  conflicts: Conflicts.describe('Indicates whether to continue reindexing even when there are conflicts.').optional().meta({ found_in: 'body' }),
  dest: ReindexDestination.describe('The destination you are copying to.').meta({ found_in: 'body' }),
  max_docs: z.lazy(() => long).describe('The maximum number of documents to reindex. By default, all documents are reindexed. If it is a value less then or equal to `scroll_size`, a scroll will not be used to retrieve the results for the operation. If `conflicts` is set to `proceed`, the reindex operation could attempt to reindex more documents from the source than `max_docs` until it has successfully indexed `max_docs` documents into the target or it has gone through every document in the source query.').optional().meta({ found_in: 'body' }),
  script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]).describe('The script to run to update the document source or metadata when reindexing.').optional().meta({ found_in: 'body' }),
  source: ReindexSource.describe('The source you are copying from.').meta({ found_in: 'body' })
}).meta({ id: 'ReindexRequest' })
export type ReindexRequest = z.infer<typeof ReindexRequest>

export const ReindexResponse = z.object({
  batches: z.lazy(() => long).describe('The number of scroll responses that were pulled back by the reindex.').optional(),
  created: z.lazy(() => long).describe('The number of documents that were successfully created.').optional(),
  deleted: z.lazy(() => long).describe('The number of documents that were successfully deleted.').optional(),
  failures: z.array(BulkIndexByScrollFailure).describe('If there were any unrecoverable errors during the process, it is an array of those failures. If this array is not empty, the request ended because of those failures. Reindex is implemented using batches and any failure causes the entire process to end but all failures in the current batch are collected into the array. You can use the `conflicts` option to prevent the reindex from ending on version conflicts.').optional(),
  noops: z.lazy(() => long).describe('The number of documents that were ignored because the script used for the reindex returned a `noop` value for `ctx.op`.').optional(),
  retries: Retries.describe('The number of retries attempted by reindex.').optional(),
  requests_per_second: z.lazy(() => float).describe('The number of requests per second effectively run during the reindex.').optional(),
  slice_id: z.lazy(() => integer).optional(),
  slices: z.array(ReindexStatus).describe('Status of each slice if the reindex was sliced').optional(),
  task: TaskId.optional(),
  throttled_millis: z.lazy(() => EpochTime).describe('The number of milliseconds the request slept to conform to `requests_per_second`.').optional(),
  throttled_until_millis: z.lazy(() => EpochTime).describe('This field should always be equal to zero in a reindex response. It has meaning only when using the task API, where it indicates the next time (in milliseconds since epoch) that a throttled request will be run again in order to conform to `requests_per_second`.').optional(),
  timed_out: z.boolean().describe('If any of the requests that ran during the reindex timed out, it is `true`.').optional(),
  took: z.lazy(() => DurationValue).describe('The total milliseconds the entire operation took.').optional(),
  total: z.lazy(() => long).describe('The number of documents that were successfully processed.').optional(),
  updated: z.lazy(() => long).describe('The number of documents that were successfully updated. That is to say, a document with the same ID already existed before the reindex updated it.').optional(),
  version_conflicts: z.lazy(() => long).describe('The number of version conflicts that occurred.').optional()
}).meta({ id: 'ReindexResponse' })
export type ReindexResponse = z.infer<typeof ReindexResponse>
