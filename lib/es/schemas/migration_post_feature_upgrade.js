/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const MigrationPostFeatureUpgradeMigrationFeature = z.object({
    feature_name: z.string()
}).meta({ id: 'MigrationPostFeatureUpgradeMigrationFeature' });
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
export const MigrationPostFeatureUpgradeRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'MigrationPostFeatureUpgradeRequest' });
export const MigrationPostFeatureUpgradeResponse = z.object({
    accepted: z.boolean(),
    features: z.array(MigrationPostFeatureUpgradeMigrationFeature).optional(),
    reason: z.string().optional()
}).meta({ id: 'MigrationPostFeatureUpgradeResponse' });
//# sourceMappingURL=migration_post_feature_upgrade.js.map