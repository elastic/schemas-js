import { z } from 'zod';
export declare const Security_Detections_API_AlertsSortCombinations: z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>;
export type Security_Detections_API_AlertsSortCombinations = z.infer<typeof Security_Detections_API_AlertsSortCombinations>;
export declare const Security_Detections_API_AlertsSort: z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>]>;
export type Security_Detections_API_AlertsSort = z.infer<typeof Security_Detections_API_AlertsSort>;
export declare const Security_Detections_API_QueryAlertsBodyParams: z.ZodObject<{
    _source: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString, z.ZodArray<z.ZodString>]>>;
    aggs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    fields: z.ZodOptional<z.ZodArray<z.ZodString>>;
    query: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    runtime_mappings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    size: z.ZodOptional<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodUnion<readonly [z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>, z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodRecord<z.ZodString, z.ZodUnknown>]>>]>>;
    track_total_hits: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Security_Detections_API_QueryAlertsBodyParams = z.infer<typeof Security_Detections_API_QueryAlertsBodyParams>;
export declare const SearchAlertsResponse: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export type SearchAlertsResponse = z.infer<typeof SearchAlertsResponse>;
//# sourceMappingURL=search_alerts.d.ts.map