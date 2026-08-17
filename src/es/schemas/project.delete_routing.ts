/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase } from './_types.js'

/** Delete a project routing expression. */
export const ProjectDeleteRoutingRequest = z.object({
  name: z.string().describe('The name of project routing expression').meta({ found_in: 'path' })
}).meta({ id: 'ProjectDeleteRoutingRequest' })
export type ProjectDeleteRoutingRequest = z.infer<typeof ProjectDeleteRoutingRequest>

export const ProjectDeleteRoutingResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ProjectDeleteRoutingResponse' })
export type ProjectDeleteRoutingResponse = z.infer<typeof ProjectDeleteRoutingResponse>
