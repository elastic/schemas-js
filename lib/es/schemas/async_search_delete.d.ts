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
 * Delete an async search.
 *
 * If the asynchronous search is still running, it is cancelled.
 * Otherwise, the saved search results are deleted.
 * If the Elasticsearch security features are enabled, the deletion of a specific async search is restricted to: the authenticated user that submitted the original search request; users that have the `cancel_task` cluster privilege.
 */
export declare const AsyncSearchDeleteRequest: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type AsyncSearchDeleteRequest = z.infer<typeof AsyncSearchDeleteRequest>;
export declare const AsyncSearchDeleteResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AsyncSearchDeleteResponse = z.infer<typeof AsyncSearchDeleteResponse>;
//# sourceMappingURL=async_search_delete.d.ts.map