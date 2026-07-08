import { z } from 'zod';
export declare const Kibana_HTTP_APIs_bulk_install_packages_response_item_error: z.ZodObject<{
    error: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNullable<z.ZodUnknown>]>>;
    name: z.ZodString;
    statusCode: z.ZodNumber;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_install_packages_response_item_error = z.infer<typeof Kibana_HTTP_APIs_bulk_install_packages_response_item_error>;
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
export declare const Kibana_HTTP_APIs_bulk_install_packages_from_registry_request: z.ZodObject<{
    force: z.ZodOptional<z.ZodBoolean>;
    packages: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
        name: z.ZodString;
        prerelease: z.ZodOptional<z.ZodBoolean>;
        version: z.ZodString;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_install_packages_from_registry_request = z.infer<typeof Kibana_HTTP_APIs_bulk_install_packages_from_registry_request>;
export declare const Kibana_HTTP_APIs_bulk_install_packages_response_item_success: z.ZodObject<{
    name: z.ZodString;
    result: z.ZodObject<{
        assets: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
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
        }, z.core.$strip>]>>>;
        error: z.ZodNullable<z.ZodUnknown>;
        installSource: z.ZodOptional<z.ZodString>;
        installType: z.ZodString;
        status: z.ZodOptional<z.ZodEnum<{
            installed: "installed";
            already_installed: "already_installed";
        }>>;
    }, z.core.$strip>;
    version: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_install_packages_response_item_success = z.infer<typeof Kibana_HTTP_APIs_bulk_install_packages_response_item_success>;
export declare const Kibana_HTTP_APIs_bulk_install_packages_from_registry_response: z.ZodObject<{
    items: z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
        name: z.ZodString;
        result: z.ZodObject<{
            assets: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodObject<{
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
            }, z.core.$strip>]>>>;
            error: z.ZodNullable<z.ZodUnknown>;
            installSource: z.ZodOptional<z.ZodString>;
            installType: z.ZodString;
            status: z.ZodOptional<z.ZodEnum<{
                installed: "installed";
                already_installed: "already_installed";
            }>>;
        }, z.core.$strip>;
        version: z.ZodString;
    }, z.core.$strip>, z.ZodObject<{
        error: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNullable<z.ZodUnknown>]>>;
        name: z.ZodString;
        statusCode: z.ZodNumber;
    }, z.core.$strip>]>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_install_packages_from_registry_response = z.infer<typeof Kibana_HTTP_APIs_bulk_install_packages_from_registry_response>;
//# sourceMappingURL=post_fleet_epm_packages_bulk.d.ts.map