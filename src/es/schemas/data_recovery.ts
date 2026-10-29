/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Metadata, integer } from './_types.js'
import { DataRecoveryRecoveryRunStatus } from './data_recovery.list_recoveries.js'
import { DataRecoveryResolvedRecoverySource, DataRecoveryStartRecoveryRecoveryMode } from './data_recovery.start_recovery.js'

export const DataRecoveryPoint = z.object({
  start_time: z.lazy(() => DateTime).describe('The time when creation of the recovery point started.'),
  end_time: z.lazy(() => DateTime).describe('The time when creation of the recovery point completed.')
}).meta({ id: 'DataRecoveryPoint' })
export type DataRecoveryPoint = z.infer<typeof DataRecoveryPoint>

export const DataRecoveryRecoveryProgress = z.object({
  percent_complete: z.lazy(() => integer).describe('The estimated percentage of the recovery that has completed, from `0` to `100`. It is omitted when the progress cannot currently be determined, for example before the recovery starts moving data. It is `100` once the recovery has completed.').optional()
}).meta({ id: 'DataRecoveryRecoveryProgress' })
export type DataRecoveryRecoveryProgress = z.infer<typeof DataRecoveryRecoveryProgress>

export const DataRecoveryRecoveryFailure = z.object({
  source: z.string().describe('The name of the source that could not be recovered.'),
  reason: z.string().describe('A stable, machine-readable code for the reason that the source could not be recovered.'),
  detail: z.string().describe('Human-readable detail about the failure, which can be truncated.').optional()
}).meta({ id: 'DataRecoveryRecoveryFailure' })
export type DataRecoveryRecoveryFailure = z.infer<typeof DataRecoveryRecoveryFailure>

export const DataRecoveryRecovery = z.object({
  recovery_id: z.string().describe('The identifier of the recovery.'),
  status: z.lazy(() => DataRecoveryRecoveryRunStatus).describe('The status of the recovery.'),
  recovery_point: z.lazy(() => DataRecoveryPoint).describe('The recovery point that the sources are recovered from.'),
  destination_mode: z.lazy(() => DataRecoveryStartRecoveryRecoveryMode).describe('Whether the sources are recovered in place (`replace`) or under new names (`rename`).'),
  sources: z.array(z.lazy(() => DataRecoveryResolvedRecoverySource)).describe('The sources that the requested source expressions resolved to, with the destinations that they are recovered to.'),
  metadata: z.lazy(() => Metadata).describe('The custom metadata that was provided when the recovery was started.'),
  started_at: z.lazy(() => DateTime).describe('The time when the recovery started.'),
  completed_at: z.lazy(() => DateTime).describe('The time when the recovery finished. It is omitted while the recovery is running.').optional(),
  progress: DataRecoveryRecoveryProgress.describe('The progress of the recovery.'),
  failures: z.array(DataRecoveryRecoveryFailure).describe('The sources that could not be recovered. The list is capped, so it can be shorter than `total_failure_count`.'),
  total_failure_count: z.lazy(() => integer).describe('The total number of sources that could not be recovered, including any that are not listed in `failures`.')
}).meta({ id: 'DataRecoveryRecovery' })
export type DataRecoveryRecovery = z.infer<typeof DataRecoveryRecovery>
