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
export declare const Kibana_HTTP_APIs_kbn_tags_request_attributes: z.ZodObject<{
    color: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_kbn_tags_request_attributes = z.infer<typeof Kibana_HTTP_APIs_kbn_tags_request_attributes>;
export declare const PutTagsIdResponse200: z.ZodObject<{
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
export type PutTagsIdResponse200 = z.infer<typeof PutTagsIdResponse200>;
export declare const PutTagsIdResponse201: z.ZodObject<{
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
export type PutTagsIdResponse201 = z.infer<typeof PutTagsIdResponse201>;
//# sourceMappingURL=put_tags_id.d.ts.map