import { z } from 'zod';
export declare const Kibana_HTTP_APIs_category_summary_item: z.ZodObject<{
    count: z.ZodNumber;
    id: z.ZodString;
    parent_id: z.ZodOptional<z.ZodString>;
    parent_title: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_category_summary_item = z.infer<typeof Kibana_HTTP_APIs_category_summary_item>;
export declare const Kibana_HTTP_APIs_get_categories_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        count: z.ZodNumber;
        id: z.ZodString;
        parent_id: z.ZodOptional<z.ZodString>;
        parent_title: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_categories_response = z.infer<typeof Kibana_HTTP_APIs_get_categories_response>;
//# sourceMappingURL=get_fleet_epm_categories.d.ts.map