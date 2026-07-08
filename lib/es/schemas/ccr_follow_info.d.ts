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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const CcrFollowInfoFollowerIndexParameters: z.ZodObject<{
    max_outstanding_read_requests: z.ZodOptional<z.ZodNumber>;
    max_outstanding_write_requests: z.ZodOptional<z.ZodNumber>;
    max_read_request_operation_count: z.ZodOptional<z.ZodNumber>;
    max_read_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_write_buffer_count: z.ZodOptional<z.ZodNumber>;
    max_write_buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    max_write_request_operation_count: z.ZodOptional<z.ZodNumber>;
    max_write_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
    read_poll_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CcrFollowInfoFollowerIndexParameters = z.infer<typeof CcrFollowInfoFollowerIndexParameters>;
export declare const CcrFollowInfoFollowerIndexStatus: z.ZodEnum<{
    active: "active";
    paused: "paused";
}>;
export type CcrFollowInfoFollowerIndexStatus = z.infer<typeof CcrFollowInfoFollowerIndexStatus>;
export declare const CcrFollowInfoFollowerIndex: z.ZodObject<{
    follower_index: z.ZodString;
    leader_index: z.ZodString;
    parameters: z.ZodOptional<z.ZodObject<{
        max_outstanding_read_requests: z.ZodOptional<z.ZodNumber>;
        max_outstanding_write_requests: z.ZodOptional<z.ZodNumber>;
        max_read_request_operation_count: z.ZodOptional<z.ZodNumber>;
        max_read_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        max_write_buffer_count: z.ZodOptional<z.ZodNumber>;
        max_write_buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        max_write_request_operation_count: z.ZodOptional<z.ZodNumber>;
        max_write_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
        read_poll_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    }, z.core.$strip>>;
    remote_cluster: z.ZodString;
    status: z.ZodEnum<{
        active: "active";
        paused: "paused";
    }>;
}, z.core.$strip>;
export type CcrFollowInfoFollowerIndex = z.infer<typeof CcrFollowInfoFollowerIndex>;
/**
 * Get follower information.
 *
 * Get information about all cross-cluster replication follower indices.
 * For example, the results include follower index names, leader index names, replication options, and whether the follower indices are active or paused.
 */
export declare const CcrFollowInfoRequest: z.ZodObject<{
    index: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CcrFollowInfoRequest = z.infer<typeof CcrFollowInfoRequest>;
export declare const CcrFollowInfoResponse: z.ZodObject<{
    follower_indices: z.ZodArray<z.ZodObject<{
        follower_index: z.ZodString;
        leader_index: z.ZodString;
        parameters: z.ZodOptional<z.ZodObject<{
            max_outstanding_read_requests: z.ZodOptional<z.ZodNumber>;
            max_outstanding_write_requests: z.ZodOptional<z.ZodNumber>;
            max_read_request_operation_count: z.ZodOptional<z.ZodNumber>;
            max_read_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
            max_write_buffer_count: z.ZodOptional<z.ZodNumber>;
            max_write_buffer_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            max_write_request_operation_count: z.ZodOptional<z.ZodNumber>;
            max_write_request_size: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodString]>>;
            read_poll_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
        }, z.core.$strip>>;
        remote_cluster: z.ZodString;
        status: z.ZodEnum<{
            active: "active";
            paused: "paused";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CcrFollowInfoResponse = z.infer<typeof CcrFollowInfoResponse>;
//# sourceMappingURL=ccr_follow_info.d.ts.map