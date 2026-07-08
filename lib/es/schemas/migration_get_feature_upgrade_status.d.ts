import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export interface ErrorCauseShape {
    type: string;
    reason?: string | null | undefined;
    stack_trace?: string | undefined;
    caused_by?: ErrorCauseShape | undefined;
    root_cause?: ErrorCauseShape[] | undefined;
    suppressed?: ErrorCauseShape[] | undefined;
}
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export declare const ErrorCause: z.ZodObject<{
    type: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    stack_trace: z.ZodOptional<z.ZodString>;
    caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
    root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
}, z.core.$loose>;
export type ErrorCause = z.infer<typeof ErrorCause>;
export declare const IndexName: z.ZodString;
export type IndexName = z.infer<typeof IndexName>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const VersionString: z.ZodString;
export type VersionString = z.infer<typeof VersionString>;
export declare const MigrationGetFeatureUpgradeStatusMigrationStatus: z.ZodEnum<{
    IN_PROGRESS: "IN_PROGRESS";
    NO_MIGRATION_NEEDED: "NO_MIGRATION_NEEDED";
    MIGRATION_NEEDED: "MIGRATION_NEEDED";
    ERROR: "ERROR";
}>;
export type MigrationGetFeatureUpgradeStatusMigrationStatus = z.infer<typeof MigrationGetFeatureUpgradeStatusMigrationStatus>;
export declare const MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo: z.ZodObject<{
    index: z.ZodString;
    version: z.ZodString;
    failure_cause: z.ZodOptional<z.ZodLazy<z.ZodObject<{
        type: z.ZodString;
        reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        stack_trace: z.ZodOptional<z.ZodString>;
        caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
        root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
    }, z.core.$loose>>>;
}, z.core.$strip>;
export type MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo = z.infer<typeof MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo>;
export declare const MigrationGetFeatureUpgradeStatusMigrationFeature: z.ZodObject<{
    feature_name: z.ZodString;
    minimum_index_version: z.ZodString;
    migration_status: z.ZodEnum<{
        IN_PROGRESS: "IN_PROGRESS";
        NO_MIGRATION_NEEDED: "NO_MIGRATION_NEEDED";
        MIGRATION_NEEDED: "MIGRATION_NEEDED";
        ERROR: "ERROR";
    }>;
    indices: z.ZodArray<z.ZodObject<{
        index: z.ZodString;
        version: z.ZodString;
        failure_cause: z.ZodOptional<z.ZodLazy<z.ZodObject<{
            type: z.ZodString;
            reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            stack_trace: z.ZodOptional<z.ZodString>;
            caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
            root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
        }, z.core.$loose>>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type MigrationGetFeatureUpgradeStatusMigrationFeature = z.infer<typeof MigrationGetFeatureUpgradeStatusMigrationFeature>;
/**
 * Get feature migration information.
 *
 * Version upgrades sometimes require changes to how features store configuration information and data in system indices.
 * Check which features need to be migrated and the status of any migrations that are in progress.
 *
 * TIP: This API is designed for indirect use by the Upgrade Assistant.
 * You are strongly recommended to use the Upgrade Assistant.
 */
export declare const MigrationGetFeatureUpgradeStatusRequest: z.ZodObject<{}, z.core.$strip>;
export type MigrationGetFeatureUpgradeStatusRequest = z.infer<typeof MigrationGetFeatureUpgradeStatusRequest>;
export declare const MigrationGetFeatureUpgradeStatusResponse: z.ZodObject<{
    features: z.ZodArray<z.ZodObject<{
        feature_name: z.ZodString;
        minimum_index_version: z.ZodString;
        migration_status: z.ZodEnum<{
            IN_PROGRESS: "IN_PROGRESS";
            NO_MIGRATION_NEEDED: "NO_MIGRATION_NEEDED";
            MIGRATION_NEEDED: "MIGRATION_NEEDED";
            ERROR: "ERROR";
        }>;
        indices: z.ZodArray<z.ZodObject<{
            index: z.ZodString;
            version: z.ZodString;
            failure_cause: z.ZodOptional<z.ZodLazy<z.ZodObject<{
                type: z.ZodString;
                reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
                stack_trace: z.ZodOptional<z.ZodString>;
                caused_by: z.ZodOptional<z.ZodObject</*elided*/ any, z.core.$loose>>;
                root_cause: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
                suppressed: z.ZodOptional<z.ZodArray<z.ZodObject</*elided*/ any, z.core.$loose>>>;
            }, z.core.$loose>>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    migration_status: z.ZodEnum<{
        IN_PROGRESS: "IN_PROGRESS";
        NO_MIGRATION_NEEDED: "NO_MIGRATION_NEEDED";
        MIGRATION_NEEDED: "MIGRATION_NEEDED";
        ERROR: "ERROR";
    }>;
}, z.core.$strip>;
export type MigrationGetFeatureUpgradeStatusResponse = z.infer<typeof MigrationGetFeatureUpgradeStatusResponse>;
//# sourceMappingURL=migration_get_feature_upgrade_status.d.ts.map