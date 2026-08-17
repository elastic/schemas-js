/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration, IndexName } from './_types.js'

/**
 * Convert an index alias to a data stream.
 *
 * Converts an index alias to a data stream.
 * You must have a matching index template that is data stream enabled.
 * The alias must meet the following criteria:
 * The alias must have a write index;
 * All indices for the alias must have a `@timestamp` field mapping of a `date` or `date_nanos` field type;
 * The alias must not have any filters;
 * The alias must not use custom routing.
 * If successful, the request removes the alias and creates a data stream with the same name.
 * The indices for the alias become hidden backing indices for the stream.
 * The write index for the alias becomes the write index for the stream.
 */
export const IndicesMigrateToDataStreamRequest = z.object({
  name: z.lazy(() => IndexName).describe('Name of the index alias to convert to a data stream.').meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'IndicesMigrateToDataStreamRequest' })
export type IndicesMigrateToDataStreamRequest = z.infer<typeof IndicesMigrateToDataStreamRequest>

export const IndicesMigrateToDataStreamResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'IndicesMigrateToDataStreamResponse' })
export type IndicesMigrateToDataStreamResponse = z.infer<typeof IndicesMigrateToDataStreamResponse>
