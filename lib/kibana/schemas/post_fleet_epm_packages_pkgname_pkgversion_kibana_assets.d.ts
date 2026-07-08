import { z } from 'zod';
export declare const Kibana_HTTP_APIs_install_kibana_assets_response: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_install_kibana_assets_response = z.infer<typeof Kibana_HTTP_APIs_install_kibana_assets_response>;
export declare const Kibana_HTTP_APIs_install_kibana_assets_request: z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
    space_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_install_kibana_assets_request = z.infer<typeof Kibana_HTTP_APIs_install_kibana_assets_request>;
export declare const PostFleetEpmPackagesPkgnamePkgversionKibanaAssetsRequest: z.ZodNullable<z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
    space_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
export type PostFleetEpmPackagesPkgnamePkgversionKibanaAssetsRequest = z.infer<typeof PostFleetEpmPackagesPkgnamePkgversionKibanaAssetsRequest>;
//# sourceMappingURL=post_fleet_epm_packages_pkgname_pkgversion_kibana_assets.d.ts.map