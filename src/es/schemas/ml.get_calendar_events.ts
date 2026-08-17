/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Id, integer, long } from './_types.js'
import { MlCalendarEvent } from './ml.js'

/** Get info about events in calendars. */
export const MlGetCalendarEventsRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar. You can get information for multiple calendars by using a comma-separated list of ids or a wildcard expression. You can get information for all calendars by using `_all` or `*` or by omitting the calendar identifier.').meta({ found_in: 'path' }),
  end: z.lazy(() => DateTime).describe('Specifies to get events with timestamps earlier than this time.').optional().meta({ found_in: 'query' }),
  from: z.lazy(() => integer).describe('Skips the specified number of events.').optional().meta({ found_in: 'query' }),
  job_id: z.lazy(() => Id).describe('Specifies to get events for a specific anomaly detection job identifier or job group. It must be used with a calendar identifier of `_all` or `*`.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of events to obtain.').optional().meta({ found_in: 'query' }),
  start: z.lazy(() => DateTime).describe('Specifies to get events with timestamps after this time.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlGetCalendarEventsRequest' })
export type MlGetCalendarEventsRequest = z.infer<typeof MlGetCalendarEventsRequest>

export const MlGetCalendarEventsResponse = z.object({
  count: z.lazy(() => long),
  events: z.array(MlCalendarEvent)
}).meta({ id: 'MlGetCalendarEventsResponse' })
export type MlGetCalendarEventsResponse = z.infer<typeof MlGetCalendarEventsResponse>
