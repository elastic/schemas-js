/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const ProjectRoutingExpression = z.string().meta({ id: 'ProjectRoutingExpression' });
export const ProjectProjectRoutingExpression = z.object({
    expression: ProjectRoutingExpression
}).meta({ id: 'ProjectProjectRoutingExpression' });
export const ProjectNamedProjectRoutingExpressions = z.record(z.string(), ProjectProjectRoutingExpression).meta({ id: 'ProjectNamedProjectRoutingExpressions' });
/** Get project routing expressions. */
export const ProjectGetManyRoutingRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'ProjectGetManyRoutingRequest' });
export const ProjectGetManyRoutingResponse = ProjectNamedProjectRoutingExpressions.meta({ id: 'ProjectGetManyRoutingResponse' });
//# sourceMappingURL=project_get_many_routing.js.map