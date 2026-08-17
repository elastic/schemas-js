/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Id, Ids } from './_types.js'

/** Delete anomaly jobs from a calendar. */
export const MlDeleteCalendarJobRequest = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.').meta({ found_in: 'path' }),
  job_id: z.lazy(() => Ids).describe('An identifier for the anomaly detection jobs. It can be a job identifier, a group name, or a comma-separated list of jobs or groups.').meta({ found_in: 'path' })
}).meta({ id: 'MlDeleteCalendarJobRequest' })
export type MlDeleteCalendarJobRequest = z.infer<typeof MlDeleteCalendarJobRequest>

export const MlDeleteCalendarJobResponse = z.object({
  calendar_id: z.lazy(() => Id).describe('A string that uniquely identifies a calendar.'),
  description: z.string().describe('A description of the calendar.').optional(),
  job_ids: z.lazy(() => Ids).describe('A list of anomaly detection job identifiers or group names.')
}).meta({ id: 'MlDeleteCalendarJobResponse' })
export type MlDeleteCalendarJobResponse = z.infer<typeof MlDeleteCalendarJobResponse>
