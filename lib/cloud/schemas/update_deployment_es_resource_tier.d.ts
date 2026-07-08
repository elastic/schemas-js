import { z } from 'zod';
export declare const ByokSettings: z.ZodObject<{
    key_resource_path: z.ZodString;
}, z.core.$strip>;
export type ByokSettings = z.infer<typeof ByokSettings>;
export declare const AutoOpsSettings: z.ZodObject<{
    status: z.ZodEnum<{
        connected: "connected";
        not_connected: "not_connected";
        excluded: "excluded";
    }>;
}, z.core.$strip>;
export type AutoOpsSettings = z.infer<typeof AutoOpsSettings>;
export declare const ObservabilityAbsoluteDeployment: z.ZodObject<{
    deployment_id: z.ZodString;
    ref_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ObservabilityAbsoluteDeployment = z.infer<typeof ObservabilityAbsoluteDeployment>;
export declare const TrafficFilterSettings: z.ZodObject<{
    rulesets: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type TrafficFilterSettings = z.infer<typeof TrafficFilterSettings>;
export declare const EnterpriseSearch: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    backend_plan: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type EnterpriseSearch = z.infer<typeof EnterpriseSearch>;
export declare const AppSearch: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    backend_plan: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type AppSearch = z.infer<typeof AppSearch>;
export declare const IntegrationsServer: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    backend_plan: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type IntegrationsServer = z.infer<typeof IntegrationsServer>;
export declare const Apm: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    backend_plan: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type Apm = z.infer<typeof Apm>;
export declare const Kibana: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    backend_plan: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type Kibana = z.infer<typeof Kibana>;
export declare const Elasticsearch: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodString;
    backend_plan: z.ZodObject<{}, z.core.$strip>;
}, z.core.$strip>;
export type Elasticsearch = z.infer<typeof Elasticsearch>;
export declare const ElasticsearchDependant: z.ZodObject<{
    id: z.ZodString;
    kind: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchDependant = z.infer<typeof ElasticsearchDependant>;
export declare const ReplyWarning: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ReplyWarning = z.infer<typeof ReplyWarning>;
export declare const ClusterCredentials: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type ClusterCredentials = z.infer<typeof ClusterCredentials>;
export declare const TierConfig: z.ZodObject<{
    memory_size: z.ZodOptional<z.ZodNumber>;
    zone_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type TierConfig = z.infer<typeof TierConfig>;
export declare const DeploymentMetricsSettings: z.ZodObject<{
    destination: z.ZodObject<{
        deployment_id: z.ZodString;
        ref_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type DeploymentMetricsSettings = z.infer<typeof DeploymentMetricsSettings>;
export declare const DeploymentLoggingSettings: z.ZodObject<{
    destination: z.ZodObject<{
        deployment_id: z.ZodString;
        ref_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type DeploymentLoggingSettings = z.infer<typeof DeploymentLoggingSettings>;
export declare const Updates: z.ZodObject<{
    elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Updates = z.infer<typeof Updates>;
export declare const Creates: z.ZodObject<{
    elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
    enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        backend_plan: z.ZodObject<{}, z.core.$strip>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Creates = z.infer<typeof Creates>;
export declare const OrphanedElasticsearch: z.ZodObject<{
    id: z.ZodString;
    dependents: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type OrphanedElasticsearch = z.infer<typeof OrphanedElasticsearch>;
export declare const DeploymentResource: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    kind: z.ZodString;
    region: z.ZodString;
    cloud_id: z.ZodOptional<z.ZodString>;
    credentials: z.ZodOptional<z.ZodObject<{
        username: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>>;
    secret_token: z.ZodOptional<z.ZodString>;
    warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentResource = z.infer<typeof DeploymentResource>;
export declare const TiersUpdateRequest: z.ZodObject<{
    hot_content: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    warm: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    cold: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    frozen: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    master: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    coordinating: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    ml: z.ZodOptional<z.ZodObject<{
        memory_size: z.ZodOptional<z.ZodNumber>;
        zone_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TiersUpdateRequest = z.infer<typeof TiersUpdateRequest>;
export declare const DeploymentObservabilitySettings: z.ZodObject<{
    logging: z.ZodOptional<z.ZodObject<{
        destination: z.ZodObject<{
            deployment_id: z.ZodString;
            ref_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    metrics: z.ZodOptional<z.ZodObject<{
        destination: z.ZodObject<{
            deployment_id: z.ZodString;
            ref_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentObservabilitySettings = z.infer<typeof DeploymentObservabilitySettings>;
export declare const DeploymentDiagnostics: z.ZodObject<{
    creates: z.ZodOptional<z.ZodObject<{
        elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    updates: z.ZodOptional<z.ZodObject<{
        elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
        enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            backend_plan: z.ZodObject<{}, z.core.$strip>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentDiagnostics = z.infer<typeof DeploymentDiagnostics>;
export declare const Orphaned: z.ZodObject<{
    elasticsearch: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        dependents: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            kind: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    kibana: z.ZodArray<z.ZodString>;
    apm: z.ZodArray<z.ZodString>;
    appsearch: z.ZodArray<z.ZodString>;
    enterprise_search: z.ZodArray<z.ZodString>;
    integrations_server: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type Orphaned = z.infer<typeof Orphaned>;
export declare const DeploymentSettings: z.ZodObject<{
    traffic_filter_settings: z.ZodOptional<z.ZodObject<{
        rulesets: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    observability: z.ZodOptional<z.ZodObject<{
        logging: z.ZodOptional<z.ZodObject<{
            destination: z.ZodObject<{
                deployment_id: z.ZodString;
                ref_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        metrics: z.ZodOptional<z.ZodObject<{
            destination: z.ZodObject<{
                deployment_id: z.ZodString;
                ref_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
    auto_ops: z.ZodObject<{
        status: z.ZodEnum<{
            connected: "connected";
            not_connected: "not_connected";
            excluded: "excluded";
        }>;
    }, z.core.$strip>;
    byok: z.ZodOptional<z.ZodObject<{
        key_resource_path: z.ZodString;
    }, z.core.$strip>>;
    solution_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeploymentSettings = z.infer<typeof DeploymentSettings>;
export declare const DeploymentUpdateResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    alias: z.ZodOptional<z.ZodString>;
    resources: z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodOptional<z.ZodString>;
        id: z.ZodString;
        kind: z.ZodString;
        region: z.ZodString;
        cloud_id: z.ZodOptional<z.ZodString>;
        credentials: z.ZodOptional<z.ZodObject<{
            username: z.ZodString;
            password: z.ZodString;
        }, z.core.$strip>>;
        secret_token: z.ZodOptional<z.ZodString>;
        warnings: z.ZodOptional<z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    shutdown_resources: z.ZodOptional<z.ZodObject<{
        elasticsearch: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            dependents: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                kind: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        kibana: z.ZodArray<z.ZodString>;
        apm: z.ZodArray<z.ZodString>;
        appsearch: z.ZodArray<z.ZodString>;
        enterprise_search: z.ZodArray<z.ZodString>;
        integrations_server: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    diagnostics: z.ZodOptional<z.ZodObject<{
        creates: z.ZodOptional<z.ZodObject<{
            elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        updates: z.ZodOptional<z.ZodObject<{
            elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
            enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
                ref_id: z.ZodString;
                display_name: z.ZodString;
                elasticsearch_cluster_ref_id: z.ZodString;
                backend_plan: z.ZodObject<{}, z.core.$strip>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    settings: z.ZodOptional<z.ZodObject<{
        traffic_filter_settings: z.ZodOptional<z.ZodObject<{
            rulesets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        observability: z.ZodOptional<z.ZodObject<{
            logging: z.ZodOptional<z.ZodObject<{
                destination: z.ZodObject<{
                    deployment_id: z.ZodString;
                    ref_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            metrics: z.ZodOptional<z.ZodObject<{
                destination: z.ZodObject<{
                    deployment_id: z.ZodString;
                    ref_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
        auto_ops: z.ZodObject<{
            status: z.ZodEnum<{
                connected: "connected";
                not_connected: "not_connected";
                excluded: "excluded";
            }>;
        }, z.core.$strip>;
        byok: z.ZodOptional<z.ZodObject<{
            key_resource_path: z.ZodString;
        }, z.core.$strip>>;
        solution_type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DeploymentUpdateResponse = z.infer<typeof DeploymentUpdateResponse>;
//# sourceMappingURL=update_deployment_es_resource_tier.d.ts.map