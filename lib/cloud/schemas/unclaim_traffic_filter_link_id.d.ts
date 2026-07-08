import { z } from 'zod';
export declare const EmptyResponse: z.ZodObject<{}, z.core.$strip>;
export type EmptyResponse = z.infer<typeof EmptyResponse>;
export declare const TrafficFilterClaimedLinkIdRequest: z.ZodObject<{
    link_id: z.ZodOptional<z.ZodString>;
    azure_endpoint_name: z.ZodOptional<z.ZodString>;
    azure_endpoint_guid: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
}, z.core.$strip>;
export type TrafficFilterClaimedLinkIdRequest = z.infer<typeof TrafficFilterClaimedLinkIdRequest>;
//# sourceMappingURL=unclaim_traffic_filter_link_id.d.ts.map