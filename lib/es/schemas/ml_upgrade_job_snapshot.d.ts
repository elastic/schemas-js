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
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const NodeId: z.ZodString;
export type NodeId = z.infer<typeof NodeId>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
/**
 * Upgrade a snapshot.
 *
 * Upgrade an anomaly detection model snapshot to the latest major version.
 * Over time, older snapshot formats are deprecated and removed. Anomaly
 * detection jobs support only snapshots that are from the current or previous
 * major version.
 * This API provides a means to upgrade a snapshot to the current major version.
 * This aids in preparing the cluster for an upgrade to the next major version.
 * Only one snapshot per anomaly detection job can be upgraded at a time and the
 * upgraded snapshot cannot be the current snapshot of the anomaly detection
 * job.
 */
export declare const MlUpgradeJobSnapshotRequest: z.ZodObject<{
    job_id: z.ZodString;
    snapshot_id: z.ZodString;
    wait_for_completion: z.ZodOptional<z.ZodBoolean>;
    timeout: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodLiteral<-1>, z.ZodLiteral<0>]>>;
}, z.core.$strip>;
export type MlUpgradeJobSnapshotRequest = z.infer<typeof MlUpgradeJobSnapshotRequest>;
export declare const MlUpgradeJobSnapshotResponse: z.ZodObject<{
    node: z.ZodString;
    completed: z.ZodBoolean;
}, z.core.$strip>;
export type MlUpgradeJobSnapshotResponse = z.infer<typeof MlUpgradeJobSnapshotResponse>;
//# sourceMappingURL=ml_upgrade_job_snapshot.d.ts.map