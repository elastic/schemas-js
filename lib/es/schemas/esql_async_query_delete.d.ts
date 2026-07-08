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
 * Delete an async ES|QL query.
 *
 * If the query is still running, it is cancelled.
 * Otherwise, the stored results are deleted.
 *
 * If the Elasticsearch security features are enabled, only the following users can use this API to delete a query:
 *
 * * The authenticated user that submitted the original query request
 * * Users with the `cancel_task` cluster privilege
 */
export declare const EsqlAsyncQueryDeleteRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type EsqlAsyncQueryDeleteRequest = z.infer<typeof EsqlAsyncQueryDeleteRequest>;
export declare const EsqlAsyncQueryDeleteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type EsqlAsyncQueryDeleteResponse = z.infer<typeof EsqlAsyncQueryDeleteResponse>;
//# sourceMappingURL=esql_async_query_delete.d.ts.map