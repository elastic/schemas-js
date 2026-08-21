/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase } from './_types.js'
import { ProjectNamedProjectRoutingExpressions } from './project.js'

/** Create or update project routing expressions. */
export const ProjectCreateManyRoutingRequest = z.object({
  expressions: ProjectNamedProjectRoutingExpressions.optional().meta({ found_in: 'body' })
}).meta({ id: 'ProjectCreateManyRoutingRequest' })
export type ProjectCreateManyRoutingRequest = z.infer<typeof ProjectCreateManyRoutingRequest>

export const ProjectCreateManyRoutingResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'ProjectCreateManyRoutingResponse' })
export type ProjectCreateManyRoutingResponse = z.infer<typeof ProjectCreateManyRoutingResponse>
