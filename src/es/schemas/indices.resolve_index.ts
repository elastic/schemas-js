/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DataStreamName, ExpandWildcards, Field, Indices, Name, Names } from './_types.js'

export const IndicesIndexMode = z.enum(['standard', 'time_series', 'logsdb', 'lookup']).meta({ id: 'IndicesIndexMode' })
export type IndicesIndexMode = z.infer<typeof IndicesIndexMode>

/**
 * Resolve indices.
 *
 * Resolve the names and/or index patterns for indices, aliases, and data streams.
 * Multiple patterns and remote clusters are supported.
 */
export const IndicesResolveIndexRequest = z.object({
  name: z.lazy(() => Names).describe('Comma-separated name(s) or index pattern(s) of the indices, aliases, and data streams to resolve. Resources on remote clusters can be specified using the `<cluster>`:`<name>` syntax.').meta({ found_in: 'path' }),
  expand_wildcards: z.lazy(() => ExpandWildcards).describe('Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
  ignore_unavailable: z.boolean().describe('If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored.').optional().meta({ found_in: 'query' }),
  allow_no_indices: z.boolean().describe('A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result.').optional().meta({ found_in: 'query' }),
  mode: z.union([IndicesIndexMode, z.array(IndicesIndexMode)]).describe('Filter indices by index mode - standard, lookup, time_series, etc. Comma-separated list of IndexMode. Empty means no filter.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesResolveIndexRequest' })
export type IndicesResolveIndexRequest = z.infer<typeof IndicesResolveIndexRequest>

export const IndicesResolveIndexResolveIndexAliasItem = z.object({
  name: z.lazy(() => Name),
  indices: z.lazy(() => Indices)
}).meta({ id: 'IndicesResolveIndexResolveIndexAliasItem' })
export type IndicesResolveIndexResolveIndexAliasItem = z.infer<typeof IndicesResolveIndexResolveIndexAliasItem>

export const IndicesResolveIndexResolveIndexDataStreamsItem = z.object({
  name: z.lazy(() => DataStreamName),
  timestamp_field: z.lazy(() => Field),
  backing_indices: z.lazy(() => Indices)
}).meta({ id: 'IndicesResolveIndexResolveIndexDataStreamsItem' })
export type IndicesResolveIndexResolveIndexDataStreamsItem = z.infer<typeof IndicesResolveIndexResolveIndexDataStreamsItem>

export const IndicesResolveIndexResolveIndexItem = z.object({
  name: z.lazy(() => Name),
  aliases: z.array(z.string()).optional(),
  attributes: z.array(z.string()),
  data_stream: z.lazy(() => DataStreamName).optional(),
  mode: IndicesIndexMode.optional()
}).meta({ id: 'IndicesResolveIndexResolveIndexItem' })
export type IndicesResolveIndexResolveIndexItem = z.infer<typeof IndicesResolveIndexResolveIndexItem>

export const IndicesResolveIndexResponse = z.object({
  indices: z.array(IndicesResolveIndexResolveIndexItem),
  aliases: z.array(IndicesResolveIndexResolveIndexAliasItem),
  data_streams: z.array(IndicesResolveIndexResolveIndexDataStreamsItem)
}).meta({ id: 'IndicesResolveIndexResponse' })
export type IndicesResolveIndexResponse = z.infer<typeof IndicesResolveIndexResponse>
