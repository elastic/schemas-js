import { z } from 'zod';
export declare const Kibana_HTTP_APIs_install_kibana_assets_response: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_install_kibana_assets_response = z.infer<typeof Kibana_HTTP_APIs_install_kibana_assets_response>;
export declare const Kibana_HTTP_APIs_install_rule_assets_request: z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_install_rule_assets_request = z.infer<typeof Kibana_HTTP_APIs_install_rule_assets_request>;
export declare const PostFleetEpmPackagesPkgnamePkgversionRuleAssetsRequest: z.ZodNullable<z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>>;
export type PostFleetEpmPackagesPkgnamePkgversionRuleAssetsRequest = z.infer<typeof PostFleetEpmPackagesPkgnamePkgversionRuleAssetsRequest>;
//# sourceMappingURL=post_fleet_epm_packages_pkgname_pkgversion_rule_assets.d.ts.map