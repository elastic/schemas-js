/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { DateTime, Duration, EpochTime, Id, Name, Names, Uuid, VersionNumber } from './_types.js'
import { SlmConfiguration, SlmRetention } from './slm.put_lifecycle.js'
import { WatcherCronExpression } from './watcher.js'
import { SlmStatistics } from './xpack.usage.js'

export const SlmInProgress = z.object({
  name: z.lazy(() => Name),
  start_time_millis: z.lazy(() => EpochTime),
  state: z.string(),
  uuid: z.lazy(() => Uuid)
}).meta({ id: 'SlmInProgress' })
export type SlmInProgress = z.infer<typeof SlmInProgress>

export const SlmInvocation = z.object({
  snapshot_name: z.lazy(() => Name),
  time: z.lazy(() => DateTime)
}).meta({ id: 'SlmInvocation' })
export type SlmInvocation = z.infer<typeof SlmInvocation>

export const SlmPolicy = z.object({
  config: SlmConfiguration.optional(),
  name: z.lazy(() => Name),
  repository: z.string(),
  retention: SlmRetention.optional(),
  schedule: z.lazy(() => WatcherCronExpression)
}).meta({ id: 'SlmPolicy' })
export type SlmPolicy = z.infer<typeof SlmPolicy>

export const SlmSnapshotLifecycle = z.object({
  in_progress: SlmInProgress.optional(),
  last_failure: SlmInvocation.optional(),
  last_success: SlmInvocation.optional(),
  modified_date: z.lazy(() => DateTime).describe('The last time the policy was modified.').optional(),
  modified_date_millis: z.lazy(() => EpochTime),
  next_execution: z.lazy(() => DateTime).describe('The next time the policy will run.').optional(),
  next_execution_millis: z.lazy(() => EpochTime),
  policy: SlmPolicy,
  version: z.lazy(() => VersionNumber).describe('The version of the snapshot policy. Only the latest version is stored and incremented when the policy is updated.'),
  stats: SlmStatistics
}).meta({ id: 'SlmSnapshotLifecycle' })
export type SlmSnapshotLifecycle = z.infer<typeof SlmSnapshotLifecycle>

/**
 * Get policy information.
 *
 * Get snapshot lifecycle policy definitions and information about the latest snapshot attempts.
 */
export const SlmGetLifecycleRequest = z.object({
  policy_id: z.lazy(() => Names).describe('A comma-separated list of snapshot lifecycle policy identifiers.').optional().meta({ found_in: 'path' }),
  master_timeout: z.lazy(() => Duration).describe('The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' }),
  timeout: z.lazy(() => Duration).describe('The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SlmGetLifecycleRequest' })
export type SlmGetLifecycleRequest = z.infer<typeof SlmGetLifecycleRequest>

export const SlmGetLifecycleResponse = z.record(z.lazy(() => Id), SlmSnapshotLifecycle).meta({ id: 'SlmGetLifecycleResponse' })
export type SlmGetLifecycleResponse = z.infer<typeof SlmGetLifecycleResponse>
