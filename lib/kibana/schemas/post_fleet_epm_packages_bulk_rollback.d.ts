import { z } from 'zod';
export declare const Kibana_HTTP_APIs_bulk_rollback_packages_response: z.ZodObject<{
    taskId: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_rollback_packages_response = z.infer<typeof Kibana_HTTP_APIs_bulk_rollback_packages_response>;
export declare const Kibana_HTTP_APIs_bulk_rollback_packages_request: z.ZodObject<{
    packages: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_rollback_packages_request = z.infer<typeof Kibana_HTTP_APIs_bulk_rollback_packages_request>;
//# sourceMappingURL=post_fleet_epm_packages_bulk_rollback.d.ts.map