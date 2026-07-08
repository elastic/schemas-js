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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Delete a model snapshot.
 *
 * You cannot delete the active model snapshot. To delete that snapshot, first
 * revert to a different one. To identify the active model snapshot, refer to
 * the `model_snapshot_id` in the results from the get jobs API.
 */
export declare const MlDeleteModelSnapshotRequest: z.ZodObject<{
    job_id: z.ZodString;
    snapshot_id: z.ZodString;
}, z.core.$strip>;
export type MlDeleteModelSnapshotRequest = z.infer<typeof MlDeleteModelSnapshotRequest>;
export declare const MlDeleteModelSnapshotResponse: z.ZodObject<{
    acknowledged: z.ZodBoolean;
}, z.core.$strip>;
export type MlDeleteModelSnapshotResponse = z.infer<typeof MlDeleteModelSnapshotResponse>;
//# sourceMappingURL=ml_delete_model_snapshot.d.ts.map