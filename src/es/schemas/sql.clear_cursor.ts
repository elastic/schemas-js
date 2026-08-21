/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

/** Clear an SQL search cursor. */
export const SqlClearCursorRequest = z.object({
  cursor: z.string().describe('Cursor to clear.').meta({ found_in: 'body' })
}).meta({ id: 'SqlClearCursorRequest' })
export type SqlClearCursorRequest = z.infer<typeof SqlClearCursorRequest>

export const SqlClearCursorResponse = z.object({
  succeeded: z.boolean()
}).meta({ id: 'SqlClearCursorResponse' })
export type SqlClearCursorResponse = z.infer<typeof SqlClearCursorResponse>
