import { z } from 'zod';
export declare const Kibana_HTTP_APIs_package_policy_package: z.ZodObject<{
    experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
        data_stream: z.ZodString;
        features: z.ZodObject<{
            doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
            doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
            synthetic_source: z.ZodOptional<z.ZodBoolean>;
            tsdb: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
    }, z.core.$strip>>>;
    fips_compatible: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    requires_root: z.ZodOptional<z.ZodBoolean>;
    title: z.ZodOptional<z.ZodString>;
    version: z.ZodString;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_policy_package = z.infer<typeof Kibana_HTTP_APIs_package_policy_package>;
export declare const Kibana_HTTP_APIs_deprecation_info: z.ZodObject<{
    description: z.ZodString;
    replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    since: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_deprecation_info = z.infer<typeof Kibana_HTTP_APIs_deprecation_info>;
export declare const Kibana_HTTP_APIs_package_policy_response: z.ZodObject<{
    additional_datastreams_permissions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
    agents: z.ZodOptional<z.ZodNumber>;
    cloud_connector_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cloud_connector_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    created_at: z.ZodString;
    created_by: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    elasticsearch: z.ZodOptional<z.ZodObject<{
        privileges: z.ZodOptional<z.ZodObject<{
            cluster: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    enabled: z.ZodBoolean;
    global_data_tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    }, z.core.$strip>>>>;
    id: z.ZodOptional<z.ZodString>;
    inputs: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
        compiled_input: z.ZodNullable<z.ZodUnknown>;
        condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            frozen: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodNullable<z.ZodUnknown>;
        }, z.core.$strip>>>;
        deprecated: z.ZodOptional<z.ZodObject<{
            description: z.ZodString;
            replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            since: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        enabled: z.ZodBoolean;
        id: z.ZodOptional<z.ZodString>;
        keep_enabled: z.ZodOptional<z.ZodBoolean>;
        migrate_from: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        policy_template: z.ZodOptional<z.ZodString>;
        streams: z.ZodArray<z.ZodObject<{
            compiled_stream: z.ZodNullable<z.ZodUnknown>;
            condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                frozen: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodString>;
                value: z.ZodNullable<z.ZodUnknown>;
            }, z.core.$strip>>>;
            data_stream: z.ZodObject<{
                dataset: z.ZodString;
                elasticsearch: z.ZodOptional<z.ZodObject<{
                    dynamic_dataset: z.ZodOptional<z.ZodBoolean>;
                    dynamic_namespace: z.ZodOptional<z.ZodBoolean>;
                    privileges: z.ZodOptional<z.ZodObject<{
                        indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            deprecated: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                since: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            enabled: z.ZodBoolean;
            id: z.ZodOptional<z.ZodString>;
            keep_enabled: z.ZodOptional<z.ZodBoolean>;
            migrate_from: z.ZodOptional<z.ZodString>;
            release: z.ZodOptional<z.ZodEnum<{
                ga: "ga";
                beta: "beta";
                experimental: "experimental";
            }>>;
            var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                frozen: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodString>;
                value: z.ZodNullable<z.ZodUnknown>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        type: z.ZodString;
        var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            frozen: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodNullable<z.ZodUnknown>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
        condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        deprecated: z.ZodOptional<z.ZodObject<{
            description: z.ZodString;
            replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            since: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        streams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            deprecated: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                since: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>, z.ZodArray<z.ZodNumber>, z.ZodObject<{
                id: z.ZodString;
                isSecretRef: z.ZodBoolean;
            }, z.core.$strip>]>>>>;
        }, z.core.$strip>>>;
        vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>, z.ZodArray<z.ZodNumber>, z.ZodObject<{
            id: z.ZodString;
            isSecretRef: z.ZodBoolean;
        }, z.core.$strip>]>>>>;
    }, z.core.$strip>>]>;
    is_managed: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodOptional<z.ZodString>;
    output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    overrides: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        inputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
    }, z.core.$strip>>>;
    package: z.ZodOptional<z.ZodObject<{
        experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            data_stream: z.ZodString;
            features: z.ZodObject<{
                doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
                doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
                synthetic_source: z.ZodOptional<z.ZodBoolean>;
                tsdb: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>>>;
        fips_compatible: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        requires_root: z.ZodOptional<z.ZodBoolean>;
        title: z.ZodOptional<z.ZodString>;
        version: z.ZodString;
    }, z.core.$strip>>;
    package_agent_version_condition: z.ZodOptional<z.ZodString>;
    policy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    policy_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    revision: z.ZodNumber;
    secret_references: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, z.core.$strip>>>;
    spaceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
    supports_agentless: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    supports_cloud_connector: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
    var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    vars: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodObject<{
        frozen: z.ZodOptional<z.ZodBoolean>;
        type: z.ZodOptional<z.ZodString>;
        value: z.ZodNullable<z.ZodUnknown>;
    }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>, z.ZodArray<z.ZodNumber>, z.ZodObject<{
        id: z.ZodString;
        isSecretRef: z.ZodBoolean;
    }, z.core.$strip>]>>>]>>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_package_policy_response = z.infer<typeof Kibana_HTTP_APIs_package_policy_response>;
export declare const Kibana_HTTP_APIs_bulk_get_package_policies_response: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        additional_datastreams_permissions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodString>>>;
        agents: z.ZodOptional<z.ZodNumber>;
        cloud_connector_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cloud_connector_name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        created_at: z.ZodString;
        created_by: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        elasticsearch: z.ZodOptional<z.ZodObject<{
            privileges: z.ZodOptional<z.ZodObject<{
                cluster: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$loose>>;
        }, z.core.$loose>>;
        enabled: z.ZodBoolean;
        global_data_tags: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        }, z.core.$strip>>>>;
        id: z.ZodOptional<z.ZodString>;
        inputs: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
            compiled_input: z.ZodNullable<z.ZodUnknown>;
            condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                frozen: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodString>;
                value: z.ZodNullable<z.ZodUnknown>;
            }, z.core.$strip>>>;
            deprecated: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                since: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            enabled: z.ZodBoolean;
            id: z.ZodOptional<z.ZodString>;
            keep_enabled: z.ZodOptional<z.ZodBoolean>;
            migrate_from: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            policy_template: z.ZodOptional<z.ZodString>;
            streams: z.ZodArray<z.ZodObject<{
                compiled_stream: z.ZodNullable<z.ZodUnknown>;
                condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    frozen: z.ZodOptional<z.ZodBoolean>;
                    type: z.ZodOptional<z.ZodString>;
                    value: z.ZodNullable<z.ZodUnknown>;
                }, z.core.$strip>>>;
                data_stream: z.ZodObject<{
                    dataset: z.ZodString;
                    elasticsearch: z.ZodOptional<z.ZodObject<{
                        dynamic_dataset: z.ZodOptional<z.ZodBoolean>;
                        dynamic_namespace: z.ZodOptional<z.ZodBoolean>;
                        privileges: z.ZodOptional<z.ZodObject<{
                            indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                deprecated: z.ZodOptional<z.ZodObject<{
                    description: z.ZodString;
                    replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    since: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                enabled: z.ZodBoolean;
                id: z.ZodOptional<z.ZodString>;
                keep_enabled: z.ZodOptional<z.ZodBoolean>;
                migrate_from: z.ZodOptional<z.ZodString>;
                release: z.ZodOptional<z.ZodEnum<{
                    ga: "ga";
                    beta: "beta";
                    experimental: "experimental";
                }>>;
                var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    frozen: z.ZodOptional<z.ZodBoolean>;
                    type: z.ZodOptional<z.ZodString>;
                    value: z.ZodNullable<z.ZodUnknown>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            type: z.ZodString;
            var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                frozen: z.ZodOptional<z.ZodBoolean>;
                type: z.ZodOptional<z.ZodString>;
                value: z.ZodNullable<z.ZodUnknown>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodObject<{
            condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            deprecated: z.ZodOptional<z.ZodObject<{
                description: z.ZodString;
                replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                since: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            streams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                condition: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                deprecated: z.ZodOptional<z.ZodObject<{
                    description: z.ZodString;
                    replaced_by: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    since: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                enabled: z.ZodOptional<z.ZodBoolean>;
                var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>, z.ZodArray<z.ZodNumber>, z.ZodObject<{
                    id: z.ZodString;
                    isSecretRef: z.ZodBoolean;
                }, z.core.$strip>]>>>>;
            }, z.core.$strip>>>;
            vars: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>, z.ZodArray<z.ZodNumber>, z.ZodObject<{
                id: z.ZodString;
                isSecretRef: z.ZodBoolean;
            }, z.core.$strip>]>>>>;
        }, z.core.$strip>>]>;
        is_managed: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodOptional<z.ZodString>;
        output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        overrides: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            inputs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>;
        }, z.core.$strip>>>;
        package: z.ZodOptional<z.ZodObject<{
            experimental_data_stream_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
                data_stream: z.ZodString;
                features: z.ZodObject<{
                    doc_value_only_numeric: z.ZodOptional<z.ZodBoolean>;
                    doc_value_only_other: z.ZodOptional<z.ZodBoolean>;
                    synthetic_source: z.ZodOptional<z.ZodBoolean>;
                    tsdb: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>;
            }, z.core.$strip>>>;
            fips_compatible: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodString;
            requires_root: z.ZodOptional<z.ZodBoolean>;
            title: z.ZodOptional<z.ZodString>;
            version: z.ZodString;
        }, z.core.$strip>>;
        package_agent_version_condition: z.ZodOptional<z.ZodString>;
        policy_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        policy_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        revision: z.ZodNumber;
        secret_references: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>>>;
        spaceIds: z.ZodOptional<z.ZodArray<z.ZodString>>;
        supports_agentless: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        supports_cloud_connector: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        updated_at: z.ZodString;
        updated_by: z.ZodString;
        var_group_selections: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        vars: z.ZodOptional<z.ZodUnion<readonly [z.ZodRecord<z.ZodString, z.ZodObject<{
            frozen: z.ZodOptional<z.ZodBoolean>;
            type: z.ZodOptional<z.ZodString>;
            value: z.ZodNullable<z.ZodUnknown>;
        }, z.core.$strip>>, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodBoolean, z.ZodArray<z.ZodString>, z.ZodArray<z.ZodNumber>, z.ZodObject<{
            id: z.ZodString;
            isSecretRef: z.ZodBoolean;
        }, z.core.$strip>]>>>]>>;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_bulk_get_package_policies_response = z.infer<typeof Kibana_HTTP_APIs_bulk_get_package_policies_response>;
export declare const PostFleetPackagePoliciesBulkGetRequest: z.ZodObject<{
    ids: z.ZodArray<z.ZodString>;
    ignoreMissing: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type PostFleetPackagePoliciesBulkGetRequest = z.infer<typeof PostFleetPackagePoliciesBulkGetRequest>;
//# sourceMappingURL=post_fleet_package_policies_bulk_get.d.ts.map