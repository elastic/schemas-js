import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const ByteSize: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
export type ByteSize = z.infer<typeof ByteSize>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const Host: z.ZodString;
export type Host = z.infer<typeof Host>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ip: z.ZodString;
export type Ip = z.infer<typeof Ip>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const NodeIds: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type NodeIds = z.infer<typeof NodeIds>;
export declare const NodeRole: z.ZodEnum<{
    master: "master";
    ingest: "ingest";
    ml: "ml";
    transform: "transform";
    data: "data";
    client: "client";
    data_hot: "data_hot";
    data_content: "data_content";
    data_warm: "data_warm";
    data_cold: "data_cold";
    data_frozen: "data_frozen";
    remote_cluster_client: "remote_cluster_client";
    voting_only: "voting_only";
    coordinating_only: "coordinating_only";
}>;
export type NodeRole = z.infer<typeof NodeRole>;
export declare const NodeRoles: z.ZodArray<z.ZodEnum<{
    master: "master";
    ingest: "ingest";
    ml: "ml";
    transform: "transform";
    data: "data";
    client: "client";
    data_hot: "data_hot";
    data_content: "data_content";
    data_warm: "data_warm";
    data_cold: "data_cold";
    data_frozen: "data_frozen";
    remote_cluster_client: "remote_cluster_client";
    voting_only: "voting_only";
    coordinating_only: "coordinating_only";
}>>;
export type NodeRoles = z.infer<typeof NodeRoles>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
/** Contains statistics about the number of nodes selected by the request. */
export declare const NodeStatistics: z.ZodObject<{
    failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>>;
    total: z.ZodNumber;
    successful: z.ZodNumber;
    failed: z.ZodNumber;
}, z.core.$strip>;
export type NodeStatistics = z.infer<typeof NodeStatistics>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const PluginStats: z.ZodObject<{
    classname: z.ZodString;
    description: z.ZodString;
    elasticsearch_version: z.ZodString;
    extended_plugins: z.ZodArray<z.ZodString>;
    has_native_controller: z.ZodBoolean;
    java_version: z.ZodString;
    name: z.ZodString;
    version: z.ZodString;
    licensed: z.ZodBoolean;
}, z.core.$strip>;
export type PluginStats = z.infer<typeof PluginStats>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const TransportAddress: z.ZodString;
export type TransportAddress = z.infer<typeof TransportAddress>;
export declare const VersionNumber: z.ZodNumber;
export type VersionNumber = z.infer<typeof VersionNumber>;
export declare const IndicesIndexRoutingAllocationOptions: z.ZodEnum<{
    all: "all";
    none: "none";
    primaries: "primaries";
    new_primaries: "new_primaries";
}>;
export type IndicesIndexRoutingAllocationOptions = z.infer<typeof IndicesIndexRoutingAllocationOptions>;
export declare const IndicesIndexRoutingAllocationInclude: z.ZodObject<{
    _tier_preference: z.ZodOptional<z.ZodString>;
    _id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IndicesIndexRoutingAllocationInclude = z.infer<typeof IndicesIndexRoutingAllocationInclude>;
export declare const IndicesIndexRoutingAllocationInitialRecovery: z.ZodObject<{
    _id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type IndicesIndexRoutingAllocationInitialRecovery = z.infer<typeof IndicesIndexRoutingAllocationInitialRecovery>;
export declare const IndicesIndexRoutingAllocationDisk: z.ZodObject<{
    threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
}, z.core.$strip>;
export type IndicesIndexRoutingAllocationDisk = z.infer<typeof IndicesIndexRoutingAllocationDisk>;
export declare const IndicesIndexRoutingAllocation: z.ZodObject<{
    enable: z.ZodOptional<z.ZodEnum<{
        all: "all";
        none: "none";
        primaries: "primaries";
        new_primaries: "new_primaries";
    }>>;
    include: z.ZodOptional<z.ZodObject<{
        _tier_preference: z.ZodOptional<z.ZodString>;
        _id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    initial_recovery: z.ZodOptional<z.ZodObject<{
        _id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    disk: z.ZodOptional<z.ZodObject<{
        threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesIndexRoutingAllocation = z.infer<typeof IndicesIndexRoutingAllocation>;
export declare const IndicesIndexRoutingRebalanceOptions: z.ZodEnum<{
    all: "all";
    none: "none";
    primaries: "primaries";
    replicas: "replicas";
}>;
export type IndicesIndexRoutingRebalanceOptions = z.infer<typeof IndicesIndexRoutingRebalanceOptions>;
export declare const IndicesIndexRoutingRebalance: z.ZodObject<{
    enable: z.ZodEnum<{
        all: "all";
        none: "none";
        primaries: "primaries";
        replicas: "replicas";
    }>;
}, z.core.$strip>;
export type IndicesIndexRoutingRebalance = z.infer<typeof IndicesIndexRoutingRebalance>;
export declare const IndicesIndexRouting: z.ZodObject<{
    allocation: z.ZodOptional<z.ZodObject<{
        enable: z.ZodOptional<z.ZodEnum<{
            all: "all";
            none: "none";
            primaries: "primaries";
            new_primaries: "new_primaries";
        }>>;
        include: z.ZodOptional<z.ZodObject<{
            _tier_preference: z.ZodOptional<z.ZodString>;
            _id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        initial_recovery: z.ZodOptional<z.ZodObject<{
            _id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        disk: z.ZodOptional<z.ZodObject<{
            threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    rebalance: z.ZodOptional<z.ZodObject<{
        enable: z.ZodEnum<{
            all: "all";
            none: "none";
            primaries: "primaries";
            replicas: "replicas";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type IndicesIndexRouting = z.infer<typeof IndicesIndexRouting>;
export declare const NodesNodesResponseBase: z.ZodObject<{
    node_stats: z.ZodOptional<z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesNodesResponseBase = z.infer<typeof NodesNodesResponseBase>;
export declare const NodesInfoDeprecationIndexing: z.ZodObject<{
    enabled: z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>;
}, z.core.$strip>;
export type NodesInfoDeprecationIndexing = z.infer<typeof NodesInfoDeprecationIndexing>;
export declare const NodesInfoNodeInfoHttp: z.ZodObject<{
    bound_address: z.ZodArray<z.ZodString>;
    max_content_length: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_content_length_in_bytes: z.ZodNumber;
    publish_address: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoHttp = z.infer<typeof NodesInfoNodeInfoHttp>;
export declare const NodesInfoNodeInfoJvmMemory: z.ZodObject<{
    direct_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    direct_max_in_bytes: z.ZodNumber;
    heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    heap_init_in_bytes: z.ZodNumber;
    heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    heap_max_in_bytes: z.ZodNumber;
    non_heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    non_heap_init_in_bytes: z.ZodNumber;
    non_heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    non_heap_max_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type NodesInfoNodeInfoJvmMemory = z.infer<typeof NodesInfoNodeInfoJvmMemory>;
export declare const NodesInfoNodeJvmInfo: z.ZodObject<{
    gc_collectors: z.ZodArray<z.ZodString>;
    mem: z.ZodObject<{
        direct_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        direct_max_in_bytes: z.ZodNumber;
        heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        heap_init_in_bytes: z.ZodNumber;
        heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        heap_max_in_bytes: z.ZodNumber;
        non_heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        non_heap_init_in_bytes: z.ZodNumber;
        non_heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        non_heap_max_in_bytes: z.ZodNumber;
    }, z.core.$strip>;
    memory_pools: z.ZodArray<z.ZodString>;
    pid: z.ZodNumber;
    start_time_in_millis: z.ZodAny;
    version: z.ZodString;
    vm_name: z.ZodString;
    vm_vendor: z.ZodString;
    vm_version: z.ZodString;
    using_bundled_jdk: z.ZodBoolean;
    using_compressed_ordinary_object_pointers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
    input_arguments: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type NodesInfoNodeJvmInfo = z.infer<typeof NodesInfoNodeJvmInfo>;
export declare const NodesInfoNodeInfoOSCPU: z.ZodObject<{
    cache_size: z.ZodString;
    cache_size_in_bytes: z.ZodNumber;
    cores_per_socket: z.ZodNumber;
    mhz: z.ZodNumber;
    model: z.ZodString;
    total_cores: z.ZodNumber;
    total_sockets: z.ZodNumber;
    vendor: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoOSCPU = z.infer<typeof NodesInfoNodeInfoOSCPU>;
export declare const NodesInfoNodeInfoMemory: z.ZodObject<{
    total: z.ZodString;
    total_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type NodesInfoNodeInfoMemory = z.infer<typeof NodesInfoNodeInfoMemory>;
export declare const NodesInfoNodeOperatingSystemInfo: z.ZodObject<{
    arch: z.ZodString;
    available_processors: z.ZodNumber;
    allocated_processors: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    pretty_name: z.ZodString;
    refresh_interval_in_millis: z.ZodAny;
    version: z.ZodString;
    cpu: z.ZodOptional<z.ZodObject<{
        cache_size: z.ZodString;
        cache_size_in_bytes: z.ZodNumber;
        cores_per_socket: z.ZodNumber;
        mhz: z.ZodNumber;
        model: z.ZodString;
        total_cores: z.ZodNumber;
        total_sockets: z.ZodNumber;
        vendor: z.ZodString;
    }, z.core.$strip>>;
    mem: z.ZodOptional<z.ZodObject<{
        total: z.ZodString;
        total_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
    swap: z.ZodOptional<z.ZodObject<{
        total: z.ZodString;
        total_in_bytes: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeOperatingSystemInfo = z.infer<typeof NodesInfoNodeOperatingSystemInfo>;
export declare const NodesInfoNodeProcessInfo: z.ZodObject<{
    id: z.ZodNumber;
    mlockall: z.ZodBoolean;
    refresh_interval_in_millis: z.ZodAny;
}, z.core.$strip>;
export type NodesInfoNodeProcessInfo = z.infer<typeof NodesInfoNodeProcessInfo>;
export declare const NodesInfoNodeInfoSettingsClusterElection: z.ZodObject<{
    strategy: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsClusterElection = z.infer<typeof NodesInfoNodeInfoSettingsClusterElection>;
export declare const NodesInfoNodeInfoSettingsCluster: z.ZodObject<{
    name: z.ZodString;
    routing: z.ZodOptional<z.ZodObject<{
        allocation: z.ZodOptional<z.ZodObject<{
            enable: z.ZodOptional<z.ZodEnum<{
                all: "all";
                none: "none";
                primaries: "primaries";
                new_primaries: "new_primaries";
            }>>;
            include: z.ZodOptional<z.ZodObject<{
                _tier_preference: z.ZodOptional<z.ZodString>;
                _id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            initial_recovery: z.ZodOptional<z.ZodObject<{
                _id: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            disk: z.ZodOptional<z.ZodObject<{
                threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        rebalance: z.ZodOptional<z.ZodObject<{
            enable: z.ZodEnum<{
                all: "all";
                none: "none";
                primaries: "primaries";
                replicas: "replicas";
            }>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    election: z.ZodObject<{
        strategy: z.ZodString;
    }, z.core.$strip>;
    initial_master_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
    deprecation_indexing: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsCluster = z.infer<typeof NodesInfoNodeInfoSettingsCluster>;
export declare const NodesInfoNodeInfoSettingsNode: z.ZodObject<{
    name: z.ZodString;
    attr: z.ZodRecord<z.ZodString, z.ZodAny>;
    max_local_storage_nodes: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsNode = z.infer<typeof NodesInfoNodeInfoSettingsNode>;
export declare const NodesInfoNodeInfoPath: z.ZodObject<{
    logs: z.ZodOptional<z.ZodString>;
    home: z.ZodOptional<z.ZodString>;
    repo: z.ZodOptional<z.ZodArray<z.ZodString>>;
    data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoPath = z.infer<typeof NodesInfoNodeInfoPath>;
export declare const NodesInfoNodeInfoRepositoriesUrl: z.ZodObject<{
    allowed_urls: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoRepositoriesUrl = z.infer<typeof NodesInfoNodeInfoRepositoriesUrl>;
export declare const NodesInfoNodeInfoRepositories: z.ZodObject<{
    url: z.ZodObject<{
        allowed_urls: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type NodesInfoNodeInfoRepositories = z.infer<typeof NodesInfoNodeInfoRepositories>;
export declare const NodesInfoNodeInfoDiscover: z.ZodObject<{
    seed_hosts: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
    type: z.ZodOptional<z.ZodString>;
    seed_providers: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$catchall<z.ZodAny>>;
export type NodesInfoNodeInfoDiscover = z.infer<typeof NodesInfoNodeInfoDiscover>;
export declare const NodesInfoNodeInfoAction: z.ZodObject<{
    destructive_requires_name: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoAction = z.infer<typeof NodesInfoNodeInfoAction>;
export declare const NodesInfoNodeInfoClient: z.ZodObject<{
    type: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoClient = z.infer<typeof NodesInfoNodeInfoClient>;
export declare const NodesInfoNodeInfoSettingsHttpType: z.ZodObject<{
    default: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsHttpType = z.infer<typeof NodesInfoNodeInfoSettingsHttpType>;
export declare const NodesInfoNodeInfoSettingsHttp: z.ZodObject<{
    type: z.ZodUnion<readonly [z.ZodObject<{
        default: z.ZodString;
    }, z.core.$strip>, z.ZodString]>;
    'type.default': z.ZodOptional<z.ZodString>;
    compression: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
    port: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsHttp = z.infer<typeof NodesInfoNodeInfoSettingsHttp>;
export declare const NodesInfoNodeInfoBootstrap: z.ZodObject<{
    memory_lock: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoBootstrap = z.infer<typeof NodesInfoNodeInfoBootstrap>;
export declare const NodesInfoNodeInfoSettingsTransportType: z.ZodObject<{
    default: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsTransportType = z.infer<typeof NodesInfoNodeInfoSettingsTransportType>;
export declare const NodesInfoNodeInfoSettingsTransportFeatures: z.ZodObject<{
    'x-pack': z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsTransportFeatures = z.infer<typeof NodesInfoNodeInfoSettingsTransportFeatures>;
export declare const NodesInfoNodeInfoSettingsTransport: z.ZodObject<{
    type: z.ZodUnion<readonly [z.ZodObject<{
        default: z.ZodString;
    }, z.core.$strip>, z.ZodString]>;
    'type.default': z.ZodOptional<z.ZodString>;
    features: z.ZodOptional<z.ZodObject<{
        'x-pack': z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsTransport = z.infer<typeof NodesInfoNodeInfoSettingsTransport>;
export declare const NodesInfoNodeInfoSettingsNetwork: z.ZodObject<{
    host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsNetwork = z.infer<typeof NodesInfoNodeInfoSettingsNetwork>;
export declare const NodesInfoNodeInfoXpackLicenseType: z.ZodObject<{
    type: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackLicenseType = z.infer<typeof NodesInfoNodeInfoXpackLicenseType>;
export declare const NodesInfoNodeInfoXpackLicense: z.ZodObject<{
    self_generated: z.ZodObject<{
        type: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackLicense = z.infer<typeof NodesInfoNodeInfoXpackLicense>;
export declare const NodesInfoNodeInfoXpackSecuritySsl: z.ZodObject<{
    ssl: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackSecuritySsl = z.infer<typeof NodesInfoNodeInfoXpackSecuritySsl>;
export declare const NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodString>;
    order: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus>;
export declare const NodesInfoNodeInfoXpackSecurityAuthcRealms: z.ZodObject<{
    file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        enabled: z.ZodOptional<z.ZodString>;
        order: z.ZodString;
    }, z.core.$strip>>>;
    native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        enabled: z.ZodOptional<z.ZodString>;
        order: z.ZodString;
    }, z.core.$strip>>>;
    pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        enabled: z.ZodOptional<z.ZodString>;
        order: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackSecurityAuthcRealms = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthcRealms>;
export declare const NodesInfoNodeInfoXpackSecurityAuthcToken: z.ZodObject<{
    enabled: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackSecurityAuthcToken = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthcToken>;
export declare const NodesInfoNodeInfoXpackSecurityAuthc: z.ZodObject<{
    realms: z.ZodOptional<z.ZodObject<{
        file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            enabled: z.ZodOptional<z.ZodString>;
            order: z.ZodString;
        }, z.core.$strip>>>;
        native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            enabled: z.ZodOptional<z.ZodString>;
            order: z.ZodString;
        }, z.core.$strip>>>;
        pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            enabled: z.ZodOptional<z.ZodString>;
            order: z.ZodString;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    token: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackSecurityAuthc = z.infer<typeof NodesInfoNodeInfoXpackSecurityAuthc>;
export declare const NodesInfoNodeInfoXpackSecurity: z.ZodObject<{
    http: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    enabled: z.ZodString;
    transport: z.ZodOptional<z.ZodObject<{
        ssl: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    authc: z.ZodOptional<z.ZodObject<{
        realms: z.ZodOptional<z.ZodObject<{
            file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                enabled: z.ZodOptional<z.ZodString>;
                order: z.ZodString;
            }, z.core.$strip>>>;
            native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                enabled: z.ZodOptional<z.ZodString>;
                order: z.ZodString;
            }, z.core.$strip>>>;
            pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                enabled: z.ZodOptional<z.ZodString>;
                order: z.ZodString;
            }, z.core.$strip>>>;
        }, z.core.$strip>>;
        token: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackSecurity = z.infer<typeof NodesInfoNodeInfoXpackSecurity>;
export declare const NodesInfoNodeInfoXpackMl: z.ZodObject<{
    use_auto_machine_memory_percent: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpackMl = z.infer<typeof NodesInfoNodeInfoXpackMl>;
export declare const NodesInfoNodeInfoXpack: z.ZodObject<{
    license: z.ZodOptional<z.ZodObject<{
        self_generated: z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    security: z.ZodObject<{
        http: z.ZodOptional<z.ZodObject<{
            ssl: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
        enabled: z.ZodString;
        transport: z.ZodOptional<z.ZodObject<{
            ssl: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
        authc: z.ZodOptional<z.ZodObject<{
            realms: z.ZodOptional<z.ZodObject<{
                file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodString>;
                    order: z.ZodString;
                }, z.core.$strip>>>;
                native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodString>;
                    order: z.ZodString;
                }, z.core.$strip>>>;
                pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                    enabled: z.ZodOptional<z.ZodString>;
                    order: z.ZodString;
                }, z.core.$strip>>>;
            }, z.core.$strip>>;
            token: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    notification: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    ml: z.ZodOptional<z.ZodObject<{
        use_auto_machine_memory_percent: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoXpack = z.infer<typeof NodesInfoNodeInfoXpack>;
export declare const NodesInfoNodeInfoScript: z.ZodObject<{
    allowed_types: z.ZodString;
    disable_max_compilations_rate: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesInfoNodeInfoScript = z.infer<typeof NodesInfoNodeInfoScript>;
export declare const NodesInfoNodeInfoSearchRemote: z.ZodObject<{
    connect: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoSearchRemote = z.infer<typeof NodesInfoNodeInfoSearchRemote>;
export declare const NodesInfoNodeInfoSearch: z.ZodObject<{
    remote: z.ZodObject<{
        connect: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSearch = z.infer<typeof NodesInfoNodeInfoSearch>;
export declare const NodesInfoNodeInfoIngestDownloader: z.ZodObject<{
    enabled: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoIngestDownloader = z.infer<typeof NodesInfoNodeInfoIngestDownloader>;
export declare const NodesInfoNodeInfoIngestInfo: z.ZodObject<{
    downloader: z.ZodObject<{
        enabled: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type NodesInfoNodeInfoIngestInfo = z.infer<typeof NodesInfoNodeInfoIngestInfo>;
export declare const NodesInfoNodeInfoSettingsIngest: z.ZodObject<{
    attachment: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    append: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    csv: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    convert: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    date: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    date_index_name: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    dot_expander: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    enrich: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    fail: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    foreach: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    json: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    user_agent: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    kv: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    geoip: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    grok: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    gsub: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    join: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    lowercase: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    remove: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    rename: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    script: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    set: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    sort: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    split: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    trim: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    uppercase: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    urldecode: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    bytes: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    dissect: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    set_security_user: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    pipeline: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    drop: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    circle: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    inference: z.ZodOptional<z.ZodObject<{
        downloader: z.ZodObject<{
            enabled: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettingsIngest = z.infer<typeof NodesInfoNodeInfoSettingsIngest>;
export declare const NodesInfoNodeInfoSettings: z.ZodObject<{
    cluster: z.ZodObject<{
        name: z.ZodString;
        routing: z.ZodOptional<z.ZodObject<{
            allocation: z.ZodOptional<z.ZodObject<{
                enable: z.ZodOptional<z.ZodEnum<{
                    all: "all";
                    none: "none";
                    primaries: "primaries";
                    new_primaries: "new_primaries";
                }>>;
                include: z.ZodOptional<z.ZodObject<{
                    _tier_preference: z.ZodOptional<z.ZodString>;
                    _id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                initial_recovery: z.ZodOptional<z.ZodObject<{
                    _id: z.ZodOptional<z.ZodString>;
                }, z.core.$strip>>;
                disk: z.ZodOptional<z.ZodObject<{
                    threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            rebalance: z.ZodOptional<z.ZodObject<{
                enable: z.ZodEnum<{
                    all: "all";
                    none: "none";
                    primaries: "primaries";
                    replicas: "replicas";
                }>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        election: z.ZodObject<{
            strategy: z.ZodString;
        }, z.core.$strip>;
        initial_master_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
        deprecation_indexing: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    node: z.ZodObject<{
        name: z.ZodString;
        attr: z.ZodRecord<z.ZodString, z.ZodAny>;
        max_local_storage_nodes: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    path: z.ZodOptional<z.ZodObject<{
        logs: z.ZodOptional<z.ZodString>;
        home: z.ZodOptional<z.ZodString>;
        repo: z.ZodOptional<z.ZodArray<z.ZodString>>;
        data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>;
    repositories: z.ZodOptional<z.ZodObject<{
        url: z.ZodObject<{
            allowed_urls: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    discovery: z.ZodOptional<z.ZodObject<{
        seed_hosts: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
        type: z.ZodOptional<z.ZodString>;
        seed_providers: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$catchall<z.ZodAny>>>;
    action: z.ZodOptional<z.ZodObject<{
        destructive_requires_name: z.ZodString;
    }, z.core.$strip>>;
    client: z.ZodOptional<z.ZodObject<{
        type: z.ZodString;
    }, z.core.$strip>>;
    http: z.ZodObject<{
        type: z.ZodUnion<readonly [z.ZodObject<{
            default: z.ZodString;
        }, z.core.$strip>, z.ZodString]>;
        'type.default': z.ZodOptional<z.ZodString>;
        compression: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        port: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    }, z.core.$strip>;
    bootstrap: z.ZodOptional<z.ZodObject<{
        memory_lock: z.ZodString;
    }, z.core.$strip>>;
    transport: z.ZodObject<{
        type: z.ZodUnion<readonly [z.ZodObject<{
            default: z.ZodString;
        }, z.core.$strip>, z.ZodString]>;
        'type.default': z.ZodOptional<z.ZodString>;
        features: z.ZodOptional<z.ZodObject<{
            'x-pack': z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    network: z.ZodOptional<z.ZodObject<{
        host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    }, z.core.$strip>>;
    xpack: z.ZodOptional<z.ZodObject<{
        license: z.ZodOptional<z.ZodObject<{
            self_generated: z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        security: z.ZodObject<{
            http: z.ZodOptional<z.ZodObject<{
                ssl: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>>;
            enabled: z.ZodString;
            transport: z.ZodOptional<z.ZodObject<{
                ssl: z.ZodRecord<z.ZodString, z.ZodString>;
            }, z.core.$strip>>;
            authc: z.ZodOptional<z.ZodObject<{
                realms: z.ZodOptional<z.ZodObject<{
                    file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodString>;
                        order: z.ZodString;
                    }, z.core.$strip>>>;
                    native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodString>;
                        order: z.ZodString;
                    }, z.core.$strip>>>;
                    pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                        enabled: z.ZodOptional<z.ZodString>;
                        order: z.ZodString;
                    }, z.core.$strip>>>;
                }, z.core.$strip>>;
                token: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        notification: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        ml: z.ZodOptional<z.ZodObject<{
            use_auto_machine_memory_percent: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    script: z.ZodOptional<z.ZodObject<{
        allowed_types: z.ZodString;
        disable_max_compilations_rate: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    search: z.ZodOptional<z.ZodObject<{
        remote: z.ZodObject<{
            connect: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>>;
    ingest: z.ZodOptional<z.ZodObject<{
        attachment: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        append: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        csv: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        convert: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        date: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        date_index_name: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        dot_expander: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        enrich: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        fail: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        foreach: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        json: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        user_agent: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        kv: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        geoip: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        grok: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        gsub: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        join: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        lowercase: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        remove: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        rename: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        script: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        set: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        sort: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        split: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        trim: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        uppercase: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        urldecode: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        bytes: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        dissect: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        set_security_user: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        pipeline: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        drop: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        circle: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        inference: z.ZodOptional<z.ZodObject<{
            downloader: z.ZodObject<{
                enabled: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoSettings = z.infer<typeof NodesInfoNodeInfoSettings>;
export declare const NodesInfoNodeThreadPoolInfo: z.ZodObject<{
    core: z.ZodOptional<z.ZodNumber>;
    keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max: z.ZodOptional<z.ZodNumber>;
    queue_size: z.ZodNumber;
    size: z.ZodOptional<z.ZodNumber>;
    type: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeThreadPoolInfo = z.infer<typeof NodesInfoNodeThreadPoolInfo>;
export declare const NodesInfoNodeInfoTransport: z.ZodObject<{
    bound_address: z.ZodArray<z.ZodString>;
    publish_address: z.ZodString;
    profiles: z.ZodRecord<z.ZodString, z.ZodString>;
}, z.core.$strip>;
export type NodesInfoNodeInfoTransport = z.infer<typeof NodesInfoNodeInfoTransport>;
export declare const NodesInfoNodeInfoIngestProcessor: z.ZodObject<{
    type: z.ZodString;
}, z.core.$strip>;
export type NodesInfoNodeInfoIngestProcessor = z.infer<typeof NodesInfoNodeInfoIngestProcessor>;
export declare const NodesInfoNodeInfoIngest: z.ZodObject<{
    processors: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfoIngest = z.infer<typeof NodesInfoNodeInfoIngest>;
export declare const NodesInfoNodeInfoAggregation: z.ZodObject<{
    types: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export type NodesInfoNodeInfoAggregation = z.infer<typeof NodesInfoNodeInfoAggregation>;
export declare const NodesInfoRemoveClusterServer: z.ZodObject<{
    bound_address: z.ZodArray<z.ZodString>;
    publish_address: z.ZodString;
}, z.core.$strip>;
export type NodesInfoRemoveClusterServer = z.infer<typeof NodesInfoRemoveClusterServer>;
export declare const NodesInfoNodeInfo: z.ZodObject<{
    attributes: z.ZodRecord<z.ZodString, z.ZodString>;
    build_flavor: z.ZodString;
    build_hash: z.ZodString;
    build_type: z.ZodString;
    component_versions: z.ZodRecord<z.ZodString, z.ZodNumber>;
    host: z.ZodString;
    http: z.ZodOptional<z.ZodObject<{
        bound_address: z.ZodArray<z.ZodString>;
        max_content_length: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_content_length_in_bytes: z.ZodNumber;
        publish_address: z.ZodString;
    }, z.core.$strip>>;
    index_version: z.ZodNumber;
    ip: z.ZodString;
    jvm: z.ZodOptional<z.ZodObject<{
        gc_collectors: z.ZodArray<z.ZodString>;
        mem: z.ZodObject<{
            direct_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            direct_max_in_bytes: z.ZodNumber;
            heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            heap_init_in_bytes: z.ZodNumber;
            heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            heap_max_in_bytes: z.ZodNumber;
            non_heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            non_heap_init_in_bytes: z.ZodNumber;
            non_heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            non_heap_max_in_bytes: z.ZodNumber;
        }, z.core.$strip>;
        memory_pools: z.ZodArray<z.ZodString>;
        pid: z.ZodNumber;
        start_time_in_millis: z.ZodAny;
        version: z.ZodString;
        vm_name: z.ZodString;
        vm_vendor: z.ZodString;
        vm_version: z.ZodString;
        using_bundled_jdk: z.ZodBoolean;
        using_compressed_ordinary_object_pointers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
        input_arguments: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    name: z.ZodString;
    os: z.ZodOptional<z.ZodObject<{
        arch: z.ZodString;
        available_processors: z.ZodNumber;
        allocated_processors: z.ZodOptional<z.ZodNumber>;
        name: z.ZodString;
        pretty_name: z.ZodString;
        refresh_interval_in_millis: z.ZodAny;
        version: z.ZodString;
        cpu: z.ZodOptional<z.ZodObject<{
            cache_size: z.ZodString;
            cache_size_in_bytes: z.ZodNumber;
            cores_per_socket: z.ZodNumber;
            mhz: z.ZodNumber;
            model: z.ZodString;
            total_cores: z.ZodNumber;
            total_sockets: z.ZodNumber;
            vendor: z.ZodString;
        }, z.core.$strip>>;
        mem: z.ZodOptional<z.ZodObject<{
            total: z.ZodString;
            total_in_bytes: z.ZodNumber;
        }, z.core.$strip>>;
        swap: z.ZodOptional<z.ZodObject<{
            total: z.ZodString;
            total_in_bytes: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
        classname: z.ZodString;
        description: z.ZodString;
        elasticsearch_version: z.ZodString;
        extended_plugins: z.ZodArray<z.ZodString>;
        has_native_controller: z.ZodBoolean;
        java_version: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        licensed: z.ZodBoolean;
    }, z.core.$strip>>>;
    process: z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        mlockall: z.ZodBoolean;
        refresh_interval_in_millis: z.ZodAny;
    }, z.core.$strip>>;
    roles: z.ZodArray<z.ZodEnum<{
        master: "master";
        ingest: "ingest";
        ml: "ml";
        transform: "transform";
        data: "data";
        client: "client";
        data_hot: "data_hot";
        data_content: "data_content";
        data_warm: "data_warm";
        data_cold: "data_cold";
        data_frozen: "data_frozen";
        remote_cluster_client: "remote_cluster_client";
        voting_only: "voting_only";
        coordinating_only: "coordinating_only";
    }>>;
    settings: z.ZodOptional<z.ZodObject<{
        cluster: z.ZodObject<{
            name: z.ZodString;
            routing: z.ZodOptional<z.ZodObject<{
                allocation: z.ZodOptional<z.ZodObject<{
                    enable: z.ZodOptional<z.ZodEnum<{
                        all: "all";
                        none: "none";
                        primaries: "primaries";
                        new_primaries: "new_primaries";
                    }>>;
                    include: z.ZodOptional<z.ZodObject<{
                        _tier_preference: z.ZodOptional<z.ZodString>;
                        _id: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    initial_recovery: z.ZodOptional<z.ZodObject<{
                        _id: z.ZodOptional<z.ZodString>;
                    }, z.core.$strip>>;
                    disk: z.ZodOptional<z.ZodObject<{
                        threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                rebalance: z.ZodOptional<z.ZodObject<{
                    enable: z.ZodEnum<{
                        all: "all";
                        none: "none";
                        primaries: "primaries";
                        replicas: "replicas";
                    }>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            election: z.ZodObject<{
                strategy: z.ZodString;
            }, z.core.$strip>;
            initial_master_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
            deprecation_indexing: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        node: z.ZodObject<{
            name: z.ZodString;
            attr: z.ZodRecord<z.ZodString, z.ZodAny>;
            max_local_storage_nodes: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        path: z.ZodOptional<z.ZodObject<{
            logs: z.ZodOptional<z.ZodString>;
            home: z.ZodOptional<z.ZodString>;
            repo: z.ZodOptional<z.ZodArray<z.ZodString>>;
            data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>;
        repositories: z.ZodOptional<z.ZodObject<{
            url: z.ZodObject<{
                allowed_urls: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        discovery: z.ZodOptional<z.ZodObject<{
            seed_hosts: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
            type: z.ZodOptional<z.ZodString>;
            seed_providers: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$catchall<z.ZodAny>>>;
        action: z.ZodOptional<z.ZodObject<{
            destructive_requires_name: z.ZodString;
        }, z.core.$strip>>;
        client: z.ZodOptional<z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>>;
        http: z.ZodObject<{
            type: z.ZodUnion<readonly [z.ZodObject<{
                default: z.ZodString;
            }, z.core.$strip>, z.ZodString]>;
            'type.default': z.ZodOptional<z.ZodString>;
            compression: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
            port: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        }, z.core.$strip>;
        bootstrap: z.ZodOptional<z.ZodObject<{
            memory_lock: z.ZodString;
        }, z.core.$strip>>;
        transport: z.ZodObject<{
            type: z.ZodUnion<readonly [z.ZodObject<{
                default: z.ZodString;
            }, z.core.$strip>, z.ZodString]>;
            'type.default': z.ZodOptional<z.ZodString>;
            features: z.ZodOptional<z.ZodObject<{
                'x-pack': z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        network: z.ZodOptional<z.ZodObject<{
            host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        }, z.core.$strip>>;
        xpack: z.ZodOptional<z.ZodObject<{
            license: z.ZodOptional<z.ZodObject<{
                self_generated: z.ZodObject<{
                    type: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            security: z.ZodObject<{
                http: z.ZodOptional<z.ZodObject<{
                    ssl: z.ZodRecord<z.ZodString, z.ZodString>;
                }, z.core.$strip>>;
                enabled: z.ZodString;
                transport: z.ZodOptional<z.ZodObject<{
                    ssl: z.ZodRecord<z.ZodString, z.ZodString>;
                }, z.core.$strip>>;
                authc: z.ZodOptional<z.ZodObject<{
                    realms: z.ZodOptional<z.ZodObject<{
                        file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodString>;
                            order: z.ZodString;
                        }, z.core.$strip>>>;
                        native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodString>;
                            order: z.ZodString;
                        }, z.core.$strip>>>;
                        pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                            enabled: z.ZodOptional<z.ZodString>;
                            order: z.ZodString;
                        }, z.core.$strip>>>;
                    }, z.core.$strip>>;
                    token: z.ZodOptional<z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            notification: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            ml: z.ZodOptional<z.ZodObject<{
                use_auto_machine_memory_percent: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        script: z.ZodOptional<z.ZodObject<{
            allowed_types: z.ZodString;
            disable_max_compilations_rate: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        search: z.ZodOptional<z.ZodObject<{
            remote: z.ZodObject<{
                connect: z.ZodString;
            }, z.core.$strip>;
        }, z.core.$strip>>;
        ingest: z.ZodOptional<z.ZodObject<{
            attachment: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            append: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            csv: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            convert: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            date: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            date_index_name: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            dot_expander: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            enrich: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            fail: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            foreach: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            json: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            user_agent: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            kv: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            geoip: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            grok: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            gsub: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            join: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            lowercase: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            remove: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            rename: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            script: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            set: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            sort: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            split: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            trim: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            uppercase: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            urldecode: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            bytes: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            dissect: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            set_security_user: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            pipeline: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            drop: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            circle: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            inference: z.ZodOptional<z.ZodObject<{
                downloader: z.ZodObject<{
                    enabled: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        core: z.ZodOptional<z.ZodNumber>;
        keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max: z.ZodOptional<z.ZodNumber>;
        queue_size: z.ZodNumber;
        size: z.ZodOptional<z.ZodNumber>;
        type: z.ZodString;
    }, z.core.$strip>>>;
    total_indexing_buffer: z.ZodOptional<z.ZodNumber>;
    total_indexing_buffer_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    transport: z.ZodOptional<z.ZodObject<{
        bound_address: z.ZodArray<z.ZodString>;
        publish_address: z.ZodString;
        profiles: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>>;
    transport_address: z.ZodString;
    transport_version: z.ZodNumber;
    version: z.ZodString;
    modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
        classname: z.ZodString;
        description: z.ZodString;
        elasticsearch_version: z.ZodString;
        extended_plugins: z.ZodArray<z.ZodString>;
        has_native_controller: z.ZodBoolean;
        java_version: z.ZodString;
        name: z.ZodString;
        version: z.ZodString;
        licensed: z.ZodBoolean;
    }, z.core.$strip>>>;
    ingest: z.ZodOptional<z.ZodObject<{
        processors: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    aggregations: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        types: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>>;
    remote_cluster_server: z.ZodOptional<z.ZodObject<{
        bound_address: z.ZodArray<z.ZodString>;
        publish_address: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoNodeInfo = z.infer<typeof NodesInfoNodeInfo>;
export declare const NodesInfoNodesInfoMetric: z.ZodEnum<{
    indices: "indices";
    plugins: "plugins";
    ingest: "ingest";
    aggregations: "aggregations";
    http: "http";
    settings: "settings";
    _all: "_all";
    thread_pool: "thread_pool";
    _none: "_none";
    os: "os";
    process: "process";
    jvm: "jvm";
    transport: "transport";
    remote_cluster_server: "remote_cluster_server";
}>;
export type NodesInfoNodesInfoMetric = z.infer<typeof NodesInfoNodesInfoMetric>;
export declare const NodesInfoNodesInfoMetrics: z.ZodUnion<readonly [z.ZodEnum<{
    indices: "indices";
    plugins: "plugins";
    ingest: "ingest";
    aggregations: "aggregations";
    http: "http";
    settings: "settings";
    _all: "_all";
    thread_pool: "thread_pool";
    _none: "_none";
    os: "os";
    process: "process";
    jvm: "jvm";
    transport: "transport";
    remote_cluster_server: "remote_cluster_server";
}>, z.ZodArray<z.ZodEnum<{
    indices: "indices";
    plugins: "plugins";
    ingest: "ingest";
    aggregations: "aggregations";
    http: "http";
    settings: "settings";
    _all: "_all";
    thread_pool: "thread_pool";
    _none: "_none";
    os: "os";
    process: "process";
    jvm: "jvm";
    transport: "transport";
    remote_cluster_server: "remote_cluster_server";
}>>]>;
export type NodesInfoNodesInfoMetrics = z.infer<typeof NodesInfoNodesInfoMetrics>;
/**
 * Get node information.
 *
 * By default, the API returns all attributes and core settings for cluster nodes.
 */
export declare const NodesInfoRequest: z.ZodObject<{
    node_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    metric: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        indices: "indices";
        plugins: "plugins";
        ingest: "ingest";
        aggregations: "aggregations";
        http: "http";
        settings: "settings";
        _all: "_all";
        thread_pool: "thread_pool";
        _none: "_none";
        os: "os";
        process: "process";
        jvm: "jvm";
        transport: "transport";
        remote_cluster_server: "remote_cluster_server";
    }>, z.ZodArray<z.ZodEnum<{
        indices: "indices";
        plugins: "plugins";
        ingest: "ingest";
        aggregations: "aggregations";
        http: "http";
        settings: "settings";
        _all: "_all";
        thread_pool: "thread_pool";
        _none: "_none";
        os: "os";
        process: "process";
        jvm: "jvm";
        transport: "transport";
        remote_cluster_server: "remote_cluster_server";
    }>>]>>;
    flat_settings: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type NodesInfoRequest = z.infer<typeof NodesInfoRequest>;
export declare const NodesInfoResponseBase: z.ZodObject<{
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        build_flavor: z.ZodString;
        build_hash: z.ZodString;
        build_type: z.ZodString;
        component_versions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        host: z.ZodString;
        http: z.ZodOptional<z.ZodObject<{
            bound_address: z.ZodArray<z.ZodString>;
            max_content_length: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_content_length_in_bytes: z.ZodNumber;
            publish_address: z.ZodString;
        }, z.core.$strip>>;
        index_version: z.ZodNumber;
        ip: z.ZodString;
        jvm: z.ZodOptional<z.ZodObject<{
            gc_collectors: z.ZodArray<z.ZodString>;
            mem: z.ZodObject<{
                direct_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                direct_max_in_bytes: z.ZodNumber;
                heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                heap_init_in_bytes: z.ZodNumber;
                heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                heap_max_in_bytes: z.ZodNumber;
                non_heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                non_heap_init_in_bytes: z.ZodNumber;
                non_heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                non_heap_max_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
            memory_pools: z.ZodArray<z.ZodString>;
            pid: z.ZodNumber;
            start_time_in_millis: z.ZodAny;
            version: z.ZodString;
            vm_name: z.ZodString;
            vm_vendor: z.ZodString;
            vm_version: z.ZodString;
            using_bundled_jdk: z.ZodBoolean;
            using_compressed_ordinary_object_pointers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
            input_arguments: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        name: z.ZodString;
        os: z.ZodOptional<z.ZodObject<{
            arch: z.ZodString;
            available_processors: z.ZodNumber;
            allocated_processors: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            pretty_name: z.ZodString;
            refresh_interval_in_millis: z.ZodAny;
            version: z.ZodString;
            cpu: z.ZodOptional<z.ZodObject<{
                cache_size: z.ZodString;
                cache_size_in_bytes: z.ZodNumber;
                cores_per_socket: z.ZodNumber;
                mhz: z.ZodNumber;
                model: z.ZodString;
                total_cores: z.ZodNumber;
                total_sockets: z.ZodNumber;
                vendor: z.ZodString;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                total: z.ZodString;
                total_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            swap: z.ZodOptional<z.ZodObject<{
                total: z.ZodString;
                total_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
            classname: z.ZodString;
            description: z.ZodString;
            elasticsearch_version: z.ZodString;
            extended_plugins: z.ZodArray<z.ZodString>;
            has_native_controller: z.ZodBoolean;
            java_version: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            licensed: z.ZodBoolean;
        }, z.core.$strip>>>;
        process: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            mlockall: z.ZodBoolean;
            refresh_interval_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        roles: z.ZodArray<z.ZodEnum<{
            master: "master";
            ingest: "ingest";
            ml: "ml";
            transform: "transform";
            data: "data";
            client: "client";
            data_hot: "data_hot";
            data_content: "data_content";
            data_warm: "data_warm";
            data_cold: "data_cold";
            data_frozen: "data_frozen";
            remote_cluster_client: "remote_cluster_client";
            voting_only: "voting_only";
            coordinating_only: "coordinating_only";
        }>>;
        settings: z.ZodOptional<z.ZodObject<{
            cluster: z.ZodObject<{
                name: z.ZodString;
                routing: z.ZodOptional<z.ZodObject<{
                    allocation: z.ZodOptional<z.ZodObject<{
                        enable: z.ZodOptional<z.ZodEnum<{
                            all: "all";
                            none: "none";
                            primaries: "primaries";
                            new_primaries: "new_primaries";
                        }>>;
                        include: z.ZodOptional<z.ZodObject<{
                            _tier_preference: z.ZodOptional<z.ZodString>;
                            _id: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        initial_recovery: z.ZodOptional<z.ZodObject<{
                            _id: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        disk: z.ZodOptional<z.ZodObject<{
                            threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    rebalance: z.ZodOptional<z.ZodObject<{
                        enable: z.ZodEnum<{
                            all: "all";
                            none: "none";
                            primaries: "primaries";
                            replicas: "replicas";
                        }>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                election: z.ZodObject<{
                    strategy: z.ZodString;
                }, z.core.$strip>;
                initial_master_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
                deprecation_indexing: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            node: z.ZodObject<{
                name: z.ZodString;
                attr: z.ZodRecord<z.ZodString, z.ZodAny>;
                max_local_storage_nodes: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            path: z.ZodOptional<z.ZodObject<{
                logs: z.ZodOptional<z.ZodString>;
                home: z.ZodOptional<z.ZodString>;
                repo: z.ZodOptional<z.ZodArray<z.ZodString>>;
                data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>;
            repositories: z.ZodOptional<z.ZodObject<{
                url: z.ZodObject<{
                    allowed_urls: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            discovery: z.ZodOptional<z.ZodObject<{
                seed_hosts: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
                type: z.ZodOptional<z.ZodString>;
                seed_providers: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$catchall<z.ZodAny>>>;
            action: z.ZodOptional<z.ZodObject<{
                destructive_requires_name: z.ZodString;
            }, z.core.$strip>>;
            client: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>>;
            http: z.ZodObject<{
                type: z.ZodUnion<readonly [z.ZodObject<{
                    default: z.ZodString;
                }, z.core.$strip>, z.ZodString]>;
                'type.default': z.ZodOptional<z.ZodString>;
                compression: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                port: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>;
            bootstrap: z.ZodOptional<z.ZodObject<{
                memory_lock: z.ZodString;
            }, z.core.$strip>>;
            transport: z.ZodObject<{
                type: z.ZodUnion<readonly [z.ZodObject<{
                    default: z.ZodString;
                }, z.core.$strip>, z.ZodString]>;
                'type.default': z.ZodOptional<z.ZodString>;
                features: z.ZodOptional<z.ZodObject<{
                    'x-pack': z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            network: z.ZodOptional<z.ZodObject<{
                host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>;
            xpack: z.ZodOptional<z.ZodObject<{
                license: z.ZodOptional<z.ZodObject<{
                    self_generated: z.ZodObject<{
                        type: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                security: z.ZodObject<{
                    http: z.ZodOptional<z.ZodObject<{
                        ssl: z.ZodRecord<z.ZodString, z.ZodString>;
                    }, z.core.$strip>>;
                    enabled: z.ZodString;
                    transport: z.ZodOptional<z.ZodObject<{
                        ssl: z.ZodRecord<z.ZodString, z.ZodString>;
                    }, z.core.$strip>>;
                    authc: z.ZodOptional<z.ZodObject<{
                        realms: z.ZodOptional<z.ZodObject<{
                            file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodString>;
                                order: z.ZodString;
                            }, z.core.$strip>>>;
                            native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodString>;
                                order: z.ZodString;
                            }, z.core.$strip>>>;
                            pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodString>;
                                order: z.ZodString;
                            }, z.core.$strip>>>;
                        }, z.core.$strip>>;
                        token: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodString;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                notification: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                ml: z.ZodOptional<z.ZodObject<{
                    use_auto_machine_memory_percent: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            script: z.ZodOptional<z.ZodObject<{
                allowed_types: z.ZodString;
                disable_max_compilations_rate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                remote: z.ZodObject<{
                    connect: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            ingest: z.ZodOptional<z.ZodObject<{
                attachment: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                append: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                csv: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                convert: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                date: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                date_index_name: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                dot_expander: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enrich: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                fail: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                foreach: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                json: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                user_agent: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                kv: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                geoip: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                grok: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                gsub: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                join: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                lowercase: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                remove: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                rename: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                script: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                set: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                sort: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                split: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                trim: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                uppercase: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                urldecode: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                bytes: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                dissect: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                set_security_user: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                pipeline: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                drop: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                circle: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                inference: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            core: z.ZodOptional<z.ZodNumber>;
            keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max: z.ZodOptional<z.ZodNumber>;
            queue_size: z.ZodNumber;
            size: z.ZodOptional<z.ZodNumber>;
            type: z.ZodString;
        }, z.core.$strip>>>;
        total_indexing_buffer: z.ZodOptional<z.ZodNumber>;
        total_indexing_buffer_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        transport: z.ZodOptional<z.ZodObject<{
            bound_address: z.ZodArray<z.ZodString>;
            publish_address: z.ZodString;
            profiles: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
        transport_address: z.ZodString;
        transport_version: z.ZodNumber;
        version: z.ZodString;
        modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            classname: z.ZodString;
            description: z.ZodString;
            elasticsearch_version: z.ZodString;
            extended_plugins: z.ZodArray<z.ZodString>;
            has_native_controller: z.ZodBoolean;
            java_version: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            licensed: z.ZodBoolean;
        }, z.core.$strip>>>;
        ingest: z.ZodOptional<z.ZodObject<{
            processors: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        aggregations: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            types: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        remote_cluster_server: z.ZodOptional<z.ZodObject<{
            bound_address: z.ZodArray<z.ZodString>;
            publish_address: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    node_stats: z.ZodOptional<z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoResponseBase = z.infer<typeof NodesInfoResponseBase>;
export declare const NodesInfoResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        attributes: z.ZodRecord<z.ZodString, z.ZodString>;
        build_flavor: z.ZodString;
        build_hash: z.ZodString;
        build_type: z.ZodString;
        component_versions: z.ZodRecord<z.ZodString, z.ZodNumber>;
        host: z.ZodString;
        http: z.ZodOptional<z.ZodObject<{
            bound_address: z.ZodArray<z.ZodString>;
            max_content_length: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_content_length_in_bytes: z.ZodNumber;
            publish_address: z.ZodString;
        }, z.core.$strip>>;
        index_version: z.ZodNumber;
        ip: z.ZodString;
        jvm: z.ZodOptional<z.ZodObject<{
            gc_collectors: z.ZodArray<z.ZodString>;
            mem: z.ZodObject<{
                direct_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                direct_max_in_bytes: z.ZodNumber;
                heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                heap_init_in_bytes: z.ZodNumber;
                heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                heap_max_in_bytes: z.ZodNumber;
                non_heap_init: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                non_heap_init_in_bytes: z.ZodNumber;
                non_heap_max: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                non_heap_max_in_bytes: z.ZodNumber;
            }, z.core.$strip>;
            memory_pools: z.ZodArray<z.ZodString>;
            pid: z.ZodNumber;
            start_time_in_millis: z.ZodAny;
            version: z.ZodString;
            vm_name: z.ZodString;
            vm_vendor: z.ZodString;
            vm_version: z.ZodString;
            using_bundled_jdk: z.ZodBoolean;
            using_compressed_ordinary_object_pointers: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
            input_arguments: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        name: z.ZodString;
        os: z.ZodOptional<z.ZodObject<{
            arch: z.ZodString;
            available_processors: z.ZodNumber;
            allocated_processors: z.ZodOptional<z.ZodNumber>;
            name: z.ZodString;
            pretty_name: z.ZodString;
            refresh_interval_in_millis: z.ZodAny;
            version: z.ZodString;
            cpu: z.ZodOptional<z.ZodObject<{
                cache_size: z.ZodString;
                cache_size_in_bytes: z.ZodNumber;
                cores_per_socket: z.ZodNumber;
                mhz: z.ZodNumber;
                model: z.ZodString;
                total_cores: z.ZodNumber;
                total_sockets: z.ZodNumber;
                vendor: z.ZodString;
            }, z.core.$strip>>;
            mem: z.ZodOptional<z.ZodObject<{
                total: z.ZodString;
                total_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
            swap: z.ZodOptional<z.ZodObject<{
                total: z.ZodString;
                total_in_bytes: z.ZodNumber;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        plugins: z.ZodOptional<z.ZodArray<z.ZodObject<{
            classname: z.ZodString;
            description: z.ZodString;
            elasticsearch_version: z.ZodString;
            extended_plugins: z.ZodArray<z.ZodString>;
            has_native_controller: z.ZodBoolean;
            java_version: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            licensed: z.ZodBoolean;
        }, z.core.$strip>>>;
        process: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            mlockall: z.ZodBoolean;
            refresh_interval_in_millis: z.ZodAny;
        }, z.core.$strip>>;
        roles: z.ZodArray<z.ZodEnum<{
            master: "master";
            ingest: "ingest";
            ml: "ml";
            transform: "transform";
            data: "data";
            client: "client";
            data_hot: "data_hot";
            data_content: "data_content";
            data_warm: "data_warm";
            data_cold: "data_cold";
            data_frozen: "data_frozen";
            remote_cluster_client: "remote_cluster_client";
            voting_only: "voting_only";
            coordinating_only: "coordinating_only";
        }>>;
        settings: z.ZodOptional<z.ZodObject<{
            cluster: z.ZodObject<{
                name: z.ZodString;
                routing: z.ZodOptional<z.ZodObject<{
                    allocation: z.ZodOptional<z.ZodObject<{
                        enable: z.ZodOptional<z.ZodEnum<{
                            all: "all";
                            none: "none";
                            primaries: "primaries";
                            new_primaries: "new_primaries";
                        }>>;
                        include: z.ZodOptional<z.ZodObject<{
                            _tier_preference: z.ZodOptional<z.ZodString>;
                            _id: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        initial_recovery: z.ZodOptional<z.ZodObject<{
                            _id: z.ZodOptional<z.ZodString>;
                        }, z.core.$strip>>;
                        disk: z.ZodOptional<z.ZodObject<{
                            threshold_enabled: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                    rebalance: z.ZodOptional<z.ZodObject<{
                        enable: z.ZodEnum<{
                            all: "all";
                            none: "none";
                            primaries: "primaries";
                            replicas: "replicas";
                        }>;
                    }, z.core.$strip>>;
                }, z.core.$strip>>;
                election: z.ZodObject<{
                    strategy: z.ZodString;
                }, z.core.$strip>;
                initial_master_nodes: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
                deprecation_indexing: z.ZodOptional<z.ZodObject<{
                    enabled: z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            node: z.ZodObject<{
                name: z.ZodString;
                attr: z.ZodRecord<z.ZodString, z.ZodAny>;
                max_local_storage_nodes: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            path: z.ZodOptional<z.ZodObject<{
                logs: z.ZodOptional<z.ZodString>;
                home: z.ZodOptional<z.ZodString>;
                repo: z.ZodOptional<z.ZodArray<z.ZodString>>;
                data: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>;
            repositories: z.ZodOptional<z.ZodObject<{
                url: z.ZodObject<{
                    allowed_urls: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            discovery: z.ZodOptional<z.ZodObject<{
                seed_hosts: z.ZodOptional<z.ZodUnion<readonly [z.ZodArray<z.ZodString>, z.ZodString]>>;
                type: z.ZodOptional<z.ZodString>;
                seed_providers: z.ZodOptional<z.ZodArray<z.ZodString>>;
            }, z.core.$catchall<z.ZodAny>>>;
            action: z.ZodOptional<z.ZodObject<{
                destructive_requires_name: z.ZodString;
            }, z.core.$strip>>;
            client: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>>;
            http: z.ZodObject<{
                type: z.ZodUnion<readonly [z.ZodObject<{
                    default: z.ZodString;
                }, z.core.$strip>, z.ZodString]>;
                'type.default': z.ZodOptional<z.ZodString>;
                compression: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodString]>>;
                port: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            }, z.core.$strip>;
            bootstrap: z.ZodOptional<z.ZodObject<{
                memory_lock: z.ZodString;
            }, z.core.$strip>>;
            transport: z.ZodObject<{
                type: z.ZodUnion<readonly [z.ZodObject<{
                    default: z.ZodString;
                }, z.core.$strip>, z.ZodString]>;
                'type.default': z.ZodOptional<z.ZodString>;
                features: z.ZodOptional<z.ZodObject<{
                    'x-pack': z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            network: z.ZodOptional<z.ZodObject<{
                host: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
            }, z.core.$strip>>;
            xpack: z.ZodOptional<z.ZodObject<{
                license: z.ZodOptional<z.ZodObject<{
                    self_generated: z.ZodObject<{
                        type: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                security: z.ZodObject<{
                    http: z.ZodOptional<z.ZodObject<{
                        ssl: z.ZodRecord<z.ZodString, z.ZodString>;
                    }, z.core.$strip>>;
                    enabled: z.ZodString;
                    transport: z.ZodOptional<z.ZodObject<{
                        ssl: z.ZodRecord<z.ZodString, z.ZodString>;
                    }, z.core.$strip>>;
                    authc: z.ZodOptional<z.ZodObject<{
                        realms: z.ZodOptional<z.ZodObject<{
                            file: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodString>;
                                order: z.ZodString;
                            }, z.core.$strip>>>;
                            native: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodString>;
                                order: z.ZodString;
                            }, z.core.$strip>>>;
                            pki: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                                enabled: z.ZodOptional<z.ZodString>;
                                order: z.ZodString;
                            }, z.core.$strip>>>;
                        }, z.core.$strip>>;
                        token: z.ZodOptional<z.ZodObject<{
                            enabled: z.ZodString;
                        }, z.core.$strip>>;
                    }, z.core.$strip>>;
                }, z.core.$strip>;
                notification: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                ml: z.ZodOptional<z.ZodObject<{
                    use_auto_machine_memory_percent: z.ZodOptional<z.ZodBoolean>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
            script: z.ZodOptional<z.ZodObject<{
                allowed_types: z.ZodString;
                disable_max_compilations_rate: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
            search: z.ZodOptional<z.ZodObject<{
                remote: z.ZodObject<{
                    connect: z.ZodString;
                }, z.core.$strip>;
            }, z.core.$strip>>;
            ingest: z.ZodOptional<z.ZodObject<{
                attachment: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                append: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                csv: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                convert: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                date: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                date_index_name: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                dot_expander: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                enrich: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                fail: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                foreach: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                json: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                user_agent: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                kv: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                geoip: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                grok: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                gsub: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                join: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                lowercase: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                remove: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                rename: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                script: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                set: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                sort: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                split: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                trim: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                uppercase: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                urldecode: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                bytes: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                dissect: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                set_security_user: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                pipeline: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                drop: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                circle: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
                inference: z.ZodOptional<z.ZodObject<{
                    downloader: z.ZodObject<{
                        enabled: z.ZodString;
                    }, z.core.$strip>;
                }, z.core.$strip>>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            core: z.ZodOptional<z.ZodNumber>;
            keep_alive: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max: z.ZodOptional<z.ZodNumber>;
            queue_size: z.ZodNumber;
            size: z.ZodOptional<z.ZodNumber>;
            type: z.ZodString;
        }, z.core.$strip>>>;
        total_indexing_buffer: z.ZodOptional<z.ZodNumber>;
        total_indexing_buffer_in_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        transport: z.ZodOptional<z.ZodObject<{
            bound_address: z.ZodArray<z.ZodString>;
            publish_address: z.ZodString;
            profiles: z.ZodRecord<z.ZodString, z.ZodString>;
        }, z.core.$strip>>;
        transport_address: z.ZodString;
        transport_version: z.ZodNumber;
        version: z.ZodString;
        modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
            classname: z.ZodString;
            description: z.ZodString;
            elasticsearch_version: z.ZodString;
            extended_plugins: z.ZodArray<z.ZodString>;
            has_native_controller: z.ZodBoolean;
            java_version: z.ZodString;
            name: z.ZodString;
            version: z.ZodString;
            licensed: z.ZodBoolean;
        }, z.core.$strip>>>;
        ingest: z.ZodOptional<z.ZodObject<{
            processors: z.ZodArray<z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        aggregations: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            types: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        remote_cluster_server: z.ZodOptional<z.ZodObject<{
            bound_address: z.ZodArray<z.ZodString>;
            publish_address: z.ZodString;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    node_stats: z.ZodOptional<z.ZodObject<{
        failures: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>>;
        total: z.ZodNumber;
        successful: z.ZodNumber;
        failed: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesInfoResponse = z.infer<typeof NodesInfoResponse>;
//# sourceMappingURL=nodes_info.d.ts.map