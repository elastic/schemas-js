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
export const LifecycleOperationMode = z.enum(['RUNNING', 'STOPPING', 'STOPPED']).meta({ id: 'LifecycleOperationMode' });
export const RequestBase = z.object({}).meta({ id: 'RequestBase' });
/**
 * Get the ILM status.
 *
 * Get the current index lifecycle management status.
 */
export const IlmGetStatusRequest = z.object({
    ...RequestBase.shape
}).meta({ id: 'IlmGetStatusRequest' });
export const IlmGetStatusResponse = z.object({
    operation_mode: LifecycleOperationMode
}).meta({ id: 'IlmGetStatusResponse' });
//# sourceMappingURL=ilm_get_status.js.map