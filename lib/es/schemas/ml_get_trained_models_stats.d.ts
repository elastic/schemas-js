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
export declare const DurationValue: z.ZodAny;
export type DurationValue = z.infer<typeof DurationValue>;
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const Ids: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Ids = z.infer<typeof Ids>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const MlAdaptiveAllocationsSettings: z.ZodObject<{
    enabled: z.ZodBoolean;
    min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
    max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlAdaptiveAllocationsSettings = z.infer<typeof MlAdaptiveAllocationsSettings>;
export declare const MlDeploymentAllocationState: z.ZodEnum<{
    started: "started";
    starting: "starting";
    fully_allocated: "fully_allocated";
}>;
export type MlDeploymentAllocationState = z.infer<typeof MlDeploymentAllocationState>;
export declare const MlDeploymentAssignmentState: z.ZodEnum<{
    started: "started";
    starting: "starting";
    stopping: "stopping";
    failed: "failed";
}>;
export type MlDeploymentAssignmentState = z.infer<typeof MlDeploymentAssignmentState>;
export declare const MlRoutingState: z.ZodEnum<{
    started: "started";
    starting: "starting";
    stopping: "stopping";
    stopped: "stopped";
    failed: "failed";
}>;
export type MlRoutingState = z.infer<typeof MlRoutingState>;
export declare const MlTrainedModelAssignmentRoutingStateAndReason: z.ZodObject<{
    reason: z.ZodOptional<z.ZodString>;
    routing_state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        stopped: "stopped";
        failed: "failed";
    }>;
}, z.core.$strip>;
export type MlTrainedModelAssignmentRoutingStateAndReason = z.infer<typeof MlTrainedModelAssignmentRoutingStateAndReason>;
export declare const MlTrainedModelDeploymentAllocationStatus: z.ZodObject<{
    allocation_count: z.ZodNumber;
    state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        fully_allocated: "fully_allocated";
    }>;
    target_allocation_count: z.ZodNumber;
}, z.core.$strip>;
export type MlTrainedModelDeploymentAllocationStatus = z.infer<typeof MlTrainedModelDeploymentAllocationStatus>;
export declare const MlTrainedModelDeploymentNodesStats: z.ZodObject<{
    average_inference_time_ms: z.ZodOptional<z.ZodAny>;
    average_inference_time_ms_last_minute: z.ZodOptional<z.ZodAny>;
    average_inference_time_ms_excluding_cache_hits: z.ZodOptional<z.ZodAny>;
    average_inference_process_memory_rss_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    error_count: z.ZodOptional<z.ZodNumber>;
    inference_count: z.ZodOptional<z.ZodNumber>;
    inference_cache_hit_count: z.ZodOptional<z.ZodNumber>;
    inference_cache_hit_count_last_minute: z.ZodOptional<z.ZodNumber>;
    last_access: z.ZodOptional<z.ZodAny>;
    number_of_allocations: z.ZodOptional<z.ZodNumber>;
    number_of_pending_requests: z.ZodOptional<z.ZodNumber>;
    peak_throughput_per_minute: z.ZodNumber;
    rejected_execution_count: z.ZodOptional<z.ZodNumber>;
    routing_state: z.ZodObject<{
        reason: z.ZodOptional<z.ZodString>;
        routing_state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
        }>;
    }, z.core.$strip>;
    start_time: z.ZodOptional<z.ZodAny>;
    threads_per_allocation: z.ZodOptional<z.ZodNumber>;
    throughput_last_minute: z.ZodNumber;
    timeout_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlTrainedModelDeploymentNodesStats = z.infer<typeof MlTrainedModelDeploymentNodesStats>;
