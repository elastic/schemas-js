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
export const Id = z.string().meta({ id: 'Id' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
export const ConnectorSyncJobTriggerMethod = z.enum(['on_demand', 'scheduled']).meta({ id: 'ConnectorSyncJobTriggerMethod' });
export const ConnectorSyncJobType = z.enum(['full', 'incremental', 'access_control']).meta({ id: 'ConnectorSyncJobType' });
/**
 * Create a connector sync job.
 *
 * Create a connector sync job document in the internal index and initialize its counters and timestamps with default values.
 */
export const ConnectorSyncJobPostRequest = z.object({
    ...RequestBase.shape,
    id: Id.describe('The id of the associated connector').meta({ found_in: 'body' }),
    job_type: ConnectorSyncJobType.optional().meta({ found_in: 'body' }),
    trigger_method: ConnectorSyncJobTriggerMethod.optional().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSyncJobPostRequest' });
export const ConnectorSyncJobPostResponse = z.object({
    id: Id
}).meta({ id: 'ConnectorSyncJobPostResponse' });
//# sourceMappingURL=connector_sync_job_post.js.map