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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete an async EQL search.
 *
 * Delete an async EQL search or a stored synchronous EQL search.
 * The API also deletes results for the search.
 */
export declare const EqlDeleteRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type EqlDeleteRequest = z.infer<typeof EqlDeleteRequest>;
export declare const EqlDeleteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type EqlDeleteResponse = z.infer<typeof EqlDeleteResponse>;
//# sourceMappingURL=eql_delete.d.ts.map