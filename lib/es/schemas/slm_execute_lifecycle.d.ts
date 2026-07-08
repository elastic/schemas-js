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
/**
 * Run a policy.
 *
 * Immediately create a snapshot according to the snapshot lifecycle policy without waiting for the scheduled time.
 * The snapshot policy is normally applied according to its schedule, but you might want to manually run a policy before performing an upgrade or other maintenance.
 */
export declare const SlmExecuteLifecycleRequest: z.ZodObject<{
    policy_id: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SlmExecuteLifecycleRequest = z.infer<typeof SlmExecuteLifecycleRequest>;
export declare const SlmExecuteLifecycleResponse: z.ZodObject<{
    snapshot_name: z.ZodString;
}, z.core.$strip>;
export type SlmExecuteLifecycleResponse = z.infer<typeof SlmExecuteLifecycleResponse>;
//# sourceMappingURL=slm_execute_lifecycle.d.ts.map