import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/** A non-materialized ES|QL view. */
export declare const EsqlESQLView: z.ZodObject<{
    name: z.ZodString;
    query: z.ZodString;
}, z.core.$strip>;
export type EsqlESQLView = z.infer<typeof EsqlESQLView>;
/**
 * Get an ES|QL view.
 *
 * Returns a stored ES|QL view.
 */
export declare const EsqlGetViewRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EsqlGetViewRequest = z.infer<typeof EsqlGetViewRequest>;
export declare const EsqlGetViewResponse: z.ZodObject<{
    views: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        query: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EsqlGetViewResponse = z.infer<typeof EsqlGetViewResponse>;
//# sourceMappingURL=esql_get_view.d.ts.map