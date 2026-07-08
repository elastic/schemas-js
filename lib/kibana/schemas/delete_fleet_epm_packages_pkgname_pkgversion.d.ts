import { z } from 'zod';
export declare const Kibana_HTTP_APIs_es_asset_reference: z.ZodObject<{
    customDataStreamOriginDataset: z.ZodOptional<z.ZodString>;
    customDataStreamOriginType: z.ZodOptional<z.ZodString>;
    deferred: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    type: z.ZodEnum<{
        index: "index";
        transform: "transform";
        index_template: "index_template";
        component_template: "component_template";
        ingest_pipeline: "ingest_pipeline";
        ilm_policy: "ilm_policy";
        data_stream_ilm_policy: "data_stream_ilm_policy";
        ml_model: "ml_model";
        knowledge_base: "knowledge_base";
        esql_view: "esql_view";
    }>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_es_asset_reference = z.infer<typeof Kibana_HTTP_APIs_es_asset_reference>;
export declare const Kibana_HTTP_APIs_kibana_asset_reference: z.ZodObject<{
    deferred: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    originId: z.ZodOptional<z.ZodString>;
    type: z.ZodUnion<readonly [z.ZodEnum<{
        search: "search";
        map: "map";
        dashboard: "dashboard";
        lens: "lens";
        visualization: "visualization";
        "index-pattern": "index-pattern";
        "ml-module": "ml-module";
        "security-rule": "security-rule";
        "csp-rule-template": "csp-rule-template";
        "osquery-pack-asset": "osquery-pack-asset";
        "osquery-saved-query": "osquery-saved-query";
        tag: "tag";
    }>, z.ZodString]>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_kibana_asset_reference = z.infer<typeof Kibana_HTTP_APIs_kibana_asset_reference>;
export declare const Kibana_HTTP_APIs_delete_package_response: z.ZodObject<{
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        deferred: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        originId: z.ZodOptional<z.ZodString>;
        type: z.ZodUnion<readonly [z.ZodEnum<{
            search: "search";
            map: "map";
            dashboard: "dashboard";
            lens: "lens";
            visualization: "visualization";
            "index-pattern": "index-pattern";
            "ml-module": "ml-module";
            "security-rule": "security-rule";
            "csp-rule-template": "csp-rule-template";
            "osquery-pack-asset": "osquery-pack-asset";
            "osquery-saved-query": "osquery-saved-query";
            tag: "tag";
        }>, z.ZodString]>;
    }, z.core.$strip>, z.ZodObject<{
        customDataStreamOriginDataset: z.ZodOptional<z.ZodString>;
        customDataStreamOriginType: z.ZodOptional<z.ZodString>;
        deferred: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        type: z.ZodEnum<{
            index: "index";
            transform: "transform";
            index_template: "index_template";
            component_template: "component_template";
            ingest_pipeline: "ingest_pipeline";
            ilm_policy: "ilm_policy";
            data_stream_ilm_policy: "data_stream_ilm_policy";
            ml_model: "ml_model";
            knowledge_base: "knowledge_base";
            esql_view: "esql_view";
        }>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_delete_package_response = z.infer<typeof Kibana_HTTP_APIs_delete_package_response>;
//# sourceMappingURL=delete_fleet_epm_packages_pkgname_pkgversion.d.ts.map