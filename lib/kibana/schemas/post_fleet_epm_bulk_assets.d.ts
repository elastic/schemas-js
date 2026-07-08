import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_bulk_assets_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        appLink: z.ZodOptional<z.ZodString>;
        attributes: z.ZodObject<{
            description: z.ZodOptional<z.ZodString>;
            service: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        id: z.ZodString;
        type: z.ZodString;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_bulk_assets_response = z.infer<typeof Kibana_HTTP_APIs_get_bulk_assets_response>;
export declare const Kibana_HTTP_APIs_get_bulk_assets_request: z.ZodObject<{
    assetIds: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_bulk_assets_request = z.infer<typeof Kibana_HTTP_APIs_get_bulk_assets_request>;
//# sourceMappingURL=post_fleet_epm_bulk_assets.d.ts.map