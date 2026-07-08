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
export declare const TaskId: z.ZodString;
export type TaskId = z.infer<typeof TaskId>;
export declare const EnrichExecutePolicyEnrichPolicyPhase: z.ZodEnum<{
    FAILED: "FAILED";
    COMPLETE: "COMPLETE";
    CANCELLED: "CANCELLED";
    SCHEDULED: "SCHEDULED";
    RUNNING: "RUNNING";
}>;
export type EnrichExecutePolicyEnrichPolicyPhase = z.infer<typeof EnrichExecutePolicyEnrichPolicyPhase>;
export declare const EnrichExecutePolicyExecuteEnrichPolicyStatus: z.ZodObject<{
    phase: z.ZodEnum<{
        FAILED: "FAILED";
        COMPLETE: "COMPLETE";
        CANCELLED: "CANCELLED";
        SCHEDULED: "SCHEDULED";
        RUNNING: "RUNNING";
    }>;
    step: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EnrichExecutePolicyExecuteEnrichPolicyStatus = z.infer<typeof EnrichExecutePolicyExecuteEnrichPolicyStatus>;
/**
 * Run an enrich policy.
 *
 * Create the enrich index for an existing enrich policy.
 */
export declare const EnrichExecutePolicyRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type EnrichExecutePolicyRequest = z.infer<typeof EnrichExecutePolicyRequest>;
export declare const EnrichExecutePolicyResponse: z.ZodObject<{
    status: z.ZodOptional<z.ZodObject<{
        phase: z.ZodEnum<{
            FAILED: "FAILED";
            COMPLETE: "COMPLETE";
            CANCELLED: "CANCELLED";
            SCHEDULED: "SCHEDULED";
            RUNNING: "RUNNING";
        }>;
        step: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    task: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type EnrichExecutePolicyResponse = z.infer<typeof EnrichExecutePolicyResponse>;
//# sourceMappingURL=enrich_execute_policy.d.ts.map