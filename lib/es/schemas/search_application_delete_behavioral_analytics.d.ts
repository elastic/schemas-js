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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a behavioral analytics collection.
 *
 * The associated data stream is also deleted.
 * @deprecated
 */
export declare const SearchApplicationDeleteBehavioralAnalyticsRequest: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type SearchApplicationDeleteBehavioralAnalyticsRequest = z.infer<typeof SearchApplicationDeleteBehavioralAnalyticsRequest>;
export declare const SearchApplicationDeleteBehavioralAnalyticsResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SearchApplicationDeleteBehavioralAnalyticsResponse = z.infer<typeof SearchApplicationDeleteBehavioralAnalyticsResponse>;
//# sourceMappingURL=search_application_delete_behavioral_analytics.d.ts.map