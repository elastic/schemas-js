import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const ProjectRoutingExpression: z.ZodString;
export type ProjectRoutingExpression = z.infer<typeof ProjectRoutingExpression>;
export declare const ProjectProjectRoutingExpression: z.ZodObject<{
    expression: z.ZodString;
}, z.core.$strip>;
export type ProjectProjectRoutingExpression = z.infer<typeof ProjectProjectRoutingExpression>;
/** Create or update a project routing expression. */
export declare const ProjectCreateRoutingRequest: z.ZodObject<{
    name: z.ZodString;
    expressions: z.ZodObject<{
        expression: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ProjectCreateRoutingRequest = z.infer<typeof ProjectCreateRoutingRequest>;
export declare const ProjectCreateRoutingResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type ProjectCreateRoutingResponse = z.infer<typeof ProjectCreateRoutingResponse>;
//# sourceMappingURL=project_create_routing.d.ts.map