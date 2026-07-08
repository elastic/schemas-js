import { z } from 'zod';
export declare const MetadataItem: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type MetadataItem = z.infer<typeof MetadataItem>;
export declare const DeploymentTagsResponse: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentTagsResponse = z.infer<typeof DeploymentTagsResponse>;
//# sourceMappingURL=set_deployment_tags.d.ts.map