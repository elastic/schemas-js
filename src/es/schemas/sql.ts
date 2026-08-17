/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Name } from './_types.js'

export const SqlColumn = z.object({
  name: z.lazy(() => Name),
  type: z.string()
}).meta({ id: 'SqlColumn' })
export type SqlColumn = z.infer<typeof SqlColumn>

export const SqlRow = z.array(z.any()).meta({ id: 'SqlRow' })
export type SqlRow = z.infer<typeof SqlRow>
