import { z } from 'zod';
export declare const RemoteResourceInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    connected: z.ZodBoolean;
    compatible: z.ZodBoolean;
    trusted: z.ZodBoolean;
    trusted_back: z.ZodBoolean;
}, z.core.$strip>;
export type RemoteResourceInfo = z.infer<typeof RemoteResourceInfo>;
export declare const RemoteResourceRef: z.ZodObject<{
    deployment_id: z.ZodString;
    elasticsearch_ref_id: z.ZodString;
    alias: z.ZodString;
    skip_unavailable: z.ZodOptional<z.ZodBoolean>;
    info: z.ZodOptional<z.ZodObject<{
        healthy: z.ZodBoolean;
        connected: z.ZodBoolean;
        compatible: z.ZodBoolean;
        trusted: z.ZodBoolean;
        trusted_back: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RemoteResourceRef = z.infer<typeof RemoteResourceRef>;
export declare const RemoteResources: z.ZodObject<{
    resources: z.ZodArray<z.ZodObject<{
        deployment_id: z.ZodString;
        elasticsearch_ref_id: z.ZodString;
        alias: z.ZodString;
        skip_unavailable: z.ZodOptional<z.ZodBoolean>;
        info: z.ZodOptional<z.ZodObject<{
            healthy: z.ZodBoolean;
            connected: z.ZodBoolean;
            compatible: z.ZodBoolean;
            trusted: z.ZodBoolean;
            trusted_back: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RemoteResources = z.infer<typeof RemoteResources>;
//# sourceMappingURL=get_deployment_es_resource_remote_clusters.d.ts.map