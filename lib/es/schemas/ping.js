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
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Ping the cluster.
 *
 * Get information about whether the cluster is running.
 */
export const PingRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'PingRequest' });
export const PingResponse = z.boolean().meta({ id: 'PingResponse' });
//# sourceMappingURL=ping.js.map