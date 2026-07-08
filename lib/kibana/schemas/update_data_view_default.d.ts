import { z } from 'zod';
export declare const Data_views_typemeta_response: z.ZodNullable<z.ZodObject<{
    aggs: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>>;
export type Data_views_typemeta_response = z.infer<typeof Data_views_typemeta_response>;
export declare const Data_views_title: z.ZodString;
export type Data_views_title = z.infer<typeof Data_views_title>;
export declare const Data_views_timefieldname: z.ZodString;
export type Data_views_timefieldname = z.infer<typeof Data_views_timefieldname>;
export declare const Data_views_sourcefilters: z.ZodArray<z.ZodObject<{
    value: z.ZodString;
}, z.core.$strip>>;
export type Data_views_sourcefilters = z.infer<typeof Data_views_sourcefilters>;
export declare const Data_views_runtimefieldmap: z.ZodObject<{
    script: z.ZodObject<{
        source: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    type: z.ZodString;
}, z.core.$strip>;
export type Data_views_runtimefieldmap = z.infer<typeof Data_views_runtimefieldmap>;
export declare const Data_views_namespaces: z.ZodArray<z.ZodString>;
export type Data_views_namespaces = z.infer<typeof Data_views_namespaces>;
export declare const Data_views_fieldformats: z.ZodObject<{}, z.core.$strip>;
export type Data_views_fieldformats = z.infer<typeof Data_views_fieldformats>;
export declare const Data_views_fieldattrs: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    customDescription: z.ZodOptional<z.ZodString>;
    customLabel: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Data_views_fieldattrs = z.infer<typeof Data_views_fieldattrs>;
export declare const Data_views_allownoindex: z.ZodBoolean;
export type Data_views_allownoindex = z.infer<typeof Data_views_allownoindex>;
export declare const Data_views_typemeta: z.ZodObject<{
    aggs: z.ZodObject<{}, z.core.$strip>;
    params: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type Data_views_typemeta = z.infer<typeof Data_views_typemeta>;
export declare const Data_views_type: z.ZodString;
export type Data_views_type = z.infer<typeof Data_views_type>;
export declare const Data_views_data_view_response_object: z.ZodObject<{
    data_view: z.ZodOptional<z.ZodObject<{
        allowNoIndex: z.ZodOptional<z.ZodBoolean>;
        fieldAttrs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            customDescription: z.ZodOptional<z.ZodString>;
            customLabel: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        fieldFormats: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        fields: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        runtimeFieldMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            script: z.ZodObject<{
                source: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            type: z.ZodString;
        }, z.core.$strip>>>;
        sourceFilters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, z.core.$strip>>>;
        timeFieldName: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        typeMeta: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            aggs: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            params: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Data_views_data_view_response_object = z.infer<typeof Data_views_data_view_response_object>;
export declare const Data_views_update_data_view_request_object: z.ZodObject<{
    data_view: z.ZodObject<{
        allowNoIndex: z.ZodOptional<z.ZodBoolean>;
        fieldFormats: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        fields: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        name: z.ZodOptional<z.ZodString>;
        runtimeFieldMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            script: z.ZodObject<{
                source: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            type: z.ZodString;
        }, z.core.$strip>>>;
        sourceFilters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            value: z.ZodString;
        }, z.core.$strip>>>;
        timeFieldName: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        typeMeta: z.ZodOptional<z.ZodObject<{
            aggs: z.ZodObject<{}, z.core.$strip>;
            params: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    refresh_fields: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Data_views_update_data_view_request_object = z.infer<typeof Data_views_update_data_view_request_object>;
//# sourceMappingURL=update_data_view_default.d.ts.map