/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const ProjectRoutingExpression = z.string().meta({ id: 'ProjectRoutingExpression' })
export type ProjectRoutingExpression = z.infer<typeof ProjectRoutingExpression>

export const ProjectProjectRoutingExpression = z.object({
  expression: ProjectRoutingExpression
}).meta({ id: 'ProjectProjectRoutingExpression' })
export type ProjectProjectRoutingExpression = z.infer<typeof ProjectProjectRoutingExpression>

export const ProjectNamedProjectRoutingExpressions = z.record(z.string(), ProjectProjectRoutingExpression).meta({ id: 'ProjectNamedProjectRoutingExpressions' })
export type ProjectNamedProjectRoutingExpressions = z.infer<typeof ProjectNamedProjectRoutingExpressions>
