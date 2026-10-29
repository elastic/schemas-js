/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, Metadata } from './_types.js'
import { DataRecoveryPoint } from './data_recovery.js'
import { DataRecoverySourceType } from './data_recovery.get_recovery_sources.js'

export const DataRecoveryStartRecoveryRecoveryMode = z.enum(['replace', 'rename']).meta({ id: 'DataRecoveryStartRecoveryRecoveryMode' })
export type DataRecoveryStartRecoveryRecoveryMode = z.infer<typeof DataRecoveryStartRecoveryRecoveryMode>

export const DataRecoveryResolvedRecoverySource = z.object({
  source: z.string().describe('The name of the index or data stream in the recovery point.'),
  type: z.lazy(() => DataRecoverySourceType).describe('The type of the source.'),
  destination: z.string().describe('The name of the index or data stream that the source is recovered to.')
}).meta({ id: 'DataRecoveryResolvedRecoverySource' })
export type DataRecoveryResolvedRecoverySource = z.infer<typeof DataRecoveryResolvedRecoverySource>

export const DataRecoveryStartRecoveryRenameStrategy = z.object({
  prefix: z.string().describe('Text to add at the start of the name of each recovered source. At least one of `prefix` and `suffix` must be set to a non-empty value, and both can be set together.').optional(),
  suffix: z.string().describe('Text to add at the end of the name of each recovered source. At least one of `prefix` and `suffix` must be set to a non-empty value, and both can be set together.').optional()
}).meta({ id: 'DataRecoveryStartRecoveryRenameStrategy' })
export type DataRecoveryStartRecoveryRenameStrategy = z.infer<typeof DataRecoveryStartRecoveryRenameStrategy>

/**
 * Start a recovery.
 *
 * Start recovering indices and data streams from a recovery point.
 * This API is intended for internal operator use.
 * Depending on the mode, the sources are either replaced with their state at the recovery point, over the data that currently exists,
 * or recovered under new names.
 * The recovery runs in the background, so the API returns with a `202 Accepted` status once it has started.
 */
export const DataRecoveryStartRecoveryRequest = z.object({
  master_timeout: z.lazy(() => Duration).describe('The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicate that the request should never timeout, set it to `-1`.').optional().meta({ found_in: 'query' }),
  recovery_point_end_time: z.lazy(() => DateTime).describe('The exact end time of the recovery point to recover from, as a date or epoch milliseconds. An `end_time` returned when listing recovery points can be passed back as it is.').meta({ found_in: 'body' }),
  sources: z.array(z.string()).describe('The sources to recover. Each value is an index or data stream expression. Wildcards and exclusions prefixed with `-` are supported. The list must not be empty and must not contain blank values.').meta({ found_in: 'body' }),
  mode: z.lazy(() => DataRecoveryStartRecoveryRecoveryMode).describe('How to recover the sources: `replace` recovers them in place, over the data that currently exists, and `rename` recovers them under new names.').meta({ found_in: 'body' }),
  rename_strategy: DataRecoveryStartRecoveryRenameStrategy.describe('How to derive the new name of each recovered source from its name. Required when `mode` is `rename`, and not allowed when `mode` is `replace`.').optional().meta({ found_in: 'body' }),
  metadata: z.lazy(() => Metadata).describe('Custom metadata for the recovery.').optional().meta({ found_in: 'body' })
}).meta({ id: 'DataRecoveryStartRecoveryRequest' })
export type DataRecoveryStartRecoveryRequest = z.infer<typeof DataRecoveryStartRecoveryRequest>

export const DataRecoveryStartRecoveryResponse = z.object({
  recovery_id: z.string().describe('The identifier of the recovery that was started.'),
  recovery_point: z.lazy(() => DataRecoveryPoint).describe('The recovery point that the sources are recovered from.'),
  resolved_sources: z.array(z.lazy(() => DataRecoveryResolvedRecoverySource)).describe('The sources that the requested source expressions resolved to, with the destinations that they are recovered to.')
}).meta({ id: 'DataRecoveryStartRecoveryResponse' })
export type DataRecoveryStartRecoveryResponse = z.infer<typeof DataRecoveryStartRecoveryResponse>
