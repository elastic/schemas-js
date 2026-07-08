import { z } from 'zod';
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
export declare const TrafficFilterSettings: z.ZodObject<{
    rulesets: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type TrafficFilterSettings = z.infer<typeof TrafficFilterSettings>;
export declare const ClusterCurationSpec: z.ZodObject<{
    index_pattern: z.ZodString;
    trigger_interval_seconds: z.ZodNumber;
}, z.core.$strip>;
export type ClusterCurationSpec = z.infer<typeof ClusterCurationSpec>;
export declare const ClusterMetadataSettings: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterMetadataSettings = z.infer<typeof ClusterMetadataSettings>;
export declare const ManagedMonitoringSettings: z.ZodObject<{
    target_cluster_id: z.ZodString;
}, z.core.$strip>;
export type ManagedMonitoringSettings = z.infer<typeof ManagedMonitoringSettings>;
export declare const ClusterSnapshotRetention: z.ZodObject<{
    snapshots: z.ZodOptional<z.ZodNumber>;
    max_age: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterSnapshotRetention = z.infer<typeof ClusterSnapshotRetention>;
export declare const Hyperlink: z.ZodObject<{
    need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type Hyperlink = z.infer<typeof Hyperlink>;
export declare const ExternalHyperlink: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodString;
    uri: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ExternalHyperlink = z.infer<typeof ExternalHyperlink>;
export declare const SnapshotStatusInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    count: z.ZodNumber;
    latest_successful: z.ZodOptional<z.ZodBoolean>;
    latest_status: z.ZodOptional<z.ZodString>;
    scheduled_time: z.ZodOptional<z.ZodString>;
    latest_end_time: z.ZodOptional<z.ZodString>;
    latest_successful_end_time: z.ZodOptional<z.ZodString>;
    recent_success: z.ZodBoolean;
}, z.core.$strip>;
export type SnapshotStatusInfo = z.infer<typeof SnapshotStatusInfo>;
export declare const ElasticsearchMonitoringInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    last_modified: z.ZodString;
    last_update_status: z.ZodString;
    source_cluster_ids: z.ZodArray<z.ZodString>;
    destination_cluster_ids: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchMonitoringInfo = z.infer<typeof ElasticsearchMonitoringInfo>;
export declare const ElasticsearchClusterRole: z.ZodObject<{
    username: z.ZodString;
    roles: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchClusterRole = z.infer<typeof ElasticsearchClusterRole>;
export declare const ElasticsearchClusterUser: z.ZodObject<{
    username: z.ZodString;
    password_hash: z.ZodString;
}, z.core.$strip>;
export type ElasticsearchClusterUser = z.infer<typeof ElasticsearchClusterUser>;
export declare const ClusterSystemAlert: z.ZodObject<{
    timestamp: z.ZodString;
    instance_name: z.ZodString;
    alert_type: z.ZodEnum<{
        automatic_restart: "automatic_restart";
        heap_dump: "heap_dump";
        unknown_event: "unknown_event";
    }>;
    url: z.ZodOptional<z.ZodString>;
    exit_code: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterSystemAlert = z.infer<typeof ClusterSystemAlert>;
export declare const InstanceOverrides: z.ZodObject<{
    capacity: z.ZodOptional<z.ZodNumber>;
    storage_multiplier: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type InstanceOverrides = z.infer<typeof InstanceOverrides>;
export declare const ClusterInstanceDiskInfo: z.ZodObject<{
    disk_space_available: z.ZodOptional<z.ZodNumber>;
    disk_space_used: z.ZodNumber;
    storage_multiplier: z.ZodNumber;
}, z.core.$strip>;
export type ClusterInstanceDiskInfo = z.infer<typeof ClusterInstanceDiskInfo>;
export declare const ClusterInstanceMemoryInfo: z.ZodObject<{
    instance_capacity: z.ZodNumber;
    instance_capacity_planned: z.ZodOptional<z.ZodNumber>;
    memory_pressure: z.ZodOptional<z.ZodNumber>;
    native_memory_pressure: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type ClusterInstanceMemoryInfo = z.infer<typeof ClusterInstanceMemoryInfo>;
export declare const ClusterInstanceConfigurationInfo: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    config_version: z.ZodOptional<z.ZodNumber>;
    resource: z.ZodEnum<{
        memory: "memory";
        storage: "storage";
    }>;
}, z.core.$strip>;
export type ClusterInstanceConfigurationInfo = z.infer<typeof ClusterInstanceConfigurationInfo>;
export declare const ServiceUrl: z.ZodObject<{
    service: z.ZodString;
    url: z.ZodString;
}, z.core.$strip>;
export type ServiceUrl = z.infer<typeof ServiceUrl>;
export declare const ClusterMetadataPortInfo: z.ZodObject<{
    http: z.ZodNumber;
    https: z.ZodNumber;
    transport_passthrough: z.ZodNumber;
}, z.core.$strip>;
export type ClusterMetadataPortInfo = z.infer<typeof ClusterMetadataPortInfo>;
export declare const ElasticsearchBlockingIssueElement: z.ZodObject<{
    description: z.ZodString;
    level: z.ZodEnum<{
        index: "index";
        global: "global";
    }>;
}, z.core.$strip>;
export type ElasticsearchBlockingIssueElement = z.infer<typeof ElasticsearchBlockingIssueElement>;
export declare const ElasticsearchClusterBlockingIssueElement: z.ZodObject<{
    description: z.ZodString;
    instances: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchClusterBlockingIssueElement = z.infer<typeof ElasticsearchClusterBlockingIssueElement>;
export declare const ElasticsearchMasterElement: z.ZodObject<{
    master_node_id: z.ZodString;
    master_instance_name: z.ZodOptional<z.ZodString>;
    instances: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchMasterElement = z.infer<typeof ElasticsearchMasterElement>;
export declare const ElasticsearchShardsStatus: z.ZodObject<{
    status: z.ZodEnum<{
        green: "green";
        yellow: "yellow";
        red: "red";
    }>;
}, z.core.$strip>;
export type ElasticsearchShardsStatus = z.infer<typeof ElasticsearchShardsStatus>;
export declare const ElasticsearchReplicaElement: z.ZodObject<{
    instance_name: z.ZodString;
    replica_count: z.ZodNumber;
}, z.core.$strip>;
export type ElasticsearchReplicaElement = z.infer<typeof ElasticsearchReplicaElement>;
export declare const ElasticsearchShardElement: z.ZodObject<{
    instance_name: z.ZodString;
    shard_count: z.ZodNumber;
}, z.core.$strip>;
export type ElasticsearchShardElement = z.infer<typeof ElasticsearchShardElement>;
export declare const ClusterPlanAttemptError: z.ZodObject<{
    timestamp: z.ZodString;
    message: z.ZodString;
    details: z.ZodRecord<z.ZodString, z.ZodString>;
    failure_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterPlanAttemptError = z.infer<typeof ClusterPlanAttemptError>;
export declare const ClusterPlanWarning: z.ZodObject<{
    code: z.ZodString;
    message: z.ZodString;
    step_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterPlanWarning = z.infer<typeof ClusterPlanWarning>;
export declare const ChangeSourceInfo: z.ZodObject<{
    facilitator: z.ZodString;
    action: z.ZodString;
    date: z.ZodString;
    user_id: z.ZodOptional<z.ZodString>;
    admin_id: z.ZodOptional<z.ZodString>;
    remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type ChangeSourceInfo = z.infer<typeof ChangeSourceInfo>;
export declare const ClusterPlanStepLogMessageInfo: z.ZodObject<{
    timestamp: z.ZodString;
    delta_in_millis: z.ZodOptional<z.ZodNumber>;
    stage: z.ZodEnum<{
        completed: "completed";
        in_progress: "in_progress";
        starting: "starting";
    }>;
    message: z.ZodString;
    details: z.ZodRecord<z.ZodString, z.ZodString>;
    failure_type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterPlanStepLogMessageInfo = z.infer<typeof ClusterPlanStepLogMessageInfo>;
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
export declare const TopologySize: z.ZodObject<{
    value: z.ZodNumber;
    resource: z.ZodEnum<{
        memory: "memory";
        storage: "storage";
    }>;
}, z.core.$strip>;
export type TopologySize = z.infer<typeof TopologySize>;
export declare const ElasticsearchNodeType: z.ZodObject<{
    master: z.ZodOptional<z.ZodBoolean>;
    data: z.ZodOptional<z.ZodBoolean>;
    ingest: z.ZodOptional<z.ZodBoolean>;
    ml: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type ElasticsearchNodeType = z.infer<typeof ElasticsearchNodeType>;
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
export declare const EnterpriseSearchSubInfo: z.ZodObject<{
    enterprise_search_id: z.ZodString;
    enabled: z.ZodBoolean;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type EnterpriseSearchSubInfo = z.infer<typeof EnterpriseSearchSubInfo>;
export declare const AppSearchSubInfo: z.ZodObject<{
    app_search_id: z.ZodString;
    enabled: z.ZodBoolean;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type AppSearchSubInfo = z.infer<typeof AppSearchSubInfo>;
export declare const ApmSubInfo: z.ZodObject<{
    apm_id: z.ZodString;
    enabled: z.ZodBoolean;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ApmSubInfo = z.infer<typeof ApmSubInfo>;
export declare const KibanaSubClusterInfo: z.ZodObject<{
    kibana_id: z.ZodString;
    enabled: z.ZodBoolean;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type KibanaSubClusterInfo = z.infer<typeof KibanaSubClusterInfo>;
export declare const ElasticsearchClusterSecurityInfo: z.ZodObject<{
    version: z.ZodNumber;
    last_modified: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        username: z.ZodString;
        password_hash: z.ZodString;
    }, z.core.$strip>>;
    roles: z.ZodObject<{}, z.core.$strip>;
    users_roles: z.ZodArray<z.ZodObject<{
        username: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchClusterSecurityInfo = z.infer<typeof ElasticsearchClusterSecurityInfo>;
export declare const ClusterInstanceInfo: z.ZodObject<{
    instance_name: z.ZodString;
    instance_configuration: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        config_version: z.ZodOptional<z.ZodNumber>;
        resource: z.ZodEnum<{
            memory: "memory";
            storage: "storage";
        }>;
    }, z.core.$strip>>;
    service_version: z.ZodOptional<z.ZodString>;
    healthy: z.ZodBoolean;
    container_started: z.ZodBoolean;
    service_running: z.ZodBoolean;
    maintenance_mode: z.ZodBoolean;
    zone: z.ZodOptional<z.ZodString>;
    allocator_id: z.ZodOptional<z.ZodString>;
    memory: z.ZodOptional<z.ZodObject<{
        instance_capacity: z.ZodNumber;
        instance_capacity_planned: z.ZodOptional<z.ZodNumber>;
        memory_pressure: z.ZodOptional<z.ZodNumber>;
        native_memory_pressure: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    disk: z.ZodOptional<z.ZodObject<{
        disk_space_available: z.ZodOptional<z.ZodNumber>;
        disk_space_used: z.ZodNumber;
        storage_multiplier: z.ZodNumber;
    }, z.core.$strip>>;
    service_roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
        voting_only: "voting_only";
    }>>>;
    instance_overrides: z.ZodOptional<z.ZodObject<{
        capacity: z.ZodOptional<z.ZodNumber>;
        storage_multiplier: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterInstanceInfo = z.infer<typeof ClusterInstanceInfo>;
export declare const ClusterMetadataInfo: z.ZodObject<{
    version: z.ZodNumber;
    last_modified: z.ZodString;
    endpoint: z.ZodOptional<z.ZodString>;
    service_url: z.ZodOptional<z.ZodString>;
    aliased_endpoint: z.ZodOptional<z.ZodString>;
    aliased_url: z.ZodOptional<z.ZodString>;
    cloud_id: z.ZodOptional<z.ZodString>;
    raw: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
    ports: z.ZodOptional<z.ZodObject<{
        http: z.ZodNumber;
        https: z.ZodNumber;
        transport_passthrough: z.ZodNumber;
    }, z.core.$strip>>;
    services_urls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        service: z.ZodString;
        url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ClusterMetadataInfo = z.infer<typeof ClusterMetadataInfo>;
export declare const ElasticsearchBlockingIssues: z.ZodObject<{
    healthy: z.ZodBoolean;
    blocks: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        level: z.ZodEnum<{
            index: "index";
            global: "global";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchBlockingIssues = z.infer<typeof ElasticsearchBlockingIssues>;
export declare const ElasticsearchClusterBlockingIssues: z.ZodObject<{
    healthy: z.ZodBoolean;
    cluster_level: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        instances: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    index_level: z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        instances: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchClusterBlockingIssues = z.infer<typeof ElasticsearchClusterBlockingIssues>;
export declare const ElasticsearchMasterInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    masters: z.ZodArray<z.ZodObject<{
        master_node_id: z.ZodString;
        master_instance_name: z.ZodOptional<z.ZodString>;
        instances: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    instances_with_no_master: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchMasterInfo = z.infer<typeof ElasticsearchMasterInfo>;
export declare const ElasticsearchShardsInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    available_shards: z.ZodArray<z.ZodObject<{
        instance_name: z.ZodString;
        shard_count: z.ZodNumber;
    }, z.core.$strip>>;
    unavailable_shards: z.ZodArray<z.ZodObject<{
        instance_name: z.ZodString;
        shard_count: z.ZodNumber;
    }, z.core.$strip>>;
    unavailable_replicas: z.ZodArray<z.ZodObject<{
        instance_name: z.ZodString;
        replica_count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchShardsInfo = z.infer<typeof ElasticsearchShardsInfo>;
export declare const ClusterPlanStepInfo: z.ZodObject<{
    step_id: z.ZodString;
    started: z.ZodString;
    completed: z.ZodOptional<z.ZodString>;
    duration_in_millis: z.ZodOptional<z.ZodNumber>;
    status: z.ZodEnum<{
        success: "success";
        error: "error";
        pending: "pending";
        warning: "warning";
    }>;
    stage: z.ZodEnum<{
        completed: "completed";
        in_progress: "in_progress";
        starting: "starting";
    }>;
    info_log: z.ZodArray<z.ZodObject<{
        timestamp: z.ZodString;
        delta_in_millis: z.ZodOptional<z.ZodNumber>;
        stage: z.ZodEnum<{
            completed: "completed";
            in_progress: "in_progress";
            starting: "starting";
        }>;
        message: z.ZodString;
        details: z.ZodRecord<z.ZodString, z.ZodString>;
        failure_type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterPlanStepInfo = z.infer<typeof ClusterPlanStepInfo>;
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
export declare const ClusterTopologyInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    instances: z.ZodArray<z.ZodObject<{
        instance_name: z.ZodString;
        instance_configuration: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            config_version: z.ZodOptional<z.ZodNumber>;
            resource: z.ZodEnum<{
                memory: "memory";
                storage: "storage";
            }>;
        }, z.core.$strip>>;
        service_version: z.ZodOptional<z.ZodString>;
        healthy: z.ZodBoolean;
        container_started: z.ZodBoolean;
        service_running: z.ZodBoolean;
        maintenance_mode: z.ZodBoolean;
        zone: z.ZodOptional<z.ZodString>;
        allocator_id: z.ZodOptional<z.ZodString>;
        memory: z.ZodOptional<z.ZodObject<{
            instance_capacity: z.ZodNumber;
            instance_capacity_planned: z.ZodOptional<z.ZodNumber>;
            memory_pressure: z.ZodOptional<z.ZodNumber>;
            native_memory_pressure: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        disk: z.ZodOptional<z.ZodObject<{
            disk_space_available: z.ZodOptional<z.ZodNumber>;
            disk_space_used: z.ZodNumber;
            storage_multiplier: z.ZodNumber;
        }, z.core.$strip>>;
        service_roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
            voting_only: "voting_only";
        }>>>;
        instance_overrides: z.ZodOptional<z.ZodObject<{
            capacity: z.ZodOptional<z.ZodNumber>;
            storage_multiplier: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterTopologyInfo = z.infer<typeof ClusterTopologyInfo>;
export declare const ElasticsearchInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    shard_info: z.ZodObject<{
        healthy: z.ZodBoolean;
        available_shards: z.ZodArray<z.ZodObject<{
            instance_name: z.ZodString;
            shard_count: z.ZodNumber;
        }, z.core.$strip>>;
        unavailable_shards: z.ZodArray<z.ZodObject<{
            instance_name: z.ZodString;
            shard_count: z.ZodNumber;
        }, z.core.$strip>>;
        unavailable_replicas: z.ZodArray<z.ZodObject<{
            instance_name: z.ZodString;
            replica_count: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    shards_status: z.ZodOptional<z.ZodObject<{
        status: z.ZodEnum<{
            green: "green";
            yellow: "yellow";
            red: "red";
        }>;
    }, z.core.$strip>>;
    master_info: z.ZodObject<{
        healthy: z.ZodBoolean;
        masters: z.ZodArray<z.ZodObject<{
            master_node_id: z.ZodString;
            master_instance_name: z.ZodOptional<z.ZodString>;
            instances: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        instances_with_no_master: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    blocking_issues: z.ZodObject<{
        healthy: z.ZodBoolean;
        cluster_level: z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            instances: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        index_level: z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            instances: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    cluster_blocking_issues: z.ZodOptional<z.ZodObject<{
        healthy: z.ZodBoolean;
        blocks: z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            level: z.ZodEnum<{
                index: "index";
                global: "global";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchInfo = z.infer<typeof ElasticsearchInfo>;
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
export declare const ElasticsearchClusterPlanInfo: z.ZodObject<{
    plan_attempt_id: z.ZodOptional<z.ZodString>;
    plan_attempt_name: z.ZodOptional<z.ZodString>;
    healthy: z.ZodBoolean;
    attempt_start_time: z.ZodOptional<z.ZodString>;
    attempt_end_time: z.ZodOptional<z.ZodString>;
    plan_end_time: z.ZodOptional<z.ZodString>;
    plan: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
    plan_attempt_log: z.ZodArray<z.ZodObject<{
        step_id: z.ZodString;
        started: z.ZodString;
        completed: z.ZodOptional<z.ZodString>;
        duration_in_millis: z.ZodOptional<z.ZodNumber>;
        status: z.ZodEnum<{
            success: "success";
            error: "error";
            pending: "pending";
            warning: "warning";
        }>;
        stage: z.ZodEnum<{
            completed: "completed";
            in_progress: "in_progress";
            starting: "starting";
        }>;
        info_log: z.ZodArray<z.ZodObject<{
            timestamp: z.ZodString;
            delta_in_millis: z.ZodOptional<z.ZodNumber>;
            stage: z.ZodEnum<{
                completed: "completed";
                in_progress: "in_progress";
                starting: "starting";
            }>;
            message: z.ZodString;
            details: z.ZodRecord<z.ZodString, z.ZodString>;
            failure_type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    source: z.ZodOptional<z.ZodObject<{
        facilitator: z.ZodString;
        action: z.ZodString;
        date: z.ZodString;
        user_id: z.ZodOptional<z.ZodString>;
        admin_id: z.ZodOptional<z.ZodString>;
        remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    warnings: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        message: z.ZodString;
        step_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    error: z.ZodOptional<z.ZodObject<{
        timestamp: z.ZodString;
        message: z.ZodString;
        details: z.ZodRecord<z.ZodString, z.ZodString>;
        failure_type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchClusterPlanInfo = z.infer<typeof ElasticsearchClusterPlanInfo>;
export declare const ElasticsearchClusterPlansInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    current: z.ZodOptional<z.ZodObject<{
        plan_attempt_id: z.ZodOptional<z.ZodString>;
        plan_attempt_name: z.ZodOptional<z.ZodString>;
        healthy: z.ZodBoolean;
        attempt_start_time: z.ZodOptional<z.ZodString>;
        attempt_end_time: z.ZodOptional<z.ZodString>;
        plan_end_time: z.ZodOptional<z.ZodString>;
        plan: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        plan_attempt_log: z.ZodArray<z.ZodObject<{
            step_id: z.ZodString;
            started: z.ZodString;
            completed: z.ZodOptional<z.ZodString>;
            duration_in_millis: z.ZodOptional<z.ZodNumber>;
            status: z.ZodEnum<{
                success: "success";
                error: "error";
                pending: "pending";
                warning: "warning";
            }>;
            stage: z.ZodEnum<{
                completed: "completed";
                in_progress: "in_progress";
                starting: "starting";
            }>;
            info_log: z.ZodArray<z.ZodObject<{
                timestamp: z.ZodString;
                delta_in_millis: z.ZodOptional<z.ZodNumber>;
                stage: z.ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    starting: "starting";
                }>;
                message: z.ZodString;
                details: z.ZodRecord<z.ZodString, z.ZodString>;
                failure_type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        source: z.ZodOptional<z.ZodObject<{
            facilitator: z.ZodString;
            action: z.ZodString;
            date: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            admin_id: z.ZodOptional<z.ZodString>;
            remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        warnings: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
            step_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        error: z.ZodOptional<z.ZodObject<{
            timestamp: z.ZodString;
            message: z.ZodString;
            details: z.ZodRecord<z.ZodString, z.ZodString>;
            failure_type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    pending: z.ZodOptional<z.ZodObject<{
        plan_attempt_id: z.ZodOptional<z.ZodString>;
        plan_attempt_name: z.ZodOptional<z.ZodString>;
        healthy: z.ZodBoolean;
        attempt_start_time: z.ZodOptional<z.ZodString>;
        attempt_end_time: z.ZodOptional<z.ZodString>;
        plan_end_time: z.ZodOptional<z.ZodString>;
        plan: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        plan_attempt_log: z.ZodArray<z.ZodObject<{
            step_id: z.ZodString;
            started: z.ZodString;
            completed: z.ZodOptional<z.ZodString>;
            duration_in_millis: z.ZodOptional<z.ZodNumber>;
            status: z.ZodEnum<{
                success: "success";
                error: "error";
                pending: "pending";
                warning: "warning";
            }>;
            stage: z.ZodEnum<{
                completed: "completed";
                in_progress: "in_progress";
                starting: "starting";
            }>;
            info_log: z.ZodArray<z.ZodObject<{
                timestamp: z.ZodString;
                delta_in_millis: z.ZodOptional<z.ZodNumber>;
                stage: z.ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    starting: "starting";
                }>;
                message: z.ZodString;
                details: z.ZodRecord<z.ZodString, z.ZodString>;
                failure_type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        source: z.ZodOptional<z.ZodObject<{
            facilitator: z.ZodString;
            action: z.ZodString;
            date: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            admin_id: z.ZodOptional<z.ZodString>;
            remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        warnings: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
            step_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        error: z.ZodOptional<z.ZodObject<{
            timestamp: z.ZodString;
            message: z.ZodString;
            details: z.ZodRecord<z.ZodString, z.ZodString>;
            failure_type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    history: z.ZodArray<z.ZodObject<{
        plan_attempt_id: z.ZodOptional<z.ZodString>;
        plan_attempt_name: z.ZodOptional<z.ZodString>;
        healthy: z.ZodBoolean;
        attempt_start_time: z.ZodOptional<z.ZodString>;
        attempt_end_time: z.ZodOptional<z.ZodString>;
        plan_end_time: z.ZodOptional<z.ZodString>;
        plan: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
        plan_attempt_log: z.ZodArray<z.ZodObject<{
            step_id: z.ZodString;
            started: z.ZodString;
            completed: z.ZodOptional<z.ZodString>;
            duration_in_millis: z.ZodOptional<z.ZodNumber>;
            status: z.ZodEnum<{
                success: "success";
                error: "error";
                pending: "pending";
                warning: "warning";
            }>;
            stage: z.ZodEnum<{
                completed: "completed";
                in_progress: "in_progress";
                starting: "starting";
            }>;
            info_log: z.ZodArray<z.ZodObject<{
                timestamp: z.ZodString;
                delta_in_millis: z.ZodOptional<z.ZodNumber>;
                stage: z.ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    starting: "starting";
                }>;
                message: z.ZodString;
                details: z.ZodRecord<z.ZodString, z.ZodString>;
                failure_type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        source: z.ZodOptional<z.ZodObject<{
            facilitator: z.ZodString;
            action: z.ZodString;
            date: z.ZodString;
            user_id: z.ZodOptional<z.ZodString>;
            admin_id: z.ZodOptional<z.ZodString>;
            remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        warnings: z.ZodArray<z.ZodObject<{
            code: z.ZodString;
            message: z.ZodString;
            step_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        error: z.ZodOptional<z.ZodObject<{
            timestamp: z.ZodString;
            message: z.ZodString;
            details: z.ZodRecord<z.ZodString, z.ZodString>;
            failure_type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ElasticsearchClusterPlansInfo = z.infer<typeof ElasticsearchClusterPlansInfo>;
export declare const ElasticsearchClusterInfo: z.ZodObject<{
    cluster_id: z.ZodString;
    cluster_name: z.ZodString;
    deployment_id: z.ZodOptional<z.ZodString>;
    healthy: z.ZodBoolean;
    status: z.ZodEnum<{
        started: "started";
        initializing: "initializing";
        stopping: "stopping";
        stopped: "stopped";
        rebooting: "rebooting";
        restarting: "restarting";
        reconfiguring: "reconfiguring";
    }>;
    plan_info: z.ZodObject<{
        healthy: z.ZodBoolean;
        current: z.ZodOptional<z.ZodObject<{
            plan_attempt_id: z.ZodOptional<z.ZodString>;
            plan_attempt_name: z.ZodOptional<z.ZodString>;
            healthy: z.ZodBoolean;
            attempt_start_time: z.ZodOptional<z.ZodString>;
            attempt_end_time: z.ZodOptional<z.ZodString>;
            plan_end_time: z.ZodOptional<z.ZodString>;
            plan: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            plan_attempt_log: z.ZodArray<z.ZodObject<{
                step_id: z.ZodString;
                started: z.ZodString;
                completed: z.ZodOptional<z.ZodString>;
                duration_in_millis: z.ZodOptional<z.ZodNumber>;
                status: z.ZodEnum<{
                    success: "success";
                    error: "error";
                    pending: "pending";
                    warning: "warning";
                }>;
                stage: z.ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    starting: "starting";
                }>;
                info_log: z.ZodArray<z.ZodObject<{
                    timestamp: z.ZodString;
                    delta_in_millis: z.ZodOptional<z.ZodNumber>;
                    stage: z.ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        starting: "starting";
                    }>;
                    message: z.ZodString;
                    details: z.ZodRecord<z.ZodString, z.ZodString>;
                    failure_type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            source: z.ZodOptional<z.ZodObject<{
                facilitator: z.ZodString;
                action: z.ZodString;
                date: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                admin_id: z.ZodOptional<z.ZodString>;
                remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                step_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodString;
                message: z.ZodString;
                details: z.ZodRecord<z.ZodString, z.ZodString>;
                failure_type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        pending: z.ZodOptional<z.ZodObject<{
            plan_attempt_id: z.ZodOptional<z.ZodString>;
            plan_attempt_name: z.ZodOptional<z.ZodString>;
            healthy: z.ZodBoolean;
            attempt_start_time: z.ZodOptional<z.ZodString>;
            attempt_end_time: z.ZodOptional<z.ZodString>;
            plan_end_time: z.ZodOptional<z.ZodString>;
            plan: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            plan_attempt_log: z.ZodArray<z.ZodObject<{
                step_id: z.ZodString;
                started: z.ZodString;
                completed: z.ZodOptional<z.ZodString>;
                duration_in_millis: z.ZodOptional<z.ZodNumber>;
                status: z.ZodEnum<{
                    success: "success";
                    error: "error";
                    pending: "pending";
                    warning: "warning";
                }>;
                stage: z.ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    starting: "starting";
                }>;
                info_log: z.ZodArray<z.ZodObject<{
                    timestamp: z.ZodString;
                    delta_in_millis: z.ZodOptional<z.ZodNumber>;
                    stage: z.ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        starting: "starting";
                    }>;
                    message: z.ZodString;
                    details: z.ZodRecord<z.ZodString, z.ZodString>;
                    failure_type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            source: z.ZodOptional<z.ZodObject<{
                facilitator: z.ZodString;
                action: z.ZodString;
                date: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                admin_id: z.ZodOptional<z.ZodString>;
                remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                step_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodString;
                message: z.ZodString;
                details: z.ZodRecord<z.ZodString, z.ZodString>;
                failure_type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        history: z.ZodArray<z.ZodObject<{
            plan_attempt_id: z.ZodOptional<z.ZodString>;
            plan_attempt_name: z.ZodOptional<z.ZodString>;
            healthy: z.ZodBoolean;
            attempt_start_time: z.ZodOptional<z.ZodString>;
            attempt_end_time: z.ZodOptional<z.ZodString>;
            plan_end_time: z.ZodOptional<z.ZodString>;
            plan: z.ZodOptional<z.ZodObject<{
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
            }, z.core.$strip>>;
            plan_attempt_log: z.ZodArray<z.ZodObject<{
                step_id: z.ZodString;
                started: z.ZodString;
                completed: z.ZodOptional<z.ZodString>;
                duration_in_millis: z.ZodOptional<z.ZodNumber>;
                status: z.ZodEnum<{
                    success: "success";
                    error: "error";
                    pending: "pending";
                    warning: "warning";
                }>;
                stage: z.ZodEnum<{
                    completed: "completed";
                    in_progress: "in_progress";
                    starting: "starting";
                }>;
                info_log: z.ZodArray<z.ZodObject<{
                    timestamp: z.ZodString;
                    delta_in_millis: z.ZodOptional<z.ZodNumber>;
                    stage: z.ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        starting: "starting";
                    }>;
                    message: z.ZodString;
                    details: z.ZodRecord<z.ZodString, z.ZodString>;
                    failure_type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            source: z.ZodOptional<z.ZodObject<{
                facilitator: z.ZodString;
                action: z.ZodString;
                date: z.ZodString;
                user_id: z.ZodOptional<z.ZodString>;
                admin_id: z.ZodOptional<z.ZodString>;
                remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
            warnings: z.ZodArray<z.ZodObject<{
                code: z.ZodString;
                message: z.ZodString;
                step_id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            error: z.ZodOptional<z.ZodObject<{
                timestamp: z.ZodString;
                message: z.ZodString;
                details: z.ZodRecord<z.ZodString, z.ZodString>;
                failure_type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    elasticsearch: z.ZodObject<{
        healthy: z.ZodBoolean;
        shard_info: z.ZodObject<{
            healthy: z.ZodBoolean;
            available_shards: z.ZodArray<z.ZodObject<{
                instance_name: z.ZodString;
                shard_count: z.ZodNumber;
            }, z.core.$strip>>;
            unavailable_shards: z.ZodArray<z.ZodObject<{
                instance_name: z.ZodString;
                shard_count: z.ZodNumber;
            }, z.core.$strip>>;
            unavailable_replicas: z.ZodArray<z.ZodObject<{
                instance_name: z.ZodString;
                replica_count: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        shards_status: z.ZodOptional<z.ZodObject<{
            status: z.ZodEnum<{
                green: "green";
                yellow: "yellow";
                red: "red";
            }>;
        }, z.core.$strip>>;
        master_info: z.ZodObject<{
            healthy: z.ZodBoolean;
            masters: z.ZodArray<z.ZodObject<{
                master_node_id: z.ZodString;
                master_instance_name: z.ZodOptional<z.ZodString>;
                instances: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            instances_with_no_master: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        blocking_issues: z.ZodObject<{
            healthy: z.ZodBoolean;
            cluster_level: z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                instances: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
            index_level: z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                instances: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        cluster_blocking_issues: z.ZodOptional<z.ZodObject<{
            healthy: z.ZodBoolean;
            blocks: z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                level: z.ZodEnum<{
                    index: "index";
                    global: "global";
                }>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    metadata: z.ZodObject<{
        version: z.ZodNumber;
        last_modified: z.ZodString;
        endpoint: z.ZodOptional<z.ZodString>;
        service_url: z.ZodOptional<z.ZodString>;
        aliased_endpoint: z.ZodOptional<z.ZodString>;
        aliased_url: z.ZodOptional<z.ZodString>;
        cloud_id: z.ZodOptional<z.ZodString>;
        raw: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
        ports: z.ZodOptional<z.ZodObject<{
            http: z.ZodNumber;
            https: z.ZodNumber;
            transport_passthrough: z.ZodNumber;
        }, z.core.$strip>>;
        services_urls: z.ZodOptional<z.ZodArray<z.ZodObject<{
            service: z.ZodString;
            url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
    topology: z.ZodObject<{
        healthy: z.ZodBoolean;
        instances: z.ZodArray<z.ZodObject<{
            instance_name: z.ZodString;
            instance_configuration: z.ZodOptional<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                config_version: z.ZodOptional<z.ZodNumber>;
                resource: z.ZodEnum<{
                    memory: "memory";
                    storage: "storage";
                }>;
            }, z.core.$strip>>;
            service_version: z.ZodOptional<z.ZodString>;
            healthy: z.ZodBoolean;
            container_started: z.ZodBoolean;
            service_running: z.ZodBoolean;
            maintenance_mode: z.ZodBoolean;
            zone: z.ZodOptional<z.ZodString>;
            allocator_id: z.ZodOptional<z.ZodString>;
            memory: z.ZodOptional<z.ZodObject<{
                instance_capacity: z.ZodNumber;
                instance_capacity_planned: z.ZodOptional<z.ZodNumber>;
                memory_pressure: z.ZodOptional<z.ZodNumber>;
                native_memory_pressure: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            disk: z.ZodOptional<z.ZodObject<{
                disk_space_available: z.ZodOptional<z.ZodNumber>;
                disk_space_used: z.ZodNumber;
                storage_multiplier: z.ZodNumber;
            }, z.core.$strip>>;
            service_roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
                voting_only: "voting_only";
            }>>>;
            instance_overrides: z.ZodOptional<z.ZodObject<{
                capacity: z.ZodOptional<z.ZodNumber>;
                storage_multiplier: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    system_alerts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        timestamp: z.ZodString;
        instance_name: z.ZodString;
        alert_type: z.ZodEnum<{
            automatic_restart: "automatic_restart";
            heap_dump: "heap_dump";
            unknown_event: "unknown_event";
        }>;
        url: z.ZodOptional<z.ZodString>;
        exit_code: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    associated_kibana_clusters: z.ZodArray<z.ZodObject<{
        kibana_id: z.ZodString;
        enabled: z.ZodBoolean;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    associated_apm_clusters: z.ZodArray<z.ZodObject<{
        apm_id: z.ZodString;
        enabled: z.ZodBoolean;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    associated_appsearch_clusters: z.ZodArray<z.ZodObject<{
        app_search_id: z.ZodString;
        enabled: z.ZodBoolean;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    associated_enterprise_search_clusters: z.ZodArray<z.ZodObject<{
        enterprise_search_id: z.ZodString;
        enabled: z.ZodBoolean;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    security: z.ZodOptional<z.ZodObject<{
        version: z.ZodNumber;
        last_modified: z.ZodString;
        users: z.ZodArray<z.ZodObject<{
            username: z.ZodString;
            password_hash: z.ZodString;
        }, z.core.$strip>>;
        roles: z.ZodObject<{}, z.core.$strip>;
        users_roles: z.ZodArray<z.ZodObject<{
            username: z.ZodString;
            roles: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    elasticsearch_monitoring_info: z.ZodOptional<z.ZodObject<{
        healthy: z.ZodBoolean;
        last_modified: z.ZodString;
        last_update_status: z.ZodString;
        source_cluster_ids: z.ZodArray<z.ZodString>;
        destination_cluster_ids: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    snapshots: z.ZodObject<{
        healthy: z.ZodBoolean;
        count: z.ZodNumber;
        latest_successful: z.ZodOptional<z.ZodBoolean>;
        latest_status: z.ZodOptional<z.ZodString>;
        scheduled_time: z.ZodOptional<z.ZodString>;
        latest_end_time: z.ZodOptional<z.ZodString>;
        latest_successful_end_time: z.ZodOptional<z.ZodString>;
        recent_success: z.ZodBoolean;
    }, z.core.$strip>;
    external_links: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        uri: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
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
    region: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ElasticsearchClusterInfo = z.infer<typeof ElasticsearchClusterInfo>;
export declare const ElasticsearchResourceInfo: z.ZodObject<{
    ref_id: z.ZodString;
    id: z.ZodString;
    region: z.ZodString;
    info: z.ZodObject<{
        cluster_id: z.ZodString;
        cluster_name: z.ZodString;
        deployment_id: z.ZodOptional<z.ZodString>;
        healthy: z.ZodBoolean;
        status: z.ZodEnum<{
            started: "started";
            initializing: "initializing";
            stopping: "stopping";
            stopped: "stopped";
            rebooting: "rebooting";
            restarting: "restarting";
            reconfiguring: "reconfiguring";
        }>;
        plan_info: z.ZodObject<{
            healthy: z.ZodBoolean;
            current: z.ZodOptional<z.ZodObject<{
                plan_attempt_id: z.ZodOptional<z.ZodString>;
                plan_attempt_name: z.ZodOptional<z.ZodString>;
                healthy: z.ZodBoolean;
                attempt_start_time: z.ZodOptional<z.ZodString>;
                attempt_end_time: z.ZodOptional<z.ZodString>;
                plan_end_time: z.ZodOptional<z.ZodString>;
                plan: z.ZodOptional<z.ZodObject<{
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
                }, z.core.$strip>>;
                plan_attempt_log: z.ZodArray<z.ZodObject<{
                    step_id: z.ZodString;
                    started: z.ZodString;
                    completed: z.ZodOptional<z.ZodString>;
                    duration_in_millis: z.ZodOptional<z.ZodNumber>;
                    status: z.ZodEnum<{
                        success: "success";
                        error: "error";
                        pending: "pending";
                        warning: "warning";
                    }>;
                    stage: z.ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        starting: "starting";
                    }>;
                    info_log: z.ZodArray<z.ZodObject<{
                        timestamp: z.ZodString;
                        delta_in_millis: z.ZodOptional<z.ZodNumber>;
                        stage: z.ZodEnum<{
                            completed: "completed";
                            in_progress: "in_progress";
                            starting: "starting";
                        }>;
                        message: z.ZodString;
                        details: z.ZodRecord<z.ZodString, z.ZodString>;
                        failure_type: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                source: z.ZodOptional<z.ZodObject<{
                    facilitator: z.ZodString;
                    action: z.ZodString;
                    date: z.ZodString;
                    user_id: z.ZodOptional<z.ZodString>;
                    admin_id: z.ZodOptional<z.ZodString>;
                    remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
                warnings: z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    message: z.ZodString;
                    step_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                error: z.ZodOptional<z.ZodObject<{
                    timestamp: z.ZodString;
                    message: z.ZodString;
                    details: z.ZodRecord<z.ZodString, z.ZodString>;
                    failure_type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            pending: z.ZodOptional<z.ZodObject<{
                plan_attempt_id: z.ZodOptional<z.ZodString>;
                plan_attempt_name: z.ZodOptional<z.ZodString>;
                healthy: z.ZodBoolean;
                attempt_start_time: z.ZodOptional<z.ZodString>;
                attempt_end_time: z.ZodOptional<z.ZodString>;
                plan_end_time: z.ZodOptional<z.ZodString>;
                plan: z.ZodOptional<z.ZodObject<{
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
                }, z.core.$strip>>;
                plan_attempt_log: z.ZodArray<z.ZodObject<{
                    step_id: z.ZodString;
                    started: z.ZodString;
                    completed: z.ZodOptional<z.ZodString>;
                    duration_in_millis: z.ZodOptional<z.ZodNumber>;
                    status: z.ZodEnum<{
                        success: "success";
                        error: "error";
                        pending: "pending";
                        warning: "warning";
                    }>;
                    stage: z.ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        starting: "starting";
                    }>;
                    info_log: z.ZodArray<z.ZodObject<{
                        timestamp: z.ZodString;
                        delta_in_millis: z.ZodOptional<z.ZodNumber>;
                        stage: z.ZodEnum<{
                            completed: "completed";
                            in_progress: "in_progress";
                            starting: "starting";
                        }>;
                        message: z.ZodString;
                        details: z.ZodRecord<z.ZodString, z.ZodString>;
                        failure_type: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                source: z.ZodOptional<z.ZodObject<{
                    facilitator: z.ZodString;
                    action: z.ZodString;
                    date: z.ZodString;
                    user_id: z.ZodOptional<z.ZodString>;
                    admin_id: z.ZodOptional<z.ZodString>;
                    remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
                warnings: z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    message: z.ZodString;
                    step_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                error: z.ZodOptional<z.ZodObject<{
                    timestamp: z.ZodString;
                    message: z.ZodString;
                    details: z.ZodRecord<z.ZodString, z.ZodString>;
                    failure_type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            history: z.ZodArray<z.ZodObject<{
                plan_attempt_id: z.ZodOptional<z.ZodString>;
                plan_attempt_name: z.ZodOptional<z.ZodString>;
                healthy: z.ZodBoolean;
                attempt_start_time: z.ZodOptional<z.ZodString>;
                attempt_end_time: z.ZodOptional<z.ZodString>;
                plan_end_time: z.ZodOptional<z.ZodString>;
                plan: z.ZodOptional<z.ZodObject<{
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
                }, z.core.$strip>>;
                plan_attempt_log: z.ZodArray<z.ZodObject<{
                    step_id: z.ZodString;
                    started: z.ZodString;
                    completed: z.ZodOptional<z.ZodString>;
                    duration_in_millis: z.ZodOptional<z.ZodNumber>;
                    status: z.ZodEnum<{
                        success: "success";
                        error: "error";
                        pending: "pending";
                        warning: "warning";
                    }>;
                    stage: z.ZodEnum<{
                        completed: "completed";
                        in_progress: "in_progress";
                        starting: "starting";
                    }>;
                    info_log: z.ZodArray<z.ZodObject<{
                        timestamp: z.ZodString;
                        delta_in_millis: z.ZodOptional<z.ZodNumber>;
                        stage: z.ZodEnum<{
                            completed: "completed";
                            in_progress: "in_progress";
                            starting: "starting";
                        }>;
                        message: z.ZodString;
                        details: z.ZodRecord<z.ZodString, z.ZodString>;
                        failure_type: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                source: z.ZodOptional<z.ZodObject<{
                    facilitator: z.ZodString;
                    action: z.ZodString;
                    date: z.ZodString;
                    user_id: z.ZodOptional<z.ZodString>;
                    admin_id: z.ZodOptional<z.ZodString>;
                    remote_addresses: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>>;
                warnings: z.ZodArray<z.ZodObject<{
                    code: z.ZodString;
                    message: z.ZodString;
                    step_id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                error: z.ZodOptional<z.ZodObject<{
                    timestamp: z.ZodString;
                    message: z.ZodString;
                    details: z.ZodRecord<z.ZodString, z.ZodString>;
                    failure_type: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        elasticsearch: z.ZodObject<{
            healthy: z.ZodBoolean;
            shard_info: z.ZodObject<{
                healthy: z.ZodBoolean;
                available_shards: z.ZodArray<z.ZodObject<{
                    instance_name: z.ZodString;
                    shard_count: z.ZodNumber;
                }, z.core.$strip>>;
                unavailable_shards: z.ZodArray<z.ZodObject<{
                    instance_name: z.ZodString;
                    shard_count: z.ZodNumber;
                }, z.core.$strip>>;
                unavailable_replicas: z.ZodArray<z.ZodObject<{
                    instance_name: z.ZodString;
                    replica_count: z.ZodNumber;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            shards_status: z.ZodOptional<z.ZodObject<{
                status: z.ZodEnum<{
                    green: "green";
                    yellow: "yellow";
                    red: "red";
                }>;
            }, z.core.$strip>>;
            master_info: z.ZodObject<{
                healthy: z.ZodBoolean;
                masters: z.ZodArray<z.ZodObject<{
                    master_node_id: z.ZodString;
                    master_instance_name: z.ZodOptional<z.ZodString>;
                    instances: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                instances_with_no_master: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
            blocking_issues: z.ZodObject<{
                healthy: z.ZodBoolean;
                cluster_level: z.ZodArray<z.ZodObject<{
                    description: z.ZodString;
                    instances: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
                index_level: z.ZodArray<z.ZodObject<{
                    description: z.ZodString;
                    instances: z.ZodArray<z.ZodString>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            cluster_blocking_issues: z.ZodOptional<z.ZodObject<{
                healthy: z.ZodBoolean;
                blocks: z.ZodArray<z.ZodObject<{
                    description: z.ZodString;
                    level: z.ZodEnum<{
                        index: "index";
                        global: "global";
                    }>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        metadata: z.ZodObject<{
            version: z.ZodNumber;
            last_modified: z.ZodString;
            endpoint: z.ZodOptional<z.ZodString>;
            service_url: z.ZodOptional<z.ZodString>;
            aliased_endpoint: z.ZodOptional<z.ZodString>;
            aliased_url: z.ZodOptional<z.ZodString>;
            cloud_id: z.ZodOptional<z.ZodString>;
            raw: z.ZodOptional<z.ZodObject<{}, z.core.$strip>>;
            ports: z.ZodOptional<z.ZodObject<{
                http: z.ZodNumber;
                https: z.ZodNumber;
                transport_passthrough: z.ZodNumber;
            }, z.core.$strip>>;
            services_urls: z.ZodOptional<z.ZodArray<z.ZodObject<{
                service: z.ZodString;
                url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
        topology: z.ZodObject<{
            healthy: z.ZodBoolean;
            instances: z.ZodArray<z.ZodObject<{
                instance_name: z.ZodString;
                instance_configuration: z.ZodOptional<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                    config_version: z.ZodOptional<z.ZodNumber>;
                    resource: z.ZodEnum<{
                        memory: "memory";
                        storage: "storage";
                    }>;
                }, z.core.$strip>>;
                service_version: z.ZodOptional<z.ZodString>;
                healthy: z.ZodBoolean;
                container_started: z.ZodBoolean;
                service_running: z.ZodBoolean;
                maintenance_mode: z.ZodBoolean;
                zone: z.ZodOptional<z.ZodString>;
                allocator_id: z.ZodOptional<z.ZodString>;
                memory: z.ZodOptional<z.ZodObject<{
                    instance_capacity: z.ZodNumber;
                    instance_capacity_planned: z.ZodOptional<z.ZodNumber>;
                    memory_pressure: z.ZodOptional<z.ZodNumber>;
                    native_memory_pressure: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
                disk: z.ZodOptional<z.ZodObject<{
                    disk_space_available: z.ZodOptional<z.ZodNumber>;
                    disk_space_used: z.ZodNumber;
                    storage_multiplier: z.ZodNumber;
                }, z.core.$strip>>;
                service_roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
                    voting_only: "voting_only";
                }>>>;
                instance_overrides: z.ZodOptional<z.ZodObject<{
                    capacity: z.ZodOptional<z.ZodNumber>;
                    storage_multiplier: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        system_alerts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            timestamp: z.ZodString;
            instance_name: z.ZodString;
            alert_type: z.ZodEnum<{
                automatic_restart: "automatic_restart";
                heap_dump: "heap_dump";
                unknown_event: "unknown_event";
            }>;
            url: z.ZodOptional<z.ZodString>;
            exit_code: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
        associated_kibana_clusters: z.ZodArray<z.ZodObject<{
            kibana_id: z.ZodString;
            enabled: z.ZodBoolean;
            links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        associated_apm_clusters: z.ZodArray<z.ZodObject<{
            apm_id: z.ZodString;
            enabled: z.ZodBoolean;
            links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        associated_appsearch_clusters: z.ZodArray<z.ZodObject<{
            app_search_id: z.ZodString;
            enabled: z.ZodBoolean;
            links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        associated_enterprise_search_clusters: z.ZodArray<z.ZodObject<{
            enterprise_search_id: z.ZodString;
            enabled: z.ZodBoolean;
            links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        security: z.ZodOptional<z.ZodObject<{
            version: z.ZodNumber;
            last_modified: z.ZodString;
            users: z.ZodArray<z.ZodObject<{
                username: z.ZodString;
                password_hash: z.ZodString;
            }, z.core.$strip>>;
            roles: z.ZodObject<{}, z.core.$strip>;
            users_roles: z.ZodArray<z.ZodObject<{
                username: z.ZodString;
                roles: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        elasticsearch_monitoring_info: z.ZodOptional<z.ZodObject<{
            healthy: z.ZodBoolean;
            last_modified: z.ZodString;
            last_update_status: z.ZodString;
            source_cluster_ids: z.ZodArray<z.ZodString>;
            destination_cluster_ids: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        snapshots: z.ZodObject<{
            healthy: z.ZodBoolean;
            count: z.ZodNumber;
            latest_successful: z.ZodOptional<z.ZodBoolean>;
            latest_status: z.ZodOptional<z.ZodString>;
            scheduled_time: z.ZodOptional<z.ZodString>;
            latest_end_time: z.ZodOptional<z.ZodString>;
            latest_successful_end_time: z.ZodOptional<z.ZodString>;
            recent_success: z.ZodBoolean;
        }, z.core.$strip>;
        external_links: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            uri: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
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
        region: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type ElasticsearchResourceInfo = z.infer<typeof ElasticsearchResourceInfo>;
//# sourceMappingURL=get_deployment_es_resource_info.d.ts.map