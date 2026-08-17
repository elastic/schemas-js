/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Ids } from './_types.js'

/**
 * Delete an ES|QL view.
 *
 * Deletes a stored ES|QL view.
 */
export const EsqlDeleteViewRequest = z.object({
  name: z.lazy(() => Ids).describe('The view name to remove.').meta({ found_in: 'path' })
}).meta({ id: 'EsqlDeleteViewRequest' })
export type EsqlDeleteViewRequest = z.infer<typeof EsqlDeleteViewRequest>

export const EsqlDeleteViewResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'EsqlDeleteViewResponse' })
export type EsqlDeleteViewResponse = z.infer<typeof EsqlDeleteViewResponse>
