import { z } from 'zod';
export declare const PostFleetCloudConnectorsRequest: z.ZodObject<{
    accountType: z.ZodOptional<z.ZodEnum<{
        "single-account": "single-account";
        "organization-account": "organization-account";
    }>>;
    cloudProvider: z.ZodEnum<{
        aws: "aws";
        azure: "azure";
        gcp: "gcp";
    }>;
    name: z.ZodString;
    vars: z.ZodRecord<z.ZodString, z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodObject<{
        frozen: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            id: z.ZodString;
            isSecretRef: z.ZodBoolean;
        }, z.core.$strip>]>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type PostFleetCloudConnectorsRequest = z.infer<typeof PostFleetCloudConnectorsRequest>;
export declare const PostFleetCloudConnectorsResponse: z.ZodObject<{
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
export type PostFleetCloudConnectorsResponse = z.infer<typeof PostFleetCloudConnectorsResponse>;
//# sourceMappingURL=post_fleet_cloud_connectors.d.ts.map