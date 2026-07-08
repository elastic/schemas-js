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
export declare const Kibana_HTTP_APIs_new_agent_policy: z.ZodObject<{
    advanced_settings: z.ZodOptional<z.ZodObject<{
        agent_download_target_directory: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_download_timeout: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_features_disable_policy_change_acks_enabled: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_internal: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_limits_go_max_procs: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_files_interval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_files_keepfiles: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_files_rotateeverybytes: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_level: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_metrics_period: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_to_files: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_monitoring_runtime_experimental: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
    }, z.core.$strip>>;
    agent_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
        enabled: z.ZodBoolean;
        name: z.ZodString;
    }, z.core.$strip>>>;
    agentless: z.ZodOptional<z.ZodObject<{
        cloud_connectors: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            target_csp: z.ZodOptional<z.ZodEnum<{
                aws: "aws";
                azure: "azure";
                gcp: "gcp";
            }>>;
        }, z.core.$strip>>;
        cluster_id: z.ZodOptional<z.ZodString>;
        resources: z.ZodOptional<z.ZodObject<{
            requests: z.ZodOptional<z.ZodObject<{
                cpu: z.ZodOptional<z.ZodString>;
                memory: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    bumpRevision: z.ZodOptional<z.ZodBoolean>;
    data_output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    download_source_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fleet_server_host_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    force: z.ZodOptional<z.ZodBoolean>;
    global_data_tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    }, z.core.$strip>>>;
    has_agent_version_conditions: z.ZodOptional<z.ZodBoolean>;
    has_fleet_server: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodOptional<z.ZodString>;
    inactivity_timeout: z.ZodOptional<z.ZodNumber>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_fleet_server: z.ZodOptional<z.ZodBoolean>;
    is_managed: z.ZodOptional<z.ZodBoolean>;
    is_protected: z.ZodOptional<z.ZodBoolean>;
    is_verifier: z.ZodOptional<z.ZodBoolean>;
    keep_monitoring_alive: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    min_agent_version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    monitoring_diagnostics: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodObject<{
            burst: z.ZodOptional<z.ZodNumber>;
            interval: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        uploader: z.ZodOptional<z.ZodObject<{
            init_dur: z.ZodOptional<z.ZodString>;
            max_dur: z.ZodOptional<z.ZodString>;
            max_retries: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    monitoring_enabled: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        metrics: "metrics";
        logs: "logs";
        traces: "traces";
    }>>>;
    monitoring_http: z.ZodOptional<z.ZodObject<{
        buffer: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        host: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    monitoring_output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    monitoring_pprof_enabled: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodString;
    overrides: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
    package_agent_version_conditions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodString;
        version_condition: z.ZodString;
    }, z.core.$strip>>>>;
    required_versions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        percentage: z.ZodNumber;
        version: z.ZodString;
    }, z.core.$strip>>>>;
    space_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    supports_agentless: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    unenroll_timeout: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_new_agent_policy = z.infer<typeof Kibana_HTTP_APIs_new_agent_policy>;
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
export declare const Kibana_HTTP_APIs_agent_policy_response: z.ZodObject<{
    advanced_settings: z.ZodOptional<z.ZodObject<{
        agent_download_target_directory: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_download_timeout: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_features_disable_policy_change_acks_enabled: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_internal: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_limits_go_max_procs: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_files_interval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_files_keepfiles: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_files_rotateeverybytes: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_level: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_metrics_period: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_logging_to_files: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        agent_monitoring_runtime_experimental: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
    }, z.core.$strip>>;
    agent_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
        enabled: z.ZodBoolean;
        name: z.ZodString;
    }, z.core.$strip>>>;
    agentless: z.ZodOptional<z.ZodObject<{
        cloud_connectors: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            target_csp: z.ZodOptional<z.ZodEnum<{
                aws: "aws";
                azure: "azure";
                gcp: "gcp";
            }>>;
        }, z.core.$strip>>;
        cluster_id: z.ZodOptional<z.ZodString>;
        resources: z.ZodOptional<z.ZodObject<{
            requests: z.ZodOptional<z.ZodObject<{
                cpu: z.ZodOptional<z.ZodString>;
                memory: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    agents: z.ZodOptional<z.ZodNumber>;
    agents_per_version: z.ZodOptional<z.ZodArray<z.ZodObject<{
        count: z.ZodNumber;
        version: z.ZodString;
    }, z.core.$strip>>>;
    created_at: z.ZodOptional<z.ZodString>;
    data_output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodString>;
    download_source_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fips_agents: z.ZodOptional<z.ZodNumber>;
    fleet_server_host_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    global_data_tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
    }, z.core.$strip>>>;
    has_agent_version_conditions: z.ZodOptional<z.ZodBoolean>;
    has_fleet_server: z.ZodOptional<z.ZodBoolean>;
    id: z.ZodString;
    inactivity_timeout: z.ZodOptional<z.ZodNumber>;
    is_default: z.ZodOptional<z.ZodBoolean>;
    is_default_fleet_server: z.ZodOptional<z.ZodBoolean>;
    is_managed: z.ZodOptional<z.ZodBoolean>;
    is_preconfigured: z.ZodOptional<z.ZodBoolean>;
    is_protected: z.ZodBoolean;
    is_verifier: z.ZodOptional<z.ZodBoolean>;
    keep_monitoring_alive: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    min_agent_version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    monitoring_diagnostics: z.ZodOptional<z.ZodObject<{
        limit: z.ZodOptional<z.ZodObject<{
            burst: z.ZodOptional<z.ZodNumber>;
            interval: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        uploader: z.ZodOptional<z.ZodObject<{
            init_dur: z.ZodOptional<z.ZodString>;
            max_dur: z.ZodOptional<z.ZodString>;
            max_retries: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    monitoring_enabled: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        metrics: "metrics";
        logs: "logs";
        traces: "traces";
    }>>>;
    monitoring_http: z.ZodOptional<z.ZodObject<{
        buffer: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        enabled: z.ZodOptional<z.ZodBoolean>;
        host: z.ZodOptional<z.ZodString>;
        port: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    monitoring_output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    monitoring_pprof_enabled: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
    namespace: z.ZodString;
    overrides: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
    package_agent_version_conditions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        title: z.ZodString;
        version_condition: z.ZodString;
    }, z.core.$strip>>>>;
    package_policies: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodObject<{
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
    }, z.core.$strip>>]>>;
    required_versions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        percentage: z.ZodNumber;
        version: z.ZodString;
    }, z.core.$strip>>>>;
    revision: z.ZodNumber;
    schema_version: z.ZodOptional<z.ZodString>;
    space_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
    status: z.ZodEnum<{
        active: "active";
        inactive: "inactive";
    }>;
    supports_agentless: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    unenroll_timeout: z.ZodOptional<z.ZodNumber>;
    unprivileged_agents: z.ZodOptional<z.ZodNumber>;
    updated_at: z.ZodString;
    updated_by: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_agent_policy_response = z.infer<typeof Kibana_HTTP_APIs_agent_policy_response>;
export declare const Kibana_HTTP_APIs_get_agent_policy_response: z.ZodObject<{
    item: z.ZodObject<{
        advanced_settings: z.ZodOptional<z.ZodObject<{
            agent_download_target_directory: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_download_timeout: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_features_disable_policy_change_acks_enabled: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_internal: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_limits_go_max_procs: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_logging_files_interval: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_logging_files_keepfiles: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_logging_files_rotateeverybytes: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_logging_level: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_logging_metrics_period: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_logging_to_files: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
            agent_monitoring_runtime_experimental: z.ZodOptional<z.ZodNullable<z.ZodUnknown>>;
        }, z.core.$strip>>;
        agent_features: z.ZodOptional<z.ZodArray<z.ZodObject<{
            enabled: z.ZodBoolean;
            name: z.ZodString;
        }, z.core.$strip>>>;
        agentless: z.ZodOptional<z.ZodObject<{
            cloud_connectors: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
                target_csp: z.ZodOptional<z.ZodEnum<{
                    aws: "aws";
                    azure: "azure";
                    gcp: "gcp";
                }>>;
            }, z.core.$strip>>;
            cluster_id: z.ZodOptional<z.ZodString>;
            resources: z.ZodOptional<z.ZodObject<{
                requests: z.ZodOptional<z.ZodObject<{
                    cpu: z.ZodOptional<z.ZodString>;
                    memory: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        agents: z.ZodOptional<z.ZodNumber>;
        agents_per_version: z.ZodOptional<z.ZodArray<z.ZodObject<{
            count: z.ZodNumber;
            version: z.ZodString;
        }, z.core.$strip>>>;
        created_at: z.ZodOptional<z.ZodString>;
        data_output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        description: z.ZodOptional<z.ZodString>;
        download_source_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fips_agents: z.ZodOptional<z.ZodNumber>;
        fleet_server_host_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        global_data_tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodUnion<readonly [z.ZodString, z.ZodNumber]>;
        }, z.core.$strip>>>;
        has_agent_version_conditions: z.ZodOptional<z.ZodBoolean>;
        has_fleet_server: z.ZodOptional<z.ZodBoolean>;
        id: z.ZodString;
        inactivity_timeout: z.ZodOptional<z.ZodNumber>;
        is_default: z.ZodOptional<z.ZodBoolean>;
        is_default_fleet_server: z.ZodOptional<z.ZodBoolean>;
        is_managed: z.ZodOptional<z.ZodBoolean>;
        is_preconfigured: z.ZodOptional<z.ZodBoolean>;
        is_protected: z.ZodBoolean;
        is_verifier: z.ZodOptional<z.ZodBoolean>;
        keep_monitoring_alive: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        min_agent_version: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        monitoring_diagnostics: z.ZodOptional<z.ZodObject<{
            limit: z.ZodOptional<z.ZodObject<{
                burst: z.ZodOptional<z.ZodNumber>;
                interval: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            uploader: z.ZodOptional<z.ZodObject<{
                init_dur: z.ZodOptional<z.ZodString>;
                max_dur: z.ZodOptional<z.ZodString>;
                max_retries: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        monitoring_enabled: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            metrics: "metrics";
            logs: "logs";
            traces: "traces";
        }>>>;
        monitoring_http: z.ZodOptional<z.ZodObject<{
            buffer: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            enabled: z.ZodOptional<z.ZodBoolean>;
            host: z.ZodOptional<z.ZodString>;
            port: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        monitoring_output_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        monitoring_pprof_enabled: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
        namespace: z.ZodString;
        overrides: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodUnknown>>>>;
        package_agent_version_conditions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            title: z.ZodString;
            version_condition: z.ZodString;
        }, z.core.$strip>>>>;
        package_policies: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>]>>;
        required_versions: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
            percentage: z.ZodNumber;
            version: z.ZodString;
        }, z.core.$strip>>>>;
        revision: z.ZodNumber;
        schema_version: z.ZodOptional<z.ZodString>;
        space_ids: z.ZodOptional<z.ZodArray<z.ZodString>>;
        status: z.ZodEnum<{
            active: "active";
            inactive: "inactive";
        }>;
        supports_agentless: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        unenroll_timeout: z.ZodOptional<z.ZodNumber>;
        unprivileged_agents: z.ZodOptional<z.ZodNumber>;
        updated_at: z.ZodString;
        updated_by: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Kibana_HTTP_APIs_get_agent_policy_response = z.infer<typeof Kibana_HTTP_APIs_get_agent_policy_response>;
//# sourceMappingURL=post_fleet_agent_policies.d.ts.map