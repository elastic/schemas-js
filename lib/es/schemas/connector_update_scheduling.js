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
export const ConnectorConnectorScheduling = z.object({
    enabled: z.boolean(),
    interval: z.string().describe('The interval is expressed using the crontab syntax')
}).meta({ id: 'ConnectorConnectorScheduling' });
export const ConnectorSchedulingConfiguration = z.object({
    access_control: ConnectorConnectorScheduling.optional(),
    full: ConnectorConnectorScheduling.optional(),
    incremental: ConnectorConnectorScheduling.optional()
}).meta({ id: 'ConnectorSchedulingConfiguration' });
/** Update the connector scheduling. */
export const ConnectorUpdateSchedulingRequest = z.object({
    ...RequestBase.shape,
    connector_id: Id.describe('The unique identifier of the connector to be updated').meta({ found_in: 'path' }),
    scheduling: ConnectorSchedulingConfiguration.meta({ found_in: 'body' })
}).meta({ id: 'ConnectorUpdateSchedulingRequest' });
export const ConnectorUpdateSchedulingResponse = z.object({
    result: Result
}).meta({ id: 'ConnectorUpdateSchedulingResponse' });
//# sourceMappingURL=connector_update_scheduling.js.map