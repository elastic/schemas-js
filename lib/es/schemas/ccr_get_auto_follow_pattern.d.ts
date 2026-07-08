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
export declare const IndexPattern: z.ZodString;
export type IndexPattern = z.infer<typeof IndexPattern>;
export declare const IndexPatterns: z.ZodArray<z.ZodString>;
export type IndexPatterns = z.infer<typeof IndexPatterns>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const CcrGetAutoFollowPatternAutoFollowPatternSummary: z.ZodObject<{
    active: z.ZodBoolean;
    remote_cluster: z.ZodString;
    follow_index_pattern: z.ZodOptional<z.ZodString>;
    leader_index_patterns: z.ZodArray<z.ZodString>;
    leader_index_exclusion_patterns: z.ZodArray<z.ZodString>;
    max_outstanding_read_requests: z.ZodNumber;
}, z.core.$strip>;
export type CcrGetAutoFollowPatternAutoFollowPatternSummary = z.infer<typeof CcrGetAutoFollowPatternAutoFollowPatternSummary>;
export declare const CcrGetAutoFollowPatternAutoFollowPattern: z.ZodObject<{
    name: z.ZodString;
    pattern: z.ZodObject<{
        active: z.ZodBoolean;
        remote_cluster: z.ZodString;
        follow_index_pattern: z.ZodOptional<z.ZodString>;
        leader_index_patterns: z.ZodArray<z.ZodString>;
        leader_index_exclusion_patterns: z.ZodArray<z.ZodString>;
        max_outstanding_read_requests: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type CcrGetAutoFollowPatternAutoFollowPattern = z.infer<typeof CcrGetAutoFollowPatternAutoFollowPattern>;
/**
 * Get auto-follow patterns.
 *
 * Get cross-cluster replication auto-follow patterns.
 */
export declare const CcrGetAutoFollowPatternRequest: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CcrGetAutoFollowPatternRequest = z.infer<typeof CcrGetAutoFollowPatternRequest>;
export declare const CcrGetAutoFollowPatternResponse: z.ZodObject<{
    patterns: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        pattern: z.ZodObject<{
            active: z.ZodBoolean;
            remote_cluster: z.ZodString;
            follow_index_pattern: z.ZodOptional<z.ZodString>;
            leader_index_patterns: z.ZodArray<z.ZodString>;
            leader_index_exclusion_patterns: z.ZodArray<z.ZodString>;
            max_outstanding_read_requests: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CcrGetAutoFollowPatternResponse = z.infer<typeof CcrGetAutoFollowPatternResponse>;
//# sourceMappingURL=ccr_get_auto_follow_pattern.d.ts.map