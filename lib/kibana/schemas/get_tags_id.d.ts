import { z } from 'zod';
export declare const Kibana_HTTP_APIs_kbn_as_code_meta: z.ZodObject<{
    created_at: z.ZodOptional<z.ZodString>;
    created_by: z.ZodOptional<z.ZodString>;
    managed: z.ZodOptional<z.ZodBoolean>;
    owner: z.ZodOptional<z.ZodString>;
    updated_at: z.ZodOptional<z.ZodString>;
    updated_by: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_kbn_as_code_meta = z.infer<typeof Kibana_HTTP_APIs_kbn_as_code_meta>;
export declare const Kibana_HTTP_APIs_kbn_tags_attributes: z.ZodObject<{
    color: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_kbn_tags_attributes = z.infer<typeof Kibana_HTTP_APIs_kbn_tags_attributes>;
export declare const GetTagsIdResponse: z.ZodObject<{
    data: z.ZodObject<{
        color: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
    }, z.core.$strip>;
    id: z.ZodString;
    meta: z.ZodObject<{
        created_at: z.ZodOptional<z.ZodString>;
        created_by: z.ZodOptional<z.ZodString>;
        managed: z.ZodOptional<z.ZodBoolean>;
        owner: z.ZodOptional<z.ZodString>;
        updated_at: z.ZodOptional<z.ZodString>;
        updated_by: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type GetTagsIdResponse = z.infer<typeof GetTagsIdResponse>;
//# sourceMappingURL=get_tags_id.d.ts.map