/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, Id, NodeId } from './_types.js'

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
export const MlUpgradeJobSnapshotRequest = z.object({
  job_id: z.lazy(() => Id).describe('Identifier for the anomaly detection job.').meta({ found_in: 'path' }),
  snapshot_id: z.lazy(() => Id).describe('A numerical character string that uniquely identifies the model snapshot.').meta({ found_in: 'path' }),
  wait_for_completion: z.boolean().describe('When true, the API won’t respond until the upgrade is complete. Otherwise, it responds as soon as the upgrade task is assigned to a node.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Controls the time to wait for the request to complete.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlUpgradeJobSnapshotRequest' })
export type MlUpgradeJobSnapshotRequest = z.infer<typeof MlUpgradeJobSnapshotRequest>

export const MlUpgradeJobSnapshotResponse = z.object({
  node: z.lazy(() => NodeId).describe('The ID of the node that the upgrade task was started on if it is still running. In serverless this will be the "serverless".'),
  completed: z.boolean().describe('When true, this means the task is complete. When false, it is still running.')
}).meta({ id: 'MlUpgradeJobSnapshotResponse' })
export type MlUpgradeJobSnapshotResponse = z.infer<typeof MlUpgradeJobSnapshotResponse>
