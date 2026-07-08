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
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
/**
 * Resume a follower.
 *
 * Resume a cross-cluster replication follower index that was paused.
 * The follower index could have been paused with the pause follower API.
 * Alternatively it could be paused due to replication that cannot be retried due to failures during following tasks.
 * When this API returns, the follower index will resume fetching operations from the leader index.
 */
export declare const CcrResumeFollowRequest: z.ZodObject<{
    index: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_outstanding_read_requests: z.ZodOptional<z.ZodNumber>;
    max_outstanding_write_requests: z.ZodOptional<z.ZodNumber>;
    max_read_request_operation_count: z.ZodOptional<z.ZodNumber>;
    max_read_request_size: z.ZodOptional<z.ZodString>;
    max_retry_delay: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    max_write_buffer_count: z.ZodOptional<z.ZodNumber>;
    max_write_buffer_size: z.ZodOptional<z.ZodString>;
    max_write_request_operation_count: z.ZodOptional<z.ZodNumber>;
    max_write_request_size: z.ZodOptional<z.ZodString>;
    read_poll_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type CcrResumeFollowRequest = z.infer<typeof CcrResumeFollowRequest>;
export declare const CcrResumeFollowResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type CcrResumeFollowResponse = z.infer<typeof CcrResumeFollowResponse>;
//# sourceMappingURL=ccr_resume_follow.d.ts.map