export declare const MlTrainingPriority: z.ZodEnum<{
    normal: "normal";
    low: "low";
}>;
export type MlTrainingPriority = z.infer<typeof MlTrainingPriority>;
export declare const MlTrainedModelDeploymentStats: z.ZodObject<{
    adaptive_allocations: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    allocation_status: z.ZodOptional<z.ZodObject<{
        allocation_count: z.ZodNumber;
        state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            fully_allocated: "fully_allocated";
        }>;
        target_allocation_count: z.ZodNumber;
    }, z.core.$strip>>;
    cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    deployment_id: z.ZodString;
    error_count: z.ZodOptional<z.ZodNumber>;
    inference_count: z.ZodOptional<z.ZodNumber>;
    model_id: z.ZodString;
    nodes: z.ZodArray<z.ZodObject<{
        average_inference_time_ms: z.ZodOptional<z.ZodAny>;
        average_inference_time_ms_last_minute: z.ZodOptional<z.ZodAny>;
        average_inference_time_ms_excluding_cache_hits: z.ZodOptional<z.ZodAny>;
        average_inference_process_memory_rss_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        error_count: z.ZodOptional<z.ZodNumber>;
        inference_count: z.ZodOptional<z.ZodNumber>;
        inference_cache_hit_count: z.ZodOptional<z.ZodNumber>;
        inference_cache_hit_count_last_minute: z.ZodOptional<z.ZodNumber>;
        last_access: z.ZodOptional<z.ZodAny>;
        number_of_allocations: z.ZodOptional<z.ZodNumber>;
        number_of_pending_requests: z.ZodOptional<z.ZodNumber>;
        peak_throughput_per_minute: z.ZodNumber;
        rejected_execution_count: z.ZodOptional<z.ZodNumber>;
        routing_state: z.ZodObject<{
            reason: z.ZodOptional<z.ZodString>;
            routing_state: z.ZodEnum<{
                started: "started";
                starting: "starting";
                stopping: "stopping";
                stopped: "stopped";
                failed: "failed";
            }>;
        }, z.core.$strip>;
        start_time: z.ZodOptional<z.ZodAny>;
        threads_per_allocation: z.ZodOptional<z.ZodNumber>;
        throughput_last_minute: z.ZodNumber;
        timeout_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    number_of_allocations: z.ZodOptional<z.ZodNumber>;
    peak_throughput_per_minute: z.ZodNumber;
    priority: z.ZodEnum<{
        normal: "normal";
        low: "low";
    }>;
    queue_capacity: z.ZodOptional<z.ZodNumber>;
    rejected_execution_count: z.ZodOptional<z.ZodNumber>;
    reason: z.ZodOptional<z.ZodString>;
    start_time: z.ZodAny;
    state: z.ZodOptional<z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        failed: "failed";
    }>>;
    threads_per_allocation: z.ZodOptional<z.ZodNumber>;
    timeout_count: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlTrainedModelDeploymentStats = z.infer<typeof MlTrainedModelDeploymentStats>;
