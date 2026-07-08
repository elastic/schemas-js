import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_dependencies_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodString;
        version: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_dependencies_response = z.infer<typeof Kibana_HTTP_APIs_get_dependencies_response>;
//# sourceMappingURL=get_fleet_epm_packages_pkgname_pkgversion_dependencies.d.ts.map