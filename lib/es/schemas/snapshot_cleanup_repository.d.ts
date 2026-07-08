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
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const SnapshotCleanupRepositoryCleanupRepositoryResults: z.ZodObject<{
    deleted_blobs: z.ZodNumber;
    deleted_bytes: z.ZodNumber;
}, z.core.$strip>;
export type SnapshotCleanupRepositoryCleanupRepositoryResults = z.infer<typeof SnapshotCleanupRepositoryCleanupRepositoryResults>;
/**
 * Clean up the snapshot repository.
 *
 * Trigger the review of the contents of a snapshot repository and delete any stale data not referenced by existing snapshots.
 */
export declare const SnapshotCleanupRepositoryRequest: z.ZodObject<{
    name: z.ZodString;
    master_timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type SnapshotCleanupRepositoryRequest = z.infer<typeof SnapshotCleanupRepositoryRequest>;
export declare const SnapshotCleanupRepositoryResponse: z.ZodObject<{
    results: z.ZodObject<{
        deleted_blobs: z.ZodNumber;
        deleted_bytes: z.ZodNumber;
    }, z.core.$strip>;
}, z.core.$strip>;
export type SnapshotCleanupRepositoryResponse = z.infer<typeof SnapshotCleanupRepositoryResponse>;
//# sourceMappingURL=snapshot_cleanup_repository.d.ts.map