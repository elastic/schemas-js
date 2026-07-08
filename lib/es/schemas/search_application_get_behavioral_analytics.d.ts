import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SearchApplicationEventDataStream: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type SearchApplicationEventDataStream = z.infer<typeof SearchApplicationEventDataStream>;
export declare const SearchApplicationAnalyticsCollection: z.ZodObject<{
    event_data_stream: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SearchApplicationAnalyticsCollection = z.infer<typeof SearchApplicationAnalyticsCollection>;
/**
 * Get behavioral analytics collections.
 * @deprecated
 */
export declare const SearchApplicationGetBehavioralAnalyticsRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type SearchApplicationGetBehavioralAnalyticsRequest = z.infer<typeof SearchApplicationGetBehavioralAnalyticsRequest>;
export declare const SearchApplicationGetBehavioralAnalyticsResponse: z.ZodRecord<z.ZodString, z.ZodObject<{
    event_data_stream: z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>>;
export type SearchApplicationGetBehavioralAnalyticsResponse = z.infer<typeof SearchApplicationGetBehavioralAnalyticsResponse>;
//# sourceMappingURL=search_application_get_behavioral_analytics.d.ts.map