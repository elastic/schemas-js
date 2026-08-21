/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, integer, long } from './_types.js'
import { MlPage } from './ml.js'

export const MlGetCalendarsCalendar = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.'),
  description: z.string().describe('A description of the calendar.').optional(),
  job_ids: z.array(z.lazy(() => Id)).describe('An array of anomaly detection job identifiers.')
}).meta({ id: 'MlGetCalendarsCalendar' })
export type MlGetCalendarsCalendar = z.infer<typeof MlGetCalendarsCalendar>

/** Get calendar configuration info. */
export const MlGetCalendarsRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar. You can get information for multiple calendars by using a comma-separated list of ids or a wildcard expression. You can get information for all calendars by using `_all` or `*` or by omitting the calendar identifier.').optional().meta({ found_in: 'path' }),
  from: z.lazy(() => integer).describe('Skips the specified number of calendars. This parameter is supported only when you omit the calendar identifier.').optional().meta({ found_in: 'query' }),
  size: z.lazy(() => integer).describe('Specifies the maximum number of calendars to obtain. This parameter is supported only when you omit the calendar identifier.').optional().meta({ found_in: 'query' }),
  page: MlPage.describe('This object is supported only when you omit the calendar identifier.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlGetCalendarsRequest' })
export type MlGetCalendarsRequest = z.infer<typeof MlGetCalendarsRequest>

export const MlGetCalendarsResponse = z.object({
  calendars: z.array(MlGetCalendarsCalendar),
  count: z.lazy(() => long)
}).meta({ id: 'MlGetCalendarsResponse' })
export type MlGetCalendarsResponse = z.infer<typeof MlGetCalendarsResponse>
