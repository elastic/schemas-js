/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id } from './_types.js'
import { MlCalendarEvent } from './ml.js'

/** Add scheduled events to the calendar. */
export const MlPostCalendarEventsRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.').meta({ found_in: 'path' }),
  events: z.array(MlCalendarEvent).describe('A list of one of more scheduled events. The event’s start and end times can be specified as integer milliseconds since the epoch or as a string in ISO 8601 format.').meta({ found_in: 'body' })
}).meta({ id: 'MlPostCalendarEventsRequest' })
export type MlPostCalendarEventsRequest = z.infer<typeof MlPostCalendarEventsRequest>

export const MlPostCalendarEventsResponse = z.object({
  events: z.array(MlCalendarEvent)
}).meta({ id: 'MlPostCalendarEventsResponse' })
export type MlPostCalendarEventsResponse = z.infer<typeof MlPostCalendarEventsResponse>
