import { z } from 'zod';
export declare const PutFleetCloudConnectorsCloudconnectoridRequest: z.ZodObject<{
    accountType: z.ZodOptional<z.ZodEnum<{
        "single-account": "single-account";
        "organization-account": "organization-account";
    }>>;
    name: z.ZodOptional<z.ZodString>;
    vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodObject<{
        frozen: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodString;
            isSecretRef: z.ZodBoolean;
        }, z.core.$strip>]>;
    }, z.core.$strip>]>>>;
}, z.core.$strip>;
export type PutFleetCloudConnectorsCloudconnectoridRequest = z.infer<typeof PutFleetCloudConnectorsCloudconnectoridRequest>;
export declare const PutFleetCloudConnectorsCloudconnectoridResponse: z.ZodObject<{
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
export type PutFleetCloudConnectorsCloudconnectoridResponse = z.infer<typeof PutFleetCloudConnectorsCloudconnectoridResponse>;
//# sourceMappingURL=put_fleet_cloud_connectors_cloudconnectorid.d.ts.map