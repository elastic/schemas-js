/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/**
 * Delete a calendar.
 *
 * Remove all scheduled events from a calendar, then delete it.
 */
export const MlDeleteCalendarRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteCalendarRequest' })
export type MlDeleteCalendarRequest = z.infer<typeof MlDeleteCalendarRequest>

export const MlDeleteCalendarResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteCalendarResponse' })
export type MlDeleteCalendarResponse = z.infer<typeof MlDeleteCalendarResponse>
