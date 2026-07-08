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
export declare const EpochTime: z.ZodAny;
export type EpochTime = z.infer<typeof EpochTime>;
/**
 * A date and time, either as a string whose format can depend on the context (defaulting to ISO 8601), or a
 * number of milliseconds since the Epoch. Elasticsearch accepts both as input, but will generally output a string
 * representation.
 */
export declare const DateTime: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
export type DateTime = z.infer<typeof DateTime>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
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
export declare const MlTrainedModelAssignmentRoutingTable: z.ZodObject<{
    reason: z.ZodOptional<z.ZodString>;
    routing_state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        stopped: "stopped";
        failed: "failed";
    }>;
    current_allocations: z.ZodNumber;
    target_allocations: z.ZodNumber;
}, z.core.$strip>;
export type MlTrainedModelAssignmentRoutingTable = z.infer<typeof MlTrainedModelAssignmentRoutingTable>;
export declare const MlTrainingPriority: z.ZodEnum<{
    normal: "normal";
    low: "low";
}>;
export type MlTrainingPriority = z.infer<typeof MlTrainingPriority>;
export declare const MlTrainedModelAssignmentTaskParameters: z.ZodObject<{
    model_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    model_id: z.ZodString;
    deployment_id: z.ZodString;
    cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    number_of_allocations: z.ZodNumber;
    priority: z.ZodEnum<{
        normal: "normal";
        low: "low";
    }>;
    per_deployment_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    per_allocation_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
    queue_capacity: z.ZodNumber;
    threads_per_allocation: z.ZodNumber;
}, z.core.$strip>;
export type MlTrainedModelAssignmentTaskParameters = z.infer<typeof MlTrainedModelAssignmentTaskParameters>;
export declare const MlTrainedModelAssignment: z.ZodObject<{
    adaptive_allocations: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        enabled: z.ZodBoolean;
        min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>, z.ZodNull]>>;
    assignment_state: z.ZodEnum<{
        started: "started";
        starting: "starting";
        stopping: "stopping";
        failed: "failed";
    }>;
    max_assigned_allocations: z.ZodOptional<z.ZodNumber>;
    reason: z.ZodOptional<z.ZodString>;
    routing_table: z.ZodRecord<z.ZodString, z.ZodObject<{
        reason: z.ZodOptional<z.ZodString>;
        routing_state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            stopped: "stopped";
            failed: "failed";
        }>;
        current_allocations: z.ZodNumber;
        target_allocations: z.ZodNumber;
    }, z.core.$strip>>;
    start_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
    task_parameters: z.ZodObject<{
        model_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        model_id: z.ZodString;
        deployment_id: z.ZodString;
        cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        number_of_allocations: z.ZodNumber;
        priority: z.ZodEnum<{
            normal: "normal";
            low: "low";
        }>;
        per_deployment_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        per_allocation_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
        queue_capacity: z.ZodNumber;
        threads_per_allocation: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MlTrainedModelAssignment = z.infer<typeof MlTrainedModelAssignment>;
/**
 * Start a trained model deployment.
 *
 * It allocates the model to every machine learning node.
 */
export declare const MlStartTrainedModelDeploymentRequest: z.ZodObject<{
    model_id: z.ZodString;
    cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    number_of_allocations: z.ZodOptional<z.ZodNumber>;
    priority: z.ZodOptional<z.ZodEnum<{
        normal: "normal";
        low: "low";
    }>>;
    queue_capacity: z.ZodOptional<z.ZodNumber>;
    threads_per_allocation: z.ZodOptional<z.ZodNumber>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for: z.ZodOptional<z.ZodEnum<{
        started: "started";
        starting: "starting";
        fully_allocated: "fully_allocated";
    }>>;
    adaptive_allocations: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodBoolean;
        min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlStartTrainedModelDeploymentRequest = z.infer<typeof MlStartTrainedModelDeploymentRequest>;
export declare const MlStartTrainedModelDeploymentResponse: z.ZodObject<{
    assignment: z.ZodObject<{
        adaptive_allocations: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            enabled: z.ZodBoolean;
            min_number_of_allocations: z.ZodOptional<z.ZodNumber>;
            max_number_of_allocations: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>, z.ZodNull]>>;
        assignment_state: z.ZodEnum<{
            started: "started";
            starting: "starting";
            stopping: "stopping";
            failed: "failed";
        }>;
        max_assigned_allocations: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        routing_table: z.ZodRecord<z.ZodString, z.ZodObject<{
            reason: z.ZodOptional<z.ZodString>;
            routing_state: z.ZodEnum<{
                started: "started";
                starting: "starting";
                stopping: "stopping";
                stopped: "stopped";
                failed: "failed";
            }>;
            current_allocations: z.ZodNumber;
            target_allocations: z.ZodNumber;
        }, z.core.$strip>>;
        start_time: z.ZodUnion<readonly [z.ZodString, z.ZodAny]>;
        task_parameters: z.ZodObject<{
            model_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            model_id: z.ZodString;
            deployment_id: z.ZodString;
            cache_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            number_of_allocations: z.ZodNumber;
            priority: z.ZodEnum<{
                normal: "normal";
                low: "low";
            }>;
            per_deployment_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            per_allocation_memory_bytes: z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>;
            queue_capacity: z.ZodNumber;
            threads_per_allocation: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MlStartTrainedModelDeploymentResponse = z.infer<typeof MlStartTrainedModelDeploymentResponse>;
//# sourceMappingURL=ml_start_trained_model_deployment.d.ts.map