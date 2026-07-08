import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_stats_response: z.ZodObject<{
    response: z.ZodObject<{
        agent_policy_count: z.ZodNumber;
        package_policy_count: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_stats_response = z.infer<typeof Kibana_HTTP_APIs_get_stats_response>;
//# sourceMappingURL=get_fleet_epm_packages_pkgname_stats.d.ts.map