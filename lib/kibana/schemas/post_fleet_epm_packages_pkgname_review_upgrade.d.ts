import { z } from 'zod';
export declare const Kibana_HTTP_APIs_review_upgrade_response: z.ZodObject<{
    success: z.ZodBoolean;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_review_upgrade_response = z.infer<typeof Kibana_HTTP_APIs_review_upgrade_response>;
export declare const Kibana_HTTP_APIs_review_upgrade_request: z.ZodObject<{
    action: z.ZodEnum<{
        pending: "pending";
        accept: "accept";
        decline: "decline";
    }>;
    target_version: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_review_upgrade_request = z.infer<typeof Kibana_HTTP_APIs_review_upgrade_request>;
//# sourceMappingURL=post_fleet_epm_packages_pkgname_review_upgrade.d.ts.map