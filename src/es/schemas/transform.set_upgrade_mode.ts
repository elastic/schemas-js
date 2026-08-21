/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { AcknowledgedResponseBase, Duration } from './_types.js'

/**
 * Set upgrade_mode for transform indices.
 *
 * Sets a cluster wide upgrade_mode setting that prepares transform
 * indices for an upgrade.
 * When upgrading your cluster, in some circumstances you must restart your
 * nodes and reindex your transform indices. In those circumstances,
 * there must be no transforms running. You can close the transforms,
 * do the upgrade, then open all the transforms again. Alternatively,
 * you can use this API to temporarily halt tasks associated with the transforms
 * and prevent new transforms from opening. You can also use this API
 * during upgrades that do not require you to reindex your transform
 * indices, though stopping transforms is not a requirement in that case.
 * You can see the current value for the upgrade_mode setting by using the get
 * transform info API.
 */
export const TransformSetUpgradeModeRequest = z.object({
  enabled: z.boolean().describe('When `true`, it enables `upgrade_mode` which temporarily halts all transform tasks and prohibits new transform tasks from starting.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The time to wait for the request to be completed.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformSetUpgradeModeRequest' })
export type TransformSetUpgradeModeRequest = z.infer<typeof TransformSetUpgradeModeRequest>

export const TransformSetUpgradeModeResponse = z.lazy(() => AcknowledgedResponseBase).meta({ id: 'TransformSetUpgradeModeResponse' })
export type TransformSetUpgradeModeResponse = z.infer<typeof TransformSetUpgradeModeResponse>
