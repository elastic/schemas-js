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
export const Result = z.enum(['created', 'updated', 'deleted', 'not_found', 'noop']).meta({ id: 'Result' });
/** Creates or updates a secret for a Connector. */
export const ConnectorSecretPutRequest = z.object({
    ...RequestBase.shape,
    id: z.string().describe('The ID of the secret').meta({ found_in: 'path' }),
    value: z.string().meta({ found_in: 'body' })
}).meta({ id: 'ConnectorSecretPutRequest' });
export const ConnectorSecretPutResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorSecretPutResponse' });
//# sourceMappingURL=connector_secret_put.js.map