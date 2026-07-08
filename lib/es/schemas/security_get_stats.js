/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-redeclare */
import { z } from 'zod';
/**
 * We are still working on this type, it will arrive soon.
 * If it's critical for you, please open an issue.
 * https://github.com/elastic/elasticsearch-specification
 */
export const TODO = z.record(z.string(), z.any());
export const long = z.number().meta({ id: 'long' });
export const ByteSize = z.union([long, z.string()]).meta({ id: 'ByteSize' });
export const DurationValue = z.any().meta({ id: 'DurationValue' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const integer = z.number().meta({ id: 'integer' });
export const ulong = z.number().meta({ id: 'ulong' });
export const XpackUsageSecurityRolesDlsBitSetCache = z.object({
    count: integer.describe('Number of entries in the cache.'),
    memory: ByteSize.describe('Human-readable amount of memory taken up by the cache.').optional(),
    memory_in_bytes: ulong.describe('Memory taken up by the cache in bytes.'),
    hits: long.describe('Total number of cache hits.'),
    misses: long.describe('Total number of cache misses.'),
    evictions: long.describe('Total number of cache evictions.'),
    hits_time_in_millis: DurationValue.describe('Total combined time spent in cache for hits in milliseconds.'),
    misses_time_in_millis: DurationValue.describe('Total combined time spent in cache for misses in milliseconds.')
}).meta({ id: 'XpackUsageSecurityRolesDlsBitSetCache' });
export const XpackUsageSecurityRolesDls = z.object({
    bit_set_cache: XpackUsageSecurityRolesDlsBitSetCache
}).meta({ id: 'XpackUsageSecurityRolesDls' });
export const SecurityRolesStats = z.object({
    dls: XpackUsageSecurityRolesDls.describe('Document-level security (DLS) statistics.')
}).meta({ id: 'SecurityRolesStats' });
export const SecurityNodeSecurityStats = z.object({
    roles: SecurityRolesStats.describe('Role statistics.')
}).meta({ id: 'SecurityNodeSecurityStats' });
/**
 * Get security stats.
 *
 * Gather security usage statistics from all node(s) within the cluster.
 */
export const SecurityGetStatsRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'SecurityGetStatsRequest' });
export const SecurityGetStatsResponse = z.object({
    nodes: z.record(z.string(), SecurityNodeSecurityStats).describe('A map of node IDs to security statistics for that node.')
}).meta({ id: 'SecurityGetStatsResponse' });
//# sourceMappingURL=security_get_stats.js.map