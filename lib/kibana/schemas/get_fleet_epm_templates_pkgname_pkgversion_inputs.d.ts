import { z } from 'zod';
export declare const Kibana_HTTP_APIs_get_inputs_response: z.ZodObject<{
    connectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    exporters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    inputs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodObject<{
                dataset: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>;
            id: z.ZodString;
        }, z.core.$loose>>>;
        type: z.ZodString;
    }, z.core.$strip>>;
    processors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    receivers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    service: z.ZodOptional<z.ZodObject<{
        extensions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            exporters: z.ZodOptional<z.ZodArray<z.ZodString>>;
            processors: z.ZodOptional<z.ZodArray<z.ZodString>>;
            receivers: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_inputs_response = z.infer<typeof Kibana_HTTP_APIs_get_inputs_response>;
export declare const GetFleetEpmTemplatesPkgnamePkgversionInputsResponse: z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    connectors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    exporters: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    extensions: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    inputs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        streams: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodObject<{
                dataset: z.ZodString;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>;
            id: z.ZodString;
        }, z.core.$loose>>>;
        type: z.ZodString;
    }, z.core.$strip>>;
    processors: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    receivers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    service: z.ZodOptional<z.ZodObject<{
        extensions: z.ZodOptional<z.ZodArray<z.ZodString>>;
        pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            exporters: z.ZodOptional<z.ZodArray<z.ZodString>>;
            processors: z.ZodOptional<z.ZodArray<z.ZodString>>;
            receivers: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>]>;
export type GetFleetEpmTemplatesPkgnamePkgversionInputsResponse = z.infer<typeof GetFleetEpmTemplatesPkgnamePkgversionInputsResponse>;
//# sourceMappingURL=get_fleet_epm_templates_pkgname_pkgversion_inputs.d.ts.map