import { z } from 'zod';
export declare const Kibana_HTTP_APIs_bulk_namespace_customization_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        error: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        namespace_customization_enabled_for: z.ZodOptional<z.ZodArray<z.ZodString>>;
        success: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_namespace_customization_response = z.infer<typeof Kibana_HTTP_APIs_bulk_namespace_customization_response>;
export declare const Kibana_HTTP_APIs_bulk_namespace_customization_request: z.ZodObject<{
    disable: z.ZodOptional<z.ZodArray<z.ZodString>>;
    enable: z.ZodOptional<z.ZodArray<z.ZodString>>;
    packages: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_namespace_customization_request = z.infer<typeof Kibana_HTTP_APIs_bulk_namespace_customization_request>;
//# sourceMappingURL=post_fleet_epm_packages_bulk_namespace_customization.d.ts.map