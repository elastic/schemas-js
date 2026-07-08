import { z } from 'zod';
export declare const Kibana_HTTP_APIs_reauthorize_transform_request: z.ZodObject<{
    transforms: z.ZodArray<z.ZodObject<{
        transformId: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_reauthorize_transform_request = z.infer<typeof Kibana_HTTP_APIs_reauthorize_transform_request>;
export declare const PostFleetEpmPackagesPkgnamePkgversionTransformsAuthorizeResponse: z.ZodArray<z.ZodObject<{
    error: z.ZodNullable<z.ZodUnknown>;
    success: z.ZodBoolean;
    transformId: z.ZodString;
}, z.core.$strip>>;
export type PostFleetEpmPackagesPkgnamePkgversionTransformsAuthorizeResponse = z.infer<typeof PostFleetEpmPackagesPkgnamePkgversionTransformsAuthorizeResponse>;
//# sourceMappingURL=post_fleet_epm_packages_pkgname_pkgversion_transforms_authorize.d.ts.map