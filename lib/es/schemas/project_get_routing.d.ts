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
/** Get a project routing expression. */
export declare const ProjectGetRoutingRequest: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type ProjectGetRoutingRequest = z.infer<typeof ProjectGetRoutingRequest>;
export declare const ProjectGetRoutingResponse: z.ZodObject<{
    expression: z.ZodString;
}, z.core.$strip>;
export type ProjectGetRoutingResponse = z.infer<typeof ProjectGetRoutingResponse>;
//# sourceMappingURL=project_get_routing.d.ts.map