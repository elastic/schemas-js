import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export declare const TODO: z.ZodRecord<z.ZodString, z.ZodAny>;
export type TODO = z.infer<typeof TODO>;
export declare const RequestBase: z.ZodObject<{}, z.core.$strip>;
export type RequestBase = z.infer<typeof RequestBase>;
export declare const MigrationPostFeatureUpgradeMigrationFeature: z.ZodObject<{
    feature_name: z.ZodString;
}, z.core.$strip>;
export type MigrationPostFeatureUpgradeMigrationFeature = z.infer<typeof MigrationPostFeatureUpgradeMigrationFeature>;
/**
 * Start the feature migration.
 *
 * Version upgrades sometimes require changes to how features store configuration information and data in system indices.
 * This API starts the automatic migration process.
 *
 * Some functionality might be temporarily unavailable during the migration process.
 *
 * TIP: The API is designed for indirect use by the Upgrade Assistant. We strongly recommend you use the Upgrade Assistant.
 */
export declare const MigrationPostFeatureUpgradeRequest: z.ZodObject<{}, z.core.$strip>;
export type MigrationPostFeatureUpgradeRequest = z.infer<typeof MigrationPostFeatureUpgradeRequest>;
export declare const MigrationPostFeatureUpgradeResponse: z.ZodObject<{
    accepted: z.ZodBoolean;
    features: z.ZodOptional<z.ZodArray<z.ZodObject<{
        feature_name: z.ZodString;
    }, z.core.$strip>>>;
    reason: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type MigrationPostFeatureUpgradeResponse = z.infer<typeof MigrationPostFeatureUpgradeResponse>;
//# sourceMappingURL=migration_post_feature_upgrade.d.ts.map