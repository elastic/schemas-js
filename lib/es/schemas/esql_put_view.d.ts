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
/** Create or update an ES|QL view. */
export declare const EsqlPutViewRequest: z.ZodObject<{
    name: z.ZodString;
    query: z.ZodString;
}, z.core.$strip>;
export type EsqlPutViewRequest = z.infer<typeof EsqlPutViewRequest>;
export declare const EsqlPutViewResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type EsqlPutViewResponse = z.infer<typeof EsqlPutViewResponse>;
//# sourceMappingURL=esql_put_view.d.ts.map