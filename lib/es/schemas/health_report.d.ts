import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const HealthReportIndicatorHealthStatus: z.ZodEnum<{
    unknown: "unknown";
    green: "green";
    yellow: "yellow";
    red: "red";
    unavailable: "unavailable";
}>;
export type HealthReportIndicatorHealthStatus = z.infer<typeof HealthReportIndicatorHealthStatus>;
export declare const HealthReportImpactArea: z.ZodEnum<{
    search: "search";
    ingest: "ingest";
    backup: "backup";
    deployment_management: "deployment_management";
}>;
export type HealthReportImpactArea = z.infer<typeof HealthReportImpactArea>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const HealthReportImpact: z.ZodObject<{
    description: z.ZodString;
    id: z.ZodString;
    impact_areas: z.ZodArray<z.ZodEnum<{
        search: "search";
        ingest: "ingest";
        backup: "backup";
        deployment_management: "deployment_management";
    }>>;
    severity: z.ZodNumber;
}, z.core.$strip>;
export type HealthReportImpact = z.infer<typeof HealthReportImpact>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const HealthReportIndicatorNode: z.ZodObject<{
    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
}, z.core.$strip>;
export type HealthReportIndicatorNode = z.infer<typeof HealthReportIndicatorNode>;
export declare const HealthReportDiagnosisAffectedResources: z.ZodObject<{
    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    }, z.core.$strip>>>;
    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type HealthReportDiagnosisAffectedResources = z.infer<typeof HealthReportDiagnosisAffectedResources>;
