import { z } from 'zod';
export declare const GetFleetCloudConnectorsCloudconnectoridResponse: z.ZodObject<{
    item: z.ZodObject<{
        accountType: z.ZodOptional<z.ZodString>;
        cloudProvider: z.ZodString;
        created_at: z.ZodString;
        id: z.ZodString;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        packagePolicyCount: z.ZodNumber;
        updated_at: z.ZodString;
        vars: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        verification_failed_at: z.ZodOptional<z.ZodString>;
        verification_started_at: z.ZodOptional<z.ZodString>;
        verification_status: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetFleetCloudConnectorsCloudconnectoridResponse = z.infer<typeof GetFleetCloudConnectorsCloudconnectoridResponse>;
//# sourceMappingURL=get_fleet_cloud_connectors_cloudconnectorid.d.ts.map