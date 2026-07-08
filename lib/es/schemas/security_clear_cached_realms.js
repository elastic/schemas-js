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
/**
 * Cause and details about a request failure. This class defines the properties common to all error types.
 * Additional details are also provided, that depend on the error type.
 */
export const ErrorCause = z.looseObject({
    type: z.string().describe('The type of error'),
    reason: z.union([z.string(), z.null()]).describe('A human-readable explanation of the error, in English.').optional(),
    stack_trace: z.string().describe('The server stack trace. Present only if the `error_trace=true` parameter was sent with the request.').optional(),
    get caused_by() { return ErrorCause.optional(); },
    get root_cause() { return ErrorCause.array().optional(); },
    get suppressed() { return ErrorCause.array().optional(); }
}).meta({ id: 'ErrorCause' });
export const Name = z.string().meta({ id: 'Name' });
export const Names = z.union([Name, z.array(Name)]).meta({ id: 'Names' });
export const integer = z.number().meta({ id: 'integer' });
/** Contains statistics about the number of nodes selected by the request. */
export const NodeStatistics = z.object({
    failures: z.array(z.lazy(() => ErrorCause)).optional(),
    total: integer.describe('Total number of nodes selected by the request.'),
    successful: integer.describe('Number of nodes that responded successfully to the request.'),
    failed: integer.describe('Number of nodes that rejected the request or failed to respond. If this value is not 0, a reason for the rejection or failure is included in the response.')
}).meta({ id: 'NodeStatistics' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const SecurityClusterNode = z.object({
    name: Name
}).meta({ id: 'SecurityClusterNode' });
/**
 * Clear the user cache.
 *
 * Evict users from the user cache.
 * You can completely clear the cache or evict specific users.
 *
 * User credentials are cached in memory on each node to avoid connecting to a remote authentication service or hitting the disk for every incoming request.
 * There are realm settings that you can use to configure the user cache.
 * For more information, refer to the documentation about controlling the user cache.
 */
export const SecurityClearCachedRealmsRequest = z.object({
    ...RequestBase.shape,
    realms: Names.describe('A comma-separated list of realms. To clear all realms, use an asterisk (`*`). It does not support other wildcard patterns.').meta({ found_in: 'path' }),
    usernames: z.array(z.string()).describe('A comma-separated list of the users to clear from the cache. If you do not specify this parameter, the API evicts all users from the user cache.').optional().meta({ found_in: 'query' })
}).meta({ id: 'SecurityClearCachedRealmsRequest' });
export const SecurityClearCachedRealmsResponse = z.object({
    node_stats: NodeStatistics,
    cluster_name: Name,
    nodes: z.record(z.string(), SecurityClusterNode)
}).meta({ id: 'SecurityClearCachedRealmsResponse' });
//# sourceMappingURL=security_clear_cached_realms.js.map