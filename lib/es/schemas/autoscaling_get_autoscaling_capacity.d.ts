import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export declare const Duration: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
export type Duration = z.infer<typeof Duration>;
export declare const NodeName: z.ZodString;
export type NodeName = z.infer<typeof NodeName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const AutoscalingGetAutoscalingCapacityAutoscalingResources: z.ZodObject<{
    storage: z.ZodNumber;
    memory: z.ZodNumber;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityAutoscalingResources = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingResources>;
export declare const AutoscalingGetAutoscalingCapacityAutoscalingCapacity: z.ZodObject<{
    node: z.ZodObject<{
        storage: z.ZodNumber;
        memory: z.ZodNumber;
    }, z.core.$strip>;
    total: z.ZodObject<{
        storage: z.ZodNumber;
        memory: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityAutoscalingCapacity = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingCapacity>;
export declare const AutoscalingGetAutoscalingCapacityAutoscalingDecider: z.ZodObject<{
    required_capacity: z.ZodObject<{
        node: z.ZodObject<{
            storage: z.ZodNumber;
            memory: z.ZodNumber;
        }, z.core.$strip>;
        total: z.ZodObject<{
            storage: z.ZodNumber;
            memory: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    reason_summary: z.ZodOptional<z.ZodString>;
    reason_details: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityAutoscalingDecider = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingDecider>;
export declare const AutoscalingGetAutoscalingCapacityAutoscalingNode: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityAutoscalingNode = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingNode>;
export declare const AutoscalingGetAutoscalingCapacityAutoscalingDeciders: z.ZodObject<{
    required_capacity: z.ZodObject<{
        node: z.ZodObject<{
            storage: z.ZodNumber;
            memory: z.ZodNumber;
        }, z.core.$strip>;
        total: z.ZodObject<{
            storage: z.ZodNumber;
            memory: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    current_capacity: z.ZodObject<{
        node: z.ZodObject<{
            storage: z.ZodNumber;
            memory: z.ZodNumber;
        }, z.core.$strip>;
        total: z.ZodObject<{
            storage: z.ZodNumber;
            memory: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    current_nodes: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>>;
    deciders: z.ZodRecord<z.ZodString, z.ZodObject<{
        required_capacity: z.ZodObject<{
            node: z.ZodObject<{
                storage: z.ZodNumber;
                memory: z.ZodNumber;
            }, z.core.$strip>;
            total: z.ZodObject<{
                storage: z.ZodNumber;
                memory: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        reason_summary: z.ZodOptional<z.ZodString>;
        reason_details: z.ZodOptional<z.ZodAny>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityAutoscalingDeciders = z.infer<typeof AutoscalingGetAutoscalingCapacityAutoscalingDeciders>;
/**
 * Get the autoscaling capacity.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 *
 * This API gets the current autoscaling capacity based on the configured autoscaling policy.
 * It will return information to size the cluster appropriately to the current workload.
 *
 * The `required_capacity` is calculated as the maximum of the `required_capacity` result of all individual deciders that are enabled for the policy.
 *
 * The operator should verify that the `current_nodes` match the operator’s knowledge of the cluster to avoid making autoscaling decisions based on stale or incomplete information.
 *
 * The response contains decider-specific information you can use to diagnose how and why autoscaling determined a certain capacity was required.
 * This information is provided for diagnosis only.
 * Do not use this information to make autoscaling decisions.
 */
export declare const AutoscalingGetAutoscalingCapacityRequest: z.ZodObject<{
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityRequest = z.infer<typeof AutoscalingGetAutoscalingCapacityRequest>;
export declare const AutoscalingGetAutoscalingCapacityResponse: z.ZodObject<{
    policies: z.ZodRecord<z.ZodString, z.ZodObject<{
        required_capacity: z.ZodObject<{
            node: z.ZodObject<{
                storage: z.ZodNumber;
                memory: z.ZodNumber;
            }, z.core.$strip>;
            total: z.ZodObject<{
                storage: z.ZodNumber;
                memory: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        current_capacity: z.ZodObject<{
            node: z.ZodObject<{
                storage: z.ZodNumber;
                memory: z.ZodNumber;
            }, z.core.$strip>;
            total: z.ZodObject<{
                storage: z.ZodNumber;
                memory: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        current_nodes: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
        }, z.core.$strip>>;
        deciders: z.ZodRecord<z.ZodString, z.ZodObject<{
            required_capacity: z.ZodObject<{
                node: z.ZodObject<{
                    storage: z.ZodNumber;
                    memory: z.ZodNumber;
                }, z.core.$strip>;
                total: z.ZodObject<{
                    storage: z.ZodNumber;
                    memory: z.ZodNumber;
                }, z.core.$strip>;
            }, z.core.$strip>;
            reason_summary: z.ZodOptional<z.ZodString>;
            reason_details: z.ZodOptional<z.ZodAny>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingCapacityResponse = z.infer<typeof AutoscalingGetAutoscalingCapacityResponse>;
//# sourceMappingURL=autoscaling_get_autoscaling_capacity.d.ts.map