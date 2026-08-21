/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

export const MigrationPostFeatureUpgradeMigrationFeature = z.object({
  feature_name: z.string()
}).meta({ id: 'MigrationPostFeatureUpgradeMigrationFeature' })
export type MigrationPostFeatureUpgradeMigrationFeature = z.infer<typeof MigrationPostFeatureUpgradeMigrationFeature>

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
}).meta({ id: 'MigrationPostFeatureUpgradeRequest' })
export type MigrationPostFeatureUpgradeRequest = z.infer<typeof MigrationPostFeatureUpgradeRequest>

export const MigrationPostFeatureUpgradeResponse = z.object({
  accepted: z.boolean(),
  features: z.array(MigrationPostFeatureUpgradeMigrationFeature).optional(),
  reason: z.string().optional()
}).meta({ id: 'MigrationPostFeatureUpgradeResponse' })
export type MigrationPostFeatureUpgradeResponse = z.infer<typeof MigrationPostFeatureUpgradeResponse>
