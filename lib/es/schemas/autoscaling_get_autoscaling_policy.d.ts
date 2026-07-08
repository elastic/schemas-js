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
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const AutoscalingAutoscalingPolicy: z.ZodObject<{
    roles: z.ZodArray<z.ZodString>;
    deciders: z.ZodRecord<z.ZodString, z.ZodAny>;
}, z.core.$strip>;
export type AutoscalingAutoscalingPolicy = z.infer<typeof AutoscalingAutoscalingPolicy>;
/**
 * Get an autoscaling policy.
 *
 * NOTE: This feature is designed for indirect use by Elasticsearch Service, Elastic Cloud Enterprise, and Elastic Cloud on Kubernetes. Direct use is not supported.
 */
export declare const AutoscalingGetAutoscalingPolicyRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingPolicyRequest = z.infer<typeof AutoscalingGetAutoscalingPolicyRequest>;
export declare const AutoscalingGetAutoscalingPolicyResponse: z.ZodObject<{
    roles: z.ZodArray<z.ZodString>;
    deciders: z.ZodRecord<z.ZodString, z.ZodAny>;
}, z.core.$strip>;
export type AutoscalingGetAutoscalingPolicyResponse = z.infer<typeof AutoscalingGetAutoscalingPolicyResponse>;
//# sourceMappingURL=autoscaling_get_autoscaling_policy.d.ts.map