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
export declare const Indices: z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>;
export type Indices = z.infer<typeof Indices>;
export declare const Metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
export type Metadata = z.infer<typeof Metadata>;
export declare const Name: z.ZodString;
export type Name = z.infer<typeof Name>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const integer: z.ZodNumber;
export type integer = z.infer<typeof integer>;
export declare const SlmConfiguration: z.ZodObject<{
    ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
    indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
    include_global_state: z.ZodOptional<z.ZodBoolean>;
    feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    partial: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type SlmConfiguration = z.infer<typeof SlmConfiguration>;
export declare const SlmRetention: z.ZodObject<{
    expire_after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
    max_count: z.ZodNumber;
    min_count: z.ZodNumber;
}, z.core.$strip>;
export type SlmRetention = z.infer<typeof SlmRetention>;
export declare const WatcherCronExpression: z.ZodString;
export type WatcherCronExpression = z.infer<typeof WatcherCronExpression>;
/**
 * Create or update a policy.
 *
 * Create or update a snapshot lifecycle policy.
 * If the policy already exists, this request increments the policy version.
 * Only the latest version of a policy is stored.
 */
export declare const SlmPutLifecycleRequest: z.ZodObject<{
    policy_id: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    config: z.ZodOptional<z.ZodObject<{
        ignore_unavailable: z.ZodOptional<z.ZodBoolean>;
        indices: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodArray<z.ZodString>]>>;
        include_global_state: z.ZodOptional<z.ZodBoolean>;
        feature_states: z.ZodOptional<z.ZodArray<z.ZodString>>;
        metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        partial: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    name: z.ZodOptional<z.ZodString>;
    repository: z.ZodOptional<z.ZodString>;
    retention: z.ZodOptional<z.ZodObject<{
        expire_after: z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>;
        max_count: z.ZodNumber;
        min_count: z.ZodNumber;
    }, z.core.$strip>>;
    schedule: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SlmPutLifecycleRequest = z.infer<typeof SlmPutLifecycleRequest>;
export declare const SlmPutLifecycleResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type SlmPutLifecycleResponse = z.infer<typeof SlmPutLifecycleResponse>;
//# sourceMappingURL=slm_put_lifecycle.d.ts.map