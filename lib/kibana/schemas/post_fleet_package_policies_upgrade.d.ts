import { z } from 'zod';
export declare const Kibana_HTTP_APIs_package_policy_status_response: z.ZodObject<{
    body: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
    }, z.core.$strip>>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
    success: z.ZodBoolean;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_policy_status_response = z.infer<typeof Kibana_HTTP_APIs_package_policy_status_response>;
export declare const Kibana_HTTP_APIs_upgrade_package_policies_request: z.ZodObject<{
    packagePolicyIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_upgrade_package_policies_request = z.infer<typeof Kibana_HTTP_APIs_upgrade_package_policies_request>;
export declare const PostFleetPackagePoliciesUpgradeResponse: z.ZodArray<z.ZodObject<{
    body: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
    }, z.core.$strip>>;
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    statusCode: z.ZodOptional<z.ZodNumber>;
    success: z.ZodBoolean;
}, z.core.$strip>>;
export type PostFleetPackagePoliciesUpgradeResponse = z.infer<typeof PostFleetPackagePoliciesUpgradeResponse>;
//# sourceMappingURL=post_fleet_package_policies_upgrade.d.ts.map