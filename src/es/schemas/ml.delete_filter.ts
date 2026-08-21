/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a filter.
 *
 * If an anomaly detection job references the filter, you cannot delete the
 * filter. You must update or delete the job before you can delete the filter.
 */
export const MlDeleteFilterRequest = z.object({
  filter_id: z.lazy(() => Id).describe('A string that uniquely identifies a filter.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteFilterRequest' })
export type MlDeleteFilterRequest = z.infer<typeof MlDeleteFilterRequest>

export const MlDeleteFilterResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteFilterResponse' })
export type MlDeleteFilterResponse = z.infer<typeof MlDeleteFilterResponse>
