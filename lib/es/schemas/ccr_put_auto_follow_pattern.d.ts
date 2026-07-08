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
/**
 * Create or update auto-follow patterns.
 *
 * Create a collection of cross-cluster replication auto-follow patterns for a remote cluster.
 * Newly created indices on the remote cluster that match any of the patterns are automatically configured as follower indices.
 * Indices on the remote cluster that were created before the auto-follow pattern was created will not be auto-followed even if they match the pattern.
 *
 * This API can also be used to update auto-follow patterns.
 * NOTE: Follower indices that were configured automatically before updating an auto-follow pattern will remain unchanged even if they do not match against the new patterns.
 */
export declare const CcrPutAutoFollowPatternRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    remote_cluster: z.ZodString;
    follow_index_pattern: z.ZodOptional<z.ZodString>;
    leader_index_patterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
    leader_index_exclusion_patterns: z.ZodOptional<z.ZodArray<z.ZodString>>;
    max_outstanding_read_requests: z.ZodOptional<z.ZodNumber>;
    settings: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    max_outstanding_write_requests: z.ZodOptional<z.ZodNumber>;
    read_poll_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_read_request_operation_count: z.ZodOptional<z.ZodNumber>;
    max_read_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_write_buffer_count: z.ZodOptional<z.ZodNumber>;
    max_write_buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_write_request_operation_count: z.ZodOptional<z.ZodNumber>;
    max_write_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
}, z.core.$strip>;
export type CcrPutAutoFollowPatternRequest = z.infer<typeof CcrPutAutoFollowPatternRequest>;
export declare const CcrPutAutoFollowPatternResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type CcrPutAutoFollowPatternResponse = z.infer<typeof CcrPutAutoFollowPatternResponse>;
//# sourceMappingURL=ccr_put_auto_follow_pattern.d.ts.map