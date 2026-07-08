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
/** The failure store lifecycle configures the data stream lifecycle configuration for failure indices. */
export const IndicesFailureStoreLifecycle = z.object({
    data_retention: Duration.describe('If defined, every document added to this data stream will be stored at least for this time frame. Any time after this duration the document could be deleted. When empty, every document in this data stream will be stored indefinitely.').optional(),
    enabled: z.boolean().describe('If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle that\'s disabled (enabled: `false`) will have no effect on the data stream.').optional()
}).meta({ id: 'IndicesFailureStoreLifecycle' });
/** Data stream failure store contains the configuration of the failure store for a given data stream. */
export const IndicesDataStreamFailureStore = z.object({
    enabled: z.boolean().describe('If defined, it turns the failure store on/off (`true`/`false`) for this data stream. A data stream failure store that\'s disabled (enabled: `false`) will redirect no new failed indices to the failure store; however, it will not remove any existing data from the failure store.').optional(),
    lifecycle: IndicesFailureStoreLifecycle.describe('If defined, it specifies the lifecycle configuration for the failure store of this data stream.').optional()
}).meta({ id: 'IndicesDataStreamFailureStore' });
/**
 * Data stream options contain the configuration of data stream level features for a given data stream, for example,
 * the failure store configuration.
 */
export const IndicesDataStreamOptions = z.object({
    failure_store: IndicesDataStreamFailureStore.describe('If defined, it specifies configuration for the failure store of this data stream.').optional()
}).meta({ id: 'IndicesDataStreamOptions' });
export const IndicesGetDataStreamOptionsDataStreamWithOptions = z.object({
    name: DataStreamName,
    options: IndicesDataStreamOptions.optional()
}).meta({ id: 'IndicesGetDataStreamOptionsDataStreamWithOptions' });
/**
 * Get data stream options.
 *
 * Get the data stream options configuration of one or more data streams.
 */
export const IndicesGetDataStreamOptionsRequest = z.object({
    ...RequestBase.shape,
    name: DataStreamNames.describe('Comma-separated list of data streams to limit the request. Supports wildcards (`*`). To target all data streams, omit this parameter or use `*` or `_all`.').meta({ found_in: 'path' }),
    expand_wildcards: ExpandWildcards.describe('Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`.').optional().meta({ found_in: 'query' }),
    master_timeout: Duration.describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesGetDataStreamOptionsRequest' });
export const IndicesGetDataStreamOptionsResponse = z.object({
    data_streams: z.array(IndicesGetDataStreamOptionsDataStreamWithOptions)
}).meta({ id: 'IndicesGetDataStreamOptionsResponse' });
//# sourceMappingURL=indices_get_data_stream_options.js.map