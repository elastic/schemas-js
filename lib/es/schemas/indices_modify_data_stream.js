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
export const IndexName = z.string().meta({ id: 'IndexName' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const IndicesModifyDataStreamIndexAndDataStreamAction = z.object({
    data_stream: DataStreamName.describe('Data stream targeted by the action.'),
    index: IndexName.describe('Index for the action.')
}).meta({ id: 'IndicesModifyDataStreamIndexAndDataStreamAction' });
const IndicesModifyDataStreamActionExclusiveProps = z.union([z.object({ add_backing_index: IndicesModifyDataStreamIndexAndDataStreamAction }), z.object({ remove_backing_index: IndicesModifyDataStreamIndexAndDataStreamAction })]);
export const IndicesModifyDataStreamAction = IndicesModifyDataStreamActionExclusiveProps.meta({ id: 'IndicesModifyDataStreamAction' });
/**
 * Update data streams.
 *
 * Performs one or more data stream modification actions in a single atomic operation.
 */
export const IndicesModifyDataStreamRequest = z.object({
    ...RequestBase.shape,
    actions: z.array(IndicesModifyDataStreamAction).describe('Actions to perform.').meta({ found_in: 'body' })
}).meta({ id: 'IndicesModifyDataStreamRequest' });
export const IndicesModifyDataStreamResponse = AcknowledgedResponseBase.meta({ id: 'IndicesModifyDataStreamResponse' });
//# sourceMappingURL=indices_modify_data_stream.js.map