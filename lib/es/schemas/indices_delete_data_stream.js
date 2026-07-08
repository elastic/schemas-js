/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
export const DataStreamName = z.string().meta({ id: 'DataStreamName' });
export const DataStreamNames = z.union([DataStreamName, z.array(DataStreamName)]).meta({ id: 'DataStreamNames' });
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const ExpandWildcard = z.enum(['all', 'open', 'closed', 'hidden', 'none']).meta({ id: 'ExpandWildcard' });
export const ExpandWildcards = z.union([ExpandWildcard, z.array(ExpandWildcard)]).meta({ id: 'ExpandWildcards' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Delete data streams.
 *
 * Deletes one or more data streams and their backing indices.
 */
export const IndicesDeleteDataStreamRequest = z.object({
    ...RequestBase.shape,
    name: DataStreamNames.describe('Comma-separated list of data streams to delete. Wildcard (`*`) expressions are supported.').meta({ found_in: 'path' }),
    master_timeout: Duration.describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
    expand_wildcards: ExpandWildcards.describe('Type of data stream that wildcard patterns can match. Supports comma-separated values,such as `open,hidden`.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteDataStreamRequest' });
export const IndicesDeleteDataStreamResponse = AcknowledgedResponseBase.meta({ id: 'IndicesDeleteDataStreamResponse' });
//# sourceMappingURL=indices_delete_data_stream.js.map