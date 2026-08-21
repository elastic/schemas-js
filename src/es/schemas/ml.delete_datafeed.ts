/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/** Delete a datafeed. */
export const MlDeleteDatafeedRequest = z.object({
  datafeed_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters.').meta({ found_in: 'path' }),
  force: z.boolean().describe('Use to forcefully delete a started datafeed; this method is quicker than stopping and deleting the datafeed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlDeleteDatafeedRequest' })
export type MlDeleteDatafeedRequest = z.infer<typeof MlDeleteDatafeedRequest>

export const MlDeleteDatafeedResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteDatafeedResponse' })
export type MlDeleteDatafeedResponse = z.infer<typeof MlDeleteDatafeedResponse>
