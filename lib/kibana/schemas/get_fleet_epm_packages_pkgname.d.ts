import { z } from 'zod';
export declare const Kibana_HTTP_APIs_package_metadata: z.ZodObject<{
    has_policies: z.ZodBoolean;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_metadata = z.infer<typeof Kibana_HTTP_APIs_package_metadata>;
export declare const Kibana_HTTP_APIs_package_icon: z.ZodObject<{
    dark_mode: z.ZodOptional<z.ZodBoolean>;
    path: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
    src: z.ZodString;
    title: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_icon = z.infer<typeof Kibana_HTTP_APIs_package_icon>;
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
export declare const Kibana_HTTP_APIs_deprecation_info: z.ZodObject<{
    description: z.ZodString;
    replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    since: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_deprecation_info = z.infer<typeof Kibana_HTTP_APIs_deprecation_info>;
export declare const Kibana_HTTP_APIs_installation_info: z.ZodObject<{
    additional_spaces_installed_kibana: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>>>;
    created_at: z.ZodOptional<z.ZodString>;
    experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
        data_stream: z.ZodString;
        features: z.ZodObject<{
            doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
            doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
            synthetic_source: z.ZodOptional<z.ZodBoolean>;
            tsdb: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$loose>;
    }, z.core.$loose>>>;
    install_format_schema_version: z.ZodOptional<z.ZodString>;
    install_source: z.ZodEnum<{
        custom: "custom";
        upload: "upload";
        registry: "registry";
        bundled: "bundled";
    }>;
    install_status: z.ZodEnum<{
        installing: "installing";
        installed: "installed";
        install_failed: "install_failed";
    }>;
    installed_es: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    installed_kibana: z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>;
    installed_kibana_space_id: z.ZodOptional<z.ZodString>;
    is_rollback_ttl_expired: z.ZodOptional<z.ZodBoolean>;
    latest_executed_state: z.ZodOptional<z.ZodObject<{
        error: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        started_at: z.ZodOptional<z.ZodString>;
    }, z.core.$loose>>;
    latest_install_failed_attempts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        created_at: z.ZodString;
        error: z.ZodObject<{
            message: z.ZodString;
            name: z.ZodString;
            stack: z.ZodOptional<z.ZodString>;
        }, z.core.$loose>;
        target_version: z.ZodString;
    }, z.core.$loose>>>;
    name: z.ZodString;
    namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
    previous_version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rolled_back: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodString;
    updated_at: z.ZodOptional<z.ZodString>;
    verification_key_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verification_status: z.ZodEnum<{
        unknown: "unknown";
        unverified: "unverified";
        verified: "verified";
    }>;
    version: z.ZodString;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_installation_info = z.infer<typeof Kibana_HTTP_APIs_installation_info>;
export declare const Kibana_HTTP_APIs_get_package_info: z.ZodObject<{
    agent: z.ZodOptional<z.ZodObject<{
        privileges: z.ZodOptional<z.ZodObject<{
            root: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    asset_tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        asset_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        asset_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
        text: z.ZodString;
    }, z.core.$strip>>>;
    assets: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
    categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    conditions: z.ZodOptional<z.ZodObject<{
        deprecated: z.ZodOptional<z.ZodObject<{
            description: z.ZodString;
            replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            since: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        elastic: z.ZodOptional<z.ZodObject<{
            capabilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
            subscription: z.ZodOptional<z.ZodString>;
        }, z.core.$loose>>;
        kibana: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    data_streams: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
    deprecated: z.ZodOptional<z.ZodObject<{
        description: z.ZodString;
        replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        since: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    description: z.ZodOptional<z.ZodString>;
    discovery: z.ZodOptional<z.ZodObject<{
        datasets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$loose>>>;
        fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$loose>>>;
    }, z.core.$loose>>;
    download: z.ZodOptional<z.ZodString>;
    elasticsearch: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    format_version: z.ZodOptional<z.ZodString>;
    icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
        dark_mode: z.ZodOptional<z.ZodBoolean>;
        path: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodString>;
        src: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    installationInfo: z.ZodOptional<z.ZodObject<{
        additional_spaces_installed_kibana: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>>;
        created_at: z.ZodOptional<z.ZodString>;
        experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodString;
            features: z.ZodObject<{
                doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
                doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
                synthetic_source: z.ZodOptional<z.ZodBoolean>;
                tsdb: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$loose>;
        }, z.core.$loose>>>;
        install_format_schema_version: z.ZodOptional<z.ZodString>;
        install_source: z.ZodEnum<{
            custom: "custom";
            upload: "upload";
            registry: "registry";
            bundled: "bundled";
        }>;
        install_status: z.ZodEnum<{
            installing: "installing";
            installed: "installed";
            install_failed: "install_failed";
        }>;
        installed_es: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
        installed_kibana: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
        installed_kibana_space_id: z.ZodOptional<z.ZodString>;
        is_rollback_ttl_expired: z.ZodOptional<z.ZodBoolean>;
        latest_executed_state: z.ZodOptional<z.ZodObject<{
            error: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            started_at: z.ZodOptional<z.ZodString>;
        }, z.core.$loose>>;
        latest_install_failed_attempts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            created_at: z.ZodString;
            error: z.ZodObject<{
                message: z.ZodString;
                name: z.ZodString;
                stack: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>;
            target_version: z.ZodString;
        }, z.core.$loose>>>;
        name: z.ZodString;
        namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
        previous_version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        rolled_back: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodString;
        updated_at: z.ZodOptional<z.ZodString>;
        verification_key_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        verification_status: z.ZodEnum<{
            unknown: "unknown";
            unverified: "unverified";
            verified: "verified";
        }>;
        version: z.ZodString;
    }, z.core.$loose>>;
    internal: z.ZodOptional<z.ZodBoolean>;
    keepPoliciesUpToDate: z.ZodOptional<z.ZodBoolean>;
    latestVersion: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    licensePath: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    notice: z.ZodOptional<z.ZodString>;
    owner: z.ZodOptional<z.ZodObject<{
        github: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<{
            elastic: "elastic";
            partner: "partner";
            community: "community";
        }>>;
    }, z.core.$loose>>;
    path: z.ZodOptional<z.ZodString>;
    policy_templates: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
    readme: z.ZodOptional<z.ZodString>;
    release: z.ZodOptional<z.ZodEnum<{
        ga: "ga";
        beta: "beta";
        experimental: "experimental";
    }>>;
    screenshots: z.ZodOptional<z.ZodArray<z.ZodObject<{
        dark_mode: z.ZodOptional<z.ZodBoolean>;
        path: z.ZodOptional<z.ZodString>;
        size: z.ZodOptional<z.ZodString>;
        src: z.ZodString;
        title: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    signature_path: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodObject<{
        license: z.ZodString;
    }, z.core.$loose>>;
    status: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        integration: "integration";
    }>, z.ZodEnum<{
        input: "input";
    }>, z.ZodEnum<{
        content: "content";
    }>, z.ZodString]>>;
    var_groups: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            description: z.ZodOptional<z.ZodString>;
            hide_in_deployment_modes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                default: "default";
                agentless: "agentless";
            }>>>;
            name: z.ZodString;
            title: z.ZodString;
            vars: z.ZodArray<z.ZodString>;
        }, z.core.$loose>>;
        selector_title: z.ZodString;
        title: z.ZodString;
    }, z.core.$loose>>>;
    vars: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
    version: z.ZodString;
}, z.core.$loose>;
export type Kibana_HTTP_APIs_get_package_info = z.infer<typeof Kibana_HTTP_APIs_get_package_info>;
export declare const Kibana_HTTP_APIs_get_info_response: z.ZodObject<{
    item: z.ZodObject<{
        agent: z.ZodOptional<z.ZodObject<{
            privileges: z.ZodOptional<z.ZodObject<{
                root: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        asset_tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            asset_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
            asset_types: z.ZodOptional<z.ZodArray<z.ZodString>>;
            text: z.ZodString;
        }, z.core.$strip>>>;
        assets: z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>;
        categories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        conditions: z.ZodOptional<z.ZodObject<{
            deprecated: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                since: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            elastic: z.ZodOptional<z.ZodObject<{
                capabilities: z.ZodOptional<z.ZodArray<z.ZodString>>;
                subscription: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>>;
            kibana: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        data_streams: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
        deprecated: z.ZodOptional<z.ZodObject<{
            description: z.ZodString;
            replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            since: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        description: z.ZodOptional<z.ZodString>;
        discovery: z.ZodOptional<z.ZodObject<{
            datasets: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, z.core.$loose>>>;
            fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, z.core.$loose>>>;
        }, z.core.$loose>>;
        download: z.ZodOptional<z.ZodString>;
        elasticsearch: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        format_version: z.ZodOptional<z.ZodString>;
        icons: z.ZodOptional<z.ZodArray<z.ZodObject<{
            dark_mode: z.ZodOptional<z.ZodBoolean>;
            path: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodString>;
            src: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        installationInfo: z.ZodOptional<z.ZodObject<{
            additional_spaces_installed_kibana: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>>>;
            created_at: z.ZodOptional<z.ZodString>;
            experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
                data_stream: z.ZodString;
                features: z.ZodObject<{
                    doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
                    doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
                    synthetic_source: z.ZodOptional<z.ZodBoolean>;
                    tsdb: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$loose>;
            }, z.core.$loose>>>;
            install_format_schema_version: z.ZodOptional<z.ZodString>;
            install_source: z.ZodEnum<{
                custom: "custom";
                upload: "upload";
                registry: "registry";
                bundled: "bundled";
            }>;
            install_status: z.ZodEnum<{
                installing: "installing";
                installed: "installed";
                install_failed: "install_failed";
            }>;
            installed_es: z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>;
            installed_kibana: z.ZodArray<z.ZodObject<{
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
            }, z.core.$strip>>;
            installed_kibana_space_id: z.ZodOptional<z.ZodString>;
            is_rollback_ttl_expired: z.ZodOptional<z.ZodBoolean>;
            latest_executed_state: z.ZodOptional<z.ZodObject<{
                error: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
                started_at: z.ZodOptional<z.ZodString>;
            }, z.core.$loose>>;
            latest_install_failed_attempts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                created_at: z.ZodString;
                error: z.ZodObject<{
                    message: z.ZodString;
                    name: z.ZodString;
                    stack: z.ZodOptional<z.ZodString>;
                }, z.core.$loose>;
                target_version: z.ZodString;
            }, z.core.$loose>>>;
            name: z.ZodString;
            namespaces: z.ZodOptional<z.ZodArray<z.ZodString>>;
            previous_version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            rolled_back: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodString;
            updated_at: z.ZodOptional<z.ZodString>;
            verification_key_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            verification_status: z.ZodEnum<{
                unknown: "unknown";
                unverified: "unverified";
                verified: "verified";
            }>;
            version: z.ZodString;
        }, z.core.$loose>>;
        internal: z.ZodOptional<z.ZodBoolean>;
        keepPoliciesUpToDate: z.ZodOptional<z.ZodBoolean>;
        latestVersion: z.ZodOptional<z.ZodString>;
        license: z.ZodOptional<z.ZodString>;
        licensePath: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        notice: z.ZodOptional<z.ZodString>;
        owner: z.ZodOptional<z.ZodObject<{
            github: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodEnum<{
                elastic: "elastic";
                partner: "partner";
                community: "community";
            }>>;
        }, z.core.$loose>>;
        path: z.ZodOptional<z.ZodString>;
        policy_templates: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
        readme: z.ZodOptional<z.ZodString>;
        release: z.ZodOptional<z.ZodEnum<{
            ga: "ga";
            beta: "beta";
            experimental: "experimental";
        }>>;
        screenshots: z.ZodOptional<z.ZodArray<z.ZodObject<{
            dark_mode: z.ZodOptional<z.ZodBoolean>;
            path: z.ZodOptional<z.ZodString>;
            size: z.ZodOptional<z.ZodString>;
            src: z.ZodString;
            title: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        signature_path: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodObject<{
            license: z.ZodString;
        }, z.core.$loose>>;
        status: z.ZodOptional<z.ZodString>;
        title: z.ZodString;
        type: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            integration: "integration";
        }>, z.ZodEnum<{
            input: "input";
        }>, z.ZodEnum<{
            content: "content";
        }>, z.ZodString]>>;
        var_groups: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            options: z.ZodArray<z.ZodObject<{
                description: z.ZodOptional<z.ZodString>;
                hide_in_deployment_modes: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    default: "default";
                    agentless: "agentless";
                }>>>;
                name: z.ZodString;
                title: z.ZodString;
                vars: z.ZodArray<z.ZodString>;
            }, z.core.$loose>>;
            selector_title: z.ZodString;
            title: z.ZodString;
        }, z.core.$loose>>>;
        vars: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
        version: z.ZodString;
    }, z.core.$loose>;
    metadata: z.ZodOptional<z.ZodObject<{
        has_policies: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_info_response = z.infer<typeof Kibana_HTTP_APIs_get_info_response>;
//# sourceMappingURL=get_fleet_epm_packages_pkgname.d.ts.map