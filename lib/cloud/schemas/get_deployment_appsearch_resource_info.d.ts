import { z } from 'zod';
export declare const ClusterMetadataSettings: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ClusterMetadataSettings = z.infer<typeof ClusterMetadataSettings>;
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
export declare const AppSearchSystemSettings: z.ZodObject<{
    elasticsearch_url: z.ZodOptional<z.ZodString>;
    elasticsearch_username: z.ZodOptional<z.ZodString>;
    elasticsearch_password: z.ZodOptional<z.ZodString>;
    secret_session_key: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AppSearchSystemSettings = z.infer<typeof AppSearchSystemSettings>;
export declare const TopologySize: z.ZodObject<{
    value: z.ZodNumber;
    resource: z.ZodEnum<{
        memory: "memory";
        storage: "storage";
    }>;
}, z.core.$strip>;
export type TopologySize = z.infer<typeof TopologySize>;
export declare const AppSearchNodeTypes: z.ZodObject<{
    appserver: z.ZodBoolean;
    worker: z.ZodBoolean;
}, z.core.$strip>;
export type AppSearchNodeTypes = z.infer<typeof AppSearchNodeTypes>;
export declare const AppSearchSettings: z.ZodObject<{
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AppSearchSettings = z.infer<typeof AppSearchSettings>;
export declare const TargetElasticsearchCluster: z.ZodObject<{
    elasticsearch_id: z.ZodString;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type TargetElasticsearchCluster = z.infer<typeof TargetElasticsearchCluster>;
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
export declare const AppSearchPlanInfo: z.ZodObject<{
    plan_attempt_id: z.ZodOptional<z.ZodString>;
    plan_attempt_name: z.ZodOptional<z.ZodString>;
    healthy: z.ZodBoolean;
    attempt_start_time: z.ZodOptional<z.ZodString>;
    attempt_end_time: z.ZodOptional<z.ZodString>;
    plan_end_time: z.ZodOptional<z.ZodString>;
    plan: z.ZodOptional<z.ZodObject<{
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
export type AppSearchPlanInfo = z.infer<typeof AppSearchPlanInfo>;
export declare const AppSearchPlansInfo: z.ZodObject<{
    healthy: z.ZodBoolean;
    current: z.ZodOptional<z.ZodObject<{
        plan_attempt_id: z.ZodOptional<z.ZodString>;
        plan_attempt_name: z.ZodOptional<z.ZodString>;
        healthy: z.ZodBoolean;
        attempt_start_time: z.ZodOptional<z.ZodString>;
        attempt_end_time: z.ZodOptional<z.ZodString>;
        plan_end_time: z.ZodOptional<z.ZodString>;
        plan: z.ZodOptional<z.ZodObject<{
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
export type AppSearchPlansInfo = z.infer<typeof AppSearchPlansInfo>;
export declare const AppSearchInfo: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    elasticsearch_cluster: z.ZodObject<{
        elasticsearch_id: z.ZodString;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
    }, z.core.$strip>;
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
    metadata: z.ZodOptional<z.ZodObject<{
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
    }, z.core.$strip>>;
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
    external_links: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        label: z.ZodString;
        uri: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>>;
    settings: z.ZodOptional<z.ZodObject<{
        metadata: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    region: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type AppSearchInfo = z.infer<typeof AppSearchInfo>;
export declare const AppSearchResourceInfo: z.ZodObject<{
    ref_id: z.ZodString;
    elasticsearch_cluster_ref_id: z.ZodString;
    id: z.ZodString;
    region: z.ZodString;
    info: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        elasticsearch_cluster: z.ZodObject<{
            elasticsearch_id: z.ZodString;
            links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>>;
        }, z.core.$strip>;
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
        metadata: z.ZodOptional<z.ZodObject<{
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
        }, z.core.$strip>>;
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
        external_links: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            label: z.ZodString;
            uri: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        links: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            need_elevated_permissions: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>>;
        settings: z.ZodOptional<z.ZodObject<{
            metadata: z.ZodOptional<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        region: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AppSearchResourceInfo = z.infer<typeof AppSearchResourceInfo>;
//# sourceMappingURL=get_deployment_appsearch_resource_info.d.ts.map