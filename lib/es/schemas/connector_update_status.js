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
export const ConnectorConnectorStatus = z.enum(['created', 'needs_configuration', 'configured', 'connected', 'error']).meta({ id: 'ConnectorConnectorStatus' });
/** Update the connector status. */
export const ConnectorUpdateStatusRequest = z.object({
    ...RequestBase.shape,
    connector_id: Id.describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
    status: ConnectorConnectorStatus.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateStatusRequest' });
export const ConnectorUpdateStatusResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorUpdateStatusResponse' });
//# sourceMappingURL=connector_update_status.js.map