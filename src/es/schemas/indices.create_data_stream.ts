/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, DataStreamName, Duration } from './_types.js'

/**
 * Create a data stream.
 *
 * You must have a matching index template with data stream enabled.
 */
export const IndicesCreateDataStreamRequest = z.object({
  name: z.lazy(() => DataStreamName).describe('Name of the data stream, which must meet the following criteria: Lowercase only; Cannot include ``, `/`, `*`, `?`, `"`, `<`, `>`, `|`, `,`, `#`, `:`, or a space character; Cannot start with `-`, `_`, `+`, or `.ds-`; Cannot be `.` or `..`; Cannot be longer than 255 bytes. Multi-byte characters count towards this limit faster.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesCreateDataStreamRequest' })
export type IndicesCreateDataStreamRequest = z.infer<typeof IndicesCreateDataStreamRequest>

export const IndicesCreateDataStreamResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesCreateDataStreamResponse' })
export type IndicesCreateDataStreamResponse = z.infer<typeof IndicesCreateDataStreamResponse>
