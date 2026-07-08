import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const ClusterInfoTarget: z.ZodEnum<{
    ingest: "ingest";
    script: "script";
    http: "http";
    _all: "_all";
    thread_pool: "thread_pool";
}>;
export type ClusterInfoTarget = z.infer<typeof ClusterInfoTarget>;
export declare const ClusterInfoTargets: z.ZodUnion<readonly [z.ZodEnum<{
    ingest: "ingest";
    script: "script";
    http: "http";
    _all: "_all";
    thread_pool: "thread_pool";
}>, z.ZodArray<z.ZodEnum<{
    ingest: "ingest";
    script: "script";
    http: "http";
    _all: "_all";
    thread_pool: "thread_pool";
}>>]>;
export type ClusterInfoTargets = z.infer<typeof ClusterInfoTargets>;
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Get cluster info.
 *
 * Returns basic information about the cluster.
 */
export declare const ClusterInfoRequest: z.ZodObject<{
    target: z.ZodUnion<readonly [z.ZodEnum<{
        ingest: "ingest";
        script: "script";
        http: "http";
        _all: "_all";
        thread_pool: "thread_pool";
    }>, z.ZodArray<z.ZodEnum<{
        ingest: "ingest";
        script: "script";
        http: "http";
        _all: "_all";
        thread_pool: "thread_pool";
    }>>]>;
}, z.core.$strip>;
export type ClusterInfoRequest = z.infer<typeof ClusterInfoRequest>;
export declare const NodesClient: z.ZodObject<{
    id: z.ZodOptional<z.ZodNumber>;
    agent: z.ZodOptional<z.ZodString>;
    local_address: z.ZodOptional<z.ZodString>;
    remote_address: z.ZodOptional<z.ZodString>;
    last_uri: z.ZodOptional<z.ZodString>;
    opened_time_millis: z.ZodOptional<z.ZodNumber>;
    closed_time_millis: z.ZodOptional<z.ZodNumber>;
    last_request_time_millis: z.ZodOptional<z.ZodNumber>;
    request_count: z.ZodOptional<z.ZodNumber>;
    request_size_bytes: z.ZodOptional<z.ZodNumber>;
    x_opaque_id: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesClient = z.infer<typeof NodesClient>;
export declare const NodesHttp: z.ZodObject<{
    current_open: z.ZodOptional<z.ZodNumber>;
    total_opened: z.ZodOptional<z.ZodNumber>;
    clients: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodNumber>;
        agent: z.ZodOptional<z.ZodString>;
        local_address: z.ZodOptional<z.ZodString>;
        remote_address: z.ZodOptional<z.ZodString>;
        last_uri: z.ZodOptional<z.ZodString>;
        opened_time_millis: z.ZodOptional<z.ZodNumber>;
        closed_time_millis: z.ZodOptional<z.ZodNumber>;
        last_request_time_millis: z.ZodOptional<z.ZodNumber>;
        request_count: z.ZodOptional<z.ZodNumber>;
        request_size_bytes: z.ZodOptional<z.ZodNumber>;
        x_opaque_id: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesHttp = z.infer<typeof NodesHttp>;
export declare const NodesProcessor: z.ZodObject<{
    count: z.ZodOptional<z.ZodNumber>;
    current: z.ZodOptional<z.ZodNumber>;
    failed: z.ZodOptional<z.ZodNumber>;
    time_in_millis: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type NodesProcessor = z.infer<typeof NodesProcessor>;
export declare const NodesKeyedProcessor: z.ZodObject<{
    stats: z.ZodOptional<z.ZodObject<{
        count: z.ZodOptional<z.ZodNumber>;
        current: z.ZodOptional<z.ZodNumber>;
        failed: z.ZodOptional<z.ZodNumber>;
        time_in_millis: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
    type: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type NodesKeyedProcessor = z.infer<typeof NodesKeyedProcessor>;
export declare const NodesIngestStats: z.ZodObject<{
    count: z.ZodNumber;
    current: z.ZodNumber;
    failed: z.ZodNumber;
    processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
        stats: z.ZodOptional<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            current: z.ZodOptional<z.ZodNumber>;
            failed: z.ZodOptional<z.ZodNumber>;
            time_in_millis: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
        type: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    time_in_millis: z.ZodAny;
    ingested_as_first_pipeline_in_bytes: z.ZodNumber;
    produced_as_first_pipeline_in_bytes: z.ZodNumber;
}, z.core.$strip>;
export type NodesIngestStats = z.infer<typeof NodesIngestStats>;
export declare const NodesIngestTotal: z.ZodObject<{
    count: z.ZodNumber;
    current: z.ZodNumber;
    failed: z.ZodNumber;
    time_in_millis: z.ZodAny;
}, z.core.$strip>;
export type NodesIngestTotal = z.infer<typeof NodesIngestTotal>;
export declare const NodesIngest: z.ZodObject<{
    pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        count: z.ZodNumber;
        current: z.ZodNumber;
        failed: z.ZodNumber;
        processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
            stats: z.ZodOptional<z.ZodObject<{
                count: z.ZodOptional<z.ZodNumber>;
                current: z.ZodOptional<z.ZodNumber>;
                failed: z.ZodOptional<z.ZodNumber>;
                time_in_millis: z.ZodOptional<z.ZodAny>;
            }, z.core.$strip>>;
            type: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        time_in_millis: z.ZodAny;
        ingested_as_first_pipeline_in_bytes: z.ZodNumber;
        produced_as_first_pipeline_in_bytes: z.ZodNumber;
    }, z.core.$strip>>>;
    total: z.ZodOptional<z.ZodObject<{
        count: z.ZodNumber;
        current: z.ZodNumber;
        failed: z.ZodNumber;
        time_in_millis: z.ZodAny;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type NodesIngest = z.infer<typeof NodesIngest>;
export declare const NodesThreadCount: z.ZodObject<{
    active: z.ZodOptional<z.ZodNumber>;
    completed: z.ZodOptional<z.ZodNumber>;
    largest: z.ZodOptional<z.ZodNumber>;
    queue: z.ZodOptional<z.ZodNumber>;
    rejected: z.ZodOptional<z.ZodNumber>;
    threads: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesThreadCount = z.infer<typeof NodesThreadCount>;
export declare const NodesContext: z.ZodObject<{
    context: z.ZodOptional<z.ZodString>;
    compilations: z.ZodOptional<z.ZodNumber>;
    cache_evictions: z.ZodOptional<z.ZodNumber>;
    compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type NodesContext = z.infer<typeof NodesContext>;
export declare const NodesScripting: z.ZodObject<{
    cache_evictions: z.ZodOptional<z.ZodNumber>;
    compilations: z.ZodOptional<z.ZodNumber>;
    compilations_history: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
    compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
    contexts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        context: z.ZodOptional<z.ZodString>;
        compilations: z.ZodOptional<z.ZodNumber>;
        cache_evictions: z.ZodOptional<z.ZodNumber>;
        compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type NodesScripting = z.infer<typeof NodesScripting>;
export declare const ClusterInfoResponse: z.ZodObject<{
    cluster_name: z.ZodString;
    http: z.ZodOptional<z.ZodObject<{
        current_open: z.ZodOptional<z.ZodNumber>;
        total_opened: z.ZodOptional<z.ZodNumber>;
        clients: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            agent: z.ZodOptional<z.ZodString>;
            local_address: z.ZodOptional<z.ZodString>;
            remote_address: z.ZodOptional<z.ZodString>;
            last_uri: z.ZodOptional<z.ZodString>;
            opened_time_millis: z.ZodOptional<z.ZodNumber>;
            closed_time_millis: z.ZodOptional<z.ZodNumber>;
            last_request_time_millis: z.ZodOptional<z.ZodNumber>;
            request_count: z.ZodOptional<z.ZodNumber>;
            request_size_bytes: z.ZodOptional<z.ZodNumber>;
            x_opaque_id: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    ingest: z.ZodOptional<z.ZodObject<{
        pipelines: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            count: z.ZodNumber;
            current: z.ZodNumber;
            failed: z.ZodNumber;
            processors: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodObject<{
                stats: z.ZodOptional<z.ZodObject<{
                    count: z.ZodOptional<z.ZodNumber>;
                    current: z.ZodOptional<z.ZodNumber>;
                    failed: z.ZodOptional<z.ZodNumber>;
                    time_in_millis: z.ZodOptional<z.ZodAny>;
                }, z.core.$strip>>;
                type: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            time_in_millis: z.ZodAny;
            ingested_as_first_pipeline_in_bytes: z.ZodNumber;
            produced_as_first_pipeline_in_bytes: z.ZodNumber;
        }, z.core.$strip>>>;
        total: z.ZodOptional<z.ZodObject<{
            count: z.ZodNumber;
            current: z.ZodNumber;
            failed: z.ZodNumber;
            time_in_millis: z.ZodAny;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    thread_pool: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        active: z.ZodOptional<z.ZodNumber>;
        completed: z.ZodOptional<z.ZodNumber>;
        largest: z.ZodOptional<z.ZodNumber>;
        queue: z.ZodOptional<z.ZodNumber>;
        rejected: z.ZodOptional<z.ZodNumber>;
        threads: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>>;
    script: z.ZodOptional<z.ZodObject<{
        cache_evictions: z.ZodOptional<z.ZodNumber>;
        compilations: z.ZodOptional<z.ZodNumber>;
        compilations_history: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodNumber>>;
        compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
        contexts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            context: z.ZodOptional<z.ZodString>;
            compilations: z.ZodOptional<z.ZodNumber>;
            cache_evictions: z.ZodOptional<z.ZodNumber>;
            compilation_limit_triggered: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type ClusterInfoResponse = z.infer<typeof ClusterInfoResponse>;
//# sourceMappingURL=cluster_info.d.ts.map