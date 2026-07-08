import { z } from 'zod';
export declare const TrafficFilterClaimedLinkIdInfo: z.ZodObject<{
    link_id: z.ZodOptional<z.ZodString>;
    azure_endpoint_name: z.ZodOptional<z.ZodString>;
    azure_endpoint_guid: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
}, z.core.$strip>;
export type TrafficFilterClaimedLinkIdInfo = z.infer<typeof TrafficFilterClaimedLinkIdInfo>;
export declare const TrafficFilterClaimedLinkIdRequest: z.ZodObject<{
    link_id: z.ZodOptional<z.ZodString>;
    azure_endpoint_name: z.ZodOptional<z.ZodString>;
    azure_endpoint_guid: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
}, z.core.$strip>;
export type TrafficFilterClaimedLinkIdRequest = z.infer<typeof TrafficFilterClaimedLinkIdRequest>;
//# sourceMappingURL=claim_traffic_filter_link_id.d.ts.map