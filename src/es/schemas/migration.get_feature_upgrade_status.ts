/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { ErrorCause, IndexName, VersionString } from './_types.js'

export const MigrationGetFeatureUpgradeStatusMigrationStatus = z.enum(['NO_MIGRATION_NEEDED', 'MIGRATION_NEEDED', 'IN_PROGRESS', 'ERROR']).meta({ id: 'MigrationGetFeatureUpgradeStatusMigrationStatus' })
export type MigrationGetFeatureUpgradeStatusMigrationStatus = z.infer<typeof MigrationGetFeatureUpgradeStatusMigrationStatus>

export const MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo = z.object({
  index: z.lazy(() => IndexName),
  version: z.lazy(() => VersionString),
  failure_cause: z.lazy(() => ErrorCause).optional()
}).meta({ id: 'MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo' })
export type MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo = z.infer<typeof MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo>

export const MigrationGetFeatureUpgradeStatusMigrationFeature = z.object({
  feature_name: z.string(),
  minimum_index_version: z.lazy(() => VersionString),
  migration_status: MigrationGetFeatureUpgradeStatusMigrationStatus,
  indices: z.array(MigrationGetFeatureUpgradeStatusMigrationFeatureIndexInfo)
}).meta({ id: 'MigrationGetFeatureUpgradeStatusMigrationFeature' })
export type MigrationGetFeatureUpgradeStatusMigrationFeature = z.infer<typeof MigrationGetFeatureUpgradeStatusMigrationFeature>

/**
 * Get feature migration information.
 *
 * Version upgrades sometimes require changes to how features store configuration information and data in system indices.
 * Check which features need to be migrated and the status of any migrations that are in progress.
 *
 * TIP: This API is designed for indirect use by the Upgrade Assistant.
 * You are strongly recommended to use the Upgrade Assistant.
 */
export const MigrationGetFeatureUpgradeStatusRequest = z.object({
}).meta({ id: 'MigrationGetFeatureUpgradeStatusRequest' })
export type MigrationGetFeatureUpgradeStatusRequest = z.infer<typeof MigrationGetFeatureUpgradeStatusRequest>

export const MigrationGetFeatureUpgradeStatusResponse = z.object({
  features: z.array(MigrationGetFeatureUpgradeStatusMigrationFeature),
  migration_status: MigrationGetFeatureUpgradeStatusMigrationStatus
}).meta({ id: 'MigrationGetFeatureUpgradeStatusResponse' })
export type MigrationGetFeatureUpgradeStatusResponse = z.infer<typeof MigrationGetFeatureUpgradeStatusResponse>
