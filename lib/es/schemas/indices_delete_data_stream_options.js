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
 * Delete data stream options.
 *
 * Removes the data stream options from a data stream.
 */
export const IndicesDeleteDataStreamOptionsRequest = z.object({
    ...RequestBase.shape,
    name: DataStreamNames.describe('A comma-separated list of data streams of which the data stream options will be deleted. Use `*` to get all data streams').meta({ found_in: 'path' }),
    expand_wildcards: ExpandWildcards.describe('Whether wildcard expressions should get expanded to open or closed indices').optional().meta({ found_in: 'query' }),
    master_timeout: Duration.describe('The period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
    timeout: Duration.describe('The period to wait for a response.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesDeleteDataStreamOptionsRequest' });
export const IndicesDeleteDataStreamOptionsResponse = AcknowledgedResponseBase.meta({ id: 'IndicesDeleteDataStreamOptionsResponse' });
//# sourceMappingURL=indices_delete_data_stream_options.js.map