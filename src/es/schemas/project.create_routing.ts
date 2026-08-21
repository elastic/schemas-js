/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase } from './_types.js'
import { ProjectProjectRoutingExpression } from './project.js'

/** Create or update a project routing expression. */
export const ProjectCreateRoutingRequest = z.object({
  name: z.string().describe('The name of project routing expression').meta({ found_in: 'path' }),
  expressions: ProjectProjectRoutingExpression.optional().meta({ found_in: 'body' })
}).meta({ id: 'ProjectCreateRoutingRequest' })
export type ProjectCreateRoutingRequest = z.infer<typeof ProjectCreateRoutingRequest>

export const ProjectCreateRoutingResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ProjectCreateRoutingResponse' })
export type ProjectCreateRoutingResponse = z.infer<typeof ProjectCreateRoutingResponse>
