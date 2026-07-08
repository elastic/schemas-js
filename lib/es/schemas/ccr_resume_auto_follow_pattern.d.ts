import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const AcknowledgedResponseBase: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type AcknowledgedResponseBase = z.infer<typeof AcknowledgedResponseBase>;
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
/**
 * Resume an auto-follow pattern.
 *
 * Resume a cross-cluster replication auto-follow pattern that was paused.
 * The auto-follow pattern will resume configuring following indices for newly created indices that match its patterns on the remote cluster.
 * Remote indices created while the pattern was paused will also be followed unless they have been deleted or closed in the interim.
 */
export declare const CcrResumeAutoFollowPatternRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CcrResumeAutoFollowPatternRequest = z.infer<typeof CcrResumeAutoFollowPatternRequest>;
export declare const CcrResumeAutoFollowPatternResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type CcrResumeAutoFollowPatternResponse = z.infer<typeof CcrResumeAutoFollowPatternResponse>;
//# sourceMappingURL=ccr_resume_auto_follow_pattern.d.ts.map