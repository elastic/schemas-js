import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const ProjectRoutingExpression: z.ZodString;
export type ProjectRoutingExpression = z.infer<typeof ProjectRoutingExpression>;
export declare const ProjectProjectRoutingExpression: z.ZodObject<{
    expression: z.ZodString;
}, z.core.$strip>;
export type ProjectProjectRoutingExpression = z.infer<typeof ProjectProjectRoutingExpression>;
export declare const ProjectNamedProjectRoutingExpressions: z.ZodRecord<z.ZodString, z.ZodObject<{
    expression: z.ZodString;
}, z.core.$strip>>;
export type ProjectNamedProjectRoutingExpressions = z.infer<typeof ProjectNamedProjectRoutingExpressions>;
/** Get project routing expressions. */
export declare const ProjectGetManyRoutingRequest: z.ZodObject<{}, z.core.$strip>;
export type ProjectGetManyRoutingRequest = z.infer<typeof ProjectGetManyRoutingRequest>;
export declare const ProjectGetManyRoutingResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    expression: z.ZodString;
}, z.core.$strip>>;
export type ProjectGetManyRoutingResponse = z.infer<typeof ProjectGetManyRoutingResponse>;
//# sourceMappingURL=project_get_many_routing.d.ts.map