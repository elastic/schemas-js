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
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const ProjectRoutingExpression = z.string().meta({ id: 'ProjectRoutingExpression' });
export const ProjectProjectRoutingExpression = z.object({
    expression: ProjectRoutingExpression
}).meta({ id: 'ProjectProjectRoutingExpression' });
export const ProjectNamedProjectRoutingExpressions = z.record(z.string(), ProjectProjectRoutingExpression).meta({ id: 'ProjectNamedProjectRoutingExpressions' });
/** Create or update project routing expressions. */
export const ProjectCreateManyRoutingRequest = z.object({
    ...RequestBase.shape,
    expressions: ProjectNamedProjectRoutingExpressions.meta({ found_in: 'body' })
}).meta({ id: 'ProjectCreateManyRoutingRequest' });
export const ProjectCreateManyRoutingResponse = AcknowledgedResponseBase.meta({ id: 'ProjectCreateManyRoutingResponse' });
//# sourceMappingURL=project_create_many_routing.js.map