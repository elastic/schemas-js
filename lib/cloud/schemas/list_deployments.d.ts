import { z } from 'zod';
export declare const ReplyWarning: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReplyWarning = z.infer<typeof ReplyWarning>;
export declare const ClusterCredentials: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type ClusterCredentials = z.infer<typeof ClusterCredentials>;
export declare const DeploymentResource: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    kind: z.ZodString;
    region: z.ZodString;
    cloud_id: z.ZodOptional<z.ZodString>;
    credentials: z.ZodOptional<z.ZodObject<{
        username: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>>;
    secret_token: z.ZodOptional<z.ZodString>;
    warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentResource = z.infer<typeof DeploymentResource>;
export declare const DeploymentsListingData: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    resources: z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        kind: z.ZodString;
        region: z.ZodString;
        cloud_id: z.ZodOptional<z.ZodString>;
        credentials: z.ZodOptional<z.ZodObject<{
            username: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>>;
        secret_token: z.ZodOptional<z.ZodString>;
        warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentsListingData = z.infer<typeof DeploymentsListingData>;
export declare const DeploymentsListResponse: z.ZodObject<{
    deployments: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        resources: z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodOptional<z.ZodString>;
            id: z.ZodString;
            kind: z.ZodString;
            region: z.ZodString;
            cloud_id: z.ZodOptional<z.ZodString>;
            credentials: z.ZodOptional<z.ZodObject<{
                username: z.ZodString;
                password: z.ZodString;
            }, z.core.$strip>>;
            secret_token: z.ZodOptional<z.ZodString>;
            warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentsListResponse = z.infer<typeof DeploymentsListResponse>;
//# sourceMappingURL=list_deployments.d.ts.map