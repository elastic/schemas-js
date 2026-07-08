import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const SearchApplicationEventType: z.ZodEnum<{
    search: "search";
    page_view: "page_view";
    search_click: "search_click";
}>;
export type SearchApplicationEventType = z.infer<typeof SearchApplicationEventType>;
/**
 * Create a behavioral analytics collection event.
 * @deprecated
 */
export declare const SearchApplicationPostBehavioralAnalyticsEventRequest: z.ZodObject<{
    collection_name: z.ZodString;
    event_type: z.ZodEnum<{
        search: "search";
        page_view: "page_view";
        search_click: "search_click";
    }>;
    debug: z.ZodOptional<z.ZodBoolean>;
    payload: z.ZodAny;
}, z.core.$strip>;
export type SearchApplicationPostBehavioralAnalyticsEventRequest = z.infer<typeof SearchApplicationPostBehavioralAnalyticsEventRequest>;
export declare const SearchApplicationPostBehavioralAnalyticsEventResponse: z.ZodObject<{
    accepted: z.ZodBoolean;
    event: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type SearchApplicationPostBehavioralAnalyticsEventResponse = z.infer<typeof SearchApplicationPostBehavioralAnalyticsEventResponse>;
//# sourceMappingURL=search_application_post_behavioral_analytics_event.d.ts.map