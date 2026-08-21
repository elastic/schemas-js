/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { Duration, integer } from './_types.js'

/**
 * Upgrade all transforms.
 *
 * Transforms are compatible across minor versions and between supported major versions.
 * However, over time, the format of transform configuration information may change.
 * This API identifies transforms that have a legacy configuration format and upgrades them to the latest version.
 * It also cleans up the internal data structures that store the transform state and checkpoints.
 * The upgrade does not affect the source and destination indices.
 * The upgrade also does not affect the roles that transforms use when Elasticsearch security features are enabled; the role used to read source data and write to the destination index remains unchanged.
 *
 * If a transform upgrade step fails, the upgrade stops and an error is returned about the underlying issue.
 * Resolve the issue then re-run the process again.
 * A summary is returned when the upgrade is finished.
 *
 * To ensure continuous transforms remain running during a major version upgrade of the cluster – for example, from 7.16 to 8.0 – it is recommended to upgrade transforms before upgrading the cluster.
 * You may want to perform a recent cluster backup prior to the upgrade.
 */
export const TransformUpgradeTransformsRequest = z.object({
  dry_run: z.boolean().describe('When true, the request checks for updates but does not run them.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'TransformUpgradeTransformsRequest' })
export type TransformUpgradeTransformsRequest = z.infer<typeof TransformUpgradeTransformsRequest>

export const TransformUpgradeTransformsResponse = z.object({
  needs_update: z.lazy(() => integer).describe('The number of transforms that need to be upgraded.'),
  no_action: z.lazy(() => integer).describe('The number of transforms that don’t require upgrading.'),
  updated: z.lazy(() => integer).describe('The number of transforms that have been upgraded.')
}).meta({ id: 'TransformUpgradeTransformsResponse' })
export type TransformUpgradeTransformsResponse = z.infer<typeof TransformUpgradeTransformsResponse>
