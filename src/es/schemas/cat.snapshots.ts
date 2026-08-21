/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod'

import { SpecUtilsStringified } from './_spec_utils.js'
import { Duration, Names, TimeOfDay, integer } from './_types.js'

export const CatCatSnapshotsColumn = z.union([z.enum(['id', 'snapshot', 'repository', 're', 'repo', 'status', 's', 'start_epoch', 'ste', 'startEpoch', 'start_time', 'sti', 'startTime', 'end_epoch', 'ete', 'endEpoch', 'end_time', 'eti', 'endTime', 'duration', 'dur', 'indices', 'i', 'successful_shards', 'ss', 'failed_shards', 'fs', 'total_shards', 'ts', 'reason', 'r']), z.string()]).meta({ id: 'CatCatSnapshotsColumn' })
export type CatCatSnapshotsColumn = z.infer<typeof CatCatSnapshotsColumn>

export const CatCatSnapshotsColumns = z.union([CatCatSnapshotsColumn, z.array(CatCatSnapshotsColumn)]).meta({ id: 'CatCatSnapshotsColumns' })
export type CatCatSnapshotsColumns = z.infer<typeof CatCatSnapshotsColumns>

/**
 * Get snapshot information.
 *
 * Get information about the snapshots stored in one or more repositories.
 * A snapshot is a backup of an index or running Elasticsearch cluster.
 * IMPORTANT: cat APIs are only intended for human consumption using the command line or Kibana console. They are not intended for use by applications. For application consumption, use the get snapshot API.
 */
export const CatSnapshotsRequest = z.object({
  repository: z.lazy(() => Names).describe('A comma-separated list of snapshot repositories used to limit the request. Accepts wildcard expressions. `_all` returns all repositories. If any repository fails during the request, Elasticsearch returns an error.').optional().meta({ found_in: 'path' }),
  ignore_unavailable: z.boolean().describe('If `true`, the response does not include information from unavailable snapshots.').optional().meta({ found_in: 'query' }),
  h: CatCatSnapshotsColumns.describe('A comma-separated list of columns names to display. It supports simple wildcards.').optional().meta({ found_in: 'query' }),
  s: z.lazy(() => Names).describe('List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name.').optional().meta({ found_in: 'query' }),
  master_timeout: z.lazy(() => Duration).describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CatSnapshotsRequest' })
export type CatSnapshotsRequest = z.infer<typeof CatSnapshotsRequest>

export const WatcherHourAndMinute = z.object({
  hour: z.array(z.lazy(() => integer)),
  minute: z.array(z.lazy(() => integer))
}).meta({ id: 'WatcherHourAndMinute' })
export type WatcherHourAndMinute = z.infer<typeof WatcherHourAndMinute>

/** A time of day, expressed either as `hh:mm`, `noon`, `midnight`, or an hour/minutes structure. */
export const WatcherScheduleTimeOfDay = z.union([z.string(), WatcherHourAndMinute]).meta({ id: 'WatcherScheduleTimeOfDay' })
export type WatcherScheduleTimeOfDay = z.infer<typeof WatcherScheduleTimeOfDay>

export const CatSnapshotsSnapshotsRecord = z.object({
  id: z.string().describe('The unique identifier for the snapshot.').optional(),
  snapshot: z.string().describe('The unique identifier for the snapshot.').optional(),
  repository: z.string().describe('The repository name.').optional(),
  re: z.string().describe('The repository name.').optional(),
  repo: z.string().describe('The repository name.').optional(),
  status: z.string().describe('The state of the snapshot process. Returned values include: `FAILED`: The snapshot process failed. `INCOMPATIBLE`: The snapshot process is incompatible with the current cluster version. `IN_PROGRESS`: The snapshot process started but has not completed. `PARTIAL`: The snapshot process completed with a partial success. `SUCCESS`: The snapshot process completed with a full success.').optional(),
  s: z.string().describe('The state of the snapshot process. Returned values include: `FAILED`: The snapshot process failed. `INCOMPATIBLE`: The snapshot process is incompatible with the current cluster version. `IN_PROGRESS`: The snapshot process started but has not completed. `PARTIAL`: The snapshot process completed with a partial success. `SUCCESS`: The snapshot process completed with a full success.').optional(),
  start_epoch: z.lazy(() => SpecUtilsStringified).describe('The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process started.').optional(),
  ste: z.lazy(() => SpecUtilsStringified).describe('The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process started.').optional(),
  startEpoch: z.lazy(() => SpecUtilsStringified).describe('The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process started.').optional(),
  start_time: z.lazy(() => WatcherScheduleTimeOfDay).describe('The time (HH:MM:SS) at which the snapshot process started.').optional(),
  sti: z.lazy(() => WatcherScheduleTimeOfDay).describe('The time (HH:MM:SS) at which the snapshot process started.').optional(),
  startTime: z.lazy(() => WatcherScheduleTimeOfDay).describe('The time (HH:MM:SS) at which the snapshot process started.').optional(),
  end_epoch: z.lazy(() => SpecUtilsStringified).describe('The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process ended.').optional(),
  ete: z.lazy(() => SpecUtilsStringified).describe('The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process ended.').optional(),
  endEpoch: z.lazy(() => SpecUtilsStringified).describe('The Unix epoch time (seconds since 1970-01-01 00:00:00) at which the snapshot process ended.').optional(),
  end_time: z.lazy(() => TimeOfDay).describe('The time (HH:MM:SS) at which the snapshot process ended.').optional(),
  eti: z.lazy(() => TimeOfDay).describe('The time (HH:MM:SS) at which the snapshot process ended.').optional(),
  endTime: z.lazy(() => TimeOfDay).describe('The time (HH:MM:SS) at which the snapshot process ended.').optional(),
  duration: z.lazy(() => Duration).describe('The time it took the snapshot process to complete, in time units.').optional(),
  dur: z.lazy(() => Duration).describe('The time it took the snapshot process to complete, in time units.').optional(),
  indices: z.string().describe('The number of indices in the snapshot.').optional(),
  i: z.string().describe('The number of indices in the snapshot.').optional(),
  successful_shards: z.string().describe('The number of successful shards in the snapshot.').optional(),
  ss: z.string().describe('The number of successful shards in the snapshot.').optional(),
  failed_shards: z.string().describe('The number of failed shards in the snapshot.').optional(),
  fs: z.string().describe('The number of failed shards in the snapshot.').optional(),
  total_shards: z.string().describe('The total number of shards in the snapshot.').optional(),
  ts: z.string().describe('The total number of shards in the snapshot.').optional(),
  reason: z.string().describe('The reason for any snapshot failures.').optional(),
  r: z.string().describe('The reason for any snapshot failures.').optional()
}).meta({ id: 'CatSnapshotsSnapshotsRecord' })
export type CatSnapshotsSnapshotsRecord = z.infer<typeof CatSnapshotsSnapshotsRecord>

export const CatSnapshotsResponse = z.array(CatSnapshotsSnapshotsRecord).meta({ id: 'CatSnapshotsResponse' })
export type CatSnapshotsResponse = z.infer<typeof CatSnapshotsResponse>
