/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ProjectProjectRoutingExpression } from './project.js'

/** Get a project routing expression. */
export const ProjectGetRoutingRequest = z.object({
  name: z.string().describe('The name of project routing expression').meta({ found_in: 'path' })
}).meta({ id: 'ProjectGetRoutingRequest' })
export type ProjectGetRoutingRequest = z.infer<typeof ProjectGetRoutingRequest>

export const ProjectGetRoutingResponse = ProjectProjectRoutingExpression.meta({ id: 'ProjectGetRoutingResponse' })
export type ProjectGetRoutingResponse = z.infer<typeof ProjectGetRoutingResponse>
