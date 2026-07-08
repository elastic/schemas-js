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
export const AcknowledgedResponseBase = z.object({
    acknowledged: z.boolean().describe('For a successful response, this value is always true. On failure, an exception is returned instead.')
}).meta({ id: 'AcknowledgedResponseBase' });
/**
 * A duration. Units can be `nanos`, `micros`, `ms` (milliseconds), `s` (seconds), `m` (minutes), `h` (hours) and
 * `d` (days). Also accepts "0" without a unit and "-1" to indicate an unspecified value.
 */
export const Duration = z.union([z.string(), z.literal(-1), z.literal(0)]).meta({ id: 'Duration' });
export const Name = z.string().meta({ id: 'Name' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Delete auto-follow patterns.
 *
 * Delete a collection of cross-cluster replication auto-follow patterns.
 */
export const CcrDeleteAutoFollowPatternRequest = z.object({
    ...RequestBase.shape,
    name: Name.describe('The auto-follow pattern collection to delete.').meta({ found_in: 'path' }),
    master_timeout: Duration.describe('The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout.').optional().meta({ found_in: 'query' })
}).meta({ id: 'CcrDeleteAutoFollowPatternRequest' });
export const CcrDeleteAutoFollowPatternResponse = AcknowledgedResponseBase.meta({ id: 'CcrDeleteAutoFollowPatternResponse' });
//# sourceMappingURL=ccr_delete_auto_follow_pattern.js.map