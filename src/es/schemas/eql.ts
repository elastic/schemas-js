/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DurationValue, Field, Id, IndexName, ShardFailure } from './_types.js'
import { SearchTotalHits } from './search.js'

export const EqlHitsEvent = z.object({
  _index: z.lazy(() => IndexName).describe('Name of the index containing the event.'),
  _id: z.lazy(() => Id).describe('Unique identifier for the event. This ID is only unique within the index.'),
  _source: z.any().describe('Original JSON body passed for the event at index time.'),
  missing: z.boolean().describe('Set to `true` for events in a timespan-constrained sequence that do not meet a given condition.').optional(),
  fields: z.record(z.lazy(() => Field), z.array(z.any())).optional()
}).meta({ id: 'EqlHitsEvent' })
export type EqlHitsEvent = z.infer<typeof EqlHitsEvent>

export const EqlHitsSequence = z.object({
  events: z.array(EqlHitsEvent).describe('Contains events matching the query. Each object represents a matching event.'),
  join_keys: z.array(z.any()).describe('Shared field values used to constrain matches in the sequence. These are defined using the by keyword in the EQL query syntax.').optional()
}).meta({ id: 'EqlHitsSequence' })
export type EqlHitsSequence = z.infer<typeof EqlHitsSequence>

export const EqlEqlHits = z.object({
  total: SearchTotalHits.describe('Metadata about the number of matching events or sequences.').optional(),
  events: z.array(EqlHitsEvent).describe('Contains events matching the query. Each object represents a matching event.').optional(),
  sequences: z.array(EqlHitsSequence).describe('Contains event sequences matching the query. Each object represents a matching sequence. This parameter is only returned for EQL queries containing a sequence.').optional()
}).meta({ id: 'EqlEqlHits' })
export type EqlEqlHits = z.infer<typeof EqlEqlHits>

export const EqlEqlSearchResponseBase = z.object({
  id: z.lazy(() => Id).describe('Identifier for the search.').optional(),
  is_partial: z.boolean().describe('If true, the response does not contain complete search results.').optional(),
  is_running: z.boolean().describe('If true, the search request is still executing.').optional(),
  took: z.lazy(() => DurationValue).describe('Milliseconds it took Elasticsearch to execute the request.').optional(),
  timed_out: z.boolean().describe('If true, the request timed out before completion.').optional(),
  hits: EqlEqlHits.describe('Contains matching events and sequences. Also contains related metadata.'),
  shard_failures: z.array(ShardFailure).describe('Contains information about shard failures (if any), in case allow_partial_search_results=true').optional()
}).meta({ id: 'EqlEqlSearchResponseBase' })
export type EqlEqlSearchResponseBase = z.infer<typeof EqlEqlSearchResponseBase>
