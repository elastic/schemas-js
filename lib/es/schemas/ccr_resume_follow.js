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
export const IndexName = z.string().meta({ id: 'IndexName' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const long = z.number().meta({ id: 'long' });
/**
 * Resume a follower.
 *
 * Resume a cross-cluster replication follower index that was paused.
 * The follower index could have been paused with the pause follower API.
 * Alternatively it could be paused due to replication that cannot be retried due to failures during following tasks.
 * When this API returns, the follower index will resume fetching operations from the leader index.
 */
export const CcrResumeFollowRequest = z.object({
    ...RequestBase.shape,
    index: IndexName.describe('Name of the follow index to resume following').meta({ found_in: 'path' }),
    master_timeout: Duration.describe('Period to wait for a connection to the master node.').optional().meta({ found_in: 'query' }),
    max_outstanding_read_requests: long.optional().meta({ found_in: 'body' }),
    max_outstanding_write_requests: long.optional().meta({ found_in: 'body' }),
    max_read_request_operation_count: long.optional().meta({ found_in: 'body' }),
    max_read_request_size: z.string().optional().meta({ found_in: 'body' }),
    max_retry_delay: Duration.optional().meta({ found_in: 'body' }),
    max_write_buffer_count: long.optional().meta({ found_in: 'body' }),
    max_write_buffer_size: z.string().optional().meta({ found_in: 'body' }),
    max_write_request_operation_count: long.optional().meta({ found_in: 'body' }),
    max_write_request_size: z.string().optional().meta({ found_in: 'body' }),
    read_poll_timeout: Duration.optional().meta({ found_in: 'body' })
}).meta({ id: 'CcrResumeFollowRequest' });
export const CcrResumeFollowResponse = AcknowledgedResponseBase.meta({ id: 'CcrResumeFollowResponse' });
//# sourceMappingURL=ccr_resume_follow.js.map