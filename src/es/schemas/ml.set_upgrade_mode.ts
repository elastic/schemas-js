/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Set upgrade_mode for ML indices.
 *
 * Sets a cluster wide upgrade_mode setting that prepares machine learning
 * indices for an upgrade.
 * When upgrading your cluster, in some circumstances you must restart your
 * nodes and reindex your machine learning indices. In those circumstances,
 * there must be no machine learning jobs running. You can close the machine
 * learning jobs, do the upgrade, then open all the jobs again. Alternatively,
 * you can use this API to temporarily halt tasks associated with the jobs and
 * datafeeds and prevent new jobs from opening. You can also use this API
 * during upgrades that do not require you to reindex your machine learning
 * indices, though stopping jobs is not a requirement in that case.
 * You can see the current value for the upgrade_mode setting by using the get
 * machine learning info API.
 */
export const MlSetUpgradeModeRequest = z.object({
  enabled: z.boolean().describe('When `true`, it enables `upgrade_mode` which temporarily halts all job and datafeed tasks and prohibits new job and datafeed tasks from starting.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'MlSetUpgradeModeRequest' })
export type MlSetUpgradeModeRequest = z.infer<typeof MlSetUpgradeModeRequest>

export const MlSetUpgradeModeResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'MlSetUpgradeModeResponse' })
export type MlSetUpgradeModeResponse = z.infer<typeof MlSetUpgradeModeResponse>
