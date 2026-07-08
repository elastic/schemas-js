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
export declare const SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase: z.ZodObject<{
    name: z.ZodString;
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase = z.infer<typeof SearchApplicationPutBehavioralAnalyticsAnalyticsAcknowledgeResponseBase>;
/**
 * Create a behavioral analytics collection.
 * @deprecated
 */
export declare const SearchApplicationPutBehavioralAnalyticsRequest: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type SearchApplicationPutBehavioralAnalyticsRequest = z.infer<typeof SearchApplicationPutBehavioralAnalyticsRequest>;
export declare const SearchApplicationPutBehavioralAnalyticsResponse: z.ZodObject<{
    name: z.ZodString;
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SearchApplicationPutBehavioralAnalyticsResponse = z.infer<typeof SearchApplicationPutBehavioralAnalyticsResponse>;
//# sourceMappingURL=search_application_put_behavioral_analytics.d.ts.map