export declare const HealthReportDiagnosis: z.ZodObject<{
    id: z.ZodString;
    action: z.ZodString;
    affected_resources: z.ZodObject<{
        indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        }, z.core.$strip>>>;
        slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
        feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
        snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    cause: z.ZodString;
    help_url: z.ZodString;
}, z.core.$strip>;
export type HealthReportDiagnosis = z.infer<typeof HealthReportDiagnosis>;
export declare const HealthReportBaseIndicator: z.ZodObject<{
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportBaseIndicator = z.infer<typeof HealthReportBaseIndicator>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const HealthReportStagnatingBackingIndices: z.ZodObject<{
    index_name: z.ZodString;
    first_occurrence_timestamp: z.ZodNumber;
    retry_count: z.ZodNumber;
}, z.core.$strip>;
export type HealthReportStagnatingBackingIndices = z.infer<typeof HealthReportStagnatingBackingIndices>;
export declare const HealthReportDataStreamLifecycleDetails: z.ZodObject<{
    stagnating_backing_indices_count: z.ZodNumber;
    total_backing_indices_in_error: z.ZodNumber;
    stagnating_backing_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        index_name: z.ZodString;
        first_occurrence_timestamp: z.ZodNumber;
        retry_count: z.ZodNumber;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportDataStreamLifecycleDetails = z.infer<typeof HealthReportDataStreamLifecycleDetails>;
/** DATA_STREAM_LIFECYCLE */
export declare const HealthReportDataStreamLifecycleIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        stagnating_backing_indices_count: z.ZodNumber;
        total_backing_indices_in_error: z.ZodNumber;
        stagnating_backing_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
            index_name: z.ZodString;
            first_occurrence_timestamp: z.ZodNumber;
            retry_count: z.ZodNumber;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportDataStreamLifecycleIndicator = z.infer<typeof HealthReportDataStreamLifecycleIndicator>;
export declare const HealthReportDiskIndicatorDetails: z.ZodObject<{
    indices_with_readonly_block: z.ZodNumber;
    nodes_with_enough_disk_space: z.ZodNumber;
    nodes_over_high_watermark: z.ZodNumber;
    nodes_over_flood_stage_watermark: z.ZodNumber;
    nodes_with_unknown_disk_status: z.ZodNumber;
}, z.core.$strip>;
export type HealthReportDiskIndicatorDetails = z.infer<typeof HealthReportDiskIndicatorDetails>;
/** DISK */
export declare const HealthReportDiskIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        indices_with_readonly_block: z.ZodNumber;
        nodes_with_enough_disk_space: z.ZodNumber;
        nodes_over_high_watermark: z.ZodNumber;
        nodes_over_flood_stage_watermark: z.ZodNumber;
        nodes_with_unknown_disk_status: z.ZodNumber;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportDiskIndicator = z.infer<typeof HealthReportDiskIndicator>;
export declare const HealthReportFileSettingsIndicatorDetails: z.ZodObject<{
    failure_streak: z.ZodNumber;
    most_recent_failure: z.ZodString;
}, z.core.$strip>;
export type HealthReportFileSettingsIndicatorDetails = z.infer<typeof HealthReportFileSettingsIndicatorDetails>;
/** FILE_SETTINGS */
export declare const HealthReportFileSettingsIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        failure_streak: z.ZodNumber;
        most_recent_failure: z.ZodString;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportFileSettingsIndicator = z.infer<typeof HealthReportFileSettingsIndicator>;
export declare const LifecycleOperationMode: z.ZodEnum<{
    STOPPING: "STOPPING";
    STOPPED: "STOPPED";
    RUNNING: "RUNNING";
}>;
export type LifecycleOperationMode = z.infer<typeof LifecycleOperationMode>;
export declare const HealthReportIlmIndicatorDetails: z.ZodObject<{
    ilm_status: z.ZodEnum<{
        STOPPING: "STOPPING";
        STOPPED: "STOPPED";
        RUNNING: "RUNNING";
    }>;
    policies: z.ZodNumber;
    stagnating_indices: z.ZodNumber;
}, z.core.$strip>;
export type HealthReportIlmIndicatorDetails = z.infer<typeof HealthReportIlmIndicatorDetails>;
/** ILM */
export declare const HealthReportIlmIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        ilm_status: z.ZodEnum<{
            STOPPING: "STOPPING";
            STOPPED: "STOPPED";
            RUNNING: "RUNNING";
        }>;
        policies: z.ZodNumber;
        stagnating_indices: z.ZodNumber;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportIlmIndicator = z.infer<typeof HealthReportIlmIndicator>;
export declare const HealthReportMasterIsStableIndicatorExceptionFetchingHistory: z.ZodObject<{
    message: z.ZodString;
    stack_trace: z.ZodString;
}, z.core.$strip>;
export type HealthReportMasterIsStableIndicatorExceptionFetchingHistory = z.infer<typeof HealthReportMasterIsStableIndicatorExceptionFetchingHistory>;
export declare const HealthReportMasterIsStableIndicatorClusterFormationNode: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    node_id: z.ZodString;
    cluster_formation_message: z.ZodString;
}, z.core.$strip>;
export type HealthReportMasterIsStableIndicatorClusterFormationNode = z.infer<typeof HealthReportMasterIsStableIndicatorClusterFormationNode>;
export declare const HealthReportMasterIsStableIndicatorDetails: z.ZodObject<{
    current_master: z.ZodObject<{
        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    }, z.core.$strip>;
    recent_masters: z.ZodArray<z.ZodObject<{
        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    }, z.core.$strip>>;
    exception_fetching_history: z.ZodOptional<z.ZodObject<{
        message: z.ZodString;
        stack_trace: z.ZodString;
    }, z.core.$strip>>;
    cluster_formation: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        node_id: z.ZodString;
        cluster_formation_message: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportMasterIsStableIndicatorDetails = z.infer<typeof HealthReportMasterIsStableIndicatorDetails>;
/** MASTER_IS_STABLE */
export declare const HealthReportMasterIsStableIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        current_master: z.ZodObject<{
            name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        }, z.core.$strip>;
        recent_masters: z.ZodArray<z.ZodObject<{
            name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        }, z.core.$strip>>;
        exception_fetching_history: z.ZodOptional<z.ZodObject<{
            message: z.ZodString;
            stack_trace: z.ZodString;
        }, z.core.$strip>>;
        cluster_formation: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            node_id: z.ZodString;
            cluster_formation_message: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportMasterIsStableIndicator = z.infer<typeof HealthReportMasterIsStableIndicator>;
export declare const HealthReportShardsAvailabilityIndicatorDetails: z.ZodObject<{
    creating_primaries: z.ZodNumber;
    creating_replicas: z.ZodNumber;
    initializing_primaries: z.ZodNumber;
    initializing_replicas: z.ZodNumber;
    restarting_primaries: z.ZodNumber;
    restarting_replicas: z.ZodNumber;
    started_primaries: z.ZodNumber;
    started_replicas: z.ZodNumber;
    unassigned_primaries: z.ZodNumber;
    unassigned_replicas: z.ZodNumber;
}, z.core.$strip>;
export type HealthReportShardsAvailabilityIndicatorDetails = z.infer<typeof HealthReportShardsAvailabilityIndicatorDetails>;
/** SHARDS_AVAILABILITY */
export declare const HealthReportShardsAvailabilityIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        creating_primaries: z.ZodNumber;
        creating_replicas: z.ZodNumber;
        initializing_primaries: z.ZodNumber;
        initializing_replicas: z.ZodNumber;
        restarting_primaries: z.ZodNumber;
        restarting_replicas: z.ZodNumber;
        started_primaries: z.ZodNumber;
        started_replicas: z.ZodNumber;
        unassigned_primaries: z.ZodNumber;
        unassigned_replicas: z.ZodNumber;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportShardsAvailabilityIndicator = z.infer<typeof HealthReportShardsAvailabilityIndicator>;
export declare const HealthReportRepositoryIntegrityIndicatorDetails: z.ZodObject<{
    total_repositories: z.ZodOptional<z.ZodNumber>;
    corrupted_repositories: z.ZodOptional<z.ZodNumber>;
    corrupted: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type HealthReportRepositoryIntegrityIndicatorDetails = z.infer<typeof HealthReportRepositoryIntegrityIndicatorDetails>;
/** REPOSITORY_INTEGRITY */
export declare const HealthReportRepositoryIntegrityIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        total_repositories: z.ZodOptional<z.ZodNumber>;
        corrupted_repositories: z.ZodOptional<z.ZodNumber>;
        corrupted: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportRepositoryIntegrityIndicator = z.infer<typeof HealthReportRepositoryIntegrityIndicator>;
export declare const HealthReportSlmIndicatorUnhealthyPolicies: z.ZodObject<{
    count: z.ZodNumber;
    invocations_since_last_success: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
}, z.core.$strip>;
export type HealthReportSlmIndicatorUnhealthyPolicies = z.infer<typeof HealthReportSlmIndicatorUnhealthyPolicies>;
export declare const HealthReportSlmIndicatorDetails: z.ZodObject<{
    slm_status: z.ZodEnum<{
        STOPPING: "STOPPING";
        STOPPED: "STOPPED";
        RUNNING: "RUNNING";
    }>;
    policies: z.ZodNumber;
    unhealthy_policies: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        invocations_since_last_success: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type HealthReportSlmIndicatorDetails = z.infer<typeof HealthReportSlmIndicatorDetails>;
/** SLM */
export declare const HealthReportSlmIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        slm_status: z.ZodEnum<{
            STOPPING: "STOPPING";
            STOPPED: "STOPPED";
            RUNNING: "RUNNING";
        }>;
        policies: z.ZodNumber;
        unhealthy_policies: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            invocations_since_last_success: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportSlmIndicator = z.infer<typeof HealthReportSlmIndicator>;
export declare const HealthReportShardsCapacityIndicatorTierDetail: z.ZodObject<{
    max_shards_in_cluster: z.ZodNumber;
    current_used_shards: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type HealthReportShardsCapacityIndicatorTierDetail = z.infer<typeof HealthReportShardsCapacityIndicatorTierDetail>;
export declare const HealthReportShardsCapacityIndicatorDetails: z.ZodObject<{
    data: z.ZodObject<{
        max_shards_in_cluster: z.ZodNumber;
        current_used_shards: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
    frozen: z.ZodObject<{
        max_shards_in_cluster: z.ZodNumber;
        current_used_shards: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type HealthReportShardsCapacityIndicatorDetails = z.infer<typeof HealthReportShardsCapacityIndicatorDetails>;
/** SHARDS_CAPACITY */
export declare const HealthReportShardsCapacityIndicator: z.ZodObject<{
    details: z.ZodOptional<z.ZodObject<{
        data: z.ZodObject<{
            max_shards_in_cluster: z.ZodNumber;
            current_used_shards: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
        frozen: z.ZodObject<{
            max_shards_in_cluster: z.ZodNumber;
            current_used_shards: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    status: z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>;
    symptom: z.ZodString;
    impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        description: z.ZodString;
        id: z.ZodString;
        impact_areas: z.ZodArray<z.ZodEnum<{
            search: "search";
            ingest: "ingest";
            backup: "backup";
            deployment_management: "deployment_management";
        }>>;
        severity: z.ZodNumber;
    }, z.core.$strip>>>;
    diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        action: z.ZodString;
        affected_resources: z.ZodObject<{
            indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>>;
            slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
            feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
            snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>;
        cause: z.ZodString;
        help_url: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type HealthReportShardsCapacityIndicator = z.infer<typeof HealthReportShardsCapacityIndicator>;
export declare const HealthReportIndicators: z.ZodObject<{
    master_is_stable: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            current_master: z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>;
            recent_masters: z.ZodArray<z.ZodObject<{
                name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            }, z.core.$strip>>;
            exception_fetching_history: z.ZodOptional<z.ZodObject<{
                message: z.ZodString;
                stack_trace: z.ZodString;
            }, z.core.$strip>>;
            cluster_formation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                node_id: z.ZodString;
                cluster_formation_message: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    shards_availability: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            creating_primaries: z.ZodNumber;
            creating_replicas: z.ZodNumber;
            initializing_primaries: z.ZodNumber;
            initializing_replicas: z.ZodNumber;
            restarting_primaries: z.ZodNumber;
            restarting_replicas: z.ZodNumber;
            started_primaries: z.ZodNumber;
            started_replicas: z.ZodNumber;
            unassigned_primaries: z.ZodNumber;
            unassigned_replicas: z.ZodNumber;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    disk: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            indices_with_readonly_block: z.ZodNumber;
            nodes_with_enough_disk_space: z.ZodNumber;
            nodes_over_high_watermark: z.ZodNumber;
            nodes_over_flood_stage_watermark: z.ZodNumber;
            nodes_with_unknown_disk_status: z.ZodNumber;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    repository_integrity: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            total_repositories: z.ZodOptional<z.ZodNumber>;
            corrupted_repositories: z.ZodOptional<z.ZodNumber>;
            corrupted: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    data_stream_lifecycle: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            stagnating_backing_indices_count: z.ZodNumber;
            total_backing_indices_in_error: z.ZodNumber;
            stagnating_backing_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                index_name: z.ZodString;
                first_occurrence_timestamp: z.ZodNumber;
                retry_count: z.ZodNumber;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    ilm: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            ilm_status: z.ZodEnum<{
                STOPPING: "STOPPING";
                STOPPED: "STOPPED";
                RUNNING: "RUNNING";
            }>;
            policies: z.ZodNumber;
            stagnating_indices: z.ZodNumber;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    slm: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            slm_status: z.ZodEnum<{
                STOPPING: "STOPPING";
                STOPPED: "STOPPED";
                RUNNING: "RUNNING";
            }>;
            policies: z.ZodNumber;
            unhealthy_policies: z.ZodOptional<z.ZodObject<{
                count: z.ZodNumber;
                invocations_since_last_success: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    shards_capacity: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            data: z.ZodObject<{
                max_shards_in_cluster: z.ZodNumber;
                current_used_shards: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
            frozen: z.ZodObject<{
                max_shards_in_cluster: z.ZodNumber;
                current_used_shards: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    file_settings: z.ZodOptional<z.ZodObject<{
        details: z.ZodOptional<z.ZodObject<{
            failure_streak: z.ZodNumber;
            most_recent_failure: z.ZodString;
        }, z.core.$strip>>;
        status: z.ZodEnum<{
            unknown: "unknown";
            green: "green";
            yellow: "yellow";
            red: "red";
            unavailable: "unavailable";
        }>;
        symptom: z.ZodString;
        impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            description: z.ZodString;
            id: z.ZodString;
            impact_areas: z.ZodArray<z.ZodEnum<{
                search: "search";
                ingest: "ingest";
                backup: "backup";
                deployment_management: "deployment_management";
            }>>;
            severity: z.ZodNumber;
        }, z.core.$strip>>>;
        diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodString;
            affected_resources: z.ZodObject<{
                indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>>;
                slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>;
            cause: z.ZodString;
            help_url: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type HealthReportIndicators = z.infer<typeof HealthReportIndicators>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
/**
 * Get the cluster health.
 *
 * Get a report with the health status of an Elasticsearch cluster.
 * The report contains a list of indicators that compose Elasticsearch functionality.
 *
 * Each indicator has a health status of: green, unknown, yellow or red.
 * The indicator will provide an explanation and metadata describing the reason for its current health status.
 *
 * The cluster’s status is controlled by the worst indicator status.
 *
 * In the event that an indicator’s status is non-green, a list of impacts may be present in the indicator result which detail the functionalities that are negatively affected by the health issue.
 * Each impact carries with it a severity level, an area of the system that is affected, and a simple description of the impact on the system.
 *
 * Some health indicators can determine the root cause of a health problem and prescribe a set of steps that can be performed in order to improve the health of the system.
 * The root cause and remediation steps are encapsulated in a diagnosis.
 * A diagnosis contains a cause detailing a root cause analysis, an action containing a brief description of the steps to take to fix the problem, the list of affected resources (if applicable), and a detailed step-by-step troubleshooting guide to fix the diagnosed problem.
 *
 * NOTE: The health indicators perform root cause analysis of non-green health statuses. This can be computationally expensive when called frequently.
 * When setting up automated polling of the API for health status, set verbose to false to disable the more expensive analysis logic.
 */
export declare const HealthReportRequest: z.ZodObject<{
    feature: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    verbose: z.ZodOptional<z.ZodBoolean>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type HealthReportRequest = z.infer<typeof HealthReportRequest>;
export declare const HealthReportResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    indicators: z.ZodObject<{
        master_is_stable: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                current_master: z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>;
                recent_masters: z.ZodArray<z.ZodObject<{
                    name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                }, z.core.$strip>>;
                exception_fetching_history: z.ZodOptional<z.ZodObject<{
                    message: z.ZodString;
                    stack_trace: z.ZodString;
                }, z.core.$strip>>;
                cluster_formation: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodOptional<z.ZodString>;
                    node_id: z.ZodString;
                    cluster_formation_message: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        shards_availability: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                creating_primaries: z.ZodNumber;
                creating_replicas: z.ZodNumber;
                initializing_primaries: z.ZodNumber;
                initializing_replicas: z.ZodNumber;
                restarting_primaries: z.ZodNumber;
                restarting_replicas: z.ZodNumber;
                started_primaries: z.ZodNumber;
                started_replicas: z.ZodNumber;
                unassigned_primaries: z.ZodNumber;
                unassigned_replicas: z.ZodNumber;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        disk: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                indices_with_readonly_block: z.ZodNumber;
                nodes_with_enough_disk_space: z.ZodNumber;
                nodes_over_high_watermark: z.ZodNumber;
                nodes_over_flood_stage_watermark: z.ZodNumber;
                nodes_with_unknown_disk_status: z.ZodNumber;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        repository_integrity: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                total_repositories: z.ZodOptional<z.ZodNumber>;
                corrupted_repositories: z.ZodOptional<z.ZodNumber>;
                corrupted: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        data_stream_lifecycle: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                stagnating_backing_indices_count: z.ZodNumber;
                total_backing_indices_in_error: z.ZodNumber;
                stagnating_backing_indices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    index_name: z.ZodString;
                    first_occurrence_timestamp: z.ZodNumber;
                    retry_count: z.ZodNumber;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        ilm: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                ilm_status: z.ZodEnum<{
                    STOPPING: "STOPPING";
                    STOPPED: "STOPPED";
                    RUNNING: "RUNNING";
                }>;
                policies: z.ZodNumber;
                stagnating_indices: z.ZodNumber;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        slm: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                slm_status: z.ZodEnum<{
                    STOPPING: "STOPPING";
                    STOPPED: "STOPPED";
                    RUNNING: "RUNNING";
                }>;
                policies: z.ZodNumber;
                unhealthy_policies: z.ZodOptional<z.ZodObject<{
                    count: z.ZodNumber;
                    invocations_since_last_success: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        shards_capacity: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                data: z.ZodObject<{
                    max_shards_in_cluster: z.ZodNumber;
                    current_used_shards: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
                frozen: z.ZodObject<{
                    max_shards_in_cluster: z.ZodNumber;
                    current_used_shards: z.ZodOptional<z.ZodNumber>;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        file_settings: z.ZodOptional<z.ZodObject<{
            details: z.ZodOptional<z.ZodObject<{
                failure_streak: z.ZodNumber;
                most_recent_failure: z.ZodString;
            }, z.core.$strip>>;
            status: z.ZodEnum<{
                unknown: "unknown";
                green: "green";
                yellow: "yellow";
                red: "red";
                unavailable: "unavailable";
            }>;
            symptom: z.ZodString;
            impacts: z.ZodOptional<z.ZodArray<z.ZodObject<{
                description: z.ZodString;
                id: z.ZodString;
                impact_areas: z.ZodArray<z.ZodEnum<{
                    search: "search";
                    ingest: "ingest";
                    backup: "backup";
                    deployment_management: "deployment_management";
                }>>;
                severity: z.ZodNumber;
            }, z.core.$strip>>>;
            diagnosis: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                action: z.ZodString;
                affected_resources: z.ZodObject<{
                    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
                    nodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                        node_id: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
                    }, z.core.$strip>>>;
                    slm_policies: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
                    snapshot_repositories: z.ZodOptional<z.ZodArray<z.ZodString>>;
                }, z.core.$strip>;
                cause: z.ZodString;
                help_url: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    status: z.ZodOptional<z.ZodEnum<{
        unknown: "unknown";
        green: "green";
        yellow: "yellow";
        red: "red";
        unavailable: "unavailable";
    }>>;
}, z.core.$strip>;
export type HealthReportResponse = z.infer<typeof HealthReportResponse>;
//# sourceMappingURL=health_report.d.ts.map