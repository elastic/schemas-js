/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ProjectNamedProjectRoutingExpressions } from './project.js'

/** Get project routing expressions. */
export const ProjectGetManyRoutingRequest = z.object({
}).meta({ id: 'ProjectGetManyRoutingRequest' })
export type ProjectGetManyRoutingRequest = z.infer<typeof ProjectGetManyRoutingRequest>

export const ProjectGetManyRoutingResponse = ProjectNamedProjectRoutingExpressions.meta({ id: 'ProjectGetManyRoutingResponse' })
export type ProjectGetManyRoutingResponse = z.infer<typeof ProjectGetManyRoutingResponse>
