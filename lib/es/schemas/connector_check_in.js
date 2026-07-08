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
export const Result = z.enum(['created', 'updated', 'deleted', 'not_found', 'noop']).meta({ id: 'Result' });
/**
 * Check in a connector.
 *
 * Update the `last_seen` field in the connector and set it to the current timestamp.
 */
export const ConnectorCheckInRequest = z.object({
    ...RequestBase.shape,
    connector_id: Id.describe('The unique identifier of the connector to be checked in').meta({ found_in: 'path' })
}).meta({ id: 'ConnectorCheckInRequest' });
export const ConnectorCheckInResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorCheckInResponse' });
//# sourceMappingURL=connector_check_in.js.map