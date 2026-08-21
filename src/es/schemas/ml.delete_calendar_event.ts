/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Id } from './_types.js'

/** Delete events from a calendar. */
export const MlDeleteCalendarEventRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.').meta({ found_in: 'path' }),
  event_id: z.lazy(() => Id).describe('Identifier for the scheduled event. You can obtain this identifier by using the get calendar events API.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteCalendarEventRequest' })
export type MlDeleteCalendarEventRequest = z.infer<typeof MlDeleteCalendarEventRequest>

export const MlDeleteCalendarEventResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlDeleteCalendarEventResponse' })
export type MlDeleteCalendarEventResponse = z.infer<typeof MlDeleteCalendarEventResponse>
