import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const Id: z.ZodString;
export type Id = z.infer<typeof Id>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const long: z.ZodNumber;
export type long = z.infer<typeof long>;
export declare const MlSnapshotUpgradeState: z.ZodEnum<{
    stopped: "stopped";
    failed: "failed";
    loading_old_state: "loading_old_state";
    saving_new_state: "saving_new_state";
}>;
export type MlSnapshotUpgradeState = z.infer<typeof MlSnapshotUpgradeState>;
export declare const MlModelSnapshotUpgrade: z.ZodObject<{
    job_id: z.ZodString;
    snapshot_id: z.ZodString;
    state: z.ZodEnum<{
        stopped: "stopped";
        failed: "failed";
        loading_old_state: "loading_old_state";
        saving_new_state: "saving_new_state";
    }>;
    assignment_explanation: z.ZodString;
}, z.core.$strip>;
export type MlModelSnapshotUpgrade = z.infer<typeof MlModelSnapshotUpgrade>;
/** Get anomaly detection job model snapshot upgrade usage info. */
export declare const MlGetModelSnapshotUpgradeStatsRequest: z.ZodObject<{
    job_id: z.ZodString;
    snapshot_id: z.ZodString;
    allow_no_match: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>;
export type MlGetModelSnapshotUpgradeStatsRequest = z.infer<typeof MlGetModelSnapshotUpgradeStatsRequest>;
export declare const MlGetModelSnapshotUpgradeStatsResponse: z.ZodObject<{
    count: z.ZodNumber;
    model_snapshot_upgrades: z.ZodArray<z.ZodObject<{
        job_id: z.ZodString;
        snapshot_id: z.ZodString;
        state: z.ZodEnum<{
            stopped: "stopped";
            failed: "failed";
            loading_old_state: "loading_old_state";
            saving_new_state: "saving_new_state";
        }>;
        assignment_explanation: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MlGetModelSnapshotUpgradeStatsResponse = z.infer<typeof MlGetModelSnapshotUpgradeStatsResponse>;
//# sourceMappingURL=ml_get_model_snapshot_upgrade_stats.d.ts.map