export declare const MlTrainedModelInferenceStats: z.ZodObject<{
    cache_miss_count: z.ZodNumber;
    failure_count: z.ZodNumber;
    inference_count: z.ZodNumber;
    missing_all_fields_count: z.ZodNumber;
    timestamp: z.ZodAny;
}, z.core.$strip>;
export type MlTrainedModelInferenceStats = z.infer<typeof MlTrainedModelInferenceStats>;
export declare const MlTrainedModelSizeStats: z.ZodObject<{
    model_size_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    required_native_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
}, z.core.$strip>;
export type MlTrainedModelSizeStats = z.infer<typeof MlTrainedModelSizeStats>;
export declare const MlTrainedModelStats: z.ZodObject<{
    deployment_stats: z.ZodOptional<z.ZodObject<{
        adaptive_allocations: z.ZodOptional<z.ZodObject<{
            enabled: z.ZodBoolean;
            min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
            max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        allocation_status: z.ZodOptional<z.ZodObject<{
            allocation_count: z.ZodNumber;
            state: z.ZodEnum<{
                started: "started";
                starting: "starting";
                fully_allocated: "fully_allocated";
            }>;
            target_allocation_count: z.ZodNumber;
        }, z.core.$strip>>;
        cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        deployment_id: z.ZodString;
        error_count: z.ZodOptional<z.ZodNumber>;
        inference_count: z.ZodOptional<z.ZodNumber>;
        model_id: z.ZodString;
        nodes: z.ZodArray<z.ZodObject<{
            average_inference_time_ms: z.ZodOptional<z.ZodAny>;
            average_inference_time_ms_last_minute: z.ZodOptional<z.ZodAny>;
            average_inference_time_ms_excluding_cache_hits: z.ZodOptional<z.ZodAny>;
            average_inference_process_memory_rss_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            error_count: z.ZodOptional<z.ZodNumber>;
            inference_count: z.ZodOptional<z.ZodNumber>;
            inference_cache_hit_count: z.ZodOptional<z.ZodNumber>;
            inference_cache_hit_count_last_minute: z.ZodOptional<z.ZodNumber>;
            last_access: z.ZodOptional<z.ZodAny>;
            number_of_allocations: z.ZodOptional<z.ZodNumber>;
            number_of_pending_requests: z.ZodOptional<z.ZodNumber>;
            peak_throughput_per_minute: z.ZodNumber;
            rejected_execution_count: z.ZodOptional<z.ZodNumber>;
            routing_state: z.ZodObject<{
                reason: z.ZodOptional<z.ZodString>;
                routing_state: z.ZodEnum<{
                    started: "started";
                    starting: "starting";
                    stopping: "stopping";
                    stopped: "stopped";
                    failed: "failed";
                }>;
            }, z.core.$strip>;
            start_time: z.ZodOptional<z.ZodAny>;
            threads_per_allocation: z.ZodOptional<z.ZodNumber>;
            throughput_last_minute: z.ZodNumber;
            timeout_count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        number_of_allocations: z.ZodOptional<z.ZodNumber>;
        peak_throughput_per_minute: z.ZodNumber;
        priority: z.ZodEnum<{
            normal: "normal";
            low: "low";
        }>;
        queue_capacity: z.ZodOptional<z.ZodNumber>;
        rejected_execution_count: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        start_time: z.ZodAny;
        state: z.ZodOptional<z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            failed: "failed";
        }>>;
        threads_per_allocation: z.ZodOptional<z.ZodNumber>;
        timeout_count: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    inference_stats: z.ZodOptional<z.ZodObject<{
        cache_miss_count: z.ZodNumber;
        failure_count: z.ZodNumber;
        inference_count: z.ZodNumber;
        missing_all_fields_count: z.ZodNumber;
        timestamp: z.ZodAny;
    }, z.core.$strip>>;
    ingest: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    model_id: z.ZodString;
    model_size_stats: z.ZodObject<{
        model_size_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        required_native_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    }, z.core.$strip>;
    pipeline_count: z.ZodNumber;
}, z.core.$strip>;
export type MlTrainedModelStats = z.infer<typeof MlTrainedModelStats>;
/**
 * Get trained models usage info.
 *
 * You can get usage information for multiple trained
 * models in a single API request by using a comma-separated list of model IDs or a wildcard expression.
 */
export declare const MlGetTrainedModelsStatsRequest: z.ZodObject<{
    model_id: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
    from: z.ZodOptional<z.ZodNumber>;
    size: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export type MlGetTrainedModelsStatsRequest = z.infer<typeof MlGetTrainedModelsStatsRequest>;
export declare const MlGetTrainedModelsStatsResponse: z.ZodObject<{
    count: z.ZodNumber;
    trained_model_stats: z.ZodArray<z.ZodObject<{
        deployment_stats: z.ZodOptional<z.ZodObject<{
            adaptive_allocations: z.ZodOptional<z.ZodObject<{
                enabled: z.ZodBoolean;
                min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
                max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            allocation_status: z.ZodOptional<z.ZodObject<{
                allocation_count: z.ZodNumber;
                state: z.ZodEnum<{
                    started: "started";
                    starting: "starting";
                    fully_allocated: "fully_allocated";
                }>;
                target_allocation_count: z.ZodNumber;
            }, z.core.$strip>>;
            cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            deployment_id: z.ZodString;
            error_count: z.ZodOptional<z.ZodNumber>;
            inference_count: z.ZodOptional<z.ZodNumber>;
            model_id: z.ZodString;
            nodes: z.ZodArray<z.ZodObject<{
                average_inference_time_ms: z.ZodOptional<z.ZodAny>;
                average_inference_time_ms_last_minute: z.ZodOptional<z.ZodAny>;
                average_inference_time_ms_excluding_cache_hits: z.ZodOptional<z.ZodAny>;
                average_inference_process_memory_rss_bytes: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
                error_count: z.ZodOptional<z.ZodNumber>;
                inference_count: z.ZodOptional<z.ZodNumber>;
                inference_cache_hit_count: z.ZodOptional<z.ZodNumber>;
                inference_cache_hit_count_last_minute: z.ZodOptional<z.ZodNumber>;
                last_access: z.ZodOptional<z.ZodAny>;
                number_of_allocations: z.ZodOptional<z.ZodNumber>;
                number_of_pending_requests: z.ZodOptional<z.ZodNumber>;
                peak_throughput_per_minute: z.ZodNumber;
                rejected_execution_count: z.ZodOptional<z.ZodNumber>;
                routing_state: z.ZodObject<{
                    reason: z.ZodOptional<z.ZodString>;
                    routing_state: z.ZodEnum<{
                        started: "started";
                        starting: "starting";
                        stopping: "stopping";
                        stopped: "stopped";
                        failed: "failed";
                    }>;
                }, z.core.$strip>;
                start_time: z.ZodOptional<z.ZodAny>;
                threads_per_allocation: z.ZodOptional<z.ZodNumber>;
                throughput_last_minute: z.ZodNumber;
                timeout_count: z.ZodOptional<z.ZodNumber>;
            }, z.core.$strip>>;
            number_of_allocations: z.ZodOptional<z.ZodNumber>;
            peak_throughput_per_minute: z.ZodNumber;
            priority: z.ZodEnum<{
                normal: "normal";
                low: "low";
            }>;
            queue_capacity: z.ZodOptional<z.ZodNumber>;
            rejected_execution_count: z.ZodOptional<z.ZodNumber>;
            reason: z.ZodOptional<z.ZodString>;
            start_time: z.ZodAny;
            state: z.ZodOptional<z.ZodEnum<{
                started: "started";
                starting: "starting";
                stopping: "stopping";
                failed: "failed";
            }>>;
            threads_per_allocation: z.ZodOptional<z.ZodNumber>;
            timeout_count: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        inference_stats: z.ZodOptional<z.ZodObject<{
            cache_miss_count: z.ZodNumber;
            failure_count: z.ZodNumber;
            inference_count: z.ZodNumber;
            missing_all_fields_count: z.ZodNumber;
            timestamp: z.ZodAny;
        }, z.core.$strip>>;
        ingest: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        model_id: z.ZodString;
        model_size_stats: z.ZodObject<{
            model_size_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            required_native_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        }, z.core.$strip>;
        pipeline_count: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetTrainedModelsStatsResponse = z.infer<typeof MlGetTrainedModelsStatsResponse>;
//# sourceMappingURL=ml_get_trained_models_stats.d.ts.map