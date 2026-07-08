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
export declare const SnapshotVerifyRepositoryCompactNodeInfo: z.ZodObject<{
    name: z.ZodString;
}, z.core.$strip>;
export type SnapshotVerifyRepositoryCompactNodeInfo = z.infer<typeof SnapshotVerifyRepositoryCompactNodeInfo>;
/**
 * Verify a snapshot repository.
 *
 * Check for common misconfigurations in a snapshot repository.
 */
export declare const SnapshotVerifyRepositoryRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SnapshotVerifyRepositoryRequest = z.infer<typeof SnapshotVerifyRepositoryRequest>;
export declare const SnapshotVerifyRepositoryResponse: z.ZodObject<{
    nodes: z.ZodRecord<z.ZodString, z.ZodObject<{
        name: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type SnapshotVerifyRepositoryResponse = z.infer<typeof SnapshotVerifyRepositoryResponse>;
//# sourceMappingURL=snapshot_verify_repository.d.ts.map