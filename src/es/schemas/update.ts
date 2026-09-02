/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Fields, Id, IndexName, InlineGet, Refresh, Script, ScriptSource, SequenceNumber, WriteResponseBase, integer, long } from './_types.js'
import type { ScriptSourceShape } from './_types.js'
import { SearchSourceConfig } from './search.js'

/**
 * Update a document.
 *
 * Update a document by running a script or passing a partial document.
 *
 * If the Elasticsearch security features are enabled, you must have the `index` or `write` index privilege for the target index or index alias.
 *
 * The script can update, delete, or skip modifying the document.
 * The API also supports passing a partial document, which is merged into the existing document.
 * To fully replace an existing document, use the index API.
 * This operation:
 *
 * * Gets the document (collocated with the shard) from the index.
 * * Runs the specified script.
 * * Indexes the result.
 *
 * The document must still be reindexed, but using this API removes some network roundtrips and reduces chances of version conflicts between the GET and the index operation.
 *
 * The `_source` field must be enabled to use this API.
 * In addition to `_source`, you can access the following variables through the `ctx` map: `_index`, `_type`, `_id`, `_version`, `_routing`, and `_now` (the current timestamp).
 * For usage examples such as partial updates, upserts, and scripted updates, see the External documentation.
 */
export const UpdateRequest = z.object({
  id: z.lazy(() => Id).describe('A unique identifier for the document to be updated.').meta({ found_in: 'path' }),
  index: z.lazy(() => IndexName).describe('The name of the target index. By default, the index is created automatically if it doesn\'t exist.').meta({ found_in: 'path' }),
  if_primary_term: z.lazy(() => long).describe('Only perform the operation if the document has this primary term.').optional().meta({ found_in: 'query' }),
  if_seq_no: z.lazy(() => SequenceNumber).describe('Only perform the operation if the document has this sequence number.').optional().meta({ found_in: 'query' }),
  include_source_on_error: z.boolean().describe('True or false if to include the document source in the error message in case of parsing errors.').optional().meta({ found_in: 'query' }),
  lang: z.string().describe('The script language.').optional().meta({ found_in: 'query' }),
  refresh: z.lazy(() => Refresh).describe('If \'true\', Elasticsearch refreshes the affected shards to make this operation visible to search. If \'wait_for\', it waits for a refresh to make this operation visible to search. If \'false\', it does nothing with refreshes.').optional().meta({ found_in: 'query' }),
  require_alias: z.boolean().describe('If `true`, the destination must be an index alias.').optional().meta({ found_in: 'query' }),
  retry_on_conflict: z.lazy(() => integer).describe('The number of times the operation should be retried when a conflict occurs.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for the following operations: dynamic mapping updates and waiting for active shards. Elasticsearch waits for at least the timeout period before failing. The actual wait time could be longer, particularly when multiple waits occur.').optional().meta({ found_in: 'query' }),
  _source_excludes: z.lazy(() => Fields).describe('The source fields you want to exclude.').optional().meta({ found_in: 'query' }),
  _source_includes: z.lazy(() => Fields).describe('The source fields you want to retrieve.').optional().meta({ found_in: 'query' }),
  detect_noop: z.boolean().describe('If `true`, the `result` in the response is set to `noop` (no operation) when there are no changes to the document.').optional().meta({ found_in: 'body' }),
  doc: z.any().describe('A partial update to an existing document. If both `doc` and `script` are specified, `doc` is ignored.').optional().meta({ found_in: 'body' }),
  doc_as_upsert: z.boolean().describe('If `true`, use the contents of \'doc\' as the value of \'upsert\'. NOTE: Using ingest pipelines with `doc_as_upsert` is not supported.').optional().meta({ found_in: 'body' }),
  script: z.union([z.lazy(() => Script), z.lazy(() => ScriptSource)]).describe('The script to run to update the document.').optional().meta({ found_in: 'body' }),
  scripted_upsert: z.boolean().describe('If `true`, run the script whether or not the document exists.').optional().meta({ found_in: 'body' }),
  _source: z.lazy(() => SearchSourceConfig).describe('If `false`, turn off source retrieval. You can also specify a comma-separated list of the fields you want to retrieve.').optional().meta({ found_in: 'body' }),
  upsert: z.any().describe('If the document does not already exist, the contents of \'upsert\' are inserted as a new document. If the document exists, the \'script\' is run.').optional().meta({ found_in: 'body' })
}).meta({ id: 'UpdateRequest' })
export type UpdateRequest = z.infer<typeof UpdateRequest>

export const UpdateUpdateWriteResponseBase = z.object({
  ...WriteResponseBase.shape,
  get: z.lazy(() => InlineGet).optional()
}).meta({ id: 'UpdateUpdateWriteResponseBase' })
export type UpdateUpdateWriteResponseBase = z.infer<typeof UpdateUpdateWriteResponseBase>

export const UpdateResponse = UpdateUpdateWriteResponseBase.meta({ id: 'UpdateResponse' })
export type UpdateResponse = z.infer<typeof UpdateResponse>
