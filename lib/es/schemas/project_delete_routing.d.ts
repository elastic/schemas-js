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
/** Delete a project routing expression. */
export declare const ProjectDeleteRoutingRequest: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type ProjectDeleteRoutingRequest = z.infer<typeof ProjectDeleteRoutingRequest>;
export declare const ProjectDeleteRoutingResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type ProjectDeleteRoutingResponse = z.infer<typeof ProjectDeleteRoutingResponse>;
//# sourceMappingURL=project_delete_routing.d.ts.map