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
/**
 * Start rollup jobs.
 *
 * If you try to start a job that does not exist, an exception occurs.
 * If you try to start a job that is already started, nothing happens.
 * @deprecated
 */
export const RollupStartJobRequest = z.object({
    ...RequestBase.shape,
    id: Id.describe('Identifier for the rollup job.').meta({ found_in: 'path' })
}).meta({ id: 'RollupStartJobRequest' });
export const RollupStartJobResponse = z.object({
    started: z.boolean()
}).meta({ id: 'RollupStartJobResponse' });
//# sourceMappingURL=rollup_start_job.js.map