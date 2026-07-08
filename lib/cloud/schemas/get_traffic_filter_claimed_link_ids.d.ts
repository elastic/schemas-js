import { z } from 'zod';
export declare const TrafficFilterClaimedLinkIdInfo: z.ZodObject<{
    link_id: z.ZodOptional<z.ZodString>;
    azure_endpoint_name: z.ZodOptional<z.ZodString>;
    azure_endpoint_guid: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
}, z.core.$strip>;
export type TrafficFilterClaimedLinkIdInfo = z.infer<typeof TrafficFilterClaimedLinkIdInfo>;
export declare const TrafficFilterClaimedLinkIds: z.ZodObject<{
    claimed_link_ids: z.ZodArray<z.ZodObject<{
        link_id: z.ZodOptional<z.ZodString>;
        azure_endpoint_name: z.ZodOptional<z.ZodString>;
        azure_endpoint_guid: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TrafficFilterClaimedLinkIds = z.infer<typeof TrafficFilterClaimedLinkIds>;
//# sourceMappingURL=get_traffic_filter_claimed_link_ids.d.ts.map