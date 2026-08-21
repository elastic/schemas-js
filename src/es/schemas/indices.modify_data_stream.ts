/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamName, IndexName } from './_types.js'

export const IndicesModifyDataStreamIndexAndDataStreamAction = z.object({
  data_stream: z.lazy(() => DataStreamName).describe('Data stream targeted by the action.'),
  index: z.lazy(() => IndexName).describe('Index for the action.')
}).meta({ id: 'IndicesModifyDataStreamIndexAndDataStreamAction' })
export type IndicesModifyDataStreamIndexAndDataStreamAction = z.infer<typeof IndicesModifyDataStreamIndexAndDataStreamAction>

const IndicesModifyDataStreamActionExclusiveProps = z.union([z.object({ add_backing_index: IndicesModifyDataStreamIndexAndDataStreamAction }), z.object({ remove_backing_index: IndicesModifyDataStreamIndexAndDataStreamAction })])

export const IndicesModifyDataStreamAction = IndicesModifyDataStreamActionExclusiveProps.meta({ id: 'IndicesModifyDataStreamAction' })
export type IndicesModifyDataStreamAction = z.infer<typeof IndicesModifyDataStreamAction>

/**
 * Update data streams.
 *
 * Performs one or more data stream modification actions in a single atomic operation.
 */
export const IndicesModifyDataStreamRequest = z.object({
  actions: z.array(IndicesModifyDataStreamAction).describe('Actions to perform.').meta({ found_in: 'body' })
}).meta({ id: 'IndicesModifyDataStreamRequest' })
export type IndicesModifyDataStreamRequest = z.infer<typeof IndicesModifyDataStreamRequest>

export const IndicesModifyDataStreamResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesModifyDataStreamResponse' })
export type IndicesModifyDataStreamResponse = z.infer<typeof IndicesModifyDataStreamResponse>
