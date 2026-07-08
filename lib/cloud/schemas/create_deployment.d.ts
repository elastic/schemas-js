import { z } from 'zod';
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
export declare const MetadataItem: z.ZodObject<{
    key: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export type MetadataItem = z.infer<typeof MetadataItem>;
export declare const ByokSettings: z.ZodObject<{
    key_resource_path: z.ZodString;
}, z.core.$strip>;
export type ByokSettings = z.infer<typeof ByokSettings>;
export declare const ObservabilityAbsoluteDeployment: z.ZodObject<{
    deployment_id: z.ZodString;
    ref_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ObservabilityAbsoluteDeployment = z.infer<typeof ObservabilityAbsoluteDeployment>;
export declare const TrafficFilterSettings: z.ZodObject<{
    rulesets: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type TrafficFilterSettings = z.infer<typeof TrafficFilterSettings>;
export declare const ClusterMetadataSettings: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterMetadataSettings = z.infer<typeof ClusterMetadataSettings>;
export declare const IntegrationsServerPlanControlConfiguration: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
    calm_wait_time: z.ZodOptional<z.ZodNumber>;
    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
    cluster_reboot: z.ZodOptional<z.ZodEnum<{
        forced: "forced";
    }>>;
}, z.core.$strip>;
export type IntegrationsServerPlanControlConfiguration = z.infer<typeof IntegrationsServerPlanControlConfiguration>;
export declare const AutodetectStrategyConfig: z.ZodObject<{}, z.core.$strip>;
export type AutodetectStrategyConfig = z.infer<typeof AutodetectStrategyConfig>;
export declare const RollingGrowShrinkStrategyConfig: z.ZodObject<{}, z.core.$strip>;
export type RollingGrowShrinkStrategyConfig = z.infer<typeof RollingGrowShrinkStrategyConfig>;
export declare const GrowShrinkStrategyConfig: z.ZodObject<{}, z.core.$strip>;
export type GrowShrinkStrategyConfig = z.infer<typeof GrowShrinkStrategyConfig>;
export declare const RollingStrategyConfig: z.ZodObject<{
    group_by: z.ZodOptional<z.ZodString>;
    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type RollingStrategyConfig = z.infer<typeof RollingStrategyConfig>;
export declare const IntegrationsServerSystemSettings: z.ZodObject<{
    elasticsearch_username: z.ZodOptional<z.ZodString>;
    elasticsearch_password: z.ZodOptional<z.ZodString>;
    secret_token: z.ZodOptional<z.ZodString>;
    debug_enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type IntegrationsServerSystemSettings = z.infer<typeof IntegrationsServerSystemSettings>;
export declare const TopologySize: z.ZodObject<{
    value: z.ZodNumber;
    resource: z.ZodEnum<{
        memory: "memory";
        storage: "storage";
    }>;
}, z.core.$strip>;
export type TopologySize = z.infer<typeof TopologySize>;
export declare const AllocatorMoveRequest: z.ZodObject<{
    from: z.ZodString;
    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
    allocator_down: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type AllocatorMoveRequest = z.infer<typeof AllocatorMoveRequest>;
export declare const InstanceMoveRequest: z.ZodObject<{
    from: z.ZodString;
    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
    instance_down: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type InstanceMoveRequest = z.infer<typeof InstanceMoveRequest>;
export declare const EnterpriseSearchSystemSettings: z.ZodObject<{
    elasticsearch_username: z.ZodOptional<z.ZodString>;
    elasticsearch_password: z.ZodOptional<z.ZodString>;
    secret_session_key: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EnterpriseSearchSystemSettings = z.infer<typeof EnterpriseSearchSystemSettings>;
export declare const EnterpriseSearchNodeTypes: z.ZodObject<{
    appserver: z.ZodBoolean;
    worker: z.ZodBoolean;
    connector: z.ZodBoolean;
}, z.core.$strip>;
export type EnterpriseSearchNodeTypes = z.infer<typeof EnterpriseSearchNodeTypes>;
export declare const AppSearchSystemSettings: z.ZodObject<{
    elasticsearch_url: z.ZodOptional<z.ZodString>;
    elasticsearch_username: z.ZodOptional<z.ZodString>;
    elasticsearch_password: z.ZodOptional<z.ZodString>;
    secret_session_key: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AppSearchSystemSettings = z.infer<typeof AppSearchSystemSettings>;
export declare const AppSearchNodeTypes: z.ZodObject<{
    appserver: z.ZodBoolean;
    worker: z.ZodBoolean;
}, z.core.$strip>;
export type AppSearchNodeTypes = z.infer<typeof AppSearchNodeTypes>;
export declare const ApmPlanControlConfiguration: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
    calm_wait_time: z.ZodOptional<z.ZodNumber>;
    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
    cluster_reboot: z.ZodOptional<z.ZodEnum<{
        forced: "forced";
    }>>;
}, z.core.$strip>;
export type ApmPlanControlConfiguration = z.infer<typeof ApmPlanControlConfiguration>;
export declare const ApmSystemSettings: z.ZodObject<{
    elasticsearch_username: z.ZodOptional<z.ZodString>;
    elasticsearch_password: z.ZodOptional<z.ZodString>;
    secret_token: z.ZodOptional<z.ZodString>;
    debug_enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ApmSystemSettings = z.infer<typeof ApmSystemSettings>;
export declare const KibanaPlanControlConfiguration: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
    calm_wait_time: z.ZodOptional<z.ZodNumber>;
    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
    cluster_reboot: z.ZodOptional<z.ZodEnum<{
        forced: "forced";
    }>>;
}, z.core.$strip>;
export type KibanaPlanControlConfiguration = z.infer<typeof KibanaPlanControlConfiguration>;
export declare const KibanaSystemSettings: z.ZodObject<{
    elasticsearch_username: z.ZodOptional<z.ZodString>;
    elasticsearch_password: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type KibanaSystemSettings = z.infer<typeof KibanaSystemSettings>;
export declare const KeystoreSecret: z.ZodObject<{
    value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    as_file: z.ZodOptional<z.ZodBoolean>;
    is_allowlisted: z.ZodOptional<z.ZodBoolean>;
    is_reloadable: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type KeystoreSecret = z.infer<typeof KeystoreSecret>;
export declare const CertificateMetaData: z.ZodObject<{
    fingerprint: z.ZodString;
    valid_to: z.ZodString;
    valid_from: z.ZodString;
    also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type CertificateMetaData = z.infer<typeof CertificateMetaData>;
export declare const ExternalTrustRelationship: z.ZodObject<{
    trust_relationship_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    trust_all: z.ZodBoolean;
    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ExternalTrustRelationship = z.infer<typeof ExternalTrustRelationship>;
export declare const AccountTrustRelationship: z.ZodObject<{
    account_id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    trust_all: z.ZodBoolean;
    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type AccountTrustRelationship = z.infer<typeof AccountTrustRelationship>;
export declare const ClusterCurationSpec: z.ZodObject<{
    index_pattern: z.ZodString;
    trigger_interval_seconds: z.ZodNumber;
}, z.core.$strip>;
export type ClusterCurationSpec = z.infer<typeof ClusterCurationSpec>;
export declare const ManagedMonitoringSettings: z.ZodObject<{
    target_cluster_id: z.ZodString;
}, z.core.$strip>;
export type ManagedMonitoringSettings = z.infer<typeof ManagedMonitoringSettings>;
export declare const ClusterSnapshotRetention: z.ZodObject<{
    snapshots: z.ZodOptional<z.ZodNumber>;
    max_age: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterSnapshotRetention = z.infer<typeof ClusterSnapshotRetention>;
export declare const RemoteResourceInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    connected: z.ZodBoolean;
    compatible: z.ZodBoolean;
    trusted: z.ZodBoolean;
    trusted_back: z.ZodBoolean;
}, z.core.$strip>;
export type RemoteResourceInfo = z.infer<typeof RemoteResourceInfo>;
export declare const SnapshotDependencyConfiguration: z.ZodObject<{
    source_cluster_id: z.ZodString;
}, z.core.$strip>;
export type SnapshotDependencyConfiguration = z.infer<typeof SnapshotDependencyConfiguration>;
export declare const RestoreSnapshotApiConfiguration: z.ZodObject<{
    indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
    raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type RestoreSnapshotApiConfiguration = z.infer<typeof RestoreSnapshotApiConfiguration>;
export declare const RestoreSnapshotRepoConfiguration: z.ZodObject<{
    raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type RestoreSnapshotRepoConfiguration = z.infer<typeof RestoreSnapshotRepoConfiguration>;
export declare const ElasticsearchPlanControlConfiguration: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
    calm_wait_time: z.ZodOptional<z.ZodNumber>;
    skip_snapshot: z.ZodOptional<z.ZodBoolean>;
    max_snapshot_attempts: z.ZodOptional<z.ZodNumber>;
    max_snapshot_age: z.ZodOptional<z.ZodNumber>;
    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
    cluster_reboot: z.ZodOptional<z.ZodEnum<{
        forced: "forced";
    }>>;
}, z.core.$strip>;
export type ElasticsearchPlanControlConfiguration = z.infer<typeof ElasticsearchPlanControlConfiguration>;
export declare const DeploymentTemplateReference: z.ZodObject<{
    id: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeploymentTemplateReference = z.infer<typeof DeploymentTemplateReference>;
export declare const ElasticsearchCuration: z.ZodObject<{
    from_instance_configuration_id: z.ZodString;
    to_instance_configuration_id: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchCuration = z.infer<typeof ElasticsearchCuration>;
export declare const ElasticsearchUserBundle: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
    elasticsearch_version: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchUserBundle = z.infer<typeof ElasticsearchUserBundle>;
export declare const ElasticsearchUserPlugin: z.ZodObject<{
    name: z.ZodString;
    url: z.ZodString;
    elasticsearch_version: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchUserPlugin = z.infer<typeof ElasticsearchUserPlugin>;
export declare const ElasticsearchScriptTypeSettings: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ElasticsearchScriptTypeSettings = z.infer<typeof ElasticsearchScriptTypeSettings>;
export declare const ElasticsearchNodeType: z.ZodObject<{
    master: z.ZodOptional<z.ZodBoolean>;
    data: z.ZodOptional<z.ZodBoolean>;
    ingest: z.ZodOptional<z.ZodBoolean>;
    ml: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ElasticsearchNodeType = z.infer<typeof ElasticsearchNodeType>;
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
export declare const DeploymentCreateMetadata: z.ZodObject<{
    tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentCreateMetadata = z.infer<typeof DeploymentCreateMetadata>;
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
export declare const IntegrationsServerSettings: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IntegrationsServerSettings = z.infer<typeof IntegrationsServerSettings>;
export declare const EnterpriseSearchSettings: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EnterpriseSearchSettings = z.infer<typeof EnterpriseSearchSettings>;
export declare const AppSearchSettings: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AppSearchSettings = z.infer<typeof AppSearchSettings>;
export declare const ApmSettings: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ApmSettings = z.infer<typeof ApmSettings>;
export declare const KibanaClusterSettings: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KibanaClusterSettings = z.infer<typeof KibanaClusterSettings>;
export declare const PlanStrategy: z.ZodObject<{
    rolling: z.ZodOptional<z.ZodObject<{
        group_by: z.ZodOptional<z.ZodString>;
        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type PlanStrategy = z.infer<typeof PlanStrategy>;
export declare const IntegrationsServerConfiguration: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodOptional<z.ZodString>;
    system_settings: z.ZodOptional<z.ZodObject<{
        elasticsearch_username: z.ZodOptional<z.ZodString>;
        elasticsearch_password: z.ZodOptional<z.ZodString>;
        secret_token: z.ZodOptional<z.ZodString>;
        debug_enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_yaml: z.ZodOptional<z.ZodString>;
    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodEnum<{
        standalone: "standalone";
        managed: "managed";
    }>>;
}, z.core.$strip>;
export type IntegrationsServerConfiguration = z.infer<typeof IntegrationsServerConfiguration>;
export declare const TopologyElementControl: z.ZodObject<{
    min: z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TopologyElementControl = z.infer<typeof TopologyElementControl>;
export declare const EnterpriseSearchPlanControlConfiguration: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
    calm_wait_time: z.ZodOptional<z.ZodNumber>;
    move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
        instance_down: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
        allocator_down: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    reallocate_instances: z.ZodOptional<z.ZodBoolean>;
    preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
    cluster_reboot: z.ZodOptional<z.ZodEnum<{
        forced: "forced";
    }>>;
}, z.core.$strip>;
export type EnterpriseSearchPlanControlConfiguration = z.infer<typeof EnterpriseSearchPlanControlConfiguration>;
export declare const AppSearchPlanControlConfiguration: z.ZodObject<{
    timeout: z.ZodOptional<z.ZodNumber>;
    calm_wait_time: z.ZodOptional<z.ZodNumber>;
    move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
        instance_down: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
        allocator_down: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    reallocate_instances: z.ZodOptional<z.ZodBoolean>;
    preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
    cluster_reboot: z.ZodOptional<z.ZodEnum<{
        forced: "forced";
    }>>;
}, z.core.$strip>;
export type AppSearchPlanControlConfiguration = z.infer<typeof AppSearchPlanControlConfiguration>;
export declare const EnterpriseSearchConfiguration: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodOptional<z.ZodString>;
    system_settings: z.ZodOptional<z.ZodObject<{
        elasticsearch_username: z.ZodOptional<z.ZodString>;
        elasticsearch_password: z.ZodOptional<z.ZodString>;
        secret_session_key: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_yaml: z.ZodOptional<z.ZodString>;
    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EnterpriseSearchConfiguration = z.infer<typeof EnterpriseSearchConfiguration>;
export declare const AppSearchConfiguration: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodOptional<z.ZodString>;
    system_settings: z.ZodOptional<z.ZodObject<{
        elasticsearch_url: z.ZodOptional<z.ZodString>;
        elasticsearch_username: z.ZodOptional<z.ZodString>;
        elasticsearch_password: z.ZodOptional<z.ZodString>;
        secret_session_key: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_yaml: z.ZodOptional<z.ZodString>;
    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AppSearchConfiguration = z.infer<typeof AppSearchConfiguration>;
export declare const ApmConfiguration: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodOptional<z.ZodString>;
    system_settings: z.ZodOptional<z.ZodObject<{
        elasticsearch_username: z.ZodOptional<z.ZodString>;
        elasticsearch_password: z.ZodOptional<z.ZodString>;
        secret_token: z.ZodOptional<z.ZodString>;
        debug_enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_yaml: z.ZodOptional<z.ZodString>;
    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ApmConfiguration = z.infer<typeof ApmConfiguration>;
export declare const KibanaConfiguration: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodOptional<z.ZodString>;
    system_settings: z.ZodOptional<z.ZodObject<{
        elasticsearch_username: z.ZodOptional<z.ZodString>;
        elasticsearch_password: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_yaml: z.ZodOptional<z.ZodString>;
    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type KibanaConfiguration = z.infer<typeof KibanaConfiguration>;
export declare const KeystoreContents: z.ZodObject<{
    secrets: z.ZodRecord<z.ZodString, z.ZodObject<{
        value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        as_file: z.ZodOptional<z.ZodBoolean>;
        is_allowlisted: z.ZodOptional<z.ZodBoolean>;
        is_reloadable: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KeystoreContents = z.infer<typeof KeystoreContents>;
export declare const TrustedCertificate: z.ZodObject<{
    pem: z.ZodString;
    metadata: z.ZodOptional<z.ZodObject<{
        fingerprint: z.ZodString;
        valid_to: z.ZodString;
        valid_from: z.ZodString;
        also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TrustedCertificate = z.infer<typeof TrustedCertificate>;
export declare const ClusterCurationSettings: z.ZodObject<{
    specs: z.ZodArray<z.ZodObject<{
        index_pattern: z.ZodString;
        trigger_interval_seconds: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterCurationSettings = z.infer<typeof ClusterCurationSettings>;
export declare const ClusterSnapshotSettings: z.ZodObject<{
    interval: z.ZodOptional<z.ZodString>;
    retention: z.ZodOptional<z.ZodObject<{
        snapshots: z.ZodOptional<z.ZodNumber>;
        max_age: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    slm: z.ZodOptional<z.ZodBoolean>;
    cron_expression: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterSnapshotSettings = z.infer<typeof ClusterSnapshotSettings>;
export declare const RemoteResourceRef: z.ZodObject<{
    deployment_id: z.ZodString;
    elasticsearch_ref_id: z.ZodString;
    alias: z.ZodString;
    skip_unavailable: z.ZodOptional<z.ZodBoolean>;
    info: z.ZodOptional<z.ZodObject<{
        healthy: z.ZodBoolean;
        connected: z.ZodBoolean;
        compatible: z.ZodBoolean;
        trusted: z.ZodBoolean;
        trusted_back: z.ZodBoolean;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RemoteResourceRef = z.infer<typeof RemoteResourceRef>;
export declare const RestoreSnapshotConfiguration: z.ZodObject<{
    repository_name: z.ZodOptional<z.ZodString>;
    snapshot_name: z.ZodString;
    repository_config: z.ZodOptional<z.ZodObject<{
        raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    restore_payload: z.ZodOptional<z.ZodObject<{
        indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
        raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    strategy: z.ZodOptional<z.ZodEnum<{
        recovery: "recovery";
        full: "full";
        partial: "partial";
    }>>;
    source_cluster_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type RestoreSnapshotConfiguration = z.infer<typeof RestoreSnapshotConfiguration>;
export declare const ElasticsearchScriptingUserSettings: z.ZodObject<{
    painless_enabled: z.ZodOptional<z.ZodBoolean>;
    mustache_enabled: z.ZodOptional<z.ZodBoolean>;
    expressions_enabled: z.ZodOptional<z.ZodBoolean>;
    stored: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    file: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    inline: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchScriptingUserSettings = z.infer<typeof ElasticsearchScriptingUserSettings>;
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
export declare const TransientIntegrationsServerPlanConfiguration: z.ZodObject<{
    strategy: z.ZodOptional<z.ZodObject<{
        rolling: z.ZodOptional<z.ZodObject<{
            group_by: z.ZodOptional<z.ZodString>;
            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    plan_configuration: z.ZodOptional<z.ZodObject<{
        timeout: z.ZodOptional<z.ZodNumber>;
        calm_wait_time: z.ZodOptional<z.ZodNumber>;
        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
        cluster_reboot: z.ZodOptional<z.ZodEnum<{
            forced: "forced";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TransientIntegrationsServerPlanConfiguration = z.infer<typeof TransientIntegrationsServerPlanConfiguration>;
export declare const TransientApmPlanConfiguration: z.ZodObject<{
    strategy: z.ZodOptional<z.ZodObject<{
        rolling: z.ZodOptional<z.ZodObject<{
            group_by: z.ZodOptional<z.ZodString>;
            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    plan_configuration: z.ZodOptional<z.ZodObject<{
        timeout: z.ZodOptional<z.ZodNumber>;
        calm_wait_time: z.ZodOptional<z.ZodNumber>;
        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
        cluster_reboot: z.ZodOptional<z.ZodEnum<{
            forced: "forced";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TransientApmPlanConfiguration = z.infer<typeof TransientApmPlanConfiguration>;
export declare const TransientKibanaPlanConfiguration: z.ZodObject<{
    strategy: z.ZodOptional<z.ZodObject<{
        rolling: z.ZodOptional<z.ZodObject<{
            group_by: z.ZodOptional<z.ZodString>;
            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    plan_configuration: z.ZodOptional<z.ZodObject<{
        timeout: z.ZodOptional<z.ZodNumber>;
        calm_wait_time: z.ZodOptional<z.ZodNumber>;
        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
        cluster_reboot: z.ZodOptional<z.ZodEnum<{
            forced: "forced";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TransientKibanaPlanConfiguration = z.infer<typeof TransientKibanaPlanConfiguration>;
export declare const IntegrationsServerTopologyElement: z.ZodObject<{
    instance_configuration_id: z.ZodOptional<z.ZodString>;
    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    integrations_server: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_token: z.ZodOptional<z.ZodString>;
            debug_enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            standalone: "standalone";
            managed: "managed";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IntegrationsServerTopologyElement = z.infer<typeof IntegrationsServerTopologyElement>;
export declare const TransientEnterpriseSearchPlanConfiguration: z.ZodObject<{
    strategy: z.ZodOptional<z.ZodObject<{
        rolling: z.ZodOptional<z.ZodObject<{
            group_by: z.ZodOptional<z.ZodString>;
            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    plan_configuration: z.ZodOptional<z.ZodObject<{
        timeout: z.ZodOptional<z.ZodNumber>;
        calm_wait_time: z.ZodOptional<z.ZodNumber>;
        move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
            instance_down: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allocator_down: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        reallocate_instances: z.ZodOptional<z.ZodBoolean>;
        preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
        cluster_reboot: z.ZodOptional<z.ZodEnum<{
            forced: "forced";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TransientEnterpriseSearchPlanConfiguration = z.infer<typeof TransientEnterpriseSearchPlanConfiguration>;
export declare const TransientAppSearchPlanConfiguration: z.ZodObject<{
    strategy: z.ZodOptional<z.ZodObject<{
        rolling: z.ZodOptional<z.ZodObject<{
            group_by: z.ZodOptional<z.ZodString>;
            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    plan_configuration: z.ZodOptional<z.ZodObject<{
        timeout: z.ZodOptional<z.ZodNumber>;
        calm_wait_time: z.ZodOptional<z.ZodNumber>;
        move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
            instance_down: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
            allocator_down: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        reallocate_instances: z.ZodOptional<z.ZodBoolean>;
        preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
        cluster_reboot: z.ZodOptional<z.ZodEnum<{
            forced: "forced";
        }>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TransientAppSearchPlanConfiguration = z.infer<typeof TransientAppSearchPlanConfiguration>;
export declare const EnterpriseSearchTopologyElement: z.ZodObject<{
    node_type: z.ZodOptional<z.ZodObject<{
        appserver: z.ZodBoolean;
        worker: z.ZodBoolean;
        connector: z.ZodBoolean;
    }, z.core.$strip>>;
    instance_configuration_id: z.ZodOptional<z.ZodString>;
    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    enterprise_search: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_session_key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    allocator_filter: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    node_configuration: z.ZodOptional<z.ZodString>;
    memory_per_node: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    node_count_per_zone: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type EnterpriseSearchTopologyElement = z.infer<typeof EnterpriseSearchTopologyElement>;
export declare const AppSearchTopologyElement: z.ZodObject<{
    node_type: z.ZodOptional<z.ZodObject<{
        appserver: z.ZodBoolean;
        worker: z.ZodBoolean;
    }, z.core.$strip>>;
    instance_configuration_id: z.ZodOptional<z.ZodString>;
    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    appsearch: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_url: z.ZodOptional<z.ZodString>;
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_session_key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AppSearchTopologyElement = z.infer<typeof AppSearchTopologyElement>;
export declare const ApmTopologyElement: z.ZodObject<{
    instance_configuration_id: z.ZodOptional<z.ZodString>;
    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    apm: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_token: z.ZodOptional<z.ZodString>;
            debug_enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ApmTopologyElement = z.infer<typeof ApmTopologyElement>;
export declare const KibanaClusterTopologyElement: z.ZodObject<{
    instance_configuration_id: z.ZodOptional<z.ZodString>;
    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    kibana: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KibanaClusterTopologyElement = z.infer<typeof KibanaClusterTopologyElement>;
export declare const DirectTrustRelationship: z.ZodObject<{
    uid: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodEnum<{
        generic: "generic";
        proxy: "proxy";
        ECE: "ECE";
        ESS: "ESS";
    }>>;
    trust_all: z.ZodBoolean;
    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    scope_id: z.ZodOptional<z.ZodString>;
    additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
    certificates: z.ZodArray<z.ZodObject<{
        pem: z.ZodString;
        metadata: z.ZodOptional<z.ZodObject<{
            fingerprint: z.ZodString;
            valid_to: z.ZodString;
            valid_from: z.ZodString;
            also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DirectTrustRelationship = z.infer<typeof DirectTrustRelationship>;
export declare const RemoteResources: z.ZodObject<{
    resources: z.ZodArray<z.ZodObject<{
        deployment_id: z.ZodString;
        elasticsearch_ref_id: z.ZodString;
        alias: z.ZodString;
        skip_unavailable: z.ZodOptional<z.ZodBoolean>;
        info: z.ZodOptional<z.ZodObject<{
            healthy: z.ZodBoolean;
            connected: z.ZodBoolean;
            compatible: z.ZodBoolean;
            trusted: z.ZodBoolean;
            trusted_back: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type RemoteResources = z.infer<typeof RemoteResources>;
export declare const ElasticsearchSystemSettings: z.ZodObject<{
    scripting: z.ZodOptional<z.ZodObject<{
        painless_enabled: z.ZodOptional<z.ZodBoolean>;
        mustache_enabled: z.ZodOptional<z.ZodBoolean>;
        expressions_enabled: z.ZodOptional<z.ZodBoolean>;
        stored: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        file: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        inline: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    auto_create_index: z.ZodOptional<z.ZodBoolean>;
    enable_close_index: z.ZodOptional<z.ZodBoolean>;
    destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
    watcher_trigger_engine: z.ZodOptional<z.ZodString>;
    default_shards_per_index: z.ZodOptional<z.ZodNumber>;
    monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
    monitoring_history_duration: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchSystemSettings = z.infer<typeof ElasticsearchSystemSettings>;
export declare const DeploymentCreateResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    alias: z.ZodOptional<z.ZodString>;
    created: z.ZodBoolean;
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
}, z.core.$strip>;
export type DeploymentCreateResponse = z.infer<typeof DeploymentCreateResponse>;
export declare const DeploymentCreateSettings: z.ZodObject<{
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
    byok: z.ZodOptional<z.ZodObject<{
        key_resource_path: z.ZodString;
    }, z.core.$strip>>;
    autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
    solution_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeploymentCreateSettings = z.infer<typeof DeploymentCreateSettings>;
export declare const IntegrationsServerPlan: z.ZodObject<{
    cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
        instance_configuration_id: z.ZodOptional<z.ZodString>;
        instance_configuration_version: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        integrations_server: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_token: z.ZodOptional<z.ZodString>;
                debug_enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                standalone: "standalone";
                managed: "managed";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    integrations_server: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_token: z.ZodOptional<z.ZodString>;
            debug_enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        mode: z.ZodOptional<z.ZodEnum<{
            standalone: "standalone";
            managed: "managed";
        }>>;
    }, z.core.$strip>;
    transient: z.ZodOptional<z.ZodObject<{
        strategy: z.ZodOptional<z.ZodObject<{
            rolling: z.ZodOptional<z.ZodObject<{
                group_by: z.ZodOptional<z.ZodString>;
                allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        plan_configuration: z.ZodOptional<z.ZodObject<{
            timeout: z.ZodOptional<z.ZodNumber>;
            calm_wait_time: z.ZodOptional<z.ZodNumber>;
            extended_maintenance: z.ZodOptional<z.ZodBoolean>;
            cluster_reboot: z.ZodOptional<z.ZodEnum<{
                forced: "forced";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IntegrationsServerPlan = z.infer<typeof IntegrationsServerPlan>;
export declare const EnterpriseSearchPlan: z.ZodObject<{
    cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
        node_type: z.ZodOptional<z.ZodObject<{
            appserver: z.ZodBoolean;
            worker: z.ZodBoolean;
            connector: z.ZodBoolean;
        }, z.core.$strip>>;
        instance_configuration_id: z.ZodOptional<z.ZodString>;
        instance_configuration_version: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        enterprise_search: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_session_key: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        allocator_filter: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        node_configuration: z.ZodOptional<z.ZodString>;
        memory_per_node: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        node_count_per_zone: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>>;
    enterprise_search: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_session_key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    transient: z.ZodOptional<z.ZodObject<{
        strategy: z.ZodOptional<z.ZodObject<{
            rolling: z.ZodOptional<z.ZodObject<{
                group_by: z.ZodOptional<z.ZodString>;
                allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        plan_configuration: z.ZodOptional<z.ZodObject<{
            timeout: z.ZodOptional<z.ZodNumber>;
            calm_wait_time: z.ZodOptional<z.ZodNumber>;
            move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                instance_down: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                allocator_down: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            reallocate_instances: z.ZodOptional<z.ZodBoolean>;
            preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
            extended_maintenance: z.ZodOptional<z.ZodBoolean>;
            cluster_reboot: z.ZodOptional<z.ZodEnum<{
                forced: "forced";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EnterpriseSearchPlan = z.infer<typeof EnterpriseSearchPlan>;
export declare const AppSearchPlan: z.ZodObject<{
    cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
        node_type: z.ZodOptional<z.ZodObject<{
            appserver: z.ZodBoolean;
            worker: z.ZodBoolean;
        }, z.core.$strip>>;
        instance_configuration_id: z.ZodOptional<z.ZodString>;
        instance_configuration_version: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        appsearch: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_url: z.ZodOptional<z.ZodString>;
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_session_key: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    appsearch: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_url: z.ZodOptional<z.ZodString>;
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_session_key: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    transient: z.ZodOptional<z.ZodObject<{
        strategy: z.ZodOptional<z.ZodObject<{
            rolling: z.ZodOptional<z.ZodObject<{
                group_by: z.ZodOptional<z.ZodString>;
                allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        plan_configuration: z.ZodOptional<z.ZodObject<{
            timeout: z.ZodOptional<z.ZodNumber>;
            calm_wait_time: z.ZodOptional<z.ZodNumber>;
            move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                instance_down: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                allocator_down: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
            reallocate_instances: z.ZodOptional<z.ZodBoolean>;
            preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
            extended_maintenance: z.ZodOptional<z.ZodBoolean>;
            cluster_reboot: z.ZodOptional<z.ZodEnum<{
                forced: "forced";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AppSearchPlan = z.infer<typeof AppSearchPlan>;
export declare const ApmPlan: z.ZodObject<{
    cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
        instance_configuration_id: z.ZodOptional<z.ZodString>;
        instance_configuration_version: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        apm: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_token: z.ZodOptional<z.ZodString>;
                debug_enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    apm: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
            secret_token: z.ZodOptional<z.ZodString>;
            debug_enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    transient: z.ZodOptional<z.ZodObject<{
        strategy: z.ZodOptional<z.ZodObject<{
            rolling: z.ZodOptional<z.ZodObject<{
                group_by: z.ZodOptional<z.ZodString>;
                allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        plan_configuration: z.ZodOptional<z.ZodObject<{
            timeout: z.ZodOptional<z.ZodNumber>;
            calm_wait_time: z.ZodOptional<z.ZodNumber>;
            extended_maintenance: z.ZodOptional<z.ZodBoolean>;
            cluster_reboot: z.ZodOptional<z.ZodEnum<{
                forced: "forced";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ApmPlan = z.infer<typeof ApmPlan>;
export declare const KibanaClusterPlan: z.ZodObject<{
    cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
        instance_configuration_id: z.ZodOptional<z.ZodString>;
        instance_configuration_version: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        kibana: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    kibana: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            elasticsearch_username: z.ZodOptional<z.ZodString>;
            elasticsearch_password: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    transient: z.ZodOptional<z.ZodObject<{
        strategy: z.ZodOptional<z.ZodObject<{
            rolling: z.ZodOptional<z.ZodObject<{
                group_by: z.ZodOptional<z.ZodString>;
                allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        plan_configuration: z.ZodOptional<z.ZodObject<{
            timeout: z.ZodOptional<z.ZodNumber>;
            calm_wait_time: z.ZodOptional<z.ZodNumber>;
            extended_maintenance: z.ZodOptional<z.ZodBoolean>;
            cluster_reboot: z.ZodOptional<z.ZodEnum<{
                forced: "forced";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KibanaClusterPlan = z.infer<typeof KibanaClusterPlan>;
export declare const ElasticsearchClusterTrustSettings: z.ZodObject<{
    accounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        account_id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        trust_all: z.ZodBoolean;
        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    external: z.ZodOptional<z.ZodArray<z.ZodObject<{
        trust_relationship_id: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        trust_all: z.ZodBoolean;
        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    direct: z.ZodOptional<z.ZodArray<z.ZodObject<{
        uid: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<{
            generic: "generic";
            proxy: "proxy";
            ECE: "ECE";
            ESS: "ESS";
        }>>;
        trust_all: z.ZodBoolean;
        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
        scope_id: z.ZodOptional<z.ZodString>;
        additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
        certificates: z.ZodArray<z.ZodObject<{
            pem: z.ZodString;
            metadata: z.ZodOptional<z.ZodObject<{
                fingerprint: z.ZodString;
                valid_to: z.ZodString;
                valid_from: z.ZodString;
                also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ElasticsearchClusterTrustSettings = z.infer<typeof ElasticsearchClusterTrustSettings>;
export declare const TransientElasticsearchPlanConfiguration: z.ZodObject<{
    strategy: z.ZodOptional<z.ZodObject<{
        rolling: z.ZodOptional<z.ZodObject<{
            group_by: z.ZodOptional<z.ZodString>;
            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    plan_configuration: z.ZodOptional<z.ZodObject<{
        timeout: z.ZodOptional<z.ZodNumber>;
        calm_wait_time: z.ZodOptional<z.ZodNumber>;
        skip_snapshot: z.ZodOptional<z.ZodBoolean>;
        max_snapshot_attempts: z.ZodOptional<z.ZodNumber>;
        max_snapshot_age: z.ZodOptional<z.ZodNumber>;
        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
        cluster_reboot: z.ZodOptional<z.ZodEnum<{
            forced: "forced";
        }>>;
    }, z.core.$strip>>;
    restore_snapshot: z.ZodOptional<z.ZodObject<{
        repository_name: z.ZodOptional<z.ZodString>;
        snapshot_name: z.ZodString;
        repository_config: z.ZodOptional<z.ZodObject<{
            raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        restore_payload: z.ZodOptional<z.ZodObject<{
            indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
            raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        strategy: z.ZodOptional<z.ZodEnum<{
            recovery: "recovery";
            full: "full";
            partial: "partial";
        }>>;
        source_cluster_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    snapshot_dependency: z.ZodOptional<z.ZodObject<{
        source_cluster_id: z.ZodString;
    }, z.core.$strip>>;
    remote_clusters: z.ZodOptional<z.ZodObject<{
        resources: z.ZodArray<z.ZodObject<{
            deployment_id: z.ZodString;
            elasticsearch_ref_id: z.ZodString;
            alias: z.ZodString;
            skip_unavailable: z.ZodOptional<z.ZodBoolean>;
            info: z.ZodOptional<z.ZodObject<{
                healthy: z.ZodBoolean;
                connected: z.ZodBoolean;
                compatible: z.ZodBoolean;
                trusted: z.ZodBoolean;
                trusted_back: z.ZodBoolean;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    cluster_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
}, z.core.$strip>;
export type TransientElasticsearchPlanConfiguration = z.infer<typeof TransientElasticsearchPlanConfiguration>;
export declare const ElasticsearchConfiguration: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    docker_image: z.ZodOptional<z.ZodString>;
    system_settings: z.ZodOptional<z.ZodObject<{
        scripting: z.ZodOptional<z.ZodObject<{
            painless_enabled: z.ZodOptional<z.ZodBoolean>;
            mustache_enabled: z.ZodOptional<z.ZodBoolean>;
            expressions_enabled: z.ZodOptional<z.ZodBoolean>;
            stored: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            file: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            inline: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodOptional<z.ZodBoolean>;
                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
        auto_create_index: z.ZodOptional<z.ZodBoolean>;
        enable_close_index: z.ZodOptional<z.ZodBoolean>;
        destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
        watcher_trigger_engine: z.ZodOptional<z.ZodString>;
        default_shards_per_index: z.ZodOptional<z.ZodNumber>;
        monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
        monitoring_history_duration: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_yaml: z.ZodOptional<z.ZodString>;
    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
    enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
    user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        elasticsearch_version: z.ZodString;
    }, z.core.$strip>>>;
    user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        url: z.ZodString;
        elasticsearch_version: z.ZodString;
    }, z.core.$strip>>>;
    curation: z.ZodOptional<z.ZodObject<{
        from_instance_configuration_id: z.ZodString;
        to_instance_configuration_id: z.ZodString;
    }, z.core.$strip>>;
    node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.core.$strip>;
export type ElasticsearchConfiguration = z.infer<typeof ElasticsearchConfiguration>;
export declare const IntegrationsServerPayload: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    plan: z.ZodObject<{
        cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
            instance_configuration_id: z.ZodOptional<z.ZodString>;
            instance_configuration_version: z.ZodOptional<z.ZodNumber>;
            size: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            zone_count: z.ZodOptional<z.ZodNumber>;
            integrations_server: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_token: z.ZodOptional<z.ZodString>;
                    debug_enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                mode: z.ZodOptional<z.ZodEnum<{
                    standalone: "standalone";
                    managed: "managed";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        integrations_server: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_token: z.ZodOptional<z.ZodString>;
                debug_enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            mode: z.ZodOptional<z.ZodEnum<{
                standalone: "standalone";
                managed: "managed";
            }>>;
        }, z.core.$strip>;
        transient: z.ZodOptional<z.ZodObject<{
            strategy: z.ZodOptional<z.ZodObject<{
                rolling: z.ZodOptional<z.ZodObject<{
                    group_by: z.ZodOptional<z.ZodString>;
                    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            plan_configuration: z.ZodOptional<z.ZodObject<{
                timeout: z.ZodOptional<z.ZodNumber>;
                calm_wait_time: z.ZodOptional<z.ZodNumber>;
                extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                cluster_reboot: z.ZodOptional<z.ZodEnum<{
                    forced: "forced";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    settings: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IntegrationsServerPayload = z.infer<typeof IntegrationsServerPayload>;
export declare const EnterpriseSearchPayload: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    plan: z.ZodObject<{
        cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
            node_type: z.ZodOptional<z.ZodObject<{
                appserver: z.ZodBoolean;
                worker: z.ZodBoolean;
                connector: z.ZodBoolean;
            }, z.core.$strip>>;
            instance_configuration_id: z.ZodOptional<z.ZodString>;
            instance_configuration_version: z.ZodOptional<z.ZodNumber>;
            size: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            zone_count: z.ZodOptional<z.ZodNumber>;
            enterprise_search: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_session_key: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            allocator_filter: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            node_configuration: z.ZodOptional<z.ZodString>;
            memory_per_node: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            node_count_per_zone: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>>;
        enterprise_search: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_session_key: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        transient: z.ZodOptional<z.ZodObject<{
            strategy: z.ZodOptional<z.ZodObject<{
                rolling: z.ZodOptional<z.ZodObject<{
                    group_by: z.ZodOptional<z.ZodString>;
                    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            plan_configuration: z.ZodOptional<z.ZodObject<{
                timeout: z.ZodOptional<z.ZodNumber>;
                calm_wait_time: z.ZodOptional<z.ZodNumber>;
                move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    instance_down: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>>;
                move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    allocator_down: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>>;
                reallocate_instances: z.ZodOptional<z.ZodBoolean>;
                preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                cluster_reboot: z.ZodOptional<z.ZodEnum<{
                    forced: "forced";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    settings: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type EnterpriseSearchPayload = z.infer<typeof EnterpriseSearchPayload>;
export declare const AppSearchPayload: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    plan: z.ZodObject<{
        cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
            node_type: z.ZodOptional<z.ZodObject<{
                appserver: z.ZodBoolean;
                worker: z.ZodBoolean;
            }, z.core.$strip>>;
            instance_configuration_id: z.ZodOptional<z.ZodString>;
            instance_configuration_version: z.ZodOptional<z.ZodNumber>;
            size: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            zone_count: z.ZodOptional<z.ZodNumber>;
            appsearch: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_url: z.ZodOptional<z.ZodString>;
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_session_key: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        appsearch: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_url: z.ZodOptional<z.ZodString>;
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_session_key: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        transient: z.ZodOptional<z.ZodObject<{
            strategy: z.ZodOptional<z.ZodObject<{
                rolling: z.ZodOptional<z.ZodObject<{
                    group_by: z.ZodOptional<z.ZodString>;
                    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            plan_configuration: z.ZodOptional<z.ZodObject<{
                timeout: z.ZodOptional<z.ZodNumber>;
                calm_wait_time: z.ZodOptional<z.ZodNumber>;
                move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    instance_down: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>>;
                move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    allocator_down: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>>;
                reallocate_instances: z.ZodOptional<z.ZodBoolean>;
                preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                cluster_reboot: z.ZodOptional<z.ZodEnum<{
                    forced: "forced";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    settings: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AppSearchPayload = z.infer<typeof AppSearchPayload>;
export declare const ApmPayload: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    plan: z.ZodObject<{
        cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
            instance_configuration_id: z.ZodOptional<z.ZodString>;
            instance_configuration_version: z.ZodOptional<z.ZodNumber>;
            size: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            zone_count: z.ZodOptional<z.ZodNumber>;
            apm: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_token: z.ZodOptional<z.ZodString>;
                    debug_enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        apm: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
                secret_token: z.ZodOptional<z.ZodString>;
                debug_enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        transient: z.ZodOptional<z.ZodObject<{
            strategy: z.ZodOptional<z.ZodObject<{
                rolling: z.ZodOptional<z.ZodObject<{
                    group_by: z.ZodOptional<z.ZodString>;
                    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            plan_configuration: z.ZodOptional<z.ZodObject<{
                timeout: z.ZodOptional<z.ZodNumber>;
                calm_wait_time: z.ZodOptional<z.ZodNumber>;
                extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                cluster_reboot: z.ZodOptional<z.ZodEnum<{
                    forced: "forced";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    settings: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ApmPayload = z.infer<typeof ApmPayload>;
export declare const KibanaPayload: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    plan: z.ZodObject<{
        cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
            instance_configuration_id: z.ZodOptional<z.ZodString>;
            instance_configuration_version: z.ZodOptional<z.ZodNumber>;
            size: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            zone_count: z.ZodOptional<z.ZodNumber>;
            kibana: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        kibana: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                elasticsearch_username: z.ZodOptional<z.ZodString>;
                elasticsearch_password: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        transient: z.ZodOptional<z.ZodObject<{
            strategy: z.ZodOptional<z.ZodObject<{
                rolling: z.ZodOptional<z.ZodObject<{
                    group_by: z.ZodOptional<z.ZodString>;
                    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            plan_configuration: z.ZodOptional<z.ZodObject<{
                timeout: z.ZodOptional<z.ZodNumber>;
                calm_wait_time: z.ZodOptional<z.ZodNumber>;
                extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                cluster_reboot: z.ZodOptional<z.ZodEnum<{
                    forced: "forced";
                }>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    settings: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type KibanaPayload = z.infer<typeof KibanaPayload>;
export declare const ElasticsearchClusterSettings: z.ZodObject<{
    snapshot: z.ZodOptional<z.ZodObject<{
        interval: z.ZodOptional<z.ZodString>;
        retention: z.ZodOptional<z.ZodObject<{
            snapshots: z.ZodOptional<z.ZodNumber>;
            max_age: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        slm: z.ZodOptional<z.ZodBoolean>;
        cron_expression: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    monitoring: z.ZodOptional<z.ZodObject<{
        target_cluster_id: z.ZodString;
    }, z.core.$strip>>;
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    curation: z.ZodOptional<z.ZodObject<{
        specs: z.ZodArray<z.ZodObject<{
            index_pattern: z.ZodString;
            trigger_interval_seconds: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    dedicated_masters_threshold: z.ZodOptional<z.ZodNumber>;
    traffic_filter: z.ZodOptional<z.ZodObject<{
        rulesets: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    trust: z.ZodOptional<z.ZodObject<{
        accounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            account_id: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            trust_all: z.ZodBoolean;
            trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
        external: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trust_relationship_id: z.ZodString;
            name: z.ZodOptional<z.ZodString>;
            trust_all: z.ZodBoolean;
            trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
        direct: z.ZodOptional<z.ZodArray<z.ZodObject<{
            uid: z.ZodOptional<z.ZodString>;
            name: z.ZodString;
            type: z.ZodOptional<z.ZodEnum<{
                generic: "generic";
                proxy: "proxy";
                ECE: "ECE";
                ESS: "ESS";
            }>>;
            trust_all: z.ZodBoolean;
            trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
            scope_id: z.ZodOptional<z.ZodString>;
            additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
            certificates: z.ZodArray<z.ZodObject<{
                pem: z.ZodString;
                metadata: z.ZodOptional<z.ZodObject<{
                    fingerprint: z.ZodString;
                    valid_to: z.ZodString;
                    valid_from: z.ZodString;
                    also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    keystore_contents: z.ZodOptional<z.ZodObject<{
        secrets: z.ZodRecord<z.ZodString, z.ZodObject<{
            value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            as_file: z.ZodOptional<z.ZodBoolean>;
            is_allowlisted: z.ZodOptional<z.ZodBoolean>;
            is_reloadable: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchClusterSettings = z.infer<typeof ElasticsearchClusterSettings>;
export declare const ElasticsearchClusterTopologyElement: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    node_type: z.ZodOptional<z.ZodObject<{
        master: z.ZodOptional<z.ZodBoolean>;
        data: z.ZodOptional<z.ZodBoolean>;
        ingest: z.ZodOptional<z.ZodBoolean>;
        ml: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    node_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
        master: "master";
        ingest: "ingest";
        ml: "ml";
        transform: "transform";
        data_hot: "data_hot";
        data_content: "data_content";
        data_warm: "data_warm";
        data_cold: "data_cold";
        data_frozen: "data_frozen";
        remote_cluster_client: "remote_cluster_client";
    }>>>;
    zone_count: z.ZodOptional<z.ZodNumber>;
    elasticsearch: z.ZodOptional<z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            scripting: z.ZodOptional<z.ZodObject<{
                painless_enabled: z.ZodOptional<z.ZodBoolean>;
                mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                stored: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                file: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                inline: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
            auto_create_index: z.ZodOptional<z.ZodBoolean>;
            enable_close_index: z.ZodOptional<z.ZodBoolean>;
            destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
            watcher_trigger_engine: z.ZodOptional<z.ZodString>;
            default_shards_per_index: z.ZodOptional<z.ZodNumber>;
            monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
            monitoring_history_duration: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
        user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            elasticsearch_version: z.ZodString;
        }, z.core.$strip>>>;
        user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            elasticsearch_version: z.ZodString;
        }, z.core.$strip>>>;
        curation: z.ZodOptional<z.ZodObject<{
            from_instance_configuration_id: z.ZodString;
            to_instance_configuration_id: z.ZodString;
        }, z.core.$strip>>;
        node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>>;
    instance_configuration_id: z.ZodOptional<z.ZodString>;
    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    autoscaling_min: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    autoscaling_max: z.ZodOptional<z.ZodObject<{
        value: z.ZodNumber;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    autoscaling_policy_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    topology_element_control: z.ZodOptional<z.ZodObject<{
        min: z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    autoscaling_tier_override: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ElasticsearchClusterTopologyElement = z.infer<typeof ElasticsearchClusterTopologyElement>;
export declare const ElasticsearchClusterPlan: z.ZodObject<{
    cluster_topology: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        node_type: z.ZodOptional<z.ZodObject<{
            master: z.ZodOptional<z.ZodBoolean>;
            data: z.ZodOptional<z.ZodBoolean>;
            ingest: z.ZodOptional<z.ZodBoolean>;
            ml: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        node_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            master: "master";
            ingest: "ingest";
            ml: "ml";
            transform: "transform";
            data_hot: "data_hot";
            data_content: "data_content";
            data_warm: "data_warm";
            data_cold: "data_cold";
            data_frozen: "data_frozen";
            remote_cluster_client: "remote_cluster_client";
        }>>>;
        zone_count: z.ZodOptional<z.ZodNumber>;
        elasticsearch: z.ZodOptional<z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                scripting: z.ZodOptional<z.ZodObject<{
                    painless_enabled: z.ZodOptional<z.ZodBoolean>;
                    mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                    expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                    stored: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    file: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    inline: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                auto_create_index: z.ZodOptional<z.ZodBoolean>;
                enable_close_index: z.ZodOptional<z.ZodBoolean>;
                destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                monitoring_history_duration: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
            user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                elasticsearch_version: z.ZodString;
            }, z.core.$strip>>>;
            user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                elasticsearch_version: z.ZodString;
            }, z.core.$strip>>>;
            curation: z.ZodOptional<z.ZodObject<{
                from_instance_configuration_id: z.ZodString;
                to_instance_configuration_id: z.ZodString;
            }, z.core.$strip>>;
            node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>>;
        instance_configuration_id: z.ZodOptional<z.ZodString>;
        instance_configuration_version: z.ZodOptional<z.ZodNumber>;
        size: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        autoscaling_min: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        autoscaling_max: z.ZodOptional<z.ZodObject<{
            value: z.ZodNumber;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        autoscaling_policy_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        topology_element_control: z.ZodOptional<z.ZodObject<{
            min: z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        autoscaling_tier_override: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    elasticsearch: z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        docker_image: z.ZodOptional<z.ZodString>;
        system_settings: z.ZodOptional<z.ZodObject<{
            scripting: z.ZodOptional<z.ZodObject<{
                painless_enabled: z.ZodOptional<z.ZodBoolean>;
                mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                stored: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                file: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                inline: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodBoolean>;
                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
            auto_create_index: z.ZodOptional<z.ZodBoolean>;
            enable_close_index: z.ZodOptional<z.ZodBoolean>;
            destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
            watcher_trigger_engine: z.ZodOptional<z.ZodString>;
            default_shards_per_index: z.ZodOptional<z.ZodNumber>;
            monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
            monitoring_history_duration: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_yaml: z.ZodOptional<z.ZodString>;
        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
        enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
        user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            elasticsearch_version: z.ZodString;
        }, z.core.$strip>>>;
        user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodString;
            elasticsearch_version: z.ZodString;
        }, z.core.$strip>>>;
        curation: z.ZodOptional<z.ZodObject<{
            from_instance_configuration_id: z.ZodString;
            to_instance_configuration_id: z.ZodString;
        }, z.core.$strip>>;
        node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, z.core.$strip>;
    deployment_template: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    transient: z.ZodOptional<z.ZodObject<{
        strategy: z.ZodOptional<z.ZodObject<{
            rolling: z.ZodOptional<z.ZodObject<{
                group_by: z.ZodOptional<z.ZodString>;
                allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        plan_configuration: z.ZodOptional<z.ZodObject<{
            timeout: z.ZodOptional<z.ZodNumber>;
            calm_wait_time: z.ZodOptional<z.ZodNumber>;
            skip_snapshot: z.ZodOptional<z.ZodBoolean>;
            max_snapshot_attempts: z.ZodOptional<z.ZodNumber>;
            max_snapshot_age: z.ZodOptional<z.ZodNumber>;
            extended_maintenance: z.ZodOptional<z.ZodBoolean>;
            cluster_reboot: z.ZodOptional<z.ZodEnum<{
                forced: "forced";
            }>>;
        }, z.core.$strip>>;
        restore_snapshot: z.ZodOptional<z.ZodObject<{
            repository_name: z.ZodOptional<z.ZodString>;
            snapshot_name: z.ZodString;
            repository_config: z.ZodOptional<z.ZodObject<{
                raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            restore_payload: z.ZodOptional<z.ZodObject<{
                indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
                raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            strategy: z.ZodOptional<z.ZodEnum<{
                recovery: "recovery";
                full: "full";
                partial: "partial";
            }>>;
            source_cluster_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        snapshot_dependency: z.ZodOptional<z.ZodObject<{
            source_cluster_id: z.ZodString;
        }, z.core.$strip>>;
        remote_clusters: z.ZodOptional<z.ZodObject<{
            resources: z.ZodArray<z.ZodObject<{
                deployment_id: z.ZodString;
                elasticsearch_ref_id: z.ZodString;
                alias: z.ZodString;
                skip_unavailable: z.ZodOptional<z.ZodBoolean>;
                info: z.ZodOptional<z.ZodObject<{
                    healthy: z.ZodBoolean;
                    connected: z.ZodBoolean;
                    compatible: z.ZodBoolean;
                    trusted: z.ZodBoolean;
                    trusted_back: z.ZodBoolean;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        cluster_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    }, z.core.$strip>>;
    autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ElasticsearchClusterPlan = z.infer<typeof ElasticsearchClusterPlan>;
export declare const ElasticsearchPayload: z.ZodObject<{
    ref_id: z.ZodString;
    display_name: z.ZodOptional<z.ZodString>;
    region: z.ZodString;
    plan: z.ZodObject<{
        cluster_topology: z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            node_type: z.ZodOptional<z.ZodObject<{
                master: z.ZodOptional<z.ZodBoolean>;
                data: z.ZodOptional<z.ZodBoolean>;
                ingest: z.ZodOptional<z.ZodBoolean>;
                ml: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            node_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                master: "master";
                ingest: "ingest";
                ml: "ml";
                transform: "transform";
                data_hot: "data_hot";
                data_content: "data_content";
                data_warm: "data_warm";
                data_cold: "data_cold";
                data_frozen: "data_frozen";
                remote_cluster_client: "remote_cluster_client";
            }>>>;
            zone_count: z.ZodOptional<z.ZodNumber>;
            elasticsearch: z.ZodOptional<z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    scripting: z.ZodOptional<z.ZodObject<{
                        painless_enabled: z.ZodOptional<z.ZodBoolean>;
                        mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                        expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                        stored: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodBoolean>;
                            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        file: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodBoolean>;
                            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        inline: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodBoolean>;
                            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    auto_create_index: z.ZodOptional<z.ZodBoolean>;
                    enable_close_index: z.ZodOptional<z.ZodBoolean>;
                    destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                    watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                    default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                    monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                    monitoring_history_duration: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
                user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    url: z.ZodString;
                    elasticsearch_version: z.ZodString;
                }, z.core.$strip>>>;
                user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    url: z.ZodString;
                    elasticsearch_version: z.ZodString;
                }, z.core.$strip>>>;
                curation: z.ZodOptional<z.ZodObject<{
                    from_instance_configuration_id: z.ZodString;
                    to_instance_configuration_id: z.ZodString;
                }, z.core.$strip>>;
                node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>>;
            instance_configuration_id: z.ZodOptional<z.ZodString>;
            instance_configuration_version: z.ZodOptional<z.ZodNumber>;
            size: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            autoscaling_min: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            autoscaling_max: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            autoscaling_policy_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            topology_element_control: z.ZodOptional<z.ZodObject<{
                min: z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            autoscaling_tier_override: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        elasticsearch: z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            docker_image: z.ZodOptional<z.ZodString>;
            system_settings: z.ZodOptional<z.ZodObject<{
                scripting: z.ZodOptional<z.ZodObject<{
                    painless_enabled: z.ZodOptional<z.ZodBoolean>;
                    mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                    expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                    stored: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    file: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    inline: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodBoolean>;
                        sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                auto_create_index: z.ZodOptional<z.ZodBoolean>;
                enable_close_index: z.ZodOptional<z.ZodBoolean>;
                destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                monitoring_history_duration: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_yaml: z.ZodOptional<z.ZodString>;
            user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
            user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                elasticsearch_version: z.ZodString;
            }, z.core.$strip>>>;
            user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                url: z.ZodString;
                elasticsearch_version: z.ZodString;
            }, z.core.$strip>>>;
            curation: z.ZodOptional<z.ZodObject<{
                from_instance_configuration_id: z.ZodString;
                to_instance_configuration_id: z.ZodString;
            }, z.core.$strip>>;
            node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        }, z.core.$strip>;
        deployment_template: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        transient: z.ZodOptional<z.ZodObject<{
            strategy: z.ZodOptional<z.ZodObject<{
                rolling: z.ZodOptional<z.ZodObject<{
                    group_by: z.ZodOptional<z.ZodString>;
                    allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                    skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                    shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            plan_configuration: z.ZodOptional<z.ZodObject<{
                timeout: z.ZodOptional<z.ZodNumber>;
                calm_wait_time: z.ZodOptional<z.ZodNumber>;
                skip_snapshot: z.ZodOptional<z.ZodBoolean>;
                max_snapshot_attempts: z.ZodOptional<z.ZodNumber>;
                max_snapshot_age: z.ZodOptional<z.ZodNumber>;
                extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                cluster_reboot: z.ZodOptional<z.ZodEnum<{
                    forced: "forced";
                }>>;
            }, z.core.$strip>>;
            restore_snapshot: z.ZodOptional<z.ZodObject<{
                repository_name: z.ZodOptional<z.ZodString>;
                snapshot_name: z.ZodString;
                repository_config: z.ZodOptional<z.ZodObject<{
                    raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                restore_payload: z.ZodOptional<z.ZodObject<{
                    indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                strategy: z.ZodOptional<z.ZodEnum<{
                    recovery: "recovery";
                    full: "full";
                    partial: "partial";
                }>>;
                source_cluster_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            snapshot_dependency: z.ZodOptional<z.ZodObject<{
                source_cluster_id: z.ZodString;
            }, z.core.$strip>>;
            remote_clusters: z.ZodOptional<z.ZodObject<{
                resources: z.ZodArray<z.ZodObject<{
                    deployment_id: z.ZodString;
                    elasticsearch_ref_id: z.ZodString;
                    alias: z.ZodString;
                    skip_unavailable: z.ZodOptional<z.ZodBoolean>;
                    info: z.ZodOptional<z.ZodObject<{
                        healthy: z.ZodBoolean;
                        connected: z.ZodBoolean;
                        compatible: z.ZodBoolean;
                        trusted: z.ZodBoolean;
                        trusted_back: z.ZodBoolean;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            cluster_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        }, z.core.$strip>>;
        autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    settings: z.ZodOptional<z.ZodObject<{
        snapshot: z.ZodOptional<z.ZodObject<{
            interval: z.ZodOptional<z.ZodString>;
            retention: z.ZodOptional<z.ZodObject<{
                snapshots: z.ZodOptional<z.ZodNumber>;
                max_age: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            slm: z.ZodOptional<z.ZodBoolean>;
            cron_expression: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        monitoring: z.ZodOptional<z.ZodObject<{
            target_cluster_id: z.ZodString;
        }, z.core.$strip>>;
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        curation: z.ZodOptional<z.ZodObject<{
            specs: z.ZodArray<z.ZodObject<{
                index_pattern: z.ZodString;
                trigger_interval_seconds: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        dedicated_masters_threshold: z.ZodOptional<z.ZodNumber>;
        traffic_filter: z.ZodOptional<z.ZodObject<{
            rulesets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        trust: z.ZodOptional<z.ZodObject<{
            accounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                account_id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                trust_all: z.ZodBoolean;
                trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
            external: z.ZodOptional<z.ZodArray<z.ZodObject<{
                trust_relationship_id: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
                trust_all: z.ZodBoolean;
                trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>>;
            direct: z.ZodOptional<z.ZodArray<z.ZodObject<{
                uid: z.ZodOptional<z.ZodString>;
                name: z.ZodString;
                type: z.ZodOptional<z.ZodEnum<{
                    generic: "generic";
                    proxy: "proxy";
                    ECE: "ECE";
                    ESS: "ESS";
                }>>;
                trust_all: z.ZodBoolean;
                trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                scope_id: z.ZodOptional<z.ZodString>;
                additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
                certificates: z.ZodArray<z.ZodObject<{
                    pem: z.ZodString;
                    metadata: z.ZodOptional<z.ZodObject<{
                        fingerprint: z.ZodString;
                        valid_to: z.ZodString;
                        valid_from: z.ZodString;
                        also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        keystore_contents: z.ZodOptional<z.ZodObject<{
            secrets: z.ZodRecord<z.ZodString, z.ZodObject<{
                value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                as_file: z.ZodOptional<z.ZodBoolean>;
                is_allowlisted: z.ZodOptional<z.ZodBoolean>;
                is_reloadable: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchPayload = z.infer<typeof ElasticsearchPayload>;
export declare const DeploymentCreateResources: z.ZodObject<{
    elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        plan: z.ZodObject<{
            cluster_topology: z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                node_type: z.ZodOptional<z.ZodObject<{
                    master: z.ZodOptional<z.ZodBoolean>;
                    data: z.ZodOptional<z.ZodBoolean>;
                    ingest: z.ZodOptional<z.ZodBoolean>;
                    ml: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                node_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    master: "master";
                    ingest: "ingest";
                    ml: "ml";
                    transform: "transform";
                    data_hot: "data_hot";
                    data_content: "data_content";
                    data_warm: "data_warm";
                    data_cold: "data_cold";
                    data_frozen: "data_frozen";
                    remote_cluster_client: "remote_cluster_client";
                }>>>;
                zone_count: z.ZodOptional<z.ZodNumber>;
                elasticsearch: z.ZodOptional<z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        scripting: z.ZodOptional<z.ZodObject<{
                            painless_enabled: z.ZodOptional<z.ZodBoolean>;
                            mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                            expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                            stored: z.ZodOptional<z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodBoolean>;
                                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            file: z.ZodOptional<z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodBoolean>;
                                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            inline: z.ZodOptional<z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodBoolean>;
                                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                        reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        auto_create_index: z.ZodOptional<z.ZodBoolean>;
                        enable_close_index: z.ZodOptional<z.ZodBoolean>;
                        destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                        watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                        default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                        monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                        monitoring_history_duration: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        url: z.ZodString;
                        elasticsearch_version: z.ZodString;
                    }, z.core.$strip>>>;
                    user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        url: z.ZodString;
                        elasticsearch_version: z.ZodString;
                    }, z.core.$strip>>>;
                    curation: z.ZodOptional<z.ZodObject<{
                        from_instance_configuration_id: z.ZodString;
                        to_instance_configuration_id: z.ZodString;
                    }, z.core.$strip>>;
                    node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>>;
                instance_configuration_id: z.ZodOptional<z.ZodString>;
                instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                size: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                autoscaling_min: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                autoscaling_max: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                autoscaling_policy_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                topology_element_control: z.ZodOptional<z.ZodObject<{
                    min: z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                autoscaling_tier_override: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
            elasticsearch: z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    scripting: z.ZodOptional<z.ZodObject<{
                        painless_enabled: z.ZodOptional<z.ZodBoolean>;
                        mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                        expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                        stored: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodBoolean>;
                            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        file: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodBoolean>;
                            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        inline: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodBoolean>;
                            sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    auto_create_index: z.ZodOptional<z.ZodBoolean>;
                    enable_close_index: z.ZodOptional<z.ZodBoolean>;
                    destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                    watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                    default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                    monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                    monitoring_history_duration: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
                user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    url: z.ZodString;
                    elasticsearch_version: z.ZodString;
                }, z.core.$strip>>>;
                user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    url: z.ZodString;
                    elasticsearch_version: z.ZodString;
                }, z.core.$strip>>>;
                curation: z.ZodOptional<z.ZodObject<{
                    from_instance_configuration_id: z.ZodString;
                    to_instance_configuration_id: z.ZodString;
                }, z.core.$strip>>;
                node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            }, z.core.$strip>;
            deployment_template: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                version: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            transient: z.ZodOptional<z.ZodObject<{
                strategy: z.ZodOptional<z.ZodObject<{
                    rolling: z.ZodOptional<z.ZodObject<{
                        group_by: z.ZodOptional<z.ZodString>;
                        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                plan_configuration: z.ZodOptional<z.ZodObject<{
                    timeout: z.ZodOptional<z.ZodNumber>;
                    calm_wait_time: z.ZodOptional<z.ZodNumber>;
                    skip_snapshot: z.ZodOptional<z.ZodBoolean>;
                    max_snapshot_attempts: z.ZodOptional<z.ZodNumber>;
                    max_snapshot_age: z.ZodOptional<z.ZodNumber>;
                    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                    cluster_reboot: z.ZodOptional<z.ZodEnum<{
                        forced: "forced";
                    }>>;
                }, z.core.$strip>>;
                restore_snapshot: z.ZodOptional<z.ZodObject<{
                    repository_name: z.ZodOptional<z.ZodString>;
                    snapshot_name: z.ZodString;
                    repository_config: z.ZodOptional<z.ZodObject<{
                        raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    restore_payload: z.ZodOptional<z.ZodObject<{
                        indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    strategy: z.ZodOptional<z.ZodEnum<{
                        recovery: "recovery";
                        full: "full";
                        partial: "partial";
                    }>>;
                    source_cluster_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                snapshot_dependency: z.ZodOptional<z.ZodObject<{
                    source_cluster_id: z.ZodString;
                }, z.core.$strip>>;
                remote_clusters: z.ZodOptional<z.ZodObject<{
                    resources: z.ZodArray<z.ZodObject<{
                        deployment_id: z.ZodString;
                        elasticsearch_ref_id: z.ZodString;
                        alias: z.ZodString;
                        skip_unavailable: z.ZodOptional<z.ZodBoolean>;
                        info: z.ZodOptional<z.ZodObject<{
                            healthy: z.ZodBoolean;
                            connected: z.ZodBoolean;
                            compatible: z.ZodBoolean;
                            trusted: z.ZodBoolean;
                            trusted_back: z.ZodBoolean;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                cluster_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>;
            autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
        settings: z.ZodOptional<z.ZodObject<{
            snapshot: z.ZodOptional<z.ZodObject<{
                interval: z.ZodOptional<z.ZodString>;
                retention: z.ZodOptional<z.ZodObject<{
                    snapshots: z.ZodOptional<z.ZodNumber>;
                    max_age: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                slm: z.ZodOptional<z.ZodBoolean>;
                cron_expression: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            monitoring: z.ZodOptional<z.ZodObject<{
                target_cluster_id: z.ZodString;
            }, z.core.$strip>>;
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            curation: z.ZodOptional<z.ZodObject<{
                specs: z.ZodArray<z.ZodObject<{
                    index_pattern: z.ZodString;
                    trigger_interval_seconds: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            dedicated_masters_threshold: z.ZodOptional<z.ZodNumber>;
            traffic_filter: z.ZodOptional<z.ZodObject<{
                rulesets: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            trust: z.ZodOptional<z.ZodObject<{
                accounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    account_id: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                    trust_all: z.ZodBoolean;
                    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>>;
                external: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    trust_relationship_id: z.ZodString;
                    name: z.ZodOptional<z.ZodString>;
                    trust_all: z.ZodBoolean;
                    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>>;
                direct: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    uid: z.ZodOptional<z.ZodString>;
                    name: z.ZodString;
                    type: z.ZodOptional<z.ZodEnum<{
                        generic: "generic";
                        proxy: "proxy";
                        ECE: "ECE";
                        ESS: "ESS";
                    }>>;
                    trust_all: z.ZodBoolean;
                    trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    scope_id: z.ZodOptional<z.ZodString>;
                    additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    certificates: z.ZodArray<z.ZodObject<{
                        pem: z.ZodString;
                        metadata: z.ZodOptional<z.ZodObject<{
                            fingerprint: z.ZodString;
                            valid_to: z.ZodString;
                            valid_from: z.ZodString;
                            also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            keystore_contents: z.ZodOptional<z.ZodObject<{
                secrets: z.ZodRecord<z.ZodString, z.ZodObject<{
                    value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    as_file: z.ZodOptional<z.ZodBoolean>;
                    is_allowlisted: z.ZodOptional<z.ZodBoolean>;
                    is_reloadable: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        plan: z.ZodObject<{
            cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                instance_configuration_id: z.ZodOptional<z.ZodString>;
                instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                size: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                zone_count: z.ZodOptional<z.ZodNumber>;
                kibana: z.ZodOptional<z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            kibana: z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            transient: z.ZodOptional<z.ZodObject<{
                strategy: z.ZodOptional<z.ZodObject<{
                    rolling: z.ZodOptional<z.ZodObject<{
                        group_by: z.ZodOptional<z.ZodString>;
                        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                plan_configuration: z.ZodOptional<z.ZodObject<{
                    timeout: z.ZodOptional<z.ZodNumber>;
                    calm_wait_time: z.ZodOptional<z.ZodNumber>;
                    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                    cluster_reboot: z.ZodOptional<z.ZodEnum<{
                        forced: "forced";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        settings: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        plan: z.ZodObject<{
            cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                instance_configuration_id: z.ZodOptional<z.ZodString>;
                instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                size: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                zone_count: z.ZodOptional<z.ZodNumber>;
                apm: z.ZodOptional<z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_token: z.ZodOptional<z.ZodString>;
                        debug_enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            apm: z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_token: z.ZodOptional<z.ZodString>;
                    debug_enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            transient: z.ZodOptional<z.ZodObject<{
                strategy: z.ZodOptional<z.ZodObject<{
                    rolling: z.ZodOptional<z.ZodObject<{
                        group_by: z.ZodOptional<z.ZodString>;
                        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                plan_configuration: z.ZodOptional<z.ZodObject<{
                    timeout: z.ZodOptional<z.ZodNumber>;
                    calm_wait_time: z.ZodOptional<z.ZodNumber>;
                    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                    cluster_reboot: z.ZodOptional<z.ZodEnum<{
                        forced: "forced";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        settings: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        plan: z.ZodObject<{
            cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                node_type: z.ZodOptional<z.ZodObject<{
                    appserver: z.ZodBoolean;
                    worker: z.ZodBoolean;
                }, z.core.$strip>>;
                instance_configuration_id: z.ZodOptional<z.ZodString>;
                instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                size: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                zone_count: z.ZodOptional<z.ZodNumber>;
                appsearch: z.ZodOptional<z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_url: z.ZodOptional<z.ZodString>;
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_session_key: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            appsearch: z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_url: z.ZodOptional<z.ZodString>;
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_session_key: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            transient: z.ZodOptional<z.ZodObject<{
                strategy: z.ZodOptional<z.ZodObject<{
                    rolling: z.ZodOptional<z.ZodObject<{
                        group_by: z.ZodOptional<z.ZodString>;
                        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                plan_configuration: z.ZodOptional<z.ZodObject<{
                    timeout: z.ZodOptional<z.ZodNumber>;
                    calm_wait_time: z.ZodOptional<z.ZodNumber>;
                    move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        instance_down: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>>;
                    move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        allocator_down: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>>;
                    reallocate_instances: z.ZodOptional<z.ZodBoolean>;
                    preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                    cluster_reboot: z.ZodOptional<z.ZodEnum<{
                        forced: "forced";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        settings: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        plan: z.ZodObject<{
            cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                node_type: z.ZodOptional<z.ZodObject<{
                    appserver: z.ZodBoolean;
                    worker: z.ZodBoolean;
                    connector: z.ZodBoolean;
                }, z.core.$strip>>;
                instance_configuration_id: z.ZodOptional<z.ZodString>;
                instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                size: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                zone_count: z.ZodOptional<z.ZodNumber>;
                enterprise_search: z.ZodOptional<z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_session_key: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                allocator_filter: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                node_configuration: z.ZodOptional<z.ZodString>;
                memory_per_node: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                node_count_per_zone: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            }, z.core.$strip>>>;
            enterprise_search: z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_session_key: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            transient: z.ZodOptional<z.ZodObject<{
                strategy: z.ZodOptional<z.ZodObject<{
                    rolling: z.ZodOptional<z.ZodObject<{
                        group_by: z.ZodOptional<z.ZodString>;
                        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                plan_configuration: z.ZodOptional<z.ZodObject<{
                    timeout: z.ZodOptional<z.ZodNumber>;
                    calm_wait_time: z.ZodOptional<z.ZodNumber>;
                    move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        instance_down: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>>;
                    move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        from: z.ZodString;
                        to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        allocator_down: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>>;
                    reallocate_instances: z.ZodOptional<z.ZodBoolean>;
                    preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                    cluster_reboot: z.ZodOptional<z.ZodEnum<{
                        forced: "forced";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        settings: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
    integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
        ref_id: z.ZodString;
        elasticsearch_cluster_ref_id: z.ZodString;
        display_name: z.ZodOptional<z.ZodString>;
        region: z.ZodString;
        plan: z.ZodObject<{
            cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                instance_configuration_id: z.ZodOptional<z.ZodString>;
                instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                size: z.ZodOptional<z.ZodObject<{
                    value: z.ZodNumber;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                zone_count: z.ZodOptional<z.ZodNumber>;
                integrations_server: z.ZodOptional<z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_token: z.ZodOptional<z.ZodString>;
                        debug_enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    mode: z.ZodOptional<z.ZodEnum<{
                        standalone: "standalone";
                        managed: "managed";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>>;
            integrations_server: z.ZodObject<{
                version: z.ZodOptional<z.ZodString>;
                docker_image: z.ZodOptional<z.ZodString>;
                system_settings: z.ZodOptional<z.ZodObject<{
                    elasticsearch_username: z.ZodOptional<z.ZodString>;
                    elasticsearch_password: z.ZodOptional<z.ZodString>;
                    secret_token: z.ZodOptional<z.ZodString>;
                    debug_enabled: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_yaml: z.ZodOptional<z.ZodString>;
                user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                mode: z.ZodOptional<z.ZodEnum<{
                    standalone: "standalone";
                    managed: "managed";
                }>>;
            }, z.core.$strip>;
            transient: z.ZodOptional<z.ZodObject<{
                strategy: z.ZodOptional<z.ZodObject<{
                    rolling: z.ZodOptional<z.ZodObject<{
                        group_by: z.ZodOptional<z.ZodString>;
                        allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                        skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                        shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                    }, z.core.$strip>>;
                    grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                plan_configuration: z.ZodOptional<z.ZodObject<{
                    timeout: z.ZodOptional<z.ZodNumber>;
                    calm_wait_time: z.ZodOptional<z.ZodNumber>;
                    extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                    cluster_reboot: z.ZodOptional<z.ZodEnum<{
                        forced: "forced";
                    }>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        settings: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type DeploymentCreateResources = z.infer<typeof DeploymentCreateResources>;
export declare const DeploymentCreateRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    resources: z.ZodOptional<z.ZodObject<{
        elasticsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
            plan: z.ZodObject<{
                cluster_topology: z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    node_type: z.ZodOptional<z.ZodObject<{
                        master: z.ZodOptional<z.ZodBoolean>;
                        data: z.ZodOptional<z.ZodBoolean>;
                        ingest: z.ZodOptional<z.ZodBoolean>;
                        ml: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    node_roles: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                        master: "master";
                        ingest: "ingest";
                        ml: "ml";
                        transform: "transform";
                        data_hot: "data_hot";
                        data_content: "data_content";
                        data_warm: "data_warm";
                        data_cold: "data_cold";
                        data_frozen: "data_frozen";
                        remote_cluster_client: "remote_cluster_client";
                    }>>>;
                    zone_count: z.ZodOptional<z.ZodNumber>;
                    elasticsearch: z.ZodOptional<z.ZodObject<{
                        version: z.ZodOptional<z.ZodString>;
                        docker_image: z.ZodOptional<z.ZodString>;
                        system_settings: z.ZodOptional<z.ZodObject<{
                            scripting: z.ZodOptional<z.ZodObject<{
                                painless_enabled: z.ZodOptional<z.ZodBoolean>;
                                mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                                expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                                stored: z.ZodOptional<z.ZodObject<{
                                    enabled: z.ZodOptional<z.ZodBoolean>;
                                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                                }, z.core.$strip>>;
                                file: z.ZodOptional<z.ZodObject<{
                                    enabled: z.ZodOptional<z.ZodBoolean>;
                                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                                }, z.core.$strip>>;
                                inline: z.ZodOptional<z.ZodObject<{
                                    enabled: z.ZodOptional<z.ZodBoolean>;
                                    sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                                }, z.core.$strip>>;
                            }, z.core.$strip>>;
                            reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            auto_create_index: z.ZodOptional<z.ZodBoolean>;
                            enable_close_index: z.ZodOptional<z.ZodBoolean>;
                            destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                            watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                            default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                            monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                            monitoring_history_duration: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_yaml: z.ZodOptional<z.ZodString>;
                        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                        enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodString;
                            url: z.ZodString;
                            elasticsearch_version: z.ZodString;
                        }, z.core.$strip>>>;
                        user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodString;
                            url: z.ZodString;
                            elasticsearch_version: z.ZodString;
                        }, z.core.$strip>>>;
                        curation: z.ZodOptional<z.ZodObject<{
                            from_instance_configuration_id: z.ZodString;
                            to_instance_configuration_id: z.ZodString;
                        }, z.core.$strip>>;
                        node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                    }, z.core.$strip>>;
                    instance_configuration_id: z.ZodOptional<z.ZodString>;
                    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                    size: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    autoscaling_min: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    autoscaling_max: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    autoscaling_policy_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    topology_element_control: z.ZodOptional<z.ZodObject<{
                        min: z.ZodObject<{
                            value: z.ZodNumber;
                            resource: z.ZodEnum<{
                                memory: "memory";
                                storage: "storage";
                            }>;
                        }, z.core.$strip>;
                    }, z.core.$strip>>;
                    autoscaling_tier_override: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
                elasticsearch: z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        scripting: z.ZodOptional<z.ZodObject<{
                            painless_enabled: z.ZodOptional<z.ZodBoolean>;
                            mustache_enabled: z.ZodOptional<z.ZodBoolean>;
                            expressions_enabled: z.ZodOptional<z.ZodBoolean>;
                            stored: z.ZodOptional<z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodBoolean>;
                                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            file: z.ZodOptional<z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodBoolean>;
                                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                            inline: z.ZodOptional<z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodBoolean>;
                                sandbox_mode: z.ZodOptional<z.ZodBoolean>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                        reindex_whitelist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        auto_create_index: z.ZodOptional<z.ZodBoolean>;
                        enable_close_index: z.ZodOptional<z.ZodBoolean>;
                        destructive_requires_name: z.ZodOptional<z.ZodBoolean>;
                        watcher_trigger_engine: z.ZodOptional<z.ZodString>;
                        default_shards_per_index: z.ZodOptional<z.ZodNumber>;
                        monitoring_collection_interval: z.ZodOptional<z.ZodNumber>;
                        monitoring_history_duration: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    enabled_built_in_plugins: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    user_plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        url: z.ZodString;
                        elasticsearch_version: z.ZodString;
                    }, z.core.$strip>>>;
                    user_bundles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        url: z.ZodString;
                        elasticsearch_version: z.ZodString;
                    }, z.core.$strip>>>;
                    curation: z.ZodOptional<z.ZodObject<{
                        from_instance_configuration_id: z.ZodString;
                        to_instance_configuration_id: z.ZodString;
                    }, z.core.$strip>>;
                    node_attributes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
                }, z.core.$strip>;
                deployment_template: z.ZodOptional<z.ZodObject<{
                    id: z.ZodString;
                    version: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                transient: z.ZodOptional<z.ZodObject<{
                    strategy: z.ZodOptional<z.ZodObject<{
                        rolling: z.ZodOptional<z.ZodObject<{
                            group_by: z.ZodOptional<z.ZodString>;
                            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>;
                        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    plan_configuration: z.ZodOptional<z.ZodObject<{
                        timeout: z.ZodOptional<z.ZodNumber>;
                        calm_wait_time: z.ZodOptional<z.ZodNumber>;
                        skip_snapshot: z.ZodOptional<z.ZodBoolean>;
                        max_snapshot_attempts: z.ZodOptional<z.ZodNumber>;
                        max_snapshot_age: z.ZodOptional<z.ZodNumber>;
                        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                        cluster_reboot: z.ZodOptional<z.ZodEnum<{
                            forced: "forced";
                        }>>;
                    }, z.core.$strip>>;
                    restore_snapshot: z.ZodOptional<z.ZodObject<{
                        repository_name: z.ZodOptional<z.ZodString>;
                        snapshot_name: z.ZodString;
                        repository_config: z.ZodOptional<z.ZodObject<{
                            raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        }, z.core.$strip>>;
                        restore_payload: z.ZodOptional<z.ZodObject<{
                            indices: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            raw_settings: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        }, z.core.$strip>>;
                        strategy: z.ZodOptional<z.ZodEnum<{
                            recovery: "recovery";
                            full: "full";
                            partial: "partial";
                        }>>;
                        source_cluster_id: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    snapshot_dependency: z.ZodOptional<z.ZodObject<{
                        source_cluster_id: z.ZodString;
                    }, z.core.$strip>>;
                    remote_clusters: z.ZodOptional<z.ZodObject<{
                        resources: z.ZodArray<z.ZodObject<{
                            deployment_id: z.ZodString;
                            elasticsearch_ref_id: z.ZodString;
                            alias: z.ZodString;
                            skip_unavailable: z.ZodOptional<z.ZodBoolean>;
                            info: z.ZodOptional<z.ZodObject<{
                                healthy: z.ZodBoolean;
                                connected: z.ZodBoolean;
                                compatible: z.ZodBoolean;
                                trusted: z.ZodBoolean;
                                trusted_back: z.ZodBoolean;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    cluster_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>;
                autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
            settings: z.ZodOptional<z.ZodObject<{
                snapshot: z.ZodOptional<z.ZodObject<{
                    interval: z.ZodOptional<z.ZodString>;
                    retention: z.ZodOptional<z.ZodObject<{
                        snapshots: z.ZodOptional<z.ZodNumber>;
                        max_age: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    slm: z.ZodOptional<z.ZodBoolean>;
                    cron_expression: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                monitoring: z.ZodOptional<z.ZodObject<{
                    target_cluster_id: z.ZodString;
                }, z.core.$strip>>;
                metadata: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                curation: z.ZodOptional<z.ZodObject<{
                    specs: z.ZodArray<z.ZodObject<{
                        index_pattern: z.ZodString;
                        trigger_interval_seconds: z.ZodNumber;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                dedicated_masters_threshold: z.ZodOptional<z.ZodNumber>;
                traffic_filter: z.ZodOptional<z.ZodObject<{
                    rulesets: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                trust: z.ZodOptional<z.ZodObject<{
                    accounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        account_id: z.ZodString;
                        name: z.ZodOptional<z.ZodString>;
                        trust_all: z.ZodBoolean;
                        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    }, z.core.$strip>>>;
                    external: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        trust_relationship_id: z.ZodString;
                        name: z.ZodOptional<z.ZodString>;
                        trust_all: z.ZodBoolean;
                        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    }, z.core.$strip>>>;
                    direct: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        uid: z.ZodOptional<z.ZodString>;
                        name: z.ZodString;
                        type: z.ZodOptional<z.ZodEnum<{
                            generic: "generic";
                            proxy: "proxy";
                            ECE: "ECE";
                            ESS: "ESS";
                        }>>;
                        trust_all: z.ZodBoolean;
                        trust_allowlist: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        scope_id: z.ZodOptional<z.ZodString>;
                        additional_node_names: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        certificates: z.ZodArray<z.ZodObject<{
                            pem: z.ZodString;
                            metadata: z.ZodOptional<z.ZodObject<{
                                fingerprint: z.ZodString;
                                valid_to: z.ZodString;
                                valid_from: z.ZodString;
                                also_trusted_by: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            }, z.core.$strip>>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
                keystore_contents: z.ZodOptional<z.ZodObject<{
                    secrets: z.ZodRecord<z.ZodString, z.ZodObject<{
                        value: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        as_file: z.ZodOptional<z.ZodBoolean>;
                        is_allowlisted: z.ZodOptional<z.ZodBoolean>;
                        is_reloadable: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        kibana: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
            plan: z.ZodObject<{
                cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    instance_configuration_id: z.ZodOptional<z.ZodString>;
                    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                    size: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    zone_count: z.ZodOptional<z.ZodNumber>;
                    kibana: z.ZodOptional<z.ZodObject<{
                        version: z.ZodOptional<z.ZodString>;
                        docker_image: z.ZodOptional<z.ZodString>;
                        system_settings: z.ZodOptional<z.ZodObject<{
                            elasticsearch_username: z.ZodOptional<z.ZodString>;
                            elasticsearch_password: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_yaml: z.ZodOptional<z.ZodString>;
                        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>>;
                kibana: z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                transient: z.ZodOptional<z.ZodObject<{
                    strategy: z.ZodOptional<z.ZodObject<{
                        rolling: z.ZodOptional<z.ZodObject<{
                            group_by: z.ZodOptional<z.ZodString>;
                            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>;
                        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    plan_configuration: z.ZodOptional<z.ZodObject<{
                        timeout: z.ZodOptional<z.ZodNumber>;
                        calm_wait_time: z.ZodOptional<z.ZodNumber>;
                        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                        cluster_reboot: z.ZodOptional<z.ZodEnum<{
                            forced: "forced";
                        }>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            settings: z.ZodOptional<z.ZodObject<{
                metadata: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        apm: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
            plan: z.ZodObject<{
                cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    instance_configuration_id: z.ZodOptional<z.ZodString>;
                    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                    size: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    zone_count: z.ZodOptional<z.ZodNumber>;
                    apm: z.ZodOptional<z.ZodObject<{
                        version: z.ZodOptional<z.ZodString>;
                        docker_image: z.ZodOptional<z.ZodString>;
                        system_settings: z.ZodOptional<z.ZodObject<{
                            elasticsearch_username: z.ZodOptional<z.ZodString>;
                            elasticsearch_password: z.ZodOptional<z.ZodString>;
                            secret_token: z.ZodOptional<z.ZodString>;
                            debug_enabled: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_yaml: z.ZodOptional<z.ZodString>;
                        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>>;
                apm: z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_token: z.ZodOptional<z.ZodString>;
                        debug_enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                transient: z.ZodOptional<z.ZodObject<{
                    strategy: z.ZodOptional<z.ZodObject<{
                        rolling: z.ZodOptional<z.ZodObject<{
                            group_by: z.ZodOptional<z.ZodString>;
                            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>;
                        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    plan_configuration: z.ZodOptional<z.ZodObject<{
                        timeout: z.ZodOptional<z.ZodNumber>;
                        calm_wait_time: z.ZodOptional<z.ZodNumber>;
                        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                        cluster_reboot: z.ZodOptional<z.ZodEnum<{
                            forced: "forced";
                        }>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            settings: z.ZodOptional<z.ZodObject<{
                metadata: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        appsearch: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
            plan: z.ZodObject<{
                cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    node_type: z.ZodOptional<z.ZodObject<{
                        appserver: z.ZodBoolean;
                        worker: z.ZodBoolean;
                    }, z.core.$strip>>;
                    instance_configuration_id: z.ZodOptional<z.ZodString>;
                    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                    size: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    zone_count: z.ZodOptional<z.ZodNumber>;
                    appsearch: z.ZodOptional<z.ZodObject<{
                        version: z.ZodOptional<z.ZodString>;
                        docker_image: z.ZodOptional<z.ZodString>;
                        system_settings: z.ZodOptional<z.ZodObject<{
                            elasticsearch_url: z.ZodOptional<z.ZodString>;
                            elasticsearch_username: z.ZodOptional<z.ZodString>;
                            elasticsearch_password: z.ZodOptional<z.ZodString>;
                            secret_session_key: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_yaml: z.ZodOptional<z.ZodString>;
                        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>>;
                appsearch: z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_url: z.ZodOptional<z.ZodString>;
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_session_key: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                transient: z.ZodOptional<z.ZodObject<{
                    strategy: z.ZodOptional<z.ZodObject<{
                        rolling: z.ZodOptional<z.ZodObject<{
                            group_by: z.ZodOptional<z.ZodString>;
                            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>;
                        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    plan_configuration: z.ZodOptional<z.ZodObject<{
                        timeout: z.ZodOptional<z.ZodNumber>;
                        calm_wait_time: z.ZodOptional<z.ZodNumber>;
                        move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            from: z.ZodString;
                            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            instance_down: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>>;
                        move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            from: z.ZodString;
                            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            allocator_down: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>>;
                        reallocate_instances: z.ZodOptional<z.ZodBoolean>;
                        preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                        cluster_reboot: z.ZodOptional<z.ZodEnum<{
                            forced: "forced";
                        }>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            settings: z.ZodOptional<z.ZodObject<{
                metadata: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        enterprise_search: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
            plan: z.ZodObject<{
                cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    node_type: z.ZodOptional<z.ZodObject<{
                        appserver: z.ZodBoolean;
                        worker: z.ZodBoolean;
                        connector: z.ZodBoolean;
                    }, z.core.$strip>>;
                    instance_configuration_id: z.ZodOptional<z.ZodString>;
                    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                    size: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    zone_count: z.ZodOptional<z.ZodNumber>;
                    enterprise_search: z.ZodOptional<z.ZodObject<{
                        version: z.ZodOptional<z.ZodString>;
                        docker_image: z.ZodOptional<z.ZodString>;
                        system_settings: z.ZodOptional<z.ZodObject<{
                            elasticsearch_username: z.ZodOptional<z.ZodString>;
                            elasticsearch_password: z.ZodOptional<z.ZodString>;
                            secret_session_key: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_yaml: z.ZodOptional<z.ZodString>;
                        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    allocator_filter: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    node_configuration: z.ZodOptional<z.ZodString>;
                    memory_per_node: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    node_count_per_zone: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                }, z.core.$strip>>>;
                enterprise_search: z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_session_key: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>;
                transient: z.ZodOptional<z.ZodObject<{
                    strategy: z.ZodOptional<z.ZodObject<{
                        rolling: z.ZodOptional<z.ZodObject<{
                            group_by: z.ZodOptional<z.ZodString>;
                            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>;
                        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    plan_configuration: z.ZodOptional<z.ZodObject<{
                        timeout: z.ZodOptional<z.ZodNumber>;
                        calm_wait_time: z.ZodOptional<z.ZodNumber>;
                        move_instances: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            from: z.ZodString;
                            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            instance_down: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>>;
                        move_allocators: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            from: z.ZodString;
                            to: z.ZodOptional<z.ZodArray<z.ZodString>>;
                            allocator_down: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>>;
                        reallocate_instances: z.ZodOptional<z.ZodBoolean>;
                        preferred_allocators: z.ZodOptional<z.ZodArray<z.ZodString>>;
                        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                        cluster_reboot: z.ZodOptional<z.ZodEnum<{
                            forced: "forced";
                        }>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            settings: z.ZodOptional<z.ZodObject<{
                metadata: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
        integrations_server: z.ZodOptional<z.ZodArray<z.ZodObject<{
            ref_id: z.ZodString;
            elasticsearch_cluster_ref_id: z.ZodString;
            display_name: z.ZodOptional<z.ZodString>;
            region: z.ZodString;
            plan: z.ZodObject<{
                cluster_topology: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    instance_configuration_id: z.ZodOptional<z.ZodString>;
                    instance_configuration_version: z.ZodOptional<z.ZodNumber>;
                    size: z.ZodOptional<z.ZodObject<{
                        value: z.ZodNumber;
                        resource: z.ZodEnum<{
                            memory: "memory";
                            storage: "storage";
                        }>;
                    }, z.core.$strip>>;
                    zone_count: z.ZodOptional<z.ZodNumber>;
                    integrations_server: z.ZodOptional<z.ZodObject<{
                        version: z.ZodOptional<z.ZodString>;
                        docker_image: z.ZodOptional<z.ZodString>;
                        system_settings: z.ZodOptional<z.ZodObject<{
                            elasticsearch_username: z.ZodOptional<z.ZodString>;
                            elasticsearch_password: z.ZodOptional<z.ZodString>;
                            secret_token: z.ZodOptional<z.ZodString>;
                            debug_enabled: z.ZodOptional<z.ZodBoolean>;
                        }, z.core.$strip>>;
                        user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_yaml: z.ZodOptional<z.ZodString>;
                        user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                        mode: z.ZodOptional<z.ZodEnum<{
                            standalone: "standalone";
                            managed: "managed";
                        }>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>>;
                integrations_server: z.ZodObject<{
                    version: z.ZodOptional<z.ZodString>;
                    docker_image: z.ZodOptional<z.ZodString>;
                    system_settings: z.ZodOptional<z.ZodObject<{
                        elasticsearch_username: z.ZodOptional<z.ZodString>;
                        elasticsearch_password: z.ZodOptional<z.ZodString>;
                        secret_token: z.ZodOptional<z.ZodString>;
                        debug_enabled: z.ZodOptional<z.ZodBoolean>;
                    }, z.core.$strip>>;
                    user_settings_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_yaml: z.ZodOptional<z.ZodString>;
                    user_settings_override_json: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    user_settings_override_yaml: z.ZodOptional<z.ZodString>;
                    mode: z.ZodOptional<z.ZodEnum<{
                        standalone: "standalone";
                        managed: "managed";
                    }>>;
                }, z.core.$strip>;
                transient: z.ZodOptional<z.ZodObject<{
                    strategy: z.ZodOptional<z.ZodObject<{
                        rolling: z.ZodOptional<z.ZodObject<{
                            group_by: z.ZodOptional<z.ZodString>;
                            allow_inline_resize: z.ZodOptional<z.ZodBoolean>;
                            skip_synced_flush: z.ZodOptional<z.ZodBoolean>;
                            shard_init_wait_time: z.ZodOptional<z.ZodNumber>;
                        }, z.core.$strip>>;
                        grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        rolling_grow_and_shrink: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                        autodetect: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
                    }, z.core.$strip>>;
                    plan_configuration: z.ZodOptional<z.ZodObject<{
                        timeout: z.ZodOptional<z.ZodNumber>;
                        calm_wait_time: z.ZodOptional<z.ZodNumber>;
                        extended_maintenance: z.ZodOptional<z.ZodBoolean>;
                        cluster_reboot: z.ZodOptional<z.ZodEnum<{
                            forced: "forced";
                        }>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            settings: z.ZodOptional<z.ZodObject<{
                metadata: z.ZodOptional<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>>;
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
        byok: z.ZodOptional<z.ZodObject<{
            key_resource_path: z.ZodString;
        }, z.core.$strip>>;
        autoscaling_enabled: z.ZodOptional<z.ZodBoolean>;
        solution_type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    metadata: z.ZodOptional<z.ZodObject<{
        tags: z.ZodOptional<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    alias: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DeploymentCreateRequest = z.infer<typeof DeploymentCreateRequest>;
//# sourceMappingURL=create_deployment.d.ts.map