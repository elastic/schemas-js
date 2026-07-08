import { z } from 'zod';
export declare const GetFleetCloudConnectorsCloudconnectoridUsageResponse: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        created_at: z.ZodString;
        id: z.ZodString;
        name: z.ZodString;
        package: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            title: z.ZodString;
            version: z.ZodString;
        }, z.core.$strip>>;
        policy_ids: z.ZodArray<z.ZodString>;
        updated_at: z.ZodString;
    }, z.core.$strip>>;
    page: z.ZodNumber;
    perPage: z.ZodNumber;
    total: z.ZodNumber;
}, z.core.$strip>;
export type GetFleetCloudConnectorsCloudconnectoridUsageResponse = z.infer<typeof GetFleetCloudConnectorsCloudconnectoridUsageResponse>;
//# sourceMappingURL=get_fleet_cloud_connectors_cloudconnectorid_usage.d.ts.map