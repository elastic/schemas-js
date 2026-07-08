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
 * Delete an async SQL search.
 *
 * Delete an async SQL search or a stored synchronous SQL search.
 * If the search is still running, the API cancels it.
 *
 * If the Elasticsearch security features are enabled, only the following users can use this API to delete a search:
 *
 * * Users with the `cancel_task` cluster privilege.
 * * The user who first submitted the search.
 */
export declare const SqlDeleteAsyncRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type SqlDeleteAsyncRequest = z.infer<typeof SqlDeleteAsyncRequest>;
export declare const SqlDeleteAsyncResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SqlDeleteAsyncResponse = z.infer<typeof SqlDeleteAsyncResponse>;
//# sourceMappingURL=sql_delete_async.d.ts.map