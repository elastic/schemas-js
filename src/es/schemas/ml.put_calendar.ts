/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Ids } from './_types.js'

/** Create a calendar. */
export const MlPutCalendarRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.').meta({ found_in: 'path' }),
  job_ids: z.array(z.lazy(() => Id)).describe('An array of anomaly detection job identifiers.').optional().meta({ found_in: 'body' }),
  description: z.string().describe('A description of the calendar.').optional().meta({ found_in: 'body' })
}).meta({ id: 'MlPutCalendarRequest' })
export type MlPutCalendarRequest = z.infer<typeof MlPutCalendarRequest>

export const MlPutCalendarResponse = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.'),
  description: z.string().describe('A description of the calendar.').optional(),
  job_ids: z.lazy(() => Ids).describe('A list of anomaly detection job identifiers or group names.')
}).meta({ id: 'MlPutCalendarResponse' })
export type MlPutCalendarResponse = z.infer<typeof MlPutCalendarResponse>
